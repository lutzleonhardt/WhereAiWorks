---
stage: operations-monitoring
order: 13
roles:
  - software-engineer
  - platform-devops-engineer
title: "Dashboard- und Alert-Generierung"
goal_label: "Dashboards und Alerts aus Klartext erzeugen"
suitability: conditional
rationale: "Grafana LLM, Datadog Bits AI und New Relic AI bieten Generierung von Dashboards und Monitoren; Adoption getrieben durch den Schmerz, dass jeder neue Service Dashboards braucht und niemand sie schreibt."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Grafana LLM-Plugin (selbst betreibbar) für einen frisch instrumentierten Service einen Default-Dashboard generieren lassen und manuell um zwei service-spezifische Panels ergänzen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Generierte Dashboards sind oft generisch — gut als Startgerüst, aber kein Ersatz für service-spezifisches SLI-Design; generierte Alert-Schwellen ohne SLO-Bezug erzeugen Lärm."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
