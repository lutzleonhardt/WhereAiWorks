---
stage: development
order: 3
roles:
  - software-engineer
title: AI-gestütztes Debugging
goal_label: Stack-Traces erklären und Root-Cause finden lassen
suitability: good_fit
rationale: "Zweit-stärkster AI-Slot in mehreren Surveys (Stack Overflow 56,7%, ACTI 45,4%), in jedem Mainstream-Tool verbaut. Liefert messbar schnellere Time-to-Fix bei Stack-Traces und Log-Analysen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Copilot Chat oder Claude Code an konkreten Stack-Traces als Hypothesengenerator starten; reproduzierbarer Test plus menschliche Verifikation des Fix-Vorschlags bleibt Pflicht. In DACH-Finanzkontext Stack-Traces vorher pseudonymisieren oder On-Prem-Modell wählen."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI patcht Symptome statt Ursachen, plausibel klingende Falschdiagnosen sind häufig. In DACH-Banken/Versicherern: Stack-Traces können Personenbezug enthalten — Pseudonymisierung oder On-Prem-Modell vor Versand pflichtig."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
