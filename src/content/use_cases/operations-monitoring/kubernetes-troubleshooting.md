---
stage: operations-monitoring
order: 11
roles:
  - software-engineer
  - platform-devops-engineer
title: "Kubernetes-Cluster-Troubleshooting"
goal_label: "K8s-Probleme erklären und beheben"
suitability: good_fit
rationale: "k8sgpt (CNCF Sandbox), Robusta KRR, Komodor AI und Cast AI adressieren K8s-spezifische Diagnose. k8sgpt zeigt breite Community-Adoption und ist als OSS-Projekt für DACH-Self-Host (Bundesbehörden, KRITIS) konfigurierbar."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "k8sgpt im Read-Only-Modus mit lokalem LLM-Backend auf einem Staging-Cluster laufen lassen und die generierten Erklärungen gegen die echte Ursache scoren, bevor produktive Cluster angeschlossen werden."  # Draft aus Discovery — vor Commit prüfen
caveats: "k8sgpt sendet in Standard-Konfiguration Cluster-Kontext an OpenAI — für DACH-Enterprise zwingend auf lokales LLM (Ollama, Azure OpenAI EU) umkonfigurieren; kubectl-Vorschläge dürfen niemals blind auf Production-Clustern ausgeführt werden (RBAC, Vier-Augen)."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
