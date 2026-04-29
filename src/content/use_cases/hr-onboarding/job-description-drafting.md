---
stage: hr-onboarding
order: 3
roles:
  - hr-recruiting
title: Job-Description-Drafting
goal_label: Stellenausschreibungen schneller und AGG-konform formulieren
suitability: good_fit
rationale: "Für DACH-Unternehmen bieten ATS-native Lösungen wie softgarden und SAP SuccessFactors Joule einen direkten Einstieg: KI-gestützte Stellenanzeigen-Erstellung ist in bestehenden HR-Systemen bereits integriert und erfordert keine separate Tool-Einführung. Der Use Case bleibt nach EU-AI-Act Limited-Risk, solange der Output nicht direkt an die Bewerberauswahl gekoppelt wird."
tools:
  - id: sap-com-products-hcm-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Für DACH-SuccessFactors-Bestandskunden der defensivste Pfad: deutscher Anbieter, EU-Datenresidenz, Posting-Language steuert auch deutschsprachigen Output. JD-Enhancement allein ist Limited-Risk nach EU-AI-Act, solange Applicant-Screening nicht mitaktiviert wird. Betriebsratsfreigabe meist auf SuccessFactors-Tenant-Ebene bereits vorhanden."
    caveats:
      - Joule Premium AI Package + AI-Units sind Zusatzkosten und nicht in jedem SuccessFactors-Vertrag enthalten
      - Sobald Applicant Screening / Interview-Question-Generator aktiv sind, kippt die Beschaffung in EU-AI-Act Annex III
      - Keine explizite AGG-§11-Validierung im Output – Endkontrolle durch Recruiter bleibt Pflicht
      - Mitbestimmungspflichtig nach §87 Abs. 1 Nr. 6 BetrVG – Betriebsvereinbarung erforderlich
      - Recruiting-Modul fällt unter EU-AI-Act Annex III, wenn Joule-Funktionen wie Applicant Screening mitlizenziert sind – JD-Enhancement allein ist Limited-Risk
      - AI-Units-Lizenzmodell ist intransparent; Procurement muss TCO sauber rechnen
      - Joule Premium AI Package erforderlich – nicht in jedem SuccessFactors-Vertrag enthalten
      - Funktion nur im SuccessFactors-Tenant nutzbar; keine Standalone-Option
      - Keine explizite AGG-§11-Validierung – fachliche Endkontrolle bleibt nötig
      - Qualität stark abhängig vom Job-Profile-Builder-Pflegegrad
    sources:
      - id: community-sap-com-t5-human-capital-management-q-a-successfactors-ai-job-description-enhancement-set-up-and-hints-qaq-p-13979065
      - id: learning-sap-com-learning-journeys-explore-sap-successfactors-solutions-leveraging-ai-capabilities-in-sap-successfactors
  - id: developdiverse-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Europäischer DK-Anbieter mit DSGVO-Grundausstattung – die saubere DACH-Alternative zu Textio/Ongig, mit breiteren Bias-Dimensionen (Gender, Ethnizität, Alter, Neurodiversität, Behinderung). Deutsche Sprachvalidierung muss in PoC nachgeschärft werden.
    caveats:
      - AGG-§11-/m-w-d-Logik nicht explizit dokumentiert
      - Kleinere Marktdurchdringung – DACH-Referenzen dünn
      - Bias-Modell wissenschaftsbasiert, aber DE-Output nicht out-of-the-box AGG-konform
      - Kleinere Marktdurchdringung – Referenzkunden in DACH dünn
      - Bias-Modell wissenschaftsbasiert, aber Sprachvalidierung für DE-Output nötig
      - Keine spezifische AGG-§11-/m-w-d-Logik bekannt
      - Kleinere Marktdurchdringung im Vergleich zu Textio
    sources:
      - id: developdiverse-com-ppc-textio-compare
  - id: support-google-com-a-users-answer-14171678-hl-en
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Generalist mit Workspace-DPA und EU-Region-Konfiguration, brauchbar für JD-Drafts in Docs. Im DACH-Enterprise weniger verbreitet als M365, aber für Workspace-Shops ohne separates Recruiting-Tool tragfähiger Pfad.
    caveats:
      - LLM-Inferenz Standard nicht garantiert EU-only – Region explizit konfigurieren
      - Keine AGG-/Bias-Detection-Logik
      - Output muss vor Veröffentlichung manuell auf '(m/w/d)' und Pflichtangaben geprüft werden
      - Datenverarbeitung kann in EU-Region konfiguriert werden, aber LLM-Inferenz Standard nicht garantiert EU-only
      - AI-Act-Risiko vergleichbar mit Copilot – JD-Drafting per se Limited-Risk
      - Kein Bias-Detektor und keine AGG-spezifische Lokalisierung
      - Output muss vor Publikation manuell auf Genussform und Pflichtangaben geprüft werden
    sources:
      - id: support-google-com-a-users-answer-14171678-hl-en
  - id: greenhouse-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Etabliertes Enterprise-ATS, in DACH primär bei Tech-Scaleups. AI-Funktionen für Candidate Summaries und Job-Matching seit 2026 verfügbar; JD-Drafting eher Hygienefunktion, Bias-Layer kommt typisch über Drittanbieter (Textio/Datapeople).
    caveats:
      - AI-JD-Funktionen weniger ausgereift als spezialisierte Tools
      - US-Anbieter, EU-Datenresidenz per Setup, Standardvertrag prüfen
      - Mit AI-Matching-Erweiterungen wird der Stack High-Risk nach AI-Act
      - US-Anbieter, Datenresidenz EU per Setup, aber Standardvertrag prüfen
      - Bias-/AGG-Logik wird typisch via Drittintegration ergänzt
    sources:
      - id: linkedin-com-pulse-best-ai-recruiting-tools-2026-whats-real-hype-nimrod-kramer-9435e
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Pragmatisch, weil meist eh lizenziert; mit EU Data Boundary, Purview-DLP und Tenant-Grounding DSGVO-kompatibel. JD-Drafting per se Limited-Risk nach EU-AI-Act, sobald Outputs nicht direkt an Bewerberauswahl koppeln. AGG-Logik fehlt – manueller Review-Schritt zwingend.
    caveats:
      - Keine Bias-Detection und keine deutsche Genus-Marker-Logik
      - Microsoft unterliegt CLOUD Act – relevant für öffentlichen Sektor und stark regulierte Branchen
      - Betriebsrats-Mitbestimmung greift bereits bei breitem Copilot-Rollout
      - Bei JD-Drafting kein Recruiting-Tool im Sinne von Annex III – aber sobald Outputs an Bewerberauswahl gekoppelt werden, AI-Act-Re-Klassifizierung möglich
      - Betriebsrats-Mitbestimmung bereits bei breitem Copilot-Rollout typisch erforderlich
      - Generischer LLM-Output, keine spezifische AGG-/Gender-Bias-Logik
      - DEI-Tools wie Develop Diverse betonen explizit, dass Copilot kein Bias-Detektor ist
    sources:
      - id: adoption-microsoft-com-en-us-scenario-library-human-resources-streamline-your-recruiting-process
      - id: developdiverse-com-microsoft-copilot-compare
  - id: personio-de-funktionen-recruiting
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Münchener Anbieter mit ISO 27001 und EU-Hosting, Standard für DACH-Mittelstand. JD-Drafting läuft im Recruiting-Modul und wachsenden Assistant; Compliance-Story (DPA, Betriebsratsdokumentation) ist im DACH-Markt etabliert. AGG-Bias-Detection fehlt, aber Output kann mit genderApp als Review-Layer kombiniert werden.
    caveats:
      - Personio Assistant 2025 noch Beta-nahe – produktive JD-Pipelines daran zu hängen ist verfrüht
      - Keine eigene AGG-Validierung – Sprachprüfung extern oder manuell
      - Skalierungsgrenzen für sehr große Konzerne mit komplexen HCM-Datenmodellen
      - Primär KMU-/Mittelstand-Skalierung – sehr große Konzerne oft inkompatibel zur Datenmodell-Tiefe
      - Recruiting-Workflow als Ganzes ist mitbestimmungspflichtig nach §87 BetrVG
      - Keine dedizierte AGG-/Bias-Detection-Logik dokumentiert
      - Assistant primär als Datenfrage- und Drafting-Helper positioniert, nicht als JD-Spezialist
    sources:
      - id: personio-com-about-personio-press-personio-announces-new-ai-driven-features
      - id: personio-com-blog-personio-assistant
  - id: smartrecruiters-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Enterprise-ATS mit EU-Datenresidenzoption; durch SAP-Joule-Integration 2026 zusätzlich für SuccessFactors-Kunden interessant. Solides Stack-Element für Multi-Land-Recruiting in DACH, AGG-Logik bleibt aber Drittanbieter-Aufgabe.
    caveats:
      - AI-JD-Funktionen sind generisch, kein DACH-Spezifikum
      - Mit AI-Matching-Modulen Annex-III-Risiko nach EU-AI-Act
      - AGG-Konformität bleibt Verantwortung des Kunden
      - Mit AI-Matching-Modulen Annex-III-Risiko unter EU-AI-Act
      - Keine spezifische AGG-/m-w-d-Logik dokumentiert
      - AI-JD-Funktionen weniger spezialisiert als bei Textio/Datapeople/Ongig
    sources:
      - id: blogarama-com-technology-blogs-1449001-streamline-workflows-modern-php-tools-blog-75113091-sap-brings-agentic-human-capital-management-what-joule-successfactors-actually-add
      - id: pin-com-blog-best-ai-recruiting-tools-enterprise
  - id: workable-com-workable-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Pragmatische ATS-native Lösung mit JD-Generator, Workable Agent für Intake-Gespräche und ~20% AI-gestützter Job-Erstellung in der Bestandsbasis. Brauchbar für DACH-Mittelstand ohne SAP/Personio-Investment, aber für Großkonzerne zu wenig DACH-spezifisch.
    caveats:
      - Keine spezifische AGG-/Gendergerechtigkeits-Logik für Deutsch
      - EU-Hosting und DPA verfügbar, aber im Procurement explizit zu erfragen
      - Keine ISO 27001/BSI C5 in DACH-Standardpaket prominent dokumentiert
      - Workable hostet primär in der EU (Azure), DPA verfügbar – muss aber im DACH-Procurement explizit erfragt werden
      - Keine ISO 27001/BSI C5 in DE-Standardpaket dokumentiert
      - AGG-Konformität bleibt manueller Review-Schritt
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Pragmatischer ATS-nativer Workflow ohne Tool-Wechsel
      complaints:
        - Generische Outputs ohne Marken-/Lokalisierungsfeintuning
    sources:
      - id: workable-com-workable-ai
      - id: resources-workable-com-workable-agent
      - id: reddit-com-r-recruiting-comments-1nuxuwv-anyone-actually-had-a-positive-experience-with-ai
  - id: openai-com-enterprise
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: ChatGPT Enterprise mit DPA, EU-Datenresidenz und SSO ist der niedrigschwellige Weg, JD-Drafts schnell zu produzieren. Custom-GPT-Templates können hauseigen für AGG-konforme Sprache aufgebaut werden – die externen FairFormuliert/JobAd-Analyzer-Konstruktionen sind dagegen nicht enterprise-tauglich.
    caveats:
      - Bias- und AGG-Logik müssen via Prompt-Engineering und Review-Layer organisiert werden
      - Roh-Modelle erkennen deutsche generische Maskulina nicht zuverlässig
      - Externe Custom GPTs (BdKom, HFM) ohne AV-Vertrag sind Schatten-IT
    sources:
      - id: resources-workable-com-tutorial-how-to-use-chatgpt-to-make-better-job-descriptions
  - id: rexx-systems-com-ai-hiring
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Hamburger HR-Suite mit deutschen Rechenzentren, 'KI Made in Germany'-Positionierung und 25+ Jahren Recruiting-Marktpräsenz; 3.000+ Kunden in 30 Ländern. JD-Drafting läuft im Recruiting-Modul, AI-Hiring-Modul ergänzt Bewerber-Scoring. Likely missed by market scan because rexx ist DACH-only und tritt international kaum als 'AI-Vendor' auf.
    caveats:
      - AI-Hiring-Modul ist Bewerber-Scoring – kombiniert mit JD-Drafting wird die Beschaffung Annex-III-pflichtig (EU-AI-Act)
      - AGG-spezifische Sprachvalidierung nicht prominent beworben
      - Mitbestimmungspflichtig – Betriebsrat-Einbindung muss früh erfolgen
    sources:
      - id: rexx-systems-com-ai-hiring
  - id: workday-com-content-dam-web-de-documents-datasheets-datasheet-workday-recruiting-pdf
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Großer SAP-Konkurrent im HCM-Markt mit relevanter DACH-Bestandsbasis (Siemens, Henkel, Allianz, Daimler-Truck). Workday Recruiting bietet AI-gestützte JD- und Skill-Funktionen; für Workday-Bestandskunden der gleiche defensive Pfad wie Joule für SAP-Kunden. Likely missed by market scan because der Use-Case-Fokus auf JD-Drafting hat ATS-/HCM-Suite-Bezugspunkte ausgeblendet.
    caveats:
      - Mit AI-Matching/Screening-Modulen klar Annex-III-pflichtig nach EU-AI-Act
      - AGG-spezifische Sprachvalidierung nicht Bestandteil – Drittanbieter oder Review-Layer notwendig
      - Lizenzkosten und Implementierungsaufwand nur für sehr große DACH-Konzerne sinnvoll
    sources:
      - id: workday-com-en-us-products-talent-management-recruiting-html
  - id: softgarden-com-de-loesungen-multiposting
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Berliner ATS-Anbieter mit ChatGPT-basiertem Stellenanzeigen-Generator nativ in Multiposting; mehr als 1.200 Jobbörsen-Anbindungen, deutscher Hauptsitz, ISO 27001-zertifiziertes Hosting in Deutschland, AT/CH-Präsenz. OMR Reviews (170 verifizierte Nutzerbewertungen) listet 'KI-gestützte Texterstellung und Übersetzung' als eigenständiges Feature-Merkmal. Likely missed by market scan because softgarden ist als ATS-/Multiposting-Suite positioniert und nicht als 'AI-Tool'. Für DACH-Recruiting-Volumen ein pragmatischer Default.
    caveats:
      - Generator basiert auf ChatGPT – Datenfluss zu OpenAI im Procurement explizit klären
      - AGG-/m-w-d-Logik nicht prominent dokumentiert – Output muss redaktionell geprüft werden
      - Mit Matching-Funktionen wird die Beschaffung nach EU-AI-Act Annex III einzustufen
      - Keine explizite EU-AI-Act-Compliance-Erklärung gefunden – für Procurement klären
      - Kein individueller Practitioner-Erfahrungsbericht zum KI-Generator in öffentlichen Foren zugänglich
    sources:
      - id: softgarden-com-de-loesungen-multiposting
      - id: omr-com-de-reviews-product-softgarden
      - id: ki-brands-de-ki-recruiting-tools-europa
start_here: SuccessFactors-Kunden starten mit Joule Job Description Enhancement im bestehenden Tenant – die Betriebsratsfreigabe auf Tenant-Ebene ist dort oft bereits vorhanden. Ohne SAP-Investment bietet softgarden einen pragmatischen Einstieg mit ISO-27001-zertifiziertem Hosting in Deutschland und direkter Multiposting-Anbindung.
caveats: Keines der Tools liefert eine automatische AGG-§11-Validierung – geschlechtsneutrale Sprache und '(m/w/d)' müssen redaktionell geprüft werden, bevor JDs publiziert werden. Die Kombination mit Bewerber-Scoring- oder Matching-Funktionen stuft den Stack nach EU-AI-Act Annex III hoch; Betriebsrat-Einbindung nach §87 BetrVG ist für den Recruiting-Workflow generell erforderlich.
sources: []
---
