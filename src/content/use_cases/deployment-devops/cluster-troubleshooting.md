---
stage: deployment-devops
order: 13
roles:
  - software-engineer
  - platform-devops-engineer
title: Cluster-Troubleshooting
goal_label: Live-Kubernetes-Cluster mit Klartext analysieren
suitability: conditional
rationale: HolmesGPT (Microsoft als Co-Maintainer, CNCF-Sandbox) und K8sGPT (CNCF-Sandbox, Anonymisierungs-Filter, Kubermatic-Distribution in DACH) bieten einen read-only, RBAC-aware Troubleshooting-Loop mit lokalem LLM-Support. Beide Tools schließen den Live-State-Loop, den reine Manifest-Generierung offen lässt.
tools:
  - id: holmesgpt-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Read-only und RBAC-aware Investigation-Loop mit 40+ Toolsets, Bring-your-own-LLM (inkl. Ollama). Microsoft als Co-Maintainer + CNCF-Sandbox-Status reduziert Bus-Faktor-Risiko. Realistischer Pfad für DACH: Self-hosted mit Azure OpenAI in EU-Region oder lokalem Modell."
    caveats:
      - Robusta SaaS hostet AI-Pipeline US-seitig — nur Eigenbetrieb erfüllt strenge Sovereignty
      - Frontier-Model-Qualität deutlich besser als Ollama → Trade-off Privacy vs. RCA-Tiefe
      - Mitbestimmungspflicht durch Read-only nicht aufgehoben
      - Setup-Aufwand mit Toolsets/Runbooks nicht trivial
      - Robusta SaaS hostet im US-Bereich — DPA + Datenresidenz für DE-Kunden klären
      - "Bei Eigenbetrieb: Frontier-LLM-Anbindung (OpenAI/Anthropic) kreuzt EU-Boundary, Ollama-Support vorhanden aber Qualitätstrade-off"
      - Mitbestimmungspflicht nicht durch Read-only-Charakter aufgehoben (Datenfluss von Logs/Events zum LLM ist die Schwelle)
      - Mehr Setup-Aufwand als reine CLIs; Toolsets und Runbooks müssen kuratiert werden
      - Benötigt Zugriff auf Observability-Stack — Datenfluss in LLM muss governed werden
      - "Praxis zeigt: ohne Runbooks viele wasted tool calls (CNCF-Blog: 16 vs 2)"
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Tiefe Investigation über mehrere Datenquellen
        - Read-only + RBAC-aware passt zu Prod-Anforderungen
      complaints:
        - Ohne Runbooks 'rät' das Modell teuer ins Blaue
        - Setup heavier als k8sgpt
    sources:
      - id: cncf-io-blog-2026-04-21-auto-diagnosing-kubernetes-alerts-with-holmesgpt-and-cncf-tools
      - id: kuncoro-io-blog-holmesgpt-wiki
      - id: cncf-io-blog-2026-04-21-auto-diagnosing-kubernetes-alerts-with-holmesgpt-and-cncf-tools
  - id: k8sgpt-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Reifstes OSS-Tool im Feld mit Local-LLM-Support (Ollama/LocalAI), Anonymisierungs-Filter und Operator-Mode. CNCF-Sandbox seit Dez 2023, MCP-Server seit v0.4.14. In DACH durch Kubermatic KKP als Default-App distribuiert — gibt einen kommerziellen Support-Pfad über einen DE-Vendor.
    caveats:
      - Anonymisierung muss explizit aktiviert werden — sonst gehen ConfigMap-Snippets ungefiltert an LLM
      - CNCF Sandbox = niedrigste Reife-Stufe, keine community-SLA
      - Mitbestimmungspflichtig bei Prod-Cluster-Anbindung (techn. Überwachungseinrichtung)
      - CNCF Sandbox ist Reife-Stufe 1 (nicht Incubating) — keine Vendor-SLA-Garantie
      - Anonymisierung muss explizit aktiviert und gepflegt werden
      - BSI C5 / ISO 27001 nur über die selbst betriebene Infrastruktur erreichbar
      - "Schmaler Fokus: erklärt bekannte K8s-Symptome, nicht crossservice-Inzidenten"
      - Cluster-State (inkl. ConfigMap-Snippets) geht standardmäßig an gewählten LLM-Backend
      - Anonymisierungs-Filter vorhanden, aber muss aktiv konfiguriert werden
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Schneller Einstieg, klare Erklärungen typischer K8s-Failures
      complaints:
        - Eher Erklärung als End-to-End-Investigation
    sources:
      - id: cncf-io-projects-k8sgpt
      - id: pkg-go-dev-github-com-k8sgpt-ai-k8sgpt
      - id: kubermatic-com-blog-troubleshooting-with-ai-how-k8sgpt-makes-debugging-kubernetes-clusters-easier
      - id: libhunt-com-compare-holmesgpt-vs-k8sgpt
  - id: robusta-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Logische Ergänzung zu HolmesGPT für Alert-Routing, Enrichment und PR-Vorschläge. OSS-Pipeline kann self-hosted laufen, AI-Layer (HolmesGPT) lässt sich an EU-LLM koppeln.
    caveats:
      - Robusta-AI-Convenience-Modus = US-SaaS
      - Helm-Default-Setup bricht bei strikter Egress-Policy
      - PR-Generation berührt Code-Review-/Change-Process — Mitbestimmung beachten
      - Robusta SaaS = US-Hosting; DPA + EU-Data-Residency klären
      - Strenge Egress-Policies (EU-Konzern) brechen Helm-Default-Setup
      - PR-Auto-Generation berührt Code-Review-Process — Compliance/Change-Management einbinden
      - Robusta-AI-Modus erfordert Robusta-SaaS-Subscription
      - Eigenständig OSS, aber für Frontier-Modelle Zahlpflicht oder eigene Keys
      - Helm-Setup nicht trivial bei strenger Egress-Policy
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: softwareplaza-com-it-magazine-robusta-holmesgpt-for-ai-driven-incident-investigation-in-the-cloud
      - id: docs-robusta-dev-master-configuration-holmesgpt-getting-started-html
  - id: headlamp-dev-blog-2026-03-27-holmesgpt-headlamp
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: OSS-Dashboard mit CNCF-Sandbox-Status und HolmesGPT-Plugin — interessant, weil viele DACH-Teams ohnehin ein Self-hosted-Dashboard suchen, das nicht Lens-Mirantis-Lizenz-Drama erbt.
    caveats:
      - Erbt alle HolmesGPT-Caveats (Datenfluss, LLM-Backend)
      - Plugin-Reife jung
      - Kein eigener Audit-Layer
      - Plugin-Reife noch jung — keine Patch-SLA
      - RBAC im Dashboard und Toolset-Permissions müssen synchron gehalten werden
      - Erbt HolmesGPT-Anforderungen (LLM-Key, Toolset-Setup)
      - UI-Add-on, kein Standalone-Agent
      - Reife der Integration (Plugin) noch jung
    sources:
      - id: headlamp-dev-blog-2026-03-27-holmesgpt-headlamp
  - id: github-com-alexei-led-k8s-mcp-server
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Konkreter Baustein für die im Use-Case explizit geforderte MCP-Allowlist-Architektur — adressiert das Secret-Maskierungs-Caveat direkt, sofern intern gewrappt. Kein gekauftes Produkt, sondern interner Building-Block.
    caveats:
      - Secret-Allowlist/Maskierung muss selbst gebaut werden
      - Single-Maintainer, Bus-Faktor 1 — ggf. forken
      - Keine Audit-Trail-Features out-of-the-box
      - Allowlist-/Maskierungs-Layer für Secrets in ConfigMaps muss selbst gebaut werden
      - Bus-Faktor 1; ggf. Fork/Vendoring nötig
      - Keine Audit-Trail-Funktionalität out-of-the-box
      - Single-Maintainer, keine Vendor-Backing
      - Allowlist/Maskierung nicht out-of-the-box — muss eigenkonfiguriert werden
      - Kein eigener Agent — nur Tool-Layer
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Schneller Weg, kubectl als MCP-Tool für Claude/Cursor freizugeben
      complaints:
        - Wenig Diskussion, wenig externe Validierung
    sources:
      - id: github-com-alexei-led-k8s-mcp-server
      - id: reddit-com-user-alexei-led-submitted-feedviewtype-cardview-sort-top-t-year
  - id: github-com-googlecloudplatform-kubectl-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Pragmatische Konversations-CLI mit MCP-Server/Client und Local-LLM-Support (Ollama, llama.cpp) — gut für Developer-Eigennutzung. Für Prod-Zugriff nur mit Sandbox/RBAC-Wrapper, da kubectl/bash standardmäßig User-Permissions erben.
    caveats:
      - Default-Tool-Permissions sind unsicher — Wrapper/RBAC-Allowlist Pflicht
      - Keine zentralen Audit-Logs; Compliance-Trail muss selbst gebaut werden
      - "MCP-Server-Mode hatte Bugs (Issue #285)"
      - "Trace-File-Leak-History (Issue #617) — Secret-Scanning erforderlich"
      - Kein DPA/SOC2 vom Tool selbst — Compliance hängt am gewählten LLM-Backend
      - "Mitbestimmung: agentic CLI gegen Prod-Cluster ist Betriebsrats-pflichtig (techn. Überwachungssystem)"
      - Audit-Trail nur lokal/CLI — nicht zentralisierbar ohne Wrapper
      - Standardmäßig laufen kubectl/bash mit voller User-Permission — Sandbox/RBAC erforderlich
      - "Bekannte Bugs in MCP-Server-Mode (siehe Issue #285, PR #643)"
      - "Trace-File enthielt zeitweise sensible Header (Issue #617)"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Schnelle Diagnose im Terminal, MCP-Bridge zu Claude/VS Code
      complaints:
        - MCP-Server-Mode hatte Tool-Registration-Bug
        - Throttling/Quota bei Bedrock und Azure OpenAI
    sources:
      - id: github-com-googlecloudplatform-kubectl-ai
      - id: github-com-googlecloudplatform-kubectl-ai-blob-main-docs-mcp-server-md
      - id: github-com-googlecloudplatform-kubectl-ai-issues-285
  - id: docs-botkube-io-plugins-ai-assistant
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: ChatOps-First-Ansatz mit AI-Cluster-Scan + Kubescape-Integration; Audit/Mitbestimmung sind über die Chat-Schiene leichter abbildbar (alle Aktionen sind Slack/Teams-Messages). Likely missed by market scan because tool is positioned als ChatOps-Suite mit AI-Plugin, nicht als 'AI-Troubleshooting-Tool'.
    caveats:
      - AI Assistant nutzt OpenAI GPT-4o als Default — EU-Routing/DPA klären
      - ChatOps verlagert Cluster-Aktionen in Chat-Tools — eigene Compliance-Implikationen
      - Tiefe der Investigation geringer als HolmesGPT/K8sGPT
    sources:
      - id: docs-botkube-io-plugins-ai-assistant
  - id: kubermatic-com-products-kubermatic-kubernetes-platform-features
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: DACH-nativer Vendor mit Sitz in Hamburg, Kubernetes-AI-Conformant zertifiziert, KKP 2.29 liefert K8sGPT als Default-App und im Web-Terminal — der einzige saubere on-prem/sovereign-Pfad mit DE-Support-Vertrag und deutschsprachiger Doku. Likely missed by market scan because tool is positioned as a suite feature (KKP), nicht als eigenständiges 'AI-Troubleshooting-Tool'.
    caveats:
      - Wert entsteht primär für KKP-Bestandskunden — kein Standalone-Kauf nur für AI-Feature sinnvoll
      - K8sGPT bleibt Sandbox-Reife auch in KKP-Verpackung
      - Lock-in in Kubermatic-Plattform
    sources:
      - id: kubermatic-com-products-kubermatic-kubernetes-platform-features
      - id: kubermatic-com-blog-kubermatic-is-officially-kubernetes-ai-conformant
  - id: plural-sh-ai-for-platform-teams
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Enterprise-Platform-Suite mit Bring-your-own-LLM, agent-basiertem egress-only-Deployment und Datenverbleib im Kunden-Environment — relevantes Sovereignty-Profil. Likely missed by market scan because tool is positioned as a suite feature (AI in Plural Platform-Engineering-Suite) statt als dediziertes Cluster-AI-Tool.
    caveats:
      - Kein DACH-Subsidiary erkennbar — Support-Zeitzone/Vertragspartner klären
      - Plattform-Adoption als Voraussetzung
      - Praktiker-Signal in DACH dünn
    sources:
      - id: plural-sh-ai-for-platform-teams
  - id: suse-com-c-kubecon-eu-2026-suse-observability-ai-agent
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: DACH-relevanter Plattform-Player; AI-Investigation als Suite-Feature in Rancher Prime v2.14, on-prem fähig. Time-Traveling-Topology + 35+ MCP-Tools + Anbindung an interne CMDBs/Ticketing über MCP. Likely missed by market scan because tool is positioned as a suite feature (SUSE Observability/Rancher Prime), nicht als eigenständige Troubleshooting-AI.
    caveats:
      - Wert entsteht für Rancher-Prime-Bestandskunden — kein Standalone
      - Frisch released (KubeCon EU 2026), Praktiker-Signal noch dünn
      - AI-Agent-Architektur und LLM-Backend-Wahl müssen in DSFA aufgenommen werden
    sources:
      - id: suse-com-c-kubecon-eu-2026-suse-observability-ai-agent
start_here: "Mit K8sGPT im Dev-Cluster einsteigen: Anonymisierungs-Filter aktivieren, lokales Ollama-Backend konfigurieren, scope auf einen Namespace begrenzen. Für tiefere Cross-Service-Untersuchungen HolmesGPT mit kuratierten Runbooks ergänzen – Read-only-RBAC-Binding ist dabei Voraussetzung."
caveats: Cluster-State enthält in ConfigMaps potenziell Secrets und PII – der Anonymisierungs-Filter von K8sGPT muss explizit aktiviert werden, bei HolmesGPT muss der Datenfluss zum LLM-Backend explizit governed werden. Prod-Cluster-Anbindung via AI-Agent ist mitbestimmungspflichtig, da Logs und Events systematisch an ein externes System übertragen werden.
sources: []
---
