---
stage: product-discovery
order: 7
roles:
  - product-manager
title: Sekundärrecherche und Markt-Briefings
goal_label: Aus Web/Reports schnelle Hintergrund-Briefings erstellen
suitability: conditional
rationale: ChatGPT Deep Research und Claude Research liefern heute in Minuten ein diskussionsfähiges Pre-Discovery-Briefing — beide enterprise-ready mit EU-Region, DPA und Zero Retention. Der Use Case ist ohne Eigenentwicklung produktiv zu pilotieren, sobald eine Quellenprüfungs-Routine etabliert ist.
tools:
  - id: openai-com-index-introducing-deep-research
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Marktführender autonomer Research-Agent mit ChatGPT Enterprise (SOC 2 II, DPA, EU Data Residency, Zero Retention). Liefert die dichtesten Reports im Vergleich. Caveat bleibt englischer Listicle-Bias und CLOUD-Act-Exposure trotz EU-Residenz.
    caveats:
      - Sub-Processor-Kette (Azure-Backend) für DACH-Datenschutzbeauftragte transparent machen
      - Halluzinierte Sektionen dokumentiert — Quellenprüfung Pflicht
      - Betriebsrat-Mitbestimmung bei Logging/Performance-Daten
      - Sub-Processor-Liste (OpenAI, Microsoft Azure als Backend) muss vom DACH-Datenschutzbeauftragten geprüft werden — CLOUD-Act-Exposure bleibt trotz EU-Residenz
      - Betriebsrat-Mitbestimmung bei Performance-Daten der Nutzer (Logging) berücksichtigen
      - Plus-Tier nur 10 Deep-Research-Calls/Monat — Friction für Power-User
      - Reports tendieren zu langer englischer Listicle-Synthese, DACH-spezifische Quellen unterrepräsentiert
      - Halluzinierte Cases dokumentiert (siehe r/ChatGPT Github-Beispiel) — Quellenprüfung Pflicht
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Längste/tiefste Reports im Vergleich
        - Strukturierte Synthese über Domänen hinweg
      complaints:
        - Niedrige Monats-Quotas (10/Monat im Plus-Tier)
        - Fabriziert ganze Report-Sektionen, wenn Quelle unklar
    sources:
      - id: resources-rework-com-comparisons-ai-tools-perplexity-vs-chatgpt-search-vs-gemini
      - id: zdnet-com-article-i-tested-chatgpts-deep-research-against-gemini-perplexity-and-grok-ai-to-see-which-is-best
      - id: reddit-com-r-chatgpt-comments-1lcx4es-a-warning-about-chatgpts-deep-research
      - id: reddit-com-r-chatgpt-comments-1r1v3w7-do-you-actually-use-deep-research-agent-mode
  - id: anthropic-com-news-research
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Agentischer Modus bis 45 Min, geringere Halluzinationsneigung, MCP-Connectors. Anthropic mit AWS-EU-Region, SOC 2 II — passt in DACH-Procurement. Vor Connector-Rollout Audit-Trail-Reife prüfen.
    caveats:
      - Research-Feature regional-Rollout in EU prüfen, Beta-Status
      - MCP-Connector-Permissions/Audit jung — Security-Review vor Aktivierung
      - Reports kürzer als ChatGPT/Gemini
      - MCP-Connector-Ökosystem ist mächtig aber Audit-Trail/Permissions noch jung — Sicherheitsreview vor Connector-Aktivierung Pflicht
      - Regional-Rollout für Research-Feature in EU-Tenants prüfen — Beta-Status birgt Verfügbarkeits-Risiko
      - Research nur in Max/Team/Enterprise (Pro nachgereicht), Beta-Status
      - Anfangs nur USA/Japan/Brasilien — EU-Verfügbarkeit prüfen
      - Reports kürzer als ChatGPT/Gemini (1.000–3.000 Wörter)
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Bessere Reasoning-Qualität bei geringerer Halluzination
        - MCP-Connectors für eigene Datenquellen
      complaints:
        - Beta-Status, regional eingeschränkter Rollout
        - Kürzere Reports als Wettbewerb
    sources:
      - id: anthropic-com-news-research
      - id: arstechnica-com-ai-2025-05-claudes-ai-research-mode-now-runs-for-up-to-45-minutes-before-delivering-reports
      - id: scribehow-com-page-genspark-vs-claude-ai-deep-research-and-writing-comparison-2026-of-vwovuttwxscqms-eeya
  - id: gemini-google-overview-deep-research
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Multi-Page-Reports mit Per-Paragraph-Citations, 1M-Token-Kontext, Audio Overview. Für Workspace-DACH-Tenants mit Google Cloud EU-Region und DPA. Connector-Aktivierung sollte Betriebsrat einbeziehen, Audio Overview AI-Act-Art-50-relevant.
    caveats:
      - Persistente Halluzinationsneigung auch in Gemini 3.x
      - Audio Overview erzeugt synthetische Sprache — Kennzeichnungspflicht prüfen
      - Connector-Indizierung von Mitarbeiterdaten (Gmail/Drive) Mitbestimmungs-relevant
      - Connector-Aktivierung (Drive/Gmail) berührt Betriebsrat-Mitbestimmung wenn Mitarbeiterdaten indiziert werden
      - Audio Overview erzeugt synthetische Sprache — AI-Act Art. 50 Transparenzpflicht prüfen
      - Reports tendieren zu Verbosität und narrativer Konstruktion statt strikter Quellenbindung
      - Persistente Halluzinationsneigung auch nach 3.x-Updates dokumentiert
      - Benötigt Workspace-Admin-Rollout für Connector-Nutzung
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Längste/strukturierteste Reports mit Audio Overview
        - Tiefe Workspace-Integration
      complaints:
        - Konstruiert Narrative statt Citations zu matchen
        - Persistente Halluzinationen auch in Gemini 3.x
    sources:
      - id: gemini-google-overview-deep-research
      - id: findskill-ai-blog-perplexity-vs-chatgpt-vs-gemini-research
      - id: blog-google-innovation-and-ai-models-and-research-gemini-models-next-generation-gemini-deep-research
      - id: reddit-com-r-singularity-comments-1r948jk-gemini-31-pro-preview-has-google-finally-fixed
  - id: langdock-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Berlin-basierter EU-first AI-Workspace mit Deep Research, ISO 27001, EU-Hosting, single-tenant Option, gelistet auf deutschem Regierungs-AI-Marketplace. Für DACH-Konzerne, die einen Multi-Model-Workspace mit deutscher Vertragspartnerin und voller GDPR-Compliance wollen, statt Einzel-Lizenzen für US-Big-3.
    caveats:
      - Deep-Research-Qualität hängt am Backbone (häufig o3) — Sub-Processor-Kette im DPA transparent
      - Standardlimit 15 Deep-Research-Calls/30 Tage/User
      - Konzern-Referenzen noch begrenzt im Vergleich zu Hyperscalern
      - Deep-Research-Qualität hängt am Backbone-Modell (häufig OpenAI o3) — Sub-Processor-Kette muss im DPA transparent sein
      - "Skalenfrage: Listing 'auf deutscher Regierungs-AI-Marketplace' aber Konzern-Referenzen noch begrenzt"
      - Standardlimit nur 15 Deep-Research-Calls/30 Tage/User
      - Deep-Research-Qualität abhängig vom konfigurierten Modell (i.d.R. o3) — kein eigenes IP
      - Kleinere Plattform, Roadmap und Marktdurchdringung weniger erprobt als Hyperscaler
    sources:
      - id: docs-langdock-com-product-chat-deep-research
      - id: aicamp-so-blog-mistral-le-chat-alternatives
      - id: tldv-io-blog-langdock
  - id: notebooklm-google
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Synthese-Stufe nach Discovery, strikt quellengebunden, in Stakeholder-Meetings verteidigbar. Enterprise-Governance nur via Workspace; Standalone Consumer-Variante ohne DPA für Konzern-Einsatz untauglich.
    caveats:
      - Standalone-Variante ohne DPA — nur Workspace-Tier governance-tauglich
      - Kein eigenes Discovery — braucht vorgelagertes Recherche-Tool
      - Audio Overview = synthetische Stimme, AI-Act-Kennzeichnung
      - Standalone NotebookLM hat keinen DPA für Konzern-Procurement — nur Workspace-Variante governance-tauglich
      - Audio Overview produziert synthetische Stimmen — bei Verbreitung an Stakeholder AI-Act-Kennzeichnung
      - Kein eigener Web-Crawl/Discovery — braucht vorgelagertes Recherche-Tool
      - Performance-Empfehlung 30–50 Quellen pro Notebook
      - Enterprise-Governance läuft über Workspace, Standalone-Variante hat lockerere Kontrollen
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Keine Halluzinationen außerhalb hochgeladener Quellen
        - Audio Overview als Podcast für Pendelzeit
      complaints:
        - Kein Web-Discovery, nur Synthese
        - Source-Limit pro Notebook
    sources:
      - id: airesearchreviews-com-comparisons-notebooklm-gemini-notebooks-chatgpt-study-mode-perplexity-research-workflow
      - id: productbench-co-blog-notebooklm-for-product-managers-your-most-trustworthy-ai-thinking-partner
      - id: medium-com-justeattakeaway-tech-how-notebooklm-became-my-secret-sauce-as-a-technical-program-manager-98cf42691043
  - id: aws-amazon-com-quicksuite-research
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Für AWS-zentrierte DACH-Konzerne natürliche Integration via bestehender AWS-DPA und EU-Region. Kombiniert Org-Daten mit Web + Premium-Datasets. Markterprobung läuft. AWS European Sovereign Cloud (Brandenburg, Okt 2025) öffnet zusätzliche Sovereign-Option.
    caveats:
      - Verfügbarkeit in AWS European Sovereign Cloud Brandenburg prüfen
      - Premium-Datasets (S&P, FactSet, IDC) zusätzlich lizenz- und budget-relevant
      - Englische Quellen dominieren — DACH-Coverage ungeklärt
      - AWS European Sovereign Cloud (Brandenburg) erst Okt 2025 gestartet — Verfügbarkeit von Quick Research dort prüfen
      - Premium-Datasets (S&P/FactSet/IDC) zusätzlich lizenz- und prozurement-relevant
      - Neueres Produkt, Markterprobung läuft
      - Premium-Datasets benötigen Zusatz-Subscriptions
      - Englischsprachige Quellen dominieren — DACH-Coverage ungeklärt
    sources:
      - id: aws-amazon-com-quicksuite-research
  - id: elicit-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Evidenzbasierter Spezialist mit 138M+ Papers + Clinical Trials, Systematic-Review-Methodik. Für DACH-PMs in regulierten Branchen (Pharma, MedTech, FS) die belastbarste Wahl, wenn Behauptungen Primärquellen brauchen. EU-Hosting/DPA explizit verhandeln.
    caveats:
      - US-Vendor, EU-Hosting unklar — DPA und Sub-Processor-Liste anfordern
      - Schreibt keinen Fließtext, nur strukturierte Outputs
      - Englischsprachiges Paper-Universum, kaum DACH-Marktrecherche
      - US-Vendor (San Francisco), Hosting unklar — bei DACH-Procurement DPA und Sub-Processor-Liste konkret anfordern
      - Für reine deutschsprachige Marktrecherche kaum geeignet (Paper-Universum englisch)
      - Stark wissenschaftslastig — für reine Marktgrößen-Briefings überdimensioniert
      - Eigene Studie zeigt 90% Accuracy bei Datenextraktion — nicht 100%
      - Enterprise-Tier nötig für Agent-Workflows; EU-Hosting/DPA-Status weniger klar dokumentiert als bei Hyperscalern
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Sentence-level Citations aus echten Papers
        - Editierbare Pipeline-Schritte (Search/Screening/Extraction)
      complaints:
        - Schreibt keinen Fließtext, nur strukturierte Outputs
        - Domain-Coverage außerhalb empirischer Forschung lückenhaft
    sources:
      - id: elicit-com-blog-introducing-research-agent-workflows
      - id: elicit-com-blog-introducing-elicit-reports
      - id: greaterwrong-com-posts-chpkoaor2nfwjuik4-ai-deep-research-tools-reviewed
  - id: mistral-ai-news-le-chat-dives-deep
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "EU-souveräne Wahl: Paris, EU-RZ, SOC 2 II, kein Training auf Kundendaten — für DACH-KRITIS/Sovereign-Anforderungen oft die einzige zulässige Option. Qualität noch hinter Big-3."
    caveats:
      - Deep Research im Preview, kein SLA
      - Halluzinationsanfällig in Praktiker-Reports
      - Französische Quellenheuristik kann DACH-Briefings einfärben
      - Deep Research im Preview — keine Zusicherung von Funktionsstabilität/SLA
      - Französisch dominiert die Quellen-Heuristik teilweise stärker als Deutsch — DACH-Briefings empirisch testen
      - Deep-Research-Qualität noch unter ChatGPT/Gemini Niveau, häufige Halluzinationen berichtet
      - Quellenbasis und Reasoning bei komplexen englischsprachigen Themen schwächer
      - Deep Research im Preview-Status
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - EU-Hosting, GDPR-by-Design
        - Schnelle Antwortzeiten
      complaints:
        - Mehr Halluzinationen als US-Wettbewerb
    sources:
      - id: mistral-ai-news-le-chat-dives-deep
      - id: europeanstack-com-software-mistral-ai
      - id: reddit-com-r-perplexity-ai-comments-1j7dl2m-how-good-is-perplexity-deep-research
  - id: dreamleap-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Schweizer All-in-One Secure-AI-Plattform mit Deep AI Search, Swiss/EU/Private-Cloud-Hosting, GDPR und EU-AI-Act-Ready, Audit Logging. Für Schweizer/österreichische DACH-Konzerne mit FINMA/FMA-Anforderungen relevante Sovereign-Alternative. Likely missed by market scan because DACH-only player ohne globale Marketing-Reichweite und positioniert als Plattform statt als Deep-Research-Spezialist.
    caveats:
      - Deep-Research-Qualität öffentlich kaum benchmarked — Pilot-Phase einplanen
      - Vendor-Reife/Konzernreferenzen weniger transparent als Langdock
      - Backbone-Modelle und Sub-Processor-Kette im Procurement klären
    sources:
      - id: dreamleap-com-platform-overview
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Für DACH-Konzerne im M365-Ökosystem die naheliegendste Wahl: kombiniert interne SharePoint/Teams/E-Mail-Daten mit Web-Research, operiert vollständig im M365 Commercial Data Boundary inkl. EU Data Boundary, kein Zusatz-DPA nötig. Unabhängiger Direktvergleich bestätigt Stärke bei interner Datenfusion; stärker als Konkurrenten wenn org-eigener Kontext entscheidend ist."
    caveats:
      - 25 Researcher+Analyst-Queries/User/Monat als hartes kombiniertes Limit — für intensive Research-Workflows schnell erschöpft
      - Critique/Council nur Enterprise Frontier-Early-Access mit inkonsistentem Rollout — produktive Qualitätsbasis ist Standard-Researcher ohne diese Features
      - Bing als Web-Index schwächer als Google-basierte Konkurrenz bei reiner Web-Recherche
      - Halluzinationsrisiko bei internen Daten dokumentiert (Attributierung von Entscheidungen/Dokumenten auf falsche Personen)
      - Multi-Model-Routing (GPT-4o + Claude) erweitert Sub-Processor-Liste — im Procurement transparent machen
      - DRACO-Benchmark (+13,88% über Perplexity) ist Microsoft-eigener Test, keine unabhängige Replikation
      - Stärke liegt in M365-Datenfusion, nicht in reiner Web-Recherche-Tiefe — für reine Web-Research-Workflows ChatGPT/Claude bevorzugen
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Interne Daten (SharePoint/Teams/E-Mail) ohne Tool-Wechsel in Research integrierbar
        - Zeitersparnis bei org-kontext-intensiven Research-Tasks (6–8h/Woche in Pilot)
        - Compliance-Story vollständig durch bestehenden M365-Vertrag abgedeckt
      complaints:
        - 25-Query-Limit/Monat für Power-User zu niedrig
        - Critique/Council-Rollout inkonsistent — manche Business-Accounts ohne Zugang
        - Bing-Abhängigkeit als Schwachstelle bei reiner Web-Recherche
    sources:
      - id: learn-microsoft-com-en-us-microsoft-365-copilot-faq-researcher
      - id: smartcontentreport-com-deep-research-tools-comparison
      - id: office-watch-com-2026-microsoft-copilot-researcher-critique-council
start_here: "Pilot mit ChatGPT Enterprise Deep Research (EU-Region): ein 2-seitiges Domain-Briefing erstellen und jede Zahl gegen die zitierte Quelle prüfen. Wer eine geringere Halluzinationstoleranz braucht, prüft Claude Research als Alternative — mit dem Vorbehalt, dass das Feature aktuell noch im Beta-Rollout für EU-Tenants ist."
caveats: Alle Anchor-Tools zeigen Bias zu englischsprachigen Quellen — für DACH-spezifische Briefings ist die Quellenbasis schwächer, Marktgrößen müssen einzeln gegen Originalquellen geprüft werden. CLOUD-Act-Exposure bleibt bei ChatGPT trotz EU-Residenz ein offener Punkt; bei Claude Research EU-Rollout des Research-Features vor dem Pilot bestätigen.
sources: []
---
