---
stage: product-discovery
order: 9
roles:
  - product-manager
title: Self-Service-Produktdaten-Fragen
goal_label: Ad-hoc-Fragen an Produktdaten ohne SQL stellen
suitability: conditional
rationale: ThoughtSpot Spotter, Databricks Genie und Snowflake Cortex Analyst zeigen, dass NL-to-SQL-Fragen auf Enterprise-Produktdaten mit Schrems-II-konformer EU-Konfiguration produktionsreif sind. PMs können Hypothesen direkt aus dem bestehenden Warehouse validieren, ohne jede Ad-hoc-Frage über Data-Teams zu routen.
tools:
  - id: altasigma-com-de-solutions-prompt-analytics
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: DACH-Anbieter mit explizitem 'EU AI Act-konform'-Positionierung, BYO-LLM (PrivateGPT/Mistral/Claude) und On-Prem-Option. Likely missed by market scan because DACH-only Player ohne breite englischsprachige SEO-Präsenz.
    caveats:
      - Kleiner Vendor — Geschäftskontinuität prüfen
      - Track Record bei großen Konzern-Implementierungen unklar
      - Kein BSI-C5/ISO-27001 prominent dokumentiert
    sources:
      - id: altasigma-com-de-solutions-prompt-analytics
  - id: hypescale-com-en-products-hypeanalytics
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Made-in-Germany NL-Analytics mit On-Prem-Deployment in deutschen Rechenzentren und expliziter EU-AI-Act-Positionierung; query-federation ohne Datenkopie. Likely missed by market scan because DACH-only-Player und Suite-Positionierung statt Produktanalytik-Nische.
    caveats:
      - Kleiner Vendor — Vendor-Risiko
      - Reifegrad und Kundenreferenzen öffentlich begrenzt sichtbar
      - Pricing intransparent
    sources:
      - id: hypescale-com-en-products-hypeanalytics
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Power BI ist DACH-BI-Standard; Copilot Q&A bietet NL-Layer auf semantische Modelle, EU-Data-Boundary und Azure-OpenAI-EU konfigurierbar. Likely missed by market scan because Tool ist als BI-Suite-Feature positioniert, nicht als dediziertes Produktanalytik-Tool.
    caveats:
      - Neue 'Flex Routing'-Defaults können LLM-Inferenz aus EU rausrouten — Tenant-Setting prüfen
      - "Voraussetzung: Produkt-Events in Fabric/PBI modelliert"
      - F64-Capacity-Mindestlizenz für Copilot
    sources:
      - id: docs-microsoft-com-en-us-fabric-fundamentals-copilot-privacy-security
      - id: inkl-com-news-this-new-microsoft-365-copilot-feature-could-throw-your-gdpr-compliance-into-question
  - id: sap-com-germany-products-data-cloud-analytics-cloud-natural-language-query-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Just-Ask-LLM (askdata-Akquisition) läuft im SAC-Backend ohne externe LLM-Calls; in vielen DACH-Konzernen ist SAC bereits lizenziert und der NL-Layer kommt ohne neuen Vendor. Likely missed by market scan because tool is positioned as a suite feature von SAP, nicht als 'AI-Tool'.
    caveats:
      - "Voraussetzung: SAP Datasphere/SAC-Modelle, nicht Eventdaten in Mixpanel/Amplitude"
      - Joule-Konversations-Layer in DACH noch im Rollout
    sources:
      - id: community-sap-com-t5-technology-q-a-questions-on-just-ask-in-sap-analytics-cloud-sac-qaq-p-13733146
  - id: vanna-ai
    fit: partial
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Open-Source-NL-to-SQL-Framework, lokal/self-hosted mit BYO-LLM — typische Wahl für regulierte DACH-Eigenbau-Lösungen. Likely missed by market scan because Framework/Library statt fertiges Produkt — taucht in Capability-Suchen selten auf.
    caveats:
      - Kein PM-fertiges Frontend — Build-Aufwand
      - Eher Tool für Data-Engineering-Teams als für PMs
    sources:
      - id: vanna-ai
  - id: cube-dev-use-cases-llm-and-ai-semantic-layer
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Open-Source-Core mit Self-Host und BYO-LLM-Key adressiert Definitions-Drift-Audit-Risiko. Semantic-Layer als NL-Ankerpunkt für LLM-Q&A konzeptuell stark; Delphi-NL-Layer (2024 akquiriert) noch ohne unabhängige Enterprise-Produktionsnachweise.
    caveats:
      - Kein Out-of-the-box-PM-Frontend — Build-Aufwand nötig
      - Cube-Cloud US-zentrisch; nur Self-Host volle Souveränität
      - Delphi-NL-Layer (2024 akquiriert) ohne unabhängige Enterprise-Produktionsnachweise
      - Accuracy fällt bei komplexen Schemata (~60%) vs. einfachen Modellen (~80-100%) — praktische Obergrenze liegt beim Semantic-Layer-Scope
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Semantic layer + RAG reduces hallucination vs raw SQL generation
        - JSON query language more LLM-accurate than SQL
        - Developer experience with collaboration + testing built-in
      complaints:
        - Not a product; more a platform for building custom NL apps
        - Requires investment in semantic model definition
    sources:
      - id: cube-dev-use-cases-llm-and-ai-semantic-layer
      - id: cube-dev-blog-semantic-layer-and-ai-the-future-of-data-querying-with-natural-language
      - id: cube-dev-blog-conversational-interface-for-semantic-layer
      - id: reddit-com-r-dataengineering-comments-1gjnvi2-is-it-me-or-semantic-layer-are-getting-one-of-the
  - id: databricks-com-product-ai-bi-genie
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: EU-Workspace Frankfurt, Unity-Catalog-Governance und Azure-OpenAI-EU-Backend machen Genie zur Schrems-II-armen Wahl, wenn Produkt-Telemetrie ohnehin im Lakehouse landet. Produktionsnachweise (77% Task-Success) aus unabhängigen Praxisberichten bestätigen Eignung mit Vorbehalt.
    caveats:
      - Genie braucht kuratierte 'Genie Spaces' — Pflegeaufwand ('Curation Tax')
      - Lakehouse-Stack als Voraussetzung
      - 20-Tabellen-Limit pro Genie Space — für komplexe oder mandantenfähige Datenmodelle Vorinvestment nötig
      - BSI-C5 nicht prominent dokumentiert; Azure-Backend hilft hier
    practitioner_signal:
      volume: medium
      tenor: mixed
    sources:
      - id: databricks-com-product-ai-bi
      - id: reddit-com-r-databricks-comments-1l9lhgs-lets-talk-about-genie
      - id: sunnydata-ai-blog-databricks-genie-code-production-review
  - id: posthog-com-docs-max-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Einziger Pure-Play-Produktanalytik-Anbieter mit Open-Source-Core und echter Self-Host-Option — adressiert die DACH-Schrems-II-Sorge frontal. Max-AI-LLM-Provider ist konfigurierbar (Azure-OpenAI-EU möglich). Unabhängiger Praxisbericht bestätigt NL-to-SQL, Session-Memory und Follow-up-Query-Ketten.
    caveats:
      - Self-Host-Setup ist nicht trivial (K8s, ClickHouse, Object Storage)
      - Default-LLM-Pfad nutzt OpenAI — EU-LLM muss bewusst gesetzt werden
      - BSI-C5/ISO-27001 für PostHog-Cloud nicht prominent dokumentiert
      - EU-Cloud-Region existiert, aber LLM-Provider-Wahl bleibt Kunden-Verantwortung
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Deep integration with PostHog data + tools reduces hallucination
        - SQL simplification enables non-SQL users to query data
        - Session replay + analytics in single interface
      complaints:
        - Chatbot UX fatigue; users prefer text answers over insights
        - Embedded insights can clutter UI; need better collapse/expand UX
    sources:
      - id: posthog-com-docs-max-ai
      - id: posthog-com-docs-product-analytics-analyze-data-ai
      - id: posthog-com-docs-posthog-ai-example-prompts
      - id: growthmethod-com-posthog-max-ai
  - id: docs-snowflake-com-en-user-guide-snowflake-cortex-cortex-analyst
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: EU-Frankfurt-Region und Cortex-Verarbeitung im Account-Kontext liefern saubere Schrems-II-Story; Voraussetzung ist nur, dass Produkt-Events in Snowflake liegen. Unabhängige Praxisberichte (inkl. Coinbase-Ingenieur) bestätigen Produktionstauglichkeit bei diszipliniertem Semantic Model.
    caveats:
      - Semantic-Model-Pflege ist Voraussetzung — sonst Hallucinations-Risiko
      - Cortex-Funktionen unterliegen separater AVV
      - Komplexe Multi-Hop-Joins und Many-to-Many-Relationen erfordern pre-materialisierte Views als Workaround
      - "Double-Billing: AI-Message-Credits plus Warehouse-Execution-Costs"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - 90%+ SQL accuracy on real-world use cases (vs GPT-4o single-shot)
        - Semantic layer grounds LLM in verified queries + business logic
        - Integrates with Snowflake warehouse; no extra infrastructure
      complaints:
        - Requires manual semantic model definition; not fully automated yet
        - Complex queries still need analyst review for guardrails
    sources:
      - id: snowflake-com-en-data-cloud-cortex
      - id: reddit-com-r-snowflake-comments-1rq1jup-cortex-analyst-in-snowflake-text-to-sql-that
      - id: medium-com-agarwal-viren96-the-neuro-symbolic-shift-a-deep-dive-into-snowflake-cortex-analyst-and-semantic-views-0d49d39e01a2
  - id: thoughtspot-com-product-sage-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Zero-Data-Retention plus BYO-LLM (Azure-OpenAI-EU) und AWS-EU-Region machen es zur sauberen DACH-Wahl unter US-Vendoren. Worksheet-Semantic-Layer adressiert Definitions-Drift. Gartner Peer Insights (679 validierte Enterprise-Reviews, 4.5/5) und unabhängige Analystenstimmen bestätigen Reifegrad.
    caveats:
      - Worksheet/Semantic-Modellierung erforderlich — erhebliches Vorinvestment
      - Enterprise-Pricing (~$50/User/Monat für Spotter) — kein Self-Service-Onboarding für Einzel-PMs
      - Genauigkeit ~80% bei einfachen, ~60% bei komplexen Worksheets — Verifikation nötig
      - Sage ist bereits im Atlas; Spotter ist die agentische Erweiterung; SpotterViz/SpotterModel/SpotterCode noch im Rollout (Stand früh 2026)
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Replaces Sage; adds agentic reasoning + proactive insights
        - Natural language translated to search tokens (not raw SQL)
        - Human-in-the-loop feedback improves accuracy over time
      complaints:
        - Sage never reached GA; execution lagged marketing promises
        - Complex queries (~60% accuracy) still require analyst review
    sources:
      - id: docs-thoughtspot-com-cloud-latest-search-sage
      - id: thoughtspot-com-press-releases-thoughtspot-launches-spotter-for-industries-purpose-built-agents-transform-complex-industry-content-into-trusted-actionable-insights
      - id: gartner-com-reviews-market-analytics-business-intelligence-platforms-vendor-thoughtspot-product-thoughtspot-analytics
      - id: techtarget-com-searchbusinessanalytics-news-366636078-thoughtspot-automates-full-platform-with-new-spotter-agents
  - id: databricks-com-product-ai-bi-genie
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: "Conversational AI für Lakehouse-Daten mit Unity-Catalog-Governance; PMs/BAs fragen Produktdaten in Natural Language ab. Adjacent use case: für Teams, die Event-Telemetrie ohnehin in Databricks landen lassen, ein NL-Layer ohne Mixpanel/Amplitude-Schrems-II-Last."
    caveats:
      - "Bereits im Atlas. Adjacent: für Teams, die Event-Telemetrie ohnehin in Databricks landen lassen, ein NL-Layer ohne Mixpanel/Amplitude-Schrems-II-Last."
      - Works best with semantic layer; poor results without metric views
      - Requires investment in metadata + semantic modeling
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - 4000+ customers in preview; rapid adoption signals strong product-market fit
        - Learns from user feedback + improves query accuracy over time
        - Governed by Unity Catalog; secure, fine-grained access control
      complaints:
        - Works best with semantic layer; poor results without metric views
        - Genie ~80% accurate on simple queries; 60%+ on complex ones
        - Requires investment in metadata + semantic modeling
    sources:
      - id: databricks-com-product-ai-bi
start_here: Wer Produkt-Events bereits in Snowflake oder Databricks hat, pilotiert mit Cortex Analyst bzw. Genie auf einem kuratierten Semantic Model — und startet mit einer Frage, deren Antwort bekannt ist, um Definitions-Lücken frühzeitig zu erkennen. ThoughtSpot Spotter bietet sich an, wenn ein dediziertes BI-Frontend mit Zero-Data-Retention-Garantie gefordert ist.
caveats: Alle drei Tools setzen einen aktiv gepflegten Semantic Layer voraus — ohne dieses Vorinvestment steigt das Risiko stiller Definitions-Drift und falscher Metrik-Antworten. LLM-Routing und Datenverarbeitung müssen in DACH explizit auf EU-Regionen konfiguriert werden; Default-Einstellungen sind nicht automatisch Schrems-II-sicher.
sources: []
---
