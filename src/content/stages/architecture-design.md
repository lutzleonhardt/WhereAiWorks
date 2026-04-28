---
name: Architecture & Design
type: primary
order: 2
phase: entwickeln
challenge: AI hilft bei Boilerplate-Architektur, ersetzt aber kein fundiertes Trade-off-Denken.
top_use_case: EU-/On-Prem-Topologie für KI-Workloads skizzieren
roles:
  - software-engineer
  - software-architect
  - security-engineer
  - platform-devops-engineer
---

## Womit anfangen?

Am niedrigschwelligsten einsteigen lässt sich über ADR-Drafts oder OpenAPI-Specs – beide haben klar definierte Zielformate, kurze Feedback-Zyklen und lassen sich mit bereits lizenzierten Tools (Copilot, Claude Code) direkt im Repo verankern. Für DACH-Teams mit Compliance-Anforderungen empfiehlt sich der Bedrock-EU-Pfad als Standardroute, bevor der Scope auf sensiblere Artefakte wie Threat-Modelle oder KI-System-Inventare ausgeweitet wird.


## Grenzen

Strukturierte Architektur-Artefakte – Specs, Diagramme, Schemata – gelingen zuverlässig; Trade-off-Urteile, Compliance-Verantwortung und finale Entscheidungen verbleiben beim Architekten. Cloud-LLMs routen Architekturinformationen standardmäßig an US-Infrastruktur – EU-Datenresidenz muss aktiv konfiguriert werden und ist für BAIT-, DORA- und KI-Act-pflichtige Systeme keine Option, sondern Voraussetzung.

