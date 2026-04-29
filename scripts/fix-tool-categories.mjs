#!/usr/bin/env node

// One-shot Migration: ersetzt den kaputten Schema-Hint
// `category: <coding|testing|discovery|support|...>` in tools.yaml durch
// gezielt zugeordnete Kategorien. Mapping ist explizit unten gepflegt; das
// Skript schreibt tools.yaml in-place und protokolliert jede Änderung.
//
// Hintergrund: Beim Seed-Import ist statt eines konkreten Wertes der
// Schema-Hint in die yaml gerutscht.
//
// Lauf:  node scripts/fix-tool-categories.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Mapping aus heuristischer Zuordnung — auf existierende Kategorien beschränkt:
// audit, coding, data, deployment-devops, discovery, grc, hr, observability,
// other, productivity, sales, security, siem, support, testing.
//
// EA/Architektur-Tools (LeanIX, ARIS, Sparx, Bizzdesign, CAST Imaging, vFunction)
// landen unter `other`, weil bislang keine Architektur-Kategorie existiert.
const FIXES = {
  // Workspace-/Generic-AI-Assistenten
  'aleph-alpha-com-pharia-ai': 'productivity',
  'aleph-alpha-com-pharia-assistant': 'productivity',
  'mistral-ai-news-le-chat-enterprise': 'productivity',
  'workspace-google-com-solutions-ai': 'productivity',
  'templafy-com': 'productivity',

  // Enterprise Architecture / Modeling
  'bizzdesign-com': 'other',
  'castsoftware-com-products-imaging': 'other',
  'leanix-net': 'other',
  'leanix-net-en': 'other',
  'softwareag-com-en-corporate-platform-aris-html': 'other',
  'sparxsystems-com': 'other',
  'vfunction-com': 'other',

  // Code-Quality / -Analyse
  'codescene-com': 'coding',

  // Governance / Compliance
  'credo-ai': 'grc',
  'mega-com-solutions-ai-governance': 'grc',
  'metricstream-com': 'grc',
  'servicenow-com-products-ai-control-tower-html': 'grc',

  // Observability / LLM-Tracing
  'datadoghq-com-product-llm-observability': 'observability',
  'dynatrace-com-platform-artificial-intelligence': 'observability',
  'learn-microsoft-com-azure-api-management-genai-gateway-capabilities': 'observability',
  'traceloop-com': 'observability',

  // Testing / Test-Mgmt
  'engflow-com': 'testing',
  'katalon-com': 'testing',
  'kusho-ai': 'testing',
  'marketplace-atlassian-com-search-query-ai-20test-20case-20generator': 'testing',
  'parasoft-com': 'testing',
  'perforce-com-products-helix-alm': 'testing',
  'testsigma-com-ai-agents': 'testing',

  // Customer Support / Contact Center
  'enghouseinteractive-com': 'support',
  'genesys-com-capabilities-real-time-translation': 'support',
  'i2x-ai': 'support',
  'kore-ai': 'support',
  'moin-ai': 'support',
  'nice-com-products-cxone': 'support',
  'pega-com-products-customer-service': 'support',
  'sap-com-products-crm-service-cloud-html': 'support',
  'sap-com-products-crm-service-html': 'support',
  'sikom-de': 'support',
  'usu-com-de-de-produkte-customer-service': 'support',
  'vier-ai': 'support',

  // Discovery / Requirements
  'microtool-de-produkte-objectif-rpm': 'discovery',

  // Sonstige (Document AI, Translation, Hosting, ITSM)
  'ibm-com-products-datacap': 'other',
  'ionos-de-cloud-ai-model-hub': 'other',
  'lengoo-com': 'other',
  'natif-ai': 'other',
  'servicenow-com-products-now-assist-html': 'other',
};

const path = resolve(process.cwd(), 'src/data/tools.yaml');
const original = readFileSync(path, 'utf8');
let updated = original;

const BROKEN = '<coding|testing|discovery|support|...>';

const expected = Object.keys(FIXES).length;
let applied = 0;
const skipped = [];

for (const [id, category] of Object.entries(FIXES)) {
  // Block-Match: vom `- id: <id>`-Anker bis zur ersten `category: <broken>`-Zeile
  // dieses Blocks. Verlangt, dass IDs unique sind (Schema garantiert das).
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `(- id: ${escapedId}\\n(?:  [^\\n]+\\n)*?  category:) ${BROKEN.replace(
      /[.*+?^${}()|[\]\\]/g,
      '\\$&'
    )}`
  );
  if (!re.test(updated)) {
    skipped.push(id);
    continue;
  }
  updated = updated.replace(re, `$1 ${category}`);
  applied++;
  console.log(`  ✓ ${id} → ${category}`);
}

if (skipped.length > 0) {
  console.log('\n  ✗ nicht gefunden (oder schon gefixt):');
  for (const id of skipped) console.log(`    · ${id}`);
}

// Verbleibende Pipe-Einträge — BROKEN literal escapen, sonst werden die `|`
// als RegExp-Alternation interpretiert und matchen viel zu viel.
const escapedBroken = BROKEN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const remaining = (updated.match(new RegExp(escapedBroken, 'g')) ?? []).length;
console.log(`\nApplied ${applied} of ${expected} fixes. ${remaining} broken category entries remaining.`);

if (applied > 0) {
  writeFileSync(path, updated);
  console.log(`\nWrote ${path}`);
} else {
  console.log('\nNo changes — file untouched.');
}
