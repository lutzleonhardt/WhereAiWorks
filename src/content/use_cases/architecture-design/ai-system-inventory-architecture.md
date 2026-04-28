---
stage: architecture-design
order: 14
roles:
  - software-engineer
  - software-architect
title: KI-System-Inventar als Architektur-Artefakt erzeugen
goal_label: Schatten-KI und eingebettete KI-Komponenten architektonisch erfassen
suitability: conditional
rationale: Wiz AI-SPM kartiert KI-Modelle, Identitäten und Netzwerkpfade über alle Cloud-Konten und liefert damit ein AI-BOM mit echter Architekturkopplung; Codacy AI Inventory ergänzt den Code-Layer durch SDK- und Copilot-Konfigurationserkennung direkt im Repository ohne LLM-Inferenz. Beide Tools decken gemeinsam den Kern der Discovery-Aufgabe — Codebasis-Scan plus Datenfluss-Analyse — ab, die bislang nur manuell oder über GRC-Prozesse adressiert wurde.
tools:
  - id: codacy-ai-inventory
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Source-Code-Inventar über 7 Sprachen plus .cursorrules/CLAUDE.md/MCP-Detection — adressiert Schatten-Copiloten direkt. Pattern-Matching ohne LLM-Inferenz ist für DACH-Security-Teams sicher. Inventar-Drift wird per Commit-Tracking adressiert.
    caveats:
      - Frisch (April 2026); Reife unbewiesen.
      - Nur Code-Repos — keine SaaS-Embedded-AI (Workday, SAP Joule).
      - Pattern-Matching produziert False Positives bei eigenen Wrappern.
      - Codacy ist portugiesischer Anbieter mit EU-Hosting-Option, aber kein klares DACH-Vertriebsteam — Procurement kann zäh sein.
      - Pattern-Matching erzeugt False Positives bei eigenen Wrapper-Bibliotheken; Custom-Rule-Pflege fällt auf Architekturteam zurück.
      - "Inventar bleibt Code-zentriert: keine SaaS-AI (Workday-AI, SAP Joule) — Briefing-Caveat nicht abgedeckt."
      - Scope auf Code-Repos beschränkt — keine Cloud- oder SaaS-Discovery.
      - Frisch (April 2026 launched); Reife noch unbewiesen.
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: codacy-ai-inventory-codacy
      - id: codacy-ai-inventory-prweb
  - id: microsoft-defender-for-cloud-apps-purview-dspm-for-ai
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Für DACH-Enterprises mit M365-E5-Stack der natürliche Erstkandidat ohne neuen Vendor; Datenrahmen, DPA und EU-Datenresidenz bereits geregelt. Discovery für 1000+ GenAI-SaaS plus Entra Agent ID. Kein Codebasis-Scan, kein CycloneDX.
    caveats:
      - E5/Compliance-Add-on-Lizenz nötig — DACH-Mittelstand oft nur E3.
      - Microsoft-zentrische Sicht; AWS/GCP-AI nur über Connectoren.
      - Output ist Discovery-Liste, kein Architektur-Artefakt.
      - "Lizenz-Einstiegshürde: viele DACH-Mittelständler haben nur E3 — DSPM for AI verlangt Compliance-/E5-Add-ons."
      - Microsoft-zentrische Sicht; AWS-/GCP-AI-Services nur über Connectoren mit Verzögerung.
      - Kein Architektur-Artefakt im engeren Sinn — nur Discovery-Liste plus Risk-Score.
      - Stark Microsoft-zentriert; non-MS-Cloud-AI weniger detailliert.
      - Nicht primär ein Architektur-Artefakt-Generator (kein CycloneDX).
      - Lizenzkomplexität (E5/Defender/Purview-SKUs).
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: microsoft-defender-for-cloud-apps-purview-dspm-for-ai-microsoft
  - id: reco
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Einziger pragmatischer Hebel für SaaS-Embedded-AI (Salesforce Einstein, Microsoft Copilot, Workday-AI, Notion AI) — adressiert das wichtigste Briefing-Caveat. SSPM-Layer; kein Architektur-Artefakt-Generator, sondern unverzichtbarer Komplementär.
    caveats:
      - Israelischer Vendor — EU-Hosting muss vertraglich fixiert werden.
      - Output ist Findings-Liste, kein CycloneDX/Architektur-Format.
      - Long-Tail-SaaS bleibt blind, wenn nicht im OAuth-/Netzwerk-Sensor.
      - Israelischer Vendor; EU-Hosting muss vertraglich fixiert werden, sonst Schwierigkeiten in DACH-Konzern-Compliance.
      - Nur sinnvoll als zweites Tool neben einem Code-Scanner — Doppellizenz erhöht TCO.
      - Inventar-Drift wird nur bemerkt, wenn der OAuth-/Netzwerk-Sensor die SaaS auch abdeckt — Long-Tail-SaaS bleibt blind.
      - Keine Codebasis-/Architektur-Analyse — reine SaaS/SSPM-Sicht.
      - Inventar-Output ist eher Liste als Architektur-Artefakt; CycloneDX/Standard-Export unklar.
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Schnelle SaaS-Integrationen auf Kundenwunsch
        - Sichtbarkeit in tatsächliches Schatten-AI
    sources:
      - id: reco-reco
      - id: reco-reco-2
      - id: reco-reco-3
  - id: annexora
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: EU-AI-Act-OS mit EU-Datenresidenz als Default, Annex-III-Playbooks, Notified-Body-fähigen Audit-Packs — adressiert DACH-Compliance-Buyer (CRR/Solvency-II) direkt. Likely missed by market scan because positioniert als 'EU AI Act OS', nicht als KI-Inventar-Tool — Compliance-Framing statt Capability-Framing.
    caveats:
      - Operatives Compliance-Tool, nicht Architektur-Discovery — kein Codebasis-Scan.
      - Junger Vendor; öffentliche Kundenliste klein.
      - Inventar ist Eingabe, nicht Output eines Auto-Discovery-Mechanismus.
    sources:
      - id: annexora-annexora
  - id: collibra-ai-governance
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Plattform-agnostische AI-Registry mit Lineage über AWS Bedrock/SageMaker, Azure AI Foundry, Databricks, MLflow, SAP AI Core — passt in DACH-Konzerne mit existierendem Collibra-Data-Catalog. Likely missed by market scan because Collibra wird als Data-Catalog wahrgenommen, das AI-Governance-Modul ist Suite-Erweiterung.
    caveats:
      - Kein Codebasis-Scan; Discovery basiert auf Konnektoren zu ML-Plattformen.
      - ROI nur sinnvoll, wenn Collibra-Data-Catalog bereits installiert ist.
      - EU-Datenresidenz vertraglich zu fixieren.
    sources:
      - id: collibra-ai-governance-collibra-collibra-com-us-en-products-ai-governance
  - id: ibm-watsonx-governance
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Modell-Inventar mit Lifecycle-Tracking und automatischer Compliance-Berichterstattung; in DACH-Banken und Versicherungen mit IBM-Footprint und ISO-42001-Anbindung relevant. Likely missed by market scan because watsonx.governance ist als Bestandteil der watsonx-Suite positioniert, nicht als Standalone-Inventar.
    caveats:
      - Stark IBM-zentrisch; non-IBM-Modelle nur über Konnektoren.
      - Lizenz im sechsstelligen Bereich; nur sinnvoll mit watsonx-Footprint.
      - Kein automatischer Codebasis-Scan.
    sources:
      - id: ibm-watsonx-governance-nudgesecurity
  - id: jfrog-ai-catalog-aibom
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: AIBOM in JFrog Software-Supply-Chain-Plattform integriert — viele DACH-Großentwickler haben Artifactory bereits als Standard-Artefakt-Store, AI-Inventar fällt als Plattform-Erweiterung an, ohne neuen Vendor. Likely missed by market scan because AIBOM ist Suite-Feature der Software-Supply-Chain-Plattform, nicht als Standalone vermarktet.
    caveats:
      - ROI nur bei vorhandenem Artifactory-/JFrog-Stack.
      - Discovery-Tiefe in Code geringer als bei dedizierten Scannern.
      - Lizenz-Bündel mit Xray erforderlich.
    sources:
      - id: jfrog-ai-catalog-aibom-jfrog
  - id: kertos
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Münchner Anbieter mit deutschem UI, DSGVO-/EU-AI-Act-Inventar inkl. Asset- und Datenquellen-Verknüpfung — typisches DACH-Argument (Datenresidenz EU, deutsche Sprache). Likely missed by market scan because Kertos ist als Privacy-/DSGVO-Plattform positioniert, AI-Inventory ist Modul-Erweiterung — Capability-only-Suche findet das nicht.
    caveats:
      - Kein automatischer Codebasis-Scan; Discovery basiert auf Asset-Verknüpfung mit existierendem Inventar.
      - Kleinerer Vendor — Bus-Faktor und Roadmap-Risiko.
      - Output-Format (CycloneDX?) nicht dokumentiert.
    sources:
      - id: kertos-kertos
  - id: nudge-security-ai-agent-discovery
    fit: partial
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: Erfasst Low-Code-Agenten in Copilot Studio, Salesforce Agentforce, ServiceNow, n8n, Workato — Slice, der reinen Code-Scannern entgeht. Komplementär, nicht primär.
    caveats:
      - OAuth-/E-Mail-Metadaten-Sichtbarkeit erfordert Betriebsrat-Abstimmung in DACH.
      - Kein CycloneDX-Output.
      - Schmal — nur Agent-Layer, kein Voll-Inventar.
      - Setzt OAuth-/E-Mail-Metadaten-Sichtbarkeit voraus — bei DACH-Konzernen mit strikten Privacy-Regeln (Betriebsrat) Hürde.
      - Kein CycloneDX-/Architektur-Artefakt-Output.
      - US-Vendor; DPA, EU-Subprozessoren prüfen.
    sources:
      - id: ibm-watsonx-governance-nudgesecurity
  - id: onetrust-ai-governance
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: DACH-relevante GRC-Suite mit deutscher Lokalisierung, EU-AI-Act-/ISO-42001-Templates und KI-Verzeichnis-Modul; oft schon als Privacy-Plattform vorhanden, was Procurement vereinfacht. Likely missed by market scan because OneTrust ist als Privacy-/GRC-Suite positioniert, nicht als KI-Inventar-Tool — die KI-Funktion ist Suite-Feature.
    caveats:
      - Auto-Discovery-Tiefe gegenüber Wiz/Snyk schwächer — primär manuelles/Metadaten-Inventar.
      - Lizenz fünf- bis sechsstellig; ROI nur bei Bündel-Nutzung über Privacy/GRC hinweg.
      - Kein CycloneDX-Output dokumentiert.
    sources:
      - id: onetrust-ai-governance-onetrust-onetrust-com-products-ai-governance
  - id: xenetra-cross-identity
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: AI-Agent-Discovery über SaaS, Cloud, Netzwerk und Devices mit Framework-Mapping (EU AI Act, NIST, ISO) und IAM-Anbindung — adressiert das Schatten-KI-Caveat breiter als reine Code-Scanner. Likely missed by market scan because IAM-Vendor-Pivot in AI-Discovery, nicht im klassischen 'AI inventory tool'-Kanon präsent.
    caveats:
      - Vendor-Reife öffentlich schwer einschätzbar; wenig unabhängige Reviews.
      - EU-Hosting/DPA muss verhandelt werden.
      - Kein Codebasis-Scan, kein CycloneDX.
    sources:
      - id: xenetra-cross-identity-crossidentity
  - id: cisco-ai-defense-ai-bom
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: AST-basierte Python-Analyse plus Custom-Catalog plus Container-Scan trifft den Briefing-Use-Case 'Codebasis-Scan + Datenfluss' für Python-lastige AI-Apps. Cisco-Sponsoring suggeriert Langlebigkeit, aber Open-Source-Repo (~59 Stars) ohne offiziellen Enterprise-Support; unabhängiger Drittanbieter-Vergleich (Trusera) bestätigt schmale Scanner-/Format-Abdeckung. Reife rechtfertigt nur einen Pilot, nicht den Default-good_fit.
    caveats:
      - Python-only (Stand 2026); JS/TS/Java/Kotlin/.NET fehlen — DACH-Backend-Realität wird verfehlt.
      - Cisco-Branding suggeriert Enterprise-Support, das Open-Source-Repo bietet ihn aber nicht — gefährlicher Vendor-Eindruck.
      - DuckDB-Catalog muss intern für Inhouse-Frameworks gepflegt werden — versteckter Pflegeaufwand.
      - Kein SaaS-/Cloud-Discovery — nur Code/Container.
      - Open-Source-Reife noch begrenzt (kleine Community, schnelle Refactors).
      - Drittanbieter-Vergleich (Trusera) listet nur 1 Scanner und 2 Output-Formate — schmaler als Snyk/Wiz.
    sources:
      - id: cisco-ai-defense-ai-bom-github
      - id: cisco-ai-defense-ai-bom-trusera
  - id: snyk-ai-bom
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: CycloneDX-1.6-AI-BOM aus Python-Code, CI/CD-nativ, DeepCode-basierte Detection auch ohne Manifest. Snyk hat in vielen DACH-Großentwicklern bereits SCA/SAST-Footprint, das senkt Procurement-Hürde. Drittanbieter-Vergleich (Trusera) bestätigt aber 'Early Access / Limited Preview'-Status und proprietäre Bindung an den Snyk-Tenant — kein good_fit-Default für regulatorische Inventarpflicht.
    caveats:
      - Experimental-Flag — kein SLA, keine GA-Garantie für regulatorische Inventarpflicht (BaFin/DORA).
      - Java/Kotlin/.NET fehlen — DACH-Backend-Realität wird verfehlt; Python deckt nur 20–40 % typischer DACH-Codeparks.
      - EU-Hosting nur teilweise paritätisch zu US-Region; DPA prüfen.
      - Daten gehen an Snyk-Tenant; Source-Code-Telemetrie und allow-listed Orgs für HTML-Output.
      - Drittanbieter-Vergleich listet 'Limited preview' und nennt Open-Source-Alternativen mit breiterer Sprach-/Format-Abdeckung.
      - Keine unabhängigen Praxisreviews jenseits Snyk-eigener Tutorials gefunden — Praktikersignal niedrig.
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: snyk-ai-bom-snyk
      - id: snyk-ai-bom-snyk-2
      - id: cisco-ai-defense-ai-bom-trusera
  - id: wiz-ai-spm-ai-bom
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Cloud-natives AI-BOM mit Security-Graph: kartiert Modelle, Identitäten, Daten und Netzwerkpfade über AWS/Azure/GCP/Kubernetes — die Architekturkopplung, die ein Inventar als Architektur-Artefakt braucht. Forrester Wave CNAPP Q1 2026 nennt Wiz als Leader mit Höchstnote in 'Agentic AI and copilots'; Toolworthy.ai-Hands-on-Test 2026 ranked Wiz AI-SPM #1 für Multi-Cloud-AI-Discovery; Gartner Peer Insights 4.7/5 (300 Bewertungen). Wiz hat EU-Tenant-Optionen und ist in DACH-Großunternehmen mit Multi-Cloud bereits etabliert."
    caveats:
      - EU-Datenresidenz nur bei expliziter Konfiguration — Default ist US.
      - On-prem-Workloads in DACH-Banken werden nicht erfasst.
      - CycloneDX-Export muss aus dem Wiz-Modell extrahiert werden — kein nativer Standard-Export laut öffentlicher Doku.
      - EU-Datenresidenz muss bei Onboarding aktiv konfiguriert werden — Default ist US.
      - Deckt nur, was die Cloud-APIs sehen; on-prem-Workloads (in DACH-Banken signifikant) fallen heraus.
      - BaFin-/DORA-Auditoren erwarten zusätzlich CycloneDX-Export — Wiz-Output muss dafür extrahiert/transformiert werden.
      - Findet nur, was in Cloud-Konten liegt — Browser-/SaaS-Embedded-AI bleibt blind.
      - Enterprise-Pricing (~$50k+/Jahr); kein Free Tier; CNAPP-Footprint nötig.
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Forrester Leader CNAPP Q1 2026 mit Höchstwerten u. a. in 'Agentic AI and copilots'
        - Gartner Peer Insights 4.7/5 (300 Reviews) — agentenloses Deployment, schnelle Sichtbarkeit
        - "Toolworthy.ai 2026 CISO Buyer's Guide ranked Wiz AI-SPM #1 für Multi-Cloud"
    sources:
      - id: wiz-ai-spm-ai-bom-wiz
      - id: wiz-ai-spm-ai-bom-wiz-2
      - id: wiz-ai-spm-ai-bom-forrester
      - id: wiz-ai-spm-ai-bom-toolworthy
      - id: wiz-ai-spm-ai-bom-gartner-peer
start_here: Teams mit Multi-Cloud-Footprint starten am risikoärmsten mit Wiz AI-SPM — EU-Tenant beim Onboarding konfigurieren, Cloud-Konnektoren aktivieren, AI-BOM-Dashboard auswerten. Wer noch kein CNAPP-Budget hat, beginnt mit Codacy AI Inventory auf einem Pilot-Repo; DACH-Enterprises mit vorhandenem M365-E5-Stack können Microsoft Defender for Cloud Apps parallel für SaaS-AI-Discovery aktivieren, ohne einen neuen Vendor einzuführen.
caveats: Inventar-Drift ist das unmittelbarste Risiko — ohne CI/CD-Anbindung und Procurement-Kopplung veraltet der Scan-Befund binnen Wochen und taugt nicht als dauerhafter Compliance-Nachweis. SaaS-eingebettete KI (Workday, Salesforce Einstein) bleibt für reine Code- und Cloud-Scanner unsichtbar; dieser Bereich erfordert einen ergänzenden SSPM-Layer.
sources: []
---
