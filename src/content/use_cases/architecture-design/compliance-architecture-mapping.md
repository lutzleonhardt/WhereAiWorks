---
stage: architecture-design
order: 13
roles:
  - software-architect
title: Compliance-Architektur-Mapping (EU AI Act / DORA / ISO 42001)
goal_label: KI-System-Architektur auf regulatorische Pflichten abbilden
suitability: conditional
rationale: Das Mapping von KI-Systemarchitektur auf regulatorische Pflichten ist ein Architektur-Artefakt — Inventory, Datenflüsse und Controls — und wird in DACH-Banken und Versicherern zunehmend als wiederholt ausführbarer Prozess etabliert. Spezialisierte Plattformen wie Credo AI und LeanIX liefern heute Use-Case-Registries und Compliance-Policy-Packs, die diesen Prozess werkzeuggestützt verankern.
tools:
  - id: anthropic-claude-claude-enterprise-claude-on-aws-bedrock
    fit: conditional
    sources:
      - id: claude-anthropic-via-aws-bedrock-gcp-vertex-amazon
    why_it_fits: "Generisches LLM mit grossem Kontextfenster und gutem Recall fuer regulatorische Texte; als RAG-Backbone fuer eigenen Mapping-Workflow ueber Bedrock EU einsetzbar. Einschränkung: Halluzinierte Artikelnummern/Control-IDs sind direktes Compliance-Risiko. Enterprise-Reifegrad: enterprise_ready."
  - id: azure-openai-service-mit-azure-ai-foundry
    fit: conditional
    sources:
      - id: azure-openai-service-gpt-5-x-mit-eu-data-boundary-microsoft
    why_it_fits: "DACH-de-facto-Standard fuer LLM-Workloads in regulierten Branchen; mit RAG ueber kuratierte Regulator-Texte als Mapping-Backbone praktikabel. Einschränkung: Out-of-the-box keine regulatorische Mapping-Funktion. Enterprise-Reifegrad: enterprise_ready."
  - id: collibra-ai-governance
    fit: conditional
    sources:
      - id: collibra-ai-governance-collibra-collibra-com-us-en-products-ai-governance
    why_it_fits: "AI-Use-Case-Registry plus Lineage auf Datenbasis — adressiert direkt DORA-/AI-Act-Anforderungen an Datenherkunft und -qualitaet. Einschränkung: Voller Wert nur wenn Collibra Catalog bereits etabliert ist. Enterprise-Reifegrad: enterprise_ready."
  - id: dach-beratungs-accelerators-kpmg-ebnerstolz-pexon
    fit: conditional
    sources:
      - id: dach-beratungs-accelerators-kpmg-ebnerstolz-pexon-kpmg
    why_it_fits: "Realer Markt 2026: viele DACH-Mittelstaendler beziehen das Mapping als Beratungsleistung mit Excel/Power-BI/LLM-Pipelines. Praxisnaher Einstieg, der Architektur- und Compliance-Sicht ueber Mandat verbindet. Einschränkung: Service, kein Produkt — Atlas-Eignung diskutabel. Enterprise-Reifegrad: enterprise_ready."
  - id: holistic-ai
    fit: conditional
    sources:
      - id: holistic-ai-holisticai
    why_it_fits: "EU-AI-Act-Tracker und Risk-Klassifizierung mit UK-Sitz; nutzbar als Compliance-Mapping-Grundlage, staerker auf Bias-/Modell-Audit als auf Architektur fokussiert. Einschränkung: UK-Sitz post-Brexit erfordert separate datenschutzrechtliche Bewertung. Enterprise-Reifegrad: team_ready."
  - id: microsoft-purview-ai-hub-azure-ai-foundry-governance
    fit: conditional
    sources:
      - id: microsoft-purview-ai-hub-azure-ai-foundry-governance-microsoft
    why_it_fits: "Natuerliche Wahl in Microsoft-zentrischen DACH-Estates: Purview AI Hub plus Compliance Manager liefert AI-Inventar und EU-AI-Act-Templates. Datenflusssicht ueber Purview Lineage. Einschränkung: Wert nur fuer MS-First-Party-AI; Drittanbieter-AI bleibt ausserhalb. Enterprise-Reifegrad: enterprise_ready."
  - id: mistral-le-chat-enterprise
    fit: conditional
    sources:
      - id: mistral-le-chat-enterprise-mistral-mistral-ai-products-le-chat
    why_it_fits: "EU-Souveraenitaets-Story (FR-Hosting), in DACH-Konzernen aktiv evaluiert; mit RAG ueber AI-Act-/DORA-Texte als Mapping-LLM nutzbar. Einschränkung: Generisches LLM ohne Compliance-Templates. Enterprise-Reifegrad: enterprise_ready."
  - id: onetrust-ai-governance
    fit: conditional
    sources:
      - id: onetrust-ai-governance-onetrust-onetrust-com-products-ai-governance
    why_it_fits: "Erweiterung des in DACH-DPO-Buros breit etablierten OneTrust-Stacks um AI-Use-Case-Inventar und EU-AI-Act-/ISO-42001-Templates. Realistischer Sammelpunkt fuer Mapping-Artefakte. Einschränkung: DPO-/Legal-zentrisch, Architekt:innen liefern nur Inputs in Forms. Enterprise-Reifegrad: enterprise_ready."
  - id: bizzdesign-horizzon
    fit: conditional
    sources:
      - id: bizzdesign-horizzon-bizzdesign
    why_it_fits: "ArchiMate-basiertes EA-Tool, in DACH-Banken/Versicherern etabliert; Risk-/Compliance-Overlays erlauben Mapping von Architektur-Komponenten auf Controls. Likely missed by market scan because Bizzdesign positioniert sich als EA-Suite, nicht als AI-Governance-Tool. Einschränkung: Kein dediziertes AI-Act-Content-Pack — Mapping muss konfiguriert werden. Hinweis: Seit Bizzdesign-Merger 2024 mit MEGA und Alfabet ist Horizzon Teil eines konsolidierten Portfolios. Enterprise-Reifegrad: enterprise_ready."
  - id: metricstream-ai-governance
    fit: conditional
    sources:
      - id: metricstream-ai-governance-metricstream
    why_it_fits: "GRC-Plattform mit AI-Risk-Modul und Content-Packs fuer EU AI Act / DORA; in groesseren DACH-Versicherern und Banken praesent. Likely missed by market scan because MetricStream wird als klassischer GRC-Vendor wahrgenommen, nicht als AI-Tool. Einschränkung: Voller Wert nur mit MetricStream-GRC-Estate. Enterprise-Reifegrad: enterprise_ready."
  - id: servicenow-ai-control-tower-irm
    fit: conditional
    sources:
      - id: servicenow-ai-control-tower-irm-servicenow
    why_it_fits: "Verknuepft existierende ServiceNow-CMDB mit AI-Use-Case-Inventar und Policy-Mapping. Fuer DACH-Konzerne mit ServiceNow-Estate ist das die konkrete Andockstelle, an der Architektur (CMDB-CIs) und Compliance (IRM) zusammenkommen. Einschränkung: Voller Wert nur mit existierender ServiceNow-Plattform. Enterprise-Reifegrad: enterprise_ready."
  - id: credo-ai
    fit: good_fit
    sources:
      - id: credo-ai-credo-credo-ai-product
      - id: credo-ai-forrester-wave
      - id: credo-ai-fronterio-comparison
    why_it_fits: "Pure-Play-AI-Governance mit explizitem EU-AI-Act-/ISO-42001-Mapping, Use-Case-Registry und Policy Packs — direkt nutzbar als Architektur-Mapping-Backbone. Forrester-Wave-Leader Q3 2025 (12 Perfect Scores) und Gartner-Erwaehnung im Market Guide AI Governance Platforms 2025 belegen Marktreife. Einschränkung: US-Vendor — EU-Datenresidenz und Schrems-II-Konformitaet explizit verifizieren; laut Praktiker-Vergleichen am staerksten in Multi-Regulator-Reporting, weniger in einfachem AI-Act-only-Use-Case. Enterprise-Reifegrad: enterprise_ready."
  - id: ibm-watsonx-governance
    fit: good_fit
    sources:
      - id: ibm-watsonx-governance-ibm
      - id: ibm-watsonx-governance-aligne
      - id: ibm-watsonx-governance-exceeds-review
    why_it_fits: "Modell-Inventar, Risk-Scoring und Policy-Mapping mit DACH-Cloud-Optionen (Frankfurt). IBM-Vertrieb und -Beratung in BaFin-Banken etabliert; Mapping-Templates fuer EU AI Act und ISO 42001 verfuegbar. Reale Rollouts (Bank of Brasil, Infosys) und IBM-Partner-Implementierungs-Erfahrungen dokumentieren Praxisreife. Einschränkung: Voller Wert nur in IBM/watsonx-Estate — Vendor-Lock-in laut unabhaengigen Reviews. Enterprise-Reifegrad: enterprise_ready."
  - id: modulos-ai-governance
    fit: conditional
    sources:
      - id: modulos-ai-governance-modulos
      - id: modulos-certx-iso42001-conformity
    why_it_fits: "Schweizer Anbieter, erste AI-Governance-Plattform mit ISO/IEC-42001-Produktkonformitaetsbewertung durch CertX; powerte erste deutsche ISO-42001-Zertifizierung bei Xayn (Auditor SGS). DACH-Sitz und EU-Datenresidenz sind echte Differenzierer fuer BaFin-/FINMA-Kontexte. Einschränkung: Junger Anbieter, kleinerer Funktionsumfang als Credo/IBM, Pre-Series-A-Stage (CHF 8.7M Juli 2025) — Skalierbarkeit fuer Konzern-Rollouts noch zu pruefen; unabhaengige Drittanbieter-Coverage ausserhalb der CertX-Zertifizierung bleibt begrenzt. Enterprise-Reifegrad: team_ready."
  - id: saidot
    fit: conditional
    sources:
      - id: saidot-saidot
      - id: saidot-oecd-catalogue
    why_it_fits: "Finnischer EU-Anbieter mit klarer EU-AI-Act-Positionierung; Use-Case-Register plus Workflows fuer Mapping. EU-Sitz und OECD.AI-Catalogue-Listung sind Plus fuer DACH-Datenresidenz; Microsoft-Partnership (Azure AI Foundry) bestaetigt Marktrelevanz. Einschränkung: Sehr wenig DACH-Sichtbarkeit — fehlt in den Gartner-Peer-Insights-Top-20 fuer AI Governance Platforms; deutscher Sales- und Sprach-Footprint nicht erkennbar. Damit eher Nischen-/Pilot-Wahl als Konzern-Standard. Enterprise-Reifegrad: team_ready."
  - id: leanix-sap
    fit: good_fit
    sources:
      - id: leanix-sap-enterprise-architecture-mit-ai-governance-erweiterungen-leanix-net
      - id: leanix-gartner-mq-2025
      - id: leanix-gartner-peer-insights
    why_it_fits: "DE-staemmiges EAM-Tool (Bonn), in DACH-Konzernen breit eingesetzt — fuenffacher Leader im Gartner Magic Quadrant for EA Tools (zuletzt 2025), Gartner Peer Insights 4.7/5 aus 475 Bewertungen. Positioniert AI-Komponenten-Inventar als natuerliche EAM-Erweiterung mit Mapping auf Compliance-Anforderungen; im AI-Agent-Hub auch Agent-Governance integriert. Likely missed by market scan because LeanIX wird als EAM/SAP-Suite-Feature wahrgenommen, nicht als 'AI Governance Tool'. Einschränkung: AI-Governance-Funktionen sind Add-on/jung gegenueber Pure-Play-Vendoren — Tiefe der Compliance-Templates pruefen. Enterprise-Reifegrad: enterprise_ready."
  - id: mega-hopex-ai-governance
    fit: good_fit
    sources:
      - id: mega-hopex-ai-governance-mega
      - id: mega-hopex-peerspot-reviews
      - id: mega-hopex-bizzdesign-merger
    why_it_fits: "Franzoesischer EA-/GRC-Vendor (seit September 2024 Teil der Bizzdesign-Gruppe nach Merger mit Bizzdesign und Alfabet) mit dediziertem AI-Governance-Modul; vereint Architektur-Repository (ArchiMate) und Compliance-Mapping in einem Werkzeug — Architektur-naehester Ansatz im Set. EU-Datenresidenz. PeerSpot 7.8/10, Top-5 EAM und Top-7 GRC, 61% Large-Enterprise-Nutzer, starkes Financial-Services-Profil. Likely missed by market scan because MEGA wird primaer als EA-Vendor wahrgenommen, nicht als AI-Governance-Vendor. Einschränkung: Klassisch komplexe EA-Tool-Einfuehrung; HOPEX und Bizzdesign Horizzon ueberlappen sich im konsolidierten Portfolio — Beschaffung sollte Strategie und Roadmap der Bizzdesign-Gruppe pruefen. Enterprise-Reifegrad: enterprise_ready."
start_here: Wer LeanIX bereits als Enterprise-Architecture-Tool einsetzt, beginnt mit dem AI-Komponenten-Inventar als Erweiterung des bestehenden EAM-Modells und mapped ein erstes KI-System auf EU-AI-Act-Anforderungen. Ohne EAM-Voraussetzungen bietet Credo AIs Policy-Pack-Workflow einen direkten Einstieg — Compliance-Officer frühzeitig als Reviewer einbinden.
caveats: Regulatorische Klauseln ändern sich (delegierte Rechtsakte zum EU AI Act, mögliche Fristverlängerungen) — KI-Mappings veralten schnell und brauchen periodische Re-Validierung. Halluzinierte Artikelnummern oder falsche Control-IDs sind ein direktes Compliance-Risiko; bei US-Vendoren wie Credo AI ist EU-Datenresidenz und Schrems-II-Konformität explizit zu verifizieren.
sources: []
---
