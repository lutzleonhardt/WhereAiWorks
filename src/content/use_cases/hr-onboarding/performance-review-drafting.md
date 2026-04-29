---
stage: hr-onboarding
order: 12
roles:
  - hr-recruiting
title: Performance-Review-Drafts
goal_label: Erst-Versionen von Feedback und Reviews aus Stichworten
suitability: conditional
rationale: "Culture Amp und Lattice zeigen, dass HR-natives Review-Drafting über generisches Prompting hinausgeht: Bias-Checks, SBI-Struktur und Evidence-Aggregation aus Zielen und 1:1s sind in beiden Plattformen produktionsreif. Der Use Case ist damit für einen kontrollierten Pilot mit Betriebsrat hinreichend ausgereift."
tools:
  - id: hibob-com-features-performance
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "EU/UK-präsent mit dokumentierter AI-Governance: keine Trainings-Nutzung von Kundendaten, Zero-Retention, Opt-out, RBAC — DSGVO-tauglich. AI Writing Assistance + 360°-Summaries decken den Drafting-Use-Case ab; in Reddit-Diskussionen häufig als skalierungs-tauglich genannt."
    caveats:
      - Performance-Modul flacher als Lattice/Culture Amp
      - EU-Hosting nicht überall Default — verifizieren
      - Pricing intransparent
      - EU-Hosting nicht überall Standard — bei Vertragsabschluss verifizieren
      - Performance-Tiefe (Calibration, Rating-Frameworks) begrenzt
      - Performance-Modul gilt als weniger tief als Spezialisten (Lattice/Leapsome)
      - Pricing nicht transparent, modulares Add-on-Modell
      - AI-Drafting-Features schmaler als bei Lattice/Culture Amp
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Skaliert ohne Enterprise-Schmerz
        - Ordentliche AI-Governance
      complaints:
        - Performance-Modul nicht so tief wie Spezialisten
        - Pricing intransparent
    sources:
      - id: hibob-com-features-performance
      - id: work-management-org-hr-hibob-review
      - id: reddit-com-r-smallbusiness-comments-1r7729m-what-tool-do-you-use-for-human-resources-hrms
  - id: lattice-com-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Klarste 'AI schreibt nicht autonom'-Positionierung mit Evidence-based AI Reviews aus 1:1s, Goals und Peer-Feedback; Manager bleibt für Tonalität, Rating und Final Submission verantwortlich. Passt zur BetrVG-Linie 'Drafting-Hilfe ohne automatisches Scoring'. Bias-/Klarheits-Checks integriert, DPA verfügbar.
    caveats:
      - US-Vendor — EU-Datenresidenz aktiv anfragen, Sub-Processor-Liste prüfen
      - Bidirektionale Workday-Integration meldet Ratings zurück — BetrVG-relevant
      - Pricing modular, addiert sich schnell
      - EU-Datenresidenz nicht standardmäßig — bei Lattice aktiv anfragen
      - "Bidirektionale Workday-Integration meldet Ratings zurück: erneut BetrVG-relevant"
      - US-Vendor — DPA/Sub-Processor-Liste vor Rollout prüfen
      - Bias-Check ersetzt keine Mitbestimmung nach BetrVG §94
      - Listenpreis ab ~$11/User/Monat; Module addieren sich
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Datenintegration über Goals/1:1s
        - Solide AI-Analytics
      complaints:
        - Sitzt außerhalb täglicher Tools, Adoption-Friction
        - Hoher Listenpreis
    sources:
      - id: lattice-com-ai
      - id: lattice-com-blog-lattice-spring-summer-2026-product-release
      - id: reddit-com-r-humanresources-comments-1r8ffu7-best-hr-software-for-growing-teams-what-actually
  - id: leapsome-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Berliner Anbieter mit EU-Hosting-Optionen, 38 Sprachen und AI Writing Assistant für 360°-Reviews, Self-Assessments und Leadership-Reviews. Keine automatischen Ratings — passt zu DACH-Setup mit Betriebsrat. Native LMS-Integration für Lernpfade aus Review-Outcomes.
    caveats:
      - AI-Output kann generisch wirken bei dünnem Input
      - "Trotz EU-Sitz: Sub-Processor-Liste (LLM-Backend) prüfen"
      - Tool sitzt außerhalb von Slack/Teams — Adoption-Friction
      - Mitbestimmung über Drafting-Prompts/Templates dennoch nötig
      - AI-Funktionen weniger ausgereift als Lattice (laut Sembly/Hrstacks-Reviews)
      - Trotz EU-Sitz Vertrag und Sub-Processor-Liste prüfen
      - "Adoption: Tool sitzt außerhalb von Slack/Teams"
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Flexible Review-Zyklen
        - EU-Hosting / DACH-Affinität
      complaints:
        - AI-Output mitunter generisch
        - Außerhalb täglicher Tools
    sources:
      - id: leapsome-com-comparisons-lattice-competitors
      - id: reddit-com-r-agency-comments-1oyjwom-employee-feedback-tool-for-colleagues-performance
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Wenn M365 schon Standard ist, ist Copilot der pragmatischste Drafting-Layer: Daten bleiben im Microsoft-Tenant (EU Data Boundary), keine zusätzliche HR-Datenausleitung. Microsoft hat dafür ein offizielles Adoption-Sample. Praxisberichte (Duke, Allegis) bestätigen messbare Zeitersparnis."
    caveats:
      - Kein HR-spezifisches Bias-/Kalibrierungs-Framework — Prompt-Disziplin nötig
      - Greift auf Mails/Chats zu — BetrVG §87(1) Nr.6, Sensitivity Labels & DLP zwingend
      - EU Data Boundary deckt nicht alle Subprozessoren — Liste prüfen
      - Copilot greift potenziell auf private Mitarbeiter-Konversationen zu — Sensitivity Labels & DLP zwingend
      - "'EU Data Boundary' deckt nicht alle Subprozessoren — Microsoft-Subprocessor-Liste prüfen"
      - Greift auf Mails/Chats zu — Mitarbeiter-Datenschutz und BetrVG §87(1) Nr.6 beachten
      - Lizenz-Kosten ($30/User) addieren sich auf bestehenden M365-Stack
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Datenkontext aus M365-Tenant
        - Spürbare Zeitersparnis
      complaints:
        - Output muss editiert werden
        - Kein HR-spezifischer Kontext
    sources:
      - id: adoption-microsoft-com-en-us-sample-solution-gallery-sample-copilotprompts-m365-yearly-performance-review-prompt
      - id: sites-duke-edu-ddmc-2026-04-17-streamlining-the-performance-review-using-copilot-as-your-executive-assistant
      - id: microsoft-com-en-customers-story-26363-allegis-group-microsoft-365
  - id: personio-de
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: DACH-Marktführer (München) mit Performance-Cycles, 360°-Feedback und AI-Summaries (HUG 2025 GA). EU-Hosting, deutsche Vertragspartner, Career Frameworks — naheliegendste Default-Wahl für DACH-Mittelstand mit BetrVG-Anforderungen. AI bleibt Summary-/Stichwort-Hilfe statt Volldraft, was als Drafting-Hilfe genau passt.
    caveats:
      - AI-Drafting-Tiefe schmaler als bei Lattice/Culture Amp — Erwartungsmanagement
      - Acknowledgement-Step im Workflow fehlt laut Community
      - AI-Funktionen kontinuierlich im Rollout — GA-Status pro Modul prüfen
      - AI-Drafting ist Summary-/Stichwort-Hilfe, kein voller Volltext-Generator — Erwartungsmanagement nötig
      - Acknowledgement-Step im Review-Workflow fehlt laut Community
      - AI-Drafting-Tiefe (Volltext-Review-Generation) noch dünn dokumentiert
      - Personio Assistant fokussiert auf Datenanalyse, nicht primär Review-Texterstellung
      - Roadmap-Themen klar trennen von GA-Features
    sources:
      - id: support-personio-de-hc-en-us-categories-4489395670173-performance-d-c3-a9veloppement
      - id: personio-de-funktionen-assistant
      - id: personio-com-about-personio-press-hug-2025-feature-updates
  - id: 15five-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Spark AI generiert Drafts aus Weekly-Check-ins, 1:1s und Best-Self-Reviews. Manager-Coaching-Output ohne automatisches Scoring. In DACH-KMU als ChatGPT-Alternative für Drafting auf bereits dokumentierten Check-ins genutzt.
    caveats:
      - Kontinuierliches Check-in-Logging kann §87(1) Nr.6 (Verhaltenskontrolle) berühren — Betriebsvereinbarung nötig
      - AI-Tiefe geringer als Lattice/Culture Amp
      - EU-Hosting nicht garantiert
      - Kontinuierliche Check-ins über 1:1-Frequenz hinaus brauchen Betriebsvereinbarung
      - AI-Tiefe geringer als Lattice/Culture Amp (laut Vergleichsanalysen)
      - Kontinuierliches Check-in-Logging kann mit BetrVG §87(1) Nr.6 (Verhaltenskontrolle) kollidieren — Betriebsrat einbeziehen
      - US-Vendor; DPA und EU-Hosting-Optionen prüfen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Manager-Enablement
        - Niedrigschwelliger Einstieg
      complaints:
        - AI-Funktionen reifen noch
        - Wenig HRIS-Tiefe
    sources:
      - id: hrai-tools-best-best-ai-performance-management-tools
      - id: toolradar-com-guides-best-ai-performance-review-tools
      - id: reddit-com-r-agency-comments-1oyjwom-employee-feedback-tool-for-colleagues-performance
  - id: teamflect-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Microsoft-Teams-native Performance-/Feedback-Plattform mit AI-Drafting; sitzt in Teams/Outlook und passt für DACH-Mittelstand mit M365-Stack ohne zusätzliche Login-Insel. In Reddit-r/humanresources explizit als Lattice-Alternative für M365-Setups empfohlen.
    caveats:
      - AI-Backend/Subprozessoren öffentlich nicht klar — DPA-Detail erfragen
      - Funktionstiefe bei 360°-Calibration unter Spezialisten
      - Kleinerer Vendor — Roadmap-/Support-Risiko
      - AI-Backend und Subprozessoren öffentlich nicht klar kommuniziert
      - Vendor-Größe begrenzt — Roadmap-/Support-Risiko
      - Wenig öffentliche AI-Architektur-/DSGVO-Doku
      - Funktionstiefe bei 360°-Calibration geringer als Spezialisten
      - Kleinerer Vendor — Roadmap-Risiko
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - In M365/Teams nativ
        - Niedrige Adoption-Friction
      complaints:
        - Weniger Tiefe als Spezialisten
    sources:
      - id: reddit-com-r-humanresources-comments-1r8ffu7-best-hr-software-for-growing-teams-what-actually
  - id: workday-com-en-us-perspectives-hr-ai-for-personalized-bias-free-feedback-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Native AI in Talent/Performance mit Fokus personalisiertes, bias-armes Feedback. Für Konzerne mit Workday-HCM-Footprint die naheliegendste Option statt zweite Suite. Drittanbieter (Lattice) integrieren bidirektional — zeigt Workday als Stammdaten-Quelle.
    caveats:
      - Öffentliche Funktions-Doku zur AI-Drafting-Tiefe knapp
      - Reife im PoC verifizieren — Workday-AI-Roadmap historisch behäbig
      - Nur bei vorhandenem Workday-HCM sinnvoll
      - EU-Hosting möglich, aber kostenpflichtige Region — explizit verhandeln
      - Workday AI-Roadmap historisch behäbig — Reife der Drafting-Features im PoC verifizieren
      - AI-Drafting-Reife teils noch hinter Spezialisten
      - Detaillierte Funktions-Dokumentation öffentlich knapp
      - AI-Module gehen nur mit größerem Workday-Footprint sinnvoll
    sources:
      - id: workday-com-en-us-perspectives-hr-ai-for-personalized-bias-free-feedback-html
      - id: lattice-com-blog-lattice-spring-summer-2026-product-release
  - id: flowit-ai-product-performance-lite
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Schweizer Anbieter mit Servern in Deutschland, ISO-zertifizierten Rechenzentren, DSGVO + revDSG-Doku; 'Performance Lite' digitalisiert Reviews mit AI-Coach, ohne Volltext-Auto-Generation. Likely missed by market scan because flowit als CH-DACH-Mid-Market-Player in englischsprachigen AI-Listings unterrepräsentiert ist.
    caveats:
      - AI-Funktionen primär Dashboards/Coach, nicht Volltext-Drafting — Erwartung klären
      - Anonymisierte Auswertung kann mit Manager-spezifischem Drafting kollidieren
      - Vendor-Größe und HRIS-Integrationstiefe begrenzt
    sources:
      - id: flowit-ai-product-performance-lite
  - id: langdock-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Berliner GDPR-konformer LLM-Aggregator mit EU-Hosting, ISO27001 und SOC2 Type II. Relevant als Enterprise-LLM-Wrapper, falls man HR-Drafting auf eigenen Prompts/Templates fahren will, ohne Daten an US-Cloud zu schicken. Likely missed by market scan because Langdock als horizontaler AI-Layer (kein HR-Tool) in HR-spezifischen Listen nicht erscheint, in DACH aber häufig die Compliance-akzeptable LLM-Schicht ist.
    caveats:
      - Kein HR-Workflow — reines Prompting-/Aggregations-Layer
      - Performance-Drafting nur so gut wie das eigene Prompt-/Template-Setup
      - Mitbestimmung über Prompts/Templates dennoch nötig, wenn Output Bewertungsgrundsatz wird
    sources:
      - id: tldv-io-ja-blog-langdock
  - id: betterworks-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Klare Position: AI generiert Reviews nicht autonom, sondern synthetisiert Signale (Feedback Assist, Performance Summary). Passt zu BetrVG-Anforderung 'kein automatisches Scoring' und reduziert Reputationsrisiko sichtbar maschinell wirkender Reviews. Gartner Peer Insights (12 validierte Enterprise-Reviews, 4,5/5) bestätigt Plattform-Qualität; LivePerson-Praxisfall dokumentiert 50–75% Zeitersparnis und 93% On-Time-Completion."
    caveats:
      - DACH-Awareness niedrig, lokale Implementierungspartner dünn
      - AI bewusst zurückhaltend — wer Volldraft will, ist hier falsch
      - US-Hosting Standard — EU-Region anfragen
      - Lokale Implementierungspartner in DACH dünn
      - Markt-Awareness in DACH geringer als Lattice/Personio
      - US-Vendor; DPA prüfen
    sources:
      - id: betterworks-com-magazine-ai-that-writes-reviews-vs-ai-that-understands-performance
      - id: betterworks-com-magazine-ai-performance-management
      - id: gcom-pdo-aws-gartner-com-reviews-product-betterworks
  - id: cultureamp-com-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "AI Coach + Suggest Improvements ist methodisch sauber positioniert (evidenzbasiert, Bias-arm, SBI-ähnliche Struktur), modular aktivierbar — passt zu Pilot-Rollouts mit Betriebsrat. Forschungs-Backbone (1,5 Mrd. Datenpunkte) unterscheidet von rein generischen Schreibhilfen. G2 4,5/5 (1.541 Reviews), Forrester Wave Q2 2025, #1 in G2 Performance Management Grid Winter 2025."
    caveats:
      - Google als LLM-Backend — DPA und EU-Region explizit verhandeln
      - Engagement+Perform kombiniert kann Profilbildung erzeugen — Art. 22 DSGVO im Blick
      - Enterprise-Pricing
      - AU/US-Hosting Standard — EU-Region für DACH explizit verhandeln
      - Engagement-Surveys + Perform kombiniert kann Profilbildung erzeugen — Art. 22 DSGVO im Blick behalten
      - AI-Coach in Perform teils noch im Rollout
      - LLM-Backend (Google) — Datenfluss DSGVO-konform vertraglich absichern
      - Eher Enterprise-Pricing
    sources:
      - id: cultureamp-com-platform-ai
      - id: support-cultureamp-com-en-articles-11718591-the-science-behind-coach
      - id: althire-ai-feeds-blog-best-ai-tools-hr
  - id: sap-com-use-cases-writing-personalized-employee-feedback
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "AI-Assisted Writing direkt im Review-Formular: Generate Comments, Tone-Anpassung, Bias-Scan via 'Analyze Text', Performance Insights aus qualitativem Feedback. Bleibt im SAP-Tenant, EU-Hosting verfügbar — naheliegendste Wahl für DACH-Konzerne mit etabliertem SuccessFactors. Unabhängige Analyse bestätigt 4,1/5 auf G2/Capterra (440 Reviews) und AI-Features als Teil der Business-AI-HXM-Suite."
    caveats:
      - Setup komplex; AI-Units-Lizenz separat
      - Bias-Scan ersetzt nicht BetrVG-§94-Mitbestimmung über Bewertungsgrundsätze
      - Nur sinnvoll bei vorhandenem SuccessFactors-Footprint
      - Joule/AI-Units-Pricing intransparent — Budget vorher klären
      - Rollout ohne BetrVG-Betriebsvereinbarung über 'Bewertungsgrundsätze' praktisch unmöglich
      - Setup komplex; AI-Units-Lizenz separat erforderlich
      - Nur sinnvoll wenn SuccessFactors bereits etabliert
    sources:
      - id: sap-com-use-cases-writing-personalized-employee-feedback
      - id: learning-sap-com-learning-journeys-configure-sap-successfactors-performance-and-goals-using-ai-assisted-writing-in-continuous-performance-and-feedback-fdeb2d62-cf28-490a-83f5-27e7307c29ad
      - id: aiproductivity-ai-tools-sap-successfactors
  - id: textio-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Add-on-Drafting-Schicht in SuccessFactors/Workday/Lattice — keine Plattform-Migration. Methodisch fundiertes Bias-/Tone-Coaching direkt im HRIS, basierend auf Millionen realer HR-Outcomes (nicht generischen LLM-Trainingsdaten). Unabhängige Rezension (4/5) bestätigt daten-basierte Bias-Erkennung als differenzierend; Velera-Fallstudie: +67% Feedback-Qualität. Sinnvoll für DACH-Konzerne mit Suite-Lock-in, die nur die Drafting-Schicht aufwerten wollen."
    caveats:
      - Reines Add-on, keine eigene Review-Plattform
      - Doppelter DPA-Aufwand (Textio + Hauptsystem)
      - EU-Datenresidenz nicht prominent — verifizieren
      - EU-Datenresidenz nicht prominent kommuniziert — verifizieren
      - Bias-Detection-Methodik ist proprietär — Erklärbarkeit Richtung Betriebsrat sicherstellen
      - Reines Add-on; keine eigene Review-Plattform
      - DPA mit Textio plus Hauptsystem-Vendor doppelt prüfen
      - Pricing klassisch enterprise (Sales-Quote)
    sources:
      - id: textio-com-blog-announcing-ai-powered-performance-reviews-with-textio-lift-for-sap-successfactors
      - id: aimadefor-com-blog-textio-review-hr
  - id: sprad-io-talent-management
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Berliner DACH-Spezialist mit EU-Hosting, ISO27001/SOC2/DSGVO und expliziter BetrVG-/EU-AI-Act-Architektur (Audit-Logs, Datenminimierung, Trennung Vorschlag/Entscheidung, kein Auto-Rating). Atlas AI generiert Review-Summaries aus 1:1s und Feedback. Likely missed by market scan because der Anbieter in englischsprachigen Capability-Listen kaum auftaucht und sich primär an DACH-Enterprise mit Betriebsrat richtet.
    caveats:
      - Kleinerer Vendor — Skalierbarkeit/Roadmap im PoC verifizieren
      - Marketing-Tonalität ('Atlas') sehr offensiv — konkrete GA-Features pro Modul belegen lassen
      - Subprocessor-Liste der LLM-Backends (OpenAI/Anthropic/Mistral) im DPA explizit machen
      - Keine unabhängigen Drittquellen (G2/Gartner/Analyst) gefunden — alle Belege sind self-published; Eignung im PoC verifizieren
      - Vendor zu klein für verlässliche Analyst-Coverage — praktischer Nachweis vor Rollout-Entscheidung nötig
    sources:
      - id: sprad-io-talent-management-performance-management
      - id: sprad-io-blog-ai-for-performance-reviews-how-to-write-data-backed-reviews-with-live-crm-project-data
start_here: Pilot mit Lattice AI Writing Assist oder Culture Amp Suggest Improvements starten — beide positionieren KI explizit als Drafting-Hilfe ohne autonomes Scoring, was die BetrVG-Linie sauber hält. Manager überarbeitet jeden Draft vor Einreichung; Betriebsrat vorab über Prompting-Templates und Datenfluss informieren.
caveats: "BetrVG §94 macht Beurteilungsgrundsätze mitbestimmungspflichtig — Drafting-Hilfe ohne formalisierten Bewertungs-Output bleibt unkritisch, automatisches Scoring nicht. EU-Datenresidenz bei allen Anchor-Tools aktiv verhandeln: Culture Amp nutzt Google als LLM-Backend, Lattice ist US-Vendor, HiBob hat EU-Hosting nicht überall als Standard."
sources: []
---
