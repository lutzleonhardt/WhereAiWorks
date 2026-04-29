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

- `src/content/stages/*.md` — eine Datei pro Wertschöpfungsstufe (Stage-Metadaten, ohne Use Cases)
- `src/content/use_cases/<stage>/<slug>.md` — ein Use Case pro Datei; verweist via `stage` auf eine Stage
- `src/data/tools.yaml` — zentraler Tool-Katalog
- `src/data/roles.yaml` — Rollen-Registry
- `src/data/sources.yaml` — zentrale Quellen-Registry, auf die Use Cases und Tool-Einträge per ID referenzieren
- `src/content/config.ts` — Zod-Schema; leitet Role-, Tool- und Source-Enums zur Build-Zeit aus den YAML-Dateien ab, sodass eine unbekannte ID in einem Use Case den Build bricht

## Beitragen

Anleitung zum Anlegen neuer **Use Cases, Tools, Rollen und Sources** — inklusive Pflichtfelder, Schema-Details und Beispielen — in [`CONTRIBUTING.md`](CONTRIBUTING.md). Inhaltliche Qualitätskriterien (DSGVO, Evidenz, `fit` vs. `enterprise_readiness`, Stop-Kriterien) in [`docs/dach-curation.md`](docs/dach-curation.md), Maintainer-interne Discovery-Übernahme-Regel in [`docs/curation-policy.md`](docs/curation-policy.md), Rollen-Abgrenzung in [`docs/role-taxonomy.md`](docs/role-taxonomy.md).

## Synchronisations-Audit

`npm run audit:use-case-meta` prüft die Use-Case-Dateien auf fehlende top-level Metafelder, die bei Seed-Importen oder späteren Synchronisationen leicht verloren gehen:

- `adoption_maturity`
- `enterprise_relevance`
- `evidence_strength`

Der Check ist absichtlich read-only. Er dient als Guardrail nach Syncs oder Content-Migrationen und listet fehlende Felder pro Datei auf. Mit `-- --stage <slug>` lässt er sich auf eine konkrete Stage einschränken.

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
