---
stage: deployment-devops
order: 3
roles:
  - software-engineer
title: "Anomaly-Detection"
goal_label: "Auffällige Metriken und Logs ohne handgesetzte Schwellen erkennen"
suitability: good_fit
rationale: "Datadog, New Relic, Elastic, Dynatrace und Splunk haben ML-basierte Anomaly-Detection in GA; Elastic listet 100+ vorkonfigurierte Anomaly-Jobs out-of-the-box. Klassisches ML, kein Generative-AI-Risiko, EU-AI-Act meist 'minimal risk'."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Im bestehenden Observability-Tool für eine zentrale Latenz- oder Error-Metrik Anomaly-Detection einschalten und 4 Wochen lang nur in Slack-Channel posten lassen, bevor sie aufs Pager-Routing kommt."  # Draft aus Discovery — vor Commit prüfen
caveats: "Kalt-Start ohne historische Daten produziert Alarmflut; saisonale Effekte (Black Friday, Quartalsende) brauchen explizite Trainingsausnahmen — kein Ersatz für SLO-basiertes Alerting."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
