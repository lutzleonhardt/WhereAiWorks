---
stage: deployment-devops
order: 9
roles:
  - software-engineer
  - platform-devops-engineer
title: "Postmortem-Drafting"
goal_label: "Strukturierte Postmortems aus Incident-Daten generieren"
suitability: good_fit
rationale: "incident.io, AutoBrief und Harness AI Scribe sind in GA und werden produktiv genutzt; Reduktion von zwei Stunden auf Minuten wird mehrfach berichtet. Klare Abgrenzung zur RCA: Dokumentations-Schicht, nicht Live-Diagnose."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit incident.io AI-Postmortem (EU-Region) oder AutoBrief einen abgeschlossenen, niedrigsensitiven Incident dokumentieren lassen und gegen den manuell erstellten Bericht abgleichen."  # Draft aus Discovery — vor Commit prüfen
caveats: "DORA verlangt Major-Incident-Initial-Report an BaFin innerhalb 4h — AI-Postmortem dient als Vor-Aufbereitung, nicht als Ersatz; Slack/Teams-Threads als Quelle erzwingen Mitbestimmungs-Klärung wegen Personenbezug."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
