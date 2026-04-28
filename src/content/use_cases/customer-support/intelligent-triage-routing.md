---
stage: customer-support
order: 2
roles:
  - customer-support
title: AI-Triage und intelligentes Routing
goal_label: Tickets korrekt klassifizieren und an die richtige Queue lenken
suitability: good_fit
rationale: ITyX-Referenzen aus Banken, Versicherungen und Energie zeigen, dass KI-Triage in regulierten DACH-Branchen oft der erste produktionsreife AI-Step ist — Risikoprofil niedrig, Entlastungseffekt messbar. Mit Freshdesk Freddy Auto-Triage, ITyX Mediatrix und D365 Unified Routing steht für die drei dominanten Helpdesk-Stacks je ein enterprise-tauglicher Triage-Layer bereit.
tools:
  - id: cognigy-com
    fit: conditional
    sources:
      - id: cognigy-com
    why_it_fits: "DACH-HQ (Duesseldorf), starke Enterprise-Referenzen in Telco/Versicherung; NLU-Intent-Routing fuer Voice/Chat in Genesys/Avaya/NICE. EU-Hosting verfuegbar — relevant, wenn Triage am Voice/Chat-Eingang statt am Ticket-Helpdesk passieren soll. Einschränkung: Voice/Chat-zentrisch; reine E-Mail-/Ticket-Triage nicht Sweet-Spot."
    enterprise_readiness: enterprise_ready
  - id: parloa-com
    fit: conditional
    sources:
      - id: parloa-com
    why_it_fits: "Berliner GenAI-Voice-Player; AI-Agenten mit Intent-Klassifikation und Handoff-Routing fuer DACH-Voice-Eingang. Relevante Alternative zu Cognigy fuer Voice-Triage. Einschränkung: Voice-Agent-Fokus, nicht Ticket-Triage."
    enterprise_readiness: team_ready
  - id: sprinklr-com-products-customer-service-conversational-ai
    fit: conditional
    sources:
      - id: sprinklr-com-products-customer-service-conversational-ai
    why_it_fits: "Multichannel-Triage mit starkem Social-Channel-Hebel. Sinnvoll fuer DACH-Konsumguetermarken mit hohem Social-Anteil; fuer reinen E-Mail/Ticket-Eingang Suite-Overhead. Einschränkung: Pricing fuer reine Triage-Use-Cases unverhaeltnismaessig."
    enterprise_readiness: enterprise_ready
  - id: genesys-com-capabilities-predictive-routing
    fit: conditional
    sources:
      - id: genesys-com-capabilities-predictive-routing
    why_it_fits: "Genesys ist in DACH-Contact-Centern stark verbreitet; Predictive Routing nutzt ML auf Kontakt-/Skill-/Outcome-Match. Relevanter Triage-Layer fuer Voice/Chat-Channels statt Ticket-Helpdesk. Likely missed by market scan because Genesys wird als CCaaS-Plattform und nicht als 'AI-Triage-Tool' wahrgenommen. Einschränkung: Voice-/Chat-Channels, kein Ticket-Helpdesk-Triage."
    enterprise_readiness: enterprise_ready
  - id: omq-de
    fit: conditional
    sources:
      - id: omq-de
    why_it_fits: "Berliner KI-Anbieter fuer E-Mail-Auto-Categorization und Self-Service-Bots mit Integrationen in Zendesk/Freshdesk/Salesforce; DE-Hosting, AVV-Standard — typischer DACH-Mittelstands-Pick fuer Mail-Triage. Likely missed by market scan because OMQ wird als 'Helpdesk-Bot' positioniert, nicht als reines Triage-Produkt. Einschränkung: Vendor-Groesse begrenzt; Enterprise-Referenzen ueberschaubar."
    enterprise_readiness: team_ready
  - id: usu-com
    fit: conditional
    sources:
      - id: usu-com
    why_it_fits: "Deutscher Suite-Anbieter (Moeglingen) mit Service-Management-/Knowledge-Stack in DACH-Versorgern und Industrie; Triage-/Routing-Komponenten als Bestandteil der Service-Suite, DE-Hosting, AVV-Standard. Likely missed by market scan because USU vermarktet sich als Service-Suite, nicht als 'AI-Triage-Tool'. Einschränkung: Triage ist Teilkomponente, kein dediziertes Produkt."
    enterprise_readiness: enterprise_ready
  - id: forethought-ai-triage
    fit: good_fit
    sources:
      - id: forethought-ai-triage
      - id: g2-com-products-forethought-forethought-reviews
    why_it_fits: "Kanonischer Stand-alone-Triage-Layer ueber Zendesk/Salesforce/Kustomer; klassifiziert Tickets nach Intent/Sentiment/Sprache und routet in die richtige Queue. Unabhaengige G2-Validierung (4,3/5) bestaetigt Triage-Wert in Customer-Support-AI-Stacks. Fuer DACH-Enterprise allerdings Datenresidenz und AVV im Trust Center zu pruefen. Einschränkung: Sentiment-Routing potenziell EU-AI-Act-Emotion-Recognition — Risk Assessment Pflicht."
    enterprise_readiness: enterprise_ready
  - id: freshworks-com-freddy-ai
    fit: good_fit
    sources:
      - id: freshworks-com-freddy-ai
      - id: eesel-ai-blog-freshdesk-ai-auto-triage
      - id: aiagentsquare-com-blog-freshdesk-freddy-review-html
    why_it_fits: "Freshdesk-Bestand: Freddy macht Auto-Categorization, Priority-Prediction und Skill-/Group-Assignment. Unabhaengige Practitioner-Reviews (eesel, AIAgentSquare) belegen Funktionsweise und ~52% autonome Resolution. Aequivalent zu Zendesks Intelligent Triage im Freshworks-Stack; fuer regulierte DACH-Branchen weniger Footprint als Zendesk/Salesforce. Einschränkung: Freddy-Copilot vs. Freddy-AI-Agent vs. Freddy-Self-Service Lizenzunterschiede beachten; Datenanforderungen (>=2000 Tickets) reale Huerde."
    enterprise_readiness: team_ready
  - id: ityx-de
    fit: good_fit
    sources:
      - id: ityx-de
      - id: pressebox-de-pressemitteilung-ityx-solutions-ag-bosch-communication-center-setzt-fuer-e-mail-und-wissensmanagement-auf-mediatrix-von-ityx-boxid-149250
      - id: omr-com-de-reviews-product-ityx
    why_it_fits: "DACH-Kernspieler fuer E-Mail-/Dokument-Klassifikation und Routing in Banken, Versicherungen, Energie. Unabhaengige Belege: Bosch Communication Center als langjaehriger Mediatrix-Anwender (Pressebox), OMR-Reviews-Listing mit Preis-/Feature-Profil. DE-Hosting, AVV-Standard, ISO 27001/9001/20000. Einschränkung: Klassisches NLP/ML mit GenAI-Layer (GPT-4/Claude/Mistral); Roadmap-Stabilitaet nach Edenred-Akquise weiter pruefen."
    enterprise_readiness: enterprise_ready
  - id: help-salesforce-com-s-articleview-id-service-case-classification-setup-htm
    fit: good_fit
    sources:
      - id: help-salesforce-com-s-articleview-id-service-case-classification-setup-htm
      - id: xyzeo-com-product-salesforce-service-cloud-einstein
      - id: dench-com-blog-salesforce-einstein-review
    why_it_fits: "Service-Cloud-Bestand: Case Classification + Omni-Channel Skills-Routing als produktiver Triage-Stack. Unabhaengige Reviews (XYZEO mit Gartner-CSAT-Bench, Dench mit Lizenz-/Datenvoraussetzungen) bestaetigen Praxisreife. Hyperforce DE/EU verfuegbar, DPA ueblich. Trainings-Datenanforderung (>1000 Cases/Klasse) ist reale Huerde. Einschränkung: Einstein Classification (klassisch ML) vs. Einstein GPT/Agentforce (LLM) sauber trennen — unterschiedliche Lizenzen und AI-Act-Profile."
    enterprise_readiness: enterprise_ready
  - id: servicenow-com-products-now-platform-ai-experience-html
    fit: good_fit
    sources:
      - id: servicenow-com-products-now-assist-for-csm-html
      - id: gartner-com-reviews-product-servicenow-now-assist
    why_it_fits: "Default-Stack in regulierten DACH-Branchen (Telco/Banking/Versicherung). Predictive Intelligence (klassisches ML) plus Now Assist (LLM) decken Case-Categorization, Skill-Matching, Routing ab. Gartner Peer Insights validiert Now Assist mit 4,3/5 aus 147 Enterprise-Reviews. ML-Layer AI-Act-mild, LLM-Layer separat zu bewerten. Einschränkung: Predictive Intelligence und Now Assist sauber trennen — verschiedene Lizenzen, verschiedene AI-Act-Risikoprofile."
    enterprise_readiness: enterprise_ready
  - id: zendesk-com-service-ai-intelligent-triage
    fit: good_fit
    sources:
      - id: zendesk-com-service-ai-intelligent-triage
      - id: learn-g2-com-zendesk-review
      - id: aiagentsquare-com-blog-zendesk-ai-review-2026-html
    why_it_fits: "Native Triage in Zendesks Advanced-AI-Add-on: Intent/Language/Sentiment auf eingehenden Tickets, direkt in Trigger-/Routing-Hooks. G2-Aggregation (6.000+ Reviews, 4,3/5) und unabhaengige Vergleichsanalyse (AIAgentSquare: ~60% autonome Resolution) belegen Praxistauglichkeit. EU-Datacenter und DPA verfuegbar. Einschränkung: Add-on-Lizenz teuer — TCO vor Rollout pruefen."
    enterprise_readiness: enterprise_ready
  - id: learn-microsoft-com-en-us-dynamics365-customer-service-use-unified-routing
    fit: good_fit
    sources:
      - id: learn-microsoft-com-en-us-dynamics365-customer-service-use-unified-routing
      - id: gartner-com-reviews-market-crm-customer-engagement-center-vendor-microsoft-product-microsoft-dynamics-365-customer-service
      - id: tei-forrester-com-go-microsoft-customer-service
    why_it_fits: "Unified Routing in D365 nutzt ML-Klassifikation auf Cases plus Copilot-Summarization; Default-Triage-Layer fuer DACH-MS-Stack-Bestand mit Azure-EU-Datenresidenz und ueblicher M365-DPA. Gartner Peer Insights (4,3/5 aus 134 CEC-Reviews) und Forrester TEI Study belegen Enterprise-Tauglichkeit. Likely missed by market scan because der Triage-Teil ist ein Suite-Feature in D365, nicht als 'AI-Tool' positioniert. Einschränkung: Nur sinnvoll bei D365-/Power-Platform-Bestand."
    enterprise_readiness: enterprise_ready
start_here: "Den größten Ticket-Kanal (meist E-Mail) auf 5–10 stabilen Top-Kategorien pilotieren, passend zum Bestand: Freddy Auto-Triage für Freshdesk, ITyX Mediatrix für regulierte DACH-Umgebungen, D365 Unified Routing für MS-Stack. Confusion-Matrix gegen menschliche Klassifikation messen und Sentiment-Signale in der ersten Phase weglassen."
caveats: Sentiment-Routing kann unter EU AI Act als 'Emotion Recognition' eingestuft werden — Risk-Assessment vor Rollout erforderlich. Bei ähnlichen Intents (z. B. Refund vs. Reklamation) bleibt stichprobenartige Qualitätskontrolle dauerhaft nötig.
sources: []
---
