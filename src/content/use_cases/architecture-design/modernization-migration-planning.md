---
stage: architecture-design
order: 10
roles:
  - software-engineer
  - software-architect
title: Modernisierungs-/Migrationsplanung
goal_label: Migrationspfad und Transition-Architektur ableiten
suitability: conditional
rationale: Amazon Q Developer Transform und OpenRewrite bieten produktionsreife, agentische Migrationspfade für Java/JVM-Stacks — der manuelle Aufwand für Codebase-Analyse, Risk-Mapping und schrittweise Planung lässt sich damit erheblich reduzieren. Für DACH-Organisationen mit Mainframe-Bestand ergänzt CAST Imaging / Highlight den Stack mit tiefem Multi-Sprach-Reverse-Engineering, das in Banken und Versicherungen bereits etabliert ist.
tools:
  - id: smartshifttech-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Automatisierte Custom-Code-Migration für SAP S/4HANA-Transformationen; deutsch-stämmiger Vendor (Mannheim/Boston) mit signifikanter DACH-Kundenbasis. Adressiert die in Praxisberichten oft übersehene SAP-Modernisierungs-Achse, die in DACH-Konzernen quantitativ größer ist als COBOL-Mainframe. Likely missed by market scan because das Tool nicht primär als 'AI-Coding'-Werkzeug, sondern als SAP-Transformations-Suite vermarktet wird.
    caveats:
      - Sehr SAP-spezifisch — irrelevant außerhalb des SAP-Ökosystems
      - AI-Layer eher Automatisierungs-Engine als Frontier-LLM
      - Vertriebs-/Beratungsmodell, kein Self-Service
    sources:
      - id: smartshifttech-com-solutions-s4hana-transformation
  - id: snpgroup-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Heidelberger Marktführer für SAP-Transformationen mit AI-gestützter Migrations- und Datenmigrationsplanung. Klare DACH-Verankerung (HQ DE, Aktiengesellschaft) und Referenzen in DAX-Konzernen. Likely missed by market scan because SNP als 'Daten-/Carve-out-Plattform' positioniert ist, nicht als 'AI-Tool', und Modernisierungsplanung als Beratungsleistung verkauft wird.
    caveats:
      - SAP-Fokus; jenseits ERP nicht relevant
      - Lizenz-/Projektkosten signifikant
      - AI-Anteil eher unterstützend als zentral
    sources:
      - id: snpgroup-com-en-products-crystalbridge
  - id: tricentis-com-products-livecompare
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: AI-basierte Change-Impact-Analyse für SAP-Landschaften, in DACH-Konzernen verbreitet. Liefert für Migrationsplanung den Risk-Mapping-Layer, der in vielen Plänen fehlt. Likely missed by market scan because LiveCompare als Test-/QA-Tool gelistet wird und nicht als Modernisierungsplanungs-Werkzeug.
    caveats:
      - Fokus SAP, nicht generisch
      - Tricentis ist österreichisches Unternehmen, US-Eigentümer (Vista) — Datenfluss prüfen
      - Migrationsplan-Output ist Risiko-Sicht, kein Roadmap-Generator
    sources:
      - id: tricentis-com-products-livecompare
  - id: aws-amazon-com-q-developer-transform
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Agentische Transformations-Workflows für Java-Upgrades, .NET-Cross-Plattform und Mainframe-Assessment generieren PR-basierte Migrationspfade mit Build-Verification. Direkter Match zum Goal 'Migrationspfad ableiten'. Frankfurt-Region und AWS-DPA helfen, brauchen aber explizite Q-Service-Region-Prüfung. Unabhängige Reviews (DevTools Review, Awesome Agents) bestätigen ~85% Erfolgsquote auf realen Spring-Boot-Codebases und das Transform-Feature als 'differentiator for enterprise teams'.
    caveats:
      - Empfehlungen AWS-zielgebunden; Multi-Cloud/On-Prem-Targets randständig
      - Aufwandsschätzungen ignorieren Betriebsrats-/Personalrats-Mitbestimmungsschritte komplett
      - Mainframe-Pfad noch begrenzte GA-Reife
      - Code-Verarbeitung läuft über Q-Service-Region — DPA/Frankfurt-Region-Konfiguration explizit prüfen
      - Restliche ~15% der Diffs (Reflection, Custom Classloader) bleiben Handarbeit
      - Aufwandsschätzungen für DACH-Compliance-Themen unterschätzt
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Java-Upgrade-Agent liefert brauchbare PRs
        - End-to-end im IDE
        - 85% Erfolgsquote in unabhängigen Reviews bestätigt
      complaints:
        - Bricht bei nicht-trivialer Build-Konfig
        - Mainframe-Pfad noch unreif
        - Wert sinkt stark außerhalb des AWS-Ökosystems
    sources:
      - id: aws-amazon-com-q-developer-transform
      - id: devtoolsreview-com-reviews-amazon-q-review
      - id: awesomeagents-ai-reviews-review-amazon-q-developer
  - id: castsoftware-com-products-imaging
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Tiefe Multi-Sprach-Reverse-Engineering-Plattform (COBOL, PL/I, RPG, Java, .NET) mit Cloud-Readiness-Scoring und Modernisierungs-Backlog. In vielen DACH-Großbanken/Versicherern bereits installiert — pragmatischer Anker, statt grüne Wiese mit jüngeren AI-Tools. Gartner Peer Insights bestätigt CAST als anerkannten Player in der Kategorie 'AI-Augmented Code Modernization Tools' mit positiven Enterprise-Reviews.
    caveats:
      - Schwergewichtige Plattform, 3–6 Monate Lead-Time
      - AI-Code-Erklärungen als Add-on, nicht im Standard-Bundle
      - Hohe TCO
      - Implementierungs-Lead-Time von 3–6 Monaten — passt selten in agile Pilot-Budgets
      - Lizenzkosten signifikant
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Tiefe Multi-Sprach-Analyse inkl. Mainframe
        - Validierte Reviews zu Impact-Analyse über heterogene Tech-Stacks (Gartner Peer Insights)
      complaints:
        - Hohe TCO
        - Schwerer Onboarding-Prozess
    sources:
      - id: castsoftware-com-products-imaging
      - id: gartner-com-reviews-market-ai-augmented-code-modernization-tools-vendor-cast-product-cast-imaging
  - id: ibm-com-products-watsonx-code-assistant-z
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Einer der wenigen produktisierten Pfade für COBOL→Java-Mainframe-Modernisierung mit Application-Discovery, Business-Rule-Extraktion und schrittweisem Refactoring. IBM-Compliance-Story (EU-Region, ISO27001, Audit) ist in Sparkassen/Versicherungen/Behörden anschlussfähig. Downgrade auf conditional, weil truly independent Praxisberichte rar sind — die meisten verfügbaren Pilot-Schilderungen stammen von IBM-affiliierten Autoren oder IBM-Research selbst; Tool-only-Modus ohne IBM Consulting bleibt unbelegt.
    caveats:
      - Lock-in an IBM-Z- und ADDI-Stack
      - Migrationsplanung in der Praxis durch IBM Consulting begleitet — Tool-only-Modus unrealistisch
      - Java-Output review- und architekturpflichtig
      - Wesentliche-Änderung-Anzeige nach §44 KWG bleibt Eigenleistung; AI liefert keine BaFin-Argumentation
      - Lizenzmodell teuer, primär Großunternehmen
      - Unabhängige Drittquellen zu Pilot-Ergebnissen rar — Reference-Calls vor Pilot einfordern
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Erste echte AI-Hilfe für COBOL-Bestand
        - Integration in ADDI für Application-Discovery
      complaints:
        - Java-Output braucht viel Nacharbeit
        - IBM-Stack-Lock-in
        - Verfügbare Erfahrungsberichte überwiegend IBM-nahe — wenig neutrale Datenpunkte
    sources:
      - id: ibm-com-products-watsonx-code-assistant-z
      - id: linkedin-com-pulse-ibm-genai-watsonx-code-assistant-z-wcaz-pilot-journey-piyush-mishra-1qeee
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Zwei für Modernisierungsplanung relevante Workflow-Familien: (a) GitHub Copilot App Modernization for .NET deckt .NET Framework→Modern .NET und Azure-Migration mit assess→plan→execute-Phasen ab — hochrelevant für DACH-Verwaltungs- und Versicherungsbestand mit großen WCF-/Web-Forms-Codebasen; (b) Copilot Upgrade Assistant for Java liefert build-verifizierte PR-Pipelines für Java-Versions-Upgrades, im GitHub-Enterprise-Ökosystem für DACH-Org-Teams einfacher integrierbar als AWS Q Transform. Unabhängige Praxisberichte (Cashfree: Java 17→21 in 20 min) belegen den Java-Pfad; .NET-Pfad ist jünger und Erfahrungsbasis dünner."
    caveats:
      - Azure-Bias bei .NET-Empfehlungen; nicht für non-.NET- oder non-Java-Migrationen geeignet
      - Copilot Business/Enterprise-Lizenz für Org-weiten Rollout vorausgesetzt
      - Komplexe WCF-/Custom-Build-Setups bleiben Handarbeit
      - GA-Reife pro Workload variiert; .NET-Modernization-Agent in mehreren IDEs erst seit 2026
      - Verfügbarkeit/GA-Status länderspezifisch zu prüfen (insb. Copilot-Datenresidenz für DACH)
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Build-verifizierte Schritte (Java)
        - End-to-end .NET-Upgrade-Pfad mit Plan/Tasks-Artefakten
        - "Praxisbericht: Java 17→21 in Minuten statt Stunden"
      complaints:
        - Azure-zentrisch bei Cloud-Migration
        - Komplexe WCF-Fälle bleiben Handarbeit
        - Funktioniert nicht mit exotischen Build-Setups (Maven/Gradle bevorzugt)
    sources:
      - id: devblogs-microsoft-com-dotnet-github-copilot-app-modernization-dotnet
      - id: github-blog-ai-and-ml-github-copilot-upgrade-assistant-for-java
      - id: cashfree-com-blog-github-copilot-agent-java-21-upgrade
      - id: learn-microsoft-com-en-us-dotnet-core-porting-github-copilot-app-modernization-overview
  - id: moderne-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Deterministische, AST-basierte Massenrefactorings (Spring Boot 2→3, Log4j, Java-Versions) skalieren auf Hunderte Repos — die einzige glaubwürdige Antwort, wenn Migrationsplan in echten Code-Wave-Plan überführt werden muss. AI-Layer empfiehlt Recipes, ohne zu halluzinieren. Unabhängig validiert: InfoWorld-Primer beschreibt 'tech stack liquidity' über Milliarden LOC; DACH-relevante Praxis-Case-Study von Kleinanzeigen/mobile.de zeigt produktiven Einsatz auf 14 Services mit 40+ Auto-PRs."
    caveats:
      - Java/JVM-zentrisch, kein COBOL/Mainframe
      - Custom-Recipes erfordern Lernkurve
      - Self-Hosted-Option für regulierte DACH-Häuser prüfen, falls Quellcode-Aggregation in US-SaaS unerwünscht
      - Cutting-edge Recipes (z.B. neueste Spring-Boot-Versionen) teils unter kommerzieller Lizenz — Open-Source-Pfad evaluieren
      - "Java/Kotlin-Mix-Repos: Recipes 'partially work' und können Code beschädigen — Scoping zwingend"
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Deterministisch, kein Halluzinieren
        - Skaliert auf 1000+ Repos
        - "DACH-Praxis: Kleinanzeigen rollte 5 Recipes auf 14 Services aus, 40+ automatische PRs gemerged"
      complaints:
        - Lernkurve für Recipe-Authoring
        - Java/Kotlin-Mix-Projekte erfordern Sorgfalt beim Scoping
        - Premium-Recipes hinter kommerzieller Lizenz
    sources:
      - id: moderne-ai-platform
      - id: infoworld-com-article-4073173-a-practitioners-primer-on-deterministic-application-modernization-html
      - id: medium-com-berlin-tech-blog-automate-your-java-upgrades-a-practical-case-study-with-openrewrite-and-github-actions-44275f841082
  - id: vfunction-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Architektur-Observability mit AI-basierter Decomposition-Empfehlung erzeugt nachvollziehbare Migrations-Roadmaps für Java/.NET-Monolithen — eigenständiger Mehrwert jenseits der Coding-Copilots. Risk- und Effort-Scoring sind genau das, was Migrationsplanung in DACH-Großorganisationen messbar macht. Downgrade auf conditional, weil verfügbare Drittevidenz überwiegend Vendor-Case-Studies, sponsored Analyst Reports (Futurum, DZone) oder AWS-Partner-Posts ist; truly independent Press oder unabhängige DACH-Erfahrungsberichte fehlen weitgehend.
    caveats:
      - Dynamic-Trace-Anbindung in Bank-RZ häufig Showstopper
      - DACH-Referenzen öffentlich rar; im Tender Reference-Calls explizit einfordern
      - Vendor sitzt US/IL — EU-Hosting/DPA explizit prüfen
      - Fokus Java/.NET, kein COBOL-Mainframe
      - Dynamic Analysis braucht Lasttests im Pre-Prod
      - Hochpreisig, primär Großunternehmen
      - Externe Validierung überwiegend bezahlte Analyst-Berichte — neutrale Quellen knapp
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Decomposition-Vorschläge konkreter als Whiteboarding
        - Vendor-Case-Studies (Fortune-100-Bank, Trend Micro) zeigen 25x/4x-Beschleunigungen
      complaints:
        - Setup-Aufwand hoch
        - Dynamic-Trace-Daten schwer zu bekommen
        - Wenig neutrale Drittberichte zur Validierung der Vendor-ROI-Claims
    sources:
      - id: vfunction-com-platform
      - id: futurumgroup-com-insights-vfunction-earns-coveted-and-prestigious-recognition
start_here: "Einstieg über Amazon Q Developer Transform an einem einzelnen, klar abgegrenzten Java-Service: Der Upgrade-Agent erzeugt PR-basierte Migrationspfade inklusive Build-Verification, sodass Aufwand und Risiko kontrollierbar bleiben. Für deterministische Massenrefactorings (z.B. Spring Boot 2→3 über mehrere Repos) OpenRewrite parallel auf einem nicht-produktiven Repository pilotieren, bevor ein breiterer Rollout erfolgt."
caveats: AI-generierte Pläne decken den technischen Migrationspfad ab, blenden aber DACH-spezifische Hürden aus — Betriebsrats-/Personalrats-Mitbestimmung bei Systemwechseln und regulatorische Anzeigepflichten (z.B. BaFin §44 KWG) bleiben manuell zu verantworten. Alle drei Ankertools sind auf JVM- oder .NET-Stacks optimiert; COBOL/Mainframe-Einsatz über CAST Imaging ist möglich, erfordert aber 3–6 Monate Lead-Time und signifikante TCO.
sources: []
---
