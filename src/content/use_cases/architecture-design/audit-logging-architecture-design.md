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
  - id: claude-code
    fit: conditional
    sources:
      - id: claude-code-claude-claude-com-product-claude-code
    why_it_fits: "Als 'Pair Architect' fuer Trade-off-Diskussionen, Schema-Entwurf und Generierung von Skeletten (LiteLLM-Hooks, OTel-Spans, Retention-Jobs) brauchbar. Ueber Bedrock/Vertex auch in EU-Region einsetzbar. Bleibt Hilfstool, kein Compliance-Beweis. Einschränkung: Kein eigenes EU-Rechenzentrum bei Anthropic; EU-Hosting nur via Cloud-Reseller. Enterprise-Reifegrad: team_ready."
  - id: credo-ai
    fit: conditional
    sources:
      - id: credo-ai-credo-credo-ai-product
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als AI-Governance-/GRC-Plattform und nicht als Engineering-Tool kategorisiert. Liefert das Compliance-Mapping (EU-AI-Act-Risikoklassen, Art.-12-Records, Use-Case-Registry), das die rein technische Logging-Schicht (Langfuse/LiteLLM) ergaenzt. Fuer Architekt relevant, um zu wissen, welche Felder ueberhaupt zu loggen sind. Einschränkung: US-SaaS; EU-Hosting/DPA pruefen. Enterprise-Reifegrad: team_ready."
  - id: datadog-llm-observability
    fit: conditional
    sources:
      - id: datadog-llm-observability-datadoghq
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als Suite-Feature einer APM-Plattform gefuehrt und nicht als 'AI-Tool' vermarktet. In DACH-Banken/Versicherern oft bereits Datadog-Vertrag mit EU-Site (datadoghq.eu) — dann ist die LLM-Observability-Schicht der schnellste Compliance-tauglichste Capture-Layer ohne neuen Vendor-Approval. Einschränkung: SaaS-only; Self-Host nicht moeglich — DSGVO-Bewertung der EU-Site noetig. Enterprise-Reifegrad: enterprise_ready."
  - id: dynatrace-ai-observability
    fit: conditional
    sources:
      - id: dynatrace-ai-observability-dynatrace
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil DACH-Heavyweight (HQ Linz) und als APM-Suite positioniert. Bestehende BaFin-/DORA-Footprint bei Banken; AI-Observability-Erweiterung integriert Davis-AI-Korrelation und kann Logs/Spans 10 Jahre nachvollziehbar halten — wenn Storage-Tier entsprechend konfiguriert. Einschränkung: Wie Datadog: AI-Act-Schema selbst modellieren. Enterprise-Reifegrad: enterprise_ready."
  - id: langfuse
    fit: good_fit
    sources:
      - id: langfuse-langfuse
      - id: langfuse-audit-logs-docs
      - id: langfuse-spring-ai-otel-dev
      - id: langfuse-vadim-evals
      - id: langsmith-not-audit-trail-dev
    why_it_fits: "Berliner Anbieter, ISO27001, voll self-hostbar — der konkreteste Baustein fuer eine replay-faehige LLM-Audit-Schicht in DACH. Trace-/Generation-/Session-Schema dient sowohl als Referenz fuer eigenes Audit-Modell als auch als direkter Capture-Layer; Audit-Logs-Modul liefert Before/After-State fuer alle Mutationen. Praktiker (Spring-AI + self-hosted Langfuse, Vadim eval-harness) belegen den 'Daten verlassen die Infrastruktur nicht'-Pfad fuer regulierte Workloads. Architekt muss AI-Act-Art.-12-Felder (Decision, Confidence, Model-Version, Provenance) und Retention selbst ergaenzen; kritische Praktiker-Stimmen erinnern explizit, dass Observability-Traces allein noch kein Audit-Trail im juristischen Sinn sind. Einschränkung: Nicht zertifiziert als EU-AI-Act-Konformitaetsloesung — bleibt technisches Fundament, nicht Compliance-Beweis. Enterprise-Reifegrad: enterprise_ready."
  - id: litellm
    fit: conditional
    sources:
      - id: litellm-litellm
      - id: litellm-audit-logs-docs
      - id: litellm-webcoderspeed-blog
      - id: litellm-supply-chain-incident-dev
    why_it_fits: "Pflicht-Capture-Layer vor Cloud-LLM-APIs, weil Azure OpenAI/Bedrock Inhalte nicht persistieren. Pre-/Post-Hooks und Callback-Logger (S3/GCS/Azure Blob, Langfuse, OTel, Sentinel) sowie store_audit_logs+audit_log_callbacks decken den Architektur-Skeleton ab. OSS, self-hostbar, in DACH verbreitet als 'kleinstes ehrliches Gateway'; Praktiker-Bericht (webcoderspeed) zeigt Production-Pattern. Einschränkung & Vorsicht: PyPI-Lieferketten-Angriff im Maerz/April 2026 (Versionen 1.82.7/1.81.8 mit Credential-Stealer) ist fuer BaFin-/DORA-Lieferketten-Anforderungen relevant — Pinning, eigener Mirror, SBOM-Pruefung sind Pflicht; US-Startup ohne EU-DPA out-of-the-box; Enterprise-Support-SLA pruefen. Wegen des juengsten Supply-Chain-Vorfalls als 'conditional' eingestuft, nicht als 'good_fit'. Enterprise-Reifegrad: team_ready."
  - id: azure-api-management-genai-gateway
    fit: good_fit
    sources:
      - id: azure-api-management-genai-gateway-microsoft
      - id: azure-apim-llm-logging-howto
      - id: azure-apim-uniper-pattern
      - id: azure-apim-3rdparty-llm-medium
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als Suite-Feature von Azure APIM gefuehrt und nicht als eigenstaendiges 'AI-Tool'. Fuer die ueberwiegende Mehrheit der DACH-Banken/Versicherer mit Azure-OpenAI-Stack der naheliegende Capture-Layer: EU-Tenant, BAIT/DORA-vertretbarer Vendor, ApiManagementGatewayLlmLog mit Token-Usage, Modellname, optional Prompt/Completion (chunked, CorrelationId) direkt in Log Analytics / Event Hubs. Customer-Reference Uniper zeigt Unified-AI-Gateway-Pattern in Production; Praktiker-Artikel belegt Multi-Provider-Audit-Pfad (Gemini/Claude hinter derselben Tabelle wie Azure OpenAI). Einschränkung: Lock-in auf Azure-OpenAI; Multi-Provider braucht zusaetzlich LiteLLM/Custom-Logik. Streaming-Responses werden vom built-in Body-Logging nicht reconstructed; ggf. zweites Gateway (AI Central / AI Sentry / Eigenbau) noetig. Enterprise-Reifegrad: enterprise_ready."
  - id: openllmetry-traceloop
    fit: good_fit
    sources:
      - id: openllmetry-traceloop-traceloop
      - id: openllmetry-otel-semconv-issue
      - id: openllmetry-spanora-blog
      - id: openllmetry-dynatrace-community
    why_it_fits: "Wahrscheinlich vom Market-Scan uebersehen, weil als OSS-Bibliothek (OpenLLMetry) und nicht als Produkt vermarktet. Liefert OpenTelemetry-Semconv fuer LLMs — fuer einen Architekten genau der vendor-neutrale Standard, an dem eine replay-faehige Topologie ohne Lock-in entworfen wird (Spans gehen dann an Datadog/Dynatrace/Langfuse/Tempo). Wichtigster Beleg: die OpenLLMetry-Semconv (gen_ai.system, gen_ai.request.model, gen_ai.usage.*) sind formal in den OpenTelemetry-Standard uebernommen — d.h. als langfristiger Architektur-Bezugspunkt unabhaengig vom Anbieter Traceloop nutzbar. Praktiker-Beitraege (spanora.ai) zeigen das Auto-Instrumentation-Pattern; Drittanbieter-Validierung durch Dynatrace-Community-Eintrag. Einschränkung: OpenLLMetry-SDK ist Pre-1.0; einzelne Provider-Instrumentations entwickeln sich noch. Enterprise-Reifegrad: team_ready."
start_here: "Einstieg mit self-hosted Langfuse: das Trace-/Generation-Schema als Referenz für das eigene Audit-Datenmodell nutzen und Pflichtfelder (Modell-Version, Prompt, Decision, Timestamp) im ersten KI-System instrumentieren. Wer bereits Azure OpenAI betreibt, aktiviert den ApiManagementGatewayLlmLog in einem bestehenden APIM-EU-Tenant — das ist der schnellste DORA-taugliche Capture-Pfad ohne neuen Vendor-Genehmigungsprozess."
caveats: "Cloud-LLM-APIs persistieren keine Prompt- und Completion-Inhalte — die Architektur muss eine eigene Gateway-Schicht vorschalten (Azure APIM oder ein sorgfältig gepinntes OSS-Gateway), sonst ist die DORA-Nachvollziehbarkeit nicht herstellbar. Observability-Traces sind technisches Fundament, kein juristischer Audit-Trail-Ersatz: Retention-Konflikte zwischen DSGVO-Löschpflicht und KI-Act-Aufbewahrungspflicht müssen im Design explizit aufgelöst werden."
sources: []
---
