---
stage: testing-qa
order: 6
roles:
  - software-engineer
  - qa-engineer
title: "Flaky-Test-Erkennung und -Triage"
goal_label: "Flaky-Tests automatisch identifizieren und priorisieren"
suitability: good_fit
rationale: "Etablierter Schmerzpunkt großer Codebasen mit klarem ROI. In DACH-Engineering-Orgs (z.B. SAP, Bosch, Allianz, Deutsche Telekom) eines der ersten AI-QA-Themen mit Praxis-Adoption."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Trunk Flaky Tests (mit AVV) oder selbstgehostetem BuildPulse-Äquivalent zwei Wochen die CI-Hauptpipeline beobachten und die Top-10-Flaky-Liste eines Teams systematisch fixen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Trunk und Datadog sind US-SaaS — Test-Metadaten (Test-Namen, Stacktraces) können fachlich sensitiv sein; AVV und EU-Region-Klausel zwingend. Quarantäne ohne Mitbestimmungs-konforme Eskalation kann als Quality-Gate-Bypass interpretiert werden."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
