---
stage: documentation
order: 1
roles:
  - software-engineer
title: Doku-Drafts
goal_label: Erste Doku-Fassung schneller erzeugen
suitability: good_fit
rationale: "Copilot und Claude Code decken heute die häufigsten Doku-Draft-Szenarien zuverlässig ab: Copilot für Inline-Docstrings, Claude Code für Repo-weite Audit-Sessions. Im Atlassian-Stack ergänzt Rovo diesen Werkzeugkasten für Tech-Specs und PRDs mit Workspace-Kontext aus Confluence und Jira."
tools:
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "SOC2/ISO27001-zertifiziert, in DACH-Stacks ohnehin meist vorhanden, vertraglich in Enterprise-Agreements abdeckbar. Zieht Kontext aus Confluence/Jira/Slack — gut für interne Tech-Specs und PRDs. Schwachstelle: Rovo-Drafts zitieren Workspace-Inhalte; bei verschmutzter Confluence wandern Falschinfos plausibel in neue Drafts."
    caveats:
      - Cloud-only — Data-Center-Kunden bekommen nur Connector-Sync
      - Quality-of-Output hängt direkt an Confluence/Jira-Hygiene
      - Greift nicht auf Code zu — schwächer für Developer-Referenz-Doku
      - AI-Act-Hochrisiko-Zonen prüfen, wenn Rovo HR-/Compliance-Doku generiert
      - Cloud-only — Data-Center-Kunden bekommen nur Connector-Sync, keine native Rovo-Funktion lokal
      - "AI Act: Rovo-generierte interne Doku kann in HR-/Compliance-Kontexten in Hochrisiko-Zonen rutschen"
      - Sub-Prozessor-Liste der LLM-Anbieter prüfen (OpenAI/Google)
      - Voll-Funktionalität (Search/Chat/Agents/Studio) braucht Premium oder Enterprise
      - Kontextqualität nur so gut wie die vorhandene Confluence/Jira-Hygiene
      - Greift nicht direkt auf Code zu — Code-zu-Doku schwächer als Mintlify/Swimm
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: atlassian-com-blog-rovo-create-and-edit-with-rovo
      - id: itbrief-com-au-story-atlassian-adds-ai-remix-partner-agents-to-confluence
      - id: atlassian-com-software-confluence-create-and-edit-with-rovo
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Stärkster Praktiker-Workflow für Repo-weite Doku-Audits (CLAUDE.md, Multi-File-Plan). DSGVO-konform via AWS Bedrock eu-central-1 + Enterprise-DPA + Zero-Data-Retention erreichbar, aber nicht Default. Verbose Output ist genau das Anti-Pattern für 'Drafts gehen unreviewed raus'.
    caveats:
      - DSGVO-Setup erfordert AWS-Bedrock-EU-Pinning + DPA + ZDR-Aktivierung
      - Tendenz zu Markdown-Inflation — strenge CLAUDE.md-Regeln nötig
      - Keine Source-Citations in generierter Doku — Reviewpflicht
      - Lange Doku-Sessions stoßen schnell an Rate Limits
      - DSGVO-Setup erfordert dediziertes Region-Pinning + Zero-Data-Retention-Konfiguration
      - Tendenz zu Markdown-Inflation (5+ READMEs pro Task) ist genau das Anti-Pattern für 'Drafts gehen unreviewed raus'
      - Keine eingebauten Source-Citations in generierten Doku-Files
      - Tendiert zu README-Wildwuchs (5+ Markdown-Dateien pro Task), bremsbar via CLAUDE.md-Regeln
      - Output verbose/AI-Slop-Risiko — strenges Review nötig
      - Code verlässt die Maschine (Anthropic Cloud)
    practitioner_signal:
      volume: high
      tenor: polarized
      praise:
        - Erstellt komplette Doc-Sets (README, Architecture, Data Model) in einer Session
        - Plant erst, dann implementiert — bessere Doku-Struktur
      complaints:
        - Erzeugt zu viele READMEs/Guides ungefragt
        - Verbose AI-Slop, schwer zu reviewen
    sources:
      - id: dev-to-subprime2010-how-i-use-claude-code-to-write-documentation-a-complete-workflow-2jk4
      - id: trusted-ai-partners-com-en-software-claude-code
      - id: reddit-com-r-claudeai-comments-1okt6vv-why-is-claude-generating-so-many-readmes-guides
      - id: news-ycombinator-com-item-id-47443129
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Reifster Enterprise-Pfad für Inline-Docstring-Drafts in DACH-Kontexten: Microsoft-DPA, EU Data Boundary für Copilot Business/Enterprise, etablierte Audit-Logs. Drafts bleiben aber generisch und ohne Source-Citation — Review-Gate vor Commit ist Pflicht."
    caveats:
      - EU Data Boundary nur ab Copilot Business/Enterprise — Individual-Tier scheidet aus
      - Public-Code-Filter explizit aktivieren (IP-Risiko)
      - Keine Source-Citations — Hallu-Risiko bei längerer Doku verlangt PR-Review
      - Inline-Drafts wiederholen oft nur den Funktionsnamen
      - EU Data Boundary gilt nur für Copilot Business/Enterprise, nicht für Individual
      - Public-Code-Filter muss explizit aktiviert werden, sonst IP-Risiko
      - Keine Source-Citations für generierte Doku — Hallu-Risiko bei Doku-Drafts hoch
      - Inline-Drafts oft generisch — wiederholt nur, was der Funktionsname schon sagt
      - Bei längeren Doku-Sessions verfehlen die Snippets den Architektur-Kontext
      - Reviewpflicht für inhaltliche Korrektheit
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Schnell für Boilerplate-Docstrings und Quick-Fixes
        - Tief in VS Code integriert
      complaints:
        - Bearbeitet ungewollt fremde Files
        - Tieferer Refactor/Doku-Run schwächer als Claude Code
    sources:
      - id: docsio-co-blog-code-documentation-tools
      - id: reddit-com-r-githubcopilot-comments-1rlmpsf-copilot-vs-claude-code-vs-cursor-for-real
  - id: docs-dev
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "PR-basierter Workflow ist konzeptionell genau das Richtige für den Kern-Risikopunkt dieses Use Cases (Drafts gehen unreviewed raus): jeder AI-Doc-Update kommt als reviewbarer PR — Human-in-the-Loop strukturell verankert. Für Pilot interessant, für Konzern-Rollout zu früh."
    caveats:
      - Reifegrad und Vendor-Stabilität unklar
      - Keine sichtbaren Compliance-Zertifizierungen
      - GitHub-App-Architektur erfordert Code-Zugriff durch SaaS — DACH-AVV-Diligence nötig
      - Keine sichtbaren Zertifizierungen
      - Kleiner Anbieter, Reifegrad unklar
      - Begrenzte unabhängige Reviews
      - Open-Source-Komponente nicht klar positioniert
    sources:
      - id: docs-dev
  - id: speakeasy-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Air-gapped CLI-Modus für SDK-Generierung ist für DACH-Compliance ein echter Differenzierer; LLM-Suggest-Feature ist Beta und remote — also der Doku-Draft-Teil bleibt SaaS. Sinnvoll nur in Kombination mit einem Doc-Frontend (Mintlify/ReadMe).
    caveats:
      - Suggest in Beta, Output review-pflichtig
      - Air-Gap-Modus deckt nur SDK-Gen, nicht AI-Features
      - Kein eigenes Doc-Frontend — doppelte Compliance-Diligence nötig
      - Suggest-AI-Feature noch in Beta, Output review-pflichtig
      - Air-Gap-Modus deckt nur SDK-Generierung, nicht die AI-Features ab
      - Kein eigenes Doc-Frontend — braucht Mintlify/ReadMe → doppelte Compliance-Diligence
      - Kein eigenes Doc-UI — braucht Mintlify/ReadMe als Frontend
      - Suggest noch in Beta — Output review-pflichtig
      - Pricing skaliert pro SDK und Sprache
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Smooth CLI setup and excellent documentation — easiest to get started
        - Beautiful UI with clear error visibility and fast iteration
        - Outstanding support; generates production-ready SDKs in under an hour
        - Strictest type validation (Zod runtime checks)
      complaints:
        - No unit test generation (contracts-only testing approach)
        - Pricing not cheap; rapid updates can cause breaking changes for customers
        - Flat file structure may not suit all team preferences
    sources:
      - id: speakeasy-com-docs-prep-openapi-maintenance
      - id: mintlify-com-library-best-api-docs-and-sdk-generation-tools
  - id: janekbehrens-de-codedoc-ai-html
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Likely missed by market scan because positioniert als kleine Atlassian-Marketplace-App eines deutschen Solo-/Kleinanbieters, nicht als 'AI-Tool'. Für DACH-Confluence-Enterprise interessant: BYOK (eigener Anthropic/OpenAI/Gemini-Schlüssel), Hosting auf Atlassian-Infrastruktur (kein dritter SaaS-Hop), Approval-Workflow vor Publish, deutsche Output-Sprache, RBAC, GitHub/GitLab/Bitbucket/Azure-DevOps-Support. Das Approval-Gate adressiert direkt das 'Drafts gehen unreviewed raus'-Risiko."
    caveats:
      - Kleinanbieter ohne sichtbare Enterprise-Track-Record
      - Compliance-Verantwortung für gewählten LLM-Provider liegt beim Kunden (BYOK)
      - Kein Bitbucket-Server/Data-Center-Support sichtbar — nur Cloud-Git-Provider
      - Atlassian-Marketplace-Vertrieb — Vendor-Stabilität für Konzern-Rollouts prüfen
    sources:
      - id: janekbehrens-de-codedoc-ai-html
  - id: doxra-io
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "Likely missed by market scan because DOXRA positioniert sich auf 'Compliance' und 'Legacy-Code' (inkl. COBOL), nicht im typischen Developer-Doc-Listicle. Für DACH-Enterprise einzigartig: explizit beworbenes Behind-Firewall-/On-Premise-Deployment mit allen AI-Workflows on-prem-fähig — adressiert Banken-/Versicherer-/Pharma-Compliance-Bedarf direkt."
    caveats:
      - Wenig unabhängige Praktiker-Validierung
      - Reifegrad und DACH-Kundenliste unklar
      - Compliance-Versprechen muss in Vendor-Diligence verifiziert werden
      - Pricing intransparent
    sources:
      - id: doxra-io
  - id: langdock-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Likely missed by market scan because Langdock ist als generische DSGVO-LLM-Plattform positioniert, nicht als Doc-Tool. Für DACH-Enterprise relevant: Berlin-HQ, ISO 27001, Auftragsverarbeitung nach Art. 28 DSGVO, EU-Rechenzentrum, Zero-Training-Garantie. Doku-Drafts entstehen über Knowledge-Folder-RAG + Agent-API auf Notizen/Specs — nicht so spezialisiert wie Mintlify, aber compliance-seitig der saubere Pfad."
    caveats:
      - Kein Doc-Frontend — Drafts müssen anderswo gerendert werden
      - Code-Ingest und Docstring-Generierung kein Schwerpunkt
      - Bei Auswahl von 'globalen' LLMs (z.B. neueste GPT-Versionen) Datenresidenz nicht garantiert
      - Custom-Enterprise-Setups laut Drittquelle ab 1.000+ Lizenzen
    sources:
      - id: langdock-com-enterprise
      - id: langdock-com-privacy-policy
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Für interne Entwickler-Doku/PRDs/Tech-Specs in Confluence: Rovo zieht Kontext aus Jira, Confluence, Slack, Google Drive über den Teamwork Graph. Liefert strukturierte Erstdrafts statt leerer Seite, lässt sich iterativ via Chat verfeinern. Standard-/Premium-/Enterprise-Cloud-Plans."
    caveats:
      - Voll-Funktionalität (Search/Chat/Agents/Studio) braucht Premium oder Enterprise
      - Kontextqualität nur so gut wie die vorhandene Confluence/Jira-Hygiene
      - Greift nicht direkt auf Code zu — Code-zu-Doku schwächer als Mintlify/Swimm
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - "Vastly reduces busy work: summarizing, drafting, searching across Jira/Confluence"
        - Extremely capable within Atlassian stack with 42% cycle time improvement (Rovo Dev GA)
        - Clean output when content is well-structured (tables, clear headings)
      complaints:
        - "Requires learning curve: mastering natural language prompts and workflows is non-trivial"
        - Hallucination issues & privacy concerns when pulling data across tools
        - Effectiveness depends entirely on underlying Confluence/Jira hygiene
    sources:
      - id: itbrief-com-au-story-atlassian-adds-ai-remix-partner-agents-to-confluence
  - id: notion-com-help-guides-notion-ai-for-docs
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Stark für Erstdrafts von Tech-Specs, SOPs, Onboarding-Guides aus Bullet-Points. Inline-Workflow (Highlight + 'Ask AI'). Sucht über Workspace und verbundene Apps — gut, wenn Doku ohnehin in Notion lebt. Schwach bei Code-Ingest und für Hochpräzisions-Engineering-Queries.
    caveats:
      - Citation-Reliability nur 'fair' — nicht für hochsensible technische Suche
      - Nicht für Indexieren tausender Spec-Seiten gebaut
      - Versionskontrolle weniger streng als dedizierte Doc-Systeme
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Workspace-aware Q&A understands your actual Notion content — feature ChatGPT can't replicate
        - Excellent for formatting tasks, database formulas, and meeting note summaries
        - $8/month justified for heavy Notion users with consistent workspace content
      complaints:
        - Writing assistant significantly weaker than ChatGPT-4o or Claude Sonnet
        - "Accuracy issues: users report nonsensical or incorrect content generation"
        - Not useful for developers; no strong code generation capability
    sources:
      - id: wonderchat-io-blog-ai-assistants-engineering-teams
  - id: readme-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: API-Doc-Plattform mit Owlbert-Agent (Claude Opus 4.6 + Gemini 2.5 + OpenAI), der Inhalte schreibt, übersetzt, Linter-Errors fixt und Multi-Page-Edits per Prompt durchführt. OpenAPI/Swagger/Postman-Import. llms.txt + MCP-Server out of the box.
    caveats:
      - Daten gehen an OpenAI (30-Tage-Logging) — Compliance prüfen
      - Pricing $399+/Monat Business (bis $36k+/Jahr für Multi-Site)
      - Linter-Audit-Output noch in Reifephase
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Full-featured API doc platform with Ask AI integrated search
        - Strong for teams with dedicated doc maintenance workflows
      complaints:
        - Pricing prohibitively high ($36k+/year for multi-site setups)
        - "Inflexible pipelines: no staging, no review branches, poor CI/CD integration"
        - Maintenance friction — users actively migrating away
    sources:
      - id: docs-readme-com-main-docs-aiagent
  - id: stainless-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Generiert idiomatische SDKs (TS/Python/Go/Java/Kotlin/Ruby/C#/PHP) aus OpenAPI plus eine Astro-basierte Doc-Plattform mit API-Reference und SDK-Code-Samples. Nutzt von OpenAI, Anthropic, Cloudflare als offizieller SDK-Generator. Integration mit Mintlify/ReadMe für Hybrid-Setups.
    caveats:
      - $600/Sprache/Monat — teuer bei vielen Zielen
      - Doc-Layer ist neuer Add-on, weniger ausgereift als Mintlify
      - Stark API-fokussiert — kein README-/Tech-Spec-Tool
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Idiomatic SDK code generation; strong TypeScript with excellent type hints
        - Mature product used by OpenAI, Anthropic, Cloudflare as official SDK generator
        - Dashboard provides good visual feedback for debugging
      complaints:
        - Setup is non-intuitive; dashboard UI errors (NextJS errors in frontend)
        - Documentation is messy and lacks context
        - Feels optimized for 2–3 big customers; self-service DX poor
        - $600/language/month is expensive for multi-language SDKs
    sources:
      - id: prnewswire-com-news-releases-speakeasys-sdk-generator-comparison-302747516-html
start_here: Pilotstart mit Copilot Business für Docstring-Drafts im bestehenden VS-Code-Workflow — EU Data Boundary und Public-Code-Filter aktivieren. Für Repo-weite Doku-Audits bietet Claude Code via AWS Bedrock eu-central-1 den nächsten Schritt mit erreichbarer DSGVO-Absicherung.
caveats: Keine der Lösungen liefert Source-Citations — ein Review-Gate vor Commit oder Publish ist für alle drei Werkzeuge Pflicht. Markdown-Inflation und generische Outputs sind das häufigste Anti-Pattern; enge Prompts und strukturell verankerte Review-Pflicht reduzieren dieses Risiko.
sources: []
---
