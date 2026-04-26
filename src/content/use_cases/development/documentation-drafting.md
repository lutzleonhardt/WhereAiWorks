---
stage: development
order: 4
roles:
  - developer
title: "Code-Dokumentation"
goal_label: "Docstrings, READMEs und API-Dokumentation aus Code ableiten"
suitability: good_fit
rationale: "Stack Overflow 2024: 40% aktuelle Nutzung, 81% Wachstumserwartung — höchster Wert aller Slots. In DACH durch DORA/BaFin-Orientierungshilfe (18.12.2025) und ISO27001-Pflichten zusätzlich getrieben — Code-/Modell-Änderungen sind dokumentationspflichtig."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Copilot oder Cody an Docstrings und README-Skeletten starten; ein Mensch verifiziert die Aussage. Für API-Verträge CI-Bindung an die echte Quelle einziehen, sonst läuft die Doku auseinander; in DACH-Finanzkontext als Audit-Artefakt versionieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI-Doku ist syntaktisch sauber, aber inhaltlich oft tautologisch. Für API-Verträge ohne Quellverlinkung droht Drift zwischen Code und Doku — CI-Bindung an die Quelle nötig."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
