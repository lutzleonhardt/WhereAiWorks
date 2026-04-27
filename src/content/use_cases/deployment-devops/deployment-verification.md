---
stage: deployment-devops
order: 10
roles:
  - software-engineer
title: "Deployment-Verification"
goal_label: "Canary- und Rolling-Deploys gegen Health-Signale absichern"
suitability: conditional
rationale: "Harness Continuous Verification, Datadog Bits AI und Argo Rollouts mit Analysis Templates implementieren das. JetBrains-Survey listet Test-Optimierung und Deployment-Verifikation gleich nach Failure-Diagnose als zweithäufigsten AI-Einstieg in CI/CD."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Für einen einzelnen Service Canary-Verification mit klaren SLO-Schwellen (Error-Rate, Latency-p99) aktivieren und Auto-Rollback erstmal nur als Vorschlag, nicht als Automatik fahren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Auto-Rollback in regulierten Banken kollidiert mit ITIL-Change-Approval — Rollback ist auch ein Change und muss dokumentiert sein; SLO-Baselines für Hochlast-Events (Quartalsende, Steuertermin) brauchen explizite Trainingsausnahmen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
