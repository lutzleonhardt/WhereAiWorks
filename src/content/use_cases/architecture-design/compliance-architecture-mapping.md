---
stage: architecture-design
order: 13
roles:
  - software-architect
title: "Compliance-Architektur-Mapping (EU AI Act / DORA / ISO 42001)"
goal_label: "KI-System-Architektur auf regulatorische Pflichten abbilden"
suitability: conditional
rationale: "Vom Markt-Scan vermutlich übersehen, weil regulatorisch geframt und als GRC- statt Architektur-Use-Case wahrgenommen — in DACH-Banken/Versicherern aber 2026 unter BaFin-Orientierungshilfe und ISO 42001 zwingend, und das Mapping ist ein Architektur-Artefakt (Inventory + Datenflüsse + Controls). Mehrere DACH-Beratungen (Pexon, KPMG, EbnerStolz) bauen das gerade als wiederholbaren Service."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Azure OpenAI EU oder Claude Enterprise in EU-Region an einem konkreten KI-System (z.B. internem Coding-Assistant) ein Inventar-plus-EU-AI-Act-Mapping als Markdown-Tabelle erzeugen, Compliance-Officer als Reviewer einbinden."  # Draft aus Discovery — vor Commit prüfen
caveats: "Regulatorische Klauseln ändern sich (Digital Omnibus könnte Fristen verschieben) — AI-Mapping veraltet schnell und braucht periodische Re-Validierung. Halluzinierte Artikelnummern oder falsche Control-IDs in Audit-Dokumenten sind ein direktes Compliance-Risiko."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
