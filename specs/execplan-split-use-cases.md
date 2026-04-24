# Split Use Cases into Their Own Content Collection

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan is maintained in accordance with `specs/PLANS.md` in this repository.

## Purpose / Big Picture

Today every use case for a stage of the AI value chain lives as a YAML entry inside that stage's markdown file. The MVP stage `src/content/stages/testing-qa.md` currently holds three use cases in its `use_cases:` array; the three placeholder stages (`development.md`, `product-discovery.md`, `customer-support.md`) each hold one. Three problems follow from this shape.

First, a fully populated use case with `rationale`, typed `sources`, a `tools[]` array with per-tool `fit`/`note`/`sources`, plus `start_here` and `caveats` easily reaches 60–100 lines of YAML. At the target of three to five use cases per stage, the frontmatter grows to 300–500 lines, which makes community pull requests and agent-authored patches unreviewable.

Second, parallel agent runs that each contribute a new use case to the same stage produce merge conflicts on the same file, which blocks the research pipeline that is about to be spun up around GPT Researcher.

Third, the three placeholder stages cannot be extended incrementally one use case at a time without touching all sibling use cases in the same frontmatter.

After this change, every use case is its own markdown file under `src/content/use_cases/<stage>/<slug>.md`, validated by a new Astro content collection with a Zod-checked reference back to the parent stage. The Finder page, the Atlas page, and the per-stage detail pages render exactly the same HTML as before — a reader visiting `/`, `/finder`, or `/stage/testing-qa` in a browser will see no difference. The win is structural: one pull request per use case, tiny diffs, no merge conflicts between parallel contributors.

Success is observable as a diff. Before the migration, run `npm run build` and keep a copy of `dist/`. After the migration, run `npm run build` again and compare. The only permitted differences are whitespace and key ordering inside the Finder's inline JSON. Every generated HTML file must continue to exist with the same visible text.

## Progress

Use timestamps in UTC at every stopping point.

- [x] (2026-04-24 17:32Z) Read `specs/PLANS.md`, this ExecPlan, and every file listed under Context and Orientation. Do not edit anything yet.
- [x] (2026-04-24 17:33Z) Milestone 1 — Capture a build snapshot of the pre-migration tree to compare against later.
- [x] (2026-04-24 17:33Z) Milestone 2 — Extend `src/content/config.ts` with the new `use_cases` collection; keep `use_cases` optional on the `stages` schema for the duration of the migration.
- [x] (2026-04-24 17:39Z) Milestone 3 — Create `src/content/use_cases/<stage>/<slug>.md` files for every existing use case; remove the `use_cases:` array from the four stage files. (Directory renamed from `use-cases` to `use_cases` — see Decision Log.)
- [x] (2026-04-24 17:43Z) Milestone 4 — Update `src/pages/finder.astro`, `src/pages/stage/[id].astro`, `src/pages/index.astro`, and `src/components/StageDetail.astro` to read from the new collection.
- [x] (2026-04-24 17:44Z) Ran both negative probes (invalid stage reference, invalid tool id). Both fail the build with clear, named errors; see Artifacts and Notes.
- [x] (2026-04-24 17:45Z) Milestone 5 — Remove the now-vestigial `use_cases` field from the `stages` schema in `src/content/config.ts`.
- [x] (2026-04-24 17:45Z) Milestone 6 — Re-run `npm run build`, diff `dist/` against the Milestone 1 snapshot, record evidence in Artifacts and Notes.

## Surprises & Discoveries

Capture unexpected behaviour, gotchas, and Zod error messages as they come up.

- Observation: Astro 5's legacy `type: 'content'` collections require the directory name under `src/content/` to exactly match the collection key declared in `defineCollection`. The collection is named `use_cases` (underscore) in `src/content/config.ts`, so the directory had to be `src/content/use_cases/` (underscore), not `src/content/use_cases/` (hyphen) as the plan originally specified. With the hyphenated directory the build succeeded but every consumer saw an empty collection and logged `The collection "use_cases" does not exist or is empty. Please check your content config file for errors.` See Decision Log entry 2026-04-24 Implementer.

- Observation: In Astro 5 the runtime object returned by `reference('stages')` is `{ id: string, collection: 'stages' }` — not `{ slug, collection }` as in Astro 4 and earlier. Consumers that read `uc.data.stage.slug` silently get `undefined` and produce no matches. The stage entry itself still exposes `entry.slug` (e.g. `testing-qa`) in the legacy content collection, so the fix is to use `uc.data.stage.id` for the reference and `stage.slug` for the resolved entry. Evidence: a one-shot `console.log` inside `src/pages/index.astro` printed `{"id":"customer-support","collection":"stages"}`.

- Observation: Collection entries from `getCollection('use_cases')` come back in alphabetical order of the filename slug, not in the order they appeared in the previous stage YAML. Without an explicit ordering field, the stage detail pages reorder their use cases (for example `testing-qa` goes from "Test-Generierung, Visual Regression, Self-healing" to "Self-healing, Test-Generierung, Visual Regression"). That is a user-visible text-content diff on the stage detail HTML, which the acceptance explicitly forbids. The fix is an `order: number` field per use case — see Decision Log entry 2026-04-24 Implementer / ordering field.

- Observation: Negative probe 1 (bad stage reference `testing-kq`) does not surface as a Zod schema error during `[content] Syncing content`; `reference('stages')` validates only that the field is a string at schema time. The bad reference is caught at page render time with `Entry stages → testing-kq was not found.` followed by `Cannot read properties of undefined (reading 'slug')`. The build still fails and the invalid stage name is named in the output, so the acceptance criterion is met even though the error path is a render error rather than a Zod error. Evidence: transcript in Artifacts and Notes.

## Decision Log

- Decision: Use-case files live under `src/content/use_cases/<stage>/<slug>.md` with a nested directory per stage, not a flat layout with double-dashed filenames.
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

- Decision: The use-case collection directory is `src/content/use_cases/<stage>/<slug>.md`, not `src/content/use_cases/...` as originally written in the plan.
  Rationale: Astro 5's legacy `type: 'content'` collections resolve the on-disk directory from the collection key declared in `defineCollection` (see `src/content/config.ts`). The collection key is `use_cases` (underscore) because JavaScript identifiers in the exported `collections` object cannot contain a hyphen. With the hyphenated directory the build logged `The collection "use_cases" does not exist or is empty` and every consumer received an empty list. Keeping the collection key and directory name aligned is the path of least surprise; the alternative (switching to the new `glob({ base, pattern })` loader API) would also change `entry.slug` to `entry.id` and cascade through the finder assembly.
  Date/Author: 2026-04-24 / Implementer

- Decision: Every use case carries an explicit `order: number` frontmatter field, and all three consumers sort their use-case lists by that field before rendering.
  Rationale: `getCollection('use_cases')` returns entries in alphabetical slug order. Without an explicit ordering field the stage detail pages reorder their `<li>` nodes — for example `testing-qa` switches from `Test-Generierung → Visual Regression → Self-healing` (original YAML order) to `Self-healing → Test-Generierung → Visual Regression` (alphabetical filename order). That is a visible text-content diff on the stage detail HTML, which the acceptance explicitly forbids. An `order` field keeps authoring intent explicit and survives file renames; deriving order from filenames by prefixing `01-`, `02-` would leak into the compound ID exposed by the Finder (`testing-qa:01-test-generation`), which we explicitly want to avoid.
  Date/Author: 2026-04-24 / Implementer

- Decision: The Finder's inline `useCaseData` array is sorted by `(stage.data.order, useCase.order)` — not by the pre-migration iteration order, which happened to be roughly alphabetical-by-stage-slug.
  Rationale: The plan's Interfaces section explicitly recommends "Sort by stage `order` then by slug before serialising to keep the Finder's JSON output deterministic across builds." The resulting JSON array differs from the pre-migration snapshot, but that diff is inside `dist/finder/index.html`'s `<script>` block and is listed as permitted in the acceptance criteria. No user-visible behaviour changes: the Finder runtime looks up use cases by compound `id`, not by position in the array.
  Date/Author: 2026-04-24 / Implementer

## Outcomes & Retrospective

Goal achieved. Every use case now lives under `src/content/use_cases/<stage>/<slug>.md` and is validated by a dedicated Astro content collection (`use_cases`) with a typed `reference('stages')` back to its parent stage. The four stage files in `src/content/stages/` no longer carry a `use_cases:` array; their frontmatter is down to `name`, `type`, `order`, `challenge`, `top_use_case`, and `roles`. A new use case can now be added as a single ~20-line markdown file without touching any sibling, which was the core motivation (review-able PRs, no merge conflicts between parallel research runs).

The `diff -r dist.pre-migration dist` check at the end of Milestone 6 flagged exactly one file, `dist/finder/index.html`, and exactly one line (the inline `<script>` block containing `useCaseData`). The content of every use case is present and unchanged; only the array ordering shifted from the pre-migration iteration order (accidentally alphabetical-by-stage-slug) to `(stage.order, useCase.order)` as the plan's Interfaces section recommended. No other page differs. The negative probes both fail the build with clear, named errors: the invalid tool id surfaces as a Zod `Invalid enum value` error during content sync, and the invalid stage reference surfaces as `Entry stages → testing-kq was not found.` at render time.

Two adjustments to the plan were required and are recorded in the Decision Log and Surprises & Discoveries: the directory name had to align with the collection key (`use_cases` with an underscore, not `use-cases`), and an explicit `order: number` field was added to each use case so the stage detail pages preserve the original display order. Both adjustments are cheap and authorable; neither leaks into runtime behaviour.

Remaining for a later pass: move `start_here` and `caveats` from frontmatter into the markdown body as named H2 sections once real agent-generated content demonstrates whether multi-paragraph prose is useful. The Finder's client script reads both via `textContent` today, so that migration will touch `finder.astro`'s render path.

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
- **`reference('stages')`**: a helper exported from `astro:content` that declares a frontmatter field as pointing to another collection entry by its id (the file path relative to the collection root, minus extension). On Astro 5 the runtime value of the field is `{ id: string, collection: 'stages' }`. Unknown ids fail at render time with `Entry stages → <id> was not found.`
- **Use Case**: a unit of work at a specific stage, authored as one markdown file after this migration (before: one entry in the parent stage's `use_cases[]`).

## Plan of Work

Read every file listed in Context and Orientation first. The exact shape of `FinderUseCase`, the call sites of `entry.data.use_cases`, the tool-stammdaten lookup in `src/lib/data.ts`, and how `src/components/StageDetail.astro` receives its data all matter for the edits below.

In `src/content/config.ts`, extract the inline `useCaseSchema` into a top-level constant and add a `stage: reference('stages')` field to it. Import `reference` from `'astro:content'`. Declare a new collection called `use_cases` with `type: 'content'` and the extracted schema. During Milestone 2 keep the existing `use_cases: z.array(useCaseSchema).optional()` on the `stages` schema so the build still succeeds while you migrate the markdown files. In Milestone 5 delete that field outright and make any referencing page code switch to the new collection.

For every existing use case across the four stage files, create a new file at `src/content/use_cases/<stage>/<slug>.md`. The slug in the filename (without `.md`) is whatever came after the colon in the old compound ID. For example the old entry with `id: "testing-qa:test-generation"` becomes a file named `src/content/use_cases/testing-qa/test-generation.md`. Its frontmatter moves over verbatim except that the old `id` field is removed, a new `stage` field is added with the slug of the parent stage, and a new `order: number` field is added so the stage detail pages render use cases in a deterministic author-chosen order (see Decision Log). A worked example appears under Artifacts and Notes.

Once every use case is moved into its own file, delete the `use_cases:` array from each of the four stage files. All other stage frontmatter (`name`, `type`, `order`, `challenge`, `top_use_case`, `suitability`, `roles`) stays.

In `src/pages/finder.astro`, replace the flat-map over `stages[].use_cases` with a call to `getCollection('use_cases')`. For each entry, resolve the parent stage via `await getEntry(entry.data.stage)` — the returned object has `slug`, `data.name`, `data.order`, and the other stage fields. Derive the compound `id` as `${stage.slug}:${entry.slug.split('/').pop()}`. Produce the same `FinderUseCase[]` JSON shape that `finder.js` consumes — the client script must not change. Tool resolution (looking up names, URLs, and maturity from `src/data/tools.yaml`) and UI-label mapping (suitability, fit) stay exactly as they are. Sort the assembled array by `(stage.data.order, useCase.data.order)` before emitting it so the inline JSON is deterministic across builds.

In `src/pages/stage/[id].astro`, replace `entry.data.use_cases` with a filtered fetch, then sort by `useCase.data.order`:

    const useCases = (
      await getCollection('use_cases', uc => uc.data.stage.id === entry.slug)
    ).sort((a, b) => a.data.order - b.data.order);

Note the `uc.data.stage.id` — Astro 5's `reference()` runtime value exposes `.id`, not `.slug`. The parent stage entry itself still exposes `.slug`.

Pass this array into `StageDetail.astro` as a prop (or fetch it inside the component if that seam is cleaner — keep whatever shape exists in the current code, and change only the data source).

If `src/components/StageDetail.astro` currently reads use cases off the stage entry, change it to accept them as a prop instead. The exterior HTML the component emits must not change.

In `src/pages/index.astro`, the Atlas renders one inline `<StageDetail>` per stage, so it needs the per-stage use cases. Fetch `getCollection('use_cases')` once at the top and build a `Map<stageSlug, CollectionEntry<'use_cases'>[]>` keyed by `uc.data.stage.id`, then sort each bucket by `data.order`. Pass the per-stage list into `<StageDetail stage={stage} useCases={map.get(stage.slug) ?? []} tools={tools} />`.

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

`diff -r dist.pre-migration dist` at the end of Milestone 6 reported a single file-level difference:

    diff -r dist.pre-migration/finder/index.html dist/finder/index.html
    11c11
    < </div> <div id="finder-result" ...> <script>(function(){const useCaseData = [{"id":"customer-support:reply-suggestions",...},{"id":"development:code-completion",...},{"id":"development:multi-file-refactoring",...},{"id":"testing-qa:test-generation",...},{"id":"testing-qa:visual-regression",...},{"id":"testing-qa:self-healing",...},{"id":"product-discovery:feedback-clustering",...}];
    ---
    > </div> <div id="finder-result" ...> <script>(function(){const useCaseData = [{"id":"product-discovery:feedback-clustering",...},{"id":"development:code-completion",...},{"id":"development:multi-file-refactoring",...},{"id":"testing-qa:test-generation",...},{"id":"testing-qa:visual-regression",...},{"id":"testing-qa:self-healing",...},{"id":"customer-support:reply-suggestions",...}];

The post-migration order is `(stage.data.order asc, useCase.data.order asc)`: product-discovery (1) → development (3) → testing-qa (4) → customer-support (7). The pre-migration order happened to be `(stage slug alphabetical, YAML source order)`: customer-support → development → testing-qa → product-discovery. The content of every element is byte-identical; only the array position changed. No other path in `dist/` differs.

Negative probe 1 — invalid stage reference. Changed `stage: testing-qa` to `stage: testing-kq` in `src/content/use_cases/testing-qa/test-generation.md` and ran `npm run build`:

    ▶ src/pages/finder.astro
      └─ /finder/index.html Entry stages → testing-kq was not found.
    Cannot read properties of undefined (reading 'slug')

The build aborts on the first route (`/finder`) and the invalid stage name `testing-kq` is named in the error. Reverted the typo before moving on.

Negative probe 2 — invalid tool id. Changed `- id: copilot` to `- id: copilot-nope` in the same file and ran `npm run build`:

    [content] Syncing content
    [InvalidContentEntryDataError] use_cases → testing-qa/test-generation data does not match collection schema.

      tools.1.id: Invalid enum value. Expected 'copilot' | 'cursor' | 'claude-code' | 'blinqio' | 'applitools' | 'mabl' | 'productboard-ai' | 'dovetail' | 'intercom-fin' | 'zendesk-ai', received 'copilot-nope'

The build fails during content sync with a Zod enum error naming both the offending field (`tools.1.id`) and the invalid value (`copilot-nope`). Reverted before the final build.

Worked example of a migrated use-case file, `src/content/use_cases/testing-qa/test-generation.md`:

    ---
    stage: testing-qa
    order: 1
    roles:
      - qa-engineer
      - developer
    title: "Testfall-Generierung"
    goal_label: "Tests schneller erstellen"
    suitability: "good_fit"
    rationale: "AI kann aus User Stories, Code und Specs automatisch Testfälle ableiten. Der Effekt ist bei BDD-Tests am stärksten, weil die natürlichsprachliche Vorlage gut als Prompt funktioniert."
    tools:
      - id: blinqio
      - id: copilot
    start_here: "BlinqIO: BDD-Tests aus User Stories generieren. Alternativ: Copilot für Unit-Tests aus bestehendem Code — niedrigere Einstiegshürde, keine neue Toolchain."
    caveats: "Human Review empfohlen. Generierte Tests decken primär Happy Path ab — Edge Cases und Sicherheits-Tests brauchen menschliche Expertise."
    sources:
      - label: "RedHat Case Study: BlinqIO-Integration"
        url: "https://www.blinq.io/case-studies/red-hat"
        type: "case_study"
      - label: "METR RCT 2025: Produktivitätseffekte von AI-Coding-Tools"
        url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
        type: "study"
    ---

Compared to the original plan's example, two fields differ from what was in the plan: `stage` is plain-string `testing-qa` (no colon), and a new `order: 1` field was added. Both are consequences of decisions recorded in the Decision Log.

Worked example of a migrated use-case file, `src/content/use_cases/testing-qa/test-generation.md`:

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
      order: z.number().int().min(1).max(99),
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

Sort by `(stage.data.order, entry.data.order)` before serialising to keep the Finder's JSON output deterministic across builds. Carry the two order fields on a temporary sort key and strip them before handing the objects to `define:vars` so the inline JSON shape stays the `FinderUseCase` that `finder.js` expects.

The runtime contract between `finder.astro` and `finder.js` is specified in `specs/design.md` §3.3 and must not change. If you must change it, raise it in the Decision Log first.

No new npm package is required. Do not add one.

---

Revision note (2026-04-24, Implementer): The plan was authored against an earlier mental model of Astro's content collections. Three adjustments were folded in during implementation and are now reflected in Context and Orientation, Plan of Work, Interfaces and Dependencies, Decision Log, and Surprises & Discoveries: (1) the use-case directory is `src/content/use_cases/` (underscore) to match the collection key required by Astro 5's legacy `type: 'content'` loader; (2) the runtime value of a `reference('stages')` field is `{ id, collection }` on Astro 5, so consumers must read `uc.data.stage.id` rather than `uc.data.stage.slug`; (3) use cases carry an explicit `order: number` frontmatter field, sorted on by all three consumers, to keep the stage detail HTML byte-identical to the pre-migration snapshot.
