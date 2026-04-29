# Mitmachen: Daten zum Atlas beitragen

Danke, dass du den Atlas mit erweitern willst. Dieses Dokument ist dein
Einstieg: erst **was wir suchen und was nicht**, dann die **inhaltlichen
Kriterien**, dann die **Mechanik** (wo welche Datei mit welchen Feldern
liegt), zum Schluss der **PR-Ablauf**.

## TL;DR — In drei Schritten zum PR

Für den häufigsten Fall („ein Tool zu einem bestehenden Use Case
ergänzen"):

1. **Datei finden** unter `src/content/use_cases/<stage>/<slug>.md`,
   neuen Eintrag im `tools:`-Array ergänzen — Minimal-Form:

   ```yaml
   - id: <tool-id-aus-tools.yaml>
     fit: good_fit              # oder conditional | partial | immature
     why_it_fits: "1–3 Sätze, warum dieses Tool für genau diesen Use Case passt."
   ```

2. **Tool fehlt noch in `src/data/tools.yaml`?** Eintrag anhängen
   (Pflicht: `id`, `name`, `category`, `url`, `maturity`). Quellen
   analog in `src/data/sources.yaml`.

3. **Vor dem Push:** `npm run build` muss grün sein. Im PR die acht
   Fragen aus der PR-Template-Vorgabe beantworten.

Größeres geplant — neuer Use Case, neue Rolle, oder Tool mit unklarer
DACH-/DSGVO-Lage? Dann bitte erst **„Bevor du anfängst"** und für die
Detailfelder den Mechanik-Teil lesen.

---

## Was wir suchen — und was nicht

Der Atlas ist bewusst kuratiert, kein offenes „AI-Tools-Verzeichnis".
Beiträge sind willkommen für:

- **Use Cases** — neue konkrete Workflows in einer bestehenden Stage
- **Tools** — neue Einträge im Tool-Katalog, sofern sie zu mindestens
  einem Use Case beitragen
- **Sources** — neue Belegstellen für Tool- oder Use-Case-Aussagen
- **Rollen** — nur, wenn keine bestehende Rolle (auch nicht über Aliase)
  passt

Nicht angenommen werden:

- Generische „Top AI Tools"-Listen ohne konkreten Use-Case-Bezug
- Tools ohne unabhängige oder Praktiker-Evidenz
- Reine Vendor-Pitches oder Roadmap-Versprechen
- Neue **Stages** — die Wertschöpfungs-Stufen sind bewusst geschlossen

Maintainer-interne Regeln zur automatischen Discovery-Übernahme stehen in
[`docs/curation-policy.md`](docs/curation-policy.md), die Abgrenzung der
Rollen in [`docs/role-taxonomy.md`](docs/role-taxonomy.md).

## Bevor du anfängst — inhaltliche Kriterien

Der Atlas richtet sich an DACH-Teams und nimmt Datenschutz, Arbeitsrecht
und Beschaffungsrealität ernst. Damit dein Beitrag eine Chance hat,
prüfe gegen diese Kurzfassung — Volltext und Stop-Kriterien stehen in
[`docs/dach-curation.md`](docs/dach-curation.md):

- **Echter Fit** — das Tool löst genau diesen Workflow, heute, nicht auf
  der Roadmap.
- **Evidenz** — Vendor-Quelle plus möglichst eine unabhängige Quelle;
  Praktikerbelege ergänzen.
- **DSGVO/Hosting** — Datenresidenz für die *AI-Funktion*, nicht nur für
  die Kern-SaaS; AVV/DPA, Sub-Prozessoren, Schrems-II-Lage klären.
- **Enterprise-Operabilität** — SSO, Audit-Logs, Admin-Controls,
  Vertragbarkeit; sonst `enterprise_readiness` herabstufen.
- **DACH-Realität** — deutsche Sprache wo nötig, Einbettung in
  vorhandene Stacks (M365, SAP, Jira, …), regulierte Branchen.
- **Caveats sind Pflicht** — Gründe, warum jemand das Tool ablehnen
  könnte, gehören in den Eintrag, nicht in die Vergessenheit.
- **`fit` und `enterprise_readiness` sind getrennt** — ein Tool kann gut
  passen und trotzdem nicht enterprise-tauglich sein, und umgekehrt.

Im Zweifel **konservativer einstufen** und ggf. `fit: conditional` oder
`partial` wählen, statt zu optimistisch `good_fit` zu setzen.

---

## Wie du beiträgst — Mechanik

Schema und Pflichtfelder werden zur Build-Zeit hart validiert. Eine
unbekannte Tool-, Rollen- oder Source-ID in einem Use Case bricht den
Build mit einer Zod-Fehlermeldung — das ist Absicht.

Lokal vor dem Commit verifizieren:

    npm run build
    npm run audit:use-case-meta

### Überblick: Wo liegt was?

| Inhalt | Pfad | Format |
|---|---|---|
| Use Case | `src/content/use_cases/<stage>/<slug>.md` | Markdown mit YAML-Frontmatter |
| Tool-Katalog | `src/data/tools.yaml` | YAML-Liste |
| Rollen-Registry | `src/data/roles.yaml` | YAML-Liste |
| Quellen-Registry | `src/data/sources.yaml` | YAML-Liste |
| Schema (Zod) | `src/content/config.ts` | TypeScript |

### ID-Konvention

IDs für Tools und Sources werden aus der primären URL abgeleitet: Host
und ggf. Pfad-Slug, alle Trennzeichen werden zu `-`. Beispiele:

- `https://www.deque.com/axe/devtools/` → `deque-com-axe-devtools`
- `https://github.com/dequelabs/axe-core` → `github-com-dequelabs-axe-core`
- `https://news.ycombinator.com/from?site=evinced.com` → `news-ycombinator-com-from-site-evinced-com`

Rollen-IDs sind kurze, menschenlesbare Slugs (`software-engineer`,
`qa-engineer`). Use-Case-Slugs (Dateiname) ebenfalls
(`accessibility-testing`, `flaky-test-triage`).

### Neuer Use Case

Lege eine neue Datei `src/content/use_cases/<stage>/<slug>.md` an. Der
`<stage>`-Ordner muss existieren — verfügbare Stages siehe
`src/content/stages/`. Ein Use Case ist immer einer Stage zugeordnet.

#### Frontmatter — Pflichtfelder

| Feld | Typ | Bedeutung |
|---|---|---|
| `stage` | Stage-ID | Muss exakt einem Eintrag aus `src/content/stages/` entsprechen |
| `order` | int (1–99) | Sortier-Position innerhalb der Stage |
| `roles` | Liste von Rollen-IDs | Muss in `roles.yaml` existieren |
| `title` | string | Anzeige-Titel |
| `goal_label` | string | Kurze Outcome-Phrase, wie sie im Finder erscheint („… vorab automatisch finden") |
| `suitability` | enum | `good_fit` \| `conditional` \| `partial` \| `immature` — wie tauglich ist AI für diese Aufgabe? |
| `rationale` | string | 2–4 Sätze: Warum diese Einordnung? Mit konkreten Belegen |
| `tools` | Liste (siehe unten) | Mind. 1 Tool-Eintrag |
| `start_here` | string | Konkrete Empfehlung für den Einstieg |
| `caveats` | string | Grenzen, Risiken, was AI hier *nicht* leistet |
| `sources` | Liste von `{id, note?}` | Use-Case-übergreifende Belege; darf leer (`[]`) sein, wenn alle Belege tool-spezifisch sind |

#### Frontmatter — empfohlene optionale Felder

Diese drei Felder sind formal optional, werden aber vom Audit-Skript
geprüft (`npm run audit:use-case-meta`). Bitte nach Möglichkeit setzen:

| Feld | Werte |
|---|---|
| `adoption_maturity` | `mainstream` \| `growing` \| `emerging` |
| `enterprise_relevance` | `high` \| `medium` \| `low` |
| `evidence_strength` | `strong` \| `medium` \| `weak` |

#### Aufbau eines `tools[]`-Eintrags

```yaml
tools:
  - id: deque-com-axe-devtools           # muss in tools.yaml existieren
    fit: good_fit                        # good_fit | conditional | partial | immature
    why_it_fits: "1–3 Sätze zum Why für genau diesen Use Case."
    enterprise_readiness: enterprise_ready   # optional: enterprise_ready | team_ready | evaluation_only | irrelevant_for_enterprise | unknown
    confidence: high                         # optional: high | medium | low
    caveats:                                  # optional, Liste
      - "Konkrete Einschränkung 1"
    sources:                                  # optional, tool-spezifische Belege
      - id: deque-com-axe-devtools
      - id: reddit-com-r-accessibility
        note: "Praktiker-Tenor 2025"
    practitioner_signal:                      # optional
      volume: high                            # high | medium | low | none
      tenor: positive                         # positive | mixed | polarized | negative | unknown
      praise: ["…"]                           # optional
      complaints: ["…"]                       # optional
```

Wichtig: `suitability` (Use-Case-Ebene) und `fit` (Tool-Ebene) sind zwei
unterschiedliche Dimensionen. `suitability` = „Ist AI hier sinnvoll?",
`fit` = „Wie gut passt dieses konkrete Tool für diesen Use Case?".

#### Vorlage

```yaml
---
stage: testing-qa
order: 5
roles:
  - qa-engineer
title: <Titel>
goal_label: <Outcome in einer Phrase>
suitability: conditional
adoption_maturity: growing
enterprise_relevance: medium
evidence_strength: medium
rationale: <2–4 Sätze>
tools:
  - id: <tool-id-aus-tools.yaml>
    fit: good_fit
    why_it_fits: "<1–3 Sätze>"
    enterprise_readiness: team_ready
start_here: <konkrete Einstiegs-Empfehlung>
caveats: <Grenzen, was AI hier nicht leistet>
sources:
  - id: <source-id-aus-sources.yaml>
---
```

### Neues Tool

Anhängen an `src/data/tools.yaml`.

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `id` | ✓ | URL-abgeleiteter Slug, siehe ID-Konvention oben |
| `name` | ✓ | Anzeige-Name inkl. ggf. Sub-Produkt |
| `category` | ✓ | Eine bestehende Kategorie (siehe unten) |
| `url` | ✓ | Primäre Produkt-URL |
| `maturity` | ✓ | `production` \| `experimental` |
| `vendor` | ○ | Hersteller, falls aus `name` nicht eindeutig |
| `description` | ○ | 1 Satz, was das Tool tut |
| `pricing` | ○ | Kurze Notiz (`free`, `paid`, `freemium`, …) |

Bestehende Kategorien (bitte zuerst eine davon nehmen, neue Kategorie
nur, wenn keine passt): `audit`, `coding`, `data`, `deployment-devops`,
`discovery`, `grc`, `hr`, `observability`, `productivity`, `sales`,
`security`, `siem`, `support`, `testing`, `other`.

Beispiel:

```yaml
- id: deque-com-axe-devtools
  name: axe DevTools
  vendor: Deque Systems
  category: testing
  url: https://www.deque.com/axe/devtools/
  maturity: production
  pricing: freemium
```

### Neue Rolle

Anhängen an `src/data/roles.yaml`. Bevor du eine neue Rolle anlegst,
prüfe bitte [`docs/role-taxonomy.md`](docs/role-taxonomy.md) — viele
Job-Titel fallen unter eine bestehende Rolle und gehören dann als
`aliases`-Eintrag dorthin.

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `id` | ✓ | Slug, z.B. `qa-engineer` |
| `name` | ✓ | Anzeige-Name |
| `aliases` | ○ | Liste alternativer Bezeichnungen für die Suche |

Beispiel:

```yaml
- id: qa-engineer
  name: "QA Engineer"
  aliases: ["SDET", "Test Engineer", "Test Manager"]
```

Eine neue Rolle, die nirgendwo in einem Use Case referenziert wird, ist
erlaubt, sollte aber im PR begründet werden.

### Neue Source

Anhängen an `src/data/sources.yaml`. Sources sind die Belegstellen, auf
die `sources:` in Use Cases und Tool-Einträgen referenziert.

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `id` | ✓ | URL-abgeleiteter Slug, siehe ID-Konvention oben |
| `label` | ✓ | 1 Satz: was belegt diese Quelle? |
| `type` | ✓ | siehe Liste unten |
| `url` | ○ | Direkter Link zur Quelle |
| `captured_at` | ○ | ISO-Datum, wann die Quelle ausgewertet wurde |

Source-Typen (laut Schema): `study`, `case_study`, `vendor`, `vendor_doc`,
`community`, `review`, `blog`, `documentation`, `news`.

Beispiel:

```yaml
- id: deque-com-axe-devtools
  label: Produktseite axe DevTools — beschreibt IGT- und Assistant-Module
  url: https://www.deque.com/axe/devtools/
  type: vendor_doc
  captured_at: 2025-09-12
```

Tipp: Pro neuem Tool entsteht in der Regel mindestens eine Source mit
demselben ID-Stamm (Produkt-/Doku-URL). Praktiker-Belege (Reddit, HN,
Blogs) sind zusätzlich erwünscht — die Trennung von Vendor-Claims und
unabhängigen Stimmen ist Teil der Curation-Policy.

---

## PR einreichen

### Vor dem Push

- `npm run build` lokal grün — der Build deckt fast alle Schema-Fehler auf.
- `npm run audit:use-case-meta` zeigt fehlende empfohlene Felder.
- Ein PR pro thematische Einheit (z.B. „neuer Use Case + zugehörige neue
  Tools/Sources"). Nicht zehn unverbundene Einträge in einen PR mischen.

### PR-Beschreibung — diese Punkte beantworten

Für jeden PR, der einen Use Case oder ein Tool hinzufügt oder materiell
ändert, gehören diese acht Antworten in die PR-Beschreibung. Ohne sie
ist der PR unvollständig:

1. Was genau wird hinzugefügt oder geändert?
2. Zu welcher Stage und welchem Use Case gehört es?
3. Welche Quellen belegen Fit, Readiness und Caveats?
4. Warum ist das speziell für DACH-Teams relevant?
5. Wo liegen die Compliance- und Datenresidenz-Constraints?
6. Standalone-Tool, Suite-Feature oder Baustein?
7. Welche zentralen Caveats oder Ausschluss-Bedingungen gibt es?
8. Warum ist das besser als ein bereits gelisteter Incumbent oder eine
   Suite-Lösung?

Inhaltliche Diskussion (z.B. „passt dieser Use Case in Stage X?") gerne
im PR oder vorab als Issue.

### Lizenz

- Code-Beiträge: [MIT](LICENSE)
- Inhalte (Use Cases, Beschreibungen, Quellen-Annotationen):
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
