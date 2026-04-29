---
stage: deployment-devops
order: 19
roles:
  - platform-devops-engineer
title: K8s-Auto-Remediation mit Approval-Gate
goal_label: AI investigiert + schlägt Fix vor + Mensch genehmigt vor Apply
suitability: conditional
rationale: Das Approval-Gate-Pattern — KI diagnostiziert, Mensch genehmigt, Automation führt aus — ist die DACH-Mitbestimmungs-konforme Variante zwischen passivem Monitoring und vollautonomem Self-Healing, und mit PagerDuty Automation Actions sowie Robusta/HolmesGPT produktiv verfügbar. Beide liefern eingebauten Audit-Trail und EU-taugliche Deployment-Optionen.
tools:
  - id: github-com-jordigilh-kubernaut
    fit: good_fit
    enterprise_readiness: evaluation_only
    confidence: high
    why_it_fits: "Architektonisch das reinste Briefing-Pattern: Alertmanager -> HolmesGPT -> Workflow-Katalog -> Tekton/Ansible-Execution mit RemediationApprovalRequest CRD und Rego-Policy fuer produktive Workloads. SOC2-Audit-Trail eingebaut, Open Source und self-hostable - DACH-tauglich. Fuer Produktion ohne Konzern-Backing aber zu jung."
    caveats:
      - Solo-Maintainer-OSS, ~15 GitHub-Stars - kein kommerzieller Support, kein Bus-Factor
      - Komplexer Stack (CRD-Controller, Tekton, Ansible AWX, Prometheus) - hohe Setup-Huerde
      - Workflow-Katalog muss selbst gepflegt werden - Briefing-Caveat exakt zutreffend
      - Solo-Maintainer-Risiko (jordigilh) - kein Konzern-Backing, keine SLAs
      - Roadmap erwaehnt 'Operator OLM-packaged' und 'Inter-pod TLS' - klingt nach noch nicht produktiv
      - Junges Projekt (~15 GitHub-Stars), wenig oeffentliche Produktiv-Referenzen
      - Workflow-Katalog muss selbst gepflegt werden - genau die im Briefing genannte Falle
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Approval-Gate-Pattern als 'genau das, was DACH braucht'
      complaints:
        - zu jung fuer Produktion ohne Eigen-Engineering
    sources:
      - id: github-com-jordigilh-kubernaut
      - id: github-com-jordigilh-kubernaut-issues-601
      - id: news-ycombinator-com-item-id-47578618
  - id: pagerduty-com-platform-automation-actions
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Action Runner im Kunden-VPC plus responder-getriggertes Slack-Approval plus eingebauter Audit-Trail ist enterprise-grade. PagerDuty hat publizierte DPA, EU-Hosting und kommuniziert oeffentlich 'deliberate' Autonomie-Grenzen - DACH-Mitbestimmungs-tauglich. Diagnose-Tiefe geringer als reine LLM-Tools, dafuer reif.
    caveats:
      - AI-Komponente ist Alert-Korrelation, nicht LLM-RCA - Briefing-Erwartung 'AI investigiert' nur teilweise erfuellt
      - EU-Datenresidenz muss aktiv gewaehlt werden, nicht Default
      - Automation Actions sind kostenpflichtiges Add-On - TCO realistisch kalkulieren
      - AI-Komponente ist eher Alert-Korrelation als LLM-RCA - das passt zum Use-Case, aber nicht zur Erwartung 'AI investigiert' aus dem Briefing
      - EU-Datenresidenz-Tier (Frankfurt) muss fuer Enterprise-Lizenz aktiv gewaehlt werden, nicht Default
      - AI-Komponente eher Alert-Korrelation als LLM-RCA - reine Diagnose-Tiefe geringer als Klaudia/HolmesGPT
      - Automation Actions als kostenpflichtiges Add-On (Business/Enterprise)
      - Runbook-Katalog muss organisationsweit kuratiert werden - Briefing-Caveat exakt zutreffend
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Action Runner executes in customer VPC; credentials stay on-prem
        - Responder-triggered Slack/app actions keep humans in control
        - Effective alert notification with audit trail
      complaints:
        - Alert frequency and timing significantly impact on-call engineer morale
        - Integration complexity requires substantial engineering effort to customize
        - AI component is alert correlation, not deep RCA like Klaudia/HolmesGPT
        - Runbook catalog curation is ongoing organizational burden
        - AIOps features require Business/Enterprise license tier (additional cost)
    sources:
      - id: pagerduty-com-platform-automation-actions
      - id: devpost-com-software-chronos-ipxuq5
  - id: robusta-dev
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Konkrete Remediation-Actions als YAML-Playbooks plus HolmesGPT (CNCF Sandbox) als Diagnose-Engine; reale Praxis-Belegung im CNCF-Blog. OSS-Variante self-hostable mit lokalen LLM-Backends - DACH-tauglich. Approval-Gate ist nicht out-of-the-box, aber baubar.
    caveats:
      - "Approval-Gate als Custom-Playbook bauen (CNCF-Bericht: ~200 Zeilen Python)"
      - HolmesGPT noch CNCF-Sandbox - API-Aenderungen moeglich
      - Robusta Inc. ist US-Vendor - bei SaaS-Modus DPA pruefen, OSS-Modus umgeht das
      - Robusta Inc. ist US-Vendor - bei SaaS-Variante DPA pruefen, OSS-Variante umgeht das
      - "Glue-Code-Aufwand (CNCF-Bericht: ~200 Zeilen Python) bedeutet: kein Out-of-the-Box-Approval-UI, sondern Engineering-Projekt"
      - Approval-Gate ist nicht out-of-the-box - muss als Custom Playbook gebaut werden
      - "Glue-Code-Aufwand real (CNCF-Bericht: 200 Zeilen Python fuer Dedup/Routing/Threading)"
      - HolmesGPT ist CNCF Sandbox - noch keine Graduation, API-Aenderungen moeglich
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - ReAct + Runbooks reduziert Wasted Tool Calls von 16 auf 2
        - 40% der Investigations selbst-loesen
      complaints:
        - Glue-Code unvermeidlich
        - Slack-Threading muss selbst gebaut werden
    sources:
      - id: docs-robusta-dev-improve-holmes-docs-playbook-reference-actions-remediation-html
      - id: cncf-io-blog-2026-04-21-auto-diagnosing-kubernetes-alerts-with-holmesgpt-and-cncf-tools
  - id: docs-edgedelta-com-aiops
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Ask-Permission-Pattern fuer Write-Ops und Confidence-basiertes Routing sind enterprise-relevant; native PagerDuty/Slack/GitHub-Integration. Plattform-Schwerpunkt Observability bedeutet aber Setup-Komplexitaet und Connector-Abhaengigkeit.
    caveats:
      - EU-Hosting muss aktiv gewaehlt werden
      - Setup-Komplexitaet hoch - Connector-Tiefe entscheidet ueber Wert
      - AIOps-Plattform-Charakter, nicht reines K8s-Tool
      - EU-Hosting muss aktiv gewaehlt werden - SaaS-Default unklar
      - Schwerpunkt Observability/Telemetry-Pipeline - K8s-Remediation eher Output-Connector
      - Eher AIOps-Plattform als reines K8s-Tool
      - Connector-Tiefe entscheidet ueber Wert - Setup-Komplexitaet hoch
    sources:
      - id: docs-edgedelta-com-ai-team-pagerduty-incident-response
  - id: purko-io
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Agents als K8s-CRDs (kubectl apply, GitOps, RBAC) plus Shu-Ha-Ri-Stufenmodell mit explizitem Approval-Default fuer Stufe 1 - konzeptionell sauber. Apache-2.0-Core ist DACH-tauglich, BSL fuer Enterprise-Features ist Lizenz-Komplexitaet.
    caveats:
      - Sehr junges Vendor-Profil - kaum Praxis-Material
      - Enterprise-Features unter BSL-Lizenz - Konvertierung zu Apache-2.0 nach 36 Monaten
      - Framework-Charakter mehr als fertiges Tool
      - Enterprise-Features unter BSL-Lizenz (Konvertierung zu Apache-2.0 nach 36 Monaten) - Lizenz-Komplexitaet
      - Wenig oeffentliche Praxis-Berichte
      - Sehr junges Vendor-Profil - kaum Praktiker-Material
      - Konzept (Shu-Ha-Ri) ist konsistent, Reife unklar
      - Eher Framework-Charakter als fertiges Tool
    sources:
      - id: purko-io
  - id: rootly-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Workflow-Engine mit Slack-Confirm-Step und AI-Recommendations - klassischer Incident-Response-Use-Case mit GenAI-Aufsatz. Approval als Workflow-Logik baubar; SaaS bedeutet aber DACH-DPA-Pruefung.
    caveats:
      - Approval-Step ist Workflow-Konfiguration, nicht Default - Mitbestimmungs-relevant
      - Webhook/Shell-Steps statt nativem K8s-Operator
      - EU-Hosting/DPA-Status aktiv klaeren
      - Webhook/Shell-Steps in Produktion bedeuten generischen Action-Pfad ohne K8s-spezifische Guardrails
      - K8s-Remediation laeuft ueber generische Shell/Webhook-Steps - kein nativer K8s-Operator
      - AI-Recommendation ist Add-On zur Workflow-Engine, kein voller Investigations-Agent
      - Approval-Step muss als Workflow-Logik konfiguriert werden, kein Default
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - AI integrated from day one, handles repetitive tasks well
        - Maps contributing factors carefully instead of premature RCA guessing
        - "Strong integrations: Datadog, GitHub, Jira pull richer context"
        - Teams successfully migrate from PagerDuty, prefer full incident lifecycle
      complaints:
        - Automated RCA still not GA—'release accurate over sounds smart' philosophy
        - Requires mature runbooks; most teams lack structured runbook catalog
        - Pricing model scales with team/incidents; unclear fixed costs
    sources:
      - id: rootly-com-sre-rootly-automated-remediation-with-iac-kubernetes
  - id: akmatori-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: 100% self-hosted, air-gapped mit lokalen LLMs (Ollama oder OpenAI-kompatible Endpoints), keine Telemetry - DACH-Datenresidenz erfuellbar. Multi-Agent-Investigation mit Slack/PagerDuty-Routing. Likely missed by market scan because Akmatori ist als Open-Source-AI-Incident-Tool positioniert, nicht spezifisch als 'Kubernetes approval gate' - rutscht durch das Capability-Filter.
    caveats:
      - Marketing-Pitch ist 'resolve 80% without human intervention' - das ist das Anti-Pattern; Approval-Modus muss explizit konfiguriert sein
      - Junges Projekt - kein Konzern-Backing, keine SLAs
      - Reife des Approval-Gate-Modus in der Doku schwach belegt
    sources:
      - id: akmatori-com
  - id: klarsicht-dev
    fit: partial
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Explizit FINMA/BaFin/GDPR-positioniert, On-Prem mit Ollama/vLLM/IBM watsonx fuer voll air-gapped Setups - genau die DACH-regulierte-Industrien-Variante. Fix-Schritte mit kubectl-Commands werden geliefert, aber Apply ist heute Mensch-getrieben (Diagnose-Kante). Likely missed by market scan because Klarsicht ist DACH-only Player ohne grosse internationale Sichtbarkeit.
    caveats:
      - Kein Apply-Pfad heute - Approval-Gate ist trivial (kein Gate, weil keine Mutation); fuer den vollen Use-Case nicht ausreichend
      - Junges Vendor-Profil - keine sichtbaren Konzern-Referenzen
      - ArgoCD/Loki/Tempo als 'coming soon' - Multi-Stack-Coverage noch unvollstaendig
    sources:
      - id: klarsicht-dev
  - id: duplocloud-com-blog-ai-devops-engineers
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Self-hosted-Modus + Bedrock-im-eigenen-Account + SOC2/HIPAA + konkret beschriebener Approval-Workflow ist enterprise-tauglich. Klare Kennzahlen (45 Min auf 5 Min) wirken plausibel; G2-Review-Volumen (38 Reviews, 4.7/5) und 40 externe AWS-Marketplace-Reviews validieren die Plattform-Reife unabhaengig. DACH-Risiko ist Plattform-Lock-in, was unabhaengige PeerSpot-Stimme explizit anmerkt.
    caveats:
      - "Plattform-Lock-In: DuploCloud DevOps-Plattform als Voraussetzung - PeerSpot-Reviewer monieren genau das"
      - Vendor-eigene Vergleichstabelle nicht unabhaengig validiert
      - K8s-Agent ist Teil der Plattform, kein Standalone
      - K8s-Agent als neues AI-Feature - die G2/AWS-Reviews betreffen die Plattform insgesamt, nicht spezifisch den AI-Agent
      - Lock-in in DuploCloud-Stack
      - EU/DACH-Datenresidenz muss bei AWS Bedrock aktiv konfiguriert werden
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - G2 4.7/5 ueber 38 Reviews - solide Plattform-Reife
        - Compliance-Out-of-the-Box (SOC2/HIPAA) wird in G2-Reviews mehrfach gelobt
      complaints:
        - PeerSpot-Reviewer kritisiert Vendor-Lock-in und 'buggy portal'
        - AI-Agent als juengster Feature-Layer - Reife in Produktion noch wenig belegt
    sources:
      - id: duplocloud-com-blog-ai-devops-engineers
      - id: aws-amazon-com-marketplace-pp-prodview-uowrcsctalexi
      - id: itcentralstation-com-products-duplocloud-reviews
  - id: github-com-brngg-herald
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Doppeltes Approval-Gate (Investigation + Execution) ist architektonisch das reinste Briefing-Pattern; Pre-Check/Execute/Post-Check + DecisionTrace fuer Audit. Als Referenz-Architektur fuer Eigenbau wertvoll. Downgrade von good_fit auf conditional, weil keine unabhaengige nicht-Vendor-Quelle existiert (Solo-Maintainer-OSS, keine Praktiker-Berichte, keine Community-Diskussion); fuer Konzern-Produktion ist es heute Eigen-Engineering-Vorlage, kein Tool.
    caveats:
      - Solo-Maintainer-OSS - kein Bus-Factor, kein Support
      - Schmaler Funktionsumfang vs. Kubernaut/Robusta
      - Eher Referenz-Pattern als produktives Tool
      - Solo-Maintainer-Risiko - kein Bus-Factor
      - Sehr junges Open-Source-Projekt - eher Referenz-Architektur als Produktiv-Tool
      - Kein kommerzieller Support, Solo-Maintainer-Risiko
      - Keine unabhaengige Sichtbarkeit (kein Blog, kein Reddit, kein HN, keine Konferenz) - Bewertung ruht ausschliesslich auf der Vendor-eigenen README
    sources:
      - id: github-com-brngg-herald
  - id: opsmx-com-ai-kubernetes-remediation-agent
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Policy-Driven Approval-Workflow, Verification-Framework und vollstaendiger Audit-Trail (Signal->Analyse->Approval->Execution->Rollback) ist genau das Briefing-Pattern. OpsMx hat Argo-CD/Spinnaker-Track-Record und nennbare Enterprise-Referenzen (Cisco, Symphony, Indeed). Downgrade von good_fit auf conditional, weil unabhaengige Praxis-Belege spezifisch fuer den K8s Remediation Agent fehlen - der Agent ist neueres Produkt, FitGap/PeerSpot-Material existiert nur fuer das aeltere Spinnaker-Produkt.
    caveats:
      - Wenig unabhaengige Praktiker-Reviews - vor allem Vendor-Material
      - Pricing-Transparenz gering - Friction in DACH-Procurement
      - Argo-CD/Spinnaker-Kontext bedeutet Vorbedingungs-Stack-Match
      - Pricing-Transparenz gering - in DACH-Procurement ein Reibungspunkt
      - OpsMx historisch Argo-CD-/Spinnaker-fokussiert - K8s-Agent ist neueres Produkt
      - PeerSpot zaehlt 0 Reviews fuer OpsMx Enterprise for Spinnaker - Mindshare-Signal niedrig, der K8s-Agent ist noch unsichtbarer
      - Enterprise-Pricing-Transparenz gering
      - Unabhaengige Quellen (FitGap) decken nur den Spinnaker-Mutterprodukt-Kontext ab, nicht den Remediation-Agent selbst
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: opsmx-com-ai-kubernetes-remediation-agent
      - id: us-fitgap-com-products-opsmx-enterprise-for-spinnaker
  - id: mogenius-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Deutscher Vendor mit DACH-Referenzen (REWE digital, Schwaebisch Media, TEAM23 - durch CB Insights unabhaengig bestaetigt), MIT-lizenzierter Open-Source-Operator und expliziter DACH-Datensouveraenitaets-Positionierung. Sitzt in der Execution-Path zwischen AI-Agents und Cluster - praeventive Enforcement statt nachtraeglicher Beobachtung; HITL-Approval-Gates fuer high-consequence Operations. Likely missed by market scan because mogenius positioniert sich primaer als 'Kubernetes Platform mit AI-Governance' und nicht als 'AI auto-remediation tool', faellt also durch capability-only Suchen.
    caveats:
      - Plattform-Ansatz (nicht reines Remediation-Tool) - Scope-Match zum Use-Case nicht 1:1
      - AI-Agent-Governance-Layer ist neueres Feature - Reife in Produktion zu validieren
      - Marketing fokussiert Self-Service mehr als Incident-Healing - Use-Case-Pfad muss explizit gebaut werden
      - AI Insights ist Beta - Remediation-Workflows als 'future release' angekuendigt, heute primaer RCA
    sources:
      - id: mogenius-info
      - id: cbinsights-com-company-mogenius-customers
  - id: skyflo-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Approval-Gate-by-Design: jede mutierende Tool-Aktion pausiert auf Engine-Ebene, 'not configurable off'. Plan->Approve->Execute->Verify mit MCP-typed-Tools (22 Kubernetes, 16 Helm, 13 Argo Rollouts). Apache-2.0, in-cluster, BYO-LLM (auch self-hosted) - DACH-Datenresidenz erfuellbar. 105 GitHub-Stars und 20 Contributors als schwacher Community-Signal. Downgrade von good_fit auf conditional, weil keine unabhaengige Praktiker- oder Drittanbieter-Stimme existiert; das Tool ist Q1/2025-Launch, alle Belege stammen vom Vendor selbst."
    caveats:
      - Junges Projekt (2025 Open-Source-Launch) - Reife noch zu validieren
      - Team-Edition (RBAC, SSO, AI Alerting) als kommerzielle Schicht - Lizenz/Pricing pruefen
      - Approval-Workflow ist generisch - Confidence-basiertes Routing wie bei Edge Delta nicht im Default
      - Engine/API unter BUSL 1.1 - nur die Tool-Wrapper unter Apache-2.0; Lizenz-Komplexitaet bei Enterprise-Eigenbetrieb
      - Keine unabhaengigen Praxis-Berichte oder Konzern-Referenzen - alle Quellen Vendor-eigen
      - Confidence high in der Vor-Bewertung wirkt zu optimistisch - Architektur ist sauber, Adoption-Belege fehlen aber
    sources:
      - id: skyflo-ai
      - id: github-com-skyflo-ai-skyflo
start_here: Teams mit bestehender PagerDuty-Lizenz aktivieren Automation Actions auf einem Dev-Cluster mit drei kuratierten Runbooks (Pod-OOM-Restart, Image-Pull-Backoff, PVC-Erweiterung) und Slack-Approval-Gate als 4-Wochen-Pilot. Wer ohne PagerDuty startet, setzt Robusta/HolmesGPT self-hosted ein — das Approval-Gate muss als Custom-Playbook gebaut werden, ist aber mit überschaubarem Engineering-Aufwand realisierbar.
caveats: Der Runbook-Katalog muss kuratiert und laufend gepflegt werden — ohne enge Scope-Begrenzung rät die KI ins Blaue. Das Approval-Gate verfehlt seinen Zweck, wenn Approver nicht verstehen, was sie freigeben; ein vollständiger Audit-Log jeder Aktion ist daher Voraussetzung, keine Option.
sources: []
---
