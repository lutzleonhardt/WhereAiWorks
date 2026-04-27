---
stage: documentation
order: 5
roles:
  - software-engineer
  - software-architect
title: "Legacy-Code-Dokumentation (COBOL, ABAP, Mainframe)"
goal_label: "Unterdokumentierte Altcodebases (COBOL, ABAP, PL/I) erschließen lassen"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil als Mainframe-Modernisierungs-Suite (IBM watsonx) statt als Doku-Use-Case vermarktet. DACH-spezifisch hochrelevant: Banken/Versicherungen/SAP-Bestandshäuser haben tausende unterdokumentierte ABAP-/COBOL-Module, die für DORA/BAIT-Audits und Modernisierungsprojekte erschlossen werden müssen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit IBM watsonx Code Assistant for Z (on-prem-fähig) oder SAP Joule auf einem nicht-kritischen Legacy-Modul starten. Output von einem Senior-Mainframer review'en lassen, bevor Doku ins Wiki landet."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI-Verständnis von domain-spezifischen ABAP-/COBOL-Patterns ist nicht zuverlässig — generierte Doku braucht Review durch Senior-Mainframer. Datenklassifikation (PII in COBOL-Copybooks) muss vor AI-Übermittlung geprüft sein; SaaS-LLMs für regulierte Mainframe-Codebases meist ausgeschlossen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
