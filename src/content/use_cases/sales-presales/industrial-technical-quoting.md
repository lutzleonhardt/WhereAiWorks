---
stage: sales-presales
order: 20
roles:
  - sales-presales
title: Technisches Angebotswesen Maschinen-/Anlagenbau
goal_label: Technische Angebote mit Konfigurator, Stückliste und Incoterms im Industrie-B2B erzeugen
suitability: conditional
rationale: Tacton CPQ und encoway setzen einen Constraint-Solver ein, der technisch ungültige Konfigurationen strukturell ausschließt und GenAI nur an unkritischen Stellen zulässt – das macht KI-gestütztes Quoting im DACH-Maschinenbau erstmals praktikabel. Der ETO-/CTO-Workflow dieser Branche wird von generischen SaaS-CPQ-Plattformen nicht abgedeckt; spezialisierte DACH-Tools mit Industrie-Track-Record schließen diese Lücke.
tools:
  - id: tacton-com-buyer-engagement-platform-artificial-intelligence
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Schwedischer Marktführer mit Constraint-Solver (verhindert technisch ungültige Konfigurationen, niedriges Halluzinationsrisiko) und GenAI nur an unkritischen Stellen (Modellbau, RFQ-Extraktion). Eigenes 2026er Whitepaper zu AI-Datensicherheit zeigt, dass der Vendor die Audit-/EU-AI-Act-Diskussion aktiv führt. DACH-Implementierungspartner Lino und ROTRING DATA sind Standard.
    caveats:
      - Implementierung dauert Monate bis Jahre, IT-lastiges Setup
      - Daten-Hosting-Region nicht prominent als DE/EU-Default beworben – im RfP klären
      - LLM-Swap im AI Modeling Assistant nicht öffentlich dokumentiert (Lock-in-Risiko)
      - Audit-Logging der konkreten AI-Vorschläge implizit, nicht explizit dokumentiert
      - Schwedischer Vendor – Daten-Hosting/Region-Optionen vor Vertragsschluss explizit prüfen (kein DE-Region als Default beworben)
      - AI-Layer ist zwar Generative AI für Modelling, aber LLM-Auswahl/Swap ist nicht öffentlich dokumentiert – Lock-in-Risiko bei Modell-Roadmap
      - EU AI Act Art. 14 (Human Oversight) erfordert nicht nur Review, sondern auch Logging der Override-Entscheidungen – Tacton-Doku adressiert das implizit, nicht explizit
      - Implementierung dauert Monate bis Jahre (laut Tacton-Eigenangaben)
      - UI laut Gartner Peer Insights komplexer als Wettbewerber, erfordert IT-Team
      - Preisniveau Enterprise – nicht für KMU mit kleinem Vertrieb
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Konstraint-Solver verhindert technisch ungültige Angebote
        - Schnelle, wiederholbare Quotes bei hoher Variantenvielfalt
      complaints:
        - Lange Time-to-Value, IT-lastige Einrichtung
        - UI weniger intuitiv als Konkurrenten
    sources:
      - id: tacton-com-buyer-engagement-platform-artificial-intelligence
      - id: tacton-com-cpq-blog-respond-to-rfq-faster
      - id: gartner-com-reviews-product-tacton-cpq
      - id: rotring-data-ch-loesungen-tacton-tacton-cpq
      - id: tacton-com-cpq-blog-ai-data-security-questions
  - id: cas-merlin-de-branchen-maschinen-anlagenbau
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Karlsruher Mittelstands-CPQ mit explizitem Fokus auf CTO/CTO+/ETO-Sondermaschinenbau und AIA-KI-Modulen. DE-Sitz reduziert Schrems-II-/DSGVO-Risiko; passt strukturell zu DACH-Hidden-Champions, die kein US-SaaS wollen. Tiefe der KI bleibt aber unklar.
    caveats:
      - AIA-Module schwach dokumentiert – Symbolic AI vs. ML-Mix nicht transparent
      - Audit-Trail der KI-Vorschläge nicht öffentlich dokumentiert (BGB §631-Risiko)
      - Hosting-Region/Modell-Stack für AIA-LLM-Calls nicht spezifiziert
      - Kein öffentlich dokumentierter Audit-Trail der KI-Empfehlungen – kritisch wegen BGB §631 und EU AI Act Art. 14
      - Vendor sitzt in DE, was DSGVO/Schrems-II-Risiko reduziert, aber Hosting-Region für AIA-LLM-Calls nicht spezifiziert
      - AIA-Beschreibungen bleiben oberflächlich; Tiefe der ML-Modelle vs. regelbasierter Logik unklar
      - Vergleichsweise wenig öffentliche Benchmarks oder Fallstudien außerhalb Vendor-Site
      - Audit-Logging der AI-Vorschläge nicht beworben – relevant wegen BGB §631-Risiko
    sources:
      - id: cas-merlin-de-branchen-maschinen-anlagenbau
      - id: cas-de-branchen-cpq-im-maschinen-und-anlagenbau
  - id: combeenation-com-cpq-im-maschinenbau
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Österreichischer DACH-Vendor mit Sondermaschinenbau-Branding, regelbasierter Konfiguration und 3D-Visualisierung. Geeignet für Mittelständler mit überschaubarem Sales-Team; AI-Tiefe ist gering, was im Werkvertragskontext aber kein Nachteil sein muss.
    caveats:
      - Vendor-Größe und Skalierungsfähigkeit auf Konzernlandschaften limitiert
      - AI primär regelbasiert – wer GenAI-Drafting erwartet, sucht woanders
      - ISO 27001/SOC2-Status nicht prominent belegt
      - Vendor-Größe und Roadmap-Risiko sollten in Due-Diligence explizit adressiert werden
      - ISO 27001/SOC2-Status auf der Vendor-Site nicht prominent – muss im RfP belegt werden
      - Wenig sichtbare GenAI-/ML-Tiefe – 'AI' überwiegend regelbasiert
      - Kleinerer Vendor – Skalierung auf große Konzernlandschaften (SAP S/4) weniger erprobt
      - Internationale Referenzen schwächer als Tacton/encoway
    sources:
      - id: combeenation-com-cpq-im-maschinenbau
  - id: orisa-de-en-ai-cpq
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Thüringer Hidden Champion, der KI explizit als regelbasiertes Expertensystem positioniert – Halluzinationsrisiko strukturell sehr niedrig, weil keine GenAI-Outputs ins Kundenangebot fließen. Passt für DACH-Mittelständler, die im Werkvertragsrecht keine Wahrscheinlichkeitsmodelle akzeptieren wollen.
    caveats:
      - Kleiner Vendor – Roadmap-/Skalierungsrisiko
      - Symbolic AI = hoher Pflegeaufwand der Wissensbasis (anderer Risikotyp, aber real)
      - ISO 27001/SOC2 nicht öffentlich belegt
      - Wenig unabhängige Praktiker-Reviews
      - Symbolic-AI hat keine Halluzinationen, aber Pflegeaufwand der Wissensbasis ist hoch – das ist ein anderer Risikotyp
      - DE-Sitz, DSGVO unkritisch – aber ISO 27001/SOC2 nicht öffentlich belegt
      - KI hier überwiegend Symbolic-AI/Rule-Solver, weniger GenAI-Output
      - Kleiner Vendor – Risiko bei Roadmap und globalem Support
      - Wenig öffentliche Praktiker-Reviews außerhalb Vendor-Seite
    sources:
      - id: orisa-de-en-ai-cpq
  - id: spadoom-com-de-loesungen-configure-price-quote-cpq
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Standardwahl bei DACH-Industriekunden mit S/4HANA-Backbone; Variant Configuration bringt natives Audit-Logging mit, das werkvertragliche Anforderungen gut abdeckt. AI-Layer (Joule) ist deutlich jünger als bei Tacton/Configit – AI-getriebenes Quoting derzeit nur Add-on, nicht Kern.
    caveats:
      - AI-Features hinken Spezialisten hinterher; Joule-Reife für DE-Quote-Drafting unklar
      - Hohe TCO und Implementierungskomplexität
      - Roadmap nach Sales-Cloud-Reorganisationen unsicher
      - SAP CPQ Roadmap nach Übernahme/Reorganisation der Sales-Cloud unsicher – Lock-in in Walldorf, aber AI-Innovation langsamer
      - Variant Configuration via SAP S/4HANA hat starkes natives Audit-Logging – ein Vorteil gegen werkvertragliches Risiko
      - Joule-AI-Reife für deutschsprachige Quote-Drafting-Szenarien noch zu prüfen
      - AI-Features sind in SAP CPQ deutlich jünger und schwächer als bei Tacton/Configit
      - Komplexitätsstufe und TCO sehr hoch – nur sinnvoll mit ohnehin SAP-zentrierter IT
      - "Risiko: unklare Roadmap nach SAP-Akquisitionen/-Reorganisationen im CRM-Stack"
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Native S/4HANA-Integration, sauberer Order-Handover
        - Etablierte Variant-Konfiguration in SAP-Welt
      complaints:
        - AI-Features hinken Spezialisten hinterher
        - Hohe Implementierungs- und Betriebskomplexität
    sources:
      - id: spadoom-com-de-loesungen-configure-price-quote-cpq
      - id: guideflow-com-blog-best-cpq-software
      - id: reddit-com-r-oraclecpq
  - id: hivecpq-com-de-branchen-cpq-fur-maschinen
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Belgischer EU-Vendor mit ISO-27001-Zertifizierung und expliziter Maschinen-/Anlagenbau-Vertikale; Engineer-to-Order-zu-Configure-to-Order-Pitch trifft den Hidden-Champion-Schmerzpunkt. Likely missed by market scan because Hive CPQ wird eher als belgischer Mid-Market-Player wahrgenommen und nicht als 'AI-Sales' positioniert, obwohl die ISO-27001-Story enterprise-relevant ist.
    caveats:
      - AI-Layer schwach beworben – Vorteil ist primär CPQ-Compliance, nicht GenAI
      - Belgischer Vendor – DACH-Lokalisierung/Support muss validiert werden
      - Variant-Konfigurations-Tiefe für komplexen Maschinenbau gegen Tacton/Configit prüfen
    sources:
      - id: hivecpq-com
  - id: klarocpq-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Finnischer Industrie-CPQ-Spezialist mit Großkunden wie Metso Outotec; modulare Implementierung passt zum DACH-Mittelstand. Likely missed by market scan because KlaroCPQ ist Nordic-fokussiert, kein DACH-Marketing und nicht als 'AI-Tool' positioniert – aber als EU-Vendor mit Industrie-Track-Record relevant für Schrems-II-sensitive Käufer.
    caveats:
      - AI-Substanz heute schwach beworben – primär klassischer CPQ
      - DACH-Lokalisierung und deutscher Support müssen validiert werden
      - ISO 27001/SOC2-Status nicht öffentlich belegt
    sources:
      - id: klarocpq-com
  - id: rattleapp-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Deutscher Vendor mit DE-Hosting, GDPR-Compliance, Multi-Tenant-/White-Label-Architektur, BOM-Explosion und KI-gestützter Compliance-Prüfung von Texten gegen EN/ISO. Likely missed by market scan because rattle ist relativ neu, deutschsprachig fokussiert und positioniert sich als 'Konfigurator-Plattform' statt als 'AI-Sales-Tool'.
    caveats:
      - Neuer Vendor (Gründung jung) – Roadmap-/Skalierungsrisiko
      - AI-Compliance-Check klingt vielversprechend, aber Reife der ML-Modelle nicht unabhängig validiert
      - ISO 27001 bei Vendor-Gründungsphase typischerweise noch nicht zertifiziert – im RfP belegen lassen
      - Praktiker-Belege außerhalb der Vendor-Site fehlen
    sources:
      - id: rattleapp-de
  - id: camos-de-de-camos-cpq-ki
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Stuttgarter DACH-Spezialist für Investitionsgüter mit Referenzen wie ABB, Schindler, Siemens; eigenes KI-Modul mischt Symbolic AI (regelbasiert, niedriges Risiko) und GenAI (Angebotscontent, höheres Risiko). Costing-Modul deckt ETO-Anlagenbau inkl. Engineering-/AV-Kosten ab, was im DACH-Maschinenbau zentral ist. Unabhängige Peer-Review-Daten (21 Bewertungen, Info-Tech/SoftwareReviews; 8 DACH-Bewertungen, OMR Reviews) bestätigen Praxis-Tauglichkeit mit 86% positivem Sentiment und 96% Plan-to-Renew.
    caveats:
      - Kein öffentliches ISO 27001/SOC2-Zertifikat sichtbar – im RfP belegen lassen
      - AI-Funktionsumfang Mix aus Rules und GenAI – Kunde muss differenzieren, welches Modul wofür zuständig ist
      - Kein granular dokumentiertes Audit-Logging der KI-Empfehlungen – relevant wegen BGB §631
      - EU AI Act Trust-Center oder Stellungnahme nicht öffentlich auffindbar
      - AI-Module mischen Symbolic-AI (regelbasierte Konfiguration, niedriges Halluzinationsrisiko) und GenAI (Angebotscontent, hohes Risiko) – Kunde muss differenzieren, welches Modul wofür zuständig ist
      - Kein öffentlich dokumentiertes ISO 27001-/SOC2-Zertifikat auf der Vendor-Seite gefunden – sollte im RfP belegt werden
      - EU AI Act-Stellungnahme/Trust Center fehlt sichtbar – relevant für werkvertragliche B2B-Quotes
      - Eigenwerbung dominiert; unabhängige Praktiker-Reviews schwer auffindbar
      - AI-Funktionen relativ neu und stark mit Vendor-Vokabular beschrieben (KI = teils Symbolic AI/Rules, teils GenAI)
      - Kein durchgängig dokumentiertes Audit-Logging der AI-Empfehlungen für werkvertragliche Anforderungen
      - Gartner Peer Insights zeigt nur 3/5 Sterne (EMEA Manufacturing-Reviewer) – Implementierungskomplexität als Hauptkritik
    sources:
      - id: camos-de-de-camos-cpq-ki
      - id: camos-de-de-cpq-loesung-camos-cpq-configure-produktkonfiguration-mit-camos-cpq-365
      - id: camos-de-de-info-center-preis-und-kostenkalkulation-im-anlagenbau-mit-cpq
      - id: softwarereviews-com-products-camos-cpq-c-id-267
      - id: omr-com-de-reviews-product-camos-cpq
  - id: configit-com-configit-ace
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Kopenhagen-basierter EU-Vendor (Schrems-II-freundlich) mit Virtual-Tabulation-Technologie für extreme Variantenvielfalt; Ace Prompt nutzt GenAI nur für Modellbau – Ergebnis wird vor Auslieferung vom Konfigurations-Solver validiert. Sauberer Human-in-the-loop-Pfad reduziert Halluzinationsrisiko. Bloor Research (unabhängiger UK-Analyst, Jun 2024) empfiehlt Configit explizit und validiert die Technologiebasis.
    caveats:
      - Engine/Plattform-Charakter – ohne Configit Quote oder Salesforce-CPQ-BYOC keine vollständige Quote-Erfahrung
      - Implementierung nur als Großprojekt mit SI wirtschaftlich
      - DACH-Marketing dünn – Einführung meist via Partner
      - Configit Quote selbst noch jung – Reife für DACH-AGB/Incoterms-Bausteine validieren
      - Configit Quote ist relativ jung – Reife für DACH-Werkvertragsangebote (Incoterms, AGB-Bausteine) muss validiert werden
      - Ace Prompt erzeugt Modelle, die danach human reviewt werden – das ist ein sauberer Human-in-the-loop-Pfad und sollte vom Markt-Scan stärker hervorgehoben werden
      - Eher Plattform/Engine als out-of-the-box Quote-Tool – Vertriebsmitarbeiter sehen Configit Quote, nicht direkt Ace
      - Implementierung meist nur als Großprojekt mit Systemintegrator wirtschaftlich
      - Wenig DACH-spezifisches Marketing; muss meist über Partner eingeführt werden
    sources:
      - id: configit-com-news-configit-announces-the-latest-product-updates
      - id: configit-com-integrations-salesforce-cpq-and-configit-ace
      - id: bloorresearch-com-configit-management-of-variants
  - id: encoway-de-services-betriebsmodelle
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Bremer Lenze-Tochter mit der stärksten Compliance-Story unter den DACH-CPQs: Hosting in Microsoft Azure West Europe, ISO 27001 / SOC2-zertifiziert, Daten-Residency Europa und On-Premises-Option. AI-Erbe ist Symbolic AI (Constraint-Networks) – Halluzinationsrisiko sehr niedrig; GenAI-Erweiterungen laufen kontrolliert über encoway LAB. 25 Jahre DACH-Maschinenbau-Track-Record, 100+ benannte Kunden (KHS Gruppe, Schmalz GmbH, Teckentrup, Vogelsang, Hundegger, Loesche, Bauer Maschinen u.v.a.)."
    caveats:
      - GenAI-Funktionen weiterhin eher in der Lab-/Roadmap-Phase – wer GenAI-Output für Quotes erwartet, muss Roadmap prüfen
      - Audit-Trail der KI-Vorschläge nicht prominent dokumentiert – im RfP gezielt nachfragen
      - Lenze-Backing reduziert Vendor-Risiko, koppelt aber leicht an die Lenze-Konzernstrategie
      - AI Powered Rating in unabhängigen Peer-Reviews nur 2.93/5 – bestätigt, dass der Mehrwert primär im regelbasierten Constraint-CPQ liegt, nicht im GenAI-Layer
      - Primäre Review-Plattformen (OMR, TrustRadius) zeigen 0 Bewertungen – Praktiker-Sichtbarkeit im DACH-Markt ausbaufähig
    sources:
      - id: encoway-de-services-betriebsmodelle
      - id: encoway-de-en-news-ai-innovations-at-encoway-lab
      - id: cuspera-com-products-encoway-cpq-x-13324
start_here: Einstiegspunkt ist das KI-Modul des bereits eingesetzten technischen CPQ – bei Tacton oder encoway zunächst für Begleittexte und Optionsempfehlungen, während die technische Spezifikation regelbasiert bleibt. Vor dem Go-live das Audit-Logging der KI-Vorschläge im RfP explizit klären, da dies bei keinem der Tools prominent dokumentiert ist.
caveats: Technische Angebote im Maschinenbau sind quasi-vertraglich; halluzinierte Spezifikationen oder Lieferzeiten begründen direkte Schadensersatzpflichten nach Werkvertragsrecht. Keines der Anchor-Tools dokumentiert das Audit-Logging der KI-Empfehlungen explizit – dieser Punkt muss im RfP zwingend adressiert werden.
sources: []
---
