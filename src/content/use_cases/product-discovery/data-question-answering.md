---
stage: product-discovery
order: 9
roles:
  - product-manager
title: "Self-Service-Produktdaten-Fragen"
goal_label: "Ad-hoc-Fragen an Produktdaten ohne SQL stellen"
suitability: conditional
rationale: "Amplitude AI Assistant, Mixpanel Spark und Hex Magic haben Natural-Language-Querying als Discovery-Helfer etabliert; PMs müssen nicht für jede Frage Data einbeziehen. Beschleunigt die Hypothesen-Validierung im Discovery-Workflow erheblich."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Wenn Amplitude/Mixpanel datenschutzrechtlich freigegeben sind, mit einer bekannten Frage starten, deren Antwort man kennt, um Definitions-Mismatches zu kalibrieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Mixpanel/Amplitude in DACH oft kritisch wegen Schrems-II und Produkt-Telemetrie-DSGVO-Setup; in regulierten Branchen oft auf Matomo/Plausible zurückgegriffen, die keinen vergleichbaren NL-Layer haben. Stille Definitions-Drift bei Metriken ist Audit-Risiko."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
