---
stage: architecture-design
order: 11
roles:
  - software-architect
  - platform-devops-engineer
title: Datenresidenz-/Souveränitäts-Architektur entwerfen
goal_label: EU-/On-Prem-Topologie für KI-Workloads skizzieren
suitability: good_fit
rationale: Für KI-Workloads ohne CLOUD-Act-Exposition stehen mit Mistral La Plateforme und Aleph Alpha Pharia AI erstmals EU-native Modelle mit enterprise-tauglichem VPC- und On-Prem-Deployment bereit. Open Telekom Cloud ergänzt als BSI-C5-zertifizierter Sovereign-Hyperscaler für Public Sector und regulierte DACH-Branchen, die keinen US-Hyperscaler einsetzen können.
tools:
  - id: aws-bedrock-eu-regions-nitro-enclaves
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: AWS Bedrock in eu-central-1/eu-west-* mit Nitro Enclaves und PrivateLink ist Standardbaustein in DACH-Architekturen, insbesondere wenn AWS European Sovereign Cloud (Brandenburg) als Zieltopologie referenziert wird. Architekt:innen skizzieren Trade-offs gegen STACKIT/IONOS und Migrationspfad zur Sovereign Region.
    caveats:
      - European Sovereign Cloud (DE) Anfang 2026 noch nicht voll produktiv — Migrationspfad einplanen
      - Anthropic-Modelle in eu-central-1 nicht durchgaengig verfuegbar
      - Nitro Enclaves != GPU-Confidential-Computing; LLM-Inferenz im TEE limitiert
      - European Sovereign Cloud (Brandenburg) hat eigene Service-Tiers — nicht 1:1 mit Standard-Bedrock
      - Modell-Verfuegbarkeit pro EU-Region uneinheitlich
      - CLOUD-Act-Restrisiko trotz EU-Region; juristische Bewertung erforderlich
    sources:
      - id: aws-bedrock-eu-regions-nitro-enclaves-amazon
  - id: delos-cloud-microsoft-cloud-for-sovereignty-de
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: low
    why_it_fits: Delos Cloud baut auf Azure-Stack eine souveraene Cloud fuer den deutschen Public Sector. In Architektur-Skizzen relevant, wenn Azure-OpenAI-Funktionalitaet bei Behoerden gefordert ist, aber CLOUD-Act-/Schrems-II-Bedenken zwingen zum souveraenen Betrieb. Reife zum Stand 2026 als Optionspfad, nicht als Sofort-Baustein.
    caveats:
      - Go-Live-Stufen 2025–2026 — Reife und Service-Tiefe noch unvollstaendig
      - Souveraenitaets-Anspruch wird von Datenschutzaufsicht/CIO-Bund zunehmend kritisch hinterfragt
      - Kommerzielle Konditionen unklar — Architektur-TCO schwer kalkulierbar
      - Ausschliesslich Public-Sector-Use-Cases; private Wirtschaft praktisch nicht erreichbar
      - Azure-Abhaengigkeit politisch umstritten — echte Souveraenitaet juristisch zu pruefen
    sources:
      - id: delos-cloud-microsoft-cloud-for-sovereignty-de-delos-cloud
  - id: google-cloud-vertex-ai-eu-confidential-space-sovereign-controls
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Vertex AI mit Sovereign Controls (Assured Workloads), Confidential Space und T-Systems-Sovereign-Cloud-Partnerschaft 'Sovereign Cloud DE powered by Google' wird in DACH-Architekturen als Option diskutiert, wenn Gemini-Capability noetig ist. Trade-off-Diskussion gegen Hyperscaler-Wettbewerber Standard.
    caveats:
      - T-Systems-Google-Sovereign-Angebot operativ noch jung — Reife pruefen
      - Confidential Space mit GPU-TEE Anfang 2026 noch limitiert verfuegbar
      - Marktanteil in DACH-Banken/Versicherern niedrig — Skill-Gap einplanen
      - CLOUD-Act-Restrisiko trotz EU-Region
    sources:
      - id: google-cloud-vertex-ai-eu-confidential-space-sovereign-controls-google
  - id: microsoft-azure-openai-eu-data-boundary-confidential-vms
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: "Azure OpenAI mit EU Data Boundary und Confidential-VM-SKUs ist Default-Baustein in DACH-Architekturen, wenn Frontier-Modelle gebraucht werden und CLOUD-Act-Risiko juristisch abgedeckt ist. Typische Topologien: Private Endpoint, VNet-Isolation, Azure Key Vault Managed HSM. Conditional, weil Souveraenitaet immer juristisch interpretierbar bleibt."
    caveats:
      - CLOUD-Act-Restrisiko trotz EU-Region — explizite Drittparteien-Risikobewertung pflichtig
      - Confidential-VM-GPU-SKUs (NCC H100 v5) Anfang 2026 erst eingeschraenkt in EU-Regionen
      - EU Data Boundary deckt Inferenz, nicht alle Telemetrie-/Abuse-Monitoring-Pfade — juristische Pruefung essentiell
      - Microsoft 365 Copilot faellt NICHT unter dieselbe Boundary — Verwechslungsgefahr
      - BaFin-Orientierungshilfe verlangt Drittparteien-Risikobewertung
    sources:
      - id: microsoft-azure-openai-eu-data-boundary-confidential-vms-microsoft
  - id: nvidia-nim-nvidia-inference-microservices
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: NVIDIA NIM containerisiert LLM-Inferenz mit TensorRT-LLM und ist als Baustein in souveraenen On-Prem-/Sovereign-Cloud-Topologien attraktiv. DACH-Beratungen referenzieren NIM mit STACKIT/IONOS/OTC-GPU-Instanzen oder OpenShift AI. Conditional wegen Hardware-Vendor-Lock-in als eigenem Souveraenitaets-Risikovektor.
    caveats:
      - AI-Enterprise-Lizenz an NVIDIA-GPUs gebunden — Vendor-Lock-in auf Hardware-Ebene
      - NVIDIA AI Enterprise ist US-Lizenz-Konstrukt — bei Export-Control-Verschaerfungen Architektur-Risiko
      - NIM-Modellkatalog enthaelt Aleph-Alpha-/Mistral-Modelle nur teils — Architektur muss Hybrid-Pfad einplanen
      - Confidential Computing nur auf neueren GPU-Generationen (Hopper/Blackwell)
    sources:
      - id: nvidia-nim-nvidia-inference-microservices-nvidia
  - id: plusserver-pluscloud-open-sovereign-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: low
    why_it_fits: PlusServer pluscloud open (OpenStack, SCS-konform, deutsche RZ) ist kleinerer Sovereign-Cloud-Anbieter neben STACKIT/IONOS/OTC — speziell fuer Mittelstand-Banken/Versicherer und SCS-orientierte Public-Sector-Projekte.
    caveats:
      - AI-Service-Reife geringer als bei groesseren Sovereign-Cloud-Anbietern
      - GPU-Kapazitaet limitiert; eigenes Modell-Hosting via vLLM/NIM noetig
      - Eigentuemerstruktur (Private Equity) hat sich mehrfach geaendert — Risk-Audit pruefen
      - Markenbekanntheit in Vergaben geringer als STACKIT/IONOS
    sources:
      - id: plusserver-pluscloud-open-sovereign-ai-plusserver
  - id: sap-ai-core-joule-eu-region
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: SAP AI Core (BTP) bietet LLM-Inferenz und Generative AI Hub mit EU-Datenresidenz und AVV — in SAP-zentrischen DACH-Konzernen Standardbaustein, der nicht via SAP-Linse betrachtet werden muss, um in Architektur-Skizzen zu landen.
    caveats:
      - Generative AI Hub aggregiert teils US-Frontier-Modelle (OpenAI/Anthropic) — CLOUD-Act-Restrisiko gilt fuer diese Routen
      - Joule-Roadmap und Modell-Routing-Defaults aendern sich oft — Architektur-Annahmen versionieren
      - BTP-Lizenz-/Subscription-Komplexitaet hoch; TCO-Vergleich gegen Standalone-Sovereign-Cloud erforderlich
    sources:
      - id: sap-ai-core-joule-eu-region-sap
  - id: aleph-alpha-pharia-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Pharia-Stack ist explizit fuer souveraene On-Prem-/Private-Cloud-Deployments in DACH-Banken/Versicherern/Public Sector positioniert. Doppelrolle in diesem Use Case: PhariaAI ist (a) selbst souveraen deploybar (auch via STACKIT-as-a-Service seit 2025) und (b) Standard-Inhalt der Architektur-Skizze als 'EU-LLM ohne CLOUD-Act-Exposition'. Schwarz-Gruppe-Konsolidierung 2026 staerkt Marktposition."
    caveats:
      - Modell-Capability hinter US-Frontier-Modellen — Trade-off Souveraenitaet vs. Qualitaet explizit machen
      - Strategiewechsel 2024 zu 'AI Operating System' — Roadmap und Foundation-Model-Investment unsicher
      - Self-Hosted-GPU-TCO oft Show-Stopper im Pricing-Vergleich gegen Hyperscaler
      - PhariaCatch / PhariaAssistant noch jung; produktive DACH-Bank-Referenzen rar
      - Schwarz-Gruppe-Eigentuemerschaft kann Wettbewerber-Bedenken im Handels-/Konsumsektor ausloesen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Souveraenitaets-Story stark in DACH
        - On-Prem-Deployment moeglich
        - STACKIT-as-a-Service senkt Adoptions-Barriere
      complaints:
        - Modell-Capability hinter GPT-4/Claude
        - Roadmap-Unsicherheit nach Strategiewechsel
    sources:
      - id: aleph-alpha-pharia-ai-aleph-alpha
      - id: aleph-alpha-pharia-ai-heise
      - id: aleph-alpha-pharia-ai-european-cloud
  - id: claude-code
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Claude Code mit Cloud-Architect-Subagents und MCP-Servern fuer Sovereign-Cloud-Doku eignet sich fuer Trade-off-Diskussionen, IaC-Skelette (Terraform/Bicep) fuer Confidential VMs, VNet-Isolation und Topologie-Skizzen. Claude Code CLI unterstuetzt EU-Residency via CLAUDE_CODE_USE_BEDROCK/VERTEX/FOUNDRY (eu-central-1 / europe-west1) — direkter API-Pfad bleibt US-Default. Fuer reine Architektur-Prosa ohne Kundendaten meist akzeptabel, BaFin-Drittparteien-Bewertung erforderlich. Downgrade auf conditional, weil EU-Pfad nur ueber Hyperscaler-Backends sauber ist und Cowork/claude.ai Anfang 2026 keine EU-Residency bieten.
    caveats:
      - EU-Residency nur ueber Bedrock/Vertex/Foundry-Backends — direkte API/claude.ai standardmaessig US
      - Anthropic ist US-Vendor — CLOUD-Act-Restrisiko trotz EU-Inferenz via Hyperscaler
      - Wissen ueber DACH-Sovereign-Cloud-APIs (STACKIT, IONOS, OTC) ist lueckenhaft — IaC-Outputs streng review-pflichtig
      - Subagent-Konfigurationen nicht standardisiert; Reproduzierbarkeit gering
      - Cowork/claude.ai Enterprise haben Anfang 2026 noch keine EU-Residency — separate Architektur-Entscheidung
      - Empfehlungen basieren auf Trainingsdaten — Confidential-Computing-Verfuegbarkeit pro Region nicht live geprueft
    sources:
      - id: claude-code-mit-cloud-architect-subagents-anthropic
      - id: claude-code-compound-law-eu-hosting
      - id: claude-code-github-eu-residency-issue
  - id: ionos-ai-model-hub
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: IONOS AI Model Hub stellt Open-Source-LLMs (Llama, Mistral) als Inferenz-Endpoint in deutschen Rechenzentren mit DSGVO-Zusicherung und OpenAI-kompatibler API bereit. Relevant als Sovereign-Cloud-Baustein, wo Hyperscaler-EU-Region wegen CLOUD-Act-Restrisiko ausscheidet. Praktiker-Vergleiche positionieren IONOS gegen STACKIT als zwei deutsche Default-Optionen.
    caveats:
      - Beta-/Preview-Charakter Anfang 2026 — Enterprise-SLAs explizit pruefen
      - Modell-Auswahl deutlich schmaler als bei Hyperscalern (Open-Source-only)
      - Confidential Computing fehlt — nur regionale Datenresidenz, kein TEE-Schutz fuer GPU-Inferenz
      - "United-Internet-Konzern: Hosting-Track-Record gut, aber AI-Roadmap juenger als bei STACKIT/Aleph Alpha"
      - Token-Preise nicht oeffentlich — nur nach Registrierung sichtbar
    sources:
      - id: ionos-ai-model-hub-ionos-de-cloud-ionos-de-managed-services-ai-model-hub
      - id: ionos-ai-model-hub-puhlmann-vergleich
      - id: ionos-ai-model-hub-european-cloud-benchmark
  - id: mistral-le-chat-enterprise-la-plateforme
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Mistral AI (FR) bietet Frontier-Class-LLMs mit europaeischem Vendor-Sitz, EU-Datenresidenz (Paris-Region), SOC 2 Type II und VPC-/On-Prem-Deployment. Wichtigster europaeischer Anbieter mit Wettbewerbs-Modellqualitaet — Standardbaustein in EU-Souveraenitaets-Topologien neben Aleph Alpha. Compliance-Analysten bezeichnen Mistral als Default-Wahl bei harten EU-Residency-Anforderungen.
    caveats:
      - EU-Vendor, aber Le-Chat-Hosting laeuft typisch auf Azure/Bedrock — Souveraenitaets-Pfad nur via direkter La-Plateforme oder On-Prem/VPC
      - Microsoft-Investment 2024 hat Souveraenitaets-Story diluiert — politische Erwartung kalibrieren
      - Modell-Lizenzen heterogen (Open-Weights vs. proprietaer) — pro Modell pruefen
      - Le Chat Enterprise in DACH-Banken oft Pilot, nicht Produktion
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - EU-Vendor mit Frontier-Qualitaet
        - On-Prem-/VPC-Deployment moeglich
        - Default-Wahl bei harten GDPR-Residency-Anforderungen
      complaints:
        - Modell-Hosting bei Bedrock weiterhin US-Hyperscaler
        - Plugin-/Ecosystem-Reife geringer als OpenAI
    sources:
      - id: mistral-le-chat-enterprise-mistral
      - id: mistral-europeanstack-review
      - id: mistral-hyperion-enterprise-guide
  - id: open-telekom-cloud-sovereign-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Open Telekom Cloud bietet IaaS/PaaS mit BSI C5 Type 2, ISO 27001/27018/27701, TISAX, SOC 1/2/3 in deutschen/niederlaendischen RZ und positioniert sich als souveraener Hyperscaler fuer Public Sector und regulierte Branchen. AI-Services und LLM-Hosting (NVIDIA-Partnerschaft) als Sovereign-AI-Baustein fuer DACH-Architekturen mit DORA-/BaFin-/NIS2-Anforderungen. Externer Review nennt OTC fuer regulierte DACH-Industrien oft 'die einzige tragfaehige Option'.
    caveats:
      - Historische Huawei-Komponenten politisch sensibel — Souveraenitaets-Story regelmaessig aktualisieren
      - OpenStack-Basis erhoeht Architektur-Aufwand vs. Managed-AI-Komfort
      - AI-Service-Velocity hinter Hyperscalern — Capability-Lag einplanen
      - Eigene Modell-Hosting-Topologie (vLLM/NIM) oft notwendig
      - BSI-IT-Grundschutz-Zertifizierung erst Q2/2026 erwartet
    sources:
      - id: open-telekom-cloud-sovereign-ai-open-telekom-cloud
      - id: open-telekom-cloud-europeanstack-review
      - id: open-telekom-cloud-bsi-souveraenitaet-heise
  - id: ovhcloud-ai-endpoints-ai-deploy
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: OVHcloud (FR) bietet AI Endpoints (GA seit Mai 2025, 40+ Modelle) und AI Deploy mit europaeischer Datenhaltung. Standard-EU-Sovereign-Alternative zu US-Hyperscalern in DACH-Architekturen — in Vergaben oft hinter STACKIT/IONOS, aber im IaaS-Layer reifer. EU-Kommission hat OVHcloud (mit DEEP/Clever Cloud) fuer Sovereign-Cloud-Rahmenvertrag bis 180 Mio. EUR ausgewaehlt — institutionelles Glaubwuerdigkeits-Signal.
    caveats:
      - "Frankreich-Sitz: in DACH-Vergaben oft Praeferenz fuer DE-Anbieter"
      - Strasbourg-Brand 2021 weiterhin im Risk-Audit — RZ-Resilienz aktuell pruefen
      - Modell-Katalog Open-Source-only; Frontier-Capability fehlt
      - BSI-C5 nicht durchgaengig — DACH-Vergaben praeferieren oft DE-Anbieter
      - Kein vollwertiger Confidential-Computing-Stack auf allen Tiers
    sources:
      - id: ovhcloud-ai-endpoints-ai-deploy-ovhcloud
      - id: ovhcloud-eu-commission-selection
      - id: ionos-ai-model-hub-european-cloud-benchmark
  - id: red-hat-openshift-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: OpenShift AI ist gaengiger On-Prem-/Hybrid-Stack fuer LLM-Workloads in DACH-Banken/Versicherern mit OpenShift-Footprint. Inkludiert vLLM-Integration, Model Registry, KServe, llm-d / Models-as-a-Service — kommerziell gestuetzter Souveraenitaets-Baustein mit Enterprise-Support. Architektur-Analysen heben Hybrid-Cloud-Konsistenz (AWS/Azure/IBM/GCP/On-Prem/Edge) als Souveraenitaets-Vorteil hervor.
    caveats:
      - Red Hat ist IBM-Tochter (US) — fuer reine Souveraenitaets-Reinheit ein Pferdefuss; haeufig akzeptiert wegen Open-Source-Substitutbarkeit
      - Lizenz-TCO erheblich; Architektur muss Break-Even gegen STACKIT-Managed/Sovereign-Cloud-Dienste rechnen
      - GPU-Operator-Konfiguration und Air-Gapped/Disconnected-Operator-Pflege operativ aufwendig
      - Modell-Hosting weiterhin in eigener Infrastruktur — Kapazitaetsplanung kritisch
    sources:
      - id: red-hat-openshift-ai-redhat
      - id: red-hat-openshift-ai-architecture-medium
  - id: stackit-ai-model-serving
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: STACKIT (Schwarz-Gruppe) betreibt vier RZ in DE/AT (fuenftes in Luebbenau) mit BSI-C5/ISO-27001-Testaten, ist DORA-konformer IKT-Dienstleister und bietet Managed-LLM-/Model-Serving fuer DACH-Kunden, die CLOUD-Act-Exposition vermeiden muessen. Standard-Sovereign-Cloud-Baustein in EU-Souveraenitaets-Topologien. Akkodis-Partnerschaft 04/2026 und PhariaAI-as-a-Service untermauern Marktreife.
    caveats:
      - Modell-Katalog Open-Source-getrieben; Frontier-Capability via Mistral/Aleph-Alpha-Routing oder Hyperscaler-Hybrid
      - GPU-/Confidential-Computing-Kapazitaet limitiert; Architektur-Kapazitaetsplanung kritisch
      - Eigentuemer Schwarz-Gruppe ist Wettbewerber zu Handels-/Konsum-Kunden — pruefen
      - Tooling-Oekosystem (LangChain-Integrationen, Observability) noch im Aufbau
    sources:
      - id: stackit-ai-model-serving-stackit-de
      - id: stackit-akkodis-partnership-news
      - id: ionos-ai-model-hub-puhlmann-vergleich
  - id: vllm
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: vLLM ist De-facto-Standard fuer hochperformantes On-Prem-/Private-Cloud-LLM-Serving (PagedAttention, Continuous Batching). Dominanter Production-Inference-Stack bei Meta/Mistral/Cohere/IBM (Introl), 2-24x Throughput vs. Standard-Frameworks. In souveraenen Topologien auf eigener GPU-Infrastruktur oder Sovereign-Cloud-GPUs (STACKIT, IONOS, OVH, OTC) Default-Inferenz-Layer.
    caveats:
      - Operativer Aufwand erheblich; fuer Enterprise via Red Hat OpenShift AI / NVIDIA AI Enterprise wrappen
      - Keine kommerzielle Support-SLA out of the box
      - Multi-Node-Setup und Disaggregated Serving zum Stand 2026 noch im Fluss
      - Sicherheits-Patches Community-getrieben — fuer BSI-IT-Grundschutz-Compliance Aufwand quantifizieren
      - Modell-Lizenzen (Llama, Mistral) gesondert pruefen
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Beste Open-Source-Inferenz-Performance
        - PagedAttention senkt Memory-Waste auf <5%
        - OpenAI-kompatible API
        - Aktive Community
      complaints:
        - Hoher Betriebsaufwand
        - Multi-Node-Setup nicht trivial
    sources:
      - id: vllm-vllm
      - id: vllm-introl-production-deployment
      - id: vllm-youngju-benchmark
start_here: Pilot mit Mistral La Plateforme (direkt, EU-Datenresidenz, kein US-Hyperscaler-Routing) für eine interne RAG-Workload — dort lassen sich die drei Topologie-Optionen (Managed EU, VPC, On-Prem mit vLLM) ohne Produktionsdaten evaluieren. Pharia AI ist die zweite Option, wenn Vergabe oder Compliance einen deutschen Modell-Vendor vorschreiben oder On-Prem-Deployment auf eigener Infrastruktur erforderlich ist.
caveats: EU-Residency-Zusicherungen aller Anbieter basieren auf Selbstauskunft — CLOUD-Act-Restrisiko und tatsächliche Souveränität müssen juristisch geprüft werden, bevor Architekturen finalisiert werden. Confidential-Computing-GPU-SKUs sind in EU-Regionen noch lückenhaft, und EU-native Modelle liegen capability-seitig unter US-Frontier-Modellen — dieser Trade-off muss in der Architektur explizit dokumentiert werden.
sources: []
---
