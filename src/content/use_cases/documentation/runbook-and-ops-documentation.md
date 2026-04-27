---
stage: documentation
order: 6
roles:
  - software-engineer
title: "Runbook- und Operations-Doku-Drafts"
goal_label: "Runbooks und Postmortem-Doku aus Incident-Daten erzeugen"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil als Incident-Management-Feature (PagerDuty, Datadog) statt als Doku-Use-Case vermarktet. SRE-/Ops-Teams in DACH nutzen das produktiv — Runbook-Drafts aus Incidents sind ein realer Workflow."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Atlassian Rovo oder PagerDuty Incident Workflows einen Runbook-Draft aus einem realen Incident generieren lassen, dann durch den On-Call-Engineer verifizieren. Postmortem-Sektion 'Action Items' immer manuell schreiben."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI-generierte Runbooks enthalten oft erfundene Befehlsketten oder verschleiern Root-Causes mit Symptombeschreibungen. Postmortems brauchen menschliche Verantwortungs-Klärung, die AI nicht leisten kann. Grenze zu deployment-devops/observability-Stage real."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
