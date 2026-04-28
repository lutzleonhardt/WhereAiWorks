---
stage: customer-support
order: 11
roles:
  - product-manager
  - customer-support
title: Voice-of-Customer-Analytics aus Konversations-Korpora
goal_label: Themen, Beschwerden und Trends aus allen Konversationen extrahieren
suitability: conditional
rationale: NICE Enlighten AI und Verint Speech & Text Analytics sind enterprise-reife Plattformen, die Themen, Beschwerdetreiber und Trends über alle Interaktionen hinweg auswerten — ohne eigene ML-Pipeline aufbauen zu müssen. Der systematische Outside-In-Blick auf das Gesamtkorpus unterscheidet diesen Use Case klar von Agent-QA oder Knowledge-Gap-Analysen.
tools:
  - id: almato-com
    fit: conditional
    sources:
      - id: almato-com-loesungen-sprachanalyse
    why_it_fits: "Stuttgarter Mittelstandsanbieter mit Schwerpunkt KI-Sprachanalyse fuer DACH-Contact-Center, DSGVO-/BR-Erfahrung, deutsches Sprachmodell, EU-Cloud oder on-prem. Funktional schmaler als globale Pure-Plays, aber DACH-tauglich von Tag 1. Einschränkung: Kleinere Modelltiefe als NICE/Verint."
    enterprise_readiness: team_ready
  - id: i2x-ai
    fit: conditional
    sources:
      - id: i2x-ai
    why_it_fits: "DACH-Native mit echten deutschen Sprachmodellen und Hosting in DE. Schwerpunkt aber Echtzeit-Sales-Coaching; VoC-Korpus-Analyse ist Nebenpfad. Fuer rein deutsche, mittelgrosse Service-Organisationen mit DSGVO-Prioritaet eine Option. Einschränkung: Roadmap-/Vendor-Risiko bei kleinerem Anbieter."
    enterprise_readiness: team_ready
  - id: salesforce-com-sales-conversation-insights
    fit: conditional
    sources:
      - id: salesforce-com-sales-conversation-insights
    why_it_fits: "Suite-Feature von Service Cloud Voice; in Salesforce-Houses naheliegend. Themen-, Wettbewerbs- und Trendanalyse; Tiefe schwaecher als bei Pure-Plays. Einschränkung: Stark Sales-Heritage, Service-VoC im Ausbau."
    enterprise_readiness: enterprise_ready
  - id: chattermill-com
    fit: conditional
    sources:
      - id: chattermill-com
    why_it_fits: "Likely missed by market scan because UK-basierter VoC-Anbieter mit Unified-Customer-Intelligence-Positionierung. Themen-, Treiber- und Trendanalyse aus Tickets, Surveys, App-Reviews und Chats. Enterprise-Kunden u.a. HelloFresh, Uber. Einschränkung: EU-Hosting/SOC2-Tiefe pruefen."
    enterprise_readiness: team_ready
  - id: usu-com
    fit: conditional
    sources:
      - id: usu-com
    why_it_fits: "Likely missed by market scan because USU primaer als Knowledge-Anbieter wahrgenommen wird. DACH-Mittelstandsstandard mit deutschem Hauptsitz (Moeglingen), EU-Hosting, ISO27001; deckt Service-Konversations-Insights als Erweiterung der Knowledge-Suite ab. Sinnvoll wenn USU Knowledge ohnehin im Stack ist. Einschränkung: VoC-Modul weniger reich als Pure-Plays."
    enterprise_readiness: enterprise_ready
  - id: zendesk-com-service-quality-assurance
    fit: conditional
    sources:
      - id: zendesk-com-service-quality-assurance
    why_it_fits: "Likely missed by market scan because als Quality-Assurance-Tool positioniert. AutoQA und Spotlight liefern Theme-/Trend-Insights ueber 100% der Tickets und Calls. Naheliegend in Zendesk-Bestand, EU-Hosting verfuegbar. Einschränkung: Tiefe der Topic-Discovery schwaecher als Speech-Analytics-Pure-Plays."
    enterprise_readiness: enterprise_ready
  - id: aws-amazon-com-connect-contact-lens
    fit: good_fit
    sources:
      - id: aws-amazon-com-connect-contact-lens
      - id: gartner-com-reviews-product-amazon-connect
    why_it_fits: "Frankfurt-Region (eu-central-1), native PII-Redaction, Bedrock-Anbindung fuer generative VoC-Zusammenfassungen. Fuer Connect-Bestand der naheliegende VoC-Pfad. AWS war 2024 und 2025 Leader im Gartner Magic Quadrant for CCaaS, Amazon Connect bei Gartner Peer Insights mit 4,5/5. Einschränkung: Sinnvoll fast nur fuer Amazon-Connect-Kunden."
    enterprise_readiness: enterprise_ready
  - id: cresta-com
    fit: good_fit
    sources:
      - id: cresta-com-product-insights
      - id: martech360-com-news-cresta-introduces-ai-analyst-to-revolutionize-business-insights-from-customer-conversations
    why_it_fits: "Im Briefing explizit genannt. CI-Plattform mit eigenen LLMs, Topic- und Trend-Modul. Forrester Wave Conversation Intelligence Solutions for Contact Centers Q2 2025 nennt Cresta als Leader mit Bestwerten in Insight Discovery und Outcome Analysis. Fuer DACH-Einsatz sind deutsche Modellqualitaet und EU-Hosting die kritischen Pruefpunkte vor Vertragsabschluss. Einschränkung: US-Hosting Standard, EU-Datenresidenz nur auf Anfrage."
    enterprise_readiness: enterprise_ready
  - id: genesys-com-capabilities-ai-experience
    fit: good_fit
    sources:
      - id: genesys-com-capabilities-speech-and-text-analytics
      - id: g2-com-products-genesys-cloud-cx-reviews
    why_it_fits: "Native Speech & Text Analytics in Genesys Cloud, Frankfurt-Region verfuegbar. Topic Spotting, Sentiment, Trend-Dashboards. Bei G2 mit 4,3/5 ueber mehrere hundert Reviews in der Speech-Analytics-Kategorie. Fuer Genesys-Bestand der naheliegende VoC-Pfad ohne zweiten Stack. Einschränkung: Lock-In an Genesys CCaaS."
    enterprise_readiness: enterprise_ready
  - id: medallia-com-platform-speech-analytics
    fit: good_fit
    sources:
      - id: medallia-com-platform-speech-analytics
      - id: forrester-com-report-the-forrester-wave-tm-text-mining-and-analytics-platforms-q2-2024-res181000
    why_it_fits: "VoC-Suite mit DACH-Referenzen in Banking/Insurance/Retail. Themen- und Effort-Modelle plus Trend-Alerting. Forrester Wave Text Mining and Analytics Platforms Q2 2024 nennt Medallia als Leader mit Bestwerten in 15 Kriterien inkl. Conversation Intelligence. Sinnvoll wenn die VoC-Initiative im breiteren XM-Programm verankert ist. Einschränkung: Eigenstaendige reine Konversations-Use-Cases brauchen Customizing."
    enterprise_readiness: enterprise_ready
  - id: nice-com-products-customer-engagement-enlighten-ai
    fit: good_fit
    sources:
      - id: nice-com-products-customer-engagement-enlighten-ai
      - id: cmswire-com-the-wire-nice-named-a-leader-in-the-2024-gartner-magic-quadrant-for-contact-center-as-a-service-for-10th-year
      - id: gartner-com-reviews-market-contact-center-workforce-engagement-management-compare-nice-vs-verint
    why_it_fits: "Marktfuehrer Speech Analytics in Enterprise und DACH-Finance. Vortrainierte CX-Modelle fuer Themen, Treiber, Compliance ueber 100% der Interaktionen. CXone-Stack mit EU-Region. NICE wurde 2024 zum 10. Mal in Folge Leader im Gartner Magic Quadrant for CCaaS und ist bei Gartner Peer Insights als Speech-Analytics-Anbieter gelistet. Einschränkung: Sinnvoll vorrangig fuer NICE-CXone-Kunden."
    enterprise_readiness: enterprise_ready
  - id: qualtrics-com-support-xm-discover-text-analytics-ai-assisted-text-analytics-in-xm-discover
    fit: good_fit
    sources:
      - id: qualtrics-com-platform-xm-discover
      - id: cxtoday-com-customer-analytics-intelligence-gartner-magic-quadrant-voc-platforms-2026
    why_it_fits: "Reifste VoC-Plattform fuer Enterprise-Konversations-Korpora. Kategoriemodell, Effort-/Sentiment-Scoring, Trend-Alerts und DACH-Referenzen. EU-Datenresidenz konfigurierbar, SOC2/ISO27001 vorhanden. Qualtrics ist 2026 erneut Leader im Gartner Magic Quadrant for VoC Platforms (per CX Today). Fuer mittlere bis grosse Service-Organisationen mit gemischten Quellen (Voice, Chat, Ticket, Survey) der Default-Kandidat. Einschränkung: Lizenzkosten im Enterprise-Tier sehr hoch."
    enterprise_readiness: enterprise_ready
  - id: getthematic-com
    fit: conditional
    sources:
      - id: getthematic-com
      - id: g2-com-compare-sentisum-vs-thematic
    why_it_fits: "VoC-Pure-Play mit erklaerbaren Themenbaeumen; verarbeitet Tickets, Surveys, Reviews, Chats und Transkripte. Stark fuer Outside-In-Sicht ohne grossen Stack. G2 High Performer in Feedback-Analytics und Text-Analysis. Kein eigener Speech-Layer — Transkripte muessen extern geliefert werden. Downgrade auf conditional, weil keine Platzierung im Gartner MQ VoC oder Forrester Wave Text Analytics und keine substanziellen DACH-Enterprise-Referenzen nachweisbar; passt am ehesten fuer mittelgrosse Teams mit reifer Transkript-Pipeline. Einschränkung: Kein eigener Voice-Stack, kleinerer Anbieter ohne EU-Hosting-Klarheit."
    enterprise_readiness: team_ready
  - id: verint-com-our-platform-speech-and-text-analytics
    fit: good_fit
    sources:
      - id: verint-com-our-offerings-speech-analytics
      - id: forrester-com-report-the-forrester-wave-tm-people-oriented-text-analytics-platforms-q2-2022-res176358
      - id: gartner-com-reviews-market-speech-analytics-platforms
    why_it_fits: "Etablierter Marktfuehrer mit reifen DACH-Implementierungen, on-prem oder Cloud. Topic Discovery, Trend-Reports, Beschwerde-Cluster, Root-Cause-Drilldowns; geeignet fuer regulierte Branchen. Verint wurde im Forrester Wave People-Oriented Text Analytics Q2 2022 unter den 13 wichtigsten Anbietern gewertet und ist bei Gartner Peer Insights als Speech-Analytics-Plattform gelistet. Einschränkung: Klassischer Stack, AI/LLM-Modernisierung erst seit Open CCaaS."
    enterprise_readiness: enterprise_ready
start_here: Piloten starten am einfachsten mit dem Analytics-Modul der vorhandenen CCaaS-Plattform — NICE Enlighten AI für CXone-Bestände, AWS Contact Lens für Amazon-Connect-Umgebungen — auf einem klar abgegrenzten Quartalsdatensatz. Vor der Auswertung eine Pseudonymisierungspipeline einrichten und die Top-5-Themen direkt mit dem Produktteam validieren.
caveats: Voice-Korpora unterliegen DSGVO-Einwilligungs- und Löschpflichten; bei Gesundheits- oder Finanzdaten greift Art. 9, sodass Pseudonymisierung vor der Analyse einzurichten ist. Alle drei Ankerwerkzeuge setzen die jeweils eigene CCaaS-Plattform voraus — wer stack-übergreifend analysieren will, braucht eine eigenständige VoC-Plattform.
sources: []
---
