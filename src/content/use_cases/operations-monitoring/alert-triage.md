---
stage: operations-monitoring
order: 2
roles:
  - software-engineer
title: "Alert-Triage und Noise Reduction"
goal_label: "Alert-Flut clustern und priorisieren"
suitability: good_fit
rationale: "Klassisches AIOps-Kernproblem mit langer Vendor-Tradition: Datadog Watchdog, New Relic Applied Intelligence, PagerDuty AIOps und Moogsoft adressieren Alert-Korrelation seit Jahren — die generative Welle hat die Cluster-Erklärungen und Severity-Begründungen verbessert."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit PagerDuty AIOps oder Datadog Watchdog (EU-Region) auf einer einzigen lauten Service-Domäne starten und Cluster-Output zwei Wochen lang gegen die manuelle Triage validieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "PII in Alert-Inhalten (User-IDs, Session-Tokens) macht SaaS-AIOps DSGVO-pflichtig — AVV und EU-Datenresidenz sind in DACH-Enterprise nicht verhandelbar; falsch geclusterte Alerts können in KRITIS-Kontexten meldepflichtige Vorfälle (NIS2) verschleiern."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
