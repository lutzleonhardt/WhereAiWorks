---
stage: architecture-design
order: 5
roles:
  - software-architect
title: Architektur-Optionen explorieren
goal_label: Mehrere Architektur-Alternativen mit Trade-offs gegenüberstellen
suitability: good_fit
rationale: ChatGPT Enterprise und Azure OpenAI liefern strukturierte Trade-off-Tabellen für 3–5 Architektur-Alternativen und helfen, blinde Flecken wie Boring-Options oder Failure-Modes frühzeitig sichtbar zu machen. Der ROI hängt dabei stärker von Use-Case-Klarheit und Prompt-Governance ab als vom gewählten Tool.
tools:
  - id: aider-chat
    fit: conditional
    sources:
      - id: aider-chat-docs-usage-modes-html
    why_it_fits: "Architect-Mode trennt Plan-Modell von Edit-Modell - konzeptionell genau die Form, die strukturierte Optionen-Diskussion vor Implementierung erzwingt. Mit Backend-Wahl (Azure OpenAI EU, Bedrock) auch in regulierten Umgebungen einsetzbar. Likely missed by market scan-Tiefe wegen OSS-Tool ohne Vendor-Marketing. Einschränkung: CLI-only; hohe Einstiegshuerde fuer Architekt:innen ohne CLI-Affinitaet."
    enterprise_readiness: team_ready
  - id: aws-amazon-com-q-developer
    fit: conditional
    sources:
      - id: docs-aws-amazon-com-prescriptive-guidance-latest-best-practices-code-generation-developer-workflows-html
    why_it_fits: "Sinnvoll als zweiter Sparring-Partner fuer AWS-spezifische Trade-offs (Lambda vs ECS vs EKS, DynamoDB vs Aurora) mit kalibrierter Service-Limit-Kenntnis; Beschaffung ueber AWS-Enterprise-Vertraege in DACH unproblematisch. Nicht als Primaer-Tool fuer Architektur-Sparring im Allgemeinen. Einschränkung: AWS-Bias verzerrt Boring-Option-Diskussion."
    enterprise_readiness: enterprise_ready
  - id: continue-dev
    fit: conditional
    sources:
      - id: continue-dev
    why_it_fits: "OSS-Plugin als Frontend zu einem genehmigten Inferenz-Endpoint (Azure OpenAI EU, IONOS, on-prem vLLM); fuer regulierte DACH-Teams die einzig saubere Variante, Architektur-Sparring physisch im Perimeter zu halten. Custom Slash Commands erzwingen Output-Format. Einschränkung: Lokale 8-13B-Modelle reichen fuer ernsthaftes Sparring nicht; Frontier-Modelle ueber EU-Endpoint waehlen."
    enterprise_readiness: team_ready
  - id: github-com-features-copilot
    fit: conditional
    sources:
      - id: docs-github-com-en-copilot-github-copilot-chat-copilot-chat-in-ides-about-github-copilot-chat-in-your-ide
    why_it_fits: "Copilot Chat im Ask-Modus liefert mit Repo-Kontext brauchbare Modularisierungs-/Refactoring-Optionen, Workspace skizziert Plaene mit Trade-offs vor der Implementierung. Fuer Teams mit Copilot Business/Enterprise niedrigste Reibung und unproblematische DACH-Beschaffung. Einschränkung: Antworten ohne Repo-Kontext oft generisch."
    enterprise_readiness: enterprise_ready
  - id: jetbrains-com-ai
    fit: conditional
    sources:
      - id: jetbrains-com-help-idea-ai-assistant-html
    why_it_fits: "JetBrains-Sitz in Prag/EU, DPA und Modell-Routing-Konfiguration machen DACH-Procurement leicht; fuer Java/Kotlin/Python-Shops der nahegelegene Sparring-Pfad ohne IDE-Wechsel. Trade-off-Strukturierung schwaecher als bei dedizierten Chat-Frontends. Einschränkung: Backend-Modelle laufen weiterhin ueber OpenAI/Anthropic/Google; Routing-Whitelist setzen."
    enterprise_readiness: enterprise_ready
  - id: miro-com-ai
    fit: conditional
    sources:
      - id: miro-com-ai
    why_it_fits: "Workshop-Begleiter fuer kollaborative Optionen-Sessions: Cluster-Funktion, Sticky-Note-Synthese, Trade-off-Matrix-Skizzen. Enterprise-Tenant mit DPA in DACH gaengig. Trade-off-Argumentation muss vom Team kommen, Miro AI strukturiert nur. Einschränkung: Eher Workshop-Begleiter als tiefer Argumentations-Sparring-Partner."
    enterprise_readiness: enterprise_ready
  - id: perplexity-ai-enterprise
    fit: conditional
    sources:
      - id: perplexity-ai-enterprise
    why_it_fits: "Komplementaer fuer Faktenanker (Service-Limits, Benchmarks, Pattern-Praezedenzfaelle), die rein aus LLM-Wissen halluzinationsanfaellig waeren. SOC2/DPA verfuegbar; in DACH-Procurement aber noch wenig etabliert. Einschränkung: Kein Repo-/Domaenenkontext; reine Web-Recherche."
    enterprise_readiness: enterprise_ready
  - id: aleph-alpha-com-pharia-assistant
    fit: conditional
    sources:
      - id: aleph-alpha-com-pharia-assistant
    why_it_fits: "Deutscher Anbieter (Heidelberg) mit On-Prem-/Sovereign-Deployment, BSI-konformem Betrieb und expliziter DACH-Public-Sector-Story. Fuer Behoerden, KRITIS und Verteidigungs-naher Architektur-Diskussion einer der wenigen genehmigungsfaehigen Pfade. Likely missed by market scan because DACH-only Player ohne globale Markenpraesenz, der in capability-zentrierten Web-Suchen unter Frontier-LLMs untergeht. Einschränkung: Modell-Sparring-Tiefe konsistent unter Frontier-Modellen (Claude/GPT-4.x)."
    enterprise_readiness: enterprise_ready
  - id: claude-com-product-claude-code
    fit: good_fit
    sources:
      - id: aws-amazon-com-bedrock-claude
      - id: anthropic-com-news-projects
    why_it_fits: "Claude wird in Architektur-Communities haeufig als bevorzugter Sparring-Partner genannt (strukturierte Trade-off-Tabellen, Failure-Mode-Listen). Fuer DACH-Procurement laeuft der Pfad praktisch ueber Bedrock (Frankfurt/Ireland) oder Vertex (europe-west) mit dem jeweiligen Hyperscaler-DPA, nicht direkt ueber claude.ai. Likely missed by market scan because der Bedrock/Vertex-Bezugspfad als Enterprise-Default in DACH nicht explizit als eigene Zeile gefuehrt wurde. Einschränkung: claude.ai-Direkt-Tenant fuer DACH-Regulierte mit EU-Residenz oft nicht durchsetzbar; Bedrock/Vertex bevorzugen."
    enterprise_readiness: enterprise_ready
  - id: ionos-de-cloud-ai-model-hub
    fit: conditional
    sources:
      - id: cloud-ionos-de-managed-services-ai-model-hub
    why_it_fits: "Deutsche Cloud (RZ Karlsruhe/Berlin) mit OpenAI-/Llama-/Mistral-kompatiblen API-Endpunkten unter deutschem Datenschutz und C5-Testat; haeufig uebersehene Inferenz-Alternative fuer DACH-Mittelstand, der Azure-/AWS-Vertraege scheut. Continue.dev/Aider lassen sich gegen IONOS-Endpunkte fahren. Likely missed by market scan because positioniert als Cloud-Infrastruktur, nicht als 'AI-Tool', und verschwindet daher in capability-Scans. Einschränkung: Kein eigenstaendiges Frontend fuer Architekt:innen; braucht Continue.dev/Open-WebUI/eigene UI."
    enterprise_readiness: enterprise_ready
  - id: github-com-features-copilot
    fit: conditional
    sources:
      - id: learn-microsoft-com-en-us-copilot-microsoft-365-microsoft-365-copilot-overview
    why_it_fits: "M365 Copilot Chat mit kommerziellem Datenschutz und EU Data Boundary wird in vielen DACH-Konzernen als 'erlaubter ChatGPT-Ersatz' freigeschaltet, wenn ChatGPT Enterprise nicht beschafft wurde. Reicht fuer schnelle Trade-off-Skizzen aus, ohne separates Onboarding. Likely missed by market scan because positioniert als M365-Suite-Feature und wurde in capability-zentrierten Suchen nicht als eigenstaendiges Architektur-Sparring-Tool abgebildet. Einschränkung: Output-Tiefe schwaecher als ChatGPT Enterprise/Claude bei strategischen Trade-offs."
    enterprise_readiness: enterprise_ready
  - id: mistral-ai-news-le-chat-enterprise
    fit: conditional
    sources:
      - id: mistral-ai-products-le-chat
    why_it_fits: "Europaeischer Anbieter (Paris) mit Self-Hosting/VPC-Optionen und EU-Datenhaltung; AI-Act-/GDPR-Argument in DACH-Procurement leichter durchzusetzen als bei US-LLMs. Mistral Large/Codestral haben sich fuer Code- und Architektur-Reasoning soweit etabliert, dass sie als Sparring-Partner brauchbar sind. Likely missed by market scan because EU-Vendor wurde in capability-zentrierten Suchen unter US-Hyperscalern uebersehen. Einschränkung: Sparring-Tiefe knapp unter den US-Frontier-Modellen, je nach Modellversion variabel."
    enterprise_readiness: enterprise_ready
  - id: azure-microsoft-com-en-us-products-ai-services-openai-service
    fit: good_fit
    sources:
      - id: learn-microsoft-com-en-us-azure-ai-services-openai-overview
      - id: amitkoth-com-azure-openai-vs-openai
      - id: pratikpathak-com-why-enterprises-are-ditching-native-openai-for-azure-its-not-just-about-privacy
    why_it_fits: "Fuer DACH-regulierte Branchen (Banken, Versicherer, KRITIS) oft die einzig genehmigungsfaehige Variante: GPT-4.x/5-Klasse in Sweden Central/West Europe/Germany West Central, Azure-DPA, Private Endpoints (VNet/Private Link) und Abuse-Monitoring-Opt-out. Architekt:innen nutzen Foundry-Playground oder ein internes Chat-UI fuer Optionen-Generierung ohne Datenfluss zu OpenAI. Praktiker bestaetigen, dass Migrationen von Direct-OpenAI auf Azure OpenAI primaer durch Compliance-, PTU- und Entra-ID-Anforderungen getrieben werden. Einschränkung: Modellverfuegbarkeit pro Region asymmetrisch; neueste Modelle in Germany West Central oft verzoegert."
    enterprise_readiness: enterprise_ready
  - id: openai-com-chatgpt-enterprise
    fit: good_fit
    sources:
      - id: openai-com-chatgpt-enterprise
      - id: help-openai-com-en-articles-8554407-gpts-faq
      - id: aiadvisorypractice-com-blog-chatgpt-enterprise-what-works-production
      - id: blog-itsdavidg-co-posts-chatgpt-enterprise
    why_it_fits: "Pragmatischer Sparring-Partner fuer 3-5 Architektur-Alternativen mit Trade-off-Tabellen; Enterprise-Tenant mit DPA, kein Training auf Geschaeftsdaten und EU-Data-Residency-Option machen die Nutzung in DACH-Procurement durchsetzbar. Custom GPTs/Projects pinnen Prompt + Domaenenglossar fuer wiederholbare Sessions. Praktiker-Beobachtungen aus 200+ Deployments betonen, dass der ROI staerker von Use-Case-Klarheit und Prompt-Governance abhaengt als vom Tool selbst. Einschränkung: EU Data Residency ist Add-on; Procurement-Nachweis explizit anfordern."
    enterprise_readiness: enterprise_ready
  - id: sourcegraph-com-cody
    fit: good_fit
    sources:
      - id: sourcegraph-com-docs-cody-capabilities
      - id: aipedia-wiki-tools-cody
      - id: mgx-dev-insights-sourcegraph-cody-an-in-depth-analysis-of-its-functionality-architecture-use-cases-and-competitive-landscape-a1c220a9fb544c84bc6a6c531e8cf8cd
    why_it_fits: "Self-hosted/Enterprise-Cody mit org-weitem Codegraph beantwortet Multi-Repo-Architekturfragen ('wie haengen Service A und B zusammen, drei Optionen zur Entkopplung'), ohne dass Code den Perimeter verlaesst. Backend-Modell waehlbar (Modell-Whitelisting, SSO, SCIM, Audit Logs). Unabhaengige Reviews betonen den Code-Graph als Alleinstellungsmerkmal gegenueber Copilot/Cursor; Praxisreferenzen wie CERN (15 Mio. LOC) und F5 (350+ Repos). Einschränkung: Self-Hosting verschiebt Compliance-Verantwortung zum Kunden; Mehrwert nur ab ~50+ Repos und ausgepraegter interner API-Surface."
    enterprise_readiness: enterprise_ready
  - id: workspace-google-com-solutions-ai
    fit: good_fit
    sources:
      - id: workspace-google-com-solutions-ai
      - id: dj420-gif-github-io-promptpulse-aitools-gemini-gemini-review-html
      - id: arsturn-com-blog-gemini-1-5-pro-long-context-capabilities-and-limits
    why_it_fits: "Workspace-Tenant mit DPA und EU-Region ist DACH-fest; 1M+-Token-Kontext erlaubt das Reinkippen kompletter RFCs/Specs/Codebasen als Grundlage fuer Optionen-Generierung - unabhaengige Praxis-Reviews bestaetigen >99% Recall im Needle-in-Haystack-Test und benennen Long-Context-Analyse als die Domaene, in der Gemini fuehrt. Fuer GCP-Kunden ist Vertex AI der direkte Inferenz-Pfad mit CMEK und Private Service Connect. Einschränkung: Reine Architektur-Reasoning-Tiefe leicht unter Claude bei komplexen TypeScript-/Refactoring-Aufgaben; AI Studio (free) ist KEIN Enterprise-Pfad - Verwechslung im Team verhindern."
    enterprise_readiness: enterprise_ready
start_here: "Pilot mit ChatGPT Enterprise oder Azure OpenAI an einem konkreten anstehenden Entscheid starten: Context-Pack ohne Kundendaten liefern und explizit 3 Optionen plus eine Boring-Option anfordern. Die Trade-off-Matrix anschließend manuell gewichten — der Entscheid bleibt beim Architekten."
caveats: Interne Domänennamen, Architektur-Constraints und Stakeholder-Hinweise fließen über Cloud-LLMs ab — Enterprise-Tenant mit DPA (Azure OpenAI EU, ChatGPT Enterprise EU-Region) ist für regulierte DACH-Branchen nicht verhandelbar. Bei ChatGPT Enterprise ist EU Data Residency ein separates Add-on; Procurement-Nachweis explizit anfordern.
sources: []
---
