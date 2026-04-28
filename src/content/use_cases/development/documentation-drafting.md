---
stage: development
order: 4
roles:
  - software-engineer
title: Code-Dokumentation
goal_label: Docstrings, READMEs und API-Dokumentation aus Code ableiten
suitability: good_fit
rationale: Stack Overflow 2024 weist mit 40 % aktueller Nutzung und 81 % Wachstumserwartung den höchsten Adoptionswert aller AI-Entwicklungsslots aus. DORA/BaFin-Anforderungen und ISO27001-Pflichten machen lückenlose Dokumentation für DACH-Teams zusätzlich verpflichtend. Mit Claude Code für prose-starke READMEs, GitHub Copilot für schnelle Boilerplate-Docstrings und Swimm für CI-gestützte Drift-Erkennung ist das Tool-Set praxisnah und enterprise-tauglich besetzt.
tools:
  - id: bump-sh
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Frankreich-basierter EU-Vendor mit OpenAPI/AsyncAPI-Drift-Reports im CI - direkter Treffer auf das Drift-Caveat. AI-Anteil eher gering, aber Compliance-Story DACH-freundlich.
    caveats:
      - AI-Komponente schwach - Spec-zu-Doku-Pipeline statt Doku-Generator
      - Setzt OpenAPI/AsyncAPI als Source voraus
      - EU-Datenresidenz konkret pruefen
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Diff-/Drift-Reports
        - OpenAPI-first
      complaints:
        - Wenig AI-Komponente
    sources:
      - id: bump-sh-bump-sh
  - id: continue-dev
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Open-Source-IDE-Assistent mit konfigurierbarem /comment- und /docstring-Slashcommand. Erlaubt eigene Modell-Routings (auch lokal/EU-gehostet) - DACH-Teams koennen Compliance-Argument selbst fuehren.
    caveats:
      - Kein managed Enterprise-Support
      - Keine eigene SOC2/ISO-Zertifizierung - Compliance-Argument muss ueber gewaehltes Modell gefuehrt werden
      - Kein managed Service - Plattformteam noetig
      - Doku-Qualitaet stark abhaengig vom dahinter konfigurierten Modell
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Open Source
        - Eigenes Modell-Routing
      complaints:
        - Konfig-Aufwand
        - Nicht so poliert wie Cursor
    sources:
      - id: continue-dev-commit-pr-via-custom-slash-commands-continue
  - id: readme
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Etabliertes Developer-Portal mit SOC2 und solider DPA, OpenAPI-Sync als Single Source of Truth. AI ist Add-on, nicht Kernstaerke.
    caveats:
      - Hosting US-zentriert - EU-Datenresidenz pro Plan klaeren
      - AI-Funktionen weniger tief als Frontier-Coding-Assistants
      - Plattform-Tool, kein Inline-IDE-Tool
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Etablierter Vendor
        - Gute API-Reference-Optik
      complaints:
        - Preis
        - AI-Features eher Add-on
    sources:
      - id: readme-readme
  - id: stainless
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: OpenAPI-zu-SDK+Doku-Generator (u.a. von OpenAI fuer offizielle SDKs genutzt). Source-of-Truth-Antwort auf das Drift-Caveat in API-First-Teams.
    caveats:
      - "Voraussetzung: sauber gepflegte OpenAPI-Spec"
      - Fokus extern publishte SDK/API-Reference, nicht interne Inline-Doku
      - Vendor jung - Enterprise-DPA-/Audit-Profil im Aufbau
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Hochwertige SDKs
        - Single-Source aus OpenAPI
      complaints:
        - Voraussetzung sauberes OpenAPI
        - Preis Enterprise-orientiert
    sources:
      - id: stainless-stainless
  - id: tabnine
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Air-gapped/Self-hosted-Story ist USP fuer BaFin/DORA-Kontexte und fuer Sparkassen/Versicherungen oft die einzig genehmigungsfaehige Option. Doku-Generierung ueber Chat-Slashes vorhanden.
    caveats:
      - Doku-Qualitaet hinter Frontier-Modellen
      - Self-host-Betrieb erfordert internes Plattform-/MLOps-Team
      - Self-host setzt internes Plattform-/MLOps-Team voraus - Total-Cost-of-Ownership realistisch ansetzen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - On-Prem/Air-gapped
        - Datenschutz-Story
      complaints:
        - Modellqualitaet
        - Hinter Frontier-Anbietern
    sources:
      - id: tabnine-tabnine
  - id: atlassian-rovo
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: In Atlassian-zentrischen DACH-Konzernen wird Confluence/Rovo de facto als Doku-Plattform durchgereicht und kann Repo-Inhalte fuer Engineering-Doku zusammenfassen. SOC2/ISO27001 und EU-Hosting-Region verfuegbar.
    caveats:
      - Nur sinnvoll bei bestehender Atlassian-Plattform
      - AI-Output muss redaktionell auf API-Vertragstreue geprueft werden
      - Rovo ist neuer als Confluence selbst - Reife pro Connector unterschiedlich
    sources:
      - id: atlassian-rovo-dev-agents-atlassian
  - id: document360
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: SOC2 Typ 2, ISO27001, GDPR und EU-Hosting (Frankfurt) machen es zu einem typischen DACH-Enterprise-Pick fuer API/Developer-Portale mit AI-Writer-Komponente.
    caveats:
      - Fokus extern publishte Doku, nicht Inline-Docstrings
      - AI-Writer schwaecher als Frontier-Coding-Assistants
      - Kein direkter Repo-Code-Index
    sources:
      - id: document360-document360
  - id: refact-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Fuer DACH-Teams mit On-Prem-Pflicht (BaFin/Versicherungen) ergaenzt es Tabnine und Continue.dev als selbst-hostbare Open-Source-Alternative mit Doku-Generierung.
    caveats:
      - Doku-Qualitaet hinter Frontier-Modellen - haengt vom self-hosted Modell ab
      - Kleinerer Vendor - Beschaffungs-/Roadmap-Risiko
      - Kein managed Enterprise-Support standard
    sources:
      - id: refact-ai-refact
  - id: stoplight
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: In DACH-Konzernen mit API-Governance verbreitet; rendert Doku aus OpenAPI mit konsistenter Drift-Pruefung. SmartBear ist etablierter Enterprise-Vendor mit DACH-Footprint.
    caveats:
      - AI-Anteil eher schwach - Plattform fokussiert API-Design/Doku, nicht Code-Inline-Doku
      - Lizenzkosten Enterprise-orientiert
      - Roadmap-Bewegungen seit SmartBear-Akquisition zu beobachten
    sources:
      - id: stoplight-stoplight
  - id: claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Anthropic mit SOC2 Typ 2, ISO27001 und Bedrock/Vertex-Routing fuer Datenresidenz. Fuer Doku-Sweeps in groesseren Repos qualitativ fuehrend bei der Prosa-Qualitaet; unabhaengige Reviews bestaetigen Staerke gegenueber Copilot.
    caveats:
      - Token-Kosten skalieren mit Repo-Groesse - Budget-Governance einplanen
      - Direkt-Einsatz von claude.com vs. via Bedrock/Vertex hat unterschiedliche DPA-Profile
      - Output muss redaktionell auf API-Vertragstreue geprueft werden
      - Erzeugt Markdown lieber als verifizierbare Source-Backlinks
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Beste Prosa-Qualitaet fuer READMEs
        - Versteht groessere Codebasen
      complaints:
        - Tokenkosten
        - Output muss kuratiert werden
    sources:
      - id: claude-code-claude-docs-claude-com-en-docs-claude-code-hooks
      - id: claude-code-devreviewer
      - id: claude-code-dev-to
  - id: cursor
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Repo-weiter Kontext via @-References erlaubt konsistente Doku ueber mehrere Dateien (READMEs, ADRs, API-Vertraege). Practitioner-Posts bestaetigen konkrete JSDoc/README-Workflows mit messbaren Effizienzgewinnen.
    caveats:
      - Junger Vendor (Anysphere) - Lieferanten-Risiko in DORA-Scope-Bewertung relevant
      - Kein expliziter EU-Datenresidenz-Claim breit dokumentiert - fuer regulierte DACH-Kontexte Privacy Mode/Enterprise pruefen
      - Konsistenz-Pruefung Code vs. Doku nicht automatisch in CI
      - Halluzinierte Funktionsnamen als bekannter Failure-Mode beim automatisierten Einsatz
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Sehr guter Repo-Kontext
        - Schnelle Iteration auf Doku-Drafts
      complaints:
        - Privacy/Compliance-Fragen in DACH
        - Kosten bei Power-Use
    sources:
      - id: cursor-cursor-cursor-com-features
      - id: cursor-medium-jsdoc
      - id: cursor-markaicode
  - id: copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Copilot Enterprise/Business deckt /doc-Slashcommand, Audit-Logs und Data-Residency-Optionen ab. Unabhaengige Practitioner-Berichte bestaetigen produktiven Einsatz fuer Legacy-Codebase-Doku und Boilerplate-Docstrings.
    caveats:
      - Generierte Docs paraphrasieren oft Code statt Intent zu erklaeren - redaktionelles Review noetig
      - DPA/Subprocessor-Kette ueber Microsoft - in BaFin-Kontext zusaetzlich pruefen
      - Data-Residency-Garantie 'EU' nicht in allen Tiers identisch - Tier-Mapping fuer DACH klaeren
      - "Bekannter Bug: Docstring-Platzierung bei mehrzeiligen Funktionssignaturen fehlerhaft (VS Code)"
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Schnelle Boilerplate-Docstrings
        - Gute IDE-Integration
      complaints:
        - Beschreibt das Was statt das Warum
        - Erfindet teils Parameter-Bedeutung
    sources:
      - id: github-copilot-chat-debug-mode-github
      - id: copilot-medium-architect
      - id: copilot-clickup
  - id: jetbrains-ai-assistant
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "JetBrains GmbH (Muenchen) ist DACH-nativer Vendor mit standard EU-DPA. 'Write Documentation'-Aktion nutzt IDE-Indizes fuer kontextbewusste Docstrings. Conditional: kein unabhaengiger Practitioner-Beleg fuer Doku-Qualitaet gefunden; nur sinnvoll in JetBrains-Shops."
    caveats:
      - Nur sinnvoll in JetBrains-IDEs - VS-Code-Shops aussen vor
      - Provider-Routing (OpenAI/Anthropic/Google) muss pro Mandant erlaubt werden - in regulierten Kontexten Whitelisting noetig
      - Doku-Qualitaet hinter Frontier-Coding-Assistants
      - Kein unabhaengiger Practitioner-Beleg fuer Doku-Use-Case gefunden
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Tiefe IDE-Integration
        - Refactor-bewusste Aktionen
      complaints:
        - Qualitaet hinter Copilot/Claude
        - Lizenzkosten zusaetzlich zur IDE
    sources:
      - id: jetbrains-ai-assistant-junie-jetbrains
  - id: mintlify
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "AI-Doku-Plattform mit OpenAPI-Sync und CI-Hooks adressiert das Drift-Caveat direkt. Conditional: SaaS-only ohne dokumentiertes EU-Hosting und Pricing $150-$300/Monat (unabhaengig bestaetigt) limitieren DACH-Enterprise-Eignung."
    caveats:
      - SaaS-only ohne dokumentiertes EU-Hosting/On-Prem - fuer regulierte DACH-Konzerne kritisch
      - Pricing $150-$300/Monat unabhaengig bestaetigt - Preisspruenge bei groesseren Teams
      - Lock-in in Mintlify-spezifisches MDX-Format
      - Best fit fuer extern publizierte API-Doku, weniger fuer interne Inline-Docstrings
      - Hosting-Lokation/Subprocessors explizit pruefen vor DACH-Beschaffung
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Schnelles Setup
        - Schoene Default-Doku-Sites
      complaints:
        - Lock-in in Mintlify-Format
        - Preisspruenge bei groesseren Teams
    sources:
      - id: mintlify-mintlify
      - id: mintlify-ferndesk
  - id: sourcegraph-cody
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Sourcegraph Enterprise mit Self-hosted-Variante adressiert DACH-Compliance. Repo-weiter Code-Index reduziert Tautologie/Drift-Risiko durch echte Symbol-Bezuege. Conditional: kein unabhaengiger Practitioner-Beleg fuer Doku-Use-Case gefunden."
    caveats:
      - Lizenzpreis Enterprise tendenziell hoch
      - Indexierung grosser Monorepos initial aufwendig - Hardware-Sizing noetig
      - Doku-Output muss redaktionell nachbearbeitet werden
      - Kein unabhaengiger Practitioner-Beleg fuer Doku-Use-Case gefunden
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Repo-weiter Kontext
        - Self-Hosting-Option
      complaints:
        - Setup-Aufwand
        - Latenz bei sehr grossen Repos
    sources:
      - id: sourcegraph-cody-sourcegraph-sourcegraph-com-docs-cody-capabilities-commands
  - id: swimm
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: SOC2+ISO27001-zertifiziert mit eingebauter CI-Drift-Erkennung und AI-Doku-Generator aus dem Repo. 58+ aggregierte User-Reports bestaetigen Drift-Detection; unabhaengiger Practitioner-Vergleich beschreibt Merge-Blocking-Workflow konkret.
    caveats:
      - Markup-Konvention erzeugt Adoption-Reibung in heterogenen Konzern-Teams
      - EU-Datenresidenz nicht prominent kommuniziert - DPA explizit anfordern
      - 24 von 58 User-Berichten melden Auto-Sync False Positives - manuelle Review-Schleife einplanen
      - Hauptwert nur, wenn Teams die Swimm-Markup-Konvention adoptieren
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Drift-Detection im CI
        - Doku-Code-Kopplung
      complaints:
        - Markup-Lock-in
        - Adoption im Team haengt
    sources:
      - id: swimm-swimm
      - id: swimm-tooliverse
      - id: swimm-overcast
start_here: Einstieg mit GitHub Copilot für Inline-Docstrings und README-Skelette in der bestehenden IDE — ein Mensch prüft die semantische Aussage, nicht nur die Syntax. Für umfangreichere Repo-Doku und höhere Prosa-Qualität ergänzt Claude Code via Bedrock oder Vertex. Sobald API-Verträge betroffen sind, Swimm als CI-Gate einziehen, damit Code und Doku nicht auseinanderlaufen; im DACH-Finanzkontext Doku-Artefakte versionieren und als Audit-Nachweis ablegen.
caveats: KI-generierte Doku ist syntaktisch sauber, inhaltlich jedoch oft tautologisch — sie beschreibt das Was statt das Warum und muss redaktionell nachgearbeitet werden. Bei API-Verträgen ohne CI-Quellverlinkung entsteht Drift zwischen Code und Doku; ein Gate wie Swimm ist Pflicht, kein Optional. Für regulierte DACH-Kontexte Datenresidenz und DPA je nach gewähltem Tool-Tier vorab klären — die Garantien unterscheiden sich zwischen Cloud-Tiers erheblich.
sources: []
---
