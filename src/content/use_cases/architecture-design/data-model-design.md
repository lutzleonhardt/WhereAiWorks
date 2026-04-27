---
stage: architecture-design
order: 7
roles:
  - software-engineer
  - software-architect
title: "Datenmodell entwerfen"
goal_label: "ERD und Schema aus Domänenbeschreibung ableiten"
suitability: good_fit
rationale: "Eigenständige Tool-Kategorie (TalkingSchema, Structa, Relmic, Cloudairy ERD, AI2SQL) plus dedizierte Skill-Workflows in Claude Code. Schema-Design folgt klaren Regeln (Normalisierung, FK-Integrität), die LLMs gut anwenden — Reverse-Engineering aus bestehendem SQL/DBML ist ebenfalls etabliert."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code lokal oder DBeaver-AI-Plugin an einem Bounded Context starten — Plan-Mode mit Approval-Checklist nutzen, Migrationen per Diff erzeugen."  # Draft aus Discovery — vor Commit prüfen
caveats: "TalkingSchema/Structa sind Cloud-SaaS — Schema-Drafts für regulierte Domänen (Personen-, Gesundheits-, Finanzdaten) sollten in lokalen Tools entstehen. DSGVO-Datenklassifizierung (z.B. Art. 9 besondere Kategorien) wird von generischen Tools nicht abgebildet."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
