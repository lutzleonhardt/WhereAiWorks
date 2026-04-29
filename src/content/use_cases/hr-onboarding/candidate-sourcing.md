---
stage: hr-onboarding
order: 13
roles:
  - hr-recruiting
title: Candidate-Sourcing (passiv)
goal_label: Passive Kandidaten über öffentliche Profile aufspüren
suitability: conditional
rationale: LinkedIn Recruiter (AI-Assisted Search & Hiring Assistant) und XING TalentManager sind für DACH-Enterprise die zwei Plattformen, bei denen semantisches Sourcing und DSGVO-Konformität ohne Workarounds zusammenpassen — Profildaten kommen direkt vom Mitglied der jeweiligen Plattform. Für Organisationen im Workday-Stack ergänzt HiredScore diesen Ansatz um Talent-Orchestration mit dokumentierten Bias-Audits.
tools:
  - id: business-linkedin-com-talent-solutions-recruiter
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Strukturell der einzige Anbieter, der den LinkedIn-AGB-Konflikt umgeht (eigene Plattform), Art. 14 reduziert sich auf Datenkategorien-Hinweis. EU-Datenverarbeitung über Microsoft-DPA verfügbar, Hiring Assistant seit Sept. 2025 GA. Für DACH-Enterprise meist Default-Sourcing-Layer, der in jedem Stack vorhanden ist.
    caveats:
      - Hiring Assistant ist EU-AI-Act-Hochrisikosystem — DPIA und menschliche Kontrolle pflicht
      - InMail-Response-Raten sinken laut Praktikern stark
      - Persistente Pipelines lösen BetrVG §87(1) Nr. 6-Mitbestimmung aus
      - Microsoft-Subprocessor-Kette aufwendig zu auditieren
      - AI-Assisted Search-Outputs in DE noch oft englischsprachig
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Frischeste Daten weil Mitglieder selbst pflegen
        - Direkt-Kontakt via InMail
      complaints:
        - InMail-Response-Raten sinken stark
        - Search-UX hat sich mit AI-Push verschlechtert
        - 8-16k USD/Seat wird zunehmend infrage gestellt
    sources:
      - id: linkedin-com-help-recruiter-answer-a6509735
      - id: linkedin-com-blog-engineering-hiring-hiring-assistant-shaped-by-customers-powered-by-ai-innovation
      - id: linkedin-com-help-linkedin-answer-a717146-linkedin-talent-solutions-und-die-datenschutz-grundverordnung-dsgvo-lang-de
      - id: reddit-com-r-recruitmentagencies-comments-1n5c6r5-ln-recruiter-vs-juicebox
  - id: beamery-com-platform-sourcing
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Talent-CRM mit unabhängig auditierter 'Ethical AI' — eines der wenigen Vendoren, das EU-AI-Act-Anforderungen produkt-seitig adressiert. ISO27001/SOC2 vorhanden, EU-Hosting möglich, etablierte Enterprise-Referenzen. Browser-Extension-Sourcing über LinkedIn bleibt aber AGB-grenzwertig.
    caveats:
      - Off-Platform-Anreicherung via Extension reizt LinkedIn-AGB aus
      - Suite-Implementation 4-9 Monate, Custom-Skills-Ontologie aufwändig
      - Agentic Sourcing (Ray) noch BETA
      - Bias-Audit-Bericht öffentlich nur summarisch
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Excellent candidate search and management capabilities
        - Strong customization options for recruiting workflows
        - Good targeting and filtering for candidate segments
      complaints:
        - Chrome extension frequently buggy, candidates not showing correctly
        - Internal database search features limited and hard to navigate
        - Technical glitches with messaging delivery to candidates
        - Cost raised as issue among users
    sources:
      - id: beamery-com-platform-sourcing
      - id: support-beamery-com-hc-en-us-articles-40360654119185-understanding-artificial-intelligence-in-beamery
  - id: workday-com-en-us-products-talent-management-hiredscore-talent-orchestration-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Workday-Backbone bringt mature DACH-Compliance (ISO27001, SOC2, EU-Datenresidenz, AVV-Standardpaket); HiredScore-Bias-Audits explizit dokumentiert. Sauberster Enterprise-Pfad für Workday-Stacks; eher Talent-Orchestration als Pure-Outbound-Sourcing.
    caveats:
      - Setzt Workday-HCM voraus, sonst kein Business Case
      - Pure passives Outbound-Sourcing schwächer als hireEZ/SeekOut
      - AI-Act-Konformität muss kundenseitig dokumentiert werden
      - Pricing nur auf Anfrage — nichts unter Enterprise-Niveau
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Enterprise-grade AI candidate scoring and talent rediscovery
        - Responsible AI framework with bias-audit credentials
        - Improves recruiter capacity and hiring manager efficiency
      complaints:
        - Strong lock-in to Workday ecosystem; challenges outside Workday
        - Enterprise-only pricing with no transparency; no SMB option
        - Limited public review volume; mostly enterprise case studies
        - Acquisition by Workday increases integration complexity
    sources:
      - id: g2-com-compare-arya-by-leoforce-vs-workday-hiredscore-ai-for-recruiting
      - id: everworker-ai-blog-ai-candidate-sourcing-vendor-guide-2026
      - id: workday-com-de-ch-products-talent-management-talent-acquisition-html
  - id: phenom-com-talent-crm
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Etablierter Suite-Player mit ISO27001/SOC2 und EU-Hosting-Option; Skills-Intelligence-PEAK-Matrix-Leader 2026. Stärke ist Career-Site und interne Mobility, nicht Pure-Outbound-Sourcing — daher in DACH meist als Talent-Plattform-Ergänzung sinnvoll.
    caveats:
      - Auto-Ranking/Skills-Inferenz EU-AI-Act-Hochrisiko, DPIA pflicht
      - Stärke eher in interner Mobility/Career Site als in pur passivem Outbound-Sourcing
      - Skills-Ontologie kann nicht ohne Anpassung in DE-Branchenkontext übernommen werden
      - Pricing intransparent, Custom-Quote-Modell
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Powerful automation engine and embedded AI filtering
        - Intuitive UX for pipeline management and candidate engagement
        - Strong career site builder and candidate experience personalization
      complaints:
        - Implementation takes 3-6 months minimum, complex setup
        - Custom pricing with no transparency until after sales cycle
        - Creates duplicate data entry if overlapping with existing ATS/HRIS
        - Adoption challenges; teams use only 30-40% of paid features
    sources:
      - id: phenom-com-talent-crm
      - id: lasvegassun-com-news-2026-apr-20-phenom-is-the-highest-designated-leader-in-everest
  - id: cleverconnect-com-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because CleverConnect ist FR/DE-Mid-Market und in englischsprachigen Sourcing-Listen unsichtbar. Adressiert Art.-14-Pflicht produkt-seitig über automatisierten Consent-Erneuerungs-Workflow — seltene Stärke gegenüber US-Tools, die Consent als Disclaimer abhandeln. EU-Hosting, deutschsprachiger Support.
    caveats:
      - Browser-Extension-Modell reizt LinkedIn-AGB aus
      - AI-Sourcing-Reife geringer als US-Player
      - Suite-Charakter heißt Sourcing nicht Kern-USP
      - Roadmap-Transparenz schwach
    sources:
      - id: cleverconnect-com-de-features-active-sourcing
  - id: onlyfy-com-de-products-application-manager
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Likely missed by market scan because onlyfy ist DACH-only-Player und englischsprachige Sourcing-Listicles ignorieren ihn. Vereint Active Sourcing über XING, Multiposting (900+ Jobbörsen DACH) und Bewerbermanagement unter deutscher AVV — typischer Mittelstands-Stack-Ersatz für US-Tools mit klarer AI-Integration auf XING-Profilen.
    caveats:
      - Sourcing-Reichweite an XING gebunden
      - AI-Funktionen jünger als US-Pure-Player
      - "Suite-Charakter heißt: Sourcing-Tiefe geringer als hireEZ/SeekOut"
    sources:
      - id: onlyfy-com-en-prescreen-becomes-onlyfy-one
  - id: sap-com-products-hcm-recruiting-software-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because SuccessFactors wird als HR-Suite gesehen, nicht als 'AI-Sourcing-Tool'. Für die meisten DACH-Konzerne ist SuccessFactors aber bereits installiert — eingebettetes Joule-Sourcing/Matching wird ohne Vendor-Auswahl-Prozess verfügbar und kollidiert nicht mit bestehenden DPA/AVV-Konstrukten.
    caveats:
      - Pure passives Outbound-Sourcing schwächer als Pure-Player
      - Joule-Funktionen für Recruiting noch im Rollout
      - Lock-in zu SAP-HCM-Stack
      - AI-Act-Hochrisiko-Klassifizierung kundenseitig zu dokumentieren
    sources:
      - id: artificialintelligence-news-com-news-sap-brings-agentic-ai-human-capital-management
  - id: smartrecruiters-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Likely missed by market scan because SmartRecruiters wird primär als ATS gesehen, nicht als Sourcing-Tool. Mit Winston AI (Match/Sourcing-Agent) und seit Sept. 2025 SAP-Tochter wird der Vendor in DACH-Enterprise-RFPs erheblich an Gewicht gewinnen. EU-Hosting, ISO27001, SOC2, GDPR/CNIL, 37 Sprachen, dokumentierte DPA — eines der wenigen vollständig DACH-konformen Pakete.
    caveats:
      - Sourcing-Tiefe geringer als hireEZ/SeekOut — eher ATS+Sourcing-Hybrid
      - Winston AI-Funktionen jung, EU-AI-Act-DPIA pflicht
      - Akquise-Integration mit SAP SuccessFactors noch in Roadmap-Phase
      - Pricing nur Custom — Mittelstand schnell überfordert
    sources:
      - id: smartrecruiters-com-recruiting-software-global-local-hr
      - id: news-sap-com-2026-03-smartrecruiters-for-sap-successfactors-ai-driven-hiring-connected-hcm
  - id: talentwunder-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Berliner Anbieter mit 150 Mio. DACH-Profilen über 30 Netzwerke, bestelltem externem DSB (SECUWING), deutscher DSGVO-Dokumentation und expliziter Art. 22-Aufklärung. Realistisch der DACH-konformste Pure-Play-Sourcing-Vendor — Compliance-Story differenzierend, aber bislang keine unabhängige Practitioner-Validierung vorhanden.
    caveats:
      - Art.-14-Erfüllung beim Erstkontakt liegt beim Kunden — Tool macht das nicht automatisch
      - Keine sichtbare ISO27001-/SOC2-Zertifizierung
      - Skalierbarkeit für Konzern-Volumen ungetestet
      - Roadmap-Transparenz und LLM-Sourcing-Reife schwächer als US-Player
      - Keine unabhängigen Practitioner-Bewertungen auf G2/Capterra/OMR — Enterprise-Due-Diligence schwer führbar
    sources:
      - id: talentwunder-eu
      - id: talentwunder-com-dsgvo
      - id: talentwunder-com-2024-07-23-bewerberdatenschutz-im-recruiting
  - id: recruiting-xing-com-de-produkte-talentmanager
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Likely missed by market scan because XING ist außerhalb DACH unsichtbar und in englischsprachigen Vendor-Listicles nie aufgeführt. Faktisch aber der einzige DACH-Native-Pool (21 Mio. Profile DE/AT/CH), Hosting in Deutschland, Daten direkt vom Mitglied — Art. 14-Konflikt entfällt analog zu LinkedIn. AGG-/AVV-Standards passen zu deutschem HR-Recht.
    caveats:
      - Reichweite außerhalb DACH gering
      - AI-Funktionen (semantische Suche) jünger und weniger ausgereift als LinkedIn AI-Assisted Search
      - Persistente Talent-Pools lösen BetrVG-Mitbestimmung aus
      - Outreach-Kontingent im Core-Plan auf 200 Non-Contact-Nachrichten/Monat limitiert
    sources:
      - id: recruiting-xing-com-de-produkte-talentmanager
      - id: competitiverecruiting-de-der-xing-talentmanager-xtm-im-test-html
start_here: Mit LinkedIn Recruiter AI-Assisted Search auf einer laufenden Tech-Stelle beginnen und Trefferliste gegen bisherige Boolean-Suchen vergleichen, bevor weitere Tools evaluiert werden. Für Rollen mit klarem DACH-Fokus XING TalentManager parallel testen — die Kandidaten-Pools überschneiden sich kaum.
caveats: Persistente Kandidaten-Pools lösen unabhängig vom Tool BetrVG §87(1) Nr. 6 Mitbestimmung aus — Betriebsrat sollte vor dem Pilot eingebunden werden. Hiring Assistant und vergleichbare Matching-Funktionen fallen unter EU-AI-Act-Hochrisiko und erfordern DPIA sowie nachweisbare menschliche Kontrolle.
sources: []
---
