---
stage: deployment-devops
order: 18
roles:
  - developer
title: "Self-hosted AI-SRE-Plattform"
goal_label: "Air-gap-fähiger Investigation-Agent für Incidents"
suitability: conditional
rationale: "Vom Markt-Scan zwar im incident-rca-Eintrag erwähnt, aber nicht als eigenständiger Use Case herausgestellt. IncidentFox, OpenSRE, Aurora, Kubernaut und IBM Cloud Pak AIOps decken den DACH-spezifischen Bedarf an Air-Gap-/Sovereign-Deployment, der SaaS-RCA-Lösungen für Behörden, KRITIS und Defense ausschließt."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "IncidentFox oder Aurora self-hosted via Helm in einem nicht-produktiven Cluster aufsetzen, gegen einen lokalen Ollama- oder Azure-OpenAI-EU-Endpoint anbinden und an einem nicht-kritischen Service-Alert evaluieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Selbstbetrieb erfordert dediziertes Plattform-Team (LLM-Hosting, Vector-DB, Topology-Daten); Support/SLA gegenüber kommerzieller SaaS deutlich schwächer; Lizenzfragen bei OSS+Enterprise-Mix beachten."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
