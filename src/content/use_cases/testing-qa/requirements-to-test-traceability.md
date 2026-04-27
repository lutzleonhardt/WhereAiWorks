---
stage: testing-qa
order: 9
roles:
  - qa-engineer
title: "Requirements-to-Test-Traceability für regulierte Software"
goal_label: "Anforderungen ↔ Tests audit-tauglich verknüpfen"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil als Suite-Feature in ALM-Plattformen (Polarion, Codebeamer, Jama Connect) vermarktet und nicht prominent als 'AI'-Tool. Für regulierte DACH-Branchen (Pharma GxP, MedTech IEC 62304, Automotive ISO 26262, Avionik DO-178C, Bahn EN 50128) ist Traceability Audit-Pflicht — kein Nice-to-have."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "In bestehender Polarion-/Codebeamer-Installation das AI-Suggestion-Modul für Traceability auf einen Audit-pflichtigen Teilbereich (eine Compliance-Story-Familie) aktivieren und die Vorschläge zwei Sprints lang von QA-Lead gegenprüfen lassen."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI-erzeugte Traceability-Mappings müssen für Audits weiter manuell freigegeben werden; Modell-Halluzinationen zerstören sonst die Beweiskraft. Plattformen sind teuer und langsam zu integrieren — kein Quick-Win, sondern strategisches ALM-Investment."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
