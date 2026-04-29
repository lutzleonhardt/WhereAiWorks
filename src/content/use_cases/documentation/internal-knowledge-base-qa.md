---
stage: documentation
order: 4
roles:
  - software-engineer
title: Q&A auf interner Wissensbasis
goal_label: Engineer-Fragen über Confluence/Notion/Slack mit AI beantworten
suitability: conditional
rationale: Atlassian Rovo und Glean haben Cross-Korpus-Q&A über Confluence, Jira und Slack mit Real-Time-ACL-Sync industrialisiert und adressieren damit die zentrale Herausforderung heterogener Engineering-Wissenskorpora. Der Use Case ist reif genug für einen Piloten — scheitert aber regelmäßig daran, dass Berechtigungs-Mapping und Betriebsrats-Abstimmung als nachgelagerte Aufgabe behandelt werden.
tools:
  - id: support-atlassian-com-bitbucket-cloud-docs-use-ai-to-generate-pull-request-descriptions
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Im Atlassian-Cloud-Footprint der Default-Pfad: native Confluence-/Jira-Suche plus 50+ Drittsystem-Konnektoren, zweistufige Permission-Validierung, EU-Datenresidenz auf Premium. Für DACH-Konzerne mit Atlassian-Stack faktisch im Lizenzpaket enthalten — der TCO-Hebel gegenüber Glean ist erheblich."
    caveats:
      - Auto-Aktivierung 2026 ist Betriebsrats-/AI-Act-Fallstrick — Opt-out-BV vor Rollout zwingend
      - Drittsystem-Konnektoren weniger tief als Glean
      - Data-Center-Deprecation 2029 erzwingt Cloud-Migration — vielen DACH-Konzernen unangenehm
      - Enterprise-Plan für tiefere ACL/Audit nötig
      - Auto-Aktivierung kollidiert mit Mitbestimmung (§87 BetrVG, AI Act Transparency) — Opt-out auf Org-Ebene zwingend einplanen
      - Data-Center-Deprecation 2029 zwingt Migration in Cloud; viele DACH-Konzerne fahren noch DC mit Atlassian-Hosting in DE
      - Drittsystem-Konnektoren respektieren ACLs nur so gut wie Quellsystem-Mapping — Slack-/Drive-Permissions oft brüchig
      - Beste Ergebnisse nur im Atlassian-Cloud-Stack
      - Drittsystem-Connectoren weniger tief als bei Glean
      - Auto-Aktivierung kann Betriebsrats-Brennpunkt sein
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Stark im Atlassian-Stack, gut für Triage
        - CLI/IDE-Integration nützlich für Engineers
      complaints:
        - Hallucinations, wenn Daten messy sind
        - Aus-der-Box halbgar, braucht Prompt-Engineering
    sources:
      - id: atlassian-com-blog-atlassian-engineering-unraveling-rovo-search
      - id: atlassian-com-software-confluence-ai
      - id: reddit-com-r-atlassian-comments-1nxfjsu-anyone-here-tried-atlassians-new-ai-rovo-from
  - id: glean-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Funktional Marktreferenz für Cross-Korpus-Q&A mit Real-Time-ACL-Sync — adressiert exakt die Permission-Inheritance-Pain aus dem Briefing. In DACH trotz US-SaaS-Frage Pflicht-Eintrag im RFP, weil keine EU-Alternative die Kombination aus Konnektor-Breite, Suchqualität und Engineering-Praxis-Adoption (Databricks, Stripe) erreicht.
    caveats:
      - "Schrems-II-Risiko: Subprocessoren OpenAI/Anthropic, Index in US-Region — pro Datenkategorie zu prüfen"
      - Betriebsrats-Mitbestimmung wegen User-Activity-Telemetry (§87 BetrVG)
      - Hohe Lizenzkosten (~50 USD/User/Monat, 6-stellig p.a.) und harte Mindestabnahme
      - EU-Hosting-GA-Status pro Tenant verifizieren
      - Subprocessor-Liste enthält OpenAI/Anthropic — Schrems-II-Risiko-Assessment je Datenkategorie nötig
      - Indexierte Korpora liegen in US-Region (EU-Hosting laut Vendor-Roadmap, aber GA-Status je Tenant prüfen)
      - "Betriebsrat: Real-Time-ACL-Sync erzeugt User-Activity-Telemetry — Mitbestimmungspflichtig nach §87 BetrVG"
      - US-SaaS, AVV nötig — DACH-Hürde
      - Hohe Lizenzkosten (~$50/User/Monat, oft 6-stellig pro Jahr)
      - 25% Year-1-Churn laut G2-Daten
      - Stoppt bei Search; weniger stark bei Code-Reasoning
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Einfaches Setup, gute APIs
        - Beste Konnektor-Breite und Suchqualität
      complaints:
        - Sehr teuer, hohe Mindestabnahme
        - "Datenpolitik: Training-Bedenken"
        - UI verbesserungswürdig
    sources:
      - id: get-glean-com-product-all-knowledge
      - id: awesomeagents-ai-tools-best-ai-knowledge-management-tools-2026
      - id: youtube-com-watch-v-2oo0i4mqfvm
      - id: reddit-com-r-customersuccess-comments-1n5naa8-anyone-using-an-copilot-tool-like-glean-trying-to
      - id: qatalog-com-blog-post-glean-vs-microsoft-copilot
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Default in M365-zentrischen DACH-Konzernen: EU Data Boundary, Entra-ID-ACL-Inheritance, Retrieval API mit Permission-Trimming. Engineering-Doku in SharePoint/Teams direkt durchsuchbar, Microsoft-AVV/Auftragsverarbeitung etabliert. Schwäche: Nicht-MS-Quellen (Confluence, Slack, Drive) deutlich flacher integriert."
    caveats:
      - Anthropic-Modelle und Web-Grounding außerhalb EU Data Boundary — zentral deaktivieren/regeln
      - Oversharing-Risiko durch lasche SharePoint-ACLs ist real (R&D-Indexing-Vorfälle dokumentiert)
      - Purview DSPM-for-AI faktisch Co-Sale-Pflicht, TCO real ~+30-40%
      - Tägliche Nutzungsraten laut G2 nur 28-32%
      - Vor Pilot zwingend SharePoint-Restricted-Access-Control / Sensitivity-Label-Cleanup, sonst DLP-Vorfall absehbar
      - Microsoft Purview Data Security Posture Management for AI ist faktisch Co-Sale-Pflicht — TCO um 30-40% höher als 30 USD/User
      - Anthropic-Modelle und Web-Search außerhalb EU Data Boundary — pro Use-Case deaktivierbar, muss im Konzern-Tenant zentral gesetzt werden
      - Flex Routing + Anthropic-Modelle aktuell außerhalb der EU Data Boundary
      - Nicht-MS-Quellen (Slack, Confluence, Drive) deutlich schwächer integriert
      - 30 USD/User/Monat plus M365-Lizenz
      - "Oversharing-Risiko: SharePoint-ACLs sind oft zu lax"
      - 28-32% Daily Utilization laut G2
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Tief integriert in M365-Stack
        - Permission-Modell via Entra ID nachvollziehbar
      complaints:
        - Indexiert sensitive Inhalte (sent items, drafts) trotz DLP-Labels
        - Buggy, viele Preview-Features kommen/gehen
        - Außerhalb MS-Apps schwach
    sources:
      - id: learn-microsoft-com-en-us-microsoft-365-copilot-enterprise-data-protection
      - id: learn-microsoft-com-en-us-microsoft-365-copilot-extensibility-api-reference-retrieval-api-overview
      - id: onyx-app-alternatives-microsoft-copilot
      - id: reddit-com-r-cybersecurity-comments-1r92jma-microsoft-365-copilot-chat-referencing-info-from
  - id: onyx-app
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: MIT-Lizenz + Self-Hosting ist die ehrlichste Antwort auf US-SaaS-Datensouveränitäts-Risiken in DACH. 40+ Konnektoren, beliebige LLMs (auch lokales Mistral/Llama), SOC2 Type II auf Cloud-Edition. Für Konzerne, die parallel Glean evaluieren, der natürliche Build-vs-Buy-Vergleichsanker.
    caveats:
      - Enterprise-Edition (SSO/SCIM/Audit) nicht MIT — kommerzieller Vertrag mit Onyx Inc. (US) nötig
      - "Operations-Last: ~0.5-1 FTE Plattform-Eng pro 1k User"
      - Konnektor-Permission-Sync je Quellsystem unterschiedlich reif — POC pro Connector
      - Suchqualität laut Praxis ~80% Glean-Niveau
      - Document-Permission-Sync funktioniert pro Konnektor unterschiedlich gut — pro Quellsystem im POC verifizieren
      - "Operations-Last: Vector-DB, Embedding-Pipeline, Updates — braucht ~0.5-1 FTE Plattform-Eng pro 1k User"
      - Onyx Inc. ist US-Firma; bei kommerziellem Support trotzdem AVV/SCCs nötig
      - Eigenbetrieb erfordert Engineering-Kapazität
      - Suchqualität laut Anwendern ~80% Glean-Niveau, nicht 100%
      - Weniger Konnektoren als Glean (40+ vs. 100+)
      - Enterprise Edition (SSO/SCIM/RBAC) nicht MIT-lizenziert
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Schnelles Self-Host-Setup auf GCP/Docker
        - Solide Suchqualität für Bruchteil der Glean-Kosten
      complaints:
        - Nicht ganz Glean-Polish
        - Connector-Setup braucht Tweaking
    sources:
      - id: github-com-onyx-dot-app-onyx
      - id: onyx-app
      - id: reddit-com-r-dataengineering-comments-1nje168-onyx-anyone-selfhosted-in-production
  - id: ambersearch-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Deutscher Anbieter (Aachen), Hosting in DE, On-Prem-Option, ISO 27001, explizite Übernahme der Atlassian-ACLs ohne Re-Permissioning — passt strukturell auf den Use Case und auf DSGVO-/Mitbestimmungs-Anforderungen. Bring-your-own-Model. Für Mid-Market und Konzern-Pilot ideal.
    caveats:
      - Kleinere Kundenbasis und Konnektor-Liste als Glean/Mindbreeze
      - LLM-Layer-Updates langsamer als bei US-Hyperscalern
      - Engineering-Praxisreferenzen rar
      - ">5k MA noch unbewiesen"
      - Kundenbasis und Konnektor-Anzahl signifikant kleiner als Glean/Mindbreeze — Risiko Vendor-Lock auf kleinen Anbieter
      - Eigene multilinguale Modelle gut für DE/EN, aber LLM-Layer-Updates langsamer als bei US-Hyperscalern
      - Für Pilots in 100-500-User-Bereich ideal; >5k MA noch unbewiesen
      - Kleinere Kundenbasis und Konnektor-Liste als Glean
      - Quellen primär Vendor-eigen — Praxisnachweise im Engineering-Kontext rar
      - Skalierung über 10k Mitarbeiter unklar
    sources:
      - id: ambersearch-de-en-glean-alternative
      - id: ambersearch-de-jira-confluence
  - id: openai-com-chatgpt-enterprise
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Wenn ChatGPT Enterprise im Konzern ohnehin lizenziert ist, ist Company Knowledge der Pfad geringsten Widerstands für leichte Q&A über SharePoint/Drive/Confluence/GitHub. EU-Datenresidenz und OpenAI-Ireland-Vertragsentity sind verfügbar. Bleibt Ergänzung, nicht Cross-System-Synthese-Ersatz.
    caveats:
      - Connector-Tiefe geringer als Glean (vergleichende Studien zeigen 1.9× weniger korrekte Antworten)
      - Cross-Tool-Synthese (Slack+Jira+PR) limitiert
      - DLP-/Sensitivity-Label-Respekt gegenüber SharePoint schwächer als bei MS Copilot
      - Subprocessor- und Routing-Profil pro Tenant prüfen
      - EU-Datenresidenz für ChatGPT Enterprise verfügbar, aber Connector-Routing prüfen
      - "Schrems-II/AVV: OpenAI Ireland Ltd. als europäischer Vertragspartner verfügbar — nutzen"
      - Connector-Tiefe deutlich geringer als Glean (laut Vergleichsstudien 1.9x weniger korrekte Antworten)
      - Engineering-spezifische Doku-Suche (PR/Ticket/Slack-Synthese) limitiert
      - Pro-Seat-Kosten hoch, US-Anbieter
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Niedrige Hürde, Engineers haben es schon
        - SharePoint-Integration funktioniert
      complaints:
        - RAG-Qualität schwächer als spezialisierte Tools
        - Cross-Tool-Synthese (Slack+Jira+PR) fehlt
    sources:
      - id: glean-com-blog-enterprise-search-evaluation-2026
      - id: reddit-com-r-claudeai-comments-1r97php-claude-for-enterprise-use-genuinely-confused
  - id: langdock-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Made-in-Germany-Stack mit EU-Hosting, ISO 27001 + SOC 2 Type II — exakt das Compliance-Profil, das DACH-Einkauf und Betriebsrat hören wollen. Für Konzerne, in denen US-SaaS politisch nicht trägt, primärer Kandidat. Connector-Tiefe für Engineering-Q&A im POC zu validieren.
    caveats:
      - Praktiker-Signal außerhalb DACH-Marketing nahe Null — keine Gartner/Forrester-Coverage
      - Confluence-/Jira-/Slack-ACL-Inheritance im Detail unbewiesen
      - Skalierung >5k MA bisher nicht öffentlich referenziert
      - Foundation-Model-Routing außerhalb EU je nach Modellwahl
      - Praktiker-Signal nahe Null außerhalb DACH-Marketing — keine Gartner-/Forrester-Coverage
      - Foundation-Model-Calls je Wahl außerhalb EU; Routing-Konfiguration pro Tenant prüfen
      - Skalierung über 5k MA bisher kaum öffentlich referenziert
      - Marktreife geringer als Glean/M365-Copilot
      - Connector-Tiefe (Confluence/Jira/Slack-Permission-Inheritance) im Detail zu prüfen
      - Quellen-Evidenz primär Vendor-Listicle
    sources:
      - id: euroalternative-eu-alternatives-glean
  - id: intrafind-com-en-ifinder
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Münchner Anbieter, 20+ Jahre Enterprise-Search, On-Prem/Sovereign-Cloud/Hybrid, dedizierte Confluence-Marketplace-App, GDPR-First-Positionierung. Wird im DACH-Behörden-/Regulierten-Sektor als BSI-/Souveränitäts-konforme Alternative wahrgenommen. Likely missed by market scan because IntraFind positioniert sich als klassische Enterprise-Search-Plattform und nicht als 'AI Assistant' — fällt durch das Wort-Raster moderner Listicles.
    caveats:
      - AI-/Generative-Layer reift gerade nach (iFinder elements / ChatAI) — Q&A-Synthese-Qualität gegen Glean/Rovo zu benchmarken
      - Konfigurations- und Beratungs-intensiv, kein 'Plug-and-Play-SaaS'
      - Konnektor-Tiefe für Slack/Notion geringer als für File-Server/SharePoint/Confluence
      - Vendor-Größe begrenzt internationalen Support
    sources:
      - id: intrafind-com-en-ifinder
      - id: marketplace-atlassian-com-apps-1220508-ifinder-confluence-search
  - id: sinequa-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Französischer Enterprise-Search-Veteran mit 200+ Konnektoren, Sinequa-for-Generative-AI-Layer, Stärke in regulierten Industrien (Pharma/Defense/Banken) — viele DACH-Großkonzerne kennen Sinequa bereits aus klassischem Search-Kontext. EU-Anker mit echtem Konzern-Track-Record. Likely missed by market scan because Sinequa wird im Markt als 'Search-Plattform' wahrgenommen, nicht als moderne AI-Q&A-App, und fehlt daher in Glean-Alternativen-Listen.
    caveats:
      - Enterprise-Search-Pricing (6-stellig p.a.), Plattform-Charakter — nicht 'aus-der-Box'
      - Implementierungs-Aufwand und Beratungs-Lock-in (Sinequa Services oder Partner)
      - Engineering-Doku-Q&A nicht primärer Sweet-Spot — Stärke eher Pharma/Research
      - AI-Layer jünger; Antwort-Qualität gegen Glean/Rovo benchmarken
    sources:
      - id: nerdisa-com-sinequa-com
  - id: dust-tt
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Französisches Unternehmen mit EU-Hosting, SOC2 Type II, expliziten Zero-Data-Retention-Klauseln gegenüber Foundation-Models — eines der wenigen echten EU-AVV-fähigen SaaS-Profile. Modell-agnostisch, transparente Pricing ohne Mindestabnahme, Agent-Layer als zusätzlicher Hebel über reine Q&A hinaus.
    caveats:
      - Foundation-Model-Calls können trotz EU-Hosting in US-Regionen routen — pro Tenant konfigurieren
      - Permission-Modell auf Spaces-Ebene gröber als Glean Document-ACL-Sync
      - DACH-Großkonzern-Referenzen noch dünn (Stärke aktuell FR-Markt)
      - Connector-Tiefe variiert — POC pro Quellsystem
      - Foundation-Model-Calls gehen je nach Wahl in US-Regionen (OpenAI/Anthropic) — Subprocessor-Liste pro Tenant konfigurierbar
      - Permission-Inheritance auf Spaces-Ebene, nicht Document-ACL-Sync wie Glean — gröberes Modell
      - Engineering-Doku-Q&A funktioniert, aber Stärke liegt eher in Agent-Workflows als in Konnektor-Tiefe
      - Weniger etabliert als Glean in Großkonzernen
      - Subprozessoren teilweise außerhalb EU (USA möglich)
      - Connector-Tiefe variiert — Engineering-Doku-Suche selbst evaluieren
      - Keine DACH-Unternehmensreferenzen öffentlich — Stärke bisher im FR-Mid-Market (Qonto, Alan)
      - Nicht-englische Lokalisierungslücken im Interface (G2-Feedback) — direkt relevant für DE/AT/CH-Deployments
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Solides EU-Compliance-Profil, SOC2 Type II
        - Transparente Pricing ohne Mindestabnahme
      complaints:
        - Interface-Lokalisierung für Non-English unzureichend (G2)
        - Lernkurve für komplexe Workflows; Setup-Aufwand vor Produktivstart
    sources:
      - id: dust-tt-landing-glean
      - id: eu-dust-tt-home-platform-privacy
      - id: maqtoob-com-tool-dust-tt
  - id: mindbreeze-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Österreichischer DACH-Insight-Engine-Veteran (seit 2005), Appliance + Cloud, zweistufige ACL-/Live-Access-Check-Architektur, Lufthansa als Engineering-Referenz. Adressiert genau das Briefing-Caveat 'Berechtigungs-Inheritance' mit einem im Markt seltenen Zwei-Stufen-Ansatz (ACL im Index + Live-Recheck). Forrester Wave Cognitive Search Leader Q4 2025. 43 verifizierte Gartner-Peer-Insights-Bewertungen (4.7/5, 93% Empfehlungsrate) aus Manufacturing, Banking, Energy und Government bestätigen Enterprise-Fitness. Likely missed by market scan because Mindbreeze positioniert sich als 'Insight Engine' und nicht primär als 'AI-Assistant', taucht in Glean-Alternativen-Listen daher selten auf.
    caveats:
      - Klassisches Insight-Engine-Pricing (Appliance + Lizenz) deutlich teurer und schwerer aufzusetzen als SaaS
      - Generative-AI-Layer (Insight Workplace) jünger als Konkurrenz — Antwort-Synthese-Qualität im POC prüfen
      - Implementierungs-Beratungs-intensiv, typisch 3-6 Monate bis Produktiv
      - UI weniger 'Engineer-friendly' als Glean/Notion
      - Keine Reddit-/Community-Präsenz — Grassroots-Adoption deutlich unter Glean
      - G2-Reviewbase sehr klein (10 Bewertungen) — Mindshare auf G2/PeerSpot rückläufig gegenüber Glean
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Federated Search mit Access-Rights-Preservation durchgängig gelobt (Gartner Peer Insights)
        - "Starke DACH-Referenzen: Lufthansa, österreichische Behörden"
      complaints:
        - Hohe Pricing- und Integrationskomplexität (G2)
        - Kein Grassroots-Community-Signal außerhalb DACH-Enterprise
    sources:
      - id: inspire-mindbreeze-com-developer-authorization
      - id: mindbreeze-com
      - id: gartner-com-reviews-market-insight-engines-vendor-mindbreeze-product-mindbreeze-inspire
  - id: slack-com-intl-en-gb-knowledge-sharing
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Where engineering discussions live in Slack: federated AI search across Slack conversations plus connectors (Asana, Box, GitHub, Drive, Jira, Salesforce). Real-time permission trimming means answers disappear immediately when access is revoked. Answers surface inside the Slack UI engineers already have open — low friction for conversational KB Q&A. Fit is conditional because it provides cross-tool federation rather than deep document QA depth comparable to Confluence/Notion-native tools."
    caveats:
      - Requires Enterprise Grid + Slack AI licence
      - No Confluence/Notion-depth documentation indexing; primarily cross-tool federation
      - Salesforce group — data residency/DPA for DACH must be verified
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Channel recaps and thread summaries work well, save time
        - Search quality better than Slack's native search
        - Helps dispersed teams find answers without asking humans
      complaints:
        - Not worth the price premium users have to pay
        - Limited to summaries and edits, no agent workflows
        - Cannot coordinate across tools or run research tasks
    sources:
      - id: slack-com-blog-news-slack-enterprise-search-uncover-knowledge-work-smarter
      - id: slack-com-help-articles-31739993134867-search-with-ai-in-slack
start_here: Im Atlassian-Cloud-Stack mit Rovo beginnen, Scope strikt auf Engineering-Confluence begrenzen und ACL-Mapping sowie Betriebsrats-Abstimmung als Pre-Flight-Gate definieren — nicht als Nacharbeit. Im M365-zentrischen Konzern übernimmt Microsoft 365 Copilot diese Rolle, erfordert aber vorab einen SharePoint-Sensitivity-Label-Cleanup.
caveats: "Berechtigungs-Inheritance ist der DSGVO- und Betriebsrats-Brennpunkt: zu laxe ACLs führen zu Antworten mit Inhalten, die der Nutzer nicht sehen darf — Pilotierung ohne verifizierten ACL-Sync ist in DE-Konzernen nicht genehmigungsfähig. Glean läuft als US-SaaS mit AVV-Pflicht und Schrems-II-Risikobewertung; Rovo setzt Atlassian-Cloud-Migration voraus, was für viele DACH-Konzerne auf Data-Center noch ein eigenständiges Hindernis ist."
sources: []
---
