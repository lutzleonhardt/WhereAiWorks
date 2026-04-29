# Where AI Works

> Wo schafft AI in **Softwareunternehmen** heute realen Mehrwert — und wo (noch) nicht?

Eine offene, kuratierte Orientierungs- und Entscheidungshilfe. Vier Stufen der Software-Wertschöpfungskette mit ehrlicher Einordnung statt Hype.

## Schnellstart

    npm install
    npm run dev

Öffne http://localhost:4321/ — das ist der Atlas. Unter `/finder` liegt der Finder, unter `/stage/testing-qa` etc. die Detailseiten pro Stufe.

Produktions-Build:

    npm run build
    npm run preview

Synchronisations-Audit für top-level Use-Case-Meta:

    npm run audit:use-case-meta
    npm run audit:use-case-meta -- --stage development

## Was drin ist

| Route | Inhalt |
|---|---|
| `/` | Atlas mit 4 Stage-Karten, Rollen-Filter, Inline-Details via CSS `:target` |
| `/finder` | Zwei-Dropdown-Flow: „Ich bin" / „Ich will" → passendes Ergebnis |
| `/stage/[id]` | Eigenständige, kanonische Detailseite pro Stufe (SEO, Sharing) |

MVP-Content: **Testing & QA** ist mit drei Use Cases vollständig, die übrigen drei Stufen (Product Discovery, Development, Customer Support) haben je einen Use Case als Platzhalter für Phase 2.

## Datenmodell

Alle Inhalte leben als Markdown/YAML im Repo — versionierbar, community-editierbar, agent-generierbar.

- `src/content/stages/*.md` — eine Datei pro Wertschöpfungsstufe; Use Cases liegen als strukturiertes Array im YAML-Frontmatter
- `src/data/tools.yaml` — zentraler Tool-Katalog (ID, Name, URL, Maturity, Pricing)
- `src/data/roles.yaml` — Rollen-Registry (ID, Name, Aliases)
- `src/content/config.ts` — Zod-Schema; leitet Role- und Tool-Enums zur Build-Zeit aus den YAML-Dateien ab, sodass eine unbekannte Tool- oder Rollen-ID in einem Use Case den Build bricht

### Neuer Use Case / neuer Stage

Füge einen Eintrag in `use_cases:` einer bestehenden Stage-Datei hinzu oder lege eine neue `src/content/stages/<slug>.md` an. Pflichtfelder sind in `src/content/config.ts` definiert:

    id, roles, title, goal_label, suitability, rationale,
    tools, start_here, caveats, sources

`suitability` ∈ {`good_fit`, `conditional`, `partial`, `immature`}. Wenn ein verwendetes Tool noch nicht in `tools.yaml` steht, erst dort anlegen — sonst bricht der Build mit einer klaren Zod-Fehlermeldung.

## Synchronisations-Audit

`npm run audit:use-case-meta` prüft die Use-Case-Dateien auf fehlende top-level Metafelder, die bei Seed-Importen oder späteren Synchronisationen leicht verloren gehen:

- `adoption_maturity`
- `enterprise_relevance`
- `evidence_strength`

Der Check ist absichtlich read-only. Er dient als Guardrail nach Syncs oder Content-Migrationen und listet fehlende Felder pro Datei auf. Mit `-- --stage <slug>` lässt er sich auf eine konkrete Stage einschränken.

### Neues Tool

Anhängen an `src/data/tools.yaml`. Pflichtfelder: `id`, `name`, `category`, `url`, `maturity`.

### Neue Rolle

Anhängen an `src/data/roles.yaml`. Pflichtfelder: `id`, `name`. Das Zod-Schema leitet die Enums automatisch aus dieser Datei ab.

## Architektur

- **Framework:** Astro (statischer Output; Content Collections + Zod)
- **Interaktivität:** CSS `:target` für Inline-Detailpanels, ~60 Zeilen Vanilla-JS inline auf Atlas + Finder. Kein React/Vue/Svelte, keine Component Library, keine CSS-Frameworks.
- **Dependencies:** `astro`, `js-yaml` (für das YAML-Loading von `tools.yaml`/`roles.yaml` im Node-Build)

Details und Begründung: `specs/design.md` und `specs/execplan-mvp.md`.

## Specs

- `specs/spec.md` — Produktspezifikation
- `specs/mvp.md` — Scope-Entscheidungen und Umsetzungsreihenfolge
- `specs/design.md` — technische Design-Entscheidungen
- `specs/execplan-mvp.md` — Implementierungs-ExecPlan (siehe auch `specs/PLANS.md`)

## Lizenz

- **Code:** [MIT](LICENSE)
- **Content** (Use Cases, Tool-Beschreibungen, Quellen, Texte): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## Offene Entscheidungen

- **Sprache:** UI derzeit Deutsch. Englische Lokalisierung ist Phase-3.
- **Hosting:** GitHub Pages oder Netlify (beide kostenlos mit Custom Domain).
