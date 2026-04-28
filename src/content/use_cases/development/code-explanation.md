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
  - id: sourcegraph-cody
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
    sources:
      - id: sourcegraph-cody-sourcegraph-sourcegraph-com-docs-cody-capabilities-commands
      - id: sourcegraph-cody-sourcegraph-2-sourcegraph-com-docs-cody-enterprise
  - id: aider
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
    sources:
      - id: aider-aider-chat-aider-chat-docs-usage-commands-html
  - id: sap-joule-for-developers
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: ABAP-/SAP-Legacy ist im DACH-Konzernumfeld omnipraesent und durch Generalisten-Tools schlecht abgedeckt; Joule for Developers erklaert ABAP direkt. Likely missed by market scan because tool is positioned as a SAP-suite feature, nicht als 'AI coding assistant'.
    caveats:
      - Nur sinnvoll im SAP-/ABAP-Kontext
      - An SAP-BTP-Stack gebunden
      - Reife der Developer-Funktionen 2026 noch im Aufbau
    sources:
      - id: sap-joule-for-developers-sap
  - id: aws-amazon-q-developer-debug-diagnose
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
    sources:
      - id: amazon-q-developer-amazon-docs-aws-amazon-com-amazonq-latest-qdeveloper-ug-inline-chat-html
      - id: amazon-q-developer-devtoolsreview
  - id: augment-code
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
    sources:
      - id: augment-code-augmentcode-augmentcode-com-learn-automate-multi-file-code-refactoring-with-ai-agents-a-step-by-step-guide
      - id: augment-code-vibecodedthis
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
    sources:
      - id: continue-dev-commit-pr-via-custom-slash-commands-continue
      - id: continue-dev-github
  - id: cursor
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
    sources:
      - id: cursor-cursor-cursor-com-features
      - id: cursor-aitoolbriefing
  - id: copilot
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
      - id: github-copilot-chat-debug-mode-github
      - id: copilot-devtoolsreview
  - id: google-gemini-code-assist
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
    sources:
      - id: google-gemini-code-assist-google-cloud-google-com-gemini-docs-codeassist-code-customization
      - id: google-gemini-code-assist-devclass
  - id: jetbrains-ai-assistant
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
    sources:
      - id: jetbrains-ai-assistant-junie-jetbrains
      - id: jetbrains-ai-assistant-explain-docs
  - id: windsurf-codeium
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
    sources:
      - id: windsurf-codeium-windsurf
      - id: windsurf-codeium-openaitoolshub
  - id: ibm-watsonx-code-assistant-for-z
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Spezialisiert auf COBOL-/Mainframe-Erklaerung — Z Understand beherrscht COBOL, PL/I, JCL, REXX, Assembler; direkt relevant fuer DACH-Banken und -Versicherungen mit Z/OS-Legacy.
    caveats:
      - Nischig — nur Mainframe/COBOL-Welt
      - IBM-Lizenz- und Beratungsmodell teuer
      - Generelle Codebase-Q&A jenseits Z/OS nicht abgedeckt
    sources:
      - id: ibm-watsonx-code-assistant-for-z-ibm
      - id: ibm-watsonx-code-assistant-for-z-croz
start_here: Mit GitHub Copilot Enterprise beginnen, sofern M365- oder GitHub-Verträge vorhanden sind — /explain und Workspace-Indexing an Onboarding-Fragen zu einem Legacy-Modul erproben und Antworten gegen den Quellcode querprüfen. AWS-Shops starten analog mit Amazon Q Developer, das speziell Java-Legacy-Erklärung abdeckt.
caveats: KI-Erklärungen klingen bei spärlich kommentiertem Code plausibel, können aber wichtige Invarianten übersehen — Ausgaben immer gegen den Quellcode validieren. Alle drei Tools senden Kontext an Cloud-Endpoints; für besonders sensible Bestände On-Prem-Alternativen wie Continue.dev prüfen.
sources: []
---
