---
stage: development
order: 3
roles:
  - software-engineer
title: AI-gestütztes Debugging
goal_label: Stack-Traces erklären und Root-Cause finden lassen
suitability: good_fit
rationale: AI-Debugging ist der zweitstärkste AI-Einsatzbereich in Entwickler-Surveys (Stack Overflow 56,7%, ACTI 45,4%) und in jedem Mainstream-Coding-Tool verbaut. Copilot, Claude Code und Sentry Seer belegen, dass der Stack-Trace-zu-Root-Cause-Loop heute produktionsreif ist. Für DACH-Unternehmen mit bestehendem Observability-Stack (Datadog, Sentry) ist der Einstieg ohne Zusatzbeschaffung möglich.
tools:
  - id: aws-amazon-q-developer-debug-diagnose
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Schluckt Stack Traces aus CloudWatch/Lambda und erklaert sie gegen AWS-Service-Kontext (IAM, S3 etc.). Daten bleiben in AWS-Region — fuer DACH-Banken auf AWS deshalb zentraler Slot.
    caveats:
      - Eng an AWS-Stack gebunden — ausserhalb durchschnittlich
      - Pro-Plan noetig fuer volle Funktionalitaet
      - Bindung an AWS-Identity-Center fuer Enterprise-Tier
      - Q Developer in DACH erst seit 2024 mit vollem Sprachumfang
      - Code-Modell-Qualitaet ausserhalb AWS-Kontext durchschnittlich
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Sehr gut bei AWS-spezifischen Fehlern
        - Datenresidenz innerhalb AWS-Region
      complaints:
        - Schwach bei generischer Code-Analyse
        - UX hinter Copilot/Cursor
    sources:
      - id: aws-amazon-q-developer-debug-diagnose-amazon
  - id: continue-dev
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: OSS-IDE-Extension als Frontend fuer beliebige LLMs (lokal, Bedrock, Azure). Pragmatischer Mittelweg fuer DACH-Teams, die kein US-SaaS-Tool durch Compliance kriegen — Stack Trace markieren, /explain auf eigenem Backend.
    caveats:
      - Backend-Betrieb beim Team — Plattformteam noetig
      - Agent-Loop schwaecher als Cursor/Claude Code
      - Konfigurationsdrift in groesseren Teams real
      - Continue hat 2025 Enterprise-Tier eingefuehrt — Vertrag fuer Audit-/Telemetrie-Anforderungen pruefen
      - Wenig Enterprise-Support
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Voll konfigurierbar
        - Lokale Modelle moeglich
      complaints:
        - Setup-Aufwand
        - Polish hinter SaaS-Konkurrenz
    sources:
      - id: continue-dev-commit-pr-via-custom-slash-commands-continue
  - id: honeycomb-query-assistant-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Natuerlichsprachige Queries auf OpenTelemetry-Traces beschleunigen Distributed-Debugging. Wenn der Stack Trace allein nicht reicht und Tracing-Coverage gut ist, oft schneller als manuelles BubbleUp.
    caveats:
      - Keine Code-Fix-Generierung — nur Trace-Analyse
      - Wirkt nur bei breiter Tracing-Coverage
      - Honeycomb hostet primaer in US — fuer GDPR-strikte Daten Hosting-Region pruefen
      - Query Assistant erklaert keine Stack Traces im Code-Sinn, nur Trace-Queries
    sources:
      - id: honeycomb-query-assistant-ai-honeycomb
  - id: new-relic-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Errors-Inbox-Triage: fasst Stack Traces zusammen, korreliert mit APM-Spans und schlaegt Root-Cause-Hypothesen vor. Suite-Feature, das in bestehenden New-Relic-Stacks ohne Zusatzbeschaffung verfuegbar ist."
    caveats:
      - Nur sinnvoll mit New Relic als Observability-Stack — Lock-in
      - Code-Fix-Komponente schwaecher als Sentry Seer
      - Pricing-Modell (Compute-basiert) macht AI-Volumen schwer kalkulierbar
      - Telemetrie-Daten in US/EU-Region — pruefen fuer DACH-Compliance
    sources:
      - id: new-relic-ai-newrelic
  - id: rookout-dynatrace-live-debugger-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Live-Snapshots aus Production ohne Redeploy plus kausale Davis AI fuer Root-Cause-Vorschlaege gegen Topologie und Trace. Dynatrace ist DACH-naher Player (HQ Linz) — fuer bestehende Dynatrace-Kunden naheliegender Slot.
    caveats:
      - Davis AI ist deterministisch-kausal, nicht generativ — andere Erwartungshaltung
      - Plattform-Lock-in und aufwendiges Onboarding
      - Rookout-Brand wird bei Dynatrace ausgephased — Migration zu Live Debugger pruefen
    sources:
      - id: rookout-dynatrace-live-debugger-ai-dynatrace
  - id: tabnine
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: /explain und /fix wie Copilot, aber mit Self-Hosted-/Air-Gapped-Deployment — fuer DACH-Banken, die Stack Traces nicht aus dem Haus geben duerfen, oft die einzige praktikable Option.
    caveats:
      - Modell-Qualitaet hinter Frontier-Modellen
      - Air-Gap-Setup erfordert dedizierte GPU-Kapazitaet — TCO-Realitaetscheck noetig
      - 2025 stark Richtung 'Frontier-Routing' gegangen — Self-Host-Option weiter verfuegbar pruefen
      - Reasoning ueber komplexe Traces begrenzt
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Einziges seriöses On-Prem-Angebot
        - Compliance-fit fuer regulierte Branchen
      complaints:
        - Schwaecher als Copilot bei komplexen Bugs
        - UX weniger ausgereift
    sources:
      - id: tabnine-chat-tabnine
  - id: augment-code
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Enterprise-positionierter Coding-Assistent mit Codebase-Index, Stack-Trace-Erklaerung und expliziter SOC2/Compliance-Story. Augment vermarktet sich gegen Cursor/Copilot, nicht primaer als 'Debugging-Tool' — im DACH-Markt jung.
    caveats:
      - Junges Unternehmen — Roadmap-/Vendor-Risiko fuer DACH-Banken
      - EU-Hosting-Verfuegbarkeit am Vertrag pruefen
      - Praktiker-Signal-Lage in DACH duenn
    sources:
      - id: augment-code-augmentcode-augmentcode-com-learn-automate-multi-file-code-refactoring-with-ai-agents-a-step-by-step-guide
  - id: google-gemini-code-assist
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Hyperscaler-AI-Pendant zu Copilot/Q Developer mit /fix und Stack-Trace-Erklaerung; Daten bleiben in GCP-Region (inkl. EU). Fuer DACH-Kunden auf Google Cloud die natuerliche Wahl.
    caveats:
      - Voller Wert nur in GCP-Stacks und mit Codebase-Indexing-Lizenz
      - Modell-Qualitaet im Code-Bereich historisch hinter Claude/GPT
      - DACH-Marktanteil GCP klein — oft nicht der dominante Hyperscaler
    sources:
      - id: google-gemini-code-assist-google-cloud-google-com-gemini-docs-codeassist-code-customization
  - id: komodor
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Kubernetes-Troubleshooting mit AI-Root-Cause: korreliert Pod-Crashes, Event-Stack-Traces und Deploy-Diff zu einer Diagnose. Fuer DACH-Konzerne mit grossen K8s-Estates relevanter Slot."
    caveats:
      - Nur sinnvoll im Kubernetes-Kontext — kein generischer Stack-Trace-Erklaerer
      - SaaS-First — On-Prem/EU-Region pruefen
      - Eigenstaendig zu Observability-Stack (Datadog/Dynatrace) — Funktionsdopplung moeglich
    sources:
      - id: komodor-komodor
  - id: aider
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "CLI-Coding-Agent mit nativem Git-Workflow: Stack Trace per Message uebergeben, Aider liest betroffene Files, schlaegt Patch vor, committet als reviewbaren Commit. Modellagnostisch — auch mit Azure-OpenAI/Bedrock im DACH-Setup."
    caveats:
      - CLI-only, keine IDE-UI
      - Kontextfenster-Mgmt manuell
      - Keinerlei kommerzielles SLA — nur fuer Tech-affine Teams
      - Modell-API-Schluessel-Verwaltung muss organisationsweit geloest sein
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Sauberer Git-Workflow, kleine reviewbare Commits
        - Modell-agnostisch
      complaints:
        - Steile Lernkurve ggue. IDE-Tools
        - Manuelle Kontextpflege
    sources:
      - id: aider-aider-chat-aider-chat-docs-usage-commands-html
      - id: aider-mitchgordon-me
      - id: aider-michael-hoennig-de
  - id: claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Terminal-Agent, der Stack Traces aufnimmt, Repo navigiert, Tests laufen laesst und Hypothesen iterativ prueft — sehr stark fuer Multi-File-Heisenbugs. Bedrock-/Vertex-Hosting macht es DACH-bank-tauglich.
    caveats:
      - Token-Kosten bei Heisenbug-Sessions explodieren — Budget-Cap ratsam
      - "CLI-zentrisch: schwerer zu auditieren als IDE-basierte Tools"
      - Iterative Hypothesen erfordern Dev-Aufsicht — Halluzinationsrisiko
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Loest schwierige Heisenbugs durch iteratives Probieren
        - Gute Integration mit Tests/CI
      complaints:
        - Teuer bei langen Sessions
        - Kann sich in Sackgassen festfahren
    sources:
      - id: claude-code-claude-docs-claude-com-en-docs-claude-code-hooks
      - id: claude-code-dev-to-debugging-patterns
      - id: claude-code-dev-to-production-workflow
  - id: cline
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: VS-Code-Extension mit agentischem Loop um beliebige LLM-Backends (lokal, Bedrock, Azure). Stack Trace einfuegen, Cline laeuft Tests und schlaegt Patch vor — wegen BYO-Model die einzige praktische Option fuer DACH-Teams mit lokalen-Modell-Pflicht.
    caveats:
      - Qualitaet haengt am gewaehlten Modell
      - OSS — Lieferantenrisiko nach BAIT/DORA explizit dokumentieren
      - Unbeaufsichtigte Tool-Use-Faehigkeit erfordert Sandboxing
      - Token-Verbrauch bei langen Sessions hoch
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Bring-your-own-model — auch lokal/On-Prem
        - "Transparent: zeigt jeden Schritt"
      complaints:
        - Token-Verbrauch hoch
        - Ohne starkes Modell schwach
    sources:
      - id: cline-github
      - id: cline-mtlynch-io
      - id: cline-sap-linkedin-sabetta
  - id: datadog-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Suite-Feature in Datadog APM/Logs: korreliert Stack Trace mit Spans, Logs und Deploys und schlaegt Root Cause vor. Fuer DACH-Stacks, die Datadog ohnehin haben, der pragmatische Erstanlauf bei Production-Heisenbugs."
    caveats:
      - Nur sinnvoll mit existierendem Datadog-Vertrag — sonst Kostenfalle
      - "Cross-Tenant-LLM-Pipeline: PII in Logs explizit maskieren (Datadog Sensitive Data Scanner)"
      - Bits AI SRE erst GA Dez 2025 — EU-Region-Verfuegbarkeit je Feature staged
      - Outbound zu Datadog-LLM-Pipeline — fuer Banken/Versicherer Pseudonymisierung pflichtig
    sources:
      - id: datadog-bits-ai-datadoghq
      - id: datadog-bits-ai-betterstack
      - id: datadog-bits-ai-bytesized-substack
  - id: copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: /explain und /fix sind dokumentierte Slash-Commands fuer Stack Traces direkt im IDE-/Terminal-Kontext. Copilot Business/Enterprise mit Zero-Retention und Microsoft-DPA ist in DACH-Konzernen real durchsetzbar.
    caveats:
      - Erklaert oft Symptom statt Ursache — bekannte Beobachtung aus Praxis
      - Halluziniert Stack-Frame-Bedeutungen, wenn Repo-Kontext fehlt
      - "Bei Banken: 'Microsoft als Auftragsverarbeiter' erfordert DPA + technisch-organisatorische Massnahmen-Dokumentation"
      - Copilot Workspaces (Multi-File-Debug) noch nicht ueberall GA
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Schnelle Erstanalyse von Stack Traces im Editor
        - Gute Java/Python/JS-Abdeckung
      complaints:
        - Patcht Symptom statt Ursache
        - Verliert Kontext bei langen Traces
    sources:
      - id: github-copilot-chat-debug-mode-github
      - id: copilot-dev-to-production-troubleshooting
      - id: copilot-dev-to-robin-debugging
  - id: jetbrains-ai-assistant
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Direkt im Debugger der JetBrains-IDEs: 'Explain Runtime Error' liest realen Debugger-State, Junie iteriert als Agent. Tschechischer Vendor, gute DACH-Akzeptanz und konfigurierbare lokale/EU-Modelle."
    caveats:
      - Junie-Agent-Qualitaet unter Claude Code/Cursor — nicht als alleiniger Debug-Stack
      - On-Prem/EU-Hosting-Versprechen am Vertrag pruefen, nicht nur Marketing
      - Modell-Performance hinter Anthropic/OpenAI-Frontier zurueck
      - Beste Wirkung nur in JetBrains-IDEs
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Tiefe IDE-Integration, sieht echten Debugger-State
        - Datenschutzoptionen besser als US-Konkurrenz
      complaints:
        - Antworten teils langsamer/dumpfer als Copilot
        - Junie-Agent noch unreif
    sources:
      - id: jetbrains-ai-assistant-junie-jetbrains
      - id: jetbrains-ai-devtoolsreview
      - id: jetbrains-ai-toolstac
  - id: sentry-seer
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "AI-Agent direkt im Error-Monitoring: schluckt Production-Stack-Traces, schlaegt Root Cause vor und erzeugt Patch-PRs. Genau der Stack-Trace-zu-Fix-Loop der Use Case, mit EU-Region und etablierter Sentry-Compliance-Story (SOC2/ISO27001)."
    caveats:
      - Seer erzeugt Patch-PRs gegen Repo — Review-Pflicht in regulierten Umgebungen explizit verankern
      - EU-Region nur bei bestimmten Plans default; Vertragsklausel pruefen
      - Daten verlassen Kunden-Infra Richtung Sentry/LLM-Anbieter — DACH-Compliance pruefen
      - Lock-in an Sentry als Error-Monitoring-Plattform
    sources:
      - id: sentry-seer-sentry
      - id: sentry-seer-visualsoft
      - id: sentry-seer-dev-to-mastra
  - id: sourcegraph-cody
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Code-Graph fuer Cross-Repo-Symbolaufloesung beim Microservice-Stack-Trace; Self-Hosted/On-Prem ist in DACH-Banken oft das ausschlaggebende Kriterium gegen alle SaaS-Konkurrenten.
    caveats:
      - Sourcegraph hatte 2024/25 Pricing-/Strategieshift — Vertragsstabilitaet pruefen
      - Self-Hosted-Deployment erfordert dediziertes Plattformteam
      - Code-Indexing-Setup nicht trivial
      - UI-Polish hinter Cursor zurueck
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Gut fuer Monorepos / Microservices
        - On-Prem moeglich
      complaints:
        - Weniger 'magisch' als Cursor/Copilot
        - Setup-Aufwand hoch
    sources:
      - id: sourcegraph-cody-sourcegraph-sourcegraph-com-docs-cody-capabilities-commands
      - id: sourcegraph-cody-devtoolsreview
      - id: sourcegraph-cody-aiforcode
start_here: "Einstieg mit Copilot Chat (/explain, /fix) oder JetBrains AI Assistant direkt am konkreten Stack-Trace — niedrige Hürde, da kein neues Tool nötig. Bei Production-Bugs mit Observability-Daten ist Datadog Bits AI oder Sentry Seer direkter: Trace, Logs und Deploy-Kontext sind dort bereits gebündelt. Reproduzierbarer Test plus menschliche Verifikation des Fix-Vorschlags bleiben in jedem Fall Pflicht."
caveats: "AI erklärt häufig das Symptom statt der Ursache — plausibel klingende Falschdiagnosen sind dokumentiert und erfordern Dev-Verifikation. In DACH-Banken und Versicherern können Stack-Traces Personenbezug enthalten: Pseudonymisierung oder On-Prem-Deployment (Tabnine, Continue.dev) ist vor dem Versand an Cloud-LLMs obligatorisch. Token-Kosten bei langen iterativen Debug-Sessions sollten per Budget-Cap begrenzt werden."
sources: []
---
