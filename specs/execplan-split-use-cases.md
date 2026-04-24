# Split Use Cases into Their Own Content Collection

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan is maintained in accordance with `specs/PLANS.md` in this repository.

## Purpose / Big Picture

Today every use case for a stage of the AI value chain lives as a YAML entry inside that stage's markdown file. The MVP stage `src/content/stages/testing-qa.md` currently holds three use cases in its `use_cases:` array; the three placeholder stages (`development.md`, `product-discovery.md`, `customer-support.md`) each hold one. Three problems follow from this shape.

First, a fully populated use case with `rationale`, typed `sources`, a `tools[]` array with per-tool `fit`/`note`/`sources`, plus `start_here` and `caveats` easily reaches 60–100 lines of YAML. At the target of three to five use cases per stage, the frontmatter grows to 300–500 lines, which makes community pull requests and agent-authored patches unreviewable.

Second, parallel agent runs that each contribute a new use case to the same stage produce merge conflicts on the same file, which blocks the research pipeline that is about to be spun up around GPT Researcher.

Third, the three placeholder stages cannot be extended incrementally one use case at a time without touching all sibling use cases in the same frontmatter.

After this change, every use case is its own markdown file under `src/content/use-cases/<stage>/<slug>.md`, validated by a new Astro content collection with a Zod-checked reference back to the parent stage. The Finder page, the Atlas page, and the per-stage detail pages render exactly the same HTML as before — a reader visiting `/`, `/finder`, or `/stage/testing-qa` in a browser will see no difference. The win is structural: one pull request per use case, tiny diffs, no merge conflicts between parallel contributors.

Success is observable as a diff. Before the migration, run `npm run build` and keep a copy of `dist/`. After the migration, run `npm run build` again and compare. The only permitted differences are whitespace and key ordering inside the Finder's inline JSON. Every generated HTML file must continue to exist with the same visible text.

## Progress

Use timestamps in UTC at every stopping point.

- [x] (2026-04-24 17:32Z) Read `specs/PLANS.md`, this ExecPlan, and every file listed under Context and Orientation. Do not edit anything yet.
- [x] (2026-04-24 17:33Z) Milestone 1 — Capture a build snapshot of the pre-migration tree to compare against later.
- [x] (2026-04-24 17:33Z) Milestone 2 — Extend `src/content/config.ts` with the new `use_cases` collection; keep `use_cases` optional on the `stages` schema for the duration of the migration.
- [ ] Milestone 3 — Create `src/content/use-cases/<stage>/<slug>.md` files for every existing use case; remove the `use_cases:` array from the four stage files.
- [ ] Milestone 4 — Update `src/pages/finder.astro`, `src/pages/stage/[id].astro`, `src/pages/index.astro`, and `src/components/StageDetail.astro` to read from the new collection.
- [ ] Milestone 5 — Remove the now-vestigial `use_cases` field from the `stages` schema in `src/content/config.ts`.
- [ ] Milestone 6 — Re-run `npm run build`, diff `dist/` against the Milestone 1 snapshot, and record evidence in Artifacts and Notes.

## Surprises & Discoveries

Capture unexpected behaviour, gotchas, and Zod error messages as they come up.

## Decision Log

- Decision: Use-case files live under `src/content/use-cases/<stage>/<slug>.md` with a nested directory per stage, not a flat layout with double-dashed filenames.
  Rationale: The directory layout is self-documenting, keeps the slug short, and maps cleanly onto Astro's nested-slug support (slug becomes `testing-qa/test-generation`). A flat layout with compound filenames is possible but noisier on disk.
  Date/Author: 2026-04-24 / Planner

- Decision: The use case's compound `id` (for example `testing-qa:test-generation`), as exposed in the Finder's inline JSON, is derived at build time from `${stage.slug}:${useCase.slug.split('/').pop()}` and is not stored as a separate frontmatter field.
  Rationale: The filename plus the `stage` reference already determine the compound ID. A second frontmatter field would be a drift hazard.
  Date/Author: 2026-04-24 / Planner

- Decision: `start_here` and `caveats` stay as single-string frontmatter fields for this migration.
  Rationale: Moving them to the markdown body changes how `finder.js` consumes them (`textContent` today). That migration is worth doing, but only after the first round of agent-generated content reveals whether multi-paragraph narratives are actually needed. Scope this change tightly.
  Date/Author: 2026-04-24 / Planner

- Decision: `roles`, `suitability`, and `top_use_case` stay as explicit frontmatter on the Stage file and are not derived from the use cases below.
  Rationale: All three are editorial judgments about the stage as a whole and must remain authorable even when a stage has zero use cases yet.
  Date/Author: 2026-04-24 / Planner

## Outcomes & Retrospective

Fill this in at completion. Compare the result to the purpose above. Note any regressions caught by the diff, any Zod errors you had to debug, and what remains for a later pass (for example, moving `start_here`/`caveats` into the markdown body once real agent content arrives).

## Context and Orientation

This repository is the Astro static site "Where AI Works". The MVP implementation is documented in `specs/execplan-mvp.md`; the design is documented in `specs/design.md`. Read those if you need more context than this plan provides.

Files relevant to this migration, all paths relative to the repository root:

- `src/content/config.ts` — currently defines one content collection called `stages`. The schema embeds `use_cases: z.array(useCaseSchema)`. Enums for role IDs and tool IDs are derived at build time from `src/data/roles.yaml` and `src/data/tools.yaml`. Read this file end-to-end before editing.
- `src/content/stages/testing-qa.md` — fully populated stage with three use cases in its frontmatter.
- `src/content/stages/development.md`, `src/content/stages/product-discovery.md`, `src/content/stages/customer-support.md` — each has one placeholder use case.
- `src/pages/finder.astro` — builds the Finder JSON by calling `getCollection('stages')` and flat-mapping `stage.data.use_cases`. The runtime shape consumed by `finder.js` is specified in `specs/design.md` §3.3 (interface `FinderUseCase`).
- `src/pages/stage/[id].astro` — generates one static page per stage via `getStaticPaths()`; currently reads `entry.data.use_cases`.
- `src/pages/index.astro` — the Atlas page; renders stage cards and the inline detail sections.
- `src/components/StageDetail.astro` — renders the shared detail view, used both inline in the Atlas and on the canonical stage page.
- `src/lib/data.ts` — loads the YAML files. No changes expected here.

Terms used below:

- **Astro Content Collection**: a named group of markdown files under `src/content/<name>/`, validated at build time by a Zod schema declared in `src/content/config.ts`. Read via `getCollection('<name>')` or `getEntry(collection, id)`.
- **`reference('stages')`**: a helper exported from `astro:content` that declares a frontmatter field as pointing to another collection entry by its slug. Unknown slugs fail the build.
- **Use Case**: a unit of work at a specific stage, authored as one markdown file after this migration (before: one entry in the parent stage's `use_cases[]`).

## Plan of Work

Read every file listed in Context and Orientation first. The exact shape of `FinderUseCase`, the call sites of `entry.data.use_cases`, the tool-stammdaten lookup in `src/lib/data.ts`, and how `src/components/StageDetail.astro` receives its data all matter for the edits below.

In `src/content/config.ts`, extract the inline `useCaseSchema` into a top-level constant and add a `stage: reference('stages')` field to it. Import `reference` from `'astro:content'`. Declare a new collection called `use_cases` with `type: 'content'` and the extracted schema. During Milestone 2 keep the existing `use_cases: z.array(useCaseSchema).optional()` on the `stages` schema so the build still succeeds while you migrate the markdown files. In Milestone 5 delete that field outright and make any referencing page code switch to the new collection.

For every existing use case across the four stage files, create a new file at `src/content/use-cases/<stage>/<slug>.md`. The slug in the filename (without `.md`) is whatever came after the colon in the old compound ID. For example the old entry with `id: "testing-qa:test-generation"` becomes a file named `src/content/use-cases/testing-qa/test-generation.md`. Its frontmatter moves over verbatim except that the old `id` field is removed, and a new `stage` field is added with the slug of the parent stage. A worked example appears under Artifacts and Notes.

Once every use case is moved into its own file, delete the `use_cases:` array from each of the four stage files. All other stage frontmatter (`name`, `type`, `order`, `challenge`, `top_use_case`, `suitability`, `roles`) stays.

In `src/pages/finder.astro`, replace the flat-map over `stages[].use_cases` with a call to `getCollection('use_cases')`. For each entry, resolve the parent stage via `await getEntry(entry.data.stage)` — the returned object has `slug`, `data.name`, and the other stage fields. Derive the compound `id` as `${stage.slug}:${entry.slug.split('/').pop()}`. Produce the same `FinderUseCase[]` JSON shape that `finder.js` consumes — the client script must not change. Tool resolution (looking up names, URLs, and maturity from `src/data/tools.yaml`) and UI-label mapping (suitability, fit) stay exactly as they are.

In `src/pages/stage/[id].astro`, replace `entry.data.use_cases` with a filtered fetch:

    const useCases = await getCollection('use_cases', uc => uc.data.stage.slug === entry.slug);

Pass this array into `StageDetail.astro` as a prop (or fetch it inside the component if that seam is cleaner — keep whatever shape exists in the current code, and change only the data source).

If `src/components/StageDetail.astro` currently reads use cases off the stage entry, change it to accept them as a prop instead. The exterior HTML the component emits must not change.

In `src/pages/index.astro`, check whether the Atlas needs per-stage use-case information. If it only uses `stage.data.top_use_case` (a plain string, still present after this migration), no edit is needed. If it iterates over use cases per stage, fetch `getCollection('use_cases')` once at the top and build a `Map<stageSlug, UseCase[]>` for the cards and inline details.

Do not add any new runtime dependency. No new npm package is required.

## Concrete Steps

Run all commands from the repository root `/home/lutz/projects/where_ai_works/WhereAiWorks`.

Pre-migration snapshot:

    ASTRO_TELEMETRY_DISABLED=1 npm run build
    cp -r dist dist.pre-migration

Expected output: a successful build with six generated HTML files under `dist/` (`index.html`, `finder/index.html`, `stage/testing-qa/index.html`, `stage/development/index.html`, `stage/product-discovery/index.html`, `stage/customer-support/index.html`).

After Milestone 2 (schema additive change), re-run the build:

    ASTRO_TELEMETRY_DISABLED=1 npm run build

Expected output: still successful. No changes to `dist/` yet.

After Milestone 3 (files moved), re-run the build:

    ASTRO_TELEMETRY_DISABLED=1 npm run build

Expected output: successful. The stage detail pages will be missing their use-case content until Milestone 4 — that is expected and temporary. Do not commit between Milestone 3 and Milestone 4.

After Milestone 4 (consumer pages updated), re-run the build:

    ASTRO_TELEMETRY_DISABLED=1 npm run build

Expected output: successful. The HTML should now match the pre-migration snapshot.

After Milestone 5 (schema tightened), re-run the build and the diff:

    ASTRO_TELEMETRY_DISABLED=1 npm run build
    diff -r dist.pre-migration dist

Expected output: no route appears or disappears; no text content changes. Whitespace and JSON-key ordering differences inside `dist/finder/index.html`'s inline `<script>` block are acceptable. Any other difference is a regression and must be fixed before proceeding.

Clean up the snapshot once the diff is recorded:

    rm -rf dist.pre-migration

Commit at the end of each milestone with a small, topical message, for example `schema: introduce use_cases collection (optional on stages)` for Milestone 2 and `content: move testing-qa use cases to own files` for Milestone 3.

## Validation and Acceptance

The migration succeeds when all of the following hold.

First, `npm run build` completes without errors after Milestone 5.

Second, `diff -r dist.pre-migration dist` shows no route-level, element-level, or text-content differences — only whitespace or JSON-key ordering inside the Finder's inline script.

Third, running `npm run dev` and visiting `http://localhost:4321/finder`, selecting "QA Engineer" in the role dropdown and then each goal in the second dropdown, produces the same result block for each goal as the pre-migration build did.

Fourth, visiting `http://localhost:4321/#stage-testing-qa` on the Atlas page shows the same inline detail content as before (three use cases with their tools, suitability badges, and sources).

Fifth, a negative probe: temporarily change one use-case's `stage: testing-qa` to `stage: testing-kq` and run `npm run build`. The build must fail with a Zod reference error that names the invalid stage. Revert the typo before committing.

Sixth, a second negative probe: temporarily change one use-case's `tools[0].id` from a valid ID like `copilot` to an invalid ID like `copilot-nope` and run `npm run build`. The build must still fail with a clear Zod error about the unknown tool ID, proving that the referential integrity on tools survived the migration. Revert before committing.

Do not claim success on a skipped probe.

## Idempotence and Recovery

This migration is safe to re-run from a dirty working tree because every step up through Milestone 4 is additive. `git reset --hard HEAD` restores the pre-migration tree at any point. `rm -rf src/content/use-cases` removes every new file. `rm -rf dist dist.pre-migration` clears the build artefacts.

Committing after each milestone is fine. Milestone 2's intermediate state (new collection plus optional `use_cases` on stages) is a valid, buildable tree. Milestone 3's intermediate state (files moved, consumers not yet updated) is not buildable in the sense that stage detail pages will be empty; do not push Milestone 3 in isolation.

If the diff at Milestone 6 shows unexpected differences, do not paper over them. Investigate each one. Likely causes are order-of-iteration changes in the Finder's JSON assembly (fix by sorting by stage order then use-case slug) or an off-by-one in how the compound `id` is derived (fix in the `${stage.slug}:${slug}` template).

## Artifacts and Notes

Record the `diff -r dist.pre-migration dist` output here, truncated to show only the meaningful lines, once you complete Milestone 6. The expected shape is a handful of whitespace-only hunks inside `dist/finder/index.html`.

Record the Zod error text produced by each negative probe in Validation and Acceptance. The error must name the offending field and value.

Worked example of a migrated use-case file, `src/content/use-cases/testing-qa/test-generation.md`:

    ---
    stage: testing-qa
    roles:
      - qa-engineer
      - developer
    title: "Testfall-Generierung"
    goal_label: "Tests schneller erstellen"
    suitability: good_fit
    rationale: "AI kann aus User Stories, Code und Specs automatisch Testfälle ableiten. Der Effekt ist bei BDD-Tests am stärksten, weil die natürlichsprachliche Vorlage gut als Prompt funktioniert."
    tools:
      - id: blinqio
        fit: good_fit
        note: "BDD-Tests aus User Stories; bei passendem Setup 10x schnellere Erstellung berichtet."
        sources:
          - label: "RedHat Case Study: BlinqIO-Integration"
            url: "https://example.com/redhat-blinqio"
            type: case_study
      - id: copilot
        fit: partial
        note: "Unit-Tests aus bestehendem Code. Keine vollständige Testsuite-Generierung aus Stories."
    start_here: "BlinqIO: BDD-Tests aus User Stories generieren. Alternativ: Copilot für Unit-Tests aus bestehendem Code — niedrigere Einstiegshürde."
    caveats: "Human Review empfohlen. Generierte Tests decken primär Happy Path ab — Edge Cases brauchen menschliche Expertise."
    sources:
      - label: "METR RCT 2025: Produktivitätseffekte von AI-Coding-Tools"
        url: "https://example.com/metr-2025"
        type: study
    ---

The markdown body stays empty for this migration. A future pass can move `start_here` and `caveats` into the body as named H2 sections once real agent content exposes whether multi-paragraph prose is needed.

## Interfaces and Dependencies

In `src/content/config.ts`, the extracted schema and the new collection:

    import { defineCollection, reference, z } from 'astro:content';

    const useCaseSchema = z.object({
      stage: reference('stages'),
      roles: z.array(roleEnum),
      title: z.string(),
      goal_label: z.string(),
      suitability: suitabilityEnum,
      rationale: z.string(),
      tools: z.array(useCaseToolSchema),
      start_here: z.string(),
      caveats: z.string(),
      sources: z.array(sourceSchema),
    });

    const use_cases = defineCollection({
      type: 'content',
      schema: useCaseSchema,
    });

    export const collections = { stages, use_cases };

The `stages` collection keeps every field except `use_cases`. Remove that field in Milestone 5.

In `src/pages/finder.astro`, the build-time assembly sketch:

    import { getCollection, getEntry } from 'astro:content';

    const entries = await getCollection('use_cases');
    const finderUseCases = await Promise.all(entries.map(async (entry) => {
      const stage = await getEntry(entry.data.stage);
      const slug = entry.slug.split('/').pop();
      return {
        id: `${stage.slug}:${slug}`,
        stage_id: stage.slug,
        stage_name: stage.data.name,
        roles: entry.data.roles,
        goal_label: entry.data.goal_label,
        suitability: entry.data.suitability,
        suitability_label: suitabilityLabel(entry.data.suitability),
        rationale: entry.data.rationale,
        tools: resolveTools(entry.data.tools), // unchanged helper
        start_here: entry.data.start_here,
        caveats: entry.data.caveats,
        sources: entry.data.sources,
      };
    }));

Sort by stage `order` then by slug before serialising to keep the Finder's JSON output deterministic across builds.

The runtime contract between `finder.astro` and `finder.js` is specified in `specs/design.md` §3.3 and must not change. If you must change it, raise it in the Decision Log first.

No new npm package is required. Do not add one.
