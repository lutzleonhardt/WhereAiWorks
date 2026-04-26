---
stage: deployment-devops
order: 15
roles:
  - developer
title: "Runbook-Generierung"
goal_label: "Schritt-für-Schritt-Runbooks aus Incidents und Code ableiten"
suitability: conditional
rationale: "PagerDuty SRE Agent, Incident Copilot und Relvy generieren produktiv Runbooks; PagerDuty hebt 'self-updating runbooks' explizit hervor. Repetitive Incidents werden so schneller standardisiert."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Für einen wiederkehrenden Incident-Typ (z.B. Pod-OOM) ein AI-generiertes Runbook in Confluence/Notion ablegen und beim nächsten Vorfall Schritt-für-Schritt validieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Generierte Runbooks ohne Test sind hauchdünne Theorie — Schritte funktionieren oft nur im Demosystem. Versionierung und Drift gegenüber realer Infra brauchen Disziplin."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
