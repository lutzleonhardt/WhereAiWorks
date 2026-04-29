---
stage: product-discovery
order: 2
roles:
  - product-manager
title: Meeting-Transcription und Follow-up-Extraktion
goal_label: Discovery-Calls protokollieren und Action-Items extrahieren
suitability: good_fit
rationale: Teams Premium (Intelligent Recap) und Zoom AI Companion sind in DACH-Konzernen über bestehende M365- und Zoom-AVV ohne Zusatzprocurement aktivierbar. Google-Workspace-Organisationen können mit Gemini Take Notes in derselben Compliance-Boundary folgen.
tools:
  - id: workspace-google-com-solutions-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Fuer Meet-zentrische Workspace-Organisationen die naheliegende Wahl: Take-Notes erbt Workspace-AVV und mit Assured Controls auch EU-Datenresidenz. Discovery-Notes landen direkt in Docs."
    caveats:
      - Add-on-Lizenz $19.99/User on top
      - Assured Controls (EU-Datenresidenz) ist kostenpflichtiges Premium-Add-on, nicht Workspace-Default
      - Cross-Plattform schwach — funktioniert primaer in Meet
      - Workspace Assured Controls (EU-Datenresidenz) ist kostenpflichtiges Add-on, nicht Default
      - DACH-Konzerne nutzen Meet selten als Hauptplattform — Reichweite begrenzt
      - $19.99/User Add-on auf Workspace-Subscription
      - Funktioniert primaer in Google Meet — keine echte Cross-Platform-Loesung
      - Recording-Consent in DE/AT bleibt explizit notwendig
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Nahtlos in Workspace integriert
        - Live-Translation in vielen Sprachen
      complaints:
        - Add-on-Kosten obendrauf
        - Nicht plattformuebergreifend
    sources:
      - id: cognitivefuture-ai-best-ai-tools-for-meetings
      - id: magai-co-ai-voice-assistants-zoom-teams-meet
      - id: reddit-com-r-saas-comments-1ruem4m-the-meeting-tool-you-use-probably-does-not-matter-json
  - id: meetjamie-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Berliner Anbieter, Frankfurt-Hosting, ISO 27001, bot-frei und Cross-Plattform — die staerkste DACH-Alternative ausserhalb der M365/Zoom-Defaults und einzige bot-freie Option, die auf Windows funktioniert (Granola-Ersatz).
    caveats:
      - OpenAI/Anthropic im Verarbeitungspfad — Drittland-Subprocessor, SCC und TIA noetig
      - "Bot-frei != consent-frei: Teilnehmer-Information und Betriebsvereinbarung bleiben Pflicht"
      - SSO/SCIM-Tiefe und Audit-Trail noch nicht vollstaendig enterprise-grade
      - OpenAI/Anthropic im Verarbeitungspfad — Drittland-Subprocessor; SCC und TIA noetig
      - Bot-frei != consent-frei — explizite Teilnehmerinformation und Betriebsvereinbarung weiterhin Pflicht
      - Audio-Verarbeitung passiert via OpenAI/Anthropic-API (kein Training, aber Drittland-Subprocessor)
      - Bot-frei != consent-frei — Betriebsrat und Teilnehmer-Information bleiben Pflicht
      - Kein Audio-Playback nach Generierung des Transkripts
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - EU-Hosting + bot-frei loest doppeltes DACH-Problem
        - Funktioniert auf Windows, Mac, iOS
      complaints:
        - OpenAI/Anthropic Subprocessor stoert puristische Datenschuetzer
        - Teurer als Konkurrenz ($24/Mo)
    sources:
      - id: docs-meetjamie-ai-pages-faqs-troubleshooting-data
      - id: sally-de-blog-jamie-dsgvo-und-datenschutz
      - id: transcribeer-nl
  - id: microsoft-com-en-us-microsoft-teams-premium
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Default-Discovery-Capture in DACH-M365-Konzernen: bestehende AVV, Tenant-Datenresidenz, Purview-Retention, AI-Notes via Azure OpenAI in der Compliance-Boundary. Privacy-First-Recap (GA Mitte 2026) entspannt die Mitbestimmungs-Diskussion zusaetzlich."
    caveats:
      - Audio-Recap erfordert M365-Copilot ($30); Recap-only via Teams-Premium-Lizenz reicht fuer Action-Items
      - Recording-Kultur und Betriebsvereinbarung sind Voraussetzung — sonst Lizenz ohne Wirkung
      - Action-Item-Qualitaet hinter Granola/Fellow laut Praktiker-Reviews
      - Audio-Recap erfordert M365-Copilot-Lizenz ($30) — Recap-Subset reicht fuer reines Action-Item-Extract aus, das muss Lizenzplan klar trennen
      - Betriebsvereinbarung trotz Tenant-Hosting Pflicht — Aufzeichnung bleibt mitbestimmungspflichtig nach §87 BetrVG
      - "Overlap mit M365 Copilot ($30/User): wer Copilot hat, zahlt Recap doppelt"
      - Liefert nur Wert, wenn Recording-Kultur existiert — sonst Lizenz ohne Nutzen
      - Action-Item-Qualitaet hinter Granola/Fellow laut Praxis-Reviews
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Default-Verfuegbarkeit ueber bestehende M365-Lizenz
        - Transparente Bot-Anzeige + Admin-Kontrolle
      complaints:
        - Action-Item-Qualitaet inkonsistent
        - Townhalls ziehen externe Notetaker-Bots an
    sources:
      - id: microsoft-com-en-us-microsoft-teams-premium
      - id: microsoftnegotiations-com-blog-teams-premium-features-licensing-deep-dive-html
      - id: windowsreport-com-microsoft-preparing-to-roll-out-privacy-first-copilot-recaps-in-teams
      - id: learn-microsoft-com-en-us-microsoftteams-privacy-intelligent-recap
      - id: reddit-com-r-microsoftteams-comments-1o5y1pm-had-an-ai-notetaking-bot-join-a-client-call-today
  - id: zoom-com-en-products-ai-assistant
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: In Zoom-Workplace-Lizenzen inklusive und fuer EU-provisionierte Tenants ist ZM+ (EU-Cluster, Bedrock/Anthropic in EU) Default. ISO 27001/27017/27018 + SOC 2 sind dokumentiert. Action-Items, Smart Chapters und Folge-E-Mail-Drafts decken Discovery-Followups ab.
    caveats:
      - ZM+ EU-Variante ist nicht in jeder Region Default — bei Account-Team explizit anfordern
      - Anthropic/AWS Bedrock als Subprocessor im DPA dokumentieren
      - Recording-Consent in DE/AT bleibt Pflicht (kein Hinweis-im-Kalender-Workaround)
      - Default ist nicht zwingend ZM+ — Aktivierung ueber Account-Team einfordern
      - Bedrock/Anthropic als Subprocessor im DPA sauber dokumentieren
      - EU Workplace Cluster nicht in jedem Tarif; Pruefen ob Tenant in EU-Region provisioniert ist
      - Volle Tiefe nur im Zoom-Ecosystem; auf Teams/Meet nur My-Notes-Layer
      - Transkriptionsgenauigkeit ~92% laut Tests (unter Otter/Granola)
      - Recording-Consent in DE/AT explizit einholen — Hinweis im Kalender reicht nicht
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Bereits bezahlt, keine Zusatzeinkaufsschleife
        - Saubere Integration in Zoom-Recording-Workflows
      complaints:
        - Wenig Tiefe ausserhalb Zoom
        - Limitierte Sprache- und Custom-Vocabulary-Optionen
    sources:
      - id: zoom-com-en-compare-zoom-vs-other-ai-tools
      - id: magai-co-ai-voice-assistants-zoom-teams-meet
      - id: zoom-com-en-blog-ai-companion-data-residency-options
      - id: preview-zoom-com-en-products-ai-assistant-resources-privacy-security
      - id: reddit-com-r-saas-comments-1ruem4m-the-meeting-tool-you-use-probably-does-not-matter-json
  - id: fathom-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Solo-PM-Default mit unlimited free tier und sauberer Action-Item-Liste; Fathom for Teams bringt SOC 2 Type II, GDPR-Konformitaet, SSO und zentrale Verwaltung — fuer kleine Discovery-Teams realistisch, fuer Konzern-Rollout mangels EU-Datenresidenz nur mit DPA-Pruefung.
    caveats:
      - Kein deklariertes EU-Datenresidenz-Default — DPA und Subprocessor-Liste vor Rollout pruefen
      - Sichtbarer Bot bleibt Akzeptanzproblem in externen Discovery-Calls
      - Cross-Meeting-Suche erst in Teams/Business-Tier
      - DPA unbedingt vor Rollout pruefen — kein deklariertes EU-Hosting
      - Sichtbarer Bot bleibt das Discovery-Akzeptanzproblem
      - Sichtbarer Bot bei Zoom/Meet/Teams — Discovery-Call-Akzeptanz beachten
      - Suche nur innerhalb einzelner Meetings (Free/Premium), Cross-Meeting nur in Teams/Business
      - US-Anbieter — DPA pruefen, kein EU-Datenresidenz-Default
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Unlimited free Recordings, klare Summaries
        - Bester Solo-PM-Einstieg laut mehrerer Tests
      complaints:
        - Cross-Meeting-Suche fehlt im Lower-Tier
        - Wenig Admin-Kontrollen fuer Team-Rollouts
    sources:
      - id: fathom-ai-solutions-teams
      - id: cotera-co-articles-best-ai-note-taker
      - id: reddit-com-r-ai-application-comments-1rrm8v1-tested-5-ai-meeting-note-takers-across-different
  - id: fellow-app
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Bot- und bot-frei-Modus pro Call, kollaborative Agendas und Action-Item-Tracking; PM-Vergleichstests sehen Fellow als Summary-Qualitaets-Sieger fuer Mixed-Plattform-Teams. Geeignet wenn Meeting-Management ueber reine Transkription hinaus gewuenscht ist.
    caveats:
      - AWS-US-Hosting, kein expliziter EU-Tenant-Default — DPA pruefen
      - Pricing-Transparenz mau, SSO/HRIS erst im Top-Tarif
      - Geringe Markenbekanntheit in DACH erschwert Procurement-Akzeptanz
      - AWS-Region und Datenresidenz im Enterprise-Plan vertraglich klaeren
      - HRIS-/SSO-Anbindung erst im Top-Tarif
      - Weniger bekannt — Sales/Procurement-Akzeptanz aufwaendiger als Otter/Fireflies
      - Pricing-Transparenz mau
      - Kein expliziter EU-Hosting-Default — DPA pruefen
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Beste Summary-Qualitaet im PM-Vergleichstest
        - Bot- und bot-freier Modus pro Call
      complaints:
        - Niedrige Markenbekanntheit
        - Nuance- statt Schnellzugriff-Output (Geschmackssache)
    sources:
      - id: simular-ai-alternatives-ai-meeting-note-takers
      - id: fellow-app-pricing
      - id: reddit-com-r-ai-application-comments-1rrm8v1-tested-5-ai-meeting-note-takers-across-different
  - id: meetily-ai
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Open-Source mit 100% lokaler Verarbeitung, self-hostbar auf eigener Azure/AWS/GCP/On-Prem — der einzige echte Schrems-II-Default fuer hochsensible Pre-Sales-/IP-Discovery. Sinnvoll fuer regulierte Branchen (Pharma, Finance, Public Sector) wo Cloud-Notetaker scheitern.
    caveats:
      - Self-Hosting-Aufwand (GPU, Whisper-Updates, MLOps) realistisch einplanen — kein Plug-and-Play
      - Compliance-Marketing-Claims (NIS2, MiFID II, HIPAA) sind Frameworks, keine Zertifizierungen
      - Junge Marke, schmales Praktiker-Signal — laengere PoC-Phase noetig
      - Funktionsumfang gegenueber SaaS-Wettbewerbern (Cross-Meeting-Suche, CRM-Sync) duenner
      - Self-Hosting-Aufwand (GPU, Whisper-Updates, MLOps) realistisch einschaetzen
      - Marketing-Claims (NIS2, MiFID II, HIPAA) sind Frameworks, keine Zertifizierungen
      - Self-Hosted Aufwand (DevOps, GPU, Updates) — nicht plug-and-play
      - Funktionsumfang gegenueber Cloud-SaaS schmaler (z.B. CRM-Sync, Cross-Meeting-Suche)
      - Junge Marke — Praktiker-Signal in Foren noch duenn
    sources:
      - id: meetily-ai-de
  - id: sembly-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: SOC 2 Type II + Microsoft 365 zertifiziert, EU-Datenresidenz waehlbar, RBAC, konfigurierbare Retention, 48 Sprachen inkl. DE — eines der wenigen US-Tools mit echtem Enterprise-Compliance-Profil. Gut fuer Discovery-Korpora, die auch Compliance-Archivierung dienen.
    caveats:
      - EU-Residenz ist Konfigurations-Option, nicht Default — bei Procurement explizit fordern
      - "Bot-basiert: gleiche externe-Call-Akzeptanzfrage wie Otter/Fireflies"
      - Schwergewichtig fuer Solo-PMs; lohnt sich erst bei Team-/Org-Rollout
      - EU-Residenz ist Konfiguration, nicht Default — bei Procurement explizit fordern
      - Bot-Anwesenheit fuer externe Kundeninterviews kritisch
      - Bot-basiert — gleiche externer-Call-Akzeptanzfrage
      - Schwergewichtig fuer Solo-PMs; lohnt sich erst bei Team-Rollout
      - EU-Residenz konfigurierbar, aber nicht Standard
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Task detection catches action items users would miss, eliminates post-meeting email chains
        - Action items auto-assigned to people with due dates; reduced follow-up overhead
        - Summaries condense 90-minute calls into clear overview in under 60 seconds
        - Competitive pricing at $10/month with Slack integration
      complaints:
        - 30% of summaries need human editing; misses context in long/complex meetings
        - Mobile app unreliable (~70% success rate); last update 8 months ago
        - Don't share raw AI summaries with clients without review; detail errors hurt credibility
        - Risk of overlooked nuance when relying solely on AI without verification
    sources:
      - id: sembly-ai
  - id: tldv-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Muenchener Sitz und GDPR-Marketing plus Cross-Meeting-Reports (z.B. 'alle Customer-Mentions zu Pricing in 30 Tagen') sind fuer Discovery-Korpus-Auswertung interessant. 5.000+ Integrationen.
    caveats:
      - EU-Sitz != EU-Datenverarbeitung — OpenAI-Subprocessor in den USA
      - Sichtbarer Bot mit identischer Akzeptanzproblematik wie Otter/Fireflies
      - Sales-Coaching-Bias kann fuer reine Product-Discovery overshooten
      - EU-Sitz != EU-Datenverarbeitung — Subprocessor pruefen
      - Sichtbarer Bot bei jedem Call
      - Staerker als Sales-Coaching-Tool positioniert — fuer reine Discovery teils Overkill
      - DPA und Sub-Processor (OpenAI) sorgfaeltig pruefen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Cross-Meeting-Reports finden Patterns in Discovery-Korpus
        - Riesiger Integrationspool
      complaints:
        - Hoeherer Preis ($18/Mo) als Fathom mit aehnlichem Funktionsumfang
        - Bot-Sichtbarkeit gleiches Problem wie Otter/Fireflies
    sources:
      - id: tldv-io-blog-tldv-vs-avoma-which-ai-meeting-assistant-do-you-need
      - id: meetjamie-ai-blog-gdpr-note-takers-in-europe
      - id: stackscored-com-pricing-ai-meeting-notes
  - id: boardwise-io
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Tenant-Sovereignty-Modell: AI laeuft im eigenen Azure-Tenant des Kunden, nichts verlaesst die M365-Compliance-Boundary. ISO 27001, EU-Hosting, OWASP-Pentests; DACH-Referenzen in Vorstand/Aufsichtsrat. Fuer hochregulierte Discovery-Reviews (z.B. mit Betriebsrat oder Aufsichtsrats-Touchpoint) ein ernster Compliance-First-Kandidat. Likely missed by market scan because Boardwise als 'Board/Meeting Management' positioniert ist und nicht als 'AI Notetaker' — Capability-Suchen nach Discovery/Action-Items finden es selten."
    caveats:
      - Primaer auf Vorstands-/Aufsichtsrats-/Betriebsrats-Sitzungen positioniert — fuer reine Customer-Discovery moeglicherweise zu schwergewichtig
      - Setzt Microsoft Azure-Tenant voraus — non-M365-Organisationen ausgeschlossen
      - Pricing nicht oeffentlich; Sales-Cycle entsprechend lang
    sources:
      - id: boardwise-io
  - id: happyscribe-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: EU-Datenzentrum (Tier IV, ISO 27001, PCI DSS) plus SOC 2 Type II — eines der zertifizierungsstaerksten Compliance-Profile am Markt; eignet sich fuer Discovery-Workflows, in denen Transkript-Genauigkeit und Audit-Faehigkeit wichtiger sind als Live-Bot-Capture. Likely missed by market scan because HappyScribe primaer als 'Transkriptions-Service' und nicht als 'AI Meeting Notetaker' wahrgenommen wird.
    caveats:
      - Eher Upload-/Post-Processing-Workflow als Live-Bot — fuer schnelle Followup-Extraktion suboptimal
      - Action-Item-Extraktion sekundaeres Feature, nicht USP
      - Pricing minutenbasiert kann bei hohem Discovery-Volumen kostenintensiv werden
    sources:
      - id: happyscribe-com-blog-best-gdpr-compliant-ai-note-takers
  - id: sally-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Made-and-hosted-in-Germany, AVV nach Art. 28 DSGVO und einer der wenigen Anbieter, die Betriebsratskonformitaet explizit als Feature dokumentieren — die naheliegendste DSGVO-Alternative fuer DACH-Konzerne, die Otter/Granola/Fathom aus Compliance-Gruenden ausschliessen muessen. 19 verifizierte OMR-Reviews (4.7/5) bestaetigen Praxistauglichkeit in DACH.
    caveats:
      - Kleinerer Vendor — Roadmap- und Stabilitaetsrisiko fuer 5-Jahres-Konzern-Rollouts
      - Sprachunterstuetzung primaer DE; mehrsprachige Customer-Discovery (EN/FR) limitierter
      - Wenig unabhaengige Praktiker-Reviews ausserhalb Vendor-eigener Kanaele
      - "Vendor-Groesse: Stabilitaet/Roadmap-Risiko fuer mehrjaehrige Konzern-Rollouts"
      - Mehrsprachige Discovery-Calls (z.B. EN-Customer) limitierter als bei US-Wettbewerbern
      - Kleinerer Anbieter — Funktionsumfang/Integrationen schmaler als Otter oder Fireflies
      - Hosting laeuft auf Microsoft Azure (US-Unternehmen) — trotz DE-Rechenzentrum formal dem US CLOUD Act unterworfen; fuer hoechste Datensouveraenitaets-Anforderungen Tucan.ai (Hetzner-Hosting) erwaegen
      - Sprachunterstuetzung primaer DE; mehrsprachige Discovery-Calls pruefen
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Praezise Transkriptionsqualitaet laut DACH-Kundenstimmen (Dispomed, Aachener Grundvermoegen)
        - 4.7/5 auf OMR Reviews (19 Bewertungen) — Ease of Use 9.6 ueber Kategorieschnitt
      complaints:
        - Staerker auf Sales/Vertrieb positioniert als auf Product-Discovery
        - Azure-Hosting schraenkt Schrems-II-Argument fuer hochregulierte Sektoren ein
    sources:
      - id: sally-io-de-ki-meeting-protokoll-management-meeting-transkription
      - id: sally-io-de-blog-ist-sally-ai-betriebsratkonform
      - id: omr-com-en-reviews-product-sally
start_here: In M365-Häusern Teams Premium starten — bestehende AVV und Tenant-Datenresidenz halten den Compliance-Aufwand gering. Zoom-Organisationen nutzen Zoom AI Companion direkt aus der Workplace-Lizenz, nachdem der EU-Cluster beim Account-Team aktiviert wurde.
caveats: Aufzeichnung in DE/AT ist mitbestimmungspflichtig — Betriebsvereinbarung vor Rollout abschließen, nicht nachträglich. Externe Discovery-Calls erfordern aktives Recording-Consent der Teilnehmer; ein Kalenderhinweis allein genügt nicht als DSGVO-Rechtsgrundlage.
sources: []
---
