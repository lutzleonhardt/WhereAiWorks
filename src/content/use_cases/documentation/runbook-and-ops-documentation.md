---
stage: documentation
order: 6
roles:
  - platform-devops-engineer
title: Runbook- und Operations-Doku-Drafts
goal_label: Runbooks und Postmortem-Doku aus Incident-Daten erzeugen
suitability: conditional
rationale: PagerDuty Advance und Datadog Bits AI erzeugen Runbook- und Postmortem-Drafts direkt aus Incident-Timelines — der Use Case ist in DACH produktiv etabliert, wird aber als Incident-Management-Feature vermarktet, nicht als Doku-Use-Case. Für Teams mit Confluence-Estate ergänzt Atlassian Rovo den Workflow ohne Tool-Wechsel zwischen Jira-Incident und Doku.
tools:
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Atlassian Cloud bietet EU-Datenresidenz (Frankfurt), ISO 27001/27018, SOC 2 Typ II, ist in DACH-Großkonzernen breit installiert. Rovo nennt Runbooks und PIRs explizit als Use Case und wirkt direkt im Confluence-Estate, in dem die Doku ohnehin lebt — minimaler Tool-Wechsel.
    caveats:
      - Data-Center-zu-Cloud-Migration ist Voraussetzung — strategischer Aufwand für viele DACH-Estates.
      - Rovo-LLM-Subprozessoren nicht EU-pinned — DPO-Freigabe nötig.
      - Drafts neigen zu generischer Sprache ohne System-Kontext; Halluzinationen bei Befehlsketten real.
      - Nicht in Atlassian Government Cloud — für KRITIS-Sektoren mit Gov-Cloud-Pflicht ausgeschlossen.
      - Data-Center-zu-Cloud-Migration erzwingt für viele DACH-Estates erst die Voraussetzung für Rovo — strategischer Aufwand.
      - Rovo-Subprozessoren (OpenAI) sind nicht EU-pinned — DPO-Freigabe nötig.
      - Generierte Runbooks tendieren zu generischer Sprache ohne System-Kontext — Halluzinations-Risiko bei Befehlsketten real.
      - AI nur auf Standard/Premium/Enterprise Cloud-Plänen, nicht Free
      - Nicht in Atlassian Government Cloud verfügbar
      - Data Center Estates müssen über Cloud-Connector synchronisieren — DACH-Compliance prüfen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Brücke zwischen Jira-Incident und Confluence-Doku ohne Tool-Wechsel
      complaints:
        - Inhaltliche Tiefe der Drafts oft generisch ohne System-Kontext
        - DC/Cloud-Hybrid macht AI-Setup komplex
    sources:
      - id: atlassian-com-collections-service-ai
      - id: support-atlassian-com-confluence-cloud-docs-atlassian-intelligence-features-in-confluence-cloud
      - id: community-atlassian-com-learning-course-create-and-enhance-content-with-rovo-lesson-generate-new-content-using-rovo
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Datadog EU1 (Frankfurt), ISO 27001, SOC 2 Typ II, breite DACH-Adoption. AI-Postmortem-Variablen (ai_summary, ai_lessons_learned etc.) integrieren sich nativ in Notebook/Confluence-Templates ohne Datenexport. Bits-AI-Subprozessoren müssen separat geprüft, aber Compliance-Framework existiert.
    caveats:
      - Bits-AI-Datenflüsse (LLM-Subprozessoren) liegen nicht automatisch im EU1-Boundary — Subprozessor-Prüfung erforderlich.
      - US-HQ → Cloud-Act-Restrisiko.
      - Sensitive-Data-Scanner-Konfiguration muss vor Postmortem-Generierung scharfgeschaltet sein, sonst landen Secrets/PII im AI-Output.
      - Bits AI SRE Lizenzkosten separat zu APM.
      - Bits-AI-Subprozessor-Liste (OpenAI/Anthropic via AWS Bedrock) muss separat verifiziert werden — AI-Datenflüsse nicht automatisch im EU1-Boundary.
      - Datadog ist US-HQ → Cloud-Act-Restrisiko trotz EU-Region.
      - Incident-Logs enthalten oft Customer-PII und Secrets — Sensitive-Data-Scanner-Konfiguration ist Voraussetzung.
      - Mindestens 10 Timeline-Messages nötig, sonst keine Generierung
      - AI-Variablen für Postmortems nur in Datadog-Templates verfügbar
      - Bits AI SRE Lizenz separat zu Standard-APM
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Telemetrie und Postmortem in einem Tool — kein Datenexport nötig
        - EU1-Region für DACH-Compliance
      complaints:
        - Bits AI SRE Lizenzkosten noch unklar im Markt
        - Genauigkeit der RCA-Hypothesen schwankt
    sources:
      - id: docs-datadoghq-com-incident-response-incident-management-investigate-incident-ai
      - id: datadoghq-com-blog-create-postmortems-with-datadog
      - id: reddit-com-r-sre-comments-1ongb97-how-slos-runbooks-and-postmortems-turned-our
  - id: pagerduty-com-generative-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Marktstandard in DACH-Enterprises mit etablierter Compliance (ISO 27001, SOC 2 Typ II, GDPR-DPA, EU-Service-Region). AI-Generated Runbooks und Wrap-me-up-Postmortems decken den Use Case ab; Daten an LLM nur Prompt-Text, keine Trainings-Nutzung. Customer-Choice für AI-Features inkl. Opt-in.
    caveats:
      - US-HQ → Cloud-Act-Restrisiko trotz EU-Region; bei KRITIS/Banking gesondert prüfen.
      - Postmortem- und Runbook-Automation-Module sind Premium-SKUs — Kosten-Hebel.
      - AI-Subprozessoren (OpenAI/Anthropic) im DPA explizit freigeben.
      - Generierte Runbooks/Postmortems werden potenziell discoverable — Retention/Löschpolicy verankern.
      - "US-HQ und Cloud-Act-Exposition: Datenresidenz-Wahl (EU-Service-Region) muss vertraglich abgesichert werden — nicht jeder PD-Tenant ist EU-pinned."
      - AI-Subprozessoren (OpenAI/Anthropic) müssen im DPA explizit geprüft werden; AI-Opt-in/Opt-out organisationsweit konfigurieren.
      - Runbook-Automation-Module mit Execution-Layer triggern bei Banking/KRITIS Kontroll-Reviews durch BaFin/BSI — Operational-Tech-Boundary klären.
      - Postmortems werden potenziell discoverable in Rechtsstreitigkeiten — Retention-Policy und Löschkonzept im Tenant nachziehen.
      - Runbook-Automation-Modul ist Zusatz-SKU, nicht im Basisplan
      - Postmortems-Feature historisch nur auf Business/Enterprise-Plänen
      - Datenresidenz primär US/EU — DACH-Teams müssen Region prüfen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Reduziert Slack-Archäologie nach P1-Incidents drastisch
        - Jeli-Integration bringt Timelines automatisch in Reviews
      complaints:
        - Postmortem-Feature an höhere Pläne gekoppelt
        - Runbook-Automation als Zusatzprodukt teuer
    sources:
      - id: pagerduty-com-prompt-library-generate-post-incident-summaries
      - id: pagerduty-com-blog-news-announcements-pagerduty-advance-genai-features-for-the-pagerduty-operations-cloud
      - id: pagerduty-com-blog-democratize-automation-ai-generated-runbooks
      - id: pagerduty-com-security-generative-ai-guidelines
      - id: reddit-com-r-sre-comments-1ntxc8j-spent-4-hours-yesterday-writing-an-incident
  - id: dynatrace-com-platform-davis-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: DACH-HQ (Linz, AT), EU-Hosting, ISO 27001/SOC 2 Typ II, DORA-Roadmap. Causal AI minimiert Halluzinationsrisiko — wichtig für KRITIS-Runbooks. Output ist RCA-zentriert; für narrativen Postmortem-Use-Case nur conditional.
    caveats:
      - Output bleibt in Dynatrace-Notebooks; Confluence-Bridge muss gebaut werden.
      - Volle TSG-AI-SKU teuer — ROI nur in Dynatrace-zentrierten Estates.
      - Eher für RCA-Bausteine als für Owner-Klärung in Postmortems geeignet.
      - TSG-Output bleibt in Dynatrace-Notebooks; Confluence-Export-Bridge muss gebaut werden.
      - Volle Davis-Intelligence-AI-SKU teuer — ROI-Case für Postmortem-Doku alleine schwach.
      - Postmortem-Doku entsteht in Dynatrace-Notebooks, nicht in Confluence — Export-Workflow nötig
      - Volle TSG-AI nur in neueren Davis-Intelligenz-SKUs
      - Eher RCA-zentriert als Narrative-Postmortem-zentriert
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Causal AI reduziert Halluzinations-Risiko gegenüber reinem LLM
        - EU-Hosting und etablierte DACH-Enterprise-Präsenz
      complaints:
        - Output bleibt in Dynatrace-Notebooks — Brücke zu Confluence fehlt
    sources:
      - id: docs-dynatrace-com-docs-discover-dynatrace-platform-davis-ai-root-cause-analysis-davis-problems-app-use-cases-resolve-problems-with-troubleshooting-guides
      - id: dynatrace-com-news-blog-transform-your-operations-with-davis-ai-root-cause-analysis
      - id: docs-dynatrace-com-docs-dynatrace-intelligence-root-cause-analysis-concepts
  - id: docs-port-io-guides-all-ai-powered-rca-postmortem-generation
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Sauberer Human-in-the-Loop-Postmortem-Workflow mit konfigurierbarem LLM-Provider (z. B. Azure OpenAI Sweden für DACH-Datenresidenz). Sinnvoll nur für Teams mit existierendem Port-IDP-Investment.
    caveats:
      - Israelischer Vendor — Transfer-Impact-Assessment für DACH erforderlich.
      - "Setup-intensiv: Self-Service Actions, Blueprint-Modellierung."
      - Compliance-Posture (ISO 27001, SOC 2) muss separat angefragt werden.
      - LLM-Provider ist konfigurierbar — DACH-Teams können OpenAI EU oder Azure OpenAI Sweden verwenden.
      - Israelischer Vendor — gleiches Transfer-Impact-Thema wie Komodor.
      - "Setup-intensiv: Self-Service Actions, Blueprint-Modellierung"
      - Eher für Teams mit existierendem IDP-Investment
      - Funktion in Quality vom konfigurierten LLM-Provider abhängig
    sources:
      - id: docs-port-io-guides-all-ai-powered-rca-postmortem-generation
  - id: servicenow-com-products-itom-predictive-aiops-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: DACH-Enterprise-ITSM-Standard mit EU-Datacenter (Frankfurt/Amsterdam), BSI C5, ISO 27001/27017/27018 und etablierter Procurement-Akzeptanz. Now Assist generiert Incident-Summaries und KB-Artikel-Drafts; Output ist ITSM-Format, nicht SRE-Narrative — daher conditional.
    caveats:
      - Now-Assist-AI-Lizenz separat und teuer — ROI nur für Doku schwach.
      - Cloud-Native-SRE-Postmortems mit Slack-Quellen sind nicht der natürliche Output.
      - AI-Subprozessoren von ServiceNow (Azure OpenAI etc.) im DPA prüfen.
      - Now-Assist-AI-Lizenz separat und teuer — ROI-Case schwierig nur für Doku-Drafts.
      - Generierte KB-Artikel müssen durch Knowledge-Manager freigegeben werden — Workflow-Aufwand.
      - Output stark ITSM-Format-getrieben (Incident, Problem, KB)
      - Now-Assist-AI-Lizenzen separat
      - Weniger geeignet für SRE-Cloud-Native-Postmortems mit Slack-Datenquellen
    sources:
      - id: docs-bigpanda-io-en-servicenow-incidents
  - id: opsrift-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Spezialisiertes Tool für Postmortems/Handovers/Runbooks aus PagerDuty/Datadog/Grafana mit One-Click-Confluence-/Jira-Push — adressiert exakt den Use Case. Likely missed by market scan because positioniert als schmaler Postmortem-Helper, nicht als breite Incident-Plattform — fällt durch das übliche Vendor-Raster.
    caveats:
      - Junges Tool ohne erkennbare Enterprise-Referenzen oder Compliance-Zertifikate.
      - Vendor-Standort, EU-Hosting und DPA müssen vor PoC geklärt werden.
      - 9-Section-Templates sind opinionated — Anpassbarkeit für DACH-Compliance-Reports prüfen.
    sources:
      - id: opsrift-com-postmortem
  - id: ilert-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "DACH-nativer Vendor (Köln), ISO 27001, DSGVO, AWS Frankfurt, DORA-Paket, Kunden REWE digital / Lufthansa Systems / Bertelsmann. AI-Postmortem-Generation und AI-SRE-Agent mit Governance-Stufen (read-only → supervised → autonom) und Audit-Trails sind funktional belegt. Downgraded von good_fit: kein einziger der 64 verifizierten GetApp-Reviews erwähnt das AI-Postmortem-Feature — die Plattform ist DACH-enterprise-ready, das AI-Doku-Feature hat aber keine externe Nutzervalidierung."
    caveats:
      - SOC 2 Typ II noch auf Roadmap, nur ISO 27001 vorhanden — für US-Customer-Kontext-Procurement Lücke.
      - AI-Daten werden in Deutschland verarbeitet, aber LLM-Subprozessoren (OpenAI etc.) müssen im DPA geprüft werden.
      - Kleinerer Vendor-Footprint als PagerDuty — Ecosystem-Integrationen weniger umfangreich.
      - BetrVG bei Scribe-/Call-Transkriptions-Features ebenfalls relevant.
      - AI-Postmortem-Output ist rohes Markdown — kein nativer Runbook-Review-Workflow; manueller Transfer in Confluence/Jira nötig.
      - Kein unabhängiger Practitioner-Bericht zum AI-Postmortem-Feature gefunden (Stand Review 2026-04-27).
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Starke Incident-Management-Scores auf GetApp (4.7/5, 64 verifizierte Reviews)
        - DACH-Enterprise-Kunden bestätigt (REWE digital, Lufthansa Systems)
      complaints:
        - AI-Postmortem-Feature in keinem unabhängigen Review erwähnt
        - Kleinerer Integration-Footprint als US-Wettbewerber
    sources:
      - id: ilert-com-security
      - id: docs-ilert-com-trust-center-faq
      - id: ilert-com
      - id: getapp-com-it-management-software-a-ilert-reviews
start_here: "Pilot mit PagerDuty Advance oder Datadog Bits AI: einen Runbook-Draft aus einem abgeschlossenen P1-Incident generieren und durch den zuständigen On-Call-Engineer Zeile für Zeile verifizieren. Den Postmortem-Abschnitt „Action Items“ sowie Root-Cause- und Verantwortungs-Klärung immer manuell schreiben."
caveats: AI-generierte Runbooks enthalten häufig erfundene Befehlsketten — jeder Befehl muss vor Übernahme in produktive Runbooks manuell geprüft werden. AI-Subprozessoren aller drei Anchor-Tools liegen nicht automatisch im EU-Boundary; DPA-Prüfung und Sensitive-Data-Scanner-Konfiguration sind Voraussetzung vor dem ersten Produktiveinsatz.
sources: []
---
