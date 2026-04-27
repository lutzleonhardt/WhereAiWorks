---
stage: deployment-devops
order: 11
roles:
  - software-engineer
title: "Kubernetes-Manifest-Generierung"
goal_label: "Deployment, Service, Ingress, HPA als YAML aus Anforderungen erzeugen"
suitability: conditional
rationale: "Cursor, Copilot, Claude Code und k8sGPT decken den Use Case mit eigenen Workflows ab; Helm-Templating klappt vor allem mit kontextbewussten Tools. Praxisberichte zeigen, dass Security-Defaults (non-root, readOnlyRoot, Probes) explizit angefordert werden müssen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Cursor oder Copilot (Enterprise-Plan, EU-Tenant) ein Standard-Deployment generieren lassen, dann mit `kubeconform` und einem Policy-Scanner (Checkov, kube-score, OPA Gatekeeper) gegenchecken."  # Draft aus Discovery — vor Commit prüfen
caveats: "Pod Security Standards 'restricted' und NetworkPolicies setzen DACH-Banken voraus, AI-Defaults erfüllen das selten von sich aus; Repo-Inhalte als Kontext erzwingen EU-Region/Self-hosted-Modus des Tools."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
