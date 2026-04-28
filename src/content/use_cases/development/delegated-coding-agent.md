---
stage: development
order: 11
roles:
  - software-engineer
title: Delegierte Coding-Agents
goal_label: Tickets asynchron an einen Cloud-Agent geben und PR zurückbekommen
suitability: conditional
rationale: GitHub Copilot Cloud Agent, Cursor Background Agents und Claude Code als GitHub Action sind alle GA und enterprise-ready – der Delegation-Workflow ist damit vom Konzept in produktiven Einsatz gewechselt. Für DACH-FS-Umgebungen existieren mit Self-Hosted-Runner und EU-Modell-Routing (Bedrock/Vertex) dokumentierte DORA-kompatible Pfade.
tools:
  - id: claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Action laeuft auf Kunden-Self-Hosted-Runner; Modell-Calls gehen wahlweise an Anthropic, AWS Bedrock (EU), Google Vertex (EU) oder Microsoft Foundry. Bedrock-EU/Vertex-EU plus Self-Hosted-Runner ergibt den saubersten EU-residenten Frontier-Modell-Pfad fuer DACH-FS.
    caveats:
      - Bedrock-EU/Vertex-EU loest Daten-Residenz, nicht das DORA-Drittparteienrisiko gegen Anthropic selbst
      - Race Conditions bei vielen parallelen Background-Agents im OSS-Tracker dokumentiert
      - Plattform-Engineering-Aufwand fuer Runner und Workflow-Hardening ist nicht trivial
      - Anthropic EU-DPA-Annex tier-abhaengig — pruefen
      - Bedrock-EU/Vertex-EU loesen Data-Residency, nicht das DORA-Drittparteienrisiko gegenueber Anthropic selbst
      - Race Conditions bei parallelen Background-Agents in OSS-Issues dokumentiert (Issue 15957)
      - "Anthropic Trust Center: SOC2 Type II ja, aber EU-DPA-Annex-Verfuegbarkeit pro Tier pruefen"
      - Workflow-Engineering / Self-Hosted-Runner sind Voraussetzung
      - Kein gehostetes Cloud-UI fuer Nicht-Devs (anders als Jules/Devin)
      - Race-Conditions bei vielen parallelen Background-Tasks dokumentiert
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Bedrock/Vertex-Pfad ermoeglicht EU-Region-Routing
        - Niedrige Kosten (~15-25 USD/Monat fuer 5-Dev-Team)
      complaints:
        - Race Conditions bei vielen parallelen Background-Agents
        - Endless-Loops bei extern gemergten PRs gemeldet
    sources:
      - id: claude-code-github-action-anthropic-github
      - id: claude-code-github-action-anthropic-github-2
      - id: claude-code-github-action-anthropic-github-3
      - id: claude-code-github-action-anthropic-dev-to
  - id: factory-droids
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Bietet als einer der wenigen 'Fully Airgapped'-Modus inklusive eigenem OTEL-Collector und Inhouse-Modellen. Damit der einzige Cloud-Agent, der DORA Art. 28 Drittparteienrisiko strukturell minimiert. Markt-Sichtbarkeit in DACH ist allerdings noch gering, US-zentrierte Customer-Logos.
    caveats:
      - Airgapped-TCO hoch — Modell-Lifecycle, Patching, Eval beim Kunden
      - Keine bekannten DACH-Referenzen (April 2026); BaFin-/EBA-Erstaudit-Schwere
      - Lizenzmodell nicht oeffentlich, Verhandlungsoptik wie bei US-Pioneers
      - Roadmap-Fokus weiter auf Banken-Tier-1 — KMU-DACH wird unterversorgt
      - Airgapped-Setup verlagert kompletten Modell-Betrieb (inkl. Lifecycle, Patching, Eval) auf Kunden — TCO hoeher als Marketing suggeriert
      - Keine bekannten DACH-Referenzen (April 2026); fuer BaFin-/EBA-Pruefer vermutlich Erstauditschwere
      - Lizenzmodell nicht oeffentlich; Verhandlungsoptik wie bei US-Vendor-Pioneers
      - Closed-source, Lizenzkosten enterprise-typisch hoch
      - Airgapped-Deployment muss separat provisioniert werden (Modelle/OTEL Collector inhouse)
      - Customer-Traction nicht offen kommuniziert; Nordamerika-zentriert
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: factory-droids-factory
      - id: factory-droids-factory-2
      - id: factory-droids-cxodigitalpulse
  - id: copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Issue-zu-PR auf GitHub-Actions-Basis. Mit GHEC-EU-Data-Residency und Self-Hosted-Runner gibt es einen dokumentierten DORA-konformen Pfad. Konkrete Blocker: GitHub-hosted Runner haben keinen Region-Pin, daher in regulierten Setups nur via Self-Hosted-Runner zulaessig; Copilot-Inferenz auf Azure OpenAI mit EU-Data-Boundary, aber CLOUD-Act-Exposition bleibt."
    caveats:
      - Default-Runner verlassen je nach Job EU-Region — Self-Hosted-Runner pflichtig fuer FS
      - "DORA Art. 28: GitHub + Microsoft + Azure OpenAI als Drittparteien getrennt fuehren"
      - "Review-Bottleneck (dotnet-Retro: 9 PRs / 5-9h) ist eigentliche Throughput-Grenze"
      - GHES als Air-Gap-Variante schoepft Cloud-Agent-Features verzoegert
      - GitHub-hosted Runner laufen in 'US/EU mix' ohne Region-Pin — fuer FS-Kunden sind nur Self-Hosted Runner oder GHES tragfaehig
      - Copilot-Inferenz laeuft auf Azure OpenAI; EU-Data-Boundary von Microsoft ist verfuegbar, aber CLOUD-Act-Exposition bleibt (US-Mutter)
      - "DORA Art. 28 Drittparteienregister: GitHub + Microsoft + ggf. OpenAI muessen separat gefuehrt werden"
      - "Review-Bottleneck ist eigentlicher Throughput-Limiter (dotnet-Retro: 9 PRs / 5-9h)"
      - Default-Runner verlassen je nach Setup die EU-Region
      - Self-Hosted-Runner und Firewall-Regeln noetig fuer regulierte Workloads
      - Erfolgsrate korreliert stark mit Repo-Vorbereitung (copilot-instructions.md)
      - Review-Last skaliert nicht automatisch mit Agent-Output
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Ramp-Up dramatisch besser nach copilot-instructions.md (38% -> 69%)
        - "Sweet Spot: 1-50 Zeilen, Tests, Cleanup, Bugfixes"
      complaints:
        - Schlechte Performance ohne Build-Setup im Sandbox
        - "Review-Last explodiert: 9 PRs / 5-9h Reviewzeit"
        - Kein nativer DORA/EU-Region-Default
    sources:
      - id: github-copilot-cloud-agent-formerly-coding-agent-github
      - id: github-copilot-cloud-agent-formerly-coding-agent-github-blog
      - id: github-copilot-cloud-agent-formerly-coding-agent-microsoftnegotiations
      - id: github-copilot-cloud-agent-formerly-coding-agent-reddit
      - id: github-copilot-cloud-agent-formerly-coding-agent-ycombinator
  - id: google-jules
    fit: good_fit
    enterprise_readiness: evaluation_only
    confidence: high
    why_it_fits: "Reinster Async-Coding-Agent (Issue rein, PR raus) und gut fuer Innovation-Labs. Fuer DACH-Banken/Versicherer aber faktisch ausgeschlossen: VMs in Google Cloud ohne EU-Region-Pinnung fuer Jules-spezifisch, Modellbindung an Gemini, kein BYOK."
    caveats:
      - Ingest in Gemini-API faellt unter US-CLOUD-Act
      - Keine SOC2/ISO27001 explizit fuer Jules ausgewiesen
      - Tageslimits selbst auf Ultra-Tier limitieren Throughput
      - Ingest in Gemini-API faellt unter US-CLOUD-Act, selbst wenn EU-Region verfuegbar waere
      - Workspace-Isolation pro Task ist nicht dasselbe wie Tenant-Isolation
      - Keine SOC2-/ISO27001-Zertifizierung explizit fuer Jules ausgewiesen (Google-Cloud-Posture greift nur Infra-tief)
      - Nur GitHub (kein GitLab/Bitbucket/self-hosted)
      - Gebunden an Gemini-Modelle, kein BYOK
      - VMs in Google Cloud — EU-Region-Garantien nicht Standardteil; fuer DACH-Banken oft kritisch
      - Tageslimits selbst auf Ultra (300 Tasks/Tag)
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Wirklich asynchron — 'Independent Contractor'-Feeling
        - Diff-Preview im Web-UI als Trust-Baustein
      complaints:
        - Niedriges Default-Limit (5 req/Tag in Free)
        - Overkill-Ausgaben mit unnoetigem Boilerplate
        - Halluziniert Loesungen wenn Env-Variablen fehlen
    sources:
      - id: google-jules-jules-google
      - id: google-jules-blog-google
      - id: google-jules-reddit
      - id: google-jules-reddit-2
  - id: openhands-formerly-opendevin
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Self-Hosted-Pfad mit OSS-Core und Enterprise-VPC-Variante; openhands-resolver liefert 'Issue zu PR' als GitHub-Action. Fuer DACH-Plattform-Teams mit eigenem K8s-Stack der OSS-Anker, der Drittparteienrisiko unter DORA reduziert.
    caveats:
      - OSS-Variante laut README single-user, kein Multi-Tenant — Enterprise-Lizenz Polyform-basiert
      - Polyform Free-Trial >30 Tage Production unzulaessig; Legal-Review zwingend
      - "Modell-Wahl entscheidet Compliance: ohne Mistral/Bedrock-EU loest Self-Host nur Source-Boundary"
      - Operations-Aufwand fuer Sandbox/Modell hoch
      - Polyform-Free-Trial-Lizenz ist >30 Tage Production nicht zulaessig — viele Enterprise-Legal-Teams blockieren das
      - K8s-Operations + Modell-Hosting + Sandbox-Haerten ist eigenes Plattform-Team-Projekt
      - "Modell-Wahl: ohne EU-residentes Modell (Mistral/Bedrock-EU) loest Self-Host nur Source-Boundary"
      - Self-Hosted-Mode laut README nur fuer Single-User vorgesehen — Multi-Tenant erfordert Enterprise/Cloud
      - Enterprise-Quellcode unter Polyform-Free-Trial (kein OSS-Lizenz fuer Production >30 Tage)
      - Operativer Aufwand (Docker/K8s/Modellbetrieb) hoch
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Komplette Selbstkontrolle ueber Modell und Sandbox
        - Strong Open-Source-Community (65k Stars)
      complaints:
        - Nicht fuer Multi-Tenant-Use ausgelegt
        - Hoher Setup-Aufwand
    sources:
      - id: openhands-formerly-opendevin-all-hands
      - id: openhands-formerly-opendevin-github
      - id: openhands-formerly-opendevin-github-2
  - id: aider
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: "Pragmatischer DIY-Pfad: Action im Kunden-Repo + Self-Hosted-Runner + Bedrock-EU/Vertex-EU/Mistral. Niedrigschwelliger Einstieg in Delegated-Pattern fuer kleinere DACH-Teams oder als Vorstufe zu kommerzieller Loesung."
    caveats:
      - Community-Action, kein SLA, Supply-Chain-Risk durch Drittautor
      - Kein formaler DPA fuer Action-Tooling
      - Aider-Repo-Map skaliert auf Monorepos schlechter als Devin/Cursor/Codex
      - "Action-Code muss durch interne Sec-Review (Supply-Chain-Risk: Drittautor)"
      - Kein formaler DPA fuer das Action-Tooling — nur fuer Modellprovider
      - Aider's Repo-Map skaliert auf Monorepos schlechter als Devin/Cursor/Codex
      - Community-Action, kein Vendor-Support / SLA
      - Kein managed UI — Operations bleiben beim Team
      - Kontextgroesse / Codebase-Verstaendnis schwaecher als hosted Agents
    practitioner_signal:
      volume: low
      tenor: positive
    sources:
      - id: aider-in-ci-github-action-github
      - id: aider-in-ci-github-action-github-2
  - id: aws-amazon-q-developer-debug-diagnose
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Fuer AWS-native DACH-Konzerne ueber bestehende AWS-EU-Region und etablierte AVV der Weg des geringsten Widerstandes; freier Issue-zu-PR-Slot ist gegenueber Copilot/Cursor allerdings schwaecher und stark Code-Transformation-zentriert.
    caveats:
      - Q-Agents-UX heterogen (/transform, /test, /dev) — kein einzelner Backlog-Slot
      - Hyperscaler-Konzentrationsrisiko unter DORA Art. 28 trotz EU-Region
      - Indexing-Verhalten gegenueber Customer Code historisch wechselhaft — Opt-out beachten
      - Q Developer 'Agents' UX ist heterogen (Inline, /transform, /test, /dev) — nicht ein einzelner Backlog-Slot
      - DORA Art. 30 dennoch erforderlich — Hyperscaler-Konzentrationsrisiko
      - Codebase-Indexing-Verhalten in Bezug auf customer code historisch wechselhaft (Opt-out beachten)
      - Async-Ticket-zu-PR-Workflow weniger ausgereift als Copilot Cloud Agent oder Jules
      - Stark an AWS-Stack gebunden (CodeCommit/CodeCatalyst-zentrisch)
      - Open-PRs-aus-Issues weniger prominent als Refactor/Transform-Use-Cases
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: aws-amazon-q-developer-debug-diagnose-amazon
  - id: atlassian-rovo
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Fuer Bestandskunden mit Atlassian Cloud EU-Residency der Pfad des geringsten Widerstandes — Jira-Ticket-zu-Bitbucket-PR ohne neuen Vendor. Reife und Erfolgsraten oeffentlich aber duenn; DC-Kunden bekommen Rovo gar nicht oder verzoegert.
    caveats:
      - Atlassian-Subprozessoren (AWS US, OpenAI/Anthropic via Bedrock) DORA-konform listen
      - Rovo Dev oeffentlich kaum unabhaengig benchmarkt
      - Atlassian-DC-/Server-Kunden ausgeschlossen
      - Atlassian-Subprozessoren (inkl. AWS US, OpenAI/Anthropic-via-Bedrock) muessen DORA-konform gelistet werden
      - Rovo Dev Agents sind oeffentlich kaum unabhaengig benchmarkt — Erfolgsraten unbekannt
      - Atlassian-DC-Kunden bekommen die Agents nicht oder verzoegert
      - Bindet stark an Atlassian-Stack (Bitbucket-Repos, Jira als Trigger)
      - Reife / Erfolgsquote weniger oeffentlich validiert als Copilot/Cursor/Jules
      - Data-Center-Variante (selbst gehostet) hinkt Cloud bei AI-Features hinterher
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: atlassian-rovo-dev-agents-atlassian
  - id: devin
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "SOC2 Type II seit Sept 2024 und einzige ernstzunehmende VPC-Deployment-Variante (DevBox stateless im Kunden-VPC, Brain bei Cognition). Konkreter Blocker: Cognition's Production-Tenant ist AWS, EU-Region nicht oeffentlich zugesichert; Trust Center erfordert NDA — fuer DACH-FS argumentierbar, aber nur fuer Pilots in nicht-Prod-touching Repos."
    caveats:
      - Brain/Inferenz/Logs verlassen weiter Cognition-Tenant — voll-air-gapped nicht moeglich
      - Trust Center Region-Details hinter NDA, schwierig fuer BaFin-Audit-Vorbereitung
      - ACU-Pricing eskaliert bei vagen Tickets unkalkulierbar
      - "Subcontracting-Chain unter DORA Art. 30: Cognition + Anthropic/OpenAI + AWS"
      - Cognition's Production AWS-Region ist nicht oeffentlich EU-zugesichert — Trust Center erfordert NDA fuer Region-Details
      - VPC-Variante ist 'In-VPC DevBox' (stateless) — Brain/Inferenz/Logs verlassen weiter Cognition; voll-air-gapped nicht moeglich
      - ACU-Pricing eskaliert bei Fehlsessions und ist fuer DACH-Einkaeufer schwer kalkulierbar
      - "DORA Art. 30 'Subcontracting' Chain: Cognition + Anthropic/OpenAI + AWS getrennt zu listen"
      - SWE-bench-Verified-Resolution-Rate ~13.86% laut unabhaengigen Tests
      - ACU-Pricing eskaliert bei unscharfen Tasks rasch (45-50 ACUs / >100 USD pro fehlgeschlagenem Task moeglich)
      - "VPC-Setup: Brain bleibt bei Cognition, voll-air-gapped nicht moeglich"
      - MFA-VPNs in SaaS-Variante nicht supported, nur Customer Dedicated SaaS
    practitioner_signal:
      volume: high
      tenor: polarized
      praise:
        - Echte Migrationsbeschleunigung bei klar abgegrenzten Tickets
        - Parallel-Pool fuer Boring-Work (Nubank-Case dokumentiert)
      complaints:
        - Niedrige Auto-Resolution (~15% komplexer Tasks)
        - ACU-Verbrauch unkalkulierbar bei vagen Specs
        - Hallu-zinierte deprecated APIs in Legacy-Code
    sources:
      - id: devin-devin
      - id: devin-devin-2
      - id: devin-devin-3
      - id: devin-imseankim
      - id: devin-carlrippon
  - id: jetbrains-junie
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Tiefe DACH-Verankerung (JetBrains-Lizenzvertraege, deutsche Doku, lokaler Support), Junie CLI im CI/CD-Modus auf Self-Hosted-Runner. Aber: Cloud-Brain JetBrains-gehostet, keine native Multi-Repo-Backlog-Orchestrierung wie Devin/Jules."
    caveats:
      - JetBrains AI Cloud nutzt OpenAI/Anthropic/Google im Hintergrund — Subprozessor-Liste pruefen
      - Junie-CI/CD-Modus juenger 2025/2026 — Audit-Reife begrenzt
      - AI-DPA hat sich 2025 mehrfach geaendert — Vertragsbestand pruefen
      - JetBrains AI Cloud nutzt OpenAI/Anthropic/Google im Hintergrund — Subprozessor-Liste pruefen, EU-Routing nicht durchgaengig
      - Junie-CI/CD-Modus erst seit 2025/2026 — Audit-Reife begrenzt
      - JetBrains AI-DPA hat sich 2025 mehrfach geaendert — Vertragsbestand pruefen
      - Kein nativer Cloud-Agent-Modus mit eigenem UI fuer Backlog-Delegation (anders als Jules/Devin)
      - Cloud-Brain JetBrains-gehostet — EU-Region-Garantien nicht prominent
      - CI/CD-Pfad noch jung; Mustererarbeitung beim Kunden noetig
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: jetbrains-junie-cli-ci-cd-mode-jetbrains
  - id: sourcegraph-cody-batch-changes
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: CLI-First-Architektur passt strukturell auf 'in eigener Pipeline triggern'; Sourcegraph-Enterprise-Footprint (Cody) ermoeglicht Single-Tenant-Deployments. Aber Amp-spezifisches EU-Routing nicht dokumentiert.
    caveats:
      - Amp-Brain laeuft via Sourcegraph Cloud (US) — kein EU-Region-Pin dokumentiert
      - Pay-as-you-go schwer in DACH-CapEx-Beschaffung einzupassen
      - Editor-Plugin-Einstellung Feb 2026 ist Reife-Signal
      - Amp-Brain (Modellzugriff) laeuft via Sourcegraph Cloud — kein dokumentierter EU-Region-Pin fuer Amp-spezifisch
      - Pay-as-you-go-Preise schwer in CapEx-orientierte DACH-Beschaffung einzupassen
      - Amp ist juenger als Cody — fuer Audit-Trails (BAIT/VAIT) limitierte Historie
      - Cloud-Brain, kein dokumentiertes EU-Region-Routing fuer Amp
      - Pure 'Cloud Background Agent'-Modus weniger eigenstaendig als Cursor/Jules — Delegation passiert ueber CLI in eigener Pipeline
      - Editor-Extension wurde Feb 2026 eingestellt
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Frontier-Modell-Bundle out-of-the-box
        - Pay-as-you-go ohne Markup
    sources:
      - id: sourcegraph-amp-github
      - id: sourcegraph-amp-github-2
  - id: coder-com-ai-governance-layer
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Likely missed by market scan because Coder ist kein Coding-Agent, sondern der Self-Hosted-Workspace-Layer, in dem Claude Code/Codex/Cursor-Agenten betrieben werden — DACH-Banken brauchen genau diesen Wrap-around. Self-hosted, Terraform-defined, air-gapped-faehig, explizit auf GDPR/DORA positioniert.
    caveats:
      - Kein Agent selbst; Wert nur in Kombination mit Devin/Claude Code/Cursor
      - Operations-Investment (K8s, Terraform, RBAC, Audit) signifikant
      - Lizenzkosten nicht oeffentlich; Enterprise-typisch
      - DACH-Sales/-Support-Footprint kleiner als bei Hyperscalern
    sources:
      - id: coder-com-ai-governance-layer-coder
      - id: coder-com-ai-governance-layer-coder-2
  - id: lurus-code
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Likely missed by market scan because deutscher Anbieter ohne SaaS-Lautsprecher: Multi-Agent-Architektur mit Planner/Explorer/Shell/QA, Lurus speichert Quellcode nicht persistent, EU-Infrastruktur-Partner, GitHub-Action und CLI-Pfad. Fuer DACH-Mittelstand und Innovation-Teams als 'Hausanbieter'-Argument relevant."
    caveats:
      - ISO 27001 wird auf Security-Page als Ziel/Standard erwaehnt — Zertifizierungs-Status pruefen
      - Modell-Routing ueber 'European infrastructure partners' — Subprozessor-Liste fuer DPA pruefen
      - Praktiker-Signal noch duenn (Marktneueinsteiger 2025/2026)
      - Funktionsumfang gegenueber Cursor/Copilot/Devin kleiner — eher CLI-Augment
    sources:
      - id: lurus-code-lurus
  - id: cursor
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Mit dem GA-Release des Self-Hosted Pools am 25.03.2026 laeuft Tool-Execution im Kunden-Netz; nur Inferenz/Planning bleibt bei Cursor. SOC2 Type II, GDPR-DPA, Privacy Mode (ZDR) und CMEK fuer Enterprise-Tier. Unabhaengige Praxistests bestaetigen solide Ausgabequalitaet (Review erforderlich), echten Delegation-Workflow und bis zu 8 parallele Background Agents. $2B ARR und 50%+ Fortune-500-Nutzung (April 2026) signalisieren Plattformreife.
    caveats:
      - Inferenz/Planning weiter bei Cursor (US) — Source-Residenz ja, Modell-Residenz nein
      - CMEK + Repository-Blocklist nur Enterprise-Tier
      - Per-PR-Pricing schwer in DACH-CapEx-Beschaffung einzupassen
      - "DORA-Drittparteienlistung: Cursor + Modellprovider getrennt"
      - Background Agents unterstuetzen nur GitHub-Repos — kein GitLab/Bitbucket/Self-Hosted-Git
      - Privacy-Mode-Deaktivierung war Voraussetzung fuer Preview; mit Self-Hosted-Pool aufgeloest
      - Kosten bei MAX-Modellen koennen rasch skalieren (~$4.63/einfacher PR in Praxistest dokumentiert)
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - "Self-Hosted-Pool: Code/Build verlassen Kundennetz nicht"
        - Bis zu 8 parallele Background Agents; echtes asynchrones Delegation-Pattern
        - Agents Window ohne direktes Aequivalent in konkurrierenden IDEs
      complaints:
        - Credit-Pricing schwer kalkulierbar; MAX-Modell-Kosten skalieren rasch
        - Output-Qualitaet inkonsistent — Review zwingend erforderlich
        - Background Agents nur mit GitHub-Repos
    sources:
      - id: cursor-cloud-agents-with-self-hosted-pool-cursor
      - id: cursor-cloud-agents-with-self-hosted-pool-cursor-2
      - id: cursor-lgallardo-practitioner
      - id: cursor-effloow-review
start_here: Einstieg mit klar abgegrenzten Backlog-Tickets (Tests hinzufügen, Dependency-Bumps, kleine Bugfixes) bei GitHub Copilot Cloud Agent oder Cursor Background Agents – ein sauberes Build-Setup im Sandbox und ein Kontext-Primer (copilot-instructions.md / CLAUDE.md) sind Voraussetzung. In regulierten DACH-Umgebungen von Anfang an Self-Hosted-Runner, expliziten DPA und EU-Modell-Routing einplanen.
caveats: "Das Pattern funktioniert nur bei klar abgegrenzten Tickets mit ausreichender Test-Suite; die Review-Last skaliert mit dem Agent-Output und wird zum eigentlichen Throughput-Limiter. In DACH-Banken und Versicherern greift DORA Art. 28: Cloud-Agent-Execution gilt als IKT-Drittparteienrisiko, Default-Runner verlassen die EU-Region – Self-Hosted-Runner und vollständiges Drittparteienregister sind Pflicht."
sources: []
---
