---
stage: architecture-design
order: 12
roles:
  - software-architect
  - platform-devops-engineer
title: Audit-/Logging-Architektur für KI-Systeme entwerfen
goal_label: Replay-fähige Logging-Topologie für KI-Entscheidungen designen
suitability: conditional
rationale: Langfuse (Berlin, ISO27001, self-hostbar) liefert mit seinem Trace-/Generation-Schema den konkretesten Baustein für eine replay-fähige LLM-Audit-Schicht, bei der regulierte Workloads die eigene Infrastruktur nicht verlassen müssen. Die in OpenTelemetry übernommenen LLM-Semconv (OpenLLMetry) bieten dazu den vendor-neutralen Architekturrahmen, der Lock-in vermeidet und Spans an beliebige Backends weiterleitet.
tools:
  - id: claude-com-product-claude-code
    fit: conditional
    sources:
      - id: claude-com-product-claude-code
    why_it_fits: "Als 'Pair Architect' fuer Trade-off-Diskussionen, Schema-Entwurf und Generierung von Skeletten (LiteLLM-Hooks, OTel-Spans, Retention-Jobs) brauchbar. Ueber Bedrock/Vertex auch in EU-Region einsetzbar. Bleibt Hilfstool, kein Compliance-Beweis. Einschränkung: Kein eigenes EU-Rechenzentrum bei Anthropic; EU-Hosting nur via Cloud-Reseller."
    enterprise_readiness: team_ready
  - id: credo-ai
    fit: conditional
    sources:
      - id: credo-ai-product
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als AI-Governance-/GRC-Plattform und nicht als Engineering-Tool kategorisiert. Liefert das Compliance-Mapping (EU-AI-Act-Risikoklassen, Art.-12-Records, Use-Case-Registry), das die rein technische Logging-Schicht (Langfuse/LiteLLM) ergaenzt. Fuer Architekt relevant, um zu wissen, welche Felder ueberhaupt zu loggen sind. Einschränkung: US-SaaS; EU-Hosting/DPA pruefen."
    enterprise_readiness: team_ready
  - id: datadoghq-com-product-llm-observability
    fit: conditional
    sources:
      - id: datadoghq-com-product-llm-observability
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als Suite-Feature einer APM-Plattform gefuehrt und nicht als 'AI-Tool' vermarktet. In DACH-Banken/Versicherern oft bereits Datadog-Vertrag mit EU-Site (datadoghq.eu) — dann ist die LLM-Observability-Schicht der schnellste Compliance-tauglichste Capture-Layer ohne neuen Vendor-Approval. Einschränkung: SaaS-only; Self-Host nicht moeglich — DSGVO-Bewertung der EU-Site noetig."
    enterprise_readiness: enterprise_ready
  - id: dynatrace-com-platform-artificial-intelligence
    fit: conditional
    sources:
      - id: dynatrace-com-platform-artificial-intelligence
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil DACH-Heavyweight (HQ Linz) und als APM-Suite positioniert. Bestehende BaFin-/DORA-Footprint bei Banken; AI-Observability-Erweiterung integriert Davis-AI-Korrelation und kann Logs/Spans 10 Jahre nachvollziehbar halten — wenn Storage-Tier entsprechend konfiguriert. Einschränkung: Wie Datadog: AI-Act-Schema selbst modellieren."
    enterprise_readiness: enterprise_ready
  - id: langfuse-com
    fit: good_fit
    sources:
      - id: langfuse-com
      - id: langfuse-com-docs-administration-audit-logs
      - id: dev-to-henry9527-youre-flying-blind-adding-llm-observability-to-spring-ai-with-opentelemetry-and-self-hosted-5gj4
      - id: vadim-blog-ai-observability-llm-evals-langfuse
      - id: dev-to-ramon-galego-your-langsmith-traces-are-not-an-audit-trail-3d63
    why_it_fits: "Berliner Anbieter, ISO27001, voll self-hostbar — der konkreteste Baustein fuer eine replay-faehige LLM-Audit-Schicht in DACH. Trace-/Generation-/Session-Schema dient sowohl als Referenz fuer eigenes Audit-Modell als auch als direkter Capture-Layer; Audit-Logs-Modul liefert Before/After-State fuer alle Mutationen. Praktiker (Spring-AI + self-hosted Langfuse, Vadim eval-harness) belegen den 'Daten verlassen die Infrastruktur nicht'-Pfad fuer regulierte Workloads. Architekt muss AI-Act-Art.-12-Felder (Decision, Confidence, Model-Version, Provenance) und Retention selbst ergaenzen; kritische Praktiker-Stimmen erinnern explizit, dass Observability-Traces allein noch kein Audit-Trail im juristischen Sinn sind. Einschränkung: Nicht zertifiziert als EU-AI-Act-Konformitaetsloesung — bleibt technisches Fundament, nicht Compliance-Beweis."
    enterprise_readiness: enterprise_ready
  - id: litellm-ai
    fit: conditional
    sources:
      - id: litellm-ai
      - id: docs-litellm-ai-docs-proxy-multiple-admins
      - id: webcoderspeed-com-blog-scaling-ai-gateway-litellm
      - id: dev-to-jay-singh-e5b5ee6be59c0e0-how-i-audited-my-infra-after-the-litellm-supply-chain-attack-and-what-im-doing-differently-now-39ma
    why_it_fits: "Pflicht-Capture-Layer vor Cloud-LLM-APIs, weil Azure OpenAI/Bedrock Inhalte nicht persistieren. Pre-/Post-Hooks und Callback-Logger (S3/GCS/Azure Blob, Langfuse, OTel, Sentinel) sowie store_audit_logs+audit_log_callbacks decken den Architektur-Skeleton ab. OSS, self-hostbar, in DACH verbreitet als 'kleinstes ehrliches Gateway'; Praktiker-Bericht (webcoderspeed) zeigt Production-Pattern. Einschränkung & Vorsicht: PyPI-Lieferketten-Angriff im Maerz/April 2026 (Versionen 1.82.7/1.81.8 mit Credential-Stealer) ist fuer BaFin-/DORA-Lieferketten-Anforderungen relevant — Pinning, eigener Mirror, SBOM-Pruefung sind Pflicht; US-Startup ohne EU-DPA out-of-the-box; Enterprise-Support-SLA pruefen. Wegen des juengsten Supply-Chain-Vorfalls als 'conditional' eingestuft, nicht als 'good_fit'."
    enterprise_readiness: team_ready
  - id: learn-microsoft-com-azure-api-management-genai-gateway-capabilities
    fit: good_fit
    sources:
      - id: learn-microsoft-com-azure-api-management-genai-gateway-capabilities
      - id: learn-microsoft-com-en-us-azure-api-management-api-management-howto-llm-logs
      - id: techcommunity-microsoft-com-blog-integrationsonazureblog-azure-api-management-unified-ai-gateway-design-pattern-4495436
      - id: medium-com-microsoftazure-retrieve-prompt-logs-for-3rd-party-llms-deployed-behind-azure-api-management-27775c8c0ab5
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als Suite-Feature von Azure APIM gefuehrt und nicht als eigenstaendiges 'AI-Tool'. Fuer die ueberwiegende Mehrheit der DACH-Banken/Versicherer mit Azure-OpenAI-Stack der naheliegende Capture-Layer: EU-Tenant, BAIT/DORA-vertretbarer Vendor, ApiManagementGatewayLlmLog mit Token-Usage, Modellname, optional Prompt/Completion (chunked, CorrelationId) direkt in Log Analytics / Event Hubs. Customer-Reference Uniper zeigt Unified-AI-Gateway-Pattern in Production; Praktiker-Artikel belegt Multi-Provider-Audit-Pfad (Gemini/Claude hinter derselben Tabelle wie Azure OpenAI). Einschränkung: Lock-in auf Azure-OpenAI; Multi-Provider braucht zusaetzlich LiteLLM/Custom-Logik. Streaming-Responses werden vom built-in Body-Logging nicht reconstructed; ggf. zweites Gateway (AI Central / AI Sentry / Eigenbau) noetig."
    enterprise_readiness: enterprise_ready
  - id: traceloop-com
    fit: good_fit
    sources:
      - id: traceloop-com
      - id: github-com-open-telemetry-semantic-conventions-issues-810
      - id: spanora-ai-blog-opentelemetry-llm-monitoring
      - id: community-dynatrace-com-t5-ai-openllmetry-semantic-conventions-are-now-part-of-opentelemetry-td-p-267984
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als OSS-Bibliothek (OpenLLMetry) und nicht als Produkt vermarktet. Liefert OpenTelemetry-Semconv fuer LLMs — fuer einen Architekten genau der vendor-neutrale Standard, an dem eine replay-faehige Topologie ohne Lock-in entworfen wird (Spans gehen dann an Datadog/Dynatrace/Langfuse/Tempo). Wichtigster Beleg: die OpenLLMetry-Semconv (gen_ai.system, gen_ai.request.model, gen_ai.usage.*) sind formal in den OpenTelemetry-Standard uebernommen — d.h. als langfristiger Architektur-Bezugspunkt unabhaengig vom Anbieter Traceloop nutzbar. Praktiker-Beitraege (spanora.ai) zeigen das Auto-Instrumentation-Pattern; Drittanbieter-Validierung durch Dynatrace-Community-Eintrag. Einschränkung: OpenLLMetry-SDK ist Pre-1.0; einzelne Provider-Instrumentations entwickeln sich noch."
    enterprise_readiness: team_ready
start_here: "Einstieg mit self-hosted Langfuse: das Trace-/Generation-Schema als Referenz für das eigene Audit-Datenmodell nutzen und Pflichtfelder (Modell-Version, Prompt, Decision, Timestamp) im ersten KI-System instrumentieren. Wer bereits Azure OpenAI betreibt, aktiviert den ApiManagementGatewayLlmLog in einem bestehenden APIM-EU-Tenant — das ist der schnellste DORA-taugliche Capture-Pfad ohne neuen Vendor-Genehmigungsprozess."
caveats: "Cloud-LLM-APIs persistieren keine Prompt- und Completion-Inhalte — die Architektur muss eine eigene Gateway-Schicht vorschalten (Azure APIM oder ein sorgfältig gepinntes OSS-Gateway), sonst ist die DORA-Nachvollziehbarkeit nicht herstellbar. Observability-Traces sind technisches Fundament, kein juristischer Audit-Trail-Ersatz: Retention-Konflikte zwischen DSGVO-Löschpflicht und KI-Act-Aufbewahrungspflicht müssen im Design explizit aufgelöst werden."
sources: []
---
