#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const META_KEYS = [
  'adoption_maturity',
  'enterprise_relevance',
  'evidence_strength',
];

function fail(message) {
  console.error(`use-case-meta: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {
    atlasRoot: process.cwd(),
    stage: undefined,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--atlas-root') {
      args.atlasRoot = resolve(argv[++i] ?? '');
    } else if (arg === '--stage') {
      args.stage = argv[++i] ?? '';
    } else {
      fail(`unknown argument: ${arg}`);
    }
  }

  return args;
}

function listUseCaseFiles(useCaseRoot) {
  const files = [];
  for (const stage of readdirSync(useCaseRoot)) {
    const stageDir = join(useCaseRoot, stage);
    if (!statSync(stageDir).isDirectory()) continue;
    for (const entry of readdirSync(stageDir)) {
      if (!entry.endsWith('.md')) continue;
      files.push({
        stage,
        path: join(stageDir, entry),
      });
    }
  }
  files.sort((a, b) => a.path.localeCompare(b.path));
  return files;
}

function readFrontmatter(text, filePath) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) fail(`missing frontmatter in ${filePath}`);
  return match[1];
}

function readMetaFromFrontmatter(text, filePath) {
  const body = readFrontmatter(text, filePath);
  const meta = {};
  for (const key of META_KEYS) {
    const match = body.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    meta[key] = match ? match[1].trim() : undefined;
  }
  return meta;
}

function auditUseCaseMeta(useCaseRoot, stageFilter) {
  const files = listUseCaseFiles(useCaseRoot).filter((file) =>
    stageFilter ? file.stage === stageFilter : true,
  );

  if (stageFilter && files.length === 0) {
    fail(`no use-case files found for stage ${JSON.stringify(stageFilter)}`);
  }

  const summary = {
    total: files.length,
    complete: 0,
    missingAny: 0,
    missingByKey: Object.fromEntries(META_KEYS.map((key) => [key, 0])),
  };
  const missingFiles = [];

  for (const file of files) {
    const text = readFileSync(file.path, 'utf8');
    const meta = readMetaFromFrontmatter(text, file.path);
    const missing = META_KEYS.filter((key) => !meta[key]);
    if (missing.length === 0) {
      summary.complete += 1;
      continue;
    }
    summary.missingAny += 1;
    for (const key of missing) summary.missingByKey[key] += 1;
    missingFiles.push({
      path: file.path,
      missing,
    });
  }

  console.log(JSON.stringify(summary, null, 2));
  if (missingFiles.length === 0) return;

  console.log('');
  console.log('Missing meta fields:');
  for (const item of missingFiles.slice(0, 50)) {
    console.log(`- ${relative(process.cwd(), item.path)} :: ${item.missing.join(', ')}`);
  }
  if (missingFiles.length > 50) {
    console.log(`- ... ${missingFiles.length - 50} more`);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const useCaseRoot = join(args.atlasRoot, 'src/content/use_cases');
  if (!existsSync(useCaseRoot)) fail(`use-case root does not exist: ${useCaseRoot}`);
  auditUseCaseMeta(useCaseRoot, args.stage);
}

main();
