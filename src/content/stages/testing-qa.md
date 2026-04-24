---
name: "Testing & QA"
type: "primary"
order: 4
challenge: "Test-Erstellung und -Maintenance kostet enorm viel Zeit — AI kann hier massiv entlasten."
top_use_case: "Testfall-Generierung aus User Stories oder bestehendem Code"
suitability: "good_fit"
roles:
  - qa-engineer
  - developer
use_cases:
  - id: "testing-qa:test-generation"
    roles:
      - qa-engineer
      - developer
    title: "Testfall-Generierung"
    goal_label: "Tests schneller erstellen"
    suitability: "good_fit"
    rationale: "AI kann aus User Stories, Code und Specs automatisch Testfälle ableiten. Der Effekt ist bei BDD-Tests am stärksten, weil die natürlichsprachliche Vorlage gut als Prompt funktioniert."
    tools:
      - blinqio
      - copilot
    start_here: "BlinqIO: BDD-Tests aus User Stories generieren. Alternativ: Copilot für Unit-Tests aus bestehendem Code — niedrigere Einstiegshürde, keine neue Toolchain."
    caveats: "Human Review empfohlen. Generierte Tests decken primär Happy Path ab — Edge Cases und Sicherheits-Tests brauchen menschliche Expertise."
    sources:
      - label: "RedHat Case Study: BlinqIO-Integration"
        url: "https://www.blinq.io/case-studies/red-hat"
        type: "case_study"
      - label: "METR RCT 2025: Produktivitätseffekte von AI-Coding-Tools"
        url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
        type: "study"

  - id: "testing-qa:visual-regression"
    roles:
      - qa-engineer
    title: "Visual Regression Testing"
    goal_label: "UI-Fehler automatisch erkennen"
    suitability: "good_fit"
    rationale: "Pixel-basierter Vergleich von Screenshots ist eine ideale AI-Aufgabe — klar definiert, wiederholbar, mit wenig Interpretationsspielraum."
    tools:
      - applitools
    start_here: "Applitools Eyes in bestehende CI-Pipeline integrieren. Vergleicht Screenshots automatisch gegen Baseline und meldet nur echte Abweichungen, keine Anti-Aliasing-Artefakte."
    caveats: "Funktioniert am besten bei stabilen Layouts. Bei häufigen Design-Änderungen steigt die Baseline-Pflege stark."
    sources:
      - label: "Applitools Customer Reports"
        url: "https://applitools.com/customers/"
        type: "vendor"

  - id: "testing-qa:self-healing"
    roles:
      - qa-engineer
    title: "Self-healing Tests"
    goal_label: "Weniger Zeit mit kaputten Tests verbringen"
    suitability: "good_fit"
    rationale: "AI erkennt geänderte Selektoren und passt E2E-Tests automatisch an. Das eliminiert einen großen Teil der manuellen Test-Maintenance nach UI-Refactorings."
    tools:
      - mabl
      - blinqio
    start_here: "Mabl für E2E-Tests einsetzen. Erkennt Selector-Änderungen automatisch und schlägt angepasste Tests vor — Review per Click."
    caveats: "Reduziert Maintenance, ersetzt aber nicht das Verständnis der Testlogik. Funktioniert bei Selector-Änderungen, nicht bei semantischen Logik-Änderungen."
    sources:
      - label: "Mabl Platform Documentation"
        url: "https://www.mabl.com/features"
        type: "vendor"
---

## Womit anfangen?

Copilot für Unit-Test-Generierung aus bestehendem Code. Niedrigstes Risiko, sofort spürbar, keine neue Toolchain nötig. Alternativ BlinqIO für BDD-Tests, wenn User Stories als Ausgangsbasis vorhanden sind.

## Grenzen

- Generierte Tests sind nur so gut wie der Kontext, den das Modell bekommt (Code, Stories, Specs).
- Edge Cases und Sicherheits-Tests erfordern menschliche Expertise.
- Self-healing funktioniert bei Selector-Änderungen, nicht bei Logik-Änderungen.
