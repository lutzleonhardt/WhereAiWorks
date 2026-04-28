---
stage: customer-support
order: 8
roles:
  - customer-support
title: Strukturierte Eskalation mit AI-vorbereitetem Kontext
goal_label: Übergabe von Bot zu Mensch oder Tier-1 zu Tier-2 ohne Kontextverlust
suitability: good_fit
rationale: Ada und Cognigy.AI liefern dedizierte Handoff-Module mit konfigurierbarem Payload (Transcript, Intent, NLU-Confidence, Eskalationsgrund) als produktreifes Feature — strukturierte Bot-zu-Mensch-Übergaben sind damit keine Eigenentwicklung mehr. Für DACH-Teams löst das Pattern das konkrete Problem wiederkehrender Rückfragen beim L1→L2-Wechsel durch maschinenlesbare Übergabepakete.
tools:
  - id: parloa-com
    fit: conditional
    sources:
      - id: parloa-com
    why_it_fits: "Parloa ist deutscher Voice-/Conversational-AI-Anbieter mit DACH-Logos (Decathlon, ERGO) und Contact-Center-Fokus. Bei Eskalation strukturierte Übergabe an Human Agents inkl. Transcript, Intent und Customer-ID — relevant für DACH-Enterprises mit Voice-First-Setup. Einschränkung: Voice-Fokus; reine Chat-Bot→Mensch-Übergaben sind nicht Kernziel."
    enterprise_readiness: enterprise_ready
  - id: dixa-com
    fit: conditional
    sources:
      - id: dixa-com
    why_it_fits: "Dixa ist EU-CX-Plattform (Dänemark) mit integriertem Solvemate-Bot, EU-Hosting und DPA-Standard nach DACH-Maßstab. Bot-zu-Agent-Übergabe inkl. Conversation-Summary direkt in der Conversation-Inbox. Likely missed by market scan because als 'Conversational Customer Engagement Suite' positioniert, nicht als AI-Agent. Einschränkung: Eher Mid-Market als Großkonzern-Einsatz."
    enterprise_readiness: team_ready
  - id: usu-com
    fit: conditional
    sources:
      - id: usu-com
    why_it_fits: "USU ist DACH-Veteran (Möglingen, börsennotiert) für Customer-Service-Knowledge und Service-Bots; bündelt KI-Eskalation mit klassischer Knowledge-Base. Likely missed by market scan because als Knowledge-Management-Suite und DACH-only Player außerhalb US-CX-AI-Listicles unsichtbar — für DACH-Konzerne ein etablierter Anbieter mit dt. Mutterhaus. Einschränkung: Kerngeschäft Knowledge Management — AI-Eskalations-Features jünger und weniger ausgereift."
    enterprise_readiness: enterprise_ready
  - id: ada-cx
    fit: good_fit
    sources:
      - id: ada-cx-platform
      - id: docs-ada-cx-docs-handoffs
      - id: usefini-com-guides-ai-support-platforms-human-agent-handoff
    why_it_fits: "Ada bietet AI-Bot mit dediziertem Handoff-Modul: Transcript, Intent, Customer-ID und bisherige Bot-Aktionen werden strukturiert ans CRM (Zendesk/Salesforce/Kustomer) übergeben. SOC2/ISO27001/GDPR und EU-Datenresidenz (Premium) machen es DACH-tauglich. Einschränkung: EU-Datenresidenz erst in höheren Plänen; Enterprise-Pricing."
    enterprise_readiness: enterprise_ready
  - id: cognigy-com
    fit: good_fit
    sources:
      - id: cognigy-com
      - id: docs-cognigy-com-ai-escalate-handovers
      - id: gartner-com-reviews-market-enterprise-conversational-ai-platforms-vendor-cognigy-product-cognigy-ai-platform
    why_it_fits: "Cognigy bietet Conversational AI mit dediziertem Handover-to-Human-Agent-Node: konfigurierbarer Payload mit History, Variablen, NLU-Confidence und Eskalations-Grund, Connectoren zu Genesys, Salesforce, 8x8, Cognigy Live Agent. Deutscher Anbieter (jetzt NICE-Tochter) mit EU-Hosting, ISO 27001 und Forrester/Gartner-Anerkennung — naheliegender DACH-Enterprise-Default. Einschränkung: Implementierung ist Designer-/Developer-zentriert; eher für Großkonzerne/Contact-Center geeignet."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: good_fit
    sources:
      - id: freshworks-com-freddy-ai
      - id: aiagentsquare-com-blog-freshdesk-freddy-review-html
      - id: eesel-ai-blog-freshdesk-freddy-ai-copilot-to-summarize-conversations
    why_it_fits: "Freddy AI Agent (Bot) plus Freddy Copilot (Agent-Assist) im Freshdesk-/Freshchat-Stack erzeugen bei Eskalation strukturierte Übergaben mit Summary (Issue/Steps Taken/Outcome) und Customer-Profile-Snapshot — Bot-Handoffs >10 Messages werden automatisch summiert in Private Note. EU-Datacenter und DACH-Mittelstandsbasis vorhanden. Einschränkung: Generative-Qualität in Deutsch je nach Use Case schwächer als Intercom Fin; Email-Agent antwortet nur auf Erstmessage."
    enterprise_readiness: enterprise_ready
  - id: intercom-com-fin
    fit: good_fit
    sources:
      - id: intercom-com-fin
      - id: aiagentsquare-com-blog-intercom-fin-review-2026-html
    why_it_fits: "Fin liefert das Standard-Pattern Bot→Mensch-Eskalation mit Conversation Summary, identifizierten Customer-Daten und Handoff-Reason direkt im Intercom-Inbox; G2 #1 AI Agent (2025 Winter), 65–67% Resolution Rate. Für DACH-Einsatz ist EU-Datenresidenz (Intercom EU) und DPA Pflicht. Einschränkung: EU-Datenresidenz nur in höheren Plänen, Default ist US."
    enterprise_readiness: enterprise_ready
  - id: salesforce-com-agentforce
    fit: good_fit
    sources:
      - id: salesforce-com-agentforce
      - id: vantagepoint-io-blog-sf-how-to-use-agentforce-einstein-ai-salesforce-2026-guide
      - id: eesel-ai-blog-salesforce-ai-escalation
    why_it_fits: "Agentforce für Service umfasst Service Agent (Bot) plus Einstein Copilot mit Case-Summary, Customer-Profil, vorhergehenden Aktionen und Next-Best-Action bei Eskalation; Routing über Omni-Channel-Flows mit Fallback-Queue. Hyperforce-EU-Region und Einstein Trust Layer adressieren DACH-Compliance-Anforderungen. Einschränkung: Wertschöpfung erst mit Data Cloud + Einstein Trust Layer — Lizenzkosten erheblich; Eskalations-Routing erfordert ergänzende Flow-Konfiguration."
    enterprise_readiness: enterprise_ready
  - id: zendesk-com-service-ai
    fit: good_fit
    sources:
      - id: zendesk-com-service-ai
      - id: aiagentsquare-com-blog-zendesk-ai-review-2026-html
    why_it_fits: "Zendesk AI bündelt AI Agents (vormals Ultimate.ai) und Agent Copilot mit Conversation Summary, Intent-Tagging und Suggested Next Steps für L1→L2-Handoffs; Ticket-Summary inkl. Public+Internal Notes seit 2026 standardmäßig in Suite Professional+. EU-Region (Frankfurt) und deutsche UI machen es zum DACH-Standard im Mid-/Enterprise-Markt. Einschränkung: AI-Features stufenweise auf Suite Professional/Enterprise verteilt; Copilot teils separater Add-on."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: good_fit
    sources:
      - id: genesys-com-capabilities-genesys-cloud-ai
      - id: help-genesys-cloud-376384
      - id: github-com-microsoft-agents-commit-9f122c566b03433c98b7e8b880175af93846c4b8
    why_it_fits: "Genesys Cloud AI inkl. Agent Copilot bietet Conversation Summary, Next-Best-Action und Bot-zu-Mensch-Übergabe mit Transfer-Summaries (Voice & Digital) in einem CCaaS-Backbone mit EU-Region (Frankfurt); Microsoft-Agents-Referenzimplementierung publiziert Conversation-Summary über Genesys Open Messaging an Live Agent. Likely missed by market scan because als CCaaS-Suite-Feature und nicht als reine 'AI Escalation'-Lösung positioniert — in DACH-Contact-Centern ist Genesys jedoch sehr verbreitet. Einschränkung: Nur in Genesys-Cloud-Stacks sinnvoll; Migration aus On-Prem/PureConnect aufwändig."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: good_fit
    sources:
      - id: nice-com-products-cxone-mpower-copilot-for-agents
      - id: help-nicecxone-com-content-agent-cxoneagent-enlightencopilotforagentscxa-htm
      - id: cxtoday-com-contact-center-nice-enlighten-ai-review-generative-ai-in-ccaas
    why_it_fits: "NICE CXone Mpower mit Enlighten Copilot bietet Eskalations-Summary (Pre-Transfer + AutoSummary), Sentiment, Next-Best-Action und Live-Agent-Assist im CCaaS-Backbone; CX-Today-Review bestätigt CX-spezifische Generative-AI-Tiefe. Likely missed by market scan because als CCaaS-Suite-Feature gebündelt — bei DACH-Enterprises mit großem Inbound-Volumen häufig der Default-Stack. Einschränkung: Wert nur, wenn CXone als Contact-Center-Plattform im Einsatz."
    enterprise_readiness: enterprise_ready
  - id: servicenow-com-products-now-assist-for-customer-service-management-html
    fit: good_fit
    sources:
      - id: servicenow-com-products-now-assist-for-customer-service-management-html
      - id: servicenow-com-community-csm-articles-now-assist-for-csm-case-summarization-ta-p-3346546
      - id: medium-com-markorsborn-a-quick-win-with-servicenow-ai-for-customer-service-management-csm-1753998cf88b
    why_it_fits: "Now Assist erweitert ServiceNow CSM um Case Summarization, Sidebar-Discussion-Summary, Activity Response Generation und Resolution Notes direkt im Configurable Workspace — explizit für Escalations und Handoffs vorgesehen. Likely missed by market scan because Suite-Feature in einem ITSM-/CSM-Backbone, nicht als 'AI Tool' beworben — bei DACH-Konzernen mit ServiceNow-Stack jedoch der naheliegende Default. Einschränkung: Wert nur, wenn ServiceNow CSM bereits als Customer-Service-Backbone im Einsatz ist; Skill muss aktiviert/konfiguriert werden."
    enterprise_readiness: enterprise_ready
start_here: Mit dem Handoff-Modul des bestehenden Bot-Anbieters beginnen; wer neu aufsetzt, erreicht mit Ada (CRM-Integration out-of-the-box) oder Freshworks Freddy (DACH-Mittelstand, EU-Datacenter) den schnellsten Einstieg. Zunächst nur Pflichtfelder erzwingen — Issue, Steps Tried, Missing Data — und Erweiterungen wie SLA Risk erst einführen, wenn die Basisübergabe stabil läuft.
caveats: AI-generierte „Probable Root Cause“-Felder werden von Tier-2 oft zu unkritisch übernommen — ein expliziter Konfidenz-Hinweis im Template reduziert das Haftungsrisiko bei Kundenbeschwerden. EU-Datenresidenz ist bei Ada und Cognigy.AI nicht im Basisplan enthalten; DACH-Teams müssen Hosting-Region und DPA vor Go-live klären.
sources: []
---
