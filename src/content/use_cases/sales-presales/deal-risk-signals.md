---
stage: sales-presales
order: 9
roles:
  - sales-presales
title: Deal-Risk- und Health-Signale
goal_label: Risiken in laufenden Deals automatisch erkennen und Reps warnen
suitability: conditional
rationale: Gong und Clari erkennen Slipping Deals durch Engagement-Drop, Champion-Verlust und Wettbewerber-Erwähnungen früher als manuelle Forecast-Reviews. Für M365-/Dynamics-Umgebungen bietet der Dynamics 365 Sales Opportunity Agent einen EU-compliant Einstieg ohne zusätzliche Vendor-Beziehung.
tools:
  - id: clari-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Kategorieführer für Revenue Orchestration mit Roll-up Forecasting, Pipeline Inspection und RevAI Risk-/Upside-Flags aus CRM/Email/Calls. Reines Forecasting-Layer ist in DACH BetrVG-leichter als Conversation Intelligence; trotzdem mitbestimmungspflichtig sobald Manager Commentary in Performance einfließt.
    caveats:
      - US-Hosting Standard, EU-Region nur in Premium-Tiers verhandelbar
      - Auto-Generated Manager Commentary potenziell Art. 22 DSGVO (automatisierte Entscheidung)
      - Salesloft-Merger 2025 erzeugt Roadmap- und Stack-Konsolidierungs-Risiko
      - $200-400/User/Monat plus Gong als parallele Lösung treibt Total-Cost auf $400-600K
      - US-Hosting Standard, EU-Region nur in Premium-Tiers — bei DPO-Freigabe vorher klären
      - Auto-Generated Manager Commentary kann nach Art. 22 DSGVO als automatisierte Entscheidung gewertet werden, wenn sie Performance-Konsequenzen hat
      - Roadmap-Konsolidierung Clari + Salesloft + Drift erschwert Vendor-Lock-in-Bewertung
      - Premium-Pricing (~$200-400/User/Monat); gemeinsam mit Gong $400-600K für 100-Personen-Team
      - Conversation Intelligence (Clari Copilot, ex-Wingman) gilt als noch reifend
      - Nach Salesloft-Übernahme 2025 strategische Neuausrichtung
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Bricht Spreadsheet-Forecasts auf, Single Source of Truth
        - Gut für Roll-up & Board-Reporting
      complaints:
        - Sehr teuer, Salesforce-Forecast-Native holt auf
        - Hilft nicht, wenn Reps Stage-Daten lügen
    sources:
      - id: xyzeo-com-product-clari
      - id: businesswire-com-news-home-20260414171093-en-clari-salesloft-connect-forecasting-to-execution-open-revenue-data-to-external-ai-with-mcp-server
      - id: therevopsreport-com-tools-gong-vs-clari
      - id: reddit-com-r-salesoperations-comments-1rf428y-still-on-spreadsheets-for-sales-forecasting-in
      - id: reddit-com-r-salesforce-comments-1bc1hln-salesforce-forecasting-vs-rev-tech-clari-gong
  - id: gong-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Marktführer für Conversation Intelligence mit eigener Deal-Intelligence-Schicht (Smart Trackers, Deal Boards, Risk-Signale aus Calls + CRM). Spürt Slipping Deals durch Engagement-Drop, Champion-Verlust und Wettbewerber-Erwähnungen früher auf. In DACH klar §87 BetrVG-Fall — Betriebsvereinbarung vor Rollout zwingend.
    caveats:
      - Conversation Recording braucht beidseitige Einwilligung nach §201 StGB
      - Sentiment in Coaching/Performance ist mitbestimmungspflichtig nach §87 BetrVG
      - EU Data Residency nur als Option — vor Vertrag explizit verhandeln (Schrems II)
      - Listenpreis ~$250/User/Monat, 6-8 Wochen Onboarding, Forecasting-Modul schwach
      - Gong-Recording von Kundenanrufen braucht in DACH ausdrückliche, beidseitige Einwilligung (§201 StGB) — Opt-out-Logik reicht nicht
      - "EU AI Act: als 'Limited Risk' eingestuft, aber Transparenzpflicht gegenüber Gesprächspartnern und Mitarbeitern dokumentieren"
      - "Schrems II: SCCs alleine reichen DPAs in DE oft nicht — TIA und EU-Region explizit verhandeln"
      - Hoher Listenpreis (~$250/User/Monat gebündelt, 6-8 Wochen Onboarding)
      - Forecasting-Modul gilt als schwach im Vergleich zu Clari/Aviso
      - Mitbestimmungspflichtig (§87 BetrVG) wenn Sentiment in Coaching/Performance einfließt
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Best-in-class Call-Transcription und Coaching
        - Deckt qualitative Deal-Signale auf
      complaints:
        - Forecast-Modul schwach
        - Sehr teuer, Adoption schwierig
        - Tool-Müdigkeit in CMO-Kreisen
    sources:
      - id: oliv-ai-blog-best-deal-intelligence-platform
      - id: therevopsreport-com-tools-gong-vs-clari
      - id: orm-tech-com-blog-clari-vs-gong
      - id: compound-law-de-de-compliance-ai-employee-monitoring
      - id: reddit-com-r-sales-comments-1r9292l-anyone-else-feel-like-theyre-failing-their-reps
      - id: reddit-com-r-sales-comments-1r9292l-anyone-else-feel-like-theyre-failing-their-reps
  - id: knowledge-hubspot-com-records-use-deal-scores
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Native AI-Deal-Scores für HubSpot-Mid-Market-Kunden: Score 0-100 aus Properties, Rep-Aktivität, Buyer-Engagement und Stagnation, Refresh alle 6h, Top-5-Faktoren transparent. Sinnvoller Triage-Einstieg ohne zusätzlichen Vendor; in HubSpot Sales Hub Pro/Enterprise enthalten."
    caveats:
      - EU Data Hosting nur in Enterprise-Plan und nur für Neukunden
      - Breeze-Trainingsdaten-Nutzung im Standard-DPA prüfen — Opt-out für Modell-Training erforderlich
      - Sieht nur HubSpot-Daten, keine Conversation Intelligence ohne Add-on (Conversation Intelligence ist §87 BetrVG-Trigger)
      - EU Data Hosting nur in Enterprise-Plan und nur für Neukunden — Migration bestehender Tenants kompliziert
      - Breeze AI-Trainingsdaten-Nutzung in Standard-DPA prüfen (Opt-out für Modell-Training erforderlich)
      - Mid-Market-Adressat passt selten zu DACH-Enterprise-Kontext der Atlas-Zielgruppe
      - Sieht nur Daten innerhalb HubSpot — keine Conversation Intelligence
      - "HubSpot warnt selbst: nicht als alleiniger Faktor nutzen"
      - Deal-Scoring wirklich nützlich erst ab ~80 Closed Deals Trainingsdaten
    sources:
      - id: knowledge-hubspot-com-records-use-deal-scores
      - id: prospeo-io-s-opportunity-scoring-ai
      - id: compound-law-de-de-tools-hubspot
  - id: help-salesforce-com-s-articleview-id-ai-einstein-sales-opportunity-scoring-htm
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Pragmatischer Default für SF-Shops in DACH: Hyperforce EU-Region verfügbar, etablierter DPA, Trust Layer für AI-Act-Transparenz. Opportunity Score 1-99 mit Top-Faktoren, Pipeline Inspection Insights aus Email/Activity/Conversation. Triage-Layer ohne zusätzliche Vendor-Beziehung — sinnvoller Schritt vor $100K-Plattformen."
    caveats:
      - Hyperforce EU-Region muss aktiv beim Provisioning gewählt werden
      - 200/200 Won/Lost als Mindestdaten, monatliches Modell-Refresh
      - Einstein Conversation Insights als Add-on löst eigene §87 BetrVG-Verhandlung aus
      - Hyperforce EU-Region muss aktiv beim Provisioning gewählt werden — Default ist nicht zwingend EU
      - Einstein Conversation Insights (Voice/Video) ist separates Add-on und löst eigene BetrVG-Verhandlung aus
      - Trust Layer-Claims unabhängig prüfen — Dokumentation der Modell-Updates für AI-Act-Risikoklassifikation einfordern
      - Benötigt 200 Closed-Won + 200 Closed-Lost in den letzten 2 Jahren
      - Modell refresht nur monatlich
      - Total Cost ~$792/User/Monat all-in (Data Cloud + Services), 2-3 Monate Setup
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - In Performance/Unlimited Editions enthalten
        - Native Salesforce-Integration
      complaints:
        - Salesforce Forecasting holt auf, macht Zusatz-Tools fragwürdig
        - Refresh nur monatlich
    sources:
      - id: trailhead-salesforce-com-content-learn-modules-ai-sales-ai-sales-deals
      - id: prospeo-io-s-deal-scoring
      - id: salesforce-com-eu-sales-artificial-intelligence
      - id: reddit-com-r-salesforce-comments-1bc1hln-salesforce-forecasting-vs-rev-tech-clari-gong
  - id: learn-microsoft-com-en-us-dynamics365-sales-configure-opportunity-research-agent
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Für M365-/Dynamics-zentrische DACH-Konzerne der compliance-pragmatischste Einstieg: EU Data Boundary, etablierte DPAs, Trust Center mit BetrVG-relevanten Konfigurationsoptionen. Predictive Opportunity Scoring (40/40-Daten) plus 2026 GA Sales Opportunity Agent für Stakeholder/Wettbewerber-Intel und Risk-Mitigation, eingebettet in Teams-Workflows."
    caveats:
      - EU Data Boundary deckt nicht alle Copilot/Agent-Subprozesse — produktspezifisch bestätigen lassen
      - Niederländische DPA stuft Teams-Transkription als Hochrisiko ein — DSFA verpflichtend
      - Mindestdaten 40/40 Won/Lost; Agent-Setup mit Knowledge-Sources nicht trivial
      - EU Data Boundary deckt nicht alle Copilot-/Agent-Subprozesse — produktspezifische Bestätigung verlangen
      - Niederländische DPA hat Teams-Transkription explizit als Hochrisiko klassifiziert — DSFA Pflicht
      - Sales Opportunity Agent ist 2026 frisch GA — wenig produktive DACH-Referenzen, Pilot-Phase einplanen
      - Mindestens 40 Won + 40 Lost Deals in der Trainings-Periode nötig
      - Lizenzkosten Sales Premium / Copilot-Add-ons können erheblich sein
      - Agent-Setup erfordert Connector-Konfiguration und Knowledge Sources
      - "Pipeline-Forecasting-Tiefe gilt als schwächer als Clari/Einstein (r/Dynamics365-Feedback: ohne hohe CRM-Datenqualität kaum nutzbar)"
    sources:
      - id: learn-microsoft-com-en-us-dynamics365-sales-configure-opportunity-research-agent
      - id: learn-microsoft-com-en-us-dynamics365-sales-configure-predictive-opportunity-scoring
      - id: crmsoftwareblog-com-2025-10-get-more-value-out-of-your-sales-pipeline-with-predictive-opportunity-scoring
      - id: resources-rework-com-news-ai-at-work-microsoft-copilot-wave1-sales-agents-cro
      - id: prospeo-io-s-sales-copilot
  - id: haliro-io-en-products-deal-intelligence
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Europäischer Anbieter mit Real-Time Risk-Scoring (Engagement, Coverage, Momentum), Mutual Action Plans und Manager-Coaching; GDPR-/SOC2-Marketing. Interessant als europäische Alternative für DACH-Mittelständler im Pilot-Stadium.
    caveats:
      - Sehr junger und kleiner Anbieter — Lieferantenrisiko hoch
      - Konkrete EU-Hosting-Region und Sub-Processor-Liste vor Vertrag verifizieren
      - Case Studies basieren auf Einzelkunden
      - Vendor-Größe und Kundenbasis sehr klein — Lieferantenrisiko hoch
      - Sehr junger und kleiner Anbieter
      - Case-Studies basieren auf Einzelkunden
      - Wenig unabhängige Validierung
    sources:
      - id: haliro-io-en-products-deal-intelligence
  - id: bliro-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: DACH-Anbieter mit DSGVO-konformer Transkription ohne Bot/ohne Audio-Aufzeichnung, AWS Frankfurt, ISO 27001, SOC2 in Vorbereitung. Capture-Layer für Deal-Signale ohne klassischen Recording-Trigger nach §201 StGB — minimiert BetrVG-Reibung deutlich. CRM-Updates und Deal-Intelligence-Agents als Aufsatz. Likely missed by market scan because bliro als 'Meeting Assistant' positioniert ist, nicht als 'Deal Risk'-Tool.
    caveats:
      - Deal-Risk-Funktionalität ist ein Aufsatz auf Transkription, nicht Kernfunktion — funktional schmaler als Clari/Gong
      - Vendor-Größe und Kundenbasis kleiner als US-Player
      - "Mitbestimmung trotzdem prüfen: Ohne Audio reduziert sich Recording-Risiko, Verhaltensanalyse über Transkripte bleibt mitbestimmungspflichtig"
    sources:
      - id: bliro-io-en-compare-bliro-vs-kickscale
  - id: kickscale-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Wiener Scale-up mit explizitem DACH-Fokus, Hosting in Deutschland, ISO 27001 — adressiert genau die Datenresidenz- und Spracherkennungs-Lücke der US-Player. Revenue-Intelligence mit Deal-Health-Scoring aus Activity, Engagement und Decision-Maker-Beteiligung. Likely missed by market scan because der Anbieter DACH-only ist und ohne 'AI'-Buzzword-Marketing eher als europäische Alternative auftritt.
    caveats:
      - Vendor-Größe limitiert Enterprise-Procurement-Reife (kleines Team, Scale-up-Phase)
      - Forecast-Modell weniger battle-tested als Clari/Aviso
      - EU AI Act Transparenz-Dokumentation für Risk-Scoring vor Rollout einfordern
    sources:
      - id: kickscale-com-en-blog-kickscale-iso-27001-compliance-advantage-us-competitors-cannot-buy
  - id: mediafly-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Enterprise-Suite mit Energy Scores für Deal-Inspection als integriertes Modul neben Enablement/Coaching/Forecasting. Kunden wie Nestlé, Honeywell, Adobe deuten auf reale Enterprise-Reife. Likely missed by market scan because Mediafly primär als 'Revenue Enablement' / Sales-Content-Suite vermarktet wird und Deal-Risk nur als Feature unter Revenue360 firmiert — ein klassischer Bundling-Effekt.
    caveats:
      - Eigenständige Deal-Intelligence-Funktionen weniger ausgebaut als bei Clari/Gong
      - Hosting-Region und DACH-spezifische Compliance-Optionen vor Vertrag verifizieren
      - Sehr breite Suite — Lock-in-Risiko und Total-Cost-of-Ownership müssen geprüft werden
    sources:
      - id: mediafly-com-press-releases-mediafly-advances-revenue-intelligence-capabilities-extends-game-changing-deal-inspection-with-in-platform-coaching
start_here: "Den Pilot mit dem CRM-nativen Tool beginnen: Dynamics 365 Sales Opportunity Agent für Microsoft-Shops, Clari für pipeline-fokussierte Forecasting-Teams — Gong ergänzend für qualitative Call-Signale. Risk Flags zunächst wöchentlich im Forecast-Call reviewen und Thresholds konservativ kalibrieren, bevor Reps proaktiv gewarnt werden."
caveats: Falsche Positives sind häufig — konsensual schweigsame Buyer werden regelmäßig fälschlich als Risiko geflaggt. Sentiment-Analyse von Mitarbeiterkommunikation ist in DACH nach §87 BetrVG mitbestimmungspflichtig, sobald sie in Coaching oder Performance-Bewertung einfließt.
sources: []
---
