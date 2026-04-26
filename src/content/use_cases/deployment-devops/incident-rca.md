---
stage: deployment-devops
order: 8
roles:
  - developer
title: "Incident-RCA"
goal_label: "Wahrscheinliche Ursache von Produktionsincidents korrelieren und vorschlagen"
suitability: conditional
rationale: "PagerDuty SRE Agent, Datadog Bits AI, Logz.io, IncidentFox (OSS), Harness AI SRE liefern produktiv. Block berichtet von produktivem Triage-Einsatz; PagerDuty meldet bis zu 50 % schnellere Resolution."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit der RCA-Funktion des bestehenden On-Call-Stacks (Datadog Bits AI mit EU-Region oder PagerDuty SRE Agent) oder self-hosted IncidentFox/OpenSRE auf einem nicht-kritischen Service starten und Hypothesen 4 Wochen manuell gegenprüfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "DORA Article 12 verlangt tamper-evidente Audit-Trails jeder AI-Aktion auf Produktion — SaaS-AIOps liefern das nicht out-of-the-box; in DE zusätzlich Mitbestimmung nach §87 BetrVG, weil AI-Agent Logs/Aktionen einzelner Devs sieht."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
