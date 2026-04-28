---
stage: customer-support
order: 13
roles:
  - customer-support
title: AI-Voicebot für Telefon-Self-Service
goal_label: Anrufe ohne menschlichen Agent abschließen
suitability: conditional
rationale: Parloa und Cognigy Voice sind enterprise-reife EU-Plattformen mit nachgewiesenen DACH-Referenzen in Versicherung, Banking und Infrastruktur — produktive Erstprojekte sind heute ohne Pilotlabor möglich. Voice-Self-Service stellt eigenständige Anforderungen an ASR-Latenz, Tonalität und Regulatorik, die ihn vom Chat-Kanal technisch wie compliance-rechtlich trennen.
tools:
  - id: aws-amazon-com-lex
    fit: conditional
    sources:
      - id: aws-amazon-com-lex
    why_it_fits: "AWS-Stack für Voice-Self-Service mit EU-Region (Frankfurt/Irland), LLM-Anbindung über Bedrock/Anthropic. Pragmatisch in AWS-First-Häusern; für Banken/Behörden mit Souveränitätsfokus zusätzlich AWS European Sovereign Cloud (ab 2025) prüfen. Einschränkung: Schrems-II/FISA-702 trotz EU-Region."
    enterprise_readiness: enterprise_ready
  - id: genesys-com-capabilities-virtual-agent
    fit: conditional
    sources:
      - id: genesys-com-capabilities-virtual-agent
    why_it_fits: "Genesys-Cloud-Voicebot ist der naheliegende Self-Service-Pfad für Genesys-Bestandskunden, in der DACH-Praxis aber meist Telefonie-Fundament für Cognigy/Parloa on top — Standalone-Wahl entsprechend selten. Einschränkung: US-Cloud — Schrems-II/FISA-702."
    enterprise_readiness: enterprise_ready
  - id: cloud-google-com-dialogflow-cx-docs
    fit: conditional
    sources:
      - id: cloud-google-com-dialogflow-cx-docs
    why_it_fits: "Google-Voicebot-Plattform mit eigener ASR/TTS, EU-Region Frankfurt, Gemini-Playbooks und Telefonie-Integration über CCAI-Partner (Genesys/Avaya/Cisco). Für DACH-Kunden mit GCP-Footprint pragmatischer Default-Kandidat — wenn Schrems-II-TIA tragfähig ist. Einschränkung: EU-Region schließt FISA-702 nicht aus — TIA + ergänzende Maßnahmen pflicht."
    enterprise_readiness: enterprise_ready
  - id: nice-com-products-cxone-mpower
    fit: conditional
    sources:
      - id: nice-com-products-cxone-mpower
    why_it_fits: "LLM-basierter Voice-Self-Service als Teil der NICE-CXone-Suite mit EU-Region. Sinnvoll fast nur als Add-on für Bestandskunden; Standalone-Beschaffung praktisch unmöglich. Einschränkung: Bündelung mit CXone — Standalone-Beschaffung untypisch."
    enterprise_readiness: enterprise_ready
  - id: telegra-de
    fit: conditional
    sources:
      - id: telegra-de
    why_it_fits: "Deutscher CCaaS mit Voicebot-/IVR-Modul und DE-Hosting; Verbreitung bei Sparkassen, Versicherern, Stadtwerken/Kommunen. Sinnvoll als Voicebot-Layer im telegra-Cloud-CC, weniger als Standalone-Self-Service-Plattform. Einschränkung: Voicebot eng an telegra-CCaaS gekoppelt — Auskopplung aufwändig."
    enterprise_readiness: team_ready
  - id: sikom-de
    fit: conditional
    sources:
      - id: sikom-de
    why_it_fits: "Deutscher CCaaS-Anbieter mit Voicebot-Modul, DE-Hosting und Verbreitung bei Versicherern, Versorgern und Mittelstand. Likely missed by market scan because Sikom positioniert sich als Contact-Center-Suite, nicht als 'AI-Voicebot' — typischer DACH-Suite-Player, der bei Capability-Suchen unter den Tisch fällt. Einschränkung: Voicebot-Logik klassisch, LLM-Integration im Aufbau."
    enterprise_readiness: team_ready
  - id: cognigy-com-products-cognigy-voice
    fit: good_fit
    sources:
      - id: cognigy-com-products-cognigy-voice
      - id: callcentrehelper-com-nice-named-leader-in-forrester-wave-2026-273599-htm
      - id: gartner-com-reviews-market-enterprise-conversational-ai-platforms-vendor-cognigy-product-cognigy-ai-platform
    why_it_fits: "Düsseldorfer Conversational-AI-Marktführer mit dediziertem Voice-Produkt, EU-Hosting und tiefen CCaaS-Integrationen (Genesys, Avaya, Amazon Connect, NICE). Forrester-Wave-Leader 2024 und 2026 (4,5/5 Strategy, Top-Scores in 10 Kriterien); Gartner-Peer-Insights 4,8/5 bei 146 Reviews. BaFin-/DSGVO-Use-Cases dokumentiert; bei DACH-Konzernen häufig Default-Wahl. Einschränkung: ASR/TTS meist Sub-Auftragsverarbeitung (Microsoft/Google/Deepgram) — Schrems-II-Bewertung pro Subservice."
    enterprise_readiness: enterprise_ready
  - id: parloa-com
    fit: good_fit
    sources:
      - id: parloa-com
      - id: polling-reuters-com-business-german-ai-startup-parloa-triples-valuation-3-billion-latest-fundraise-2026-01-15
      - id: trendingtopics-eu-parloa-berliner-ki-agenten-startup-holt-350-mio-dollar-bewertung-steigt-auf-3-mrd-dollar
      - id: gartner-com-reviews-product-parloa-platform
    why_it_fits: "Berliner Scale-up mit AI-Agent-Plattform für Voice und Chat, EU-Hosting und harten Enterprise-Referenzen (Allianz, Swiss Life, Helvetia, Generali GOSP, BarmeniaGothaer, Booking.com, Flughafen Berlin-Brandenburg). Reuters-bestätigte Series-D mit 3-Mrd.-USD-Bewertung 1/2026; Gartner Cool Vendor CRM, CB Insights Leader Customer-Service-AI-Agents. Direkter Cognigy-Wettbewerber. Einschränkung: Hohes Wachstumstempo — Roadmap-Sprünge können laufende Implementierungen treffen."
    enterprise_readiness: enterprise_ready
  - id: poly-ai
    fit: good_fit
    sources:
      - id: poly-ai
      - id: cmswire-com-customer-experience-polyai-launches-agent-development-kit-to-put-enterprise-cx-development-back-in-developers-hands
      - id: poly-ai-case-studies-unicredit-zagrebacka-banka
      - id: gartner-com-reviews-product-polyai-1915845842
    why_it_fits: "Spezialisierter Voicebot-Anbieter für Banken, Hotels, Telcos mit eigenem Konversationsmodell, EU-Hosting und sehr starker Sprachqualität / Barge-in. UniCredit/Zagrebačka banka als belastbare Banking-Referenz (27 % Call-Automation, +14 NPS); Metro Bank, Starling Bank, FedEx, Marriott, Caesars im Portfolio. Relevanter Vergleichskandidat für DACH-Banken-RFPs, der häufig gegen Spitch und Cognigy antritt. Einschränkung: Customizing nur via PolyAI-Service-Team — Time-to-Change schwer planbar."
    enterprise_readiness: enterprise_ready
  - id: spitch-ai
    fit: good_fit
    sources:
      - id: spitch-ai
      - id: spitch-ai-de-blog-ueber-20-volksbanken-vertrauen-auf-spitch
      - id: braunschweiger-zeitung-de-wirtschaft-presseportal-article410185937-spitch-mit-neuem-sprachmodul-fuer-volksbanken-zustimmung-zu-agb-aenderungen-telefonisch-einholen-html
    why_it_fits: "Schweizer Voice-AI-Spezialist mit eigener ASR/TTS für Schweizerdeutsch und süddeutsche Dialekte, CH-/EU-Hosting. Über 20 Volksbanken produktiv (>15.000 Anrufe/Tag, >5 Mio. Anrufe seit Start, Erkennungsrate >90 % seit 2021); ots-Pressecoverage 2025/26 zu Volksbanken-Standard und AGB-Zustimmungsmodul. Kanonischer DACH-Pflichtkandidat für Telefon-Self-Service in regulierten Branchen, in denen Dialektqualität und Bankgeheimnis nicht verhandelbar sind. Einschränkung: Art-50-Disclosure muss im Flow aktiv konfiguriert werden."
    enterprise_readiness: enterprise_ready
start_here: Auf einem schmalen, transaktionalen Flow (Bestellstatus, Lieferzeitauskunft) mit Parloa oder Cognigy Voice starten — eingebetteter Eskalationspfad zum Menschen und aktive KI-Disclosure sind Pflicht ab dem ersten Tag. Für Banking-RFPs mit Fokus auf Sprachqualität und Barge-in ist PolyAI ein belastbarer Vergleichskandidat.
caveats: Art. 50 EU AI Act verlangt aktive KI-Kennzeichnung im Gesprächseinstieg; ASR/TTS-Subauftragsverarbeitung erfordert auch bei EU-gehosteten Plattformen eine Schrems-II-TIA pro Subservice. Dialektqualität bei Schweizerdeutsch und süddeutschen Varietäten ist ein reales Projektrisiko — sprachspezialisierte Anbieter wie Spitch adressieren diese Lücke gezielt.
sources: []
---
