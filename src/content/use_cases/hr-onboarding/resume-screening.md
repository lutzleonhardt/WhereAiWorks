---
stage: hr-onboarding
order: 11
roles:
  - hr-recruiting
title: Resume-Screening & Ranking
goal_label: Eingehende Bewerbungen vorranken und shortlisten
suitability: conditional
rationale: Eightfold AI und HiredScore gehören zu den ersten Spezialanbietern mit datierbaren Compliance-Artefakten (ISO 42001, unabhängiges Bias-Audit), die eine EU-AI-Act-Konformitätsbewertungsakte substanziell stützen können. Da Resume-Screening ab August 2026 verbindlich als High-Risk unter EU-AI-Act Annex III gilt, legt ein strukturierter Pilot heute die Grundlage für fristgerechte Konformität.
tools:
  - id: eightfold-ai-use-case-candidate-relationship-management
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Einer der wenigen Anbieter mit harten EU-AI-Act-Compliance-Artefakten: ISO 42001 (Aug 2025), externes Bias-Audit, Letter of Assurance fuer Instructions-for-Use. Fuer DACH-Konzerne mit Konformitaetsbewertungs-Druck eine der belegfaehigsten Optionen. Kunde bleibt Deployer und muss FRIA selbst fuehren."
    caveats:
      - ISO 42001 zertifiziert Management-System, nicht das Modell — Art.-43-Konformitaetsbewertung bleibt offen
      - EU-Datenresidenz und Sub-Processor-Liste fuer DACH-DPA explizit anfragen
      - Practitioner berichten zirkulaere LinkedIn-Datenabhaengigkeit
      - Betriebsrats-Vereinbarung Pflicht; Vendor liefert nur Bausteine
      - Custom-Pricing (~7-10$/Mitarbeiter/Monat)
      - ISO 42001 zertifiziert Management-System, NICHT das Modell selbst — Konformitaetsbewertung Art. 43 bleibt offen
      - EU-Datenresidenz und Sub-Processor-Liste explizit fuer DACH-Vertrag anfragen
      - Bei Auftragsverarbeitung gem. Art. 28 DSGVO TIA fuer US-Mutter pruefen
      - Custom-Pricing (~7-10$/Mitarbeiter/Monat) — kein Self-Service
      - Practitioner berichten zirkuläre LinkedIn-Datenabhängigkeit
      - DACH/Betriebsrats-Vereinbarung muss Kunde selbst (Deployer) führen
      - Vendor-Konformitätsbewertung explizit anfragen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Versteht Skill-Synonyme statt nur Keywords
        - Erklärbares Scoring, ISO 42001 zertifiziert
      complaints:
        - Zirkuläre Abhängigkeit von LinkedIn-Daten
        - 6-8 Wochen Time-to-Value, hohe Komplexität
    sources:
      - id: eightfold-ai-blog-eu-ai-act-hr-leaders
      - id: thenontechai-com-best-ai-for-talent-matching-2026-eightfold-hirevue-paradox
      - id: genedai-me-2026-01-08-ai-recruitment-practitioner-perspectives-multi-platform-reality-check
  - id: workday-com-en-us-products-talent-management-ai-recruiting-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Eines der wenigen Tools mit datierbarem unabhaengigem Bias-Audit (Secretariat, Maerz 2026) — konkretes Compliance-Artefakt fuer Konformitaetsbewertungs-Akte. Native Workday-Integration und 12 Jahre Domain-Expertise. Sinnvoll primaer im Workday-Stack.
    caveats:
      - Bias-Audit-Daten sind US/NYC-zentriert — DACH-Repraesentativitaet unbestaetigt
      - Ohne Workday-Backbone kaum Wert; Lock-in-Risiko
      - Logging-Retention (Art. 12 / Art. 26(5) EU AI Act) muss konfiguriert werden
      - Deployer-Pflichten (Art. 26, FRIA Art. 27) bleiben beim Kunden
      - Bias-Audit ist auf US/NYC-Datenbasis — DACH-Repraesentativitaet unbestaetigt
      - Workday-Lock-in macht spaeteren Vendor-Wechsel teuer
      - Logging-Retention (Art. 12 EU AI Act, min. 6 Monate Art. 26(5)) explizit konfigurieren
      - Sinn nur in Workday-Stacks; Standalone-Wert seit Acquisition begrenzt
      - Custom Enterprise-Pricing, kaum öffentliche Reviews
      - Bias-Audit nur für US-Daten/NYC veröffentlicht — DACH-Spezifika fehlen
      - Deployer-Pflichten unter EU AI Act Art. 26 bleiben beim Kunden
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Nahtlose Workday-Integration
        - Diversity-Analytics integriert
      complaints:
        - Wenig öffentliche Reviews verfügbar
        - Lock-in in Workday-Ökosystem
    sources:
      - id: workday-com-en-us-legal-responsible-ai-and-bias-mitigation-html
      - id: aiproductivity-ai-tools-hiredscore
      - id: gartner-com-reviews-product-hiredscore-ai-for-recruiting
  - id: personio-de-funktionen-recruiting
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: DACH-Marktfuehrer SMB/Mittelstand mit EU-Datenresidenz, DSGVO-nativ und expliziter Human-in-the-Loop-Position. April-2026-aurio-Akquisition bringt agentisches Sourcing/Screening direkt ins Modul — ideal fuer DACH-Mittelstand mit Betriebsrat.
    caveats:
      - aurio-Integration noch unreif — Funktionsumfang vertraglich klaeren
      - Konformitaetsbewertung fuer eingebauten AI-Block oeffentlich nicht dokumentiert
      - Native Scoring-Tiefe begrenzt vs Spezialanbieter — Skima/Drittanbieter ergaenzen oft
      - Kunde bleibt Deployer mit FRIA-Pflicht (Art. 27)
      - aurio-Integration noch unreif — Funktionsumfang fuer Pilot vertraglich klaeren
      - Konformitaetsbewertung des Anbieters fuer eingebauten AI-Block aktiv anfragen
      - Personio agiert oft als Provider; Kunde dennoch Deployer mit FRIA-Pflicht
      - AI-Screening noch in Rollout (aurio-Acquisition April 2026, Integration läuft)
      - Skima/Drittanbieter ergänzen Personio bei tieferem Scoring
      - "EU-AI-Act-Konformitätsbewertung: Roadmap noch nicht öffentlich"
      - Skima-Reviews kritisieren Personios native Scoring-Tiefe
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - EU-Hosting, DSGVO-native, etabliert in DACH-Mittelstand
        - All-in-One HR-Suite reduziert Tool-Wildwuchs
      complaints:
        - Native Recruiting-Scoring-Tiefe begrenzt vs Spezialanbieter
        - AI-Features erst seit aurio-Integration in Roll-out
    sources:
      - id: personio-com-about-personio-press-personio-profitability-acquisition-aurio
      - id: community-personio-com-recruiting-29-thoughts-on-using-ai-for-candidate-screening-5235
      - id: skima-ai-blog-product-deep-dives-personio-reviews
  - id: softgarden-com-de-loesungen-ki-recruiting
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Berliner Anbieter mit ISO-27001-Hosting in Deutschland, AGG-/DSGVO-positionierter KI-Matching-Engine auf anonymisierten Trainingsdaten. Recruiter behaelt finale Entscheidung — passt zu BetrVG §87/§95 und EU-AI-Act-Human-Oversight. Fuer DACH-Mittelstand mit Compliance-Prioritaet ein guter Default.
    caveats:
      - Keine ISO 42001, kein publiziertes Bias-Audit
      - EU-AI-Act-Konformitaetsbewertung nicht oeffentlich dokumentiert
      - Job-Anzeigen-Generator nutzt OpenAI ChatGPT — Sub-Processor-Mapping noetig
      - Konzern-Features dünner als bei SAP/Workday
      - Job-Anzeigen-Generator nutzt OpenAI — Sub-Processor-Mapping und ggf. EU-Routing klaeren
      - Konformitaetsbewertung Art. 43 EU AI Act nicht oeffentlich dokumentiert
      - Keine ISO 42001, kein externes Bias-Audit publiziert
      - Veröffentlichte EU-AI-Act-Konformitätsbewertung noch nicht dokumentiert
      - Tiefenwert des Matchings wird in unabhängigen Reviews kaum diskutiert
      - Job-Anzeigen-Generierung nutzt OpenAI ChatGPT — Sub-Processor-Mapping nötig
      - Eher SMB/Mittelstand-Fokus, weniger Konzern-Features
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Benutzerfreundlich und intuitiv, keine langen Schulungen nötig
        - KI-Matching geht über Keyword-Suche hinaus, erkennt Skill-Synonyme
        - DSGVO-nativ, ISO-27001 in Deutschland gehostet
      complaints:
        - Ersteinrichtung komplex, Benutzeroberfläche manchmal unintuiv
        - Gelegentliche technische Störungen und Fehler gemeldet
        - Reporting-Tools weniger umfangreich als Konkurrenten
    sources:
      - id: softgarden-com-de-loesungen-ki-recruiting
      - id: hr-software-auswahl-de-hr-software-anbietervergleich-softgarden-vs-dvinci
  - id: sap-com-products-hcm-recruiting-software-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Fuer SAP-HCM-Bestandskunden in DACH der Default mit EU-Datacentern, Walldorf-Vertragspartner und etabliertem Betriebsrats-Workflow. AI-Assisted Skills Matching nutzt anonymes Resume-Parsing und liefert Skills-Visibilitaet — mit Recruiter-Letztentscheidung kompatibel zu DSGVO Art. 22.
    caveats:
      - Native AI-Tiefe geringer als Eightfold/HiredScore
      - AI-Modul-Konformitaetsbewertung pro Feature (Joule, SmartRecruiters-Integration) separat anfordern
      - SmartRecruiters-Integration noch im Roll-out
      - Hohe Implementierungs-/Lizenzkosten, Lock-in
      - AI-Assisted Skills Matching ist Recruiting-Modul-Feature ohne separate Konformitaetsbewertung
      - SmartRecruiters-Integration noch im Roll-out — Funktion fuer DACH-GA pruefen
      - Joule (Generative AI) erfordert eigene Sub-Processor-/Modell-Bewertung
      - Native AI-Matching gilt als weniger tief als Eightfold/HiredScore
      - Konformitätsbewertung muss pro AI-Modul separat geklärt werden
      - Lock-in in SAP-HCM-Suite, hohe Implementierungskosten
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - 80% reduction in recruiter time spent on screening
        - Identifies direct, related, and transferable skills automatically
        - 25% faster time-to-fill for previously hard-to-fill roles
      complaints:
        - Native AI-Matching beurteilt als weniger tief vs. Eightfold/HiredScore
        - AI-Units-Kosten separat; kein kostenloses Testing in Dev-Systemen
        - Universal skills taxonomy kann limitierend wirken bei nischenrollen
    sources:
      - id: userapps-support-sap-com-sap-support-knowledge-en-3619879
      - id: vicokezie-com-ai-features-comparisons-for-hr-technology-platforms
      - id: sap-com-use-cases-reduce-time-spent-assessing-candidate-applications
  - id: recruitis-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: EU-Hosting (Prag/Brno), GDPR-native by design, automatische Depersonalisierung und native SAP-SuccessFactors-Integration. 11 Sprachen, 8.000+ Nutzer. Likely missed by market scan because positioned als CEE-/regionaler ATS-Anbieter — globalen AI-Recruiting-Listicles fehlt regelmaeßig der DACH-/CEE-Blickwinkel.
    caveats:
      - ISO 27001 firmenweit erst 2026 in Arbeit
      - Native AI-Tiefe vs Eightfold/HiredScore unklar
      - Keine publizierte EU-AI-Act-Konformitaetsbewertung
      - DACH-Praesenz schwaecher als softgarden/Personio
    sources:
      - id: recruitis-io-en-privacy-notice
  - id: treegarden-io
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "ATS, das EU AI Act und DSGVO Art. 22 als Compliance-First-Architektur baut: Article-22-Human-Review-Queue, Bias-Dashboard, immutable Audit-Trail, Explainable Scoring. Likely missed by market scan because tool is positioned als Compliance-First-ATS-Nische, nicht als 'AI Recruiting Marktfuehrer' und taucht in Listicles selten auf — aber fuer eine Hochrisiko-Akte interessant."
    caveats:
      - Junges Produkt, geringe Marktreife und kaum unabhaengige Praktiker-Reviews
      - Keine ISO 42001, externe Audits nicht publiziert
      - Datenresidenz und Vendor-Stabilitaet pruefen
      - Vendor-Claims technisch durch Pilot validieren
    sources:
      - id: treegarden-io-compliance
  - id: x0pa-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Recruitment-Intelligence-Plattform mit SOC-2-Type-2, ISO-27001-aligned, AI-Verify-Framework und konfigurierbarer EU-Datenresidenz via Azure/AWS. Likely missed by market scan because Vendor-HQ Singapur statt USA/EU und in DACH-Listicles selten gefuehrt — bringt aber hohe Compliance-Posture mit.
    caveats:
      - ISO 27001 nur 'aligned' — keine vollstaendige Zertifizierung
      - DACH-Footprint und Praktiker-Reviews duenn
      - AI-Verify ist Singapurer Framework — keine direkte EU-AI-Act-Mapping-Garantie
      - Hosting in EU 'available upon request' — nicht Default
    sources:
      - id: x0pa-com-compliance
start_here: Im DACH-Mittelstand bietet Personio Recruiting (aurio AI) den risikoärmsten Einstieg dank EU-Datenresidenz und eingebautem Human-in-the-Loop; im Workday-Konzern-Stack übernimmt HiredScore diese Rolle. Vor jedem Pilot sind DSGVO-Folgenabschätzung, Grundrechte-Folgenabschätzung (EU AI Act Art. 27) und Betriebsvereinbarung abzuschließen.
caveats: Als High-Risk-System nach EU-AI-Act Annex III sind Risk-Management, Daten-Governance, Logging und nachweisliche menschliche Endentscheidung ab August 2026 Pflicht — diese Deployer-Pflichten (Art. 26) überträgt kein Vendor. Auto-Reject-Logik verstößt gegen DSGVO Art. 22; BetrVG §87(1) Nr. 6 und §95 machen eine Betriebsvereinbarung vor Produktiveinsatz zwingend.
sources: []
---
