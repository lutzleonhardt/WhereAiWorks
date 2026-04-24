
# AI Wertschöpfungskette — Spezifikation

> **Leitfrage:** Wo schafft AI in Softwareunternehmen heute realen Mehrwert — und wo (noch) nicht?

> Eine offene, kuratierte Entscheidungs- und Orientierungshilfe für den sinnvollen Einsatz von AI in Softwareunternehmen. Nicht Vollständigkeit ist der Wert, sondern Einordnung.

---

## 1. Was das ist — und was nicht

### Was es ist

Ein öffentliches, community-editierbares **Orientierungs- und Entscheidungstool**, das Softwareunternehmen hilft einzuordnen, wo AI entlang ihrer Wertschöpfungskette realistisch einsetzbar ist — mit welchen Tools, unter welchen Bedingungen, mit welchem Reifegrad und welchen Grenzen.

### Was es nicht ist

- Keine Tool-Datenbank (davon gibt es genug)
- Kein Produktkatalog
- Kein monetäres Produkt
- Kein Marketing-Funnel

### Strategische Rolle

Das Projekt ist ein **strategisches Asset** — kein direktes Umsatzprodukt:

- **Proof of Expertise** — zeigt strukturiertes, differenziertes Denken über AI hinaus nur Coding
- **Türöffner** — Gesprächsgrundlage für Workshops, Talks, Beratung
- **Content-Maschine** — Basis für LinkedIn-Posts, Vorträge, Artikel
- **Community-Signal** — Open Source signalisiert Glaubwürdigkeit und Transparenz
- **Anlaufstelle** — Ziel: "Wer hat einen vernünftigen Überblick über AI-Einsatz in Softwarefirmen?"

### Positionierung (Claim)

> Eine offene, kuratierte Referenz dafür, wo AI entlang der Software-Wertschöpfungskette realistisch einsetzbar ist — mit ehrlicher Einordnung statt Hype.

### Rolle des Maintainers

Nicht alles selbst aktuell halten, sondern:

- Initiator und Kurator
- Framework-Geber (Struktur, Schema, Qualitätskriterien)
- Qualitätsfilter (Einordnung, Urteil, Differenzierung)
- Community-Moderator (PRs reviewen, Beiträge einordnen)

---

## 2. Kernprinzip: Einordnung statt Katalog

Der entscheidende Mehrwert ist nicht "welche Tools gibt es", sondern:

### Vier Fragen, die jeder Eintrag beantworten muss

| # | Frage | Entspricht |
|---|---|---|
| 1 | **Wo bin ich?** — In welcher Stufe der Wertschöpfungskette arbeite ich? | Orientierung |
| 2 | **Ist AI hier sinnvoll?** — Ehrliches Urteil: ja / ja mit Grenzen / nur Teilaufgaben / eher nein | Eignungsprüfung (Use-Case-Ebene) |
| 3 | **Welche Tools sind relevant, und wie gut passt jedes?** — Eingeordnet nach Reifegrad, Grenzen, DSGVO, Mittelstandstauglichkeit **und Fit im konkreten Use Case** | Tool-Einordnung (im Kontext) |
| 4 | **Womit anfange?** — Konkreter Low-Risk-Einstieg, Voraussetzungen, typische Stolpersteine | Handlungsorientierung |

Frage 2 und 3 sind **bewusst getrennte Ebenen**: Die Use-Case-Eignung ist die grundsätzliche Aussage, ob AI für diese Art von Aufgabe überhaupt sinnvoll ist. Der Tool-Fit im Kontext verfeinert, wie gut ein konkretes Tool diese Aufgabe abdeckt. Beide Ebenen werden im Datenmodell separat modelliert (siehe `design.md` Abschnitt 4.1.1).

### Einstiegsperspektive des Nutzers

Die Nutzer kommen nicht mit "zeig mir die Wertschöpfungskette", sondern mit Fragen wie:

- "Ich bin im Support und will Antwortzeiten reduzieren"
- "Ich bin PO und will Kundenfeedback clustern"
- "Ich bin QA und will Testfälle schneller erzeugen"
- "Ich bin DevOps und will Incident-Triage beschleunigen"

Die Wertschöpfungskette ist die strukturierende Logik im Hintergrund, nicht die Eingangstür.

---

## 3. Navigations-Ebenen

### Ebene 1 — Wertschöpfungskette (Gesamtbild)

Horizontales Pfeildiagramm mit 10 Stufen (Porter-adaptiert). Jede Stufe zeigt auf einen Blick:

- Name und Typ (Primär / Unterstützung)
- Kern-Challenge (1 Satz)
- AI-Eignung (Farbcode: grün = gut geeignet, gelb = bedingt, rot = unreif)
- Top-Use-Case
- Empfohlener Einstieg

**Interaktion:** Klick auf Stufe → Stufen-Detail mit Personas, Use Cases, Tools, Eignung, Risiken.

### Ebene 2 — Persona-Ansicht

Pro Persona eine Karte, die zeigt:

- An welchen Stufen der Kette diese Persona beteiligt ist
- Konkrete AI-Use-Cases pro Stufe
- Empfohlene Tools mit Einordnung
- Eignungsurteil pro Use Case
- "Womit anfangen?"-Empfehlung

**Interaktion:** Klick auf Persona → Persona-Detail. Alternativ von Stufen-Detail aus per Persona filtern.

### Ebene 3 — Knowledge-Work-Layer

Horizontaler Balken **über** der gesamten Wertschöpfungskette. Zeigt rollenübergreifende AI-Anwendungen für persönliche Produktivität.

**Wichtige Differenzierung** (drei Ebenen von AI-Wirkung):

| Ebene | Beschreibung | Beispiel | Hebel |
|---|---|---|---|
| Persönliche Assistenz | Individuelle Produktivität einer Person | GTD per Cowork, E-Mail-Drafts | Klein, aber breit |
| Team-Prozessunterstützung | AI in Team-Workflows | Meeting-Summaries → Jira-Tickets | Mittel |
| Organisatorische Wertschöpfung | AI in Kernprozessen des Unternehmens | Support-Deflection, Test-Generierung | Groß, aber komplex |

**Interaktion:** Klick → Detail-Ansicht mit Use Cases und Tools.

### Bonus — Reifegrad-Matrix

Matrix-Ansicht: Stufen (X-Achse) × Reifegrad (Y-Achse). Zeigt auf einen Blick, was heute Production-ready ist, was experimentell, und wo die Reise hingeht. CTO/IT-Leiter-Roadmap.

---

## 4. UI/UX-Konzept

### Designprinzipien

- **Kuratierte Wissenskarte**, kein BI-Dashboard — reduziert, clean, nicht überladen
- **Überblick reduziert, Details nach Auswahl** — nie zu viele Dimensionen gleichzeitig
- **Kein reines Hover-Konzept** — Hover nur für Mini-Infos, echte Inhalte im stabilen Detailpanel (mobile-tauglich)
- **Nicht Enterprise-Dashboard** — keine Tabellen-Flut, keine bunten Badges überall

### Zwei komplementäre Einstiege

Das UI muss drei Nutzungsmodi bedienen: "Ich will stöbern" (Orientierung), "Ich habe eine konkrete Frage" (Problemlösung), und "Ich will priorisieren" (Roadmap). Dafür gibt es zwei Haupt-Einstiege, die zur selben Detail-Ansicht führen:

#### Einstieg A — "Erkunden" (Atlas-Ansicht)

Für Nutzer, die sich orientieren wollen — CEOs, CTOs, Neugierige.

**Layout:** Horizontale Wertschöpfungskette als Prozessfluss von links nach rechts. Primärstufen als verbundene Blöcke, Unterstützungsprozesse darunter. Darüber der Knowledge-Work-Layer als Querschnittsbalken.

**Jeder Stufen-Block zeigt:**

- Name
- AI-Eignung (Farbcode: grün/gelb/rot)
- Kern-Challenge (1 Satz)
- Top-Use-Case

**Interaktion:**

- Hover → Mini-Tooltip mit 2–3 Kerninfos
- Klick → Detailpanel öffnet sich (rechts oder darunter)

**Filter-Overlay:** Oberhalb der Kette Filter-Chips oder Combobox für Rollen. Bei Auswahl "Entwickler" werden nur relevante Stufen hervorgehoben, irrelevante ausgegraut. Im Detailpanel erscheinen nur Entwickler-Use-Cases. Keine komplett separate Grafik pro Rolle, sondern ein Filter auf die eine Karte.

#### Einstieg B — "Finde deinen Use Case" (Finder-Ansicht)

Für Nutzer mit konkreter Frage — Teamleiter, einzelne Rollen.

**Layout:** Geführter Flow mit 2–3 Schritten:

1. **"Ich bin..."** → Rolle wählen (Developer, QA, PO, Support, DevOps, ...)
2. **"Ich will..."** → Ziel/Problem wählen (Testfälle generieren, Antwortzeiten senken, Feedback clustern, ...)
3. **Optional: Rahmenbedingungen** → DSGVO-sensibel, kleines Team, low-risk, Mittelstand, ...

**Ergebnis-Block:**

- Passende Wertschöpfungsstufe (mit Link zur Atlas-Ansicht)
- Eignungsurteil (gut geeignet / bedingt / unreif)
- Empfohlene Tools (mit Reifegrad, Preis, DSGVO-Status)
- Risiken und Grenzen
- "Womit anfangen?" — konkreter Einstieg
- Quellen

### Seitenstruktur (MVP)

#### Seite 1: Home / Atlas

```
┌──────────────────────────────────────────────────────────┐
│  Where does AI create real value in software companies   │
│  today — and where doesn't it?                           │
│                                                          │
│  [Erkunden]  [Use Case finden]  [Nach Rolle]  [Tools]    │
├──────────────────────────────────────────────────────────┤
│  Rolle filtern: [Alle ▾]  Reifegrad: [Alle ▾]           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐ │
│  │Knowledge Work Layer (Querschnitt)                   │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │Product │→ │Develop-│→ │Testing │→ │Customer│  ...    │
│  │Discov. │  │ment    │  │& QA    │  │Support │        │
│  │ 🟢     │  │ 🟢     │  │ 🟢     │  │ 🟢     │        │
│  └────────┘  └────────┘  └────────┘  └────────┘        │
│   Primärstufen ──────────────────────────────→          │
│                                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐                    │
│  │Docs &  │  │Sales & │  │HR &    │                    │
│  │Wissen  │  │PreSales│  │Onboard.│                    │
│  └────────┘  └────────┘  └────────┘                    │
│   Unterstützungsprozesse                                │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [Detailpanel — erscheint bei Klick auf eine Stufe]     │
│                                                          │
│  Testing & QA                                           │
│  ─────────────                                          │
│  Eignung: 🟢 gut geeignet                              │
│  Challenge: Test-Maintenance kostet enorm viel Zeit     │
│                                                          │
│  Personas: QA Engineer, SDET, Test Manager              │
│                                                          │
│  Top Use Cases:                                         │
│  • Self-healing Tests — Mabl, BlinqIO — production     │
│  • Testfall-Generierung — BlinqIO — production         │
│  • Visual Regression — Applitools — production         │
│                                                          │
│  Risiken: Human Review empfohlen, Datensens. niedrig   │
│                                                          │
│  Womit anfangen?                                        │
│  Copilot für Unit-Test-Generierung aus bestehendem      │
│  Code. Niedrigstes Risiko, sofort spürbar.              │
│                                                          │
│  Quellen: METR 2025, RedHat Case Study                  │
└──────────────────────────────────────────────────────────┘
```

#### Seite 2: Finder ("Finde deinen Use Case")

```
┌──────────────────────────────────────────────────────────┐
│  Kann AI mir helfen?                                     │
│                                                          │
│  Ich bin:     [QA Engineer          ▾]                   │
│  Ich will:    [Testfälle schneller erzeugen  ▾]          │
│  Kontext:     [☐ DSGVO-sensibel] [☐ Mittelstand]        │
│               [☐ Low-risk Einstieg]                      │
│                                                          │
│  [Ergebnisse anzeigen]                                   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Ergebnis                                               │
│  ─────────                                              │
│  Stufe: Testing & QA (→ im Atlas anzeigen)              │
│  Eignung: 🟢 gut geeignet                              │
│                                                          │
│  Empfohlene Tools:                                      │
│  ┌──────────────┬────────────┬───────────┬────────────┐ │
│  │ Tool         │ Reifegrad  │ Preis     │ DSGVO      │ │
│  ├──────────────┼────────────┼───────────┼────────────┤ │
│  │ BlinqIO      │ production │ auf Anfr. │ DPA nötig  │ │
│  │ Copilot      │ production │ $10–19/Mo │ DPA nötig  │ │
│  │ testers.ai   │ experim.   │ auf Anfr. │ prüfen     │ │
│  └──────────────┴────────────┴───────────┴────────────┘ │
│                                                          │
│  Risiken:                                               │
│  • Human Review empfohlen bei generierten Tests         │
│  • Generierte Tests decken Happy Path ab,               │
│    Edge Cases brauchen menschliche Expertise            │
│                                                          │
│  Womit anfangen?                                        │
│  BlinqIO: BDD-Tests aus User Stories generieren.        │
│  RedHat berichtet 10x schnellere Test-Erstellung.       │
│  Alternativ: Copilot für Unit-Tests aus bestehendem     │
│  Code — niedrigere Einstiegshürde.                      │
│                                                          │
│  Quellen: RedHat Case Study, BlinqIO                    │
└──────────────────────────────────────────────────────────┘
```

#### Seite 3: Persona-Detail

```
┌──────────────────────────────────────────────────────────┐
│  Senior Developer                                        │
│  Auch: Full-Stack Dev, Backend/Frontend Engineer         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Aktiv in diesen Stufen:                                │
│                                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │Archit. │  │Develop-│  │Testing │  │Docs &  │        │
│  │& Design│  │ment ★  │  │& QA    │  │Wissen  │        │
│  │ 🟡     │  │ 🟢     │  │ 🟢     │  │ 🟢     │        │
│  └────────┘  └────────┘  └────────┘  └────────┘        │
│  ★ = Hauptstufe                                         │
│                                                          │
│  Use Cases für dich:                                    │
│  ┌──────────────────┬──────────┬───────────┬──────────┐ │
│  │ Use Case         │ Stufe    │ Eignung   │ Tools    │ │
│  ├──────────────────┼──────────┼───────────┼──────────┤ │
│  │ Code-Completion  │ Dev      │ 🟢 gut    │ Copilot  │ │
│  │ Multi-File Edit  │ Dev      │ 🟢 gut    │ Cursor   │ │
│  │ Legacy-Analyse   │ Dev      │ 🟢 gut    │ Claude C.│ │
│  │ ADR-Generierung  │ Archit.  │ 🟡 bedingt│ Copilot  │ │
│  │ Unit-Tests       │ Testing  │ 🟢 gut    │ Copilot  │ │
│  │ API-Docs         │ Docs     │ 🟢 gut    │ Copilot  │ │
│  └──────────────────┴──────────┴───────────┴──────────┘ │
│                                                          │
│  Womit anfangen?                                        │
│  GitHub Copilot ($10/Mo): Code-Completion und           │
│  Unit-Test-Generierung. Sofort spürbar, low risk.       │
└──────────────────────────────────────────────────────────┘
```

#### Seite 4: Tool-Browse (optional, Phase 2)

Alle Tools als filterbare Liste/Grid, gruppiert nach Kategorie. Nützlich für Leute, die toolnah denken, aber kein MVP-Muss.

### Interaktionsmuster-Zusammenfassung

| Element | Interaktion | Ergebnis |
|---|---|---|
| Stufen-Block in der Kette | Hover | Mini-Tooltip (Challenge, Eignung, Top Use Case) |
| Stufen-Block in der Kette | Klick | Detailpanel öffnet sich |
| Rollen-Filter | Auswahl | Irrelevante Stufen ausgegraut, Details gefiltert |
| Knowledge-Work-Layer | Klick | Eigenes Detailpanel |
| Finder-Dropdowns | Auswahl + Submit | Ergebnis-Block mit Empfehlungen |
| Tool im Detailpanel | Klick | Externe Tool-Website (neuer Tab) |
| "Im Atlas anzeigen"-Link | Klick | Wechsel zur Atlas-Ansicht, Stufe hervorgehoben |

### Was wir bewusst nicht machen

- **Kein reines Hover-Konzept** — mobil untauglich, bei vielen Infos überladen
- **Keine separate Grafik pro Rolle** — stattdessen ein Filter auf die eine Karte
- **Kein Enterprise-Dashboard-Look** — keine Tabellen-Wände, kein BI-Tool-Feeling
- **Keine Tool-Datenbank als Hauptansicht** — Tools sind immer eingebettet in Kontext (Stufe, Persona, Use Case)

---

## 5. Zielgruppen → Einstiegspunkt-Mapping

| Zielgruppe | Primäres Interesse | Einstiegs-Ansicht |
|---|---|---|
| CEO / CTO / Entscheider | Gesamtüberblick, strategische Prioritäten | Wertschöpfungskette (Ebene 1) |
| Teamleiter / PO | Konkrete Use Cases für ihren Bereich | Stufen-Detail (Ebene 1 → Drill-down) |
| Einzelne Rolle (Dev, QA, etc.) | "Was bringt mir das?" | Persona-Ansicht (Ebene 2) |
| IT-Leitung | Roadmap: was heute, was in 6 Monaten | Reifegrad-Matrix (Bonus) |
| Jede Rolle | Persönliche Produktivität durch AI | Knowledge-Work-Layer (Ebene 3) |

---

## 6. Datenmodell

### Prinzipien

- **Markdown als Source of Truth** — alle Daten leben als strukturierte Markdown-Dateien im Git-Repo
- **YAML-Frontmatter** für maschinenlesbare Metadaten
- **Strukturierte Tabellen** im Body für Use Cases, Tools, Mappings
- **Schema ist erweiterbar** — Pflichtfelder kompakt, optionale Felder können später ergänzt werden
- **Keine Duplikate** — Tools werden zentral katalogisiert und per ID referenziert
- **Jeder Eintrag braucht eine Quelle** — Studie, Vendor-Angabe oder Community-Erfahrung

### Dateistruktur im Repo

```
ai-value-chain/
├── README.md                    # Projektbeschreibung, Vision, Claim
├── CONTRIBUTING.md              # Contribution Guidelines
├── SPEC.md                      # Diese Spezifikation (angepasst)
├── data/
│   ├── stages/
│   │   ├── 01-product-discovery.md
│   │   ├── 02-architecture-design.md
│   │   ├── 03-development.md
│   │   ├── 04-testing-qa.md
│   │   ├── 05-deployment-devops.md
│   │   ├── 06-operations-monitoring.md
│   │   ├── 07-customer-support.md
│   │   ├── 08-documentation.md
│   │   ├── 09-sales-presales.md
│   │   └── 10-hr-onboarding.md
│   ├── personas/
│   │   ├── product-owner.md
│   │   ├── software-architect.md
│   │   ├── developer.md
│   │   ├── qa-engineer.md
│   │   ├── devops-engineer.md
│   │   ├── sre.md
│   │   ├── support-agent.md
│   │   ├── technical-writer.md
│   │   ├── sales-engineer.md
│   │   ├── recruiter.md
│   │   └── ...
│   ├── tools/
│   │   └── tools.md             # Zentraler Tool-Katalog
│   ├── knowledge-work/
│   │   └── knowledge-work.md    # Querschnitts-Layer
│   └── meta/
│       └── maturity-matrix.md   # Reifegrad-Übersicht
└── website/                     # React-Frontend (später)
```

---

## 7. Schema-Definitionen

### 7.1 Stage (Wertschöpfungsstufe)

**Datei:** `data/stages/{id}.md`

```yaml
---
id: "03-development"
name: "Entwicklung / Coding"
type: "primary"                       # primary | support
order: 3
challenge: "Produktivitätsgewinn ist real, aber kontextabhängig — kein universeller 10x-Effekt"
top_use_case: "Code-Completion und Multi-File-Änderungen"
maturity: "production"                # production | experimental | mixed
personas:
  - developer
  - software-architect
  - tech-lead
---
```

**Body:** Strukturierte Tabelle mit Use Cases — mit Use-Case-Eignung, Tools (inkl. tool-spezifischem Fit) und Risiko.

```markdown
## Use Cases

| Persona | Use Case | Eignung (Use Case) | Tools (mit Fit im Kontext) | Risiko/Grenzen | Quelle |
|---|---|---|---|---|---|
| developer | Code-Completion, Boilerplate | gut geeignet | copilot (gut), cursor (gut) | Review nötig; bei Legacy-Code höherer Aufwand | GitHub interne Studie |
| developer | Autonome Feature-Entwicklung | bedingt geeignet | claude-code (teilweise) | Human Review zwingend; Halluzinations-Risiko bei komplexer Logik | METR RCT 2025 |
| developer | Legacy-Modernisierung | gut geeignet | copilot (gut), claude-code (gut) | Menschliche Oversight erforderlich; generierte Doku muss validiert werden | McKinsey 2025 |

## Womit anfangen?

**Empfohlener Einstieg:** GitHub Copilot für Boilerplate und Code-Completion ($10/User/Monat). Niedrigstes Risiko, schnellster spürbarer Effekt.

**Voraussetzungen:** IDE-Integration (VS Code, JetBrains), DPA mit GitHub.

**Typische Stolpersteine:** Übermäßiges Vertrauen in generierten Code ohne Review; Erwartungshaltung "10x Produktivität" vs. reale 20–30%.
```

### 7.2 Persona

**Datei:** `data/personas/{id}.md`

```yaml
---
id: "developer"
name: "Senior Developer"
aliases:
  - "Full-Stack Developer"
  - "Backend Engineer"
  - "Frontend Engineer"
stages:
  - 02-architecture-design
  - 03-development
  - 04-testing-qa
  - 08-documentation
---
```

**Body:** Zusammenfassung der AI-Touchpoints dieser Persona über alle Stufen hinweg, mit Eignungsurteil pro Stufe.

### 7.3 Tool

**Datei:** `data/tools/tools.md` (zentraler Katalog)

**Pflichtfelder (kompakt):**

| Feld | Beschreibung |
|---|---|
| `id` | Eindeutige ID (z.B. `copilot`) |
| `name` | Anzeigename (z.B. "GitHub Copilot") |
| `category` | Kategorie (`coding`, `testing`, `aiops`, `support`, `productivity`, `sales`, `hr`) |
| `url` | Offizielle Website |
| `maturity` | `production` / `experimental` |
| `stages` | Komma-separierte Stage-IDs |

**Optionale Felder (erweiterbar):**

| Feld | Beschreibung |
|---|---|
| `pricing` | Kurzform (z.B. "$10–19/User/Monat") |
| `gdpr_status` | `compliant` / `dpa_required` / `on_premise_available` / `unknown` |
| `mittelstand_fit` | `gut` / `bedingt` / `eher_enterprise` — Eignung für 50–500 MA |
| `evidence` | Art der Evidenz: `study` / `vendor_claim` / `community` / `case_study` |
| `efficiency_gain` | Dokumentierter Effekt (mit Kontext!) |
| `source` | Quelle für den Effekt |

**Wichtig zu Effizienzgewinnen:** Immer differenzieren zwischen dokumentiertem Produktivitätseffekt (Studie), beobachtetem Nutzen (Case Study), Vendor-Angabe (mit Vorsicht) und Community-Erfahrung. Nie nackte Zahlen ohne Kontext.

### 7.4 Knowledge Work Layer

**Datei:** `data/knowledge-work/knowledge-work.md`

```yaml
---
id: "knowledge-work"
name: "Persönliche Produktivität & Knowledge Work"
type: "cross-cutting"
description: "AI-gestützte persönliche Arbeitsweisen, die jede Rolle betreffen"
---
```

**Body:** Use Cases als Tabelle, mit klarer Ebenen-Zuordnung.

| Ebene | Bereich | Use Case | Tools | Eignung | Beispiel |
|---|---|---|---|---|---|
| Persönlich | Taskmanagement | GTD/Aufgaben per Chat steuern | cowork, notion-ai | gut geeignet | Obsidian + Cowork: Regelbasiertes GTD per Chat |
| Persönlich | Recherche | Tiefenrecherche mit Quellenangaben | perplexity, chatgpt | gut geeignet | Marktanalyse in 10 Min statt 2 Std |
| Team | Meetings | Auto-Zusammenfassungen → Action Items | slack-ai, otter | gut geeignet | Meeting-Notes → Jira-Tickets automatisch |
| Team | Wissen | Knowledge-Base-Suche über alle Quellen | eesel-ai, notion-ai | bedingt geeignet | Funktioniert nur bei gepflegter Datenbasis |
| Persönlich | Kommunikation | E-Mail-Drafts, Slack-Antworten | gmail-ai, outlook-copilot | bedingt geeignet | Kontext muss stimmen; Tonalität prüfen |

### 7.5 Reifegrad-Matrix

**Datei:** `data/meta/maturity-matrix.md`

| Stage | Production-Ready | Experimental | Trend 2027+ |
|---|---|---|---|
| Product Discovery | Feedback-Synthese, PRD-Generierung | Roadmap-Simulation | Autonome Requirement-Agents |
| Development | Code-Completion, Legacy-Analyse | Autonomous Coding Agents | Agents schreiben Features end-to-end |
| Testing & QA | Self-healing Tests, Visual Regression | Agentic Testing (Natural Language) | Vollautonome Testsuites |
| Customer Support | Ticket-Autoauflösung (40–80%) | CSAT-Prediction | Proaktiver Support statt reaktiv |
| ... | ... | ... | ... |

---

## 8. Governance- und Risiko-Dimension

Jeder Use Case bekommt eine Risiko-Einordnung. Das unterscheidet das Projekt von Marketing-Seiten.

### Risiko-Felder pro Use Case

| Feld | Werte | Beschreibung |
|---|---|---|
| `eignung` | `gut_geeignet` / `bedingt` / `teilaufgaben` / `unreif` | Ehrliches Urteil zur AI-Eignung |
| `human_review` | `nicht_nötig` / `empfohlen` / `zwingend` | Muss ein Mensch drüberschauen? |
| `datensensitivität` | `niedrig` / `mittel` / `hoch` | Werden sensible Daten verarbeitet? |
| `regulatorik` | `unkritisch` / `dsgvo_relevant` / `ai_act_relevant` | Regulatorischer Aufwand |
| `automatisierbarkeit` | `voll` / `teilweise` / `assistenz_only` | Wie weit kann AI autonom handeln? |

### Warum das wichtig ist

Genau hier liegt der Mittelstand-Pain: Nicht nur "geht das?", sondern "darf ich das? mit welchem Risiko? wer haftet?". Das ernst zu nehmen macht das Projekt glaubwürdig.

---

## 9. Open-Source-Konzept

### Contribution-Modell

- **Daten-Beiträge:** Neue Tools, Use Cases, Korrekturen → PR auf `data/`-Dateien
- **"Edit this entry"-Button** auf der Website → verlinkt direkt zur entsprechenden Markdown-Datei auf GitHub
- **Schema-Änderungen:** Neue Felder vorschlagen per GitHub Issue → Diskussion → PR
- **Website-Beiträge:** Frontend-Verbesserungen → PR auf `website/`

### Qualitätssicherung

- Jeder Eintrag braucht eine **Quelle** mit Evidenz-Typ (Studie / Vendor / Community / Case Study)
- Eignungsurteile und Reifegrade werden von Maintainern verifiziert
- Community-Reviews für neue Tools ("Hat jemand das im Mittelstand produktiv im Einsatz?")
- Vendor-Claims werden als solche gekennzeichnet

### Lizenz

MIT für Code, CC-BY-SA für Content (noch zu bestätigen).

---

## 10. MVP-Scope (Phase 1)

Nicht mit allen 10 Stufen starten, sondern mit 4 Stufen, die zusammen ein starkes Bild ergeben:

| Stufe | Warum im MVP |
|---|---|
| **Product Discovery** | Vorne im Prozess, PO/PM-Relevanz, gute Tool-Reife |
| **Development** | Kernthema, beste Datenlage, größtes Interesse |
| **Testing & QA** | Unterschätzter Hebel, starke Tool-Landschaft |
| **Customer Support** | Am besten dokumentiert, klarster ROI, beeindruckende Zahlen |

**Phase 2:** Architecture, Deployment, Operations, Documentation
**Phase 3:** Sales, HR, Knowledge-Work-Layer

---

## 11. Offene Punkte

- [ ] Projektname / Repo-Name festlegen (Arbeitstitel: "ai-value-chain"?)
- [ ] Sprache: Deutsch, Englisch, oder beides?
- [ ] Entscheiden: Markdown-Tabellen vs. YAML-Dateien für Tool-Katalog
- [ ] Frontend-Technologie bestätigen (React? Astro? Next.js?)
- [ ] Hosting klären (GitHub Pages, Vercel, Netlify?)
- [ ] Lizenz bestätigen (MIT + CC-BY-SA)
- [ ] Griffigeren externen Namen/Framing finden ("AI Value Chain Atlas"? "AI Software Map"?)

---

## Verknüpfungen

- [[AI entlang der Wertschöpfungskette]] — Übersichts-Notiz
- [[Research Ergebnis — AI Wertschöpfungskette (Deep Research)]] — Datengrundlage
- [[Gespräch Uwe VW]] — Ursprungsidee
- [[Workshop-Outreach — Status & Nächste Schritte]] — Gesamtpipeline
