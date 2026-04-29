// Aggregiert pro Tool die abgeleiteten Felder für die /tools-Seite.
// Quellen: src/data/tools.yaml + src/content/use_cases/**.
// Lauf passiert zur Build-Zeit; das Ergebnis ist serialisiert.

import type { CollectionEntry } from 'astro:content';
import type { ToolEntry } from './data';

export type FitKey = 'good_fit' | 'conditional' | 'partial' | 'immature';

export type AggregatedTool = {
  id: string;
  name: string;
  vendorHost: string;
  category: string;
  categoryLabel: string;
  hoverText: string;
  url: string;
  maturity: 'production' | 'experimental';
  maturityLabel: string;
  stages: string[];
  stageBadges: string[];
  ucCount: number;
  fit: Record<FitKey, number>;
  caveatsCount: number;
  caveatsLevel: 1 | 2 | 3 | 4;
};

const STAGE_BADGES: Record<string, string> = {
  'architecture-design': 'ARCH',
  'customer-support': 'SUPP',
  'deployment-devops': 'DEPLOY',
  development: 'DEV',
  documentation: 'DOC',
  'hr-onboarding': 'HR',
  'operations-monitoring': 'OPS',
  'product-discovery': 'DISC',
  'sales-presales': 'SALES',
  'testing-qa': 'TEST',
};

// Mapping deckt alle aktuell in tools.yaml vorkommenden Werte ab.
// Wenn ein neuer Wert dazukommt, fällt er auf Title-Case zurück (siehe categoryLabel-Helper).
export const CATEGORY_LABELS: Record<string, string> = {
  audit: 'Audit',
  coding: 'Coding',
  data: 'Data',
  'deployment-devops': 'Deployment & DevOps',
  discovery: 'Discovery',
  grc: 'GRC',
  hr: 'HR',
  observability: 'Observability',
  other: 'Sonstige',
  productivity: 'Produktivität',
  sales: 'Sales',
  security: 'Security',
  siem: 'SIEM',
  support: 'Support',
  testing: 'Testing',
  unkategorisiert: 'Unkategorisiert',
};

const SUITABILITY_LABELS: Record<FitKey, string> = {
  good_fit: 'gut geeignet',
  conditional: 'bedingt geeignet',
  partial: 'nur Teilaufgaben',
  immature: 'noch unreif',
};

export function suitabilityLabel(fit: FitKey): string {
  return SUITABILITY_LABELS[fit];
}

const MATURITY_LABELS: Record<'production' | 'experimental', string> = {
  production: 'produktiv',
  experimental: 'Vorschau',
};

export function maturityLabel(m: 'production' | 'experimental'): string {
  return MATURITY_LABELS[m];
}

// `<coding|testing|...>` ist eine kaputte Kategorie aus dem Seed-Import (Schema-Hint
// statt konkreter Wert). Hier auf 'unkategorisiert' normalisieren — Bug bleibt in
// tools.yaml und sollte dort gefixt werden, aber UI darf nicht daran ersticken.
function normalizeCategory(raw: string): string {
  if (!raw || raw.startsWith('<')) return 'unkategorisiert';
  return raw;
}

function categoryLabel(category: string): string {
  if (CATEGORY_LABELS[category]) return CATEGORY_LABELS[category];
  // Title-Case-Fallback für unbekannte Werte
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function vendorHostFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    // Pfad-Hint nur wenn er Marken-Information trägt (z. B. github.com/BerriAI)
    const segs = u.pathname.split('/').filter(Boolean);
    if ((host === 'github.com' || host === 'gitlab.com') && segs[0]) {
      return `${host}/${segs[0]}`;
    }
    return host;
  } catch {
    return url;
  }
}

function caveatsLevel(perUc: number): 1 | 2 | 3 | 4 {
  if (perUc < 2) return 1;
  if (perUc < 4) return 2;
  if (perUc < 7) return 3;
  return 4;
}

function buildHoverText(
  categoryLabel: string,
  maturityLabel: string,
  stageCount: number,
  ucCount: number
): string {
  const stageLabel = stageCount === 1 ? '1 Stage' : `${stageCount} Stages`;
  const ucLabel = ucCount === 1 ? '1 Use Case' : `${ucCount} Use Cases`;
  return `${categoryLabel}-Tool · ${maturityLabel} · empfohlen in ${stageLabel} und ${ucLabel}`;
}

export type UseCaseEntry = CollectionEntry<'use_cases'>;

// Resolver, weil getEntry() async ist — wir bekommen die Stage-Slugs separat
// herein, damit aggregateTools() synchron bleiben kann.
export type StageSlugByUcId = Map<string, string>;
export type StageOrderBySlug = Map<string, number>;

export function aggregateTools(
  tools: ToolEntry[],
  useCases: UseCaseEntry[],
  stageSlugByUcId: StageSlugByUcId,
  stageOrderBySlug: StageOrderBySlug
): AggregatedTool[] {
  const toolsById = new Map(tools.map((t) => [t.id, t]));

  type Acc = {
    stages: Set<string>;
    ucCount: number;
    fit: Record<FitKey, number>;
    caveatsCount: number;
  };
  const acc = new Map<string, Acc>();

  for (const uc of useCases) {
    const stageSlug = stageSlugByUcId.get(uc.id);
    if (!stageSlug) continue;
    for (const t of uc.data.tools) {
      let a = acc.get(t.id);
      if (!a) {
        a = {
          stages: new Set(),
          ucCount: 0,
          fit: { good_fit: 0, conditional: 0, partial: 0, immature: 0 },
          caveatsCount: 0,
        };
        acc.set(t.id, a);
      }
      a.ucCount++;
      a.stages.add(stageSlug);
      a.fit[t.fit as FitKey]++;
      if (t.caveats) a.caveatsCount += t.caveats.length;
    }
  }

  const result: AggregatedTool[] = [];
  for (const [id, a] of acc) {
    const tool = toolsById.get(id);
    if (!tool) continue; // sollte nicht passieren — Schema erzwingt Konsistenz
    // Stages nach Atlas-Order sortieren, nicht alphabetisch.
    const stages = [...a.stages].sort(
      (x, y) =>
        (stageOrderBySlug.get(x) ?? 999) - (stageOrderBySlug.get(y) ?? 999)
    );
    const perUc = a.caveatsCount / Math.max(1, a.ucCount);
    const cat = normalizeCategory(tool.category);
    const catLabel = categoryLabel(cat);
    const matLabel = maturityLabel(tool.maturity);
    result.push({
      id,
      name: tool.name,
      vendorHost: vendorHostFromUrl(tool.url),
      category: cat,
      categoryLabel: catLabel,
      hoverText: buildHoverText(catLabel, matLabel, stages.length, a.ucCount),
      url: tool.url,
      maturity: tool.maturity,
      maturityLabel: matLabel,
      stages,
      stageBadges: stages.map((s) => STAGE_BADGES[s] ?? s.slice(0, 4).toUpperCase()),
      ucCount: a.ucCount,
      fit: a.fit,
      caveatsCount: a.caveatsCount,
      caveatsLevel: caveatsLevel(perUc),
    });
  }

  // Default-Sort: good_fit DESC, ucCount DESC, name ASC
  result.sort((a, b) => {
    if (b.fit.good_fit !== a.fit.good_fit) return b.fit.good_fit - a.fit.good_fit;
    if (b.ucCount !== a.ucCount) return b.ucCount - a.ucCount;
    return a.name.localeCompare(b.name);
  });

  return result;
}
