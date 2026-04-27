---
stage: customer-support
order: 8
roles:
  - customer-support
title: "Strukturierte Eskalation mit AI-vorbereitetem Kontext"
goal_label: "Übergabe von Bot zu Mensch oder Tier-1 zu Tier-2 ohne Kontextverlust"
suitability: good_fit
rationale: "Standard-Pattern jeder modernen Bot-zu-Mensch-Architektur (Decagon, Sierra, Conferbot, Intercom Fin). Praktiker-Threads dokumentieren das speziell für L1→L2-Übergaben als zentrales Effizienz-Werkzeug. Eskalations-spezifische Felder (Missing Data, SLA Risk) trennen es vom generischen Ticket-Summary."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit der Handoff-Funktion des Bot-Anbieters starten und parallel ein einfaches Eskalations-Template (Issue / Steps Tried / Missing Data / Suggested Next) erzwingen — auch bei rein menschlichen L1→L2-Übergaben."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI 'Probable Root Cause' wird oft mit zu hoher Konfidenz präsentiert — Tier-2 muss skeptisch bleiben, und bei Beschwerden darf das Paket keine generierte Lösung als Fakt darstellen (Haftungsrisiko)."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
