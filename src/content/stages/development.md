---
name: "Development"
type: "primary"
order: 3
challenge: "Produktivitätsgewinn ist real, aber kontextabhängig — kein universeller 10x-Effekt."
top_use_case: "Code-Completion und Multi-File-Änderungen"
suitability: "good_fit"
roles:
  - developer
use_cases:
  - id: "development:code-completion"
    roles:
      - developer
    title: "Code-Completion"
    goal_label: "Weniger Boilerplate tippen"
    suitability: "good_fit"
    rationale: "Code-Completion für bekannte Muster und Boilerplate funktioniert zuverlässig. Bei gut verstandenem Code spart man klar messbar Tippzeit; Reviews bleiben trotzdem nötig."
    tools:
      - copilot
      - cursor
    start_here: "GitHub Copilot in der IDE aktivieren. Für einen ersten Monat bewusst einsetzen und eigenes Produktivitätsgefühl beobachten, bevor größere Workflows daran hängen."
    caveats: "Übermäßiges Vertrauen in Generiertes ohne Review ist das Hauptrisiko. Realistische Erwartung: 20–30% subjektiv, kein 10x."
    sources:
      - label: "METR RCT 2025"
        url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
        type: "study"
---

## Womit anfangen?

_Platzhalter — folgt in Phase 2. Ein Low-Risk-Einstieg ist Copilot oder Cursor für Boilerplate und Code-Completion in einer vertrauten Codebase._

## Grenzen

_Platzhalter — Legacy-Code, sicherheitskritische Pfade und komplexe Architekturentscheidungen sind bisher schwach abgedeckt._
