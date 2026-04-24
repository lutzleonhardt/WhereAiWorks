---
name: "Customer Support"
type: "primary"
order: 7
challenge: "Erstlevel-Tickets binden Ressourcen, die für komplexe Fälle fehlen."
top_use_case: "Antwortvorschläge und Self-Service-Deflection"
suitability: "good_fit"
roles:
  - support-agent
use_cases:
  - id: "customer-support:reply-suggestions"
    roles:
      - support-agent
    title: "Antwortvorschläge"
    goal_label: "Routine-Anfragen schneller beantworten"
    suitability: "good_fit"
    rationale: "LLMs mit Anbindung an FAQ und frühere Tickets liefern brauchbare Antwort-Entwürfe. Agent:innen editieren und senden — deutlich schneller als von Hand zu schreiben."
    tools:
      - intercom-fin
      - zendesk-ai
    start_here: "Intercom Fin oder Zendesk AI auf den häufigsten 10 Ticket-Typen scharfschalten. Erst Assistenz-Modus (Vorschlag), später teilautonom (Auto-Resolve bei hoher Confidence)."
    caveats: "Tonalität und Corporate-Voice müssen geprüft werden. Bei sensiblen Vorgängen (Kündigung, Rückgabe) zwingend Human Review."
    sources:
      - label: "Intercom Fin — Product Page"
        url: "https://www.intercom.com/fin"
        type: "vendor"
---

## Womit anfangen?

_Platzhalter — folgt in Phase 2._

## Grenzen

_Platzhalter — Eskalations-Workflows und Kündigungs-/Rückgabe-Fälle immer mit menschlicher Freigabe._
