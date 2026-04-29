---
stage: documentation
order: 5
roles:
  - software-engineer
  - software-architect
title: Legacy-Code-Dokumentation (COBOL, ABAP, Mainframe)
goal_label: Unterdokumentierte Altcodebases (COBOL, ABAP, PL/I) erschließen lassen
suitability: conditional
rationale: DACH-Banken und Versicherer betreiben tausende unterdokumentierter COBOL-, PL/I- und ABAP-Module, die für DORA/BAIT-Audits und Modernisierungsprojekte erschlossen werden müssen. Mit IBM watsonx Code Assistant for Z, PKS eXplain (On-Prem, Helaba-Referenz) und Sysparency (ABAP+COBOL, DACH-Sitz) stehen erstmals spezialisierte Werkzeuge mit vertretbarem Compliance-Profil zur Verfügung.
tools:
  - id: ibm-com-products-watsonx-code-assistant-z
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Einziger Hyperscale-Vendor mit echter z/OS-/COBOL-/PL/I-Tiefe und EU-Hosting via IBM Cloud Frankfurt. Code-Explanation-Add-on schreibt Natural-Language-Doku als Inline-Kommentare zurück. Für DACH-Banken mit IBM-Mainframe-Footprint die naheliegendste enterprise-fähige Wahl, sofern Lizenz-Budget (>50k USD/Jahr) und vertraglicher Re-Train-Opt-Out im MSA verankert sind.
    caveats:
      - Listenpreis 50k+ USD/Jahr ist Eintrittshürde
      - ADDI/IDz-Lizenzen kommen on top
      - BYO-LLM/Air-Gap-Modus prüfen — Daten gehen ins IBM-Tenant
      - Kein SAP-ABAP-Support
      - BYO-LLM/Air-Gap-Modus prüfen — watsonx.ai erlaubt EU-Region, aber Daten gehen ins IBM-Tenant
      - Granite-Modelle nicht garantiert ausgeschlossen vom Re-Training — Opt-out-Klausel im MSA verifizieren
      - ADDI-/IDz-Lizenzkosten kommen zur watsonx-Lizenz hinzu — TCO oft unterschätzt
      - Lizenzkosten 50k+ USD/Jahr werden auf r/cobol als Zugangshürde genannt
      - Tiefe z/OS-Toolchain-Integration (IDz, ADDI) erforderlich — nicht für SAP-ABAP
      - Output braucht weiterhin Senior-Mainframer-Review
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Tiefe z/OS-Integration und IBM-Backing
        - Erklärungen helfen bei Onboarding
      complaints:
        - Listenpreis 50k+ USD/Jahr für viele unerreichbar
        - Output 80% korrekt, manuelles Tweaking bleibt
    sources:
      - id: ibm-com-new-announcements-ibm-watsonx-code-assistant-for-z-accelerate-the-application-lifecycle-with-generative-ai-and-automation
      - id: ibm-com-products-watsonx-code-assistant-z
      - id: reddit-com-r-cobol-comments-1rncilc-built-a-free-cobol-analysis-tool-over-the-weekend
      - id: reddit-com-r-cobol-comments-1k1ay13-is-creating-a-automated-documentation-tool-for
  - id: cobolpros-cloud
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Deterministische ANTLR-Parser plus RAG ohne Modell-Training auf Kundencode, On-Prem-Option beworben — methodisch DACH-tauglich gedacht. Vendor jung, ohne sichtbare Bank-Referenzen — strikt Pilot-Material.
    caveats:
      - On-Prem-Option vertraglich verifizieren
      - Keine Compliance-Attestate sichtbar
      - Vendor-Stabilität ungeklärt
      - On-Prem-Option laut Pricing-Page beworben — vertraglich verifizieren
      - Keine sichtbaren Compliance-Attestate
      - Nur COBOL-Estate; kein SAP/PL-I-Fokus
      - Vermarktung als Plattform plus Managed-COBOL-Service — Self-Service-Reife unklar
      - Wenig unabhängige Reviews; eigene Vergleichstabellen sind Marketing
    sources:
      - id: cobolpros-cloud
  - id: codeaura-ai
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "Long-Tail-Sprachenabdeckung (COBOL, PL/I, JCL, HLASM, RPG, CLLE, Natural, Supra PDM, Mantis) ist für DACH-Versicherer mit Software-AG-/Bull-/BS2000-Erbe differenzierend. Output-Mix: File-/Function-Doku, Business-Logic, Dependency-Maps. Strikt PoC-Material wegen unklarer Reife."
    caveats:
      - Junges Unternehmen, keine Compliance-Attestate
      - Hosting-/Datenresidenz unklar
      - Reife für seltene Sprachen extern unverifiziert
      - Hosting-/Datenresidenz unklar — für regulierte Mandanten Pilot zwingend mit On-Prem-Klausel
      - Reife für seltene Sprachen (Natural, Mantis) ungeprüft — kein Customer-Logo mit grosser Natural-Estate öffentlich
      - Keine ISO/SOC-Nachweise
      - Vendor jung, wenig öffentliche Praktiker-Evidenz
      - Reife der LLM-Outputs für seltene Sprachen (Natural, Mantis) nicht verifizierbar
      - Hosting-/Datenresidenz für DACH-Compliance unklar
    sources:
      - id: codeaura-ai
  - id: syntax-com-blog-genai-for-sap-transforming-custom-code-documentation-in-the-digital-age
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Architektonisch sauber für DACH-SAP-Mandanten: läuft im Kunden-BTP-Tenant via Generative AI Hub, keine Datenweitergabe an Dritte. SAP-zertifiziert. Aber stark service-getrieben — Bezugsmodell und DACH-Service-Präsenz zwingend im RFP klären."
    caveats:
      - Tool/Service-Grenze unscharf
      - DACH-Sales-/Senior-ABAP-Support muss verifiziert werden
      - Implizite Modellauswahl im AI-Hub (Azure OpenAI / Bedrock) — Datenflüsse prüfen
      - Tool-vs-Service-Grenze unscharf — Bezugsweg (Kauf/Subscription/Managed Service) muss früh geklärt werden
      - DACH-Sales-/Support-Präsenz nicht offensichtlich
      - Abhängigkeit vom Generative AI Hub bedeutet implizit Modellauswahl (Azure OpenAI, AWS Bedrock) — Datenflüsse genau prüfen
      - Nur SAP-Stack; kein COBOL/PL-I
      - Service-/Consulting-getrieben (Syntax als Managed-Service-Anbieter), kein klassisches Self-Service-Produkt
      - Wenig unabhängige Reviews; primär Vendor-Material verfügbar
    sources:
      - id: syntax-com-blog-genai-for-sap-transforming-custom-code-documentation-in-the-digital-age
  - id: cabs-microfocus-com-products-cobol-analyzer
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Klassisches On-Prem-Repository-Tool für Micro-Focus-COBOL-Bestände, in vielen DACH-Versicherern installierte Basis. Keine moderne GenAI-Doku, aber strukturierte Analyse, deterministische Reports und tiefe Visual-COBOL-Integration. Likely missed by market scan because OpenText/Micro Focus sich nicht als 'AI Tool' vermarktet — fällt aus jeder GenAI-Such-Heuristik heraus, ist aber faktisch in vielen Bestandshäusern bereits lizenziert.
    caveats:
      - Keine generative Narrative-Doku — eher strukturierte Code-Intelligence
      - AI-Schicht unterlegen, GenAI-Augmentation marginal
      - Lizenzmodell traditionell und schwergewichtig
      - Eher als bestehender Baustein zu kombinieren als neu zu kaufen
    sources:
      - id: cabs-microfocus-com-products-cobol-analyzer
  - id: sukamoai-com
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Verspricht Offline-Analyse mit lokaler GraphDB ('Code never leaves your infrastructure') — adressiert das DACH-Datenresidenz-Caveat direkt. AST-Parsing plus GraphRAG für strukturelle Korrektheit, Auto-Doku als expliziter Output. Likely missed by market scan because junger Vendor jenseits der typischen Listicle-Recherche, der primär als Modernization-Plattform vermarktet ist.
    caveats:
      - Sehr junges Unternehmen, kaum öffentliche Referenzen
      - Offline-Claim vertraglich verifizieren
      - Reife für DACH-Banking ungeprüft — strikt PoC
    sources:
      - id: sukamoai-com
  - id: phasechange-ai-products
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: "Symbolic-Graph-Reasoning plus LLM verspricht 'Zero-Hallucination' für COBOL-Doku — methodisch interessanter Ansatz, gestützt auf NSF-finanzierte Forschung und IEEE Distinguished Paper (ICSME 2021). Aber: 20 Jahre Marktpräsenz, $44M Finanzierung und kein einziger öffentlicher Enterprise-Kundenname oder unabhängiger Produktreview. Strikt PoC-Material bis externe Evidenz vorliegt."
    caveats:
      - Keine sichtbare EU-Entität, kein BSI-C5/ISO-27001-Nachweis öffentlich
      - "Vendor-Stabilität: Series-A-Stadium, Geschäftsmodell-Risiko bei 5-Jahres-Verträgen"
      - Nur COBOL — kein ABAP/PL-I-Support beworben
      - Vendor-Hosting-Modell unklar; für DACH-regulierte Mandanten ist Datenresidenz zu prüfen
      - Marktreife geringer als IBM/AWS, weniger Case-Studies öffentlich
      - Trotz 20 Jahren und $44M Finanzierung keine nachweisbaren Enterprise-Referenzen oder unabhängige Produktreviews — Produktreife für Enterprise-Einsatz unbelegt
    sources:
      - id: phasechange-ai-products
  - id: sysparency-com
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "DACH-Anker: Sitz Linz, Niederlassungen Berlin und Wien, deutschsprachiger Support, SAP Edge Technology Partner mit SAP-Store-Listing (unabhängig SAP-gated bestätigt). Cross-Stack ABAP+COBOL/PL/I, codeMINING-Engine erzeugt auditgerechte Wiki-Doku — adressiert die Briefing-DORA/BAIT-Anforderung direkt. Compliance-Marketing nennt SOX/GDPR/DORA, harte Zertifikate sollten im RFP nachgefordert werden."
    caveats:
      - Keine öffentlichen SOC2/ISO27001/BSI C5/TISAX-Attestate auf Website — muss im RFP eingefordert werden
      - Hosting-Modell (codeVAULT) unklar dokumentiert — On-Prem-Option für Banken zwingend zu klären
      - "Wiki-Format als Lock-in: Export-Pfad in offene Formate (Confluence/Markdown) prüfen"
      - Vendor klein — Eskalation/Service-Tiefe für Tier-1-Banken evaluieren
      - Closed-source, lock-in in Sysparency-Wiki-Format
      - Generative-AI-Komponente neuer als die analytische Engine — Reife-Variabilität
      - Keine öffentlichen Praktiker-Reviews; SAP-Store-Listing und Brutkasten-Artikel sind einzige unabhängige Signale
    sources:
      - id: sysparency-com-en-sysparency-solution
      - id: sysparency-com
      - id: sysparency-com-de-unternehmen-management-impressum
      - id: store-sap-com-dcp-en-product-display-2001015420-live-v1
      - id: brutkasten-com-artikel-sysparency-linzer-jku-spin-off-entwickelte-ki-basierten-sap-dolmetscher
  - id: cloudframe-com-atlas
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Atlas ist explizit als Doku-/Discovery-Layer für COBOL positioniert — Knowledge-Graph plus deterministische ML, BRD-Generierung, queryable Knowledge-Base als 'SME-Replacement'. Adressiert das Halluzinations-Caveat methodisch ähnlich wie Phase Change, aber mit unabhängiger Analyst-Coverage: Intellyx Brain Candy (Sept 2025, unbezahlt) und ISG Rising Star 2026 (named analyst quote). Likely missed by market scan because CloudFrame primär als COBOL-zu-Java-Konverter (CodeNavigator) bekannt ist — Atlas als Doku-only-Pfad ist die jüngere, separat lizenzierbare Komponente."
    caveats:
      - US-Vendor, kein sichtbarer DACH-Footprint
      - Hosting-Modell für regulierte Mandanten zu klären
      - Lizenzpreis nicht öffentlich
      - Vendor-Stabilität für 5-Jahres-Modernisierungsprojekte prüfen
      - Kein Practitioner-Community-Signal trotz Analyst-Coverage
    sources:
      - id: cloudframe-com-atlas
      - id: intellyx-com-2025-09-22-cloudframe-adding-deep-legacy-codebase-understanding-to-mainframe-code-modernization-offering
      - id: prnewswire-com-news-releases-cloudframe-named-rising-star-in-isgs-2026-mainframe-services-research-recognized-for-deterministic-transformation-at-enterprise-scale-302741802-html
  - id: pks-de-kompetenzen-software-analyse-explain
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Deutscher Anbieter (PKS, Ravensburg) mit On-Prem-Deployment, dezidiert revisionssicherer Doku für IBM Z und IBM i. Sprachen: COBOL, PL/I, Assembler, Natural, RPG, JCL, CL — deckt DACH-Banken-/Versicherer-Long-Tail. Helaba (Landesbank Hessen-Thüringen) als namentliche Banken-Referenz mit zitierbarem Statement zu Revisionsanforderungen. IBM PartnerPlus Directory bestätigt unabhängig IBM Z/Power i Fokus seit 1991. Likely missed by market scan because PKS sich nicht als 'AI Tool' positioniert, sondern als klassischer Code-Analyzer mit GenAI-Augmentation — fällt durch jedes 'AI Coding Tools 2026'-Listicle."
    caveats:
      - Klassisches Repository-Tool mit AI-Augmentation, keine pure-LLM-Architektur
      - Closed-source, deutsche Mittelstands-Vendor-Grösse
      - Konkrete Reife der GenAI-Schicht im Vergleich zu LLM-First-Anbietern offen
      - Kein SAP-ABAP-Support
      - Helaba-Referenz lebt ausschliesslich auf PKS-kontrollierter Infrastruktur — kein Drittpartei-Nachweis
    sources:
      - id: pks-de-referenzen-helaba-helaba
      - id: pks-de-kompetenzen-software-analyse-explain
      - id: ibm-com-partnerplus-directory-company-6417
  - id: aws-amazon-com-transform-mainframe
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Agentic-AI-Service speziell für z/OS-COBOL/JCL/PL-I: erzeugt technische Doku (Summary + Detailed Functional Specification als PDF/XML) und Business Rules Extraction (HTML/JSON) auf Application- oder File-Ebene. Output explizit als Brücke zwischen Tech- und Business-Stakeholdern positioniert. PL/I-Support seit 2025/2026 für Doku und BRE. NRI-Fallstudie belegt Reduktion der Legacy-Analyse von einem Monat auf eine Woche bei 100 % Validierungserfolg."
    caveats:
      - Output landet in S3 — Datenklassifikation für regulierte DACH-Mandanten kritisch
      - Doku derzeit nur für COBOL und JCL (PL/I in Erweiterung)
      - Setup-Aufwand hoch, gedacht im Migrationskontext, nicht als Stand-alone-Doku-Tool
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Reduces legacy documentation analysis from months to weeks per NRI case
        - Achieves 100% transformation success rate on validated mainframe workflows
        - Edge case handling 60% better than manual approaches, 19% runtime gains
        - Automates business logic extraction from COBOL/CICS/DB2/VSAM applications
        - Junior devs understand complex legacy systems without deep mainframe expertise
      complaints:
        - Struggles capturing hidden business logic in complex legacy applications
        - Code transformation can introduce unexpected breaking changes in validation
        - Requires experienced engineer review to verify transformation correctness
    sources:
      - id: docs-aws-amazon-com-transform-latest-userguide-transform-app-mainframe-html
      - id: repost-aws-articles-ariahcs4hur3gqbfkfbgd4fg-understanding-business-logic-outputs-from-aws-transform-for-mainframe
start_here: Für IBM-Mainframe-Bestände bieten PKS eXplain (On-Prem, kein Lizenz-Schock) oder IBM watsonx Code Assistant for Z den direktesten Einstieg; für SAP-ABAP-Stacks hat Sysparency den niedrigsten DACH-Onboarding-Aufwand. Den KI-generierten Output grundsätzlich durch einen Senior-Mainframer abnehmen lassen, bevor er ins Wiki überführt wird.
caveats: "KI-generierte Doku für domain-spezifische ABAP-/COBOL-Patterns ist fehleranfällig — der Use Case reduziert Erschließungsaufwand, ersetzt aber nicht die fachliche Kontrolle. Datenresidenz ist vor jedem Piloten zu klären: PII in COBOL-Copybooks muss klassifiziert sein, und Compliance-Attestate (SOC2, BSI C5) sind bei allen Anbietern aktiv im RFP einzufordern."
sources: []
---
