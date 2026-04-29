---
stage: product-discovery
order: 5
roles:
  - product-manager
title: User-Story- und Acceptance-Criteria-Drafting
goal_label: Backlog-Items mit AC und Splits generieren
suitability: good_fit
rationale: Atlassian Rovo ist nativ im Jira-Issue-Editor integriert und bricht Epics mit vordefinierten Prompts direkt in Stories mit AC herunter — ohne Toolbruch im Backlog. Productboard AI ergänzt mit einem dedizierten Lean-Story-Writer, sofern die Discovery-Pipeline dort bereits läuft.
tools:
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Nativ in Jira-Issue-Editor und Confluence integriert; vordefinierte Prompts erzeugen User Stories, brechen Epics in Child-Items mit AC herunter und schlagen Subtasks vor. Für DACH-Banken in PI-Plannings besonders relevant, weil Outputs ohne Tool-Bruch im Backlog landen. Rovo-EU-Pinning ist seit April 2025 in Limited Availability — muss aktiv beim Account-Team beantragt werden, ist kein Self-Service.
    caveats:
      - Rovo-Datenresidenz nicht eigenständig pinbar — erbt aus Jira/Confluence-Region
      - Limited Availability bedeutet manuelle Aktivierung pro Tenant via Atlassian-Account-Team
      - LLM-Subprocessors (OpenAI, Anthropic, Google, Mistral) müssen in der DPA explizit akzeptiert werden
      - Jira Cloud Premium oder Enterprise erforderlich
      - Kein BSI C5 Testat öffentlich — KRITIS-relevant
      - Rovo-EU-Pinning bis vor kurzem nur Limited Availability; Roll-out erfolgt gradually pro Account, kein Self-Service
      - LLM-Subprocessors (OpenAI, Anthropic, Google, Mistral) müssen in der DPA/AVV des Kunden explizit akzeptiert sein
      - Jira-Cloud-Premium- oder Enterprise-Tarif erforderlich — nicht in Standard-Subscription enthalten
      - BSI C5 Testat für Atlassian Cloud nicht öffentlich; für KRITIS-Banken ein Showstopper
      - Rovo hat kein eigenes Region-Pinning, erbt aus Jira/Confluence
      - LLM-Aufrufe gehen an OpenAI/Anthropic/Google; Atlassian-hosted LLMs nur Cloud Enterprise
      - AC sind oft generisch und brauchen Domänen-Review
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Direkt im Jira-Editor verfügbar
        - Spart Tipparbeit beim Refinement
      complaints:
        - Generische AC-Outputs
        - Datenresidenz für DACH unklar
    sources:
      - id: support-atlassian-com-jira-software-cloud-docs-use-atlassian-intelligence-to-help-write-or-edit-content
      - id: community-atlassian-com-learning-course-create-and-enhance-content-with-atlassian-intelligence-lesson-generate-new-content-using-atlassian-intelligence
      - id: atlassian-com-de-software-rovo-guides-admin-guide-rovo-data-usage-privacy
      - id: community-atlassian-com-learning-path-atlassian-organization-admin-course-configure-and-govern-rovo-for-your-organization-lesson-understand-rovo-data-handling-and-residency
      - id: atlassian-com-de-trust-atlassian-intelligence
      - id: community-atlassian-com-forums-atlassian-intelligence-articles-data-residency-support-for-rovo-limited-availability-ba-p-2992150
      - id: jira-atlassian-com-browse-rovo-22
  - id: claude-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Claude for Work/Enterprise hat DPA und seit 2025 EU-Hosting-Optionen (AWS Frankfurt). PM-Community 2026 nennt Claude als zweitmeistgenanntes Default-Tool nach ChatGPT, oft mit Vorzug bei längeren PRD-Kontexten. Für Backlog-Sync braucht es MCP/API.
    caveats:
      - EU-Hosting nur in Enterprise-Plänen verlässlich
      - Kein PM-spezifisches UI — reine LLM-Konsole
      - Backlog-Integration nur über externe MCP/API
      - EU-Hosting (Claude on AWS Frankfurt) nur in Enterprise-Plänen verlässlich
      - Ohne MCP-Brücke zu Jira/Linear bleibt es ein Copy-Paste-Workflow
      - EU-Datenresidenz erst seit kurzem für Enterprise
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Längerer Kontext, weniger Halluzinationen
        - Gut für Story-Splits aus PRDs
      complaints:
        - Kein natives Jira-/Linear-UI
        - Manuelle Pipeline ins Backlog
    sources:
      - id: reddit-com-r-productmanagement-comments-1r4jzti-how-do-you-write-prds-in-2026
      - id: reddit-com-r-productmanagement-comments-1qwklro-i-dont-care-if-youre-team-chatgpt-or-team-claude
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Seit Dezember 2025 GA: User Stories und PBIs in Azure Boards können an Copilot Coding Agent übergeben werden — Description plus AC sind Instruction Set. Microsoft-Stack ist im DACH-Konzernumfeld stark, EU-Tenants und DPA verfügbar. Für PO-Workflows nur conditional, weil AC-Drafting selbst eher in Copilot Chat passiert, nicht im Workitem."
    caveats:
      - "Kein dedizierter AC-Generator: Copilot konsumiert AC, schreibt sie nicht im Boards-Editor"
      - Default-LLM-Routing kann USA sein — Azure-OpenAI-Region des Tenants explizit setzen
      - AI-Act-Risikoklassifizierung der Story-Pipeline separat dokumentieren
      - Copilot-Verarbeitung in Azure-OpenAI-Region des Tenants steuerbar; Default kann USA sein
      - AI-Act-Risikoklassifizierung für 'Backlog-Generierung' separat dokumentieren
      - "Kein dedizierter AC-Generator: Copilot konsumiert AC, schreibt sie aber nicht im Boards-Editor"
      - Story-Drafting passiert in Copilot Chat oder via Skillset-Erweiterung, nicht nativ im Workitem
    sources:
      - id: devblogs-microsoft-com-devops-github-copilot-for-azure-boards
      - id: learn-microsoft-com-en-us-azure-devops-boards-github-work-item-integration-github-copilot
  - id: ones-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Enterprise-Plattform mit SOC2 Type II, ISO 27001, GDPR-Readiness und vollständiger On-Prem-Option (Air-Gapped Support). Positioniert sich explizit als Atlassian-Data-Center-Replacement und bietet MCP-Agents für R&D-Automation. Likely missed by market scan because tool ist als Suite/Plattform positioniert und nicht als 'AI Story Generator'; für DACH-Banken mit Datensouveränitäts-Anforderungen oder Atlassian-Cloud-Vorbehalt eine seltene echte Alternative.
    caveats:
      - Story-/AC-Drafting ist Nebenprodukt der Plattform — Funktionstiefe vor Pilot prüfen
      - Migration von Jira ist Aufwand, nicht Plug-In
      - MCP-Agents-Reife für PO-Use-Cases unklar
    sources:
      - id: ones-com
  - id: scagile-io-de-pi-planning-tool
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: DACH-SaaS für SAFe-PI-Planning mit AI-Unterstützung für Backlog und Value-Flow. Likely missed by market scan because DACH-only-Player erscheinen in englischsprachigen Capability-Suchen kaum. Passt direkt zur Briefing-Caveat 'PI-Plannings DACH-Banken' — Tool ist explizit für skalierte Agile-Organisationen positioniert und liefert Story-Verlinkung sowie AC-Disziplin im Kontext von Program Increments.
    caveats:
      - Keine öffentliche Compliance-Dokumentation auffindbar
      - AI-Funktionsumfang im Story-Drafting weniger detailliert dokumentiert als bei Rovo/Aha!
      - Vendor-Größe und Track-Record vor Banken-Pilot prüfen
    sources:
      - id: scagile-io-de-pi-planning-tool
  - id: vdf-ai-products-vdf-agile
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: AI-Backlog-Refinement und User-Story-Generator mit Cloud- und On-Premise-Deployment, SSO/OIDC und Audit-Logging. Likely missed by market scan because On-Prem-fähige AI-Backlog-Tools sind selten und in Capability-Suchen unterrepräsentiert; für DACH-Banken und KRITIS-Betreiber, die EU-Cloud nicht akzeptieren, ist Self-Hosting oft die einzige tragfähige Option.
    caveats:
      - Vendor-Größe und Referenzen im DACH-Raum prüfen
      - Detaillierter LLM-Footprint im On-Prem-Modus klären (eigene Modelle vs. API-Calls)
      - Deutsche Sprachunterstützung verifizieren
    sources:
      - id: vdf-ai-products-vdf-agile
  - id: aha-io-ai-library-request-user-stories
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Aha!-AI-Library hat dedizierte Requests für 'User stories' (Connextra-Template) und 'Acceptance criteria'. Elle nutzt Kontext aus verlinkten Ideas, Goals und Initiatives — passt zu Discovery-Stage. Aha! ist klassischer Enterprise-PM-Vendor mit SOC2 Type II und DPA. Wertschöpfung aber ausschließlich im Aha!-Ökosystem; Teams die nicht primär in Aha! planen, profitieren kaum.
    caveats:
      - Aha! Cloud primär US/AWS-gehostet; EU-Region für DACH-Kunden gezielt anfragen
      - Wertschöpfung nur, wenn Aha! ohnehin Discovery-Plattform ist
      - AI-Verarbeitung über externe LLMs (OpenAI, Anthropic, Google) — EU-LLM-Routing nicht garantiert
      - Aha! Cloud ist primär US/AWS-gehostet — EU-Region für DACH-Kunden gezielt anfragen
      - Wirklicher Wert nur, wenn Discovery-Pipeline schon in Aha! lebt — kein Punkt-Tool
      - Datenresidenz/EU-Verarbeitung weniger transparent als bei Atlassian
      - Keine unabhängigen Practitioner-Quellen für AI-Story-Drafting-Workflow auffindbar; Gartner-Peer-Reviews betonen Roadmapping-Stärke, nicht Story-Drafting
      - Elle AI-Features seit 2025 verfügbar; Community-Erfahrung im Story-Drafting noch dünn
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Direkt im Aha!-Editor verfügbar, kein Tool-Wechsel für Discovery-Teams
      complaints:
        - Kein unabhängiger PM-Community-Nachweis für Story-Drafting-Qualität auffindbar
        - "Gartner-Review: 'für User Story creation braucht es andere Tools' (möglicherweise vor Elle)"
    sources:
      - id: aha-io-ai-library-request-user-stories
      - id: support-aha-io-aha-roadmaps-support-articles-ai-assistant-draft-text-with-the-ai-assistant-7527452804647116662
  - id: productboard-com-product-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Spark Skill-Library enthält 'Lean Story Writer' (Story plus 3-5 AC im Given/When/Then) und 'Acceptance Criteria Generator'. Productboard hat SOC2, GDPR-DPA und EU-Hosting-Option. Stark, wenn Discovery-Pipeline bereits in Productboard läuft und mindestens 3 Insights pro Item verlinkt sind.
    caveats:
      - AI-Verarbeitung bei OpenAI in den USA — Insight-Inhalte verlassen die EU
      - ≥3 verlinkte Insights pro Item nötig — in frühen Phasen oft nicht erfüllt
      - Die '≥3 verlinkte Insights'-Hürde ist in frühen Discovery-Phasen oft nicht erfüllt
      - Funktioniert nur, wenn ≥3 Insights pro Item verlinkt sind
      - Sendet Insight-Inhalte an OpenAI — Compliance-Prüfung notwendig
      - Unabhängige Community-Quellen (Reddit r/ProductManagement) bewerten AI-Features kritisch als 'thoroughly slop'
      - Spark erst seit Q4 2025 in Early/Public Beta — Community-Erfahrung mit Story-Drafting noch sehr gering
      - "Hohe Prozessdisziplin erforderlich: AI-Features nur auf bereits geloggten Daten; ohne konsequentes Insight-Logging kein Mehrwert"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Sauber strukturierte Roadmaps und Feedback-Aggregation
        - Spark-PRD-Generierung bei gut gepflegtem Workspace vielversprechend
      complaints:
        - AI-Features als 'thoroughly slop' bezeichnet (Reddit r/ProductManagement, Aug 2025)
        - AI-Tools greifen nur auf bereits geloggte Daten zu — kein Wert ohne konsequente Pflege
        - Hohes Prozessaufwand für Insight-Logging; viele Teams brechen ab
    sources:
      - id: productboard-com-skills-lean-story-writer
      - id: support-productboard-com-hc-en-us-articles-15113485128467-productboard-ai
      - id: reddit-com-r-productmanagement-comments-1mzqw58-product-board-worth-it
      - id: blog-buildbetter-ai-buildbetter-vs-productboard-2026-comparison
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Azure-DevOps-natives Tool, das Anforderungen direkt in User Stories mit AC und Gherkin im Work Item konvertiert. Likely missed by market scan because der Markt-Scan war stark Atlassian-zentriert; für Microsoft-Stack-DACH-Kunden (Behörden, Versicherungen, Konzerne mit M365-First-Strategie) ist das die naheliegende Integration. Microsoft-Partner-Status auf Azure Marketplace bestätigt (5,0/5, 51 Ratings).
    caveats:
      - LLM-Routing der Microsoft Marketplace-Extension prüfen — Azure-OpenAI-Region steuerbar?
      - Keine unabhängigen Practitioner-Reviews (G2, Reddit) auffindbar; nur Vendor-Testimonials und Marketplace-Ratings
      - Compliance-Dokumentation des Vendors für DACH-Banking-Kontext nicht öffentlich verifizierbar
      - Story-Drafting nur in Azure-DevOps-Stacks sinnvoll
    sources:
      - id: copilot4devops-com-de-convert
      - id: azuremarketplace-microsoft-com-en-us-marketplace-apps-2101440ontarioinc-copilot4devops-official
  - id: marketplace-atlassian-com-apps-3016668857-refinely-ai-backlog-refinement-for-jira
    fit: immature
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: "Atlassian-Marketplace-App speziell für Backlog-Refinement: erzeugt Stories mit Given/When/Then-AC, stellt Clarifying-Questions vor der Generierung und erlaubt BYOK (Anthropic, Google, OpenAI). BYOK-Ansatz konzeptionell attraktiv für DACH-Banken mit eigener LLM-Subscription. Likely missed by market scan because BYOK-Apps werden in Capability-Suchen oft übersehen."
    caveats:
      - Atlassian Marketplace zeigt 'No reviews yet' — kein Community-Signal vorhanden
      - Version 4.2.0 released April 2026 — Tool ist faktisch brandneu; für Banken-Produktionseinsatz noch nicht evaluierbar
      - Kleiner Vendor — Compliance-Tiefe nicht öffentlich dokumentiert
      - BYOK-Routing erfordert Setup und Schlüsselverwaltung
      - Atlassian-Privacy-Policy gilt explizit nicht — Partner-Privacy-Policy prüfen
    practitioner_signal:
      volume: none
      tenor: unknown
      praise: []
      complaints: []
    sources:
      - id: marketplace-atlassian-com-apps-3016668857-refinely-ai-backlog-refinement-for-jira
start_here: "Pilot mit Atlassian Rovo im bestehenden Jira-Cloud-Workspace starten: EU-Region und Rovo-Aktivierung vorab beim Atlassian-Account-Team klären, da kein Self-Service. Wer Discovery bereits in Productboard betreibt, kann den Spark Lean Story Writer parallel testen — vorausgesetzt, mindestens drei Insights pro Item sind verlinkt."
caveats: Atlassian Rovo erbt die Jira-Datenresidenz, setzt Jira Cloud Premium oder Enterprise voraus und erfordert manuelle Tenant-Aktivierung — LLM-Subprocessors müssen in der DPA explizit akzeptiert werden, BSI C5 Testat ist nicht öffentlich verfügbar. Generierte AC sind oft generisch und brauchen Domänen-Review; Productboard AI sendet Insight-Inhalte an OpenAI in den USA, was eine separate Compliance-Prüfung voraussetzt.
sources: []
---
