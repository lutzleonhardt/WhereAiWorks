---
stage: development
order: 5
roles:
  - software-engineer
title: Codebase-Verständnis
goal_label: Unbekannten Code und Legacy-Module schnell durchdringen
suitability: good_fit
rationale: "Stack Overflow 2024: 30,9% nutzen AI fürs Lernen unbekannter Codebases — mit hoher Wachstumsabsicht. Sourcegraph Cody, Claude Code als Vendor-Anker; in DACH besonders wertvoll bei Legacy-Beständen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Sourcegraph Cody Enterprise (self-hosted) oder Claude Code an Onboarding-Fragen und Legacy-Modul-Erklärungen starten; Erklärungen quervalidieren, gerade bei Geschäftslogik. Für sensible DACH-Codebases On-Prem-Indexing wählen."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI halluziniert plausibel klingende Erklärungen, gerade bei spärlich kommentiertem Code. Repo-Indexing-Tools senden ggf. ganze Codebasis an Cloud — für sensible Bestände On-Prem-Indexing (Cody Enterprise self-hosted, Continue.dev) prüfen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
