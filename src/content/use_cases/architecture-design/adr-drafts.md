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
  - id: aws-amazon-q-developer-debug-diagnose
    fit: conditional
    sources:
      - id: amazon-q-developer-amazon-docs-aws-amazon-com-prescriptive-guidance-latest-best-practices-code-generation-developer-workflows-html
    why_it_fits: "Für AWS-zentrierte Architekturen sinnvoll: Trade-offs zwischen Services (SQS vs. EventBridge, RDS vs. Aurora) im ADR-Format, mit Bezug zu Well-Architected-Pillars. EU-Region (Frankfurt) verfügbar; in DACH-AWS-Kunden ein realistischer Default-Kandidat. Einschränkung: Stark AWS-zentriert; für Multi-Cloud-/On-Prem-ADRs limitiert. Enterprise-Reifegrad: enterprise_ready."
  - id: continue-dev
    fit: conditional
    sources:
      - id: continue-dev-continue-continue-dev
    why_it_fits: "Open-Source-IDE-Assistent mit Custom-Slash-Commands und Context-Providern: ein /adr-Command mit team-eigenem MADR-Template trifft genau den Workflow. Modellwahl frei (auch lokal/self-hosted) — passt zu DACH-Compliance, wenn Frontier-Modelle nicht erlaubt sind. Einschränkung: Setup-Aufwand für Custom-Commands und Context-Provider. Enterprise-Reifegrad: team_ready."
  - id: google-gemini-code-assist
    fit: conditional
    sources:
      - id: google-gemini-code-assist-google
    why_it_fits: "Für GCP-zentrierte DACH-Stacks naheliegend; Vertex AI mit EU-Region (Frankfurt) ist compliance-fähig. Codebase-Awareness reicht funktional für ADR-Drafts mit Repo-Kontext, insbesondere bei ADRs mit GCP-Service-Bezug. Einschränkung: DACH-GCP-Footprint geringer als Azure/AWS — Reichweite begrenzt. Enterprise-Reifegrad: enterprise_ready."
  - id: copilot
    fit: conditional
    sources:
      - id: github-copilot-chat-debug-mode-github
    why_it_fits: "In IDE/PR direkt einsetzbar: ADR-Skelette im Workspace generieren, vorhandene ADRs als Few-Shot-Beispiele referenzieren, im PR auf Inkonsistenzen mit dokumentierten Entscheidungen hinweisen. EU Data Residency seit 2025 GA macht es für DACH-GitHub-Enterprise-Kunden compliance-fähig. Einschränkung: Output für längere ADR-Prosa hinter Claude/GPT-4o-Klasse. Enterprise-Reifegrad: enterprise_ready."
  - id: jetbrains-ai-assistant-mit-junie
    fit: conditional
    sources:
      - id: jetbrains-ai-assistant-junie-jetbrains
    why_it_fits: "In DACH-Java/Kotlin-Stacks (Banken, Auto, Industrie) IDE-Standard. Beim Refactoring oder Library-Change kann ein ADR-Skeleton in docs/adr/ vorgeschlagen werden; Junie iteriert längere Drafts. JetBrains AI Enterprise mit klarer DPA und Modell-Auswahl macht es DACH-tauglich. Einschränkung: Modell-Backend wechselt (Claude/GPT/Gemini) — Compliance-Mapping pro Provider nötig. Enterprise-Reifegrad: enterprise_ready."
  - id: sourcegraph-cody
    fit: conditional
    sources:
      - id: sourcegraph-cody-sourcegraph-sourcegraph-com-cody
    why_it_fits: "Repo-weiter Code-Graph als Kontext ist genau der Hebel für Cross-Cutting-ADRs (Service-Dependencies, Library-Choices). Self-Hosted-Option passt zu DACH-Banken/Versicherungen mit Air-Gap-Anforderung. Einschränkung: Lohnt primär bei Multi-Repo-Architekturen — in mittelgroßen Org overkill. Enterprise-Reifegrad: enterprise_ready."
  - id: sap-leanix
    fit: partial
    sources:
      - id: sap-leanix-leanix-net
    why_it_fits: "Likely missed by market scan because LeanIX ist EA-Governance-Plattform, nicht 'AI-ADR-Tool'. In DACH-DAX-Konzernen aber Standardwerkzeug für Enterprise Architecture; LeanIX hat dedizierte 'Architecture Decisions'-Funktion und ergänzt zunehmend AI-Features für Beschreibungs-Drafts (LeanIX AI). Bonn-basiert, jetzt SAP — DPA und EU-Hosting Standard. Einschränkung: EA-Tool — adressiert eher Enterprise-Architekt als Solution-/Software-Architekt. Enterprise-Reifegrad: enterprise_ready."
  - id: chatgpt-openai
    fit: good_fit
    sources:
      - id: chatgpt-openai-openai
      - id: chatgpt-adr-equal-experts
      - id: chatgpt-adr-brandon-pugh
    why_it_fits: "Default-LLM-Frontend für strukturierte Doku-Drafts. Für ADRs (MADR/Nygard) liefert ChatGPT Optionen-Vergleiche und Trade-off-Tabellen sauber strukturiert; in Praxisberichten von Beratern (Equal Experts) wird ChatGPT bewusst gewählt, weil es kundenseitig oft freigegeben ist. Enterprise/Team-Tier mit SOC2, kein Training auf Kundendaten und EU Data Residency (seit 2024/2025) deckt DACH-Compliance bei sauberer DPA-Konfiguration ab. Einschränkung: Ohne Repo-Anbindung bleibt der Draft generisch; Constraints müssen manuell mitgegeben werden. Enterprise-Reifegrad: enterprise_ready."
  - id: claude-code
    fit: good_fit
    sources:
      - id: claude-anthropic-anthropic
      - id: claude-adr-futurecraft
      - id: claude-adr-claudeworld
    why_it_fits: "In der Architektur-Community oft bevorzugt wegen längerer kohärenter Prosa und besserem Umgang mit MADR-Templates; Praxisanleitungen (futurecraft.pro, ClaudeWorld) führen Claude explizit als Modell für ADR-Drafts mit Template-Treue. Großer Kontext erlaubt das Einschieben kompletter Design-Dokumente; Projects/Artifacts halten ADR-Skelette wiederverwendbar. Über AWS Bedrock EU-Region für DACH-Compliance erschließbar. Einschränkung: claude.ai-Tier US-Hosting; für regulierte DACH-Workloads Bedrock-EU-Pfad nötig. Enterprise-Reifegrad: enterprise_ready."
  - id: claude-code
    fit: good_fit
    sources:
      - id: claude-code-claude-claude-com-product-claude-code
      - id: claude-code-adr-beyond-autocomplete
      - id: claude-code-adr-adolfi
      - id: claude-code-adr-morey-tech
    why_it_fits: "Repo-aware Agent: liest existierende docs/adr/-Strukturen, führt Nummerierung fort, wendet Templates an und zieht Code-Kontext (Dependencies, Patterns) in den Draft. Praktiker (Beyond Autocomplete, Adolfi.dev, Morey Tech) berichten ausführlich, wie Claude Code via Skills/Slash-Commands ADRs nach Nygard-/MADR-Format generiert und Index-Dateien pflegt — inklusive kontinuierlicher Capture-Workflows. Bedrock-Pfad ermöglicht EU-Hosting. Einschränkung: Token-Kosten bei großen Architektur-Repos signifikant. Enterprise-Reifegrad: team_ready."
start_here: "Einstieg mit niedrigem Risiko: einen /adr-Slash-Command in Claude Code einrichten, der das team-eigene Template lädt und die nächste ADR-Nummer aus docs/adr/ ableitet. Wer zunächst ohne IDE-Tool pilotieren möchte, nutzt ChatGPT oder Claude mit einem Prompt-Template, das Format, Projektkontext und Entscheidungsoptionen vorgibt."
caveats: Das Trade-off-Urteil und die finale Entscheidung verbleiben beim Architekten — AI-Drafts müssen inhaltlich verantwortet und freigegeben werden. Ohne Repo-Anbindung bleibt der Output generisch; projektspezifische Constraints müssen manuell in den Prompt einfließen.
sources: []
---
