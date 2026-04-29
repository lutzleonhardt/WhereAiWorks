---
stage: product-discovery
order: 11
roles:
  - product-manager
title: RAG über bestehende Discovery-Artefakte und Confluence
goal_label: Frühere Research, PRDs und Lessons-Learned auffindbar machen
suitability: conditional
rationale: "Ältere PRDs, Lessons-Learned und Interview-Auswertungen verschwinden in Confluence-Silos, und für Großorganisationen ist das 'Wer hat das schon mal untersucht?'-Problem lösbar geworden, weil permission-bewusste RAG-Plattformen mittlerweile enterprise-reif sind. Atlassian Rovo und IntraFind iFinder decken dabei die zwei häufigsten DACH-Profile ab: nativer Atlassian-Cloud-Stack und reguliertes On-Premises-Umfeld."
tools:
  - id: support-atlassian-com-bitbucket-cloud-docs-use-ai-to-generate-pull-request-descriptions
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Native Wahl, wenn Discovery-Estate primär in Confluence/Jira liegt: Hybrid Retrieval, Permission-Recheck nach Reranking, Lessons-Learned-Agents. EU-Datenresidenz in Atlassian Cloud, ISO 27001/SOC 2. Confluence-Permission-Hygiene in Konzernen ist allerdings historisch katastrophal — Audit vor Rollout zwingend."
    caveats:
      - Atlassian Data Center/On-Prem-User bekommen Rovo nicht voll — viele DACH-Konzerne sind noch DC
      - Subprozessoren (OpenAI/Google) müssen pro AVV bewertet werden
      - Stärken liegen im Atlassian-Stack; SharePoint-Mix erfordert Drittanbieter-Connectoren
      - Cloud-only; Data-Residency in DACH auf Atlassian-Regionen begrenzt
      - Sichtbarkeitsregeln müssen in Confluence sauber gepflegt sein, sonst surface't Rovo veraltete oder vertrauliche Pages
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Direkt in Confluence/Jira, ohne separate Plattform
        - Lessons-Learned- und Interview-Synthese-Agents lassen sich selbst bauen
      complaints:
        - Nicht-Atlassian-Quellen brauchen Drittanbieter-Apps
        - Antwortqualität abhängig von Confluence-Hygiene
    sources:
      - id: atlassian-com-blog-atlassian-engineering-advancing-rovo-semantic-search
      - id: hean-tech-blog-rovo-lessons-learned-agent
      - id: medium-com-40paul-hackenberger-atlassian-rovo-from-loom-user-interviews-to-product-backlog-5d18b85bed4b
  - id: glean-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Marktführer für AI-gestützte Enterprise-Search mit 100+ Konnektoren und permission-aware Antworten via Glean Protect. Für DACH-Töchter US-getriebener Konzerne realistisch, aber für regulierte Häuser (BaFin/DORA, BSI C5) sind fehlende DACH-Spezifikzertifizierungen und Cloud-only-Modell ernste Hürden.
    caveats:
      - Cloud-only; keine BSI-C5/TISAX-Zertifizierung sichtbar — politischer Showstopper bei BaFin-/DORA-Häusern
      - Subprozessoren (OpenAI, Anthropic) brauchen separate AVV-Bewertung
      - Hoher Listenpreis (~$50/User/Monat); ROI-Diskussionen bei Renewals dokumentiert
      - Kein deutsches UI/Support-Vertragsmodell out-of-the-box
      - Cloud-first; on-prem nur eingeschränkt (Vendor-managed) — DACH-Souveränitäts-Setups schwierig
      - "Komplexes Setup: alle Konnektoren + Permission-Sync brauchen IT-Vorlauf"
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Spart PMs Zeit beim Finden alter Slack-/Doc-Threads
        - Agenten überwachen Slack auf Falschaussagen über das Produkt
      complaints:
        - Hoher Preis vs. ROI-Nachweis schwierig
        - Hallucinations bleiben, Setup-Aufwand hoch
    sources:
      - id: glean-com-blog-enterprise-search-evaluation-2026
      - id: onyx-app-insights-enterprise-search-tools-2026
      - id: reddit-com-r-productmanagement-comments-1p6ef3p-real-examples-of-agents-youre-using-as-a-pm
      - id: reddit-com-r-techsales-comments-1qkag4y-glean-technologies
  - id: anthropic-com-claude-enterprise
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Realistische PM-Praxis 2026 als 'Project Brain' pro Initiative. Enterprise-Plan mit SSO/Audit-Logs, MCP-Connectoren zu Confluence/Jira. Ersetzt aber keine Org-RAG-Plattform und schafft Schatten-IT-Risiko, wenn PMs vertrauliche PRDs in persönliche Projects laden.
    caveats:
      - EU-Datenresidenz bei Anthropic noch begrenzt; US-Hosting Standard
      - Permission-Modell ist Project-Sharing, nicht Quell-ACL
      - MCP-Connectoren zu Confluence/Jira in DACH-Konzernen typischerweise Compliance-genehmigungspflichtig
      - Projektgrößen-Limits — kein Org-weiter RAG-Index
      - "Schatten-IT-Risiko: PMs laden vertrauliche PRDs in persönliche Projects hoch"
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Schneller Zugang ohne IT-Projekt
        - MCP-Server bringen Confluence/Jira ohne Plattformwechsel
      complaints:
        - Kein org-weiter RAG, eher persönlicher 'Vault'
        - Memory/Context-Management bleibt PM-Hausaufgabe
    sources:
      - id: reddit-com-r-productmanagement-comments-1r9vcsk-how-are-you-creating-a-project-brain-with-ai-prds
      - id: reddit-com-r-productmanagement-comments-1quo0qk-how-are-you-using-claude-code
  - id: cloud-google-com-products-agentspace
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Sinnvoll für Workspace-/GCP-zentrische DACH-Konzerne: Vertex-AI-Search-Layer mit Connectoren zu Drive, Confluence, Jira, SharePoint, EU-Region wählbar, IAM-Permission-Übernahme. In M365-Standard-Konzernen politisch schwer durchzusetzen."
    caveats:
      - Vendor-Lock-in an GCP/Workspace; in M365-Konzernen unrealistisch
      - Connector-Reife je Quelle unterschiedlich (Drive > SharePoint/Confluence DC)
      - Markt-Adoption in DACH gegenüber M365 Copilot begrenzt
      - Lizenzpfad an Workspace/GCP gekoppelt
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Works well for cross-app search; summarizes and reasons across all data sources
        - Good for single NLP query across Salesforce/Drive/Confluence/Slack/BQ
        - Multi-turn reasoning for unified customer/project picture
      complaints:
        - Limited file search, cumbersome integration setup for connectors
        - Deployment weaknesses in field, GCP documentation significantly lacking
        - Still full of bugs, needed a lot of work according to early testers
        - Positioning confusion between consumer Gemini and enterprise features
    sources:
      - id: dust-tt-blog-glean-alternatives-ai-enterprise-search
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Default-Wahl für M365-/SharePoint-zentrische DACH-Konzerne mit Permission-Vererbung via Graph + Purview und EU-Data-Boundary. ABER: Copilot verstärkt SharePoint-Oversharing dokumentiert systematisch — ohne Pflicht-Audit (Purview + SharePoint Advanced Management) ist DSGVO-Verstoß durch Leak vertraulicher PRDs hochwahrscheinlich."
    caveats:
      - Pflicht-Audit mit Purview + SAM vor Rollout, sonst Permission-Leak vertraulicher PRDs
      - EU Data Boundary deckt Bing-Grounding/Plugin-Calls nicht vollständig ab
      - Audit-Trail Antwort↔Quelle über Purview Audit nicht trivial korrelierbar
      - Confluence/Jira nur via Graph Connectors, mit Mehraufwand
      - BaFin/DORA-pflichtige Häuser brauchen explizite Subcontractor-Notifications
      - Lizenzkosten zusätzlich zu E3/E5
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Native M365-Integration ohne Zusatzplattform
        - Berechtigungs-Vererbung von SharePoint übernommen
      complaints:
        - Surface't sensible Inhalte aus überteilten Sites
        - Ohne Purview/SAM-Aufräumen zu riskant
    sources:
      - id: learn-microsoft-com-en-us-copilot-microsoft-365-configure-secure-governed-data-foundation-microsoft-365-copilot
      - id: sharepointsupport-com-blog-sharepoint-permissions-security-complete-guide-2026
      - id: techcommunity-microsoft-com-blog-microsoft365copilotblog-from-oversharing-to-optimization-deploying-microsoft-365-copilot-with-confidence-4357963
  - id: rheininsights-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Likely missed by market scan because Connector-Suite-Spezialist, kein End-User-PM-Tool. Deutsche GmbH mit dem zentralen DACH-Schmerzpunkt im Fokus: Early-Binding-Security-Trimming für SharePoint Online/On-Prem (2013–Subscription) und Confluence Cloud/DC v7–v10. On-Prem oder eigene Cloud, kein Datenabfluss zu Hyperscalern. Typische Wahl, wenn ein Konzern selbst eine RAG-Pipeline baut (z. B. auf Open WebUI, Copilot, eigenem LLM) und korrekte Permission-Vererbung braucht."
    caveats:
      - Reine Connector-Plattform — PM-UX/Frontend muss selbst gebaut oder beigestellt werden
      - Eher für IT-Plattform-Teams als für PM-Self-Service
      - Kleinanbieter; Support-Kapazität für Großkonzerne prüfen
    sources:
      - id: rheininsights-com-de-connectors-sharepoint-online-php
  - id: dust-tt
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "EU-gehostete Plattform (SOC 2 Type II, GDPR, Mistral-Option) — valider EU-Souveränitäts-Pick für technikgetriebene Teams. Unabhängiger Praktiker-Test bestätigt Produktionsreife. Kritische Einschränkung für DACH-Enterprise: kein Per-User-Permission-Sync aus Quellsystemen — Spaces-Zugriff ist workspace-weit, nicht ACL-granular. Für Konzerne mit permission-sensitiven PRDs damit nur nach sorgfältiger Space-Architektur bedingt einsetzbar."
    caveats:
      - "Kritische ACL-Lücke (unabhängig bestätigt): kein Per-User-Permission-Sync aus Confluence/SharePoint — alle Space-Inhalte sichtbar für alle Space-Mitglieder, unabhängig von Quell-ACLs"
      - Cloud-only; MIT-Lizenz, aber Self-Hosting ist kein offiziell unterstützter Pfad
      - Keine DACH-Enterprise-Referenzen; bekannte Kunden primär aus Frankreich/US (Qonto, Alan)
      - "Setup-Aufwand: Wochen bis Monate für saubere Space-Governance-Konfiguration"
      - Connector-Reife für Confluence DC und SharePoint on-prem schwächer als spezialisierte Anbieter
      - Nicht in Standard-Enterprise-Search-Analyst-Rankings; als 'Agent-Builder mit Search' positioniert, nicht als Enterprise-Search-Plattform
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Gute Antwort-Formatierung; EU-Mistral-Inference-Option verfügbar
        - Produktionsreife bei Scale bestätigt (10M+ Temporal-Activities/Tag)
      complaints:
        - 35% langsamer als Alternativen bei Slack-Queries (MCP-Fetching statt Native-Indexing)
        - Space-Governance komplex; ACL-Architektur kein Per-Document-Sync — Deal-Breaker für permission-sensitive Umgebungen
    sources:
      - id: eu-dust-tt-home-security
      - id: eu-dust-tt-blog-what-is-data-sovereignty
      - id: super-work-blog-super-vs-dust
  - id: mindbreeze-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Stärkster DACH-spezifischer Insight-Engine-Kandidat: österreichischer Vendor, On-Prem-Appliance möglich, 2700+ Konzernkunden, SOC 2 Type II + GDPR-Anonymisierung. Gartner Peer Insights 43 verifizierte Bewertungen (4.7/5, 93% Empfehlungsrate) von Enterprise-Nutzern aus Manufacturing, Banking, Energy und Government — exakt die regulierten DACH-Branchen. Permission-Enforcement bei jedem GenAI-Query. Für regulierte BaFin-/DORA-Häuser politisch leichter durchsetzbar als Glean."
    caveats:
      - Lange Implementierungszyklen (6–12 Monate typisch); kein PM-Self-Service
      - AI/GenAI-Komponente jünger als die klassische Suchplattform — RAG-Reife pro Konnektor unterschiedlich
      - Klassische Enterprise-Vertriebszyklen, kein Self-Service
      - UX/Marketing weniger 'consumer-grade' als Glean/Notion
      - Eigenständige Plattform — Implementierung mit Konzern-IT nicht trivial
      - Pricing intransparent; als hoch wahrgenommen laut G2-Reviews
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Multi-Source-Indexierung unter Beibehaltung von Access Rights (Gartner-Reviewer)
        - On-Prem-Appliance ohne Datenabfluss zu Hyperscalern
      complaints:
        - Setup und Customization aufwendig; Lernkurve hoch
        - Pricing als hoch wahrgenommen; intransparentes Lizenzmodell
    sources:
      - id: mindbreeze-com-deployment-options
      - id: inspire-mindbreeze-com-de-replacement
      - id: gartner-com-reviews-market-insight-engines-vendor-mindbreeze-product-mindbreeze-inspire
  - id: onyx-app
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Beste Open-Source-/Self-Host-Option für DACH-Konzerne mit Souveränitätsanspruch und Plattform-Mannschaft. MIT-Lizenz, 40+ Konnektoren, Permission-Sync, Bring-your-own-LLM, Air-Gap-fähig. Unabhängig bestätigt: Netflix, Ramp, Thales Group in Produktion; 19.7K GitHub-Stars, SOC 2 Type II, GDPR. HackerNews-Praktiker mit 1+ Jahr Produktionserfahrung bestätigt Multi-Connector-Retrieval; F100-Nutzer bevorzugt Onyx gegenüber M365 Copilot wegen besserer SharePoint/Teams-Abdeckung."
    caveats:
      - Full Document-Level RBAC und SSO sind Enterprise Edition only — Community Edition genügt nicht für DACH-Konzern-Procurement
      - Self-Host-Verantwortung für Vektor-DB, Embeddings, LLM-Routing liegt voll bei IT — operativer Aufwand wird oft unterschätzt
      - Kein etabliertes DACH-Partner-Ökosystem; Support-SLA muss extra eingekauft werden
      - Connector-Permission-Qualität variiert je Connector — einige als 'limited' markiert
      - 40+ Konnektoren vs. Glean 100+ — Abdeckung von DACH-spezifischen Tools (SAP, HCL Notes) unbestätigt
      - Enterprise-Sales-Reife geringer; in DACH-Konzernen meist Eval-Status statt Vendor-Listing
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Produktionsreife bei Scale nachgewiesen (Netflix, Ramp, Thales)
        - Kein SaaS-Vendor berührt interne Daten — zentrales Selling-Argument für regulierte Branchen
      complaints:
        - Operativer Aufwand für Connector-Sync-Health und Embeddings-Updates unterschätzt
        - Permissioning-Implementierung je Connector unterschiedlich tief
    sources:
      - id: onyx-app-search
      - id: onyx-app-insights-enterprise-search-tools-2026
      - id: news-ycombinator-com-item-id-46049095
      - id: topaiproduct-com-2026-03-28-onyx-hits-19-7k-github-stars-the-open-source-answer-to-gleans-7-2b-enterprise-ai-play
  - id: sinequa-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "20+ Jahre NLP-Heritage, jetzt Agentic-AI-Plattform. On-Prem/Private Cloud/Managed SaaS, SOC 2, ISO 27001, GDPR, Permission-Vererbung. Kundenbasis unabhängig bestätigt: Airbus, TotalEnergies, Siemens, AstraZeneca, Pfizer, NASA — exakt das regulierte Schwergewichts-Profil. ChapsVision-Übernahme Nov 2024 mit €85M Finanzierung belegt Investorenvertrauen. Für DACH-Großkunden in Financial Services, Aerospace und Manufacturing ein valider Pick."
    caveats:
      - Roadmap-Klarheit nach ChapsVision-Akquisition prüfen; Bestandskunden berichten von verschobenen Releases
      - Mindshare fällt auf PeerSpot (7.7% → 5.2%) — Glean gewinnt; 0 frische öffentliche Reviews auf PeerSpot
      - Lizenz pro Use Case statt pro Seat führt bei PM-Workflows zu schwer kalkulierbarem TCO
      - Schlechtestes Ease-of-Use (7.0/10) und Preis/Leistung (7.5/10) im unabhängigen Top-10-Vergleich
      - Klassischer Enterprise-Sales, kein Self-Service-Trial
      - Out-of-the-box-Erfahrung weniger PM-fokussiert als Glean/Rovo
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Stark bei unstrukturierten Daten und Compliance-Governance in regulierten Branchen
        - On-Prem/Private-Cloud mit Permission-Vererbung und mehrsprachiger NLP
      complaints:
        - Komplexe, teure Implementierung; traditionelle UI
        - Keine frischen öffentlichen Praktiker-Reviews nach ChapsVision-Übernahme sichtbar
    sources:
      - id: sinequa-com-product-enterprise-search
      - id: businesswire-com-news-home-20241118794850-en-chapsvision-strengthens-ai-capabilities-with-sinequa-acquisition-and-completes-new-us90m-funding-round
      - id: cotocus-com-blog-top-10-enterprise-search-platforms-features-pros-cons-comparison
  - id: ambersearch-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Likely missed by market scan because deutscher Mid-Market-Anbieter mit geringer SEO-Sichtbarkeit außerhalb DACH. ISO 27001, SOC 2, GDPR, EU-AI-Act, KI-Hosting in Deutschland, 70+ Connectoren. Valider Pick für deutsche Mittelständler (50–500 Mitarbeiter, M365/Confluence-Standardstack). Für DAX-Konzernprokurement jedoch eingeschränkt: 30 Mitarbeiter, €2.1M Seed, Gründer haben explizit von Großkonzernen zu KMU pivotiert, kein Analyst-Coverage."
    caveats:
      - "Gründer-bestätigter Mittelstand-Fokus: explizit von Großunternehmen zu KMU pivotiert (einfachere IT-Umgebung, weniger Stakeholder)"
      - "Sehr frühe Unternehmensphase: 30 Mitarbeiter (Apr 2025), €2.1M Seed — Skalierbarkeit und SLA-Reife für Großkonzerne unbewiesen"
      - Zero OMR-Reviews (Deutschland's führende B2B-Software-Plattform) trotz 200+ behaupteter Kunden — kein öffentliches Peer-Feedback
      - Kein Analyst-Coverage (Gartner, Forrester, IDC) sichtbar
      - AI-Modell-Auswahl auf in Europa gehostete LLMs beschränkt — Performance vs. GPT-5/Claude-Klasse abwägen
      - Mid-Market-Footprint; Konzernreferenzen DAX-Größenordnung müssen einzeln geprüft werden
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: ambersearch-de-en-product
      - id: startbase-de-news-ambersearch-erfolgreich-mit-21-millionen-euro-seed
      - id: tech-eu-2025-03-24-german-ai-search-firm-ambersearch-secures-eur21m-seed-investment
  - id: intrafind-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Likely missed by market scan because als klassische On-Prem-Enterprise-Search positioniert, nicht aggressiv als 'AI-Plattform' vermarktet. Münchner Software-Hersteller seit 2000, ISO 27001:2022, ~3M tägliche Nutzer in Behörden und Konzernen. Forrester Wave Cognitive Search: Strong Performer sowohl Q3 2021 als auch Q4 2023 — Sweet Spot explizit Government und Manufacturing, exakt das DACH-Regulierungsprofil. Referenz BGE (Bundesgesellschaft für Endlagerung) und weitere Behörden. Genau das DACH-Vendor-Profil, das BSI/BaFin-Häuser bevorzugen."
    caveats:
      - iAssistant (RAG/GenAI-Layer) ist neu (ab 2024) — keine unabhängigen Reviews oder Benchmarks sichtbar; iFinder-Fundament ist belegt, nicht der AI-Layer
      - Kleinerer Anbieter (~65 Mitarbeiter) — Skalierungsfähigkeit für Großkonzerne prüfen
      - "Sehr dünne Community-Präsenz: 10 G2-Reviews, 0 OMR-Reviews — vertriebskanal-typisch für DACH-Direktvertrieb"
      - Forrester-Coverage seit 2023 nicht aktualisiert; Gartner Insight Engines MQ eingestellt 2022
      - Vertrieb klassisch-projektbasiert; kein Self-Service-Trial
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Nahtlose Integration in bestehende Umgebung ohne Hadoop-Infrastruktur (G2-Reviewer)
        - "Forrester Strong Performer (2021 + 2023): explizit für Government und Manufacturing empfohlen"
      complaints:
        - Kaum öffentliche Community-Präsenz — Direktvertrieb ersetzt Peer-Reviews
        - GenAI-Reife des iAssistant-Layers noch nicht unabhängig validiert
    sources:
      - id: intrafind-com-en-about-us
      - id: intrafind-com-sites-default-files-media-intrafind-customer-reference-bge-en-pdf
      - id: g2-com-compare-copernic-desktop-search-vs-ifinder
start_here: Teams im Atlassian-Stack starten mit Rovo, da Permission-Recheck eingebaut ist, EU-Datenresidenz wählbar ist und kein separates Plattform-Projekt nötig wird. Vor dem Rollout ist ein Confluence-Permission-Audit unumgänglich, damit keine vertraulichen Seiten in Antworten durchsickern.
caveats: Falsch konfigurierte Confluence-/SharePoint-Permissions können vertrauliche PRDs in RAG-Antworten durchreichen — ein DSGVO-Risiko, das einen Berechtigungs-Audit vor Produktivbetrieb zur Voraussetzung macht. Atlassian Data Center-Installationen bekommen Rovo nicht vollständig; für regulierte On-Prem-Umgebungen muss ein spezialisierter Anbieter wie IntraFind separat evaluiert werden.
sources: []
---
