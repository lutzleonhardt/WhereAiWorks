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
  - id: anthropic-com-claude
    fit: conditional
    sources:
      - id: aws-amazon-com-bedrock-claude
    why_it_fits: "Generisches LLM mit grossem Kontextfenster und gutem Recall fuer regulatorische Texte; als RAG-Backbone fuer eigenen Mapping-Workflow ueber Bedrock EU einsetzbar. Einschränkung: Halluzinierte Artikelnummern/Control-IDs sind direktes Compliance-Risiko."
    enterprise_readiness: enterprise_ready
  - id: azure-microsoft-com-en-us-products-ai-services-openai-service
    fit: conditional
    sources:
      - id: learn-microsoft-com-en-us-azure-ai-services-openai-concepts-data-residency
    why_it_fits: "DACH-de-facto-Standard fuer LLM-Workloads in regulierten Branchen; mit RAG ueber kuratierte Regulator-Texte als Mapping-Backbone praktikabel. Einschränkung: Out-of-the-box keine regulatorische Mapping-Funktion."
    enterprise_readiness: enterprise_ready
  - id: collibra-com-products-ai-governance
    fit: conditional
    sources:
      - id: collibra-com-us-en-products-ai-governance
    why_it_fits: "AI-Use-Case-Registry plus Lineage auf Datenbasis — adressiert direkt DORA-/AI-Act-Anforderungen an Datenherkunft und -qualitaet. Einschränkung: Voller Wert nur wenn Collibra Catalog bereits etabliert ist."
    enterprise_readiness: enterprise_ready
  - id: kpmg-com-de-de-home-themen-uebersicht-kuenstliche-intelligenz-ki-governance-html
    fit: conditional
    sources:
      - id: kpmg-com-de-de-home-themen-uebersicht-kuenstliche-intelligenz-ki-governance-html
    why_it_fits: "Realer Markt 2026: viele DACH-Mittelstaendler beziehen das Mapping als Beratungsleistung mit Excel/Power-BI/LLM-Pipelines. Praxisnaher Einstieg, der Architektur- und Compliance-Sicht ueber Mandat verbindet. Einschränkung: Service, kein Produkt — Atlas-Eignung diskutabel."
    enterprise_readiness: enterprise_ready
  - id: holisticai-com
    fit: conditional
    sources:
      - id: holisticai-com-eu-ai-act
    why_it_fits: "EU-AI-Act-Tracker und Risk-Klassifizierung mit UK-Sitz; nutzbar als Compliance-Mapping-Grundlage, staerker auf Bias-/Modell-Audit als auf Architektur fokussiert. Einschränkung: UK-Sitz post-Brexit erfordert separate datenschutzrechtliche Bewertung."
    enterprise_readiness: team_ready
  - id: learn-microsoft-com-en-us-purview-ai-hub-microsoft-purview
    fit: conditional
    sources:
      - id: learn-microsoft-com-en-us-purview-ai-hub-microsoft-purview
    why_it_fits: "Natuerliche Wahl in Microsoft-zentrischen DACH-Estates: Purview AI Hub plus Compliance Manager liefert AI-Inventar und EU-AI-Act-Templates. Datenflusssicht ueber Purview Lineage. Einschränkung: Wert nur fuer MS-First-Party-AI; Drittanbieter-AI bleibt ausserhalb."
    enterprise_readiness: enterprise_ready
  - id: mistral-ai-news-le-chat-enterprise
    fit: conditional
    sources:
      - id: mistral-ai-products-le-chat
    why_it_fits: "EU-Souveraenitaets-Story (FR-Hosting), in DACH-Konzernen aktiv evaluiert; mit RAG ueber AI-Act-/DORA-Texte als Mapping-LLM nutzbar. Einschränkung: Generisches LLM ohne Compliance-Templates."
    enterprise_readiness: enterprise_ready
  - id: onetrust-com-de-products-data-access-governance
    fit: conditional
    sources:
      - id: onetrust-com-products-ai-governance
    why_it_fits: "Erweiterung des in DACH-DPO-Buros breit etablierten OneTrust-Stacks um AI-Use-Case-Inventar und EU-AI-Act-/ISO-42001-Templates. Realistischer Sammelpunkt fuer Mapping-Artefakte. Einschränkung: DPO-/Legal-zentrisch, Architekt:innen liefern nur Inputs in Forms."
    enterprise_readiness: enterprise_ready
  - id: bizzdesign-com
    fit: conditional
    sources:
      - id: bizzdesign-com
    why_it_fits: "ArchiMate-basiertes EA-Tool, in DACH-Banken/Versicherern etabliert; Risk-/Compliance-Overlays erlauben Mapping von Architektur-Komponenten auf Controls. Likely missed by market scan because Bizzdesign positioniert sich als EA-Suite, nicht als AI-Governance-Tool. Einschränkung: Kein dediziertes AI-Act-Content-Pack — Mapping muss konfiguriert werden. Hinweis: Seit Bizzdesign-Merger 2024 mit MEGA und Alfabet ist Horizzon Teil eines konsolidierten Portfolios."
    enterprise_readiness: enterprise_ready
  - id: metricstream-com
    fit: conditional
    sources:
      - id: metricstream-com
    why_it_fits: "GRC-Plattform mit AI-Risk-Modul und Content-Packs fuer EU AI Act / DORA; in groesseren DACH-Versicherern und Banken praesent. Likely missed by market scan because MetricStream wird als klassischer GRC-Vendor wahrgenommen, nicht als AI-Tool. Einschränkung: Voller Wert nur mit MetricStream-GRC-Estate."
    enterprise_readiness: enterprise_ready
  - id: servicenow-com-products-ai-control-tower-html
    fit: conditional
    sources:
      - id: servicenow-com-products-ai-control-tower-html
    why_it_fits: "Verknuepft existierende ServiceNow-CMDB mit AI-Use-Case-Inventar und Policy-Mapping. Fuer DACH-Konzerne mit ServiceNow-Estate ist das die konkrete Andockstelle, an der Architektur (CMDB-CIs) und Compliance (IRM) zusammenkommen. Einschränkung: Voller Wert nur mit existierender ServiceNow-Plattform."
    enterprise_readiness: enterprise_ready
  - id: credo-ai
    fit: good_fit
    sources:
      - id: credo-ai-product
      - id: credo-ai-resources-formats-blog-topics-eu-ai-act
      - id: fronterio-com-en-blog-ai-governance-platform-comparison-credo-fairly-holistic-fronterio
    why_it_fits: "Pure-Play-AI-Governance mit explizitem EU-AI-Act-/ISO-42001-Mapping, Use-Case-Registry und Policy Packs — direkt nutzbar als Architektur-Mapping-Backbone. Forrester-Wave-Leader Q3 2025 (12 Perfect Scores) und Gartner-Erwaehnung im Market Guide AI Governance Platforms 2025 belegen Marktreife. Einschränkung: US-Vendor — EU-Datenresidenz und Schrems-II-Konformitaet explizit verifizieren; laut Praktiker-Vergleichen am staerksten in Multi-Regulator-Reporting, weniger in einfachem AI-Act-only-Use-Case."
    enterprise_readiness: enterprise_ready
  - id: ibm-com-products-watsonx-governance
    fit: good_fit
    sources:
      - id: ibm-com-products-watsonx-governance
      - id: aligne-ai-blog-posts-why-ai-governance-is-no-longer-optional-preparing-for-eu-ai-act-with-ibm-watsonx-governance
      - id: blog-exceeds-ai-ibm-watsonx-governance-features-comparison
    why_it_fits: "Modell-Inventar, Risk-Scoring und Policy-Mapping mit DACH-Cloud-Optionen (Frankfurt). IBM-Vertrieb und -Beratung in BaFin-Banken etabliert; Mapping-Templates fuer EU AI Act und ISO 42001 verfuegbar. Reale Rollouts (Bank of Brasil, Infosys) und IBM-Partner-Implementierungs-Erfahrungen dokumentieren Praxisreife. Einschränkung: Voller Wert nur in IBM/watsonx-Estate — Vendor-Lock-in laut unabhaengigen Reviews."
    enterprise_readiness: enterprise_ready
  - id: modulos-ai
    fit: conditional
    sources:
      - id: modulos-ai
      - id: modulos-ai-press-releases-modulos-iso-42001-product-conformity
    why_it_fits: "Schweizer Anbieter, erste AI-Governance-Plattform mit ISO/IEC-42001-Produktkonformitaetsbewertung durch CertX; powerte erste deutsche ISO-42001-Zertifizierung bei Xayn (Auditor SGS). DACH-Sitz und EU-Datenresidenz sind echte Differenzierer fuer BaFin-/FINMA-Kontexte. Einschränkung: Junger Anbieter, kleinerer Funktionsumfang als Credo/IBM, Pre-Series-A-Stage (CHF 8.7M Juli 2025) — Skalierbarkeit fuer Konzern-Rollouts noch zu pruefen; unabhaengige Drittanbieter-Coverage ausserhalb der CertX-Zertifizierung bleibt begrenzt."
    enterprise_readiness: team_ready
  - id: saidot-com
    fit: conditional
    sources:
      - id: saidot-com-platform
      - id: oecd-ai-en-catalogue-tools-saidot
    why_it_fits: "Finnischer EU-Anbieter mit klarer EU-AI-Act-Positionierung; Use-Case-Register plus Workflows fuer Mapping. EU-Sitz und OECD.AI-Catalogue-Listung sind Plus fuer DACH-Datenresidenz; Microsoft-Partnership (Azure AI Foundry) bestaetigt Marktrelevanz. Einschränkung: Sehr wenig DACH-Sichtbarkeit — fehlt in den Gartner-Peer-Insights-Top-20 fuer AI Governance Platforms; deutscher Sales- und Sprach-Footprint nicht erkennbar. Damit eher Nischen-/Pilot-Wahl als Konzern-Standard."
    enterprise_readiness: team_ready
  - id: leanix-net
    fit: good_fit
    sources:
      - id: leanix-net
      - id: leanix-net-en-download-gartner-magic-quadrant-for-enterprise-architecture-tools-2025
      - id: gartner-com-reviews-market-enterprise-architecture-tools-vendor-sap-product-leanix-enterprise-architecture
    why_it_fits: "DE-staemmiges EAM-Tool (Bonn), in DACH-Konzernen breit eingesetzt — fuenffacher Leader im Gartner Magic Quadrant for EA Tools (zuletzt 2025), Gartner Peer Insights 4.7/5 aus 475 Bewertungen. Positioniert AI-Komponenten-Inventar als natuerliche EAM-Erweiterung mit Mapping auf Compliance-Anforderungen; im AI-Agent-Hub auch Agent-Governance integriert. Likely missed by market scan because LeanIX wird als EAM/SAP-Suite-Feature wahrgenommen, nicht als 'AI Governance Tool'. Einschränkung: AI-Governance-Funktionen sind Add-on/jung gegenueber Pure-Play-Vendoren — Tiefe der Compliance-Templates pruefen."
    enterprise_readiness: enterprise_ready
  - id: mega-com-solutions-ai-governance
    fit: good_fit
    sources:
      - id: mega-com-solutions-ai-governance
      - id: peerspot-com-products-mega-hopex-reviews
      - id: main-nl-press-release-bizzdesign-acquires-mega
    why_it_fits: "Franzoesischer EA-/GRC-Vendor (seit September 2024 Teil der Bizzdesign-Gruppe nach Merger mit Bizzdesign und Alfabet) mit dediziertem AI-Governance-Modul; vereint Architektur-Repository (ArchiMate) und Compliance-Mapping in einem Werkzeug — Architektur-naehester Ansatz im Set. EU-Datenresidenz. PeerSpot 7.8/10, Top-5 EAM und Top-7 GRC, 61% Large-Enterprise-Nutzer, starkes Financial-Services-Profil. Likely missed by market scan because MEGA wird primaer als EA-Vendor wahrgenommen, nicht als AI-Governance-Vendor. Einschränkung: Klassisch komplexe EA-Tool-Einfuehrung; HOPEX und Bizzdesign Horizzon ueberlappen sich im konsolidierten Portfolio — Beschaffung sollte Strategie und Roadmap der Bizzdesign-Gruppe pruefen."
    enterprise_readiness: enterprise_ready
start_here: Wer LeanIX bereits als Enterprise-Architecture-Tool einsetzt, beginnt mit dem AI-Komponenten-Inventar als Erweiterung des bestehenden EAM-Modells und mapped ein erstes KI-System auf EU-AI-Act-Anforderungen. Ohne EAM-Voraussetzungen bietet Credo AIs Policy-Pack-Workflow einen direkten Einstieg — Compliance-Officer frühzeitig als Reviewer einbinden.
caveats: Regulatorische Klauseln ändern sich (delegierte Rechtsakte zum EU AI Act, mögliche Fristverlängerungen) — KI-Mappings veralten schnell und brauchen periodische Re-Validierung. Halluzinierte Artikelnummern oder falsche Control-IDs sind ein direktes Compliance-Risiko; bei US-Vendoren wie Credo AI ist EU-Datenresidenz und Schrems-II-Konformität explizit zu verifizieren.
sources: []
---
