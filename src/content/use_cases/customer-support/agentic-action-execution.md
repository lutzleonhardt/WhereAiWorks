---
stage: customer-support
order: 12
roles:
  - software-engineer
  - customer-support
title: Agentic AI mit System-Aktionen (Refund, Order-Update, etc.)
goal_label: End-to-End-Resolution statt nur Antwort
suitability: conditional
rationale: "Agentic Action Execution unterscheidet sich grundlegend von Deflection: Erst Function-Calling auf Bestell- und Billing-Backends liefert echte End-to-End-Resolution — Salesforce Agentforce und ServiceNow Now Assist bringen dafür nativen Audit-Trail und EU-Region mit. Sierra adressiert den Use Case am direktesten, erfordert aber vor jedem DACH-Pilot eine harte Prüfung von EU-Datenresidenz und AVV."
tools:
  - id: cognigy-com
    fit: conditional
    sources:
      - id: cognigy-com
    why_it_fits: "DACH-Conversational-AI mit ISO 27001, EU-Hosting und 'Agentic AI'-Release; LLM-Reasoning plus deterministische Flows mit API-Actions. Agentic-Layer ist juenger als die Flow-DNA, daher Tool-Use-Reife nicht auf US-Top-3-Niveau. Einschränkung: Agentic-Funktionen im Reifeprozess."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: conditional
    sources:
      - id: microsoft-com-en-us-microsoft-copilot-microsoft-copilot-studio
    why_it_fits: "Suite-Feature ueber M365/Power Platform mit EU-Datenresidenz und Sovereign-Cloud-Optionen; Custom-Agents mit Connectors zu Dynamics 365/SAP/Salesforce. Out-of-the-Box-Refund-/Order-Logik schwach, daher conditional. Einschränkung: Action-Reliability schwankt; Power-Automate-Glue noetig."
    enterprise_readiness: enterprise_ready
  - id: parloa-com
    fit: conditional
    sources:
      - id: parloa-com
    why_it_fits: "DACH-Vendor mit EU-Hosting, deutschem Support und Erfahrung in regulierten Branchen; Tool-Calls in Backend-Systeme moeglich. Voice-First-DNA passt nicht zu jedem Refund/Order-Flow. Einschränkung: Schwerpunkt Voice/CCaaS, weniger E-Commerce-Refund."
    enterprise_readiness: enterprise_ready
  - id: aleph-alpha-com-pharia-ai
    fit: partial
    sources:
      - id: aleph-alpha-com-pharia-ai
    why_it_fits: "Sovereign-AI aus DACH, On-Prem/EU-Hosting, Naehe zu BSI- und Public-Sector-Anforderungen; relevant als Build-Layer fuer regulierte Kunden, die kein US-SaaS koennen. Likely missed by market scan because Aleph Alpha ein Modell-/Plattform-Vendor ist, nicht als fertige Customer-Service-Loesung positioniert. Einschränkung: Kein fertiges Support-Produkt - Inbox/Audit/Eval selbst zu bauen."
    enterprise_readiness: evaluation_only
  - id: kore-ai
    fit: conditional
    sources:
      - id: kore-ai
    why_it_fits: "Etablierte Enterprise-Agent-Plattform mit Tool-Use, regulierten Industrien (Banking, Insurance, Healthcare) und EU-Hosting-Optionen. Likely missed by market scan because Kore.ai im US-DACH-CCaaS-Diskurs gegenueber Sierra/Decagon weniger laut auftritt, in regulierten Konzernen aber durchaus shortgelistet wird. Einschränkung: Tool-Use-Reife pro Industrievertikal sehr unterschiedlich."
    enterprise_readiness: enterprise_ready
  - id: pega-com-products-customer-service
    fit: conditional
    sources:
      - id: pega-com-products-customer-service
    why_it_fits: "BPM-/Workflow-Engine mit etablierter Audit- und Compliance-Disziplin; agentic-Layer (Pega GenAI / Blueprint) setzt auf vorhandene auditierbare Aktionen. Likely missed by market scan because Pega nicht primaer als 'AI'-Vendor positioniert ist, sondern als BPM-Suite mit starker DACH-Banken-/Versicherer-Praesenz. Einschränkung: Hohe Implementierungs- und Lizenzkosten."
    enterprise_readiness: enterprise_ready
  - id: intercom-com-fin
    fit: good_fit
    sources:
      - id: intercom-com-fin
      - id: wyse-tools-reviews-intercom-fin-review
    why_it_fits: "Fin Tasks/Data Connectors heben Fin von Deflection auf echte Action-Execution gegen Shopify/Stripe/Custom-APIs; EU-Hosting verfuegbar. Solide Wahl fuer DACH-E-Commerce, fuer BaFin-Kontexte aber nur Zweitwahl. Einschränkung: Outcome-Pricing kann bei hoher Action-Quote teuer werden."
    enterprise_readiness: enterprise_ready
  - id: salesforce-com-agentforce
    fit: good_fit
    sources:
      - id: salesforce-com-agentforce
      - id: forrester-com-blogs-salesforce-launches-agentforce-what-technology-leaders-need-to-know
      - id: gartner-com-reviews-product-agentforce-service
    why_it_fits: "Bei Service-Cloud-Bestand naechstgelegene Variante mit nativem Trust-Layer/Audit-Trail und Hyperforce-EU-Region; Aktionen ueber Apex/Flow/MuleSoft. Praktisch nur sinnvoll im Salesforce-Stack. Einschränkung: Lock-in im Salesforce-Universum; Forrester sieht heutige Agenten eher als 'repaved cow paths' denn als autonome Worker."
    enterprise_readiness: enterprise_ready
  - id: servicenow-com-products-now-assist-for-customer-service-management-html
    fit: good_fit
    sources:
      - id: servicenow-com-products-now-assist-for-customer-service-management-html
      - id: stackscout-co-blog-servicenow-ai-review-2026
      - id: efs-now-com-case-studies-ai-assisted-csm
    why_it_fits: "Agentic-Layer auf der Now-Workflow-Engine mit nativem Audit-Trail und EU-Region; in DACH-Enterprise (Banking, Versicherung, Telco) etabliert und damit DORA-/BaFin-anschlussfaehig. Einschränkung: Nur sinnvoll bei vorhandenem ServiceNow-Stack; agentic-Nutzen haengt an CMDB-/Prozess-Hygiene (Practitioner-Reviews warnen vor Aktionen auf veralteten Daten)."
    enterprise_readiness: enterprise_ready
  - id: sierra-ai
    fit: good_fit
    sources:
      - id: sierra-ai
      - id: aiagentsquare-com-agents-sierra-ai-html
      - id: callbotics-ai-blog-sierra-review
    why_it_fits: "Klarste 'AI agents that take action'-Positionierung mit Function-Calling auf Bestell-/Billing-Backends; trifft den Use Case End-to-End-Resolution direkt. Fuer DACH-Enterprise ist allerdings vor jedem Pilot eine harte Pruefung von EU-Region, AVV, ISO/SOC und DORA-/BaFin-Eignung Pflicht. Einschränkung: EU-Datenresidenz oeffentlich nicht dokumentiert; Implementierung weiterhin servicelastig (Agent Engineer + PM pro Deployment)."
    enterprise_readiness: enterprise_ready
  - id: zendesk-com-service-ai
    fit: conditional
    sources:
      - id: zendesk-com-service-ai-agents
      - id: robylon-ai-blog-zendesk-ai-agents-review-2026
      - id: staging4-kustomer-com-resources-blog-zendesk-ai-agents-features
    why_it_fits: "Innerhalb der Zendesk-Suite tightest integrierte Option mit API-Aktionen (Order, Refund, Subscription) ueber das Advanced-Add-on; Ultimate-Wurzeln in EU. Fuer DACH-Bestandskunden niedrigste Hurde, out-of-the-box aber Antwort-/KB-fokussiert. Einschränkung: Echte Aktionen erfordern Advanced-Tier, Custom-Procedures und i.d.R. Human-in-the-Loop; Outcome-Pricing kann skalieren."
    enterprise_readiness: enterprise_ready
start_here: Pilot mit einer einzigen, klar abgegrenzten Aktion starten — etwa Order-Status-Lookup oder Adress-Update — und Human-Confirm-Schwelle für höherwertige Transaktionen von Anfang an konfigurieren. Audit-Trail und Rollback-Endpoint müssen vor der ersten produktiven Aktion implementiert sein, unabhängig vom gewählten Vendor.
caveats: "Art. 22 DSGVO untersagt automatisierte Einzelentscheidungen mit rechtlicher Wirkung ohne Rechtsgrundlage und Eingriffsmöglichkeit — jede Refund- oder Konto-Aktion muss diesen Test bestehen. Idempotenz und Auth-Binding sind technische Grundvoraussetzungen: Doppelausführung durch einen Agent-Loop ist ein realistisches Failure-Mode, kein Randfall."
sources: []
---
