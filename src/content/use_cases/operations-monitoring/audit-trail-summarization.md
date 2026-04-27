---
stage: operations-monitoring
order: 14
roles:
  - security-engineer
  - platform-devops-engineer
title: "Audit-Trail- und Compliance-Log-Summarization"
goal_label: "Audit-Logs für Compliance-Reviews verdichten"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil als Compliance-Suite-Feature (Splunk Enterprise Security, Microsoft Sentinel, Wiz) statt als 'AI-Operations-Use-Case' vermarktet. In DACH-Banken/Versicherungen aber regulatorisch Pflicht: BaFin-Audits, ISO-27001, DORA und SOX-Pendants verlangen periodische Audit-Log-Reviews, die ohne Verdichtung nicht skalieren."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Splunk Enterprise Security oder Microsoft Sentinel mit AI-Summarization auf einem abgegrenzten Audit-Stream (z.B. Privileged-Access-Logs) testen und das Ergebnis vom internen Auditor gegen die manuelle Review prüfen lassen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Verdichtung darf keine Audit-Events verschlucken — Auditor muss Drill-Down zur Original-Logzeile garantiert haben; AI-Summaries selbst werden zum Audit-Artefakt und müssen versioniert/signiert werden."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
