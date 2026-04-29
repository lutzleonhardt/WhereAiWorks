---
stage: hr-onboarding
order: 17
roles:
  - hr-recruiting
title: Arbeitszeugnis-Generierung (DACH)
goal_label: Erst-Versionen von qualifizierten Arbeitszeugnissen erzeugen
suitability: good_fit
rationale: Qualifizierte Arbeitszeugnisse nach §109 GewO erfordern rechtskonforme Notenformeln und wohlwollende Formulierungen, die DACH-spezialisierte Werkzeuge zuverlässiger abdecken als ein generisches LLM. Haufe Zeugnis Manager und Flowmium sind enterprise-ready DACH-Spezialanwendungen — bewusst regelbasiert statt generativ, was Art.-9-DSGVO- und §87-BetrVG-Hürden spürbar senkt.
tools:
  - id: centric-eu-de-portfolio-dokumenten-intensive-prozesse-zeugnis-generator
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: 100% SAP-natives Add-on für SuccessFactors HCM und SAP HCM (SAP Fiori, BTP). Keine Datenduplikation, gleicher AVV wie SAP, gleiche Betriebsrats-Argumentation. Bewusst regelbasiert ohne LLM — vermeidet AI-Act-Hochrisiko-Pfad bei reiner Textgenerierung.
    caveats:
      - Außerhalb von SAP-Landschaften irrelevant — kein Cross-HRIS-Kandidat
      - Centric ist NL-Konzern (Gouda) — DACH-Repräsentanz prüfen, deutscher Support nicht selbstverständlich
      - Sinnvoll nur bei vorhandener SAP-HCM/SuccessFactors-Landschaft — Vendor-Lock-in
      - Pricing nicht transparent, klassische Enterprise-Sales-Motion
      - Regelbasiert/Bausteine — keine generative LLM-Komponente beworben
    sources:
      - id: centric-eu-de-portfolio-dokumenten-intensive-prozesse-zeugnis-generator
      - id: omr-com-de-reviews-product-personalwerk-zeugnisgenerator-alternatives
  - id: flowmium-com-zeugnisgenerator
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Stärkste Compliance-Story der Spezialisten: ISO 27001 für Anbieter UND Rechenzentrum nach BSI-Grundschutz, eIDAS-FES integriert, Aufbewahrungs-/Löschautomatik adressiert §35 BDSG direkt. Daten ausschließlich in Deutschland. HRIS-Konnektoren zu Workday, SAP, Personio, Factorial."
    caveats:
      - KI-Komponente schwach beworben — Kerntechnik bleibt Bausteinkomposition, kein generatives LLM
      - Praktiker-Volumen niedrig — Referenzen über OMR außerhalb Mittelstand dünn
      - Setzt vollständige HR-Endabnahme voraus
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Datenschutz 'made in Germany' wird im Mittelstand geschätzt
        - Workflow vom Antrag bis zur digitalen Signatur durchgängig
      complaints:
        - Sich wiederholende Satzstrukturen — gleichlautende Zeugnisse möglich
        - Bearbeitungsmöglichkeiten nach Fertigstellung eingeschränkt
        - Gelegentliche Geschwindigkeitsprobleme beim Generieren
    sources:
      - id: flowmium-com-zeugnisgenerator
      - id: omr-com-de-reviews-product-personalwerk-zeugnisgenerator-alternatives
  - id: rexx-systems-com-software-hr
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Echter Konzern-Footprint im DACH-Raum mit On-Prem-Option — passt zu §203 StGB und Konzern-IT-Standards. Workflow-Engine deckt Zeugnis-Erstellung explizit ab inkl. Selfservice-Antrag, Notensystem, automatischer Stammdatenübernahme. KI-Assistent Rai bleibt aber im Recruiting/Analytics — Zeugnis-Mehrwert begrenzt.
    caveats:
      - Sinnvoll nur, wenn rexx ohnehin als HRIS gesetzt ist — Lock-in
      - Customizing-Aufwand bei Konzerneinführung kann mehrere Personentage pro Standort kosten
      - Rai-KI deckt primär Recruiting/Analytics ab; Zeugnis-Generierung ist Workflow- und Bausteinlogik, nicht generative KI
    sources:
      - id: nxiglobal-com-de-human-resources-arbeitszeugnis-und-vertrag-rexx-systems
      - id: rexx-systems-com-software-hr
  - id: aleph-alpha-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Souveräner Hosting- und Modell-Layer für Konzerne und Behörden mit echter Souveränitätsanforderung (Bundesagentur für Arbeit, F13 Baden-Württemberg, Schwarz-Gruppe via STACKIT). On-Prem oder STACKIT/HPE-Hosting, BSI-Partnerschaft. Sinnvoll als Plattform für ein eigenes Zeugnis-Frontend, nicht als End-to-End-Lösung.
    caveats:
      - "Cohere-Übernahme 4/2026: IP bleibt in Kanada — untergräbt Souveränitäts-Narrativ teilweise; Vertragsklauseln zur DE-Souveränität nachverhandeln"
      - Kein vorgefertigter Zeugnis-Skill — Eigenentwicklung auf Plattform nötig
      - Modellperformance auf deutschsprachiger Zeugnissprache nicht gegen GPT-4-Klasse benchmarked
      - KMU-Overkill — sinnvoll nur ab Konzern-/Public-Sector-Größe
    sources:
      - id: betakit-com-cohere-to-acquire-germanys-aleph-alpha-in-sovereign-ai-play
  - id: hrworks-de-produkt-arbeitszeugnis-software
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Etablierter DACH-Mittelstandsanbieter (375.000 Nutzer, 25+ Jahre) mit deterministischem Notenformel-Generator (Schulnote → Zeugnissprache, bis zu 5 Varianten pro Note). Workflow-Anbindung der Vorgesetzten, Employee Self-Service. Kein generatives LLM — passt zu §109 GewO und reduziert BAG-Klagerisiko. 215 unabhängige OMR-Reviews bestätigen den breiten Mittelstand-Footprint.
    caveats:
      - Reine Bausteinlogik — Individualisierung begrenzt, gleichlautende Zeugnisse möglich
      - Funktionsumfang an HRworks-Gesamt-Suite gebunden, kein Standalone — Lock-in
      - Konzern-Skalierung und Mandantenfähigkeit jenseits KMU wenig dokumentiert
      - Keine eigene KI-Komponente — Alleinstellung gegenüber verlingo/Skriba gering
      - OMR-Reviews adressieren die gesamte HR-Suite, nicht spezifisch das Zeugnismodul
    sources:
      - id: hrworks-de-produkt-arbeitszeugnis-software
      - id: omr-com-de-reviews-product-hr-works-all
  - id: arbeitszeugnisgenerator-haufe-de
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Marktstandard im DACH mit 12.000+ anwaltlich geprüften Bausteinen. 233 unabhängige OMR-Reviews (4.4/5) und Connect.de-Testbericht mit 93/100 Punkten ('sehr gut') bestätigen Produktqualität und Marktposition. Integrierter Workflow Stammdaten→Tätigkeit→Bewertung→Zeugnis. Bewusst regelbasiert statt Generative AI — senkt Art-9-DSGVO-Risiko und §87-BetrVG-Hürden. SSO, QES, REST-Schnittstelle, Daten in DE, englische Zeugnisse möglich.
    caveats:
      - Werbeversprechen '100% rechtssicher' ist Marketing — HR-Endabnahme bleibt Pflicht
      - AVV/EU-Hosting im Marketing wenig prominent — bei Konzerneinkauf separat einfordern
      - SSO-Anbindung an Konzern-IAM und Premium-Tier-Konditionen klären
      - Textbausteine laut OMR-Reviews teils repetitiv, branchenspezifische Vorlagen begrenzt
    sources:
      - id: arbeitszeugnisgenerator-haufe-de
      - id: omr-com-de-reviews-product-haufe-zeugnismanager-all
      - id: connect-de-testbericht-haufe-zeugnis-mananger-test-arbeitszeugnis-generator-3205247-html
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Einfache, intuitive Bedienung — 80% der Kunden würden wiederkaufen
        - Zeitsparende Automatisierung mit Führungskraft-Erinnerungen
        - Rechtssiche Arbeitszeugnisse dank 12.000+ geprüfter Textbausteine
      complaints:
        - Formatierungsoptionen begrenzt — Anpassungen eingeschränkt
        - Textbausteine wirken repetitiv — individuelle Varianten fehlen
        - Gelegentliche technische Probleme in der Praxis berichtet
  - id: zeugnissoftware-rudy-de
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "PSRM/RUDY hat 25+ Jahre Branchenerfahrung und 650.000+ erstellte Zeugnisse (Eigenaussage). Bewusst OHNE KI — geeignet für Unternehmen, die generative KI aus Compliance- oder Betriebsratsgründen ausschließen. Hosting Hetzner DE, 2FA, gendergerechte Bausteine. Differenziertes Hybridmodell: reiner Generator oder Generator + manuelle Redaktion durch festangestellte PSRM-Experten in Oberursel (kein Outsourcing an Freelancer)."
    caveats:
      - 0 Bewertungen auf OMR, Capterra oder vergleichbaren unabhängigen Plattformen — alle Markt- und Konzernreferenzen sind ausschließlich Eigenaussage
      - DAX-Konzern-Referenzen nicht unabhängig verifiziert
      - Bewusst OHNE Generative AI — ungeeignet, wenn KI-gestützte Texterstellung Anforderung ist
      - Pricing pro Zeugnis (ab 5 €) bei sehr hohem Volumen ggf. teurer als Subscription-Modelle
      - Lizenzlaufzeit 12 Monate, 3 Monate Kündigungsfrist
    sources:
      - id: zeugnissoftware-rudy-de-arbeitszeugnissoftware-rudy
      - id: ps-rm-de-arbeitszeugnis-software
  - id: skriba-ch
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "KI-natives Zeugnistool nach OR Art. 330a mit Named-Customer-Referenzen auf Vendor-Site (Gilgen Door Systems, Schulthess Produktion AG, Schulverlag Plus, Gi Group, BFU). Einziger Anbieter, der die viersprachige Schweiz (DE/EN/FR/IT) vollständig abdeckt. Eigene KI generiert personalisierte Einleitungen (nicht Baukasten), eIDAS-Signatur, kollaborativer und konfigurierbarer Workflow. Bedingt: relevant primär für CH-Rechtsraum (OR Art. 330a) oder DACH-Konzerne mit CH-Niederlassung."
    caveats:
      - CH-Recht-Fokus (OR Art. 330a) — für DE/AT-Konzerne mit reinem §109 GewO-Bedarf nicht geeignet
      - Keine Reviews auf unabhängigen Plattformen (OMR, Capterra etc.) auffindbar — Marktpräsenz ausschließlich durch Vendor-Referenzseite belegt
      - Kleines Team (4 Personen, +66% YoY) — Vendor-Risiko für Mehrjahresverträge
      - ISO-Zertifizierungen, AVV-Standard und LLM-Anbieter im öffentlichen Marketing nicht prominent dokumentiert — vor Konzerneinkauf prüfen
      - Kein offensichtlicher Konnektor zu DACH-HRIS wie Personio/SAP — Stammdaten-Übernahme klären
    sources:
      - id: skriba-ch
      - id: skriba-ch-referenzen
  - id: verlingo-zeugnisgenerator-de
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: ISO-27001-RZ in Deutschland, AES-256, AVV-Standard, SSO/2FA, eIDAS-Signatur, BITV2.0-Barrierefreiheit. 20 unabhängige OMR-Reviews (4.6/5) bestätigen intuitive Bedienung, schnelle Implementierung und exzellenten Support. Konnektoren zu Personio, SAP SuccessFactors, Workday, HiBob, Kenjo, UKG, Factorial, d.velop. Englische Oberfläche ermöglicht vollständige Integration internationaler Teams ohne Sprachbarriere. KI-Komponente optional und auf Tätigkeitsvorschläge begrenzt — gute Compliance-Balance für Art-9-sensible Daten.
    caveats:
      - 5-Personen-Vendor — Ausstiegsstrategie für Konzernverträge planen
      - Modell-Anbieter und Sub-Auftragsverarbeiter der KI-Komponente nicht öffentlich offengelegt
      - Berechtigungsmanagement für komplexe Konzernstrukturen laut OMR-Reviews limitiert — Verbesserungen laut Anbieter in Arbeit
      - Textbausteine laut OMR teils veraltet, genderneutrale Optionen begrenzt
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Intuitive Oberfläche — Führungskräfte starten ohne Schulung produktiv
        - Englischsprachige Kollegen voll in den Prozess integrierbar
        - Sehr reaktionsschneller und lösungsorientierter Support
      criticism:
        - Textbausteine teils veraltet, mehr genderneutrale Optionen gewünscht
        - Komplexe Organisationen stoßen an Grenzen im Berechtigungsmanagement
    sources:
      - id: verlingo-zeugnisgenerator-de
      - id: omr-com-de-reviews-product-verlingo-zeugnisgenerator
start_here: "Ohne bestehende HRIS-Bindung bietet der Haufe Zeugnis Manager den schnellsten Einstieg: geringer Einrichtungsaufwand, über 12.000 anwaltlich geprüfte Bausteine und ein durchgängiger Workflow von Stammdaten bis zur digitalen Signatur. SAP-SuccessFactors-Landschaften steigen mit Centric Reference Letter ein, da kein Datenduplikat entsteht und der bestehende SAP-AVV gilt."
caveats: Eine fehlerhafte Notenformel kann eine Klage auf Zeugnisberichtigung begründen — HR-Endabnahme bleibt in jedem Fall Pflicht, auch bei ausgewiesenen Spezialanwendungen. Personenbezogene Leistungs- und Verhaltensdaten fallen unter Art. 9 DSGVO; nur Anbieter mit nachgewiesenem EU-Hosting und abgeschlossenem AVV kommen in die engere Wahl.
sources: []
---
