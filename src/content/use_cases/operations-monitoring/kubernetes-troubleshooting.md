---
stage: operations-monitoring
order: 11
roles:
  - software-engineer
  - platform-devops-engineer
title: Kubernetes-Cluster-Troubleshooting
goal_label: K8s-Probleme erklären und beheben
suitability: good_fit
rationale: KKP mit integrierter k8sgpt-Funktion ist für DACH-Teams mit Sovereign-Anforderungen der direkte Einstieg in AI-gestütztes K8s-Troubleshooting — konfigurierbares LLM-Backend und produktive Referenzen bei deutschen Behörden belegen die Praxistauglichkeit. Für Umgebungen mit SaaS-Toleranz liefert Komodors Klaudia-Agent Change-Tracking-basierten RCA mit Enterprise-Adoption bei Cisco und Dell.
tools:
  - id: k8sgpt-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: CNCF-Sandbox-CLI mit eingebauten SRE-Analyzern und konfigurierbarem Backend (Ollama/Azure-OpenAI-EU). `--anonymize`-Flag und MCP-Server-Modus. Bereits in Kubermatic KKP 2.25 als Default-App integriert — DACH-Adoption belegt. Für KRITIS nur nach LLM-Backend-Umstellung tragfähig; Operator-Mode benötigt sauberes Namespace-Scoping und externes Audit-Trailing.
    caveats:
      - Default-Backend OpenAI — für DACH-Enterprise zwingend auf lokales LLM oder Azure OpenAI EU umstellen
      - Anonymize-Flag schützt PII, aber nicht Architektur-Geheimnisse (Service-Namen, Image-Tags)
      - Keine eingebaute Vier-Augen-Logik — kubectl-Vorschläge nie blind ausführen
      - Pod-Analyzer ignoriert Container-Logs bei CrashLoopBackOff (bekannte Limitierung)
      - Operator-Mode (in-cluster) erweitert RBAC-Scope auf gesamten Cluster — sauberes Namespace-Filtering Pflicht
      - Keine zentrale Audit-Trail-/Vier-Augen-Logik out-of-the-box — selber bauen oder mit Komodor/HolmesGPT-SaaS kombinieren
      - Standard-Backend OpenAI — für KRITIS/Bundesbehörden zwingend Backend umstellen
      - Pod-Analyzer holt CrashLoop-Ursache aus CR-Message, nicht aus Container-Logs
      - Log-Analyzer existiert, ist aber experimentell und sendet rohe Logs an LLM-Backend
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Schnelle Onboarding-Hilfe für K8s-Einsteiger
        - Lokale Modelle via Ollama funktionieren produktiv
      complaints:
        - Pod-Analyzer ignoriert Container-Logs
        - Default OpenAI-Backend nicht DSGVO-konform
    sources:
      - id: k8sgpt-ai
      - id: github-com-k8sgpt-ai-k8sgpt
      - id: github-com-k8sgpt-ai-k8sgpt-issues-1059
      - id: kubermatic-com-products-kubermatic-kubernetes-platform
      - id: reddit-com-r-kubernetes-comments-1qm2f07-using-llms-to-help-diagnose-kubernetes-issues
  - id: cast-ai-blog-meet-opspilot-your-ai-sre-agent-built-into-cast-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Add-on-Wert für Cast-AI-Bestandskunden. Speist sich aus Real-Time-Pipeline (Cluster-State, Cost, Audit-Logs). DACH-Datenresidenz im DPA klären; für reines K8s-Troubleshooting nicht der primäre Pick.
    caveats:
      - Nur sinnvoll, wenn Cast AI bereits für Right-Sizing/Autoscaling im Einsatz
      - SaaS, US-zentriert — DACH-Datenresidenz unklar
      - Cast-AI-Agent benötigt Workload-Modifikations-Permissions — erweitertes Risiko-Profil
      - Pricing-Modell (kostenlos für Bestandskunden) deutet auf SaaS-Cross-Sell, nicht auf primäres Troubleshooting-Investment
      - Fokus stärker auf Cost/Workload-Events als auf tiefes Networking-/RBAC-Debugging
    sources:
      - id: cast-ai-blog-meet-opspilot-your-ai-sre-agent-built-into-cast-ai
  - id: causely-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Causale Inferenz-Engine liefert deterministischere RCA als reine LLM-Tools, mit Ask-Causely-NL-Interface. Junges Vendor-Angebot — Auto-Remediation hinter Approval-Gates erforderlich.
    caveats:
      - Auto-Remediation-Default auf Production prüfen — Approval-Gates Pflicht
      - Keine öffentlichen DACH-Kunden — DPA und EU-Hosting aktiv erfragen
      - Vendor-Reife (Funding, Roadmap) vor Pilot validieren
      - Junges Vendor-Angebot, kleinere Community als k8sgpt/Holmes
      - DACH-Datenresidenz separat zu prüfen
    sources:
      - id: docs-causely-ai-telemetry-sources-kubernetes
      - id: docs-causely-ai-in-action-ask-causely
  - id: datadoghq-com-product-bits-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Bei DACH-Datadog-Bestandskunden mit EU-Site (datadoghq.eu) bereits unter Vertrag. Korreliert Logs/Traces/Metriken mit K8s-Container-Map. Für KRITIS/Bundesbehörden Stop-Kriterium wegen US-CLOUD-Act-Exposure von Datadog Inc.
    caveats:
      - US-CLOUD-Act-Exposure trotz EU-Site — für KRITIS-Hochschutz Stop-Kriterium
      - Kein Standalone-Tool; Datadog-Lizenz Voraussetzung
      - Bits-AI-Feature-Parität auf EU-Site historisch zeitversetzt
      - Container-Pricing kann bei vielen Pods explodieren
      - Datadog-Agent-Pod in jedem Cluster bedeutet zusätzliche Angriffsfläche und Lizenzmetrik
      - DACH-spezifische Feature-Verfügbarkeit auf EU-Site prüfen
    sources:
      - id: datadoghq-com-product-bits-ai
  - id: github-com-kagent-dev-kagent
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: K8s-natives Agent-Framework (Apache-2.0, CNCF Sandbox) mit MCP-Toolservern für Istio, Argo, Prometheus, Cilium. Für Plattformteams, die eigene Troubleshooter bauen. Junges Projekt, API-Drift, Solo-Enterprise-Lock-in für Governance.
    caveats:
      - Framework, kein fertiges Produkt — eigener SDLC, Tests, Threat-Modelling Pflicht
      - API noch in Bewegung, CNCF Sandbox seit 2025
      - Solo.io kommerzialisiert Governance-/Identity-Layer für Multi-Agent — Lock-in-Risiko bei produktivem Einsatz
      - Custom-Agent-Code ist eigenes Software-Asset und benötigt SDLC, Tests, Threat-Modelling
      - Junges Projekt (CNCF Sandbox seit 2025), API noch in Bewegung
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: cncf-io-blog-2025-04-15-kagent-bringing-agentic-ai-to-cloud-native
      - id: github-com-kagent-dev-kagent
  - id: opsmx-com-ai-kubernetes-remediation-agent
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Approval-Gates, Verification-Framework und GitOps-Integration sind genau die Kontrollen, die DACH-regulierte Umgebungen brauchen. US-Vendor — EU-Hosting separat prüfen. Stärker im CD-/Argo-Kontext als Day-2-RCA.
    caveats:
      - Plattform-Lock-in über OpsMx-Context-Graph — Exit-Strategie definieren
      - Wenig öffentliche Praktiker-Berichte — Referenz-Anrufe vor Pilot Pflicht
      - Stärker im Delivery-/Argo-CD-Kontext als reines Day-2-Troubleshooting
      - OpsMx-Plattform-Lizenz erforderlich
    sources:
      - id: opsmx-com-ai-kubernetes-remediation-agent
  - id: mogenius-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Kölner DACH-Vendor mit explizitem Sovereignty-Pitch: on-prem, multi-cloud, air-gapped, Open-Source-Operator, CRDs im eigenen Cluster, konfigurierbarer LLM-Endpunkt inkl. self-hosted. Sitzt als Governance-Layer zwischen AI-Agenten und K8s-API — adressiert genau das Vier-Augen-/Blast-Radius-Risiko aus dem Briefing."
    caveats:
      - DACH-Vendor klein, Vendor-Maturity (Funding, Personalstand) vor Pilot validieren
      - Governance-Layer-Wert hängt davon ab, ob AI-Agenten überhaupt im Einsatz sind
      - Eigenbau-Operator bedeutet Pflege-Aufwand auf Plattform-Team-Seite
      - Selbstpositionierung ist breit (Platform Engineering) — Tiefe der Troubleshooting-Funktion in POC validieren
    sources:
      - id: mogenius-com
  - id: komodor-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Agentischer RCA-Agent (Klaudia) auf AWS Bedrock mit RAG über Komodor-Telemetrie (Change-Events, Deployment-History, Logs). SOC2 Type 2, GDPR, HIPAA, kein Training auf Kundendaten. Enterprise-Adoption durch Cisco und Dell belegt. G2 4.4/5 (40 Reviews) und PeerSpot-Enterprise-Nutzerreviews bestätigen AI-gestütztes K8s-Debugging im Produktivbetrieb. Für DACH-Enterprise mit SaaS-Tolerance und fixierter EU-Bedrock-Region tragfähig; für BSI-C5-Hochschutz/Bundesbehörden disqualifiziert wegen fehlendem On-Prem.
    caveats:
      - SaaS-only, kein On-Prem — Stop-Kriterium für KRITIS-Hochschutz und Bundesbehörden
      - Bedrock-Region im DPA explizit auf eu-central-1/eu-west-1 fixieren — Default kann us-east-1 sein
      - Vendor-Benchmark >95% RCA ist Marketing — POC mit eigenen Failure-Szenarien Pflicht
      - Lock-in an Komodor-Plattform; Klaudia nicht standalone nutzbar
      - Node-basiertes Pricing (~30 USD/Node/Jahr) kann bei großen Clustern signifikant werden
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - AI-Debugging reduziert MTTR deutlich (40–80% laut Enterprise-Nutzern)
        - Nicht-K8s-Experten können Incidents selbstständig untersuchen
        - Change-Tracking-Ansatz identifiziert Ursachen, nicht nur Symptome
      complaints:
        - SaaS-only — Datenresidenz-Anforderungen müssen explizit im DPA verhandelt werden
        - Klaudia nicht standalone nutzbar — Komodor-Plattform-Lizenz erforderlich
    sources:
      - id: komodor-com-platform-klaudia-ai-powered-troubleshooting
      - id: komodor-com-blog-komodor-ai-sre-vs-oss-ai-agent-a-technical-comparison-of-agentic-ai-for-kubernetes-troubleshooting
      - id: itcentralstation-com-product-reviews-komodor-review-10199907-by-reviewer2785698
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Causal-AI (deterministische Davis-Engine) + GenAI (Davis CoPilot/Dynatrace Assist) in der Dynatrace-Kubernetes-App; EU-Tenants verfügbar. Bei DACH-Großkunden mit Dynatrace-Bestand sofort einsetzbar — bestehende Instrumentierung (OneAgent, Smartscape) liefert den Telemetrie-Kontext für K8s-RCA. Gartner Peer Insights 4.5/5 bestätigt Dynatrace-Plattformqualität im Enterprise-Segment. Hauptlast liegt auf vorhandener Instrumentierung; lohnt sich nicht als Standalone-Anschaffung.
    caveats:
      - Kein Standalone-Wert ohne Dynatrace-Instrumentierung
      - Lizenzmodell (Davis-Units) verteuert GenAI-Nutzung indirekt
      - "EU-AI-Act: Davis-Vorschläge als AI-generiert kennzeichnen, Audit-Trail aktivieren"
      - GenAI-Features hängen am Dynatrace-Backend — kein Self-Host des CoPilot
      - Agentic Workflows (autonomes Handeln ohne Prompt-Trigger) erst ab v1.331 in Preview — Stand 2026 noch kein voll autonomer K8s-Investigationsagent
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Causal RCA für K8s bei Dynatrace-Bestandskunden sofort nutzbar
        - Kubernetes-App + Davis AI gut integriert, bestehende Traces und Logs einbezogen
      complaints:
        - Davis CoPilot 'feels very limited to just DQL generation and data fetching' (Community, Jan 2026)
        - Noch kein autonomes Investigieren ohne Prompt-Trigger — 'conversational guide, not proactive engine'
    sources:
      - id: docs-dynatrace-com-docs-problem-resolution
      - id: community-dynatrace-com-t5-open-q-a-thoughts-on-davis-copilot-capabilities-compared-to-agentic-m-p-293993
      - id: gartner-com-reviews-market-observability-platforms-vendor-dynatrace
  - id: kubermatic-com-products-kubermatic-kubernetes-platform-features
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: DACH-Vendor (Hamburg) mit produktiven Sovereign-Referenzen (Swisscom Sovereign Kubernetes Service, deutsche Bundes-/Landesbehörden). KKP 2.25+ liefert k8sgpt als Default-App, Web-Terminal-Integration und integrierte Multi-Cloud-/On-Prem-/Edge-Verwaltung. Gartner Peer Insights 4.9/5 (5 verifizierte Enterprise-Reviews, inkl. 1B-10B USD Umsatz) bestätigt 4+ Jahre Produktivbetrieb, Digital-Sovereignty-Positionierung und minimalen Vendor-Lock-in. 'German vendor' wird von Reviewern explizit als Kaufargument genannt.
    caveats:
      - Wert hängt davon ab, ob KKP als Plattform-Layer ohnehin gesetzt ist — kein Wert für AKS/EKS-only-Setups
      - AI-Anteil = k8sgpt — gleiche LLM-Backend-Sorgfalt wie bei Standalone-k8sgpt
      - Lizenz-Enterprise-Edition für Multi-Tenant- und Audit-Features erforderlich
      - Kleine Community — Onboarding und Debugging können komplex sein (Gartner-Reviewer)
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - 4+ Jahre Produktivbetrieb bestätigt (Gartner, Feb 2026)
        - Digital Sovereignty und DACH-Vendor-Fokus explizit als Kaufargument
        - Vendor-Lock-in minimal durch native K8s-Konzepte
      complaints:
        - Dokumentation unvollständig und teils verwirrend
        - Kleinere Community als bei Cloud-Managed-Angeboten
    sources:
      - id: kubermatic-com-products-kubermatic-kubernetes-platform
      - id: kubermatic-com-blog-how-kubermatic-enabled-swisscom-to-launch-a-sovereign-kubernetes-service
      - id: gartner-com-reviews-product-kubermatic-kubernetes-platform
start_here: k8sgpt (via KKP-Default-App oder Standalone) im Read-Only-Modus auf einem Staging-Cluster starten — Backend vor dem ersten Run auf Ollama oder Azure OpenAI EU umstellen statt den OpenAI-Default zu nutzen. Analyzer-Ausgaben gegen bekannte Failure-Szenarien scoren, bevor Produktions-Cluster angebunden werden.
caveats: k8sgpt sendet im Standard-Setup Cluster-Kontext an OpenAI — für DACH-Enterprise ist die Backend-Umstellung auf ein lokales oder EU-gehostetes LLM vor jedem produktiven Einsatz obligatorisch. KI-generierte kubectl-Vorschläge dürfen ohne manuelle Vier-Augen-Prüfung nicht auf Produktions-Clustern ausgeführt werden; Komodor ist SaaS-only und für KRITIS-Hochschutz-Umgebungen kein Kandidat.
sources: []
---
