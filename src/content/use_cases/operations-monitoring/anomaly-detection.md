---
stage: operations-monitoring
order: 4
roles:
  - developer
title: "Metric- und Log-Anomaly-Detection"
goal_label: "Ungewöhnliche Muster früh erkennen"
suitability: good_fit
rationale: "Etablierter Baustein in allen großen Observability-Plattformen (Datadog, New Relic, Dynatrace Davis, Elastic ML). Sinnvoll, weil statische Thresholds in dynamischen Microservice-Landschaften nicht mehr skalieren."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Dynatrace (EU-Datenresidenz) oder Datadog auf einer kritischen Latenz-Metrik starten und Anomaly-Alerts zwei Wochen im Schatten-Modus laufen lassen, bevor sie eskalieren dürfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Saisonalität und Deploy-Spitzen erzeugen oft False Positives; bei SaaS-Plattformen müssen Trainingsdaten (häufig Geschäftslogik-Signale) ins Datenverarbeitungsverzeichnis und in die AVV."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
