---
stage: deployment-devops
order: 4
roles:
  - security-engineer
  - platform-devops-engineer
title: IaC-Security-Scanning
goal_label: Misconfigurations in Terraform/K8s-YAML finden und Fix vorschlagen
suitability: good_fit
rationale: Snyk IaC liefert reife CI/IDE/PR-Integration für Terraform, K8s, Helm und ARM mit KI-gestützten Fix-Vorschlägen via DeepCode AI und einer dedizierten EU-Region in Frankfurt — eine direkt einsetzbare Grundlage für DACH-Enterprises. Wiz Code ergänzt als CNAPP-Layer, wenn Code-to-Cloud-Risiko-Korrelation über reine Misconfiguration-Detection hinaus benötigt wird.
tools:
  - id: aikido-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: EU-Vendor (Gent, BE) mit GDPR-Positionierung, AWS-Bedrock-LLMs ohne Trainings-Reuse, AutoFix-PRs für IaC-Misconfigs in TF/K8s/Cloud. DACH-tauglich, sobald ISO27001-Stand und Subprozessor-Liste (Bedrock-Region) verifiziert sind. AutoFix muss explizit im 'PR-Vorschlag, kein Auto-Merge'-Modus laufen.
    caveats:
      - ISO27001-Zertifikat-Stand und Bedrock-Region (EU?) explizit prüfen
      - AutoFix-Konfiguration auf 'PR-Vorschlag' begrenzen (Vier-Augen-Pflicht)
      - Aikido-Vertreter aktiv in Reddit-Threads — Community-Signals mit Bias lesen
      - EU-Hauptsitz, aber technische Region/Subprozessor-Liste explizit prüfen (AWS-Region für Bedrock)
      - AutoFix-PR-Modus muss auf 'PR-Vorschlag, nicht Auto-Merge' konfiguriert sein für Vier-Augen-Konformität
      - "Reddit-Signal: Aikido-Vertreter sind in Threads aktiv — Bias bei Community-Signals einkalkulieren"
      - Enterprise-Compliance (SOC2/ISO-Reports) jünger als bei Snyk/Prisma
      - AutoFix-Qualität variiert je nach Issue-Typ — Confidence-Label nötig
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Deutlich weniger Noise als Snyk/Checkmarx
        - Schnelle Onboarding, gute DX
      complaints:
        - Vertreter posten häufig in Threads — Bias-Risiko
    sources:
      - id: aikido-dev-code-autofix
      - id: help-aikido-dev-aikido-autofix
      - id: reddit-com-r-cybersecurity-comments-1owgaiu-snyk-or-checkmarx
  - id: checkmarx-com-product-ai-security
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Etablierter Enterprise-Vendor mit DACH-Vertriebspräsenz; bündelt KICS als IaC-Engine plus AI-Security-Champion-Fix-Vorschläge in IDE/PR. Für DACH-Bestandskunden beschaffbar, Single-Vendor-Audit-Trail (SAST/SCA/IaC/Container) — der Konzernpfad.
    caveats:
      - Praktiker-Tenor 'legacy/teure UX, hohe Lizenzkosten'
      - EU-Hosting/-Region für Checkmarx One explizit verifizieren
      - AI-Fix-Reife je Modul unterschiedlich — IaC-Fix-Qualität separat im PoC testen
      - EU-Hosting/-Region für Checkmarx One explizit verifizieren (nicht alle Module in jeder Region)
      - "AI-Security-Champion-Modell: Trainings-/Inferenz-Vertrag prüfen"
      - Pricing-Hebel hoch — Enterprise-Lizenzbindung schafft langfristigen Vendor-Lock
      - Praktiker beklagen klobige UX und hohe Lizenzkosten ('legacy')
      - AI-Fix-Reife je nach Scanner unterschiedlich
    practitioner_signal:
      volume: medium
      tenor: negative
      praise:
        - Solide SAST/SCA-Engine
      complaints:
        - Schlechte Dev-UX, Pricing 'legacy'
    sources:
      - id: amplify-security-blog-ai-appsec-vendors-auto-fix-code
      - id: appsecsanta-com-kics
      - id: reddit-com-r-cybersecurity-comments-1owgaiu-snyk-or-checkmarx
  - id: checkov-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: OSS-Detection-Backbone, lokal lauffähig — kein Daten-Egress in der reinen CLI-Variante. Für DACH-Orgs mit strikter Datenresidenz die safe Default-Schicht; AI-Fix entweder über Prisma Cloud Smart Fixes oder selbst-gehostete LLM-Integration realisierbar. PR-Comment-Modus über GitHub/GitLab-CI nativ Vier-Augen-konform.
    caveats:
      - Reine OSS hat keinen nativen Auto-Fix; OpenAI-Integration kontaminiert die Datenresidenz
      - Python-Performance auf Großrepos schlechter als Go-Tools (Trivy/KICS)
      - Ohne Vendor-SLA — für regulierte Orgs ggf. Bridgecrew/Prisma-Lizenz nötig
      - "Bei OpenAI-Fix-Integration: Daten verlassen die EU, Vier-Augen-Pflicht muss in PR-Workflow erzwungen werden"
      - Reine OSS-Nutzung gibt keinen Vendor-Support/SLA — für regulierte Orgs ggf. Bridgecrew/Prisma-Lizenz nötig
      - Reine OSS-Variante hat keinen Auto-Fix; AI-Fixes nur via Prisma oder eigene OpenAI-Integration
      - Python-basiert, langsamer auf großen Repos als Go-Tools
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Größte Policy-Bibliothek, breite Format-Abdeckung
        - Gute CI/CD-Integration via SARIF
      complaints:
        - Viele False Positives auf realen Codebases
        - Kein nativer Auto-Fix in der OSS-Version
    sources:
      - id: checkov-io
      - id: dev-to-svasylenko-a-deep-dive-into-terraform-static-code-analysis-tools-features-and-comparisons-1kbf
      - id: reddit-com-r-aws-comments-1ai45y2-dealing-with-terraform-as-security-engineer
  - id: snyk-io-platform-ai-trust
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Reife IDE/PR/CI-Integration für TF/CFN/K8s/Helm/ARM mit DeepCode-AI-Fix-Vorschlägen. Für DACH entscheidend: dezidierte EU-Region in Frankfurt (SNYK-EU-01) inkl. Single-Tenant-Private-Cloud, GDPR/SOC2/ISO27001, EU-SCCs im DPA. PR-Comment-Modus mit Vier-Augen-Pflicht problemlos konfigurierbar."
    caveats:
      - EU-Frankfurt-Region nur im Enterprise-Plan; Free/Team landet im US-Tenant
      - DeepCode-AI-Fix nutzt LLM-Inferenz — AVV/Subprozessor-Anhang explizit prüfen
      - Strategie-Unsicherheit nach CEO-Wechsel Ende 2025
      - EU-Region nur im Enterprise-Plan; Team/Free landet automatisch in SNYK-US-01
      - Snyk DeepCode AI nutzt LLM-Inferenz — Datenschutz/AVV-Anhang explizit prüfen
      - "Strategie-Unsicherheit nach CEO-Wechsel: Roadmap-Klarheit für 24-Monats-Commitments einfordern"
      - Beschreibungstexte teils vager als bei Checkov/KICS
      - Free-Tier eng (100 Scans/Monat), Enterprise-Pricing steigt schnell
      - CEO-Wechsel Ende 2025 erzeugt Strategie-Unsicherheit
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Gute IDE-/PR-Integration
        - Auto-Fix-PRs für viele Findings
      complaints:
        - Hohe Alert-Last, viel Tuning nötig
        - Inkonsistente APIs, Strategie-Drift seit CEO-Wechsel
    sources:
      - id: snyk-io-product-snyk-cloud
      - id: appsecsanta-com-iac-security-tools-iac-security-for-terraform
      - id: docs-snyk-io-snyk-data-and-governance-regional-hosting-and-data-residency
      - id: snyk-io-de-policies-dpa
      - id: reddit-com-r-cybersecurity-comments-1r87jxi-snyk-ceo-is-out-where-is-snyk-headed
      - id: reddit-com-r-devops-comments-1ha2mgb-what-security-tools-do-you-like-to-use-in-your
  - id: apiiro-com-platform-ai-code-security
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Risk-Graph-Plattform für AppSec mit IaC-Modul; Korrelation Code-Change/Material-Risiko ist regulatorisch nutzbar (passt zu ISO 27001 Evidence). Für reines IaC-Scanning überdimensioniert — sinnvoll nur als Teil eines AppSec-Risk-Programms.
    caveats:
      - IaC ist Modul, nicht Kern — weniger Tiefe als dedizierte Scanner
      - EU-Hosting/-DPA für DACH-Rollout verifizieren
      - Enterprise-Pricing, eher AppSec-Programm als Einzelteam
      - Für AppSec-Risk-Graph-Strategie geeignet, nicht für reines IaC-Use-Case-Match
      - EU-Hosting und DPA-Status für DACH-Rollout separat klären
      - IaC ist ein Modul, nicht Kernfokus — weniger Tiefe als dedizierte Scanner
      - Enterprise-Pricing, eher für AppSec-Programme als Einzelteams
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: amplify-security-blog-ai-appsec-vendors-auto-fix-code
  - id: about-gitlab-com-gitlab-duo
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Für GitLab-Self-Managed-Shops in DACH (Banken, Versicherungen) der Default-Pfad — IaC-Scan via KICS, MR-Approval-Rules erzwingen Vier-Augen-Pflicht nativ. Aktuell allerdings KEIN Duo-AI-Fix für IaC — Briefing-Match heute nur halb (Detection plus 'AI-Fix kommt').
    caveats:
      - Duo Vulnerability Resolution heute nur SAST, NICHT IaC — AI-Fix-Anteil fehlt
      - Duo-Add-On nutzt typischerweise Anthropic/Google — Datenresidenz/Subprozessor klären
      - Custom-Modul-Lücke (KICS-Erbe) — Coverage-Test vor Rollout
      - AI-Fix für IaC noch nicht freigeschaltet — Use-Case-Match heute nur 'Detection plus zukünftiger Fix'
      - Duo-Add-On nutzt typischerweise Anthropic/Google-Modelle — Datenresidenz und Subprozessor-Status für DACH klären
      - GitLab Self-Managed eliminiert SaaS-Datenfluss; Cloud/Dedicated EU-Region separat zu prüfen
      - Duo Vulnerability Resolution aktuell nur für SAST-Findings dokumentiert, nicht für IaC
      - Custom Terraform Modules aus GitLab Registry werden nicht gescannt (bekannter Bug)
      - Ultimate-Tier + Duo-Add-On nötig
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Native Integration in GitLab-Pipelines
      complaints:
        - AI-Fix für IaC noch nicht freigeschaltet
        - Modul-Erkennungsbug (Issue 357004)
    sources:
      - id: docs-gitlab-com-17-2-ee-user-application-security-iac-scanning-index-html
      - id: docs-gitlab-com-user-application-security-remediate-duo
      - id: gitlab-com-gitlab-org-gitlab-issues-357004
  - id: kics-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "OSS, lokal lauffähig, breite Format-Coverage (22+ Plattformen) — DACH-Default-Detection-Schicht. Wichtig fürs Briefing: KICS-OSS-'Auto-Remediation' ist regelbasiert, NICHT AI; AI-Fix kommt erst über die Checkmarx-One-Plattform."
    caveats:
      - OSS-Auto-Remediation regelbasiert — nicht 'AI', Etikett sauber halten
      - Custom-Modul-Lücke (GitLab-Issue 357004) — interne TF-Module ggf. nicht erkannt
      - AI-Fix nur über Checkmarx One = US-Vendor, separater Compliance-Pfad
      - "Klare Trennung kommunizieren: KICS-OSS = regelbasiert, kein AI; AI-Fix-Marketing kommt nur über Checkmarx One"
      - Custom-Modul-Lücke (Issue 357004) bedeutet, dass interne Terraform-Module womöglich nicht erkannt werden — Coverage-Test vor Rollout
      - AI-Fix nur über Checkmarx-One-Plattform; OSS-Auto-Remediate ist regelbasiert, nicht AI
      - Keine Graph-basierten Cross-Resource-Checks wie Checkov
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Breitere Format-Abdeckung als Checkov
        - Rego-Policies wenn OPA-Stack vorhanden
      complaints:
        - Weniger Compliance-Mapping
        - Custom-Module nicht erkannt (siehe GitLab-Issue)
    sources:
      - id: docs-kics-io-latest-kics-auto-remediation
      - id: appsecsanta-com-kics
      - id: gitlab-com-gitlab-org-gitlab-issues-357004
  - id: semgrep-dev-products-semgrep-assistant
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Self-Hosted-Variante (Semgrep Enterprise) verfügbar — DACH-tauglich. IaC-Coverage flacher als Checkov/KICS, aber für Teams mit Semgrep-SAST konsistenter Single-Plattform-Pfad. Assistant-Fix-Vorschläge laufen über LLM-Backend — DPA und Region separat verifizieren.
    caveats:
      - IaC-Tiefe deutlich geringer als bei dedizierten Scannern
      - Assistant-LLM-Backend (OpenAI) — AVV/Region klären
      - Lohnt sich nur, wenn Semgrep ohnehin SAST-Plattform ist
      - Assistant nutzt OpenAI — AVV/DPA und Region (EU vs. US) klären
      - Für reines IaC-Scanning suboptimal; nur sinnvoll, wenn SAST-Plattform ohnehin Semgrep ist
      - IaC-Coverage flacher als bei dedizierten Scannern
      - AI-Fix-Tiefe hängt stark vom Regelwerk ab
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Custom-Rules einfach, schneller als Konkurrenz
        - Open-Source-Kern + Enterprise-Layer
      complaints:
        - IaC nicht Kernkompetenz
    sources:
      - id: amplify-security-blog-ai-appsec-vendors-auto-fix-code
      - id: semgrep-dev-docs-deployment-managed-scanning-gitlab
      - id: reddit-com-r-cybersecurity-comments-18y0qy3-do-people-use-static-code-analysis-sast-tools-tl-zh-hans
  - id: mondoo-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Policy-as-Code-Plattform mit cnspec OSS-CLI; native Terraform-HCL/Plan/State- und Kubernetes-Manifest-Scans, MQL als deklarative Policy-Sprache. Eigene deutsche Lokalisierung (mondoo.com/de), starke DACH-Sichtbarkeit. AI-Anteil heute schwach (kein AutoFix-LLM dokumentiert), aber Policy-as-Code passt direkt auf ISO 27001 A.8.27/8.28-Evidence. Likely missed by market scan because Mondoo positioniert sich als Policy-as-Code/CSPM-Suite, nicht als 'AI-IaC-Tool'.
    caveats:
      - Kein dokumentierter LLM-AI-Fix — Briefing-Match nur über Detection plus Policy-as-Code-Disziplin, nicht über AI
      - cnspec OSS lokal, Mondoo Platform ist SaaS — Region/Datenresidenz für Platform separat klären
      - Praktiker-Volumen außerhalb DACH-Cloud-Native-Szene begrenzt
    sources:
      - id: mondoo-com-docs-cnspec-supplychain-terraform
      - id: mondoo-com-de-cnspec
  - id: wiz-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "CNAPP-Suite mit IaC-Modul (Terraform/CFN/ARM/K8s/Docker, 1.000+ Regeln); Code-to-Cloud-Risiko-Korrelation über den Wiz Security Graph als Killer-Feature, das reine IaC-Scanner nicht liefern. EU-Tenant verfügbar, in DACH-PoCs gegen Prisma häufig Sieger durch agentless-Modell und schnellere Time-to-Value. Procurement-Hinweis: Wiz ist seit 2025 Teil von Google Cloud — CLOUD-Act-Status formal unverändert, aber Beschaffungsdiskussion in DACH-Konzernen mit Multi-Cloud-Souveränitätsregeln neu aufzurollen."
    caveats:
      - Google-Cloud-Akquisition (2025) — Procurement-/Sourcing-Diskussion neu
      - Premium-Pricing — für DACH-Mittelstand oft jenseits Budget
      - IaC-Tiefe schwächer als Checkov; nur sinnvoll, wenn CSPM mit gewünscht ist
      - "Google-Cloud-Akquisition (2025): CLOUD-Act-Exposition formal dieselbe wie zuvor, aber Procurement-Diskussion neu"
      - Premium-Pricing — für DACH-Mittelstand oft jenseits Budget; PoC-Skalierung explizit klären
      - IaC-Tiefe schwächer als Checkov; für reines IaC-only ohne CSPM überdimensioniert
      - "AppSec-Santa-Bewertung: 'Overkill für Teams ohne bestehendes Wiz-Deployment' — Tool nur sinnvoll, wenn Wiz-CNAPP-Stack ohnehin gesetzt ist"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Code-to-Cloud-Korrelation im Security Graph
        - Agentless, schnelle Time-to-Value
        - Visual Dashboard mit Severity, Remediation-Hinweisen
      complaints:
        - Premium-Pricing höher als Prisma
        - IaC-Tiefe geringer als dedizierte Scanner (Checkov)
    sources:
      - id: wiz-io-integrations-hashicorp
      - id: appsecsanta-com-iac-security-tools-iac-security-for-terraform
      - id: appsecsanta-com-iac-security-tools-wiz-vs-prisma-cloud
      - id: peerspot-com-products-comparisons-prisma-cloud-by-palo-alto-networks-vs-wiz-code
      - id: cyberalternatives-com-wiz-alternatives-vs-prisma-cloud
start_here: "Snyk IaC in der CI einer einzelnen Repository-Stage aktivieren und Fix-Vorschläge als PR-Kommentare konfigurieren — kein Auto-Merge. Für DACH-Deployments: EU-Frankfurt-Region setzt Enterprise-Plan voraus; DeepCode-AI-Subprozessor im AVV gesondert prüfen."
caveats: Der KI-Anteil liegt im Fix-Vorschlag, nicht in der Detection — viele Scanner vermarkten regelbasierte Erkennung als AI-Feature. Auto-PR-Fix-Modi kollidieren mit der Vier-Augen-Pflicht in regulierten Organisationen; PR-Vorschlag-Modus muss explizit konfiguriert werden.
sources: []
---
