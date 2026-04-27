---
stage: operations-monitoring
order: 3
roles:
  - software-engineer
title: "Log-Pattern-Clustering"
goal_label: "Log-Volumen in Patterns zusammenfassen"
suitability: good_fit
rationale: "Klassisches ML-Feature in Datadog Logs Pattern, Splunk Patterns, Elastic Categorization und Sumo Logic LogReduce — vor LLM-Welle entstanden, aber weiter Standard-Ops-Werkzeug. In DACH-Rechenzentren (Splunk On-Prem, Elastic Self-Host) etabliert."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Datadog Logs Patterns oder Splunk Patterns auf einem produktiven Log-Stream aktivieren und die Top-10-Patterns einmal manuell durchsehen, um eine Baseline zu setzen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Patterns zerfallen bei strukturierten JSON-Logs anders als bei Text-Logs; selten 'neue' Patterns sind oft False Positives."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
