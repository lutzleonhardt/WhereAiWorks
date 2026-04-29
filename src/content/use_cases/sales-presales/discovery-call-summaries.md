---
stage: sales-presales
order: 3
roles:
  - sales-presales
title: Discovery-Call-Zusammenfassungen
goal_label: Aus Kundengesprächen strukturierte Notizen, Action Items und CRM-Updates erzeugen
suitability: good_fit
rationale: Microsoft Teams Premium und Salesforce Einstein Conversation Insights decken Discovery-Call-Automatisierung nativ ab – ohne Drittanbieter-Bot und innerhalb bestehender M365- bzw. Salesforce-Compliance-Grenzen. Für Teams außerhalb dieser Stacks bietet Sembly AI eine EU-Datenresidenz mit Private-Cloud-Option als compliance-fähige Alternative.
tools:
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Compliance-staerkste Option fuer den typischen DACH-Microsoft-Shop. Intelligent Recap laeuft in der bestehenden M365-Compliance-Grenze, Daten bleiben in der EU-Geo des Tenants, Azure OpenAI dediziert (kein OpenAI-Datenfluss). Sales Copilot extrahiert Highlights/Action Items und schreibt direkt in Dynamics 365 oder Salesforce - kein zweiter Vendor, kein zweites DPA.
    caveats:
      - Lizenzstapel (Teams Premium + M365 Copilot + ggf. Sales Copilot) ist teuer
      - BetrVG §87 und beidseitige Einwilligung nach §201 StGB gelten unveraendert
      - CLOUD-Act-Restrisiko trotz EU Data Boundary - bei BaFin/KRITIS-Pruefern ist das weiterhin ein Diskussionspunkt
      - Deutsche Sprachqualitaet von AI-Notes 2024/25 berichtet schwankend - vor Rollout produktiv pruefen
      - Mid-2026-Feature 'Recap ohne Transkript-Speicherung' loest BetrVG-Diskussion teilweise, aber nicht die beidseitige Einwilligungspflicht nach §201 StGB
      - Teams Premium und Microsoft 365 Copilot Lizenz erforderlich (zusaetzliche Kosten)
      - Sales-spezifische Insights setzen Sales Copilot/Dynamics oder Salesforce-Anbindung voraus
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Compliance-Story stark, kein Drittanbieter-Bot
        - Tief integriert in Outlook/Dynamics/Salesforce
      complaints:
        - Lizenzstapel (Teams Premium + Copilot) teuer
        - Sales-Insights weniger tiefgehend als Gong
    sources:
      - id: learn-microsoft-com-en-us-microsoftteams-privacy-intelligent-recap
      - id: learn-microsoft-com-en-us-microsoft-sales-copilot-view-meeting-summary-recap
      - id: m365admin-handsontek-net-microsoft-teams-ai-meeting-recap-without-transcript-meet-compliance-policies
      - id: reddit-com-r-sales-comments-1qjtt1u-cheaper-alternatives-to-gong
  - id: modjo-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Einer der wenigen Conversation-Intelligence-Anbieter mit dezidiertem EU-Hosting (AWS Paris), SOC 2 Type II, GDPR-DPA und produktivem Deutsch-Support. Sales-CI mit AI-Notes, CRM-Auto-Sync und Buying-Signals - plausibler Gong-Ersatz, wenn EU-Datenresidenz hart gefordert ist und der Kunde keinen Microsoft-Stack hat.
    caveats:
      - AWS Paris ist EU-Region, aber AWS unterliegt dem CLOUD Act - Schrems-II-Restrisiko bleibt
      - Marktreife/Datenpool unter Gong - Pattern-Detection-Tiefe geringer
      - DACH-Vertriebspraesenz duenner als in Frankreich - Support-Sprache und Onboarding pruefen
      - BetrVG §87 und §201 StGB gelten unveraendert
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: modjo-ai-en-trust-center
      - id: saleshive-com-vendors-modjo
  - id: tldv-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Berlin-basiert mit waehlbarer EU-Datenresidenz, AI-Hosting in Europa, DPA, granularen Retention-Controls und abschaltbarem AI-Training. Aufnahme, Transkription in 30+ Sprachen, AI-Notes pro Discovery-Call, Clip-Sharing fuer Coaching, CRM-Sync. Solider DACH-Mid-Market-Pick.
    caveats:
      - Sales-spezifische Coaching-Tiefe geringer als Gong/Chorus
      - Free-Plan-Retention kann mit DSGVO-Loeschkonzept kollidieren - Enterprise-Plan zwingend
      - BSI C5/ISO 27001 nicht prominent kommuniziert - im Konzern-Procurement nachfragen
      - BetrVG §87 weiterhin relevant
      - Sub-Prozessor-Liste enthaelt US-Anbieter - pruefen welche sich abschalten lassen
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Bestes Clip-Sharing fuer Coaching
        - Generoeser Free-Plan, viele Sprachen
      complaints:
        - Convergiert mit Fathom/Fireflies featureseitig
        - Sales-CI flacher als Gong
    sources:
      - id: tldv-io-blog-gdpr-compliant-meeting-assistants-you-can-actually-trust
      - id: reddit-com-r-saas-comments-1ruem4m-the-meeting-tool-you-use-probably-does-not-matter-json
  - id: jiminny-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: UK-Conversation-Intelligence mit Coaching-Schwerpunkt, Salesforce/HubSpot-Sync, Discovery-Notes und Rep-Performance-Tracking. UK-Domizil unter Adequacy-Decision oft akzeptabler fuer DACH-Buyer als US-Vendor.
    caveats:
      - UK-Adequacy-Decision laeuft nicht ewig - SCC-Fallback im Vertrag absichern
      - Sub-Prozessoren teils US - Einzelpruefung noetig
      - Kleinerer Datenpool als Gong - Pattern-Detection schwaecher
      - Coaching-Schwerpunkt > Forecast/Revenue Intelligence
      - EU-Hosting im Detail pruefen
      - BetrVG §87 / §201 StGB gelten
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Reliable call recording across phone and Teams seamlessly
        - Coaching playlists surface high-priority moments efficiently
        - User-friendly interface more approachable than Gong
      complaints:
        - Smaller data pool limits pattern detection vs. Gong/Chorus
        - Focuses on coaching, not forecasting or pipeline intelligence
        - Pricing undisclosed; requires sales conversation
    sources:
      - id: revenue-io-blog-best-gong-alternatives-and-competitors
      - id: cotera-co-articles-best-gong-alternatives
  - id: leexi-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Belgischer Conversation-Intelligence/Notetaker-Hybrid mit ISO-Zertifizierung, EU-Hosting und CRM-Sync. Discovery-Aufzeichnung, AI-Summary, Action Items, Salesforce/HubSpot-Push. Als GDPR-konforme Modjo-Alternative im BeNeLux/DACH-Mittelstand gelistet.
    caveats:
      - Kleiner Anbieter, geringere Marktreife
      - Sales-Coaching-Tiefe begrenzt
      - Wenig oeffentliches DACH-Praktiker-Feedback
      - Reife der CRM-Integrationen vor Rollout testen
      - BetrVG §87 gilt
    sources:
      - id: meetjamie-ai-blog-gdpr-note-takers-in-europe
  - id: avoma-com
    fit: partial
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Mid-Market-Schwergewicht mit MEDDIC/BANT/SPICED-Scorecards, Topic-Tracking, CRM-Auto-Sync, Coaching-Analytics. Deutlich guenstiger als Gong - fuer Teams unter 50 Reps oft bestes Preis/Leistungs-Verhaeltnis. In DACH ohne EU-Hosting nur fuer freie Wirtschaft mit moderater Datenklasse.
    caveats:
      - Datenresidenz primaer US - kein dediziertes EU-Hosting oeffentlich
      - "Reliability-Probleme: berichtete Bot-Late-Joins/Drops"
      - Datenmodell-Tiefe und Pattern-Detection unter Gong-Niveau
      - Bot-Drops koennen Audit-Trail luecken - kritisch wenn Discovery-Notes fuer Forecast-Reviews genutzt werden
      - BetrVG §87 / §201 StGB gelten unveraendert
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Meilenweit guenstiger als Gong
        - MEDDIC/BANT-Scorecards out-of-the-box
      complaints:
        - Inakkurate Notizen, falscher Speaker erkannt
        - Bot-Late-Joins
    sources:
      - id: cotera-co-articles-best-gong-alternatives
      - id: get-alfred-ai-blog-best-ai-meeting-notetakers
      - id: reddit-com-r-sales-professionals-comments-1ptzg4i-gong-alternatives-that-dont-break-the-bank
  - id: tucan-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Berliner Anbieter mit Hetzner-Hosting (CLOUD-Act-immun) und On-Premise-Option. Multi-Meeting-Analyse, anpassbare Templates pro Meeting-Typ (Sales-Meeting/Discovery), Source-Citations fuer Anti-Halluzinationsanker. Fuer KRITIS-Sales (oeff. Verwaltung, Banking, Defense) oft die einzige durchsetzbare Option.
    caveats:
      - Sales-CRM-Integration nicht so tief wie bei Sales-spezifischen Tools - Workarounds noetig
      - Kein dedizierter Sales-Coaching/Scorecard-Layer wie Gong/Avoma
      - Bedienung 'sachlich/technisch', kein flacher Sales-User-UX-Polish
      - BetrVG §87 / §201 StGB gelten weiterhin
    sources:
      - id: tucan-ai-blog-ai-meeting-assistant-comparison-tucan-speechmind-sally
  - id: demodesk-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Muenchner Anbieter mit eigener Meeting-Plattform plus AI-Coach: Aufzeichnung, Transkription, Discovery-Scorecards basierend auf eigenem Playbook ('did they ask for budget? 5 discovery questions?'). DACH-Compliance-Story und sales-spezifischer Fokus. Unabhaengiger Produkttest bestaetigt Coaching-Insights und Scorecard-Funktionalitaet."
    caveats:
      - Eigene Meeting-Plattform - Adoption-Huerde im Teams/Zoom-Standard-Setup
      - Kleinerer Markt als Gong - geringerer Pattern-Datenpool
      - AI-Notes-Genauigkeit im unabhaengigen Test kritisiert - vor produktivem Einsatz validieren
      - BSI C5-/ISO-27001-Testat oeffentlich nicht prominent - Procurement-Pruefung
      - Lock-in zur Demodesk-Meeting-Plattform reduziert Flexibilitaet
      - BetrVG §87 weiterhin relevant
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Scorecards exakt nach eigenem Discovery-Playbook
        - DE-Anbieter mit Compliance-Fit
      complaints:
        - AI-Notes-Genauigkeit schwankend im Testbetrieb (tl;dv-Review 2025)
    sources:
      - id: reddit-com-r-sales-comments-1hb6igf-is-anyone-actually-using-ai-for-sales-coaching
      - id: tldv-io-blog-demodesk-review
  - id: sembly-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Ungewoehnlich tiefe Compliance-Posture fuer einen Notetaker: SOC 2 Type II, GDPR, EU-Datenresidenz, drei Deployment-Modi bis hin zu Sembly XP Private Cloud. Sales-Outputs (Pain Points, Budget-Mentions, Custom Proposals) sind brauchbar. AI-Chat fuer Query ueber mehrere Discovery-Calls hinweg als Differenzierungsmerkmal. 4.6/5 auf G2 (45 Reviews, 2026)."
    caveats:
      - Sembly XP Private Cloud verschiebt Betrieb/Compliance teils zum Kunden
      - DACH-Referenzen oeffentlich rar - Reference-Calls aktiv anfordern
      - Sales-Coaching/Deal-Risk weniger ausgepraegt als bei Gong/Clari
      - 45 G2-Reviews (vs. 6.600+ bei Fathom) - kleineres Feedback-Corpus
      - Reddit-Analyse berichtet generische Zusammenfassungen bei komplexen Themen
      - BetrVG-Mitbestimmung gilt
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - AI-Chat ueber Meeting-Historie spart Zeit bei Discovery-Follow-ups
        - Mehrsprachige Transkription, starke Compliance-Posture
      complaints:
        - Zusammenfassungen bei komplexen/langen Meetings teils generisch
        - Wenige DACH-Cases oeffentlich
    sources:
      - id: sembly-ai-why-choose-sembly
      - id: tldv-io-blog-gdpr-compliant-meeting-assistants-you-can-actually-trust
      - id: aiagents-saastrac-com-sembly-review
  - id: bao-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Muenchner Anbieter mit GDPR-konformer Aufzeichnung, interaktiven Playbooks, AI-Summaries, Action Points und 2-Way-CRM-Sync (Salesforce/HubSpot/Pipedrive, Salesloft, Aircall). Discovery-spezifische Talktracks und Personas-Analytics. DACH-Heimspiel fuer Discovery-Teams im Cold-Calling/SDR-Bereich - nach Validierung der Security-Posture und EU-Hosting.
    caveats:
      - "Keine oeffentlichen unabhaengigen Reviews gefunden (OMR: 0 Bewertungen, kein G2-Profil nachweisbar)"
      - EU-Hosting / Serverstandort auf OMR nicht dokumentiert - aktiv beim Anbieter ererfragen und DPA pruefen
      - Enterprise-Security-Posture (SOC 2 / ISO 27001 / BSI C5) oeffentlich nicht dokumentiert
      - Schwerpunkt Cold Calling/SDR-Workflows - High-ACV-Discovery-Calls weniger im Fokus
      - DACH-Mittelstand-staerker als Konzern-Schwergewicht
      - BetrVG §87 / §201 StGB gelten unveraendert
    practitioner_signal:
      volume: none
      tenor: unknown
    sources:
      - id: bao-ai
  - id: hubspot-com-products-sales-conversation-intelligence
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "In Sales Hub Pro/Enterprise eingebaut: Call-Recording, Transkription, AI-Summaries, Coaching-Insights direkt am Kontakt/Deal. EU-Datacenter (Frankfurt) verfuegbar. Fuer den HubSpot-Shop ist dies die natuerliche erste Wahl ohne zusaetzlichen Drittanbieter und ohne separates DPA."
    caveats:
      - Nur in hoeheren HubSpot-Tiers (Sales Hub Professional/Enterprise) - ohne HubSpot kein Use
      - Conversation-Intelligence-Tiefe sub-Gong - eher 'good enough' als marktfuehrend
      - Recording-Provider greift weiter ein - Roh-Audio-Datenresidenz pruefen
      - Advanced AI Features erfordern hoehere Tiers - Lizenzkosten skalieren
      - BetrVG §87 / §201 StGB gelten unveraendert
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Nahtlose CRM-Integration eliminiert manuelle Dateneingabe
        - AI-Coaching-Insights helfen Managern ohne zusaetzliches Tool
      complaints:
        - Nur mit Sales Hub Pro/Enterprise nutzbar
        - CI-Tiefe hinter dedizierten Gong/Chorus-Konkurrenten
    sources:
      - id: hubspot-com-products-sales-conversation-intelligence
      - id: summarizemeeting-com-en-tool-hubspot
  - id: salesforce-com-sales-conversation-insights
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Native Conversation-Intelligence in der Sales Cloud: Call Summaries, Action Items, Call Insights direkt am Voice/Video-Call-Record. Laeuft im Kunden-Salesforce-Org und damit in dessen Hyperforce-Region (EU/DE moeglich). Spring '26 erweitert ECI mit generativer AI, schnellerer Verarbeitung und Agentforce-Integration fuer automatische CRM-Updates nach Discovery-Calls."
    caveats:
      - Voller Mehrwert nur in Sales/Service Cloud mit ECI-Lizenz (bis zu 675 Stunden/Jahr/Lizenz)
      - Recording-Provider weiterhin Drittanbieter (Zoom/Teams/Google) - dessen Datenresidenz greift fuer Roh-Audio
      - Sprach-/Qualitaetsabdeckung fuer Deutsch produktiv testen
      - BetrVG §87 / §201 StGB gelten unveraendert
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Compliance-vorteilhaft gegenueber Drittanbieter - Daten bleiben in Salesforce-Org
        - "Spring '26: automatische CRM-Feldupdates via Agentforce nach Discovery-Call"
      complaints:
        - ECI-Lizenz zusaetzlich zur Sales Cloud erforderlich
        - Kein eigener Recording-Provider - Zoom/Teams als Voraussetzung
    sources:
      - id: salesforce-com-products-sales-conversation-intelligence
      - id: resources-docs-salesforce-com-latest-latest-en-us-sfdc-pdf-eci-impl-guide-pdf
      - id: salesforcebreak-com-2026-02-26-einstein-conversation-insights-spring-26
  - id: sally-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Deutscher Anbieter (Aliru GmbH) mit publiziertem Art-28-DPA, Verarbeitung exklusiv in der EU (bevorzugt Deutschland), automatisierter Task-Erkennung und Sync nach HubSpot/Salesforce/Dynamics 365. Anpassbare AI-Summaries fuer Discovery-Calls und Project-Kickoffs. DACH-Heimspiel-Profil - bei Validierung der Sicherheitsposture empfohlen.
    caveats:
      - Keine unabhaengigen Reviews auf neutralen Plattformen gefunden (kein G2, kein OMR-Review)
      - Hosting laeuft auf Microsoft Azure - CLOUD-Act-Restrisiko trotz EU-Region (von Wettbewerber tucan.ai bestaetigt)
      - Voice-Profiling fuer Speaker-Recognition - DPIA empfohlen
      - BSI C5 nicht oeffentlich kommuniziert
      - BetrVG §87 / §201 StGB gelten unveraendert
    practitioner_signal:
      volume: none
      tenor: unknown
    sources:
      - id: help-sally-io-privacy-data-processing-agreement-dpa
      - id: sally-io-de-ki-assistent-crm
  - id: meetjamie-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: "Berliner Anbieter, Hosting in Frankfurt, ISO 27001, GDPR-by-Design, kein Modell-Training auf Kundendaten. Bot-frei: nimmt System-Audio lokal auf - kein zweites Konferenz-Teilnehmer. Strukturierte Notizen, Transkripte, Action Items in 100+ Sprachen, inkl. Praesenztermine. Fuer DACH-Sales-Teams mit Datenschutzfokus oft das compliance-leichteste Werkzeug."
    caveats:
      - Reine Notizen - keine Conversation-Intelligence/Deal-Risk-Scoring wie Gong
      - CRM-Integrationen flacher als bei Sales-spezifischen Tools
      - Beidseitige Einwilligung weiterhin Pflicht (auch wenn kein Bot sichtbar)
      - Skalierung auf 50+ Reps mit Coaching-Anforderungen begrenzt
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - No bot visible in call - feels like natural conversation
        - GDPR-compliant by design, Frankfurt-hosted, German founders
        - Works offline and across 100+ languages
      complaints:
        - Recording uploads occasionally hang, delayed transcription
        - Support response unreliable, sometimes unresponsive
        - More expensive than US-based competitors
    sources:
      - id: docs-meetjamie-ai-pages-faqs-troubleshooting-data
      - id: meetjamie-ai-enterprise
start_here: "Im Microsoft-Stack mit Teams Premium starten: EU Data Boundary aktivieren, Betriebsvereinbarung abschließen und Auto-Summaries zwei Wochen pilotieren, bevor CRM-Auto-Fill aktiviert wird. Im Salesforce-Shop ist Einstein Conversation Insights der natürliche erste Schritt – ECI-Lizenz aktivieren und Deutsch-Transkriptionsqualität vor dem Breitrollout produktiv validieren."
caveats: Call-Recording ist in DACH nach §87 BetrVG mitbestimmungspflichtig und erfordert eine Betriebsvereinbarung sowie die beidseitige Einwilligung nach §201 StGB – unabhängig vom gewählten Tool. Bei BaFin- und KRITIS-Kunden bleibt das CLOUD-Act-Restrisiko auch bei EU-gehosteten Angeboten ein aktiver Prüfpunkt, der den Rollout verzögern kann.
sources: []
---
