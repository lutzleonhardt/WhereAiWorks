---
stage: testing-qa
order: 1
roles:
  - qa-engineer
  - developer
title: "Testfall-Generierung"
goal_label: "Tests schneller erstellen"
suitability: "good_fit"
rationale: "AI kann aus User Stories, Code und Specs automatisch Testfälle ableiten. Der Effekt ist bei BDD-Tests am stärksten, weil die natürlichsprachliche Vorlage gut als Prompt funktioniert."
tools:
  - id: blinqio
  - id: copilot
start_here: "BlinqIO: BDD-Tests aus User Stories generieren. Alternativ: Copilot für Unit-Tests aus bestehendem Code — niedrigere Einstiegshürde, keine neue Toolchain."
caveats: "Human Review empfohlen. Generierte Tests decken primär Happy Path ab — Edge Cases und Sicherheits-Tests brauchen menschliche Expertise."
sources:
  - id: redhat-blinqio-case-study
  - id: metr-rct-2025
---
