---
stage: testing-qa
order: 4
roles:
  - qa-engineer
  - software-engineer
title: "Accessibility-Testing mit AI"
goal_label: "WCAG-Findings vorab automatisch finden"
suitability: conditional
rationale: "Deque axe DevTools, Evinced, Stark und neuere AI-erweiterte Linter adressieren das Feld. DACH-spezifischer Compliance-Treiber: BFSG (Barrierefreiheitsstärkungsgesetz, ab 28.06.2025) und EAA. Praxisrelevanz steigt sichtbar."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "axe DevTools oder Evinced auf eine Hauptseite anwenden, Top-10-Findings nach Severity sortieren und zwei Sprints lang gezielt abarbeiten; AccessiBe-ähnliche Overlays vermeiden."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI-Findings für 'sinnhaften Alt-Text' oder 'logische Tab-Order' bleiben fehleranfällig; Großteil der Issues braucht weiter menschliche Beurteilung. Tools ersetzen kein manuelles Audit. Overlay-Tools (z.B. AccessiBe) sind in der Accessibility-Community umstritten und können rechtlich nicht entlasten."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
