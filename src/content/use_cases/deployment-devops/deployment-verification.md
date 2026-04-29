---
stage: deployment-devops
order: 10
roles:
  - software-engineer
  - platform-devops-engineer
title: Deployment-Verification
goal_label: Canary- und Rolling-Deploys gegen Health-Signale absichern
suitability: conditional
rationale: Harness Continuous Verification und Datadog Watchdog liefern heute produktionsreife ML-Signale, die manuelles Beobachten von Canary-Deploys ersetzen können. AWS CodeDeploy zeigt als breit eingesetzter Einstiegspunkt, dass das Muster — von CloudWatch-Alarm-Rollback bis ML-basiertem Metrikvergleich — für verschiedene Reifestufen praktikabel ist.
tools:
  - id: argo-rollouts-readthedocs-io-en-stable-features-analysis
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: OSS-Standard fuer K8s-Canary mit AnalysisTemplates gegen Prometheus/Datadog/CloudWatch/etc.; voll on-prem/air-gap-faehig - ideal fuer DACH-Banken/Versicherer mit eigenem K8s-Stack. Enterprise-Support ueber Akuity, Codefresh oder Red Hat OpenShift GitOps adressierbar. Auto-Rollback-Latenz typischerweise unter 60 Sekunden.
    caveats:
      - Kein eigener Vendor-Support - Distributor (Akuity/Codefresh/Red Hat) noetig
      - AI-Anteil entsteht erst durch Metric-Provider oder das alpha-stage rollouts-plugin-metric-ai
      - Replace bestehender Deployment-CRDs durch Rollout-CRDs ist organisatorischer Change
      - Kein eigener Vendor-Support - SLAs nur ueber Distributoren (Akuity, Codefresh, Red Hat OpenShift GitOps)
      - AI-Anteil entsteht erst durch Metric-Provider oder das neue rollouts-plugin-metric-ai (alpha)
      - Replace bestehender Deployment-CRDs ist organisatorisch ein nicht-trivialer Change in Legacy-K8s-Estates
      - AnalysisTemplate ist signal-, kein KI-getrieben - 'KI' kommt erst durch APM-Anbieter
      - Replace bestehende Deployment-CRD durch Rollout-CRD
      - Tuning der failureLimit/Schritte erfordert Erfahrung
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - De-facto Standard fuer progressive Delivery auf K8s
        - Funktioniert mit ArgoCD-Stack und Service-Mesh-Traffic-Splitting
      complaints:
        - Backwards-kompatible DB-Migrationen bleiben Knackpunkt
        - Komplexitaet lohnt erst ab gewissem Traffic
    sources:
      - id: argoproj-github-io-argo-rollouts-features-analysis
      - id: medium-com-40weinshenkerdaniel-canary-deployments-with-argo-6b98f45fa914
      - id: github-com-argoproj-labs-rollouts-plugin-metric-ai
      - id: reddit-com-r-kubernetes-comments-squla7-i-made-a-video-on-what-canary-deployment-is-and
      - id: reddit-com-r-kubernetes-comments-1p83i8a-different-env-vars-for-stable-vs-canary-pods
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Watchdog vergleicht nach jedem Deploy automatisch APM-Performance der neuen Version gegen vorherige Versionen und liefert das ML-Signal; Rollback-Detection und CD-Deployments-Monitor schliessen den Loop. Datadog EU-Site (Frankfurt) verfuegbar; Bits AI ergaenzt natuerlichsprachliche Investigation.
    caveats:
      - Auto-Rollback selbst muss extern (Harness, ArgoCD, CodeDeploy) angestossen werden
      - Bits AI laut Docs nicht fuer ddog-gov verfuegbar - Compliance-Profil pruefen
      - Telemetrie-Freigabe in Banken oft nur mit Sensitive-Data-Scrubber tragfaehig
      - Bits AI laut Docs nicht fuer ddog-gov-Sites verfuegbar - Hinweis auf eingeschraenktes Compliance-Set
      - Telemetriefluss zu Datadog fuer Banken oft nur mit Tag-Filter/Sensitive-Data-Scrubber freigegeben
      - Kosten skalieren mit Hosts und Custom Metrics - Watchdog-Wert vs. Pricing kritisch pruefen
      - Datadog ist US-Cloud - EU-Region verfuegbar, aber separat zu pruefen
      - Service-Versionierung (Version-Tags) Voraussetzung
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Plug-and-play setup reduces onboarding burden vs. manual metric tuning
        - "Cuts alert fatigue: 60% reduction in pager floods after deployment tuning"
        - Automatic version comparison detects errors within minutes without manual gates
      complaints:
        - "Platform dependency risk: teams mention needing deploy-abort checks if Datadog is down"
        - Aggressive sales practices discourage adoption (reported blocking domain emails)
        - Pricing and vendor lock-in concerns mentioned in broader Datadog feedback
    sources:
      - id: docs-datadoghq-com-watchdog-faulty-deployment-detection
      - id: docs-datadoghq-com-monitors-types-ci-tab-deployments
      - id: docs-datadoghq-com-bits-ai-bits-ai-sre
  - id: harness-io-products-continuous-delivery-ai-assisted-deployment-verification
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Kanonisches Tool: unsupervised ML auf Logs plus Knoten-zu-Knoten-Metrikvergleich gegen Baseline, Sensitivity-Stufen erlauben Bank-konformes Tuning. AI-V&R-Layer (2026) generiert Health-Profile via MCP-Calls auf die Observability-Plattform und reduziert Konfigurationsaufwand spuerbar. Auto-Rollback ist Pipeline-First-Class und damit als ITIL-Standard-Change vorab genehmigungsfaehig."
    caveats:
      - Harness SaaS standardmaessig US - EU-Cluster und DPA vertraglich fixieren
      - Auto-Rollback im BaFin/MaRisk-Scope nur als dokumentierter Standard-Change zulaessig
      - AI V&R laut Vendor noch kein 1:1-Ersatz fuer klassisches CV - Pruefphase einplanen
      - Harness SaaS US-gehostet; EU-Cluster (Frankfurt) erst bei Enterprise-Tarif und vertraglich zu fixieren
      - AI-V&R nutzt MCP-Calls auf Observability-Daten - Datenflussfreigabe durch DPO/InfoSec noetig
      - Auto-Rollback in BaFin/MaRisk-Scope erfordert dokumentierten Standard-Change inkl. CAB-Vorabgenehmigung
      - Auto-Rollback in regulierten Banken muss als ITIL-Change dokumentiert werden
      - AI V&R laut Harness noch kein 1:1-Ersatz fuer klassisches CV
      - Lock-in an Harness-Pipelines, EU-Datenresidenz vorab klaeren
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Wird in CD-Vergleichen als Spezialist fuer komplexe Strategien genannt
        - CV automatisiert das nervige Babysitting von Deploys
      complaints:
        - Plattform-Lock-in und Komplexitaet bei Multi-Cloud
        - Konfigurationsaufwand fuer Health Sources
    sources:
      - id: harness-io-products-continuous-delivery-ai-assisted-deployment-verification
      - id: developer-harness-io-docs-continuous-delivery-verify-cv-concepts-machine-learning
      - id: harness-io-blog-making-deploys-safe-shouldnt-be-hard
      - id: topify-ai-blog-harness-engineering-ai-visibility
  - id: docs-flagger-app
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Voll automatisiertes Canary-/Blue-Green-Operator-Modell auf Basis Prometheus/Datadog/CloudWatch/Dynatrace; in DACH durch Systemintegratoren wie CloudCops/Berlin als Beratungsangebot etabliert. Geeignet fuer Cloud-Native-Mittelstand und nicht-regulierte Tech-Verticals. Komplementaer zu Flux-GitOps-Setups.
    caveats:
      - Keine native Pause-fuer-Approval - kollidiert frontal mit ITIL-Change-Approval in Banken/oeffentlichem Sektor
      - Service-Mesh-Voraussetzung verschiebt Aufwand in Netzwerk-/Security-Teams
      - Kein nativer Audit-Trail fuer Rollback-Aktionen - SIEM-Integration selbst bauen
      - CNCF-Sandbox-Status (kein Incubating); Governance/Roadmap an Flux-Maintainer gebunden
      - Service-Mesh-Voraussetzung verschiebt Komplexitaet in Netzwerk-/Security-Teams
      - Kein nativer Audit-Trail fuer Rollback-Aktionen - eigene SIEM-Integration noetig
      - Keine Pause-fuer-manuelle-Freigabe-Semantik wie Argo - schwierig in Banken mit ITIL-Approvals
      - Erfordert Service Mesh oder Ingress mit Traffic-Splitting
      - Selbst-betrieben, kein SaaS
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Gute Integration mit Flux/GitOps-Setups
        - Konfigurationsarmes Auto-Promote/Auto-Rollback
      complaints:
        - Weniger Kontrolle als Argo Rollouts
        - Service-Mesh-Voraussetzung schreckt manche ab
    sources:
      - id: devopsboys-com-blog-how-to-implement-canary-deployments-flagger-2026
      - id: devopsboys-com-blog-argo-rollouts-vs-flagger-canary-comparison-2026
      - id: fluxcd-io-flagger
      - id: cloudcops-de-en-services-flagger-consulting
      - id: reddit-com-r-kubernetes-comments-1hexrx5-flux-vs-argocd
  - id: codefresh-io-product-gitops
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Enterprise-UI und Promotion-Workflows auf Argo Rollouts: Pre-/Post-Action-Workflows orchestrieren Smoke-Tests, Performance-Checks und Rollback-Workflows mit Audit-Trail - schliesst die Argo-Luecke fehlender Vendor-Support/Approval-Gates. Likely missed by market scan because das Tool ist als 'GitOps-CD-Plattform' positioniert, nicht als 'Deployment-Verifikation', und faellt in Capability-Suchen unter den Tisch."
    caveats:
      - Recent Acquisition durch Octopus Deploy - Roadmap- und Branding-Wechsel im Gange
      - EU-Hosting/DPA fuer SaaS-Variante separat zu klaeren
      - "Lock-in: Promotion-Workflows sind Codefresh-spezifisch, nicht portabel zu vanilla ArgoCD"
    sources:
      - id: codefresh-io-docs-docs-promotions-promotion-workflow
  - id: cloud-google-com-deploy-docs-deployment-strategies-canary
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Hyperscaler-natives Canary mit Deployment Analysis, advanceRolloutRule-Automation und progressivem Traffic-Splitting; in europe-west3 (Frankfurt) und Zurich verfuegbar - relevant fuer DACH-Kunden mit GCP-Workloads. Likely missed by market scan because im Capability-Suchraum von Argo/Flagger dominiert wird, obwohl der Hyperscaler-eigene Pfad fuer GCP-Estates der naheliegendste ist.
    caveats:
      - GCP-Lock-in - Strategien nicht portabel zu AWS/Azure/on-prem
      - Deployment Analysis ist regelbasiert, nicht ML-getrieben - 'AI'-Anspruch eher gering
      - EU-Datenresidenz vertraglich (Sovereign-Cloud-Optionen pruefen) absichern
    sources:
      - id: cloud-google-com-deploy-docs-deployment-strategies-canary-hl-de
  - id: keptn-sh
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: CNCF-Incubating-Projekt mit Dynatrace-Linz-Wurzel; deklarative Pre/Post-Deployment-SLO-Evaluations als K8s-CRDs (KeptnApp, AnalysisDefinition, AnalysisValueTemplate) - voll on-prem/air-gap-faehig und damit attraktiv fuer DACH-Banken/Oeffentlich. Likely missed by market scan because Keptn ist als 'Lifecycle Orchestrator' und nicht als 'Deployment-Verifikation' positioniert und faellt in Capability-Suchen oft durch.
    caveats:
      - OSS - kein Vendor-Support; Dynatrace empfiehlt fuer Enterprise heute SRG statt Keptn
      - Roadmap-Tempo nach Pivot von Keptn v1 zu Lifecycle Toolkit zeitweise unklar
      - Selbstbetrieb erfordert eigene SLO-Definition und Observability-Pipeline
    sources:
      - id: github-com-keptn-lifecycle-toolkit
      - id: thenewstack-io-leveraging-keptn-for-automated-slo-analysis
  - id: github-com-argoproj-labs-rollouts-plugin-metric-ai
    fit: partial
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Offizielles Argo-Labs-Plugin, das einen A2A-AI-Agent als Metric-Provider in AnalysisTemplate einklinkt und Logs/Patterns zwischen Stable und Canary korreliert. Likely missed by market scan because Plugin im argoproj-labs-Org noch alpha ist und in 'AI deployment verification'-Suchen unter den Plug-In-Radar faellt.
    caveats:
      - Alpha-Status, kein Production-Hardening
      - Erfordert eigenen Agent-Endpoint (Modellauswahl, Daten-Egress in Bank-Setup pruefen)
      - Kein eigener Vendor-Support, nur Community
    sources:
      - id: github-com-argoproj-labs-rollouts-plugin-metric-ai
  - id: docs-aws-amazon-com-codedeploy-latest-userguide-deployments-rollback-and-redeploy-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Native Canary/Linear-Strategien fuer Lambda/ECS/EC2 mit bis zu 10 CloudWatch-Alarms als Rollback-Trigger; Audit-Trail via CloudTrail ist ITIL-konform. Solides Fundament fuer Frankfurt-Region-Workloads ohne neue SaaS-Beschaffung. KI-Anteil bleibt aber duenn (DevOps Guru ist optional). Unabhaengige Praktiker-Walkthroughs (CloudWebSchool, Medium AntStack/Praneeth Shetty, humansreadcode) bestaetigen das Muster und dokumentieren die typischen Fallstricke (Alias-vs-Version-False-Positives, vergessenes autoRollbackConfiguration.enabled, Edge-Cases bei mehrfachen Failures).
    caveats:
      - AI-Anteil minimal - DevOps Guru extra Kosten und nur AWS-Workloads
      - Multi-Cloud-/On-Prem-Workloads bleiben aussen vor
      - Strategien wie Canary10Percent5Minutes nicht portabel - Lock-in
      - Eingebauter 'AI'-Anteil minimal - DevOps Guru ist Zusatzkosten und nur AWS-Workloads
      - "Lock-in: Strategien wie Canary10Percent5Minutes sind nicht portabel"
      - "'KI' im engeren Sinne nur ueber CloudWatch Anomaly Detection / DevOps Guru"
      - Health-Signale muessen separat in Watchdog-/Anomaly-Modellen aufgebaut werden
      - Multi-Region-Rollback in regulierten Setups muss als Change dokumentiert werden
      - Alarme greifen am Lambda-Alias, nicht an der Version - False-Positives moeglich, wenn die alte Version waehrend des Shifts faellt
      - Auto-Rollback ist nicht default - autoRollbackConfiguration.enabled muss aktiv gesetzt werden (haeufig vergessener Schritt)
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Gut dokumentierte, sehr breit eingesetzte Standard-Mechanik fuer Lambda/ECS-Canary-Rollbacks
        - Mehrere unabhaengige Walkthroughs decken EC2-, ECS- und Lambda-Variante komplett ab
      complaints:
        - Rollback-Verhalten bei aufeinanderfolgenden Failures kann unerwartete Ergebnisse liefern (StackOverflow-Diskussion)
        - CloudFormation-Konfiguration der Rollback-Optionen ist gegenueber Console eingeschraenkt
    sources:
      - id: docs-aws-amazon-com-codedeploy-latest-userguide-monitoring-create-alarms-html
      - id: aws-amazon-com-blogs-containers-automate-rollbacks-for-amazon-ecs-rolling-deployments-with-cloudwatch-alarms
      - id: cloudwebschool-com-docs-aws-devops-and-cicd-rollbacks-in-codedeploy
      - id: medium-com-antstack-automate-rollback-of-serverless-app-with-aws-codedeploy-and-serverless-framework-92354fcac476
      - id: humansreadcode-com-post-2020-12-30-lambda-deploy-canary
      - id: stackoverflow-com-questions-63357341-codedeploy-rollback-not-picking-the-previous-successful-build-version
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Oesterreichischer Hersteller mit EU-Hosting und vielen DACH-Bank-/Versicherungslogos; SRG validiert Releases gegen bis zu 50 Health-Dimensionen, Davis-Auto-Adaptive-Thresholds adressieren das Hochlast-Baseline-Problem (Quartalsende, Steuertermin). Kombinierbar mit Harness CV als doppelter Release-Gate. Downgrade auf 'conditional': Praktiker-Sichtbarkeit jenseits Dynatrace-eigener Kanaele bleibt duenn - Harness-Doku ist cross-vendor, aber weiter Vendor-Inhalt; LinkedIn-Deep-Dive stammt von einem Dynatrace-ACE-Consultant. Keine starke unabhaengige nicht-Vendor-Quelle gefunden."
    caveats:
      - Auto-Adaptive Thresholds brauchen >=5 Trainingslaeufe - explizite Trainings-Ausnahmen fuer Hochlast-Events einplanen
      - DPS-Lizenzkosten signifikant - ROI gegen Open-Source (Keptn) rechnen
      - Abhaengig von Dynatrace OneAgent-Coverage; Mainframe-Strecken oft Luecke
      - Auto-Adaptive Thresholds erfordern >=5 Validation-Laeufe - in seltenen Pipelines (z.B. Mainframe-naher CD) langsam
      - Lizenzkosten-Schock bei DPS-Modell - ROI-Rechnung im Vergleich zu Open-Source (Keptn) kritisch
      - OneAgent-Coverage in Bank-Mainframe-/Host-Strecken oft Luecke
      - Auto-adaptive Thresholds brauchen >=5 Trainingslaeufe; explizite Ausnahmen fuer Quartalsende noetig
      - Lizenzkosten signifikant
      - Abhaengig von Dynatrace OneAgent-Coverage
      - Praktiker-Erfahrungsberichte ausserhalb Dynatrace-Sphaere bisher kaum auffindbar - POC ohne Referenzkunde mit hohem Eigenrisiko verbunden
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Auto-adaptive thresholds via Davis AI learn normal behavior, eliminating manual SLO maintenance
        - Validates up to 50 health dimensions (logs, metrics, traces, business events)
        - "Gateway-friendly: integrates as parallel release gate with other verification systems"
      complaints:
        - Davis CoPilot limited to DQL query generation, feels rigid without workflow automation
        - Requires separate manual workflow setup for real agency beyond data fetching
        - Auto-adaptive learning needs 5+ training cycles; quarterly exceptions still require tuning
    sources:
      - id: dynatrace-com-news-blog-auto-adaptive-thresholds-for-ai-driven-quality-gating
      - id: developer-harness-io-docs-continuous-delivery-verify-configure-cv-health-sources-dynatrace-dynatrace-srg
      - id: linkedin-com-pulse-enhancing-reliability-dynatrace-site-guardian-deep-dive-durga-saran-wde4c
  - id: komodor-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Komodor zentralisiert K8s-Change-, Deploy- und Cluster-State-Daten und korreliert mit Symptomen wie ReplicaSet-Flapping nach Rollout. Agentische AI Klaudia diagnostiziert Konfigurations-Drift (z.B. ConfigMap-Key entfernt) waehrend eines Rollouts und schlaegt direkt Rollback-Aktionen vor. Damit eher 'Verifikation nach Deploy + remediation' als nativer Canary-Gating, aber stark fuer Kubernetes-on-prem-Stories und Rollout-Inzidenten.
    caveats:
      - Kein nativer Canary-Analyzer - eher reaktiv nach Rollout
      - SaaS-Modell, EU-Hosting separat klaeren
      - Ergaenzt Argo/Flagger, ersetzt sie nicht
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Klaudia RCA accuracy >95% on real failure scenarios (OOM, config drift, networking)
        - Correlates deployment changes with pod failures instantly, no sequential log hunting
        - Provides specific remediation commands (rollback vs. config fix) with evidence trails
      complaints:
        - Freemium plan discontinued; $15K/year pricing for small teams feels unjustifiable
        - Post-deployment reactive approach, not proactive canary gating like Argo/Flagger
        - Requires Komodor platform; complements rather than replaces core deployment tools
    sources:
      - id: komodor-com-blog-ai-sre-in-practice-diagnosing-configuration-drift-in-deployment-failures
      - id: komodor-com
start_here: Mit AWS CodeDeploy und zwei bis drei CloudWatch-Alarmen auf Error-Rate und Latency-p99 einen einzelnen Lambda- oder ECS-Service mit Canary-Strategie absichern; Auto-Rollback zunächst nur beobachten, nicht als Automatik schalten. Harness CV ist der nächste Schritt, wenn ML-basiertes Signaling und plattformübergreifende Health-Quellen benötigt werden.
caveats: Auto-Rollback in regulierten Umgebungen (BaFin/MaRisk) erfordert einen vorab genehmigten ITIL-Standard-Change — auch ein automatisierter Rollback ist dokumentationspflichtig. SLO-Baselines für Hochlastphasen (Quartalsende, Steuerstichtag) brauchen explizite Trainingsausnahmen, da anomaliebasierte Modelle sonst Fehlalarme produzieren.
sources: []
---
