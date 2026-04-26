---
stage: architecture-design
order: 12
roles:
  - developer
title: "Audit-/Logging-Architektur für KI-Systeme entwerfen"
goal_label: "Replay-fähige Logging-Topologie für KI-Entscheidungen designen"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil als Querschnitts-Plattform-Feature wahrgenommen statt als Architektur-Use-Case. In DACH-Banken/Versicherern ab August 2026 (EU AI Act Art. 12) und unter DORA RTS RMF Pflicht; Pexon und Systima dokumentieren explizit, dass Logging-Architektur der Engineering-Hebel zur EU-AI-Act-Compliance ist."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code oder Azure OpenAI EU eine Skizze der Logging-Pipeline (Prompt-Gateway → Log-Store → Audit-View) für ein konkretes KI-System erzeugen, danach gegen Art. 12 EU AI Act und DORA RTS RMF Checkliste validieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Cloud-LLM-APIs (Azure OpenAI) loggen aus Datenschutzgründen keine Inhalte — die Logging-Architektur muss eine eigene Zwischenschicht (LiteLLM, API-Gateway) enthalten, sonst ist die DORA-Nachvollziehbarkeit nicht herstellbar. Retention-Konflikte zwischen DSGVO (Löschpflicht) und EU AI Act (Aufbewahrung) müssen aktiv aufgelöst werden."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
