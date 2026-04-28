---
stage: deployment-devops
order: 16
roles:
  - security-engineer
  - platform-devops-engineer
title: Policy-as-Code-Guardrails für AI-IaC
goal_label: Checkov/Kyverno-Gates auf terraform plan und K8s-Admission
suitability: good_fit
rationale: Checkov und Kyverno sind produktionsreife OSS-Werkzeuge, die AI-generierte Terraform-Pläne und K8s-Manifeste vor Apply oder Cluster-Eintritt auf Policy-Konformität prüfen — ohne proprietären Tool-Stack. HashiCorp Sentinel ergänzt das mit nativen Hard-Gates für TFE-Umgebungen und macht auch Copilot-generierte PRs in regulierten DACH-Stacks durchsetzbar.
tools:
  - id: runatlantis-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: OSS-PR-Automation-Server für Terraform mit nativem Conftest-Support; selbst-gehostet → 100% datenresidenztauglich. Für DACH-Plattformteams, die SaaS vermeiden wollen, der pragmatischste Weg zu AI-IaC-Guardrails.
    caveats:
      - Self-Hosting-Aufwand (HA, Upgrades, Auth)
      - Audit-Trail muss in eigenes SIEM geschrieben werden
      - Skaliert nicht auf 1000+ Workspaces ohne Tuning
      - Operativer Betrieb (HA, Upgrades, Auth) komplett selbst zu tragen
      - Audit-Trail muss in eigenes SIEM/Log-Repo geschrieben werden
      - Self-Hosting-Aufwand
      - Reporting/Audit-Trail rudimentärer als Spacelift/TFC
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Self-hosted, datenresidenztauglich
        - Conftest-Integration aus der Box
      complaints:
        - Operativer Betrieb selbst zu tragen
    sources:
      - id: runatlantis-io-docs-policy-checking-html
      - id: danielfm-me-posts-opa-policies-without-breaking-the-bank
  - id: checkov-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: OSS-Scanner mit 2000+ Built-in-Policies (CIS, SOC2, HIPAA, PCI-DSS) für TF/CFN/K8s/Helm/ARM/Bicep. Custom Policies in Python/YAML – flacher als Rego. Reine OSS-CLI ist voll on-prem nutzbar; Prisma-SaaS nicht erforderlich.
    caveats:
      - Prisma-Cloud-Bindung politisch sensibel (US-Vendor) – reine OSS-Variante empfohlen
      - False-Positive-Rauschen bei großen Repos
      - Custom-Python-Policies erfordern Code-Review-Disziplin
      - Prisma-Cloud-Bindung politisch sensibel (Palo Alto, US-Vendor); reine OSS-Nutzung empfohlen
      - Custom-Policies in Python erfordern Code-Review-Disziplin – sonst Backdoor-Risiko
      - Custom Policies in Python erfordern eigenes Skill-Set
      - Free Edition limitiert bei Custom Policies; SaaS-Dashboard kostet
      - Hohe Anzahl False Positives ohne Tuning
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Einsteigerfreundlich, riesiger Default-Policy-Set
        - Python/YAML-Custom-Rules statt Rego
      complaints:
        - False-Positive-Rauschen bei großen Repos
        - Plan-Scanning langsamer als tfsec/Trivy
    sources:
      - id: checkov-io
      - id: appsecsanta-com-iac-security-tools
      - id: reddit-com-r-aws-comments-1ai45y2-dealing-with-terraform-as-security-engineer
  - id: conftest-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Pragmatischster Einstieg: CLI-Wrapper um OPA für Plan-JSON, K8s-YAML, Helm, Dockerfile. In Atlantis/GHA/GitLab in unter 50 Zeilen integriert; Policies aus OCI/Git nachladbar. Ohne UI/Audit-Trail aber nur 'team_ready'."
    caveats:
      - Erbt Rego-Lernkurve
      - Audit-Evidence muss extern (CI-Logs, SIEM) geführt werden
      - Policy-Distribution via OCI/Git muss signiert sein – sonst Supply-Chain-Risiko
      - Audit-Evidence muss extern geführt werden (CI-Logs, SIEM)
      - Policy-Distribution via OCI/Git muss signiert werden, sonst Supply-Chain-Risiko
      - Erbt Rego-Lernkurve von OPA
      - Reines CLI – kein UI/Reporting, kein Audit-Trail out-of-the-box
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Einfach in Atlantis/GHA einzubauen
        - Policies aus OCI/Git nachladbar
      complaints:
        - Reporting muss selbst gebaut werden
    sources:
      - id: danielfm-me-posts-opa-policies-without-breaking-the-bank
      - id: bitslovers-com-opa-terraform-policy-as-code
  - id: developer-hashicorp-com-sentinel
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Native PaC-Engine in HCP/TFE mit advisory/soft-mandatory/hard-mandatory-Levels – das Hard-Gate, das Copilot-/Cursor-PRs in regulierten DACH-Umgebungen zu BaFin-/DORA-konformen Deployments zwingt. TFE-Self-Hosted für DACH-Datenresidenz Pflicht.
    caveats:
      - Eigene DSL, Lock-in an HashiCorp-Welt – kein OpenTofu-Pfad
      - IBM-Übernahme hat Strategie offen gelassen – Lizenz-Roadmap reviewen
      - HCP-SaaS hat keine garantierte EU-Region; TFE-Self-Hosted erforderlich
      - Nach IBM-Übernahme HashiCorps Strategie offen – 3-5-Jahres-Lizenz-Kalkulation reviewen
      - TFE-Self-Hosted für DACH-Datenresidenz Pflicht; HCP-SaaS hat keine garantierte EU-Region
      - Eigene Sprache (Sentinel HSL), nur in HashiCorp-Welt nutzbar
      - Lock-in an HCP/Terraform Enterprise – kein Vorteil bei OpenTofu-Migration
      - Lizenzkosten signifikant ab Plus-Tier
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Native in TFC, kein Glue-Code
        - Drei Enforcement-Levels in der Praxis nützlich
      complaints:
        - Eigene DSL, Vendor-Lock-in
        - Unattraktiv für OpenTofu-Stacks
    sources:
      - id: developer-hashicorp-com-terraform-enterprise-policy-enforcement-define-policies
      - id: github-com-nfroze-ai-ml-governance-with-policy-as-code
      - id: reddit-com-r-aws-comments-1ai45y2-dealing-with-terraform-as-security-engineer
  - id: kyverno-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: CNCF-graduated, YAML/CEL statt Rego senkt Lernkurve drastisch. validate/mutate/generate/verifyImages am K8s-Admission-Webhook blockiert AI-generierte Manifeste vor Cluster-Eintritt – zweite Schicht zum OPA-Plan-Gate.
    caveats:
      - Nur K8s-Domäne – kein Terraform-Plan-Gate
      - verifyImages mit Cosign braucht HSM/KMS-Schlüsselmanagement
      - GeneratingPolicy/MutatingPolicy in produktionskritischen Setups nur dry-run
      - Reine K8s-Domäne – ergänzt, ersetzt aber nicht das Terraform-Plan-Gate
      - verifyImages mit Cosign braucht Schlüsselmanagement (HSM/KMS) – in DACH meist on-prem
      - Nur für Kubernetes-Domäne stark; für reine TF-Cloud-Provisionierung nicht relevant
      - GeneratingPolicy/MutatingPolicy in produktionskritischen Setups dry-run-only freigeben
      - Performance-Footprint höher als VAP für simple Validation
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - YAML-Policies, kein Rego nötig
        - Mutation + Generation nativ
      complaints:
        - Nicht außerhalb von K8s nutzbar
        - Höhere Latenz als VAP bei reiner Validation
    sources:
      - id: kyverno-io
      - id: pawanpatra-com-integrating-ai-driven-policy-as-code-for-kubernetes-a-look-at-nirmata-and-kyverno
      - id: reddit-com-r-kubernetes-comments-1gpvk95-so-are-validating-admission-policies-a
  - id: open-policy-agent-github-io-gatekeeper
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "K8s-Adapter für OPA: ConstraintTemplate + Constraint, Audit-Controller scannt auch existierende Resources. In DACH-Banken bevorzugt, wenn Rego für Terraform-Plan-Gating bereits etabliert – eine Sprache für IaC und Admission. Klassisches PaC ohne 'AI'-Bezug, laut Briefing aber explizit erwünscht."
    caveats:
      - Mutation nur Alpha – Kyverno parallel betreiben, falls Auto-Remediation gefordert
      - Rego-Komplexität wie bei OPA
      - Kein Generate
      - Mutate/Generate schwach – wenn Auto-Remediation gefordert, Kyverno parallel betreiben
      - Kein 'AI'-Bezug; Nutzwert für AI-IaC entsteht nur durch Pipeline-Position vor terraform apply
      - Mutation nur Alpha/limitiert – Kyverno hier stärker
      - Generation nicht unterstützt
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Eine Policy-Sprache (Rego) für IaC und K8s
        - CNCF-graduiert, Enterprise-tauglich
      complaints:
        - Steile Rego-Lernkurve
        - Kein Generate, schwaches Mutate
    sources:
      - id: open-policy-agent-github-io-gatekeeper-website-docs
      - id: red-team-sh-posts-policy-as-code-opa-kyverno-eks-security
      - id: reddit-com-r-kubernetes-comments-1gpvk95-so-are-validating-admission-policies-a
  - id: openpolicyagent-org
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "CNCF-graduated De-facto-Standard: Wertet terraform-plan-JSON aus und sitzt als K8s-Admission-Webhook (Gatekeeper) genau zwischen AI-Coder und apply. Vendor-neutral, voll on-prem, eine Rego-Library für TF + K8s + CI – essentiell für BaFin-/BAIT-/DORA-Kontrollen, die einheitlich kodifiziert werden müssen."
    caveats:
      - Rego-Lernkurve steil – ohne dedizierten Plattform-Owner verfällt das Setup zur Sample-Pflichtübung
      - Decision Logs müssen explizit in EU-SIEM gepiped werden, sonst Audit-Lücke
      - OPA selbst parst kein HCL – braucht hcl2json/Conftest
      - OPA selbst ist nur Engine – ohne Distribution (Styra/Gatekeeper/Conftest) kein Audit-Trail
      - Rego-Lernkurve ist steil – Praktiker nennen die Sprache 'mental'
      - Ohne dedizierten Plattform-Owner werden Policies schnell zur Sample-Pflichtübung
      - OPA selbst parst kein HCL – braucht hcl2json/Conftest oder terraform show -json
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Wiederverwendbar über TF/K8s/CI
        - Pipeline-Enforcement geht klar
      complaints:
        - Rego ist 'mental' / steile Lernkurve
        - Wartung der Policies ohne Owner verfällt
    sources:
      - id: openpolicyagent-org-docs-latest-terraform
      - id: bitslovers-com-opa-terraform-policy-as-code
      - id: reddit-com-r-aws-comments-1ai45y2-dealing-with-terraform-as-security-engineer
  - id: spacelift-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: TF/OpenTofu/Terragrunt/Pulumi-Orchestrierung mit nativen OPA-Policies (plan/approval/login/trigger/notification/push), autoattach-Labels für org-weiten Rollout. Self-Hosted/Air-Gapped-Variante in höheren Tiers verfügbar – Pflicht für DACH-Banken-Datenresidenz.
    caveats:
      - Self-Hosted nur in Enterprise-Tier; Lizenzkosten signifikant
      - Default-SaaS US-hosted – Schrems-II-Bewertung zwingend
      - Rego-Schreibarbeit bleibt
      - Self-Hosted nur in höheren Tiers – Lizenzkosten signifikant
      - DPA und Schrems-II-Bewertung bei SaaS-Variante zwingend
      - Kommerziell, SaaS-Lock-in (Self-Hosted nur Enterprise)
      - Policies bleiben Rego – Lernkurve nicht eliminiert
      - "Datenresidenz/Schrems-II beachten: SaaS in US-Regionen"
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Native OPA + GitOps-Workflow
        - Self-Service mit Guardrails
      complaints:
        - Kosten skalieren mit Stacks
        - Rego-Schreibarbeit bleibt
    sources:
      - id: docs-spacelift-io-concepts-policy-terraform-plan-policy
      - id: spacelift-io-blog-terraform-policy-as-code
      - id: reddit-com-r-terraform-comments-1rwev92-i-built-planshield-a-cli-that-turns-terraform-json
  - id: trivy-dev
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Single-Binary, Apache-2.0, voll airgapped einsetzbar; scannt TF/CFN/K8s/Helm/Dockerfile/Container/SBOM/Secrets. Custom-Checks in Rego. Pragmatisches Single-Tool-Gate für AI-IaC-PRs in CI.
    caveats:
      - Vulnerability-DB-Updates erfordern Outbound oder Mirror
      - Keine native Trennung Plan-JSON vs. HCL-Quellcode wie Checkov
      - Trivy-OSS-Governance Aqua-getrieben – beobachten
      - Vulnerability-DB-Updates erfordern Outbound-Connectivity oder gespiegelten Mirror
      - Trivy ist Aqua-getrieben – langfristige OSS-Governance beobachten
      - Keine native Unterscheidung zwischen Plan-JSON und HCL-Quellcode-Logik wie Checkov
      - Custom-Rego-Checks erben Rego-Komplexität
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Ein Binary für IaC + Container + SBOM
        - tfsec-Migration ist Drop-in
      complaints:
        - Weniger TF-spezifische Tiefe als Checkov-Graph
    sources:
      - id: aquasecurity-github-io-tfsec-latest
      - id: trivy-dev-docs-latest-tutorials-misconfiguration-terraform
      - id: reddit-com-r-devops-comments-1r34xn4-is-it-just-me-or-is-genai-making-devops-more
  - id: cloudgeni-ai
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Plan-First-AI-IaC-Workflow (Intent → PR → fmt/validate/plan → Policy-Gate → Merge) mit Drift-Detection. Konzeptionell richtig, aber junges Produkt; in DACH-Banken/Versicherern 2026 nur als POC zu rechtfertigen.
    caveats:
      - Vendor-Risiko (Frühphase, kein OSS-Kern)
      - EU-Hosting/DPA-Status öffentlich nicht dokumentiert
      - Geringe Praktiker-Sichtbarkeit
      - Junges Produkt, geringe Praktiker-Sichtbarkeit
      - Kein Open-Source-Kern – Lock-in
      - Datenresidenz/EU-Hosting offen
    sources:
      - id: blog-cloudgeni-ai-terraform-ai-that-actually-ships-from-intent-pr-guardrails
  - id: kubescape-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: CNCF-Incubating, scannt K8s-YAML/Helm/Kustomize gegen NSA-CISA/MITRE/CIS-Frameworks. Komplementär zu Kyverno/Gatekeeper für Risk-Posture-Reporting AI-generierter K8s-Manifeste.
    caveats:
      - Kein Terraform-Plan-Gate – kein Ersatz für OPA/Conftest
      - ARMO-Backed (Israel) – DACH-Souveränität prüfen
      - Free-Tier Reporting limitiert
      - Free-Tier Reporting limitiert; Enterprise-Variante (ARMO Platform) für DACH-Banken einzeln evaluieren
      - Fokus auf K8s, kein Terraform-Plan-Gate
      - Eigene Rego-Variante – Reuse begrenzt
      - Reporting Free-Tier limitiert
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: appsecsanta-com-iac-security-tools
  - id: scalr-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: TF/OpenTofu-Plattform mit Pre/Post-Plan-OPA-Enforcement und Speculative Runs für Policy-Änderungen. Self-Hosted-Option ist Pluspunkt, aber DACH-Referenzen rar.
    caveats:
      - Vendor-Risiko bei kleinerem Anbieter – Exit-Strategie definieren
      - SOC2/ISO27001-Status der SaaS-Variante explizit verifizieren
      - DACH-Footprint klein
      - Kleinerer Marktanteil als Spacelift/env0/TFC
      - Self-hosted-Option vorhanden, aber DACH-Referenzen rar
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: scalr-com-blog-everything-you-need-to-know-about-open-policy-agent-opa-and-terraform
  - id: snyk-io-product-infrastructure-as-code-security
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Developer-First-Scanning für TF/CFN/K8s/ARM in IDE/CLI/CI mit Auto-Fix-PRs und Exploitability-Scoring. Sinnvoll als sekundäres Tool, wenn Snyk-Stack ohnehin im Einsatz – ersetzt aber kein OPA/Sentinel-Plan-Gate.
    caveats:
      - Reine Code-Analyse, kein Plan-Gating für Cross-Resource-Effekte
      - Custom-Policy-Sprache schwächer als Rego
      - Bei DACH-Kunden EU-Tenant verfügbar – Vertrag prüfen
      - Custom-Policy-Sprache schwächer – Standard-Policies dominieren
      - Bei DACH-Kunden mit Atlassian/GitHub-Stack als sekundäres Tool sinnvoll, nicht als Hauptgate
      - Kommerziell, kann bei großen Repos teuer werden
      - Custom-Policy-Sprache (Snyk-Rules) weniger expressiv als Rego
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Polierte Developer-IDE-Integration
        - Auto-Fix-PRs angenehm
      complaints:
        - Kosten skalieren schnell
        - Reporting/UI laut Reviews limitiert
    sources:
      - id: rafter-so-blog-iac-security-scanning-tools
      - id: reddit-com-r-aws-comments-1ai45y2-dealing-with-terraform-as-security-engineer
  - id: tryterracotta-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Vermarktet sich explizit als 'Guardrails für AI-generierte Terraform' mit Natural-Language-PaC und kontextbewussten PR-Reviews. AI-IaC-Guardrail-Pattern par excellence, aber NL-Policies sind im DACH-Audit-Kontext schwer verteidigbar – nur als Generator-Input akzeptabel, nicht als Enforcement.
    caveats:
      - BaFin/DORA verlangen deterministische, auditierbare Kontrollen
      - Junges Produkt, wenige Enterprise-Referenzen
      - Datenresidenz/SaaS-only – kein EU-Hosting dokumentiert
      - BaFin/DORA verlangen deterministische, auditierbare Kontrollen – NL-Policies nur als Generator-Input akzeptabel, nicht als Enforcement
      - Junges Produkt, wenige enterprise-Referenzen
      - Natural-Language-Policy schwer auditierbar im DACH-Audit-Kontext
      - Datenresidenz/SaaS-only – BaFin-Eignung offen
    sources:
      - id: blog-tryterracotta-com-introducing-terracotta-guardrails-ai-opa
      - id: blog-tryterracotta-com-real-time-natural-language-guardrails
  - id: kubestack-com-catalog-opa-gatekeeper
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Terraform-Modul-Bundler, der OPA Gatekeeper als Plattform-Service in regulierte K8s-Stacks einbettet – Gatekeeper-Rollout über Terraform/GitOps statt manuell. Likely missed by market scan because der Markt-Scan PaC-Engines listet, nicht IaC-Module zur Distribution dieser Engines; gerade DACH-Plattformteams nutzen aber Module-Standards für Rollout.
    caveats:
      - Kein eigener Policy-Engine – nur Distribution
      - Kubestack-spezifischer Framework-Lock-in (kbst-CLI)
      - DACH-Referenzlogos öffentlich rar
    sources:
      - id: kubestack-com-catalog-opa-gatekeeper
  - id: developer-harness-io-docs-platform-governance-policy-as-code-harness-governance-overview
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: OPA als gemanagter Service in Harness-CI/CD-Pipelines mit Policy-Sets gegen Pipelines, Steps, Terraform-Plan und Plan-Cost. Customer-managed Policy-Evaluation kann Secrets in eigener Region halten – relevant für DACH-Banken-Datenresidenz. Plan-Cost-Gate als zusätzlicher DORA-Resilience-Hebel. Review hat keine substantiellen unabhängigen Praktiker-Quellen jenseits der Harness-eigenen Doku/Blogs gefunden – daher conditional statt good_fit, sinnvoll nur wenn Harness ohnehin als Delivery-Plattform gesetzt ist.
    caveats:
      - Lock-in an Harness-Plattform – nur sinnvoll, wenn Harness ohnehin als Delivery-Plattform gesetzt
      - Standalone-OPA-Replacement ohne Harness-CI/CD nicht sinnvoll
      - Lizenzkosten signifikant
      - Policies bleiben Rego
      - EU-Region für SaaS verfügbar, aber Lizenz-Tier-abhängig
      - Wenig öffentliche, herstellerunabhängige Praktiker-Reviews speziell zum Policy-Modul – Pilot mit eigener Compliance-Liste vor Investitionsentscheidung
      - Verwendete OPA-Library-Version (laut Harness-FAQ 0.62.0) hinkt aktuellen OPA-Releases nach – Rego-Feature-Drift einplanen
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: developer-harness-io-docs-platform-governance-policy-as-code-policy-as-code-for-terraform
      - id: developer-harness-io-docs-platform-governance-policy-as-code-run-policies-in-your-environment
  - id: kics-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Breiteste IaC-Format-Coverage (TF/CFN/Ansible/K8s/Docker/Helm/OpenAPI/ARM/Bicep/Pulumi/Crossplane), 2.400+ Rego-Queries, Apache-2.0. Praktiker-Reviews empfehlen den Parallelbetrieb mit Checkov, weil Rego-Custom-Rules zwischen KICS und OPA wiederverwendbar sind. Stand-alone ohne Dashboard nur 'team_ready'.
    caveats:
      - Tiefe pro Format geringer als Checkov-Graph für Terraform – Praktiker sehen KICS und Checkov als komplementär, nicht als Ersatz
      - Reporting/Dashboard nur in Checkmarx-One
      - Performance bei großen Monorepos zäh
      - Checkmarx One als Enterprise-Variante prüfen – sonst eigenes Reporting/SIEM-Pipe nötig
      - Coverage-Tiefe pro Format geringer als spezialisierte Scanner
      - Reporting/Dashboard nur in Checkmarx-One-Variante
      - Custom-Rules in Rego – erbt OPA-Lernkurve
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - 22+ IaC-Plattformen mit 2.400+ Queries – breiteste OSS-Coverage
        - Rego-Custom-Rules teilbar mit OPA-Stack
        - Native VSCode-/Pre-Commit-Integration
      complaints:
        - TF-Tiefe geringer als Checkov-Graph
        - Module-Scanning eingeschränkt
    sources:
      - id: rafter-so-blog-iac-security-scanning-tools
      - id: appsecsanta-com-checkov-vs-kics
      - id: cloudtoolstack-com-blog-infrastructure-testing-terratest-checkov
      - id: dev-to-svasylenko-a-deep-dive-into-terraform-static-code-analysis-tools-features-and-comparisons-1kbf
  - id: styra-com-styra-das
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "Kommerzielle OPA-Control-Plane der OPA-Erfinder mit Policy-Library, Decision-Logs, Compliance-Packs (CIS, PCI-DSS), HCP-Run-Task-Integration und Impact-Analysis – konzeptionell ideal für die im Briefing genannte 'Plattform-Owner'-Lücke. KRITISCHE NEUE LAGE (Aug 2025): Apple hat das OPA-/Styra-Kernteam acqui-hired, kommerzielle Styra-Produkte werden gemäß DACH-Fachpresse (heise) und Praktikern (PACLabs, Cloud Native Now) eingestellt; offizieller Migrationspfad führt zur Open-Source-OPA-Control-Plane (OCP), die aber kein UI, kein zentrales Decision-Log-Storage und keine Impact-Analysis bietet. Für DACH-Banken/Versicherer 2026 nur noch als evaluation_only – ein Neukauf von Styra DAS ist heute kaum verteidigbar."
    caveats:
      - Styra-Commercial-Roadmap unsicher – PACLabs erwartet, dass DAS-SaaS-Zugang innerhalb von 12 Monaten ausläuft (Stand 2025-09)
      - "Migrationspfad (OPA Control Plane / OCP) ist OSS, aber Feature-Lücke: kein UI-basiertes Authoring, kein zentrales Decision-Log-Storage, keine Impact-Analysis – für regulierte Workloads externe Lösung nötig"
      - Kein Neueinkauf von Styra DAS sinnvoll; Bestandskunden brauchen Exit-Plan auf OCP + plain OPA + externes Decision-Log-Storage
      - Self-Hosted (DAS Stack) für regulierte Workloads zu bevorzugen – aber Pflege durch Hersteller nicht mehr garantiert
      - EU-Region-Status verifizieren – im Sunset-Szenario ohnehin sekundär
      - OCP als Nachfolger laut PACLabs-Review mit Rough-Edges (z. B. Cloud-Storage-Bug bei Frührelease) – Frühphase
      - Bindet Org an Styra-Tooling/Doku, deren Pflege jetzt Community-getragen ist
    practitioner_signal:
      volume: medium
      tenor: negative
      praise:
        - "Battle-Tested bei Großkunden (z. B. Miro: ~30× weniger RAM, ~1000× Daten-Update-Performance ggü. plain OPA laut Miro-Engineering)"
      complaints:
        - Kommerzielle Roadmap durch Apple-Acqui-Hire faktisch ausgesetzt
        - Styra-Sales nicht mehr erreichbar (PACLabs-Bericht)
        - OCP als Nachfolger noch nicht featuregleich
    sources:
      - id: developer-hashicorp-com-terraform-tutorials-cloud-validation-enforcement
      - id: heise-de-en-news-apple-acquires-developer-of-the-open-policy-agent-10574287-html
      - id: cloudnativenow-com-features-apple-buys-styra-brains-opa-remains-open
      - id: paclabs-substack-com-p-opa-announcement-and-consequences
      - id: paclabs-substack-com-p-thoughts-on-the-opa-control-plane
      - id: docs-styra-com-ocp
start_here: "Pilot mit Checkov in der CI-Pipeline: drei harte Checks (kein Public-S3, alle Resources getaggt, kein IAM-Wildcard) auf dem terraform plan-JSON, Pipeline bricht bei Fund ab. Wer Kubernetes-Workloads AI-generiert, schaltet Kyverno als Admission-Webhook mit denselben Regeln als zweite Schicht davor."
caveats: Policies schreiben und aktuell halten bleibt Handarbeit — ohne dedizierten Plattform-Owner verkommt der Ruleset zur ungepflegten Sample-Sammlung. Sentinel bindet an die HashiCorp-Welt und ist nach der IBM-Übernahme mit offenem Lizenz-Horizont verbunden; die Lizenz-Roadmap sollte vor dem Commit geprüft werden.
sources: []
---
