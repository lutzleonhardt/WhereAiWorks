---
stage: customer-support
order: 16
roles:
  - support-agent
title: "Sentiment- und Eskalationsfrüherkennung"
goal_label: "Kritische Tickets vor der Eskalation erkennen"
suitability: conditional
rationale: "Eigenes Modul bei IrisAgent, Aisera, Salesforce Einstein. Predictive-Charakter trennt es von reiner Triage-Klassifikation; abzielt auf Manager-Rolle, nicht primär Agent."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit der Sentiment-/Escalation-Funktion des bestehenden Helpdesks ausschließlich kunden-/case-bezogen starten, Schwellen historisch kalibrieren und Agent-Sentiment-Tracking explizit deaktivieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "EU AI Act Art. 5 schränkt Emotion Recognition am Arbeitsplatz stark ein — wird auch Agent-Sentiment getrackt, ist Ende-Gelände. Sprachmodell-Bias bei höflich-distanziertem Deutsch erzeugt False Positives; Schwellen müssen pro Region kalibriert werden."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
