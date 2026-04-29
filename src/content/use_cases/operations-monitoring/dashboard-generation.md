---
stage: operations-monitoring
order: 13
roles:
  - software-engineer
  - platform-devops-engineer
title: Dashboard- und Alert-Generierung
goal_label: Dashboards und Alerts aus Klartext erzeugen
suitability: conditional
rationale: "Grafana Assistant, Datadog Bits AI und Dynatrace Davis CoPilot generieren Dashboards und Queries direkt aus natürlicher Sprache – plattformintegriert, ohne Kontextwechsel. Der Hebel ist der reale Engpass: neue Services gehen ohne Dashboards in Produktion, weil manuelle Erstellung zu aufwändig bleibt."
tools:
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Erzeugt Dashboards/Notebooks/Widgets aus NL und integriert sich tief in vorhandene Tags/Monitors. Datadog ist DACH-präsent (Niederlassung Berlin, EU-Region Frankfurt, ISO27001/SOC2/GDPR/AVV). Das Per-Run-Pricing ist allerdings ein Cost-Governance-Risiko, das DACH-Einkauf hart bewerten wird.
    caveats:
      - Per-Run-Pricing ~30 USD pro Investigation – Budget-Forecast schwierig
      - Qualität korreliert mit OTEL-/Tagging-Hygiene
      - PII-Redaction in Logs vor LLM-Versand obligatorisch
      - Sub-Processing über OpenAI/AWS – DPA und Datenflussdiagramm für DSGVO-Verantwortliche obligatorisch
      - Telemetriedaten enthalten oft PII/Geschäftsdaten in Logs – Pre-Filter/Redaction ist Pflicht vor LLM-Versand
      - "Pro-Run-Kosten erfordern internes Approval-Gating (Beispiel: $600 Mehrkosten in einer Woche aus r/sre)"
      - Praktiker auf r/sre berichten von hohen Per-Use-Kosten (~30 USD pro Investigation) – Adoption skaliert schlecht
      - Qualität korreliert stark mit Tagging-/OTEL-Hygiene; ohne saubere Instrumentation generische Resultate
      - Nur sinnvoll für Teams, die ohnehin in Datadog investiert sind
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Sehr stark bei sauberer OTEL-/Tagging-Hygiene
        - Spart Zeit beim Mustererkennen
      complaints:
        - Pro-Run-Pricing macht Einsatz unkalkulierbar (~30 USD/Run)
        - Bei schwacher Instrumentation generische Outputs
    sources:
      - id: datadoghq-com-blog-introducing-bits-assistant
      - id: docs-datadoghq-com-bits-ai-getting-started
      - id: reddit-com-r-observability-comments-1rsga5d-the-dirty-and-very-open-secret-of-ai-sre-tools
  - id: grafana-com-products-cloud-ai-assistant
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Direkt in Grafana Cloud (sowie zunehmend on-prem) eingebauter Assistant, der aus NL Dashboards scaffolded und Panels gegen Live-Daten validiert. SOC2/GDPR/RBAC-Story explizit dokumentiert, EU-AI-Act-Bezug benannt. Für DACH-Kunden mit BYOC oder On-Prem-Wunsch praktikabel; Self-Managed-Variante schließt die Souveränitätslücke.
    caveats:
      - On-Prem-Funktionsumfang reduziert; LLM-Backend muss konfiguriert werden
      - Generische Startgerüste – SLI/SLO-Design bleibt menschliche Aufgabe
      - Sub-Processing über OpenAI/Azure-OpenAI prüfen, DPA einholen
      - On-Prem-Funktionsumfang reduziert; Bring-Your-Own-LLM-Konfiguration nötig, sonst Datenfluss zu OpenAI/Azure-OpenAI
      - DPA/AVV verfügbar, aber Daten-Subprozessor-Liste prüfen (US-Hyperscaler im Backend)
      - Auditierbarkeit der Assistant-Aktionen für SOX/BaFin-Kontexte vor Rollout dokumentieren
      - Volle Funktionalität an Grafana Cloud gebunden; on-prem-Variante hat reduzierten Feature-Umfang
      - Generierte Dashboards bleiben generische Startgerüste – SLI/SLO-Design muss menschlich nachgeschärft werden
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Zeigt seine Arbeitsschritte, baut Vertrauen auf
      complaints:
        - Skepsis ob AI-SRE-Tools nicht nur LLM-Wrapper sind
    sources:
      - id: grafana-com-blog-grafana-assistant-everywhere
      - id: grafana-com-docs-grafana-cloud-machine-learning-assistant-guides-querying
      - id: grafana-com-products-cloud-ai-assistant
      - id: reddit-com-r-observability-comments-1rsga5d-the-dirty-and-very-open-secret-of-ai-sre-tools
  - id: claude-com-product-claude-code
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Für IaC-/GitOps-Teams, die Dashboards/Alerts versioniert in Git pflegen, der natürlichste Pfad. Über AWS Bedrock EU oder Vertex EU lassen sich Datenflüsse DSGVO-konform halten – LLM-Governance liegt aber beim Kunden.
    caveats:
      - Generischer Coding-Assistent, kein Live-Daten-Bezug
      - Generierte PromQL-Schwellen sind Schätzungen
      - Backend-Wahl (Anthropic API vs. Bedrock EU) bestimmt Compliance-Profil
      - Daten-Boundary hängt von gewähltem Backend (Anthropic API vs. Bedrock EU vs. Vertex EU) ab
      - Kein Live-Telemetrie-Bezug – generierte Schwellen sind reine Schätzungen
      - Generischer Coding-Assistent, nicht observability-nativ – kein Live-Datenbezug
      - Generierte PromQL-Schwellen ohne Service-spezifische Daten bleiben Schätzungen
      - Validierung (promtool, Test-Queries) bleibt Pflicht des Engineers
    sources:
      - id: bestremotetools-com-ai-tools-for-writing-prometheus-alerting-rules-2026
      - id: bestremotetools-com-ai-tools-for-generating-grafana-dashboard-json-templates-fro
  - id: elastic-co-docs-solutions-observability-ai-observability-ai-assistant
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Bring-Your-Own-LLM-Architektur, Self-Managed-Deployment möglich, Frankfurt-Region in Elastic Cloud – die einzige Option im Set, die wirklich air-gapped und EU-souverän betreibbar ist. Stark für DACH-Kunden mit harten DSGVO-/BaFin-Anforderungen.
    caveats:
      - Eher Query-Generator + Alert-Enricher als reiner Dashboard-Generator
      - Bring-Your-Own-LLM-Konfiguration ist Pflicht
      - Platinum-Lizenz für AI-Assistant erforderlich
      - Bring-Your-Own-LLM-Konfiguration ist Pflicht – ohne Konfiguration kein AI-Assistant
      - Self-Managed-Lizenzkosten ab Platinum-Tier; AI-Connector verbraucht Token kontingentiert
      - Eher Query-Generator + Alert-Enricher als reiner Dashboard-Generator – Dashboard-Erstellung erfolgt indirekt über Visualizations
      - AI-Connector kann Token-/Funktionscall-Limits in komplexen Alerts überschreiten
    sources:
      - id: elastic-co-docs-solutions-observability-ai-observability-ai-assistant
  - id: github-com-robusta-dev-robusta
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Open-Source, self-hostbar, Bring-Your-Own-LLM – das ist die DACH-souveränitätsfreundliche Architektur. Erzeugt Kubernetes-native Alerts ohne PromQL-Schreibarbeit. AI-Anteil (HolmesGPT) optional und in Kunden-LLM-Boundary konfigurierbar.
    caveats:
      - Fokus auf Kubernetes/Prometheus – kein generischer Dashboard-Builder
      - HolmesGPT erfordert separate LLM-Governance
      - Robusta-SaaS-Variante in US-Cloud – On-Prem nutzen
      - Kommerzielle Robusta-SaaS in US-Cloud – On-Prem-Variante für DACH-Compliance nutzen
      - HolmesGPT als optionale AI-Schicht erfordert separate LLM-Governance
      - Generierte Alert-Schwellen sind heuristisch, SLO-Bezug muss separat modelliert werden
      - AI-Anteil (HolmesGPT) optional und stark abhängig vom angebundenen LLM
    sources:
      - id: github-com-robusta-dev-holmesgpt
  - id: checklyhq-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Berlin-basierter Synthetic-Monitoring-Anbieter mit Monitoring-as-Code-First-Ansatz. LLM-agnostisch über Cursor/Claude/Copilot – Generierung von Checks/Alerts/Dashboards passiert im Kunden-IDE, nicht im Vendor-Backend. Likely missed by market scan because Checkly positioniert sich als 'AI-native by accident' (MaC + bestehende Coding-Assistenten) statt mit eigenem AI-Feature.
    caveats:
      - Fokus auf synthetisches Monitoring – kein klassischer Metrics/Logs-Dashboard-Generator
      - AI-Qualität hängt 100 % vom kundenseitig konfigurierten LLM ab
      - Enterprise-Reife (SSO/Audit) im Mid-Market-Segment, nicht Großkonzern
    sources:
      - id: checklyhq-com-blog-ai-powered-monitoring-out-of-the-box-with-checkly
  - id: coralogix-com-docs-user-guides-alerting-create-an-alert-metrics-anomaly-detection-alerts
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Bring-Your-Own-Cloud-Architektur (Daten verbleiben im Kundenbucket) plus 'Olly' als NL-Investigation-Agent. Das BYOC-Modell ist für DACH-Datensouveränitätsthemen ein starkes Argument. Likely missed by market scan because Coralogix wird primär als Log-/Cost-Optimization-Plattform vermarktet, nicht als AI-Dashboard-Generator.
    caveats:
      - Olly ist primär Investigation-Agent, Dashboard-Generierung weniger ausgeprägt als bei Grafana/Datadog
      - Cloud-Bucket-Architektur erfordert Cloud-Engineering-Reife
      - EU-Region-Verfügbarkeit (z. B. Frankfurt) prüfen
    sources:
      - id: coralogix-com
  - id: ibm-com-products-instana
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Self-Hosted/Air-Gap-fähige APM-Plattform mit IBM watsonx-Integration für AI-Funktionen. Für regulierte DACH-Kunden (Banken, Versicherer, Pharma) oft die Default-Wahl, weil Daten zwingend hinter der Firewall bleiben. Likely missed by market scan because IBM positioniert AI als watsonx-Suite-Feature und nicht primär als 'NL-Dashboard-Generator'.
    caveats:
      - AI-Dashboard-Generierung ist nicht Kernfunktion – fokussiert auf Auto-Discovery und 1-Sekunden-Telemetrie
      - IBM-Lizenzmodell und Vertriebsweg im Mid-Market schwerfällig
      - watsonx-AI-Funktionen je nach Edition variabel verfügbar
    sources:
      - id: ibm-com-products-instana-deployment-options
  - id: newrelic-com-platform-new-relic-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: NL2NRQL-Pipeline und Alert-Condition-Recommendation-Skill decken den Use Case partiell ab – passt für Teams, die bereits in New Relic investiert sind und NL-Query-Unterstützung benötigen. EU-Datacenter (Frankfurt), SOC2/ISO27001/GDPR vorhanden. Kein vollständiges 1-Click-Dashboard-Scaffolding wie Grafana oder Datadog; Fokus liegt auf Query- und Alert-Empfehlungen.
    caveats:
      - Keine vollständige Dashboard-Scaffolding-Funktion auf Knopfdruck wie Grafana/Datadog – Fokus liegt auf Query- und Alert-Empfehlungen
      - "Keine unabhängige Praktiker-Evidenz auffindbar: Community-Kritik an NR (r/devops Jan 2026) erwähnt NRAI-Dashboard-/Alert-Features nicht – auch nicht als Gegenargument"
      - AI-Funktionen laufen über Azure OpenAI – DACH-Kunden mit US-CLOUD-Act-Bedenken müssen DPA/Datenfluss prüfen
      - Kein offizielles On-Prem-Deployment – komplettes SaaS-Lock-in
      - Generierte Alert-Empfehlungen sind nur so gut wie die Entity-Klassifikation; SLO-Bezug muss separat etabliert werden
    practitioner_signal:
      volume: low
      tenor: unknown
      praise: []
      complaints:
        - Kein Praktiker-Signal zu NRAI-AI-Features auffindbar – Community-Threads über NR fokussieren auf Pricing/Performance, nicht AI-Nutzwert
    sources:
      - id: docs-newrelic-com-docs-agentic-ai-alert-intelligence-tool
      - id: newrelic-com-blog-news-nrai-natural-language-to-nrql
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: DACH-Vendor mit HQ in Linz, deutschsprachiger Doku/Support, EU-Tenant-Optionen und kausaler KI als Halluzinations-Mitigation. NL2DQL-Prompt-Tiles in Dashboards adressieren den Use-Case direkt. Für regulierte DACH-Branchen oft die einzige Option, die DSGVO und Datensouveränität sauber abbildet. Practitioner-Community bestätigt NL-zu-DQL-/Dashboard-Tile-Generierung als funktionierend (Feb 2026); Gartner Peer Insights (1.626 verifizierte Enterprise-Käufer) mit 4,4/5 AI-Bewertung als zweite unabhängige Quelle.
    caveats:
      - Lock-in an Grail/DQL und Dynatrace-Tenant
      - Lizenzkosten exklusionär für KMU
      - Generierte DQL muss vor produktivem Einsatz geprüft werden
      - Praktiker beschreiben Davis CoPilot als 'passiv und rigide' – NL-zu-DQL funktioniert, aber kein proaktives autonomes Reasoning ohne manuellen Prompt (Dynatrace Community, Feb 2026)
      - "AI-Konsistenz bemängelt: gleiche Query kann unterschiedliche DQL-Ergebnisse liefern (Gartner Peer Insights)"
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - NL-zu-DQL-Generierung für Dashboard-Tiles bestätigt und funktionierend
      complaints:
        - Wirkt passiv und rigide – kein autonomes Reasoning ohne manuellen Prompt (Dynatrace Community Forum, Feb 2026)
        - AI liefert bei gleicher Query inkonsistente DQL-Ergebnisse (Gartner Peer Insights)
    sources:
      - id: dynatrace-com-news-blog-advancing-aiops-preventive-operations-powered-by-davis-ai
      - id: community-dynatrace-com-t5-open-q-a-thoughts-on-davis-copilot-capabilities-compared-to-agentic-m-p-293993
      - id: gartner-com-reviews-market-observability-platforms-vendor-dynatrace
start_here: "Grafana Assistant eignet sich als risikoarmer Einstieg: für einen frisch instrumentierten Service ein Scaffold-Dashboard generieren lassen und anschließend zwei service-spezifische Panels manuell nachschärfen. Wer bereits in Datadog oder Dynatrace investiert ist, startet direkt mit dem jeweiligen integrierten NL-Assistant."
caveats: Generierte Dashboards sind Startgerüste – SLI/SLO-Design und Alert-Schwellenwerte müssen menschlich kalibriert werden, sonst entsteht Alert-Rauschen. Bei Grafana Cloud und Datadog Bits AI fließen Telemetriedaten über US-Cloud-LLM-Backends; DPA/AVV einholen und PII in Logs vorab bereinigen.
sources: []
---
