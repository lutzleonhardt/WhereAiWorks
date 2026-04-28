---
name: Development
type: primary
order: 3
phase: entwickeln
challenge: Produktivitätsgewinn ist real, aber kontextabhängig — kein universeller 10x-Effekt.
top_use_case: Stack-Traces erklären und Root-Cause finden lassen
roles:
  - software-engineer
  - qa-engineer
  - security-engineer
  - platform-devops-engineer
---

## Womit anfangen?

Der risikoärmste Einstieg sind Code-Completion und KI-gestütztes Debugging: Inline-Vorschläge für Boilerplate und /explain-Commands direkt am Stack-Trace lassen sich im bestehenden IDE-Setup aktivieren, ohne neue Beschaffungsprozesse anzustoßen. Wer die Wirkung messen will, ergänzt Test-Generierung und Commit-Drafting — beide liefern ein prüfbares Ergebnis mit kurzem menschlichem Review-Gate.







## Grenzen

KI-Fixes sind überwiegend datei-lokal: Schwachstellen mit modulübergreifendem Taint-Flow, komplexe Architekturentscheidungen und Legacy-Code mit spärlicher Testabdeckung überfordern aktuelle Modelle zuverlässig. In DACH-Finanz- und Versicherungsumgebungen muss der Datenpfad zum LLM-Backend vertraglich im DPA freigegeben und ein EU-Tenant oder Self-Hosted-Pfad explizit konfiguriert sein — ohne diesen Schritt bleibt der Rollout blockiert.






