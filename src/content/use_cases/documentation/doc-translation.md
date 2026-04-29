---
stage: documentation
order: 3
roles:
  - software-engineer
title: Doku-Übersetzung
goal_label: Technische Doku in mehrere Sprachen übersetzen
suitability: good_fit
rationale: DeepL Pro API als deutscher Anbieter mit EU-Default-Endpoint und BSI-C5-Testat ist die direkte Wahl für DACH-Unternehmen in regulierten Branchen. Für Teams, die Translation in CI/CD einbinden, liefert Lokalise eine ausgereifte Developer-Plattform mit DeepL als MT-Backend.
tools:
  - id: deepl-com-en-pro-api
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Deutscher Anbieter mit EU-Default-Endpoint, ISO 27001, SOC 2 Type II, HIPAA und C5 Type 2 (BSI-Cloud-Standard, in DACH-Behörden/regulierten Häusern Differenziator). Document-Translation für DOCX/HTML/XLIFF, Glossar, sofortige Datenlöschung. Bechtle als Reseller liefert Public-Sector-Frameworks. Kanonische Wahl für vertrauliche interne Doku per Briefing-Caveat.
    caveats:
      - Halluzinationen bei langem unstrukturiertem Text dokumentiert — Native-Review-Pflicht
      - Regionale Endpoints (US/JP) nur mit signiertem Addendum
      - Doku-spezifische Terminologie verlangt aktives Glossar-Pflege
      - C5-Testat ist explizit für DACH-Behörden/regulierte Branchen ein Differenziator gegenüber US-MT — sollte aktiv im Vendor-Argumentation genutzt werden
      - Bechtle ist offizieller DeepL-Reseller in DACH (Public Sector Framework Agreements möglich)
      - Idiomatik/Slang weiterhin schwach — Native-Review Pflicht
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - DE↔EN deutlich besser als Google Translate
        - Schneller Document-Translation-Endpoint
      complaints:
        - Halluziniert bei längeren/figurativen Texten
        - LLMs (ChatGPT, Le Chat) holen bei Kontext auf
    sources:
      - id: deepl-com-en-pro-api
      - id: developers-deepl-com-docs-getting-started-regional-endpoints
      - id: bechtle-com-de-en-brand-deepl-deepl-pro-language-platform
      - id: reddit-com-r-machinetranslation-comments-1l3qhj5-deepl-pro-fullon-hallucinating-things
      - id: reddit-com-r-buyfromeu-comments-1jc15ex-if-you-are-still-using-google-translate-stop-it
  - id: lokalise-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Developer-first TMS mit AWS EU-Region-Hosting, SOC 2 Type 2 + ISO 27001/27017 — für vertrauliche interne Doku tragbar. CLI v2 für CI/CD, GitHub/GitLab/Bitbucket-Integration, AI-Layer mit DeepL/Google als MT-Engines, Pro-AI mit MQM-Quality-Scoring, SSO im Enterprise-Tarif.
    caveats:
      - Per-Seat-Pricing premium (ab ~$120/mo, Enterprise-Tier deutlich höher)
      - MT-Engine-Auswahl (DeepL vs. Google vs. OpenAI) beeinflusst Datenresidenz separat — Reviewer-Pflicht
      - AI-Pro-Funktionen mit Quality-Scoring (MQM) erst im teuersten Tier
      - EU-Hosting muss explizit verhandelt werden
      - API-Throttling bei großen Sync-Batches berichtet
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Saubere UI, Designer-Workflows mit Figma
        - Mature CLI für CI/CD-Sync
      complaints:
        - Teuer ($1000+/mo bei mittleren Teams)
        - Versteht Produkt-Terminologie ohne Tuning schlecht
    sources:
      - id: lokalise-com-blog-best-ai-translation-tools
      - id: toolradar-com-guides-best-translation-software
      - id: landing-test-lokalise-cloud-product-security
      - id: reddit-com-r-webdev-comments-1qojkoe-opensource-github-action-for-i18n-that-replaces
  - id: phrase-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Aus Memsource+PhraseApp gewachsen, Hamburg-Wurzeln, ISO 27001 + GDPR-konform auf AWS EU. End-to-End-Plattform mit Strings (Developer), TMS (CAT), AI Orchestrator, MT-Aggregation. Stark in DACH-Pharma/Versicherung wegen Audit-Logs und LSP-Workflows.
    caveats:
      - Hochpreisig (Developer-Plan ab $525/mo annual) und komplexes Setup
      - Phrase-Orchestrator nutzt teils US-LLMs als MT-Aggregat — Konfigurationsmatrix muss reviewt werden
      - Kein C5-Testat dokumentiert
      - Setup komplex; lange Time-to-Hello-World
      - Kein OTA-Mechanismus für Mobile
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Industriestandard CAT-Editor (Memsource-Erbe)
        - Compliance-Features (SOC2, Audit-Logs)
      complaints:
        - Setup-Komplexität, Developer-Reibung
        - Sehr teuer für kleine Teams
    sources:
      - id: phrase-com-blog-posts-localization-platform-comparison-2026
      - id: listicler-com-comparisons-crowdin-vs-phrase-agile-development-teams
      - id: phrase-com-de-platform-tms
      - id: intlpull-com-blog-top-10-localization-tools-tms-comparison-2026
  - id: tolgee-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Open-Source mit Self-Host-Variante (Docker) — direkter Match zum Briefing-Caveat 'vertrauliche interne Doku, EU-Hosting Pflicht'. AI-Translator mit Kontext-Extraktion, CLI mit Branching, ISO 27001 (SaaS). Gibt DACH-Häusern volle Datenkontrolle, wenn Cloud-MT untersagt ist.
    caveats:
      - Self-Host erfordert Ops-Kapazität (Postgres, Reverse-Proxy, MT-Adapter)
      - AI-Translator ruft externe LLM-APIs auf — bei Self-Host kann Ollama/Mistral-Endpoint konfiguriert werden, sonst Datenfluss prüfen
      - Reviewer-Workflows weniger ausgereift als Crowdin/Lokalise
      - Kleineres Ökosystem als Crowdin/Lokalise
      - AI-Qualität abhängig von gewähltem LLM-Provider
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - OSS, self-hostable per Docker
        - In-Context-Editing direkt in der App
      complaints:
        - Kleinere Community als Crowdin/Lokalise
    sources:
      - id: docs-tolgee-io-tolgee-cli-branching
      - id: tolgee-io
      - id: reddit-com-r-nextjs-comments-1g5l9g2-what-localization-tools-are-you-using-for-you-app
  - id: smartling-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Enterprise-TMS mit SOC 2, ISO 27001, GDPR-DPA und EU-Hosting auf Anfrage. Stark für Help-Center/Knowledge-Bases mit hohen Compliance-Anforderungen, weniger für Docs-as-Code. Eher Sekundär-Pick neben Phrase/Lokalise/memoQ.
    caveats:
      - GDN-Proxy-Modell ist für interne Doku in der Regel kein Match
      - Custom-Pricing, Enterprise-only — nicht für kleine Teams
      - Keine relevante DACH-Praktiker-Sichtbarkeit gefunden
      - Stärker in Web-/Marketing als in Markdown-Doku
      - Kein OSS-Tier oder transparente Free-Option
    sources:
      - id: smartling-com-compare-transifex
      - id: xtm-ai-blog-the-10-best-translation-management-services-for-enterprise-teams-2026-guide
  - id: supertext-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Schweizer Anbieter mit 100% CH-Hosting oder On-Prem, ISO 27001/9001/17100/18587, FADP+GDPR-konform. Native Schweizer-Sprachvarianten (de-CH, de-AT) und Translation-API für CMS/PIM/TMS-Integration. Likely missed by market scan because Supertext positioniert sich als 'AI + Linguisten'-Hybrid und wird in englischsprachigen Developer-Listicles selten gelistet — in CH-Banken/Versicherungen aber Standard.
    caveats:
      - Stärker in Marketing-/Editorial-Content als in Markdown-Doku
      - Kein nativer Git-/Docs-as-Code-Workflow
      - Pricing eher Premium (Hybrid mit Linguisten)
    sources:
      - id: supertext-com-en-api
  - id: systransoft-com-translation-products-translate-server
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Vollständig on-prem hinter Firewall installierbare NMT-Engine mit Custom-Modell-Training auf Eigen-Daten. Referenzen: NATO, Europol, FR/SE Verteidigung — die kanonische Wahl für DACH-Behörden/Verteidigung/Pharma, die keinerlei Cloud-MT zulassen. Likely missed by market scan because SYSTRAN ist ein klassischer regulated-industry Vertical-Player, nicht in Developer-/SaaS-Listicles vertreten."
    caveats:
      - Hohe Einstiegskosten für Hardware/Lizenz, kein SaaS-Self-Service
      - Reine MT-Engine, kein TMS-Workflow — muss mit Weblate/memoQ kombiniert werden
      - Eigentumsverhältnisse (ChapsVision) für US-Datenschutz-Argumentation prüfen
    sources:
      - id: systransoft-com-translation-products-translate-server
  - id: lingo-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "OSS-AI-i18n-Toolkit mit BYO-LLM (inkl. Ollama für on-prem) — Datenfluss vollständig kundenseitig kontrollierbar, was den Briefing-Caveat erfüllt. CLI für JSON/YAML/Markdown, GitHub-Action mit Delta-Tracking via SHA-256. Kostengünstig, transparent. Production-Nutzer: Supabase, Cal.com."
    caveats:
      - Junges Tool, kein Vendor-SLA / Indemnity-Klauseln
      - Compliance-Posture wird de facto an die LLM-Wahl ausgelagert — Kunde muss DPA mit LLM-Provider getrennt schließen
      - Kein eigenes TMS-UI für Reviewer-Workflows
      - DSGVO hängt am gewählten LLM-Provider
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - BYO-LLM, transparente Pipeline
        - Hackathons/Indie-Devs nutzen es aktiv
      complaints:
        - Junges Tool, Reviewer-Workflows fehlen
    sources:
      - id: github-com-lingodotdev-lingo-dev
      - id: lingo-dev-en-docs-cli
      - id: dev-to-pavitra0-i-built-a-tool-that-lets-you-contribute-to-open-source-in-any-language-jok
      - id: opentools-ai-tools-lingodev
  - id: weblate-org
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Libre/OSS für kontinuierliche Lokalisierung mit dediziertem Sphinx-Doku-Workflow, Git/GitHub/GitLab/Bitbucket-Integration und REST-API. Self-Host-fähig, Hosted-Variante in der EU (Hetzner) — kanonische Antwort für vertrauliche interne Doku in regulierten DACH-Häusern, die keine SaaS-MT zulassen.
    caveats:
      - MT-Qualität hängt von angebundenen Engines ab — DeepL-EU als Default-Pairing empfehlenswert
      - UI/UX weniger poliert als kommerzielle TMS
      - Hosted Weblate liegt bei Hetzner — DACH-Hosting ist hier sogar Pluspunkt
      - Eigener Betrieb erfordert Maintenance-Kapazität (Postgres, Redis, MT-Adapter)
    sources:
      - id: github-com-weblateorg-weblate
      - id: docs-weblate-org-en-latest-admin-projects-html
      - id: dev-to-aowendev-doing-cicd-for-translation-with-weblate-4j9m
      - id: toolradar-com-tools-weblate
  - id: azure-microsoft-com-en-us-products-ai-services-ai-translator
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "In DACH-Konzernen mit Microsoft-Footprint (M365, Entra ID) die Default-Wahl für DSGVO-konforme MT: Private Endpoints + Azure-Region Germany West Central / West Europe, Daten verlassen das VNET nicht. No-Trace/No-Persist-Policy für Text- und Document-Translation (MS Learn bestätigt). Custom Translator für Domain-Terminologie. Likely missed by market scan because Azure AI Translator ist als Suite-Feature in Azure positioniert, nicht als eigenständiges 'AI-Translation-Tool'."
    caveats:
      - MT-Qualität DE↔EN typischerweise unter DeepL-Niveau
      - Setup erfordert Azure-Kompetenz (VNET, Private Endpoints, Bicep/Terraform)
      - Kein TMS-Workflow — muss mit Phrase/Lokalise/memoQ kombiniert werden
    sources:
      - id: innfactory-de-en-references-meggle-ai-translator
      - id: learn-microsoft-com-en-us-azure-ai-services-translator-secure-deployment
      - id: learn-microsoft-com-en-us-azure-ai-foundry-responsible-ai-translator-data-privacy-security
  - id: memoq-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: EU-Anbieter (Budapest) mit ISO 27001 + ISO 9001 + SOC 2 Type 2 (seit Jan 2026) und nativ on-prem-deploybar (Pro/Premium-Tarife) — direkter Treffer für DACH-Pharma/Manufacturing/Banken, die Vollkontrolle brauchen. Reife CAT-Editor-Erfahrung, Terminologie-Management, AGT (AI Generative Translation). Nimdzi Insights (Localization-Analyst) bestätigt führende Adoption bei europäischen Translatoren und LSPs. Likely missed by market scan because memoQ ist als LSP-/Übersetzer-Werkzeug positioniert, nicht als 'Doku-Übersetzungstool für Developer'.
    caveats:
      - Eher für Übersetzungs-Departments als für Docs-as-Code-Pipelines geeignet — Markdown-Workflow nicht primär
      - Hochpreisig im Enterprise-Tier
      - Lizenzmodell komplex (Project Manager + Translator-Seats)
    sources:
      - id: memoq-com-pressroom-memoq-earns-soc-2-type-2-compliance
      - id: memoq-com-de-pricing
      - id: nimdzi-com-tms-memoq-tms
  - id: xtm-cloud
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Enterprise-TMS mit SOC 2 Type II, ISO 27001, GDPR — explizit für Technical-Translation positioniert (Manuals, Compliance-Doku). Public- oder Private-Cloud-Deployment, audit-trail, terminology enforcement, Language Guard Compliance-Firewall. Likely missed by market scan because XTM wird primär an Localization-Departments und LSPs verkauft, nicht an Dev-Teams — DACH-Manufacturing nutzt es trotzdem breit.
    caveats:
      - Lizenzierung als Enterprise-Localization-Suite, nicht per-Doku — hohe Einstiegshürde
      - Markdown-/Git-First-Workflows weniger nativ als bei Crowdin/Lokalise
      - Setup-Komplexität auf Phrase-/Smartling-Niveau
      - On-Prem-Option ist Private Cloud (dedizierte Instanz), kein vollständig self-gemanagter Server
    sources:
      - id: xtm-ai
      - id: aiproductivity-ai-tools-xtm-cloud
start_here: Mit DeepL Pro API (EU-Region) auf einer überschaubaren, gut gepflegten Doku-Section starten — Quickstart oder eine einzelne Komponenten-Referenz sind ideal. Vor dem ersten Lauf ein Glossar mit den wichtigsten Produktbegriffen einpflegen; ohne Terminologiekontrolle sind die Outputs nicht publikationsreif.
caveats: Domain-spezifische Terminologie und Style-Guide-Konventionen verfehlen AI-Systeme ohne aktives Glossar — Native-Speaker-Review bleibt Pflicht. Für vertrauliche interne Doku sind nur Anbieter mit EU-Hosting und Datenlöschungsgarantie zulässig; generische LLMs ohne Region-Boundary sind DSGVO-rechtlich nicht tragbar.
sources: []
---
