---
stage: development
order: 7
roles:
  - software-engineer
  - qa-engineer
title: Test-Generierung
goal_label: Unit-Tests und Test-Scaffolding aus Funktionssignaturen ableiten lassen
suitability: good_fit
rationale: "Schnell amortisierende AI-Anwendung mit klarem Vendor-Tooling (Copilot Testing, Cody, Claude Code TDD-Hooks). Praktiker-Berichte (Stripe Systems) bestätigen 14 von 22 Tests pro Service brauchbar."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code oder Copilot Testing an Test-Scaffolding für Happy-Path und offensichtliche Edge-Cases starten und Mutation-Testing (Stryker/PIT) ergänzen, sonst lügt die Coverage. Geschäftskritische Assertions weiterhin manuell schreiben."  # Draft aus Discovery — vor Commit prüfen
caveats: "Generierte Tests reproduzieren oft Implementierungsdetails statt Verhalten. In regulierten Branchen müssen kritische Pfad-Tests (Kreditscoring, Vertragslogik) weiter manuell verfasst und reviewt werden — sonst täuscht Coverage Robustheit nur vor."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
