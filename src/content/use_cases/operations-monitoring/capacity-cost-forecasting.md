---
stage: operations-monitoring
order: 5
roles:
  - software-engineer
title: "Capacity- und Cost-Forecasting"
goal_label: "Ressourcenbedarf vorhersagen"
suitability: conditional
rationale: "Datadog Cloud Cost Management, AWS Compute Optimizer, Kubecost AI und CAST AI bieten ML-basierte Forecasts und Right-Sizing-Empfehlungen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Kubecost (selbst betreibbar) oder AWS Compute Optimizer auf einen Cluster anwenden und die Top-3-Empfehlungen einen Sprint lang manuell verifizieren, bevor automatisches Resizing greift."  # Draft aus Discovery — vor Commit prüfen
caveats: "Forecasts brechen bei plötzlichem Traffic-Wachstum oder neuen Features; Workload-Profile gelten in DACH-Konzernen oft als sensitiv — SaaS-Vendor-Auswahl mit Datenschutz und AVV prüfen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
