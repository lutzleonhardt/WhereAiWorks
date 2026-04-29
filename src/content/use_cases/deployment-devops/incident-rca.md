---
stage: deployment-devops
order: 8
roles:
  - software-engineer
  - platform-devops-engineer
title: Incident-RCA
goal_label: Wahrscheinliche Ursache von Produktionsincidents korrelieren und vorschlagen
suitability: conditional
rationale: Datadog Bits AI, PagerDuty SRE Agent und Dynatrace Davis AI sind enterprise-reif und liefern AI-gestützte Ursachenkorrelation bereits produktiv — alle drei mit EU-SaaS-Option. Für DACH-Teams mit bestehendem Observability-Stack ist der Einstieg heute ohne Prototyp-Risiko möglich.
tools:
  - id: cleric-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Read-only-First mit SOC 2 Type II, regelmäßigen Pentests, kein Training auf Kundendaten — die Architektur, die §87 BetrVG und DORA Art. 12 idealerweise verlangen. Schreibrechte erst nach expliziter Freigabe. Für DACH-Mittelstand stark, für regulierte Großunternehmen erst nach EU-Hosting-Klärung.
    caveats:
      - EU-Datenresidenz-Optionen vendor-seitig klären
      - Junges Produkt — Multi-Cloud-Skalierung unbewiesen
      - Kein Auto-Remediation (das ist auch Stärke)
      - Read-only-Default vertraglich gegen ungewollte Aktivierung 'autonomer' Modi absichern
      - Integrationen-Liste kleiner als Datadog/PagerDuty
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - konservativer Ansatz mit Audit-Fokus
        - Gartner Cool Vendor 2025
      complaints:
        - noch wenig öffentliche Praxis-Reports
        - kein Auto-Fix
    sources:
      - id: cleric-io
      - id: cleric-ai-blog-the-self-improving-ai-sre
      - id: news-ycombinator-com-item-id-45939408
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Reifster RCA-Agent für Datadog-Stacks: Hypothesen-Loop, Investigationen in 3-4 min, Bits AI Dev Agent für Fix-PRs. EU-Region (Frankfurt) verfügbar. Für DACH: LLM-Subprozessoren und Tamper-evidente Speicherung der Agent-Traces für DORA Art. 12 separat absichern."
    caveats:
      - Lock-in an Datadog-Telemetrie
      - LLM-Subprozessoren (OpenAI/Anthropic/Bedrock) im DPA-Anhang erforderlich
      - Bei system-weiten Incidents Reasoning teils noch flach
      - Tamper-evidente Aufbewahrung der Agent-Traces für DORA Art. 12 extern härten (WORM)
      - SaaS-Architektur — DORA-Audit-Trail-Anforderungen separat verifizieren
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - spart Kontextsuche bei bekannten Datadog-Setups
        - transparente Agent-Traces
      complaints:
        - nur sinnvoll mit Datadog-Lock-in
        - Vertrauen in autonome Schlüsse muss erarbeitet werden
    sources:
      - id: datadoghq-com-blog-bits-ai-sre-deeper-reasoning
      - id: docs-datadoghq-com-bits-ai-bits-ai-sre-investigate-alerts
      - id: helpnetsecurity-com-2025-12-03-datadog-bits-ai-sre-agent
      - id: news-ycombinator-com-item-id-45939408
  - id: pagerduty-com-platform-ai-agents-sre
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Vendor-agnostischer SRE-Agent mit Triage-/Diagnose-/Remediation-Loop, Memory aus Past Incidents und Approval-Gates. Reife Plattform mit produktiven DACH-Referenzen. Vor DORA-Rollout: Audit-Trail-Speicherung, EU-Region und Subprozessor-Liste vertraglich härten; §87 BetrVG erfordert Betriebsvereinbarung über AI-Aktionen auf Dev-Logs."
    caveats:
      - US-Hosting-Default — EU-Datenresidenz und Schrems-II-TIA klären
      - AI Actions kostenkontingentiert (PagerDuty Advance)
      - "DORA Art. 12 tamper-evident: externe WORM-Archivierung empfohlen"
      - "§87 BetrVG: Betriebsvereinbarung erforderlich (Agent sieht Aktionen einzelner Devs)"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - starkes Alerting-Backbone, breite Integrationen
        - AI-Triage spart Kontextsuche
      complaints:
        - Incident-Workflow als rigide empfunden
        - AI-Features als kostenpflichtige Add-ons
    sources:
      - id: pagerduty-com-blog-ai-we-built-an-sre-agent-with-memory-and-its-transforming-incident-response
      - id: pagerduty-com-eng-context-over-cleverness-building-pagerdutys-sre-agent
      - id: support-pagerduty-com-main-docs-sre-agent
      - id: reddit-com-r-sre-comments-1pk7go7-pagerduty-for-sre-how-real-people-work-with-it
  - id: robusta-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "OSS HolmesGPT mit Tool-Use über K8s/Cloud/Prometheus/Grafana und BYO-LLM passt für regulierte K8s-Teams: Self-Hosting + LLM-Routing über Azure OpenAI EU oder lokale Modelle macht §87-/DORA-Konformität machbar ohne Vendor-DPIA-Marathon."
    caveats:
      - K8s-zentriert
      - Slack-Pfad laut Doku weniger genau — UI-Setup bevorzugen
      - Reasoning-Qualität abhängig vom genutzten LLM (BYOK)
      - "OSS-Self-Hosted: Audit-Trail / DORA-Compliance in Eigenverantwortung"
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - OSS + BYO-LLM, transparente Tool-Use-Spuren
        - K8s-Integration tief
      complaints:
        - Slack-Pfad ohne Alert-Labels weniger genau
        - Reasoning hängt von gewähltem LLM ab
    sources:
      - id: docs-robusta-dev-improve-holmes-docs-playbook-reference-actions-remediation-html
      - id: softwareplaza-com-it-magazine-robusta-holmesgpt-for-ai-driven-incident-investigation-in-the-cloud
  - id: ibm-com-products-instana
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Causal-AI-Feature in Instana mit deterministischer Probable-Root-Cause-Auswahl auf Topologie + Call-Statistiken. In DACH-Großunternehmen mit IBM-Stack pragmatischer Default; weniger 'agentisch' als die Pure-Plays, dafür reife Enterprise-Verträge inkl. EU-Hosting.
    caveats:
      - Wirkung an Instana-Telemetrie und Topologie gebunden — Multi-Vendor-Stacks profitieren wenig
      - Workflow weniger agentisch als Bits/Resolve/Cleric
      - Wenig öffentliche unabhängige Praktikerberichte
    sources:
      - id: ibm-com-blog-probable-root-cause-accelerating-incident-remediation-with-causal-ai
  - id: incidentfox-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: OSS-AI-SRE mit Self-Hosting, Air-Gap-Option, BYO-LLM und Sandbox-Isolation — die einzige saubere Architektur für DORA-tamper-evident-Audits ohne Vendor-DPIA-Schmerz; passt direkt zu §87 BetrVG, weil Reasoning-Daten die Infrastruktur des Arbeitgebers nicht verlassen müssen.
    caveats:
      - "Self-Hosted: Compliance-Boundary in Eigenverantwortung"
      - RBAC/SSO-Reife noch im Reife-Prozess (volle Enterprise-Features erst in Cloud-Edition)
      - "Operativer Aufwand: LLM-Costs, Vector-DB"
      - SOC 2 / ISO Zertifizierungen für Self-Hosted-Variante in Eigenverantwortung
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - OSS + Self-Hosting attraktiv für regulierte Branchen
        - RAPTOR-Retrieval für Long-Form-Runbooks
      complaints:
        - Trust-Barriere bei AI-Empfehlungen um 3 Uhr nachts
        - Reife der Enterprise-Funktionen offen
    sources:
      - id: github-com-incidentfox-incidentfox
      - id: news-ycombinator-com-item-id-46689078
      - id: docs-incidentfox-ai-tools-log-analysis
  - id: bmcsoftware-de-it-solutions-observability-aiops-ai-event-correlation-root-cause-analysis-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because BMC ist in DACH-Konzernen via Helix/Remedy bereits Default-ITSM und liefert AIOps mit ML-Event-Korrelation und Probable-Root-Cause als integriertes Modul. Auto-Remediation-Scripts trigger-bar mit Policy-Gates — passt in regulierte ITIL-Setups.
    caveats:
      - Lock-in an BMC-Helix-Stack
      - Klassischer Suite-Charakter, weniger 'agentisch'
      - Hoher Implementierungs-/Beratungsaufwand
    sources:
      - id: bmcsoftware-de-it-solutions-observability-aiops-ai-event-correlation-root-cause-analysis-html
  - id: marketplace-microsoft-com-en-us-product-saas-hyground-hyground-saas2
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Likely missed by market scan because Hyground positioniert sich nicht als 'AI SRE'-Wettbewerber, sondern als datensouveräne On-Prem-AI-Operations-Plattform — kein SaaS-Control-Plane, kein Outbound-Traffic, OAuth2/OIDC, lokale Verarbeitung. Damit erfüllt die Architektur §87 BetrVG und DORA Art. 12 ohne Subprozessor-Diskussion. Reifegrad und DACH-Marktpräsenz sind aber öffentlich dünn belegt — Eval-Status angemessen.
    caveats:
      - Wenig öffentliche Praktiker-Evidenz
      - Reasoning-LLM muss Kunde selbst betreiben (Compute-Aufwand)
      - Vendor-Stabilität / Funding zur Pilot-Zeit prüfen
    sources:
      - id: marketplace-microsoft-com-en-us-product-saas-hyground-hyground-saas2
  - id: ibm-com-de-de-products-cloud-pak-for-aiops
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because Cloud Pak for AIOps läuft separat von Instana und wird selten in 'AI-SRE'-Vergleichen genannt, ist aber in DE-Großbanken/Versicherungen häufig schon lizenziert. Event-Korrelation, Topologie-Reasoning, Runbook-Empfehlungen, ChatOps. EU-Hosting via IBM Cloud verfügbar.
    caveats:
      - Doppel-Footprint mit Instana — Architektur-Klärung notwendig
      - Klassische Plattform-Komplexität
      - AI-Layer weniger 'agentisch' als Pure-Plays
    sources:
      - id: ibm-com-docs-en-cloud-paks-cloud-pak-aiops-4-11-1-topic-o-bastion-host
  - id: logicmonitor-com-de-edwin-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Likely missed by market scan because LogicMonitor wird häufig als reines Infrastruktur-Monitoring wahrgenommen; Edwin AI ist aber explizit ein agentenbasiertes RCA-Werkzeug mit Korrelation, Deduplizierung und Lösungsvorschlägen über 3000+ Integrationen. Dezidierte DACH-Web-Präsenz auf Deutsch.
    caveats:
      - RCA-Tiefe gegenüber Bits/Resolve/Cleric kritisch testen
      - EU-Hosting / DORA-Addendum vendor-seitig nachfragen
      - Wenig unabhängige Praktikerberichte
    sources:
      - id: logicmonitor-com-de-edwin-ai
  - id: opentext-com-de-de-produkte-operations-bridge
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because OpenText AIOM (vormals Micro Focus Operations Bridge / HPE OMi) wird selten als 'AI'-Tool gegoogelt, ist aber in DACH-Konzernen flächendeckend installiert. GenAI-RCA, Post-Incident-Reports, on-prem oder SaaS — passt in DORA-/BaFin-Kontext, weil OpenText etablierte EU-Verträge und reife Audit-Schnittstellen hat.
    caveats:
      - Klassische Suite mit hoher Setup-Komplexität
      - GenAI-Layer jünger als Kern-Korrelation
      - Mehrwert hauptsächlich für Bestandskunden mit ITOM-Stack
    sources:
      - id: opentext-com-products-ai-operations-management
  - id: causely-ai
    fit: good_fit
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Deterministisches Causality-Modell vor LLM-Erklärung — konzeptionell ideal für EU-AI-Act-Erklärbarkeit und DORA-Audits, weil RCA reproduzierbar ohne Halluzinationen ist. Unabhängige TFiR-Analyse zum KubeCon-2025-Auftritt bestätigt die architektonische Differenzierung. Junger Vendor mit dünnem DACH-Footprint.
    caveats:
      - K8s-First — bei Mainframe/Java-EE-lastigen DACH-Konzernen wenig Wert
      - Sehr dünne Praktiker-Basis, Junges Produkt
      - Vendor-Stabilität (Funding/Roadmap) zur Pilot-Zeit prüfen
      - Causal-Modell muss Topologie zuverlässig auto-discoveren
    sources:
      - id: causely-ai-blog-how-causal-ai-is-transforming-sre-reliability-in-k8s
      - id: docs-causely-ai-telemetry-sources-kubernetes
      - id: tfir-io-ai-sre-causal-reasoning
  - id: dynatrace-com-platform-davis-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Deterministische Causal-AI ist konzeptionell der EU-AI-Act-/DORA-freundlichste Ansatz: reproduzierbare, erklärbare RCA über Smartscape-Topologie und Grail. EU-SaaS verfügbar; in DACH-Großunternehmen häufig bereits Default-APM/Observability-Plattform. Hands-on-Praxis-Reviews bestätigen 'one problem ticket statt 40 Alerts'-Effekt in Multi-Cloud-Setups."
    caveats:
      - Lizenz- und OneAgent-Komplexität teuer
      - Volle Wirkung nur mit Smartscape-Topologie
      - Agentic-Action im Preview — produktive Auto-Remediation noch nicht enterprise-ready, Davis-RCA selbst aber sehr wohl
      - Initial-Lernkurve hoch; UI als 'heavy' beschrieben
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - automatische Root-Cause-Korrelation reduziert Alert-Flut massiv
        - Smartscape macht Multi-Cloud-Topologie sichtbar
      complaints:
        - Lizenz- und OneAgent-Komplexität
        - Onboarding für neue Engineers steil
    sources:
      - id: docs-dynatrace-com-docs-discover-dynatrace-platform-davis-ai
      - id: dynatrace-com-docs-semantic-dictionary-model-davis
      - id: completeera-com-dynatrace-review-2026-the-ultimate-ai-powered-observability-platform
  - id: harness-io-products-ai-sre
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Korreliert Incident-Signale mit CI/CD-Deploys, PRs und Feature-Flags und liefert Theorien mit Confidence-Scores plus Evidence — audit-freundlich (DORA-konform reproduzierbar). Stark, wenn Harness CI/CD bereits genutzt wird. Downgrade auf 'conditional', weil unabhängige Praktiker-Evidenz für die AI-SRE-Suite öffentlich noch fehlt; verfügbare Quellen sind Harness-eigene Doku und Blog-Beiträge.
    caveats:
      - Lock-in an Harness-CI/CD — Mehrwert sinkt deutlich, wenn CI/CD nicht Harness ist
      - Kein autonomes Remediation — Theorie braucht Engineer-Validierung
      - EU-Datenresidenz und Subprozessoren für DACH-Rollout vertraglich klären
      - Feature-Flag IR_RCA_QUERY_CHANGES teils noch hinter Flag
      - Unabhängige Praktikerberichte für AI-SRE-Komponenten öffentlich noch nicht verfügbar
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: developer-harness-io-docs-ai-sre-ai-agent-rca-change-agent
      - id: harness-io-products-ai-sre
  - id: komodor-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: K8s-Reliability-Plattform mit Klaudia-Agent für Drift-/Deploy-/Workload-Korrelation und Probable-Cause-Hypothesen. In DACH-K8s-Teams etabliert. Unabhängiger r/kubernetes-Thread bestätigt Adoption — flaggt aber gleichzeitig harten Sprung beim Pricing als Risiko.
    caveats:
      - K8s-First — kein Mehrwert bei VM/Mainframe/Serverless-Stacks
      - DORA-Audit-Trail / §87-BetrVG-Implikationen separat klären
      - Klaudia-Agent noch im Reife-Prozess
      - Pricing-Sprung nach Sunset des Free-Tiers — Vertrags- und TCO-Risiko explizit prüfen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - K8s-RCA-Workflow integriert mit Git/ArgoCD/Jenkins
        - praktischer Klaudia-Agent für Crash-Loop/Image-Pull-Fail
      complaints:
        - abrupte Free-Tier-Abschaltung 2024
        - Pricing-Sprung auf 15k$/Jahr ohne Mid-Tier
    sources:
      - id: komodor-com
      - id: reddit-com-r-kubernetes-comments-1ewsa82-komodor-just-pulled-the-ultimate-baitandswitch
  - id: newrelic-com-platform-sre-agent
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Causal-Reasoning auf Topologie-Graph, persistente Memory, HITL-Runbook-Execution. Niederschwellig für Teams mit New Relic als Primär-Stack; EU-Region (Frankfurt) verfügbar. Downgrade auf 'conditional', weil New Relic die SRE-Agent-Funktionalität in den eigenen Docs explizit als Preview kennzeichnet und unabhängige Praktiker-Erfahrungsberichte zur RCA-Tiefe öffentlich fehlen.
    caveats:
      - Offiziell Preview — produktive RCA-Tiefe in DACH-Setups noch nicht extern bestätigt
      - Lock-in an New-Relic-Telemetrie
      - LLM-Subprozessoren im DPA-Anhang explizit prüfen
      - Audit-Trail-Anforderungen DORA Art. 12 separat prüfen
      - Wenig unabhängige DACH-Praxisberichte
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Human-centric design respects approval workflows, no autonomous mutations
        - Correlates logs, metrics, traces, and deployments for full incident context
        - Slack/Zoom integration natural for incident response workflows
      complaints:
        - Very new product (preview status); limited independent practitioner reports
        - Widespread skepticism about AI SREs diagnosing incidents autonomously
        - Uncertain causal analysis performance on unfamiliar or novel outages
    sources:
      - id: newrelic-com-platform-sre-agent
      - id: newrelic-com-solutions-aiops
      - id: docs-newrelic-com-docs-agentic-ai-sre-agent-use-sre-agent
  - id: bigpanda-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: BigPanda wird selten als 'AI SRE' beworben, ist aber in DACH-Banken/Telcos seit Jahren installiert. GenAI-RCA, Change-Korrelation, eigene EU-Region (eu-docs.bigpanda.io). Reife Verträge inkl. SOC2/ISO und etablierte DACH-System-Integratoren. Gartner Peer Insights mit 31 verifizierten Enterprise-Reviews (4.4/5) bestätigt Kern-RCA- und Korrelations-Wirkung in Fortune-1000-Setups.
    caveats:
      - Kein 'agentic'-RCA im Pure-Play-Sinn — Korrelation + GenAI-Summary
      - Lizenz- und Setup-Komplexität enterprise-typisch hoch
      - Mehrwert vor allem bei hohem Alert-Volumen aus heterogenen Tools
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Event-Korrelation und Noise-Reduktion in Fortune-1000-Setups
        - starker Customer-Support (G2 9.2/10), bidirektionale ServiceNow-Integration
      complaints:
        - klassische Suite-Komplexität
        - Mehrwert hängt am Alert-Volumen und der Integrationsbreite ab
    sources:
      - id: eu-docs-bigpanda-io-en-bigpanda-aiops-html
      - id: gartner-com-reviews-product-bigpanda-1658620356
  - id: ilert-com-de-produkt-ilert-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "DACH-Native (Köln), ISO 27001, EU-Hosting Frankfurt + Dublin DR, externer DPO, expliziter DORA Compliance Package. AI SRE mit Read-only/Supervised/Autonomous-Stufen, Audit-Trails und HITL — direkter Treffer auf §87 BetrVG und DORA Art. 12. Downgrade auf 'conditional': der AI-SRE-Agent ist 2025-06 als Responder gestartet und wurde 2025-12 zur 'AI SRE'-Suite umfirmiert; unabhängige Praktiker-Reviews der RCA-Reasoning-Tiefe (vs. Bits/Cleric) fehlen öffentlich."
    caveats:
      - AI-SRE-Funktionalität deutlich jünger als das Alerting-Backbone — Reife im RCA-Reasoning ggü. Bits/Cleric kritisch testen
      - Plattform stärker im Alerting/On-Call als in tiefer Multi-Service-RCA
      - Integrations-Ökosystem schmaler als PagerDuty
      - Bisher nur vendor-eigene Quellen zur AI-SRE-Reife verfügbar — Pilot mit harten MTTR-Metriken empfohlen
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: ilert-com-de-produkt-ilert-ai
      - id: ilert-com
start_here: Teams im Datadog-Stack aktivieren Bits AI in der EU-Region Frankfurt und validieren generierte Hypothesen vier Wochen gegen bekannte Incidents. Ohne Stack-Lock-in bietet der PagerDuty SRE Agent einen vendor-agnostischen Einstieg — EU-Datenresidenz und §87-BetrVG-Betriebsvereinbarung vor Rollout vertraglich fixieren.
caveats: DORA Art. 12 verlangt tamper-evidente Audit-Trails jeder AI-Aktion auf Produktion; SaaS-AIOps liefern das nicht out-of-the-box — externe WORM-Archivierung muss separat eingeplant werden. In DE erfordert jedes Tool, das Logs oder Aktionen einzelner Entwickler verarbeitet, eine Betriebsvereinbarung nach §87 BetrVG.
sources: []
---
