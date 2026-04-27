---
stage: architecture-design
order: 3
roles:
  - software-engineer
  - software-architect
title: "Codebase-Architektur kartieren"
goal_label: "Bestehende Codebasis in Architektur-Übersicht überführen"
suitability: good_fit
rationale: "Konkretes Use-Case-Cluster mit mehreren Werkzeugen (GitNexus mit 28k Stars, Codebase-Map-Skills, Gemini 1M-Context-Pipelines) und gut dokumentierten Praxisberichten. In DACH besonders relevant wegen Sparkassen-/Versicherungs-/Behörden-Mainframe-Bestand — Zühlke berichtet konkret von Legacy-Modernisierung mit AI-Codebasis-Analyse."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code (Enterprise-Tenant, kein Telemetrie-Egress) oder self-hosted Sourcegraph an einem überschaubaren Modul (Bounded Context) starten und die Map als Onboarding-Doc commiten."  # Draft aus Discovery — vor Commit prüfen
caveats: "GitNexus und Cloud-IDE-Integrationen senden Code an Drittanbieter — bei BAIT-/ISO-27001-pflichtigen Repos ist self-hosted Sourcegraph oder Claude Code mit kontrolliertem Egress zwingend. Bei sehr großen Monorepos stößt Context an Grenzen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
