---
stage: deployment-devops
order: 13
roles:
  - developer
title: "Cluster-Troubleshooting"
goal_label: "Live-Kubernetes-Cluster mit Klartext analysieren"
suitability: conditional
rationale: "Google Cloud pflegt `kubectl-ai` (8k+ Sterne, MCP-fähig), Microsoft hat eine Agentic CLI für AKS auf Basis von HolmesGPT, k8sGPT ist als CNCF-Sandbox etabliert. Ergänzt Manifest-Generierung um den Live-State-Loop."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit kubectl-ai in einem Dev-Cluster im Read-Only-Modus starten (`kubectl get/describe/logs`), gegen einen lokalen Ollama-Endpoint laufen lassen und jede kubectl-Aktion separat auditieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Cluster-State enthält PII/Secrets in ConfigMaps — LLM darf diese nicht in Klartext sehen, Maskierungs-Layer (MCP-Server mit Allowlist) nötig; Prod-Cluster-Zugriff via AI-Agent ist mitbestimmungspflichtig."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
