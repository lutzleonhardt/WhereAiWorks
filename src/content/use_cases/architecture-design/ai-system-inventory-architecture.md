---
stage: architecture-design
order: 14
roles:
  - software-engineer
title: "KI-System-Inventar als Architektur-Artefakt erzeugen"
goal_label: "Schatten-KI und eingebettete KI-Komponenten architektonisch erfassen"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil als GRC-/Compliance-Aufgabe positioniert statt als Architektur-Use-Case. BaFin-Orientierungshilfe (18.12.2025) und ISO 42001 Clause 6 fordern explizit ein vollständiges Inventar inkl. Schatten-KI — die Identifikations-Aufgabe ist Codebasis-Scan plus Datenfluss-Analyse, also genuin Architektur. Pflicht in DACH-CRR-Instituten und Solvency-II-Versicherern."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code (Enterprise) oder self-hosted Sourcegraph einen Repo-Scan für KI-Aufrufe (OpenAI-/Anthropic-/HF-SDKs, ML-Models) starten, mit Procurement-Liste der SaaS-Lieferanten kreuzen und als Markdown-Inventar mit Datenklassifizierung commiten."  # Draft aus Discovery — vor Commit prüfen
caveats: "Inventar-Drift ist sofortiges Problem — ohne Anbindung an CI/CD und Procurement-Prozess veraltet das Inventar binnen Wochen. AI übersieht KI-Komponenten in zugekauftem SaaS (z.B. Workday-AI, Salesforce-Einstein), wenn es nur den Code analysiert."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
