---
stage: customer-support
order: 18
roles:
  - product-manager
  - customer-support
title: EU-AI-Act-Transparenz-Disclosure und Mensch-Eskalations-Pfad
goal_label: Pflicht-Disclosure und Mensch-Pfad als designter Use-Case behandeln
suitability: good_fit
rationale: Cognigy.AI und Parloa bieten native Bausteine für Voice-Greeting, Chat-Intro und CCaaS-Handover, mit denen sich aktive Disclosure plus designter Mensch-Pfad als Standard-Flow modellieren lässt — beide Plattformen sind mit BaFin-/FINMA-Bestandskunden in DACH belegt. Dieser Use-Case wird kaum als eigenständige Capability vermarktet, ist aber für jeden Customer-Facing-Bot EU-rechtlich bindend.
tools:
  - id: genesys-com-genesys-cloud
    fit: conditional
    sources:
      - id: genesys-com-genesys-cloud
    why_it_fits: "EU-Frankfurt-Region, Banking-Footprint und Predictive-Routing reduzieren das Tier-3-Dead-End-Risiko strukturell. In Kombination mit Cognigy/boost.ai als Bot-Layer und einem Governance-Overlay tragfähig für FINMA-/Compound-Law-Setups. Einschränkung: Disclosure-Wording-Versionierung muss extern gepflegt werden."
    enterprise_readiness: enterprise_ready
  - id: kore-ai
    fit: conditional
    sources:
      - id: kore-ai
    why_it_fits: "Bot-Persona-Konfiguration, Disclaimer-Snippets und Channel-Konsistenz mit Banking-/Versicherungs-Referenzen. Tragfähig in DACH-Konzernen mit Eigenleistung im Compliance-Wording. Einschränkung: Compliance-Module generisch, nicht Art.-50-spezifisch."
    enterprise_readiness: enterprise_ready
  - id: nice-com-products-cxone-mpower
    fit: conditional
    sources:
      - id: nice-com-products-cxone-mpower
    why_it_fits: "CCaaS-Backbone mit Enlighten-AI für Self-Service plus orchestrierten Eskalations-Pfaden über Voice/Digital. Channel-konsistente Disclosure ist im Routing-Modell instrumentierbar; sinnvoll als Schicht unter einem dedizierten Bot-Layer. Einschränkung: AI-Act-Art.-50-Story nicht differenziert."
    enterprise_readiness: enterprise_ready
  - id: salesforce-com-agentforce
    fit: conditional
    sources:
      - id: salesforce-com-agentforce
    why_it_fits: "Im Service-Cloud-Stack natürliche Wahl: konfigurierbare Agent-Persona, Trust Layer mit Audit-Trail und nahtlose Übergabe in Service-Cloud-Queues. Disclosure plus Mensch-Pfad als Standard-Flow im Salesforce-Tenant instrumentierbar. Einschränkung: Hyperforce-EU-Region nur mit Add-on; Default-Routing kann US berühren."
    enterprise_readiness: enterprise_ready
  - id: zendesk-com-service-ai
    fit: conditional
    sources:
      - id: zendesk-com-service-ai
    why_it_fits: "Mehrsprachige AI-Persona mit Channel-Konsistenz (Web, Messaging, E-Mail, Voice) und integrierter Eskalation in den Ticket-Flow. Mit Disziplin lässt sich Art.-50-Disclosure und Mensch-Pfad sauber abbilden, wenn der Default überschrieben wird. Einschränkung: Default-Disclosure ist nicht Art.-50-konform."
    enterprise_readiness: enterprise_ready
  - id: aleph-alpha-com-pharia-ai
    fit: conditional
    sources:
      - id: aleph-alpha-com-pharia-ai
    why_it_fits: "Sovereign-AI-Stack made in Heidelberg, mit nativem Audit-/Explainability-Layer, On-Prem-/Sovereign-Cloud-Optionen und expliziter Adressierung von BaFin-/FINMA-Anforderungen. Likely missed by market scan because Aleph Alpha sich als Foundation-Model-/Sovereign-Stack vermarktet, nicht als Customer-Support-Bot — der Customer-Service-Use-Case läuft als Reference-Implementation auf Pharia, nicht als beworbenes Produkt. Einschränkung: Customer-Service-Bot ist Enabler-Stack, nicht fertiges Produkt — Implementierungs-Partner notwendig."
    enterprise_readiness: team_ready
  - id: github-com-features-copilot
    fit: conditional
    sources:
      - id: microsoft-com-microsoft-copilot-microsoft-copilot-studio
    why_it_fits: "Mit EU-Data-Boundary, deutschem Tenant-Routing, konfigurierbarer Agent-Persona und Dynamics-365-Eskalation deckt der Microsoft-Stack Pflicht-Disclosure plus Mensch-Pfad als Konfig-Flag ab. Likely missed by market scan because Copilot Studio als Suite-Feature und nicht als 'AI-Act-Disclosure-Tool' vermarktet wird — in MS-zentrierten DACH-Konzernen ist es aber faktisch der Default. Einschränkung: Disclosure ist Designer-Aufgabe; Default-Templates sind nicht Art.-50-konform."
    enterprise_readiness: enterprise_ready
  - id: moin-ai
    fit: conditional
    sources:
      - id: moin-ai-en-features
    why_it_fits: "Hamburger Anbieter mit deutschem Hosting, deutscher UI und expliziter DSGVO-/AI-Act-Marketing-Linie für Mittelstand und Versicherer. Disclosure plus Live-Chat-Eskalation sind Standard-Bausteine. Likely missed by market scan because moin.ai ist ein DACH-only-Player ohne globales Marketing — Capability-Scans mit englischen Queries finden ihn typischerweise nicht. Einschränkung: Skalierung jenseits Mittelstand/Versicherung-Long-Tail prüfen."
    enterprise_readiness: team_ready
  - id: onetrust-com-de-products-data-access-governance
    fit: partial
    sources:
      - id: onetrust-com-products-ai-governance
    why_it_fits: "Etablierter Privacy-/Governance-Vendor mit großem DSGVO-Bestandskunden-Footprint in DACH; AI-Governance-Modul ergänzt Use-Case-Inventory und Art.-50-Transparenz-Tracking. Likely missed by market scan because OneTrust als Privacy-Player und nicht als AI-Act-Tool kategorisiert wird — in DACH-Konzernen mit OneTrust-Existing-Setup ist die AI-Act-Erweiterung aber der schmerzärmste Pfad. Einschränkung: Reiner Governance-Layer; ergänzt, ersetzt nicht."
    enterprise_readiness: enterprise_ready
  - id: boost-ai
    fit: good_fit
    sources:
      - id: boost-ai
      - id: contactcentertechnologyinsights-com-news-boostai-named-leader-in-2025-gartner-magic-quadrant
    why_it_fits: "Norwegischer EU-Anbieter mit harter Banking-/Versicherungs-Kundenliste in Nordics/DACH (SR-Bank, DNB, Tryg, Storebrand, If Insurance), EU-Hosting und Conduct-bewusster Eskalationslogik. Saubere Alternative zu Cognigy, wenn deutsches Voice-CCaaS-Backbone schon gesetzt ist. Drittes Jahr in Folge im Gartner MQ Conversational AI gelistet, 2025 als Leader anerkannt — bestätigt Enterprise-Tragfähigkeit für regulierte Branchen unabhängig vom Vendor-Marketing. Einschränkung: AI-Act-Art.-50-Marketing nicht explizit; Disclosure-Patterns sind Eigenarbeit."
    enterprise_readiness: enterprise_ready
  - id: cognigy-com
    fit: good_fit
    sources:
      - id: cognigy-com
      - id: callcentrehelper-com-nice-named-leader-in-forrester-wave-2026-273599-htm
      - id: gartner-com-reviews-market-enterprise-conversational-ai-platforms-vendor-cognigy-product-cognigy-ai-platform
    why_it_fits: "Düsseldorfer Conversational-AI-Plattform mit EU-Hosting, BaFin-/FINMA-Bestandskunden und nativen Bausteinen für Voice-Greeting, Chat-Intro und Handover an Genesys/Avaya/Salesforce. Damit lässt sich aktive Disclosure plus designter Mensch-Pfad als Standard-Flow modellieren — strukturell die solideste DACH-Antwort auf Art. 50. Forrester Wave 2026 Leader (höchste Punkte in 10 Kriterien, 4.5/5 Strategy) und Gartner Peer Insights mit Enterprise-Reviews zu Lufthansa-/Toyota-Skalen bestätigen die Plattformreife unabhängig. Einschränkung: Disclosure-Wording ist Designer-Verantwortung; Test-Suite über Sprachen/Channels Pflicht."
    enterprise_readiness: enterprise_ready
  - id: parloa-com
    fit: good_fit
    sources:
      - id: parloa-com
      - id: gartner-com-reviews-product-parloa-platform
      - id: techfundingnews-com-ai-powered-customer-service-automation-giant-parloa-eyes-200m-at-over-2b-valuation
    why_it_fits: "Berliner Conversational-AI-Plattform mit EU-Hosting, deutscher UI und Banking-/Versicherungs-/Telco-Kundenstamm in DACH (Swiss Life, BarmeniaGothaer, HSE, OBI, Deutsche Glasfaser). Voice-First-Architektur macht Pflicht-Disclosure als Greeting plus Mensch-Eskalation als CCaaS-Trigger sauber modellierbar. Likely missed by market scan because Parloa sich primär als Voice-CCaaS-Add-on und nicht als 'AI-Act-Compliance-Tool' vermarktet — ein klassischer DACH-Player, der in Capability-Suchen nach 'AI Act disclosure' nicht erscheint. Gartner Peer Insights mit 44 Reviews/4.5-Rating und unabhängige Tech-Press-Coverage zur $200M-Runde bei $2-3B-Bewertung bestätigen Enterprise-Skalierung. Einschränkung: AI-Act-Marketing ist implizit, nicht prominent — Compliance-Argumentation muss vom Käufer geführt werden."
    enterprise_readiness: enterprise_ready
start_here: "Den Einstieg mit Cognigy.AI oder Parloa machen: Disclosure als unveränderlichen ersten Flow-Block in allen aktiven Channels einrichten und nicht als nachträgliches Overlay behandeln. Mensch-Eskalation als definierten CCaaS-Trigger modellieren und 'Time-to-Human' von Beginn an als KPI tracken."
caveats: "Disclosure-Logik muss über alle Channels und Sprachen identisch greifen — die schwächste Implementierung wird zur Sanktions-Angriffsfläche. Der Mensch-Pfad muss zu einem erreichbaren Agent führen, nicht in eine Warteschleife: formelle Disclosure ohne echten Eskalationspfad ist kein ausreichender Schutz."
sources: []
---
