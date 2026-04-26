---
stage: development
order: 1
roles:
  - developer
title: "Code-Completion"
goal_label: "Weniger Boilerplate tippen"
suitability: good_fit
adoption_maturity: mainstream
enterprise_relevance: high
evidence_strength: strong
rationale: "Code-Completion für bekannte Muster und Boilerplate funktioniert zuverlässig. Bei gut verstandenem Code spart man messbar Tippzeit; Reviews bleiben trotzdem nötig."
start_here: "Mit dem im Konzern bereits beschafften Tool starten (meist GitHub Copilot über Microsoft EA). Einen Monat bewusst einsetzen, eigenes Produktivitätsgefühl beobachten und Acceptance-Rate grob mitführen, bevor größere Workflows daran hängen."
caveats: "Übermäßiges Vertrauen in Generiertes ohne Review ist das Hauptrisiko. Realistische Erwartung: 20–30% subjektiv, kein 10x. Für regulierte Branchen vorab klären, welche Tools Datenschutz/Hosting-Anforderungen erfüllen."
tools:
  - id: copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Etablierter Standard für Inline-Completion und Next Edit Suggestions in VS Code, JetBrains, Neovim, Visual Studio, Xcode, Eclipse. Reduziert Boilerplate-Tippen messbar, ohne IDE-Wechsel. Enterprise-Tier liefert SSO, IP-Indemnity, Policy-Controls. DACH-Beschaffung über bestehende Microsoft/EA-Verträge meist unkompliziert."
    caveats:
      - "Codebase-Kontext schwächer als Cursor bei großen Repos"
      - "Auto-Completion qualitativ teils hinter Cursor Tab"
      - "Premium-Modelle in Pro+/Enterprise per Request-Quota statt unlimited"
      - "Datenverarbeitung über Microsoft/OpenAI in den USA — separates DPIA üblich"
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - "Zuverlässig, niedriger Reibungsverlust"
        - "Beste Verbreitung über alle IDEs"
        - "Solide für Boilerplate und Standard-Patterns"
      complaints:
        - "Schwächere Codebase-Awareness als Cursor"
        - "Pro+ Quoten unzureichend für Heavy User"
    sources:
      - id: copilot-marketplace
      - id: copilot-vs-jetbrains-devtoolsreview
      - id: copilot-cursor-reddit-2025

  - id: cursor
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "VS-Code-Fork mit eigenem Tab-Modell und Codebase-Indexing. Speculative Editing liefert messbar längere und präzisere Vervollständigungen, gerade dort, wo Boilerplate Mustern im Projekt folgt. SOC 2 Type II, Privacy Mode, Enterprise-Tier mit SSO/RBAC vorhanden — für DACH-Konzern-Procurement (ISO 27001, AVV nach DSGVO Art. 28) reicht das aber oft noch nicht."
    caveats:
      - "Credit-basiertes Pricing seit 08/2025 unvorhersehbar bei Heavy Use"
      - "Kein ISO 27001 — bei vielen DACH-Großkonzernen ein KO-Kriterium"
      - "Kein natives JetBrains-Erlebnis (VS-Code-basiert)"
      - "Closed-Source — Lock-in-Risiko"
    practitioner_signal:
      volume: high
      tenor: polarized
      praise:
        - "Tab-Completion in einer eigenen Liga"
        - "Beste Codebase-Awareness im Mainstream"
      complaints:
        - "Credit-System teuer und unvorhersehbar"
        - "Wechselnde Qualität je nach Modell-Updates"
    sources:
      - id: cursor-enterprise
      - id: cursor-vs-copilot-devtoolsreview
      - id: claude-ai-coding-competitors-reddit
      - id: copilot-cursor-reddit-2025

  - id: jetbrains-ai-assistant
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "EU-Vendor (Tschechien), in DACH-Java/Kotlin-Stacks tief verankert. Mellum-Modell läuft lokal für Inline-Completion ohne Cloud-Roundtrip; AI Enterprise erlaubt org-eigenes LLM-Hosting — das löst die DACH-Compliance-Frage besser als die meisten US-Anbieter. Suggestions sind type-correct und inspection-clean, besonders stark in Java/Kotlin/Spring."
    caveats:
      - "Nur in JetBrains-IDEs — kein VS-Code-Build"
      - "Cloud-Features routen je nach Modell zu OpenAI/Google/Anthropic — DPIA pflicht"
      - "Credits brennen schnell ab (Pro-Quota)"
      - "Raw-Completion-Qualität laut Reviews hinter Cursor Tab"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - "Beste IDE-Integration für JetBrains-Stack"
        - "Type-aware Completions für Java/Kotlin"
      complaints:
        - "Credits brennen schnell ab"
        - "Autocomplete-Qualität hinter Cursor"
    sources:
      - id: jetbrains-ai-devtoolsreview
      - id: jetbrains-ai-vibecodedthis
      - id: jetbrains-ai-installation-docs
      - id: claude-ai-coding-competitors-reddit

  - id: tabnine
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Air-gapped/On-Prem-Deployment plus SOC 2, ISO 27001, GDPR und IP-Indemnity machen Tabnine in regulierten DACH-Branchen oft zur einzig zulassungsfähigen Option für Inline-Completion. Kernziel 'weniger Boilerplate tippen' wird zuverlässig bedient."
    caveats:
      - "Acceptance-Rate praxis-niedriger als Copilot/Cursor (~45% vs. ~65%)"
      - "Free-Tier 2025 deutlich beschnitten"
      - "Self-hosted Setup verlangt Aufwand und GPU-Infrastruktur"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - "Self-hosted bleibt Daten im Haus"
        - "Funktioniert in allen großen IDEs"
      complaints:
        - "Suggestions schwächer als Konkurrenz"
        - "Wirkt feature-mäßig hinter Copilot/Cursor zurück"
    sources:
      - id: tabnine-enterprise
      - id: tabnine-medium-acceptance-rate
      - id: tabnine-reddit-selfhosted

  - id: continue-dev
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Apache-2.0 Plugin mit BYOK ermöglicht Routing zu Azure OpenAI Frankfurt oder lokalem Ollama — naheliegender Compliance-by-Design-Pfad für DACH-Banken/Versicherungen. Inline-Completion und Sidebar-Chat in VS Code/JetBrains."
    caveats:
      - "Kein zentrales Admin-/Audit-Backend für Hunderte Entwickler"
      - "UX hinter Cursor/Copilot, mehr Konfigurationsaufwand"
      - "Qualität abhängig vom gewählten Modell"
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - "Volle Modell-Wahl, lokal möglich"
        - "OSS, kein Lock-in"
      complaints:
        - "UX hinter Cursor/Copilot"
        - "Mehr Konfigurationsaufwand"
    sources:
      - id: continue-aicodingcompare
      - id: continue-jackson-blog

  - id: sourcegraph-cody
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Einer der wenigen Anbieter mit aktiv supportetem Self-host-Pfad inkl. BYOK gegen Bedrock/Vertex. Sinnvoll für DACH-Konzerne mit großen Monorepos, in denen 'Boilerplate' projektspezifisch ist und cross-repo Kontext entscheidend ist."
    caveats:
      - "Free/Pro 2025 abgekündigt; nur Enterprise ab ~$59/User/Monat"
      - "Setup-Aufwand: Sourcegraph-Instanz nötig"
      - "Außerhalb großer Monorepos teurer Overkill"
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - "Stark bei Monorepo-Kontext"
        - "Self-host für IP-sensitive Umgebungen"
      complaints:
        - "Free/Pro Abkündigung enttäuschte Community"
        - "$59/User/Monat schließt Individuen aus"
    sources:
      - id: cody-sourcegraph-docs
      - id: cody-faq-deprecation
      - id: cody-byok-config
      - id: continue-jackson-blog

sources:
  - id: metr-rct-2025
  - id: claude-ai-coding-competitors-reddit
---
