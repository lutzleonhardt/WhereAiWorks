---
stage: development
order: 6
roles:
  - software-engineer
  - security-engineer
title: Security-Autofix im IDE/PR
goal_label: AI-vorgeschlagene Patches für SAST/SCA-Findings direkt im Workflow anwenden
suitability: conditional
rationale: Mit Copilot Autofix (CodeQL/GHAS) und Snyk DeepCode AI Fix stehen zwei produktionsreife Implementierungen mit unabhängig bestätigten DACH-Enterprise-Referenzen zur Verfügung. NIS-2 und der Cyber Resilience Act erhöhen den Druck, Schwachstellen-Backlogs schneller abzubauen — genau dort liefert AI-Autofix den größten Hebeleffekt. DACH-Unternehmen mit GHAS- oder Snyk-Vertrag können den Use Case ohne neue Toolbeschaffung aktivieren.
tools:
  - id: aikido-security-ai-autofix
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Belgischer EU-Vendor mit EU-Hosting-Option; KMU-freundliche AppSec-Konsolidierung mit AI AutoFix ueber SAST/SCA/IaC/Secrets. Fuer DACH-Mittelstand, der GHAS- oder Snyk-Tarife scheut.
    caveats:
      - Junger Vendor, Enterprise-Track-Record duenn
      - Eigene SAST-Engine weniger reif als CodeQL/Snyk Code
      - Audit-Reports schmaler als bei etablierten Vendors
      - ISO27001 vorhanden, aber Enterprise-Audit-Reports duenner als bei Snyk/Veracode
      - Eigenes SAST-Modell weniger durch Forschung validiert
      - AI-Fix-Tiefe fuer komplexe Vulnerabilities unklar
    sources:
      - id: aikido-security-ai-autofix-aikido
  - id: aws-amazon-q-developer-debug-diagnose
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Hyperscaler-Suite-Antwort mit AI-Fix-Vorschlaegen in IDE und Code Review; relevant fuer AWS-zentrische DACH-Stacks mit eu-central-1-Datenresidenz.
    caveats:
      - Stark in AWS-Stack integriert, schwaecher ausserhalb
      - Bedrock-Modellauswahl muss explizit in EU-Region erfolgen
      - SAST-Coverage weniger transparent benchmarkt als CodeQL
      - Enterprise-Tier noetig fuer relevante Security-Features
    sources:
      - id: aws-amazon-q-developer-debug-diagnose-amazon
  - id: checkmarx-one-ai-security-champion
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: AI-Erklaerungen plus Fix-Vorschlaege ueber SAST/SCA/IaC/Secrets-Findings hinweg, eingebettet in PR-Decoration. Fuer DACH-Konzerne mit Checkmarx-Bestand sinnvolle Suite-Erweiterung.
    caveats:
      - Kein Standalone-Einsatz; harter Vendor-Lock-in
      - AI-Layer juenger und weniger oeffentlich benchmarkt als Snyk/Copilot
      - Hohe TCO; AI-Funktionen oft nicht in Bestandsvertraegen inkludiert
      - Vendor-Lock-in kombiniert mit AI-Vendor-Risiko
    sources:
      - id: checkmarx-one-ai-security-champion-checkmarx
  - id: endor-labs-magic-patches-ai-remediation
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Reachability-basierte SCA mit AI-Magic-Patches fuer transitive Dependency-Konflikte; relevant fuer CRA-Compliance-Pfad. Ergaenzend zu SAST-Autofix einsetzbar.
    caveats:
      - Schwerpunkt SCA, nicht klassisches SAST
      - Junges Tool, geringe DACH-Verbreitung
      - Auto-Apply-Pfad fuer Dependency-Upgrades benoetigt sehr robuste CI-Test-Suite
      - Magic Patches Backend-Modell-Transparenz fuer AI-Act eingeschraenkt
    sources:
      - id: endor-labs-magic-patches-ai-remediation-endorlabs
  - id: mend-io-mend-ai-renovate-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Renovate-basierte Auto-Fix-PRs sind in DACH-DevSecOps-Stacks etabliert und audit-freundlich (deterministisch). AI-SAST-Layer ergaenzt 2024/25, ist aber juenger.
    caveats:
      - AI-SAST-Funktion noch nicht als Differenzierungsmerkmal etabliert
      - Multi-Tool-Komplexitaet (Renovate plus Mend AI plus SCA) erhoeht Betriebslast
      - Schwerpunkt weiterhin SCA, nicht primary SAST-Autofix
    sources:
      - id: mend-io-mend-ai-renovate-ai-mend
  - id: sonarqube-ai-codefix
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Suite-Erweiterung fuer SonarQube-Bestandskunden in DACH (Sonar Schweiz, breiter Footprint). Sonar Advanced Security erweitert SAST-Tiefe; AI CodeFix ergaenzt Quality- und Security-Findings.
    caveats:
      - Sonar ist primaer Quality-Tool — SAST-Tiefe weniger als bei dedizierten Vendors
      - AI CodeFix nur in hoeheren Editions verfuegbar
      - AI CodeFix nutzt externes LLM (OpenAI) — DPA-Pruefung fuer regulierte Workloads notwendig
      - Self-hosted SonarQube plus extern gehostetes AI-Backend ergibt hybride Datenfluss-Topologie
      - SCA-Pfad nur via Sonar Advanced Security / Tidelift-Integration
    sources:
      - id: sonarqube-ai-codefix-sonarsource
  - id: code-intelligence-ci-spark-ci-sense
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Bonn-basierter DACH-AppSec-Vendor (Code Intelligence GmbH) mit AI-gestuetzter Fuzzing- und SAST-Plattform und AI-generierten Fix-Vorschlaegen; eigene EU-Hosting-Story und Naehe zu BSI/Industrie 4.0.
    caveats:
      - Fokus eher Fuzzing/Dynamic-Testing als reine SAST-Patches
      - AI-Fix-Funktion juenger und weniger oeffentlich benchmarkt
      - Kleinerer Vendor; Roadmap-Abhaengigkeit
    sources:
      - id: code-intelligence-ci-spark-ci-sense-code-intelligence
  - id: qwiet-ai-prezero
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Code-Property-Graph plus AI AutoFix mit explizitem Fokus auf taintflow-basierte Authz/Authn-Patches — adressiert genau den Briefing-Schwachpunkt 'datei-lokale Fixes versagen bei Authz/Authn'.
    caveats:
      - US-zentrierter Vertrieb; DACH-Footprint klein
      - CPG-Setup-Aufwand fuer komplexe Polyglot-Stacks hoch
      - AI-Layer juenger als die CPG-Engine
    sources:
      - id: qwiet-ai-prezero-qwiet
  - id: copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Native CodeQL-getriebene Autofix-Funktion in GHAS mit PR-Integration und SARIF-Audit-Trail. Exakter Match fuer das Briefing-Goal; in DACH-GHAS-Kunden direkt aktivierbar. Unabhaengig bestaetigt durch IDC-Analystin Katie Norton, Veradigm-Practitioner-Feedback und On-Record-Zitat von Otto Group (Hamburg) als DACH-Enterprise-Referenz.
    caveats:
      - Nur mit GitHub Advanced Security oder Public-Repo-Free-Tier
      - Fixes sind ueberwiegend datei-lokal — Authz/Authn-Schwachstellen oft falsch gepatcht
      - Datenfluss zu OpenAI/Anthropic-Backend muss im DPA explizit fuer regulierte Workloads (BaFin, KRITIS) freigegeben werden
      - Copilot-Autofix-Output ist Trainingsdaten-frei laut GitHub, aber das muss vertraglich pro Tenant verifiziert werden
      - Fuer AI-Act-High-Risk-Systeme muss jede angenommene Patch-Suggestion in der Change-History nachvollziehbar mit Reviewer-Identitaet hinterlegt sein
      - Erfordert Human-Review vor Merge; kein Auto-Merge fuer regulierte Workloads
    sources:
      - id: github-copilot-autofix-code-scanning-autofix-github-blog
      - id: github-copilot-autofix-code-scanning-autofix-github
      - id: copilot-autofix-techtarget-searchsecurity-2024
      - id: copilot-autofix-developer-tech-2024
  - id: gitlab-duo-vulnerability-resolution
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Suite-native Auto-Patches fuer GitLab-SAST/SCA/Secret-Detection-Findings in MRs. Zentral fuer DACH-self-hosted-Kunden (oeffentlicher Sektor, KRITIS) mit Souveraenitaets- und DSGVO-Argumentation. Practitioner-Walkthrough bestaetigt funktionierende SQL-Injection-Fixes (before/after) in Produktivumgebung.
    caveats:
      - Nur Ultimate-Edition; viele DACH-Bestandskunden auf Premium
      - AI-Backend laeuft via Anthropic auf AWS — fuer 'Souveraenitaet' relativiert das das self-hosted-Argument
      - Air-gapped-Deployments koennen AI-Funktion gar nicht nutzen
      - Prompt-Injection-Angriff via MR-Kommentare und CI-Output entdeckt (Legit Security, gepatcht Mai 2025) — AI-Trust-Model erfordert sorgfaeltige Governance fuer AI-generierte Patches
      - Kein unabhaengiges Enterprise-Scale-Benchmark fuer Fix-Patch-Qualitaet verfuegbar
      - AI-Provider-Optionen (Anthropic via AWS) muessen vertraglich geklaert werden
    sources:
      - id: gitlab-duo-vulnerability-resolution-gitlab
      - id: gitlab-duo-vuln-resolution-better-programming-2025
  - id: semgrep-assistant
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "AI-Triage und Fix-Patches als Layer ueber Semgrep-OSS-Rules; gut fuer DACH-Tech-Teams, die ohnehin Semgrep nutzen. Gartner Peer Insights bestaetigt unabhaengig Auto-Patching bei 10-Mrd.-USD-Unternehmen: 'it also suggests code fix that works!' Compliance-Profil duenner als Snyk/GitHub, daher team_ready statt enterprise_ready."
    caveats:
      - Assistant ist Closed-Source-Add-on — Open-Source-Semgrep allein liefert keine AI-Fixes
      - AI-Backend laeuft ueber OpenAI; Datenfluss-Klaerung fuer regulierte Workloads notwendig
      - Kein dediziertes EU-Hosting fuer Assistant-Komponente, soweit oeffentlich dokumentiert
      - False-Positive-Triage gut, autonome Fixes brauchen Reviewer
      - Vendor-gemeldete Genauigkeitswerte (96% Human-Agree-Rate) durch keine unabhaengige Studie verifiziert
      - Limitierte Abdeckung fuer SCA-Pfad (Fokus auf SAST-Patterns)
    sources:
      - id: semgrep-assistant-semgrep
      - id: semgrep-assistant-gartner-peer-insights-2026
  - id: snyk-deepcode-ai-fix
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Hybride symbolische plus AI-Engine fuer SAST-Fixes in IDE und PR; SCA-Pfad ergaenzt durch Snyk Open Source. Snyk hat reife DACH-Enterprise-Compliance-Story (SOC2, ISO27001, EU-Region-Hosting) und etablierten Vertrieb. Forrester Wave Q3 2025 bewertet Snyk als Leader mit AI-Remediation als explizitem Differenzierungskriterium; PeerSpot bestaetigt produktiven Einsatz in Banking-Enterprise (10.000+ Mitarbeiter).
    caveats:
      - Lizenzkosten in DACH-Mittelstand prohibitiv; Contributing-Developer-Modell oft schwer zu kalkulieren
      - Fuer FSI/KRITIS muss explizit der EU-Tenant gewaehlt und im DPA bestaetigt werden
      - AI-Modell-Updates ohne Vorankuendigung koennen Auditierbarkeit erschweren
      - Datei-lokale Fixes — komplexe taint-flow-Probleme ueber Module hinweg bleiben manuell
      - Fix-Qualitaet variiert nach Sprache (JS/TS/Java reifer als Go/Rust)
    sources:
      - id: snyk-deepcode-ai-fix-snyk
      - id: snyk-deepcode-forrester-wave-sast-q3-2025
      - id: snyk-deepcode-peerspot-2026
  - id: veracode-fix
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Dediziertes AI-Remediation-Produkt mit IDE- und PR-Integration; eigenes Modell auf Veracode-Vulnerability-Datensatz trainiert ist regulatorisch (AI Act, BSI) gut argumentierbar. Etablierte DACH-FSI-Referenzen. Gartner Peer Insights 4,6/5 (423 Reviews) und Forrester TEI bestaetigen Enterprise-Scale-Fitness; Forrester misst Fix-Rate-Anstieg von ~5% auf ~80% bei einem Versicherungsunternehmen.
    caveats:
      - Nur sinnvoll, wenn Veracode SAST bereits als SAST-Engine im Einsatz
      - "Datenresidenz Veracode-Cloud: EU-Region pruefen, sonst DSGVO-Transferproblematik"
      - Eigenes Modell muss fuer AI-Act-Transparency-Pflichten als 'limited risk' dokumentiert werden
      - Forrester-TEI-Metriken stammen aus einer beauftragten Einzelfallstudie — unabhaengige Replikation fehlt
      - Gartner-Reviews beziehen sich auf die Gesamt-Plattform; Fix-Produkt-spezifische Reviews duenn
    sources:
      - id: veracode-fix-veracode
      - id: veracode-fix-gartner-peer-insights
      - id: veracode-fix-forrester-tei-2024
start_here: "Einstieg über Copilot Autofix (bei GHAS-Bestand) oder Snyk DeepCode AI Fix, beschränkt auf mechanisch gut abgrenzbare Findings: XSS-Escaping, fehlende Security-Header, unsichere Deserialisierung. Jeden Patch vor dem Merge durch einen Entwickler reviewen lassen — kein Auto-Merge, auch nicht in Non-Prod. Für GitLab-Bestandskunden ist GitLab Duo Vulnerability Resolution in der Ultimate-Edition eine suite-native Alternative."
caveats: AI-Autofixes sind überwiegend datei-lokal und versagen zuverlässig bei Authz/Authn-Schwachstellen mit modulübergreifendem Taint-Flow — solche Findings manuell behandeln. Für regulierte Workloads (BaFin, KRITIS) muss der Datenfluss zum jeweiligen AI-Backend vertraglich im DPA freigegeben und der EU-Tenant explizit gewählt sein. Bei AI-Act-High-Risk-Systemen ist kein Auto-Merge zulässig; jede angenommene Patch-Suggestion muss mit Reviewer-Identität in der Change-History nachweisbar sein.
sources: []
---
