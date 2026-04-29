---
stage: testing-qa
order: 7
roles:
  - software-engineer
  - qa-engineer
title: Synthetische Testdaten-Generierung
goal_label: Realistische Testdaten ohne Produktivdaten
suitability: good_fit
rationale: MOSTLY AI und GenRocket belegen, dass synthetische Testdaten-Generierung in DACH-regulierten Branchen enterprise-reif verfügbar ist — mit EU-Datenresidenz und klarer DSGVO-Positionierung. DSGVO-Druck in Finanz- und Versicherungssektoren macht die Ablösung von Produktivdaten-Kopien in Test-Umgebungen zum prioritären Handlungsfeld.
tools:
  - id: mostly-ai
    fit: good_fit
    sources:
      - id: mostly-ai
      - id: github-com-mostly-ai-mostlyai
    why_it_fits: "Wiener Pionier für DL-basierte Tabellensynthese mit explizitem DSGVO-Marketing; On-Prem/VPC-Deployment, Open-Source-SDK als Eval-Pfad. Stärkster DACH-Anker im Segment, gelistete Banken/Versicherungs-Referenzen. Einschränkung: Eigentümerwechsel zu BCG 2024 — Standalone-Roadmap beobachten."
    enterprise_readiness: enterprise_ready
  - id: sdv-dev
    fit: good_fit
    sources:
      - id: sdv-dev
      - id: github-com-sdv-dev-sdv
    why_it_fits: "OSS-Standard für Tabellen-/Multi-Table-/Zeitreihen-Synthese; On-Prem ohne Datenabfluss — DSGVO-Idealfall für Eval-Phase. Kommerzielle SDV-Enterprise-Variante über DataCebo verfügbar. Einschränkung: BSL-Lizenz (nicht OSI-konform) — OSPO-Review notwendig."
    enterprise_readiness: team_ready
  - id: broadcom-com-products-software-app-dev-test-data-manager
    fit: conditional
    sources:
      - id: broadcom-com-products-software-app-dev-test-data-manager
    why_it_fits: "Klassischer Enterprise-TDM mit Mainframe/DB2-Integration — in DACH-Banken/Versicherungen weiterhin relevant, wo Test-Daten aus Legacy-Systemen kommen müssen. Einschränkung: Schwergewichtig, klassisch."
    enterprise_readiness: enterprise_ready
  - id: datprof-com
    fit: conditional
    sources:
      - id: datprof-com
    why_it_fits: "EU-TDM-Spezialist (NL) mit Maskierung, Subsetting, Generierung. Datenresidenz und DSGVO einfacher als bei US-Tools; Gartner-erwähnt. Einschränkung: AI-/DL-Synthese nicht Kernstärke — Maskierung/Subsetting dominiert."
    enterprise_readiness: enterprise_ready
  - id: delphix-com
    fit: conditional
    sources:
      - id: delphix-com
    why_it_fits: "Data-Virtualization plus Masking als Kernstärke; Synthese als Add-on. In DACH-Großunternehmen mit Oracle/SAP-Stacks Procurement-Realität. Einschränkung: Synthese nicht Kern — Maskierung/Virtualisierung dominieren."
    enterprise_readiness: enterprise_ready
  - id: informatica-com-products-data-security-test-data-management-html
    fit: conditional
    sources:
      - id: informatica-com-products-data-security-test-data-management-html
    why_it_fits: "TDM-Modul in einem in DACH-Enterprises ohnehin oft installierten Data-Stack — senkt Procurement-Hürde. Maskierung, Subsetting, Generierung. Einschränkung: AI-Anteil sehr begrenzt — Marketing-Etiketten kritisch prüfen."
    enterprise_readiness: enterprise_ready
  - id: snowfakery-readthedocs-io
    fit: conditional
    sources:
      - id: snowfakery-readthedocs-io
    why_it_fits: "YAML-DSL über Faker mit Beziehungsmodell; ideal für schema-basierte Synthese ohne Produktivdaten — DSGVO-unkritisch. Einschränkung: Salesforce-zentrische Beispiele."
    enterprise_readiness: team_ready
  - id: synthesized-io
    fit: conditional
    sources:
      - id: synthesized-io
    why_it_fits: "TDK-Plattform für strukturierte DBs mit referentieller Integrität, Banking/Insurance-Fokus. Nützlich, wenn DB-DBA-Workflows im Vordergrund stehen. Einschränkung: UK-Datenresidenz: Angemessenheitsbeschluss politisch volatil — regelmäßig prüfen."
    enterprise_readiness: team_ready
  - id: ydata-ai
    fit: conditional
    sources:
      - id: ydata-ai
      - id: github-com-ydataai-ydata-synthetic
    why_it_fits: "Portugiesischer EU-Vendor mit OSS-Bibliothek (ydata-synthetic, GAN-basiert) und kommerziellem Fabric. EU-Datenresidenz und DSGVO-Vorteil. Einschränkung: ydata-synthetic-OSS seit 2024 reduziert gepflegt — Fokus auf Fabric."
    enterprise_readiness: team_ready
  - id: ibm-com-products-infosphere-optim-test-data-management
    fit: conditional
    sources:
      - id: ibm-com-products-infosphere-optim-test-data-management
    why_it_fits: "Klassische IBM-TDM-Suite mit Subsetting, Maskierung und Privatization für Mainframe/DB2/Oracle/SAP. Likely missed by market scan because tool is positioned as a suite feature in IBM-Stacks und nicht primär als 'AI-Synthese' vermarktet — in DACH-Banken/Versicherungen mit IBM-Mainframes Procurement-Realität. Einschränkung: Praktisch keine generative AI-Synthese — Privatization/Maskierung dominieren."
    enterprise_readiness: enterprise_ready
  - id: tricentis-com-products-test-data-management
    fit: conditional
    sources:
      - id: tricentis-com-products-test-data-management
    why_it_fits: "Wiener Test-Plattform-Vendor mit TDM-Modul, das in den Tosca-Stack integriert ist. Likely missed by market scan because tool is positioned as a suite feature im Tricentis-Tosca-Ökosystem statt als eigenständiges 'AI-Synthese'-Produkt — starker DACH-Anker mit Banken-/Versicherungs-Referenzen. Einschränkung: Wirklich attraktiv vor allem im Tosca-Kontext — standalone weniger relevant."
    enterprise_readiness: enterprise_ready
  - id: genrocket-com
    fit: good_fit
    sources:
      - id: genrocket-com
      - id: gartner-com-reviews-market-test-data-management
      - id: g2-com-products-genrocket-reviews
    why_it_fits: "Schema-first Synthese ohne Produktivdaten — ideal für DSGVO-streng regulierte DACH-Branchen, weil Datenschutz-Diskussion praktisch entfällt. CI/CD-Integrationen, JUnit/TestNG-Plugins; 50+ Forbes-Global-2000-Kunden laut Vendor. Gartner Peer Insights TDM-Marktübersicht gelistet; G2 4,6/5 (11 Bewertungen). Einschränkung: Kein 'AI' im strengen Sinn — regel-/schemabasiert; Käufer mit GenAI-Erwartung enttäuschen."
    enterprise_readiness: enterprise_ready
  - id: k2view-com-solutions-test-data-management
    fit: good_fit
    sources:
      - id: k2view-com-solutions-test-data-management
      - id: gartner-com-reviews-market-test-data-management-vendor-k2view
      - id: gartner-com-en-documents-data-integration-tools-magic-quadrant
    why_it_fits: "Entity-basierte TDM-Plattform mit Maskierung, Subsetting und Synthese; Gartner Visionary 3 Jahre in Folge (MQ Data Integration Tools 2023–2025); Gartner Peer Insights 4,8/5. Passt zu DACH-Großunternehmen mit Multi-System-Landschaft (CRM+ERP+Billing) und referentiellen Anforderungen. Einschränkung: Schwergewichtige Plattform — Setup/Lizenzen hoch; US-HQ (Israel R&D) — Datenresidenz-Anforderungen prüfen."
    enterprise_readiness: enterprise_ready
start_here: Piloteinstieg mit MOSTLY AI (Open-Source-SDK, On-Prem-Deployment) oder GenRocket (schemabasiert, kein Produktivdaten-Zugang nötig) — eine einzelne Tabelle synthesieren und gegen einen bestehenden Integrationstest-Lauf validieren. GenRocket ist die risikoärmere Wahl ohne Produktivdaten-Zugang; MOSTLY AI liefert DL-basierte Verteilungstreue, wenn statistische Ähnlichkeit gefordert ist.
caveats: Differential-Privacy-Garantien werden marketing-seitig oft überdehnt; bei Re-Identifikations-Risiko greift weiterhin DSGVO Art. 4 Abs. 5, sodass aus Produktivdaten abgeleitete Synthese eine Datenschutzbeauftragten-Abstimmung erfordert. Bei K2View Datenresidenz-Anforderungen gegen das US-HQ abklären; MOSTLY AI's Produkt-Roadmap nach dem BCG-Eigentümerwechsel 2024 aktiv beobachten.
sources: []
---
