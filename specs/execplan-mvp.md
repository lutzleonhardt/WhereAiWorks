# Where AI Works — MVP Implementation ExecPlan

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan is maintained in accordance with `specs/PLANS.md` in this repository.

## Purpose / Big Picture

"Where AI Works" is an open-source reference website that answers the question: **Where does AI create real value in software companies today — and where doesn't it?**

After this change, someone who only has this repository can run:

    npm install
    npm run dev

and open `http://localhost:4321/` to see a working three-page Astro site:

1. **Atlas** (`/`) — A horizontal list of value-chain stage cards (four cards for the MVP: Product Discovery, Development, Testing & QA, Customer Support). Each card shows a name, a traffic-light suitability badge with a text label, a one-line challenge, and the top use case. Clicking a card reveals its full detail panel inline below the cards (via CSS `:target`, no JavaScript). A role dropdown dims cards that are not relevant to the selected role.
2. **Finder** (`/finder`) — A two-dropdown flow. Dropdown A ("Ich bin") picks a role; Dropdown B ("Ich will") then populates with the `goal_label` phrasings of the use cases for that role. Picking a goal reveals a result block with the matching stage, suitability label, rationale, recommended tools (name + maturity + link), a start-here recommendation, caveats, and sources.
3. **Stage detail page** (`/stage/[id]`) — One static HTML page per stage with the full detail panel and a back link to the Atlas. These are the canonical URLs for SEO and LinkedIn sharing.

"Testing & QA" is fully populated (three use cases with sources and caveats). The other three stages have one or two placeholder use cases each so the Atlas grid, the role filter, the Finder dropdowns, and the stage detail pages all work end-to-end.

A successful `npm run build` produces a `dist/` directory with static HTML for all three routes and no content-validation errors.

## Progress

- [x] (2026-04-24 12:00Z) Read specs (mvp.md, spec.md, design.md, PLANS.md) and author this ExecPlan.
- [x] (2026-04-24 13:40Z) Milestone 1 — Astro project scaffolded; `npm install --cache=./.npm-cache` and `npm run build` (with `ASTRO_TELEMETRY_DISABLED=1`) succeed.
- [x] (2026-04-24 13:45Z) Milestone 2 — `roles.yaml`, `tools.yaml`, and four stage markdown files written; Zod rejects unknown tool IDs as verified by temporarily renaming `blinqio` → `blinqio-nope`.
- [ ] Milestone 3 — Implement the Atlas page (`/`): header + nav layout, stage cards with suitability badge + top use case, role filter (Vanilla JS), inline detail panels via CSS `:target`.
- [ ] Milestone 4 — Implement stage detail pages (`/stage/[id]`) using the same `StageDetail.astro` component the Atlas uses inline.
- [ ] Milestone 5 — Implement the Finder (`/finder`): role-dependent goal dropdown, inline resolved JSON, Vanilla JS result rendering, `Im Atlas anzeigen` link deep-linking to the stage anchor.
- [ ] Milestone 6 — README, minimal CSS reset and layout, final `npm run build` and acceptance walkthrough; produce commit history.

Each milestone ends with a git commit. Commits are intentionally small and topical.

## Surprises & Discoveries

- Observation: Astro telemetry tries to write to `~/.config/astro/` on every build. In this sandboxed environment that path is read-only, which crashes the build before any work happens.
  Evidence: `ENOENT: no such file or directory, mkdir '/home/lutz/.config/astro'` in the initial `npm run build` output.
  Workaround: All `npm run …` scripts in `package.json` set `ASTRO_TELEMETRY_DISABLED=1`. This is also the right default for an open-source CLI tool the end user will run locally.

- Observation: `npm install` with the default cache (`~/.local/share/zed/node/cache`) failed with `EROFS` because the default cache path is on a read-only overlay in this environment.
  Evidence: `rofs Invalid response body while trying to fetch …/registry.npmjs.org/@types%2fjs-yaml`
  Workaround: Installing with `--cache=./.npm-cache` (ignored via `.gitignore`). For a normal dev machine the default cache works; this note is environment-specific.

- Observation: `git add -A` from the repo root fails because several device nodes (`.bash_profile`, `.bashrc`, etc.) are present alongside real files. They are not git-addable but also not ignorable without a targeted `.gitignore`.
  Evidence: `Fehler: .bash_profile: Kann nur reguläre Dateien, symbolische Links oder Git-Verzeichnisse hinzufügen.`
  Workaround: Stage project files explicitly rather than relying on `-A`. A future cleanup could add these dotfile names to `.gitignore`, but since they do not show up as untracked in a normal environment this is not required.

## Decision Log

- Decision: The ExecPlan lives at `specs/execplan-mvp.md`, not in `docs/plans/`, because the existing spec trail (mvp.md, spec.md, design.md) is under `specs/` and future readers should find all planning artefacts there.
  Rationale: Keep all planning and design documents colocated. PLANS.md is itself in `specs/`.
  Date/Author: 2026-04-24 / Claude Code

- Decision: Scaffold Astro manually (write `package.json`, `astro.config.mjs`, and every content file from scratch) rather than running `npm create astro@latest`.
  Rationale: The Astro starter wizard is interactive and pulls templates whose extras (telemetry prompts, example tutorial pages, TypeScript starter, Tailwind, etc.) we explicitly do not want. `design.md` §1.1 prescribes minimal dependencies: only `astro` plus `js-yaml` for the YAML data files. A hand-written scaffold matches that constraint exactly.
  Date/Author: 2026-04-24 / Claude Code

- Decision: Use `@astrojs/yaml` is not a real package; instead, either (a) import YAML via a Vite plugin or (b) load the YAML files at runtime of the Astro build via `js-yaml` in `src/content/config.ts`. We pick (b): `import { readFileSync } from 'node:fs'; import yaml from 'js-yaml';` inside `config.ts`. The tradeoff is an extra dependency (`js-yaml`), justified by the requirement that the Zod enums for roles and tools must be *derived from the YAML files at build time*.
  Rationale: `design.md` §4.2 explicitly depends on `import roles from '../data/roles.yaml'` style imports to derive Zod enums. Astro/Vite does not bundle YAML by default. Rather than add a Vite plugin (`@rollup/plugin-yaml` or `vite-plugin-yaml`) we load the files with Node's `fs` — this is a build-time script, not a browser bundle. Simplest dependency chain that still gives us strict referential integrity.
  Date/Author: 2026-04-24 / Claude Code

- Decision: UI language is German for the MVP.
  Rationale: Spec "offene Entscheidungen" lists language as undecided; mvp.md "Gestaltungsregel" specifies German goal labels ("Tests schneller erstellen") and the entire spec trail is in German. Keeping UI and content German avoids mixed-language scaffolding during the MVP. English localization is a Phase-3 concern.
  Date/Author: 2026-04-24 / Claude Code

- Decision: License and hosting are intentionally not resolved in the MVP implementation.
  Rationale: They are listed as open questions in `mvp.md` and `design.md`. The README will note both as TODO so the product owner can decide before the public launch. Neither blocks a working local build.
  Date/Author: 2026-04-24 / Claude Code

## Outcomes & Retrospective

_To be filled at the end of the final milestone._

## Context and Orientation

Before this ExecPlan, the repository contains only a `specs/` directory with four markdown files:

- `specs/mvp.md` — scope of the MVP (four stages, four roles, two entry points, Astro as framework, minimal styling).
- `specs/spec.md` — long-form product specification (value chain, personas, data model, governance).
- `specs/design.md` — technical design: project structure under `src/`, Zod schemas in `src/content/config.ts`, CSS `:target` inline details, Vanilla JS for the filter and Finder, ~60 lines of client JS total.
- `specs/PLANS.md` — meta-document describing what an ExecPlan must contain (this plan follows it).

No source code, no `package.json`, no Astro project exist yet. The working directory is `/home/lutz/projects/where_ai_works/WhereAiWorks`.

**Terms used in this plan (plain language):**

- *Astro* — a static-site generator for JavaScript. `astro build` reads files under `src/pages/` (one file per route) and renders them to static HTML in `dist/`. Pages are `.astro` files, which are HTML with a frontmatter-like script block at the top.
- *Content collection* — Astro's name for a directory of markdown files under `src/content/<name>/` that share a schema. The schema is declared in `src/content/config.ts` using `defineCollection({ schema: z.object({...}) })`. When Astro builds, it parses the YAML frontmatter of each `.md` file and validates it against the schema; invalid frontmatter breaks the build.
- *Zod* — a TypeScript schema library. Astro bundles it. We use it to validate stage frontmatter and to derive enums (valid role IDs, valid tool IDs) from YAML files at build time.
- *CSS `:target`* — a CSS pseudo-class that matches an element whose `id` equals the current URL hash. We use this to show exactly one stage-detail panel without JavaScript: clicking `<a href="#stage-testing-qa">` makes `<section id="stage-testing-qa">` match `:target`, and the CSS rule `.stage-detail { display: none } .stage-detail:target { display: block }` reveals it.
- *Island* — an Astro term for a client-side interactive component. We do **not** use islands in the MVP; we use plain `<script>` tags with Vanilla JavaScript.
- *YAML frontmatter* — the `---`-fenced block at the top of a markdown file containing structured key/value data. Astro parses it into a JavaScript object that the page template can read.

**Where each MVP feature lives in code:**

| Feature | File |
|---|---|
| Stage list + suitability labels | `src/content/stages/*.md` (frontmatter) |
| Tool catalogue (name, URL, maturity, pricing) | `src/data/tools.yaml` |
| Role catalogue (id, display name, aliases) | `src/data/roles.yaml` |
| Zod schemas and enum derivation | `src/content/config.ts` |
| Atlas page with cards + inline detail panels | `src/pages/index.astro` |
| Finder page | `src/pages/finder.astro` |
| Per-stage static detail page | `src/pages/stage/[id].astro` |
| Shared layout (header, nav, footer) | `src/layouts/Base.astro` |
| Stage card component | `src/components/StageCard.astro` |
| Stage detail component (used inline AND on `/stage/[id]`) | `src/components/StageDetail.astro` |
| Suitability badge (coloured dot + text label) | `src/components/SuitabilityBadge.astro` |
| Role filter logic on Atlas | `src/scripts/atlas.js` |
| Finder dropdown + result logic | `src/scripts/finder.js` |
| Minimal CSS reset + layout | `src/styles/global.css` |

## Plan of Work

The plan proceeds in six milestones. Each milestone ends with a `git commit` and leaves the project in a demonstrably-working state (either the build succeeds, or the dev server renders the expected page).

### Milestone 1 — Scaffold Astro project

Goal: `npm install` succeeds and `npm run build` produces an empty `dist/` with a tiny placeholder Atlas page. No content yet, but the toolchain works.

Files to create:

- `package.json` — declares `astro` and `js-yaml` as dependencies; scripts: `dev`, `build`, `preview`.
- `astro.config.mjs` — minimal Astro config (no integrations).
- `tsconfig.json` — extends `astro/tsconfigs/strict`.
- `src/content/config.ts` — empty collections export for now (we'll flesh out in M2).
- `src/layouts/Base.astro` — skeleton header + nav + slot + footer.
- `src/pages/index.astro` — "Where AI Works" headline and placeholder.
- `src/styles/global.css` — minimal CSS reset (box-sizing border-box, system font, line-height 1.5, max-width container).
- `.gitignore` — standard Node ignore (node_modules, dist, .astro).

Acceptance: `npm install && npm run build` prints no errors, produces `dist/index.html` containing the string "Where AI Works".

### Milestone 2 — Seed content + Zod schemas

Goal: The four stages, the role catalogue, and the tool catalogue are present and validated by Zod. `npm run build` fails if any frontmatter is invalid.

Files to create:

- `src/data/roles.yaml` — four roles: `product-owner`, `developer`, `qa-engineer`, `support-agent` (ids + display names + aliases as in `design.md` §4.5).
- `src/data/tools.yaml` — ten tools covering the Testing & QA use cases and at least one tool per other stage (copilot, cursor, claude-code, blinqio, applitools, mabl, productboard-ai, dovetail, intercom-fin, zendesk-ai). Fields: `id`, `name`, `category`, `url`, `maturity`, `pricing` (optional).
- `src/content/config.ts` — Zod enums derived from the two YAML files at build time; `useCaseSchema`; `stages` collection with `schema` as in `design.md` §4.2.
- `src/content/stages/testing-qa.md` — **fully populated**: three use cases (test generation, visual regression, self-healing) with rationale, tools, start-here, caveats, sources.
- `src/content/stages/development.md` — one placeholder use case (Code-Completion).
- `src/content/stages/product-discovery.md` — one placeholder use case (Feedback-Clustering).
- `src/content/stages/customer-support.md` — one placeholder use case (Antwortvorschläge).

Acceptance: `npm run build` succeeds; deliberately introducing an unknown tool id or role id in a stage file breaks the build with a clear Zod error.

### Milestone 3 — Atlas page

Goal: `npm run dev` at `/` shows four stage cards, each clickable; clicking reveals that stage's inline detail; the role filter dims non-relevant cards and clears the open detail.

Files to create:

- `src/components/SuitabilityBadge.astro` — coloured dot + text label; accepts a `suitability` enum.
- `src/components/StageCard.astro` — anchor-link card with `data-roles` attribute, suitability badge, name, challenge, top use case.
- `src/components/StageDetail.astro` — full detail panel (use cases with tools resolved from `tools.yaml`, markdown body for "Womit anfangen" / "Grenzen", sources list).
- `src/scripts/atlas.js` — ~20 lines: role-filter change handler toggling `.dimmed` on cards and resetting `location.hash`.
- `src/pages/index.astro` (rewrite) — reads `getCollection('stages')`, reads `tools.yaml` + `roles.yaml`, renders header, role `<select>`, card grid, then a detail container (`<div id="atlas">`) containing one `<section id="stage-…">` per stage. Includes `src/scripts/atlas.js` inline via `<script src="…">`.
- `src/styles/global.css` (extend) — `.stage-card`, `.stage-detail` + `:target` rules, `.dimmed`, suitability dot colours.

Acceptance: Visit `http://localhost:4321/`. Four cards visible. Click "Testing & QA" → detail panel appears with three use cases. Select "Developer" in filter → only Development + Testing & QA remain full opacity. Selecting a role with an open detail closes the detail.

### Milestone 4 — Stage detail pages

Goal: `/stage/testing-qa`, `/stage/development`, `/stage/product-discovery`, `/stage/customer-support` each render a standalone page with the same `StageDetail.astro` content.

Files to create:

- `src/pages/stage/[id].astro` — `getStaticPaths` returns one entry per stage (slug = filename stem); renders `<Base>` with `<StageDetail>` inside.

Acceptance: `npm run build` produces `dist/stage/testing-qa/index.html`; opening `/stage/testing-qa` in `npm run dev` shows the full detail content with a "Zurück zum Atlas" link and no JavaScript.

### Milestone 5 — Finder page

Goal: `/finder` renders two dropdowns; picking a role enables the goal dropdown; picking a goal reveals the resolved result block with live data.

Files to create:

- `src/components/FinderResult.astro` — HTML structure with empty spans/lists the script fills in.
- `src/scripts/finder.js` — ~50 lines implementing the dropdown dependencies and result rendering exactly as in `design.md` §3.3.
- `src/pages/finder.astro` — reads all stages + tools + roles, builds the flattened `FinderUseCase[]` array (with resolved tools and suitability labels), emits it inline via `<script define:vars={{ useCaseData }}>window.__FINDER_DATA__ = useCaseData;</script>`.

Acceptance: Visit `/finder`. Pick "QA Engineer" → "Ich will" dropdown shows "Tests schneller erstellen", "UI-Fehler automatisch erkennen", "Weniger Zeit mit kaputten Tests verbringen". Pick "Tests schneller erstellen" → result block shows Testing & QA, "gut geeignet", both BlinqIO and Copilot with links, the start-here text, caveats, both sources. "Im Atlas anzeigen" link goes to `/#stage-testing-qa`.

### Milestone 6 — Polish, README, final validation

Goal: Repository is a coherent first commit; README walks a novice through install / dev / build; validation passes; ExecPlan's Progress + Outcomes sections are finalised.

Files to create:

- `README.md` — project intent (one paragraph), quickstart (3 commands), repo layout, where to add a new stage/use case/tool, open questions (license, hosting).
- `src/styles/global.css` (final pass) — scan-ability, responsive grid with `auto-fit minmax(240px, 1fr)`, mobile-sane.

Final acceptance walkthrough:

1. Fresh `npm install && npm run build` → zero errors, `dist/` contains `index.html`, `finder/index.html`, `stage/{testing-qa,development,product-discovery,customer-support}/index.html`.
2. `npm run dev`, open `http://localhost:4321/` → atlas works as described in M3.
3. Follow "Im Atlas anzeigen" from Finder result → lands on atlas with correct stage open.
4. Break a frontmatter field intentionally (e.g. `suitability: "definitely"`) → build fails with Zod error, revert → build passes.
5. Update the ExecPlan: check every Progress box, fill in the Outcomes & Retrospective section.

## Concrete Steps

All commands run from the repository root `/home/lutz/projects/where_ai_works/WhereAiWorks`.

### One-time setup

    npm install

Expected transcript: astro + js-yaml + transitive dependencies install, `added ~200 packages` in a few seconds, no audit errors fatal to the build.

### Development loop

    npm run dev

Astro prints a local URL (default `http://localhost:4321/`). Leave running while editing.

### Build and inspect

    npm run build
    ls dist/

Expected transcript (abbreviated):

    17:00:00 [vite] building...
    17:00:02 [build] 6 page(s) built in 2.10s
    17:00:02 [build] Complete!

    dist/
    ├── finder/
    │   └── index.html
    ├── index.html
    └── stage/
        ├── customer-support/
        ├── development/
        ├── product-discovery/
        └── testing-qa/

## Validation and Acceptance

This plan is accepted when all of the following can be observed in order:

1. **Build is clean.** `npm run build` exits 0 and prints "Complete!".
2. **Atlas renders.** `npm run dev`, then browse to `/`, see four cards, each with a suitability badge + text label, name, challenge, top use case.
3. **Inline detail works without JS.** Disable JavaScript in the browser; clicking a card still opens the inline detail panel (CSS `:target`).
4. **Role filter works.** Re-enable JS. Choose "QA Engineer" in the role filter — "Product Discovery" and "Customer Support" are dimmed, "Development" and "Testing & QA" are not. Any open detail closes.
5. **Stage detail pages work.** Browse to `/stage/testing-qa` directly — full detail renders without any `:target` trickery.
6. **Finder works.** `/finder`: picking "QA Engineer" populates three goal options; picking a goal renders the result block with resolved tool names and URLs; "Im Atlas anzeigen" navigates back to `/#stage-testing-qa` with the right detail open.
7. **Validation catches bad data.** Introducing an invalid tool id or unknown role in a stage file causes the build to fail; reverting restores success.
8. **Open questions are documented.** README.md lists license and hosting as outstanding decisions.

If each step can be observed, the MVP is complete.

## Idempotence and Recovery

- All steps in "Concrete Steps" can be rerun safely. `npm install` is idempotent; `npm run build` always overwrites `dist/`.
- If a milestone leaves the build broken, the previous commit is the recovery point (`git reset --hard HEAD~1`).
- No database, no network calls, no state outside the working tree.

## Artifacts and Notes

Expected screenshot-equivalent of Atlas page (textual):

    Where AI Works                                   [Atlas] [Finder]
    ─────────────────────────────────────────────────────────────────

    Where AI Works

    Wo schafft AI in Softwareunternehmen realen Mehrwert — und wo nicht?

    Rolle: [Alle ▾]

    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │ Product      │  │ Development  │  │ Testing & QA │  │ Customer     │
    │ Discovery    │  │              │  │              │  │ Support      │
    │              │  │              │  │              │  │              │
    │ ● gut geeig. │  │ ● gut geeig. │  │ ● gut geeig. │  │ ● gut geeig. │
    │              │  │              │  │              │  │              │
    │ Top:         │  │ Top:         │  │ Top:         │  │ Top:         │
    │ Feedback-    │  │ Code-Com-    │  │ Testfall-    │  │ Antwort-     │
    │ Clustering   │  │ pletion      │  │ Generierung  │  │ vorschläge   │
    └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘

    Wähle eine Stufe, um Details zu sehen.

## Interfaces and Dependencies

### NPM dependencies

- `astro` — the framework; supplies `astro:content`, `getCollection`, `getStaticPaths`, the Zod re-export.
- `js-yaml` — YAML parsing at build time in `src/content/config.ts`.

That is all. No React, Vue, Svelte, Tailwind, Shadcn, lucide-icons, etc.

### Module contracts

In `src/content/config.ts`:

    import { defineCollection, z } from 'astro:content';
    import { readFileSync } from 'node:fs';
    import yaml from 'js-yaml';
    import { fileURLToPath } from 'node:url';

    const roles = yaml.load(readFileSync(
      new URL('../data/roles.yaml', import.meta.url), 'utf8'
    )) as { id: string; name: string; aliases?: string[] }[];

    const tools = yaml.load(readFileSync(
      new URL('../data/tools.yaml', import.meta.url), 'utf8'
    )) as { id: string; name: string; url: string; maturity: 'production' | 'experimental'; /* etc. */ }[];

    const roleEnum = z.enum(roles.map(r => r.id) as [string, ...string[]]);
    const toolIdEnum = z.enum(tools.map(t => t.id) as [string, ...string[]]);

    const suitabilityEnum = z.enum(['good_fit', 'conditional', 'partial', 'immature']);
    const sourceTypeEnum = z.enum(['study', 'case_study', 'vendor', 'community']);

    const useCaseSchema = z.object({
      id: z.string(),
      roles: z.array(roleEnum),
      title: z.string(),
      goal_label: z.string(),
      suitability: suitabilityEnum,
      rationale: z.string(),
      tools: z.array(toolIdEnum),
      start_here: z.string(),
      caveats: z.string(),
      sources: z.array(z.object({
        label: z.string(),
        url: z.string().url().optional(),
        type: sourceTypeEnum,
      })),
    });

    export const collections = {
      stages: defineCollection({
        type: 'content',
        schema: z.object({
          name: z.string(),
          type: z.enum(['primary', 'support']),
          order: z.number().int().min(1).max(20),
          challenge: z.string(),
          top_use_case: z.string(),
          suitability: suitabilityEnum,
          roles: z.array(roleEnum),
          use_cases: z.array(useCaseSchema),
        }),
      }),
    };

In `src/layouts/Base.astro`: props `{ title: string }`. Renders `<!doctype html>`, head with `<title>` + `<link rel="stylesheet" href="/..."/>` + viewport meta, body with header (project title + `<nav>` of `Atlas` / `Finder`), a `<slot/>`, and a footer (GitHub link, license TBD).

In `src/components/StageCard.astro`: props `{ stage: CollectionEntry<'stages'>; baseHash?: string }`. Renders an `<a class="stage-card" href={"#stage-" + stage.slug} data-roles={stage.data.roles.join(',')}>` with suitability badge, name, challenge, top use case.

In `src/components/StageDetail.astro`: props `{ stage: CollectionEntry<'stages'>; tools: Tool[]; roles: Role[]; standalone?: boolean }`. Renders the full panel. `standalone=true` omits the inline close-anchor and shows a "Zurück zum Atlas" link instead.

In `src/components/SuitabilityBadge.astro`: props `{ suitability: Suitability }`. Renders `<span class="suitability good-fit"><span class="dot"/>gut geeignet</span>`. Never dot-only — text label is mandatory (see `design.md` §1.4).

## Notes on revisions

This is version 1 of the ExecPlan. If scope or acceptance criteria are later changed, update:

1. The relevant milestone prose (be explicit about what changed vs. prior version).
2. The Progress list (split or add entries rather than rewriting history).
3. The Decision Log (add a new entry explaining the change and why).

The bottom of this document reserves a "Revision notes" section that future editors should append to rather than overwrite.

## Revision notes

- 2026-04-24 / Claude Code — Initial version written. No prior revisions.
