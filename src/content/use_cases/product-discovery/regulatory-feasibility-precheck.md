---
stage: product-discovery
order: 12
roles:
  - product-manager
title: Regulatorischer Feasibility-Pre-Check für Feature-Ideen
goal_label: Feature-Ideen früh gegen DSGVO/EU-AI-Act/MaRisk-Constraints prüfen
suitability: conditional
rationale: M365 Copilot mit Purview Compliance Manager bringt EU-AI-Act-Templates und EU-Data-Boundary out-of-the-box — der geringste Einstiegsaufwand für DACH-Großunternehmen, die Discovery-Pre-Checks in bestehende M365-Workflows integrieren wollen. Für FSI und Public Sector mit strengeren Souveränitätsanforderungen bietet Aleph Alpha PhariaAI auf STACKIT einen DSGVO-konformen Pfad mit MaRisk-Korpus ohne US-Cloud-Abhängigkeit.
tools:
  - id: aleph-alpha-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "DACH-Sovereign-Default für FSI/Public Sector: deutsche RZ via STACKIT, On-Prem optional, Erklärbarkeit by Design. PwC-JV Creance adressiert Discovery-Pre-Check über Produktlebenszyklus mit MaRisk-/EU-AI-Act-Korpus. Einer der wenigen Anbieter, gegen den BaFin-/Public-Sector-Compliance-Argumente kaum greifen."
    caveats:
      - Implementierungsprojekt, kein Self-Service
      - Modellqualität für komplexes juristisches Reasoning unter GPT-4-Klasse
      - Cohere-Allianz 2026 öffnet kanadisches Subprocessing-Risiko
      - Hohe Eintrittskosten — typisch sechsstellig
      - Implementierungsaufwand und Time-to-Value oft unterschätzt — kein Self-Serve
      - Modellqualität für komplexe juristische Reasoning-Tasks unter GPT-4-Klasse — Pre-Check muss konservativ kalibriert sein
      - Cohere-Anteil bringt kanadische Subprocessing-Frage zurück (war eigentlich DSGVO-Plus von Aleph Alpha)
      - Implementierung nur Enterprise-Projekt, kein Self-Service-Tool
      - Modellqualität bei generativen Tasks unter US-Top-Modellen
      - Cohere-Partnerschaft 2026 stellt strategische Frage nach Selbstständigkeit
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - "Data sovereignty: runs entirely in EU, never leaves German infrastructure"
        - Explainability aligns with EU AI Act requirements for high-risk systems
        - Validated for German government with BSI IT security certification
        - "Purpose-built for regulated industries: banks, government, public sector"
      complaints:
        - Model quality in generative tasks below US-based LLMs like GPT/Claude
        - "Delivery gaps: customer roadmaps often unrealistic vs. actual capability"
        - Transparent pricing only via enterprise sales, no self-serve option
        - "Hard limits with legally binding content: contracts, finance, legal terms"
        - Requires significant integration complexity; not plug-and-play
    sources:
      - id: aleph-alpha-com-use-cases-use-case-homologation-assistant-for-compliance-and-efficiency
      - id: aleph-alpha-com-aleph-alpha-partners-with-stackit-to-deliver-sovereign-enterprise-ai-at-scale-with-pharia-ai-as-a-service
      - id: ittech-pulse-com-news-cohere-aleph-alpha-launch-sovereign-ai-powerhouse
      - id: the-playbook-de-de-produkte-pharia
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Default-Stack für DACH-Großunternehmen: M365 Copilot über SharePoint-Compliance-Bibliotheken plus Purview Compliance Manager mit Premium-Templates für EU AI Act, NIST AI RMF, ISO 42001. Pre-Check via Custom Agent in Copilot Studio realistisch umsetzbar; EU-Data-Boundary plus DSPM für AI bringen Audit-Plumbing mit."
    caveats:
      - Flex-Routing kann LLM-Inferenz aus EU-Data-Boundary herausschicken — explizit deaktivieren
      - DSPM for AI ersetzt keine DPIA nach Art. 35 DSGVO
      - Custom Agents lösen Mitbestimmung nach BetrVG §87 aus, sobald PM-Prompts geloggt werden
      - Oversharing aus SharePoint-Berechtigungen ist bei MaRisk-Doku ein Schutzbedarfsereignis
      - Copilot Studio Custom Agents brauchen Mitbestimmungsverfahren mit Betriebsrat sobald PM-Prompts Mitarbeiterverhalten loggen (BetrVG §87)
      - DSPM for AI ist kein Ersatz für DPIA nach Art. 35 DSGVO — separate Folgenabschätzung nötig
      - Antworten reproduzieren Berechtigungs-Drift im SharePoint; bei MaRisk-Dokumenten ist 'Oversharing' ein meldepflichtiges Schutzbedarfsereignis
      - Flex-Routing kann LLM-Inferenz aus EU-Data-Boundary herausschicken
      - Anthropic-Modelle in Copilot sind für EU-Kunden standardmäßig deaktiviert
      - Antworten reproduzieren oft 'Oversharing'-Probleme aus SharePoint-Berechtigungen
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Tiefste Integration in M365-Workflow
        - GDPR-/EDP-Vertragsrahmen klar dokumentiert
      complaints:
        - Oversharing aus SharePoint-Berechtigungen
        - Häufige Term-Updates ohne Versionierung
        - Antworten in Excel/Word teils schwächer als Claude
    sources:
      - id: learn-microsoft-com-en-us-copilot-microsoft-365-microsoft-365-copilot-privacy
      - id: learn-microsoft-com-en-us-purview-ai-microsoft-purview
      - id: inkl-com-news-this-new-microsoft-365-copilot-feature-could-throw-your-gdpr-compliance-into-question-here-s-how-to-check-and-how-turn-it-off
      - id: docs-microsoft-com-en-us-purview-compliance-manager-assessments
      - id: gartner-com-peer-community-post-encountering-significant-challenges-assessing-managing-legal-data-privacy-risks-associated-microsoft-copilot-suite-copilot
      - id: reddit-com-r-microsoft-365-copilot-comments-1pi2e7j-cloude-models-included-in-enterprise-data-tl-de
  - id: aws-amazon-com-bedrock
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Plattform-Pfad: DACH-Banken können in eu-central-1 eigenen Compliance-RAG bauen, Bedrock Guardrails plus Automated-Reasoning-Checks reduzieren Hallucinations bei Policy-Antworten. Für Häuser mit AWS-Stack realistisch."
    caveats:
      - AWS European Sovereign Cloud erst Ende 2026 — bis dahin CLOUD-Act-Frage offen
      - Eigenbau-Aufwand und Compliance-Verantwortung beim Kunden
      - Bedrock-Modelle teils nur in US-Regionen
      - BaFin-Auslagerung nach AT 9 MaRisk pflichtig
      - AWS-EU-Sovereign-Cloud kommt erst Ende 2026 — bis dahin bleibt CLOUD-Act-Frage
      - Bedrock-Modelle teilweise nur in US-Regionen verfügbar — Cross-Border-Inferenz prüfen
      - BaFin-Auslagerungsmanagement nach AT 9 MaRisk pflichtig
      - Eigenbau-Aufwand, kein PM-Tool out-of-the-box
      - Compliance-Bewertung gehört zur Eigen-Verantwortung
      - Modellauswahl beeinflusst BaFin-Akzeptanz
    sources:
      - id: aws-amazon-com-bedrock-security-compliance
      - id: aws-amazon-com-bedrock-security-privacy-responsible-ai
  - id: collibra-com-products-ai-governance
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Eingebautes EU-AI-Act-Assessment für Use Cases — geführter Fragebogen erzeugt Risiko-Klassifikation und Folgepflichten, das ist der Pre-Check-Pfad. Sinnvoll, wenn Collibra als Data-Governance-Plattform schon installiert ist.
    caveats:
      - Belgischer Vendor mit US-Subprocessing — Schrems-II-Klärung
      - Data-/Model-Governance-Lens, nicht PM-Discovery
      - Hohe TCO für punktuellen Pre-Check
      - DACH-Hosting separat klären
      - Belgischer Vendor, aber US-Subprocessing typisch — Schrems-II-Klärung
      - Eher Data-/Model-Governance-Lens als PM-Discovery — Cross-Funktion-Brücke nötig
      - Hohe TCO für rein punktuellen Pre-Check-Use-Case
      - Dreht primär um Data/Model-Governance; PM-spezifische UX optional
      - Teure Enterprise-Lizenz
    sources:
      - id: productresources-collibra-com-docs-collibra-latest-content-aigovernance-co-about-ai-governance-htm
  - id: credo-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: AI-Use-Case-Intake mit Risk-Tiering und Policy-Packs für EU AI Act, NIST AI RMF, ISO 42001 — direkt der Pre-Check-Workflow für formelle AI-Governance. Forrester-Wave-Leader; Jira/ServiceNow-Integration passt für Discovery-Anbindung. US-Vendor, EU-Hosting separat klären.
    caveats:
      - US-Vendor — Schrems-II-Bewertung erforderlich
      - Setzt funktionierenden AI-Governance-Prozess voraus (CAIO/AI-Officer)
      - Compliance-Office-orientiert, nicht PM-First
      - Lizenzkosten Enterprise-only
      - Schrems-II-Bewertung erforderlich; EU-Hosting-Optionen separat klären
      - Setzt funktionierende AI-Governance-Org voraus (CAIO/AI-Officer)
      - Lizenzkosten relevant — kaum Mittelstands-tauglich
      - Adressiert eher Risk-/Compliance-Team als reines PM-Tooling
      - Kein DACH-Hosting-Default, US-Vendor
      - Setzt voraus, dass Org formellen AI-Governance-Prozess will
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Policy packs automatically map EU AI Act, NIST RMF, ISO 42001 to controls
        - Board-ready reporting integrates with Jira, ServiceNow, MLflow directly
        - 10x faster EU AI Act compliance than manual governance workflows
        - Founders lead NIST, OECD, European AI Office AI governance groups
      complaints:
        - "Enterprise-only pricing: €20,000+ per year minimum; no self-serve option"
        - Evidence goes stale within quarter without dedicated policy team ownership
        - Steep learning curve and documentation could be more accessible for newcomers
        - Developer-layer tool, not deployer-layer; lacks consumer notice generation
        - Requires active sales cycle and organizational governance maturity to succeed
    sources:
      - id: credo-ai-product
      - id: fronterio-com-en-blog-ai-governance-platform-comparison-credo-fairly-holistic-fronterio
  - id: dreamleap-com-ai-legal-compliance-assistant
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Schweizer Vendor mit DACH-Hosting, 'May-I'-Decision-Tree für FINMA/BaFin/EU-AI-Act — exakt das Pre-Check-Pattern für PMs im FSI-Kontext. Decision-Tree mit Paragraf-Referenz ist konzeptionell überlegen gegenüber reinem RAG.
    caveats:
      - Schweiz = Drittland mit Adäquanz, Subprocessing-Kette prüfen
      - Default ist FINMA-zentrisch, MaRisk muss konfiguriert werden
      - Junges Produkt, kein Großbanken-Track-Record öffentlich
      - Wenig unabhängige Reviews
      - Schweiz ist seit 2024 Adäquanz-Land, aber Sub-Processor-Kette prüfen
      - MaRisk-Spezialisierung muss konfiguriert werden — Default ist FINMA-zentrisch
      - Junges Produkt, Track Record bei Großbanken nicht belegt
      - Eher Frontline/Compliance-Use-Case als reine Discovery; PM-Fit muss konfiguriert werden
      - Schweizer Vendor, MaRisk-Spezialisierung explizit ergänzen
    sources:
      - id: dreamleap-com-ai-legal-compliance-assistant
  - id: ibm-com-products-watsonx-governance
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Use-Case-Risk-Assessment plus Compliance-Beschleuniger für EU AI Act / ISO 42001 / NIST AI RMF. Stark, wenn IBM-/watsonx-Stack ohnehin etabliert ist; IBM Cloud Frankfurt deckt EU-Hosting. Risk-based-Assessment vor Deployment passt zur Discovery-Phase.
    caveats:
      - Hoher Implementierungsaufwand bindet Budget
      - Eher Modell-Lifecycle als reine Discovery
      - PM-UX nicht primär adressiert
      - Subprocessing in IBM-Cloud separat klären
      - "Reverb-Effekt: Lizenzkosten und Implementierungsaufwand binden Budget für 18+ Monate"
      - PM-UX nicht primär adressiert — User-Adoption-Risiko
      - EU-Hosting via IBM Cloud Frankfurt verfügbar, aber Subprocessing prüfen
      - Stark, wenn watsonx-Stack bereits da ist; sonst Overhead
      - Eher Modell-/Lifecycle-Governance als reine Discovery
      - Schwerlastige Implementierung
    sources:
      - id: ibm-com-products-watsonx-governance
      - id: community-ibm-com-community-user-viewdocument-the-era-of-responsible-ai-from-a-b-communitykey-803d3318-9b29-4131-be29-018a27c5c38d
  - id: modulos-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Schweizer Vendor mit Multi-Framework-Control-Graph (EU AI Act, ISO 42001, NIST AI RMF, GDPR, NIS2, DORA) — konzeptionell genau das, was DACH-FSI für Pre-Check braucht. Eine Kontrolle, mehrere Frameworks abdeckt.
    caveats:
      - "Klein-Vendor: Continuity, Support-SLAs prüfen"
      - Schweiz = Drittland, Subprocessing-Kette klären
      - MaRisk-Spezifik nicht beworben
      - Wenig öffentliche Track-Record
      - Schweiz = Drittland mit Adäquanz, Subprocessing klären
      - "Klein-Vendor-Risiko: Continuity, Support-SLAs"
      - MaRisk-Spezifikation nicht beworben — manuelle Anpassung nötig
      - Eher Compliance-Backbone als PM-Werkzeug
      - Kleiner Vendor, weniger Marktpräsenz
      - Wenig unabhängige Reviews
    sources:
      - id: modulos-ai-blog-ai-compliance-guide
  - id: onetrust-com-de-products-data-access-governance
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Logischer Pfad für DACH-Häuser, die DSGVO-/Privacy-Programm bereits in OneTrust führen — AI-Modul mit EU-AI-Act-/NIST-Templates erweitert Inventar um Pre-Check-Workflow. Frankfurt-Hosting verfügbar, aber US-Subprocessing bleibt Thema.
    caveats:
      - Modul gilt als 'komplex und ressourcenintensiv'
      - Nicht für tägliche PM-Nutzung gebaut
      - US-Subprocessing trotz EU-Hosting
      - Lock-in bei breitem OneTrust-Footprint
      - OneTrust hat bei DACH-Banken bekannte FRA-/Frankfurt-Hosting-Optionen — aber Subprocessing über USA bleibt
      - Nicht für tägliche PM-Nutzung gebaut, eher Compliance-Office-Tooling
      - Lock-in-Risiko bei breitem Footprint
      - Nutzer berichten 'komplex und ressourcenintensiv' im AI-Modul
      - GRC-Ursprung, nicht für PMs gebaut
      - Lock-in-Risiko bei breitem OneTrust-Footprint
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Comprehensive centralized AI inventory with flexible governance workflows
        - Pre-built regulatory guidance covers 300+ jurisdictions automatically
        - Reduces compliance audit prep time by 60% in financial services use cases
        - AI Governance module features genuinely ahead of current market
      complaints:
        - Poor UX and customer satisfaction; users report empty box feeling
        - Cannot track AI-generated code quality or measure engineering ROI
        - AI governance retrofitted onto privacy platform; architectural friction visible
        - No statistical bias testing; only questionnaires about testing performed
        - "Complex deployment: weeks to quarters vs. competitors' days/weeks"
        - High total cost of ownership with resource-intensive configuration
    sources:
      - id: onetrust-com-news-onetrust-introduces-ai-governance-solution
      - id: credo-ai-blog-whyenterprisesareleadingwithcredoaiandnotonetrust
  - id: durava-de-ki-compliance-management
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Deutscher Vendor, deutsche RZ, optional Betrieb in Kunden-Azure — Multi-Compliance-Mapping über DSGVO, ISO 27001, NIS2, DORA, MaRisk, EU AI Act mit Belegstelle im Originaldokument. Likely missed by market scan because deutschsprachige Nische, die englische Compliance-Tool-Listen nicht erfassen.
    caveats:
      - Eher Policy-Monitoring als Discovery-Pre-Check — Use-Case-Eignung konfigurieren
      - Junger Vendor — Track-Record-Risiko
      - Keine sichtbaren MDAX-Referenzen
      - Modell-Provider-Frage offen (welches LLM im Hintergrund?)
    sources:
      - id: durava-de-ki-compliance-management
  - id: eurocomply-app-de
    fit: partial
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: EU-only-SaaS (Frankfurt + Paris), explizit ohne US-Cloud-Abhängigkeiten — deckt EU AI Act, GDPR, NIS2, CRA für KMU 10–500 MA inkl. Sovereignty-Audits und Tool-Compliance-Profilen. Likely missed by market scan because SMB-positioniert und nicht in DACH-Enterprise-Tool-Listen sichtbar.
    caveats:
      - SMB-Positionierung — Skalierung für DACH-Konzerne unklar
      - Keine MaRisk-Spezialisierung
      - Sehr neuer Vendor
      - Annex-IV-Doku nur in höherem Tier
    sources:
      - id: eurocomply-app-de
  - id: tracegov-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Frankfurter EU-native Plattform mit explizitem 'Zero US Transfer'-Versprechen, eu-central-1; 50+ Frameworks (EU AI Act, GDPR, DORA, PSD3, CRR) cross-mapped — passt für Banken-Pre-Check mit Cross-Framework-Sicht. Likely missed by market scan because junger Vendor ohne große SEO-Sichtbarkeit, taucht in Standard-Tool-Vergleichen kaum auf.
    caveats:
      - Junger Vendor — Vendor-Continuity-Risiko
      - Track Record bei DACH-Großbanken nicht öffentlich belegt
      - TRACE-Scoring proprietär, nicht standardisiert
      - Keine SOC-2-/ISO-Belege auf Landingpage prominent
    sources:
      - id: tracegov-ai
  - id: eqs-com-platform-data-privacy-ai-compliance
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Münchner GRC-Anbieter, in DACH-MDAX/SDAX als Privacy-Cockpit etabliert, jetzt mit AI-Governance-Modul: AI-Inventar, Risk-Assessment für EU AI Act plus integrierte ROPA/DPIA/DSR/Breach-Workflows für DSGVO. EU-Hosting auf ISO-27001-Infrastruktur. Likely missed by market scan because EQS wird primär als Whistleblowing-/Investor-Relations-Vendor wahrgenommen, das AI-Governance-Modul ist neuere Erweiterung."
    caveats:
      - AI-Governance-Modul erst März 2026 lanciert — Produktionsreife nicht belegt
      - Gartner listet EQS ausschließlich als Whistleblowing-/Hotline-Anbieter; kein Analyst-Tracking für das AI-Modul
      - Keine MDAX-/FSI-Referenzen für das AI-Governance-Modul nachweisbar
      - Eher Compliance-/DPO-Tooling, PM-UX optional
      - MaRisk-Spezifik nicht Out-of-the-box
      - Lizenz-Bundle mit anderen EQS-Modulen prüfen
    sources:
      - id: eqs-com-platform-data-privacy-ai-compliance
start_here: "Pilot mit einem M365 Copilot Custom Agent über SharePoint-Compliance-Bibliothek starten: eine Feature-Idee gegen DSGVO-Risikoklassen und EU-AI-Act-Anhang prüfen, danach Compliance-Officer validieren lassen. Flex-Routing dabei explizit deaktivieren, um LLM-Inferenz in der EU-Data-Boundary zu halten."
caveats: Der AI-Output ist Diskussionsbasis, keine Rechtsentscheidung — die abschließende Bewertung bleibt beim Compliance-Officer. Eingabedokumente dürfen nur in Systemen mit DSGVO-konformer Mandantentrennung liegen; bei M365 Copilot zudem SharePoint-Berechtigungen vor Pilotstart bereinigen, um Oversharing bei MaRisk-Doku zu vermeiden.
sources: []
---
