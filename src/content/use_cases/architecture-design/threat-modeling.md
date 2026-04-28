---
stage: architecture-design
order: 4
roles:
  - software-architect
  - security-engineer
title: Threat-Modeling
goal_label: STRIDE/MAESTRO-Threats aus Architekturbeschreibung ableiten
suitability: conditional
rationale: "STRIDE-GPT und Threagile bilden gemeinsam eine belastbare OSS-Basis: STRIDE-GPT liefert LLM-gestützte Threat-Listen mit Self-Hosting-Option (Ollama, Azure OpenAI EU), Threagile ergänzt eine deterministische Rules-Engine, die für ISO-27001/BSI-Grundschutz-Audits höherwertig ist als jeder LLM-Vorschlag. Der strukturierte, prüfbare Output macht diesen Anwendungsfall zu einem der wenigen Security-AI-Einstiege, die auch in regulierten DACH-Branchen tragbar sind."
tools:
  - id: owasp-threat-dragon-ai-tool
    fit: good_fit
    enterprise_readiness: evaluation_only
    confidence: high
    why_it_fits: Minimal-invasiver Self-Hosted-Pfad fuer DACH-Teams, die Threat Dragon (in BSI-Kontexten ueblich) bereits nutzen. LiteLLM erlaubt Ollama-Backend ohne Datenabfluss. Pydantic-Validierung erhoeht Output-Vertrauen.
    caveats:
      - Single-Maintainer-Bus-Faktor
      - Mindestmodell 400B Parameter laut README – kleine On-Prem-Modelle liefern schwach
      - Desktop-Tool, keine zentrale Audit-Trail-Plattform
      - Nur STRIDE, kein MAESTRO
      - "Bus-Faktor 1: keine Eskalationspfade, keine SLAs"
      - Desktop-Tool ohne zentrale Audit-Trails – Threat-Modelle leben in Repos
      - Modell-Mindestgroesse 400B Parameter im README – on-prem Ollama mit kleineren Modellen liefert schwache Ergebnisse
      - Single-Author-Projekt, kleine Community
      - Nur STRIDE-Methodologie
      - Desktop-GUI ohne Multi-User/Audit
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Sauberes Self-Hosting via Ollama
        - Direkte Integration in Threat Dragon
      complaints:
        - Nur STRIDE
        - Solo-Projekt, Wartung unklar
    sources:
      - id: owasp-threat-dragon-ai-tool-github
      - id: owasp-threat-dragon-ai-tool-reddit
  - id: stride-gpt
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: OSS-Referenzimplementierung mit Multi-Provider-Support (inkl. Ollama, LM Studio, Azure OpenAI EU). Fuer DACH-Teams zentrale Self-Hosting-Option, kombinierbar mit deterministischen Tools wie Threagile fuer Audit-Faehigkeit. Coverage von OWASP LLM/ASI Top 10 macht es zukunftsfest fuer agentische Architekturen.
    caveats:
      - Streamlit ohne RBAC – hinter SSO/Reverse-Proxy haerten
      - Reproduzierbarkeit (Seed/Temperature) nicht out-of-the-box dokumentiert
      - Output-Qualitaet senior-review-pflichtig
      - Pro-CLI cloud-only und Beta
      - Kein eingebautes Audit-Log/Versionierung der Threat-Modelle – fuer ISO-27001-A-8.27-Nachweis manuelle Disziplin noetig
      - Datenschutz nur so gut wie das gewaehlte Backend – Default-Konfig zeigt OpenAI/Anthropic, in BAIT-Kontexten muss explizit auf Ollama oder Azure OpenAI EU mit DPA umgestellt werden
      - Kein Reproduzierbarkeitsmechanismus (Temperature, Seed) dokumentiert – Sign-off-Faehigkeit eingeschraenkt
      - Streamlit-Demo, kein Enterprise-RBAC/Audit
      - Output-Qualitaet stark prompt- und modellabhaengig
      - Pro-API/CLI ist kommerziell und cloud-only
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Schneller Einstieg, klare STRIDE-Struktur
        - Self-hosted via Ollama moeglich
      complaints:
        - Output braucht Senior-Review
        - DFD-Generierung noch unreif
    sources:
      - id: stride-gpt-github
      - id: stride-gpt-aicodeshield
      - id: stride-gpt-github-2
  - id: threagile
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: DACH-affinster OSS-Kandidat (deutscher Maintainer, MIT-Lizenz, Black-Hat-Pedigree). Deterministische Rules-Engine ist fuer ISO-27001/BSI-Grundschutz-Audit hoeherwertig als jede LLM-Suggestion. Kombiniert mit STRIDE-GPT/Claude als YAML-Generator entsteht ein hybrides Setup mit Self-Hosting-Garantie.
    caveats:
      - Kein nativer LLM-Layer – externer Modell-Generator noetig
      - Maintainer-Velocity moderat, Bus-Faktor 1
      - Keine MAESTRO/Agentic-Regeln out-of-the-box
      - Kein nativer LLM-Layer – aber YAML-Eingabe laesst sich extern via STRIDE-GPT/Claude generieren und dann deterministisch pruefen lassen
      - Christian Schneider bekannt in DACH-AppSec-Community – Vorteil fuer Vendor-Vertrauen, aber Bus-Faktor-Risiko
      - Keine MAESTRO/agentic-AI-Regeln out-of-the-box
      - Keine integrierte AI-Funktion
      - YAML-Erstellung initial aufwendig
      - Maintainer-Velocity moderat
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - DevSecOps-/IaC-tauglich, GitOps-friendly
      complaints:
        - Keine AI, manuelles YAML
    sources:
      - id: threagile-threagile
      - id: threagile-github
      - id: threagile-reddit
  - id: aws-threat-designer
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Apache-2.0 Bedrock-native Loesung; fuer AWS-Kunden in DACH mit Bedrock-Frankfurt/Zurich-Zugang ein gangbarer Pfad mit AWS-DPA. Sentry-Konversation und iteratives Refinement guter Workflow. Fuer Nicht-AWS-Shops irrelevant.
    caveats:
      - Voller AWS-Lock-in (Bedrock, Cognito, Amplify, OpenSearch)
      - Modell-Verfuegbarkeit pro EU-Region pruefen
      - Kein deterministischer Rules-Layer
      - Bedrock EU-Region fuer Claude Sonnet 3.7+ Verfuegbarkeit pruefen – Modell-Verfuegbarkeit pro Region wechselt monatlich
      - Cognito/Amplify/OpenSearch-Stack erzeugt echten AWS-Lock-in der Threat-Model-Daten
      - Kein deterministischer Rules-Layer – Reproduzierbarkeit fuer Audit fragwuerdig
      - AWS-zentriert (Bedrock, Cognito, Amplify, OpenSearch)
      - Keine fertige On-Prem-Variante ohne AWS
      - Output bleibt LLM-Vorschlag, kein deterministischer Rules Engine
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: aws-threat-designer-github
      - id: aws-threat-designer-amazon
  - id: claude-code
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Bereits im Atlas; fuer DACH-Teams mit Anthropic-EU-/Bedrock-EU-DPA pragmatischer Workflow auf nicht-vertraulichen Architekturen. Senior-Review verpflichtend; AI-Act Art. 50 Transparenzhinweis im Output mitfuehren.
    caveats:
      - Architekturmodelle verlassen Org-Grenze – fuer KRITIS-Klassifikation untragbar
      - Skills sind Community-Prompts ohne CVE-/Standard-Mapping-Garantie
      - Output bleibt LLM-Vorschlag ohne deterministische Engine
      - "AI-Act Art. 50 Transparenzpflicht: Threat-Modeling-Output mit AI-Hinweis kennzeichnen"
      - /security-review-Skills sind Community-Prompts ohne CVE-/Standard-Mapping-Garantie
      - Pro-Forma-Threat-Modelle moeglich – Senior-Review unverzichtbar
      - Cloud-LLM – Architekturmodelle verlassen die Org-Grenze
      - Skills sind Community-Prompts, kein zertifizierter Workflow
      - Output bleibt LLM-Vorschlag ohne deterministische Rules-Engine
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Findet auch architekturweite Issues
        - Gut anpassbar via Skills
      complaints:
        - Lizenz/Datenschutz fuer regulierte Branchen
        - Halluzinationen erfordern Senior-Review
    sources:
      - id: claude-code-security-review-threat-modeling-skill-pawanpatra
      - id: claude-code-security-review-threat-modeling-skill-github
      - id: claude-code-security-review-threat-modeling-skill-github-2
  - id: csa-maestro-threat-analyzer
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: high
    why_it_fits: Referenzimplementierung schliesst die im Briefing markierte Luecke 'agentische/AI-spezifische Risiken jenseits klassisches STRIDE'. Ollama-Support erlaubt EU-/Self-Hosted-Setup. Fuer Lab/PoC, nicht produktiv.
    caveats:
      - Vom Anbieter explizit als 'educational' markiert
      - MAESTRO-Framework noch im Fluss – Reproduzierbarkeit gefaehrdet
      - Genkit/Gemini-Default ohne EU-Konfiguration
      - MAESTRO-Framework noch im Fluss – Mappings koennen sich aendern, was Audit-Reproduzierbarkeit gefaehrdet
      - Genkit/Gemini-Default ist nicht EU-konform out-of-the-box
      - Keine Aussage zu Produktivisierungsroadmap durch CSA
      - Vom Anbieter explizit als 'educational/demonstrative' markiert
      - Nicht produktiv gehaertet
      - MAESTRO-Framework selbst noch im Fluss
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Schliesst Luecke fuer agentische Systeme
      complaints:
        - Framework noch jung
        - Tool ist Demo-Reife
    sources:
      - id: csa-maestro-threat-analyzer-github
      - id: csa-maestro-threat-analyzer-bishopfox
      - id: csa-maestro-threat-analyzer-cloudsecurityalliance
  - id: owasp-pytm-pytmgpt
    fit: conditional
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Threat-Model-as-Code: maximale Audit-/Repro-Eigenschaft fuer ISO-27001-A-8.27-Sign-off. LLM nur fuer Modellbau aus Prosa, Threats deterministisch aus Regelkatalog – aus DACH-Compliance-Sicht ideal. Lokal lauffaehig, keine Cloud-Bindung."
    caveats:
      - Hoechste Einstiegshuerde fuer Stakeholder ohne Python
      - Keine GUI fuer Reviews
      - BSI-Grundschutz-Mappings selbst kuratieren
      - Stakeholder ohne Python-Skills bleiben aussen vor
      - OWASP-Community-Velocity moderat, Releases sporadisch
      - Keine Mappings auf BSI-Grundschutz out-of-the-box – muessen kustomisiert werden
      - Threats deterministisch aus Regelkatalog – LLM nur fuer Modellbau
      - Kein UI fuer Stakeholder
      - Pflege haengt an OWASP-Community
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Threat-Model-as-Code, IDE-/CI-tauglich
      complaints:
        - Hohe Einstiegshuerde fuer Nicht-Devs
    sources:
      - id: owasp-pytm-pytmgpt-github
      - id: threagile-reddit
  - id: owasp-secopstm
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Hybrid aus deterministischer pytm-Engine plus optionalem Ollama-LLM und RAG (ChromaDB + lokale HuggingFace-Embeddings). Erlaubt fully-offline DACH-Betrieb mit CAPEC-/CVE-/D3FEND-/NIST-800-53-Mapping. Perfekter Lab-Kandidat fuer KRITIS-Voruntersuchung.
    caveats:
      - Junges OWASP-Projekt, kein Enterprise-SLA
      - RAG-Inhalt selbst kuratieren noetig
      - ChromaDB-Pflege addiert Ops-Aufwand
      - ChromaDB-Setup zwingt zu eigener Vektor-DB-Pflege
      - Kein Enterprise-SLA, nur OWASP-Community
      - RAG-Inhalte muessen selbst kuratiert werden – sonst halluziniert das LLM CAPEC-Mappings
      - Junges OWASP-Projekt, Stabilitaet noch nicht gesichert
      - RAG-Setup nicht trivial
      - Keine grosse Praktiker-Basis
    sources:
      - id: owasp-secopstm-owasp
  - id: sd-elements-navigator-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: On-Premise-faehige Plattform mit starkem Compliance-Mapping (FINRA, DoD, ISO 27001). Navigator-AI ist Beta, aber das Survey-/Requirements-Modell allein ist fuer DACH-Konzerne mit grossem App-Portfolio bewaehrt. AI-Augmentation ist Bonus, nicht Kern.
    caveats:
      - Navigator-AI noch Beta – nicht primaeres Kaufkriterium
      - Kein nativer MAESTRO/Agentic-Support
      - Hoher Konfigurationsaufwand, Onboarding-Aufwand wochen-/monateweit
      - AI-Layer ergaenzt Survey-Workflow, ersetzt ihn nicht – Aufwand bleibt hoch
      - Auf MAESTRO/Agentic-AI nur indirekt vorbereitet
      - Lizenzpreis erfordert reifes AppSec-Programm (>= 50 Apps) zur Wirtschaftlichkeit
      - AI-Schicht eher Survey-/Diagramm-Assist, kein vollwertiger MAESTRO/agentic-Support
      - Hoher Konfigurationsaufwand
      - Lizenzkosten Enterprise-Niveau
    sources:
      - id: sd-elements-navigator-ai-co-uk
      - id: sd-elements-navigator-ai-sdelements
  - id: threatforge
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Likely missed by market scan because das Projekt positioniert sich als TMT-Nachfolger und nicht als 'AI-Threat-Modeling'. Cross-platform Tauri-Desktop-App mit git-diffbaren YAML-Modellen, AI-Layer optional (Claude/GPT direkt vom Client – kein Intermediary), AES-256-GCM fuer API-Keys at rest. Importiert TMT-tm7-Files und beendet Windows-Lock-in. Deterministische STRIDE-per-Element-Engine funktioniert offline.
    caveats:
      - AI-Calls gehen direkt an OpenAI/Anthropic – fuer KRITIS-Architekturen muss AI-Schicht abgeschaltet werden
      - Junges Projekt (2026-Q1)
      - Kein zentraler Audit-Trail – Modelle leben in Git
      - Keine MAESTRO-Coverage
    sources:
      - id: threatforge-github
  - id: threatshield
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Likely missed by market scan because der Anbieter positioniert sich primaer ueber 'AI-driven threat modeling' Workshops und ist ein DACH-/EU-orientierter Player ohne grosse Online-Praesenz. EU-Domain (.eu), explizites Self-Hosting-Angebot via Docker plus Open-Source-Repo – passt direkt auf Briefing-Caveat 'Daten nicht zum US-Vendor'.
    caveats:
      - Geringe oeffentliche Reichweite, Praktiker-Signal unklar
      - Funktionsumfang vs. STRIDE-GPT/Paranoid nicht oeffentlich vergleichbar
      - Workshop-Modell impliziert hohen Beratungs-Anteil
      - Reife der OSS-Komponente vor PoC verifizieren
    sources:
      - id: threatshield-threatshield-eu
  - id: paranoid
    fit: immature
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "Adressiert direkt die im Briefing markierte MAESTRO-Luecke: Open-Source (Apache-2.0), Dual-Framework STRIDE+MAESTRO mit 362 deterministischen Patterns (STRIDE/MAESTRO/OWASP/MITRE ATT&CK/ATLAS/CAPEC), Ollama-Air-Gap, voller SQLite-Audit-Trail, SARIF/PDF/Markdown-Export, GitHub-Action-Distribution. Architektonisch passt das Tool exakt auf den DACH-Self-Hosting-Bedarf und liefert Reproduzierbarkeit per Run-Persistenz – dort, wo STRIDE-GPT und Threagile Luecken haben."
    caveats:
      - "Sehr junges Projekt: erstes Tag v1.0.1 am 2026-03-24, aktuelle v1.4.0 (2026-04-12) – keine Produktions-Historie"
      - GitHub-Repo hat nur 2 Stars, keine externen Reviews/Praktiker-Berichte auffindbar – kein unabhaengiges Non-Vendor-Signal
      - Solo-Maintainer (Astitva), Bus-Faktor 1, keine Eskalationspfade/SLAs
      - "Praktiker-Volume effektiv null: keine Reddit-/Blog-/Conference-Erwaehnungen ausserhalb des eigenen Repos"
      - MAESTRO-Framework selbst noch im Fluss – Pattern-Mappings koennen Audit-Reproduzierbarkeit gefaehrden
      - Kein Multi-User-RBAC, keine Enterprise-Authentifizierung
      - DREAD-Scoring deterministisch, aber LLM-Anteil halluzinationsanfaellig – Senior-Review verpflichtend
      - "Vor PoC zwingend: eigene Reproduzierbarkeitstests, Pattern-Audit gegen ISO-27001/BSI-Mapping, Wartungsrisiko-Bewertung"
    practitioner_signal:
      volume: low
      tenor: unknown
      complaints:
        - Keine unabhaengigen Berichte oeffentlich verfuegbar
    sources:
      - id: paranoid-github
      - id: paranoid-pypi
start_here: "Einstieg mit STRIDE-GPT auf Ollama-Backend an einem klar abgegrenzten Bounded Context: DFD als Input liefern und Mitigation-Vorschläge direkt mit dem Security-Team gegenprüfen. Für Audit-Anforderungen (ISO-27001 A.8.27) Threagile als deterministischen Layer ergänzen — das YAML-Modell kann per STRIDE-GPT vorgeschlagen und anschließend regelbasiert geprüft werden."
caveats: Cloud-LLMs exponieren Architekturmodelle beim Anbieter — für BAIT-/KRITIS-Systeme sind ausschließlich Self-Hosted-Backends (Ollama) oder Azure OpenAI EU mit DPA tragbar. Klassisches STRIDE deckt agentische und KI-spezifische Risiken nicht ab; MAESTRO-basierte Tools existieren, haben aber noch keine ausreichende Produktionsreife für den regulierten Betrieb.
sources: []
---
