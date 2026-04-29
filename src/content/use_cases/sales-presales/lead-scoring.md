---
stage: sales-presales
order: 2
roles:
  - sales-presales
title: AI-Lead-Scoring und Account-Prioritisierung
goal_label: Leads und Accounts automatisch nach Conversion-Wahrscheinlichkeit ranken
suitability: good_fit
rationale: CRM-natives Predictive Scoring mit erklärbaren Top Factors — wie in Salesforce Einstein und Dynamics 365 Sales — ist in DACH-Enterprise-Stacks heute ohne Zusatzvendor aktivierbar. Als Sales-Aid positioniert, bleibt es unterhalb der DSGVO-Art.-22-Schwelle und ist damit der direkteste Weg zu messbarer Pipeline-Priorisierung.
tools:
  - id: cognism-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: EMEA-/DACH-fokussierter Datenanbieter mit ISO 27001/27701, SOC 2 II, Art.-14-Notifications und 15-Land-DNC-Screening. In regulierten DACH-Branchen (Banking, Versicherung) oft die einzige defendierbare B2B-Daten-/ICP-Scoring-Option, wenn ZoomInfo durch Datenschutzpruefung faellt.
    caveats:
      - Scoring/Modelle weniger ausgereift als 6sense/Demandbase
      - Kunde muss eigenen LIA-Test fuer Art. 6(1)(f) fuehren
      - Annual-Contracts ueblich, Pricing-Floor relativ hoch fuer SMB
      - LIA muss vom Kunden selbst geleistet werden - Cognisms Compliance-Posture ersetzt nicht die eigene Rechtsgrundlage
      - Scoring-Logik ist eher rule-based als ML - fuer komplexes Predictive nicht ausreichend
      - Scoring/Modelle weniger ausgereift als bei 6sense/Demandbase
      - Legitimate-Interest-Basis (Art. 6(1)(f)) erfordert eigenen LIA-Test
      - Annual-Contracts ueblich
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Beste DSGVO-/DACH-Compliance-Posture
        - Mobilfunk-Daten in EMEA klar besser
      complaints:
        - Scoring weniger differenziert als ABM-Plattformen
        - Preis hoch fuer SMB
    sources:
      - id: cognism-com-de-compliance
      - id: datastackguide-com-tools-cognism
      - id: unifygtm-com-explore-b2b-data-providers-european-coverage
  - id: hubspot-com-products-artificial-intelligence-use-cases-resolve-support-tickets
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Predictive Lead Scoring eingebaut in Marketing/Sales Hub Enterprise; fuer HubSpot-zentrische DACH-Mid-Markets schnellste Time-to-Value. Frankfurt-Region seit 2023 verfuegbar, muss explizit gewaehlt werden. Black-Box-Wahrnehmung des Predictive-Scores erschwert Reps-Adoption und Art.-22-Argumentation.
    caveats:
      - Predictive nur in Enterprise (~3.600 USD/Monat)
      - Credit-Modell der Breeze-Agents schafft Kosten-Unsicherheit
      - EU-Hosting muss aktiv ausgewaehlt werden
      - Modell flacher als spezialisierte Predictive-Tools
      - EU-Hosting (Frankfurt) seit 2023 verfuegbar, muss aber explizit gewaehlt werden
      - Credit-Modell fuer Breeze-Agents schafft Kosten-Unsicherheit fuer Procurement
      - AI-Add-Ons (Breeze Copilot/Agents) haben separate DPA-Anhaenge - juristische Pruefung empfohlen
      - Predictive Scoring nur in Enterprise (~3.600 USD/Monat)
      - Credit-Modell fuer Breeze-Agents kann unerwartet teuer werden
      - Modell ist relativ flach im Vergleich zu spezialisierten Predictive-Tools
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Sofort einsetzbar fuer HubSpot-Kunden
        - Engagement+Demographic+Combined Scoring kombinierbar
      complaints:
        - Predictive nur in Enterprise, teuer
        - Black-Box-Wahrnehmung im Predictive-Modus
    sources:
      - id: resolve247-ai-blog-hubspot-breeze
      - id: cotera-co-articles-hubspot-ai-crm-automation
      - id: reddit-com-r-hubspot-comments-1lv6lcz-how-good-is-hubspots-manual-lead-scoring-versus-a
  - id: madkudu-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Glass-Box-Logik mit transparenten Score-Begruendungen ist starkes Plus fuer Art.-22-/AI-Act-Erklaerbarkeit. Fuer B2B-SaaS mit PLG-Funnel beste erklaerbare Wahl. DACH-Footprint und EU-Hosting-Story duenn, daher in regulierten Branchen Pruefbedarf.
    caveats:
      - DACH-Referenzkunden oeffentlich rar - Vendor-DD pruefen
      - Hosting-Region und EU-DPA explizit anfragen
      - Schwaecher fuer reine Outbound-/ABM-Motions
      - Pricing ab ~999 USD/Monat
      - DACH-Referenzkunden oeffentlich rar - Vendor-Stabilitaet (Mitarbeiterzahl/Funding) im DD pruefen
      - Benoetigt ausreichende Conversion-Historie (~5M ARR aufwaerts)
      - Schwaecher als Komplettloesung fuer reine Outbound-/ABM-Motions
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Erklaerbare Scores ('Glass Box')
        - PLG-Signale aus Segment/Mixpanel
      complaints:
        - Eng auf SaaS/PLG zugeschnitten
        - Implementierungsaufwand bei Datenluecken
    sources:
      - id: genesysgrowth-com-blog-clearbit-vs-explorium-vs-madkudu
      - id: breadcrumbs-io-blog-breadcrumbs-and-madkudu
      - id: reddit-com-r-salesforce-comments-1o15x0a-any-experience-with-lead-scoring
  - id: learn-microsoft-com-en-us-dynamics365-sales-digital-selling-scoring
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Native ML-Scores 0-100 mit modifizierbaren Top Factors in Dynamics 365 Sales Enterprise/Premium; in DACH-Microsoft-Stacks (Outlook/Teams/Dataverse) unter EU Data Boundary einsetzbar. Score nur 24h-Refresh - fuer Realtime-Routing zu langsam. 1.500-Records-Limit kann zum Lizenz-Upgrade zwingen.
    caveats:
      - Min. 40 qualifizierte + 40 disqualifizierte Leads zum Training
      - 1.500 Scored Records/Monat in Enterprise-Lizenz
      - AI-Inference-Region pruefen, EU Data Boundary umfasst nicht zwingend alle AI-Workloads
      - Score-Refresh 24h - nicht realtime
      - EU Data Boundary deckt Dataverse-Daten zu, AI-Inference koennte je nach Region auch ausserhalb laufen - Doku pruefen
      - Score wird nur alle 24h aktualisiert; ungeeignet fuer Realtime-Routing-Use-Cases
      - Mindestens 40 qualifizierte und 40 disqualifizierte Leads noetig zum Training
      - Limit von 1.500 Scored Records pro Monat in Enterprise-Lizenz
      - Forecasting-Tiefe geringer als Salesforce Einstein laut Vergleichen
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Out-of-the-box-Setup, Top-Factors konfigurierbar
        - Score direkt im Lead/Opportunity-Form
      complaints:
        - 1.500-Records-Limit zwingt zu Lizenz-Upgrade
        - Schwaecher als Einstein bei Forecasting-Tiefe
    sources:
      - id: learn-microsoft-com-en-us-dynamics365-sales-digital-selling-scoring
      - id: aismartventures-com-posts-microsoft-copilot-for-sales-vs-salesforce-einstein-which-ai-wins-in-2026
      - id: dynamicscommunities-com-ug-dynamics-ce-crm-ug-smarter-selling-with-predictive-lead-scoring-in-dynamics-365-sales
  - id: salesforce-com-sales-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: CRM-natives Predictive Lead Scoring mit erklaerbaren Top-Factors; im DACH-Enterprise mit Salesforce-Stack der Default. Hyperforce-Frankfurt deckt Datenresidenz, Top-Factors-Output reicht fuer Art.-22-Argumentation als Sales-Aid (nicht rechtswirkende Entscheidung). Bei B2C-Use-Cases (Versicherung, Banking) bleibt Art.-22- und EU-AI-Act-High-Risk-Pruefung Pflicht.
    caveats:
      - Add-on-Pricing 50-150 USD/User/Monat zusaetzlich
      - Mind. ~1.000 konvertierte Leads fuer brauchbares Modell noetig
      - Hyperforce-Region und DPA/Sub-Prozessoren-Liste vertraglich fixieren
      - Art.-22- und AI-Act-Pruefung bei B2C/regulated industries
      - Hyperforce-Hosting in Frankfurt verfuegbar, sollte fuer DACH-Compliance vertraglich gefordert werden
      - Bei Verwendung als Qualification-Gate in B2C (Versicherung/Banking) Art. 22 DSGVO und EU-AI-Act-High-Risk pruefen
      - DPA und Sub-Prozessoren-Liste regelmaessig auditieren - Drittstaaten-Transfer bleibt Schrems-II-Risiko
      - Add-on-Pricing, in der Praxis 50-150 USD/User/Monat zusaetzlich
      - Benoetigt min. ~1.000 konvertierte Leads fuer brauchbare Modelle
      - Modellqualitaet steht und faellt mit CRM-Hygiene
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Tiefe native CRM-Integration
        - Erklaerbare Top-Factors auf dem Lead-Record
      complaints:
        - Teures Add-on, hohe Implementierungskosten
        - Datenhygiene-Hunger, sonst Garbage-in/out
    sources:
      - id: aiagentsquare-com-compare-hubspot-ai-vs-salesforce-einstein-html
      - id: prospeo-io-s-ai-lead-scoring-tools
      - id: reddit-com-r-salesforce-comments-1o15x0a-any-experience-with-lead-scoring
  - id: business-adobe-com-products-marketo-adobe-marketo-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Marketo Engage kombiniert Behavior-+Predictive-Scoring mit ab Summit 2026 angekuendigten Agentic-AI-Capabilities. Fuer DACH-Enterprises, die Marketing-Automation und Lead-Scoring eng koppeln, weiterhin valider Default; EU-Hosting verfuegbar.
    caveats:
      - Predictive-Tiefe geringer als 6sense/MadKudu
      - Agentic-Features 2026 noch jung
      - AI-Inference-Region explizit vertraglich fixieren
      - Bias-Audit-Trail liegt beim Kunden
      - Adobe EU-Hosting verfuegbar, AI-Inference-Region explizit vertraglich fixieren
      - Bias-Audit-Argumentation fuer Predictive-Modelle ist Kunden-Verantwortung - Adobe liefert keine Audit-Trails out-of-the-box
      - Adoption von Agentic-Features noch jung
      - Pricing ab ~895 USD/Monat aufwaerts
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: business-adobe-com-blog-agentic-ai-redefining-user-experience-marketing-ops
      - id: prospeo-io-s-ai-lead-scoring-tools
  - id: docs-oracle-com-en-cloud-saas-sales-fasig-sales-intelligence-features-and-technologies-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Oracle Sales scored Leads automatisch (0-100, alle 12h) auf Basis Won/Lost-Historie; Eloqua liefert A1-D4-Engagement-Modell. Fuer DACH-Konzerne mit Oracle-CX-/Eloqua-Stack der realistische Default ohne neuen Vendor; EU Sovereign Cloud verfuegbar, was Datenresidenz-Argument abdeckt.
    caveats:
      - Eloqua A-D ist regelbasiert, nicht 'AI'
      - Modell-Tiefe < Salesforce Einstein
      - Implementierungskomplexitaet typisch fuer Oracle-CX
      - EU Sovereign Cloud explizit verlangen, falls Residenz strikt
      - Oracle EU Sovereign Cloud verfuegbar - explizit verlangen, falls Datenresidenz strikt
      - Eloqua-Modelle altern schnell, ohne aktive RevOps-Pflege Score-Drift wahrscheinlich
      - ML-Modell weniger ausgepraegt als Salesforce Einstein
      - Eloqua-A-D-Modell ist eher rule-based, nicht 'AI'
      - Implementierungs-Komplexitaet typisch fuer Oracle-CX
    sources:
      - id: docs-oracle-com-en-cloud-saas-sales-fasqa-how-does-the-ai-lead-score-get-calculated-html
      - id: docs-oracle-com-en-cloud-saas-marketing-eloqua-user-help-leadscoring-leadscoring-htm
  - id: learning-sap-com-courses-configuring-sap-sales-cloud-version-2-leveraging-machine-learning-for-intelligent-sales-and-lead-scoring
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: ML-basiertes Lead-/Opportunity-Scoring im SAP-CX-Stack; fuer DACH-Konzerne mit S/4HANA-Footprint der naheliegende Pfad - Daten bleiben im SAP-Ecosystem, was DSGVO-Argumentation und Joule-Integration vereinfacht. Modell-Tiefe geringer als spezialisierte Tools, aber fuer 'Scoring als Sales-Aid' ausreichend.
    caveats:
      - AI-Foundation-/Joule-Region vertraglich fixieren
      - Modell-Tiefe < spezialisierte ABM-Tools
      - Praktiker-Evidenz oeffentlich knapp - PoC obligatorisch
      - Setup nur sinnvoll bei sauberen Custom-Fields + Lead-Volumen
      - AI Foundation/Joule-Region (EU vs. US) explizit vertraglich fixieren
      - Praktiker-Evidenz oeffentlich knapp - PoC mit echten Daten obligatorisch
      - Modell-Tiefe geringer als bei spezialisierten ABM-/Predictive-Tools
      - Setup nur sinnvoll bei ausreichend Lead-Volumen + sauberen Custom-Fields
      - Praktikerstimmen oeffentlich knapp
    sources:
      - id: learning-sap-com-courses-configuring-sap-sales-cloud-version-2-leveraging-machine-learning-for-intelligent-sales-and-lead-scoring
      - id: erp-today-sap-embeds-ai-across-cx-in-q1-2026-release
  - id: compelling-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Likely missed by market scan because junger DACH-Anbieter (Koeln) ausserhalb der US-ABM-Klassiker. AI-native Sales-Intelligence mit autonomen Research-Agents, EU-Hosting, EU-AI-Act-/GDPR-Zertifikatsangabe - entkraeftet Schrems-II- und Drittstaaten-Argumentation in DACH-Procurement direkt.
    caveats:
      - Junges Produkt - Marktreife/Funding pruefen
      - Praktiker-Evidenz oeffentlich knapp
      - Selbstvergebene 'EU AI Act Certified'-Claims haengen an Audit-Stelle, vertraglich klaeren
    sources:
      - id: compelling-ai
  - id: everlead-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Likely missed by market scan because DACH-positionierte Plattform mit deutscher UI ausserhalb US-Mainstream. KI-Lead-Scoring + Next-Best-Action + Cross-Channel-Orchestrierung explizit DSGVO-positioniert, ueber HubSpot/Pipedrive integriert - relevant fuer DACH-Mid-Market, der US-Suiten meidet.
    caveats:
      - Praktiker-Evidenz und unabhaengige Reviews knapp
      - Vendor-Reife/Funding pruefen
      - Reine Vendor-Materialien als Compliance-Quelle - DPA und Hosting-Region vertraglich verifizieren
    sources:
      - id: everlead-ai
  - id: qymatix-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because DACH-only-Anbieter ausserhalb des US-ABM-Mainstreams. Deutscher Predictive-Sales-Anbieter (Karlsruhe, GmbH-Vertrag, deutscher Datenschutzansprechpartner) mit Cross-Sell-/Churn-/Pricing-Predictions - im DACH-B2B-Mittelstand mit ERP-Fokus oft die einfachste DSGVO-Antwort, weil keine Drittstaaten-Transfers noetig.
    caveats:
      - Kleines Unternehmen (~7 MA), Vendor-Risiko im DD pruefen
      - Fokus auf Cross-Sell/Churn/Pricing - reines Lead-Scoring nicht Kernprodukt
      - Skalierung fuer Konzern-Use-Cases unbewiesen
    sources:
      - id: qymatix-de
start_here: Mit dem Scoring-Modul der bereits eingesetzten CRM-Suite beginnen — Einstein für Salesforce-Stacks, Predictive Scoring in Dynamics 365 für Microsoft-Stacks — und die Top-/Bottom-Dezile drei Monate gegen tatsächliche Closes validieren. Im B2C-Kontext vor Go-live rechtlich sicherstellen, dass der Score nur als Entscheidungshilfe für Reps fungiert, nicht als alleiniges Qualifikations-Gate (Art. 22 DSGVO).
caveats: "Modellqualität steht und fällt mit CRM-Hygiene: ohne ausreichende Conversion-Historie — rund 1.000 qualifizierte Leads bei Einstein, mindestens 40+40 bei Dynamics — liefert das Modell keinen brauchbaren Output. Im B2C-Umfeld (Versicherung, Banking) Art. 22 DSGVO prüfen; erklärbaren Top Factors kommt dabei eine Schlüsselrolle für Reps-Adoption und Compliance-Argumentation zu."
sources: []
---
