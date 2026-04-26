---
name: "Testing & QA"
type: "primary"
order: 4
phase: "entwickeln"
challenge: "Test-Erstellung und -Maintenance kostet enorm viel Zeit — AI kann hier massiv entlasten."
top_use_case: "Testfall-Generierung aus User Stories oder bestehendem Code"
roles:
  - qa-engineer
  - developer
---

## Womit anfangen?

Copilot für Unit-Test-Generierung aus bestehendem Code. Niedrigstes Risiko, sofort spürbar, keine neue Toolchain nötig. Alternativ BlinqIO für BDD-Tests, wenn User Stories als Ausgangsbasis vorhanden sind.

## Grenzen

- Generierte Tests sind nur so gut wie der Kontext, den das Modell bekommt (Code, Stories, Specs).
- Edge Cases und Sicherheits-Tests erfordern menschliche Expertise.
- Self-healing funktioniert bei Selector-Änderungen, nicht bei Logik-Änderungen.
