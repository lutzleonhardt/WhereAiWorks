---
stage: hr-onboarding
order: 20
roles:
  - hr-recruiting
title: AGG-konformer deutschsprachiger Anzeigen-Check
goal_label: Stellenausschreibungen auf AGG-Diskriminierungsmerkmale prüfen
suitability: conditional
rationale: Englischsprachige Bias-Tools decken deutsche AGG-Spezifika — Genus-Marker, '(m/w/d)'-Pflicht, BAG-Rechtsprechung — nicht ab, weshalb ein dedizierter DE-Prüfschritt notwendig bleibt. M365 Copilot mit einem versionierten AGG-Prompt-Template ist die realistischste Einstiegsoption, da die Lizenz in vielen Unternehmen bereits vorhanden ist; Fairlanguage (LUB GmbH) ergänzt mit DACH-kuratierten Sprach- und Inklusionsregeln.
tools:
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Realistische Default-Baseline (62 % softgarden-Studie); mit kuratiertem AGG-Prompt-Template plus juristischer Endkontrolle akzeptable Erstprüfung. Vorteil: meist bereits lizenziert (Copilot in M365), DSGVO-konfigurierbar. Nachteil: kein deterministischer Audit-Trail, subtile DE-Marker werden unzuverlässig erkannt — alle Standalone-Tools müssen sich genau gegen diese Baseline rechtfertigen."
    caveats:
      - Kein deterministisches Verhalten / kein Audit-Trail
      - Subtile DE-Marker werden lt. Briefing unzuverlässig erkannt
      - EU AI Act Art. 50 Transparenzpflicht für KI-generierte Inhalte beachten
      - Prompt-Template muss versioniert und auditierbar sein
      - Prompt-Template muss versioniert und auditierbar sein (Liability-Nachweis)
      - "EU AI Act Art. 50 Transparenzpflicht beachten: KI-generierte Stellenausschreibungen müssen kenntlich gemacht werden, sobald sie an Bewerber kommunizieren"
      - Microsoft Copilot mit M365 ist organisationsseitig oft schon vorhanden — ChatGPT Enterprise als zusätzliche Lizenz schwerer zu rechtfertigen
      - Kein deterministisches Verhalten — Output variiert
      - Erkennt subtile DE-Marker laut Briefing nicht zuverlässig
      - Kein Audit-Trail / kein Hochrisiko-KI-Konformitätsnachweis nach EU AI Act
      - Verantwortung verbleibt beim Anwender
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Schnell verfügbar
        - Niedrige Einstiegshürde
        - DSGVO-Varianten verfügbar
      complaints:
        - Kein Compliance-Verdikt
        - Subtile DE-Marker werden übersehen
        - Halluzinations-Risiko bei Rechtsfragen
    sources:
      - id: stellenonline-de-blog-post-stellenanzeigen-mit-chatgpt-erstellen
      - id: iienstitu-com-de-blog-ki-fuer-recruiter
      - id: reddit-com-r-recruitment-comments-1qr25br-do-ai-assessment-platforms-help-in-eliminating
  - id: fairlanguage-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: DACH-Anbieter mit echten Enterprise-Referenzen (Siemens, Boehringer, TÜV NORD, Bundesagentur für Arbeit), seit 2023 unter LUB GmbH konsolidiert — Bus-Factor besser als bei reinen Startups. Schwerpunkt gendergerechte Sprache plus Beratung; juristischer §1-AGG-Vollcheck nicht abgedeckt, eignet sich aber als kuratiertes Werkzeug-plus-Service-Bundle.
    caveats:
      - Software plus Beratung treibt TCO; Pricing intransparent
      - Browser-Extension Reifegrad in Demo verifizieren
      - Schwerpunkt Gender/Inklusion, nicht juristische AGG-Compliance
      - Kombi-Modell aus Software plus Beratung treibt TCO; reine Tooling-Lizenz schwer beziffer- und vergleichbar
      - Browser-Extension wurde laut arXiv-Review noch 2022 als 'prototypisch' bezeichnet — aktuellen Reifegrad in Procurement-Demo verifizieren
      - Pricing intransparent (OMR Reviews ohne Preisangabe)
      - Schwerpunkt gendergerechte Sprache, nicht AGG-§7/§11-Compliance
      - Pricing/Funktionsumfang intransparent (laut OMR Reviews keine Preisangabe)
      - Browser-Extension war prototypisch — Reifegrad unklar
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Professionelle Beratung mit hohen Qualitätsansprüchen
        - 150+ Projekte in inklusiver Sprache, DISQTrust-Auszeichnung 2025
        - Deutsches Unternehmen mit linguistischem Fachwissen für DE/EN
      complaints:
        - Preismodell nicht transparent, nur individuelle Angebote
        - Eher Beratungsfirma als skalierbare SaaS-Lösung
        - Keine Integrationen zu ATS oder Karriereseiten dokumentiert
    sources:
      - id: fairlanguage-com
      - id: arxiv-org-pdf-2212-02564
      - id: kommunaldigital-de-startup-fairlanguage
  - id: jade-or-at
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: high
    why_it_fits: Wissenschaftlich fundiertes DACH-Tool, das mit Geschlecht/Alter/Kultur drei AGG-relevante Dimensionen kombiniert — inhaltlich näher am Bedarf als die meisten kommerziellen Optionen. Realistisch nur als Pilot oder methodische Referenz nutzbar; ohne SLA, AVV oder ATS-Integration nicht für produktive HR-Workflows in deutschen Enterprises.
    caveats:
      - Österreichisches Recht — AGG/BAG-Mapping nicht 1:1
      - Kein SLA, kein AVV, Universitäts-Hosting
      - Behinderung/Religion/sexuelle Identität nicht abgedeckt
      - Österreichisches Gleichbehandlungsrecht ist nicht 1:1 deckungsgleich mit AGG — Wortlisten müssten gegen BAG-Rechtsprechung gegengeprüft werden
      - Keine DSGVO-AVV für Drittnutzer dokumentiert; Daten gehen an Universitäts-Webserver
      - "Bus-Factor: hängt an Forschungsprojekt-Finanzierung"
      - Österreich-Fokus, kein expliziter Bezug auf deutsches AGG/BAG
      - Universitäres Tool ohne ATS-Integration und SLA
      - Drei Dimensionen (Geschlecht, Alter, Kultur) — Behinderung/Religion/sexuelle Identität fehlen
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Mehrere Dimensionen (Geschlecht + Alter + Kultur)
        - Wissenschaftlich transparent
      complaints:
        - Geringe Bekanntheit außerhalb Österreichs
        - Keine Enterprise-Integration
    sources:
      - id: jade-or-at
      - id: uibk-ac-at-de-newsroom-2022-diversitas-preis-fur-job-ad-decoder
      - id: personalmarketing2null-de-2021-08-19-gendergerechte-stellenanzeigen
  - id: gb-check-de
    fit: partial
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Offizielles Werkzeug der Antidiskriminierungsstelle des Bundes mit 16 Prüfwerkzeugen für Stellenausschreibung, Einstellung und Beförderung — kein KI-Tool, sondern strukturierte Checkliste/Verfahrensanalyse. Likely missed by market scan because es nicht als 'AI-Tool' positioniert ist, sondern als amtlich-juristische Methodik. Wertvoll als rechtlich unangreifbarer Referenz-Goldstandard, gegen den KI-Tools sich messen lassen müssen.
    caveats:
      - Kein KI-/Automatisierungsanteil — manueller Prüfprozess
      - Schwerpunkt Geschlecht (Gleichbehandlung der Geschlechter), nicht §1-Vollkatalog
      - Eher als Referenzmethodik denn als produktives Recruiter-Tool nutzbar
    sources:
      - id: gb-check-de
start_here: "Pilotstart mit M365 Copilot: ein versioniertes Prompt-Template, das AGG §1-Merkmale explizit adressiert, auf einer Stichprobe bestehender Stellenausschreibungen erproben und Fairlanguage parallel für gendergerechte Sprache hinzuziehen. Beide Outputs durch HR mit Rechts-Awareness gegenprüfen — der Pilot validiert Treffsicherheit und zeigt, wo manuelle Nachkontrolle zwingend bleibt."
caveats: Generische LLMs erkennen subtile deutsche Diskriminierungsmarker (z. B. 'jung & dynamisch', implizite Altershinweise) nicht zuverlässig — kein Tool ersetzt die juristische Endkontrolle. Das Haftungsrisiko nach AGG verbleibt beim Arbeitgeber; Prompt-Templates müssen versioniert und der KI-Einsatz dokumentiert sein.
sources: []
---
