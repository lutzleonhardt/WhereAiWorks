---
stage: development
order: 1
roles:
  - software-engineer
title: Code-Completion
goal_label: Weniger Boilerplate tippen
suitability: good_fit
rationale: Code-Completion für bekannte Muster und Boilerplate funktioniert zuverlässig. Bei gut verstandenem Code spart man klar messbar Tippzeit; Reviews bleiben trotzdem nötig.
tools:
  - id: jetbrains-com-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: EU-Vendor (Tschechien), in DACH-Java/Kotlin-Stacks tief verankert. Mellum läuft lokal für Inline-Completion ohne Cloud-Roundtrip; AI Enterprise erlaubt org-eigenes LLM-Hosting — das löst die DACH-Compliance-Frage besser als die meisten US-Anbieter.
    caveats:
      - Cloud-Features routen je nach Modell zu OpenAI/Google/Anthropic — DPIA pflicht
      - Nur in JetBrains-IDEs (kein VS-Code-Build)
      - Credits in Pro/Enterprise-Tiers schnell aufgebraucht
      - Cloud-Features routen je nach Modell zu OpenAI/Google/Anthropic — DPIA bleibt notwendig
      - Enterprise-Plan für Self-host kostet deutlich mehr; reine Free-Tier-Local-Completion ist Compliance-sicher, aber funktional begrenzt
      - Nur in JetBrains-IDEs — kein VS-Code-Build
      - Cloud-Features (Chat, Junie) verbrauchen Credits, Pro-Quota oft schnell erschöpft
      - Raw-Completion-Qualität laut Reviews hinter Cursor Tab/Supermaven
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Beste IDE-Integration für JetBrains-Stack
        - Type-aware Completions für Java/Kotlin
      complaints:
        - Credits brennen schnell ab
        - Autocomplete-Qualität hinter Cursor
    sources:
      - id: devtoolsreview-com-reviews-jetbrains-ai-review
      - id: vibecodedthis-com-reviews-jetbrains-ai-review-2026
      - id: jetbrains-com-help-ai-assistant-generate-unit-tests-html
      - id: reddit-com-r-claudeai-comments-1rp9a57-i-analyzed-15-competitors-in-the-ai-coding
  - id: tabnine-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Air-gapped/On-Prem-Deployment plus SOC 2, ISO 27001, GDPR und IP-Indemnity machen Tabnine in regulierten DACH-Branchen oft zur einzig zulassungsfähigen Option für Inline-Completion. Kernziel 'weniger Boilerplate tippen' wird zuverlässig bedient.
    caveats:
      - Acceptance-Rate praxis-niedriger als Copilot/Cursor (~45% vs. ~65%)
      - Air-gapped TCO durch GPU-Infrastruktur und Ops oft deutlich >$39/User
      - Israelischer Vendor — in DE-Defense/öffentl. Sektor gelegentlich Politik-Thema
      - Israelischer Vendor — bei Defense/öffentlichem Sektor in Deutschland gelegentlich politisches Thema
      - Air-gapped Setup verlangt eigene GPU-Infrastruktur und Ops-Kompetenz; TCO meist deutlich höher als $39/User
      - Completion-Qualität laut mehreren Tests unter Copilot/Cursor (~45% vs. 65% Akzeptanzrate)
      - Free-Tier 2025 deutlich beschnitten
      - Self-hosted Setup verlangt Aufwand
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Self-hosted bleibt Daten im Haus
        - Funktioniert in allen großen IDEs
      complaints:
        - Suggestions schwächer als Konkurrenz
        - Wirkt feature-mäßig hinter Copilot/Cursor zurück
    sources:
      - id: docs-tabnine-com-main-software-development-with-tabnine-tabnine-chat
      - id: medium-com-tarxemo-i-tested-5-ai-coding-assistants-in-production-heres-what-actually-worked-6ad698951152
      - id: reddit-com-r-webdev-comments-1h20eq5-which-one-to-use-copilot-tabnine-codeium
  - id: aws-amazon-com-q-developer
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Suite-Feature der AWS-Plattform mit IAM Identity Center, in DACH-AWS-Häusern (Versicherungen, Banken mit AWS-Strategie) über bestehenden EA meist beschaffbar. Inline-Completion + Security-Scan + /transform-Agent für Java-Upgrades.
    caveats:
      - Außerhalb AWS-Stack wenig Mehrwert
      - Datenverarbeitung in USA, sofern Region nicht explizit gesetzt — DPIA pflicht
      - Suggestions außerhalb AWS-Kontext qualitativ unter Copilot/Cursor
      - Q Developer Pro-Tier verarbeitet in den USA, sofern keine spezifische Region konfigurierbar — DPIA prüfen
      - Stark proprietär an AWS-Region und IAM Identity Center gebunden, Lock-in
      - Allgemeine Completion-Qualität laut Reviews unter Copilot/Cursor
      - Wenig Mehrwert außerhalb des AWS-Ökosystems
      - Suggestions oft konservativ, eher Line- als Function-Level
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Stark bei AWS-Workflows (CDK, Lambda, CloudFormation)
        - Generöser Free-Tier
      complaints:
        - Außerhalb AWS unbrauchbar
        - Suggestions schwächer als Copilot
    sources:
      - id: awesomeagents-ai-reviews-review-amazon-q-developer
      - id: docs-aws-amazon-com-amazonq-latest-qdeveloper-ug-inline-chat-html
      - id: toolstac-com-compare-cursor-github-copilot-windsurf-codeium-amazon-q-developer-comprehensive-developer-comparison
  - id: continue-dev
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Apache-2.0 Plugin mit BYOK ermöglicht Routing zu Azure OpenAI Frankfurt oder lokalem Ollama — naheliegender Compliance-by-Design-Pfad für DACH-Banken/Versicherungen. Inline-Completion und Sidebar-Chat in VS Code/JetBrains.
    caveats:
      - Kein zentrales Admin-/Audit-Backend für Hunderte Entwickler
      - Setup-Aufwand höher als Copilot/Cursor
      - Vendor-Backing dünn — Support-SLA nicht enterprise-grade
      - Kein zentrales Admin-/Audit-Backend — Governance bei mehreren hundert Entwicklern wird mühsam
      - Vendor-Backing dünn — Support-SLA nicht vergleichbar mit Copilot Enterprise
      - Mehr Setup als Copilot/Cursor
      - Qualität abhängig vom gewählten Modell
      - Kein Managed-Backend; API-Key-Verwaltung selbst
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Volle Modell-Wahl, lokal möglich
        - OSS, keine Lock-in
      complaints:
        - UX hinter Cursor/Copilot
        - Mehr Konfigurationsaufwand
    sources:
      - id: aicodingcompare-com-tool-continue
      - id: jackson-dev-post-cody-hates-reset
  - id: cloud-google-com-products-gemini-code-assist
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Suite-Bundle mit GCP, SOC 1/2/3, ISO 27001/27017/27018/27701 und EU-Region (Frankfurt). Für DACH-Häuser mit GCP-Strategie über bestehenden Cloud-Vertrag oft genehmigungsfähig.
    caveats:
      - Außerhalb GCP-Stack wenig Mehrwert
      - Code-Assist Add-on muss separat gebucht werden — nicht automatisch im GCP-EA
      - Praktiker-Signal in Reviews schwächer als Copilot/Cursor
      - Außerhalb GCP-Stack wenig Wert
      - Vertrags-Add-ons für Code-Assist müssen explizit gebucht und bewertet werden — nicht automatisch im GCP-EA enthalten
      - Außerhalb GCP-Ökosystem weniger Zusatznutzen
      - Enterprise-Pricing nicht öffentlich
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Großzügigster Free-Tier ohne Kreditkarte für Individual-Entwickler
        - 1M-Token-Fenster, größtes im Mainstream-Markt
        - Tiefe Google-Cloud-Integration mit nativer Kontext-Nutzung
        - Niedrigster Reibungsverlust durch IDE-native Integration
      complaints:
        - Latenz in VS Code deutlich höher als bei Cursor/Copilot
        - Außerhalb GCP-Ökosystem signifikant weniger nützlich
        - Kleinere Community als Copilot/Cursor, wenig Peer-Support
        - Schwach bei komplexer Architektur und mehrteiligen Problemen
    sources:
      - id: vibecoding-app-blog-tabnine-review
      - id: cloud-google-com-gemini-docs-codeassist-code-customization
  - id: sourcegraph-com-cody
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Einer der wenigen Anbieter mit aktiv supportetem Self-host-Pfad inkl. BYOK gegen Bedrock/Vertex. Sinnvoll für DACH-Konzerne mit großen Monorepos, in denen 'Boilerplate' projektspezifisch ist und cross-repo Kontext entscheidend ist.
    caveats:
      - Free/Pro 2025 abgekündigt; nur Enterprise ab ~$59/User
      - Self-hosted braucht weiterhin Internet-Zugang zu LLM-Providern (außer via Bedrock/Vertex/Selfhost-Modell)
      - Strategischer Fokus verschiebt sich auf neues Agent-Tool 'Amp' — Cody-Roadmap beobachten
      - Self-hosted Cody braucht trotzdem Internet-Zugang zu LLM-Provider (Anthropic/OpenAI) — air-gapped nur via Bedrock/Vertex/Selfhosted-Modell
      - Sourcegraph-Strategie verlagert Fokus auf 'Amp' (neues Agent-Tool) — Cody-Roadmap weiter beobachten
      - Free/Pro 2025 abgekündigt; nur noch Enterprise ab $59/User/Monat
      - "Setup-Aufwand: Sourcegraph-Instanz nötig"
      - Außerhalb großer Monorepos teurer Overkill
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Stark bei Monorepo-Kontext
        - Self-host für IP-sensitive Umgebungen
      complaints:
        - Free/Pro Abkündigung enttäuschte Community
        - $59/User/Monat schließt Individuen aus
    sources:
      - id: sourcegraph-com-docs-cody-capabilities-commands
      - id: sourcegraph-com-docs-cody-enterprise
      - id: docs-sourcegraph-com-docs-cody-enterprise-model-configuration
      - id: jackson-dev-post-cody-hates-reset
  - id: tabbyml-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: OSS-self-hosted Coding-Assistent mit Inline-Completion — valide Tabnine-Alternative ohne Vendor-Bindung für DACH-Teams mit Sovereignty-Anforderungen. Likely missed by market scan because positioned as developer-OSS-tooling rather than 'AI product' und in DACH-Compliance-Suchen seltener prominent.
    caveats:
      - Eigene GPU-Infrastruktur und Ops-Kompetenz erforderlich
      - Suggestion-Qualität abhängig vom selbst gehosteten Modell
      - Kommerzieller Support begrenzt — Integrator empfohlen
      - Eigene GPU-Infrastruktur erforderlich
      - Kommerzieller Support begrenzt — DACH-Konzern wird ggf. Integrator dazwischen schalten
      - Setup-Aufwand inkl. GPU-Infrastruktur
      - Kleinere Community als Copilot
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: reddit-com-r-webdev-comments-1rtrgmj-built-an-ai-coding-assistant-finder-filter-and-json
      - id: tabbyml-com
  - id: code-lurus-ai
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Deutscher Anbieter mit explizitem GDPR-Marketing, SSO und VS-Code-/CLI-Integration; Code wird laut Vendor nicht persistiert. Likely missed by market scan because DACH-only Player, der durch generische Capability-Suchen typisch durchrutscht.
    caveats:
      - Kleiner, junger Anbieter — Vendor-Risk hoch, kaum Referenzkunden öffentlich
      - Keine ISO 27001 / SOC 2-Zertifikate ersichtlich
      - Eher Coding-Agent als reines Inline-Completion-Tool
    sources:
      - id: code-lurus-ai-en
start_here: JetBrains-Shops starten mit JetBrains AI Assistant — Mellum läuft lokal, für reine Inline-Completion ist keine DPIA erforderlich. Wer IDE-unabhängig oder cloud-neutral bleiben muss, prüft Tabnine (air-gapped) oder Continue.dev mit Azure-OpenAI-Frankfurt-Backend. Einen Monat Acceptance-Rate grob mitführen, bevor weitere Workflows auf dem Tool aufbauen.
caveats: "Übermäßiges Vertrauen in Generiertes ohne Review ist das Hauptrisiko. Realistische Erwartung: 20–30% subjektiv, kein 10x."
sources: []
---
