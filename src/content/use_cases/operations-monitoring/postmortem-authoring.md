---
stage: operations-monitoring
order: 10
roles:
  - developer
title: "Postmortem-Drafting"
goal_label: "Postmortem-Entwurf aus Timeline generieren"
suitability: good_fit
rationale: "incident.io, Rootly, FireHydrant und PagerDuty bieten Postmortem-Drafting-Funktionen; in DACH-Finanzdienstleistung durch DORA-Postmortem-Anforderungen (Art. 17–19 DORA) sogar regulatorisch motiviert."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Rootly oder incident.io auf einen abgeschlossenen P3-Incident anwenden und den generierten Entwurf gegen die manuelle Version vergleichen, bevor er Standard-Workflow wird."  # Draft aus Discovery — vor Commit prüfen
caveats: "Action Items klingen oft generisch ('add monitoring'); bei meldepflichtigen Vorfällen darf der Draft nicht ohne Engineering-Sign-off in Behörden-Reports — und Slack/Teams-Verlauf als Quelle enthält PII (DSB-Freigabe einholen)."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
