---
stage: hr-onboarding
order: 4
roles:
  - hr-recruiting
title: Interview-Fragen-Generierung
goal_label: Strukturierte, rollenbezogene Interview-Leitfäden erzeugen
suitability: good_fit
rationale: ChatGPT Enterprise und SAP SuccessFactors Joule decken den Use Case mit Enterprise-DPA und EU-Rechenzentren ab – die Compliance-Voraussetzungen für DACH-Konzerne sind damit vorhanden. Der Hauptwert liegt in rubrikgestützten, strukturierten Interviews, die verlässlichere Einschätzungen liefern als ad-hoc-Gespräche.
tools:
  - id: chatgpt-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: De-facto-Standard, mit dem Hiring Manager rollenspezifische Frage-Sets, STAR-Probes und einfache Rubrics generieren. Mit Enterprise/Team-DPA, EU-Datenresidenz und kein-Training-Klausel als Drafting-Tool tragfaehig – solange keine Bewerber-PII reingeht.
    caveats:
      - "Schatten-IT-Risiko: Hiring Manager nutzen oft Free/Plus ohne Tenant-Kontrolle."
      - AGG-konforme Default-Filterung muss explizit geprompted werden.
      - Kein Audit-Trail im Free-Produkt – fuer Annex-III-Logging-Pflichten ungeeignet, wenn Output zur Auswahlrichtlinie wird.
      - Bei Eingabe von Lebenslaeufen kippt sofort die Risiko-Klasse.
      - Reiner Prompt-Workflow, keine ATS-Integration
      - Bei Eingabe von Bewerber-PII greift DSGVO + EU AI Act sofort
      - Frage-Qualität abhängig von Prompt-Disziplin
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Schnelle, strukturierte Frage-Sets pro Rolle
        - Gut für STAR-Behavioral-Prompts mit Follow-ups
      complaints:
        - Generische Antworten ohne sauberen Prompt
        - Vorsicht bei Kandidaten-PII
    sources:
      - id: pin-com-blog-chatgpt-for-recruiting
      - id: aiguides-pro-chatgpt-for-interview-questions
      - id: reddit-com-r-work-comments-1i4602y-how-to-prep-for-interviews-in-2025
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Gross-Context-Modell mit DPA/SOC2 fuer Claude for Work; gut geeignet fuer Job-Spec + Kompetenzmodell + Career-Ladder in einer Session. Reine Drafting-Aufgabe – damit Risiko-Klasse vergleichbar zu ChatGPT.
    caveats:
      - Keine eigene EU-Region; Verarbeitung typischerweise via Bedrock – Cloud-Region und Sub-Processor-Liste vertraglich fixieren.
      - AGG-/Diversitaets-Defaults muessen explizit geprompted werden.
      - Wenig deutsche HR-Praktiker-Evidenz.
      - Keine Recruiting-Spezialfeatures, nur Foundation-Model
      - DACH-spezifische Compliance-Defaults (z.B. AGG-konforme Fragen) müssen geprompted werden
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Bessere Reasoning-Tiefe für komplexe Rollen
        - Großes Context-Window für ganze Job-Pakete
      complaints:
        - Mehr Hand-Holding nötig als bei ChatGPT laut einigen Nutzern
    sources:
      - id: reddit-com-r-promptingmagic-comments-1roe31h-8-claude-prompts-every-founder-needs-json
      - id: reddit-com-r-claudeai-comments-1r5a44s-is-claude-actually-better-than-chatgpt-for-just
  - id: support-greenhouse-io-hc-en-us-articles-33870806581915-use-ai-to-get-suggestions-for-interview-questions
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: AI-Frage-Vorschlaege sitzen sauber im Interview Kit + Scorecard-Workflow – Frage und menschliche Bewertung sind getrennt, was unter EU AI Act vorteilhaft ist. Greenhouse ist im DACH-Mid-/Upper-Market gesetzt und liefert Bias-Auditing-Hooks, die in einer FRIA verwertbar sind.
    caveats:
      - Backend OpenAI – Sub-Processor-Liste, EU-Region und Greenhouse-DPA explizit fixieren.
      - Sobald Scorecards aggregiert werden, kann Output als Auswahlrichtlinie gewertet werden – BetrVG §95 Mitbestimmung.
      - Kein fertiges Conformity-Assessment – Deployer muss FRIA selbst erstellen.
      - Pricing fuer KMU haeufig prohibitiv.
      - Greenhouse-Hosting historisch USA; EU-Hosting laut Vendor optional, vertraglich fixieren.
      - Backend ist OpenAI – DPA und Datenflussprüfung für DACH nötig
      - Hochrisiko-Klassifizierung unter EU AI Act (CV-Filter, Scoring) – Betriebsrat-Einbindung obligatorisch
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Tief in Scorecard-/Rubrik-Workflow integriert
        - Interview-Intelligence identifiziert kalibrierte Interviewer
      complaints:
        - Teuer, Overhead für Sub-50-Hires/Jahr
    sources:
      - id: support-greenhouse-io-hc-en-us-articles-33870806581915-use-ai-to-get-suggestions-for-interview-questions
      - id: support-greenhouse-io-hc-en-us-articles-33043749845403-greenhouse-ai-features
      - id: aimadefor-com-blog-greenhouse-review-hr
  - id: sap-com-use-cases-generating-interview-questions
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Naheliegender Pfad fuer DACH-Konzerne mit SAP-HCM-Stack: EU-Rechenzentren, etablierte AVV-Standards, Joule explizit als Productivity-Layer ohne Scoring positioniert (von SAP-Doku und Recruiting Tech Reviews bestaetigt). Damit auf der richtigen Seite des Annex-III-Risikos – die Frage-Generierung selbst ist Drafting, kein Decisioning."
    caveats:
      - AI Units Lizenz separat – Total-Cost-Effekt in TCO einkalkulieren.
      - Datenfluss SAP-MS-Tenant via Teams im DPIA mappen.
      - Feature-Verfuegbarkeit pro Region/Release langsam – Roll-out-Plan beim Account-Team verifizieren.
      - BetrVG-Mitbestimmung sobald Output zur Auswahlrichtlinie wird.
      - Joule für Recruiting noch Productivity-Layer, kein Evaluator
      - Recruiting-AI ist EU-AI-Act-Hochrisiko – Konformitätsbewertung Pflicht ab 02.08.2026
      - BetrVG §87/§95-Mitbestimmung bei Auswahlrichtlinien
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Tief in SuccessFactors + Teams integriert
        - Reduziert Vorbereitungszeit laut SAP-Benchmark
      complaints:
        - Funktionen rollen langsam aus, abhängig von Release-Cadence
    sources:
      - id: sap-com-use-cases-generating-interview-questions
      - id: recruitingtechreviews-com-articles-best-ai-tools-successfactors
      - id: sap-com-swiss-use-cases-generating-interview-questions
      - id: community-sap-com-t5-human-capital-management-blog-posts-by-sap-top-joule-q-amp-a-answers-hr-perspective-2025-2026-ba-p-14370276
  - id: workable-com-interview-questions-generator
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Im DACH-Mid-Market praesent; das freie Frage-Generierungs-Tool deckt den Use-Case sauber ab und ist mehrsprachig. Solange das auf den Generator beschraenkt bleibt und nicht der Workable Agent (Sourcing+Scored Shortlist) genutzt wird, niedrige Risiko-Klasse.
    caveats:
      - Workable Agent kippt das Setup in Annex-III-Hochrisiko (automatisierte Shortlist) – im Beschaffungsumfang trennen.
      - Hosting-Region fuer DACH-Datenresidenz vertraglich fixieren.
      - Strukturiertes Hiring schwaecher als Greenhouse, weniger audit-faehig.
      - Workable Agent erzeugt 'scored shortlist' = automatisierte Vorauswahl im Sinne Art. 22 DSGVO – Betriebsrat zwingend.
      - Workable Agent als Paid-Add-on über reguläre Recruiting-Pläne hinaus
      - Recruiting-AI insgesamt EU-AI-Act-Hochrisiko – Provider-Pflichten zu prüfen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Schneller Einstieg, niedriger Preis im Mid-Market
      complaints:
        - Strukturiertes Hiring weniger tief als Greenhouse
    sources:
      - id: workable-com-interview-questions-generator
      - id: resources-workable-com-workable-agent
      - id: aimadefor-com-blog-greenhouse-review-hr
  - id: blog-workday-com-en-us-issue-2-workday-rising-daily-2024-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Pflichtkandidat fuer DACH-Workday-Konzerne. Native Frage-Generierung dünn; das schwere Heben uebernehmen Marketplace-Apps – damit kippt das Gesamtbundle aber typisch in den Annex-III-Hochrisiko-Bereich. 'Conditional', weil die Antwort tool-extern liegt.
    caveats:
      - Marketplace-Apps haben separate DPAs/Sub-Processor-Listen – pro App pruefen.
      - Recruiter Agent (HiredScore) EU-Verfuegbarkeit verifizieren.
      - Workday selbst wird in EU-AI-Act-Beispielen als Hochrisiko-CV-Screening gefuehrt – Halo-Effekt.
      - Native Frage-Generierung weniger ausgepraegt als bei SAP/Greenhouse.
      - Native Frage-Generierung weniger ausgeprägt als bei SAP/Greenhouse
      - Zusätzliche Marketplace-App nötig für tiefes Question-Building
      - EU-AI-Act-Hochrisiko, Workday als Provider mit Zusatzpflichten
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Agent framework enables multi-task automation (scheduling, sourcing)
        - Job-description context flows to downstream recruiting tasks
      complaints:
        - Native question generation is weak; static forms, not AI-driven
        - Full structured question suite needs third-party marketplace apps
        - "Nodes.inc analysis: lacks dynamic AI conversation vs. Greenhouse"
    sources:
      - id: marketplace-workday-com-en-us-apps-601666-ai-interview-agent-overview
      - id: blog-workday-com-en-us-issue-2-workday-rising-daily-2024-html
  - id: dvinci-de-en-features-software
    fit: partial
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Hamburger Bewerbermanagement-Anbieter mit AI Agent fuer Karriereseiten, deutsche UI/Support, DSGVO-Default und AVV-faehig – relevant fuer DACH-Mittelstand und oeffentliche Hand. Likely missed by market scan because d.vinci ist DACH-only und wird in englischsprachigen 'AI interview question generator'-Suchen schlicht nicht gelistet, obwohl es im deutschen Markt eine fest etablierte Groesse ist.
    caveats:
      - Kein dediziertes Interview-Frage-Generierungs-Feature in der Produkt-Doku sichtbar – AI-Funktion fokussiert auf Karriereseiten/Job-Texte.
      - Reine Frage-Generierung nur indirekt ueber generische AI-Layer.
      - Funktionsumfang weniger strukturiert als Greenhouse/HireVue.
    sources:
      - id: dvinci-de-en-features-software
  - id: rexx-systems-com-recruiting
    fit: partial
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Hamburger Anbieter mit Open-Source-/lokal gehosteter KI und explizitem 'diskriminierungsfreiem' KI-Scoring (trusted.de-Review) – stark fuer DACH-Faelle mit harter Datenresidenz und BR-Anforderung. Likely missed by market scan because Rexx wird als deutscher Mittelstands-ATS-Player gefuehrt und faellt aus internationalen 'AI interview question generator'-Suchergebnissen heraus.
    caveats:
      - Kerngeschaeft KI-Scoring/Matching – Frage-Generierung als explizites Feature unklar dokumentiert.
      - KI-Scoring ist EU-AI-Act-Hochrisiko sobald Auswahl-Wirkung – BR-Mitbestimmung Pflicht.
      - Wenig internationale Praktiker-Evidenz; Reviews ueberwiegend deutschsprachig.
    sources:
      - id: trusted-de-bewerbermanagement
  - id: softgarden-com-de
    fit: partial
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Berliner ATS mit explizitem KI-Recruiting-Modul, deutscher UI, deutschem Hosting und BR-faehigen Vertraegen – fuer DACH-Mittelstand mit harter Datenresidenz-Anforderung relevant. Likely missed by market scan because softgarden positioniert seine KI primaer fuer Job-Texte/Matching, nicht explizit als Interview-Frage-Generator – das eigentliche Use-Case-Feature laeuft als Implizit-Kandidat unter dem Radar von Capability-Suchen.
    caveats:
      - Kein dediziertes 'Interview-Frage-Generierung'-Modul ausgewiesen – Funktion eher abgeleitet aus KI-Job-/Kommunikations-Layer.
      - Strukturierte Rubric-Workflows nicht so tief wie Greenhouse.
      - EU-AI-Act-Provider-Statement fuer das KI-Modul oeffentlich nicht prominent.
    sources:
      - id: softgarden-com-de-ki-recruiting
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Offizielles MS-Template fuer rollenspezifische Frage-Generierung, lebt im bestehenden M365-Tenant inkl. EU Data Boundary. Reine Drafting-Hilfe ohne Scoring – damit klar unterhalb der Annex-III-Schwelle, solange Output nicht in Auswahlrichtlinien zementiert wird. Praktisch null Beschaffungsaufwand, da Vertrag in den meisten DACH-Konzernen bereits existiert. AIHR (unabhaengige HR-Weiterbildungsorganisation) bestaetigt den Workflow als normalisierten HR-Einsatz.
    caveats:
      - Microsoft uebernimmt keine arbeitsrechtliche Verantwortung – AGG-/BetrVG-Pruefung bleibt beim Deployer.
      - Kein nativer ATS-Connector – Output landet in Word/Teams/Loop, manueller Uebertrag noetig.
      - Loop/Teams-Inhalte koennen als Personalaktenfragmente gelten und Aufbewahrungspflichten ausloesen.
      - Copilot-Output erzeugt keine FRIA/DPIA – die liegen weiter beim Deployer.
      - Template warnt explizit, dass lokale Arbeitsrechts-Compliance vom Kunden zu prüfen ist
      - Keine native ATS-Anbindung – Output ist Word/Teams/Loop
      - Microsoft 365 Copilot Lizenz erforderlich
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - AIHR empfiehlt Copilot-in-Teams als Standard-HR-Workflow für Interview-Fragen-Generierung
        - Zero-Procurement-Vorteil für bestehende M365-E3/E5-Kunden
      complaints:
        - Kaum erste-Person-Praktiker-Berichte spezifisch für Interview-Fragen-Generierung auffindbar
    sources:
      - id: learn-microsoft-com-en-us-microsoft-365-copilot-extensibility-agent-builder-template-interview-questions
      - id: adoption-microsoft-com-en-us-scenario-library-human-resources-streamline-your-recruiting-process
      - id: aihr-com-blog-copilot-for-hr
  - id: atlassian-com-software-rovo
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Wenn HR-Teams Confluence + Jira nutzen (in DACH-Konzernen häufig), kann Rovo strukturierte Interview-Leitfäden direkt aus bestehenden Job-Architekturen, Kompetenzmodellen und früheren Interview-Pages generieren. Personio-Community-Beispiele zeigen, dass Interview-Leitfäden oft in Confluence leben – Rovo macht daraus AI-Sicht. Kein dediziertes Recruiting-Tool, aber verlängert die Quelle der Wahrheit.
    caveats:
      - Keine ATS-Integration, kein Scorecard-Workflow
      - Frage-Qualität abhängig von Confluence-Hygiene
      - Nicht spezialisiert auf AGG/BetrVG-Fragenfilter
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Cross-product knowledge integration with Confluence/Jira
        - Useful for org where interview guides already live in Confluence
      complaints:
        - Requires significant prompt engineering; not plug-and-play
        - "Eesel.ai: 'half-baked' for specialized recruiting tasks"
        - Knowledge-focused, not hiring-specialized; generic guidance
    sources:
      - id: community-personio-de-recruiting-2-interviewleitfaden-4620
      - id: atlassian-com-software-rovo
start_here: "Einstieg ohne Beschaffungsaufwand: ChatGPT Enterprise mit bestehendem DPA nutzen, um auf Basis der Stellenbeschreibung einen Frage-/Rubrik-Block zu generieren und in einem Hiring-Manager-Pilot zu validieren. SAP-HCM-Shops steigen direkt über Joule in SuccessFactors Recruiting ein; wer einen tiefen Scorecard-Workflow benötigt, prüft Greenhouse."
caveats: Solange kein Bewerber-PII in den Prompt einfließt und der Output als Drafting-Hilfe gilt, bleibt die EU-AI-Act-Risikoklasse niedrig. Sobald das Frage-Set als verbindliche Auswahlrichtlinie eingesetzt wird, greift BetrVG §95 – Betriebsrat muss einbezogen werden.
sources: []
---
