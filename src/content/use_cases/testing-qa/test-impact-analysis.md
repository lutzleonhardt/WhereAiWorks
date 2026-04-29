---
stage: testing-qa
order: 8
roles:
  - qa-engineer
  - platform-devops-engineer
title: Test-Impact-Analyse / Predictive Test Selection
goal_label: Nur relevante Tests pro Change ausführen
suitability: good_fit
rationale: Für .NET-Shops mit Azure DevOps ist TIA über den VSTest-Task ohne neue Datenschutzverträge aktivierbar; für JS/TS-Monorepos übernimmt Nx Affected dieselbe Rolle ohne Vendor-Lock-in. Der Wert — kürzere CI-Laufzeiten — ist direkt messbar und macht einen Pilot selbst in konservativen Organisationen begründbar.
tools:
  - id: engflow-com
    fit: conditional
    sources:
      - id: engflow-com
    why_it_fits: "Bazel-native Remote Build Execution mit Test-Caching und Targets-affected-Logik. Deutsche Mitgruender (ex-Google), EU-Hosting/Self-Hosting moeglich; in DACH-OEM-Engineering-Org mit Bazel-Stack realistisch waehlbar. Sinnvoll nur, wenn Bazel-Adoption ohnehin laeuft. Einschraenkung: Bazel-only, fuer Maven/Gradle/.NET irrelevant."
    enterprise_readiness: enterprise_ready
  - id: cqse-eu-en-teamscale-overview
    fit: conditional
    sources:
      - id: cqse-eu-en-teamscale-overview
    why_it_fits: "Deutscher Vendor (TUM-Spin-off, Muenchen) mit Test Gap Analysis und Test Impact Analysis ueber Coverage und Aenderungs-Mapping. On-Prem-Deployment, deutsche Vertraege, AVV/DSGVO trivial; in regulierten DACH-Branchen (Automotive, MedTech) im Einsatz. Schwerpunkt eher Priorisierung/Gap-Sicht statt aggressives ML-Skipping, was zur regulierten Caveat-Lage des Use-Cases gut passt. Einschraenkung: Klassische Enterprise-Lizenzierung mit hohem TCO."
    enterprise_readiness: enterprise_ready
  - id: docs-datadoghq-com-tests-test-impact-analysis
    fit: good_fit
    sources:
      - id: docs-datadoghq-com-tests-test-impact-analysis
      - id: testdino-com-reviews-datadog-test-optimization-review
    why_it_fits: "Suite-Feature in Datadog CI Visibility / Test Optimization, das nicht beeinflusste Tests pro Change automatisch ueberspringt. Sprachsupport breit (JS, Python, Java, .NET, Ruby, Swift, Go). Datadog ist in DACH-Enterprises mit EU-Site, SOC2 und ISO27001 etabliert; daher der pragmatischste enterprise-faehige Default fuer TIA, sofern Datadog ohnehin im Stack ist. Unabhaengige Review (TestDino, Analyse von 665 G2-Bewertungen) bestaetigt breiten Einsatz, hebt jedoch komplexes Preismodell (pro Committer plus weitere Nutzungsmetriken) und steile Lernkurve als Kritikpunkte hervor. Einschraenkung: EU-Site (datadoghq.eu) explizit waehlen, sonst US-Datenfluss."
    enterprise_readiness: enterprise_ready
  - id: gradle-com-develocity-product-predictive-test-selection
    fit: conditional
    sources:
      - id: gradle-com-develocity-product-predictive-test-selection
    why_it_fits: "ML-basiertes Predictive Test Selection als Develocity-Suite-Feature fuer Gradle und Maven. Self-hosted On-Prem-Deployment moeglich, was DACH-Compliance-Reviews stark vereinfacht. Vendor-seitige Kundenstimmen (Collibra: 300% ROI, Netflix: Groessenordnung-Verbesserung) bestaetigen Wirksamkeit – jedoch sind alle verfuegbaren Belege Vendor-veroeffentlicht; nach mehreren unabhaengigen Recherche-Durchgaengen keine externen Practitioner-Berichte gefunden. Einschraenkung: Develocity-Lizenz hochpreisig, Mid-Enterprise oft nicht wirtschaftlich; JVM-only (Gradle und Maven)."
    enterprise_readiness: enterprise_ready
  - id: learn-microsoft-com-en-us-azure-devops-pipelines-test-test-impact-analysis
    fit: good_fit
    sources:
      - id: learn-microsoft-com-en-us-azure-devops-pipelines-test-test-impact-analysis
      - id: stackoverflow-com-questions-63660459-run-selective-test-cases-on-pull-request-in-azure-devops
      - id: github-com-microsoft-azure-pipelines-tasks-issues-15449
    why_it_fits: "Coverage-Map-basierte TIA in Azure Pipelines / VSTest fuer .NET, im bestehenden Microsoft-Tenant ohne neue DPA aktivierbar. Tenant-konformer Default fuer DACH-Microsoft-Shops mit MSTest/NUnit/xUnit auf .NET. Unabhaengige Practitioner-Evidenz (Stack Overflow Q&A mit 1.700 Aufrufen; GitHub Issue #15449) bestaetigt realen Einsatz und zeigt bekannte Limitation: TIA und Code Coverage koennen im VSTest-Task nicht gleichzeitig aktiviert werden. Einschraenkung: Praktisch auf MSTest/VSTest und .NET Framework beschraenkt; kein .NET Core-Support; Single-Machine-Topology erforderlich."
    enterprise_readiness: enterprise_ready
  - id: nx-dev-ci-features-affected
    fit: good_fit
    sources:
      - id: nx-dev-ci-features-affected
      - id: medium-com-navanathjadhav-turborepo-vs-nx-i-migrated-a-monorepo-twice-to-compare-38e95e434273
      - id: techplained-com-monorepo-ci-pipeline
    why_it_fits: "Standard-Monorepo-Tooling im JS/TS-Oekosystem; 'nx affected --target=test' fuehrt nur Tests fuer durch einen Change beeinflusste Projekte aus. Fuer TS/Angular/Node-Monorepos der pragmatische Default und im Zweifel das, was Teams vor einem Vendor-Tool zuerst aktivieren. Mehrere unabhaengige Practitioner-Berichte bestaetigen dramatische CI-Zeitreduktionen (z.B. 14 min auf 1-2 min bei einer realen Monorepo-Migration). Das Kern-Feature laeuft vollstaendig lokal ohne Nx Cloud – die EU-Hosting-Problematik betrifft ausschliesslich den optionalen Nx Cloud Add-on. Einschraenkung: JS/TS-only; bei sehr breiten Abhaengigkeitsgraphen ('shared-everything'-Struktur) kaum Einspareffekt."
    enterprise_readiness: team_ready
start_here: "Einstieg über den stack-nativen Weg: Azure DevOps TIA im VSTest-Task für .NET oder 'nx affected --target=test' im JS/TS-Monorepo, jeweils parallel zum vollständigen Run über zwei bis vier Wochen betreiben. Erst nach Validierung der Trefferquote den Full-Run ersetzen — Datadog Intelligent Test Runner ist die pragmatische Wahl, wenn Datadog ohnehin als CI-Observability-Plattform im Stack ist."
caveats: In regulierten Releases (Pharma, MedTech, Bahnsteuerung) kollidiert selektives Test-Skipping mit Validierungspflichten — der periodische Full-Run muss audit-tauglich dokumentiert bleiben. Microsoft TIA ist auf .NET Framework und Single-Machine-Topologie beschränkt; Nx Affected verliert den Einspareffekt bei 'shared-everything'-Abhängigkeitsgraphen.
sources: []
---
