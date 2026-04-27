---
stage: operations-monitoring
order: 9
roles:
  - software-engineer
title: "On-Call-Copilot im ChatOps"
goal_label: "On-Call mit Kontextfragen unterstützen"
suitability: good_fit
rationale: "Datadog Bits AI, Rootly, incident.io und PagerDuty Copilot adressieren genau diese ChatOps-Q&A. Praxis-Adoption sichtbar durch breites Slack-App-Ökosystem; in DACH-Konzernen mit MS-Teams-Standard Tool-Auswahl entsprechend einschränken."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Bits AI oder PagerDuty Copilot als Slack-/Teams-App in einem Team-Channel aktivieren und drei typische Fragen testen, bevor der Bot teamweit gepostet wird."  # Draft aus Discovery — vor Commit prüfen
caveats: "Bot greift auf Service-Catalog, Deploy-History und Chat-Logs zu — Datenflussdiagramm und AVV mit Vendor erforderlich; Antworten sollten in regulierten Rollen (BaFin) audit-loggbar sein."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
