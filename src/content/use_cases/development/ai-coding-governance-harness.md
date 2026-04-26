---
stage: development
order: 12
roles:
  - developer
title: "Governance-Harness für AI-Coding-Agenten"
goal_label: "Audit-Logging, Credential-Isolation und Sub-Processor-Listing rund um Coding-Agenten"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil DACH-spezifisch und als Beratungsleistung (Tomeris, Pexon, Storm Reply) statt eigenständiges Tool vermarktet. DORA Art. 5–15 und BaFin-Orientierungshilfe (18.12.2025) machen den Wrapper aus Audit-Logging, Sub-Processor-Liste, DPA und Credential-Isolation zum Vor-Implementierungsschritt für jedes regulierte DACH-Coding-Agent-Setup."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Vor jedem regulierten Coding-Agent-Rollout mit Tomeris Agentic Harness oder Pexon Private AI an Audit-Logging, Credential-Isolation und Command-Deny-Lists starten und DPA plus Sub-Processor-Listing organisatorisch verankern. Ohne Datenschutz/IT-Security-/Revisionseinbindung bleibt das Setup auf Folie."  # Draft aus Discovery — vor Commit prüfen
caveats: "Ist eher Architektur-/Plattform-Disziplin als Coding-Workflow — Risiko der Verwechslung mit reiner Tool-Auswahl. Ohne organisatorische Verankerung (Datenschutz, IT-Security, interne Revision) bleibt es bei Folie."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
