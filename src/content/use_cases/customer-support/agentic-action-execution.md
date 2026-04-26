---
stage: customer-support
order: 12
roles:
  - support-agent
title: "Agentic AI mit System-Aktionen (Refund, Order-Update, etc.)"
goal_label: "End-to-End-Resolution statt nur Antwort"
suitability: conditional
rationale: "Klar von reiner Deflection unterscheidbar: Hier zählt die Tool-Use/Function-Calling-Fähigkeit. Decagon, Intercom Fin Data Connectors und Sierra arbeiten alle daran. McKinsey nennt End-to-End-AI-Worker als 2026er Shift."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit einer einzigen, gut umgrenzten Aktion (z.B. Order-Status-Lookup, Adress-Update) bei einem agentic Helpdesk-Vendor starten, Human-Confirm für alles >X EUR aktivieren, vollständigen Audit-Trail (wer/was/wann) und Rollback-Endpoint vorab implementieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Art. 22 DSGVO sperrt automatisierte Einzelentscheidungen mit rechtlicher Wirkung ohne Rechtsgrundlage und Eingriffsmöglichkeit. BaFin/DORA verlangt Audit-Trail jeder System-Aktion plus Rollback-Pfad. Idempotenz und Auth-Bindung kritisch — Refund-Doppelausführung durch Agent-Loop ist realistisches Failure-Mode."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
