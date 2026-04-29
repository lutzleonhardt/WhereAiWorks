---
stage: sales-presales
order: 17
roles:
  - customer-support
  - sales-presales
title: Live-Call-Assist und Echtzeit-Cues
goal_label: Während des Calls Echtzeit-Hinweise auf Einwände, Pricing und Battlecards einblenden
suitability: conditional
rationale: Genesys Cloud Agent Copilot belegt, dass Real-Time Knowledge-Surfacing und Next-Best-Action in Enterprise-CCaaS-Umgebungen produktionsreif sind — inklusive EU-Region (Frankfurt), etablierter DACH-DPA-Prozesse und dokumentierter Deutsch-Sprachunterstützung. Für Inside-Sales-Teams ohne Genesys-Bestand adressiert bao denselben Use Case mit DSGVO-konformen Live-Playbooks und deutschsprachigem NLP.
tools:
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Contact-Center-First mit dokumentiertem Real-Time Agent Assist (Live-Checklisten, Scripts, Sentiment-Alerts) und EU-Region. Für DACH-Enterprise-Inside-Sales-Center mit hohem Anrufvolumen passend, wenn Sentiment-Alerts EU-AI-Act-konform parametrisiert sind.
    caveats:
      - Sentiment-Alert-Komponente kann unter EU-AI-Act Art. 5(1)(f) Emotion-Recognition fallen — vor Roll-out abklären
      - Hauptmarkt Customer Service, B2B-Sales-Outbound adjazent
      - Voice-First — Web-Meetings (Zoom/Teams) weniger Standard-Use-Case
      - Funding-Pfad 2024–2025 schwächer — Vendor-Stabilität prüfen
      - Funding 2024–2025 zurückgegangen; Vendor-Stabilität für mehrjährige Verträge prüfen
      - Voice-First — Microsoft-Teams-Meetings/Zoom-Sales-Calls weniger Standard-Integration
      - Sentiment-Alerts können EU-AI-Act-Emotion-Recognition-Klausel berühren (Art. 5(1)(f) für Beschäftigtenkontext)
      - Hauptpositionierung Customer Service/Support, Sales eher Adjazenz
      - Enterprise-Pricing $60–180k/Jahr (Drittanbieter-Schätzung)
      - "DACH: Mitbestimmung BetrVG §87(1)6 zwingend"
    sources:
      - id: observe-ai-real-time-agent-assist
      - id: prospeo-io-s-cresta-alternatives
  - id: gong-io
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Gong ist post-call Best-in-Class und bringt mit der Real-Time-App für Zoom Behavior-Nudges (Talk/Listen-Ratio, Stille) — keine echten Battlecard-Pop-ups. Für DACH-Enterprises mit Frankfurt-Region und etablierten DPAs eine sichere Wahl, wenn der Schwerpunkt post-call mit Live-Light-Layer akzeptabel ist.
    caveats:
      - Live-Coaching schwach, primär post-call
      - Real-Time-App fokussiert auf Zoom; Teams-Phone-Coverage in DACH schwächer
      - Layoff-/Restrukturierungs-Wellen in 2024–2025 — Roadmap-Risiko für Real-Time-Komponente
      - Mitbestimmung erforderlich
      - Real-Time-App existiert primär für Zoom; Microsoft-Teams-Phone-Coverage in DACH-Stacks deutlich schwächer
      - Gong hat in 2024–2025 mehrere Restrukturierungs-/Layoff-Wellen gesehen — Roadmap-Risiko für Real-Time-Komponenten
      - Live-Behavior-Nudges (Talk/Listen-Ratio, Monolog-Alerts) sind aus Betriebsrats-Sicht mitbestimmungspflichtig — Gong selbst dokumentiert keinen 'BR-Modus'
      - Live-Coaching ist sekundär, Hauptwert liegt in post-call Revenue Intelligence
      - "Oliv-AI-Vergleich: 5–10 Min Analyse-Lag, keine Live-Battlecards"
      - Enterprise-Pricing (~$1.200+/User/Jahr, 5-Seat-Minimum, Plattformgebühr)
      - "DACH: Mitbestimmung BetrVG §87(1)6 erforderlich"
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Beste Call-Recording- und Post-Call-Analytics-Plattform
        - Smart Trackers gut für Themen-Tracking quer über Pipeline
      complaints:
        - Sehr teuer, B2B-Enterprise-only
        - Live-Coaching schwach, primär post-call
        - Nach Tool-Konsolidierung reduzieren CMOs Gong-Footprint
    sources:
      - id: help-gong-io-docs-by-gong-pre-trained-smart-trackers
      - id: gong-io-blog-turning-good-revenue-teams-into-great-ones-the-power-of-insights-now-in-real-time
      - id: oliv-ai-blog-gong-analytics
      - id: reddit-com-r-salesengineers-comments-1r3aiiz-how-are-you-using-ai
  - id: marketplace-microsoft-com-en-us-product-saas-audiocodes-live-hub-for-teams
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: AudioCodes ist Teams-Phone-zertifiziert und liefert Live-Agent-Assist als Teil eines Voice-AI-Stacks, der nativ über SIP/PBX/Teams läuft — relevant für DACH-Enterprises, die Live-Cues auf der Telefonie-Ebene statt im Browser fahren wollen. BYO-AI-Stack-Option erlaubt EU-LLM-Anbindung. Likely missed by market scan because AudioCodes wird als Voice-Infrastruktur (SBC) wahrgenommen; das Live-Hub-Live-Agent-Assist-Modul ist Suite-Feature und kommt in Sales-AI-Listen nicht hoch.
    caveats:
      - Live-Agent-Assist ist generisches Feature, kein Sales-spezifisches Battlecard-Produkt
      - Voraussetzung Teams-Phone-/SIP-Setup — nichts für reine Zoom-Sales-Teams
      - Eigenständige Sales-Coaching-Logik muss konfiguriert werden
      - Mitbestimmung erforderlich
    sources:
      - id: marketplace-microsoft-com-en-us-product-saas-audiocodes-live-hub-for-teams-tab-overview
  - id: getcloseai-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: DACH-Vendor mit DSGVO-konformer EU-Server-Aufstellung, Live-Einwand-Erkennung, WhisperCoach-Echtzeit-Formulierungen und Bildschirmkontext-Analyse — adressiert exakt den Briefing-Use-Case in deutscher Sprache. Likely missed by market scan because CloseAI ist DACH-Newcomer ohne Listicle-PR; das Produkt war im Market-Scan nicht repräsentiert.
    caveats:
      - Sehr junger Vendor (Launch 2025), keine Enterprise-Referenzen
      - Bildschirmkontext-Analyse (Screen-Reading) erweitert Datenflusssphäre erheblich — DPIA aufwendig
      - Mitbestimmung BetrVG §87(1)6 zwingend, kein dokumentierter BR-Prozess
      - ISO 27001/SOC2 nicht erkennbar — vor Roll-out hart prüfen
    sources:
      - id: getcloseai-com
  - id: five9-com-products-capabilities-agent-assist
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Five9 AI Agent Assist liefert Real-Time Guidance Cards, Live-Transkription und GenAI-Summaries als Suite-Feature der Five9-CCaaS-Plattform — fertig integriert mit Salesforce/Service-Now-Stacks, EU-Region verfügbar. Likely missed by market scan because Five9 ist primär CCaaS-Vendor und Agent-Assist taucht in Sales-Live-Cue-Capability-Listen nicht prominent auf, ist aber für Inside-Sales-Center mit Five9-Bestand der pragmatische Pfad.
    caveats:
      - Voraussetzung Five9-Bestand; kein Standalone-Tool
      - GenAI-Layer nutzt OpenAI/GPT — Sub-Processor- und EU-Routing prüfen
      - B2B-Outbound-Discovery nicht Lead-Use-Case
      - Mitbestimmung erforderlich
    sources:
      - id: five9-com-products-capabilities-agent-assist
  - id: salesmatrix-org
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "DACH-nativer Sales-Coaching-Anbieter mit Privacy-by-Design-Pitch: ausschließlich EU-Hosting, integrierte Consent-Einholung (Opt-in), Anonymisierungs-Modus für Mitarbeiterdaten und Private-Cloud-Tier für regulierte Konzerne. Adressiert direkt die DACH-Friktionen (DSGVO, BetrVG). Likely missed by market scan because Salesmatrix ist DACH-only und kommt in englischsprachigen Capability-Listen nicht vor."
    caveats:
      - Junger Vendor; Enterprise-Track-Record nicht öffentlich (>500 DACH-Sales-Teams claim ohne Ross-Verifikation)
      - ISO 27001/SOC2-Status nicht prominent dokumentiert
      - Echtzeit-Tiefe (NLP-Engine) sollte im PoC validiert werden — Marketing-Sprache stark
      - Sales-B2B-Outbound nicht der einzige Use-Case; eher allgemeines Sales-Coaching
    sources:
      - id: salesmatrix-org
  - id: bao-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Münchner Conversation-Intelligence-Plattform mit interaktiven Live-Playbooks, Einwand-Bibliothek und CRM-Sync — explizit DSGVO-konform und auf Deutsch trainiert. Vendor-Case-Studies belegen Deployments bei TeamViewer (+43% Win-Rate), Conrad Electronics (+15% Conversion) und Personio, was grundsätzliche Enterprise-Tauglichkeit plausibilisiert. Liefert genau die Live-Cues auf Einwände/Pricing/Battlecards, die das Briefing fordert, mit DACH-nativem Sprachverständnis. Fit auf conditional gesetzt, da keine unabhängigen Reviews die Vendor-Claims bestätigen.
    caveats:
      - Keine unabhängigen Reviews auf OMR, G2 oder Capterra gefunden — Vendor-Claims nicht durch Drittquellen verifizierbar
      - Kleinerer Vendor (Mittelstand); Konzern-Referenzen nur über Vendor-Case-Studies, nicht öffentlich verifizierbar
      - Mitbestimmung BetrVG §87(1)6 zwingend, aber bao bringt DACH-spezifische Vorlagen mit
      - Schwerpunkt Inside-Sales/Outbound — passt zum Briefing; B2B-Enterprise-Discovery ist Standard-Use-Case
      - Echte Live-Cue-Tiefe (LLM-basiert vs. Playbook-Trigger) sollte im PoC validiert werden
    sources:
      - id: bao-ai
      - id: omr-com-en-reviews-product-bao
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Genesys Cloud Agent Copilot liefert Real-Time-Transkript, Knowledge-Surfacing und Next-Best-Action nativ in der Genesys-Cloud-CCaaS-Plattform — mit EU-Region (Frankfurt), bestehenden DPAs und ISO 27001/SOC2/HIPAA-Attestierungen. Forrester Wave Q2 2025 Leader mit höchsten Scores für AI-Architektur und GenAI/LLM-Support; 469 TrustRadius-Reviews (4.3/5) bestätigen Enterprise-Deployment-Qualität. Agent Copilot explizit in allen Plänen enthalten (nicht Add-on). Deutsch- und Swiss-German-Sprachunterstützung dokumentiert.
    caveats:
      - Voraussetzung ist Genesys-Cloud-Bestand — kein Standalone-Live-Cue-Tool
      - Sales-Outbound-B2B nicht Lead-Use-Case; primär Service/Inside-Sales
      - Mitbestimmung BetrVG §87(1)6 zwingend, aber Genesys hat etablierte BR-/DPA-Prozesse in DACH
      - Live-Battlecards im Sales-Sinn weniger ausgeprägt als bei spezialisierten Anbietern (Clari Copilot/Balto)
    sources:
      - id: genesys-com-en-gb-capabilities-agent-assist
      - id: trustradius-com-products-genesys-cloud-reviews
      - id: genesys-com-company-newsroom-announcements-genesys-ranked-as-a-leader-in-cloud-contact-center-report-by-top-analyst-firm
start_here: "Wer Genesys Cloud betreibt, aktiviert Agent Copilot im bestehenden Plan und begrenzt Echtzeit-Cues initial auf zwei bis drei Szenarien (Top-Einwand, Pricing, Battlecard). Ohne CCaaS-Bestand bietet bao den pragmatischeren Einstieg: DACH-natives Deployment, Betriebsrats-Vorlagen inklusive, PoC innerhalb weniger Wochen möglich."
caveats: "Mitbestimmung nach §87(1)6 BetrVG ist für alle Echtzeit-Monitoring-Komponenten zwingend — kein Roll-out ohne Betriebsvereinbarung. Visueller Cognitive Load bleibt ein reales Risiko: zu viele gleichzeitige Cues lenken Reps ab und senken die Akzeptanz, besonders im B2B-Outbound."
sources: []
---
