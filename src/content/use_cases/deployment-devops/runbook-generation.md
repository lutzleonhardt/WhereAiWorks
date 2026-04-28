---
stage: deployment-devops
order: 15
roles:
  - software-engineer
title: Runbook-Generierung
goal_label: Schritt-für-Schritt-Runbooks aus Incidents und Code ableiten
suitability: conditional
rationale: PagerDuty Advance SRE Agent generiert und pflegt Runbooks direkt im Incident-Workflow; Dynatrace Davis CoPilot surfacet Troubleshooting-Guides kontextbezogen mit belegtem MTTR-Effekt in Produktion. Beide Tools sind im DACH-Enterprise-Stack verfügbar und machen Runbook-Automatisierung zum handhabbaren Pilotprojekt.
tools:
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Praktikabelstes 'self-updating'-Pattern: Codebase + Runbooks im selben Repo, Claude liest Terraform/Services und schreibt/aktualisiert Runbooks via PR. Für DACH-Enterprise nur sauber, wenn Inferenz auf Bedrock-EU oder Vertex-EU gelenkt wird."
    caveats:
      - Anthropic-Direkt-Inferenz ist US — für GDPR/BaFin Bedrock-EU oder Vertex-EU verlangen
      - Kein integriertes Incident-Lifecycle-Management — Komplement nötig
      - Repo-Disziplin (Runbooks als Code) ist organisatorische Voraussetzung
      - "Erfordert Disziplin: Runbooks im Repo, Code-Review-Pflicht"
      - Qualität abhängig von Codebase-Hygiene
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Runbooks aus echtem Code statt veralteter Wiki-Seite
        - Lebt mit dem Repo via PRs
      complaints:
        - Verlangt saubere Code-Hygiene; ohne Disziplin halluziniert Claude
    sources:
      - id: gouthamve-dev-i-built-an-ai-sre-in-60mins-you-should-too
      - id: tipsforclaude-com-tips-incident-response-runbooks
      - id: reddit-com-r-claudeai-comments-1r6uaf9-a-thread-for-use-cases-of-claude-code
  - id: holmesgpt-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Open-Source-Agent mit explizitem Markdown-Runbook-Modell und ReAct-Ausführung; Self-Hosted, LLM-Wahl bleibt beim Kunde — passt für DACH-Häuser, die Inferenz auf Azure-OpenAI EU oder Bedrock EU lenken müssen. CNCF-Praxisbericht belegt 40 % Auto-Resolve mit kuratierten Runbooks.
    caveats:
      - Generierung neuer Runbooks ist nicht Kernfunktion — Stärke liegt in Ausführung
      - Vendor-SLA fehlt (OSS); produktive Verantwortung beim Anwender
      - Eigenes Runbook-Curating ist Plattform-Team-Aufgabe
      - Modellkosten und EU-Inferenz müssen Kunde steuern
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Runbooks > Modellwahl als Qualitätshebel
      complaints:
        - Setup-Aufwand für eigene Runbook-Bibliothek
    sources:
      - id: holmesgpt-dev-latest-reference-runbooks
      - id: cncf-io-blog-2026-04-21-auto-diagnosing-kubernetes-alerts-with-holmesgpt-and-cncf-tools
  - id: pagerduty-com-platform-generative-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Bietet Erstgenerierung (Plain-English-Prompt -> Runbook-Template) und kontinuierliche Pflege via SRE Agent ('living, up-to-date procedures'). EU-Service-Region in Frankfurt seit 2021, SCCs im DPA, Referenzen in regulierten Sektoren — derzeit der vollständigste Enterprise-Stack für den Use Case in DACH.
    caveats:
      - AI-Generated Runbooks bleiben Early Access (Sales-Aktivierung)
      - AI-Actions-Credits-Modell macht Total Cost intransparent
      - AI Agents senden Prompts laut DPA an US-LLM-Subprozessoren — EU-Region schützt Storage, nicht zwangsläufig Inferenz
      - Betriebsrat-Pflicht bei On-Call-Routing/Escalation prüfen (Verhaltens-/Leistungskontrolle)
      - Orchestrierung baut auf Rundeck-Erbe — Best Fit für PagerDuty-Stack
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Reduziert Alert-Noise messbar; gute Slack-Integration
      complaints:
        - AIOps-Features hinter Business/Enterprise-Tier
        - Per-User-Pricing eskaliert bei großen Teams
    sources:
      - id: pagerduty-com-blog-democratize-automation-ai-generated-runbooks
      - id: pagerduty-com-blog-aiops-we-built-an-sre-agent-with-memory-and-its-transforming-incident-response
      - id: support-pagerduty-com-pd-support-docs-pagerduty-advance
      - id: pagerduty-com-newsroom-pagerduty-announces-general-availability-for-european-service-region
      - id: reddit-com-r-sre-comments-1pk7go7-pagerduty-for-sre-how-real-people-work-with-it
  - id: rootly-com-sre-rootlys-ai-runbooks-faster-incident-response-for-sres
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Orchestriert Runbooks zwischen Monitoring, Ansible/Terraform und Slack mit One-Click-Approval; etabliert als flexible PagerDuty-Alternative. Praxistauglich für Teams, die Runbook-Workflows als Code pflegen.
    caveats:
      - EU-Hosting-Status vor Vertrag verifizieren — Default ist US
      - Marketing-Label 'AI Runbook' kaschiert Workflow-Engine-Kern; reine Generierung neuer Runbooks ist sekundär
      - Pricing nur auf Anfrage, Enterprise-orientiert
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Flexibler als PagerDuty, bessere Trennung Alert vs. Incident
      complaints:
        - Vendor-CEO postet selbst auf HN
    sources:
      - id: rootly-com-sre-rootlys-ai-runbooks-faster-incident-response-for-sres
      - id: reddit-com-r-sre-comments-1pk7go7-pagerduty-for-sre-how-real-people-work-with-it
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Troubleshooting-Guides enthalten Remediation-Steps, Verification und Rollback (de-facto Runbooks); Davis CoPilot indiziert sie semantisch und schlägt sie kontextbezogen vor. Dynatrace ist DACH-stark (HQ Linz), EU-Hosting verfügbar, regulierte Kunden vorhanden. TELUS-Praxisbericht (Diginomica) belegt 15-Minuten-MTTR mit Davis AI CoPilot in Produktion.
    caveats:
      - Agentische Runbook-Ausführung bleibt Preview
      - Voller Wert nur in Dynatrace-Stack mit Grail-Daten
      - Guides werden weiterhin manuell editiert — KI ist Surfacer/Recommender, nicht Generator
      - Wert nur in voll integriertem Dynatrace-Stack mit Grail
      - Agentische Runbook-Ausführung noch Preview
    sources:
      - id: docs-dynatrace-com-docs-dynatrace-intelligence-davis-problems-app-resolve-problems-with-troubleshooting-guides
      - id: dynatrace-com-support-help-platform-davis-ai
      - id: diginomica-com-telus-cuts-incident-response-15-minutes-dynatrace-and-ai-driven-observability
  - id: cutover-com-ai-enabled-runbooks
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Etablierte Runbook-/Work-Orchestration-Plattform für Banken, Cloud-Migration und Disaster Recovery; AI Assistant generiert Runbooks aus statischen Quellen (Word, PDF, Confluence, Spreadsheets) mit RAG-basierter Strukturierung. Gartner Peer Insights belegt Enterprise-Einsatz im Bankensektor (400 Personen / 3700 Tasks). Banking-/DORA-Fit für DACH-Finanzdienstleister.
    caveats:
      - UK-Vendor — DPA und EU-Hosting-Region explizit verhandeln
      - Klassischer Enterprise-Sales mit langen Deal-Zyklen
      - Kein Self-Service
      - AI Assistant GA erst Anfang 2026 — unabhängige Bewertungen der KI-Funktionen fehlen noch
    sources:
      - id: cutover-com-ai-enabled-runbooks
      - id: gartner-com-reviews-product-cutover-collaborative-automation-platform
  - id: atlassian-com-software-rovo
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Wenn Confluence ohnehin Runbook-Quelle ist, surfacet Rovo Ops Runbooks/PIRs und kann PIR-Drafts generieren. Mit Atlassian-Realms in Frankfurt für DACH-Datenresidenz konfigurierbar.
    caveats:
      - Nur Atlassian Cloud — Data-Center-Häuser fallen raus
      - Realms-Konfiguration für EU-Residenz aktiv beauftragen
      - Erzeugt Confluence-Inhalte, keine ausführbaren Runbooks
      - Beste Qualität nur im Jira Service Management-Kontext
      - Nicht in Atlassian Government Cloud verfügbar
    sources:
      - id: support-atlassian-com-rovo-docs-using-ops-guide
  - id: docs-aws-amazon-com-systems-manager-latest-userguide-systems-manager-automation-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Deklarative SSM-Runbooks in YAML/JSON sind seit Jahren Banken-/Public-Sector-Standard in AWS-Frankfurt; mit Bedrock (Claude/Llama in eu-central-1) ergibt sich ein DACH-residenz-konformes DIY-Pattern für AI-Runbook-Selektion und -Erstellung.
    caveats:
      - Bedrock-Modellverfügbarkeit in eu-central-1 ist modellabhängig — Cross-Region-Inferenz vermeiden
      - Approval-Logik und Audit-Trail muss Kunde selbst bauen
      - Kein Out-of-the-Box-Produkt — Komposition aus mehreren Bausteinen
      - Stark AWS-zentriert
    sources:
      - id: exponentialtech-ai-blog-automated-incident-response-building-ai-runbooks-for-common-server-issues
  - id: robusta-dev
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Bündelt Prometheus-Alert-Enrichment, Self-Healing-Playbooks und HolmesGPT-Investigation; Markdown-Runbooks werden Alerts zugeordnet. Self-Hosted-Variante für DACH bevorzugen.
    caveats:
      - SaaS schickt Cluster-Daten extern — Hosting-Region und Joint-Controller-Frage klären
      - Helm-Setup ist Plattform-Team-Aufgabe
      - AI-Investigation nur mit eigenem LLM-Schlüssel oder SaaS
    sources:
      - id: github-com-robusta-dev-robusta
      - id: docs-robusta-dev-master-configuration-holmesgpt-holmes-chat-api-html
  - id: harness-io-products-ai-sre
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Suite-Spieler mit Automation Runbooks (Rollback, Feature-Flag-Toggle, Pipeline-Trigger) und nativer Kopplung an Harness CD/Chaos. Stark für DACH-Häuser, die ohnehin Harness als Plattform nutzen.
    caveats:
      - Wert primär bei bestehender Harness-Adoption — Standalone wenig attraktiv
      - EU-Hosting prüfen
      - Generierung neuer Runbooks weniger prominent als Ausführung bestehender
    sources:
      - id: harness-io-products-ai-sre
  - id: ilert-com-de-produkt-ilert-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "DACH-nativer Anbieter (Köln) mit EU-only-AI-Verarbeitung in Frankfurt/Stockholm; AI SRE analysiert Incidents, schlägt Rollbacks und Runbook-Schritte vor, alle Aktionen protokolliert/reversibel. Platform-Qualität durch unabhängigen Praktiker bestätigt. Conditional: AI SRE erst seit Nov 2025 in Produktion — externe Validierung der Runbook-spezifischen Capabilities fehlt noch."
    caveats:
      - Runbook-Generierung weniger ausgeprägt als reine Investigation/Remediation — Output bleibt teils ad-hoc
      - AI SRE-Feature erst seit Nov 2025 in Produktion — keine unabhängigen Praxisberichte zu Runbook-Capabilities
      - Geringere Marktreichweite als PagerDuty bei globalen Konzernen
      - AI-Inferenz nutzt AWS/Azure-EU-Modelle — Modell-Wahl bleibt limitiert
    sources:
      - id: ilert-com-de-produkt-ilert-ai
      - id: rtfm-co-ua-en-ilert-an-alternative-to-opsgenie-first-impressions-alertmanager-slack
start_here: "Einstieg mit einem bekannten, wiederkehrenden Incident-Typ (z.B. Pod-OOM): PagerDuty Advance erzeugt daraus ein Runbook-Template, das beim nächsten Vorfall Schritt für Schritt gegentestet wird. Dynatrace-Teams starten stattdessen mit Davis CoPilot, der bestehende Troubleshooting-Guides an offene Problems anfügt — zuerst surfacen, dann neu erstellen."
caveats: KI-Inferenz läuft bei PagerDuty laut DPA über US-LLM-Subprozessoren — EU-Storage-Region schützt nicht die Verarbeitung, was in DACH eine explizite Compliance-Prüfung voraussetzt. Generierte Runbooks sind ohne Test an realer Infra wertlos; ohne konsequente Versionsdisziplin driften sie schnell von der lebenden Umgebung ab.
sources: []
---
