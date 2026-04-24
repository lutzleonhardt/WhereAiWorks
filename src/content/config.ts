import { defineCollection, reference, z } from 'astro:content';
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

type RoleEntry = { id: string; name: string; aliases?: string[] };
type ToolEntry = {
  id: string;
  name: string;
  category: string;
  url: string;
  maturity: 'production' | 'experimental';
  pricing?: string;
};
type SourceEntry = {
  id: string;
  label: string;
  url?: string;
  type: 'study' | 'case_study' | 'vendor' | 'community';
};

const roles = yaml.load(
  readFileSync(new URL('../data/roles.yaml', import.meta.url), 'utf8')
) as RoleEntry[];

const tools = yaml.load(
  readFileSync(new URL('../data/tools.yaml', import.meta.url), 'utf8')
) as ToolEntry[];

const sources = yaml.load(
  readFileSync(new URL('../data/sources.yaml', import.meta.url), 'utf8')
) as SourceEntry[];

const roleIds = roles.map((r) => r.id) as [string, ...string[]];
const toolIds = tools.map((t) => t.id) as [string, ...string[]];
const sourceIds = sources.map((s) => s.id) as [string, ...string[]];

const roleEnum = z.enum(roleIds);
const toolIdEnum = z.enum(toolIds);
const sourceIdEnum = z.enum(sourceIds);

const suitabilityEnum = z.enum(['good_fit', 'conditional', 'partial', 'immature']);

// Source-Referenz im Use-Case-Frontmatter: nur `id` (Pflicht) + optionale
// kontextuelle `note`. Label, URL und Typ kommen zentral aus
// `src/data/sources.yaml` und werden im Rendering aufgelöst.
const sourceRefSchema = z.object({
  id: sourceIdEnum,
  note: z.string().optional(),
});

// Tool-Eintrag im Kontext eines Use Cases.
// Zwei Ebenen bewusst getrennt: `useCaseSchema.suitability` = ist AI für
// diese Aufgabe sinnvoll? `useCaseToolSchema.fit` (optional) = wie gut
// passt DIESES Tool für diesen Use Case? Ohne `fit` gilt die Use-Case-
// Suitability auch für das Tool. `sources` hier = tool-spezifisch;
// globale Evidenz bleibt in `useCaseSchema.sources`.
const useCaseToolSchema = z.object({
  id: toolIdEnum,
  fit: suitabilityEnum.optional(),
  note: z.string().optional(),
  sources: z.array(sourceRefSchema).optional(),
});

const useCaseSchema = z.object({
  stage: reference('stages'),
  order: z.number().int().min(1).max(99),
  roles: z.array(roleEnum),
  title: z.string(),
  goal_label: z.string(),
  suitability: suitabilityEnum,
  rationale: z.string(),
  tools: z.array(useCaseToolSchema),
  start_here: z.string(),
  caveats: z.string(),
  sources: z.array(sourceRefSchema),
});

const stages = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.enum(['primary', 'support']),
    order: z.number().int().min(1).max(20),
    challenge: z.string(),
    top_use_case: z.string(),
    roles: z.array(roleEnum),
  }),
});

const use_cases = defineCollection({
  type: 'content',
  schema: useCaseSchema,
});

export const collections = { stages, use_cases };
