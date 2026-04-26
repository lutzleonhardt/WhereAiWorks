---
stage: development
order: 2
roles:
  - developer
title: "Mehr-Datei-Refactoring"
goal_label: "Größere Code-Änderungen durch AI vorbereiten lassen"
suitability: "conditional"
rationale: "Agent-basierte Tools können Refactorings über mehrere Dateien hinweg konsistent durchziehen — Umbenennungen, Typ-Einzüge, Pattern-Migrationen. Funktioniert zuverlässig in einer getesteten Codebase mit klar abgegrenztem Scope; ohne Tests ist die Folgefehler-Gefahr hoch."
tools:
  - id: claude-code
    fit: good_fit
    why_it_fits: "Navigiert die Codebase aktiv und schlägt zusammenhängende Patches vor; kann Tests ausführen und Ergebnis verifizieren."
    sources:
      - id: anthropic-claude-code-best-practices
  - id: cursor
    fit: conditional
    why_it_fits: "Composer-Modus für Mehr-Datei-Änderungen in der IDE — weniger autonom als Claude Code, näher am klassischen Edit-Workflow."
  - id: copilot
    fit: partial
    why_it_fits: "Inline-fokussiert. Edits über Dateigrenzen hinweg sind möglich, aber nicht das Kernerlebnis."
start_here: "Claude Code an einem klar umrissenen Refactoring testen (z.B. API-Umbenennung in einem Service). Ergebnis als PR reviewen — nicht blind übernehmen."
caveats: "Qualität skaliert mit Test-Abdeckung. Ohne Tests wird aus AI-Refactoring schnell ein nicht-deterministischer Bug-Generator."
sources:
  - id: metr-rct-2025
---
