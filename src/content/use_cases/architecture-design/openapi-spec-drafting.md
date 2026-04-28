---
stage: architecture-design
order: 9
roles:
  - software-engineer
  - software-architect
title: OpenAPI-Spec entwerfen
goal_label: REST-/GraphQL-Spezifikationen aus Anforderungen generieren
suitability: good_fit
rationale: GitHub Copilot und SwaggerHub mit AI decken OpenAPI-Drafting mit belastbaren DACH-Verträgen ab — Copilot via EU-Data-Boundary, SwaggerHub optional OnPrem. Da OpenAPI eine strukturierte Zielform ist, liefert AI konsistente Erstentwürfe und macht den Spec-First-Ansatz auch für kleinere Teams wirtschaftlich.
tools:
  - id: continue-dev
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Open-Source-Coding-Assistent fuer VSCode/JetBrains; mit lokalen Modellen (Ollama) attraktiv fuer DACH-Datenschutz. OpenAPI-Specs als Custom-Context-Provider einbindbar.
    caveats:
      - Self-Hosting-Aufwand fuer lokale Modelle
      - Kein dedizierter Spec-Workflow
      - Kein Vendor-Support in OSS-Variante
      - Kein Vendor-Support-Vertrag in OSS-Variante
    sources:
      - id: continue-dev-continue-continue-dev
  - id: jetbrains-ai-assistant
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Im JetBrains-Stack erzeugt der Assistant kontextbezogen OpenAPI-YAML inkl. Konsistenzpruefung gegen Spring/Quarkus-Annotationen; Junie uebernimmt Spec-Refactorings als Mehrschritt-Aufgaben. EU-tauglicher Vendor.
    caveats:
      - Wert primaer im JetBrains-Oekosystem
      - Modell-Provider-Auswahl variiert je Konfiguration
      - Modell-Provider-Auswahl (Google, Anthropic) je Kunde unterschiedlich
      - AI-Modellqualitaet variiert je Provider-Backend
    sources:
      - id: jetbrains-ai-assistant-junie-jetbrains-jetbrains-com-ai
  - id: redocly-mit-ai-assist
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Redocly bietet Spec-First-Workflows mit Linting (Redocly CLI) und Doku-Portal; AI ergaenzt Beschreibungen und Snippet-Vorschlaege. Stark, wo Spec-Governance und Doku eng gekoppelt sind.
    caveats:
      - AI eher unterstuetzend als primaerer Generator
      - Volle Plattform vor allem fuer mittlere/grosse Teams attraktiv
      - AI-Reifegrad noch im Aufbau
      - AI eher unterstuetzend, nicht primaerer Generator
    sources:
      - id: redocly-mit-ai-assist-redocly
  - id: sourcegraph-cody
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Cody Enterprise mit Self-Host-Option ist in DACH-Konzernen Compliance-Vorteil; Code-Graph hilft, OpenAPI-Specs konsistent zu existierenden Domain-Modellen zu generieren.
    caveats:
      - Spec-Authoring nicht Hauptfokus
      - Self-Host-Aufwand nicht trivial
      - Volle Wirkung erst mit indexierter Codebasis
    sources:
      - id: sourcegraph-cody-sourcegraph-sourcegraph-com-cody
  - id: speakeasy
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Speakeasy verbessert OpenAPI-Specs (Linting, idiomatische Polishings) und generiert SDKs/Server-Stubs mit AI-Hilfe. Sinnvoll als Qualitaets-Layer nach AI-Drafting.
    caveats:
      - Eher Spec-Veredelung als Drafting from-scratch
      - Vendor relativ jung
      - Vendor jung — Roadmap- und Bestand-Risiko
      - Eher Spec-Veredelung als Spec-Generierung from-scratch
    sources:
      - id: speakeasy-speakeasy
  - id: microsoft-azure-api-center
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: API Center mit Copilot-Integration und VS-Code-Extension erlaubt AI-gestuetztes OpenAPI-Drafting im Microsoft-Stack; EU-Region-Hosting und vorhandener MS-DPA. Likely missed by market scan because positioned as Azure suite feature, not as a dedicated AI OpenAPI product.
    caveats:
      - Wert primaer in Azure-zentrischen Architekturen
      - API Center selbst ist juenger (GA 2024); Reifegrad waechst
      - AI-Features verteilen sich auf Copilot for Azure und Extensions
    sources:
      - id: microsoft-azure-api-center-microsoft
      - id: ms-azure-copilot-openapi-doc
  - id: mulesoft-anypoint-design-center
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: RAML-/OpenAPI-Designer mit Einstein/Agentforce-AI-Erweiterungen fuer Spec-Drafting; Salesforce-DPA, EU-Hosting und SOC2 vorhanden. In DACH-Konzernen mit MuleSoft-Plattform die natuerliche Wahl. Likely missed by market scan because positioned as suite feature within Anypoint, not marketed as standalone 'AI OpenAPI tool'.
    caveats:
      - Wert primaer mit existierender MuleSoft-Lizenz
      - AI-Reifegrad in Design Center juenger als in Flow Designer
      - Lock-in in Anypoint-Plattform
    sources:
      - id: mulesoft-anypoint-design-center-mulesoft
  - id: software-ag-webmethods-api-designer
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Deutscher Vendor (Darmstadt) mit OpenAPI-Designer in webMethods; AI-Assist seit 2024/2025 ergaenzt. In DACH-Konzernen oft schon im API-Management-Stack. Likely missed by market scan because Software AG is a DACH-only-prominent player not in typical English-language 'AI OpenAPI' shortlists.
    caveats:
      - Wert primaer mit existierender webMethods-Lizenz
      - AI-Features sind juenger als Kernprodukt
      - Vendor in Restrukturierung — Roadmap pruefen (IBM-Akquisition 2024)
    sources:
      - id: software-ag-webmethods-api-designer-softwareag
  - id: tyk
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: API-Gateway mit OpenAPI-First-Designer und 2025 ergaenzten AI-Features; Self-Host-Variante adressiert DACH-Datenschutz-Anforderungen direkt. Likely missed by market scan because Tyk is primarily known as gateway, not as AI OpenAPI tool.
    caveats:
      - Spec-Drafting-AI noch jung
      - Hauptwert liegt im Gateway, nicht im Designer
      - UK-Vendor; EU-Datenresidenz konfigurieren
    sources:
      - id: tyk-tyk
  - id: claude-code
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Repo-weites Spec-Refactoring durch starkes Long-Context-Verhalten; gut fuer Konsistenz-Checks zwischen Spec und Implementierung. Anthropic-Enterprise-DPA verfuegbar. Praxisartikel zeigen vollstaendige OpenAPI-3.0/3.1-Generierung aus Routes/Controllern inkl. Auth, Schemas und Beispielen.
    caveats:
      - Kein OnPrem; AWS/GCP-Region klaeren
      - Token-Kosten bei grossen Repos
      - DACH-Lokalisierung promptseitig erzwingen
      - Kein EU-only-Hosting — Vertrag mit AWS/GCP-Region klaeren
      - Token-Kostenmodell fuer Repos im Vorfeld budgetieren
      - Cloud-only; on-prem nicht verfuegbar
      - DACH-Lokalisierung promptseitig forcieren
    sources:
      - id: claude-code-claude-claude-com-product-claude-code
      - id: recombobulate-claude-openapi
      - id: lowcode-claude-openapi
  - id: cursor
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Cursor erlaubt Repo-weites Editieren von OpenAPI-Specs samt Mock und Server-Stub; Composer-Modus fuer mehrdateilige Konsistenz. Cursor Business mit Privacy-Mode reduziert Datenrisiko. MuleSoft-Developer-Advocate-Demo und Apidog-Tutorial belegen produktiven OpenAPI-YAML-Workflow inkl. Cursor-Rules-Konventionen.
    caveats:
      - Datenresidenz und Code-Indexing klaeren
      - Modell-Backend ist weiterer Subprocessor
      - Kein Spec-Linting eingebaut
      - Code-Indexing Datenfluesse explizit klaeren
      - Modell-Backends (OpenAI, Anthropic) als weitere Subprocessor-Stufe
      - Pro-Lizenz fuer Frontier-Modelle noetig
      - Spec-spezifisches Linting nicht eingebaut
    sources:
      - id: cursor-cursor-cursor-com
      - id: mulesoft-cursor-openapi-demo
      - id: apidog-cursor-openapi
  - id: copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Copilot Enterprise/Business mit DPA und EU-Data-Boundary ist in DACH-Konzernen ausgerollt; generiert OpenAPI-YAML/JSON mit Repo-Kontext im Workspace-Modus. Microsoft-Learn dokumentiert API-Center-Plugin fuer Copilot-OpenAPI-Generierung; SAS-Communities zeigt produktiven Spec-/Modell-Workflow. Niedrige Einfuehrungshuerde, da Microsoft-Vertragsstack meist vorhanden.
    caveats:
      - Spec-Linting (Spectral/Redocly) extern ergaenzen
      - Betriebsrats-Mitbestimmung wegen Telemetrie
      - Generierte Specs replizieren US-Konventionen — DACH-Lokalisierung explizit prompten
      - OpenAPI-Linting/Spectral muss extern integriert werden
      - Betriebsrats-Mitbestimmung beachten (Telemetrie)
      - Generierte Specs oft happy-path; Edge-Cases manuell ergaenzen
      - DACH-Konventionen muessen explizit geprompted werden
      - Kein dediziertes Spec-Linting out-of-the-box
    sources:
      - id: github-copilot-github
      - id: ms-azure-copilot-openapi-doc
      - id: sas-copilot-openapi
      - id: github-docs-document-api-prompt
  - id: kong-insomnia-ai-runner-api-dev
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Kong Insomnia hat starkes OpenAPI-Editor- und Linting-Erbe; Insomnia 12 ergaenzt AI-Mock-Generierung aus NL/JSON/OpenAPI sowie AI-Commit-Messages. Optionales Local-LLM adressiert DACH-Datenschutz. Im Briefing explizit genannt. Downgrade von good_fit, weil unabhaengige Quellen (InfoWorld, Kong-eigener Engineering-Blog) zeigen, dass die AI-Features primaer auf Mocks/Tests/Commits zielen — Spec-Drafting from-scratch laeuft im Kong-Workflow eher ueber externe LLMs (z. B. ChatGPT) und wird in Insomnia gelintert.
    caveats:
      - AI-Spec-Drafting-Feature nicht das primaere Verkaufsversprechen — Mocks/Tests/Commits stehen im Vordergrund
      - AI-Features benoetigen Cloud-Backend — fuer streng on-prem-only Kunden problematisch
      - Kong Konnect EU-Region pruefen
      - Volle AI-Features oft nur in bezahlten Tiers
      - Fokus auf REST/OpenAPI; GraphQL nur sekundaer
      - Generierte Specs replizieren US-Konventionen
    sources:
      - id: kong-insomnia-ai-runner-api-dev-insomnia-rest
      - id: infoworld-insomnia12
      - id: kong-chatgpt-openapi-blog
  - id: postman-postbot-ai-spec-builder
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Postman Enterprise mit SOC2/ISO27001 ist Marktstandard fuer API-Workflows; Spec Hub erzeugt OpenAPI 2.0/3.0/3.1 aus typisierten Collections, Postbot/Agent Mode unterstuetzen dabei. Breite Verbreitung reduziert Adoptionsrisiko. Downgrade von good_fit, weil unabhaengige Quellen (TestingDocs) zeigen, dass Postbot primaer fuer Test-Skript-Generierung positioniert ist und Postman-Doku selbst die OpenAPI-Generierung als deterministischen Collection-zu-Spec-Schritt beschreibt — der AI-Anteil im Spec-Drafting bleibt inkrementell.
    caveats:
      - Spec-Generierung im Kern deterministisch aus Collection — AI-Anteil eher in Beschreibungen/Tests
      - Postbot nutzt externe LLM-Provider — Subprocessor-Chain dokumentieren
      - Cloud-Pflicht bei AI-Features
      - Lock-in in Postman Workspaces
      - Postbot nutzt OpenAI/Anthropic im Hintergrund — Subprocessor-Chain dokumentieren
      - "Nach 2023-Security-Vorfall: Compliance-Posture bei DACH-Banken explizit pruefen"
      - Cloud-First; on-prem Optionen nur in hoeheren Tiers
      - Spec-Qualitaet stark prompt-abhaengig
    sources:
      - id: postman-postbot-ai-spec-builder-postman
      - id: postman-spec-hub-generate-spec-doc
      - id: testingdocs-postbot
  - id: swaggerhub-mit-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: SwaggerHub inkl. OnPrem-Variante ist Defacto-Standard fuer OpenAPI-Authoring in DACH-Banken/Versicherungen; Swagger-Studio-AI generiert OpenAPI-/AsyncAPI-Definitionen aus NL-Prompts und aus bis zu 20 Source-Code-Dateien (Java/JS/TS/Python) und validiert direkt gegen Spectral-Style-Guides. Governance- und Style-Guide-Features sind reif.
    caveats:
      - AI eher inkrementell, nicht der Hauptantrieb
      - Pricing fuer kleine Teams unattraktiv
      - Konsolidierungsrisiko mit Stoplight-Erbe nach SmartBear-Akquisition
      - AI-Funktionen sind echt, aber inkrementell — nicht die Hauptstaerke
      - OnPrem-Tier teuer, aber existent
      - AI-Features eher inkrementell, nicht generativer Hauptantrieb
      - UI-Reife schwaecher als bei jueengeren Wettbewerbern
    sources:
      - id: swaggerhub-mit-ai-swagger
      - id: swaggerhub-design-with-ai-docs
      - id: swaggerhub-generate-api-from-code
      - id: letsdatascience-swaggerhub-ai
  - id: theneo
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Theneo-AI generiert Stripe-aehnliche Doku, Endpoint-/Parameter-Beschreibungen, Beispiele und Code-Samples aus bestehenden OpenAPI-/Postman-/GraphQL-Specs; Spec-Drafting in der Plattform ist eher manuell. Im Briefing explizit erwaehnt. Downgrade von good_fit, weil unabhaengige Reviews (GTM Tools, Aijet) Theneo eindeutig als Doku-Generator (Spec -> Doku) positionieren, nicht als NL-zu-OpenAPI-Drafter.
    caveats:
      - Hauptwert ist Doku-Generierung, nicht Spec-Authoring from-scratch
      - Keine bekannten DACH-Referenzkunden
      - Datenresidenz/Subprocessor-Liste vor Pilot pruefen
      - Eher Doku-zentrisch als Spec-Authoring
      - Fokus eher auf Doku-Generierung als auf reines Spec-Authoring
      - DACH-Lokalisierung muss manuell nachgezogen werden
      - Eingeschraenkte Self-Host-Optionen
    sources:
      - id: theneo-theneo
      - id: gtmtools-theneo-review
      - id: aijet-theneo-review
start_here: Wer Copilot bereits im Unternehmen nutzt, startet mit einem Workspace-Prompt auf einer abgegrenzten Ressource und versioniert die Spec direkt im Repo. SwaggerHub ist die bessere Wahl, wenn Style-Guide-Governance oder OnPrem-Betrieb im Vordergrund stehen — Spectral-Linting ist dort direkt integriert.
caveats: Generierte Specs folgen standardmäßig US-Konventionen; DACH-spezifische Felder wie IBAN, Steuer-ID und ISO-3166-Ländercodes müssen im Prompt explizit eingefordert werden. Schemas decken in der Regel nur den Happy Path ab — Fehlermodelle und Edge Cases bleiben manuelle Aufgabe.
sources: []
---
