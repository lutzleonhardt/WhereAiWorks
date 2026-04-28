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
  url: string;
  maturity: 'production' | 'experimental';
  maturityLabel: 'production' | 'preview';
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

const CATEGORY_LABELS: Record<string, string> = {
  coding: 'Coding',
  other: 'Other',
  security: 'Security',
  infra: 'Infra',
};

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

export type UseCaseEntry = CollectionEntry<'use_cases'>;

// Resolver, weil getEntry() async ist — wir bekommen die Stage-Slugs separat
// herein, damit aggregateTools() synchron bleiben kann.
export type StageSlugByUcId = Map<string, string>;

export function aggregateTools(
  tools: ToolEntry[],
  useCases: UseCaseEntry[],
  stageSlugByUcId: StageSlugByUcId
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
    const stages = [...a.stages].sort();
    const perUc = a.caveatsCount / Math.max(1, a.ucCount);
    result.push({
      id,
      name: tool.name,
      vendorHost: vendorHostFromUrl(tool.url),
      category: tool.category,
      categoryLabel: CATEGORY_LABELS[tool.category] ?? tool.category,
      url: tool.url,
      maturity: tool.maturity,
      maturityLabel: tool.maturity === 'experimental' ? 'preview' : 'production',
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
