---
stage: product-discovery
order: 10
roles:
  - product-manager
title: AI-gestütztes Prototyping
goal_label: Aus einer Idee einen Click-Dummy oder UI-Prototypen erzeugen
suitability: conditional
rationale: Claude Artifacts und Lovable ermöglichen PMs heute, klickbare Discovery-Demos ohne Designer oder Developer-Beteiligung zu erzeugen. Für DACH-Unternehmen lässt sich das mit vorhandenen Compliance-Freigaben starten, ohne neue Plattformen beschaffen zu müssen.
tools:
  - id: claude-com-resources-tutorials-use-artifacts-to-visualize-and-create-ai-apps-without-ever-writing-a-line-of-code
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Claude Team/Enterprise ist in DACH-Konzernen oft schon compliance-geprüft (Zero-Retention, kein Training auf Inputs, EU-Routing über AWS Bedrock/GCP Vertex möglich). Artifacts erlaubt PMs leichte Click-Dummies ohne separate Plattform-Beschaffung. Kein Multi-User-Workspace, kein Deploy-Pfad – aber genau das senkt den Druck, dass Stakeholder es als Produktionscode missverstehen.
    caveats:
      - Pro-Konten der PMs reichen nicht – Team/Enterprise-Plan nötig
      - "Sandbox: keine externen API-Calls, keine Persistenz über Conversation hinaus"
      - Multi-User-Collaboration nicht vorhanden
      - Artefakt bleibt in Anthropic-Cloud, kein Workspace-Export
      - Pro-Tier reicht nicht für Enterprise-Compliance – Team/Enterprise-Plan nötig
      - Output-Persistenz an Anthropic-Cloud gebunden; kein Export in eigene Workspaces
      - Sandboxed – kein externer Datenzugriff, keine echte Persistenz
      - Output bleibt in der Conversation; kein Multi-User-Workspace, kein Deploy-Pfad
      - Nur React/HTML/SVG/Mermaid – kein Multi-File-Projekt
    practitioner_signal:
      volume: medium
      tenor: positive
      praise:
        - Schnellster Render-Loop aller Chat-Tools
        - Mehrere Artefakte parallel für Variantenvergleich
      complaints:
        - Kein externer Datenzugriff (Sandbox)
        - Persistiert nicht über die Conversation hinaus
    sources:
      - id: claude-com-resources-tutorials-use-artifacts-to-visualize-and-create-ai-apps-without-ever-writing-a-line-of-code
      - id: aitoolbriefing-com-blog-claude-artifacts-guide-2026
      - id: reddit-com-r-agile-comments-1rca834-any-product-managers-using-tools-like-lovable
  - id: lovable-dev
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Einziger der populären Vibe-Coder mit explizitem DACH-tauglichem Compliance-Profil: SOC 2 Type II, ISO 27001, SAML/SCIM, DPA, EU-Region-Hosting wählbar. Full-Stack-Output (UI + Auth + DB) erlaubt PMs echte klickbare Discovery-Demos. Risiko: AI-Gateway leitet Prompts an US-LLM-Provider, EU-Region muss aktiv gewählt werden, generierter Code hat dokumentierte Sicherheitslücken (RLS, Webhooks)."
    caveats:
      - EU-Region nicht Default – muss pro Workspace explizit gewählt werden
      - Subprocessor-Kette (Supabase, OpenAI, Gemini, OpenRouter) muss im AVV freigezeichnet werden
      - Generierter Code ist nicht produktionsreif – Sicherheitsaudit Pflicht, bevor Engineering übernimmt
      - Credit-Kosten skalieren bei iterativem Prompting unvorhersehbar
      - EU-Region muss bei Workspace-Anlage explizit gewählt werden – Default ist nicht EU-only
      - Subprocessor-Liste (Supabase, OpenAI, Google Gemini, OpenRouter) muss vom Datenschutz freigezeichnet werden
      - AI-Gateway leitet Prompts an US-LLM-Provider weiter, auch bei EU-Hosting der Workspace-Daten
      - Supabase ist Pflicht – kein Wechsel auf andere Datenbanken
      - Generierter Code zeigt regelmäßig RLS-/Webhook-/Auth-Lücken; nicht produktionsreif ohne Audit
      - Kostendrift bei iterativem Prompting; Vendor-Lock-in trotz GitHub-Sync
    practitioner_signal:
      volume: high
      tenor: polarized
      praise:
        - Polierter UI-Output ohne Designer im Raum
        - Echtes Full-Stack-Ergebnis für Discovery-Demos
      complaints:
        - Custom-Logik bricht regelmäßig bei jedem Re-Prompt
        - Credit-Kosten eskalieren beim Iterieren
    sources:
      - id: enterprise-lovable-dev-data-processing-agreement
      - id: annaarteeva-medium-com-choosing-your-ai-prototyping-stack-lovable-v0-bolt-replit-cursor-magic-patterns-compared-9a5194f163e9
      - id: dev-to-systagproject-the-12-security-issues-i-keep-finding-in-vibe-coded-apps-lovable-bolt-v0-786
      - id: lovable-dev-security
      - id: lovable-dev-privacy
      - id: reddit-com-r-nocode-comments-1psty9l-anyone-here-move-off-lovable-bolt-why
      - id: indiehackers-com-post-are-lovable-bolt-good-enough-for-real-apps-or-just-prototypes-5f7b1ccc91
  - id: locofy-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: "Likely missed by market scan because Locofy ist primär als 'Figma-zu-Code'-Tool für Developer positioniert, weniger als PM-Prototyping-Tool – fällt in PM-Listicles raus. Compliance-Profil ist aber DACH-tauglich: ISO 27001 + SOC 2 zertifiziert, SAML SSO, kein Training auf Kundendaten. Für PMs, die existierende Figma-Frames hochfidel klickbar machen wollen, eine Enterprise-Alternative zu v0/Lovable."
    caveats:
      - Setzt voraus, dass es bereits eine Figma-Datei gibt – Pure-Prompt-Workflow nicht der Sweet Spot
      - Für reine Discovery-Speed-Use-Cases overkill
      - Hosting-Region nicht klar als EU dokumentiert
    sources:
      - id: locofy-ai-convert-figma-to-react
  - id: github-com-features-copilot
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Visual Copilot ist primär ein Developer-Accelerator für Figma-zu-Code-Workflows, kein PM-Self-Service-Tool. Stärke liegt in Design-System-Intelligence (indexiert echte Org-Komponenten) und CI/CD-Integration (GitHub Enterprise/GitLab/Azure DevOps). Nützlich für Prototyping-Workflows, in denen ein Dev die Builder.io-Umgebung vorbereitet und PMs dann innerhalb dieses Rahmens iterieren. SOC 2 Type II belegt, kein Training auf Enterprise-Daten.
    caveats:
      - "Kein PM-Self-Service ohne vorkonfiguriertes Dev-Setup – unabhängige Practitioner-Reviews bestätigen: ohne Dev-Expertise 'schlechte Websites'"
      - PM-Prototyping-Pitch kommt ausschließlich von Builder.io selbst – kein unabhängig validiertes PM-Use-Case-Signal
      - Volle Stärke (Design System Intelligence, Component Mapping) erst auf Enterprise-Plan und nach codebase-Indizierung
      - Kein dokumentiertes EU-Region-Hosting – DPF-Selbstzertifizierung als Grundlage; für DACH-Konzerne DPA-Klärung nötig
      - Pricing Enterprise-typisch undurchsichtig; HackerNews-Thread zeigt Support-Reaktionszeit-Risiken
      - Component Mapping trifft ~70% der Figma-Komponenten; Rest erfordert manuelle Nacharbeit
      - Setup-Aufwand ist 'kein Wochenendprojekt' – Engineering muss initial mitspielen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Sauber strukturierter Code-Output
        - 50-80% Zeitersparnis für Devs bei Figma-zu-Code-Übergaben realistisch
      complaints:
        - Ohne Developer-Expertise produziert das Tool schlechte Ergebnisse
        - Komplex im Setup; Enterprise-Pricing undurchsichtig
        - "HN-Thread: Support-Reaktionszeit mangelhaft bei Plattformproblemen"
    sources:
      - id: builder-io-meet-visual-copilot
      - id: site-builder-io-enterprise
      - id: codeclouds-com-blog-builder-io-visual-copilot
      - id: mobileappdaily-com-product-review-builder-io
      - id: blog-vibecoder-me-builder-io-visual-development-teams
start_here: "Wer Claude Team/Enterprise bereits im Einsatz hat, beginnt mit Claude Artifacts: eine einzelne User-Journey als Click-Dummy für ein Discovery-Interview, nicht als Designvorlage. Für Demos mit echtem Full-Stack-Gefühl bietet Lovable den nächsten Schritt – EU-Region bei Workspace-Anlage explizit setzen."
caveats: Prototypen wirken polierter als sie sind und wecken bei Stakeholdern Implementierungserwartungen – klare Rahmensetzung vor dem Nutzertesttermin ist nötig. Lovable-generierter Code ist nicht produktionsreif; Claude-Artifacts-Output persistiert nicht über die Conversation hinaus.
sources: []
---
