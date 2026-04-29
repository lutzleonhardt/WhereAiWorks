---
stage: operations-monitoring
order: 10
roles:
  - software-engineer
  - platform-devops-engineer
title: Postmortem-Drafting
goal_label: Postmortem-Entwurf aus Timeline generieren
suitability: good_fit
rationale: Datadog Incident Management und Atlassian Jira Service Management integrieren AI-gestütztes Postmortem-Drafting als inkrementelles Add-on in bestehende DACH-Enterprise-Stacks, ohne zusätzliche ICT-Vendor-Onboarding-Runden auszulösen. Beide Anbieter decken EU-Datenresidenz und DORA-Dokumentationspfade ab, was den Use Case für regulierte DACH-Unternehmen über reinen Komfortgewinn hinaus relevant macht.
tools:
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Fuer DACH-Banken/Versicherungen, die Atlassian Cloud bereits als ITSM/Knowledge-Backbone fuehren, ist Rovo der pragmatische Default: Atlassian hat dediziertes DORA-Guidance, Pinned Data Residency (EU/Frankfurt), Trust-Center und CCM-Mappings. PIR-Generierung in Jira heisst, Action-Items werden automatisch zu trackbaren Issues und der DORA-Reporting-Pfad bleibt im selben System."
    caveats:
      - Rovo nur in Premium/Enterprise-Plaenen - signifikanter Lizenz-Uplift
      - AI-Subprocessoren (OpenAI/AWS Bedrock) muessen ueber Atlassian-Trust-Center fuer DORA dokumentiert werden
      - Slack-Channel-Zugriff durch Rovo erweitert PII-Pfad - Betriebsrat/DSB einbinden
      - Rovo/Atlassian Intelligence nur in Premium/Enterprise; Tier-Upgrade kostet
      - AI-Subprocessoren (OpenAI, Bedrock) muessen ueber Atlassian-Trust-Center fuer DORA dokumentiert werden
      - Slack-Channel-Zugriff durch Rovo erfordert Slack-OAuth - PII-Pfad ueber Atlassian + Slack auditieren
      - Nur in Premium/Enterprise-Plaenen
      - Aktuell eher 'Summary' als vollstaendiger Postmortem-Editor (nur description suggest)
      - Datenresidenz / Atlassian Cloud-AI-Subprocessoren fuer DORA pruefen
    sources:
      - id: support-atlassian-com-jira-service-management-cloud-docs-create-a-post-incident-review-using-atlassian-intelligence
      - id: atlassian-com-blog-announcements-jira-service-management-agentic-ai
      - id: atlassian-com-trust-compliance-resources-dora-dora-guidance
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Wer Datadog ohnehin als Telemetrie-Standard fuehrt, bekommt Postmortem-AI-Variablen (ai_summary, ai_key_timeline, ai_action_items) als inkrementelles Add-on inklusive EU-Hosting-Region (app.datadoghq.eu), DPF-Zertifizierung und SCC-DPA. Das ist im DACH-Konzernumfeld pragmatisch, weil keine zusaetzliche ICT-Vendor-Onboarding-Runde nach DORA-Art.-28 noetig ist.
    caveats:
      - Bits AI Verfuegbarkeit pro Region pruefen - nicht garantiert in EU-Tenant
      - Setzt Nutzung von Datadog Incident Management voraus (Tier-Aufpreis)
      - DORA-Pflichtfelder fuer aufsichtliche Reports muessen selbst ins Template integriert werden
      - Bits AI Verfuegbarkeit pro Region pruefen - nicht garantiert in EU-Tenant aktiv
      - 10-Message-Mindest-Schwelle limitiert AI bei kurzen Incidents - manuelle Drafts noetig
      - DORA-Postmortem-Templates mit aufsichtsfaehigen Feldern muessen selbst kuratiert werden
      - Mindestens 10 Timeline-Messages noetig fuer AI-Draft
      - Setzt Nutzung von Datadog Incident Management voraus
      - Bits AI Verarbeitung kann DSGVO-relevant sein - DPA pruefen
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Identifies root causes accurately with good observability/tagging standards
        - Saves time spotting patterns SREs might miss across distributed systems
        - Causal reasoning ignores noise, follows actual incident root chains
      complaints:
        - Prohibitively expensive ($32-600+ per month; unpredictable scaling)
        - Quality drops dramatically without OTEL, strict tagging, logging standards
        - Generic advice in low-observability environments, misses root causes
    sources:
      - id: docs-datadoghq-com-incident-response-incident-management-incident-ai
      - id: datadoghq-com-blog-create-postmortems-with-datadog
      - id: datadoghq-com-legal-eea-data-transfers
  - id: portkey-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Sinnvoll, wenn Port als IDP bereits Service-Catalog-Standard ist; Human-in-the-Loop-Workflow ist DORA-konform und fuer Engineering-Sign-off bei meldepflichtigen Vorfaellen ideal.
    caveats:
      - Bauzeitintensiv, kein Out-of-the-Box-Editor
      - LLM-Provider und EU-Region pruefen
      - Wert nur bei vorhandenem Port-IDP
      - Setup-Aufwand fuer Self-Service-Actions hoch
      - Default-LLM-Provider und EU-Region-Tauglichkeit pruefen
      - "Bauzeitintensiv: Setup als Self-Service-Action statt Out-of-the-Box-Editor"
      - Nur wertvoll wenn Port-IDP gesetzt ist
    sources:
      - id: docs-port-io-guides-all-ai-powered-rca-postmortem-generation
  - id: oneuptime-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Open-Source-Plattform mit Self-Host- und EU-Datacenter-Option, die blameless Postmortems plus Incident-Timelines abbildet und damit DORA-Datenhoheits-Anforderungen ohne Drittlandtransfer adressiert. Likely missed by market scan because OneUptime ist als Observability-/Monitoring-Suite positioniert, nicht als 'AI Postmortem'-Spezialist - tritt in Capability-only-Suchen kaum auf, ist aber fuer DORA-Self-Host-Mandate ein realer Kandidat.
    caveats:
      - AI-Postmortem-Tiefe deutlich geringer als incident.io/Rootly - eher Workflow + AI-Agent fuer Auto-Fix als dedizierter Postmortem-Editor
      - Self-Host-Variante erfordert eigene Betriebskompetenz
      - Praktiker-Track-Record im DACH-FSI noch zu validieren
    sources:
      - id: test-oneuptime-com-product-incident-management
  - id: ilert-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "DACH-nativer Anbieter aus Koeln mit AI-Postmortem-Creator (parsed Slack/Teams-Channels + Alert-Timelines), ISO 27001, DSGVO, EU-Datenresidenz und expliziter Aussage 'AI-Verarbeitung fuer EU-Kunden in EU auf AWS oder Microsoft, keine PII verlaesst die EU'. DACH-Logos: REWE digital, Lufthansa Systems, Adesso, Bertelsmann. Fuer DACH-Enterprise-Teams, die PagerDuty/Opsgenie-Alternativen mit EU-Datenhoheit evaluieren, ist ilert ein naheliegender Kandidat - jedoch fehlt externer Practitioner-Nachweis fuer das AI-Postmortem-Feature."
    caveats:
      - "Kein unabhaengiger Practitioner-Nachweis fuer AI-Postmortem-Feature gefunden (PeerSpot: 0 Reviews, Reddit/HN: keine Erwaehnung)"
      - Marktreichweite kleiner als Tier-1-Player - Talent-Pool und Drittanbieter-Integrationen weniger breit
      - AI-Postmortem-Tiefe (z.B. Voice-/Scribe-Aequivalent) noch hinter incident.io
      - Foundation-Modelle ueber AWS Bedrock/Azure OpenAI (EU) - Modell-Roadmap und Data-Sharing-Defaults vertraglich fixieren
    sources:
      - id: ilert-de
      - id: ilert-com-de-blog-ilert-stellt-agentic-incident-response-vor
      - id: docs-ilert-com-ilert-ai-generating-incident-updates-through-ai
start_here: Wer Datadog bereits als Telemetrie-Standard betreibt, aktiviert die AI-Postmortem-Variablen in Datadog Incident Management und vergleicht den generierten Entwurf eines abgeschlossenen P3-Incidents mit dem manuellen Protokoll. Als Atlassian-First-Organisation bietet sich stattdessen Rovo in Jira Service Management an, da Action-Items direkt zu trackbaren Issues werden und der DORA-Reporting-Pfad im selben System bleibt.
caveats: Slack- und Teams-Verläufe als Draft-Quelle enthalten PII – DSB- und Betriebsratsfreigabe vor Produktivbetrieb einholen und AI-Subprozessoren der Anbieter vertraglich dokumentieren. Generierte Action Items fallen oft generisch aus; bei meldepflichtigen Vorfällen ist Engineering-Sign-off erforderlich, bevor ein Draft in aufsichtsbehördliche Berichte einfließt.
sources: []
---
