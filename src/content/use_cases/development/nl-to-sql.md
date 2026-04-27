---
stage: development
order: 9
roles:
  - software-engineer
title: Natural-Language → SQL
goal_label: Datenbank-Queries aus deutscher/englischer Beschreibung generieren
suitability: conditional
rationale: "Eigener Slot, von allen großen Cloud-DBs adressiert. Google QueryData, AlloyDB AI, Snowflake Cortex, JetBrains DataGrip AI. Für Devs primär als Schema-Exploration relevant."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit JetBrains DataGrip AI oder AlloyDB AI an Schema-Exploration und einfachen SELECTs starten und für komplexe Joins Plan plus Beispiel-Result vor dem Produktiv-Lauf prüfen. Bei Personenbezug Pseudonymisierung oder On-Prem-LLM einziehen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Ohne explizit gepflegten Schema-Kontext halluzinieren LLMs Spalten. Schema mit Personenbezug (Kunden, Versicherte) ist DSGVO-pflichtig — Pseudonymisierungs-Layer oder On-Prem-LLM. Bei AI-Act-High-Risk-Domänen muss generiertes SQL für Entscheidungen dokumentiert werden."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
