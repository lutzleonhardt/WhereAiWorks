---
stage: operations-monitoring
order: 6
roles:
  - software-engineer
  - platform-devops-engineer
title: LLM- und AI-App-Observability
goal_label: Prompts, Tokens und Halluzinationen monitoren
suitability: good_fit
rationale: LLM-App-Observability hat eine eigenständige Toolklasse hervorgebracht, deren DACH-Ankerpunkt Langfuse ist — Berliner GmbH, MIT-OSS, EU-Cloud Frankfurt, SOC2 Type II und ISO 27001. Ohne Tracing-Basis fehlen Teams die Grundlagen für Prompt-Optimierung, Cost-Control und reproduzierbare Compliance-Nachweise.
tools:
  - id: docs-arize-com-phoenix
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: OSS (Apache/ELv2), OpenInference/OTel-nativ, Single-Container-Self-Host. Stärkste Eval-/Experiment-UI ohne Lizenzkosten. Gute Default-Wahl für OTel-mature DACH-Teams, die Vendor-Lock-in vermeiden wollen und Production-Tracing ohne Plattformbindung brauchen.
    caveats:
      - Production-Monitoring-Tiefe drängt Richtung kostenpflichtiger Arize-AX-Plattform (US-Cloud)
      - Schwächeres Prompt-Management als Langfuse/Opik
      - ELv2-Lizenz (nicht reines Apache) für einige Komponenten — kommerziell nutzbar, aber kein 'echtes' OSS
      - Arize AX ist US-Cloud-zentriert; EU-Datenresidenz für AX explizit erfragen
      - Phoenix OSS ist vorrangig Tracing/Eval; Production-Monitoring-Tiefe in AX (proprietär)
      - Cloud-Free-Tier nur 25k Spans/Monat
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Einfachste Self-Host-Story, OTel-nativ
        - Starke Eval-/Experiment-UI ohne Lizenzkosten
      complaints:
        - Schwächeres Prompt-Management
        - Production-Monitoring drängt Richtung kostenpflichtiger AX-Plattform
    sources:
      - id: docs-arize-com-phoenix-learn-resources-faqs-langfuse-alternatives
      - id: myengineeringpath-dev-tools-langfuse-vs-phoenix-arize
      - id: reddit-com-r-localllama-comments-1r4nhal-are-you-using-ai-observability-tools-before-going
  - id: datadoghq-com-product-llm-observability
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Etablierte Wahl für DACH-Enterprises mit bestehender Datadog-Plattform. EU-Region Frankfurt, Standardprozesse für DPA, native OTel-GenAI-Semconv-Support seit v1.37 reduziert Lock-in. End-to-End-Korrelation mit APM/RUM/Logs.
    caveats:
      - Pro-Span-Pricing skaliert hart bei hohem Trace-Volumen
      - US-Mutterkonzern — bei strenger Auslegung der Schrems-II-/EU-Cloud-Sovereignty-Anforderungen problematisch
      - Hallucination-/Eval-Features rufen externe Modelle auf — Datenfluss vor Compliance-Freigabe prüfen
      - Kein Self-Host (SaaS), für strenge Datenresidenz nur EU-Region als Mitigation
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Volle APM-Korrelation, ein einziger Stack
        - OTel-GenAI-Support reduziert Lock-in
      complaints:
        - Pricing pro Span/Trace skaliert hart
        - Kein Self-Host, problematisch für regulierte EU-Workloads
    sources:
      - id: datadoghq-com-blog-llm-otel-semantic-convention
      - id: datadoghq-com-blog-llm-observability-at-datadog-dashboards
      - id: reddit-com-r-langchain-comments-1rjn3pn-llm-observability-is-the-new-logging-quick
  - id: langfuse-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Berliner GmbH, MIT-OSS mit echtem Production-Self-Host, EU-Cloud Frankfurt, SOC2 Type II + ISO27001 + DPA + HIPAA-Alignment. Deckt Tracing, Prompt-Mgmt, Eval und Cost-Tracking in einem Stack. Für DACH-Enterprises die Default-Wahl, weil Datenresidenz, OSS-Lizenz und Vendor-Sitz alle in der EU sind.
    caveats:
      - Enterprise-Edition (SSO, RBAC, Audit-Logs) ist proprietär lizenziert — Lizenzkosten und EE-Terms vor Self-Host-Entscheidung prüfen
      - ClickHouse-Operations sind nicht trivial — Self-Host braucht DBA-Skills oder Managed-ClickHouse
      - Self-Host-Stack ist schwerer als Phoenix (OLAP + Queue + Blob)
      - Einige Premium-Features (z. B. SSO, RBAC-Detail) erst in Pro/Enterprise
      - Runtime-Abhängigkeit für Prompt-Fetch kann App blockieren, wenn nicht gecached
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Self-Host ohne Feature-Gating, MIT-Lizenz
        - Funktioniert als zentrale AI-Telemetrie im Homelab und in Prod
      complaints:
        - Runtime-Prompt-Fetch kann App blockieren bei Ausfall
        - Governance/Review-Workflow für Prompts schwach
    sources:
      - id: langfuse-com-self-hosting
      - id: open-techstack-com-blog-langfuse-vs-phoenix-vs-helicone-llm-observability-2026
      - id: get-langfuse-com-security
      - id: reddit-com-r-ai-agents-comments-1rsji8z-prompt-management-in-production-langfuse-vs-git-json
      - id: reddit-com-r-localllama-comments-1r4nhal-are-you-using-ai-observability-tools-before-going
  - id: traceloop-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Apache-2.0-OSS-Instrumentation auf OTel-Basis, treibt OTel-GenAI-Semconv-WG aktiv mit. Strategisch beste Wahl gegen Lock-in: Spans gehen an jedes OTLP-fähige Backend (Dynatrace, Grafana Tempo, Jaeger, Datadog). Für DACH-Teams mit eigenem Observability-Stack ideal."
    caveats:
      - Nur SDK — Backend muss separat betrieben werden
      - Eval-/Prompt-Management nur über Traceloop Cloud, nicht im OSS-Kern
      - Traceloop SaaS-Backend ist US-gehostet — EU-Compliance erfordert OSS-Self-Host plus eigenes OTel-Backend
      - Abhängigkeit von Maintainer-Tempo bei OTel-GenAI-Semconv-Updates
      - Backend-Auswahl liegt beim Team — kein integriertes UI ohne Traceloop SaaS
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - OTel-nativ, kein Lock-in
        - Auto-Instrumentation für viele Frameworks und Vector-DBs
      complaints:
        - Kein integriertes UI ohne SaaS
        - Weniger LLM-/Vector-DB-Coverage als Helicone laut Reviews
    sources:
      - id: github-com-traceloop-openllmetry-blob-main-readme-md
      - id: docs-dynatrace-com-docs-observe-dynatrace-for-ai-observability
      - id: github-com-traceloop-openllmetry
      - id: helicone-ai-blog-helicone-vs-traceloop
  - id: comet-com-site-products-opik
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Apache-2.0-OSS mit Self-Host, eingebauten Hallucination/Moderation/Relevance-Metriken und Agent-Optimizer-SDK. Solide Langfuse-Alternative für Teams, die bereits Comet nutzen oder einen jüngeren, agiler weiterentwickelten Stack wollen.
    caveats:
      - Jünger und weniger DACH-Praxiserfahrung als Langfuse
      - Comet-Cloud US-gehostet; Self-Host-Pfad und EE-Lizenzbedingungen vor Adoption prüfen
      - Kleinere Community/Plugin-Ökosystem als etablierte Anker
      - Prompt-Trace-Mapping und einige Integrationen erst kürzlich nachgezogen
      - Hosting-Optionen prüfen (Cloud / Self-Host) je nach DSGVO-Bedarf
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Schnelle Iteration, viele Eval-Metriken out of the box
      complaints:
        - Jünger als die etablierten Anker — weniger Erfahrungsberichte
    sources:
      - id: firecrawl-dev-blog-best-llm-observability-tools
      - id: github-com-comet-ml-opik-issues-3270
  - id: helicone-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Quick-Win via BaseURL-Switch, OSS-Self-Host via Docker, generöses Free-Tier. Sinnvoll als erste Logging-/Cost-Schicht ohne SDK-Eingriffe. Self-Host-Variante adressiert DSGVO-Bedarf, Cloud-Variante nicht.
    caveats:
      - Proxy-Architektur ist zusätzlicher kritischer Pfad und MITM-Punkt
      - Cloud-Variante US-zentriert; Self-Host für EU-Compliance quasi Pflicht
      - Eval-/Quality-Tiefe schwach — meist mit zweitem Tool (Langfuse, Braintrust) zu kombinieren
      - AI Gateway (Routing/Fallbacks) explizit als Beta gelabelt
      - Self-Host bei hohem Volume operativ aufwendig (ClickHouse-Tuning)
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - 30-Sekunden-Integration via BaseURL-Änderung
        - Sehr generöses Free-Tier
      complaints:
        - Begrenzte Eval-Tiefe — meist mit zweitem Tool kombiniert
        - Self-Host bei hohem Volume operativ aufwendig (ClickHouse-Tuning)
    sources:
      - id: blog-premai-io-llm-observability-setting-up-langfuse-langsmith-helicone-phoenix
      - id: open-techstack-com-blog-langfuse-vs-phoenix-vs-helicone-llm-observability-2026
      - id: aicosts-ai-blog-self-hosted-llm-observability-data-sovereignty-guide
      - id: reddit-com-r-langchain-comments-1rjn3pn-llm-observability-is-the-new-logging-quick
  - id: wandb-ai-site-weave
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Sinnvoll für Teams mit etabliertem W&B-Stack für klassisches ML-Experiment-Tracking, die GenAI-Workloads in derselben Plattform halten wollen. Enterprise-Tier mit Dedicated/On-Prem verfügbar.
    caveats:
      - Stärken eher in ML-Lifecycle als in reinem Production-Tracing
      - W&B-Cloud ist US-zentriert; W&B Dedicated/On-Prem teuer und enterprise-quote-only
      - Für Teams ohne W&B-Bestand höherer Einstiegsaufwand
      - Kein vollwertiger Self-Host wie bei Langfuse/Phoenix
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Eine Plattform für ML- und LLM-Workflows
        - Solide Eval-/Experiment-Tools
      complaints:
        - Logging kann ressourcenintensiv sein
        - Reine LLM-Observability ist nicht Kernfokus
    sources:
      - id: helicone-ai-blog-weights-and-biases
      - id: aisecurityandsafety-org-compare-wandb-weave-vs-openllmetry
      - id: reddit-com-r-langchain-comments-1rjn3pn-llm-observability-is-the-new-logging-quick
  - id: fiddler-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Valide Ergänzung für DACH-Enterprises mit expliziten Air-gapped/On-prem-Anforderungen und BaFin-/Versicherungs-Compliance: Trust Models für Hallucination/PII/Toxicity laufen vollständig on-prem in <100 ms ohne externe API-Calls. Enrichment-Framework (14+ Metriken) und RAG-Monitoring differenzieren. Als Erstanschaffung für generelle LLM-App-Observability jedoch nicht geeignet — Practitioner-Signal positioniert Fiddler primär als traditionelles MLOps-/Modell-Drift-Tool, nicht als LLM-App-Tracing- oder Agent-Observability-Plattform."
    caveats:
      - "Practitioner-Signal: als MLOps-/Training-Layer-Tool wahrgenommen, zu wenig auf Agent-Tracing und Production-LLM-App-Observability fokussiert"
      - Schwergewichtige Plattform — TCO und Implementierungszeit (3-6 Monate) realistisch ansetzen
      - Kein OSS-Pfad, Enterprise-Pricing ohne Self-Host-Option
      - EU-Hosting / DACH-Referenzen aktiv prüfen — US-Vendor-Default
      - Eval-Modelle laufen on-prem — Modell-Update-Lifecycle des Vendors prüfen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - On-prem Trust Models für Hallucination/PII in <100ms
        - Air-gapped-Deployment für regulierte Workloads
      complaints:
        - Zu stark auf traditionelles MLOps/Modell-Layer fokussiert, zu wenig auf Agent-Tracing und Production-LLM-Observability
    sources:
      - id: fiddler-ai-resources-fiddler-trust-service-for-llm-monitoring
      - id: docs-fiddler-ai-observability-llm-selecting-enrichments
      - id: reddit-com-r-aiagents-comments-1q8v1k7-evaluated-llm-observability-platforms-heres-what
  - id: langwatch-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "EU-Vendor (Niederlande), AGPL-3.0-OSS mit Self-Host via Docker/Kubernetes/Helm, ISO 27001 + SOC 2, OTel-nativ. Vollständiges LLMOps-Lifecycle in einer Plattform: Tracing, Eval, Dataset-Management, Prompt-Mgmt, Agent-Simulation-Testing und Human-in-the-loop. EU-Cloud ab €59/Monat. Verdient DACH-Aufmerksamkeit als vollständige EU-Alternative zu Langfuse — insbesondere für Teams, die Agent-Simulation-Testing und DSPy-Optimierung integriert brauchen."
    caveats:
      - "AGPL-3.0-Lizenz: für interne Observability-Nutzung unproblematisch, bei Embedding in eigene Produkte oder Distribution Legal-Check notwendig"
      - Kleinere DACH-Community-Präsenz als Langfuse/Langsmith
      - Markt-/Vendor-Reife geringer als bei den Top-3; EE-/Großkunden-Referenzen aktiv erfragen
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - OTel-nativ, kein Vendor-Lock-in
        - Vollständige Agent-Testing-Suite inkl. User-Simulator und DSPy-Optimierung
        - EU-Sitz, Self-Host via Kubernetes/Helm, EU-Cloud ab €59/Monat
      complaints:
        - Kleinere Community als Langfuse/Langsmith
        - AGPL-3.0 statt MIT — für kommerzielle Embedding-Szenarien prüfen
    sources:
      - id: langwatch-ai-observability
      - id: luismori-dev-article-litellm-vs-langwatch-comparison
      - id: aisecurityandsafety-org-compare-langwatch-vs-langsmith
  - id: dynatrace-com-platform-artificial-intelligence
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Enterprise-Observability-Plattform mit GenAI-Modul: End-to-End-Tracing über Frontend/Backend/RAG/LLM-Layer, Davis-AI-Engine für Root-Cause, Token-Cost- und Quality-Monitoring, A/B-Test-Insights für Modellvergleich. Setzt auf Traceloop OpenLLMetry oder OTel GenAI Semantic Conventions als Instrumentation-Quelle. Audit-Trails bis 10 Jahre — relevant für EU-AI-Act-Logging. Beste Wirkung für Enterprises, die bereits auf Dynatrace standardisiert sind."
    caveats:
      - Premium-Pricing ($74-150/Host laut Reviews)
      - Beste Wirkung nur bei vorhandener Dynatrace-Plattform
      - Eigene Eval-/Hallucination-Modelle weniger ausgereift als spezialisierte Anbieter
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Best day-1 value for ops with supported stack (service discovery, mapping, RCA)
        - Davis causal model works well with strong coverage and accurate dependency graphs
        - OneAgent auto-instrumentation reduces manual setup vs Datadog
      complaints:
        - Kubernetes integration needs careful webhook injection and redeploy handling
        - Not plug-and-forget unless your stack is pretty standard
        - Effort underestimated on service naming, ownership tagging, log ingestion cost
    sources:
      - id: docs-dynatrace-com-docs-observe-dynatrace-for-ai-observability
      - id: dynatrace-com-solutions-ai-observability
start_here: Langfuse self-hosted in einer LLM-App mit moderatem Traffic einbinden und einige Wochen Traces sammeln, bevor Eval-Pipelines und Cost-Tracking ausgebaut werden. Teams mit bestehender Datadog-Plattform können alternativ Datadog LLM Observability einsetzen, das APM-Traces direkt korreliert und nativen OTel-GenAI-Support mitbringt.
caveats: Prompt- und Response-Tracing erfasst typischerweise Kunden-Eingaben — DSGVO-konforme Pseudonymisierung und definierte Aufbewahrungsfristen sind vor dem Produktiveinsatz zu regeln. Hallucination-Detection bleibt heuristisch; aussagekräftige Eval-Pipelines erfordern eigene Ground-Truth-Daten und sind kein Out-of-the-box-Feature.
sources: []
---
