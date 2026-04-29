---
stage: operations-monitoring
order: 5
roles:
  - platform-devops-engineer
title: Capacity- und Cost-Forecasting
goal_label: Ressourcenbedarf vorhersagen
suitability: conditional
rationale: CAST AI und Amazon Q Developer machen ML-basiertes Rightsizing und Cost-Forecasting für K8s- und AWS-Workloads ohne gesonderte Analyse-Pipeline zugänglich. Apptio Cloudability ergänzt den CFO-Kanal für Multi-Cloud-Budget-Roll-ups, wo Engineering-Tools allein nicht ausreichen.
tools:
  - id: apptio-com-products-cloudability
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Klassische Konzern-FinOps-Plattform; Intelligent Forecasting (Februar 2026) basiert auf watsonx-Modellen und integriert mit IBM Apptio Planning für IT-Budget-Roll-up. In DACH über IBM-Vertrieb etabliert; AI Lens for FinOps liefert Conversational Insights. CFO-Persona ergänzt Engineering-Tools.
    caveats:
      - Watsonx-Forecasting-Engine ist neu (Februar 2026) — Reife-Risiko bei Edge-Cases
      - Lizenz-Bündelung mit Apptio-Suite für reine Cost-Forecasting oft überdimensioniert
      - "Reddit-Stimmen: Rightsizing-Empfehlungen 'hit or miss' bei GCP"
      - Weniger in Engineering-Workflows integriert als CloudZero/Harness
      - Schwer zu beschaffen für KMU; eher Enterprise-Kontingent
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Solide Multi-Cloud-Normalisierung bei Skala
        - Stark in Executive-Reporting
      complaints:
        - Rightsizing-Empfehlungen, vor allem für GCP, 'hit or miss'
        - Weniger Engineering-Workflow-Integration
    sources:
      - id: apptio-com-blog-smarter-technology-spend-with-ai-driven-financial-intelligence
      - id: apptio-com-blog-from-guesswork-to-confidence-introducing-intelligent-forecasting-for-tech-spend-planning
      - id: reddit-com-r-finops-comments-1njp8v4-multicloud-cost-optimization-at-scale-tools-that
  - id: aws-amazon-com-compute-optimizer
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Im Briefing genannt. ML-basierte Rightsizing-Empfehlungen für EC2/EBS/Lambda/ECS/Aurora/RDS, im AWS-DPA mitgedeckt. Niedrigschwellige Baseline für DACH-AWS-Workloads ohne zusätzlichen Vendor.
    caveats:
      - Nur AWS — bei expliziter DACH-Multi-Cloud-/Sovereign-Cloud-Strategie nur Teil-Lösung
      - Memory-Metriken erfordern CloudWatch-Agent (sonst nur CPU/Net/IO)
      - Empfehlungen, keine automatische Ausführung — externe Pipeline nötig
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Kostenlose Basis, kein zusätzlicher Vendor
        - Native Tagging und IAM-Integration
      complaints:
        - Memory-Metriken nur mit CloudWatch-Agent verfügbar
        - Empfehlungen oft konservativ; manuelles Auto-Scaling-Tuning nötig
    sources:
      - id: docs-aws-amazon-com-compute-optimizer-latest-ug-rightsizing-preferences-html
      - id: innfactory-de-en-cloud-aws-products-compute-optimizer
      - id: reddit-com-r-devops-comments-1r81mj1-i-accidentally-became-finops-and-now-im-panicking
  - id: cast-ai-workload-optimization
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Kategorie-Leader für automatisierte K8s-Cost-Optimization mit ML-getriebenem Cluster-/Workload-Rightsizing und Spot-Selection auf AWS/Azure/GCP. Dokumentierter DACH-Kunden-POC mit 30% Cost-Reduktion und Terraform-Native-Integration; progressives Read-Only-zu-Autopilot-Modell passt zu DACH-Vorsicht.
    caveats:
      - Hosting in US-Regionen — Konzerne mit harten Datensouveränitäts-Vorgaben (Banken/Versicherer/öffentlicher Sektor) brauchen Architektur-Klärung zur Telemetrie
      - Vollautomatisierter Modus erfordert ChangeMgmt-Freigabe nach ITIL — Read-Only-Phase als Pflicht-POC einplanen
      - "Reddit-Stimmen: Workload-Rightsizing weniger ausgereift als bei ScaleOps/PerfectScale"
      - Einstiegspreis ab ~1.000 USD/Monat — kleine Teams kaum sinnvoll
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - 30-50% Instance-Cost-Reduktion direkt im POC
        - Terraform-Module integrieren sich gut in IaC
      complaints:
        - Workload-Rightsizing weniger ausgereift als bei ScaleOps
        - Permission-Modell pro Cluster/Namespace fehlt
    sources:
      - id: cast-ai
      - id: biztechweekly-com-2026-cast-ai-report-companies-waste-gpu-capacity-with-only-5-utilization-amid-rising-ai-infrastructure-costs
      - id: aws-amazon-com-marketplace-reviews-reviews-list-prodview-vtvxyzbzs3huy-review-8c7fb9f0-357b-360b-ac5b-047ca895b3bb
      - id: reddit-com-r-kubernetes-comments-1ht05vd-castai-vs-scaleops-vs-perfectscale
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Briefing-Treffer. Ingestiert AWS/Azure/GCP/Oracle-Bills, korreliert mit APM/Logs/Metriken via Bits AI. EU-Site (Frankfurt) und etablierte AVV machen Datadog für DACH-Konzerne praktikabel; CCM organisch in bestehende Datadog-Implementierungen.
    caveats:
      - Datadog-Lizenz selbst ist signifikanter Kostenpunkt — Forecaster muss die eigene Datadog-Bill mitbedenken
      - "DACH-Datenresidency: EU-Site verfügbar, AVV prüfen"
      - Bits AI Hallucination-Risiko bei Tag-übergreifenden Aggregationen
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Container cost allocation granular to pod/task level
        - Unified cost visibility in same console as logs/traces
        - Bits AI surfaces unexpected cost shifts with context
      complaints:
        - Overall Datadog cost high; CCM adds to already expensive bill
        - Per-host/container pricing creates hidden scaling costs
        - Tool cost can exceed instance cost for small deployments
    sources:
      - id: docs-datadoghq-com-cloud-cost-management
      - id: datadoghq-com-blog-datadog-bits-generative-ai
  - id: kubecost-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Briefing-Treffer: kommerzielle OpenCost-Erweiterung mit Pre-Deploy-Forecast (Kubecost Predict), Multi-Cluster-Aggregation und Anomaly Detection. Self-hosted-Option ist in DACH ein echter Differentiator gegenüber reinen SaaS-Forecastern; Enterprise-Support nach IBM-Apptio-Akquisition."
    caveats:
      - IBM-Roadmap konsolidiert Kubecost in Cloudability-Suite — Standalone-Lizenzmodell auf Mittelfrist prüfen
      - "Self-hosted ist nicht 'kostenlos': Prometheus-Skala und Storage-Footprint kalkulieren"
      - Forecasting-Modul ist eher linear/heuristisch als 'echte' ML-Forecasts
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Granulare Allocation pro Namespace/Label/Team
        - Self-hosted-Option entschärft Datenschutzthemen
      complaints:
        - Forecasting-Genauigkeit bei stark variablen Workloads begrenzt
    sources:
      - id: blog-kubecost-com-blog-resource-cost-prediction
      - id: kubecost-com-kubernetes-cost-optimization-kubecost-vs-opencost
      - id: reddit-com-r-finops-comments-1njp8v4-multicloud-cost-optimization-at-scale-tools-that
  - id: perfectscale-io
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Autonomes K8s-Rightsizing mit Reliability-Fokus; in Reddit-Praxisvergleichen das bevorzugte Tool, wenn SLA-Risiko gleichgewichtet zu Cost ist. DoiT-Akquisition stärkt EMEA-Support und MSP-Pfad mit AVV.
    caveats:
      - MSP-Modell über DoiT kann Direkt-Procurement bei DACH-Konzernen verkomplizieren — IT-Einkauf prüfen
      - Forecasting-Komponente weniger explizit als bei StormForge
      - Kleinerer Cluster-Optimization-Footprint als CAST AI
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Bestes Reliability/Cost-Tradeoff in Reddit-Vergleichen
        - Adressiert SLA-Risiko durch Under-Provisioning
      complaints:
        - Kleinerer Cluster-Optimization-Footprint als CAST AI
    sources:
      - id: perfectscale-io
      - id: reddit-com-r-kubernetes-comments-1ht05vd-castai-vs-scaleops-vs-perfectscale
  - id: stormforge-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Patentierter ML-Forecast-Algorithmus für saisonale/verrauschte K8s-Workloads, harmoniert mit HPA und nutzt In-Place Pod Resizing (K8s 1.33). MCP-Support für Claude/Cursor seit April 2026; Cost-Allocation GA. Direkter Treffer für 'Ressourcenbedarf vorhersagen'.
    caveats:
      - Reiner K8s-Fokus — keine VM-/Lambda-/RDS-Forecasts
      - "CloudBolt-Konsolidierung prüfen: Pricing- und Support-Bedingungen können sich 2026/2027 verschieben"
      - Recommendations brauchen ~1 Woche Datenakkumulation bis verlässlich
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Beste ML-Basis im Vergleich zu VPA
        - Funktioniert sauber mit HPA und Karpenter zusammen
      complaints:
        - Weniger bekannt als CAST AI — kleinere Community
    sources:
      - id: stormforge-io-blog-machine-learning-improve-rightsizing-recommendations-noisy-seasonal-workloads
      - id: kube-fm-stormforge-announces-in-place-pod-resizing-and-cost-allocation-ga
      - id: reddit-com-r-kubernetes-comments-1ht05vd-castai-vs-scaleops-vs-perfectscale
  - id: densify-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Patentierte predictive ML-Analytics für VM/Container-Hybrid über AWS/Azure/GCP. Reife für klassische Enterprise-Käufer mit großem On-Prem-Anteil; ergänzt CAST AI im Hybrid-Segment.
    caveats:
      - Geringe Community-Aktivität — Risikofaktor für langfristige Roadmap
      - UI/UX gilt in Reviews als komplex
      - Geringe Sichtbarkeit in Cloud-Native-Communities
    practitioner_signal:
      volume: low
      tenor: mixed
    sources:
      - id: peerspot-com-products-comparisons-densify-vs-perfectscale
  - id: thoras-ai
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Air-Gapped-Installation und BYO-LLM sind für DACH-Datensouveränität bei sensitiven Workload-Profilen ein echtes Differenzierungsmerkmal. Interessant für Konzern-POC mit On-Prem-Constraint, aber Reife/Referenzen fehlen.
    caveats:
      - BYO-LLM-Pfad erfordert eigene LLM-Plattform — selten greifbar in DACH-Konzernen ohne AI-Plattform-Projekt
      - Skalierungs- und Multi-Tenant-Story unklar
      - Junges Produkt — wenig öffentliche Reviews / Reddit-Threads
    sources:
      - id: thoras-ai-products-ai-powered-cost-forecasting
  - id: bechtle-comsoft-de-service-trainings-finops-assessment
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because DACH-only White-Label-Angebot ohne globale Sichtbarkeit. Deutscher Bechtle-Comsoft-Betrieb der OptScale-Plattform mit Frankfurter RZ, DSGVO-konform, Anomalie-Erkennung und Forecasts — adressiert genau die im Briefing genannten Datensouveränitäts-Bedenken bei sensitiven Workload-Profilen.
    caveats:
      - OptScale-Funktionsumfang weniger AI-fortgeschritten als CAST AI/StormForge
      - Bechtle-Vendor-Lock-in für Support
      - Pricing über Bechtle-Vertrag — nicht selbst-Service
    sources:
      - id: bechtle-comsoft-de-service-trainings-finops-assessment
  - id: finout-io
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because Finout positioniert sich gezielt als Enterprise-FinOps und konkurriert primär mit Cloudability/CloudZero, nicht im 'AI Forecasting'-Marketing. MegaBill-Aggregation ohne Code/Agent, Forecasting plus Real-Time Commitment-Burndown — passt zu DACH-Großkunden mit Multi-Cloud-Komplexität.
    caveats:
      - US-/IL-SaaS — EU-Hosting/AVV explizit prüfen
      - AI-Forecasting-Story weniger zentral
      - Wenig DACH-Referenzen öffentlich
    sources:
      - id: finout-io
  - id: aws-amazon-com-q-developer
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Generativer AI-Assistent für AWS-Cost-Analyse mit Forecast-Fragen in NL, Slack/Teams-Integration. Im AWS-DPA und Enterprise-Agreement mitgedeckt — niedrigschwellige Erweiterung bestehender AWS-Workloads in DACH.
    caveats:
      - Free Tier nur 50 Queries/Monat; tiefere Nutzung erfordert Q Developer Pro ($19/User/Monat)
      - AWS-only — bei Multi-Cloud-Strategie nur partieller Abdeckungsgrad
      - Hallucination-Risiko bei komplexen Multi-Account-Forecasts — Quellen/VQL prüfen
      - Audit-Trail der Q-Antworten dokumentieren — sonst 'AI sagte X' ohne Beleg
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Beste AWS-Kontexttiefe unter allen AI-Assistenten (devtoolsreview.com)
        - Free-Tier für periodische FinOps-Reviews ausreichend
      complaints:
        - AWS Organizations-Pflicht für Pro-Tier schließt Individual-Developer aus
        - Außerhalb AWS deutlich schwächer als Cursor/Copilot
    sources:
      - id: aws-amazon-com-blogs-aws-cloud-financial-management-transforming-finops-with-the-latest-amazon-q-cost-capabilities
      - id: docs-aws-amazon-com-cost-management-latest-userguide-ce-q-overview-html
      - id: aws-amazon-com-blogs-aws-cloud-financial-management-introducing-ai-powered-cost-analysis-in-aws-cost-explorer
      - id: devtoolsreview-com-reviews-amazon-q-review
  - id: cloudzero-com-platform-ai-hub
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Engineering-fokussierte Cost-Intelligence mit Forecasting/Scenario-Modeling und AI-Workload-Allocation pro Modell/Inferenz. Adressiert DACH-Konzerne, die GenAI-Kosten in Capacity-Forecasts einpreisen müssen. Claude-Code-Plugin seit März 2026.
    caveats:
      - AI Hub erst März 2026 — keine unabhängigen Practitioner-Reviews auffindbar; alle Quellen vendor-seitig
      - US-SaaS ohne prominentes EU-Hosting — AVV/DSGVO zentral prüfen
      - Premium-Pricing kollidiert mit DACH-Kostendisziplin
      - Recommendations stützen sich auf Tagging-Qualität
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Unit cost analysis (cost per customer/feature) is C-suite language
        - Claude Code plugin shifts cost analysis left into engineering workflow
        - Scenario modeling + margin analysis for architecture decisions
      complaints:
        - US SaaS; data residency/DSGVO concerns in DACH
        - Premium pricing limits adoption in smaller teams
        - Cost forecasting consistently inaccurate by 30-40% per practitioners
    sources:
      - id: cloudzero-com-platform-ai-hub
      - id: cloudzero-com-blog-cloud-cost-management-tools
  - id: harness-io-continuous-efficiency
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Engineering-Plattform mit AI-Forecasting, Anomaly Detection, AutoStopping (idle Resources) und FinOps-AI-Assistant. Hierarchical Budgets passen zu Konzernstrukturen; sinnvoll vor allem bei bestehender Harness-CD-Investition.
    caveats:
      - Plattform-Lizenzkosten — selten standalone gekauft, ROI nur sinnvoll bei Suite-Nutzung
      - "DACH-Datenschutz: EU-Region/AVV prüfen"
      - Forecast-Genauigkeit primär regression-/anomaly-basiert
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - AutoStopping spart bis zu 70% auf Non-Production-Ressourcen (Gartner/G2)
        - Root-Cost-Analysis bis auf Container-Ebene in Minuten statt Tagen
      complaints:
        - Initiales Setup komplex; Lernkurve bei Onboarding
        - Enterprise-fokussiert — für kleine Teams überdimensioniert
    sources:
      - id: harness-io-products-cloud-cost
      - id: toolradar-com-tools-harness-ccm
      - id: gartner-com-reviews-product-harness-cloud-cost-management
  - id: ibm-com-products-turbonomic
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because Turbonomic ist als 'Application Resource Management' positioniert, nicht als 'AI Cost Forecaster' — Suite-Feature mit IBM-Vertriebskanal in DACH-Konzernen mit Hybrid-Stack (VMware + Public Cloud + K8s). Apptio-Cloudability-Integration konsolidiert Forecasting + Optimization.
    caveats:
      - Implementations-Aufwand ist hoch — Time-to-Value 6+ Monate realistisch (Gartner/TrustRadius bestätigt)
      - Lizenz-Modell oft an größere IBM-Suite gebunden
      - AI-Marketing weniger 'frisch' als bei Sedai/CAST AI
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - 25% Cloud-Cost-Reduktion durch proaktives Monitoring (TrustRadius-Practitioner)
        - Rightsizing-Automatisierung über Hybrid-Cloud mit DevOps-Team-Konsolidierung
      complaints:
        - Sehr teuer (~800 USD/VM für On-Prem-Lizenz laut Gartner-Reviewer)
        - Steile Lernkurve bei initialer Konfiguration
    sources:
      - id: ibm-com-products-turbonomic
      - id: ibm-com-new-announcements-operationalize-and-automate-finops-with-apptio-cloudability-and-ibm-turbonomic
      - id: gartner-com-reviews-market-cloud-management-tooling-vendor-ibm-product-ibm-turbonomic
      - id: trustradius-com-reviews-ibm-turbonomic-2024-03-26-13-37-12
  - id: learn-microsoft-com-en-us-azure-advisor-advisor-reference-cost-recommendations
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Likely missed by market scan because nativer Hyperscaler-Service, nicht als AI-Tool vermarktet. Azure-Native Cost-Forecasts und ML-Reservation-Empfehlungen sind im Microsoft-EA/MCA-DPA mitgedeckt; in EU-Region (Westeurope/Germany West Central) verfügbar — niedrigschwellige Baseline für DACH-Konzerne mit M365-/Azure-Vertrag.
    caveats:
      - Nur Azure — Multi-Cloud-Lücke
      - Forecast-Tiefe begrenzt gegenüber Spezialisten wie Cloudability; Business-Driver nicht integrierbar (cloudcostcutter.cloud)
      - Tagging-Qualität bestimmt Allocation-Tiefe; ohne sauberes Tagging kaum Mehrwert (r/FinOps)
      - Empfehlungen ohne Auto-Execution
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Im Azure-EA/MCA ohne Mehrkosten enthalten — kein zusätzlicher Vendor
        - Budget-Filtering nach Resource Group und Tag für Team-Allocation nützlich
      complaints:
        - ML-Forecast ohne Business-Driver-Input — bei Migrationen oder Wachstum unzuverlässig
        - Keine automatische Ressourcen-Abschaltung bei Budget-Überschreitung
    sources:
      - id: learn-microsoft-com-en-us-azure-advisor-advisor-reference-cost-recommendations
      - id: cloudcostcutter-cloud-article-cloud-cost-forecasting-budgeting-predict-control-spend-aws-azure-gcp
      - id: reddit-com-r-finops-comments-1re603r-who-are-the-real-top-players-in-the-finops-cloud
  - id: techdocs-broadcom-com-us-en-vmware-cis-vcf-vcf-9-0-and-later-9-0-cost-and-capacity-management-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Likely missed by market scan because VCF/Aria ist als Hybrid-Cloud-Management-Suite positioniert, nicht als AI-Cost-Forecaster. AI/ML-Capacity-Engine mit Change-Point-Detection, Regression und Cyclical-Analysis ist seit Jahren produktiv; in DACH-Konzernen mit großem VMware-Footprint de facto Default für VM-Capacity-Forecasts plus Cost-Management auch über AWS/Azure/GCP.
    caveats:
      - Broadcom-Lizenzpolitik nach VMware-Akquisition treibt Kosten und reduziert Edition-Auswahl (Gartner-Reviewer bestätigt)
      - Public-Cloud-Cost-Daten via CloudHealth-Adapter — separate Lizenz/Einkauf
      - AI-Marketing weniger 'frisch' als bei Cloud-Native-Spezialisten
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Cost-Engine-Mechanismen tief dokumentiert und konfigurierbar (brockpeterson.com)
        - CloudHealth-Integration liefert granulare Capacity-Planning-Daten (Gartner)
      complaints:
        - Preis/Leistung nach Broadcom-Akquisition negativ bewertet (Gartner-Reviewer)
        - Lernkurve bei Report-Erstellung; Memory-Metriken erfordern Agenten
    sources:
      - id: techdocs-broadcom-com-us-en-vmware-cis-vcf-vcf-9-0-and-later-9-0-cost-and-capacity-management-optimizing-capacity-and-improving-performance-capacity-optimization-concepts-how-does-vmware-aria-operations-calculate-and-forecast-capacity-html
      - id: brockpeterson-com-post-everything-you-wanted-to-know-about-vcf-operations-costing
      - id: gartner-com-reviews-product-vmware-aria-cost
  - id: aws-amazon-com-q-developer
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Amazon Q Developer's Cost Capabilities provide a generative AI assistant embedded directly in the AWS Console, Slack, and Teams that answers natural-language forecast questions such as 'How has my EC2 cost per hour trended over the last 3 months?'. The capability is distinct from the coding variant already in the Atlas and targets FinOps practitioners who need rapid capacity and cost forecasting without leaving their existing toolchain.
    caveats:
      - Free Tier capped at 25-50 queries/month; deeper usage requires Q Developer Pro
      - AWS-only — no multi-cloud or GCP support
      - LLM hallucination risk in complex multi-account forecasts — outputs should be verified against VQL/source data
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Native AWS integration eliminates data residency friction
        - Natural language queries lower barrier for non-specialists
        - Free tier sufficient for exploratory cost analysis
      complaints:
        - Free tier capped at 25-50 queries/month; scales cost quickly
        - AWS-only; no multi-cloud or GCP support
        - LLM hallucination risk in complex multi-account scenarios
    sources:
      - id: aws-amazon-com-blogs-aws-cloud-financial-management-transforming-finops-with-the-latest-amazon-q-cost-capabilities
      - id: docs-aws-amazon-com-cost-management-latest-userguide-ce-q-overview-html
start_here: "Einstieg mit CAST AI im Read-Only-Modus auf einem nicht-produktiven Cluster: Empfehlungen zwei Wochen sammeln und manuell gegen Monitoring-Daten validieren, bevor automatisches Rightsizing freigegeben wird. AWS-Teams aktivieren parallel Amazon Q Developer im Free Tier für natursprachliche Cost-Abfragen — ohne zusätzliche Vendor-Verträge."
caveats: ML-Forecasts versagen bei abruptem Traffic-Wachstum oder neuen Features und müssen laufend gegen aktuelle Workload-Profile geprüft werden. CAST AI hostet Telemetrie in US-Regionen — DACH-Konzerne mit harten Datensouveränitätsvorgaben müssen DSGVO-AVV und Architekturklärung vor dem POC abschließen.
sources: []
---
