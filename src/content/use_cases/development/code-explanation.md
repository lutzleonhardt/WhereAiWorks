---
stage: development
order: 5
roles:
  - software-engineer
title: Codebase-Verständnis
goal_label: Unbekannten Code und Legacy-Module schnell durchdringen
suitability: good_fit
rationale: GitHub Copilot Enterprise und Amazon Q Developer bieten dedizierte Code-Explain-Features mit EU-Datenresidenz und lassen sich in DACH über bestehende Microsoft- bzw. AWS-Unternehmensverträge ohne Compliance-Sonderprozess beschaffen. Das macht KI-gestütztes Codebase-Verständnis zum realistischen Einstiegspunkt für Legacy-Onboarding im Konzernumfeld.
tools:
  - id: sourcegraph-com-cody
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Code-Graph-basiertes Repo-Indexing mit Self-Hosted-Enterprise-Variante adressiert DACH-Compliance fuer sensible Legacy-Bestaende direkt; Marktstandard fuer Repo-weite Q&A.
    caveats:
      - Self-Hosted-Betrieb erfordert Plattform-Team und GPU-Ressourcen
      - Enterprise-Lizenzkosten substanziell
      - Antwortqualitaet haengt von Index-Qualitaet ab
      - Lizenzkosten der Enterprise-Variante substanziell — mind. fuenfstellig pro Jahr
      - Self-Hosted-Betrieb erfordert Plattform-Team (k8s, GPU-Bedarf je nach Embedding-Modell)
      - Indexierung grosser Monorepos initial aufwendig
      - Antwortqualitaet haengt stark von Code-Graph-Qualitaet ab
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Exceptional context retrieval for multi-repo architectures and monorepos
        - Multi-LLM support lets you choose Claude, GPT-4, or Gemini per task
        - Always cites sources so you can navigate to relevant code
        - Outperforms Copilot at understanding codebase relationships at scale
      complaints:
        - Enterprise tier at $49/month is expensive for individual developers
        - Free tier too limited to be practical for serious evaluation
        - Chat slower than Cursor or Copilot despite better indexing
        - Autocomplete quality trails specialized completion tools
    sources:
      - id: sourcegraph-com-docs-cody-capabilities-commands
      - id: sourcegraph-com-docs-cody-enterprise
  - id: aider-chat
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Tree-Sitter-basierter Repo-Map mit BYO-LLM ist fuer DACH-Power-User mit Compliance-Anspruch attraktiv; fuer flaechigen Konzern-Rollout aber ungeeignet, eher Spike-Werkzeug.
    caveats:
      - Keine kommerzielle Entitaet — Beschaffung/Haftung ungeklaert
      - BYO-LLM verlagert Compliance-Last komplett zum Kunden
      - CLI-zentriert, kein SSO/Audit
      - CLI-zentriert, kein Enterprise-Support/SSO
      - Bedienung weniger zugaenglich als IDE-Integrationen
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Free, open source, model-agnostic (Claude, GPT, local LLMs)
        - "Clean git integration: automatic commits with no manual work"
        - Outperforms commercial tools on SWE-bench coding benchmarks
        - Repo map approach scales well for complex codebases
      complaints:
        - Terminal-only interface alienates developers preferring GUI
        - "Too aggressive: always wants to edit; hard to use for Q&A only"
        - Consumes massive token counts even for small codebases
        - Struggles with large repos; hits token limits before making changes
    sources:
      - id: aider-chat-docs-usage-commands-html
  - id: sap-com-products-artificial-intelligence-ai-assistant-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: ABAP-/SAP-Legacy ist im DACH-Konzernumfeld omnipraesent und durch Generalisten-Tools schlecht abgedeckt; Joule for Developers erklaert ABAP direkt. Likely missed by market scan because tool is positioned as a SAP-suite feature, nicht als 'AI coding assistant'.
    caveats:
      - Nur sinnvoll im SAP-/ABAP-Kontext
      - An SAP-BTP-Stack gebunden
      - Reife der Developer-Funktionen 2026 noch im Aufbau
    sources:
      - id: sap-com-products-artificial-intelligence-ai-assistant-html
  - id: aws-amazon-com-q-developer
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: VPC-Boundary in EU-Frankfurt, dedizierte Code-Transformation und Explain-Features fuer Java-Legacy. Fuer AWS-zentrische DACH-Enterprises ueber bestehende Vertraege beschaffbar; IP-Indemnity erleichtert Compliance-Freigabe.
    caveats:
      - AWS-Bindung als Lock-in
      - Erklaerungs-Qualitaet in nicht-Java/Python-Stacks merklich schwaecher
      - Lizenzmodell ueber AWS-Account-Konsolidierung kann komplex sein
      - Stark AWS-Cloud-zentrisch
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - AWS integration is genuine; /transform agent solves legacy upgrades
        - Security scanning best-in-class among coding assistants
        - Generous free tier; VPC boundaries keep code on-prem
        - Strong for Java/Python in AWS-native environments
      complaints:
        - General completion quality trails Cursor and Copilot significantly
        - Heavily AWS-centric; value drops outside AWS ecosystem
        - Context management inadequate for cross-service understanding
        - Personal Google One account + GCP projects cause 403 permission errors
    sources:
      - id: docs-aws-amazon-com-amazonq-latest-qdeveloper-ug-inline-chat-html
      - id: devtoolsreview-com-reviews-amazon-q-review
  - id: augmentcode-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Explizit fuer 'large enterprise codebases' positioniert mit 200K-Token-Kontext-Engine und Repo-weitem Indexing; trifft den Legacy-/Monorepo-Code-Erklaerung-Use-Case direkt. Cloud-Indexing, On-Prem nur in Enterprise-Verhandlung.
    caveats:
      - Junges Produkt, Marktreife noch im Aufbau
      - DACH-Logos kaum sichtbar
      - EU-Hosting-Status unklar
      - Cloud-Indexing — On-Prem nur in Enterprise-Verhandlung
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Context engine outstanding for 400K+ file enterprise codebases
        - Understands architectural patterns and respects existing code style
        - Persistent indexing eliminates manual context setup for onboarding
        - Strong ROI documented in enterprise case studies
      complaints:
        - Credit system exhausts quickly ($200/month plan runs out by mid-month)
        - Circles fixing its own code; 30-50 review iterations on single PR
        - Overkill for simple tasks; alternatives perform as well at lower cost
        - Intent agent hangs frequently during long sessions
    sources:
      - id: augmentcode-com-learn-automate-multi-file-code-refactoring-with-ai-agents-a-step-by-step-guide
      - id: vibecodedthis-com-reviews-augment-code-review-2026
  - id: continue-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Open Source mit @codebase-Indexing und lokalem Modell via Ollama — das DACH-typische On-Prem-Werkzeug ohne Cloud-Upload, im Briefing-Caveat explizit erwaehnt.
    caveats:
      - Konfigurations- und LLM-Wahl-Last beim Kunden
      - Kein zentrales Admin/Telemetrie-Layer fuer Konzerne
      - Enterprise-Support-SLAs muessen separat verhandelt werden — nicht trivial fuer Konzern-Beschaffung
      - Erfolg haengt vom selbst gewaehlten LLM-Backend ab
      - Mehr Konfiguration noetig als bei SaaS-Konkurrenz
      - Qualitaet abhaengig vom gewaehlten Modell
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Open source with local model support (Ollama, LMStudio)
        - Configuration via config.yaml gives fine-grained control
        - Works offline with private models—DACH compliance-friendly
        - 95% of Cursor functionality at 1/4 the cost for power users
      complaints:
        - Autocomplete with local models causes VS Code lag and slowness
        - Missing per-line accept/reject (can only accept full edit blocks)
        - Local model latency makes it feel sluggish vs cloud-backed tools
        - Requires more setup and troubleshooting than SaaS alternatives
    sources:
      - id: docs-continue-dev-customize-slash-commands
      - id: github-com-continuedev-continue
  - id: cursor-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "@Codebase/@Files/@Folders sind explizit fuer Repo-Verstaendnis gebaut; sehr gutes Praktiker-Signal. Privacy Mode und SOC2 vorhanden, aber kein Self-Hosted."
    caveats:
      - Kein On-Prem-Deployment — fuer strengste Compliance-Faelle ungeeignet
      - Vendor-Reife (Anysphere) noch jung gegenueber etablierten Enterprise-Anbietern
      - Privacy Mode noetig fuer Enterprise-Code
      - Index-Qualitaet sinkt bei sehr grossen Monorepos
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Codebase indexing is gold-standard for multi-file refactoring (Composer)
        - "@Codebase feature understands entire project context automatically"
        - Inline diff preview with accept/reject per-line gives full control
        - Dominates r/cursor_ai and r/programming for complex project work
      complaints:
        - Indexing performance degrades on 100K+ file repos (needs restart)
        - Rate limits on Pro plan frustrate power users working on refactors
        - Cloud indexing requires uploading code; no on-prem option
        - Architectural drift after many sessions without explicit documentation
    sources:
      - id: cursor-com-features
      - id: aitoolbriefing-com-blog-cursor-ai-review-2026
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Copilot Enterprise mit /explain, Workspace-Indexing und EU-Datenresidenz-Optionen; in DACH ueber bestehende M365/GitHub-Vertraege niedrigschwellig beschaffbar.
    caveats:
      - Codebase-weite Antworten qualitativ hinter Cody/Cursor in Praxis-Vergleichen
      - Microsoft-Bindung bei Modell-Backend
      - Kontextlimit pro Anfrage
    practitioner_signal:
      volume: high
      tenor: mixed
    sources:
      - id: docs-github-com-en-copilot-using-github-copilot-asking-github-copilot-questions-in-your-ide
      - id: devtoolsreview-com-comparisons-cursor-vs-copilot-2026
  - id: cloud-google-com-products-gemini-code-assist
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Repo-Indexing in GCP-Customer-Boundary mit IAM und Long-Context-Fenster; passt fuer GCP-zentrische DACH-Shops.
    caveats:
      - GCP-Marktanteil in DACH geringer als AWS/Azure — passt nur fuer GCP-Shops
      - Customization nur in Enterprise-Tier — Lizenzkosten relevant
      - GCP-Bindung
      - Praktiker-Signal niedrig
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Long context window (Gemini 2M) handles large module understanding
        - "Enterprise features: code customization from private GitHub repos"
        - VPC-SC and Private Google Access for compliance
      complaints:
        - Personal Google One AI conflicts with GCP project binding
        - Agent Mode permanently blocked with 403 for non-enterprise users
        - Shadow project bug locks out personal tier features despite paying
        - Support redirects between Google One and Google Cloud teams
    sources:
      - id: cloud-google-com-gemini-docs-codeassist-code-customization
      - id: devclass-com-development-2024-10-11-googles-code-assist-enterprise-can-be-trained-on-internal-source-code-is-focused-on-google-services-1625091
  - id: jetbrains-com-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Tiefe IDE-Integration mit dedizierter Explain-Code-Aktion (inkl. RegExp, SQL); in DACH-Java/Kotlin-Shops omnipraesent. EU-rechtliche Lage durch JetBrains-Sitz EU-naeher als US-Anbieter.
    caveats:
      - Kein Self-Hosted-Modell-Hosting — Backend laeuft via JetBrains Cloud bzw. ausgewaehlte Provider
      - Junie als Agent ist 2026 noch jung; Reife je Sprache schwankt
      - "Lizenz-Bundling: separates JetBrains-AI-Abo"
      - Qualitaet variiert pro Sprache/Stack
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - "Deep IDE integration: Explain Code, Generate Tests work seamlessly"
        - Top-notch UX compared to Copilot extensions; feels native to IntelliJ
        - Can traverse repo structure and suggest relevant explanations
      complaints:
        - Separate $15/month subscription on top of JetBrains IDE license
        - Quota system opaque; no transparency on token usage
        - Feature development slow compared to Copilot/Cursor cadence
        - Frequent errors; often doesn't work reliably (plugin reviews 1-2 stars)
    sources:
      - id: jetbrains-com-help-idea-ai-assistant-html
      - id: jetbrains-com-help-ai-assistant-explain-code-with-ai-html
  - id: windsurf-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Cascade-Chat traversiert Repo-weiten Kontext fuer Code-Erklaerungen; grundsaetzlich On-Prem-faehig via Codeium-Stack. Sinnvoll fuer Teams ohne strikte Enterprise-Compliance, die autonomes Agentic-Editing schaetzen.
    caveats:
      - Cognition-Akquisition 2025 bestaetigt — Roadmap und On-Prem-Kontinuitaet unter neuem Eigentuemer ungeklaert
      - "Enterprise-Compliance-Luecken vs. Copilot: SSO, Audit Logs, tiefe GitHub-Integration eingeschraenkt"
      - Markenwirrwarr Codeium/Windsurf erschwert DACH-Enterprise-Beschaffung (RFP-Klarheit)
      - EU-Hosting-Details nach Akquisition erneut pruefbedarft
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - "Cascade agent with planning transparency: shows what it will change"
        - Best value at $15/month with no usage caps or credit system
        - Free tier legitimately generous; full functionality available
        - Migrating from VS Code takes ~10 minutes
      complaints:
        - Resource exhausted errors frustrate users regularly
        - Deletes code unnecessarily without clear reason
        - Missing background agents (can't work on separate branch)
        - New pricing model criticism on Reddit; subscription cancellations
    sources:
      - id: windsurf-com-editor
      - id: openaitoolshub-org-en-blog-windsurf-editor-review
  - id: ibm-com-products-watsonx-code-assistant-z
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Spezialisiert auf COBOL-/Mainframe-Erklaerung — Z Understand beherrscht COBOL, PL/I, JCL, REXX, Assembler; direkt relevant fuer DACH-Banken und -Versicherungen mit Z/OS-Legacy.
    caveats:
      - Nischig — nur Mainframe/COBOL-Welt
      - IBM-Lizenz- und Beratungsmodell teuer
      - Generelle Codebase-Q&A jenseits Z/OS nicht abgedeckt
    sources:
      - id: ibm-com-products-watsonx-code-assistant-z
      - id: croz-net-honest-take-on-watsonx-code-assistant-for-z
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Claude Code agiert direkt im Terminal am lokalen Repo, traversiert Verzeichnisstrukturen und liefert agentisch Erklaerungen zu unbekannten Modulen. Das 200k-Kontextfenster erlaubt vollstaendige Modul-Erklaerungen in einem Aufruf; Tool-Use und Git-Integration machen es zum Standardwerkzeug fuer 'erklaer mir diesen Legacy-Service'. Fuer DACH-Enterprises mit Code-Retention-Anforderungen ist Bedrock/Vertex-Routing noetig.
    caveats:
      - Cloud-API-Aufrufe — sensible Codebasen erfordern Bedrock/Vertex-Routing
      - Halluziniert plausibel klingende Aussagen bei spaerlich kommentiertem Code
      - Opus 4.6 langsam trotz hoeherer Faehigkeit; Token-Kontingente limitieren intensiven Einsatz
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Terminal UX and git integration superior to other CLI agents
        - 200k context window handles large module explanations in one shot
        - Faster iteration than Cursor for exploratory code understanding
        - "Excellent at non-coding tasks: git, bash, architectural discussions"
      complaints:
        - Cloud API uploads problematic for companies with code-retention rules
        - Hallucinations on sparsely-commented legacy code are common
        - Opus 4.6 is slow despite being more capable; token allocation changed
        - Usage caps and pricing tiers create workflow friction
    sources:
      - id: docs-claude-com-en-docs-claude-code-overview
  - id: tabnine-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Tabnine Chat bietet Repo-Kontext-Chat mit On-Prem-Deployment und strikter No-Code-Retention-Policy — fuer DACH-Banken und Versicherungen mit Legacy-Java/COBOL-Bestaenden eine der wenigen praktikablen Optionen in hochregulierten Umgebungen. Code-Erklaerung ist nicht der Hauptfokus (eher Completion), aber die Chat-Komponente deckt den Use Case ab.
    caveats:
      - Code-Erklaerung nicht Hauptfokus — eher Completion-zentriert
      - RAM-Verbrauch bis 4 GB auf moderaten Codebasen
      - Deutlich weniger produktiv als Copilot oder Cursor bei gleichem Preis
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Fast context-aware completions for repetitive patterns and boilerplate
        - On-premises deployment option addresses DACH compliance concerns
        - Security-first positioning (no code retention by default)
      complaints:
        - RAM usage balloons to 2-4GB on moderate codebases (8GB reported)
        - Significantly less productive than Copilot (1-2 hours saved/week vs 3-4)
        - Overpriced for completion quality; Copilot outperforms substantially
        - Still memory-intensive even after 2025 improvements
    sources:
      - id: tabnine-com-chat
  - id: deepwiki-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: DeepWiki generiert automatisch navigierbare Wiki-aehnliche Architektur-Dokumentation aus GitHub-Repos inklusive Mermaid-Diagrammen und erlaubt anschliessend Multi-Turn-Chat ueber den Code via DeepResearch-Modus. Beantwortet die Use-Case-Kernfrage 'Wie verstehe ich diese fremde Codebase schnell?' direkter als IDE-basierte Werkzeuge — besonders wertvoll beim Onboarding auf unbekannte Open-Source-Abhaengigkeiten. Enterprise/Private-Repos erfordern separates Angebot.
    caveats:
      - Free-Variante nur fuer oeffentliche Repos — Enterprise/private Repos separat und Preise unklar
      - Auto-generierte Wikis koennen Halluzinationen enthalten und Edge Cases auslassen
      - DeepResearch-Modus langsam und token-intensiv fuer grosse Codebasen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Instant wiki generation with Mermaid architecture diagrams
        - Chat with repo + DeepResearch for multi-turn code investigation
        - Supports multiple model providers (Gemini, OpenAI, Ollama)
        - Navigable documentation reduces onboarding time significantly
      complaints:
        - Auto-generated wikis hallucinate details and omit edge cases
        - Free tier limited to public repos; enterprise pricing unclear
        - DeepResearch mode slow and token-expensive for large codebases
    sources:
      - id: deepwiki-com
start_here: Mit GitHub Copilot Enterprise beginnen, sofern M365- oder GitHub-Verträge vorhanden sind — /explain und Workspace-Indexing an Onboarding-Fragen zu einem Legacy-Modul erproben und Antworten gegen den Quellcode querprüfen. AWS-Shops starten analog mit Amazon Q Developer, das speziell Java-Legacy-Erklärung abdeckt.
caveats: KI-Erklärungen klingen bei spärlich kommentiertem Code plausibel, können aber wichtige Invarianten übersehen — Ausgaben immer gegen den Quellcode validieren. Alle drei Tools senden Kontext an Cloud-Endpoints; für besonders sensible Bestände On-Prem-Alternativen wie Continue.dev prüfen.
sources: []
---
