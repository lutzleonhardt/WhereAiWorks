---
stage: documentation
order: 4
roles:
  - software-engineer
title: "Q&A auf interner Wissensbasis"
goal_label: "Engineer-Fragen über Confluence/Notion/Slack mit AI beantworten"
suitability: conditional
rationale: "Glean/Rovo/Notion AI/M365 Copilot haben den Slot industrialisiert; in DACH-Konzernen mit Atlassian-/Microsoft-Footprint zentral im Rollout. Distinkt zur externen Doku-Q&A: Korpus heterogen (Confluence + Jira + Slack + Drive). Hochrelevant für Engineering-Doku-Konsumption."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit einem klar abgegrenzten Wissens-Subset starten (z.B. nur Engineering-Confluence, nicht HR/Finance). Berechtigungs-Mapping in Pre-Flight prüfen, bevor breit ausgerollt wird. Betriebsrat früh einbinden."  # Draft aus Discovery — vor Commit prüfen
caveats: "Berechtigungs-Inheritance ist DSGVO- und Betriebsrats-Brennpunkt — entweder zu restriktiv ('kein Zugriff') oder zu lax (Antworten zitieren Inhalte, die der User nicht sehen darf). Pilotierung ohne ACL-Mapping ist in DE-Konzernen Show-Stopper. M365 Copilot hat EU Data Boundary, Glean ist US-SaaS mit AVV."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
