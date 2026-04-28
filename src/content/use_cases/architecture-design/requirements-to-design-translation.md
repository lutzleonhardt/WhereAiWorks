---
stage: architecture-design
order: 8
roles:
  - software-engineer
  - software-architect
title: Anforderungen in Design-Skizze überführen
goal_label: Aus PRD/User Stories ein erstes High-Level-Design generieren
suitability: good_fit
rationale: Claude Code (Plan-Mode + Skills) und Kiro erzwingen den PRD→Design-Schritt strukturiert und liefern zuverlässige Mermaid-Diagramme und Design-Docs als Artefakte. Beide Tools sind in DACH-regulierten Umgebungen über Bedrock EU oder Anthropic Enterprise mit DPA beschaffbar.
tools:
  - id: aws-amazon-q-developer-debug-diagnose
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Q Developer Pro deckt mit AWS-EU-Region und IAM die DACH-Beschaffungsanforderungen ab und generiert aus Anforderungstext Architektur-Skizzen, Mermaid-Diagramme und Terraform; Bildinput erlaubt Skizze -> Design-Doc. AWS-Bias muss in Prompts/Steering-Files explizit konterkariert werden.
    caveats:
      - Stark AWS-zentrisch - Multi-Cloud/On-Prem-Constraints aktiv setzen
      - Halluzinierte Komponenten ohne strikte Restriktionen
      - PRDs mit Personenbezug nur ueber Bedrock EU + Datennutzungs-Opt-out
      - Architektur-Vorschlaege tendieren zu AWS-Native-Services - Multi-Cloud-/On-Prem-Constraints muessen in Prompts/Steering-Files explizit verankert werden
      - AWS-Bias - fuer Multi-Cloud oder On-Prem nur eingeschraenkt nutzbar
      - Diagrammqualitaet stark prompt-abhaengig, Komponentenliste/Restriktionen muessen explizit sein
      - PRDs mit Personenbezug nur ueber AWS EU + Bedrock-Datennutzungs-Opt-out
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
      - id: amazon-q-developer-amazon-docs-aws-amazon-com-prescriptive-guidance-latest-best-practices-code-generation-developer-workflows-html
      - id: amazon-q-developer-amazon-2
      - id: amazon-q-developer-awsfundamentals
      - id: amazon-q-developer-reddit
  - id: claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Mit Skills/Plan-Mode und ADR-/architecture.md-Disziplin de-facto Werkbank fuer Spec-Driven-Workflows; ueber Bedrock EU oder Anthropic-Enterprise + DPA auch in regulierten DACH-Setups beschaffbar. Tendiert ohne Skills sofort in Implementierung zu kippen - exakt das im Use Case genannte Caveat.
    caveats:
      - Cloud-LLM - PRDs mit Personalbezug nur ueber Bedrock EU oder DPA
      - Skills/Constitution muessen vom Team aktiv gepflegt werden
      - Token-Kosten bei tiefen Spec-Workflows nicht trivial
      - DACH-Enterprise sollte Bedrock-EU-Pfad praeferieren; Anthropic-direkt-Konsum fuer streng vertrauliche PRDs zusaetzlich Datenklassifizierungs-Filter (z.B. Presidio) vorschalten
      - Cloud-LLM von Anthropic - PRDs mit Personalbezug brauchen Enterprise-Plan + DPA (oder Bedrock EU)
      - Tendenz, ohne Skill/Plan-Mode direkt in Implementierung zu kippen - exakt das Caveat dieses Use Case
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Plan-Mode + Skills strukturieren PRD -> Design sehr gut
        - Mermaid- und Design-Doc-Output verlaesslich
      complaints:
        - Drift zwischen Sessions ohne ADR/Architecture-Files
        - Token-Kosten bei tiefen Spec-Workflows
    sources:
      - id: claude-code-medium
      - id: claude-code-reddit
      - id: claude-code-reddit-2
  - id: github-spec-kit
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Open-Source-Toolkit fuer Spec-Driven Development mit dem Workflow specify -> plan -> tasks -> implement und einer constitution.md fuer architektonische Prinzipien. Liefert genau den Brueckenschritt PRD -> High-Level-Design, ohne eigenen Vendor-Lock-in; DPA-Pruefung beim gewaehlten Coding-Agent ansetzen.
    caveats:
      - Datenschutz wird vom Backend-Agent bestimmt (Copilot/Claude/Codex)
      - CLI-zentrisch - kein UI fuer Reviewer ohne Terminal-Affinitaet
      - Spec-Drift bleibt operatives Problem
      - Datenschutz wird vom Backend-Agent (Copilot/Claude/Codex) bestimmt - DPA-Pruefung dort ansetzen
      - Kein eigener UI/Workflow-Layer fuer Reviewer ohne CLI-Affinitaet
      - Toolkit, kein Hosted-Service - benoetigt Coding Agent (Copilot/Claude/Codex) im Hintergrund
      - Spec-Branch-pro-Feature deutet auf Spec-First, nicht durchgaengig Spec-Anchored
      - Reife der Methodologie variiert je nach Modell und Projekt
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Strukturierter Gegenpol zu 'vibe coding'
        - Constitution.md macht Architektur-Regeln durchsetzbar
      complaints:
        - Edge Cases muessen oft manuell in Spec/Plan zurueckgefuehrt werden
        - Spec-Drift bleibt operatives Problem
    sources:
      - id: github-spec-kit-github
      - id: github-spec-kit-martinfowler
      - id: github-spec-kit-epam
      - id: github-spec-kit-ycombinator
  - id: kiro
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Erzwingt explizit Requirements -> Design -> Tasks und produziert design.md mit Mermaid-Architektur-Diagrammen aus PRDs. Trifft die im Use Case geforderte Klaerungs-Pipeline; AWS-Backend-Pflicht und der Dezember-2025-Prod-Loeschvorfall sind die zentralen DACH-Compliance-/Vertrauensthemen.
    caveats:
      - AWS-Bedrock-Backend-Pflicht; EU-Region und Datennutzungs-Opt-out aktiv setzen
      - "Vorfall 12/2025: 13h Outage nach autonomer Loeschaktion in supervised Mode"
      - Steering-Files muessen DACH-Constraints (BDSG, AI-Act) explizit als Architektur-Regeln verankern
      - Kein dokumentierter EU-Daten-Region-Default; Kunde muss Bedrock-Region und Datennutzungs-Opt-out aktiv setzen
      - Steering-Files/Konstitution sollten in DACH-Setup auch BDSG/AI-Act-Hinweise als Architektur-Constraints enthalten
      - Forciert AWS-Bedrock-Backend; DACH-Datenklassifizierung nur ueber AWS-EU-Region und DPA klaerbar
      - "Vorfall Dezember 2025: Kiro hat in supervised mode Prod-Env in einer China-Region geloescht (13h Outage)"
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
        - Vertrauensschaden nach Prod-Loeschvorfall
    sources:
      - id: kiro-github
      - id: kiro-amazon
      - id: kiro-ohaiknow
      - id: kiro-reddit
      - id: kiro-reddit-2
  - id: copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Copilot Enterprise + Spec Kit ist die beschaffungsfreundlichste Variante fuer DACH-Konzerne, die ohnehin GitHub Enterprise nutzen. Ohne Spec Kit fehlt allerdings die erzwungene Klaerungs-/Architektur-Phase, weshalb der PRD->Design-Schritt nur in Kombination mit zusaetzlichen Templates greift.
    caveats:
      - Workspace-Featureset variiert noch im Rollout
      - Ohne Spec Kit zu codenah, zu wenig Architektur-Klaerung
      - EU-Data-Boundary zum Beschaffungszeitpunkt verifizieren
      - EU-Data-Boundary fuer Copilot Enterprise existiert, aber Spaces/Workspace-Featureset noch in Bewegung - Funktionsumfang zum Beschaffungszeitpunkt verifizieren
      - Workspace ist im Public Preview/Rollout, Featureset variiert
      - Plan-Qualitaet stark vom Issue/PRD-Detailgrad abhaengig
      - Hat ohne Spec-Kit keine erzwungene Architektur-Phase
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Tiefe GitHub-Integration fuer Issue->Plan->PR
      complaints:
        - Ohne Spec-Kit oft zu codenah, zu wenig Architektur-Klaerung
    sources:
      - id: github-copilot-spaces-workspace-microsoft
      - id: github-copilot-spaces-workspace-ycombinator
  - id: tessl-framework-spec-registry
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Spec-Driven-Development-Plattform mit explizitem 'Agent stellt Klaerungsfragen, schreibt Specs, wartet auf Approval'-Pattern und einer Best-Practice 'Clarify product requirements and design system architecture' - exakt der im Use Case geforderte Brueckenschritt.
    caveats:
      - Framework in closed beta, Registry in open beta
      - EU-Hosting/DPA-Status unklar
      - Vendor-Lock-in-Risiko durch proprietaeres Spec-Format
      - Vendor-Lock-in-Risiko durch proprietaeres Spec-Format und Registry
      - Framework noch in (closed) Beta, Registry in open beta
      - Erfordert Disziplin im Team, Specs als Vertraege zu behandeln
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: tessl-framework-spec-registry-tessl
      - id: tessl-framework-spec-registry-tessl-2
      - id: tessl-framework-spec-registry-tessl-3
  - id: icepanel
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Kollaboratives C4-Modellierungs-Tool mit SOC2/GDPR und 'Fork your design'-Pattern fuer Future-Architekturen. Eignet sich fuer Teams, die einen kontrollierten PRD->High-Level-Design-Schritt unter Versionierung brauchen. Likely missed by market scan because IcePanel wird als Modellierungs-/Diagramm-Tool vermarktet, nicht als 'AI-Generator', faellt damit aus capability-fokussierten Suchen heraus.
    caveats:
      - Kein eingebauter PRD-zu-Design-Generator - AI-Anteil moderat
      - Cloud-SaaS, kein on-prem-Pfad
      - Wert entsteht erst, wenn Team C4-Methodik adoptiert
    sources:
      - id: icepanel-icepanel
  - id: miro-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Whiteboard-Standard in vielen DACH-Enterprises mit ISO 42001 ready, ISO 27001, SOC2 und GDPR; Technical-Design-Bundle erzeugt aus User Stories und Anforderungen Mermaid-/Architektur-Diagramme und RFC-Drafts mit Confluence-Anbindung. Likely missed by market scan because Miro wird primaer als generisches Whiteboard wahrgenommen, nicht als dedizierte 'PRD->Design'-Bundle-Loesung.
    caveats:
      - Whiteboard-grade Architektur, keine technisch validierten Cloud-Modelle
      - AI-Features im Enterprise-Tier datentechnisch separat konfigurieren
      - Kein erzwungener Klaerungsfragen-/Spec-Workflow
    sources:
      - id: miro-ai-technical-design-miro
  - id: leanix-sap
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: DACH-EA-Platzhirsch (Bonn, jetzt SAP) mit AI Assistant, der Architektur-Repository-Daten mit GenAI verknuepft und ueber die SAP-Signavio-Integration Geschaeftsprozesse mit IT-Architektur kombiniert. Ideal fuer Enterprises, die PRDs aus Prozesskontext heraus in Architektur-Skizzen ueberfuehren wollen. Likely missed by market scan because LeanIX wird als EAM-Suite und nicht als 'AI-PRD-zu-Design'-Tool vermarktet, taucht in capability-fokussierten Suchen daher nicht auf.
    caveats:
      - EAM-Tool, kein Code-/Skizzen-Generator - liefert architekturweite Sicht, kein konkretes Design-Doc
      - Voller Wert nur in SAP-/S4-Ecosystem-Kontexten
      - AI Assistant ist Add-on - Lizenzkosten und Featureset im aktuellen Release verifizieren
    sources:
      - id: sap-leanix-eam-ai-assistant-leanix-net
  - id: sparx-enterprise-architect
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: In regulierter DACH-Industrie (Automotive, Banken, Verteidigung) etablierter UML/SysML-/MDG-Editor; AI Assist erlaubt Modellgenerierung im on-prem-EA-Repository unter bestehender Governance. Likely missed by market scan because Sparx EA ist klassisches Enterprise-Modellierungs-Tool und faellt in capability-fokussierten 'AI tool'-Suchen aus dem Raster.
    caveats:
      - Add-In, kein eigenstaendiges PRD-zu-Design-Tool - PRD muss separat erschlossen werden
      - AI Assist ist relativ jung; LLM-Backend und Datenfluss bei der Beschaffung explizit klaeren
      - Schwellen-Tool fuer Teams ohne UML-Kultur
    sources:
      - id: sparx-enterprise-architect-ai-assist-sparxsystems
  - id: bito-ai-architect
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Generiert direkt aus Jira-Epics ein Technical Design Document inkl. Feasibility, Story-Breakdown, Risk-Detection und 'Open Questions', das Engineers in Cursor/Claude Code uebernehmen koennen - exakt der vom Use Case geforderte Klaerungs- und Architektur-Brueckenschritt. Capability ist erst seit Maerz 2026 in Jira verfuegbar; unabhaengige Praxis-Validierung fehlt. Likely missed by market scan because Bito positioniert sich primaer als Code-Review-/Coding-Agent-Vendor, der AI Architect als erweiterte Capability fuehrt.
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
      - id: bito-ai-architect-bito
      - id: bito-ai-architect-bito-docs
      - id: bito-ai-architect-agentrank
      - id: bito-ai-architect-swanum
start_here: "Einstieg mit Claude Code im Plan-Mode an einem klar abgegrenzten Feature: PRD als Kontext einlesen, 2–3 Architekturansätze mit Trade-offs generieren lassen, dann gemeinsam mit Reviewer schärfen. Kiro eignet sich als Alternative für Teams, die einen erzwungenen Spec-Workflow ohne Zusatzkonfiguration bevorzugen."
caveats: PRDs mit Personenbezug oder Datenklassifizierungen nur über Bedrock EU (Claude Code / Amazon Q Developer) oder mit aktiviertem Datennutzungs-Opt-out und AWS-EU-Region (Kiro) verarbeiten. Alle drei Tools tendieren ohne explizite Constraints in Skills oder Steering-Files dazu, den Klärungsschritt zu überspringen und direkt in Implementierungsdetails zu kippen.
sources: []
---
