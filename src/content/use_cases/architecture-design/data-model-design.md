---
stage: architecture-design
order: 7
roles:
  - software-engineer
  - software-architect
title: Datenmodell entwerfen
goal_label: ERD und Schema aus Domänenbeschreibung ableiten
suitability: good_fit
rationale: LLM-Coding-Assistenten wie Claude Code und Cursor übersetzen Domänenbeschreibungen heute End-to-End in Prisma-/SQLAlchemy-Schemata und Migrationsskripte — Practitioner-Workflows sind gut dokumentiert und toolchain-agnostisch (Flyway, Liquibase, Alembic). Für regulierte Domänen schließt erwin Data Modeler die fehlende Governance-Lücke mit Lineage, Sensitivity-Tagging und Multi-Level-Modeling.
tools:
  - id: dbdiagram-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Etablierter DBML-basierter ERD-Editor mit AI-Assistant; gute Round-Trip-Faehigkeit zwischen Diagramm und SQL/Prisma/Rails-Schema. Brauchbar fuer Greenfield-Entwurf, sofern Domaenenbeschreibung nicht-vertraulich.
    caveats:
      - SaaS - Domaenenbeschreibung verlaesst Unternehmensgrenze
      - AI-Funktionen Premium-only
      - Holistics ist Singapur-basiert ohne dokumentierte EU-Datenresidenz
      - Keine EU-Hosting-Option dokumentiert
      - AI-Features Premium-Tier; Free-Tier nicht ausreichend fuer Enterprise-Eval
    sources:
      - id: dbdiagram-io
  - id: mermaidchart-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Mermaid-erDiagram-Output ist Plain-Text und versionierbar im Repo - passt zu 'Docs-as-Code'-Patterns. AI ist Add-on; auch ohne AI im Selfservice nutzbar, was die Enterprise-Position deutlich entspannt.
    caveats:
      - Kein direkter SQL-DDL-Output - braucht zweiten Schritt (Copilot/Claude Code)
      - AI-Funktion Cloud-only
      - ER-Diagramm-Detailtiefe begrenzter als bei spezialisierten ERD-Tools
      - AI-Funktion Cloud-only; ohne AI ist Mermaid auch lokal nutzbar
      - ER-Diagramm-Detailtiefe begrenzter als spezialisierte ERDs
      - Kein direkter SQL-DDL-Output - braucht zweiten Schritt
    sources:
      - id: mermaidchart-com
  - id: idera-com-er-studio-enterprise-data-modeling-and-architecture-tools
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Klassische Enterprise-Data-Architecture-Suite mit Repository, Lineage und Datenklassifizierung; in DACH-Banken/Versicherungen verbreitet. Likely missed by market scan because Tool als Legacy-Enterprise-Modeler positioniert und nicht in 'AI'-Capability-Listen sichtbar.
    caveats:
      - AI-Augmentation begrenzt - kein LLM-First-Tool
      - Lizenzkosten und Setup-Komplexitaet hoch
      - Roadmap-Tempo deutlich unter Cloud-Wettbewerb
    sources:
      - id: idera-com-er-studio-enterprise-data-modeling-and-architecture-tools
  - id: sap-com-products-technology-platform-powerdesigner-data-modeling-tools-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Etablierter Enterprise-Datenmodellierer mit starker DACH-SAP-Bestandskunden-Verbreitung; deckt konzeptionelles, logisches und physisches Modell ab inkl. Governance. Likely missed by market scan because Tool als Legacy-Enterprise-Modeler und nicht als 'AI'-Tool vermarktet wird - AI-Augmentation ist begrenzt, aber Compliance-Posture ist Top-Tier.
    caveats:
      - AI-Anteil sehr gering im Vergleich zu LLM-Tools - kein 'AI-First'-Tool
      - SAP-Roadmap fuer PowerDesigner unklar - Maintenance-only-Modus moeglich
      - Schwere Lizenz- und Setup-Kosten
    sources:
      - id: sap-com-products-technology-platform-powerdesigner-data-modeling-tools-html
  - id: chartdb-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Self-hostbarer Open-Source-ERD-Editor (AGPL-3.0, 22k+ GitHub-Stars) mit AI-Schema-Diff und DDL-Reverse-Engineering. In der Praktiker-Community (Hacker News, Supabase-Nutzer) als pragmatische Alternative zu Built-in-ERD-Viewern positioniert. Cloud-AI-Pfad fuer regulierte Domaenen nur mit Self-Hosting + eigenem LLM-Routing tragbar.
    caveats:
      - AI-Schema-Generierung weniger ausgereift als spezialisierte Text-to-Schema-Tools
      - Cloud-Variante nutzt externe LLMs - bei sensiblen Daten zwingend self-hosten
      - Junges OSS-Projekt - Maintainership/Community-Tiefe vor Enterprise-Adoption pruefen
      - Keine bekannte SOC2/ISO27001-Zertifizierung der Cloud-Variante
      - Schema-Diff-Features (live DB vs Diagramm) noch in Entwicklung - Praktiker-Feedback aus HN bestaetigt Lueckenstand
    sources:
      - id: chartdb-io
      - id: news-ycombinator-com-item-id-44972238
      - id: github-com-chartdb-chartdb
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Lokale Repo-Ausfuehrung umgeht den SaaS-Caveat des Briefings: Domaenenbeschreibung bleibt im Sandbox, nur Modell-Calls gehen an Anthropic-API (mit Bedrock-EU-Routing in EU). Praktikerquellen (ClaudeCodeLab, ClaudeCodeGuides, Usagebar) dokumentieren explizite Workflows: End-to-End von Anforderung ueber Prisma-Schema bis Multi-Step-Migration mit CLAUDE.md-Konvention; Multi-Schema-Monorepo-Orchestrierung; Index-Optimierung; Migration-Tooling-agnostisch (Flyway/Liquibase/Alembic/Prisma)."
    caveats:
      - Kein nativer ERD-Visual-Output - Mermaid/DBML als Brueckenformat noetig
      - API-Route (Anthropic direkt vs. Bedrock EU) explizit konfigurieren
      - Komplexe Domaenenmodelle brauchen Senior-Review fuer 3NF/Konsistenz
      - Token-Kosten bei grossen Schema-Repos signifikant
      - Modell-Calls gehen an Anthropic-API
    sources:
      - id: claude-com-product-claude-code
      - id: claudecode-lab-com-en-blog-claude-code-database-design
      - id: claudecodeguides-com-claude-code-prisma-schema-migrations-advanced-workflow-guide
      - id: usagebar-com-blog-how-to-do-postgresql-migrations-on-claude-code
  - id: cursor-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "IDE-Agent uebersetzt Domaenenbeschreibung in Prisma/SQLAlchemy/JPA und Liquibase/Flyway-Migrationen; Repo-Kontext sichert Konsistenz. Praktikerquellen (Developer Toolkit, Stork.AI, Markaicode) dokumentieren konkrete Workflows: Ask-Mode fuer Normalisierung, Agent-Mode fuer typsichere Schema-Generierung mit FK/Unique/CHECK/Index, automatische Recovery bei Migration-Fehlern. Privacy-Mode/Enterprise-Tier Pflicht-Konfiguration fuer regulierte Domaenen."
    caveats:
      - Privacy-Mode muss explizit aktiviert sein - Default leakt Code
      - ERD-Output indirekt ueber Mermaid/DBML
      - US-Vendor; EU-DPA verhandelbar aber nicht Standard
      - Schema-Vorschlaege in komplexen Domaenen brauchen Senior-Review
    sources:
      - id: cursor-com
      - id: developertoolkit-ai-en-cursor-ide-lessons-database-design
      - id: stork-ai-blog-this-ai-ide-replaced-my-team
      - id: markaicode-com-cursor-composer-mode-guide
  - id: erwin-com-products-erwin-data-modeler
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Enterprise-Datenmodellierer mit Governance, Lineage und Sensitivity-Tagging - adressiert genau den DSGVO-Art.-9-Caveat des Briefings. Etablierte Wahl in DACH-Banken/Versicherungen; PeerSpot (8.4/10, 60%+ Large-Enterprise) und TrustRadius bestaetigen breite Enterprise-Adoption mit konsistenten Reverse-/Forward-Engineering- und Multi-Level-Modeling-Workflows in Financial Services und Government. AI-Anreicherung waechst, ist aber nicht der Hauptwert.
    caveats:
      - Schwergewicht-Tool; Lernkurve und Repository-Setup nicht zu unterschaetzen
      - AI-Faehigkeiten weniger stark als bei reinen LLM-Tools
      - Lizenzkosten am oberen Ende
      - Steile Lernkurve bei sehr grossen Modellen (TrustRadius/PeerSpot bestaetigen)
    sources:
      - id: erwin-com-products-erwin-data-modeler
      - id: peerspot-com-products-erwin-data-modeler-reviews
      - id: trustradius-com-products-erwin-data-modeler-reviews
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Solideste Compliance-Posture im Feld (SOC2, ISO27001, EU Data Boundary). Generiert Prisma/JPA/SQLAlchemy-Models und Migrations-Skripte aus Domaenenbeschreibung direkt im IDE; Workspace-/Agent-Mode kann End-to-End vom Issue zur Schema-PR. Prisma- und Microsoft-Tech-Community-Praxisartikel dokumentieren konkrete Workflows inkl. MCP-basierter Schema/REST-API-Generierung aus einem Prompt.
    caveats:
      - Kein dediziertes ERD-Layout-Output - DDL/ORM-Output, ERD via Diagramm-Plugin
      - Schema-Vorschlaege benoetigen Review fuer Normalisierung in komplexen Domaenen
      - Repo-Indexing-Datenresidenz in Copilot Enterprise pruefen
      - Workspace-Mode-Output muss vor Migration-Ausfuehrung reviewed werden
    sources:
      - id: github-com-features-copilot
      - id: prisma-io-docs-ai-tools-github-copilot
      - id: techcommunity-microsoft-com-blog-azuredevcommunityblog-create-a-database-schema-and-rest-apis-with-a-single-prompt-using-github-copilot-4422778
  - id: jetbrains-com-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: DataGrip-Integration ist fuer Schema-Workflows (Reverse-Engineering aus Live-DB, DDL-Generierung, Entity-Scaffolding) genuin nuetzlich. JetBrains hat EU-Sitz (Tschechien) und solide DPA. Vendor-Dokumentation belegt Attach-Schema, Natural-Language-zu-SQL und DDL-Vergleich; unabhaengige Praktiker-Evidenz speziell zum Daten-Modell-Design-Use-Case bleibt aber duenn - Downgrade auf 'conditional', bis breitere Praxisberichte vorliegen.
    caveats:
      - ERD-Output via DataGrip-Diagramme, kein konversationeller ERD-Editor
      - Lizenzkosten pro Seat im AI-Tier hoeher
      - AI-Backend nutzt OpenAI/Google - Datenfluss-Kette dokumentieren
      - Unabhaengige Praktiker-Evidenz fuer dedizierten Modell-Design-Workflow noch limitiert - Eval vor Adoption empfohlen
    sources:
      - id: jetbrains-com-ai
      - id: jetbrains-com-help-ai-assistant-use-ai-assistant-html
  - id: ellie-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: EU-basiert (Finnland) mit Fokus auf konzeptionelle Datenmodelle und Business-Glossar fuer 'Data Products'; AI-Augmentation fuer Modell-Vorschlaege und Begriffs-Mapping; CData-Partnership fuer 170+ Source-System-Konnektoren. Likely missed by market scan because EU-Spezialist und als 'Data Product Designer' positioniert. Unabhaengige Praktiker-Reviews ausserhalb Vendor- und Partner-Pages duenn - Downgrade auf 'conditional'.
    caveats:
      - Konzeptionell fokussiert - kein DDL-/ORM-Output
      - Kleiner Vendor - Vendor-Resilienz pruefen
      - DACH-Sichtbarkeit primaer ueber Direkt-Vertrieb
      - Unabhaengige Praktiker-Evidenz limitiert; primaer Vendor- und Partner-Sources
    sources:
      - id: ellie-ai
      - id: cdata-com-case-study-ellie-ai
  - id: hackolade-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Polyglot-Datenmodellierer (SQL/NoSQL/Avro/JSON Schema) mit Desktop-/On-Prem-Variante und Sensitivity-Tagging - adressiert den DSGVO-Caveat des Briefings besser als reine SaaS-Tools. MongoDB Engineering Blog dokumentiert Hackolade als zertifizierten Partner mit Schema-Inferenz und JSON-Schema-Validator-Integration; FeaturedCustomers belegt 4.8/5 ueber 834 Reference-Ratings inkl. major US bank-Adoption. Likely missed by market scan because Tool als 'Polyglot Data Modeler' und nicht als 'AI ERD' positioniert ist.
    caveats:
      - AI-Anteil weniger prominent als bei LLM-First-Tools
      - Lizenzbasiert, kein Free-Tier fuer Enterprise-Eval
      - Belgischer Vendor; DACH-Sales via Partner
      - Polyglot-Konzept braucht Schulung; nicht 1:1 wie klassische ERD-Tools nutzbar
    sources:
      - id: hackolade-com
      - id: mongodb-com-company-blog-technical-optimize-data-modeling-and-schema-design-with-hackolade-and-mongodb
      - id: featuredcustomers-com-vendor-hackolade
  - id: sqldbm-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Cloud-ERD mit AI-Copilot fuer Schema-Generierung und Reverse-Engineering, mit besonderem Fokus auf Snowflake/Databricks/Redshift - relevant fuer DACH-Enterprises mit modernem Cloud-Datenstack. Snowflake-eigener Quickstart-Guide und Medium-Praktikerberichte (Snowflake-Publication) dokumentieren End-to-End-Workflows: Reverse-Engineering, Forward-Engineering von Snowflake-spezifischem DDL, Revision-History, Compare-Revisions. SOC2 Type II vorhanden. Likely missed by market scan because Tool primaer in Cloud-DWH-Kontext genannt wird."
    caveats:
      - Cloud-SaaS, US-Vendor; DPA und EU-Hosting pruefen
      - Fokus auf analytische Modelle - OLTP-Use-Cases weniger dominant
      - Enterprise-Tier fuer SSO/Audit noetig
      - AI-Copilot nutzt managed Anthropic-Claude-Sonnet via API - Datenfluss-Kette dokumentieren
    sources:
      - id: sqldbm-com
      - id: snowflake-com-en-developers-guides-database-modeling-with-sqldbm
      - id: medium-com-snowflake-how-i-did-cloud-native-data-modeling-for-snowflake-a63cc456fe03
start_here: "Mit Claude Code an einem einzelnen Bounded Context einsteigen: Domänenbeschreibung als Prompt, Schema-Output als Mermaid/DBML reviewen, Migration per Diff freigeben. Cursor ist die IDE-native Alternative für Teams mit bestehendem VS-Code- oder JetBrains-Workflow — Privacy-Mode vorab aktivieren."
caveats: Claude Code und Cursor leiten Modell-Calls an externe APIs weiter — Bedrock-EU-Routing vor dem Einsatz mit vertraulichen Schemata konfigurieren. Normalisierungskonsistenz (3NF) und DSGVO-Datenklassifizierung (Art. 9 besondere Kategorien) erfordern Senior-Review; erwin deckt diesen Governance-Bedarf für regulierte Domänen.
sources: []
---
