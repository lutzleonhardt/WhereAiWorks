---
stage: architecture-design
order: 11
roles:
  - software-architect
  - platform-devops-engineer
title: "Datenresidenz-/Souveränitäts-Architektur entwerfen"
goal_label: "EU-/On-Prem-Topologie für KI-Workloads skizzieren"
suitability: good_fit
rationale: "Vom Markt-Scan vermutlich übersehen, weil DACH-/EU-spezifisch und im englischsprachigen Capability-Diskurs unsichtbar — in DACH-Banken/Versicherern/Public-Sector aber Routine-Architektur-Aufgabe 2026. Pexon, inteliScience und mehrere DACH-Beratungen liefern wiederholbare Patterns; BaFin-Orientierungshilfe und DORA fordern Drittparteien-Risikobewertung für Cloud-LLM-Provider."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Claude Enterprise in EU-Region oder lokal-gehostetem Mistral an einer konkreten Workload (RAG-Pipeline für interne Dokumente) drei Topologie-Optionen (Azure EU, STACKIT/Sovereign, On-Prem mit vLLM) mit Trade-offs erstellen lassen."  # Draft aus Discovery — vor Commit prüfen
caveats: "AI-Empfehlungen basieren auf öffentlichen Marketing-Aussagen der Hyperscaler — tatsächliche EU-Souveränität (z.B. CLOUD-Act-Risiko trotz EU-Region) muss juristisch geprüft werden. Confidential-Computing-SKUs sind noch nicht in allen Regionen verfügbar; Kapazitäts-Constraints bei GPU-EU-Region führen zu Architekturkompromissen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
