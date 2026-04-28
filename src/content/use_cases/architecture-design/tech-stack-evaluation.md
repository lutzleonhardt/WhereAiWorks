---
stage: architecture-design
order: 2
roles:
  - software-engineer
  - software-architect
title: Tech-Stack-Evaluation
goal_label: Frameworks und Bibliotheken systematisch vergleichen
suitability: conditional
rationale: ChatGPT Deep Research und Claude liefern strukturierte Trade-off-Reports über mehrere Kandidaten, die manuelle Recherchearbeit für Architekten spürbar verkürzen. FOSSA adressiert den systematischen Blindspot beider Tools bei Lizenz- und Provenance-Prüfung — und ist damit für regulierte DACH-Umgebungen kein optionaler Zusatz.
tools:
  - id: openai-com-index-introducing-deep-research
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Deep Research mit o3/GPT-5 produziert die tiefsten Trade-off-Reports und ist in DACH-Konzernen via Azure-OpenAI-EU-Region mit existierenden Microsoft-Vertraegen meist sofort beschaffungsfaehig. Custom GPTs etablieren wiederverwendbare 'Tech-Stack-Vergleicher' inkl. Bewertungsraster.
    caveats:
      - Direkt-OpenAI-API hat schwaechere EU-Residenz — Azure-OpenAI-Variante bevorzugen
      - Lizenz-/Provenance-Pruefung erfolgt nur auf explizite Aufforderung
      - Deep-Research-Runs limitiert; Reports oft zu lang fuer schnelle Architektur-Entscheidungen
      - Custom-GPTs koennen interne Vergleichsraster leaken — Governance/RBAC erforderlich
      - Direkt-OpenAI-API ohne Azure-Wrapper hat schwaechere EU-Residenz; Bevorzugung der Azure-OpenAI-Variante fuer regulierte DACH-Buyers
      - Custom-GPTs leaken bei Fehlkonfiguration interne Vergleichsraster — Governance erforderlich
      - Wissen-Snapshot kann veraltet sein, wenn der Browse-Modus nicht aktiv ist
      - Limitierte Runs/Monat (Plus 25/Pro 250)
      - Erstellt nicht zuverlaessig Lizenz-/Provenance-Hinweise ohne explizite Aufforderung
      - Bias zu populaeren Quellen; nischige OSS-Frameworks unterrepraesentiert
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Tiefste Synthese und beste Strukturierung der Reports
        - Liest 20+ Quellen wirklich tief
        - Folgt 'nur akademische Quellen'-Anweisungen zuverlaessig
      complaints:
        - Sehr langsam (10-30 min pro Run)
        - Reports oft zu lang fuer schnelle Architektur-Entscheidungen
        - Limitierte Runs auf Plus-Tier
    sources:
      - id: learn-g2-com-perplexity-vs-chatgpt
      - id: freeacademy-ai-blog-google-deep-research-vs-perplexity-vs-chatgpt-comparison-2026
      - id: news-ycombinator-com-item-id-43236184
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Long-Context-Reasoning und strukturiertes Trade-off-Denken machen Claude zur ersten Wahl, wenn mehrere Vendor-Whitepapers, RFCs oder Lizenztexte parallel verglichen werden. Anthropic-Enterprise-Tier mit DPA und Zero-Data-Retention; fuer EU-Datenresidenz Bedrock-EU-Region zwingend.
    caveats:
      - Direkt-Anthropic-API verarbeitet global — fuer DACH-Banken Bedrock-EU oder Vertex-AI mit dokumentiertem EU-Routing erforderlich
      - Web-Search juenger und weniger ausgereift als Perplexity/ChatGPT — Versions-Staleness moeglich
      - Tendiert zu vorsichtigem 'es kommt darauf an'
      - Inline-Zitate nicht so konsistent wie bei Perplexity
      - Fuer EU-Datenresidenz nur ueber AWS Bedrock EU-Region zuverlaessig; Direkt-Anthropic-API verarbeitet global
      - Web-Search-Funktion juenger — Versions-Frische geringer als bei Perplexity
      - Default-Antworten ohne Web-Search basieren auf Trainings-Snapshot
      - Keine inline-Zitate so konsistent wie bei Perplexity
      - Tendiert zu vorsichtigem 'es kommt darauf an' — kann Trade-off-Empfehlung verwaessern
      - Web-Search-Funktion juenger und weniger ausgereift als ChatGPT/Perplexity
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Bestes Long-Context-Verhalten fuer Repo-/Doku-Vergleiche
        - Sauberes Trade-off-Reasoning
        - Skills/MCP-Erweiterbarkeit
      complaints:
        - Web-Search nicht so reif wie Perplexity
        - Manchmal zu vorsichtig in Empfehlungen
        - Kein Free-Tier fuer Research-Modus
    sources:
      - id: emergent-sh-learn-perplexity-vs-claude
      - id: gerloff-dev-writing-claude-aws-azure-google-gdpr
      - id: reddit-com-user-enoumen-comments-1rn72uv-the-convergence-of-latent-reasoning-and-agentic-json
  - id: fossa-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Marktfuehrer fuer License-Compliance/SBOM mit 99,8% Erkennung; fossabot AI-Agent analysiert Upgrade-Pfade. SCANOSS-Partnerschaft (01/2026) deckt AI-generierte Snippets ab. Direkter Fit fuer Briefing-Caveat (AGPL/SSPL/Provenance) bei DACH-Banken/Public Sector.
    caveats:
      - Datenresidenz und DPA-Klauseln explizit pruefen (US-Vendor)
      - Vulnerability-Tiefe geringer als Snyk
      - Enterprise-Funktionen nur in kostenpflichtigen Plans
      - Kein generisches Architektur-Trade-off — Lizenz-/SBOM-Fokus
      - Datenresidenz und DPA-Klauseln explizit pruefen (US-Anbieter)
      - Kein direkter Architektur-Trade-off, sondern Lizenz-/SBOM-Layer
      - Vulnerability-Scanning weniger tief als Snyk
      - Haskell-CLI erschwert Custom-Integrationen
      - Kein generisches Trade-off-Tool — Lizenz-/SBOM-Fokus
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Beste License-Compliance-Reports
        - SBOM-Portal fuer Audit-ready Output
      complaints:
        - Teurer Enterprise-Vertrag noetig
        - Vulnerability-Tiefe geringer als Snyk
    sources:
      - id: appsecsanta-com-fossa
      - id: softwareseni-com-adding-ai-licence-compliance-to-your-existing-engineering-workflow
      - id: stackinsight-net-snyk-vs-fossa-comparison
  - id: scanoss-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Snippet-Detection ohne Code-Upload (nur SBOM/Metadata) ist genau das DACH-Banken-/Public-Sector-Argument — Code verlaesst die Umgebung nicht. CLI/IDE/CI-Integration. FOSSA-Partnerschaft gibt Enterprise-Flanke; eigenstaendig fuer Snippet-Pruefung von AI-vorgeschlagenem Code.
    caveats:
      - Snippet-Fokus, kein Trade-off-Tool
      - Self-Hosting-/Setup-Aufwand
      - Vendor-Groesse klein — Beschaffung in DACH-Konzernen ueber Partner-SaaS oft praktischer
      - Erweiterung um Trade-off-Logik nur durch Kombination
      - Setup/Self-Hosting-Aufwand
      - Erweiterung um Trade-off-Logik nur durch Kombination mit anderen Tools
      - Eher Snippet-Detection als generisches Vergleichswerkzeug
      - Erfordert eigenes Setup oder Partner-SaaS
      - Trade-off-Analyse muss separat erfolgen
    sources:
      - id: scanoss-com-license-dataset
  - id: aleph-alpha-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: DE-Anbieter (Heidelberg) mit aktiven Vertraegen bei Bundeswehr, Bundes-/Landesverwaltungen und DAX-Konzernen; nach 04/2026-Merger mit Cohere als Governance-/Deployment-Layer fuer souveraene Recherche-/Trade-off-Workloads positioniert. Likely missed by market scan because der Pivot weg vom Frontier-Modell-Rennen wird oft als 'kein Recherche-Tool mehr' fehlinterpretiert; fuer DACH-Public-Sector bleibt es aber der Default.
    caveats:
      - Frontier-Qualitaet der Recherche unter ChatGPT/Claude/Gemini
      - Merger-Integration mit Cohere bringt 12–24 Monate Roadmap-Unsicherheit
      - PhariaAI ist eher Plattform/Layer als out-of-the-box Architekten-Tool — Implementierungsaufwand
      - Pricing/Lizenzmodell weniger transparent als bei Mainstream-Anbietern
    sources:
      - id: businesswire-com-news-home-20260424174908-en-sovereign-ai-for-the-world-cohere-and-aleph-alpha-to-form-global-ai-powerhouse-as-nations-and-enterprises-demand-control-over-their-technology
  - id: mistral-ai-news-le-chat-enterprise
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: EU-souveraene Recherche-Plattform mit Deep-Research-Mode, Pariser Domizil und EU-only-Datenverarbeitung; on-prem/VPC-Option ueber Mistral Compute. Fuer DACH-Banken mit BaFin-Drittparteien-Pruefung und Public-Sector-BSI-Beschaffung der naheliegende Default. Likely missed by market scan because Mistral wird primaer als Modellanbieter wahrgenommen, nicht als 'Tech-Stack-Recherche-Tool'.
    caveats:
      - Deep Research noch in Preview — Tiefe geringer als ChatGPT/Gemini
      - Eco-System (Plugins, MCP-Konnektoren) duenner als bei US-Hyperscalern
      - Quellenabdeckung tendenziell schwaecher fuer englischsprachige Long-Tail-Frameworks
      - Praktiker-Reviews fuer Architekten-Workflow noch duenn
    sources:
      - id: mistral-ai-news-le-chat-dives-deep
      - id: hyperion-consulting-io-en-insights-mistral-ai-complete-guide-2026
  - id: blackduck-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: OSS-Compliance-Heavyweight in regulierten DACH-Branchen (Banken, Versicherer, Automotive); etablierte Beschaffungsspur, on-prem/SaaS-Optionen. KnowledgeBase mit 2.900+ Lizenzen und 8M+ Komponenten erkennt Dual-Licensing, Versions-spezifische Lizenzwechsel (z.B. Apache->AGPL) und embedded Snippets. Loest den Briefing-Caveat zu Lizenz-/Provenance-Risiken bei AI-vorgeschlagenen Bibliotheken.
    caveats:
      - Schwergewichtige Plattform — Setup/Onboarding-Aufwand
      - Lizenzkosten signifikant (~$50K-$200K+/Jahr laut unabhaengigen Quellen)
      - AI-/MCP-Integration neuer und weniger reif als Sonatype-MCP
      - Eher Compliance-Pflicht als Architekten-Komfort-Tool
      - Developer-Workflow weniger smooth als Snyk; Black Duck ist Security-/Legal-Team-getrieben
    sources:
      - id: blackduck-com
      - id: gartner-com-reviews-product-black-duck-software-composition-analysis
      - id: appsecsanta-com-sca-tools-black-duck-vs-snyk
      - id: itcentralstation-com-products-black-duck-sca-reviews
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: M365-Copilot-Researcher kombiniert OpenAI-Deep-Research, Bing-Index und EU-Data-Boundary; in DACH-Konzernen mit existierendem M365-E5-/Copilot-Vertrag der Pfad-des-geringsten-Widerstands fuer Architekten-Recherche. Critique-Modus (GPT generiert, Claude reviewt) hebt Trust-Niveau fuer regulierte Reports. Likely missed by market scan because Copilot Researcher wird als Suite-Feature im M365-Bundle vermarktet und taucht nicht in capability-only-Searches zu 'Tech-Stack-Eval' auf.
    caveats:
      - EU-Data-Boundary deckt nicht alle Sub-Prozessoren ab — Schrems-II- und CLOUD-Act-Restrisiko
      - Tiefere Frontier-Reports schwaecher als ChatGPT-Deep-Research-Direkt
      - Researcher-Output haengt stark an SharePoint/Graph-Indexqualitaet der Organisation
      - Web-Quellen werden ueber Bing-Filter geschoben — Bias zu Microsoft-Ecosystem-Quellen
      - Limitiert auf 25 Researcher+Analyst-Queries/Monat pro Lizenz
      - Critique/Council nur in Frontier-Programm — nicht General Availability
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Strukturierter Report in 10-15 min mit Domain-Constraints
        - Synthese ueber interne Docs+Web in einem Schritt
        - Critique-Modus erhoeht Faktentreue durch GPT/Claude-Cross-Review
      complaints:
        - Validation-Pass weiterhin manuell noetig
        - Output-Qualitaet abhaengig von Graph-/SharePoint-Daten
        - Tiefer als Chat, aber unter Frontier-Direkttools
    sources:
      - id: microsoft-com-en-us-microsoft-365-copilot-researcher
      - id: excellence-it-co-uk-insights-microsoft-copilot-researcher-agent
      - id: buckleyplanet-com-2025-12-copilot-agents-getting-real-work-done-with-the-researcher-agent
      - id: shimonifrah-com-2026-04-14-microsoft-critique-runs-two-ai-models-against-each-other-for-better-research-my-first-look
  - id: perplexity-ai-enterprise
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Mainstream-Recherchewerkzeug der DACH-Architekten fuer Discovery: Live-Web-Search loest die Versions-Staleness-Falle, Inline-Zitate erlauben Stichproben-Validierung, Sonar-API mit SimpleQA-F-Score 0.858 ist in eigene Vergleichs-Pipelines einbettbar. Enterprise-Tier mit GDPR-Zusagen und 'no-training on customer data' adressiert DACH-Mindestanforderungen, bleibt aber als US-Anbieter ohne EU-Default-Region CLOUD-Act-exponiert."
    caveats:
      - Keine garantierte EU-Datenresidenz im Default — fuer BaFin/BSI-regulierte Workloads DPA und Sub-Processor-Liste pruefen
      - Quellenmix gewichtet Reddit/Blogs ueber Primaerquellen — fuer regulierte Beschaffung manuelle Triage noetig
      - Lizenz-/Provenance-Pruefung wird nicht systematisch erzwungen
      - Sonar-Antworten nicht deterministisch reproduzierbar — Audit-Trail-Schwaeche
      - Sonar Deep Research ist Pay-per-Token ($2/$8 pro M Token) — Kosten skalieren mit Pipeline-Volume
    sources:
      - id: perplexity-ai-enterprise
      - id: lmmarketcap-com-model-sonar-deep-research
      - id: colinmcnamara-com-blog-perplexity-sonar-api-enterprise
      - id: multi-ai-ai-en-blog-perplexity-sonar-en
  - id: snyk-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Snyk Advisor liefert Health-Scores fuer Auswahlentscheidungen, License-Compliance kennzeichnet AGPL/SSPL/GPL-Probleme in Direct- und Transitive-Deps. Developer-first Workflow mit IDE/PR-Checks/Reachability hebt Adoption ueber Architekten- in Engineering-Teams. In DACH-Pipelines etabliert; EU-Region-Option vorhanden, aber nicht Default — DPA-Anpassung noetig.
    caveats:
      - License-Compliance nur in Enterprise-Plan
      - EU-Region nicht Default — explizit beschaffen
      - False-Positives koennen Architektur-Entscheidungen verzerren
      - Health-Daten fuer .NET/Java weniger umfangreich als npm/PyPI
      - Lizenz-Policy-Engine nur Allow/Flag/Block — Edge-Cases (Dual-License, versions-spezifische Wechsel) schwaecher als Black Duck/FOSSA
    sources:
      - id: docs-snyk-io-scan-with-snyk-snyk-open-source-scan-open-source-libraries-and-licenses-snyk-license-compliance-management
      - id: aicodereview-cc-blog-snyk-vs-black-duck
      - id: appsecsanta-com-sca-tools-open-source-license-compliance
  - id: sonatype-com-products-sonatype-lifecycle
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Etablierte Komponenten-Policy-Plattform in DACH-Banken/Versicherern. Sonatype Guide/MCP-Server (GA seit 03/2026) bringt deterministische Komponenten-, CVE- und Lizenz-Intelligence ohne Quellcode-Upload in Copilot/Claude/Codex-Workflows — laut InfoQ aktuell der einzige produktionsreife SCA-MCP-Server (Snyk nur experimentell). Schliesst genau den Briefing-Caveat (AGPL/SSPL-Blindspot). On-Prem/VPC-Deployment moeglich.
    caveats:
      - Voller Nutzen erst mit Lifecycle/Nexus-IQ-Lizenz
      - Datenresidenz/Hosting des MCP-Endpunkts pruefen
      - Lizenzmodell pro Anwendung kann fuer schnelle Spike-Vergleiche teuer wirken
      - Komponenten-/Paket-Ebene, kein generischer Architektur-Trade-off
      - MCP-Server jung — Toolset (getComponentVersion, getRecommendedComponentVersions) noch begrenzt
    sources:
      - id: guide-sonatype-com-mcp
      - id: infoq-com-news-2026-03-sonatype-guide-safety-mcp-server
      - id: github-com-sonatype-dependency-management-mcp-server
start_here: "Pilot mit ChatGPT Deep Research (Azure-OpenAI-EU-Region) starten: Kandidatenliste auf 3–5 Frameworks eingrenzen und eine eigene Bewertungsmatrix mit Performance-, Lizenz- und EU-Residenz-Spalten vorgeben statt offen nach einer Empfehlung zu fragen. FOSSA für die Shortlist einsetzen, um AGPL/SSPL-Konflikte und AI-generierte Snippet-Risiken vor der finalen Entscheidung systematisch zu klären."
caveats: LLMs prüfen Lizenz- und Provenance-Risiken (AGPL, SSPL) nur auf explizite Aufforderung — ohne ein dediziertes SCA-Tool bleibt dieser Blindspot in der Entscheidungsdokumentation bestehen. Framework-Versionswissen der LLMs kann ohne aktiven Web-Search-Modus veraltet sein; genannte Versionen und Kompatibilitäten sollten gegen offizielle Release-Notes validiert werden.
sources: []
---
