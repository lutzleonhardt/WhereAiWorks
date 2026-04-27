---
stage: deployment-devops
order: 19
roles:
  - platform-devops-engineer
title: "K8s-Auto-Remediation mit Approval-Gate"
goal_label: "AI investigiert + schlägt Fix vor + Mensch genehmigt vor Apply"
suitability: conditional
rationale: "Vom Markt-Scan als out-of-scope abgetan ('Self-healing ist Pitch'), aber das Approval-Gate-Pattern (Kubernaut, IncidentFox Approval Workflows) ist genau die DACH-Mitbestimmungs-konforme Variante zwischen passivem Diagnose-Tool und vollautonomem Self-Healing — und produktiv verfügbar."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Kubernaut (OpenShift/K8s) mit drei kuratierten Workflows (Pod-OOM-Restart, PVC-Erweiterung, Image-Pull-Backoff-Retry) installieren, Approval-Gate via Slack auf einen Dev-Cluster und 4-Wochen-Pilot mit manuellem Gegencheck."  # Draft aus Discovery — vor Commit prüfen
caveats: "Workflow-Katalog muss gepflegt werden (sonst rät die AI ins Blaue); Approval-Workflow ist nur dann sinnvoll, wenn Approver verstehen, was sie freigeben — sonst verkommt es zum Rubberstamp; Audit-Log jeder Aktion ist Pflicht."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
