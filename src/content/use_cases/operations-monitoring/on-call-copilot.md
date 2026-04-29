---
stage: operations-monitoring
order: 9
roles:
  - software-engineer
  - platform-devops-engineer
title: On-Call-Copilot im ChatOps
goal_label: On-Call mit Kontextfragen unterstützen
suitability: good_fit
rationale: incident.io und Datadog Bits AI sind produktionsreife ChatOps-Bots, die Kontextfragen im Incident-Channel mit Telemetrie-, Code-Change- und Deploy-Daten beantworten — nativ in Slack oder MS Teams, ohne separate Infrastruktur. Wer eine bestehende PagerDuty-Basis hat, deckt denselben Bedarf mit PagerDuty Advance ab, ohne die Incident-Plattform zu wechseln.
tools:
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Autonomer SRE-Agent, der Slack-/Teams-Threads als Investigation-Kontext nutzt und @Datadog-Mentions beantwortet. Tiefe Telemetrie-, Runbook- und PR/Deploy-Integration. Bester Fit, wenn Datadog bereits Observability-Standard ist.
    caveats:
      - Lock-in an Datadog-Stack; Drittsysteme nur via Konnektoren.
      - Audit-Logs für AI-Outputs müssen explizit aktiviert werden — relevant für BaFin/MaRisk-Rollen.
      - Hochpreisig im Datadog-Modell.
      - EU-Region (Frankfurt) verfügbar, aber AVV/Datenfluss inkl. Confluence-Runbook-Zugriff für BaFin-Rollen separat prüfen.
      - Bits AI Outputs sind nicht out-of-the-box audit-loggbar im Sinne MaRisk/BAIT — Audit-Trail muss konfiguriert werden.
      - Lock-in an Datadog-Stack; Drittsysteme via Integrations (Grafana, Splunk, Sentry).
      - Hochpreisig im Datadog-Modell, AVV/Datenfluss für regulierte Branchen klären.
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Schnelle RCA, gute Telemetrie-Integration
      complaints:
        - Teuer; Lock-in
        - Manche AI-Outputs als ChatGPT-Wrapper wahrgenommen
    sources:
      - id: datadoghq-com-blog-bits-ai-sre
      - id: docs-datadoghq-com-bits-ai-bits-ai-sre-investigate-issues
      - id: reddit-com-r-sre-comments-1q4yb1v-best-pagerduty-alternatives-for-2026
  - id: incident-io
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Slack-/Teams-native Incident-Plattform mit AI SRE (Code-Change-Korrelation, Fix-PR), Scribe für Live-Notes und /inc-Slash-Commands. Hohe Praktiker-Akzeptanz, aktiv weiterentwickelte Investigations-Engine.
    caveats:
      - Slack-First; MS-Teams-Support existiert, aber Slack ist die starke Plattform.
      - UK-Anbieter ohne deutsche Niederlassung; SCC-/AVV-Konstrukt nötig.
      - GitHub-Code-Zugriff für AI SRE — IP-Schutz separat freigeben.
      - UK-Anbieter ohne deutsche Niederlassung — DPA via Standard Contractual Clauses, aber kein DACH-Sales/Support-Footprint.
      - AI SRE greift auf GitHub-Code zu — IP-Schutz und Source-Code-Datenfluss separat freigeben lassen.
      - AVV/Datenfluss-Diagramm wegen Code-/Chat-Zugriff für DACH-Konzerne erforderlich.
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Smooth UX, gute Workflows
        - Top Customer Service
        - Schnelle Adoption
      complaints:
        - Slack-zentriert; Teams weniger ausgebaut
    sources:
      - id: incident-io-blog-opsgenie-migration-rootly-vs-incident-io
      - id: metoro-io-blog-top-ai-incident-response-tools
      - id: reddit-com-r-it-comments-1ihjerm-has-anyone-used-incidentio-does-anyone-has-any
      - id: reddit-com-r-sre-comments-1k8x5mc-anyone-here-using-ai-rca-tools-like-incidentio-or
  - id: pagerduty-com-platform-ai-agents-sre
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Bündelt SRE/Scribe/Shift/Insights-Agents als virtuelle Responder in Slack, MS Teams und PagerDuty-UI. Catch-me-up/Wrap-me-up-Prompts liefern audit-loggbare Updates — für DACH-Enterprises mit etablierter PagerDuty-Basis ein natürlicher Erweiterungspfad.
    caveats:
      - Add-on-Pricing via Credits; volle Plattform nur in Business/Enterprise.
      - MS-Teams-Tiefe für SRE/Insights Agent im Frühjahr 2026 noch Early Access.
      - AVV/Sub-Processor-Liste für regulierte Branchen prüfen.
      - "DACH-Datenresidenz: PagerDuty hostet primär in US/EU-Regionen; AVV mit deutscher Niederlassung verfügbar, aber Sub-Processor-Liste prüfen."
      - Bei BaFin-regulierten Rollen Audit-Logs für AI-Agent-Aktionen explizit aktivieren.
      - Native MS-Teams-Unterstützung für SRE/Insight Agent erst Early Access (Spring 26).
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Etablierte Alerting-Engine, große Integrationsbreite
      complaints:
        - UI veraltet
        - Komplexes Pricing, Add-ons nötig
        - Alte Pre-flight-Checks führten zu Migrationen weg
    sources:
      - id: pagerduty-com-blog-ai-meet-your-virtual-responder-pagerdutys-sre-agent-for-ai-driven-reliability
      - id: docs-pagerduty-com-main-docs-pagerduty-advance
      - id: reddit-com-r-sre-comments-1q4yb1v-best-pagerduty-alternatives-for-2026
  - id: resolve-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Multi-Agent-System, das im Incident-Channel sitzt, Nachrichten klassifiziert und @-Mentions mit Logs/Deployments/PRs beantwortet. Starke US-Referenzen (Coinbase, DoorDash, Salesforce); für DACH-Konzerne aktuell Eval-Stadium.
    caveats:
      - Junges Unternehmen, kein DACH-Footprint — Vendor-Risiko bewerten.
      - Compliance-/AVV-Story für BaFin-Rollen muss konkret geprüft werden.
      - MS-Teams-Tiefe weniger dokumentiert als Slack.
      - Kein deutsches Vertragspartner; kritisch für Banken/Versicherungen mit AVV-Anforderungen an EU/DACH-Niederlassung.
      - Bewertungs-Hype (1.5B) ≠ Operational Maturity; Vendor-Risiko (Übernahme/Pivot) bewerten.
      - Junges Unternehmen; DACH-Compliance-Story (BaFin/AVV) muss konkret geprüft werden.
      - Tiefe der MS-Teams-Integration weniger detailliert dokumentiert als Slack.
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Autonome Investigations als Differenzierung
    sources:
      - id: docs-resolve-ai-incident-channels
      - id: forbes-com-sites-sofiachierchio-2026-04-16-this-15-billion-ai-startup-steps-in-when-software-breaks
      - id: reddit-com-r-sre-comments-1k8x5mc-anyone-here-using-ai-rca-tools-like-incidentio-or
  - id: rootly-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "AI-native Incident-Plattform mit Slack/Teams als Command Center: auto-generierte Channels, Diagnostik (Datadog/K8s/Runbooks), Ask-Rootly-AI für RCA und Comms-Drafts. SOC 2 Type II, Microsoft-Teams-Native — relevant für DACH-Konzerne mit Teams-Standard."
    caveats:
      - Konfigurations-Tiefe (Liquid/JSON) braucht Plattform-Ownership.
      - Polarisiertes Vertriebs-Feedback in r/sre — Procurement-Referenzen einholen.
      - US-Anbieter; SCC-Konstrukt für DACH-Compliance notwendig.
      - US-Anbieter, kein DACH-Footprint; AVV/SCC-Konstrukt erforderlich.
      - Konfigurations-Tiefe (Liquid, JSON) braucht dedizierte Plattform-Owner — nicht 'set-and-forget'.
      - Konfigurations-Tiefe (JSON) kann ohne Professional Services bremsen.
      - Vereinzelt kritische Stimmen zu Vertriebspraktiken auf r/sre.
    practitioner_signal:
      volume: high
      tenor: polarized
      praise:
        - API/Integrations stark
        - Onboarding-Support geschätzt
        - Liquid-Variablen für Skripting
      complaints:
        - Vertriebsverhalten umstritten
        - Komplexere Konfiguration
    sources:
      - id: rootly-com-sre-ai-driven-platforms-outperform-pagerduty-2026
      - id: metoro-io-blog-top-ai-incident-response-tools
      - id: reddit-com-r-sre-comments-1q4yb1v-best-pagerduty-alternatives-for-2026
  - id: ilert-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Deutscher Anbieter (Köln) mit MS-Teams-/Slack-nativer ChatOps-Integration, On-Call-Scheduling, Status Pages und EU-Hosting — strukturell der DACH-passendste Kandidat für Konzerne mit AVV-/DSGVO-Anforderungen.
    caveats:
      - AI-Tiefe weniger ausgereift als Bits AI SRE / Resolve — ChatOps-Q&A-Bot eher rudimentär.
      - Für autonomen 'Copilot'-Use-Case ggf. mit Bits AI / Resolve kombinieren.
      - Kleinere Marktpräsenz im DACH-Großkonzern-Segment als Datadog/PagerDuty.
      - Konkreter ChatOps-Q&A-Bot (Bot fragt zurück, schlägt Runbooks vor) ist weniger ausgeprägt — eher Workflow-Plattform mit AI-Komponenten.
      - Für Use-Case 'Bot beantwortet Kontextfragen autonom' ggf. mit Datadog Bits AI / Resolve AI kombinieren.
      - AI-Features weniger ausgereift als US-Marktführer; eher Workflow-Plattform.
      - Bot-Tiefe für Q&A im ChatOps weniger als Bits AI SRE/Resolve.
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Successfully automates incident workflows and reduces manual toil
        - Teams report faster response times after migration
        - Cleaner interface compared to legacy competitors
      complaints:
        - AI features less mature than US market leaders
        - Bot depth for ChatOps Q&A limited vs autonomous agents
    sources:
      - id: ilert-com-integrations-microsoft-teams
      - id: ilert-com-de-blog-chatops-und-incident-management-tipps-zur-erweiterung-der-funktionen-von-microsoft-teams
  - id: komodor-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: K8s-spezialisierter Multi-Agent-SRE-Copilot mit dokumentierten SOC2/GDPR/HIPAA-Controls auf AWS Bedrock. Passt für Plattform-Teams in DACH mit K8s-Schwerpunkt; weniger geeignet für VM-/Legacy-Stacks.
    caveats:
      - Stark K8s-fokussiert — kein Generalist.
      - ChatOps-Q&A weniger Hauptprodukt; eher Troubleshooting-UI mit Slack-Notifications.
      - SaaS-Zwang für DACH-Banken mit On-Prem-K8s problematisch.
      - Slack/Teams-Bot-Tiefe weniger als bei den dedizierten Incident-Plattformen.
      - "Für DACH-Banken/Versicherungen mit On-Prem-K8s-Anteil: SaaS-Modell von Komodor passt nur eingeschränkt."
      - Stark K8s-fokussiert — kein Generalist für Legacy/VM-Stack.
      - ChatOps-Q&A weniger das Hauptprodukt; Fokus auf K8s-Troubleshooting-UI.
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: komodor-com-platform-klaudia-ai-powered-troubleshooting
      - id: helpnetsecurity-com-2026-03-19-komodor-klaudia-ai-extensibility-framework
  - id: docs-bmc-com-xwiki-bin-view-service-management-employee-digital-workplace-bmc-helixgpt-helixgpt261-ai-agents-in-bmc-helixgpt-ms-teams
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: MS-Teams-nativer ITSM/SRE-Bot, der Incidents abruft, Beteiligte vorschlägt, Calls zusammenfasst, KB-Artikel liefert und ITSM/AIOps verbindet. Likely missed by market scan because BMC ist als ITSM-Suite-Vendor positioniert und nicht als 'AI-Tool' — in DACH-Konzernen mit Remedy-/BMC-Erbe aber natürliche Wahl.
    caveats:
      - ITSM-Workflow-orientiert, weniger SRE/DevOps-native als incident.io/Rootly.
      - Setup-Aufwand erheblich (Azure-Bot, M365, HelixGPT-Aktivierung).
      - AI über Azure OpenAI / Gemini — Sub-Processor-Liste mit Konzern-Compliance abstimmen.
    sources:
      - id: docs-bmc-com-xwiki-bin-view-service-management-employee-digital-workplace-bmc-helixgpt-helixgpt261-ai-agents-in-bmc-helixgpt-ms-teams
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Now Assist x Microsoft Copilot Integration ermöglicht ITSM-/Incident-Workflows nativ in MS Teams: Knowledge-Suche, Catalog-Requests, Ticket-Updates. Likely missed by market scan because ServiceNow als ITSM-Suite-Anbieter selten in 'AI On-Call'-Listen erscheint, ist aber DACH-Konzern-Standard."
    caveats:
      - ITSM-Schwerpunkt — SRE-Investigations-Tiefe geringer als Bits AI/Resolve.
      - Lizenzkosten Now Assist + M365 Copilot summieren sich erheblich.
      - "Begrenzung: Microsofts Copilot-Konnektor liefert nur Links, nicht volle Inline-Antworten ohne Now-Assist-Bot."
    sources:
      - id: servicenow-com-community-ms-teams-articles-boost-employee-productivity-with-now-assist-amp-microsoft-365-ta-p-3406468
  - id: help-splunk-com-en-splunk-enterprise-search-splunk-ai-assistant-2-0-0-use-splunk-ai-assistant-for-spl-agent-mode-in-splunk-ai-assistant
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Agent Mode parst Prompts in parallele Tool/Skill-Calls, scannt Events, führt SPL-Searches mit Approval-Gate aus, erzeugt Investigation-Reports — relevanter SRE-Copilot innerhalb Splunk-UI. Likely missed by market scan because als Suite-Feature in der Splunk-Plattform versteckt und nicht primär als ChatOps-Bot vermarktet; in DACH-Banken/Versicherungen mit Splunk-Investment aber Default-Kandidat.
    caveats:
      - Innerhalb Splunk-UI, nicht ChatOps-Bot in Slack/Teams — Use-Case-Lücke gegenüber Briefing.
      - Cloud-only (Splunk Cloud, AWS-Region); für regulierte On-Prem-Splunk-Installationen begrenzt.
      - SPL-Searches im Agent Mode können erhebliche SVC-Kosten verursachen.
    sources:
      - id: help-splunk-com-en-splunk-enterprise-search-splunk-ai-assistant-2-0-0-use-splunk-ai-assistant-for-spl-agent-mode-in-splunk-ai-assistant
  - id: komodor-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Spezialisierter K8s-AI-SRE-Agent mit Multi-Agent-Framework (>50 Subject-Matter-Agents für K8s, GPUs, Networking, Storage), MCP/OpenAPI-Erweiterbarkeit und konversationellem Klaudia Chat für Follow-up-Diagnosen. SOC2/GDPR/HIPAA-zertifiziert auf AWS Bedrock; Slack-Integration vorhanden. Passt gut als On-Call-Copilot für Container-/K8s-zentrierte Plattform-Teams, ist aber kein Generalist für Legacy/VM-Stacks.
    caveats:
      - Stark K8s-fokussiert — kein Generalist für Legacy/VM-Stack.
      - ChatOps-Q&A weniger das Hauptprodukt; Fokus auf K8s-Troubleshooting-UI.
      - Freemium-Modell wurde eingestellt; Einstiegspreis springt direkt auf ~$15K/Jahr.
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Genuinely fantastic for monitoring K8s clusters with feature-rich interface
        - Real-time insights and easy-to-navigate UI make spotting issues simple
        - Powerful tool for optimizing deployment resources
      complaints:
        - Drastic pricing leap from freemium to $15K/year with no middle ground
        - Feels like rug-pull for users heavily invested in integration
        - Pricing change perceived as forced migration rather than fair value offer
    sources:
      - id: helpnetsecurity-com-2026-03-19-komodor-klaudia-ai-extensibility-framework
      - id: komodor-com-platform-klaudia-ai-powered-troubleshooting
start_here: "Pilot in einem einzelnen Channel starten: incident.io für Slack-First-Teams mit dokumentiert hoher Practitioner-Akzeptanz, Datadog Bits AI wenn Datadog bereits Observability-Standard ist. Zunächst drei typische Kontextfragen testen und das Datenflussdiagramm mit dem Vendor klären, bevor der Bot breiter ausgerollt wird."
caveats: Jeder dieser Bots greift auf Service-Catalog, Deploy-History und Chat-Logs zu — AVV mit dem jeweiligen Vendor und ein Datenflussdiagramm sind für DACH-Konzerne vor Go-Live erforderlich. Bei BaFin-regulierten Rollen den Audit-Trail der AI-Outputs explizit konfigurieren, da er bei keinem der Anchor-Tools standardmäßig aktiv ist.
sources: []
---
