---
stage: hr-onboarding
order: 8
roles:
  - product-manager
title: "Internes HR-Self-Service-Q&A"
goal_label: "Routine-HR-Fragen per Chat beantworten"
suitability: conditional
rationale: "Leena AI, Workday Assistant, Espressive und ServiceNow HR Agent bedienen das Enterprise breit. Vendor-Material: 95% der Routine-Fragen werden autonom geklärt. Eightfold-Survey: 53% sehen Chatbots als nützlich."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit einem RAG-Bot auf Microsoft 365 / Azure OpenAI EU-Region für eine eng abgegrenzte Domäne ('Urlaub & Abwesenheit') starten, Antwort-Fehlerrate vor Roll-out auf alle Themen messen und Betriebsvereinbarung vorbereiten."  # Draft aus Discovery — vor Commit prüfen
caveats: "Conversation-Logs enthalten DSGVO Art. 9-relevante Daten (Krankheit, Elternzeit, Konflikte) — Logging-Konzept und kurze Retention zwingend. BetrVG §87(1) Nr. 6 (technische Überwachungseinrichtung) löst Mitbestimmung aus. Halluzination bei Policy-Auskünften ist hochriskant."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
