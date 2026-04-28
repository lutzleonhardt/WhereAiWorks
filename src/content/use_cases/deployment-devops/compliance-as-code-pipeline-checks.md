---
stage: deployment-devops
order: 17
roles:
  - software-engineer
  - platform-devops-engineer
title: EU-AI-Act-Compliance-Checks in CI/CD
goal_label: Annex-IV-Doku, Risk-Klassifikation und Audit-Schemas im PR validieren
suitability: conditional
rationale: Systima Comply liefert als Apache-2.0-GitHub-Action einen lauffähigen PR-Gate für EU-AI-Act-Article-Pflichten (5/9–14/27/50); für DACH-Banken und Versicherer ergänzt Matproof den Annex-IV-Audit-Anker mit Frankfurt-Hosting und BaFin-Format-Reporting. Der Use Case bleibt im DevOps-Radar unsichtbar, weil relevante Tools als Compliance-Plattformen statt als Pipeline-Tools vermarktet werden.
tools:
  - id: github-com-marketplace-actions-aibom-scanner
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: GitHub Action mit 261 Detection-Patterns, mappt Findings auf NIST AI RMF, ISO 42001 und EU AI Act. Pure-Python-Stdlib, kein Vendor-Lock-in. Sinnvoller AI-BOM-Schritt vor dem eigentlichen Annex-IV-Validator.
    caveats:
      - Nur 10 Controls fuer EU AI Act — Annex IV unvollstaendig
      - Schwerpunkt SDK-Inventory, kein Doku-Gate
      - Vendor mit geringen DACH-Spuren
      - Nur 10 Controls fuer EU AI Act — ungenuegend fuer Hochrisiko-Pflichten
      - Vendor SaaSvista hat geringe oeffentliche Spuren in DACH
      - Nur 10 Controls für EU AI Act — Annex IV nicht abgedeckt
      - Schwerpunkt SDK-Inventarisierung, kein Doku-Gate
      - Generischer Scope (auch ISO/NIST), nicht primär AI-Act
    sources:
      - id: github-com-marketplace-actions-aibom-scanner
  - id: github-com-ark-forge-mcp-eu-ai-act
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: MCP-Server mit check_compliance / suggest_risk_category sowie optionalem Trust Layer (Ed25519, SHA-256-Hash-Chain) fuer signierten Audit-Trail — adressiert das Briefing-Stichwort 'timestamped Audit-Trail'. MCP-only ist ein architektonischer Bruch zur klassischen CI, daher als Pilot-Kandidat zu fuehren.
    caveats:
      - Kein nativer GitHub-Action/CLI-Pfad ohne MCP-Client
      - Trust-Layer ist kostenpflichtiges Add-on ohne oeffentliche Preise
      - HMAC/Ed25519-Chain ist kein qualifizierter eIDAS-Zeitstempel
      - Kostenpflichtiger Trust-Layer ohne oeffentliche Preise oder DACH-Referenzen
      - MCP-Client-Abhaengigkeit verschiebt Compliance-Logik in IDE — schwieriges Audit-Modell
      - "MCP-only: keine eigene CLI, kein nativer GitHub-Action-Lauf"
      - Statische Analyse, keine Runtime-Bewertung
      - Trust-Layer ist kostenpflichtiges Add-on
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Saubere MCP-Integration in IDE-Coding-Agents
      complaints:
        - Kein nativer CI/CD-Pfad ohne MCP-Client
    sources:
      - id: github-com-ark-forge-mcp-eu-ai-act
      - id: airblackbox-ai-blog-eu-ai-act-compliance-tools-compared
      - id: github-com-ark-forge-mcp-eu-ai-act-discussions-4
  - id: credo-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: GRC-Plattform mit EU-AI-Act-Policy-Pack und Python-SDK fuer ML-/CI/CD-Pipelines, generiert Audit-Artefakte fuer Annex IV. Die einzige im Markt-Scan vertretene Plattform mit echter Fortune-500-Liefer-Historie — fuer DACH-Konzerne als Audit-Anker erwaegenswert, auch wenn der CI-Hook nur SDK-basiert ist.
    caveats:
      - CI/CD-Enforcement laut Vendor 'planned', noch nicht GA
      - US-Vendor, EU-Hosting-Optionen muessen vertraglich erzwungen werden
      - Hochpreisig (~50-200k EUR/Jahr), Sales-led
      - Optimiert fuer Compliance-Teams, nicht Devs — der hier geforderte Dev-Workflow ist Sekundaer
      - Dev-Audience ist nicht Kernzielgruppe — wird als Compliance-Tool gekauft, nicht als Pipeline-Tool
      - CI/CD-Enforcement-Integration laut Vendor noch 'planned'
      - Enterprise-Sales-Cycle, kein Self-Service
      - Optimiert für Compliance-Teams, nicht Devs
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Akzelleriert Annex-IV-Audit-Vorbereitung in Großunternehmen
      complaints:
        - Hochpreisig (~€50-200k/J), für Devs nur indirekt nutzbar
    sources:
      - id: credo-ai-product
      - id: agentsindex-ai-compare-credo-ai-vs-holistic-ai
      - id: protectron-ai-compare
  - id: github-com-trusera-ai-bom
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: AI-BOM-Generator mit GitHub-Action, SARIF-Output und Cedar-Policy-Gate. Erkennt moderne Komponenten (MCP, A2A, vLLM, .gguf/.safetensors) — adressiert genau die Annex-IV-Komponenten-Inventar-Pflicht.
    caveats:
      - Inventory-Fokus, deckt Article 9-15 nicht ab
      - Cedar-Policy-Pflege ist Engineering-Aufwand
      - Junges Repo (Feb 2026)
      - Cedar-Policy-Pflege ist eigene Disziplin — Ressourcenbedarf nicht trivial
      - Junges Repo (Feb 2026), keine DACH-Referenzen
      - Inventory-Fokus, kein Article-9-15-Compliance-Check
      - Cedar-Policies erfordern eigene Pflege
    sources:
      - id: github-com-trusera-ai-bom
  - id: gosign-de-en-governance
    fit: partial
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Likely missed by market scan because Gosign als 'AI Agent Builder' und nicht als Compliance-Scanner positioniert ist. Deutscher Vendor, dessen Architektur Art. 9-14 (Transparenz, Human Oversight, Record-Keeping, Risk Management) als Design-Prinzip mit Audit-Trail (Timestamps, Input-Hashes, Modell-Versionen) verankert und das in DACH einzigartige BetrVG-/Mitbestimmungs-Argument explizit adressiert — relevant, wenn die Pipeline-Pflicht Agent-Systeme einschliesst.
    caveats:
      - Architektur-Mapping, nicht eigenstaendiges PR-Gate-Tool
      - ISO-27001 selbst-deklariert 'Cert-Ready by Design', nicht zertifiziert
      - Vendor-Reife im Vergleich zu Matproof/trail schwerer einschaetzbar
    sources:
      - id: gosign-de-en-governance
  - id: matproof-com-frameworks-eu-ai-act
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Likely missed by market scan because Matproof als DACH-natives Multi-Framework-GRC vermarktet wird (DORA + NIS2 + GDPR + AI Act), nicht als 'CI/CD-Compliance-Scanner'. AI-Act-Modul deckt alle 98 Requirements, generiert Annex-IV-Doku automatisch aus dem System-Inventory; Frankfurt-Hosting, deutsches Team, BaFin-Format-Reporting — das saubere DACH-Bank-Argument fuer Annex-IV-Audit-Anker, auf dem ein Comply-/Trusera-Pipeline-Gate aufsetzen kann.
    caveats:
      - Plattform, kein nativer PR-Gate-Lauf — Pipeline-Integration via API
      - Keine oeffentlichen DACH-Customer-Logos auf der Vendor-Seite — Aussagen sind Marketing
      - ISO27001/SOC2-Status der Plattform muss vertraglich verifiziert werden
    sources:
      - id: matproof-com-frameworks-eu-ai-act
      - id: matproof-com-solutions-enterprise
  - id: trail-ml-com
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Likely missed by market scan because trail als 'AI Governance Copilot' fuer Compliance-Teams positioniert ist, nicht als CI/CD-Scanner. Reale DACH-Reife: ISO/IEC 27001 + ISO/IEC 42001 zertifiziert, GCP-EU-Hosting, ISO-42001-Lead-Auditor im Team, hat einen der ersten ISO-42001-Audits im EU-Finanzsektor begleitet — das exakte Profil fuer DACH-Banken/Versicherer, die zu 'Pipeline-Pflicht' August 2026 einen seriosen Annex-IV/Risk-Anker brauchen, an den OSS-Pipeline-Tools andocken."
    caveats:
      - Kein nativer PR-Gate; Integration ueber API/Workflows
      - Pricing intransparent, Enterprise-Sales-Cycle
      - Plattform-Output ist Audit-Artefakt, kein juristischer Review
    sources:
      - id: trail-ml-com-governance
      - id: trail-ml-com-de-iso-42001
  - id: verifywise-ai-de-platform-ai-registry
    fit: partial
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: Likely missed by market scan because VerifyWise als deutschsprachige AI-Registry/Governance-Plattform vermarktet wird, nicht als Pipeline-Scanner. Liefert Risiko-Klassifizierung (Verboten/Hoch/Begrenzt/Minimal), 6 Hochrisiko-Rollentypen (Anbieter/Betreiber/Haendler/Importeur/Produkthersteller/Bevollmaechtigter) und Framework-Mapping auf EU AI Act, ISO 42001, ISO 27001, NIST AI RMF — ergaenzt einen PR-Gate als Inventar-Quelle.
    caveats:
      - Web-/Plattform-zentriert, keine native CI-Action belegt
      - Vendor-Profil und Customer-Base weniger sichtbar als Matproof/trail
      - Klassifikation bleibt heuristisch und vom Anwender zu verantworten
    sources:
      - id: verifywise-ai-de-platform-ai-registry
  - id: github-com-systima-ai-aiact-docs
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Generiert die 9-Sektionen-Annex-IV-Struktur aus Codebase-Scan plus Fragebogen mit auto-detected/questionnaire/missing-Tracking. CI-faehiger Non-Interactive-Mode mit YAML-Config. Kann eigenstaendig oder mit Comply gekoppelt werden.
    caveats:
      - Skelett-Generator, keine inhaltliche Korrektheits-Pruefung
      - LLM-Abhaengigkeit (OpenAI/Anthropic) erfordert separaten AVV/DPA-Pfad in DACH-Banken
      - Vendor-Reife wie bei Comply
      - LLM-API-Abhaengigkeit (OpenAI/Anthropic) erfordert in DACH-Banken einen separaten DPA/AVV-Pfad
      - Skelett ohne inhaltliche Korrektheit kann Auditoren falsche Vollstaendigkeit suggerieren
      - Generiert Skelett, keine inhaltliche Korrektheits-Verifikation
      - Erfordert LLM-API (gpt/claude) für Auto-Inferenz
      - Liefert keine Risk-Assessment-Logik selbst
      - Keine unabhaengige nicht-Vendor-Quelle auffindbar — Belegbasis derzeit ausschliesslich Vendor-Doku
    sources:
      - id: github-com-systima-ai-aiact-docs-blob-main-compliance-md
      - id: github-com-systima-ai-aiact-docs
  - id: github-com-systima-ai-comply
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Apache-2.0 Static-Analyzer plus GitHub Action: validiert deklarierte Risikoklassifikation, prueft Article-5/9/10/11/12/13/14/27/50-Pflichten und postet Findings als PR-Kommentar. Im Trio mit aiact-docs und aiact-audit-log abdeckend fuer Scan + Doku + Art-12-Logging — genau das vom Briefing gesuchte Pipeline-Profil. Unabhaengiger Konkurrenz-Vergleich (AIR Blackbox, Maerz 2026) bestaetigt 37+ Framework-Coverage und positioniert Comply als 'strongest alternative' fuer Node/TS-CI-Workflows."
    caveats:
      - Vendor jung (Repo seit Maerz 2026) — keine BaFin/FINMA-Liefer-Historie
      - TS/Node-Fokus, AST-basiert; Java/.NET-Stacks unterversorgt
      - Compliance-Score ersetzt keinen juristischen Review
      - Kein DPA/SOC2/ISO27001 oeffentlich
      - Vendor-Existenz seit Maerz 2026 — keine belastbare Liefer-Historie fuer BaFin/FINMA-Audit
      - Article-Coverage interpretiert die Pflichten — die juristische Auslegung kann sich bis 2027 noch verschieben
      - Kein DPA / SOC2 / ISO27001 oeffentlich belegt
      - Sprach-/Framework-Fokus stark TS/Node, AST-basiert
      - Compliance-Score ist Hilfsmittel, kein juristischer Audit-Ersatz
      - Vendor relativ jung (Repo seit März 2026)
      - Laut unabhaengigem Vergleich (AIR Blackbox) keine framework-aware Trust-Layer fuer LangChain/CrewAI/Anthropic-SDK — Python-AI-Teams nur generisch abgedeckt
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Native PR-Integration für Node/TS-Stacks
        - Klare Article-Mapping-Logik
        - Unabhaengiger Vergleich beschreibt sauberen GitHub-Action-Hook und 8s-Scan auf Vercel-AI-Chatbot (20k Stars)
      complaints:
        - Junges Projekt, geringe Verbreitung
        - Konkurrent kritisiert fehlende Python-Framework-Awareness
    sources:
      - id: github-com-systima-ai-comply
      - id: systima-ai-blog-systima-comply-eu-ai-act-compliance-scanning
      - id: github-com-sdras-awesome-actions-pull-713
      - id: airblackbox-ai-blog-eu-ai-act-compliance-tools-compared
start_here: Einstieg über Systima Comply als GitHub Action in einem AI-haltigen Node/TS-Repo, PR-Block initial auf "warning" setzen und das Annex-IV-Schema als YAML im Repo versionieren. Für Python-Stacks oder regulierte DACH-Umgebungen mit Hochrisiko-Pflichten ist Matproof als GRC-Anker auf zweiter Ebene sinnvoll.
caveats: Beide Tool-Klassen sind jung; Scanner-Scores und Plattform-Artefakte liefern den timestamped Audit-Trail, ersetzen aber keinen juristischen Review. Die Hochrisiko-Klassifikation bleibt bis zur finalen Aufsichtspraxis regulatorisch interpretierbar.
sources: []
---
