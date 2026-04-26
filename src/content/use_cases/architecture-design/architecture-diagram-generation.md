---
stage: architecture-design
order: 6
roles:
  - developer
title: "Architektur-Diagramme generieren"
goal_label: "C4-, Sequenz- und Komponentendiagramme aus Klartext erzeugen"
suitability: good_fit
rationale: "Etablierte Kategorie mit dedizierten Tools (Visual Paradigm AI C4 Studio, Cloudairy, C4X-VS-Code-Plugin) und nativer Diagrammgenerierung in Claude Code/ChatGPT. Senkt die Mermaid-/PlantUML-Syntax-Hürde deutlich und liefert versionierbaren Diagramm-Code."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Code oder Cursor (Enterprise-Tenant, EU-Region) und lokalem Mermaid/Structurizr-DSL starten — Diagramm-Code im Repo versionieren statt SaaS-Tools mit unbekanntem Datenfluss."  # Draft aus Discovery — vor Commit prüfen
caveats: "SaaS-Diagramm-Tools (Cloudairy, Visual Paradigm Online) laden Architekturskizzen in fremde Clouds — für KRITIS-/BAIT-Systeme ungeeignet; lokales Mermaid/PlantUML/Structurizr-DSL mit IDE-LLM (Claude Code, Cursor mit Enterprise-Tenant) ist die DACH-konforme Variante."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
