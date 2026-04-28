---
stage: architecture-design
order: 1
roles:
  - software-engineer
  - software-architect
title: ADR-Drafts
goal_label: Architektur-Entscheidungen schneller dokumentieren
suitability: conditional
rationale: Claude Code liest bestehende docs/adr/-Strukturen, führt Nummerierung fort und befüllt MADR-/Nygard-Templates mit Repo-Kontext — der strukturelle Aufwand beim Dokumentieren sinkt spürbar. Für Teams ohne IDE-Agenten liefern ChatGPT und Claude (Anthropic) template-treue Optionen-Vergleiche und Trade-off-Tabellen, sofern Constraints im Prompt mitgegeben werden.
tools:
  - id: aws-amazon-com-q-developer
    fit: conditional
    sources:
      - id: docs-aws-amazon-com-prescriptive-guidance-latest-best-practices-code-generation-developer-workflows-html
    why_it_fits: "Für AWS-zentrierte Architekturen sinnvoll: Trade-offs zwischen Services (SQS vs. EventBridge, RDS vs. Aurora) im ADR-Format, mit Bezug zu Well-Architected-Pillars. EU-Region (Frankfurt) verfügbar; in DACH-AWS-Kunden ein realistischer Default-Kandidat. Einschränkung: Stark AWS-zentriert; für Multi-Cloud-/On-Prem-ADRs limitiert."
    enterprise_readiness: enterprise_ready
  - id: continue-dev
    fit: conditional
    sources:
      - id: continue-dev
    why_it_fits: "Open-Source-IDE-Assistent mit Custom-Slash-Commands und Context-Providern: ein /adr-Command mit team-eigenem MADR-Template trifft genau den Workflow. Modellwahl frei (auch lokal/self-hosted) — passt zu DACH-Compliance, wenn Frontier-Modelle nicht erlaubt sind. Einschränkung: Setup-Aufwand für Custom-Commands und Context-Provider."
    enterprise_readiness: team_ready
  - id: cloud-google-com-products-gemini-code-assist
    fit: conditional
    sources:
      - id: cloud-google-com-products-gemini-code-assist
    why_it_fits: "Für GCP-zentrierte DACH-Stacks naheliegend; Vertex AI mit EU-Region (Frankfurt) ist compliance-fähig. Codebase-Awareness reicht funktional für ADR-Drafts mit Repo-Kontext, insbesondere bei ADRs mit GCP-Service-Bezug. Einschränkung: DACH-GCP-Footprint geringer als Azure/AWS — Reichweite begrenzt."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: conditional
    sources:
      - id: docs-github-com-en-copilot-using-github-copilot-asking-github-copilot-questions-in-your-ide
    why_it_fits: "In IDE/PR direkt einsetzbar: ADR-Skelette im Workspace generieren, vorhandene ADRs als Few-Shot-Beispiele referenzieren, im PR auf Inkonsistenzen mit dokumentierten Entscheidungen hinweisen. EU Data Residency seit 2025 GA macht es für DACH-GitHub-Enterprise-Kunden compliance-fähig. Einschränkung: Output für längere ADR-Prosa hinter Claude/GPT-4o-Klasse."
    enterprise_readiness: enterprise_ready
  - id: jetbrains-com-ai
    fit: conditional
    sources:
      - id: jetbrains-com-help-idea-ai-assistant-html
    why_it_fits: "In DACH-Java/Kotlin-Stacks (Banken, Auto, Industrie) IDE-Standard. Beim Refactoring oder Library-Change kann ein ADR-Skeleton in docs/adr/ vorgeschlagen werden; Junie iteriert längere Drafts. JetBrains AI Enterprise mit klarer DPA und Modell-Auswahl macht es DACH-tauglich. Einschränkung: Modell-Backend wechselt (Claude/GPT/Gemini) — Compliance-Mapping pro Provider nötig."
    enterprise_readiness: enterprise_ready
  - id: sourcegraph-com-cody
    fit: conditional
    sources:
      - id: sourcegraph-com-cody
    why_it_fits: "Repo-weiter Code-Graph als Kontext ist genau der Hebel für Cross-Cutting-ADRs (Service-Dependencies, Library-Choices). Self-Hosted-Option passt zu DACH-Banken/Versicherungen mit Air-Gap-Anforderung. Einschränkung: Lohnt primär bei Multi-Repo-Architekturen — in mittelgroßen Org overkill."
    enterprise_readiness: enterprise_ready
  - id: leanix-net-en
    fit: partial
    sources:
      - id: leanix-net-en
    why_it_fits: "Likely missed by market scan because LeanIX ist EA-Governance-Plattform, nicht 'AI-ADR-Tool'. In DACH-DAX-Konzernen aber Standardwerkzeug für Enterprise Architecture; LeanIX hat dedizierte 'Architecture Decisions'-Funktion und ergänzt zunehmend AI-Features für Beschreibungs-Drafts (LeanIX AI). Bonn-basiert, jetzt SAP — DPA und EU-Hosting Standard. Einschränkung: EA-Tool — adressiert eher Enterprise-Architekt als Solution-/Software-Architekt."
    enterprise_readiness: enterprise_ready
  - id: chatgpt-com
    fit: good_fit
    sources:
      - id: openai-com-chatgpt-enterprise
      - id: equalexperts-com-blog-ai-accelerating-architectural-decision-records-adrs-with-generative-ai
      - id: brandonpugh-com-til-ai-chatgpt-to-help-write-adr
    why_it_fits: "Default-LLM-Frontend für strukturierte Doku-Drafts. Für ADRs (MADR/Nygard) liefert ChatGPT Optionen-Vergleiche und Trade-off-Tabellen sauber strukturiert; in Praxisberichten von Beratern (Equal Experts) wird ChatGPT bewusst gewählt, weil es kundenseitig oft freigegeben ist. Enterprise/Team-Tier mit SOC2, kein Training auf Kundendaten und EU Data Residency (seit 2024/2025) deckt DACH-Compliance bei sauberer DPA-Konfiguration ab. Einschränkung: Ohne Repo-Anbindung bleibt der Draft generisch; Constraints müssen manuell mitgegeben werden."
    enterprise_readiness: enterprise_ready
  - id: claude-com-product-claude-code
    fit: good_fit
    sources:
      - id: anthropic-com-claude
      - id: futurecraft-pro-blog-adr-template-ai
      - id: claude-world-com-guides-g18-architecture-decisions
    why_it_fits: "In der Architektur-Community oft bevorzugt wegen längerer kohärenter Prosa und besserem Umgang mit MADR-Templates; Praxisanleitungen (futurecraft.pro, ClaudeWorld) führen Claude explizit als Modell für ADR-Drafts mit Template-Treue. Großer Kontext erlaubt das Einschieben kompletter Design-Dokumente; Projects/Artifacts halten ADR-Skelette wiederverwendbar. Über AWS Bedrock EU-Region für DACH-Compliance erschließbar. Einschränkung: claude.ai-Tier US-Hosting; für regulierte DACH-Workloads Bedrock-EU-Pfad nötig."
    enterprise_readiness: enterprise_ready
  - id: claude-com-product-claude-code
    fit: good_fit
    sources:
      - id: claude-com-product-claude-code
      - id: beyondautocomplete-nl-how-i-use-claude-code-to-keep-my-architecture-decisions-on-track
      - id: adolfi-dev-blog-ai-generated-adr
      - id: morey-tech-homelab-ai-and-adrs
    why_it_fits: "Repo-aware Agent: liest existierende docs/adr/-Strukturen, führt Nummerierung fort, wendet Templates an und zieht Code-Kontext (Dependencies, Patterns) in den Draft. Praktiker (Beyond Autocomplete, Adolfi.dev, Morey Tech) berichten ausführlich, wie Claude Code via Skills/Slash-Commands ADRs nach Nygard-/MADR-Format generiert und Index-Dateien pflegt — inklusive kontinuierlicher Capture-Workflows. Bedrock-Pfad ermöglicht EU-Hosting. Einschränkung: Token-Kosten bei großen Architektur-Repos signifikant."
    enterprise_readiness: team_ready
start_here: "Einstieg mit niedrigem Risiko: einen /adr-Slash-Command in Claude Code einrichten, der das team-eigene Template lädt und die nächste ADR-Nummer aus docs/adr/ ableitet. Wer zunächst ohne IDE-Tool pilotieren möchte, nutzt ChatGPT oder Claude mit einem Prompt-Template, das Format, Projektkontext und Entscheidungsoptionen vorgibt."
caveats: Das Trade-off-Urteil und die finale Entscheidung verbleiben beim Architekten — AI-Drafts müssen inhaltlich verantwortet und freigegeben werden. Ohne Repo-Anbindung bleibt der Output generisch; projektspezifische Constraints müssen manuell in den Prompt einfließen.
sources: []
---
