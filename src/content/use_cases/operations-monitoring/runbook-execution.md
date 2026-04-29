---
stage: operations-monitoring
order: 12
roles:
  - software-engineer
  - platform-devops-engineer
title: AI-gestützte Runbook-Ausführung
goal_label: Runbook-Schritte vorschlagen, nicht autonom ausführen
suitability: conditional
rationale: PagerDuty Runbook Automation mit Self-Hosted Runner und ServiceNow Now Assist (ab Yokohama GA) liefern erstmals enterprise-taugliche Suggest-Muster, die Human-Oversight-Anforderungen nach EU AI Act Art. 14 by design erfüllen. Der Suggest-Modus — KI schlägt den nächsten Runbook-Schritt vor, Mensch bestätigt — ist im DACH-Kontext der einzige regulatorisch belastbare Einstieg in KI-gestützte Incident-Reaktion.
tools:
  - id: holmesgpt-dev
    fit: good_fit
    enterprise_readiness: evaluation_only
    confidence: high
    why_it_fits: Apache 2.0, Self-Hosted, Bring-your-own-LLM (auch Ollama lokal oder Azure OpenAI EU) — die einzige Kombination, die Datensouveränität bei DAX-Konzernen ohne Drittland-Transfer erfüllt. ReAct-Pattern mit fetch_runbook lädt Markdown-Runbooks und akzeptiert Negativ-Constraints — passt zu auditierbaren Suggest-Workflows.
    caveats:
      - CNCF Sandbox ist die unterste Reifestufe — kein SLA, kein Vendor-Patch-Pfad
      - Audit-/Approval-Layer muss selbst gebaut werden
      - Skalierungs-Operations-Last bei DAX-Setup nicht zu unterschätzen
      - CNCF Sandbox ist die unterste Reifestufe — kein SLA, kein vendor-getragener Patch-Pfad
      - "Microsoft als Contributor: Trademark-/Lizenzfragen sind klar, aber Roadmap-Kontrolle nicht beim Kunden"
      - Selbstbetrieb plus Tooling-Investment nötig
      - MCP-Remediation läuft noch unter 'apply fixes' — Auto-Execute riskant
      - Skalierungs-/Audit-Funktionen wesentlich dünner als kommerziell
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Echtes Open Source mit produktivem CNCF-Einsatz
        - Bring-Your-Own-LLM, Self-Hosted für DACH passend
      complaints:
        - Setup nicht trivial
        - Audit-/Approval-Workflow muss selbst gebaut werden
    sources:
      - id: github-com-robusta-dev-holmesgpt
      - id: cncf-io-blog-2026-04-21-auto-diagnosing-kubernetes-alerts-with-holmesgpt-and-cncf-tools
  - id: incident-io-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Beste Slack-native Incident-Plattform mit AI-SRE-Agenten für RCA und Fix-PR-Drafting. Für DACH-Tech-Unternehmen mit Slack-Stack und ohne harte BaFin-Auflagen ein realistischer Pilot-Kandidat im Suggest-Modus.
    caveats:
      - Slack-zentrisch — bei Microsoft-Teams-dominierten Großbanken/Versicherern K.O.
      - AI SRE in Early Access, 80%-Claim ist Vendor-Marketing
      - Kein dokumentiertes EU-Hosting; UK-Entität nach Brexit AVV-komplex
      - Kein dokumentiertes EU-Datacenter — AVV läuft über UK-Entität, post-Brexit komplex
      - Microsoft-Teams-Integration laut Vendor-Roadmap, aber nicht GA
      - Praktiker beschreiben 'communication automation, not system automation' — das eigentliche Runbook-Execution passiert ausserhalb
      - AI SRE in Early Access; nicht für jeden Tenant freigeschaltet
      - Slack-zentriert — wenig Microsoft-Teams-Funktion in DACH-Enterprises
      - Automatisierung primär kommunikativ; tatsächliche Remediation hängt an externer Infra
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Beste Slack-Integration im Markt
        - Konsolidiert PagerDuty/Slack/Confluence in einem Tool
      complaints:
        - Mehr Communication-Automation als System-Action
        - AI SRE noch Early Access, nicht GA für alle
    sources:
      - id: incident-io-blog-incident-io-vs-firehydrant
      - id: reddit-com-r-sre-comments-1o2v2oa-ai-in-sre-is-everywhere-but-most-of-its-still
      - id: reddit-com-r-sre-comments-1k8j7g8-incident-management-tools
  - id: komodor-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Klaudia indexiert die organisations-eigenen Confluence/Notion/Wiki-Runbooks und mappt sie auf K8s-Incidents — adressiert das Briefing-Risiko 'Runbooks veralten' direkt durch Anbindung an die Quelle der Wahrheit. Gartner 2026 Market Guide for AI SRE Tooling listet Komodor als Representative Vendor.
    caveats:
      - Ausschließlich Kubernetes — Lücke bei DACH-Konzernen mit großem VM-/Mainframe-Bestand
      - AVV/Subprocessor-Liste sollte bei Procurement geprüft werden
      - 95%-Accuracy-Claim ist Vendor-Marketing
      - EU-Hosting auf AWS Frankfurt verfügbar, aber AVV/Subprocessor-Liste sollte bei Procurement geprüft werden
      - 95%-Accuracy-Claim ist Vendor-Marketing, nicht unabhängig gemessen
      - Ausschließlich auf Kubernetes/Cloud-Native fokussiert
      - Vendor-Claim '95 % accuracy' nicht unabhängig validiert
      - Knowledge-Base-Integration verlangt saubere Runbook-Quellen
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Saubere RCA für K8s-Misconfigurations
        - Hilft Nicht-K8s-Erfahrenen beim Troubleshooting
    sources:
      - id: komodor-com-blog-contextualizing-ai-sre-how-klaudia-leverages-organizational-knowledge
      - id: helpnetsecurity-com-2026-03-19-komodor-klaudia-ai-extensibility-framework
      - id: komodor-com-platform-how-it-works
  - id: pagerduty-com-platform-automation-runbook-automation
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Self-Hosted Runbook Runners hinter der Kunden-Firewall, klare Trennung Diagnostics vs. Remediation, AI-Anteil bewusst begrenzt auf Job-Authoring (kein Live-Reasoning) — das ist genau das Profil, das BaFin/BSI-Auslagerungs-Reviews ohne Diskussion durchgewunken bekommen. Push-to-Button-Pattern erfüllt AI-Act-Art-14-Oversight by design.
    caveats:
      - Deutsche Lokalisierung der UI/Doku unvollständig
      - AVV läuft über PagerDuty Inc. plus EU-SCCs — kein deutsches Tochterunternehmen für Vertragsabschluss
      - AI-Generated-Runbooks-Beta nur Authoring, nicht Live-Suggestion — Erwartungs-Management nötig
      - Deutsche Lokalisierung der UI/Doku unvollständig — Procurement bei Versicherern und öffentlicher Hand kann darauf bestehen
      - PagerDuty hat kein deutsches Tochterunternehmen mit eigenem AVV-Set; AVV läuft über PagerDuty Inc. plus EU-SCCs
      - AI-Generated Runbooks sind primär Job-Authoring, kein Live-Incident-Reasoning
      - Enterprise-Lizenz nötig; Self-Hosted Runner für regulierte Umgebungen verfügbar
      - Automation Actions selbst sind klassische Automation, kein LLM-Agent
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Reife Plattform, Self-Hosted für regulierte Umgebungen
        - Klare Trennung Diagnostics vs. Remediation Actions
      complaints:
        - AI-Anteil bislang nur Job-Authoring, kein Live-Reasoning
        - Komplex zu betreiben, Lizenzkosten hoch
    sources:
      - id: docs-rundeck-com-docs-manual-jobs-ai-generated-runbooks-html
      - id: docs-pagerduty-com-docs-automation-actions
      - id: pagerduty-com-de-platform-automation-process-software
      - id: reddit-com-r-sre-comments-1o2v2oa-ai-in-sre-is-everywhere-but-most-of-its-still
  - id: rootly-com-ai-sre
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Doku stellt explizit klar, dass Rootly AI keine Aktionen autonom ausführt — exakt der vom Briefing geforderte Suggest-Modus, mit Slack-One-Click-Approval. SOC 2 seit Januar 2022. Für DACH-Pilot in unkritischen Domänen geeignet.
    caveats:
      - Slack-zentrisch — schließt Microsoft-Teams-Kunden aus
      - EU-Datenresidenz nicht öffentlich dokumentiert
      - Vendor-Mitarbeiter in Reddit-Threads sehr präsent (Astroturf-Verdacht)
      - Reddit-Praktiker erwähnen Rootly-Mitarbeiter-Astroturfing, externe Reviews schwer zu finden
      - EU-Datenresidenz nicht öffentlich dokumentiert — Procurement-Frage offen
      - Auto-Execution ist zwar Opt-In, lässt sich aber kunden-konfiguriert aktivieren — Audit-Policy nötig
      - AI SRE ist kuratiert — gestaffeltes Onboarding, kein Self-Service
      - RCA-Marketing-Zahlen (91 % schneller) ohne unabhängiges Benchmark
      - Auto-Execution nur, wenn Workflow vom Kunden so konfiguriert wird
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - AI fokussiert Contributing Factors, nicht voreilige RCA
        - GitHub/Datadog/Jira-Integrationen sinnvoll bestückt
      complaints:
        - Vendor-Mitarbeiter sehr präsent in Reddit-Threads (Astroturf-Verdacht)
        - Vieles ist Summarization, nicht echtes Action-Taking
    sources:
      - id: docs-rootly-com-ai
      - id: rootly-com-sre-rootlys-ai-runbooks-faster-incident-response-for-sres
      - id: reddit-com-r-sre-comments-1k8x5mc-anyone-here-using-ai-rca-tools-like-incidentio-or
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Service-Catalog-getriebene Runbook-Workflows mit AI-Copilot, der laufende Incidents gegen historische Vorfälle vergleicht. Robuste Customization, aber AI-Anteil hinkt incident.io/Rootly hinterher.
    caveats:
      - Keine EU-Region dokumentiert (AWS us-east)
      - Service-Catalog-Pflege ist Voraussetzung
      - Runbook-Definition manuell — kein generativer Author
      - Keine EU-Region dokumentiert; Hosting auf AWS us-east
      - Service-Catalog-Pflege ist Voraussetzung, sonst sind die Suggestions wertlos
      - AI-Anteil bislang weniger investigativ als incident.io/Rootly
      - Web-first UI; Slack-Funktion eingeschränkter
      - Runbook-Definition manuell — kein generativer Runbook-Author
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Service-Catalog liefert echte Ownership-Kontextualisierung
        - Robuste Runbook-Engine mit Customization
      complaints:
        - AI-Capabilities hinken incident.io/Rootly hinterher
        - Web-first UI bremst Slack-getriebene Teams
    sources:
      - id: docs-firehydrant-com-docs-ai-powered-incident-management
      - id: reddit-com-r-sre-comments-1k8j7g8-incident-management-tools
  - id: ibm-com-products-cloud-pak-for-aiops
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: On-Prem-Deployment via OpenShift erlaubt vollständige Datenresidenz und ist im DACH-Banken-/Public-Sector-Procurement gesetzt. Granite-LLMs gelten als auditierbar (Modellkarten, Trainingsdaten dokumentiert) — relevant für Modellrisiko-Management nach SR 11-7 und EU AI Act. Instana-Topologie liefert die Erdung, die LLM-Halluzinationen reduziert.
    caveats:
      - OpenShift-Plattform-Voraussetzung erzeugt erheblichen TCO-Anteil
      - Mehrfaches Produkt-Renaming (Watson AIOps ↔ AIOps Insights ↔ Concert) verunsichert Investitions-Sponsoren
      - Auto-Remediation-Pfad braucht klare ITIL-Change-Anbindung (CAB-Approval)
      - Schwergewichtige OpenShift-Plattform-Voraussetzung — TCO oft unterschätzt
      - "Roadmap-Kontinuität: Mehrfach-Renaming der Suite verunsichert Sponsoren in Investitions-Boards"
      - Implementierung schwergewichtig (OpenShift-zentriert)
      - Produktportfolio stark im Fluss — Watson AIOps ↔ AIOps Insights ↔ Instana Naming wechselt
      - Auto-Remediation-Pfad braucht klare ITIL-Change-Anbindung
    sources:
      - id: community-ibm-com-community-user-blogs-arthur-de-magalhaes-2024-11-19-instana-and-rna
      - id: research-ibm-com-blog-ai-infuses-aiops-insights
  - id: resolve-io
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Etablierter Automation-Orchestrator mit echten DACH-Telco-Referenzen, pre-built Runbooks und Approval-Gates. Positioniert sich bewusst als 'Layer zwischen AIOps-Signal und Action' — moderater LLM-Anteil ist im DACH-Compliance-Kontext eher Feature als Bug.
    caveats:
      - Klassischer Enterprise-Sales-Cycle (6-12 Monate) — kein schneller Pilot
      - Geringere LLM-Tiefe als reine AI-SRE-Startups
      - Markenverwechslung mit resolve.ai stiftet im Procurement Verwirrung
      - Eher 'AIOps-Action-Layer' als 'AI-Runbook-Suggestion' — Erwartungs-Management nötig
      - Geringere LLM-Tiefe als bei reinen AI-SRE-Startups
      - Klassische Enterprise-Sales/-Implementierung
      - Markenverwechslung mit resolve.ai stiftet Verwirrung
    sources:
      - id: resolve-io-blog-practical-guide-automating-incident-response-with-aiops
  - id: splunk-com-en-us-products-splunk-soar-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Klassische SOAR-Plattform mit Playbook-Engine, jetzt unter Cisco-Ownership mit FRA-Hosting und etabliertem DACH-Procurement-Pfad. AI Assist generiert Playbook-Vorschläge aus Natural Language. Likely missed by market scan because Splunk SOAR wird als Security-Tool kategorisiert, nicht als SRE-Runbook-Plattform — Pattern und Engine sind aber 1:1 übertragbar und Cisco hat viel Transposit-IP integriert.
    caveats:
      - Primärer Fit ist SecOps, nicht SRE — Procurement-Story braucht Erklärung
      - Lizenzkosten signifikant; nur sinnvoll wenn Splunk ohnehin im Stack
      - Cisco-Akquise 2024 — Roadmap-Klarheit für Splunk SOAR vs. Cisco XDR noch im Fluss
    sources:
      - id: splunk-com-en-us-products-splunk-soar-html
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Österreichisches Unternehmen mit FRA-Tenant, BSI-C5-Testat und starker DACH-Installed-Base bei Banken, Versicherern und OEMs. Davis CoPilot liefert NL-Summaries und leitet Remediation-Steps aus Causal-AI-Analyse ab; eigentliche Ausführung läuft über separat konfigurierte Workflows. Für bestehende Dynatrace-Kunden mit reifen Workflow-Automatisierungen ist CoPilot ein sinnvoller Suggest-Overlay — ohne tiefe Workflow-Investition ist der Runbook-Execution-Nutzen begrenzt.
    caveats:
      - Davis-CoPilot-GenAI-Teile nutzen Azure OpenAI EU-Region — vertraglich explizit bestätigen lassen
      - Workflow-Auto-Trigger ohne Approval-Gates kollidiert mit ITIL-CAB und BaFin-Change-Anforderungen
      - Volle Wirksamkeit nur mit flächendeckendem Dynatrace-OneAgent-Deployment
      - Davis CoPilot Generative-Teile nutzen Azure OpenAI EU-Region — sollte vertraglich bestätigt werden
      - Volle Stärke nur mit Dynatrace OneAgent flächendeckend — 'AI suggestion' ohne saubere Topologie produziert Halluzinationen
      - Workflow-Auto-Trigger braucht klare Approval-Policies, sonst Konflikt mit ITIL-Change-Management
      - Volle Stärke nur mit Dynatrace-Stack (Vendor-Lock-in)
      - GenAI-Antworten halluzinieren bei sparsamer Telemetrie
      - "Praktiker (Dynatrace Community Forum 2026): CoPilot primär DQL-Query-Assist und 'conversational guide, not a proactive engine' — Runbook-Execution erfordert separate Workflow-Konfiguration, nicht AI-Suggestion"
      - Zero organische Community-Diskussion ausserhalb Dynatrace-eigener Kanäle (kein Reddit, kein HN, kein StackOverflow zu Davis CoPilot) — Vendor-Marketing läuft Praxis voraus
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Starke Causal-AI für Alert-Korrelation und Root-Cause-Reduktion
        - BSI-C5 und FRA-Tenant senken DACH-Compliance-Hürde
      complaints:
        - CoPilot für Remediation/Runbook-Execution nicht in der Praxis validiert
        - Tatsächliche Ausführung hängt an manuell konfigurierten Workflows
    sources:
      - id: dynatrace-com-news-blog-advancing-aiops-preventive-operations-powered-by-davis-ai
      - id: community-dynatrace-com-t5-open-q-a-thoughts-on-davis-copilot-capabilities-compared-to-agentic-m-p-293993
      - id: gartner-com-reviews-market-observability-platforms-vendor-dynatrace
  - id: servicenow-com-ai-use-cases-incident-resolution-html
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: ServiceNow hat den EU AI Code of Practice unterzeichnet und liefert mit AI Control Tower einen dedizierten Governance-Layer für Art-14-Oversight. Resolve-Incident-AI-Agent ist im Yokohama-Release GA. Wenn ITSM ohnehin auf ServiceNow läuft, ist das der politisch und regulatorisch reibungsärmste Pfad — auch wenn es ITSM-Resolution-Hilfe und kein technisches SRE-Runbook ist.
    caveats:
      - EU-Hosting muss explizit lizenziert werden, US-Default
      - Now Assist Pro Plus + AI Agents Bundle mit signifikantem Aufpreis
      - Resolve-Incident-Agent erst ab Yokohama/Zurich, ältere Tenants kommen nicht in den Genuss
      - Now Assist Generative AI Controller läuft per Default in US-Tenants; EU-Hosting muss explizit lizenziert/konfiguriert werden
      - Lizenzkosten Pro Plus + AI Agents Bundle führen zu erheblichem Add-On-Aufpreis, der durch Procurement gehen muss
      - "'Resolve Incident'-Agent ist Yokohama/Zurich-Release; ältere Tenants auf Washington/Vancouver haben das Feature nicht"
      - Externes Marketing (XenonStack) suggeriert 'autonome Resolution', offizielle Doku betont menschliche Freigabe
      - Lizensierung über Now Platform Pro Plus / AI Agents Bundle, signifikanter Aufpreis
      - Datenresidenz für DACH klären (EU-Datacenter verfügbar, nicht überall Default)
      - "r/servicenow Praktiker (04/2026): autonome Resolution Rate 10-20 % statt vermarkteter 40-60 % — CMDB-Qualität über ~85 % ist harte Voraussetzung; Orgs mit CMDB-Debt sollten autonome Resolution nicht aktivieren"
      - "Dokumentierte Failure-Patterns in Produktion: AI überschreibt Resolution-Code ohne Human-Review und erzeugt Reporting-/Audit-Fehler; DPIA-Reviews haben Rollouts 6+ Wochen blockiert"
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Incident Summarization und KB-gestützte Suggestion in Produktion bewährt
        - EU AI Code of Practice + AI Control Tower stärken DACH-Governance-Story
      complaints:
        - Autonome Resolution Rate 10-20 % vs. vermarkteten 40-60 % — CMDB-Voraussetzung selten erfüllt
        - Assist-Unit-Kosten bei Scale schwer vorhersagbar; DPIA-Reviews blockieren Rollouts
    sources:
      - id: servicenow-com-ai-use-cases-incident-resolution-html
      - id: servicenow-com-docs-bundle-yokohama-intelligent-experiences-page-administer-now-assist-ai-agents-task-resolve-incident-aia-html
      - id: servicenow-com-uk-blogs-2025-eu-ai-code-of-practice
      - id: reddit-com-r-servicenow-comments-1s3nkl9-anyone-have-success-with-virtual-agent-not-now
      - id: stackscout-co-blog-servicenow-ai-review-2026
  - id: cutover-com-ai-enabled-runbooks
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Cutover ist eine UK-basierte SaaS-Plattform mit echter Barclays-Adoption (Enterprise Agreement, Barclays Group CTO zitiert) für orchestrierte Runbooks bei Major Incidents, DR-Exercises und Migrations. Human-Oversight-Architektur (AI als Recommendation, zwingend Human Approval) ist AI-Act-konform. Conditional-Fit: für Banken/Versicherer mit komplexen Change-Cutovers und Major-Incident-Orchestration geeignet — kein Fit für 24/7-SRE-Alert-Triage."
    caveats:
      - UK-Entität, AVV mit EU-SCCs nötig — DACH-Procurement prüft Drittlandtransfer
      - Plattform ist auf koordinierte Major-Incidents/Cutovers zugeschnitten, weniger auf 24/7-Alert-Triage
      - Lizenzmodell pro Runbook-Run — bei hohem Volumen teuer
      - AI-Runbook-Features (AI Create, Respond AI) erst ab Nov 2024 / Jul 2025 GA — keinerlei unabhängige Validierung der AI-Capabilities vorhanden
      - Nur 3 Gartner-Peer-Insights-Reviews, alle aus Feb 2024 (vor AI-Features), keinerlei externe Community-Diskussionen
      - Organische Practitioner-Community praktisch inexistent — Adopter in Finanzinstituten kommunizieren nicht öffentlich über das Tool
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - "Barclays Group CTO-Zitat: 'helps us go faster on change and safeguard customer-facing operations'"
        - DR-Exercise-Orchestration bei ~400 Personen / ~3700 Tasks in Produktion belegt (Gartner Peer Insights)
      complaints:
        - AI-Features nicht unabhängig validiert — rein auf Vendor-Dokumentation gestützt
        - Preismodell pro Run bei hohem Volumen kritisch
    sources:
      - id: cutover-com-blog-ai-powered-runbooks-outperform-status-quo-incident-management
      - id: gartner-com-reviews-product-cutover-collaborative-automation-platform
      - id: prnewswire-com-news-releases-barclays-signs-enterprise-agreement-with-cutover-680149053-html
  - id: komodor-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Klaudia indexiert Confluence/Notion/Wiki-Runbooks per Semantic Search und mappt sie auf Kubernetes-Incidents — adressiert das DACH-relevante 'unsere Prozedur, nicht generischer K8s-Tipp'-Pattern direkt. Multi-Agent-Architektur mit MCP-Erweiterbarkeit (03/2026 announced) erlaubt Integration in bestehende Toolchains.
    caveats:
      - Ausschließlich auf Kubernetes/Cloud-Native fokussiert
      - Vendor-Claim '95 % accuracy' nicht unabhängig validiert
      - Knowledge-Base-Integration verlangt saubere Runbook-Quellen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - 95 % Genauigkeit bei K8s-Issue-Identifikation (Image Pull, Healthchecks)
        - Beschleunigt RCA für Nicht-K8s-Experten signifikant
      complaints:
        - Fokus auf Kubernetes — Hybrid-Infrastruktur mit VMs/On-Prem limitiert
        - Benötigt Dokumentation-Uploads für org-spezifische Runbook-Relevanz
        - Wirksamkeit hängt von Qualität der Knowledge Base ab
    sources:
      - id: helpnetsecurity-com-2026-03-19-komodor-klaudia-ai-extensibility-framework
      - id: komodor-com-blog-contextualizing-ai-sre-how-klaudia-leverages-organizational-knowledge
start_here: "Mit PagerDuty Runbook Automation im reinen Suggest-Modus beginnen: einen Self-Hosted Runner aufsetzen und AI-Generated Runbooks auf eine eng begrenzte Incident-Klasse (z. B. Pod-Restart, Disk-Cleanup) beschränken, ohne Auto-Execute zu aktivieren. Wer ITSM bereits auf ServiceNow betreibt, kann alternativ den Resolve-Incident-Agent (ab Yokohama) als Summarization- und KB-Suggestion-Pilot ohne Auto-Run-Konfiguration starten."
caveats: Auto-Remediation ohne explizites Human-Approval-Gate kollidiert mit ITIL-Change-Management und BSI-IT-Grundschutz; bei ServiceNow zeigen Produktionserfahrungen DPIA-bedingte Rollout-Blockaden von 6+ Wochen. Runbooks veralten schnell — der KI-Nutzen hängt direkt an der Qualität der Runbook-Quellen, ohne gepflegte Wissensbasis produziert der Suggest-Modus irreführende Vorschläge.
sources: []
---
