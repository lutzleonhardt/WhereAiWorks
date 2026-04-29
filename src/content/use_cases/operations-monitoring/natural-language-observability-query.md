---
stage: operations-monitoring
order: 8
roles:
  - software-engineer
  - platform-devops-engineer
title: Natural-Language-Observability-Querying
goal_label: Logs, Metriken und Traces in Klartext abfragen
suitability: good_fit
rationale: Grafana Assistant, Dynatrace Davis CoPilot und Datadog Bits AI sind in DACH-Enterprise-Stacks enterprise-ready verfügbar — alle drei mit EU-Regionen, RBAC-Integration und bestätigtem produktivem Einsatz. Teams mit vorhandener Observability-Plattform können NL-Querying ohne Vendor-Wechsel einführen.
tools:
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Datadog EU1-Region (Frankfurt), SOC2/ISO27001/HIPAA-Zertifizierung, RBAC-aware Bits. Konversationelles Frontend über Logs/APM/Metriken/RUM — direkt am Use-Case-Kern. In DACH-Enterprise-APM-Bestand häufig schon vorhanden.
    caveats:
      - Bits nutzt OpenAI/Anthropic im Hintergrund — Subprocessor-Pfad pro Region klären
      - Direktausführung auf Production-Indizes ohne Cost-Limits ist für DACH-FinOps ein Showstopper
      - Nur als Add-on zu Datadog SaaS verfügbar — Vendor-Lock-in
      - Kosten- und Indexierungsspikes möglich, wenn Bits unbedacht große Zeiträume scannt
      - Trace-Summarization kann bei großen Traces Halluzinationen produzieren
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Einheitlicher Slack-Einstieg in Datadog-Daten
      complaints:
        - Datadog-Pricing für Custom-Metriken bleibt Pain-Point
    sources:
      - id: docs-datadoghq-com-bits-ai-bits-assistant
      - id: datadoghq-com-blog-introducing-bits-assistant
      - id: reddit-com-r-devops-comments-1l8jrc2-im-cofounder-at-signoz-an-opensource-datadog
  - id: elastic-co-docs-solutions-observability-ai-observability-ai-assistant
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Elastic Cloud mit EU-Regionen, Niederlassung München, Self-Managed-Option. NL→ES|QL Kibana-nativ, Permissions werden im Cluster durchgereicht, LLM-Connector pro Region wählbar (Bedrock-EU, Azure-EU). Für DACH-Public-Sector und ELK-Bestände prädestiniert.
    caveats:
      - Self-Managed-Kunden müssen LLM-Connector + Knowledge-Base selbst betreiben — Aufwand
      - ES|QL-Generation hat dokumentierte Halluzinationsmuster (SQL-Mixing, falsches String-Escaping)
      - Externe LLM-Connectors (OpenAI/Bedrock/Azure) sind Pflicht — Datenschutz prüfen
      - Eigene Knowledge-Base muss kuratiert werden für gute Antwortqualität
    sources:
      - id: elastic-co-docs-solutions-observability-ai-observability-ai-assistant
      - id: github-com-elastic-kibana-pull-166041
  - id: honeycomb-io-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Funktional Pionier (NL-Query 2023), exzellent für hochkardinale Telemetrie, gute Praxisreflexion. Für DACH-Enterprise als Team-Choice tragbar, aber 'experimental'-Label und OpenAI-Backend ohne EU-Datenresidenz drücken Readiness.
    caveats:
      - Query Assistant offiziell als 'experimental' markiert
      - OpenAI als Subprocessor heißt US-Datenfluss, EU-AI-Act-Risikoklassifizierung muss intern geklärt werden
      - Sendet Schema-Metadaten an OpenAI — Datenklassifizierung prüfen
      - Nur für Honeycomb-Datasets, kein Multi-Backend
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Accelerates unfamiliar system investigations with guided NL prompts
        - Enables non-expert engineers to derive value from observability data
        - Fits naturally into existing Honeycomb UI without chat-based friction
        - Cost-effective at ~$30/month in API usage
      complaints:
        - Marked experimental and lacks single-shot accuracy—2-3 iterations needed
        - User adoption drops after first week, most graduate to manual querying
        - Quality varies significantly depending on schema design and field naming
        - Discoverability issues when feature placement not prominent
    sources:
      - id: docs-honeycomb-io-investigate-query-build
      - id: honeycomb-io-blog-we-shipped-ai-product
  - id: coralogix-com-docs-user-guides-release-notes-ai-observability
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Isoliertes Azure-OpenAI-Deployment ist solide Compliance-Story für DACH; NL→DataPrime und Multi-Agent Olly über Logs/Metriken/Traces. Für Teams ohne harte DACH-Rechtsraum-Anforderung ein Konkurrent zu Datadog. Plattform hat 145+ Gartner-Bewertungen (Ø 4,5/5) — Olly baut auf bewährter Basis auf.
    caveats:
      - DataPrime ist Coralogix-spezifisch — Lock-in
      - DACH-Präsenz von Coralogix begrenzt — kein lokaler DPO/Sales-Footprint
      - Olly verarbeitet 'all telemetry data which is queried' im LLM-Kontext — DLP-Strategie und Data-Residency prüfen
      - Olly ist neuer Multi-Agent, Praxis-Reife noch geringer als bei Honeycomb/Datadog
      - Gartner-Bewertungen beziehen sich auf die Coralogix-Plattform, nicht spezifisch auf Olly
    sources:
      - id: coralogix-com-blog-5-essential-capabilities-that-make-coralogix-an-observability-powerhouse
      - id: coralogix-com-faq-coralogix-ai-tools
      - id: gartner-com-reviews-market-observability-platforms-vendor-coralogix-product-coralogix
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Dynatrace ist DACH-Heimspiel (HQ Linz), bietet EU-SaaS-Region und granulare nl2dql/dql2nl-Permissions. Grail-Topologie verankert NL-Antworten an realen Entities, was Halluzinationen messbar reduziert. Für Banken/Versicherungen in AT/DE oft schon im Stack. Praktiker bestätigen produktiven Einsatz für DQL-Generation.
    caveats:
      - Davis-CoPilot nutzt Standard-LLMs im Hintergrund — Subprocessor-Liste pro Region prüfen
      - Auto-Execute Default-Off-Schalten, sonst Cost-Risk bei Grail-Scans
      - An Dynatrace Grail / SaaS gebunden
      - Semantischer Index braucht bis zu 24h für Environment-Updates
      - "Laut Community-Feedback: aktuell kein echtes Agentic-Reasoning ohne manuelle Workflow-Konfiguration"
    sources:
      - id: docs-dynatrace-com-docs-dynatrace-intelligence-agentic-and-generative-ai-query-with-natural-language
      - id: docs-dynatrace-com-docs-discover-dynatrace-platform-davis-ai-copilot-copilot-getting-started
      - id: community-dynatrace-com-t5-open-q-a-thoughts-on-davis-copilot-capabilities-compared-to-agentic-m-p-293993
  - id: newrelic-com-platform-new-relic-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: EU-Region (Frankfurt), NL→NRQL als Kernfeature, NRQL-Result-Summary. In DACH-Mittelstand häufig als günstigere Datadog-Alternative im APM-Bestand — integriert sich daher ohne Vendor-Wechsel. Unabhängige Reviews bestätigen NL-Query als Stärke.
    caveats:
      - Lock-in an New Relic One — keine Multi-Backend-Fähigkeit
      - NRQL-Lernkurve für Teams mit PromQL/ES-Hintergrund
      - Result-Summarization kann bei großen Aggregationen Details glätten
      - Dateneingabe-Kosten skalieren schnell — FinOps-Governance erforderlich
    sources:
      - id: docs-newrelic-com-docs-agentic-ai-alert-intelligence-tool
      - id: aitoolsatlas-ai-tools-new-relic-ai-review
  - id: grafana-com-products-cloud-ai-assistant
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Multi-Datasource NL→PromQL/LogQL/TraceQL/SQL/CloudWatch, RBAC-konform, seit GrafanaCON 2026 auch für Grafana Enterprise/OSS verfügbar mit EU-Inferenz. In DACH-DevOps-Teams faktischer Standard. SOC2/GDPR-Footprint solide. The Register bestätigt GA-Announcement unabhängig.
    caveats:
      - EU-Inferenz und On-Prem-Zugang neu (April 2026) — Vertragsanlagen können hinterherhinken
      - Antwortqualität korreliert mit Label-Hygiene der Datasources
      - Self-Managed braucht Cloud-MCP-Endpoint — Datenflusspfad in Air-Gapped-Umgebungen nicht möglich
    sources:
      - id: grafana-com-blog-grafana-assistant-everywhere
      - id: grafana-com-docs-grafana-cloud-machine-learning-assistant-guides-querying
      - id: uk-headtopics-com-news-grafana-offers-ai-assistant-for-free-warns-users-not-to-go-82537406
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Saves time with complex PromQL/LogQL syntax (label_replace, group_left)
        - Multi-datasource unified interface (PromQL, LogQL, TraceQL, SQL)
        - Fits naturally into existing workflows, maintains developer flow
        - Helps teams migrate from other observability platforms
      complaints:
        - Public Preview status—subject to breaking changes without warning
        - Known LogQL regex escaping bugs in early v1 releases
        - Answer quality depends heavily on label hygiene and datasource design
        - Requires model-specific prompt tuning, not easily swappable models
  - id: ibm-com-products-instana
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Für DACH-regulierte Häuser interessant: Watsonx-on-prem-LLM-Gateway für Incident-Summarization und AI Chat verfügbar — datensouverän möglich. GA der Intelligent Incident Investigation 2026. Gartner Peer Insights (4,4/5, 315 Bewertungen) validiert Plattform; G2-Nutzer loben AI-Incident-Investigation."
    caveats:
      - Watsonx-on-prem ist Lizenz-/Setup-aufwändig
      - AI-Features (Incident Investigation, AI Chat) sind teilweise noch Public Preview
      - NL-Chat ist in Incident-Workflow eingebettet — kein freier Query-Builder wie bei Dynatrace/Elastic
      - Gartner-Reviewer nennen 'AI Integration' noch als Entwicklungsfeld — Reife niedriger als bei Tier-1-APM-Anbietern
    sources:
      - id: ibm-com-products-instana-intelligent-incident-investigation
      - id: ibm-com-docs-en-instana-observability-1-0-315-topic-alerts-incident-ai-summarization-public-preview
      - id: gartner-com-reviews-market-observability-platforms-vendor-ibm-product-ibm-instana-observability
  - id: logz-io-platform
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: AI Agent in Explore/Kubernetes 360/App 360 deckt NL über Metriken/Traces/Logs ab; SOC2/ISO27001 dokumentiert, EU-Region (Frankfurt) verfügbar. 201 unabhängige Reviews (Ø 4,5/5) bestätigen Plattform-Adoption. NL-Querying als Feature explizit in G2-Vergleichsdaten erwähnt.
    caveats:
      - Geringe DACH-Präsenz im Vergleich zu Datadog/Dynatrace
      - AI Agent eher Investigation-fokussiert als reine NL→Query-Generation
      - Pricing-Transparenz historisch schwach
      - NL-Query-Funktion basiert auf Lucene-Konvertierung — weniger expressive als DQL/PromQL-Generation
    sources:
      - id: docs-logz-io-docs-user-guide-observability-assistantiq
      - id: toolradar-com-tools-logz-io
  - id: docs-mezmo-com-docs-use-ai-assistant
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: "Relevant als Log-Management-Alternative im IBM-Cloud-Umfeld. AI Assistant deckt Logs+OTel-Traces ab (Service-Graphs, Latency-Anomalien). Toolradar aggregiert 4,5/5 aus unabhängigen Reviews. Bedingt passend: Feature-Fokus liegt auf Log-Investigation und RCA, nicht auf freier NL→Query-Generation."
    caveats:
      - Scope ist Log-Investigation / RCA — kein freier NL→Query-Builder für Metriken/Traces
      - Geringe DACH-Direkt-Sales-Präsenz, primär über IBM-Cloud-Channel
      - Compliance-Footprint öffentlich weniger transparent als bei Datadog/Dynatrace
      - Unabhängige Reviews validieren die Plattform generisch, nicht das NL-Query-Feature spezifisch
    sources:
      - id: docs-mezmo-com-docs-use-ai-assistant
      - id: toolradar-com-tools-mezmo
  - id: splunk-com-en-us-products-splunk-ai-assistant-for-spl-html
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Für Splunk-Häuser (in DACH-Banken/Versicherungen Standard) der natürliche NL-Einstieg. NL→SPL und SPL→NL inkl. RAG über Splunk-Doku, GA seit Juni 2024. Community-Praktiker setzen es produktiv für Observability-as-Code und NL→SignalFlow ein. Schwächen für Enterprise-Compliance: English-only, Azure-OpenAI-Backend."
    caveats:
      - Keine deutsche Sprachunterstützung (English-only)
      - Datenfluss läuft über Microsoft Azure OpenAI — Microsoft-AUP gilt, EU-Region nicht garantiert
      - Splunk Cloud Platform nur auf AWS-Commercial-Stacks — keine EU-souveräne Cloud-Option
      - Splunk Enterprise on-prem braucht Cloud-connected-Lösung — Air-Gapped nicht unterstützt
    sources:
      - id: help-splunk-com-en-splunk-observability-cloud-splunk-ai-assistant-ai-assistant-in-observability-cloud
      - id: community-splunk-com-t5-community-blog-accelerating-observability-as-code-with-the-splunk-ai-assistant-ba-p-756276
start_here: Pilot auf einem bereits instrumentierten Service mit Grafana Assistant (EU-Inferenz seit April 2026) oder Dynatrace Davis CoPilot starten, drei typische Troubleshooting-Fragen prompten und die generierten Queries gegen manuell geschriebene Versionen validieren. Auto-Execute vor Pilotstart deaktivieren und Query-Cost-Limits konfigurieren.
caveats: Generierte Queries können syntaktisch korrekt, aber semantisch falsch sein — ein manueller Validierungsschritt vor Ausführung gegen Production-Indizes bleibt Pflicht. Alle Anchor-Tools leiten Anfragen über externe LLM-Subprocessors weiter; Datenfluss- und Regionszuordnung ist Voraussetzung für DACH-Enterprise-Freigabe.
sources: []
---
