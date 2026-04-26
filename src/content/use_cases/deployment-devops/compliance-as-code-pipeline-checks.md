---
stage: deployment-devops
order: 17
roles:
  - developer
title: "EU-AI-Act-Compliance-Checks in CI/CD"
goal_label: "Annex-IV-Doku, Risk-Klassifikation und Audit-Schemas im PR validieren"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil als Compliance- statt DevOps-Use-Case vermarktet. Mit August 2026 (EU-AI-Act-Hochrisiko) wird das in DACH-Banken/Versicherern Pipeline-Pflicht; Tools wie Systima Comply, ActProof.ai, mcp-eu-ai-act adressieren das produktiv."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Systima Comply (OSS) oder ActProof.ai eine Pilot-Pipeline für ein einzelnes AI-haltiges Repo aufsetzen, Annex-IV-Schema als YAML committen und PR-Block auf 'warning' statt 'fail' für die ersten 4 Wochen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Use Case ist neu — Tool-Reife schwankt; 'compliance-by-scanner' ersetzt keinen juristischen Review, aber liefert den timestamped Audit-Trail für Aufseher; Hochrisiko-Klassifikation ist regulatorisch interpretierbar."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
