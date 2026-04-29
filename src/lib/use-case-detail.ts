import type { CollectionEntry } from 'astro:content';
import type { SourceEntry, SourceType } from './data';

type UseCaseData = CollectionEntry<'use_cases'>['data'];
type UseCaseToolData = UseCaseData['tools'][number];

export type ResolvedSource = {
  label: string;
  url?: string;
  type: SourceType;
  type_label: string;
};

export type UseCaseDetailTool = Omit<UseCaseToolData, 'caveats' | 'sources'> & {
  caveats: string[];
  sources: ResolvedSource[];
};

export type UseCaseDetailView = Omit<UseCaseData, 'tools' | 'sources'> & {
  tools: UseCaseDetailTool[];
  sources: ResolvedSource[];
};

export const sourceTypeLabels: Record<SourceType, string> = {
  study: 'study',
  case_study: 'case study',
  vendor: 'vendor',
  vendor_doc: 'vendor doc',
  community: 'community',
  review: 'review',
  blog: 'blog',
  documentation: 'docs',
  news: 'news',
};

export const enterpriseReadinessLabels: Record<string, string> = {
  enterprise_ready: 'enterprise-ready',
  team_ready: 'team-ready',
  evaluation_only: 'nur Evaluation',
  irrelevant_for_enterprise: 'kein Enterprise-Fokus',
  unknown: 'Reifegrad unklar',
};

export const enterpriseReadinessTooltipText: Record<string, string> = {
  enterprise_ready:
    'Enterprise-ready: Fuer groessere Teams und Unternehmen grundsaetzlich tragfaehig, typischerweise mit belastbarer Governance- und Compliance-Story.',
  team_ready:
    'Team-ready: Fuer Teams gut nutzbar, aber mit Einschraenkungen bei Enterprise-Governance, Beschaffung oder Compliance.',
  evaluation_only:
    'Nur Evaluation: Eher fuer Pilot, Test oder Einzelteams geeignet; fuer breiteren produktiven Einsatz noch zu unreif oder organisatorisch zu schwach abgesichert.',
  irrelevant_for_enterprise:
    'Kein Enterprise-Fokus: Fuer groessere Organisationen oder regulierte Umgebungen nicht der primaere Einsatzpfad.',
  unknown:
    'Reifegrad unklar: Die verfuegbaren Informationen reichen nicht fuer eine belastbare Einordnung.',
};

export const adoptionLabels: Record<string, string> = {
  mainstream: 'Mainstream',
  growing: 'wachsend',
  emerging: 'aufkommend',
};

export const relevanceLabels: Record<string, string> = {
  high: 'hoch',
  medium: 'mittel',
  low: 'niedrig',
};

export const evidenceStrengthLabels: Record<string, string> = {
  strong: 'stark',
  medium: 'mittel',
  weak: 'schwach',
};

export const tenorLabels: Record<string, string> = {
  positive: 'positiv',
  mixed: 'gemischt',
  polarized: 'polarisiert',
  negative: 'negativ',
  unknown: 'unklar',
};

export const volumeLabels: Record<string, string> = {
  high: 'hoch',
  medium: 'mittel',
  low: 'niedrig',
};

export const practiceSignalTooltip =
  'Aggregierte Signale aus Reviews, Foren und Community-Quellen wie Reddit. Zeigt Volumen und Tenor der Praxisstimmen.';

export const practiceSignalEmptyText = 'Kein oeffentliches Praktiker-Signal erfasst.';

export const practiceSignalEmptyTooltip =
  'Fuer dieses Tool wurden in der Recherche keine belastbaren oeffentlichen Praktiker-Stimmen erfasst (Reddit / Hacker News / lobste.rs / Foren). Das kann an einer engen Enterprise-/NDA-Vermarktung, junger Marktlebenszeit oder unvollstaendiger Recherche liegen.';

export function resolveSources(
  refs: readonly { id: string }[] | undefined,
  sourcesById: Map<string, SourceEntry>
): ResolvedSource[] {
  return (refs ?? [])
    .map((ref) => sourcesById.get(ref.id))
    .filter((source): source is SourceEntry => Boolean(source))
    .map(({ label, url, type }) => ({
      label,
      url,
      type,
      type_label: sourceTypeLabels[type] ?? type,
    }));
}

export function formatProviderUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export function buildUseCaseDetailView(
  useCase: UseCaseData,
  sourcesById: Map<string, SourceEntry>
): UseCaseDetailView {
  return {
    ...useCase,
    tools: useCase.tools.map((tool) => ({
      ...tool,
      caveats: tool.caveats ?? [],
      sources: resolveSources(tool.sources, sourcesById),
    })),
    sources: resolveSources(useCase.sources, sourcesById),
  };
}
