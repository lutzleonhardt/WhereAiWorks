---
stage: development
order: 12
roles:
  - security-engineer
  - platform-devops-engineer
title: Governance-Harness für AI-Coding-Agenten
goal_label: Audit-Logging, Credential-Isolation und Sub-Processor-Listing rund um Coding-Agenten
suitability: conditional
rationale: Claude Code liefert mit Hooks (PreToolUse/PostToolUse), Permission-Modell und Bedrock/Vertex-EU-Deployment operative Bausteine, aus denen sich ein DORA-tauglicher Harness zusammensetzen lässt. Wer den Sub-Processor-Fußabdruck minimieren muss, findet in Sourcegraph Cody (self-hosted, BYO-LLM) eine Alternative mit vergleichbarem Audit-Logging und RBAC.
tools:
  - id: apiiro-com-platform-ai-code-security
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Reifes AppSec-Profil; AI-Code-Security-Linie identifiziert AI-Anteile, prüft gegen Materielle-Änderungs-Policies und liefert Audit-Reports — direkt verwendbar als DORA-Nachweisgrundlage. Lohnt nur, wenn AppSec-Programm bereits etabliert ist.
    caveats:
      - Implementierung in DACH-Banken regelmäßig 6–12 Monate
      - Überlappungen mit Snyk/Black Duck/Veracode klären
      - US-zentrierter Vertrieb
      - Schwergewichtige Plattform, Einführung dauert
      - Fokus eher Großunternehmen mit reifem AppSec-Programm
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: apiiro-com-platform-ai-code-security
  - id: claude-com-product-claude-code
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Permission-Modell, Hooks (PreToolUse/PostToolUse) und Bedrock/Vertex-EU-Deployment liefern die operativen Bausteine eines DORA-tauglichen Harness. Voraussetzung: Hooks landen in einer auditfähigen Pipeline und MCP-Server werden in der Sub-Processor-Liste geführt."
    caveats:
      - Bedrock/Vertex-Pfad verlangt Cross-Account-Trust und IAM-Disziplin — ohne Plattformteam keine echte Credential-Isolation
      - MCP-Server erweitern Sub-Processor-Liste implizit; jeder MCP-Server ist DPA-pflichtig
      - Hooks und Deny-Lists müssen organisatorisch verankert werden, sonst nur Folie
      - Bedrock/Vertex-Pfad verlagert Auditing auf Cloud-Provider, ersetzt es nicht
      - Default-Setup ist developer-zentriert, nicht compliance-zentriert
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Hooks + Permission-Modell als echte Governance-Hebel
      complaints:
        - Default-Risiko bei --dangerously-skip-permissions
    sources:
      - id: docs-anthropic-com-en-docs-claude-code-security
      - id: docs-anthropic-com-en-docs-claude-code-hooks
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Liefert produktivierte Bausteine eines Governance-Harness: Enterprise-Audit-Log, Content Exclusions, IP-Indemnity, SSO/SCIM. Für DORA-Nachweise braucht es zusätzlich Audit-Export und Sub-Processor-Tracking aus dem Microsoft-Trust-Center; out-of-the-box keine vollständige Lösung, aber tragender Baustein."
    caveats:
      - Copilot-Telemetry-Endpunkte liegen nicht zwingend in EU; EU Data Boundary nur für M365 dokumentiert, nicht 1:1 für Copilot-Inferenz
      - Audit-Log-API hat Retention-Limits — DORA-Aufbewahrungspflichten erfordern eigenen Export-Pipeline-Bau
      - Audit-Log-Granularität reicht nicht überall an DORA Art. 5–15 heran
      - Sub-Processor-Listing muss aus GitHub-Trust-Center separat gepflegt werden
      - Credential-Isolation bleibt Aufgabe der CI/Runner-Architektur
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Enterprise SSO und Audit-Log decken Compliance-Pflicht ab
      complaints:
        - Audit-Granularität für regulierte Sektoren teils zu grob
    sources:
      - id: docs-github-com-en-copilot-managing-copilot-managing-copilot-for-your-enterprise-reviewing-activity-related-to-github-copilot-in-your-enterprise
      - id: docs-github-com-en-copilot-managing-copilot-managing-copilot-for-your-enterprise-excluding-content-from-github-copilot
  - id: gitpod-io-flex
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Self-hosted Runner mit feingranularer Berechtigungs- und Secret-Verteilung; in Kombination mit Claude Code/Aider entsteht ein Wrapper, in dem Credentials nur runner-lokal existieren. Direkter Hebel für DORA-Credential-Isolation.
    caveats:
      - Self-hosted Pfad erzeugt eigenen DORA-relevanten Betriebsumfang
      - Agent-spezifische Audit-Hooks bleiben Eigenbau
      - Plattform-Investition lohnt erst ab Größe
      - Audit-Tiefe rund um Agent-Aktionen muss zusätzlich gebaut werden
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Self-hosted Option und Secret-Isolation
      complaints:
        - Komplexität der Self-hosted Installation
    sources:
      - id: gitpod-io-flex
  - id: snyk-io-platform-ai-trust
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Snyk ist in DACH-Enterprises gesetzt; AI-Trust-Linie addiert Output-Scanning für AI-generierten Code. Als Output-Gate im Harness sinnvoll, ersetzt aber kein Gateway-/Hook-Layer.
    caveats:
      - AI-Trust-Marketing teils breiter als die Produktrealität; in PoC fokussiert auf konkrete Scanner-Module bleiben
      - EU-Hosting/Region nicht für alle Snyk-Module garantiert
      - Kein direktes Audit-Logging der Agent-Aktionen, nur des Outputs
      - Erfordert bestehende Snyk-Integration im SDLC
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: snyk-io-platform-ai-trust
  - id: developers-cloudflare-com-ai-gateway
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Proxy-/Audit-Schicht zwischen Coding-Agent und Modell-Provider mit Logging, Rate-Limiting, Caching, Guardrails. EU-Endpunkte, DPA, ISO27001 vorhanden — passt vor Claude Code/Cursor/Continue.dev als zentraler Audit- und Sub-Processor-Bündelpunkt.
    caveats:
      - Cloudflare selbst wird zum Sub-Processor — DPA/Anhang prüfen
      - Logging-Retention konfigurieren, sonst kein DORA-Beweis
      - Coding-Agent-Integration ist Eigenbau (Endpoint-Override)
    sources:
      - id: developers-cloudflare-com-ai-gateway
  - id: lakera-ai
    fit: partial
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: EU-basiert (Zürich) — Sub-Processor-freundlich für DACH-Banken/Versicherer. Prompt-Injection- und DLP-Guardrails passen vor Coding-Agent-Tool-Calls und MCP-Server.
    caveats:
      - Coding-Agent-spezifische Integrationen müssen verifiziert werden
      - Tiefe gegen MCP-/Tool-Use-Angriffe schwankt mit Modell
      - Pricing für Enterprise-Volumen verhandeln
    sources:
      - id: lakera-ai
  - id: github-com-berriai-litellm
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Open-Source-LLM-Gateway, in DACH-Plattformteams beliebt für selbstgehostete Audit-Trails, Virtual-Key-Vergabe pro Coding-Agent-Tenant und Budget-Caps. Sub-Processor-freundlich, weil komplett im Kunden-Cloud-Account betrieben.
    caveats:
      - OSS — kein vertraglicher Support out-of-the-box (kommerzielle Enterprise-Version separat)
      - Audit-Log-Persistenz und Retention selbst betreiben
      - Plattform-Team-Investition nötig
    sources:
      - id: github-com-berriai-litellm
  - id: portkey-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: LLM-Gateway mit Virtual Keys (Credential-Isolation pro Coding-Agent-Tenant), Audit-Logs, Guardrails, SOC2; self-hosted Variante verfügbar. Direkt einsetzbar als Wrapper vor Claude Code/Cursor/Continue.dev.
    caveats:
      - EU-Hosting nur in self-hosted Variante zugesichert
      - Sub-Processor-Profil bei SaaS US-zentriert
      - Coding-Agent-Endpoint-Override muss organisatorisch durchgesetzt werden
    sources:
      - id: portkey-ai
  - id: sourcegraph-com-cody
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Selbst-hostbar mit BYO-LLM (Azure OpenAI EU, Bedrock EU), feingranulares Audit-Logging, RBAC und Repo-Permissions; ISO/IEC 27001:2022, SOC2. Kann die DORA-Sub-Processor-Liste signifikant kürzen, weil das Inferenz-Backend wählbar bleibt. Technische Voraussetzungen für regulierte DACH-Setups sind durch unabhängige Reviews bestätigt — DACH-spezifische Referenzkunden fehlen jedoch.
    caveats:
      - Self-hosted-Installation erzeugt eigenen Patch-/CVE-Pflichtenkatalog
      - Lizenzkosten für regulierte Sektoren transparent verhandeln
      - Agent-Funktionen weniger weit als bei Claude Code/Cursor
      - Keine öffentlichen DACH/DORA-Referenzkunden belegt — Fit theoretisch solide, aber unbewiesen im regulierten deutschen Markt
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - BYO-LLM und Self-Hosting für regulierte Sektoren
      complaints:
        - Agent-Tiefe hinter Claude Code/Cursor
    sources:
      - id: sourcegraph-com-docs-cody-clients-enable-cody-enterprise
      - id: toolchase-com-tool-cody
  - id: tabnine-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Air-gapped/On-Prem-Variante minimiert Sub-Processor-Listen und DPA-Aufwand; Gartner Peer Insights bestätigt regulierte Industriekunden wählen Tabnine genau aus diesem Grund. Für stark regulierte DACH-Banken/Versicherer einer der naheliegendsten Compliance-Pfade — Modellqualität ist der Trade-off.
    caveats:
      - GPU-Betriebsmodell on-prem ist ein eigenes Programm — Kosten/Personal oft unterschätzt
      - Audit-Log-API erfordert gesondertes Aktivieren via Sales — kein Day-1-Feature
      - Funktionspaket im Vergleich zu Claude Code/Copilot bleibt schmal
      - Keine verifizierten DACH/DORA-spezifischen Referenzkunden öffentlich dokumentiert
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Air-gapped Option ist Alleinstellungsmerkmal für regulierte Sektoren
      complaints:
        - Modellqualität hinter Frontier-Modellen
    sources:
      - id: tabnine-com-enterprise
      - id: gartner-com-reviews-market-ai-code-assistants-vendor-tabnine-product-tabnine
start_here: "Einstieg über Claude Code auf Bedrock EU: Hooks als auditfähige Pipeline verdrahten, Command-Deny-Lists aktivieren und alle MCP-Server in der Sub-Processor-Liste erfassen. Parallel DPA und Revisionseinbindung organisatorisch klären — ohne diesen Schritt bleibt die technische Konfiguration ohne Nachweiskraft."
caveats: Der Harness ist Plattform- und Architektur-Disziplin, keine Tool-Auswahl — ohne Plattformteam, das Hooks und Credential-Isolation betreibt, bleibt das Setup wirkungslos. Kein Anchor-Tool liefert out-of-the-box eine vollständige DORA-Lösung; Audit-Export, Retention und Sub-Processor-Tracking erfordern Eigenbau-Anteile.
sources: []
---
