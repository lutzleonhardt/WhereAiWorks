---
stage: operations-monitoring
order: 8
roles:
  - software-engineer
  - platform-devops-engineer
title: "Natural-Language-Observability-Querying"
goal_label: "Logs, Metriken und Traces in Klartext abfragen"
suitability: good_fit
rationale: "Honeycomb Query Assistant, Grafana LLM, Splunk AI Assistant und Datadog Bits AI haben das Feature ausgerollt — Honeycombs Praxisberichte zeigen Mainstream-Nutzung gerade bei Junior-Engineers."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Grafana LLM (selbst betreibbar, EU-Region) oder Honeycomb Query Assistant auf einem schon instrumentierten Service starten und drei typische Recherche-Fragen prompten, dann die generierten Queries gegen die manuell geschriebenen Versionen vergleichen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Generierte Queries können syntaktisch korrekt, semantisch aber falsch sein; bei direkter Ausführung gegen Production-Indizes können hohe Cost-/Performance-Spikes entstehen — Query-Cost-Limits und Validierung gegen Schema-Realität sind Pflicht."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
