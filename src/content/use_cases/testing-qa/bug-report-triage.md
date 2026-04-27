---
stage: testing-qa
order: 5
roles:
  - qa-engineer
  - software-engineer
title: "Bug-Report-Triage und Reproduktion"
goal_label: "Bug-Reports automatisch klassifizieren und reproduzieren"
suitability: conditional
rationale: "Sentry Seer, Bugsnag Smart Suggestions, Linear Asks und Jira AI adressieren Klassifikation; Replay.io, FullStory und LogRocket liefern Repro-Kontext mit AI-Zusammenfassung. Mehrere Vendoren, klarer Workflow-Anker."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Sentry Seer (mit AVV/EU-Region) auf einen einzigen Service-Tag-Stream loslassen und die Klassifikation eine Sprintlänge gegen die manuelle Triage validieren, bevor breiter Rollout."  # Draft aus Discovery — vor Commit prüfen
caveats: "Bug-Reports enthalten oft Kunden-Screenshots/PII — AI-Triage-Pipelines müssen DSGVO-konform sein (kein Cross-Tenant-Training, AVV). Replay.io speichert deterministische Browser-Replays mit kompletter App-Interaktion — für Banking-Apps Datenklassifizierung kritisch."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
