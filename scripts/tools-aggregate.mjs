#!/usr/bin/env node

// One-shot exploration: aggregates per-tool stats from use_cases/**/*.md
// to validate the proposed columns of the upcoming /tools page.
// Not part of the build — `npm run inspect:tools` runs it ad-hoc.

import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import yaml from 'js-yaml';

const root = resolve(process.cwd(), 'src');
const ucRoot = join(root, 'content', 'use_cases');
const toolsYaml = yaml.load(readFileSync(join(root, 'data', 'tools.yaml'), 'utf8'));

const toolsById = new Map(toolsYaml.map((t) => [t.id, t]));

function listFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = readdirSync(full, { withFileTypes: true }).length === undefined ? null : null;
    try {
      const sub = readdirSync(full);
      for (const f of sub) if (f.endsWith('.md')) out.push(join(full, f));
    } catch {
      if (full.endsWith('.md')) out.push(full);
    }
  }
  return out;
}

function parseFrontmatter(file) {
  const txt = readFileSync(file, 'utf8');
  const m = txt.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  return yaml.load(m[1]);
}

const stats = new Map(); // tool_id -> aggregated
function get(id) {
  if (!stats.has(id)) {
    stats.set(id, {
      id,
      name: toolsById.get(id)?.name ?? `??? ${id}`,
      knownInToolsYaml: toolsById.has(id),
      category: toolsById.get(id)?.category ?? '?',
      maturity: toolsById.get(id)?.maturity ?? '?',
      ucCount: 0,
      stages: new Set(),
      roles: new Set(),
      fit: { good_fit: 0, conditional: 0, partial: 0, immature: 0 },
      caveatsCount: 0,
    });
  }
  return stats.get(id);
}

const ucFiles = listFiles(ucRoot);
let parsedUcs = 0;
for (const file of ucFiles) {
  const fm = parseFrontmatter(file);
  if (!fm || !Array.isArray(fm.tools)) continue;
  parsedUcs++;
  const stage = fm.stage;
  const ucRoles = fm.roles ?? [];
  for (const t of fm.tools) {
    const s = get(t.id);
    s.ucCount++;
    s.stages.add(stage);
    for (const r of ucRoles) s.roles.add(r);
    if (s.fit[t.fit] !== undefined) s.fit[t.fit]++;
    if (Array.isArray(t.caveats)) s.caveatsCount += t.caveats.length;
  }
}

// caveats_level v1: total count, log buckets — biased by UC count
function caveatsLevelTotal(n) {
  if (n <= 2) return 1;
  if (n <= 5) return 2;
  if (n <= 10) return 3;
  return 4;
}

// caveats_level v2: per UC (Caveats pro Empfehlung) — Tool-Qualität, nicht Häufigkeit
function caveatsLevelPerUc(perUc) {
  if (perUc < 2) return 1;
  if (perUc < 4) return 2;
  if (perUc < 7) return 3;
  return 4;
}

const rows = [...stats.values()].map((r) => {
  const perUc = r.caveatsCount / r.ucCount;
  return {
    ...r,
    stagesCount: r.stages.size,
    rolesCount: r.roles.size,
    caveatsPerUc: Number(perUc.toFixed(1)),
    caveatsLevelTotal: caveatsLevelTotal(r.caveatsCount),
    caveatsLevelPerUc: caveatsLevelPerUc(perUc),
  };
});

// distributions
const dist = (key) => {
  const c = new Map();
  for (const r of rows) c.set(r[key], (c.get(r[key]) ?? 0) + 1);
  return [...c.entries()].sort((a, b) => a[0] - b[0]);
};

console.log(`\nParsed ${parsedUcs} use cases · ${rows.length} distinct tools referenced\n`);

console.log('— Tools in tools.yaml not referenced in any UC:');
const unused = toolsYaml.filter((t) => !stats.has(t.id));
console.log(`  ${unused.length} of ${toolsYaml.length} tools never referenced`);
if (unused.length > 0 && unused.length <= 20) {
  for (const t of unused) console.log(`  · ${t.id}`);
}

console.log('\n— Tools referenced but NOT in tools.yaml (would break build):');
const orphans = rows.filter((r) => !r.knownInToolsYaml);
for (const r of orphans) console.log(`  · ${r.id}`);
if (orphans.length === 0) console.log('  (none — good)');

console.log('\n— Distribution: UC count per tool');
console.log(`  ${dist('ucCount').map(([k, v]) => `${k}:${v}`).join('  ')}`);

console.log('\n— Distribution: stages count per tool');
console.log(`  ${dist('stagesCount').map(([k, v]) => `${k}:${v}`).join('  ')}`);

console.log('\n— Distribution: roles count per tool');
console.log(`  ${dist('rolesCount').map(([k, v]) => `${k}:${v}`).join('  ')}`);

console.log('\n— Distribution: caveats_level v1 (total, log-bucketed)');
console.log(`  ${dist('caveatsLevelTotal').map(([k, v]) => `${k}:${v}`).join('  ')}`);

console.log('\n— Distribution: caveats_level v2 (per UC — quality, not frequency)');
console.log(`  ${dist('caveatsLevelPerUc').map(([k, v]) => `${k}:${v}`).join('  ')}`);

console.log('\n— Top 15 by UC count:');
const top = [...rows].sort((a, b) => b.ucCount - a.ucCount).slice(0, 15);
const pad = (s, n) => String(s).padEnd(n);
console.log(
  `  ${pad('TOOL', 28)} ${pad('UC', 4)} ${pad('STG', 4)} ${pad('ROL', 4)} ${pad('CVT#', 5)} ${pad('CV/UC', 6)} ${pad('LV1', 4)} ${pad('LV2', 4)} ${pad('FIT MIX', 26)}`,
);
for (const r of top) {
  const fitStr = Object.entries(r.fit)
    .filter(([, v]) => v > 0)
    .map(([k, v]) => `${v}×${k.slice(0, 4)}`)
    .join(' ');
  console.log(
    `  ${pad(r.name, 28)} ${pad(r.ucCount, 4)} ${pad(r.stagesCount, 4)} ${pad(r.rolesCount, 4)} ${pad(r.caveatsCount, 5)} ${pad(r.caveatsPerUc, 6)} ${pad(r.caveatsLevelTotal, 4)} ${pad(r.caveatsLevelPerUc, 4)} ${pad(fitStr, 26)}`,
  );
}

console.log('\n— Bottom: tools referenced exactly once (sample of 10):');
const ones = rows.filter((r) => r.ucCount === 1).slice(0, 10);
for (const r of ones) console.log(`  · ${r.name} (${r.id})`);
