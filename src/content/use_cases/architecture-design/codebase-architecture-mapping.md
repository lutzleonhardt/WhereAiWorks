---
stage: architecture-design
order: 3
roles:
  - software-engineer
  - software-architect
title: Codebase-Architektur kartieren
goal_label: Bestehende Codebasis in Architektur-Übersicht überführen
suitability: good_fit
rationale: CAST Imaging und Claude Code bedienen diesen Use Case mit nachgewiesenen DACH-Enterprise-Referenzen — CAST für COBOL/PL/I/Java/.NET-Bestand on-prem, Claude Code via Bedrock eu-central-1 für agentische Codebase-Exploration unter BAIT-/VAIT-Anforderungen. Für Banken, Versicherungen und Behörden mit gewachsenem Legacy ist automatisierte Architektur-Discovery heute der einzige skalierbare Einstieg in Modernisierungsvorhaben.
tools:
  - id: deepwiki-com
    fit: conditional
    sources:
      - id: deepwiki-com
    why_it_fits: "Output-Format (Modul-Diagramme, Datenfluss, Q&A-Wiki) trifft den Use-Case exakt. Für DACH-Enterprise nur als Evaluierung interessant, bis Cognition eine dokumentierte EU-Hosting-Story für die Enterprise-Variante liefert. Einschränkung: Free-Tier nur öffentliche Repos — Datenabfluss."
    enterprise_readiness: evaluation_only
  - id: github-com-features-copilot
    fit: conditional
    sources:
      - id: docs-github-com-en-copilot-using-github-copilot-asking-github-copilot-questions-in-your-ide
    why_it_fits: "Für DACH-Kunden, die GitHub Enterprise Cloud bereits einsetzen, ist Copilot Enterprise mit EU Data Boundary der pragmatische Pfad zu Architektur-Q&A. Kein Diagramm-Export, aber sofort verfügbare Repo-Awareness ohne Zusatztoolchain. Einschränkung: Architektur-Übersicht nur via Chat, kein Diagramm-Export."
    enterprise_readiness: enterprise_ready
  - id: ibm-com-products-watsonx-code-assistant-z
    fit: conditional
    sources:
      - id: ibm-com-products-watsonx-code-assistant-z
    why_it_fits: "Direkter Treffer für Sparkassen/Versicherungs-z/OS-COBOL-Bestand und einer der wenigen seriösen AI-Workflows für Mainframe-Architektur-Discovery. Außerhalb IBM-Z irrelevant, innerhalb davon Default-Kandidat. Einschränkung: Nur sinnvoll für IBM-Z-Stack."
    enterprise_readiness: enterprise_ready
  - id: jetbrains-com-ai
    fit: conditional
    sources:
      - id: jetbrains-com-ai
    why_it_fits: "Für IntelliJ-/Java-/Kotlin-zentrische DACH-Shops liefert die PSI-Index-Integration präzisere Architektur-Antworten als embedding-only-Ansätze. JetBrains als EU-Vendor erleichtert Procurement, AI-Backend bleibt aber Cloud. Einschränkung: AI-Calls gehen an JetBrains-AI-Cloud (US-Modelle dahinter), kein vollständiges on-prem."
    enterprise_readiness: team_ready
  - id: softwareag-com-en-corporate-platform-aris-html
    fit: conditional
    sources:
      - id: softwareag-com-en-corporate-platform-aris-html
    why_it_fits: "Deutscher Vendor mit etablierter Architektur-/Prozessmodellierung; Adabas-Natural-Discovery deckt Mainframe-Bestand bei Sparkassen und Behörden ab. Likely missed by market scan because ARIS gilt als EAM-/BPM-Tool, nicht als 'AI Codebase Mapper' — bei DACH-Großkunden ist es aber oft schon im Bestand und damit der natürliche Ort für Architektur-Sicht aus Code/Prozess-Discovery. Einschränkung: AI-Komponenten in ARIS noch jung."
    enterprise_readiness: enterprise_ready
  - id: appmap-io
    fit: partial
    sources:
      - id: appmap-io
    why_it_fits: "Runtime-Tracing liefert echte Sequence-/Dependency-Diagramme aus Java/Spring/Ruby/Python/Node-Tests — komplementär zu LLM-Statik. Nach Review-Pass nur partial fit für 'Codebase Architecture Mapping': erfordert lauffähige Tests/Runtime und deckt nur ausgeführte Pfade ab; für reine Static-First-Architektur-Sicht zu eingeschränkt. Unabhängige Belege außerhalb des Vendors bleiben dünn (vor allem Vendor-eigene Posts auf dev.to). Einschränkung: Keine Coverage für nicht-instrumentierten Legacy-Stack (COBOL/.NET-Framework-Mainframe)."
    enterprise_readiness: team_ready
  - id: brokk-ai
    fit: immature
    sources:
      - id: brokk-ai
      - id: github-com-brokkai-brokk
    why_it_fits: "Joern-basierte Code-Intelligence (searchSymbols, Klassen-/Methoden-Extraktion) ist konzeptionell stark für Architektur-Mapping ohne Token-Verschwendung. Review-Pass bestätigt aber: Repo (BrokkAi/brokk) ist sehr jung (erstellt 02/2025), winzige Community-Reichweite (~6 Stars laut GitHub-Listing, ~280 offene Issues), JVM-zentriert (Java first, Tree-Sitter-Stopgap für Python/JS/C#). Keine DACH-Enterprise-Referenzen, keine Drittpartei-Reviews jenseits des Vendor-Blogs. Einschränkung: Frühphasen-Produkt, JVM-Fokus, Multi-Tenant-Cloud-Sessions speichern Aktivitäten standardmäßig zentral."
    enterprise_readiness: evaluation_only
  - id: claude-com-product-claude-code
    fit: good_fit
    sources:
      - id: claude-com-product-claude-code
      - id: karanprasad-com-blog-how-claude-code-actually-works-reverse-engineering-512k-lines
    why_it_fits: "Agentische Exploration mit grep/glob/read liefert in der Praxis brauchbare Architektur-Übersichten großer Codebasen. Unabhängige Reverse-Engineering-Analysen (Karan Prasad, claude-code-from-source.com, VILA-Lab) bestätigen Reife der Tool-Pipeline (1.902 Files, 8-Layer-Permission, 4-Tier-Compaction) — der gleiche Apparat, der Codebases erforschbar macht. Über Bedrock eu-central-1 oder Vertex europe-west lässt sich Claude Code mit kontrolliertem Egress in BAIT-/VAIT-Setups betreiben. Einschränkung: Default-Anthropic-API ist US-Routing — DACH-Compliance erfordert explizite Bedrock/Vertex-Konfiguration."
    enterprise_readiness: enterprise_ready
  - id: continue-dev
    fit: partial
    sources:
      - id: continue-dev
      - id: github-com-continuedev-continue-issues-4254
    why_it_fits: "BYO-Model gegen on-prem Llama/Qwen ist real der einzige IDE-Architektur-Q&A-Pfad für DACH-Häuser, die jede Cloud-Inferenz ablehnen. Review-Pass zeigt jedoch: Repo-Indexing-Pfad ist instabil (Issues #6016, #4254, Reddit-Threads dokumentieren Hänger im 'Initializing'-Status, kein Indexing nach Config-Reload), und ein Continue-Maintainer markiert '@codebase is fully deprecated' — der Capability-Pfad für repo-weite Fragen ist offiziell eingeschränkt. Damit nur partial fit für 'Codebase Architecture Mapping'. Einschränkung: Repo-Indexing aktuell unzuverlässig; Continue Hub als SaaS kann Konfiguration/Embeddings exportieren."
    enterprise_readiness: team_ready
  - id: cloud-google-com-products-gemini-code-assist
    fit: good_fit
    sources:
      - id: cloud-google-com-products-gemini-code-assist
      - id: gartner-com-reviews-product-gemini-code-assist
    why_it_fits: "Gemini-Long-Context auf Vertex EU erlaubt es, mittelgroße Codebasen in einem Prompt zu mappen und C4-/Modul-Übersichten zu extrahieren. Code customization indiziert private GitHub/GitLab/Bitbucket-Repos mit dokumentiertem 24h-Re-Index. Realistischer GCP-Pfad für DACH-Kunden, die bereits Vertex einsetzen. Gartner-Peer-Insights zeigt allerdings konsistente Praktiker-Kritik an Kontext-Awareness und Halluzinationen — nicht Default-Wahl, aber valide Option im GCP-Stack. Einschränkung: Sehr große Monorepos sprengen auch 2M Tokens; Index-Refresh nur 1×/24h."
    enterprise_readiness: enterprise_ready
  - id: github-com-yamadashy-repomix
    fit: good_fit
    sources:
      - id: github-com-yamadashy-repomix
      - id: thefocus-ai-recipes-repomix
    why_it_fits: "Lokales CLI-OSS ohne Egress, sinnvoller Pipeline-Baustein, um große Repos in einen Long-Context-Prompt für Bedrock-Claude/Vertex-Gemini zu packen. Review-Pass bestätigt breite Praktiker-Adoption (~23K GitHub-Stars, MCP-Server-Integration, dokumentierte Recipes mit Claude/Ollama). Real bewährter Default-Helper im Engineering, kein Vendor — daher Team-Tool, nicht Enterprise-Solution. Einschränkung: Kein Vendor-Support, OSS-Pflege durch Solo-Maintainer."
    enterprise_readiness: team_ready
  - id: sourcegraph-com-cody
    fit: good_fit
    sources:
      - id: sourcegraph-com-cody
      - id: devtoolsreview-com-reviews-cody-review
    why_it_fits: "Self-hosted Sourcegraph mit Code-Graph + Cody ist die realistischste Default-Wahl für DACH-Banken/Versicherungen, die repo-weites Architektur-Q&A ohne Code-Egress brauchen. Mehrere unabhängige Reviews bestätigen 'best-in-class' Multi-Repo-/Monorepo-Kontext via Code-Graph; Free/Pro-Tier wurde Juli 2025 eingestellt — nur noch Enterprise mit annual contract, BYOC/self-host-Option für air-gapped. Diagramm-Output bleibt Q&A-basiert, aber Symbol-/Call-Graph-Daten sind die belastbare Grundlage. Einschränkung: Self-hosted-Lizenzkosten signifikant ($59/User/Monat Enterprise)."
    enterprise_readiness: enterprise_ready
  - id: castsoftware-com-products-imaging
    fit: good_fit
    sources:
      - id: castsoftware-com-products-imaging
      - id: thoughtworks-com-insights-blog-legacy-modernization-from-black-box-to-blueprint-how-we-performed-rapid-assessment-of-legacy-system
    why_it_fits: "Etablierte enterprise Architektur-Discovery-Suite mit Tiefenanalyse von COBOL/PL/I/Java/.NET/SAP-ABAP, on-prem deploybar, langjährige Referenzen in DACH-Banken/Versicherungen. Thoughtworks-Praxisbericht dokumentiert 1-Monats-Rapid-Assessment eines mehrere-Mio-LoC-Legacy-Systems mit CAST Imaging als 'digital SME'. Likely missed by market scan because CAST wird als 'Static Analysis Suite' positioniert und taucht bei Capability-only-Suchen nach 'AI Codebase Mapping' selten zuerst auf, ist aber faktisch das, was Großkunden für strukturierte Architektur-Übersichten lizenzieren. Einschränkung: Hoher Lizenz-/Implementierungsaufwand, klassisches Enterprise-Pricing."
    enterprise_readiness: enterprise_ready
  - id: vfunction-com
    fit: good_fit
    sources:
      - id: vfunction-com-platform
      - id: vfunction-com-blog-gartner-cool-vendor-2024
    why_it_fits: "AI-gestützte Architektur-Observability speziell für Java/.NET-Monolithen-Decomposition; misst Klassen-Abhängigkeiten zur Laufzeit + statisch und schlägt Service-Schnitte vor; OpenTelemetry-Pfad für verteilte Architekturen mit C4-Diagramm-Generierung. Externe Validierung durch Gartner Cool Vendor 2024 in 'AI-Augmented Development and Testing'; benannte Enterprise-Referenzen umfassen Trend Micro, Fortune-100-Bank und Intesa Sanpaolo. Likely missed by market scan because vFunction ist in der 'Application Modernization'-Kategorie positioniert, nicht als 'AI Coding Tool' — taucht bei Use-Case-Suchen mit Coding-Vokabular meist nicht auf, ist aber für DACH-Versicherer/Telkos mit Spring/JEE-Legacy direkt einschlägig. Einschränkung: Fokus auf JVM/.NET, kein Mainframe."
    enterprise_readiness: enterprise_ready
start_here: Claude Code (via AWS Bedrock eu-central-1) an einem einzelnen Bounded Context starten, die resultierende Map als Onboarding-Dokument commiten und mit dem Team reviewen. Für COBOL/PL/I- oder SAP-ABAP-Bestand ist CAST Imaging der direktere Einstieg, da es diese Sprachen statisch analysiert ohne LLM-Halluzinationsrisiko.
caveats: Cloud-native Tools routen Code standardmäßig an US-Infrastruktur — bei BAIT-/ISO-27001-pflichtigen Repos ist explizite Bedrock/Vertex-EU-Konfiguration oder on-prem CAST zwingend. Selbst mit Long-Context-Modellen stoßen sehr große Monorepos an Token-Grenzen; modularer Schnitt pro Analyse-Lauf ist deshalb Voraussetzung, nicht Option.
sources: []
---
