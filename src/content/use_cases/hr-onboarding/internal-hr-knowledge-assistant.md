---
stage: hr-onboarding
order: 8
roles:
  - hr-recruiting
title: Internes HR-Self-Service-Q&A
goal_label: Routine-HR-Fragen per Chat beantworten
suitability: conditional
rationale: Drei enterprise-reife Stack-Optionen — ServiceNow Now Assist for HRSD, Microsoft Copilot Studio (ESS-Agent) und Atlassian Rovo — decken den Anwendungsfall heute nativ ab und bringen Audit-Logging sowie EU-Datenresidenz mit. Der Implementierungsaufwand liegt damit deutlich unter Custom-RAG-Lösungen, sofern der Ist-Stack passt.
tools:
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Im Atlassian-Stack der direkte Pfad: Rovo Chat als HR-Q&A-Layer auf Confluence-HR-Spaces, Rovo Service GA April 2026 mit konkretem HR-Onboarding-Use-Case und agentic Actions. EU-Datenresidenz buchbar, Atlassian betreibt selbst NORA als interner Onboarding-Agent."
    caveats:
      - Premium/Enterprise-Cloud-Edition nötig — Datacenter-Kunden bleiben aussen vor
      - Rovo nutzt Azure OpenAI / Anthropic im Hintergrund — Subprocessor-Liste pro Region prüfen
      - Agentic Actions sind technische Einrichtung im Sinne §87 BetrVG — Betriebsvereinbarung zwingend
      - Stark Atlassian-zentrisch; HR ohne Confluence/JSM kaum sinnvoll
      - Datenresidenz EU buchbar, aber agentic Actions (Okta etc.) brauchen klare Mitbestimmungs-Regelung
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: community-atlassian-com-forums-jsm-news-discussions-articles-rovo-service-is-now-ga-ba-p-3214779
      - id: xalt-de-en-beschleunigtes-onboarding-mit-ki-und-atlassian-rovo
      - id: community-atlassian-com-forums-atlassian-ai-rovo-articles-how-to-create-a-high-impact-rovo-agent-lessons-from-nora-ba-p-3157915
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Niedrigster Reibungspfad bei M365/Entra-ID-Bestand: ESS-Solution-Pack mit SharePoint-ACL-Vererbung, Azure-EU-Region, DLP, Power-Platform-ALM. Microsoft selbst betreibt einen ESS-Agent gegen HRWeb-SharePoint (Customer Zero). Risiko bleibt: Antwortqualität korreliert direkt mit SharePoint-Policy-Hygiene — alte Policies = falsche Antworten."
    caveats:
      - EU Data Boundary deckt nicht alle GenAI-Pfade — pro Feature prüfen
      - Message-Capacity-Pricing intransparent — TCO mit realistischem Volumen modellieren
      - "Halluzinationen bei Policy-Fragen: Quellen-Whitelisting + Eskalations-Pfad zu HR-Mensch zwingend"
      - Antwortqualität korreliert direkt mit SharePoint-Hygiene (veraltete Policies = falsche Antworten)
      - Lizenz- und Message-Capacity-Modell (Copilot Studio Messages) ist intransparent
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Schnell live in Teams ohne Custom-Middleware
        - ACL-Vererbung aus SharePoint reduziert Permissions-Risiko
      complaints:
        - Konfusion über Message-/Lizenz-Pricing
        - Antwortqualität bricht bei unsauberen SharePoint-Quellen
    sources:
      - id: microsoft-com-en-us-microsoft-copilot-blog-copilot-studio-how-to-deploy-transformational-enterprise-wide-agents-microsoft-as-customer-zero
      - id: microsoft-github-io-microsoft-ai-decision-framework-docs-scenarios
      - id: techcommunity-microsoft-com-blog-healthcareandlifesciencesblog-building-an-hr-policy-agent-with-sharepoint-and-servicenow-graph-connector-in-co-4386921
      - id: reddit-com-r-automation-comments-1rf7o8d-every-ai-chatbot-ive-tried-in-the-last-year-has
  - id: workday-com-en-us-products-ai-overview-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Default-Pfad für Workday-HCM-Bestand mit eingebauten Audit-Logs und ACL aus dem HCM. Setup 4-8 Wochen — kein Quick-Win. Wertbeitrag steht und fällt mit Workday als primärem HRIS.
    caveats:
      - Workday-EU-Datacenter (Amsterdam/Dublin) verfügbar, aber AI-Inferenz kann je nach Modell US-Pfad nutzen — Subprocessor-Liste prüfen
      - Workday-AI-Klausel zu Trainings-Opt-Out und Datennutzung explizit verhandeln
      - Lizenzierung gebündelt mit Workday-Enterprise-Vertrag, kaum SMB-tauglich
      - Setup 4-8 Wochen — passt nur in mittelfristige Roadmap, nicht für Quick-Win-Pilot
      - Wertbeitrag stark abhängig davon, ob Workday das primäre HRIS ist
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: docs-glean-com-connectors-native-workday
      - id: thenontechai-com-leena-ai-vs-workday-ai-agents-best-hr-chatbot-2026
  - id: glean-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Permission-aware Enterprise-Search löst das HR-ACL-Problem (Manager- vs. Mitarbeiter-Inhalte). Kein HR-Workflow-Layer — sinnvoll als ergänzende Search-Schicht über verstreute HR-Quellen (Confluence, SharePoint, Workday Help), nicht als Ersatz für HRSD-Bot.
    caveats:
      - Pro-Mitarbeiter-Pricing skaliert teuer; ROI für reinen HR-Q&A-Use-Case selten positiv ohne breitere Search-Strategie
      - DACH-Sales/Support ist begrenzt; deutsche Sprachqualität vor Rollout testen
      - "ACL-Sync-Latenz prüfen: Wenn Mitarbeiter-Permissions sich ändern (Wechsel, Austritt), muss Index zeitnah folgen"
      - Kein HR-natives Workflow-Layer (kein PTO-Antrag, keine Case-Eskalation)
      - EU-Datenresidenz vorhanden, aber Setup-Aufwand für DSGVO-Logging-Konzept bleibt beim Kunden
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Permission-aware search avoids exposing confidential HR data
        - Realtime ACL sync ensures policy updates reflect in search results
        - HR agents save 60-90 min per run; high adoption (96.8% in pilot)
      complaints:
        - Not a dedicated HR tool; lacks native workflow/case execution
        - Licensing scales with headcount; overkill for pure FAQ use case
        - Setup requires careful DSGVO logging configuration; not turnkey
    sources:
      - id: glean-com-perspectives-how-ai-powered-search-improves-onboarding-for-new-employees
      - id: docs-glean-com-connectors-native-workday
  - id: ibm-com-products-watsonx-assistant
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: IBM Cloud Frankfurt + Granite-LLM-Option ist eine der saubersten Compliance-Stories für regulierte DACH-Konzerne. Build-Plattform mit RAG/Granite — kein OOTB-HR-Bot. Sinnvoll, wenn Modell- und Prompt-Kontrolle sowie BetrVG-/AI-Act-Dokumentationspflicht im Vordergrund stehen.
    caveats:
      - Implementierungs-/Beratungs-TCO substantiell; selten <6 Monate bis Produktion
      - Granite-LLM in deutscher HR-Domäne weniger erprobt als GPT-/Claude-basierte Stacks — Antwortqualität testen
      - HR-spezifische Customer-Stories rar — Referenzkunden direkt anfragen
      - Eher Build- als Buy-Option — höherer Implementierungsaufwand
      - Kein vorgefertigter HR-Content; KB- und Intent-Pflege liegt beim Kunden
    sources:
      - id: ibm-com-products-watsonx-assistant
  - id: kore-ai-ai-for-work-ai-for-hr
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Hybrid aus deterministischen Flows (für regulierte Schritte) und agentischen Antworten passt zur DSGVO/BetrVG-Anforderung, kritische Schritte dokumentiert deterministisch zu halten. Build-Plattform mit Workday/ADP/UKG-Integrationen — höherer Implementierungsaufwand als OOTB-Pure-Plays.
    caveats:
      - Implementierungspartner mit DACH-Footprint nötig — nicht jeder Kore.ai-Partner kennt Mitbestimmungs-Setup
      - EU-Hosting verfügbar, aber GenAI-Inferenz je nach LLM-Wahl (OpenAI/Anthropic/eigene) extern
      - TCO inklusive Implementation und Maintenance gegen OOTB-HR-Bots gegenrechnen
      - Eher Plattform als Out-of-the-box-HR-Bot — Implementierungsaufwand höher als bei Pure-Plays
      - Mindshare in HR-Segment niedriger als Leena/Moveworks
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Excellent customer success team; responsive to enhancement requests
        - Achieves 31% HR ticket reduction and 60% full-resolution rate
        - Smooth implementation with strong hypercare/training
        - Works across Teams, mobile, and portal simultaneously
      complaints:
        - Deployment takes months; not suitable for fast time-to-value needs
        - Analytics not robust; difficult to export/filter by organization
        - Latency 800-1000ms; occasional delays in third-party integrations
        - Design focused on Fortune 2000; SMB deployments move slowly
    sources:
      - id: kore-ai-ai-for-work-ai-for-hr
  - id: moveworks-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Compliance-Setup ist solide (ISO 27001/27017/27018/27701, SOC 2 Type 2, CSA STAR L2, EU-AWS-Region). Funktional weiterhin Marktveteran für Tier-1-Deflection. Roadmap-Risiko nach ServiceNow-Akquisition: Net-New-Verträge in 2026 wandern auf Now-Assist-Stack."
    caveats:
      - Subprocessor-Liste enthält Google LLC in US — Schrems-II-Bewertung im DPIA dokumentieren
      - Median-Spend ~130k$/Jahr; ROI gegen Tier-1-HR-Ticketvolumen kritisch prüfen
      - Bei Greenfield-Auswahl in 2026 eher Now Assist als Stand-alone-Moveworks evaluieren
      - "Akquisition durch ServiceNow: Roadmap-Integration noch in Bewegung — Net-New-Verträge vermutlich auf Now-Assist-Stack steuern"
      - Mindshare laut PeerSpot von 50% auf 28.8% YoY gefallen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Strong NLU handles complex policy questions and edge cases
        - Enterprise-grade deflection for high-volume ticket environments
      complaints:
        - Intermittent response delays; sometimes takes several minutes
        - Content ingestion frequency too slow (4h ServiceNow, 12h permissions)
        - "Compliance risk: FMLA/leave questions lack proactive HR notification"
        - Analytics require manual org filtering; painful for large orgs
    sources:
      - id: cbinsights-com-compare-espressive-vs-moveworks
      - id: peerspot-com-products-comparisons-leena-ai-vs-moveworks
      - id: moveworks-com-security
      - id: docs-moveworks-com-service-management-security-moveworks-subprocessors
  - id: botfriends-de-en
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Würzburg-basierter Conversational-AI-Vendor mit fertigen Personio- und SAP-SuccessFactors-Integrationen für HR-Use-Cases (Urlaub, Onboarding, Spesen). Likely missed by market scan because BOTfriends ist ein DACH-Mid-Market-Player ohne grosse G2-/PeerSpot-Präsenz und positioniert sich generisch als Conversational-AI, nicht spezifisch als 'HR-Chatbot'.
    caveats:
      - Mid-Market-Vendor — Konzern-Skalierung und Roadmap-Risiko prüfen
      - Wenige öffentliche Enterprise-Customer-Stories ausserhalb Vendor-Material
      - EU-Hosting muss explizit verhandelt/dokumentiert werden
    sources:
      - id: botfriends-de-en-product-integrations-personio
      - id: botfriends-de-en-product-integrations-sap-success-factors
  - id: cognigy-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Düsseldorfer Conversational-AI-Plattform mit BSI-C5-Audit und AIC4-Einstufung über Open Telekom Cloud — eine der wenigen Enterprise-Plattformen mit BSI-Zertifizierung. Build-Plattform für regulierte HR-Bots in Banken, Versicherungen, ÖV. Likely missed by market scan because Cognigy positioniert sich stark im CX/Contact-Center, nicht als HR-Bot — und tauchte daher in capability-only-HR-Suchen nicht auf, obwohl die DACH-Compliance-Story für regulierte HR-Use-Cases die härteste im Set ist.
    caveats:
      - Plattform, kein OOTB-HR-Bot — Implementierungspartner und HR-Content-Pack nötig
      - Fokus historisch CX/Contact-Center; HR-Customer-Stories öffentlich rar
      - BSI-C5-Variante setzt Hosting in Open Telekom Cloud voraus — andere Setups nicht zwingend C5-konform
    sources:
      - id: cognigy-com-de-blog-bsic5-sicherheit-und-compliance
      - id: open-telekom-cloud-com-de-blog-partner-cognigy
  - id: personio-de-conversations
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Default für Personio-HRIS-Bestand (KMU/Mittelstand DACH) mit DACH-AVV-Setup, deutschsprachigem Support und Wissensquellen aus Confluence/Notion/SharePoint. Kanal Slack/Teams/Mail. Funktional schmal — kein agentischer HRIS-Schreibzugriff über Q&A hinaus.
    caveats:
      - Sinnvoll praktisch nur, wenn Personio bereits HRIS ist
      - Funktionsumfang gegen Enterprise-Pure-Plays (Leena/Moveworks) deutlich schmaler
      - BetrVG-Mitbestimmung gilt auch hier — Conversation-Logs sind objektiv überwachungsgeeignet
    sources:
      - id: personio-de-conversations
  - id: haufe-de-hr-chatbot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Beste DACH-Compliance-Story im Set: Hosting in Deutschland, eingebettetes Arbeitsrecht-Fachwissen aus Haufe, deutschsprachige Kundenreferenzen mit Volumenangaben (Dussmann, Stiftung Liebenau, Ratiodata). 27 Sprachen, MS-Teams-Integration in Stunden, QR-Code für gewerbliche Mitarbeitende ohne Endgerät — passt deutsche Industrie-/Pflege-Realität."
    caveats:
      - Funktionstiefe (agentische Aktionen, HRIS-Schreibzugriff) geringer als Workday/ServiceNow
      - Welche Foundation-Models genutzt werden (GPT-4? eigenes?) im AVV explizit klären
      - Skalierungsgrenzen für Konzerne >5000 MA nicht öffentlich dokumentiert; Referenzkunden direkt sprechen
      - Stark deutschsprachig geprägt — internationale Konzerne nur bedingt passend
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - "Rechtssicher: 350+ legally vetted answers updated daily by experts"
        - Deploys in days; integrates Teams/Slack/Intranet seamlessly
        - Reduces HR hotline by 30 calls/week; mobile-friendly UI
        - "Highly customizable: add Tarifverträge/Betriebsvereinbarungen"
      complaints:
        - Limited agentische Fähigkeiten; no HRIS write-back capability
        - Deutsch-zentrisch; less suitable for international org structures
        - Few independent reviews; mostly vendor documentation available
    sources:
      - id: haufe-de-hr-magazin-mitarbeiter-chatbots-der-schlussel-zu-effizientem-hr-self-service
      - id: haufe-de-hr
      - id: connect-de-testbericht-haufe-hr-assistant-test-hr-chatbot-review-3209612-html
  - id: sap-com-products-hcm-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Default für SuccessFactors-Bestand mit konversationellem Copilot über drei Patterns (Navigational, Transactional, Informational). HR Policy FAQ ist seit 2H 2024 in der neuen Conversational Experience live. EU-Datacenter buchbar (nicht überall garantiert). Joule-Lizenz separat — TCO einrechnen. Josh Bersin (unabhängig) bestätigt SAP als Top-Performer bei HCM-Funktionsumfang und KI-Architektur; Joule deckt 80% der Kernfunktionen ab.
    caveats:
      - Joule-Inferenz historisch via Azure OpenAI / SAP AI Core — Subprocessor-Liste und EU-Region explizit im AVV festhalten
      - Datacenter-Verfügbarkeit pro Region prüfen (EU-Hosting nicht überall garantiert)
      - Setup verlangt BTP Global Account, Cloud Identity Services, Employee Central Quick Actions konfiguriert
      - Conversational Experience deutsch ist im Roll-out; Antwortqualität für komplexe Tarif-/BR-Themen evaluieren
      - Joule-Lizenz separat zur SF-Lizenz — Kosten in TCO einrechnen
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: userapps-support-sap-com-sap-support-knowledge-en-3390798
      - id: community-sap-com-t5-human-capital-management-blog-posts-by-sap-what-s-new-with-joule-in-the-upcoming-sap-successfactors-2h-2024-release-ba-p-13887113
      - id: joshbersin-com-2025-10-sap-jumps-ahead-in-ai-agents-with-joule-hcm-features-and-more
  - id: servicenow-com-products-hr-service-delivery-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Default für HRSD-Bestand: nativer Virtual Agent für Tier-1-Q&A, Now Assist Guardian für Audit/Anomaly-Logging (BetrVG-relevant), EU-Datacenter über DPA buchbar. Konsolidiert nach Moveworks-Akquisition die agentische Schicht in einem Stack. Preis nur über HR Pro Plus / Enterprise Plus; ROI gegen Tier-1-Volumen rechnen, nicht gegen 95%-Vendor-Claim. Gartner Peer Insights 4,3/5 aus 147 validierten Enterprise-Reviews bestätigt breite Adoption."
    caveats:
      - Pro-Plus-Aufpreis substantiell; TCO gegen reales Tier-1-HR-Ticketvolumen rechnen
      - GenAI-Inferenz-Pfad (Azure OpenAI / Now LLM) im AVV/DPIA dokumentieren
      - Mitbestimmung nach §87 Abs.1 Nr.6 BetrVG zwingend — Now-Assist-Logs sind objektiv überwachungsgeeignet
      - Erfordert HR Pro Plus / Enterprise Plus — nicht im Standard-HRSD enthalten
      - Wertversprechen abhängig von KB-Qualität; Hallu-Risiko bei Policy-Auskünften
      - EU-Daten-Residency und AI-Provider-Wahl müssen aktiv konfiguriert werden
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Nahtlos im bestehenden HRSD-Stack
        - Guardian-Logging hilft Compliance
      complaints:
        - Plugin- und RCA-Approval-Aufwand bei Setup
        - Skills aktivieren sich nicht zuverlässig
    sources:
      - id: servicenow-com-community-hrsd-articles-now-assist-for-hr-quick-start-guide-ta-p-3050741
      - id: servicenow-com-community-now-assist-articles-getting-now-assist-for-hr-service-delivery-hrsd-right-ta-p-3299243
      - id: servicenow-com-company-trust-privacy-gdpr-html
      - id: servicenow-com-community-hrsd-forum-now-assist-for-hrsd-m-p-3491108
      - id: servicenow-com-community-now-assist-forum-now-assist-case-resolution-notes-generation-hrsd-m-p-3245523
      - id: gartner-com-reviews-product-servicenow-now-assist
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Im Atlassian-Stack (Confluence + Jira Service Management) der direkte Pfad: Rovo Chat als HR-Q&A-Layer auf Confluence-HR-Spaces, Rovo Service ist seit April 2026 GA mit konkretem 'HR Onboarding Journey'-Use-Case und kann Schritte wie Okta-Group-Add ausführen. Atlassian betreibt selbst NORA als interner Onboarding-Agent; XALT zeigt DACH-Praxis (Urlaub/Zeiterfassung-Frage in Rovo Chat)."
    caveats:
      - Wertversprechen erfordert Premium/Enterprise-Cloud-Edition von JSM
      - Stark Atlassian-zentrisch; HR ohne Confluence/JSM kaum sinnvoll
      - Datenresidenz EU buchbar, aber agentic Actions (Okta etc.) brauchen klare Mitbestimmungs-Regelung
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - New hires get instant answers from Confluence without switching tools
        - Rovo Service GA includes HR onboarding journey automation
        - NORA case shows strong internal adoption at Atlassian itself
        - DACH practitioners confirm smooth integration with Confluence/Slack
      complaints:
        - Works best only if HR docs are well-organized in Confluence
        - Requires Premium/Enterprise JSM; not cost-effective for SMB
    sources:
      - id: xalt-de-en-beschleunigtes-onboarding-mit-ki-und-atlassian-rovo
      - id: community-atlassian-com-forums-atlassian-ai-rovo-articles-how-to-create-a-high-impact-rovo-agent-lessons-from-nora-ba-p-3157915
      - id: community-atlassian-com-forums-jsm-news-discussions-articles-rovo-service-is-now-ga-ba-p-3214779
start_here: Wer M365 nutzt, startet mit dem Copilot-Studio-ESS-Solution-Pack auf einer engen Pilotdomäne ('Urlaub & Abwesenheit'), misst die Antwort-Fehlerrate und bereitet die Betriebsvereinbarung parallel vor. Im ServiceNow-HRSD-Bestand ist Now Assist Virtual Agent für dieselbe Pilotdomäne der direkteste Einstieg — EU-Datacenter und Guardian-Logging von Beginn an aktiv setzen.
caveats: Conversation-Logs enthalten DSGVO-Art.-9-relevante Daten (Krankheit, Elternzeit, Konflikte) — ein Logging-Konzept mit kurzer Retention ist vor dem Go-live zwingend. BetrVG §87 Abs. 1 Nr. 6 löst Mitbestimmung aus, und Halluzinationen bei Policy-Auskünften erfordern einen konfigurierten Eskalations-Pfad zu HR-Mitarbeitenden.
sources: []
---
