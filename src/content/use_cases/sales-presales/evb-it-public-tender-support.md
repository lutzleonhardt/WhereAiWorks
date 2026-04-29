---
stage: sales-presales
order: 19
roles:
  - sales-presales
title: Öffentliche Ausschreibungen / EVB-IT / VgV-Vergaben
goal_label: Bieterantworten für deutsche/europäische Public-Sector-Ausschreibungen vorbereiten
suitability: conditional
rationale: Bidfix ist der erste DACH-native KI-Copilot, der EVB-IT/VgV-Vokabular, EU-Hosting und ISO-27001 in einem fertigen Produkt kombiniert und damit einen konkreten Einstiegspunkt für KI-gestützte Angebotsbearbeitung liefert. Für Organisationen mit strengeren Datenschutzauflagen bietet Aleph Alpha PhariaAI eine souveräne On-Prem-Option, auf der ein eigener Bid-Workflow aufgebaut werden kann.
tools:
  - id: bidfix-ai
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: DACH-nativer KI-Copilot mit EVB-IT/VgV-Vokabular, ISO-27001 und EU-Hosting; deckt Discovery, Analyse und Antwort-Vorbefüllung in Word/Excel ab und nimmt damit die meisten DACH-spezifischen Caveats weg. Reviewer-Pflicht und Audit-Trail bleiben Aufgabe des Kunden.
    caveats:
      - Junges Unternehmen (Launch März 2026), kleine Referenzbasis
      - Kein BSI-C5-Testat sichtbar — bei Cloud-EVB-IT-Verträgen ein potenzieller Showstopper
      - Auftragsverarbeitungsvertrag und Sub-Auftragnehmer-Liste sollten vor Pilot zwingend geprüft werden
      - Audit-Trail für generierte Bid-Inhalte (wer hat welche KI-Antwort wann freigegeben) muss in Demo verifiziert werden
      - "Reviewer-Pflicht bleibt: Halluzinierte Eignungsaussagen sind §-124-GWB-Risiko"
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Kostenlose Suche schlägt bezahlte Tools (DTAD, Mercell) bei Treffer-Qualität
        - Automatisierte Bid/No-Bid-Entscheidungen in Minutenschnelle statt Wochen
        - Team und Support-Qualität lobenswert, enge Begleitung durch Prozess
      complaints:
        - Sehr junges Unternehmen (Launch März 2026), geringe Referenzbasis
        - Halluzinationsrisiko bei Eignungsaussagen — Reviewer-Pflicht bleibt
    sources:
      - id: bidfix-ai
      - id: bidfix-ai-blog-software-beschaffung-im-oeffentlichen-sektor-verfahren-evb-it-und-abnahme
      - id: open-pr-de-news-1305514-bidfix-ai-ki-plattform-fuer-oeffentliche-ausschreibungen-html
  - id: aleph-alpha-com-pharia-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Sovereign-LLM-Backend für deutsche Behörden mit On-Prem- und STACKIT-Cloud-Option, BA-Rahmenvertrag und EU-AI-Act-Konformität — strukturell die saubere Antwort auf 'keine fremde Cloud'. Kein fertiges Bid-Tool, braucht Application-Layer.
    caveats:
      - Plattform/Modell, kein Produkt — Integrationsaufwand hoch
      - Modellqualität laut 2026-Berichten konkurrenzfähig, aber nicht durchweg auf Frontier-Niveau
      - Lock-in-Effekt durch Schwarz-Group-/STACKIT-Stack — alternative Sovereign-Pfade vergleichen
      - Total Cost of Ownership für Bid-Workflow oft unterschätzt
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - DACH-Sovereign-Anker, On-Prem möglich
      complaints:
        - Modellqualität hinter US-Frontier in komplexem Reasoning
    sources:
      - id: heise-de-news-bundesagentur-fuer-arbeit-will-19-millionen-euro-fuer-ki-ausgeben-9983642-html
      - id: deutschland-de-en-news-new-ai-alliance-for-government-agencies-and-critical-infrastructure
      - id: superkind-ai-blog-sovereign-ai
  - id: mistral-ai-products-le-chat
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: EU-Frontier-LLM mit DE/FR/SAP-Public-Sector-Allianz und €500-Mio.-EU-Vertrag — solider Sovereign-Modell-Layer, auf dem Bid-Workflows aufbauen können. Kein fertiges Tender-Tool; Application-Layer separat.
    caveats:
      - Generisches LLM, kein Tender-/EVB-IT-Tool — braucht Application-Layer (RAG, Workflow)
      - Public-Sector-Framework-Agreement erst Mitte 2026 final — bis dahin AVV/Hosting-Optionen pro Projekt verhandeln
      - Le-Chat-Enterprise-Hosting variiert je nach Vertragsmodell (SaaS/Self-Hosted) — pro Mandat verifizieren
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - EU-natives Hosting, wettbewerbsfähige Modellqualität
      complaints:
        - Reasoning-Lücke vs. US-Frontier in Spezialfällen
    sources:
      - id: bmds-bund-de-aktuelles-pressemitteilungen-detail-france-and-germany-join-forces-with-mistral-ai-and-sap-se-to-launch-a-sovereign-ai-for-public-administration
      - id: global-ai-watch-com-en-article-17483c87-8a03-414d-a77f-6c13eb83b529
      - id: superkind-ai-de-blog-sovereign-ai
  - id: ontec-ai-de-loesungen-vergabe-ki
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: AT/DE-Anbieter mit SAP/SharePoint-Integration und Triage-Fokus; passt zu DACH-Großunternehmen, die Erstanalyse und Risikoerkennung skalieren wollen. Drafting bleibt schwach, Referenzbasis dünn.
    caveats:
      - Hosting-Region und Modell-Provider nicht aus Public-Material erkennbar
      - Keine sichtbaren Behörden-Referenzen, die §-124-GWB-Risiko abfedern
      - Stärken liegen in Analyse und Triage, nicht im finalen Bid-Schreiben
      - Begrenzte unabhängige Praxisreferenzen verfügbar
    sources:
      - id: ontec-ai-de-loesungen-vergabe-ki
  - id: lighton-io
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Sovereign On-Prem-RAG-Plattform mit Air-Gap-Option, GDPR/AI-Act/SOC2 — explizit als RFP-Response-Backbone positioniert. Likely missed by market scan because LightOn als generische Enterprise-Search-Plattform vermarktet wird, nicht als Tender-Tool, und deshalb unter capability-only-Suchen nicht auftaucht.
    caveats:
      - Kein fertiges Bid-Workflow-Produkt — Application-Layer (Templates, Reviewer-Schritte) muss konfiguriert werden
      - Kein BSI-C5 öffentlich; SOC2 Type 1 (nicht Type 2) limitiert
      - Hardware-Investment für On-Prem-GPUs nicht trivial
    sources:
      - id: lighton-io
  - id: specgen-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Französischer Tender-AI-Anbieter mit On-Prem- oder Private-Cloud-Hosting auf eigenen FR-Servern, Mistral als Modell-Backend, ISO 27001/27017, Deutsch unterstützt — adressiert direkt den 'fremde Cloud verboten'-Caveat. Likely missed by market scan because der Anbieter primär französische Vergaben (RC/CCTP/CCAP) im Marketing zeigt und nicht explizit EVB-IT/VgV-Begriffe streut.
    caveats:
      - Vokabular und Templates auf französisches Vergaberecht trainiert — EVB-IT-Klauseln müssen nachgepflegt werden
      - Kein BSI-C5-Testat sichtbar
      - DACH-Referenzkunden im Public-Sector unklar
    sources:
      - id: specgen-ai
  - id: tenderbolt-ai-en
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: EU-only-Hosting, SOC2 + ISO 27001 + DSGVO, dedizierter Public-Sector-Use-Case mit Drafting und Dokumentenanalyse. Likely missed by market scan because Tenderbolt französisch positioniert ist und unter DACH-spezifischen Suchen nicht prominent surfacet, obwohl die Compliance-Story für DACH passt.
    caveats:
      - Keine BSI-C5-Zertifizierung sichtbar
      - DACH-Marktverankerung und EVB-IT-Spezifik dünn
      - Praxis-Referenzen aus deutschem öffentlichen Sektor unklar
    sources:
      - id: tenderbolt-ai-en
  - id: everwise-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Deutsche Server, kein Modelltraining auf Kundendaten, expliziter EVB-IT/C5/IT-Grundschutz-Wortschatz und Diff-/Extraktion-Funktion — passend für den DACH-Compliance-Caveat auf Analyse-Layer. HHL-Leipzig-Ausgründung mit benannten Kunden (Eurorad, Gaulhofer). Kein End-to-End-Drafting; unabhängige Außenvalidierung nicht verfügbar.
    caveats:
      - Welches LLM dahintersteht und ob es in DE/EU läuft, sollte schriftlich bestätigt werden — Marketing nennt Server, nicht Modell-Provenienz
      - Fokus auf Analyse/Extraktion, weniger auf End-to-End-Bid-Drafting
      - Ersetzt keine juristische Prüfung der EVB-IT-Klauseln
      - Kein eigener Audit-Trail-Mechanismus für generierte Inhalte sichtbar
      - Keine unabhängige Presse- oder Praktiker-Quelle gefunden — Forbes.at/Handelsblatt-Coverage ist Paid Advertising
    sources:
      - id: everwise-ai-en-industries-it-services
      - id: everwise-ai-en-use-cases-tender-management-software
  - id: patterno-de
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Aggregiert 1.000+ EU-Vergabeportale mit qualifizierter KI-Bewertung statt reiner Vektorsuche; starke Knockout-Kriterien-Erkennung beschleunigt Bid/No-Bid-Entscheidung. Drafting-Modul (Patterno BID) vorhanden, Submission explizit nicht enthalten — nur Discovery/Analyse-Layer mit AI-Chat für Entwürfe.
    caveats:
      - Kein eigenes Submission-/eVergabe-Modul — Workflow endet vor Angebotsabgabe
      - Compliance-Zertifikate (ISO 27001, C5) auf öffentlicher Website nicht prominent — Pflicht-Klärung im Sales-Gespräch
      - Keine unabhängige Presse- oder Praktiker-Quelle gefunden — Vergabemarkt-Report und Plattformvergleich selbst veröffentlicht ('Patterno ist unser eigenes Produkt')
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: patterno-de-en
      - id: patterno-de-en-resources-reports-vergabemarkt-2026
  - id: ausschreibungen-staatsanzeiger-de-auftragnehmer-bieter-services-ai-bietercockpit-angebotsabgabe-einfach-sicher-staatsanzeiger-evergabe
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Bieter-seitige Abgabe-Komponente der etablierten Staatsanzeiger-eVergabe (Administration Intelligence AG), Server in Deutschland, Ende-zu-Ende-Verschlüsselung bis Submission, qualifizierte elektronische Signatur, GAEB-Import — Pflicht-Werkzeug, wenn Vergabestellen über AI-Plattformen veröffentlichen. Region Hannover und weitere Kommunen mandatieren das Tool amtlich in ihren Bieter-Leitfäden.
    caveats:
      - Kein KI-Drafting — fokussiert sicheren Submission-Workflow, nicht Antwort-Erstellung
      - Sinnvoll als Komplement zu Discovery/Drafting-Tools, nicht als Ersatz
      - Plattform-Bindung an evergabe.de / Staatsanzeiger-Vergabesysteme
    sources:
      - id: ausschreibungen-staatsanzeiger-de-auftragnehmer-bieter-services-ai-bietercockpit-angebotsabgabe-einfach-sicher-staatsanzeiger-evergabe
      - id: ai-ag-de-ai-bietercockpit
      - id: hannover-de-content-download-916331-file-leitfaden-20-20ai-20bietercockpit-20-f-c3-bcr-20bieter-innen-20und-20bewerber-innen-20-20stand-2010-03-2023-pdf
  - id: ionos-de-cloud-ai-model-hub
    fit: partial
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Deutscher Hosting-Provider mit kuratierten Open-Source-LLMs (Mistral NeMo, Llama 3.3 70B, Teuken-7B) auf EU-Infrastruktur ohne Datenübermittlung in Drittstaaten. Fungiert als kostengünstige Sovereign-Inference-Schicht für KMU-Bieter, die Vergabeunterlagen DSGVO-konform verarbeiten müssen, ohne eigenes On-Prem. Keine eigene Bid-Workflow-Logik — muss mit vorgelagerten Tooling-Schichten kombiniert werden.
    caveats:
      - Reine Inferenz-Plattform, keine Bid-Workflow-Logik
      - Modellauswahl reicht nicht an Frontier-Modelle heran
      - Bietet keine Audit-/Compliance-Layer für §-124-GWB out of the box
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Deutsches Rechenzentrum, kein US-Cloud-Act-Risiko für Behördendaten
        - OpenAI-kompatible API ermöglicht nahtlose Integration bestehender Werkzeuge
        - Token-basierte Abrechnung ohne Mindestabnahme oder Vertragsbindung
      complaints:
        - Kleineres Modellangebot als internationale Plattformen (OpenRouter, STACKIT)
        - Keine Zugriff auf proprietäre Modelle wie GPT-4 oder Claude
        - Konkrete Token-Preise erst nach Registrierung im Cloud Panel sichtbar
    sources:
      - id: ionos-de-newsroom-news-souveraene-ki-fuer-kleine-unternehmen-ionos-integriert-mistral-nemo-in-den-ai-model-hub
start_here: "Pilot mit Bidfix an einem abgeschlossenen Ausschreibungsvorgang geringer Komplexität: Vergabeunterlagen hochladen, KI-Entwurf generieren, gegen vorhandene Referenzangebote gegenchecken und vor Freigabe juristisch prüfen lassen. Für Abgaben über Staatsanzeiger-Vergabeplattformen das AI Bietercockpit parallel einbinden — es deckt den Submission-Schritt ohne Pilotrisiko ab."
caveats: Halluzinierte Eignungs- oder Referenzaussagen sind ein Ausschlussrisiko im Vergabeverfahren — menschliche Freigabe und ein nachvollziehbarer Audit-Trail für alle KI-generierten Bid-Inhalte sind nicht optional. Vergabeunterlagen dürfen häufig nicht in US-Cloud-Dienste übertragen werden; Bidfix (EU-Hosting, ISO 27001, kein BSI-C5 sichtbar) oder Aleph Alpha PhariaAI (On-Prem/STACKIT) sollten vor Pilotstart schriftlich auf Datenschutzkonformität bestätigt werden.
sources: []
---
