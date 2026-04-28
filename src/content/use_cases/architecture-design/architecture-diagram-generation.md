---
stage: architecture-design
order: 6
roles:
  - software-engineer
  - software-architect
title: Architektur-Diagramme generieren
goal_label: C4-, Sequenz- und Komponentendiagramme aus Klartext erzeugen
suitability: good_fit
rationale: Claude Code und ChatGPT erzeugen Mermaid-, PlantUML- und Structurizr-DSL zuverlässig aus Klartext-Prompts; die C4-DSL VS Code Extension schließt den Workflow mit Live-Preview direkt im Repo. Architekturdiagramme entstehen so als versionierbarer Code ohne Medienbruch und ohne dedizierte Diagrammsoftware.
tools:
  - id: plantuml-com
    fit: good_fit
    sources:
      - id: plantuml-com
      - id: github-com-plantuml-stdlib-c4-plantuml
    why_it_fits: "OSS-Standard fuer textbasierte UML/Sequenz-/Komponentendiagramme; mit C4-PlantUML auch C4. Vollstaendig lokal lauffaehig, kombiniert mit IDE-LLM (Claude Code/Cursor Enterprise) der DACH-konforme Default-Pfad ohne Datenabfluss. Einschränkung: AI-Komponente kommt aus dem Coding-Assistant, nicht aus PlantUML selbst."
    enterprise_readiness: enterprise_ready
  - id: icepanel-io
    fit: conditional
    sources:
      - id: icepanel-io
    why_it_fits: "Kollaboratives C4-Tool mit Drill-Down von Context bis Component und neueren AI-Vorschlaegen aus Beschreibung. Gute Wahl fuer Architekt-Teams, die nicht textbasiert arbeiten wollen, aber C4 ernst nehmen. Einschränkung: SaaS — DACH-Datensouveraenitaet nur in Enterprise-Tier."
    enterprise_readiness: team_ready
  - id: multiplayer-app
    fit: conditional
    sources:
      - id: multiplayer-app
    why_it_fits: "Plattform fuer System-Design und Architektur-Dokumentation mit AI-Generierung von Komponenten- und Sequenzdiagrammen; Fokus auf verteilte Microservice-Systeme mit Verknuepfung zu Live-Telemetrie. Einschränkung: Junge Firma, Enterprise-Track-Record duenn."
    enterprise_readiness: evaluation_only
  - id: softwareag-com-en-corporate-platform-aris-html
    fit: partial
    sources:
      - id: softwareag-com-en-corporate-platform-aris-html
    why_it_fits: "Deutsches EAM-/BPM-Schwergewicht (Darmstadt), in DACH-Banken/Versicherungen seit Jahrzehnten etabliert; ARIS AI Companion erzeugt Prozess- und Architekturmodelle aus Klartext. Likely missed by market scan because ARIS ist eine BPM-/EAM-Suite, kein dediziertes Diagramm-Tool — und die AI-Funktion wird als Companion innerhalb der Suite vermarktet. Einschränkung: Schwerpunkt BPMN/Prozesse, Software-Architektur (C4) ist Sekundaeranwendung."
    enterprise_readiness: enterprise_ready
  - id: leanix-net
    fit: partial
    sources:
      - id: leanix-net-en-products-enterprise-architecture-management
    why_it_fits: "Enterprise-Architecture-Management-Suite mit deutschen Wurzeln (Bonn) und seit 2023 SAP-Mutter; AI-Assistenten generieren Anwendungs-/Capability-Landkarten und Beziehungs-Diagramme aus Beschreibungen. Likely missed by market scan because LeanIX positioniert sich als EAM-Suite und nicht als 'Diagramm-Generator' — taucht in capability-only Searches nicht auf. Einschränkung: Kein C4/Komponenten-/Sequenz-Diagramm im Sinne von Software-Architektur — Fokus ist Business-/Application-Capability-Landschaft."
    enterprise_readiness: enterprise_ready
  - id: sparxsystems-com
    fit: conditional
    sources:
      - id: sparxsystems-com-products-ea
    why_it_fits: "In DACH (Automotive, Behoerden, Banken) etabliertes UML/SysML/ArchiMate-Schwergewicht mit Pro-Cloud-Server (on-prem) und seit v17 AI-Assistant fuer Modell- und Diagrammvorschlaege. Likely missed by market scan because positioned als klassisches Modeling-Tool, nicht als 'AI'-Produkt — und stark in regulierten DACH-Branchen verankert. Einschränkung: Schwergewichts-Tool mit hoher Lernkurve."
    enterprise_readiness: enterprise_ready
  - id: marketplace-visualstudio-com-items-itemname-systemticks-c4-dsl-extension
    fit: good_fit
    sources:
      - id: marketplace-visualstudio-com-items-itemname-systemticks-c4-dsl-extension
      - id: docs-structurizr-com-community
      - id: github-com-michaeltschreiber-c4-structurizr-llm-assistant
    why_it_fits: "VS-Code-Extension fuer Structurizr-DSL/C4-PlantUML mit Live-Preview. Komplettiert den DACH-konformen Workflow: Klartext-Prompt -> versionierbarer DSL-Code -> lokale Preview. Independent OSS-Projekte kombinieren die Extension bereits explizit mit Coding-LLMs fuer C4-Generierung. Einschränkung: Kein eigenes AI-Feature — auf Coding-Assistant angewiesen."
    enterprise_readiness: team_ready
  - id: chatgpt-com
    fit: good_fit
    sources:
      - id: openai-com-enterprise
      - id: dev-to-barakplasma-chatgpt-can-draw-system-architecture-diagrams-using-mermaid-34p6
      - id: dave-engineer-blog-2024-04-creating-diagrams-with-chatgpt
    why_it_fits: "ChatGPT erzeugt Mermaid/PlantUML zuverlaessig; Canvas rendert Mermaid inline. Mit Enterprise/Team-Tier DSGVO-konform und niedrige Einstiegshuerde fuer Architekten ohne IDE-Workflow. Mehrere unabhaengige Praktiker-Berichte bestaetigen den Workflow Klartext -> Mermaid -> Architekturdiagramm. Einschränkung: Diagramm-Rendering ausserhalb Canvas-Mode nicht inline."
    enterprise_readiness: enterprise_ready
  - id: claude-com-product-claude-code
    fit: good_fit
    sources:
      - id: docs-claude-com-en-docs-claude-code-overview
      - id: smeuse-org-posts-claude-code-review-2026
      - id: kindredintelligence-com-reviews-mermaid-diagramming-tool
    why_it_fits: "Claude erzeugt nachweislich hochwertigen Mermaid-, PlantUML- und Structurizr-DSL-Code aus Klartext. Im Terminal/IDE direkt versionierbar, ueber Enterprise/Bedrock DSGVO-konform. Independent Reviews bestaetigen die Eignung fuer Reasoning-/Architektur-Aufgaben. Einschränkung: Diagrammgenerierung nicht spezialisiert — Prompt-Engineering noetig."
    enterprise_readiness: enterprise_ready
  - id: cursor-com
    fit: good_fit
    sources:
      - id: cursor-com
      - id: skywork-ai-blog-cursor-ai-review-2025-agent-refactors-privacy
      - id: similarlabs-com-blog-cursor-review
    why_it_fits: "AI-IDE mit Codebase-Awareness; gute DSL-Generierung aus Repo-Kontext. Enterprise-Plan mit Privacy-Mode/ZDR ist DACH-tauglich (SOC-2-Type-II). Unabhaengige Reviews bestaetigen Repo-weite Refactors und Multi-File-Editing. Einschränkung: Diagramm-Preview nicht eingebaut — externer Renderer noetig."
    enterprise_readiness: enterprise_ready
  - id: eraser-io-diagramgpt
    fit: good_fit
    sources:
      - id: eraser-io-diagramgpt
      - id: dev-to-tkssharma-diagramgpt-review-of-eraser-ai-l3i
      - id: youtube-com-watch-v-tz84qah-7bm
    why_it_fits: "Spezialisiertes Web-Tool, das aus Klartext oder Code Architektur-, Sequenz-, ER- und Cloud-Diagramme erzeugt. Output in Mermaid und eigenem Eraser-DSL — versionierbar und in Notion/Confluence einbettbar. Independent Praktiker-Reviews bestaetigen Qualitaet der AI-Generierung. Einschränkung: SaaS-only, Daten verlassen DACH-Cloud — fuer KRITIS/BAIT pruefen."
    enterprise_readiness: team_ready
  - id: excalidraw-com
    fit: good_fit
    sources:
      - id: plus-excalidraw-com-blog-ai-diagrams
      - id: medium-com-venn5708-excalidraw-open-sources-its-text-to-diagram-feature-3810169df601
      - id: ifb-me-en-blog-en-backend-excalidraw
    why_it_fits: "OSS-Whiteboard mit AI-Mode (text-to-Mermaid). Selbst-host-faehig, daher DACH-konform einsetzbar; beliebt fuer schnelle Architektur-Skizzen mit handgezeichnetem Look. Independent Practitioner-Berichte zeigen Workflow und Limits. Einschränkung: Kein natives C4 — Mermaid-Bridge."
    enterprise_readiness: team_ready
  - id: github-com-features-copilot
    fit: good_fit
    sources:
      - id: docs-github-com-en-copilot-using-github-copilot-asking-github-copilot-questions-in-your-ide
      - id: docs-github-com-en-copilot-tutorials-copilot-chat-cookbook-communicate-effectively-creating-diagrams
      - id: dontpaniclabs-com-blog-post-2026-03-31-building-with-the-github-copilot-sdk-part-4-building-mermaid-js-diagrams
    why_it_fits: "Copilot Chat erzeugt Mermaid- und PlantUML-Code im IDE-Kontext und kann bestehende Codebasis fuer Reverse-Architekturdiagramme analysieren. Mit Copilot Enterprise/Business DSGVO-konform. Independent Practitioner-Blog demonstriert produktive Mermaid-Generierung via Copilot SDK. Einschränkung: Kein dediziertes Diagramm-Tooling, reine LLM-Generierung."
    enterprise_readiness: enterprise_ready
  - id: mermaid-js-org
    fit: good_fit
    sources:
      - id: mermaid-js-org
      - id: blog-korny-info-2025-03-14-mermaid-js-revisited
      - id: kindredintelligence-com-reviews-mermaid-diagramming-tool
    why_it_fits: "OSS-DSL, die in GitHub, GitLab, Azure DevOps und IDE-Markdown nativ rendert. LLMs erzeugen Mermaid sehr zuverlaessig — die DACH-konforme Code-as-Diagram-Variante des Use Cases. Independent Practitioner-Vergleiche dokumentieren breite Plattform-Unterstuetzung. Einschränkung: C4-Support via mermaid-c4 weniger ausdrucksstark als C4-PlantUML."
    enterprise_readiness: enterprise_ready
  - id: mermaidchart-com
    fit: conditional
    sources:
      - id: mermaidchart-com
      - id: mermaideditor-com-blog-mermaid-vs-plantuml-vs-drawio
    why_it_fits: "Offizielles SaaS-Frontend zum OSS-Mermaid-Projekt mit AI-Chat fuer DSL-Generierung; Output ist versionierbar und in Markdown/Confluence/GitHub renderbar. Enterprise-Tier mit SSO verfuegbar. Einschränkung: AI-Funktionen ueber externe LLM-Provider, unabhaengige Praktiker-Evidenz fuer das AI-Feature noch duenn — fuer DACH-Datenklassifikation gesondert pruefen. Reviewed downgrade von good_fit -> conditional wegen fehlender starker unabhaengiger Belege fuer die AI-Funktionen."
    enterprise_readiness: team_ready
  - id: structurizr-com
    fit: good_fit
    sources:
      - id: structurizr-com
      - id: watzek-dev-posts-2023-03-30-beautiful-architecture-diagrams
      - id: nicholasrogoff-com-2024-09-13-a-guide-to-getting-started-with-c4-diagrams-and-structurizr
    why_it_fits: "Referenzwerkzeug fuer das C4-Modell mit DSL und On-Premises-Variante. LLM-Coding-Tools generieren Structurizr-DSL sehr zuverlaessig — der DACH-konforme Pfad fuer professionelles C4 mit lokaler Datenhoheit. Independent Praktiker-Berichte (Watzek, Rogoff) bestaetigen Reife und Workflow. Einschränkung: AI-Generierung nicht im Tool selbst — kommt aus dem Code-Assistant."
    enterprise_readiness: enterprise_ready
start_here: "Pilot mit Claude Code (Enterprise/Bedrock) und der C4-DSL VS Code Extension starten: Klartext-Beschreibung → Structurizr-DSL → lokale Preview, alles im Repo versioniert. ChatGPT mit Canvas ist die einstiegsärmere Alternative für Architekten ohne IDE-Workflow."
caveats: "SaaS-Diagramm-Tools laden Architekturskizzen in externe Clouds — für klassifizierte Systeme (KRITIS, BAIT) ungeeignet; der DACH-konforme Pfad bleibt lokales Mermaid/Structurizr-DSL mit Enterprise-LLM. Die AI-Generierung liefert keine semantische Korrektheit: Diagramme müssen nach der Generierung inhaltlich abgenommen werden."
sources: []
---
