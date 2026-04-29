---
stage: hr-onboarding
order: 18
roles:
  - hr-recruiting
title: Onboarding-FAQ-Bot mit RAG
goal_label: Fragen neuer Mitarbeiter in den ersten 90 Tagen automatisiert beantworten
suitability: good_fit
rationale: Der auf die ersten 90 Tage eingegrenzte Onboarding-Scope hält das Source-Set kuratierbar und die Risikofläche deutlich kleiner als beim generischen HR-Self-Service. Haufe HR-Chatbot liefert für DACH 350 rechtssicher geprüfte Antworten mit AI-Act-Klassifikation; Microsoft Copilot Studio ergänzt mit nativem RAG über SharePoint und EU Data Boundary für M365-Umgebungen.
tools:
  - id: glean-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Beste Cross-Source-Suche mit Permissions-Mirroring ueber Confluence/SharePoint/Slack/Drive, Onboarding ist Glean-Vendor-Sweet-Spot. EU-Hosting via Hyperscaler verfuegbar; Pro-Sitz-Pricing macht reinen Onboarding-Scope teuer - lohnt sich, wenn Glean breit ausgerollt wird.
    caveats:
      - Pro-Sitz-Lizenz - fuer reines Onboarding-FAQ teils overkill
      - Topic-Detection und Eskalation auf Verguetung/Vertrag selbst bauen
      - "US-Vendor: CLOUD-Act-Restrisiko trotz EU-Region, im DPIA adressieren"
      - EU-Hosting via Hyperscaler verfuegbar, aber kein eigenes deutsches Rechenzentrum - DACH-Souveraenitaets-Anforderungen kritisch pruefen
      - Eskalation auf Verguetungs-/Vertrags-Topics nicht out-of-the-box - eigene Actions/Topic-Detection ergaenzen
      - DACH-Datenresidenz nur ueber EU-Region des gewaehlten Hyperscalers
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Beste Cross-Source-Suche im Enterprise
      complaints:
        - Eher Such-Layer, automatisiert Workflows nicht selbst
    sources:
      - id: glean-com-perspectives-how-ai-powered-search-improves-onboarding-for-new-employees
      - id: viewpointanalysis-com-post-who-are-glean
  - id: aleph-alpha-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Souveraener DACH-Stack mit BA-Referenz, on-prem/EU-Cloud, EU-AI-Act-Auditierbarkeit. Fuer reine Onboarding-FAQ ueberdimensioniert - Plattform statt fertiger HR-Bot. Erste Wahl fuer regulierte Industrie / oeffentliche Hand mit harter Souveraenitaetsanforderung; sonst zu schwergewichtig.
    caveats:
      - Plattform, kein fertiger HR-Bot - Implementierungspartner noetig (Materna, Capgemini)
      - Aleph-Alpha-Pivot 2024 (weg von Frontier-Foundation-Modellen hin zu PhariaAI-Stack) - Strategie-Risiko pruefen
      - Implementierungspartner zwingend - Total Cost deutlich hoeher als out-of-the-box-Loesungen
      - Modellqualitaet bei deutschen HR-Spezialfragen separat benchmarken
      - Schmalere Out-of-the-Box-HR-Funktionen als Microsoft/ServiceNow
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Datensouveraenitaet, EU-Hosting
      complaints:
        - Modellqualitaet hinkt Frontier-Modellen hinterher
    sources:
      - id: cio-de-article-3701792-ki-basiertes-wissensmanagement-fuer-die-bundesagentur-fuer-arbeit-html
      - id: aleph-alpha-com-de-unternehmen
  - id: cognigy-com-products-knowledge-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Deutscher Conversational-AI-Anbieter mit On-Prem-/EU-Option und Aleph-Alpha-Anbindung - sehr passend fuer souveraene DACH-Setups mit Multichannel-Anspruch (Intranet, Teams, Telefon). Fuer reine Onboarding-FAQ ueberdimensioniert; spielt Staerken erst bei Voice/Chat-breiten Cases aus.
    caveats:
      - Hauptmarkt Voice-Bots in Customer Service - HR-Templates fehlen, Implementierungspartner noetig
      - Knowledge AI ist Add-on, nicht Basis - Lizenz-Total-Cost separat verhandeln
      - Mehr Conversational-Plattform als HR-Spezialprodukt
      - Implementierung professioneller Service noetig
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: docs-cognigy-com-ai-empower-knowledge-ai-overview
      - id: cognigy-com-product-updates-v4-65
  - id: getmaia-ai-en-teams-hr
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: DACH-Industrie-Fokus, deutsche Server, GDPR-konform mit dedizierter HR-Team-Variante - passt zum kuratierten Onboarding-Quellen-Set. Pilot-Kandidat fuer DACH-Mittelstand; Konzern-Skalierung extern verifizieren.
    caveats:
      - Kleiner Vendor, Enterprise-Referenzen begrenzt
      - Eskalationsmechanik vertraglich/funktional bestaetigen
      - Marketing-getriebene Quellenlage - Enterprise-Referenzen extern verifizieren
      - Eskalations- und Audit-Logging nicht oeffentlich dokumentiert
      - Vendor-Skalierbarkeit auf 5000+ Mitarbeitende unklar
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - GDPR-compliant with German-hosted servers
        - Specifically designed for industrial/manufacturing knowledge needs
        - High user ratings on ease of use and setup
        - Trusted by large industrial firms; proven in production
      complaints:
        - Small vendor; limited enterprise-scale references
        - Eskalation mechanics for HR complex cases require verification
        - Marketing-driven sources; almost no independent reviews online
        - Enterprise scalability and roadmap unclear
    sources:
      - id: getmaia-ai-en-teams-hr
  - id: squirro-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Schweizer Insight-Engine mit Banken-/Versicherungs-Track-Record und EU-/Schweiz-Hosting - Alternative zu Glean fuer DACH-Konzerne mit Souveraenitaets-Anspruch. Fuer reine Onboarding-FAQ ueberdimensioniert.
    caveats:
      - Implementierungs-Service-getrieben - hohe Total-Cost-of-Ownership
      - HR-spezifische Templates fehlen, Onboarding-Bot ist nicht das Vendor-Sweet-Spot
      - Quellenlage zum konkreten Onboarding-Fit duenner als bei Glean/Moveworks
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Transforms unstructured data into actionable insights reliably
        - Easy integration with existing enterprise systems
        - Customizable dashboards for knowledge presentation
        - Trusted by central banks (ECB); enterprise-grade ACLs
      complaints:
        - Initial configuration requires time; steep learning curve
        - Documentation thin for advanced query configuration
        - Service-driven; implementation requires professional engagement
        - Pricing lack of transparency; enterprise contracts opaque
    sources:
      - id: wiki-charleschen-ai-ai-processed-wiki-llm-core-rag-raw-web-rag-onboarding-knowledge-preservation-2026
  - id: workday-com-content-dam-web-en-us-documents-other-wd-assistant-pdf
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Sinnvoll nur, wenn Workday HCM ohnehin lebt - dann faktisch Pflicht-Auswertung fuer Daten-getriebene Onboarding-FAQs. Schwach fuer freie Welcome-Pack-/Wiki-Quellen, weil Hauptkontext aus Workday selbst kommt.
    caveats:
      - Antwortqualitaet ausserhalb Workday-Daten begrenzt
      - Eskalationsregel fuer Verguetung/Vertrag besonders kritisch - Workday haelt genau diese Daten
      - Workday-LLM-Sub-Prozessor (oft AWS US) muessen mit DACH-Datenresidenz-Anforderungen abgeglichen werden
      - Setzt Workday-Lizenz voraus
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - AI-driven search adoption more than doubles vs. traditional search
        - Natural language interface reduces friction vs. keyword search
        - Native Workday data integration eliminates external API calls
      complaints:
        - System outages and slowness during month-end/payroll runs
        - Implementation complex and time-consuming
        - Answers limited to Workday data (weak for wiki/handbook content)
        - Per-user pricing model surprisingly expensive in practice
    sources:
      - id: workday-com-content-dam-web-en-us-documents-other-wd-assistant-pdf
  - id: splitbot-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Deutscher Anbieter mit eigenen Rechenzentren in Deutschland, der explizit den Onboarding-FAQ-Bot mit DSGVO-Hosting bewirbt. Likely missed by market scan because Splitbot ist ein DACH-Nischenanbieter ohne internationales Marketing-Echo.
    caveats:
      - Sehr kleiner Vendor - Survival-Risk in DD-Phase pruefen
      - Keine oeffentlich auffindbaren ISO27001/SOC2-Zertifikate
      - Enterprise-Referenzlogos kaum vorhanden
    sources:
      - id: splitbot-ai-chatbot-fuer-das-onboarding-neuer-mitarbeiterinnen-und-mitarbeiter
  - id: agent-schomerus-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Deutscher RAG-Anbieter auf Hetzner-Servern mit Presidio-PII-Filter, BetrVG-Dokumentationspaket, AVV nach Art. 28 DSGVO und optionalem Tresor-Modus ohne Internet. Likely missed by market scan because der Vendor positioniert sich als Mittelstands-Beratung mit Produkt, nicht als reine Software-Plattform.
    caveats:
      - Kleiner Anbieter - Enterprise-Skalierbarkeit unklar
      - Modell-Layer und Performance vs. Microsoft/Glean separat benchmarken
      - Marketing-getriebene Quellenlage; unabhaengige Reviews und Referenzen einfordern
    sources:
      - id: agent-schomerus-de
  - id: azure-microsoft-com-en-us-products-ai-services-openai-service
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Pro-Code-Pfad fuer Teams, die Onboarding-Quellen feiner kuratieren wollen: Entra-RBAC, Private Endpoints, EU-Region-Pinning, Security-Filter pro Dokument. Microsoft draengt aktiv auf Foundry Agent Service - Roadmap-Risiko fuer 'On Your Data'-Endpoints einkalkulieren."
    caveats:
      - Mehr Engineering-Aufwand als Copilot Studio
      - On-Your-Data-API ist 'classic' - mittelfristig Migration auf Foundry Agent Service wahrscheinlich
      - Audit-/Eskalationsschicht muss vollstaendig selbst gebaut werden - kein BetrVG-Ready-Paket out-of-the-box
      - Eskalations- und Audit-Logging muessen selbst gebaut werden
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: learn-microsoft-com-en-us-azure-foundry-classic-openai-concepts-use-your-data
      - id: learn-microsoft-com-en-us-azure-ai-foundry-agents-how-to-tools-sharepoint
      - id: comparethecloud-net-articles-build-rag-chatbot-azure-uk-south-company-documents-without-data-science-team
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "DACH-Idealkonfiguration: 350 redaktionell rechtssicher gepruefte Antworten, Azure-EU-Hosting, anonyme Nutzung mit Betriebsrats-Zustimmung, AI-Act 'begrenztes Risiko' bereits klassifiziert. Reduziert Halluzinationsrisiko bei Verguetungs-/Vertragsfragen genau dort, wo das Use-Case-Briefing harte Eskalation fordert."
    caveats:
      - Onboarding-Welcome-Pack-Inhalte muessen separat eingepflegt werden - Haufe-Antworten decken eher Standard-HR-Recht
      - Tarifvertraege/Betriebsvereinbarungen muessen separat eingebunden werden
      - RAG-Tiefe (Konnektoren, eigene Quellen) geringer als bei Microsoft/Glean
      - Sub-Prozessor Azure - CLOUD-Act-Restrisiko trotz EU-Region
      - Eher Mittelstand-Positionierung
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - "Unabhaengiger Redaktionstest 'Sehr gut' (PCgo/PC Magazin Juni 2025): schnelle Einfuehrung, 350 rechtssichere Antworten, Teams-Integration bestaetigt"
      complaints:
        - Antworten teils stark an Haufe-Inhalten gebunden
    sources:
      - id: haufe-de-chatbot
      - id: shop-haufe-de-copilot-hr
      - id: haufe-de-hr-magazin-chatbots-und-datenschutz
      - id: connect-de-testbericht-haufe-hr-assistant-test-hr-chatbot-review-3209612-html
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Bei vorhandenem M365-Stack die offensichtliche Wahl: native RAG ueber SharePoint/Graph/Dataverse, EU Data Boundary, Purview-Audit, Employee-Self-Service-Agent als Onboarding-Template. Eskalations-Topic-Routing fuer Verguetung/Vertrag laesst sich mit Topic-Triggern und Power-Automate-Handover sauber bauen."
    caveats:
      - Pro-Message-Pricing kann bei breitem Rollout ueberraschen - Assist-Unit-Verbrauch vor Vertragsabschluss modellieren
      - Antwortqualitaet steht und faellt mit SharePoint-Hygiene und Permissions-Modell
      - Betriebsrats-Mitbestimmung nach BetrVG § 87 Abs. 1 Nr. 6 zwingend - DPIA + Betriebsvereinbarung einplanen
      - EU Data Boundary deckt nicht alle Telemetrie-/Diagnose-Daten ab - separat im DPIA dokumentieren
      - EU-AI-Act-Klassifikation (limitiertes Risiko) muss inkl. Transparenzpflicht gegenueber neuen Mitarbeitenden umgesetzt werden
      - Eskalations-Routing fuer Verguetung/Vertrag muss explizit gebaut werden
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Schnelles Time-to-Value bei vorhandener M365-Basis
        - "Unabhaengiges Review 4/5 (Major Matters, Mrz 2026): 60% HR-Query-Deflection intern bei Microsoft; tiefste Compliance-Stack im Vergleich"
      complaints:
        - Indexing/Permission-Edge-Cases bei SharePoint
        - "Pricing-Komplexitaet: mehrere Preismodelle erschweren TCO-Kalkulation"
    sources:
      - id: learn-microsoft-com-en-us-microsoft-copilot-studio-guidance-retrieval-augmented-generation
      - id: adoption-microsoft-com-en-us-scenario-library-human-resources-improve-onboarding-and-development-processes-copilot-studio
      - id: learn-microsoft-com-en-us-copilot-microsoft-365-employee-self-service-deployment-checklist
      - id: majormatters-co-p-microsoft-copilot-agent-platform-review
  - id: servicenow-com-products-now-assist-for-hr-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Wenn HRSD ohnehin lebt, ist Now Assist die natuerliche RAG-Schicht: AI Search + KB-Artikel im Employee Center, Virtual Agent fuer FAQs, Eskalation in HR-Cases mit RBAC und Audit-Trail. Lizenz-Schwelle (HR Pro Plus / Enterprise Plus) macht es zur Konzern- und gehobenen Mittelstandsoption."
    caveats:
      - Hohe Lizenz-Total-Cost (HR Pro Plus + Now Assist) - Assist-Unit-Verbrauch vorab modellieren
      - Reale Self-Service-Deflection 10-20% (nicht 40-60% wie marketed) - KB-Qualitaet ist der limitierende Faktor
      - Yokohama Patch 11+ oder Zurich Patch 5+ erforderlich - Upgrade-Aufwand einplanen
      - EU-Datacenter verfuegbar, aber LLM-Sub-Prozessor (Azure OpenAI) muss in DPIA dokumentiert werden
      - "ServiceNow-Akquisition von Moveworks: Ueberlappung mit Now Assist - Vendor-Strategie laufend pruefen"
      - Wert haengt stark an der Qualitaet der ServiceNow-KB - CMDB/KB-Hygiene vor Go-live pruefen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Tight integration mit HR Cases & Knowledge
        - Incident-Summarization und KB-Drafting production-ready laut StackScout-Review 2026
      complaints:
        - Trust-Aufbau bei Agents braucht Change-Management
        - Virtual-Agent-Deflection deutlich unter Marketing-Versprechen; CMDB-Debt macht Agentic-AI gefaehrlich
    sources:
      - id: servicenow-com-community-hrsd-articles-now-assist-for-hr-quick-start-guide-ta-p-3050741
      - id: servicenow-com-community-employee-center-articles-now-assist-for-employee-center-an-introductory-guide-ta-p-3477027
      - id: stackscout-co-blog-servicenow-ai-review-2026
  - id: ambersearch-de-use-cases-employee-onboarding
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: "Deutscher Enterprise-Search-Anbieter mit ISO 27001 (Vendor-Claim), EU-AI-Act-Positionierung, EU-Hosting und 70+ Konnektoren sowie dedizierter Onboarding-Use-Case-Seite. Passt technisch zum DACH-Mittelstand-Profil des Use Case. Keine unabhaengigen Reviews auffindbar (OMR: 0 Bewertungen, kein G2/Capterra-Coverage); Fruehphasen-Vendor (~36 Mitarbeitende, Seed April 2025) - Fit-Potenzial vorhanden, aber enterprise-Skalierung unbestaetigt."
    caveats:
      - Keine unabhaengigen Reviews auf OMR/G2/Capterra - eigene Referenzpruefung zwingend vor Shortlist
      - "Fruehphasen-Vendor: ~36 Mitarbeitende, Seed Round April 2025 - Survival-Risk in DD-Phase beachten"
      - Enterprise-Skalierbarkeit und Konzern-Track-Record nicht oeffentlich belegbar
      - RAG-Tiefe und Eskalations-Topic-Detection im DD-Workshop verifizieren
      - Modell-Layer-Strategie (Frontier vs. EU-Modelle) im Detail klaeren
      - ISO 27001 laut Vendor; SOC2-Zertifikat oeffentlich nicht unabhaengig verifizierbar
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: ambersearch-de-use-cases-employee-onboarding
      - id: ambersearch-de-product-amberai
start_here: Im M365-Stack mit Microsoft Copilot Studio beginnen — oder für DACH-Mittelstand ohne M365-Basis mit Haufe HR-Chatbot — und den Bot ausschließlich auf kuratiertes Welcome-Pack plus Onboarding-Wiki aufsetzen. Harte Eskalation für Vergütungs- und Vertragsthemen vor dem ersten Pilot-Rollout einbauen und den Assist-Unit-Verbrauch vorab modellieren.
caveats: Halluzinationen bei Lohn- und Vertragsfragen sind nicht tolerierbar — Topic-Detection mit hartem Eskalations-Routing auf den HR-Fachbereich muss vor Go-live stehen. DPIA, Betriebsvereinbarung nach BetrVG § 87 Abs. 1 Nr. 6 und ein dokumentiertes Logging-/Retention-Konzept sind für alle Ankertools obligatorisch.
sources: []
---
