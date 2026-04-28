---
stage: development
order: 9
roles:
  - software-engineer
title: Natural-Language → SQL
goal_label: Datenbank-Queries aus deutscher/englischer Beschreibung generieren
suitability: conditional
rationale: Alle großen Cloud-Warehouses bieten heute native NL→SQL-Schichten mit EU-Regionen und DACH-Compliance-Zertifizierung — Databricks Genie, Snowflake Cortex Analyst, Microsoft Fabric Copilot und Amazon Q for Redshift sind stack-nativ ohne Zusatzkauf einsetzbar. Für Teams mit harten Datenresidenzanforderungen liefert Vanna.AI als einzige Lösung im Set vollständig On-Prem ohne externen LLM-Call. Der größte kurzfristige Nutzen liegt in Schema-Exploration und Ad-hoc-Queries, nicht in automatisierten Produktionspipelines.
tools:
  - id: copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Copilot Business/Enterprise ist in DACH etabliert; mit Postgres-MCP-Server brauchbarer NL→SQL-Pfad. Conditional, weil ohne Live-Schema-Connector Halluzinationsrisiko hoch bleibt und MCP-Server oft Community-Code ohne SOC2 sind.
    caveats:
      - MCP-Postgres-Server-Supply-Chain prüfen
      - "Repository-Hygiene: Indexing kann sensitive Schema-Files mitziehen"
      - Generierte SQL nicht automatisch im Audit-Trail der Ziel-DB
      - MCP-Server, die Live-DB anbinden, sind oft Community-Projekte ohne SOC2
      - Copilot Enterprise-Indexing kann Schema-Files mitziehen — Repository-Hygiene erforderlich
      - Generierte SQL landet nicht automatisch im Audit-Trail der Ziel-DB
      - Kein nativer DB-Connector — Schema-Kontext kommt aus Repo oder MCP
      - Bei großen Schemas Halluzinationsrisiko ohne kuratierte Beispiele
      - Datenresidenz via Copilot Business/Enterprise Settings prüfen
    sources:
      - id: github-copilot-chat-with-database-mcp-github
  - id: exasol-espresso-ai-lab
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Deutscher DB-Vendor (Nürnberg) mit AI-Lab-Erweiterung inklusive NL→SQL-Patterns. Likely missed by market scan because Exasol ist ein DACH-Nischenplayer, der in globalen Tool-Listen kaum auftaucht — aber für Compliance-/BSI-getriebene Sourcing-Entscheidungen in DACH ein politisches Asset.
    caveats:
      - AI-Lab-Reife noch unter Cortex/Genie
      - Engine-spezifisch (Exasol)
      - Marktanteil außerhalb DACH klein
    sources:
      - id: exasol-espresso-ai-lab-exasol
  - id: oracle-select-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: NL→SQL-Funktion direkt in Oracle Autonomous Database via PL/SQL-Package. Likely missed by market scan because Oracle wird in 'AI-Tool'-Listen oft übersehen, ist aber in DACH-Konzernen mit Oracle-Bestand (Banken, Versicherer, Public Sector) der politisch wahrscheinlichste Pfad.
    caveats:
      - Nur für Autonomous Database verfügbar
      - LLM-Auswahl (OCI Generative AI, Cohere, OpenAI) hat Datenresidenz-Implikationen
      - Tooling-Integration in Dev-IDEs schwächer als bei Snowflake/BigQuery
    sources:
      - id: oracle-select-ai-oracle
  - id: sap-joule-for-developers
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: SAP-native NL→Analytics-/SQL-Schicht für Datasphere und HANA Cloud. Likely missed by market scan because SAP Joule wird selten als 'NL→SQL-Tool' positioniert, ist aber in DACH-Großkonzernen mit SAP-Bestand der politisch wahrscheinlichste Pfad und wird in capability-only-Suchen übersehen.
    caveats:
      - Funktioniert nur im SAP-Stack (Datasphere/HANA Cloud/BTP)
      - Modell-Hosting via SAP AI Core / Generative AI Hub — Region und Modell explizit wählen
      - Reife der NL→SQL-Komponente unter Cortex/Genie
    sources:
      - id: sap-joule-for-developers-sap
  - id: thoughtspot-sage
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Etablierter Enterprise-BI-Player mit dedizierter NL→SQL-Schicht über Snowflake/BigQuery/Databricks. Likely missed by market scan because ThoughtSpot wird primär als BI-/Analytics-Suite vermarktet, nicht als 'AI NL→SQL-Tool'; im DACH-Mittelstand und in Konzernen aber vorhanden.
    caveats:
      - Eigenständige Plattform — Lizenzkosten zusätzlich zum Warehouse
      - EU-Hosting-Setup explizit wählen
      - Eher BI-Endnutzer-Werkzeug als Dev-IDE-Integration
    sources:
      - id: thoughtspot-sage-thoughtspot
  - id: amazon-q-for-quicksight-and-redshift
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Q Generative SQL in Redshift Query Editor v2 ist in eu-central-1 verfügbar, AWS-DPA und C5-Testat decken DACH-Anforderungen. Schema-Kommentare als Grounding-Layer pflegen. Unabhängige Rezension bestätigt solide Enterprise-Governance (IAM Identity Center, IP-Indemnity, Daten nicht für FM-Training genutzt).
    caveats:
      - Q Developer Pro vs. Q Business unterscheiden sich in Datennutzung — explizit wählen
      - Schema-Kommentare müssen kuratiert sein, sonst Halluzinationen
      - Review-Gate vor Produktions-SQL Pflicht
      - Q-Chat-Logs landen je nach Setting in AWS-Konten — Q Developer Pro vs. Q Business unterscheiden sich in Datennutzung
      - Redshift-Schema-Kommentare müssen kuratiert werden, sonst halluziniert Q
      - "Für AI-Act-High-Risk: Generierte SQL nicht direkt in Pipelines feeden ohne Review-Gate"
      - An AWS-Stack gebunden
      - Region-/Modell-Verfügbarkeit prüfen
      - Generated SQL muss vor Produktion reviewed werden
      - Unabhängige Rezensionen (2026) decken Q Developer allgemein ab — spezifische Practitioner-Reviews zur Redshift-NL→SQL-Funktion sind spärlich
    sources:
      - id: amazon-q-for-quicksight-and-redshift-amazon
      - id: amazon-q-developer-awesomeagents
  - id: databricks-genie
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Unity-Catalog-Grounding in Workspace-Boundary, EU-Frankfurt, C5/ISO27001 vorhanden. Default für DACH-Lakehouse-Kunden bei Banken/Versicherern. Unabhängige Review (Toolchase, 4,4/5): hervorragende NL→SQL-Schicht für Databricks-Kunden."
    caveats:
      - Foundation-Model-API-Routing prüfen (External-Model-Calls möglich)
      - Genie-Spaces-Kuratierung als Daueraufgabe einplanen
      - DBU-Kosten skalieren mit interaktiver Nutzung
      - AI-Functions/Foundation-Model-API kann je nach Konfiguration externe Modelle aufrufen — Workspace-Setting prüfen
      - Genie-Spaces-Kuratierung ist Daueraufgabe
      - Lizenzkosten (DBU) für interaktive Genie-Sessions können bei breitem Rollout eskalieren
      - An Databricks/Unity Catalog gebunden
      - Genie-Spaces müssen kuratiert werden
      - Kosten auf DBU-Basis
    sources:
      - id: databricks-genie-databricks
      - id: databricks-genie-toolchase
  - id: google-bigquery-data-canvas-gemini-in-bigquery
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Native NL→SQL-Schicht in BigQuery mit EU-Region und INFORMATION_SCHEMA als Grounding. Für DACH-GCP-Kunden der naheliegende Pfad; VPC-SC und CMEK gegen Datenexfiltration setzbar. Conditional: nach zwei gezielten Recherchen keine unabhängigen Practitioner-Reviews gefunden — Qualitätsbewertung stützt sich ausschließlich auf Google-eigene Quellen; Google-Dokumentation betont starke Abhängigkeit vom Prompt-Engineering."
    caveats:
      - Gemini-Endpoint per Region-Setting auf EU klemmen
      - Bei hochregulierten Daten zusätzlich VPC-SC und CMEK
      - Generierte SQL für AI-Act-Doku separat loggen
      - Gemini-Modell-Endpoint muss per Region-Setting auf EU geklemmt werden, sonst Drift in US-Endpoints
      - Bei hochregulierten Daten (Versicherte, Patienten) zusätzlich VPC-SC und CMEK setzen
      - "AI-Act-Dokumentation: Generierte SQL-Statements gelangen nicht automatisch in Audit-Trail — separat loggen"
      - Funktioniert nur gegen BigQuery
      - Datenresidenz/DSGVO via Region-Setting konfigurieren
      - Qualität fällt bei sehr großen, schlecht dokumentierten Schemas
      - Akkuratheit stark von Prompt-Engineering abhängig — kein Zero-Config-Pfad; NL2SQL bei Nested Fields, DATETIME und komplexen Funktionen eingeschränkt (per Vendor-Doku)
    sources:
      - id: google-bigquery-data-canvas-gemini-in-bigquery-google
      - id: google-bigquery-text-to-sql-techniques-google
  - id: copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Fabric Copilot in EU Data Boundary, M365-DPA-Stack in DACH bereits etabliert. T-SQL-Dialekt-fokussiert, aber Standardpfad für Azure-Shops. GitHub Copilot in SSMS seit März 2026 GA (22.4.1). Unabhängiger SQL-Experte (Brent Ozar) bestätigt: das Underlying-Modell ist solide — Prompting-Qualität im SSMS-Kontext hatte 2025 Schwächen, die Microsoft mit GA-Release adressiert hat."
    caveats:
      - Copilot in SSMS Status Preview/GA verifizieren
      - F-SKU-Kapazität triggert Copilot-Kosten — Modell früh durchrechnen
      - Customer Lockbox / CMK nicht in jeder SKU enthalten
      - Copilot in SSMS war bis zuletzt Public Preview — Stabilitäts- und Feature-Status vor Produktion verifizieren
      - Fabric F-SKU-Kapazität triggert die Copilot-Nutzung; Kostenmodell ist nicht trivial
      - Customer Lockbox / Customer Managed Keys für Fabric Copilot prüfen — nicht in jeder SKU enthalten
      - An Fabric/Azure SQL gebunden
      - DSGVO via EU-Region; M365 Copilot Data Boundary prüfen
      - T-SQL-Dialekt-fokussiert
      - "Unabhängige Evaluation (Brent Ozar, Mai 2025): SSMS-Copilot-Prompting lieferte schlechte Ratschläge — Fabric-Data-Warehouse-Copilot-Pfad für NL→SQL bevorzugen; GitHub-Copilot-in-SSMS-Integration separat validieren"
    sources:
      - id: microsoft-fabric-copilot-copilot-in-sql-server-management-studio-microsoft
      - id: microsoft-fabric-copilot-brentozar
  - id: snowflake-cortex-analyst
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Semantic-Model-basierter NL→SQL-Service in Snowflake-Boundary, EU-Region Frankfurt. Adressiert das im Briefing genannte Halluzinationsproblem strukturell (90%+ SQL-Genauigkeit laut Snowflake-Benchmarks). Unabhängige Evaluation (Theodo, Jan 2026): gut für Prototyping; Monitoring-/Customization-Lücken seither durch Arctic-Text2SQL-R1.5 (Nov 2025) adressiert."
    caveats:
      - Cortex Cross-Region-Inference-Setting explizit auf EU einschränken
      - Semantic-Model-Pflege ist Data-Engineering-Daueraufgabe
      - Generierte SQL nicht automatisch in AI-Act-Audit-Trail — separat loggen
      - Cross-Region-Inferenz kann Daten in andere Snowflake-Regionen/Modelle leiten — Cortex Cross-Region-Inference-Setting explizit auf EU beschränken
      - Modell-Anbieter (Mistral, Anthropic, Meta) variieren je nach Region — DPA-Abdeckung verifizieren
      - Semantic-Model-Pflege ist eine Data-Engineering-Daueraufgabe, kein Setup-Schritt
      - An Snowflake-Warehouse gebunden
      - Semantic Model muss aktiv gepflegt werden
      - Primär für Analytics, nicht für transaktionale Schemas
      - "Unabhängige Evaluation (Theodo, Jan 2026): Query-Tracing und direkte LLM-Customization fehlten — Black-Box-Charakter; Reife seither gestiegen, aber vor Prod-Einsatz validieren"
    sources:
      - id: snowflake-cortex-analyst-snowflake
      - id: snowflake-cortex-analyst-theodo
  - id: vanna-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Einziger Kandidat im Set, der für streng DSGVO-/AI-Act-pflichtige Schemas vollständig on-prem ohne externen LLM-Call funktioniert (MIT, BYO-LLM, BYO-Vektorstore). Für Banken/Versicherer mit harten Datenresidenzanforderungen. Unabhängige Reviews (AICoolies Apr 2026, ThemenonLab Mär 2026): Vanna 2.0 stärkste OSS-Text-to-SQL-Lösung mit Enterprise-Security-Features (Row-Level-Security, Audit-Logs)."
    caveats:
      - Kleines Team hinter Vanna.AI Inc. — kein Enterprise-Support-SLA
      - Sicherheits-Track-Record dünn — eigene Pen-Tests vor Prod
      - Trainingsdaten/Golden-Queries selbst sensitiv
      - Hinter Vanna.AI Inc. steht ein kleines Team — kein Enterprise-Support-SLA verfügbar
      - Sicherheits-Track-Record dünn; eigene Pen-Tests vor Prod-Einsatz
      - Trainingsdaten (Golden Queries) selbst sensitiv — Speicherort beachten
      - Self-hosting-Aufwand für Embeddings + Vektorstore
      - Qualität hängt stark vom Training-Set (Beispiel-Queries) ab
      - Kein vollständig managed-Enterprise-Support out of the box
    sources:
      - id: vanna-ai-github
      - id: vanna-ai-aicoolies
start_here: "Mit dem Tool beginnen, das den bestehenden Stack nativ abdeckt: Databricks Genie für Lakehouse-Kunden, Snowflake Cortex Analyst für Snowflake, Microsoft Fabric Copilot für Azure SQL, Amazon Q für Redshift. Den Pilot ausschließlich gegen Nicht-Personendaten und lesende Analytics-Queries führen — Schema-Dokumentation oder Semantic-Model-Pflege muss vor dem Rollout stehen. Generierten SQL immer manuell prüfen, bevor er in Produktionsdatenbanken oder automatisierte Pipelines läuft."
caveats: Ohne kuratierte Schema-Kommentare oder Semantic-Models halluzinieren alle Tools Spalten- und Tabellennamen — Schema-Pflege ist Voraussetzung, keine Option. Schemas mit Personenbezug (Kunden, Versicherte, Patienten) unterliegen DSGVO; On-Prem-LLM (Vanna.AI) oder strikte EU-Region-Konfiguration des Warehouse-eigenen Tools sind Pflicht. In AI-Act-High-Risk-Domänen müssen generierte SQL-Statements vor der Ausführung dokumentiert und im Audit-Trail gehalten werden.
sources: []
---
