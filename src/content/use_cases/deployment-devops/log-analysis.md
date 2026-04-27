---
stage: deployment-devops
order: 5
roles:
  - software-engineer
title: "Log-Analyse"
goal_label: "Große Log-Mengen zusammenfassen und Anomalien erklären"
suitability: good_fit
rationale: "Elastic, New Relic, Datadog und Splunk haben AI-Log-Features im GA-Zustand; OSS-Tools wie IncidentFox decken den Use Case ohne Vendor-Lock-in. Klar abgegrenzt von Incident-RCA: hier Lesen/Erklären, nicht Hypothesenbildung."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Im bestehenden Logging-Stack (Elastic AI Assistant oder New Relic AI in EU-Region) ein Such-Pattern für einen wiederkehrenden Fehler bauen lassen und mit der manuellen Query vergleichen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Logs aus Produktion enthalten oft personenbezogene Daten — vor LLM-Übergabe Pseudonymisierung/Maskierung erforderlich (DSGVO Art. 6, 32); AVV mit Vendor muss EU-Datenresidenz und SCC umfassen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
