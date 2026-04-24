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
      - id: copilot
      - id: cursor
    start_here: "GitHub Copilot in der IDE aktivieren. Für einen ersten Monat bewusst einsetzen und eigenes Produktivitätsgefühl beobachten, bevor größere Workflows daran hängen."
    caveats: "Übermäßiges Vertrauen in Generiertes ohne Review ist das Hauptrisiko. Realistische Erwartung: 20–30% subjektiv, kein 10x."
    sources:
      - label: "METR RCT 2025"
        url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
        type: "study"

  - id: "development:multi-file-refactoring"
    roles:
      - developer
    title: "Mehr-Datei-Refactoring"
    goal_label: "Größere Code-Änderungen durch AI vorbereiten lassen"
    suitability: "conditional"
    rationale: "Agent-basierte Tools können Refactorings über mehrere Dateien hinweg konsistent durchziehen — Umbenennungen, Typ-Einzüge, Pattern-Migrationen. Funktioniert zuverlässig in einer getesteten Codebase mit klar abgegrenztem Scope; ohne Tests ist die Folgefehler-Gefahr hoch."
    tools:
      - id: claude-code
        fit: "good_fit"
        note: "Navigiert die Codebase aktiv und schlägt zusammenhängende Patches vor; kann Tests ausführen und Ergebnis verifizieren."
        sources:
          - label: "Anthropic Engineering — Claude Code Best Practices"
            url: "https://www.anthropic.com/engineering/claude-code-best-practices"
            type: "vendor"
      - id: cursor
        note: "Composer-Modus für Mehr-Datei-Änderungen in der IDE — weniger autonom als Claude Code, näher am klassischen Edit-Workflow."
      - id: copilot
    start_here: "Claude Code an einem klar umrissenen Refactoring testen (z.B. API-Umbenennung in einem Service). Ergebnis als PR reviewen — nicht blind übernehmen."
    caveats: "Qualität skaliert mit Test-Abdeckung. Ohne Tests wird aus AI-Refactoring schnell ein nicht-deterministischer Bug-Generator."
    sources:
      - label: "METR RCT 2025"
        url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
        type: "study"
---

## Womit anfangen?

_Platzhalter — folgt in Phase 2. Ein Low-Risk-Einstieg ist Copilot oder Cursor für Boilerplate und Code-Completion in einer vertrauten Codebase._

## Grenzen

_Platzhalter — Legacy-Code, sicherheitskritische Pfade und komplexe Architekturentscheidungen sind bisher schwach abgedeckt._
