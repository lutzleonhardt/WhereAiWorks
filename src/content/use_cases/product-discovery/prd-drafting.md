---
stage: product-discovery
order: 3
roles:
  - product-manager
title: PRD- und Spec-Drafting
goal_label: Aus Stichpunkten und Kontext einen ersten PRD-Entwurf erzeugen
suitability: good_fit
rationale: Atlassian Rovo und M365 Copilot decken PRD-Drafting für DACH-Konzerne über bestehende Enterprise-AVV ab und machen Erst-Skelette in Minuten erreichbar — ohne neue Compliance-Verhandlungen. Der Use Case ist produktionsreif für Teams, die bereits auf einer der beiden Plattformen aufsetzen; ChatGPT Enterprise ist eine valide Alternative für alle anderen.
tools:
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Niederschwelligster PRD-Pfad fuer Atlassian-Shops in DACH: dedizierter Product-Requirements-Expert-Agent mit Confluence-/Jira-Kontext, SOC-2/ISO-27001 fuer Rovo, GA-Data-Residency und EU-AI-Pact-Bekenntnis. Achtung Wende-Punkt 17.08.2026: neue Atlassian-AI-Datenkontributions-Policy — Enterprise-Plan-Default ist zwar opt-out, OpenAI/Databricks aber als US-Sub-Prozessoren bestaetigt. DPA-Update vor Rollout zwingend."
    caveats:
      - Ab 17.08.2026 neue Datenkontributions-Policy — Enterprise opt-out by default, aber DPA-Update unabhaengig pruefen
      - OpenAI/Databricks als US-Sub-Prozessoren; Data Residency deckt AI-Trainings-Pipelines nicht zwingend
      - Nur Cloud Premium/Enterprise — DC-/Server-Kunden bleiben aussen vor
      - Ab 17.08.2026 neue Atlassian-AI-Datenkontributions-Policy — Enterprise-Plan-Default ist opt-out, Premium nur partiell, DPA-Update unbedingt vor Rollout pruefen
      - OpenAI/Databricks als US-Sub-Prozessoren — Data Residency deckt laut Seibert-Group nicht zwingend AI-Trainings-Pipelines ab
      - Nur in Cloud Premium/Enterprise verfuegbar — Confluence DC/Server-Kunden bleiben aussen vor
      - Rovo nutzt OpenAI im Hintergrund — strategische PRDs landen ggf. in US-Endpunkten, AVV-Anhang pruefen
      - Output-Qualitaet liegt unter spezialisierten Tools wie ChatPRD
      - Setzt Cloud-Premium-Plan und Org-Admin-Aktivierung voraus
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Niederschwellig fuer Atlassian-Shops
        - Kontext aus Confluence/Jira ohne Copy-Paste
      complaints:
        - Output-Qualitaet schwaecher als Spezialtools
        - Premium-Plan-Lockin, OpenAI-Backend
    sources:
      - id: atlassian-com-software-rovo-use-cases-agent-product-requirements-expert
      - id: support-atlassian-com-jira-product-discovery-docs-explore-atlassian-intelligence-in-jira-product-discovery
      - id: itbrief-com-au-story-atlassian-adds-ai-remix-partner-agents-to-confluence
      - id: us-seibert-group-blog-atlassian-data-privacy-ai-training-policy-change
      - id: atlassian-com-blog-announcements-eu-ai-pact
  - id: openai-com-chatgpt-enterprise
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: ChatGPT Enterprise mit AVV, SOC-2 und EU-Datenresidency; in DACH-Pragmatismus ist Azure OpenAI in Sweden/Switzerland-Region oft der noch durchsetzbarere Pfad ueber bestehende Microsoft-Vertraege. Mit Mega-Prompts (RICE/OKR/JTBD) konsistente Erst-Drafts. Kernarbeit ist Schatten-IT-Containment.
    caveats:
      - "Schatten-IT-Risiko: ChatGPT-Personal — Policy plus AI-Gateway/DLP noetig"
      - Output-Qualitaet bei strategischen PRDs unter Claude — fuer Erst-Drafts ausreichend
      - "Bei Default-ChatGPT-Personal: Datenabfluss-Risiko fuer strategische PRDs"
      - "Schatten-IT-Risiko: Mitarbeitende kopieren PRDs in privates ChatGPT — Policy plus Lakera/Cloudflare-AI-Gateway als Guardrail"
      - Azure OpenAI in EU-Region (z.B. Sweden/Switzerland) ist DSGVO-pragmatischer als OpenAI direkt
      - Mega-Prompt-Disziplin im PM-Team noetig, sonst Output-Qualitaet schwach
      - Liefert ohne strukturierten Prompt 'generic fluff'
      - Output-Qualitaet bei strategischen PRDs schwaecher als Claude
      - "Bei Default-ChatGPT-Personal: Datenschutz-Risiko fuer strategische PRDs"
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Niederschwellig, ueberall verfuegbar
        - Gute Iterationsgeschwindigkeit fuer Erst-Drafts
      complaints:
        - Generic fluff ohne strukturierten Prompt
        - Heavier editing als bei Claude/ChatPRD
    sources:
      - id: reddit-com-r-productmanagement-comments-1qwklro-i-dont-care-if-youre-team-chatgpt-or-team-claude
      - id: aakashgupta-medium-com-streamline-your-prd-drafting-with-chatprd-a-pms-experience-364a0e509e48
      - id: reddit-com-r-productmanagement-comments-1r4jzti-how-do-you-write-prds-in-2026
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Claude liefert in Praktiker-Tests die beste Output-Qualitaet fuer strategische PRDs (Tom Leung, Aakash Gupta). EU-Pfad fuehrt in DACH am realistischsten ueber AWS Bedrock (Frankfurt/Paris) oder Google Vertex (Belgium/Netherlands/Finland) — Anthropic-API direkt ist US-zentrisch. 200K-Context fuer Research-Pakete. Disziplin gefragt: Default-claude.ai-Endpunkt nicht fuer strategische PRDs."
    caveats:
      - Anthropic-Compute primaer USA — EU nur ueber Bedrock/Vertex; Direktnutzung der Anthropic-API ist US-Drittlandtransfer
      - Default-claude.ai ist Schatten-IT-Risiko — Policy plus AI-Gateway noetig
      - Kein natives Audit-Logging auf Prompt-Ebene ohne Gateway (LiteLLM/Portkey/Cloudflare AI Gateway)
      - Anthropic-Compute liegt primaer in den USA — EU-Region nur ueber Cloud-Reseller (Bedrock/Vertex), nicht ueber Anthropic-API direkt
      - Kein natives Audit-Logging fuer Prompt-/Completion-Ebene auf Default-API ohne Gateway
      - BetrVG-Mitbestimmung wenn Claude in tools chains mit Mitarbeiterdaten
      - Generischer LLM ohne PM-Workflow-Tooling — Prompt-Templates noetig
      - Default-Endpunkt US-zentrisch, Enterprise-Plan fuer EU-Region noetig
      - Kein natives Template-System fuer PRD-Standardisierung im Team
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Beste Output-Qualitaet bei strategischen PRDs
        - 200K-Context fuer ganze Research-Pakete
        - Standard-Werkzeug in PM-Reddit-Threads
      complaints:
        - Kein PM-Template-System out-of-the-box
        - Default US-Hosting
    sources:
      - id: firesidepm-substack-com-p-i-tested-5-ai-tools-to-write-a-prdheres
      - id: ideaplan-io-blog-best-free-ai-prd-generators-2026
      - id: reddit-com-r-productmanagement-comments-1r4jzti-how-do-you-write-prds-in-2026
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Pragmatischster Pfad fuer DACH-Konzerne mit M365-Lockin: EU-Data-Boundary-Service seit 1.3.2024, ISO 27001/42001/27018, DSGVO-Compliance ueber Microsoft-DPA, kein Training auf Kundendaten. Copilot Studio liefert offizielles 'Product Crafter'-Template, das Customer Journeys, User Stories und Priorisierungs-Matrizen erzeugt. BetrVG-Mitbestimmung bleibt aber zwingend."
    caveats:
      - Anthropic-Modelle (falls aktiviert) sind aktuell von der EU-Datengrenze ausgenommen — laut Microsoft Learn
      - BetrVG §87 Abs.1 Nr.6 (Verhaltens-/Leistungskontrolle) bei Copilot-Rollout praktisch immer relevant
      - DSFA wird von deutschen Aufsichten regelmaessig erwartet
      - Anthropic-Modelle (falls aktiviert) verlassen die EU-Datengrenze laut Microsoft Learn
      - BetrVG-Mitbestimmungspflicht (§87 Abs.1 Nr.6) bei Copilot-Rollout in DACH praktisch immer relevant
      - DSFA wird von deutschen Datenschutzaufsichten regelmaessig erwartet — Compound-Law/SRD-Empfehlung
      - Product Crafter ist Template, kein dediziertes PRD-Tool — Setup noetig
      - Lizenzkosten hoch ($18-25,20 user/month plus M365-Basis)
      - AI-Quality fuer kreative Produktarbeit unter Claude/ChatPRD
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Hebelt bestehende M365-AVV/Compliance
        - Microsoft-Graph-Grounding fuer Enterprise-Kontext
      complaints:
        - Setup ueber Copilot Studio nicht trivial
        - AI-Quality fuer Produkt-Use-Cases mittelmaessig
    sources:
      - id: adoption-microsoft-com-en-us-ai-agents-templates-and-examples
      - id: bestagenthub-com-compare-microsoft-365-copilot-business-vs-notion-ai
      - id: learn-microsoft-com-de-de-microsoft-365-copilot-microsoft-365-copilot-privacy
      - id: srd-rechtsanwaelte-de-blog-microsoft-copilot-datenschutz-unternehmen
  - id: cloud-google-com-products-gemini-code-assist
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Fuer DACH-Konzerne mit Google Workspace (Minderheit) der pragmatische Pfad: DPA, EU-Region (Belgium/Netherlands/Finland), kein Training auf Workspace-Daten. Output-Qualitaet bei strategischen PRDs nachweislich unter Claude — fuer interne Standard-PRDs aber ausreichend."
    caveats:
      - DACH-Konzerne sind ueberwiegend M365 — Gemini ist die Ausnahme
      - Output-Qualitaet bei strategischen PRDs unter Claude/ChatPRD
      - BetrVG-Mitbestimmung beim Workspace-AI-Rollout
      - Vertex-AI-Gemini-Endpunkte EU-Region pruefen (Belgium, Netherlands, Finland verfuegbar)
      - Output-Qualitaet bei strategischen PRDs unter Claude
      - Wenig PM-spezifische Templates out-of-the-box
      - Wertbeitrag stark abhaengig von Workspace-Nutzung im Team
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Integrated in Docs, no tool-switching friction for Workspace teams
        - Refine and iterate PRDs directly in familiar interface
        - EU-region option available with Workspace admin controls
      complaints:
        - Output quality rated sufficient but not exceptional vs Claude
        - Default US hosting — strategic PRDs need explicit EU-region setup
        - Generic AI without PM-specific training or templates
    sources:
      - id: firesidepm-substack-com-p-i-tested-5-ai-tools-to-write-a-prdheres
  - id: prodcycle-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Spezialisierte PRD-/Spec-Plattform fuer regulierte Branchen mit HIPAA/SOC-2 und automatisierter Compliance-Validation pro Spec — relevant fuer DACH-Versicherer/Pharma/MedTech, die Audit-Trails brauchen. Likely missed by market scan because das Tool als Compliance-Vertikalplattform und nicht als generisches 'PRD-Tool' positioniert ist und in Standard-PRD-Listicles nicht auftaucht.
    caveats:
      - EU-Hosting/EU-DSGVO-Compliance nicht prominent dokumentiert — Pruefung noetig
      - Junger Anbieter, Vendor-Sustainability ungewiss
      - Vertikalfokus HealthTech/FinTech — nicht universell
    sources:
      - id: prodcycle-com
  - id: specgraph-dev
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Cross-Department-PRD-Plattform mit Wishes-Sammlung, AI-Konfliktdetektion und Audit-Trail — adressiert die Konzern-Realitaet vieler DACH-Stakeholder mit Mitbestimmung und Compliance-Erwartung. Likely missed by market scan because das Tool nicht als 'PRD-Generator' sondern als 'Spec-Plattform fuer Cross-Department-Coordination' positioniert ist und in Standard-PRD-Listicles untergeht.
    caveats:
      - Sehr junger Anbieter, Praktiker-Signal nicht vorhanden
      - EU-Hosting/AVV/Sub-Prozessoren nicht dokumentiert
      - Output ist Markdown fuer Coding-Agents — Stakeholder-Doku-Eignung pruefen
    sources:
      - id: specgraph-dev
  - id: specnavi-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Trust-Layer mit Citations, RAGAS-Confidence-Scores, Mandatory-Human-Review und End-to-End-Traceability — passt strukturell zu EU-AI-Act-Anforderungen an Nachvollziehbarkeit. Likely missed by market scan because SpecNavi sich als 'Trust Layer fuer AI-generierte Anforderungen' positioniert und nicht als PRD-Generator — die Listicles sortieren das aus.
    caveats:
      - Junger Anbieter, kein DACH-Footprint sichtbar
      - EU-Hosting/AVV nicht dokumentiert
      - Vendor-Sustainability ungewiss
    sources:
      - id: specnavi-com
  - id: aha-io-ai-library-agent-product-requirements-document
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Sinnvoll ausschliesslich fuer Teams, die Aha! Roadmaps bereits einsetzen: Der PRD-Agent generiert auf Basis von Vision/Persona/Use-Cases einen strukturierten Entwurf und konvertiert ihn direkt in Releases/Epics/Features — ohne Plattformwechsel. SOC-2 Type II und GDPR bestaetigt. Kein eigenstaendiges PRD-Tool, sondern Mehrwert fuer bestehende Aha!-Installationen."
    caveats:
      - Nur sinnvoll fuer bestehende Aha!-Shops — kein eigenstaendiges PRD-Werkzeug ($59/user/month zu teuer als Einstieg)
      - Multi-Modell-Backend (OpenAI/Anthropic/Google) erschwert Sub-Prozessor-Inventar und AVV-Pflege
      - Agentic-AI-Score 1/5 in unabhaengiger Review (aipmtools.org) — staerkstes Defizit im Vergleich zu Spezialtools
      - Kein Praktiker-Signal spezifisch fuer PRD-Drafting-Workflow auffindbar
      - "Lizenzkosten hoch: Premium $59, Enterprise $99, Enterprise+ $149 user/month"
      - Output-Qualitaet unter Claude/ChatPRD laut Aakash-Gupta-Tests
      - Cloud-Hosting; EU-Region fuer AI-Compute nicht explizit dokumentiert — AVV-Anhang pruefen
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Direkte Konvertierung PRD-Abschnitte zu Releases/Epics/Features ohne Copy-Paste
        - Kontext aus Aha!-Roadmap-Daten ohne manuellen Export
      complaints:
        - Kein unabhaengiges Praktiker-Feedback auffindbar
    sources:
      - id: aha-io-ai-library-agent-product-requirements-document
      - id: aha-io-suite-ai-overview
      - id: aipmtools-org-product-management-aha-roadmaps
start_here: Atlassian-Shops starten mit dem Rovo Product-Requirements-Expert-Agent an einem klar umrissenen Feature und schärfen den Entwurf manuell nach; M365-Umgebungen nutzen das Copilot-Studio-Product-Crafter-Template. EU-Data-Boundary und BetrVG-Mitbestimmung müssen vorab geklärt sein.
caveats: Strategische PRDs dürfen nicht über Default-Endpunkte ohne EU-Region laufen — AVV-Anhänge und Sub-Prozessoren (u. a. OpenAI bei Rovo) vor Rollout prüfen. Erst-Entwürfe blenden Constraints und Edge-Cases aus, die das Modell nicht kennt; inhaltliches Review bleibt Pflicht.
sources: []
---
