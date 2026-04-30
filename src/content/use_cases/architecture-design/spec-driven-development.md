---
stage: architecture-design
order: 8
roles:
  - software-engineer
  - software-architect
title: Spec-Driven Development
goal_label: Aus PRD/User Stories ueber versionierte Specs ein auditierbares High-Level-Design + Task-Plan ableiten
suitability: good_fit
rationale: "Spec-Driven Development (SDD) ist 2026 die belastbarste Antwort auf 'Vibe Coding' - PRD/User Stories werden in versionierte Markdown-Specs (requirements/design/tasks) gegossen, bevor ein Coding-Agent Code schreibt. Fuer den DACH-Mittelstand ist die Auditierbarkeit der Specs zusaetzlich ein konkreter Compliance-Hebel - ab 2. August 2026 sind sie fuer EU-AI-Act-High-Risk-Systeme direkt verwertbares Material fuer Risk-Management, technische Dokumentation und Human-Oversight-Pflichten. Claude Code (Plan-Mode + Skills) und Kiro liefern den Brueckenschritt out-of-the-box; Spec Kit, BMAD-METHOD und OpenSpec sind die drei tragenden Open-Source-Frameworks, die ueber Coding-Agent-Backends laufen. Alle Wege brauchen einen DSGVO-/AVV-konformen Backend-Agent (Bedrock EU, Anthropic Enterprise, Copilot Business EU) - das Framework selbst loest die Compliance nicht."
tools:
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Mit Plan-Mode, Skills und Constitution-/architecture.md-Disziplin de-facto Werkbank fuer SDD; im April 2026 vom ThoughtWorks Tech Radar Vol. 34 auf Adopt hochgestuft. Ueber Bedrock EU oder Anthropic Enterprise + DPA auch in regulierten DACH-Setups beschaffbar. Tendiert ohne Skills sofort in Implementierung zu kippen - exakt das im Use Case genannte Caveat.
    caveats:
      - Cloud-LLM von Anthropic - PRDs mit Personalbezug nur ueber Bedrock EU oder Anthropic-Enterprise mit DPA; fuer streng vertrauliche PRDs zusaetzliche Datenklassifizierungs-Filter (z.B. Presidio) vorschalten
      - Skills/Constitution muessen vom Team aktiv gepflegt werden - sonst Drift zwischen Sessions
      - Token-Kosten bei tiefen Spec-Workflows nicht trivial (berichtete 500-2000 USD/Monat/Dev bei intensivem Agent-Einsatz, 2026)
      - Tendenz, ohne Skill/Plan-Mode direkt in Implementierung zu kippen - exakt das Caveat dieses Use Case
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Plan-Mode + Skills strukturieren PRD -> Design sehr gut
        - Mermaid- und Design-Doc-Output verlaesslich
        - Opus 4.7 setzt 2026 SWE-bench-Verified-Rekord (87.6%)
      complaints:
        - Drift zwischen Sessions ohne ADR/Architecture-Files
        - Token-Kosten bei tiefen Spec-Workflows
    sources:
      - id: medium-com-haberlah-how-to-write-prds-for-ai-coding-agents-d60d72efb797
      - id: reddit-com-r-vibecoding-comments-1od2tyv-claude-code-crevo-achieving-efficient-highquality
      - id: reddit-com-r-claudecode-comments-1r5gk1d-40-days-of-vibe-coding-taught-me-the-most
  - id: github-com-github-spec-kit
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Open-Source-Toolkit fuer SDD mit dem Workflow specify -> plan -> tasks -> implement und einer constitution.md fuer architektonische Prinzipien. Im April 2026 vom ThoughtWorks Tech Radar Vol. 34 auf Adopt gesetzt; CLI erkennt 13+ Coding-Agent-Backends (Copilot, Claude Code, Cursor, Codex, Gemini CLI, Windsurf, Kiro CLI u.a.) und ist damit der agent-agnostische Default. DPA-Pruefung beim gewaehlten Coding-Agent ansetzen.
    caveats:
      - Datenschutz wird vom Backend-Agent (Copilot/Claude/Codex) bestimmt - DPA-/AVV-Pruefung dort ansetzen
      - CLI-zentrisch - kein UI fuer Reviewer ohne Terminal-Affinitaet
      - Spec-Drift zwischen Spec und Implementation bleibt operatives Problem - manuelle Re-Sync-Disziplin noetig
      - Toolkit, kein Hosted-Service - kein eigener Vendor-Vertrag, kein SLA
      - Greenfield-orientiert (Spec-Branch-pro-Feature); fuer Brownfield-Codebases ist OpenSpec naeher am Workflow
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Strukturierter Gegenpol zu 'vibe coding'
        - Constitution.md macht Architektur-Regeln durchsetzbar
        - ThoughtWorks Vol. 34 hebt auf Adopt - belastbarste Empfehlung im SDD-Feld
      complaints:
        - Edge Cases muessen oft manuell in Spec/Plan zurueckgefuehrt werden
        - Spec-Drift bleibt operatives Problem
    sources:
      - id: github-github-io-spec-kit
      - id: thoughtworks-com-radar-languages-and-frameworks-github-spec-kit
      - id: martinfowler-com-articles-exploring-gen-ai-sdd-3-tools-html
      - id: epam-com-insights-ai-blogs-inside-spec-driven-development-what-githubspec-kit-makes-possible-for-ai-engineering
      - id: news-ycombinator-com-item-id-47728487
  - id: github-com-bmad-code-org-bmad-method
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Open-Source-Framework (MIT) mit rollenbasierter Spec-Pipeline - Analyst (project-brief) -> PM (prd) -> Architect (architecture) -> Scrum Master (story) -> Dev -> QA. Mappt damit explizit auf den klassischen DACH-Mittelstand-Prozess (Scrum/RUP-affin) und produziert versionierbare Markdown-Artefakte mit YAML-Front-Matter, die als Audit-Material fuer EU-AI-Act-Pflichten taugen. Agent-agnostisch (laut v6.5 42 unterstuetzte Coding-Agents - Claude Code, Cursor, Copilot, Codex, Gemini, OpenCode, Antigravity ...). 2026 ~44k GitHub-Stars; v6.6 stable im April 2026.
    caveats:
      - Reine Markdown-/Prompt-Sammlung - Output-Qualitaet schwankt mit dem gewaehlten Backend-LLM
      - Multi-Agent-Persona-Handoffs treiben Token-Kosten hoch und propagieren Fehler still bis QA
      - Steile Lernkurve, Doku in v6 als 'strukturell lueckenhaft' kritisiert (Issues #2003, #1332, #1661, #1677)
      - Kein Vendor mit Rechtsperson - DPA/AVV, EU-Hosting, Audit-Logs, SSO/RBAC kommen vollstaendig vom Coding-Agent-Backend, nicht vom Framework
      - Lock-in auf Persona-Taxonomie und Artefakt-Schema - Migration weg = Re-Design der Prozesskette
      - Kaum DACH-Praktikerstimmen, keine BetrVG-/BaFin-/DORA-/NIS2-spezifischen Referenzen oeffentlich dokumentiert
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Auditierbar und prozessnah - jede Persona produziert versionierbare Markdown-Artefakte
        - Agent-agnostisch, laeuft mit jedem gaengigen Coding-Backend
        - "'By far the best context-engineering approach' (HN)"
      complaints:
        - Persona-Overhead und Token-Kosten
        - V6-Stable hat strukturelle Widersprueche/Luecken
        - Adversarial-Review-Skill erzwingt Probleme, treibt Reviewer-Fatigue
        - Setup-Komplexitaet, Doku duenn fuer Nicht-Entwickler
    sources:
      - id: github-com-bmad-code-org-bmad-method
      - id: news-ycombinator-com-item-id-47142762
      - id: dev-to-willtorber-spec-kit-vs-bmad-vs-openspec-sdd-2026
      - id: augmentcode-com-tools-best-spec-driven-development-tools
  - id: github-com-fission-ai-openspec
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Leichtgewichtige Node-CLI (MIT, Fission-AI) plus Markdown-Konvention. Pro Change ein Ordner mit proposal.md, specs/, design.md und tasks.md; Lifecycle ueber /opsx:propose -> /opsx:apply -> /opsx:archive. Gegenueber Spec Kit der entscheidende Unterschied - Delta-Specs (ADDED/MODIFIED/REMOVED) machen es brownfield-tauglich; Specs werden mit der Codebasis kompoundiert statt pro Feature neu angelegt. Agent-agnostisch (20+ Tools - Claude Code, Cursor, Copilot, Codex, Windsurf, Gemini CLI, Cline u.a.). v1.0 stable seit Januar 2026, v1.3.1 im April 2026.
    caveats:
      - Spec-Drift bleibt manuell - /opsx:sync ist nicht automatisch
      - Kein eigener Vendor-Vertrag; Compliance-Last liegt vollstaendig beim Coding-Agent
      - Telemetrie default-on (Command-Namen + Version) - vor Rollout in DSGVO-sensiblen Umgebungen via OPENSPEC_TELEMETRY=0 oder DO_NOT_TRACK=1 deaktivieren und policy-pinnen
      - Single-Agent-Modell (keine Personas) - schwaecher als BMAD fuer regulierte Audit-Trails (DORA, BaFin, NIS2, BetrVG-Mitbestimmung)
      - v1.0 erst Januar 2026 - Breaking Changes ueber Minor-Versionen wahrscheinlich, kleine Maintainer-Org ohne SLA
      - Operativer Overhead lohnt sich erst ab Feature-Groesse - fuer Bugfixes/Trivialaenderungen zu schwer
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Brownfield-tauglich durch Delta-Specs - im Bestandscode der wahrscheinlichste DACH-Realfall
        - In ~5 Minuten einsetzbar; Markdown-only, gut PR-reviewbar
        - Agent-agnostisch, kein Vendor-Lock auf Tool-Ebene
      complaints:
        - Spec-Drift bleibt manuell
        - Zu viel Overhead fuer Kleinkram
        - Vendor klein, Reife noch jung
        - Telemetrie default-on muss aktiv abgeschaltet werden
    sources:
      - id: github-com-fission-ai-openspec
      - id: news-ycombinator-com-item-id-46765749
      - id: recca0120-github-io-en-2026-03-08-openspec-sdd
      - id: dev-to-willtorber-spec-kit-vs-bmad-vs-openspec-sdd-2026
  - id: kiro-dev
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Erzwingt explizit Requirements -> Design -> Tasks und produziert design.md mit Mermaid-Architektur-Diagrammen aus PRDs - trifft die im Use Case geforderte Klaerungs-Pipeline ohne Zusatzkonfiguration. Vertrauenslage in DACH ist 2026 jedoch die zentrale Frage - die Folgevorfaelle Februar 2026 haben Amazon dazu gezwungen, Two-Person-Review und 335 Tier-1-Audits einzufuehren; eigene Engineers bevorzugen laut Berichten Claude. Vor breitem Rollout im regulierten Mittelstand stabile Q3-2026-Bilanz abwarten.
    caveats:
      - "Vorfall Dezember 2025: 13h Outage nach autonomer Loeschaktion in supervised Mode (China-Region)"
      - "Folgevorfaelle Februar/Maerz 2026: Amazon erzwingt Two-Person-Review fuer AI-Code, 335 Tier-1-Audits, Reliability-Compliance-Gates - Vertrauenslage im April 2026 noch nicht stabilisiert"
      - AWS-Bedrock-Backend-Pflicht; EU-Region und Datennutzungs-Opt-out aktiv setzen
      - Steering-Files muessen DACH-Constraints (BDSG, AI-Act, BetrVG) explizit als Architektur-Regeln verankern
      - Web-UI-Generierung schwaecher als Claude Code laut r/aws
    practitioner_signal:
      volume: high
      tenor: polarized
      praise:
        - Erzwingt Spec-Workflow ohne Extra-Konfiguration
        - Mermaid + Requirements + Tasks first shot ueberzeugend
      complaints:
        - Rigider Pipeline-Zwang
        - Schwaechere Web-UI-Generierung
        - Vertrauensschaden nach Prod-Loeschvorfall und Folgeoutages 2026
    sources:
      - id: github-com-aws-samples-sample-kiro-cli-prompts-for-product-teams-blob-main-kiro-steering-prd-guide-md
      - id: docs-aws-amazon-com-transform-latest-userguide-transform-forward-engineering-tutorial-specs-html
      - id: ohaiknow-com-reviews-kiro
      - id: reddit-com-r-betteroffline-comments-1r9nazc-amazons-ai-tools-caused-a-13hour-long-disruption
      - id: theregister-com-2026-02-20-amazon-denies-kiro-agentic-ai-behind-outage
      - id: reddit-com-r-claudeai-comments-1lzsvot-amazons-new-claudepowered-specdriven-ide-kiro
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Copilot Enterprise + Spec Kit ist die beschaffungsfreundlichste Variante fuer DACH-Konzerne, die ohnehin GitHub Enterprise nutzen. Ohne Spec Kit fehlt allerdings die erzwungene Klaerungs-/Architektur-Phase, weshalb der PRD->Design-Schritt nur in Kombination mit Spec Kit oder zusaetzlichen Templates greift.
    caveats:
      - EU-Data-Boundary fuer Copilot Enterprise existiert, aber Spaces/Workspace-Featureset noch in Bewegung - Funktionsumfang zum Beschaffungszeitpunkt verifizieren
      - Workspace-Featureset variiert noch im Rollout
      - Plan-Qualitaet stark vom Issue/PRD-Detailgrad abhaengig
      - Hat ohne Spec-Kit keine erzwungene Architektur-Phase
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Tiefe GitHub-Integration fuer Issue->Plan->PR
        - Beschaffungsfreundlich in Konzernen mit GitHub Enterprise
      complaints:
        - Ohne Spec-Kit oft zu codenah, zu wenig Architektur-Klaerung
    sources:
      - id: developer-microsoft-com-blog-spec-driven-development-spec-kit
      - id: news-ycombinator-com-item-id-47775653
  - id: aws-amazon-com-q-developer
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Q Developer Pro deckt mit AWS-EU-Region und IAM die DACH-Beschaffungsanforderungen ab und generiert aus Anforderungstext Architektur-Skizzen, Mermaid-Diagramme und Terraform; Bildinput erlaubt Skizze -> Design-Doc. Nur als SDD-Pfad sinnvoll, wenn AWS-Bias bewusst ueber Steering-Files konterkariert wird.
    caveats:
      - Stark AWS-zentrisch - Multi-Cloud/On-Prem-Constraints aktiv setzen
      - Halluzinierte Komponenten ohne strikte Restriktionen
      - PRDs mit Personenbezug nur ueber Bedrock EU + Datennutzungs-Opt-out
      - Diagrammqualitaet stark prompt-abhaengig, Komponentenliste/Restriktionen muessen explizit sein
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - AWS-natives Wissen, Best-Practices-Referenzen
        - Bildinput erlaubt Skizze -> Design-Doc
      complaints:
        - Halluzinierte Komponenten ohne strikte Restriktionen
        - Layout/Labels oft unschoen
    sources:
      - id: docs-aws-amazon-com-prescriptive-guidance-latest-best-practices-code-generation-developer-workflows-html
      - id: aws-amazon-com-blogs-devops-amazon-q-developer-cli-supports-image-inputs-in-your-terminal
      - id: awsfundamentals-com-blog-amazon-q-architecture-diagrams
      - id: reddit-com-r-aws-comments-1qfmw2j-kiro-cant-get-a-good-web-ui
  - id: tessl-io
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Spec-Driven-Development-Plattform mit explizitem 'Agent stellt Klaerungsfragen, schreibt Specs, wartet auf Approval'-Pattern und Best-Practice 'Clarify product requirements and design system architecture' - exakt der im Use Case geforderte Brueckenschritt. Spec Registry mit 10.000+ versionierten Library-Specs reduziert API-Hallucinations.
    caveats:
      - Framework in closed beta, Registry in open beta - kein GA-Termin im April 2026 bestaetigt (Geruecht H2 2026, nicht offiziell)
      - EU-Hosting/DPA-Status unklar
      - Vendor-Lock-in-Risiko durch proprietaeres Spec-Format und Registry
      - Erfordert Disziplin im Team, Specs als Vertraege zu behandeln
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Focus on specs over raw code generation reduces technical debt
        - 10,000+ versioned library specs prevent API hallucinations
        - Package manager concept for agent skills enables knowledge sharing
      complaints:
        - Framework closed beta; limited real-world production usage data
        - Skepticism about handling edge cases with upfront specs alone
        - Requires strict discipline writing perfect specs; complexity barrier
    sources:
      - id: docs-tessl-io-use-spec-driven-development-with-tessl
      - id: docs-tessl-io-best-practices-clarify-product-requirements-and-design-system-architecture
      - id: tessl-io-blog-tessl-launches-spec-driven-framework-and-registry
  - id: bito-ai
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Generiert direkt aus Jira-Epics ein Technical Design Document inkl. Feasibility, Story-Breakdown, Risk-Detection und 'Open Questions', das Engineers in Cursor/Claude Code uebernehmen koennen - exakt der Klaerungs- und Architektur-Brueckenschritt. AI-Architect-in-Jira-Capability erst seit Maerz 2026 GA, unabhaengige Praxis-Validierung daher noch duenn.
    caveats:
      - AI-Architect-in-Jira-Capability erst seit Maerz 2026 GA - unabhaengige PRD-zu-TDD-Praxisreferenzen noch sehr duenn
      - Swanum-CISO-Audit (April 2026) warnt vor 'Vendor appears abandoned'-Posture trotz SOC2 Type II - Vendor-Stabilitaet vor DACH-Beschaffung verifizieren
      - Keine IP-Indemnification fuer AI-generierten Output dokumentiert - rechtlicher Vergleich zu Copilot Enterprise/Bedrock-Pfad noetig
      - Cloud-SaaS - DACH-DPA, EU-Hosting-Pfad und Knowledge-Graph-Datenfluss (Repos + Jira) sind klassifizierungspflichtig
      - AgentRank-Review (Maerz 2026) bewertet Codebase-Awareness als oberflaechlicher als Greptile - Tiefe der Architektur-Analyse stark codebase-/setup-abhaengig
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - PRD/Epic -> TDD-Markdown direkt im Jira-Kommentar fuer Engineers nutzbar
      complaints:
        - Steile Onboarding-Kurve, Doku-Luecken (AgentRank)
        - Vendor-Posture wirkt fragil - kein oeffentliches Repo-Movement zum Audit-Zeitpunkt (Swanum)
    sources:
      - id: bito-ai-blog-ai-architect-in-jira
      - id: docs-bito-ai-ai-architect-integrating-ai-architect-with-your-tools-guide-for-jira
      - id: agentrank-tech-blog-bito-review-ai-pr-reviewer-worth-15-per-month
      - id: swanum-com-category-ai-code-review-tools-bito
start_here: "Einstieg mit Claude Code im Plan-Mode an einem klar abgegrenzten Feature: PRD als Kontext einlesen, 2-3 Architekturansaetze mit Trade-offs generieren lassen, dann gemeinsam mit Reviewer schaerfen. Wer einen erzwungenen Spec-Workflow ohne Zusatzkonfiguration will, nimmt Kiro (mit Stabilitaets-Vorbehalt nach den 2026er Vorfaellen). Fuer Open-Source-Frameworks: GitHub Spec Kit fuer Greenfield (Tech-Radar Adopt), OpenSpec fuer Brownfield (Delta-Specs), BMAD-METHOD fuer prozessnahe, persona-basierte Audit-Trails - alle drei brauchen einen DSGVO-konformen Coding-Agent als Backend."
caveats: "PRDs mit Personenbezug oder Datenklassifizierungen nur ueber Bedrock EU (Claude Code / Amazon Q Developer) oder mit aktiviertem Datennutzungs-Opt-out und AWS-EU-Region (Kiro) verarbeiten. SDD verlagert die Compliance-Frage auf den Backend-Coding-Agent - das Framework selbst (Spec Kit, BMAD, OpenSpec, Tessl) hat weder DPA noch EU-Hosting. Spec-Drift bleibt operatives Risiko (manuelle Re-Sync-Disziplin), und syntaktisch fluent wirkender AI-Code rutscht weiter durch Reviews - ThoughtWorks Tech Radar Vol. 34 (April 2026) warnt explizit vor 'cognitive debt' durch SDD-Skalierung. AGENTS.md-/Constitution-Files schlank halten - Studien 2026 zeigen Performance-Verlust bei aufgeblaehten Context-Files. Pluspunkt fuer DACH - versionierte Specs sind ab dem 2. August 2026 direkt verwertbares Material fuer EU-AI-Act-High-Risk-Pflichten (Risk-Management, technische Dokumentation, Human Oversight)."
sources:
  - id: martinfowler-com-articles-exploring-gen-ai-sdd-3-tools-html
  - id: thoughtworks-com-radar-languages-and-frameworks-github-spec-kit
  - id: dev-to-willtorber-spec-kit-vs-bmad-vs-openspec-sdd-2026
  - id: augmentcode-com-tools-best-spec-driven-development-tools
  - id: agents-md
---
