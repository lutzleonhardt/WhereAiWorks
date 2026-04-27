---
stage: operations-monitoring
order: 12
roles:
  - software-engineer
title: "AI-gestützte Runbook-Ausführung"
goal_label: "Runbook-Schritte vorschlagen, nicht autonom ausführen"
suitability: conditional
rationale: "PagerDuty Runbook Automation/Rundeck, Transposit, ServiceNow AI Agents und Cortex bieten LLM-gestützte Runbook-Vorschläge. In DACH-Enterprise sinnvoll als Vorschlag-Modus; Auto-Remediation bleibt regulatorisch problematisch."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "PagerDuty Runbook Automation auf eine wohldefinierte Klasse von Lärm-Incidents (Disk-Cleanup, Pod-Restart) ausschließlich im Vorschlag-Modus aktivieren — Auto-Run in DACH-Enterprise nicht ohne Compliance-Freigabe."  # Draft aus Discovery — vor Commit prüfen
caveats: "Auto-Remediation ohne Human Approval verletzt häufig BaFin/BSI-IT-Grundschutz, ITIL-Change-Management und EU-AI-Act Art. 14 (Human Oversight); Runbooks veralten schneller, als die KI sie pflegen kann."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
