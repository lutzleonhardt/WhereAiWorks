# Tools-Seite — Spec

> **Status:** Phase 1 in Umsetzung — statische Tabelle aus den heute vorhandenen Daten. Phase 2b (zusätzliche Tool-Felder wie Hosting/Lizenz/Pricing) bleibt vorgemerkt.

> **Leitfrage:** „Welches Tool taugt für meinen Kontext?" — als zweite Lesart neben Atlas (Stages) und Finder (Rolle × Ziel).

---

## 0. Migrationsstand-Hinweis

Aktuell sind 4 von 11 Stages in `src/content/use_cases/` überführt (architecture-design, customer-support, deployment-devops, development); der Rest liegt im Project Seed. Die Tools-Liste zeigt deshalb einen Zwischenstand. Die UI muss das transparent kommunizieren (Lede-Counter, Stage-Filter zeigt nur die 4 vorhandenen Stages). Schwellwerte (Caveats-Bucketgrenzen, Long-Tail-Default-Filter) sind beim Vollbestand gegebenenfalls zu re-justieren.

---

## 1. Zweck & Abgrenzung

Eine eigene Top-Level-Route `/tools`, die **die andere Leserfrage** bedient: Atlas/Finder beantworten *„wo lohnt sich AI?"*; die Tools-Seite beantwortet *„welches Tool passt — und wo wird es empfohlen?"*.

**Was es ist**

- Sortier- und filterbare Tabelle aller Tools aus `src/data/tools.yaml`
- Reverse-Lookup: pro Tool sichtbar, in welchen Stages / Use Cases es mit welcher `suitability` empfohlen wird
- Optional: Detailseite `/tools/<id>` pro Tool (rein generiert aus den Use-Case-Referenzen, keine Extra-Pflege)

**Was es nicht ist**

- Keine G2-/AlternativeTo-Konkurrenz — Differenzierung kommt ausschließlich aus dem Kontext-Bezug („für Stage X als `conditional` empfohlen, weil …")
- Kein Pricing in absoluten Zahlen — veraltet zu schnell
- Kein globaler „Best Tool"-Score — politisch riskant und irreführend; Scores immer kontextualisiert (pro Stage / pro Rolle)

---

## 2. Personae

- **Tool-Käufer:** „Ich kenne Cursor — taugt das für uns?" → Reverse-Lookup
- **Enterprise-Architekt:** „Zeig mir alle Tools, die EU-hostbar und SOC2-zertifiziert sind" → Filter
- **Stratege:** „Welche Tools decken viele Stages ab?" → Sortierung nach Breite

---

## 3. Filter- und Sortier-Achsen

### 3.1 Aus den vorhandenen Daten ableitbar (Phase 1, kein neues Feld)

| Achse | Quelle | Zweck |
|---|---|---|
| Kategorie | `tools.yaml.category` | Coding / Other / … |
| Maturity | `tools.yaml.maturity` | `production` / `experimental` (UI-Label: `production` / `preview`) |
| Stages | abgeleitet aus Use-Case-Referenzen | in welchen Stages das Tool empfohlen wird |
| Use-Case-Tiefe | abgeleitet | Anzahl Empfehlungen gesamt |
| Suitability-Mix | abgeleitet aus `tools[].fit` der referenzierenden Use Cases | „X von Y Empfehlungen sind `good_fit`" |
| Caveats-Dichte | abgeleitet, **per UC normalisiert** | siehe 3.1.1 |

**Bewusst nicht in der Tabelle:** Rollen-Reichweite. Verteilungs-Analyse über die heute vorhandenen Daten zeigt, dass 95 % der Tools 1–2 Rollen ansprechen — die Spalte hat fast immer denselben Wert und taugt weder als Sortier- noch als Differenzierungs-Achse. Bei Vollbestand erneut prüfen.

#### 3.1.1 Caveats-Level — Berechnung

Per UC normalisiert, **nicht** als Total: `caveats_level = bucket(sum(caveats) / uc_count)`. Sonst dominieren Allrounder (Copilot, Claude Code) automatisch das obere Ende, weil Caveats linear mit der UC-Anzahl mitwachsen — das misst Häufigkeit, nicht Tool-Qualität.

Bucketgrenzen (Stand 4 von 11 Stages, kann beim Vollbestand justiert werden):

- Level 1: < 2 Caveats / UC
- Level 2: 2 – < 4
- Level 3: 4 – < 7
- Level 4: ≥ 7

Verteilung über aktuell 475 referenzierte Tools: 138 / 87 / 124 / 126 — gesund über alle vier Levels.

### 3.2 Neue Felder am Tool (Phase 2b, schrittweise pflegbar)

Geordnet nach erwartetem Mehrwert für Enterprise-Auswahl:

| Feld | Werte | Begründung |
|---|---|---|
| `hosting` | `saas` \| `self-hosted` \| `on-prem` \| `air-gapped` (Mehrfach) | Hauptfilter für Souveränität |
| `data_residency` | `eu` \| `us` \| `global`, plus Flag `no_train` | DSGVO/Schrems II |
| `compliance` | Liste aus `soc2`, `iso27001`, `bsi_c5`, `dsgvo_avv` | Pflicht-Checkliste in Procurement |
| `license` | `commercial` \| `open_source` \| `source_available` | Open-Source-Filter |
| `pricing_model` | `free` \| `freemium` \| `paid` \| `enterprise_tier` | *Modell*, nicht Preis |
| `vendor_origin` | ISO-Land oder Region (`de`, `eu`, `us`, `cn`, …) | Souveränität, ohne Wertung |
| `integrations` | Liste aus `ide_plugin`, `cli`, `api`, `mcp_server`, `web_ui` | Architektonische Eignung |

**Pflegestrategie:** Felder optional einführen; UI zeigt „unbekannt" statt zu blocken. Schemamigration in `src/content/config.ts` schrittweise. Belege via `sources.yaml`-Verlinkung pro Feld erwägen (analog zu Use Cases), um die „ehrliche Einordnung"-Linie zu halten.

### 3.3 Bewusst nicht aufgenommen

- **Globaler „Best"-Score** — nur Score *pro Stage / pro Rolle*
- **Trending / Popularität** — widerspricht Anti-Hype-Positionierung
- **Konkreter Preis (€/Monat)** — veraltet zu schnell; Pricing-*Modell* statt -*Wert*

---

## 4. Sortierung

- **Default (Build-Zeit):** Anzahl `good_fit`-Empfehlungen DESC, mit Use-Case-Anzahl DESC als Tiebreaker, alphabetisch als zweiter Tiebreaker. Begründung: Die Power-Law-Verteilung der Use-Case-Anzahl (79 % der Tools mit 1 UC) macht UC-Count als Default-Sort uninteressant — Highlights kommen so nach oben.
- **Klickbare Sort-Achsen** in den Spaltenköpfen: Empfohlen in (Stages-Anzahl), Use Cases, Eignung (good_fit-Count), Caveats, Maturity, Tool-Name (alphabetisch).
- **Mehrspaltige Subsortierung:** UI-Pattern Shift+Klick auf Spaltenkopf → Sekundär-/Tertiärschlüssel; visualisiert über kleine Mono-Badges (`1↓`, `2↑`, `3↓`) am Spaltenkopf.

## 4a. Tabellen-Spalten (Phase 1)

Sechs Spalten, gemeinsame Breiten-Summe = 100 %:

| # | Spalte | Breite | Inhalt |
|---|---|---|---|
| 1 | Tool | 30 % | Name (Serif) · Vendor-Host abgeleitet aus `url` (Mono mute) · Kategorie (Mono mute uppercase) |
| 2 | Empfohlen in | 16 % | Stage-Badges (Kürzel: ARCH, DEV, TEST, OPS, …) |
| 3 | Use Cases | 10 % | Mono-Zahl |
| 4 | Eignung | 26 % | gestapelte Suitability-Pills mit Mono-Zähler („`6×` good_fit") |
| 5 | Caveats | 10 % | 4-Striche-Bar-Indikator (Level 1–4 nach 3.1.1) |
| 6 | Maturity | 8 % | Mono-Tag, `production` neutral, `preview` (= experimental) in amber |

---

## 5. Detailseite `/tools/<id>` (optional, Phase 2c)

Rein generiert, keine Extra-Pflege:

- Stammdaten aus `tools.yaml`
- „Empfohlen in" — gruppiert nach Stage, mit `suitability`-Badge und Link zum Use Case
- Aggregierte `caveats` und `start_here`-Hinweise aus den Use Cases
- Ggf. Quellen-Backlink (Tools, die in Quellen aufgeführt sind)

SEO-Nutzen: Tool-Namen sind hochfrequente Suchbegriffe; jede Detailseite landet Leser direkt im Empfehlungs-Kontext.

---

## 6. Quellen-Liste — bewusst *nicht* parallel

`src/data/sources.yaml` enthält ~950 Einträge mit `label + url + type`. Eine Top-Level-Route lohnt nicht:

- Flache Liste skaliert schlecht, Vendor-Docs dominieren → wirkt wie Marketing-Aggregator
- Quellen sind Backend-Asset, kein Reader-Feature

Stattdessen, falls Bedarf:

- Quellen-Sektion pro Stage / pro Use Case (bereits über `sources` im Frontmatter abgedeckt)
- Optional `/about/methodologie` mit Counts und Methodik statt Volltextliste

---

## 7. Technische Constraints

- **Kein Framework** (kein React/Vue/Svelte/Angular) — bleibt linientreu zu `specs/design.md`
- **Astro statisch** + Vanilla-JS für Filter/Sort (siehe `specs/design.md`)
- Bei ~340 Tools ist clientseitiges Sortieren/Filtern problemlos
- Wenn Encapsulation hilft: Web Component als Option, aber erst wenn Wiederverwendung sichtbar wird

---

## 8. Offene Fragen (vor Umsetzung klären)

- Detailseite `/tools/<id>` Pflicht oder Nice-to-have?
- Quellen-Verlinkung pro Tool-Feld (Belegpflicht für `compliance`, `data_residency`)?
- Persistierung der Filter-/Sort-State in URL (Shareability) — ja/nein?
- Mobile: Tabelle vs. Card-Liste?
