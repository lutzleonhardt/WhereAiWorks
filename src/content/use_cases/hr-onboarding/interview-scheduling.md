---
stage: hr-onboarding
order: 2
roles:
  - hr-recruiting
title: Interview-Scheduling
goal_label: Kandidaten-Termine ohne manuelles Hin-und-Her abstimmen
suitability: conditional
rationale: Meetergo und Personio Smart Scheduling zeigen, dass DACH-natives Interview-Scheduling — DE/EU-Hosting, sofort unterzeichnungsfähiger AVV, ATS-Integration — ohne US-Vendor-Risiko produktiv einsetzbar ist. Manueller Koordinationsaufwand zwischen Recruiter, Panel und Kandidat ist bei mittlerem Hiring-Volumen hoch genug, um Self-Service-Scheduling betriebswirtschaftlich zu tragen.
tools:
  - id: candidate-fyi
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Native Personio-Integration ist echter DACH-Anschluss; AI-Coordination-Layer für Self-Scheduling, Panel-Sequencing, Auto-Replacement. Praktiker-Signal positiv. EU-Hosting/AVV explizit anzufragen.
    caveats:
      - Kleinerer Vendor — Stabilitäts- und Continuity-Risiko
      - EU-Hosting/Sub-Processor-Liste/AI-Act-Konformität nicht prominent dokumentiert
      - Bei Übernahme Vertragsregime neu prüfen
      - Sub-Processor-Liste, EU-Hosting und AI-Act-Konformität explizit anfragen
      - Bei Übernahme durch größeren Anbieter Vertrags-Continuity prüfen
      - Kleinerer Vendor — Stabilitätsrisiko
      - Hosting/DSGVO separat klären
      - Weniger Brand als GoodTime/ModernLoop
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Self-Scheduling funktioniert verlässlich
        - Coordinator-Workload reduziert sich messbar
      complaints:
        - Kleinerer Anbieter — Risiko bei Skalierung
    sources:
      - id: candidate-fyi
      - id: candidate-fyi-interview-scheduling-personio
      - id: reddit-com-user-thelunchbawx-comments
  - id: support-personio-de-hc-en-us-articles-4486092226973-use-smart-interview-scheduling
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Deutscher Vendor (München), EU-Hosting, AVV-Standardvertrag, Default im DACH-Mittelstand. Smart Scheduling deckt 1:1- und Panel-Slots gegen Kalenderverfügbarkeit ab; Cronofy als Sub-Processor ist dokumentierbar. Geringste Compliance-Reibung im Markt.
    caveats:
      - AI-Tiefe begrenzt — keine konversationelle Buchung, kein Multi-Loop-Algorithmus
      - Kein SMS/WhatsApp out-of-the-box; für Frontline-Hiring zu schwach
      - Erweiterte Workflows benötigen Add-ons (candidate.fyi, JobTalk)
      - Smart Scheduling basiert auf Cronofy-Backend — Sub-Processor-Kette transparent dokumentieren
      - Keine SMS/WhatsApp — bei Frontline-/Hourly-Hiring Funktionslücke
      - AI-Tiefe begrenzt — keine konversationelle Buchung, kein Multi-Panel-Loop-Algorithmus
      - Nicht für High-Volume-Frontline (Paradox-Profil)
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - DSGVO-Klarheit — deutscher Vendor, EU-Hosting
        - Native im DACH-meistgenutzten ATS
      complaints:
        - Recruiting-Tiefe begrenzt — Skima/JobTalk/candidate.fyi als Add-ons nötig
        - Keine SMS/WhatsApp-native
    sources:
      - id: support-personio-de-hc-en-us-articles-4486092226973-use-smart-interview-scheduling
      - id: community-personio-com-learn-share-137-our-approach-to-smart-interview-scheduling-with-cronofy-1706
  - id: greenhouse-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Greenhouse-natives Scheduling — für Greenhouse-Kunden ohne Vendor-Wechsel. Greenhouse selbst bietet EU-Datenresidenz (aktiv zu wählen) und veröffentlichte DPA, was die Compliance-Story besser macht als reine US-Wettbewerber.
    caveats:
      - Lock-in an Greenhouse
      - EU-Region nicht Default — vertraglich aktiv setzen
      - Innovationstempo seit Übernahme moderat
      - EU-Datenresidenz muss bei Greenhouse-Vertrag aktiv gewählt werden (nicht Default)
      - Wertverlust bei ATS-Wechsel — strategische Lock-in-Frage
      - Lock-in an Greenhouse — Wertverlust bei ATS-Wechsel
      - Weniger AI-Marketing als GoodTime/ModernLoop
      - Praktiker bezeichnen Setup als 'Calendar Tetris' Ersatz, nicht echte Agentik
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Native zu Greenhouse — kein Tool-Switching
        - Solide RC-Workflows
      complaints:
        - Weniger Innovation seit Greenhouse-Übernahme
        - Migration zu ModernLoop häufig dokumentiert
    sources:
      - id: ustechautomations-com-resources-blog-recruiting-interview-scheduling-comparison-2026
      - id: saashub-com-compare-goodtime-vs-prelude
  - id: cronofy-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: UK-Vendor mit dokumentierter EU-Datenresidenz, ISO 27001, AVV — sauberste Compliance-Story unter den Calendar-APIs. In 70+ HR-Tools eingebettet (u.a. Personio). Build-or-Embed-Default für DACH-Eigenentwicklungen.
    caveats:
      - Kein Endnutzer-Tool — erfordert Engineering-Integration
      - "AI-Layer minimal: Slot-Matching, kein konversationeller Bot"
      - UK-Adequacy ist politisch volatil — Vertragsregime im Auge behalten
      - "Build-vs-Buy-Entscheidung: ohne eigenes Engineering-Team nicht produktiv nutzbar"
      - Post-Brexit ist UK Drittland — Adequacy-Status besteht, ist aber politisch volatil
      - "Kein Endnutzer-Tool: erfordert Engineering-Integration"
      - AI-Layer minimal — Slot-Matching, kein konversationeller Bot
      - Reine Scheduling-Engine, keine ATS-/Sourcing-Logik
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Solide Calendar-API über Google/Outlook/Apple
        - Embedded in vielen HR-Tools — bewährte Stabilität
      complaints:
        - Kein End-User-Tool — Build-Aufwand
        - Keine konversationelle Schicht
    sources:
      - id: recruitcompare-io-tool-cronofy
      - id: community-personio-com-learn-share-137-our-approach-to-smart-interview-scheduling-with-cronofy-1706
  - id: help-sap-com-docs-successfactors-recruiting-setting-up-and-maintaining-sap-successfactors-recruiting-configuring-interview-scheduling
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Für DAX-/Mittelstands-Bestandskunden mit SF-HCM die operativ einfachste Wahl: EU-Datenresidenz, SAP-Vertragsregime, integrierte Compliance-Argumentation. Joule-Agenten 1H 2026 noch früh, native Scheduling-Limits real."
    caveats:
      - Native Scheduling klobig — Drittanbieter (Paradox/GoodTime) häufig nötig
      - Joule-Recruiting-Agenten 2026 noch im Rollout — Reife abwarten
      - Implementierungspartner-Kosten dominieren TCO
      - Implementierungspartner-Kosten (PwC/Deloitte/Kienbaum) sind regelmäßig der größere Posten als die Lizenz
      - Native Limits (kein paralleles Multi-Interview im selben Status) führen oft zu Drittanbieter-Bedarf
      - Native Scheduling-Funktion historisch limitiert (kein Multi-Interview im selben Status)
      - AI-Agenten 2026 noch im Rollout — Reife abwarten
      - Konfiguration erfordert Partner-Consultant
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - "Bestandskunden-Vorteil: keine Vendor-Erweiterung nötig"
        - EU-Datenresidenz möglich
      complaints:
        - Native Scheduling klobig, dritter Vendor (Paradox/GoodTime) oft nötig
        - Joule-Agenten für Recruiting noch früh
    sources:
      - id: artificialintelligence-news-com-news-sap-brings-agentic-ai-human-capital-management
      - id: userapps-support-sap-com-sap-support-knowledge-en-2342883
  - id: workday-com-content-dam-web-de-documents-datasheets-datasheet-workday-recruiting-pdf
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Für Workday-Konzerne in DACH die einzige praktikable Wahl ohne Vendor-Wechsel. EU-Datenresidenz (Workday Limited Dublin) und solide DPA. Marketplace-AI-Agenten sind als Drittanbieter separat zu prüfen.
    caveats:
      - Native Scheduling funktional schwach — Drittanbieter oft nötig (mit allen DSGVO-Risiken)
      - AI Interview Agent ist Marketplace-Drittanbieter, eigener Vendor-Risk
      - Hoher Implementierungs-/Customizing-Aufwand
      - AI Interview Agent ist Marketplace-Drittanbieter — eigener Vendor-Risk-Prozess nötig
      - Native Scheduling oft funktional zu schwach — Drittanbieter (Paradox/GoodTime/Rooster) faktisch häufig im Einsatz, mit allen oben genannten Risiken
      - Native Scheduling oft als unzureichend empfunden — Drittanbieter (GoodTime, Rooster, Paradox) ergänzen
      - AI-Interview-Agent ist Marketplace-App, separat zu evaluieren
      - Hohe Implementierungskosten / Customizing-Aufwand
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - End-to-End in HCM-Suite
        - Enterprise-Compliance solide
      complaints:
        - Native Scheduling häufig durch GoodTime/Paradox ergänzt
        - Hoher Implementierungsaufwand
    sources:
      - id: blog-workday-com-de-de-ki-recruiting-tools-html
      - id: marketplace-workday-com-en-us-apps-601666-ai-interview-agent-overview
  - id: cal-com-europe
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Open-Source-Calendly-Alternative mit explizitem EU-Hosting (Cal.eu) und Self-Host-Option — strategische Wahl für Datenresidenz-Maximalisten und Betriebsrats-sensitive Setups. Recruiting-Workflows (Round-Robin, Panels) vorhanden, AI-Layer rudimentär.
    caveats:
      - Default-Hosting ist US — Cal.eu muss aktiv gewählt werden
      - Recruiting-Tiefe geringer als GoodTime/Prelude
      - Self-Hosted erfordert eigenes DevOps und Patch-Verantwortung
    sources:
      - id: cal-com-europe
  - id: calenso-com-en-recruiting-terminvereinbarung
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Schweizer Vendor mit ISO 27001:2022, CH-Hosting, AVV-Workflow, dezidierte Recruiting-Landingpage. Likely missed by market scan because der Anbieter primär als generisches Termintool für Banken/Versicherungen positioniert ist und nicht als 'AI Interview Scheduler' vermarktet wird.
    caveats:
      - CH ist EU-rechtlich Drittland mit Adequacy — für reine EU-Datenhaltung Personio/meetergo vorzuziehen
      - Recruiting-spezifische Tiefe (Panel-Loops, Interviewer-Training) begrenzt
      - ATS-Integrationen über Webhook/API — kein natives Greenhouse/Personio-Plugin
    sources:
      - id: calenso-com-en-dataprivacy
  - id: recruitee-com-security-gdpr
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Amsterdamer ATS mit nativem Interview-Scheduling, ISO 27001, EU-Hosting, AVV, dedizierten DSGVO-Features (Datenaufbewahrungsfristen, Anonymisierung, DSAR). Likely missed by market scan because Recruitee als ATS und nicht als Scheduling-Tool gelistet wird.
    caveats:
      - Nur sinnvoll bei ATS-Wechsel zu Recruitee — kein Standalone-Scheduler
      - DACH-Marktanteil hinter Personio
      - AI-Tiefe begrenzt
    sources:
      - id: recruitee-com-security-gdpr
  - id: timify-de-en-solutions-recruiting-scheduling-software
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Münchner Vendor mit Enterprise-Filialisten-Footprint, DSGVO-Auto-Delete für Kandidatendaten, REST-API. Likely missed by market scan because TIMIFY primär als Filial-/Service-Booking-Plattform vermarktet wird und Recruiting nur als Segment auftaucht.
    caveats:
      - Hosting-Region und ISO 27001 explizit anfragen — nicht prominent dokumentiert
      - AI-/Agent-Layer gering — eher klassische Scheduling-Engine
      - ATS-Integrationen rudimentär; Webhooks Pflicht
    sources:
      - id: timify-de-en-solutions-recruiting-scheduling-software
  - id: meetergo-com-en-solutions-talent
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Deutscher Vendor mit DE-Hosting, ISO 27001, SOC 2 Type II, AVV ready-to-sign, SSO/SAML, dezidierte Recruiting-Variante mit ATS-Integrationen. Likely missed by market scan because der Anbieter sich primär als generelles Scheduling-Tool 'made in Germany' positioniert und in US-AI-Recruiting-Listicles selten auftaucht.
    caveats:
      - AI-Tiefe (Panel-Algorithmik, Auto-Replacement) gegenüber GoodTime/Paradox geringer
      - ATS-Integrationsbreite kleiner als bei US-Spezialisten — Greenhouse/SuccessFactors-Tiefe verifizieren
      - Marken-Recognition in DAX-Konzernen noch begrenzt
      - Reviewer-Basis auf OMR/G2 überwiegend SMB/Mittelstand — großskaliger Enterprise-Einsatz (1000+ MA) noch nicht breit belegt
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - DSGVO-Konformität als Hauptmotiv für Wechsel von Calendly
        - Interview-Scheduling per Self-Service-Link reduziert Koordinationsaufwand messbar (SALT AND PEPPER Technology, Xentral ERP)
      complaints:
        - Lernkurve durch Funktionstiefe
        - Gelegentliche Kalender-Sync-Probleme
        - Mobile-Erfahrung noch ausbaufähig
    sources:
      - id: meetergo-com-en-features-enterprise
      - id: meetergo-com-en-solutions-talent
      - id: omr-com-de-reviews-product-meetergo-all
start_here: Personio-Bestandskunden pilotieren Smart Scheduling direkt ohne Vendor-Wechsel an einer Rolle mit mehreren Interviewrunden; ohne Personio bietet meetergo den geringsten Compliance-Einführungsaufwand mit DE-Hosting und AVV. candidate.fyi ergänzt beide als AI-Koordinations-Layer für Panel-Sequencing, sobald Self-Scheduling stabil läuft.
caveats: Die AI-Tiefe der Ankerwerkzeuge ist begrenzt — konversationelle Buchung und Multi-Panel-Algorithmik erfordern US-Spezialisten wie GoodTime oder Paradox, die eine eigene DSGVO-Prüfung mitbringen. ROI ist volumenabhängig; bei wenigen offenen Stellen pro Quartal übersteigt der Einführungsaufwand den Koordinationsgewinn.
sources: []
---
