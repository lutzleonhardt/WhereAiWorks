---
stage: development
order: 11
roles:
  - software-engineer
title: "Delegierte Coding-Agents"
goal_label: "Tickets asynchron an einen Cloud-Agent geben und PR zurückbekommen"
suitability: conditional
rationale: "Eigener Workflow-Slot, von allen Suite-Anbietern adressiert. GitHub Copilot Cloud Agent GA, Cursor Background Agents, Claude Code via Agent SDK."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit GitHub Copilot Cloud Agent oder Cursor Background Agents an gut abgegrenzten Backlog-Tickets ('add tests for module X', 'bump dep Y') starten, Spec und Tests sind Pflicht. In regulierter DACH-Umgebung Self-Hosted-Runner und expliziten DPA voraussetzen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Funktioniert nur bei klar abgegrenzten Tickets mit guter Test-Suite. In DACH-Banken/Versicherern häufig blockiert: DORA klassifiziert Cloud-Agent-Execution als IKT-Drittparteienrisiko, GitHub-Actions-Runner verlassen je nach Setup EU-Region. Self-Hosted-Runner und expliziter DPA pflichtig."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
