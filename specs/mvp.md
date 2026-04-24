
# AI Wertschöpfungskette — MVP-Definition

> Entscheidungen aus der Diskussion vom 09.04.2026. Grundlage: [[AI Wertschöpfungskette — Spezifikation]].

---

## Scope-Entscheidung

**Das Projekt ist explizit auf Softwareunternehmen begrenzt.** Nicht auf Unternehmen allgemein, nicht branchenübergreifend. Die Wertschöpfungskette funktioniert als Ordnungsmodell, weil Softwareunternehmen eine hinreichend homogene Prozessstruktur haben. Für einen Friseurladen oder eine Physiotherapie wäre ein anderes Raster nötig (Problemklassen statt Prozessstufen) — das ist ein anderes Projekt.

Der Claim muss das auf der Seite prominent machen: „Wo schafft AI **in Softwareunternehmen** heute realen Mehrwert?"

---

## Leitprinzip

Das Skelett vollständig bauen, aber minimal befüllen. Man soll sich schon durchklicken können — der Rest ist Content-Befüllung. Struktur zuerst, Community-Beteiligung später.

---

## Was das MVP zeigen soll

Eine interaktive Seite mit zwei Einstiegen, die auf dieselbe kuratierte Datenbasis zugreifen:

### 1. Atlas-Ansicht (Haupteinstieg)

Horizontale Wertschöpfungskette mit 4 Stufen als klickbare Karten. Jede Karte zeigt auf einen Blick: Name, Eignung (Farbcode), Top-Use-Case, Startempfehlung. Klick öffnet ein Detailpanel.

Warum Atlas als Haupteinstieg: Visuell attraktiver, auf LinkedIn besser teilbar als der Finder.

### 2. Finder ("Ich bin / Ich will")

Zwei Dropdowns, sonst nichts:

- **Ich bin:** Rolle wählen (PO, Developer, QA, Support)
- **Ich will:** Ziel wählen — gefiltert nach gewählter Rolle

Ergebnis: passende Stufe, Eignungsurteil, empfohlene Tools, konkreter Einstieg, Grenzen und Quelle.

Kein Kontext-Filter (DSGVO, Mittelstand, Low-risk) im MVP. Bei nur 15 Use Cases bringt das keinen Mehrwert — man bekommt ohnehin nur 1–2 Ergebnisse pro Kombination.

**Gestaltungsregel:** Die "Ich will"-Formulierungen müssen aus Nutzersicht geschrieben sein, nicht aus Modellsicht. Also "Tests schneller erstellen" statt "Testfall-Generierung". Das `goal_label`-Feld im Datenmodell bildet das explizit ab.

---

## Inhaltlicher Scope

### 4 Stufen

| Stufe | Warum im MVP |
|---|---|
| Product Discovery | Vorne im Prozess, PO/PM-Relevanz, gute Tool-Reife |
| Development | Kernthema, beste Datenlage, größtes Interesse |
| Testing & QA | Unterschätzter Hebel, starke Tool-Landschaft |
| Customer Support | Am besten dokumentiert, klarster ROI |

### 4 Rollen

- Product Manager / PO
- Developer
- QA Engineer
- Support Lead / Support Agent

Nicht im MVP: DevOps, Recruiter, Sales, Technical Writer.

### Use Cases

**Minimal glaubwürdige erste öffentliche Version:** 1 Stage vollständig, 2 weitere grob klickbar, insgesamt 6–8 echte Use Cases.

**Zielbild innerhalb MVP-Phase:** ca. 15 Use Cases (3–5 pro Stufe).

Befüllungsstrategie: Eine Stufe vollständig ausarbeiten (z.B. Testing & QA), die anderen drei mit Platzhalter-Struktur, die das Muster zeigt. Dann iterativ auffüllen.

#### Development

- Code Completion
- Multi-File-Änderungen
- Legacy-Code-Analyse
- Unit-Test-Generierung

#### Testing & QA

- Testfall-Generierung
- Visual Regression
- Self-healing / Test-Maintenance

#### Customer Support

- Antwortvorschläge
- Ticket-Zusammenfassung / Routing
- Self-Service / Deflection

#### Product Discovery

- Feedback-Clustering
- PRD-Entwürfe
- Interview-/Call-Synthese

### Felder pro Use Case

Nur diese, nicht mehr:

- Use Case (Titel, interner Name)
- goal_label (Nutzerformulierung für den Finder, z.B. "Tests schneller erstellen")
- Eignung (gut / bedingt / teilaufgaben / unreif)
- Kurzbegründung
- Empfohlene Tools
- Womit anfangen
- Quelle

---

## Detailpanel pro Stufe

Immer gleiches Muster:

1. **Kurzurteil** — 1 Satz zur AI-Eignung dieser Stufe
2. **Top Use Cases** — 3–5 Einträge mit Eignung, Tools, Quelle
3. **Womit anfangen?** — Ein konkreter Low-Risk-Einstieg
4. **Grenzen / Vorsicht** — 1–3 klare Punkte
5. **Quellen** — Wenige, aber gute

---

## Was bewusst nicht im MVP ist

- Vollständige Wertschöpfungskette (10 Stufen)
- Persona-Detailseiten als eigene Ansicht
- Tool-Browse / Tool-Datenbank
- Tool-Eigenschaftsmatrix (Access Surfaces, Deployment Models, LLM Flexibility etc.) — Tools werden im MVP nur mit Name, Link und kurzem Satz referenziert, nicht als eigene Datenobjekte mit Metadaten modelliert
- Tool-Bewertungslogik (kein Ranking, kein Score, kein fit/recommendation-Schema)
- Knowledge-Work-Layer
- Reifegrad-Matrix als eigene Seite
- Community-Editing-Flows im UI (keine Kommentare, Likes, Upvotes, Abos)
- Governance-/Compliance-Felder in der UI (DSGVO-Ampeln, AI Act etc.)
- Kontext-Filter im Finder
- Mehrsprachigkeit
- LLM-gestützter Finder (kommt ggf. in V2, wenn Datenbasis groß genug)
- Branchenübergreifender Scope (Fokus bleibt auf Softwareunternehmen)

---

## Vereinfachtes Datenmodell (MVP)

### Stage-Datei

Frontmatter: id, name, order, challenge, top_use_case, suitability

Body: Kurzbeschreibung, 3–5 Use Cases, Womit anfangen, Grenzen, Quellen

### Use-Case-Eintrag

Nur: role, title, goal_label, suitability, tools, start_here, caveats, source

---

## Projekt-Identität

**Name:** Where AI Works
**Domain:** `whereaiworks.com` (verfügbar, 12€/Jahr bei United Domains)
**Repo:** `where-ai-works` auf GitHub
**Open Source:** Ja, vollständig — Code und Content. Der Moat ist nicht der Code, sondern die Kuration (ehrliche Eignungsurteile, Quellenarbeit, redaktionelles Framework). Open-Source-Repo ist gleichzeitig Proof of Expertise und Community-Signal.

Nur die Domain registrieren, kein E-Mail-/Webspace-Paket. Hosting läuft über GitHub Pages oder Netlify mit Custom Domain.

---

## Technologie-Entscheidung

**Framework:** Astro

Warum Astro und kein SPA (Angular, React, Next.js):

- Markdown als Datenquelle ist nativ eingebaut (Content Collections) — die Use Cases und Stages leben als `.md`-Dateien im Repo und werden zur Build-Zeit gerendert
- Kein JavaScript-Bundle für statischen Content — Atlas und Detailpanels sind pures HTML
- Der Finder wird als interaktive Island eingebunden (minimales JS, nur wo nötig)
- Statischer Output → GitHub Pages oder Netlify, kein Server nötig
- Kein Overhead durch SSR, API-Routes oder State Management

**Styling:** Bewusst minimalistisch. Kein Designsystem, keine Component Library, keine Animationen. Nur ein CSS-Reset und Basis-Layout (Flexbox/Grid), damit die Struktur funktioniert. Visuelles Styling kommt nachgelagert, wenn der Klickflow stimmt.

**Designprinzip:** Die Zielgruppe sind Entscheidungsträger, die Antworten suchen. Alles, was nicht direkt der Orientierung dient, ist Rauschen und fliegt raus.

---

## Umsetzungsreihenfolge

### Phase 1 — Skelett + erste Inhalte

- Datenstruktur anlegen (Stage-Files, Use-Case-Schema)
- Eine Stufe vollständig befüllen (Testing & QA)
- Statischer Prototyp: Atlas + Finder + Detailpanel
- Drei weitere Stufen mit Platzhalter-Struktur

### Phase 2 — Content-Befüllung

- Restliche 3 Stufen vollständig ausarbeiten
- Alle 15 Use Cases mit Quellen versehen
- Feinschliff an Formulierungen und UI

### Phase 3 — Erweiterung

- Weitere Stufen (Architecture, Deployment, Operations, Documentation)
- Weitere Rollen
- Community-Struktur / Open Source
- Ggf. LLM-Layer für Finder

---

## Offene Entscheidungen (aus Spec übernommen)

- [x] Projektname → **Where AI Works** / Repo `where-ai-works`
- [x] Domain → `whereaiworks.com` (12€/Jahr, United Domains)
- [x] Open Source → Ja, vollständig (Code + Content)
- [x] Frontend-Technologie → **Astro** (statisch, Markdown-native, Islands für Interaktivität)
- [ ] Sprache: Deutsch, Englisch, oder beides?
- [ ] Hosting (GitHub Pages oder Netlify mit Custom Domain)
- [ ] Lizenz bestätigen

---

## Verknüpfungen

- [[AI Wertschöpfungskette — Spezifikation]] — Vollständige Spec
- [[AI entlang der Wertschöpfungskette]] — Übersichts-Notiz
- [[Research Ergebnis — AI Wertschöpfungskette (Deep Research)]] — Datengrundlage
