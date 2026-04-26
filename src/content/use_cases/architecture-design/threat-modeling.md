---
stage: architecture-design
order: 4
roles:
  - developer
title: "Threat-Modeling"
goal_label: "STRIDE/MAESTRO-Threats aus Architekturbeschreibung ableiten"
suitability: conditional
rationale: "Threat-Modeling ist eine der dokumentiertesten Security-Architecture-AI-Anwendungen mit mehreren Open-Source-Tools (STRIDE-GPT, Paranoid, ASTRIDE-Paper). Output-Struktur ist gut prüfbar; in DACH-regulierten Branchen pflichtig (ISO 27001 Annex A 8.27, BSI-Grundschutz)."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit STRIDE-GPT lokal (Ollama-Backend) oder einem Claude-Code-Skill an einem klar abgegrenzten Bounded Context starten — DFD als Input liefern, Mitigation-Vorschläge mit dem Security-Team gegenprüfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Cloud-LLMs für Threat-Modeling exponieren Architekturmodelle beim Anbieter — bei BAIT-/KRITIS-Systemen sind nur self-hosted (Ollama, lokale Open-Models) oder Azure OpenAI EU mit DPA tragbar. Klassisches STRIDE deckt agentische/AI-spezifische Risiken nicht ab; MAESTRO/ATLAS noch im Fluss."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
