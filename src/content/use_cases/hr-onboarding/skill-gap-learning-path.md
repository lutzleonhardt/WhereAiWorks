---
stage: hr-onboarding
order: 16
roles:
  - hr-recruiting
title: Skill-Gap & Learning-Path-Generierung
goal_label: Individuelle Lernpfade aus Skill-Gap-Analyse ableiten
suitability: conditional
rationale: Plattformen wie Eightfold (IDC MarketScape Leader 2025, ISO-42001-zertifiziert) und Workday Skills Cloud decken den Gap-to-Path-Flow von der Skill-Modellierung bis zur Lernpfad-Steuerung ab; TechWolf ergänzt als Skills-Inferenz-Layer, der Signale direkt aus Arbeits-Tools extrahiert statt auf Selbsteinschätzung zu setzen. Der Use Case ist technisch reif, setzt aber ein gepflegtes Skill-Modell und eine saubere LMS-Anbindung voraus.
tools:
  - id: cornerstoneondemand-com-platform-cornerstone-galaxy-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Im DACH-Konzernumfeld weit verbreitet (Pharma, Public Sector, Banken) mit deutscher UI und EU-Hosting. SkyHive-Skills-Engine + EdCast-LXP + Cornerstone Learn liefern eines der vollständigsten Bündel. UX-Schwächen sind real, dafür hohe Konfigurierbarkeit für Mitbestimmungs-Anforderungen.
    caveats:
      - Backend-/Admin-UX gilt als veraltet – dediziertes Admin-Team einplanen
      - Customer Support wird in Reviews konsistent kritisiert
      - Galaxy-AI-Features nicht in allen Editions enthalten – Lizenz-Tier prüfen
      - DSGVO-konforme Konfigurierbarkeit gut, aber Default-Settings oft zu liberal
      - Modul-Konsistenz uneinheitlich (Galaxy AI noch jüngeres Bündel)
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Sehr robust für regulierte Branchen (Pharma, Public Sector)
        - Tiefe Konfigurierbarkeit ohne Coding
      complaints:
        - UI clunky, Admin braucht dediziertes Team
        - Customer Support 'remarkably bad'
        - Reporting/Daten-Export via EdCast schwach
    sources:
      - id: cornerstoneondemand-com-platform-skills-engine
      - id: cornerstoneondemand-com-resources-article-powering-human-growth-in-the-age-of-ai
      - id: reddit-com-r-instructionaldesign-comments-19722q3-what-are-your-opinions-on-cornerstone-ondemand-as
  - id: degreed-com-experience-artificial-intelligence
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: ISO-27001 + ISO-9001 + Fosway Strategic Leader 2026 + SAP Endorsed Partner – belastbares Compliance-Profil. LXP-nativer Skill-Coach mit Maestro Skill Check-Ins. Sinnvoll, wenn ein zentraler LXP statt HCM-Modul gewählt wird.
    caveats:
      - Skill-Daten leben in Degreed – ohne saubere Sync zu SAP/Workday entsteht zweite Wahrheit
      - Skill Check-Ins basieren auf Self-/Manager-Rating – §87 Mitbestimmung trotzdem relevant, da systematisch
      - Maestro ist Add-on – Lizenzkosten oben drauf
      - Maestro-Features rollen schrittweise; Funktionsumfang releaseabhängig
    sources:
      - id: degreed-com-experience-artificial-intelligence
      - id: ca-degreed-com-experience-blog-driving-measurable-transformation-with-degreed-maestro
      - id: businesswire-com-news-home-20260408839371-en-degreed-named-a-strategic-leader-in-the-2026-fosway-9-grid-for-learning-systems-amid-recent-ai-innovation-announcements
  - id: workday-com-en-us-products-human-capital-management-skills-cloud-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Default für Workday-HCM-Bestand mit EU-Datacentern; Illuminate inferiert Skills auch ohne starke Profilpflege. Im selben Tenant wie Workday Learning – kein zweiter Datenfluss. PwC-Customer-Story zeigt Mitbestimmungs-konformes Roll-out im DACH-Beratungssektor.
    caveats:
      - Workday EU-Pod erfordert explizite Vertragsklausel – nicht Default
      - Career Hub-Empfehlungen sind §87 BetrVG-relevant, da sie Karriere-/Personalentwicklung steuern
      - Voller Wert nur, wenn Workday HCM/Learning bereits genutzt wird
      - User müssen Profile aktiv pflegen – sonst lückenhafte Skill-Daten
      - AI-Empfehlungen hängen an Workday-Taxonomie; firmen-spezifische Skills brauchen Tuning
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Tiefe Workday-Integration, Skill-Daten direkt im Karriere-Workflow
        - Skills-First-Strategien (z.B. Rolls-Royce, PwC) skalieren
      complaints:
        - Übersieht transferable Skills, wenn nicht explizit erfasst
        - Mitarbeitende vergessen Profile zu pflegen, Datenqualität leidet
        - Implementierung größer als Workday kommuniziert
    sources:
      - id: workday-com-en-ca-products-human-capital-management-skills-cloud-html
      - id: workday-com-en-gb-customer-stories-i-p-pwc-workday-skills-cloud-can-be-critical-in-your-journey-html
      - id: workday-com-de-de-pages-cb-workday-skills-cloud-html
      - id: reddit-com-r-workday-comments-1qh8bzk-what-are-some-of-the-common-pitfalls-in-workday
      - id: infotech-com-software-reviews-products-workday-skills-cloud-c-id-424
  - id: beamery-com-platform-sourcing
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Skills-Layer auf Workday/SAP für gesamten Talent Lifecycle; TalentGPT mit Explainable-AI-Fokus. Für DACH besonders wenn Recruiting-zu-Mobility integriert gedacht ist. Für reinen Skill-Gap-Lernpfad-Use-Case nicht erste Wahl.
    caveats:
      - Primär TA/Recruiting, Lernpfad-Generierung Sekundär
      - Lernpfade kommen meist aus angeschlossenem LMS/LXP, nicht von Beamery selbst
      - EU-Hosting verfügbar, aber GenAI-Features oft in US-Region
      - Wenig DACH-Referenz-Logos öffentlich
    sources:
      - id: beamery-com-ai-index-html
      - id: beamery-com-resources-blogs-the-key-to-better-talent-lifecycle-management-skills-intelligence
      - id: beamery-com-resources-skills-task-intelligence-workforce-intelligence-suite
  - id: docs-oracle-com-en-cloud-saas-talent-management-faimh-overview-of-dynamic-skills-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Für Oracle-HCM-Bestände in DACH (Telcos, Public Sector) relevant; EU Restricted Access Pod erleichtert datenschutz-sensible Deployments. Standalone-Wert gegenüber Eightfold/Workday begrenzt.
    caveats:
      - Wert primär für bestehende Oracle-HCM-Kunden
      - Skills Advisor ist Empfehlungs-Engine, kein agentischer Coach
      - EU Restricted Access Pod verfügbar, aber nicht alle KI-Features in allen Pods
      - Learning-Features teils noch Controlled Availability
    sources:
      - id: docs-oracle-com-en-cloud-saas-talent-management-faimh-overview-of-dynamic-skills-html
      - id: docs-oracle-com-en-cloud-saas-talent-management-24b-faudy-skills-advisor-for-learning-html
  - id: workera-ai-skillmap-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Stärkste am Markt für verifizierte Tech/Data/AI-Skills via adaptiver Assessments – adressiert Use-Case-Caveat 'Self-Reporting reicht nicht'. Sinnvoll als Skill-Verifikations-Layer, weniger als komplette Skill-Engine.
    caveats:
      - AWS-Hosting USA – DACH-Datenresidenz nicht prominent
      - Adaptive Assessments sind eine technische Einrichtung zur Leistungsmessung – §87(1) Nr. 6 BetrVG voll einschlägig
      - Stärken bei AI/Data/Tech-Skills, weniger bei Soft Skills oder Domain-Skills
      - Verlässt sich auf Test-/Assessment-Logik – aufwendig, wenn Skill-Universum groß
    sources:
      - id: workera-ai-skillmap-ai
  - id: haufe-com-talent
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: DACH-nativer Anbieter (Freiburg) mit Performance, Nachfolge, Skills und enger Verzahnung zur Haufe Akademie als deutscher Lern-Content-Provider. Im DACH-Mittelstand regelmäßig erste Wahl wegen deutscher Mitbestimmungs-Erfahrung, deutschem Vertragspartner, deutscher Sprache.
    caveats:
      - AI-Funktionen für Skill-Gap/Lernpfad-Generierung weniger ausgereift als Eightfold/Workday Illuminate
      - Eher Mid-Market – für Konzerne mit globaler HCM-Strategie unterdimensioniert
      - Skill-Engine-Tiefe vs. spezialisierten Pure-Plays kritisch prüfen
    sources:
      - id: sprad-io-de-blog-beste-talentmanagement-software-fuer-dach-2025-vergleich-preise-und-dsgvo-betriebsrat-checkliste
  - id: personio-de
    fit: partial
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Münchner KMU-HR-Suite mit ISO-zertifizierten Servern in Frankfurt, im DACH-Mittelstand de-facto-Standard. Skill- und Lernpfad-Funktionen sind 2026 Roadmap, aber die deutsche Mitbestimmungs-Praxis und EU-Hosting machen es zu einem realistischen Einstiegspunkt für Mid-Market.
    caveats:
      - Skill-/Lernpfad-AI 2026 noch limitiert – Roadmap, nicht GA-Funktion
      - Für Konzerne (>2.000 MA) unterdimensioniert
      - Best als Datenquelle für andere Skill-Engines, nicht Standalone-Lösung
    sources:
      - id: haufe-de-personal-hr-management-personio-eine-software-fuer-alle-hr-prozesse-80-380122-html
  - id: 365talents-com-en
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Französischer EU-AI-Act-affiner Spezialist mit ISO-42001, GDPR und Human-in-the-Loop – direkt Mitbestimmungs-tauglich. Société Générale, Veolia, Segula als Referenzen. Gartner Peer Insights 4,4/5 aus Versicherung, Consulting und Banking bestätigt Fit. Für DACH als Augmentation auf SAP/Workday mit klarem EU-Compliance-Profil interessant.
    caveats:
      - Azure-Hosting in EU – konkrete Region (Frankfurt vs. Paris) im DPA festlegen
      - Als Augmentation auf SAP/Workday gedacht – Standalone-Wert geringer
      - Skill-Frameworks brauchen initialen Kuratierungsaufwand
      - Lerninhalte über LMS/LXP-Anschluss, nicht eigene Bibliothek
      - Deutsche Referenz-Logos noch dünn
    sources:
      - id: 365talents-com-en-product-technology
      - id: 365talents-com-en-how-it-works
      - id: gartner-com-reviews-product-365talents
  - id: edyoucated-org-en
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Made-in-Germany, EU-Hosting, AI-extrahierte firmenspezifische Skill-Library – methodisch überzeugend für DACH-Organisationen bis ~5.000 MA. Kunden wie BORA, BASF Coatings und Deutsche Bahn (auf Vendor-Site dokumentiert) zeigen Praxistauglichkeit. Für Mid-Market ohne Global-HCM-Anforderung sinnvoll; unabhängige Analyst- und Reviewer-Abdeckung ist dünn.
    caveats:
      - Skalierung über 10k MA öffentlich nicht belegt – Vendor-Survivability prüfen
      - Keine Gartner-, Fosway- oder G2-Abdeckung gefunden – unabhängige Validierung schwach
      - Kleinerer Anbieter – Vendor-Lock-in prüfen, ggf. Source-Code-Escrow
      - Eigene Inhalte begrenzt; Stärken eher in Methodik/Plattform
      - Marktreife der AI-Komponenten (Stand 2026) noch zu validieren
    sources:
      - id: edyoucated-org-en
      - id: edyoucated-org-blog-skill-management-software-vergleich-2026
      - id: edyoucated-org-en-us-customers-bora
      - id: omr-com-en-reviews-product-edyoucated
  - id: eightfold-ai-products-talent-intelligence-suite
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Etablierter Talent-Intelligence-Marktführer: IDC MarketScape Leader 2025, Everest Group PEAK Matrix Leader 2025 für Skills Intelligence Platforms, Gartner Peer Insights gelistet. ISO-42001-zertifiziert, EU-US-DPF-konform. Modelliert Skills, schließt Gaps und steuert Career Hub. Im DACH-Einsatz Mitbestimmungs- und DSGVO-Vereinbarung Pflicht."
    caveats:
      - AWS-Hosting USA – EU-Datenresidenz nur über Customer-Configuration; im AVV explizit absichern
      - Profile-Modeling auf Mitarbeitende ist klar §87(1) Nr. 6 BetrVG – Betriebsvereinbarung Pflicht
      - Implementierung 9-18 Monate realistisch, lohnt erst ab ca. 5.000 MA
      - Globaler Talent-Datensatz als Trainingsbasis – Data-Minimisation-Konfiguration zwingend
      - Wert hängt stark von sauberer LMS-/HCM-Integration ab
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Starke Match-Logik wenn Daten sauber sind
        - Reduziert externes Hiring durch interne Mobility
      complaints:
        - Implementierung lang und teuer
        - Datenqualität entscheidet, generische Outputs ohne Tuning
    sources:
      - id: eightfold-ai-use-cases-talent-upskilling
      - id: eightfold-ai-wp-content-uploads-augmenting-workday-with-eightfold-for-talent-acquisition-pdf
      - id: eightfold-ai-security
      - id: eightfold-ai-blog-6-lessons-skills-work
      - id: gartner-com-reviews-market-talent-management-suites-vendor-eightfold-product-eightfold-talent-intelligence-platform
  - id: gloat-com-use-cases-agents-upskilling-agent
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Skill-Gap-Detection auf Sub-Skill-Ebene mit Evidence-Signalen statt Course-Completion – funktional führend. Schneider Electric, Unilever, Mastercard als Referenzen. Gartner Peer Insights für Internal Talent Marketplaces gelistet. DACH-Hürde: Skill-Signale aus Arbeits-Tools sind §87(1) Nr. 6 BetrVG-Tatbestand und brauchen harte Betriebsvereinbarung."
    caveats:
      - Israelisches HQ – Datentransfer und Geopolitik im AVV thematisieren
      - Vendor-eigene Outcome-Zahlen (z.B. 2-3x faster skill acquisition) nicht unabhängig validiert
      - Skill-Inferenz aus Arbeits-Tools triggert maximale Mitbestimmungs-Pflicht
      - Marktposition stark auf interne Mobility, weniger auf reine LMS-Funktionen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Beste AI für interne Talent-Marketplace-Empfehlungen laut Gartner-Anwendern
        - 70/30/10-Lernmodell in Plattform integriert
      complaints:
        - Nur 74 Reviews auf Enterprise-Plattformen – geringe Bewertungsdichte
    sources:
      - id: gloat-com-use-cases-agents-upskilling-agent
      - id: gloat-com-academy-skills-gap-detection-learning-matching
      - id: gartner-com-reviews-market-internal-talent-marketplaces-vendor-gloat
  - id: sap-com-uk-products-hcm-career-talent-development-features-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Default für DACH-SAP-HCM-Bestand mit klaren EU-Hosting-Optionen, deutschem Vertragspartner (SAP SE Walldorf) und SAP-AI-Ethics-Framework. Joule liefert AI-assisted Career Insights und Skill-Empfehlungen direkt im SuccessFactors-Workflow. CIO.com (April 2026) bestätigt TIH als stärksten Skills-Inference-Pfad; Joule-Chatbot-Features skeptisch bewertet.
    caveats:
      - Talent Intelligence Hub erfordert eigene Datenmodellierung – Beratungsaufwand 6-12 Monate realistisch
      - Joule-Sub-Prozessoren (z.B. Anthropic, OpenAI) müssen im AVV transparent sein
      - AI-Funktionen erst mit aktiviertem Joule und Talent Intelligence Hub – Lizenz/Release-abhängig
      - Skills-Architektur muss erst aufgebaut werden; AI-assisted Extraction hilft, ersetzt aber nicht Governance
      - Joule-Copilot-Features liefern Anregungen, kein autonomer Coach
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - TIH ist der schnellste Wert-Pfad für Skills-Intelligence im SAP-Ökosystem (SAP Community)
        - Human-in-the-Loop für Skill-Inferenz korrekt implementiert (1H 2026 Release)
      complaints:
        - Joule-Chatbot-Features als 'bells and whistles' eingestuft (Analyst, CIO.com)
        - Dirty job architecture vor TIH-Rollout bereinigen – häufigster Fehler
    sources:
      - id: learning-sap-com-learning-journeys-explore-sap-successfactors-solutions-leveraging-ai-capabilities-in-sap-successfactors
      - id: learning-sap-com-courses-sap-successfactors-career-development-planning-and-mentoring-academy-configuring-ai-capabilities-for-development-goal-management-dd359034-b37c-441f-b4d4-4fa07e007ad5
      - id: cio-com-article-3593358-sap-ups-ai-factor-in-its-successfactors-hcm-suite-html
  - id: skillsoft-com-percipio
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: AI-native Skills-Management-Plattform mit eigener Compliance-/Tech-/Leadership-Inhaltsbibliothek und CAISY-AI-Simulationen. Fosway 9-Grid Strategic Leader 2026 zum fünften Mal in Folge (EMEA's führende Analyst-Referenz für Learning Technology). Im DACH-Konzernumfeld neben Cornerstone und Degreed Default-Auswahl.
    caveats:
      - Skill-Engine als Skills-Intelligence-Plattform 2025/2026 repositioniert – Reife vs. Eightfold/365Talents prüfen
      - Hauptwert kommt aus Inhaltsbibliothek – ohne Gesamtbelegschafts-Lizenz begrenzter Nutzen
      - "EU-Hosting/AVV im Detail prüfen, US-Mutterhaus (NYSE: SKIL)"
    sources:
      - id: skillsoft-com-blog-skillsoft-percipio-platform
      - id: gartner-com-reviews-market-digital-learning-content-providers-vendor-skillsoft-product-skillsoft
      - id: skillsoft-com-press-releases-skillsoft-named-a-strategic-leader-in-the-fosway-9-grid-for-digital-learning-despite-an-evolving-market
  - id: techwolf-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Belgischer Skills-Inferenz-Layer, der Skills aus Arbeits-Tools (Jira, Salesforce, ServiceNow) ableitet und in SAP SuccessFactors TIH bzw. Workday HCM zurückschreibt. Fosway Strategic Challenger 2025 (CEO David Wilson: 'key position as an enabler') und Everest Group PEAK Matrix Leader & Star Performer 2026 für Skills Intelligence Platforms. Ericsson (100k Mitarbeitende), HSBC und PayPal als dokumentierte Enterprise-Kunden."
    caveats:
      - Skill-Inferenz aus Jira/Salesforce/ServiceNow ist klar §87(1) Nr. 6 BetrVG – Betriebsvereinbarung Pflicht
      - Liefert keinen eigenen Lernpfad – braucht SAP/Workday-LMS oder Degreed/Cornerstone als Konsument
      - EU-Hosting verfügbar, im DPA explizit verankern
    sources:
      - id: techwolf-ai-product-integrations-sap
      - id: techwolf-ai-customer-stories-workday
      - id: techwolf-com-press-techwolf-advances-its-mission-to-power-workforce-transformation
      - id: techwolf-ai-press-techwolf-named-a-leader-and-star-performer-in-the-everest-group-skills-intelligence-platforms-peak-matrix-assessment-2026
start_here: Workday-HCM-Bestände pilotieren direkt mit Workday Skills Cloud und Illuminate im bestehenden Tenant – kein zweiter Datenfluss, Mitbestimmungsvereinbarung zuerst abschließen. SAP- oder HCM-agnostische Umgebungen evaluieren TechWolf als ersten Schritt, bevor eine vollständige Talent-Intelligence-Plattform wie Eightfold eingeführt wird.
caveats: Skill-Taxonomien sind firmenspezifisch – ohne initialen Kurationssaufwand und saubere LMS-/HCM-Anbindung bleiben Lernpfad-Empfehlungen generisch. Skill-Inferenz und Profile-Modeling fallen in DACH unter §87(1) Nr. 6 BetrVG; eine Betriebsvereinbarung ist vor jedem Roll-out zwingend.
sources: []
---
