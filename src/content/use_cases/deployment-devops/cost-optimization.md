---
stage: deployment-devops
order: 7
roles:
  - software-engineer
title: "Cloud-Cost-Optimization"
goal_label: "Rightsizing- und Waste-Empfehlungen für Cloud-Workloads"
suitability: conditional
rationale: "Cast AI, Sedai, Komodor, Azure Copilot/Advisor und AWS Compute Optimizer adressieren das produktiv; Komodor bezeichnet Workload-Rightsizing als 'wahrscheinlich reifsten AI-Anwendungsfall'. Hybrid-Modus 'Auto-detect + Notify + One-click fix' ist 2026-Praxis."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit AWS Compute Optimizer oder Azure Advisor Empfehlungen für eine nicht-kritische Workload generieren lassen und die Spar-Hypothese als Einzeländerung mit Rollback-Plan umsetzen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Auto-Remediation ohne Reliability-Kontext erzeugt Incidents (Datenbank rightsizen während Batch-Job ist katastrophal); Reservation-Empfehlungen kollidieren mit DACH-Konzernrahmenverträgen — Kommerz-Owner einbinden."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
