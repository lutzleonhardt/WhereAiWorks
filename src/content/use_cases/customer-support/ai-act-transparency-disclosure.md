---
stage: customer-support
order: 18
roles:
  - support-agent
title: "EU-AI-Act-Transparenz-Disclosure und Mensch-Eskalations-Pfad"
goal_label: "Pflicht-Disclosure und Mensch-Pfad als designter Use-Case behandeln"
suitability: good_fit
rationale: "Vom Markt-Scan vermutlich übersehen, weil dieser Use-Case nicht als eigenständige Capability vermarktet wird, sondern als Compliance-Layer — er ist aber ab 02.08.2026 EU-rechtlich bindend und prägt das Design jedes Customer-Facing-Bots. Compound Law und FINMA verlangen identische Anforderungen: aktive Disclosure plus Human-Path."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit einem stage-übergreifenden Disclosure-Pattern (z.B. erste Nachricht jedes Bots: 'Sie sprechen mit unserer KI…') starten und in der Bot-Designtools (Cognigy, Intercom, Aristech) vorab als Default-Block einrichten; Mensch-Pfad als KPI 'Time-to-Human' messen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Disclosure-Logik muss in jedem Channel und jeder Sprache konsistent funktionieren — schwächste Implementierung wird zur Sanktions-Angriffsfläche. Tracker, dass 'Mensch' nicht zu Tier-3-Warteschleife verkommt — das wäre formell Disclosure, materiell Verstoß gegen FINMA-Conduct-Standards."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
