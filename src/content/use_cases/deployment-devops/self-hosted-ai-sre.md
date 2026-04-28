---
stage: deployment-devops
order: 18
roles:
  - platform-devops-engineer
title: Self-hosted AI-SRE-Plattform
goal_label: Air-gap-fähiger Investigation-Agent für Incidents
suitability: conditional
rationale: "HolmesGPT ist der praxisbelegte OSS-Einstiegspunkt für Air-Gap-fähige Incident-Investigation: CNCF-Sandbox, BYO-LLM via LiteLLM und dokumentierter produktiver Einsatz machen ihn zur belastbarsten freien Option. Wer einen Enterprise-Vertrag mit EU-Support-SLA und OpenShift-Sovereign-Stack benötigt, ist mit IBM Cloud Pak for AIOps der einzige Anbieter mit dokumentiertem, voll-supportetem Air-Gap-Deployment."
tools:
  - id: holmesgpt-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Reifster OSS-Investigation-Agent mit Helm-Chart, BYO-LLM via LiteLLM (Azure OpenAI EU, Bedrock EU, Ollama, vLLM) und CNCF-Sandbox-Pedigree. ReAct-Loop ueber Prometheus/Loki/K8s. Praxisbericht (CNCF-Blog) zeigt produktiven Einsatz. Air-Gap erreichbar, sobald Sentry-Telemetry deaktiviert und lokales Modell >=14B mit Tool-Calling bereitgestellt wird.
    caveats:
      - Sentry-Telemetrie per Default an — fuer Air-Gap explizit enableTelemetry=false setzen
      - Self-hosted Modelle <14B liefern unzuverlaessige Tool-Calls
      - Robusta-UI defaultmaessig SaaS — vollstaendige On-Prem-UI nur ueber Enterprise-Vertrag
      - ClusterRole-Permissions und MCP-Remediation-Toolset BetrVG-relevant (Mitbestimmung)
      - enableTelemetry=true ist Helm-Default (Sentry-DSN) — fuer Air-Gap explizit auf false setzen, sonst Phone-Home
      - ClusterRole-Berechtigungen muessen mit Betriebsrat abgestimmt werden, sobald Remediation-MCP aktiviert wird (Mitbestimmung gem. BetrVG bei AI-Aktionen)
      - Robusta Inc. ist US-Firma; selbst bei vollstaendig self-hosted HolmesGPT bleibt CLOUD-Act-Risiko bei Support-Eskalationen
      - Self-hosted Modelle <14B liefern in der Praxis zu wenig zuverlässige Tool-Calls (STCLab-Bericht)
      - Robusta-Plattform-Backend für UI ist SaaS-default; on-prem nur für Enterprise-Kunden
      - Air-Gap mit lokalen Modellen erfordert GPU-Stack (KubeAI/Karpenter) — Cold-Start 5-8 min beobachtet
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - ReAct-Loop liefert Human-Level RCA bei guten Modellen
        - Helm-Install + LiteLLM-Integration als sauberer Standard
      complaints:
        - Kleine lokale Modelle (<14B) scheitern an Tool-Calls
        - Prompt-Caching-Marker brechen einige Modell-APIs
    sources:
      - id: github-com-holmesgpt-holmesgpt
      - id: cncf-io-blog-2026-04-21-auto-diagnosing-kubernetes-alerts-with-holmesgpt-and-cncf-tools
      - id: github-com-robusta-dev-holmesgpt-blob-master-docs-reference-helm-configuration-md
      - id: reddit-com-r-kubernetes-comments-1do6x48-im-the-ceo-of-robustadev-and-we-recently-released
  - id: k8sgpt-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Reifster CNCF-OSS-Diagnose-Layer mit Daten-Anonymisierung vor LLM-Call und LocalAI/Ollama-Support. Operator-Modus liefert Befunde als CRDs — gut fuer GitOps. Fuer den vollen Investigation-Loop typischerweise mit HolmesGPT/Kubernaut zu kombinieren.
    caveats:
      - Reine Diagnose, kein echter Investigation/Remediation-Loop
      - AI-Free-Mode-Wert begrenzt auf strukturierte Analyzer-Ausgaben
      - UX/Slack-Integration weniger ausgereift als HolmesGPT
      - K8sGPT alleine erfuellt das Use-Case-Ziel nicht — braucht typisch HolmesGPT/Kubernaut obendrauf
      - AI-Free-Mode liefert nur strukturierte Analyzer-Ausgaben, kein RCA-Mehrwert
      - Keine Approval-Gates fuer Mutations — Operator-Modus fokussiert nur auf Befunde
      - Reine Diagnose, keine echte Investigation/Remediation-Loop wie HolmesGPT/Kubernaut
      - AI-Layer ist optional — Wert ohne LLM begrenzt auf strukturierte Analyzer-Ausgaben
      - Operator-Mode liefert Befunde als CRDs, aber UX/Slack-Integration weniger ausgereift als HolmesGPT
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Schnelle K8s-Diagnose ohne Cluster-Tiefenwissen
        - GitOps-/ArgoCD-Integration sinnvoll
      complaints:
        - RAG-Erweiterung nötig, sonst Hallucinationen bei Logs
        - Mehr Reasoning-Layer als echtes Agent-Framework
    sources:
      - id: github-com-k8sgpt-ai-k8sgpt
      - id: k8sgpt-ai
      - id: reddit-com-r-kubernetes-comments-1qm2f07-using-llms-to-help-diagnose-kubernetes-issues-json
  - id: github-com-arvo-ai-aurora
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Apache-2.0 LangGraph-Multi-Agent mit Multi-Cloud inkl. OVH/Scaleway (europ. Sovereign-Clouds) und expliziter Ollama-Air-Gap-Doku. Sandboxed kubectl/aws/az/gcloud-Execution, HashiCorp-Vault-Integration. Webhook-getriggert.
    caveats:
      - Kanadisches Startup — DPA und Support-Wege fuer DACH-Beschaffung pruefen
      - Im Air-Gap muessen Cloud-APIs (AWS/Azure/GCP) erreichbar sein — 'air-gap' meint nur LLM-Lokalitaet
      - Junges Projekt, wenig oeffentliche Adoption
      - Weaviate als zusaetzliche Vector-DB-Abhaengigkeit
      - Arvo AI ist kanadisches Startup — DPA/Auftragsverarbeitung fuer Support-Faelle pruefen
      - Auch im Air-Gap muessen Cloud-APIs (AWS/Azure/GCP) erreichbar sein — 'air-gap' meint nur LLM-Lokalitaet, nicht Netzwerk-Isolation
      - Externer Webhook-Connectivity zu Cloud-Provider-APIs auch bei Air-Gap nötig (Investigation greift live auf Cloud zu)
      - Junges Projekt, wenig öffentliche Adoption-Signale
      - Weaviate-Vector-DB als zusätzliche Abhängigkeit
    sources:
      - id: github-com-arvo-ai-aurora
      - id: arvoai-ca
  - id: github-com-swapnildahiphale-opensre
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "Apache-2.0 Investigation-Agent mit LangGraph, episodischem Gedaechtnis (Postgres) und Neo4j-Topologie-Graph. Air-Gap explizit dokumentiert: lokale LLMs via Ollama/LiteLLM, lokale Postgres und Neo4j. 46 produktive Skills."
    caveats:
      - Single-Maintainer-Risiko — fuer KRITIS ohne kommerziellen Support unakzeptabel
      - Neo4j als zusaetzliche Stateful-Abhaengigkeit (Lizenz Community vs. Enterprise pruefen)
      - Naming-Kollision mit Tracer-Cloud/OpenSRE
      - Geringe Adoption-Signale, kaum Praxisberichte
      - Single-Maintainer-Risiko fuer KRITIS unakzeptabel ohne kommerziellen Backup-Vertrag
      - Neo4j-Lizenz pruefen (Community Edition GPLv3 vs. Enterprise) — operative Pflege haeufig unterschaetzt
      - Naming-Kollision mit Tracer-Cloud/OpenSRE in Beschaffungsdokumenten
      - "Hinweis: Es existieren ZWEI Projekte namens 'OpenSRE' (swapnildahiphale und Tracer-Cloud) — nicht verwechseln"
      - Junges Projekt, GitHub-Sterne und Adoption gering, kaum unabhängige Praxisberichte
      - Neo4j als zusätzliche Abhängigkeit erhöht Plattform-Team-Aufwand
    sources:
      - id: opensre-in-llms-full-txt
      - id: github-com-swapnildahiphale-opensre
  - id: ibm-com-de-de-products-cloud-pak-for-aiops
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Einziger Enterprise-Vendor mit dokumentiertem, voll-supportetem Air-Gap-Deployment auf OpenShift via ibm-pak/CASE. Fuer DACH-KRITIS/Behoerden mit OpenShift-Sovereign-Stack die kontraktuell sicherste Option (DSGVO-AVV, EU-Support, EU AI Act-roadmap). watsonx-LLM kann in EU-Region operiert werden. SoftwareReviews (26 Enterprise-Bewertungen, Ø 8.0/10) bestaetigt produktiven ITOps/SRE-Einsatz unabhaengig.
    caveats:
      - GenAI-Ops-Agent v4.13 ist Tech-Preview, nicht GA fuer KRITIS
      - "Minimale Produktions-Infrastruktur: 148 vCPU + 358 GB RAM + 9 Nodes (Base) — erheblicher Hardware-TCO vor AI-Go-Live"
      - 212 GB Image-Mirror und OpenShift-Pflicht — hoher Plattform-TCO
      - ChatOps-Teams nicht hinter Proxy/Air-Gap supportet
      - Granite-Modelle unter GPT-4-Klasse — RCA-Qualitaet pruefen
      - Lange Sales-Zyklen und klassische Enterprise-Lizenzkosten
      - GenAI-Ops-Agent ist Tech-Preview (v4.13) — nicht produktionsfreigegeben fuer KRITIS, klassisches AIOps-Korrelations-Set ist GA
      - 212 GB Image-Mirror und OpenShift-Pflicht erzeugen erheblichen Plattform-TCO
      - watsonx-LLM-Integration kann ueber EU-Region laufen, aber Modell-Auswahl (Granite) noch nicht auf GPT-4-Klasse-Niveau
      - Lizenzkosten und Sales-Zyklen vs. OSS-Alternativen ehrlich rechnen
      - OpenShift als Pflicht-Plattform; Linux-Variante seit v4.7 ebenfalls supported
      - ChatOps Microsoft Teams nicht hinter Proxy/Air-Gap unterstützt
      - Klassische Enterprise-Lizenzkosten und langer Sales-Zyklus
    sources:
      - id: ibm-com-docs-en-cloud-paks-cloud-pak-aiops-4-11-1-topic-o-bastion-host
      - id: ibm-com-docs-en-cloud-paks-cloud-pak-aiops-4-11-0-topic-linux-planning
      - id: community-ibm-com-community-user-blogs-adriana-lista-negrin-2026-04-08-introducing-ibm-cloud-pak-for-aiops-413-greater-ac
      - id: softwarereviews-com-products-ibm-cloud-pak-for-aiops
start_here: HolmesGPT per Helm in einem nicht-produktiven Cluster deployen, `enableTelemetry=false` setzen und gegen einen lokalen Ollama-Endpoint mit einem Modell ≥14B an einem nicht-kritischen Service-Alert evaluieren. K8sGPT lässt sich ergänzend als Diagnose-Layer einbinden, ersetzt aber den Investigation-Loop von HolmesGPT nicht.
caveats: Air-Gap-Betrieb erfordert ein dediziertes Plattform-Team für LLM-Hosting und Observability-Daten-Feeds; ClusterRole-Berechtigungen und Remediation-Aktionen sind bei HolmesGPT BetrVG-relevant. IBM Cloud Pak for AIOps setzt OpenShift voraus und der GenAI-Ops-Agent ist noch Tech-Preview — für KRITIS gilt vorerst nur das klassische AIOps-Korrelations-Set.
sources: []
---
