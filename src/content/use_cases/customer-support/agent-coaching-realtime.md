---
stage: customer-support
order: 15
roles:
  - customer-support
title: Echtzeit-Agent-Coaching im Live-Gespräch
goal_label: Agents im Moment führen statt nachträglich coachen
suitability: conditional
rationale: "Cresta Agent Assist trifft den Use-Case-Kern präzise: Verhaltenshinweise in Echtzeit während des Live-Gesprächs, klar getrennt von nachgelagerter QA oder Reply-Drafting. Balto adressiert denselben Bedarf als Pure-Play-Alternative mit Supervisor-Whisper-Mechanik; Cognigy Agent Copilot ergänzt als DACH-nativer Einstieg mit dokumentierter EU-Datenresidenz."
tools:
  - id: i2x-ai
    fit: conditional
    sources:
      - id: i2x-ai
    why_it_fits: "Berliner Anbieter fuer Real-Time Speech Coaching mit deutscher UI, deutschsprachigen Modellen und EU-Hosting; trifft den Use-Case-Kern (Live-Behavior-Hinweise im Voice-Call) genau und adressiert DACH-Compliance nativ. Likely missed by market scan because i2x ist ein DACH-Nischenanbieter ohne internationale Sichtbarkeit; in englischsprachigen Marktuebersichten fuer 'real-time agent coaching' praktisch unsichtbar. Einschränkung: Kleiner Vendor; Vendor-Risiko und Skalierbarkeit pruefen."
    enterprise_readiness: team_ready
  - id: github-com-features-copilot
    fit: conditional
    sources:
      - id: vier-ai
    why_it_fits: "Deutscher Contact-Center-/Conversational-AI-Vendor (Hannover) mit Real-Time-Analytics und Agent-Assist-Modulen, explizit auf BetrVG/DSGVO im DACH-Markt eingestellt. Likely missed by market scan because VIER ist ein DACH-only-Player ohne englischsprachige Marketing-Kategorie 'real-time agent coaching' und faellt durch internationale Capability-Suchen. Einschränkung: Real-Time-Behavior-Coaching-Tiefe nicht auf Cresta-Niveau."
    enterprise_readiness: team_ready
  - id: balto-ai
    fit: good_fit
    sources:
      - id: balto-ai
      - id: trustradius-com-products-balto-reviews
      - id: softwarereviews-com-products-balto
    why_it_fits: "Pure-Play Real-Time-Guidance, sauber gegen Post-Call-QA und Reply-Drafting abgegrenzt. Supervisor-Whisper-Mechanik passt zur Coaching-Mechanik. DACH-Praesenz duenn, EU-Hosting-Story zu klaeren. Einschränkung: BetrVG-Mitbestimmung zwingend; Whisper-Funktion verschaerft den Scope."
    enterprise_readiness: enterprise_ready
  - id: cresta-com-products-agent-assist
    fit: good_fit
    sources:
      - id: cresta-com-product-agent-assist
      - id: www2-prnewswire-com-news-releases-cresta-named-a-leader-and-a-force-to-be-reckoned-with-in-conversation-intelligence-for-the-contact-center-302474352-html
      - id: cxtoday-com-vendor-cresta
    why_it_fits: "Kategorie-Leader fuer Real-Time Behavior-Coaching im Live-Call, im Briefing namentlich genannt; Forrester Wave Conversation Intelligence Q2 2025 weist Cresta Hoechstwertung in 'Real-Time Guidance' aus. Trifft den Use-Case-Kern (Verhaltens-Output, Latenz) praezise. DACH-Einsatz nur unter Betriebsvereinbarung und mit geklaerter EU-Datenresidenz/DPA. Einschränkung: BetrVG §87(1)6 Mitbestimmung zwingend."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: good_fit
    sources:
      - id: genesys-com-capabilities-agent-copilot
      - id: gartner-com-reviews-product-genesys-cloud-cx
    why_it_fits: "CCaaS-Suite mit dokumentierten EU-Regions und breiter DACH-Installed-Base. Native Schicht ohne zweiten Stack, Compliance-Story bei Bestandskunden bereits geklaert. Einschränkung: Coaching-Tiefe eher Knowledge/Next-Best-Action statt Verhalten."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: good_fit
    sources:
      - id: nice-com-products-ai-for-customer-experience-enlighten-copilot-for-cx-employees
      - id: cxtoday-com-contact-center-nice-enlighten-ai-review-generative-ai-in-ccaas
    why_it_fits: "Suite-Layer mit der breitesten DACH-CXone-Basis; etablierte EU-Datacenter und Compliance-Prozesse, native Integration in WFM/QM. Pragmatischster Pfad fuer NICE-Bestandskunden. Einschränkung: Lock-in an CXone."
    enterprise_readiness: enterprise_ready
  - id: observe-ai-products-real-time-ai
    fit: good_fit
    sources:
      - id: observe-ai-products-real-time-ai
      - id: gartner-com-reviews-product-observe-ai-1542223741
      - id: globenewswire-com-news-release-2025-11-18-3190014-0-en-observe-ai-named-a-cool-vendor-in-2025-gartner-cool-vendors-in-customer-service-and-support-technology-report-html
    why_it_fits: "Eigene Real-Time-AI-Linie auf etabliertem QA-Fundament; Gartner Cool Vendor 2025 sowie Forrester Wave Real-Time Revenue Execution Q2 2024 (Strong Performer) belegen unabhaengige Anerkennung. Deckt Uebergang Post-Call-QA -> In-Call-Coaching. Die Doppelnutzung erweitert allerdings den BetrVG-Scope spuerbar. Einschränkung: QA + Live-Coaching ist BetrVG- und AI-Act-doppelt sensitiv."
    enterprise_readiness: enterprise_ready
  - id: verint-com-our-offerings-solutions-customer-engagement-real-time-agent-assist
    fit: good_fit
    sources:
      - id: verint-com-our-offerings-solutions-customer-engagement-real-time-agent-assist
      - id: trustradius-com-products-verint-real-time-agent-assist-reviews
      - id: gcom-pdo-aws-gartner-com-reviews-market-contact-center-workforce-engagement-management-vendor-verint
    why_it_fits: "Fuer Verint-WFM/QM-Bestandskunden in DACH (Banken, Versicherer) der naheliegende Suite-Pfad mit etablierten Compliance- und Mitbestimmungsprozessen aus dem QM-Umfeld. Einschränkung: Bot-basierte Lizenzierung kann skalieren-teuer werden."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: good_fit
    sources:
      - id: cognigy-com-products-agent-copilot
      - id: businesswire-com-news-home-20260415755072-en-nice-cognigy-named-a-leader-in-conversational-ai-by-independent-research-firm
      - id: gartner-com-reviews-market-enterprise-conversational-ai-platforms-vendor-cognigy-product-cognigy-ai-platform
    why_it_fits: "Deutscher Conversational-AI-Anbieter (Duesseldorf, jetzt NiCE) mit Agent Copilot, dokumentierter EU-/DE-Datenresidenz, deutschem UI/Modellschwerpunkt und expliziten DACH-Enterprise-Referenzen; Forrester Wave Conversational AI for Customer Service (2026) weist Cognigy als Leader aus, CMP Research Prism nennt Cognigy 'Pioneering' fuer Real-Time Agent Assist/Copilot. Likely missed by market scan because der Vendor wird primaer als 'Conversational-AI/Bots' kategorisiert und Agent-Copilot als Suite-Feature eines DACH-Players nicht als 'Real-Time-Agent-Coaching' getaggt. Einschränkung: Verhaltens-Coaching weniger ausgepraegt als bei Cresta/Cogito; Schwerpunkt Knowledge/Next-Best-Action."
    enterprise_readiness: enterprise_ready
start_here: Pilot mit Cresta Agent Assist oder Balto auf einer einzelnen Skill-Group starten, für die eine Betriebsvereinbarung vorab verhandelt wird. Coaching-Logs strikt fallbezogen — nicht agentenbezogen — auswerten; wer auf einen DACH-nativen Stack setzt, prüft Cognigy Agent Copilot als Suite-Einstieg.
caveats: Live-Coaching mit Logging gilt in DACH als Verhaltens- und Leistungskontrolle; ohne Betriebsvereinbarung nach §87(1)6 BetrVG ist der produktive Einsatz nicht möglich. Eine High-Risk-Einstufung nach EU AI Act ist zu prüfen, wenn das Tool Mitarbeiter-Performance bewertet.
sources: []
---
