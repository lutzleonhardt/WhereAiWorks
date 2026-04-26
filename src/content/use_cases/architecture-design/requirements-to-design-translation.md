---
stage: architecture-design
order: 8
roles:
  - developer
title: "Anforderungen in Design-Skizze überführen"
goal_label: "Aus PRD/User Stories ein erstes High-Level-Design generieren"
suitability: good_fit
rationale: "Etablierter Brückenschritt zwischen Discovery und Implementierung — Wingspan/Brainstorm-Skills, Superpowers-Design-Workflow und Google-Cloud-Builders dokumentieren genau diesen Übergang. Reduziert Aufwand für Initialdesign-Drafts deutlich."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code (Enterprise) oder Wingspan-Brainstorm-Skill an einem klar umrissenen Feature starten, 2–3 Ansätze mit Trade-offs vorschlagen lassen, dann gemeinsam mit Reviewer schärfen."  # Draft aus Discovery — vor Commit prüfen
caveats: "PRDs in DACH-Enterprises enthalten oft Datenklassifizierungen und Personalbezug, die nicht in Cloud-LLMs gehören — interne Variante (Azure OpenAI EU mit DPA, Mistral self-hosted) zwingend. Tool tendiert dazu, sofort in Implementierungsdetails zu fallen ohne ausreichend Klärungsfragen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
