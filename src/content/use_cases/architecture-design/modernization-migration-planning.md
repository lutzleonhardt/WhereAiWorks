---
stage: architecture-design
order: 10
roles:
  - software-engineer
title: "Modernisierungs-/Migrationsplanung"
goal_label: "Migrationspfad und Transition-Architektur ableiten"
suitability: conditional
rationale: "Mehrfach in Praxisberichten dokumentiert (Code Explorer, Markaicode, Zühlke). AI bündelt Codebasis-Verständnis, Risk-Mapping und schrittweise Migrationspläne — genau die Kombi, die manuell sehr aufwändig ist. DACH-Anker: Sparkassen-/Versicherungs-/Behörden-Mainframe-Bestand."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code Enterprise an einem klar abgegrenzten Bounded Context starten — Codebase-Map zuerst erzeugen, dann eine Strangler-Fig-Migration in 3 Phasen vorschlagen lassen, jede Phase mit Compliance/Betriebsrat gegenprüfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI-Migrationspläne unterschätzen DACH-spezifische Hürden: Betriebsrats-Mitbestimmung bei Systemwechseln, BaFin-Genehmigungspflicht (Wesentliche-Änderung-Anzeige nach §44 KWG), Datenexport-Restriktionen, Aufbewahrungsfristen. Pläne sind technisch plausibel, aber ohne realistische Aufwandsschätzung."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
