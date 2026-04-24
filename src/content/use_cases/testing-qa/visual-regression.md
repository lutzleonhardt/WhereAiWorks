---
stage: testing-qa
order: 2
roles:
  - qa-engineer
title: "Visual Regression Testing"
goal_label: "UI-Fehler automatisch erkennen"
suitability: "good_fit"
rationale: "Pixel-basierter Vergleich von Screenshots ist eine ideale AI-Aufgabe — klar definiert, wiederholbar, mit wenig Interpretationsspielraum."
tools:
  - id: applitools
start_here: "Applitools Eyes in bestehende CI-Pipeline integrieren. Vergleicht Screenshots automatisch gegen Baseline und meldet nur echte Abweichungen, keine Anti-Aliasing-Artefakte."
caveats: "Funktioniert am besten bei stabilen Layouts. Bei häufigen Design-Änderungen steigt die Baseline-Pflege stark."
sources:
  - label: "Applitools Customer Reports"
    url: "https://applitools.com/customers/"
    type: "vendor"
---
