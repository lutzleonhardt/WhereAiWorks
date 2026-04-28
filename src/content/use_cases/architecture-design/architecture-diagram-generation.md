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
  - id: plantuml-mit-c4-plantuml
    fit: good_fit
    sources:
      - id: plantuml-mit-c4-plantuml-plantuml
      - id: plantuml-mit-c4-plantuml-github
    why_it_fits: "OSS-Standard fuer textbasierte UML/Sequenz-/Komponentendiagramme; mit C4-PlantUML auch C4. Vollstaendig lokal lauffaehig, kombiniert mit IDE-LLM (Claude Code/Cursor Enterprise) der DACH-konforme Default-Pfad ohne Datenabfluss. Einschränkung: AI-Komponente kommt aus dem Coding-Assistant, nicht aus PlantUML selbst. Enterprise-Reifegrad: enterprise_ready."
  - id: icepanel
    fit: conditional
    sources:
      - id: icepanel-icepanel
    why_it_fits: "Kollaboratives C4-Tool mit Drill-Down von Context bis Component und neueren AI-Vorschlaegen aus Beschreibung. Gute Wahl fuer Architekt-Teams, die nicht textbasiert arbeiten wollen, aber C4 ernst nehmen. Einschränkung: SaaS — DACH-Datensouveraenitaet nur in Enterprise-Tier. Enterprise-Reifegrad: team_ready."
  - id: multiplayer-app
    fit: conditional
    sources:
      - id: multiplayer-app-multiplayer-app
    why_it_fits: "Plattform fuer System-Design und Architektur-Dokumentation mit AI-Generierung von Komponenten- und Sequenzdiagrammen; Fokus auf verteilte Microservice-Systeme mit Verknuepfung zu Live-Telemetrie. Einschränkung: Junge Firma, Enterprise-Track-Record duenn. Enterprise-Reifegrad: evaluation_only."
  - id: aris-software-ag
    fit: partial
    sources:
      - id: aris-software-ag-softwareag
    why_it_fits: "Deutsches EAM-/BPM-Schwergewicht (Darmstadt), in DACH-Banken/Versicherungen seit Jahrzehnten etabliert; ARIS AI Companion erzeugt Prozess- und Architekturmodelle aus Klartext. Likely missed by market scan because ARIS ist eine BPM-/EAM-Suite, kein dediziertes Diagramm-Tool — und die AI-Funktion wird als Companion innerhalb der Suite vermarktet. Einschränkung: Schwerpunkt BPMN/Prozesse, Software-Architektur (C4) ist Sekundaeranwendung. Enterprise-Reifegrad: enterprise_ready."
  - id: leanix-sap
    fit: partial
    sources:
      - id: leanix-sap-leanix-net
    why_it_fits: "Enterprise-Architecture-Management-Suite mit deutschen Wurzeln (Bonn) und seit 2023 SAP-Mutter; AI-Assistenten generieren Anwendungs-/Capability-Landkarten und Beziehungs-Diagramme aus Beschreibungen. Likely missed by market scan because LeanIX positioniert sich als EAM-Suite und nicht als 'Diagramm-Generator' — taucht in capability-only Searches nicht auf. Einschränkung: Kein C4/Komponenten-/Sequenz-Diagramm im Sinne von Software-Architektur — Fokus ist Business-/Application-Capability-Landschaft. Enterprise-Reifegrad: enterprise_ready."
  - id: sparx-enterprise-architect
    fit: conditional
    sources:
      - id: sparx-enterprise-architect-sparxsystems
    why_it_fits: "In DACH (Automotive, Behoerden, Banken) etabliertes UML/SysML/ArchiMate-Schwergewicht mit Pro-Cloud-Server (on-prem) und seit v17 AI-Assistant fuer Modell- und Diagrammvorschlaege. Likely missed by market scan because positioned als klassisches Modeling-Tool, nicht als 'AI'-Produkt — und stark in regulierten DACH-Branchen verankert. Einschränkung: Schwergewichts-Tool mit hoher Lernkurve. Enterprise-Reifegrad: enterprise_ready."
  - id: c4-dsl-vs-code-extension-structurizr-dsl-c4-plantuml
    fit: good_fit
    sources:
      - id: c4-dsl-vs-code-extension-structurizr-dsl-c4-plantuml-visualstudio
      - id: c4-dsl-vs-code-extension-structurizr-community
      - id: c4-dsl-vs-code-extension-michaeltschreiber
    why_it_fits: "VS-Code-Extension fuer Structurizr-DSL/C4-PlantUML mit Live-Preview. Komplettiert den DACH-konformen Workflow: Klartext-Prompt -> versionierbarer DSL-Code -> lokale Preview. Independent OSS-Projekte kombinieren die Extension bereits explizit mit Coding-LLMs fuer C4-Generierung. Einschränkung: Kein eigenes AI-Feature — auf Coding-Assistant angewiesen. Enterprise-Reifegrad: team_ready."
  - id: chatgpt-openai
    fit: good_fit
    sources:
      - id: chatgpt-mit-mermaid-canvas-openai
      - id: chatgpt-mit-mermaid-canvas-devto-barakplasma
      - id: chatgpt-mit-mermaid-canvas-daveengineer
    why_it_fits: "ChatGPT erzeugt Mermaid/PlantUML zuverlaessig; Canvas rendert Mermaid inline. Mit Enterprise/Team-Tier DSGVO-konform und niedrige Einstiegshuerde fuer Architekten ohne IDE-Workflow. Mehrere unabhaengige Praktiker-Berichte bestaetigen den Workflow Klartext -> Mermaid -> Architekturdiagramm. Einschränkung: Diagramm-Rendering ausserhalb Canvas-Mode nicht inline. Enterprise-Reifegrad: enterprise_ready."
  - id: claude-code
    fit: good_fit
    sources:
      - id: claude-code-claude
      - id: claude-code-anthropic-smeuse
      - id: claude-code-anthropic-kindredintelligence
    why_it_fits: "Claude erzeugt nachweislich hochwertigen Mermaid-, PlantUML- und Structurizr-DSL-Code aus Klartext. Im Terminal/IDE direkt versionierbar, ueber Enterprise/Bedrock DSGVO-konform. Independent Reviews bestaetigen die Eignung fuer Reasoning-/Architektur-Aufgaben. Einschränkung: Diagrammgenerierung nicht spezialisiert — Prompt-Engineering noetig. Enterprise-Reifegrad: enterprise_ready."
  - id: cursor
    fit: good_fit
    sources:
      - id: cursor-cursor-cursor-com
      - id: cursor-skywork
      - id: cursor-similarlabs
    why_it_fits: "AI-IDE mit Codebase-Awareness; gute DSL-Generierung aus Repo-Kontext. Enterprise-Plan mit Privacy-Mode/ZDR ist DACH-tauglich (SOC-2-Type-II). Unabhaengige Reviews bestaetigen Repo-weite Refactors und Multi-File-Editing. Einschränkung: Diagramm-Preview nicht eingebaut — externer Renderer noetig. Enterprise-Reifegrad: enterprise_ready."
  - id: eraser-diagramgpt
    fit: good_fit
    sources:
      - id: eraser-diagramgpt-eraser
      - id: eraser-diagramgpt-devto-tkssharma
      - id: eraser-diagramgpt-meechward
    why_it_fits: "Spezialisiertes Web-Tool, das aus Klartext oder Code Architektur-, Sequenz-, ER- und Cloud-Diagramme erzeugt. Output in Mermaid und eigenem Eraser-DSL — versionierbar und in Notion/Confluence einbettbar. Independent Praktiker-Reviews bestaetigen Qualitaet der AI-Generierung. Einschränkung: SaaS-only, Daten verlassen DACH-Cloud — fuer KRITIS/BAIT pruefen. Enterprise-Reifegrad: team_ready."
  - id: excalidraw-excalidraw-ai
    fit: good_fit
    sources:
      - id: excalidraw-excalidraw-ai-excalidraw
      - id: excalidraw-excalidraw-ai-medium
      - id: excalidraw-excalidraw-ai-ifb
    why_it_fits: "OSS-Whiteboard mit AI-Mode (text-to-Mermaid). Selbst-host-faehig, daher DACH-konform einsetzbar; beliebt fuer schnelle Architektur-Skizzen mit handgezeichnetem Look. Independent Practitioner-Berichte zeigen Workflow und Limits. Einschränkung: Kein natives C4 — Mermaid-Bridge. Enterprise-Reifegrad: team_ready."
  - id: copilot
    fit: good_fit
    sources:
      - id: github-copilot-chat-debug-mode-github
      - id: github-copilot-chat-mermaid-cookbook
      - id: github-copilot-chat-dontpaniclabs
    why_it_fits: "Copilot Chat erzeugt Mermaid- und PlantUML-Code im IDE-Kontext und kann bestehende Codebasis fuer Reverse-Architekturdiagramme analysieren. Mit Copilot Enterprise/Business DSGVO-konform. Independent Practitioner-Blog demonstriert produktive Mermaid-Generierung via Copilot SDK. Einschränkung: Kein dediziertes Diagramm-Tooling, reine LLM-Generierung. Enterprise-Reifegrad: enterprise_ready."
  - id: mermaid-open-source
    fit: good_fit
    sources:
      - id: mermaid-open-source-js
      - id: mermaid-open-source-korny
      - id: claude-code-anthropic-kindredintelligence
    why_it_fits: "OSS-DSL, die in GitHub, GitLab, Azure DevOps und IDE-Markdown nativ rendert. LLMs erzeugen Mermaid sehr zuverlaessig — die DACH-konforme Code-as-Diagram-Variante des Use Cases. Independent Practitioner-Vergleiche dokumentieren breite Plattform-Unterstuetzung. Einschränkung: C4-Support via mermaid-c4 weniger ausdrucksstark als C4-PlantUML. Enterprise-Reifegrad: enterprise_ready."
  - id: mermaid-chart-ai
    fit: conditional
    sources:
      - id: mermaid-chart-ai-mermaidchart
      - id: mermaid-chart-ai-mermaideditor
    why_it_fits: "Offizielles SaaS-Frontend zum OSS-Mermaid-Projekt mit AI-Chat fuer DSL-Generierung; Output ist versionierbar und in Markdown/Confluence/GitHub renderbar. Enterprise-Tier mit SSO verfuegbar. Einschränkung: AI-Funktionen ueber externe LLM-Provider, unabhaengige Praktiker-Evidenz fuer das AI-Feature noch duenn — fuer DACH-Datenklassifikation gesondert pruefen. Reviewed downgrade von good_fit -> conditional wegen fehlender starker unabhaengiger Belege fuer die AI-Funktionen. Enterprise-Reifegrad: team_ready."
  - id: structurizr
    fit: good_fit
    sources:
      - id: structurizr-structurizr
      - id: structurizr-watzek
      - id: structurizr-nicholasrogoff
    why_it_fits: "Referenzwerkzeug fuer das C4-Modell mit DSL und On-Premises-Variante. LLM-Coding-Tools generieren Structurizr-DSL sehr zuverlaessig — der DACH-konforme Pfad fuer professionelles C4 mit lokaler Datenhoheit. Independent Praktiker-Berichte (Watzek, Rogoff) bestaetigen Reife und Workflow. Einschränkung: AI-Generierung nicht im Tool selbst — kommt aus dem Code-Assistant. Enterprise-Reifegrad: enterprise_ready."
start_here: "Pilot mit Claude Code (Enterprise/Bedrock) und der C4-DSL VS Code Extension starten: Klartext-Beschreibung → Structurizr-DSL → lokale Preview, alles im Repo versioniert. ChatGPT mit Canvas ist die einstiegsärmere Alternative für Architekten ohne IDE-Workflow."
caveats: "SaaS-Diagramm-Tools laden Architekturskizzen in externe Clouds — für klassifizierte Systeme (KRITIS, BAIT) ungeeignet; der DACH-konforme Pfad bleibt lokales Mermaid/Structurizr-DSL mit Enterprise-LLM. Die AI-Generierung liefert keine semantische Korrektheit: Diagramme müssen nach der Generierung inhaltlich abgenommen werden."
sources: []
---
