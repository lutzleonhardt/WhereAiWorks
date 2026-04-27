---
stage: deployment-devops
order: 2
roles:
  - platform-devops-engineer
title: "Alert-Korrelation"
goal_label: "Alert-Lärm reduzieren und zu Incidents bündeln"
suitability: good_fit
rationale: "Klassisches AIOps-Feature, das PagerDuty, BigPanda, Moogsoft und IncidentFox abdecken; PagerDuty meldet zweistellige Reduktionen der Auf-Wach-Last. Klar abgegrenzt zur RCA: Noise-Reduction, nicht Ursachensuche."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit PagerDuty AIOps oder dem AIOps-Modul des bestehenden On-Call-Stacks Change-Korrelation aktivieren und über vier Wochen die Trefferqualität in Postmortems prüfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Korrelation basiert oft auf rein statistischer ML — als 'Generative AI' irreführend; EU-AI-Act-Klassifizierung daher meist 'minimal risk', das bleibt aber dokumentationspflichtig."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
