---
stage: sales-presales
order: 18
roles:
  - sales-presales
title: EU-AI-Act- und Sicherheits-Auskünfte für Procurement
goal_label: Procurement-Anfragen zu AI-Act-Klassifizierung, Risk-Category und FRIA-Status beantworten
suitability: conditional
rationale: DACH-Procurement stellt seit 2026 routinemäßig AI-Act-Klassifizierungs- und FRIA-Fragen — ein neuer Antwort-Workflow, der auf bestehenden Security-Questionnaire-Plattformen aufgesetzt wird. Loopio und Responsive bieten als etablierte Trägerschicht den realistischen Einstieg, auch wenn kein nativer EU-AI-Act-Workflow im Tool enthalten ist.
tools:
  - id: loopio-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Bewaehrte Traegerschicht fuer Security-Questionnaire-/RFP-Workflows; AI-Act-Antworten als kuratierte Library-Bausteine pflegbar. Realistisch der Default-Stack vieler DACH-Sales-Teams, der erweitert statt ersetzt wird.
    caveats:
      - Kein nativer AI-Act-/FRIA-Workflow — Library-Aufbau und juristisches Review-Gate extern
      - Library-Verfall ist dokumentiertes Praktiker-Problem
      - AWS-Hosting, EU-Region-Zusicherung pruefen, deutschsprachiger Support unklar
      - Hosting ausschliesslich AWS, kein DE/EU-Region-Versprechen prominent — fuer Banken/Versicherungen problematisch
      - Pricing ab 20k USD/Jahr fuer 10 Seats — fuer Mittelstand teuer, lock-in bei Library-Migration
      - Keine DE-UI-Garantie, deutschsprachiger Support unklar
      - Kein spezialisiertes AI-Act-/FRIA-Antwort-Template — Library muss selbst aufgebaut werden
      - "Reddit-Praktiker: Library verfällt schnell, SMEs pflegen ungern nach"
      - Quasi-rechtlich verbindliche Antworten brauchen juristisches Review-Gate ausserhalb Loopio
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Etablierte Library, breite Format-Unterstützung
        - Solide Kollaboration & Versionierung
      complaints:
        - Library-Verfall, SMEs pflegen Antworten nicht nach
        - AI-Tiefe schwächer als bei AI-nativen Newcomern
    sources:
      - id: loopio-com-security-questionnaire-automation
      - id: loopio-com-privacy
      - id: reddit-com-r-ai-rfp-software-comments-1rr1n5h-has-anyone-made-the-switch-from-loopio-to-arphie-json
  - id: responsive-io
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Marktbreiter Wettbewerber zu Loopio, stark bei narrativen RFPs und Government-Bids — relevant fuer DACH-Public-Sector-Vertrieb. AI-Modell-Doku intern vorhanden, AI-Act-Antworten als Library-Sektion realisierbar.
    caveats:
      - Hohe Administrationskomplexitaet, RFP-Ops-Team faktisch noetig
      - Kein nativer AI-Act-Workflow
      - EU-Datenresidenz/Vertragsbasis explizit verhandeln
      - EU-Datenresidenz nicht prominent dokumentiert
      - Implementation-Aufwand vergleichbar OneTrust — nicht 'aus dem Stand' produktiv
      - Risiko der Abhaengigkeit von US-Mutterkonzern bei AI-Act-Auslegung
      - Auch hier kein nativer AI-Act-/FRIA-Workflow
      - AI-Steuerung laut Loopio-Vergleich nur auf Instance-Ebene
      - Strukturierter Rechts-Review-Prozess muss extern aufgebaut werden
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Stark bei narrativen/Government-RFPs
        - Robuste Excel/Word-Unterstützung
      complaints:
        - Komplex zu administrieren
        - Vergleichbare AI-Limitierungen wie Loopio
    sources:
      - id: responsive-io-go-responsive-vs-loopio-refresh-prismic
      - id: loopio-com-blog-loopio-vs-responsive
      - id: reddit-com-r-govcon-comments-1rrwkbk-whats-the-best-ai-rfp-software-for-teams-handling-json
  - id: klarvo-io
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: EU-fokussierte FRIA-/Vendor-Due-Diligence-Templates mit Plattform fuer Versionierung, Evidence-Attachment und Audit-Ready-Exports — niederschwelliger Einstieg fuer DACH-Mittelstand. Likely missed by market scan because Klarvo ist als Template-/Compliance-Toolkit positioniert, nicht als 'AI'-Tool, und faellt aus klassischen AI-Tool-Suchen heraus.
    caveats:
      - Klein, Reife und Roadmap pruefen
      - Eher Deployer-Vendor-Vetting als Provider-PreSales-Antworten — Persona-Fit pruefen
      - Kein RFP-/Trust-Center-Layer
    sources:
      - id: klarvo-io-templates
  - id: verifywise-ai-platform-ai-trust-center
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Konfigurierbares oeffentliches Trust Center mit dezidiertem EU-AI-Act-Badge, ISO-42001-Badge und Subprocessor-Registry — purpose-built fuer AI-Disclosure-Use-Case. Likely missed by market scan because tool ist nicht als RFP-/GRC-Tool, sondern als spezialisierter AI-Trust-Center-Layer positioniert und taucht in Standard-RFP-Vergleichen nicht auf.
    caveats:
      - Junger Anbieter, Reife und Referenzen begrenzt
      - Trust-Center-Inhalte sind oeffentlich — Anwalts-Sign-off Pflicht
      - EU-Hosting/AVV-Verfuegbarkeit pruefen
    sources:
      - id: verifywise-ai-platform-ai-trust-center
  - id: safebase-io
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Trust-Center-Layer mit AIQA und kuratiertem CAP-AI-Assessment-Fragenkatalog (EU-AI-Act-spezifisch) deckt den Disclosure-Workflow ab — sinnvoll fuer Unternehmen, die Drata bereits nutzen und einen einheitlichen Questionnaire-Deflection-Stack aufbauen wollen.
    caveats:
      - Drata→SafeBase-Sync erfordert NA-Region-Hosting fuer den Drata-Tenant — EU-hosted-Drata-Kunden verlieren die Live-Controls-Sync-Funktion (Help-Doc dokumentiert NA-Pflicht explizit)
      - AI-Act-Inhalte muss Kunde selbst kuratieren — SafeBase liefert Frage-Schema, keine Rechtsantworten
      - AIQA ist Sekundaerfunktion ueber dem Trust-Center-Kern — Chrome-Extension schlaegt Antworten vor, fuellt nicht automatisch aus; hochvolumige DDQs erfordern weiter manuelle Arbeit
      - US-zentrisch — DE-UI fehlt, deutschsprachige Procurement-Anfragen brauchen Uebersetzungs-/Kuratierungsschritt
      - Hosting-Region (EU) im Standard-Tier nicht bestaetigt
      - "Risiko: Trust Center wird oeffentlich indexiert; AI-Act-Aussagen sind dann quasi-Werbeversprechen"
      - FRIA als deployer-spezifischer Artefakt nur als hochgeladenes Dokument abbildbar
      - Kein DACH-Kundensignal oder deutschsprachiger Enterprise-Support belegt
      - Drata-Akquisition schafft Unsicherheit bzgl. kuenftiger Investitionen in Questionnaire-Features
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Streamlines security questionnaire turnaround from weeks to minutes
        - Drata integration auto-syncs controls as source for AIQA answers
        - Increases customer confidence through transparent trust portal
        - AIQA pulls answers from Trust Center with inline citations
      complaints:
        - AI Act content requires manual curation—no templates shipped
        - US-centric, German language support limited
        - FRIA only supported as uploaded document, no native generation
    sources:
      - id: safebase-io-products-ai-questionnaire-assistance
      - id: safebase-io-resources-top-ai-security-review-questions
      - id: help-safebase-io-en-articles-10706852-integration-drata
  - id: saidot-com
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: EU-natives SaaS mit AI-Act-Klassifikator und Knowledge-Graph-basierten Templates — DACH-Procurement akzeptiert EU-Anbieter mit EU-Recht-Hintergrund leichter. Genuiner EU-AI-Act-Fokus (nicht ISO-42001-Rebranding) ist differenzierend. Ideal als Posture-Source, deren Output in RFP-Tool/Trust-Center fliesst.
    caveats:
      - Gesamtfinanzierung ca. $1,8M, ca. 23 Mitarbeiter — Vendor-Continuity-Risiko fuer Enterprise-Procurement in DACH
      - Kein Eintrag bei Gartner Peer Insights; kein sichtbares G2-Profil — DACH-Konzern-Procurement-Teams koennen Anbieter nicht per Standard-Vendor-Vetting validieren
      - Keine oeffentlich sichtbaren DACH-Kundennamen oder deutschsprachigen Enterprise-Referenzen
      - Public Pricing ($1.500–$3.500/Monat) signalisiert SME/Mid-Market-Positionierung, nicht Konzern-Scale
      - Eher Provider-/Deployer-Governance, kein direktes RFP-Antwort-Frontend
      - Kleinere Organisation, Skalierung fuer Konzern-RFP-Volumen unklar
      - Vertragliche AVV/SOC2-Nachweise pruefen
      - DE-UI nicht prominent dokumentiert
      - DACH-Sprachunterstützung muss verifiziert werden
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - EU-native with deep, trusted AI Act regulatory expertise
        - Knowledge graph enables governance reuse across AI systems
        - Customers praise alignment with leading industry standards
        - Understands European culture; adapts governance to local context
      complaints:
        - Smaller company; fewer Enterprise references than category leaders
        - Emerging company; public proof of adoption still light
        - DACH language support not explicitly verified
        - Limited public practitioner case studies or user reviews
    sources:
      - id: saidot-ai
      - id: saidot-ai-insights-ai-act-handbook-the-essentials-of-the-eu-ai-act
  - id: vanta-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Bewaehrter Trust-Center- und Questionnaire-Deflection-Stack (4.6/5 auf G2 mit 2.300+ Reviews) plus dediziertes EU-AI-Act-Modul und EU-Support in vier europaeischen Sprachen. Fuer Limited-Risk-/Transparenz-Pflichten und Procurement-Deflection-Workflows ist der Stack realistisch einsetzbar.
    caveats:
      - EU-AI-Act-Modul durch keine unabhaengige Practitioner-Quelle validiert — alle 2.300+ G2-Reviews beziehen sich auf SOC2/ISO27001, kein einziger nennt das AI-Act-Modul
      - "Unabhaengige Analyse stuft das Modul als ISO-42001-Automation ein, nicht als vollstaendigen EU-AI-Act-Compliance-Workflow: fehlend sind Art. 6/Annex-III-Risikoklassifikation, Art. 43 Konformitaetsbewertung, Art. 27 FRIA und Art. 72 Post-Market-Monitoring"
      - EU-Hosting (Frankfurt/AWS) ist opt-in, kein Standard — bei regulierten DACH-Branchen aktiv verhandeln
      - Fuer DACH-Unternehmen mit High-Risk-AI-Systemen reicht das Modul nach aktuellem Stand nicht
      - Vanta vermischt in eigenen Texten ISO 42001 und EU AI Act stark — Demo-Pruefung obligatorisch
      - AI-Act-Modul ist 2025/26 neu, Tiefe der GPAI-Trainingsdaten-Summary-Unterstuetzung unklar
      - Trust-Center-Inhalte stehen oeffentlich — verbindliche AI-Act-Aussagen brauchen Anwalts-Sign-off
      - Pricing skaliert schnell mit Mitarbeiterzahl, fuer Mittelstand spuerbar
      - Audit-/Konformitaetsbewertung muss weiterhin durch Notified Body / Anwaelte erfolgen
      - DACH-Praktiker berichten, Vanta-Compliance-Stack fuer SOC2 zu nutzen und EU-spezifische Anforderungen parallel in Spreadsheets zu pflegen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - 150+ EU AI Act controls with pre-built templates for risk classification
        - Intuitive UI and fast time-to-value for initial compliance setup
        - Automated evidence collection with continuous monitoring
        - Trust Center integration enables proactive customer disclosure
      complaints:
        - EU AI Act module is add-on (added Oct 2024), not core focus
        - Pricing steep (€10k–€80k+) with hidden add-on costs
        - Hands-off onboarding; companies must drive internal effort
        - Automation shallow; effort-intensive and costly as scale grows
    sources:
      - id: vanta-com-products-eu-ai-act
      - id: vanta-com-resources-introducing-vantas-ai-security-assessment
  - id: credo-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Credo AI offers pre-built Policy-Packs für EU AI Act, NIST AI RMF und ISO 42001 mit automatisierter Evidence-Generation und Audit-Ready-Documentation — nutzbar, um Risk-Category und Konformitätsbewertungs-Status für Procurement-Disclosures zu erzeugen. Der Knowledge-Graph verbindet Regulierung, Geschäftskontext und Systemkonfiguration; Gartner Market Guide for AI Governance Platforms 2025 erwähnt. Fit ist konditioniert: Output muss manuell in RFP-/PreSales-Tooling gespiegelt werden, da kein nativer PreSales-Workflow vorhanden."
    caveats:
      - Kein direkter PreSales-/RFP-Workflow; Output muss in RFP-Tool gespiegelt werden
      - Stärker auf Provider/Deployer-interne Governance fokussiert als auf Customer-Disclosure
      - DACH-Sprachunterstützung in Public-Material nicht prominent
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Pre-built policy packs for all major frameworks (EU AI Act, ISO 42001)
        - Automated risk assessment and audit-ready evidence generation
        - Reduces governance fragmentation across business units
        - Saves teams months of compliance documentation work
      complaints:
        - Focused on internal governance, not PreSales disclosure generation
        - Output requires mirroring to RFP tools separately
        - DACH language support not prominently documented
    sources:
      - id: credo-ai-product
start_here: In Loopio (oder Responsive für Government-Bids) eine dedizierte Library-Sektion „EU AI Act / FRIA“ anlegen, Standardantworten von Legal/Compliance freigeben lassen und AI nur für Fragezuordnung und Antwortvorschläge einsetzen. Der juristische Review-Gate liegt außerhalb des Tools und muss als eigener Prozess etabliert werden.
caveats: AI-Act-Selbstauskünfte gegenüber Kunden sind quasi-rechtlich verbindlich — falsche Angaben können Vertragsstrafen auslösen, sodass juristisches Sign-off vor jeder Freigabe obligatorisch ist. Kein Anbieter liefert fertige EU-AI-Act-Antwort-Templates; Library-Aufbau und regelmäßige Aktualisierung liegen vollständig beim Anwender.
sources: []
---
