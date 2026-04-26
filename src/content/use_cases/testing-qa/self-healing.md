---
stage: testing-qa
order: 3
roles:
  - qa-engineer
title: "Self-healing Tests"
goal_label: "Weniger Zeit mit kaputten Tests verbringen"
suitability: "good_fit"
rationale: "AI erkennt geänderte Selektoren und passt E2E-Tests automatisch an. Das eliminiert einen großen Teil der manuellen Test-Maintenance nach UI-Refactorings."
tools:
  - id: mabl
    fit: good_fit
    why_it_fits: "Self-healing-Engine erkennt Selector-Änderungen automatisch und schlägt angepasste E2E-Tests vor."
  - id: blinqio
    fit: conditional
    why_it_fits: "BDD-fokussiert; Tests sind durch Natural-Language-Vorlagen tendenziell robuster gegen UI-Änderungen."
start_here: "Mabl für E2E-Tests einsetzen. Erkennt Selector-Änderungen automatisch und schlägt angepasste Tests vor — Review per Click."
caveats: "Reduziert Maintenance, ersetzt aber nicht das Verständnis der Testlogik. Funktioniert bei Selector-Änderungen, nicht bei semantischen Logik-Änderungen."
sources:
  - id: mabl-platform-docs
---
