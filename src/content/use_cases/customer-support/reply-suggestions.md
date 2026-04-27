---
stage: customer-support
order: 1
roles:
  - customer-support
title: "Antwortvorschläge"
goal_label: "Routine-Anfragen schneller beantworten"
suitability: "good_fit"
rationale: "LLMs mit Anbindung an FAQ und frühere Tickets liefern brauchbare Antwort-Entwürfe. Agent:innen editieren und senden — deutlich schneller als von Hand zu schreiben."
tools:
  - id: intercom-fin
    fit: good_fit
    why_it_fits: "Tief in Intercom-Tickets integriert; löst Routine-Anfragen teilautonom und schlägt sonst Antwort-Drafts vor."
  - id: zendesk-ai
    fit: good_fit
    why_it_fits: "Antwort-Vorschläge auf Basis vergangener Tickets und Knowledge Base; nahtlos in Zendesk-Workflow."
start_here: "Intercom Fin oder Zendesk AI auf den häufigsten 10 Ticket-Typen scharfschalten. Erst Assistenz-Modus (Vorschlag), später teilautonom (Auto-Resolve bei hoher Confidence)."
caveats: "Tonalität und Corporate-Voice müssen geprüft werden. Bei sensiblen Vorgängen (Kündigung, Rückgabe) zwingend Human Review."
sources:
  - id: intercom-fin-product
---
