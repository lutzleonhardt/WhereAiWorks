---
stage: testing-qa
order: 8
roles:
  - qa-engineer
  - developer
title: "Test-Impact-Analyse / Predictive Test Selection"
goal_label: "Nur relevante Tests pro Change ausführen"
suitability: good_fit
rationale: "Etablierte Praxis bei Microsoft, Google, Facebook, jetzt als Produkt verfügbar (Launchable, Datadog Intelligent Test Runner, Microsoft TIA in Azure DevOps). Klar messbarer Wert: CI-Zeit und -Kosten. Microsoft TIA ist für DACH-Microsoft-Shops Tenant-konform."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Datadog Intelligent Test Runner oder Azure DevOps TIA parallel zur normalen Pipeline laufen lassen und vier Wochen Treffer-/Miss-Rate gegen Full-Runs vergleichen, bevor selektives Ausführen produktiv geht."  # Draft aus Discovery — vor Commit prüfen
caveats: "In regulierten Releases (Pharma/MedTech, Bahnsteuerung) kann ML-basiertes Test-Skipping mit Validierungspflicht kollidieren — periodischer Full-Run muss audit-tauglich dokumentiert sein. Modell-Drift bei stark refaktorisierten Codebasen reduziert Treffergenauigkeit."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
