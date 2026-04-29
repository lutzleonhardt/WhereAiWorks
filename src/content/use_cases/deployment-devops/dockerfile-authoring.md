---
stage: deployment-devops
order: 14
roles:
  - software-engineer
  - platform-devops-engineer
title: Dockerfile-Authoring
goal_label: Multi-Stage-Dockerfiles und .dockerignore generieren und optimieren
suitability: good_fit
rationale: GitHub Copilot mit der offiziellen @docker-Extension generiert Multi-Stage-Dockerfiles, docker-compose.yml und .dockerignore mit Docker-Scout-Hinweisen auf bestehender Lizenz — ohne Zusatzbeschaffung. Teams mit striktem No-Cloud-LLM-Mandat können auf Sourcegraph Cody self-hosted ausweichen und damit konzernweite Dockerfile-Migrationen ohne Cloud-Egress anstoßen.
tools:
  - id: claude-com-product-claude-code
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: Claude Code generiert mit CLAUDE.md-Regeln reproduzierbar produktionsreife Multi-Stage-Dockerfiles inkl. Non-Root, HEALTHCHECK und Layer-Caching. Bank-Policies (UBI-Allowlist, kein latest-Tag, kein Alpine) sind als CLAUDE.md-Regeln direkt einspielbar. Für DACH-Banken nur via AWS Bedrock (eu-central-1) oder Vertex AI EU sauber abbildbar.
    caveats:
      - Direkter Anthropic-API-Zugang oft politisch kritisch — Bedrock-EU-Pfad einplanen
      - Token-Verbrauch in großen Repos relevant für TCO
      - Kein org-weites Policy-Enforcement für CLAUDE.md — Disziplin liegt beim Team
      - Für DACH-Banken nur via AWS Bedrock (eu-central-1) oder Vertex AI EU sauber abbildbar — direkter Anthropic-API-Zugang bleibt politisch fragil
      - Erfordert disziplinierte CLAUDE.md-Pflege
      - Token-Verbrauch in größeren Repos
      - Egress an Anthropic-API muss freigeschaltet sein
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - CLAUDE.md macht Output reproduzierbar
        - Reduziert Image-Größe deutlich
      complaints:
        - Token-Kosten bei großem Kontext
    sources:
      - id: dev-to-myougatheaxo-docker-multi-stage-builds-with-claude-code-security-caching-and-minimal-images-36i
      - id: developertoolkit-ai-en-claude-code-lessons-ci-cd
      - id: reddit-com-r-claudecode-comments-1r5dj84-in-response-to-the-recent-security-warnings
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: team_ready
    confidence: high
    why_it_fits: "Offizielle Docker-Extension auf der bestehenden GitHub-Copilot-Lizenz: generiert Dockerfile, docker-compose.yml und .dockerignore und kann per PR ins Repo schreiben, mit Docker-Scout-Vulnerability-Hinweisen. Niedrige Einführungshürde im DACH-Enterprise, weil Copilot-Lizenzen häufig vorhanden sind. Suite-Capability — Capability-only-Suchen würden sie übersehen, deshalb ergänzt."
    caveats:
      - Early-Access-Status, Roadmap kann sich verschieben
      - Repo wird in In-Memory-Storage geklont — Datenklassifikation für Bankcode prüfen
      - Default-Sprachscope Node/Python/Java; kein Hook für interne Base-Image-Allowlist
      - Keine explizite EU-Region/DPA-Aussage spezifisch für die Extension
      - Repository wird beim Scan in In-Memory-Storage geklont — DACH-Datenklassifizierung muss klären, ob Bank-Code an Docker-Backend gehen darf
      - Keine Aussage zu EU-Region oder Auftragsverarbeitungsvertrag (AVV/DPA) für die @docker-Extension explizit
      - Default-Stack noch auf Node/Python/Java fokussiert
      - Kein expliziter Hook für interne Base-Image-Allowlists (UBI/Distroless)
      - Early Access — Roadmap kann sich verschieben
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Schneller Einstieg in Containerisierung
        - Bereits ~10.000 Installationen laut Visual Studio Magazine — meistgenutzte Copilot-Extension
      complaints:
        - Default-Bases nicht enterprise-konform
    sources:
      - id: docs-docker-com-copilot
      - id: docker-com-blog-preview-docker-extension-for-github-copilot
      - id: github-com-docker-copilot-issues
      - id: visualstudiomagazine-com-articles-2025-01-08-top-10-github-copilot-extensions-led-by-docker-and-perplexityai-aspx
  - id: github-com-features-copilot
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Copilot ist im DACH-Enterprise breit etabliert, mit GitHub-Enterprise-Datenresidenz und SOC2/ISO27001/DPA-Profil. Das offizielle Awesome-Copilot-Skill für Multi-Stage Dockerfiles plus die @docker-Extension liefert Editor- und Chat-Pfade ohne Zusatzlizenz. Inline-Modus reicht oft nicht — Agent-Mode oder @docker-Extension nötig für realistische Stage-Reihenfolgen.
    caveats:
      - Defaults bevorzugen Alpine/Debian — interne UBI/Distroless-Allowlist als Repo-Rules erzwingen
      - Awesome-Copilot-Skill ist Community-Material, vor Bank-Rollout reviewen
      - Inline ohne Repo-Index erzeugt teils nicht-bauende Dockerfiles
      - Awesome-Copilot-Skill ist Community-Material — Banken-Review der Prompt-Inhalte sinnvoll
      - Inline-Modus ohne Repo-Index trifft öfter Stage-Reihenfolge daneben — Agent-Modus für realistische Builds nötig
      - Defaults bevorzugen Alpine/Debian — Allowlist explizit vorgeben
      - Reines Inline ohne Repo-Kontext kann Stage-Reihenfolgen verfehlen
    practitioner_signal:
      volume: high
      tenor: mixed
      praise:
        - Im Editor sofort verfügbar
      complaints:
        - Generiert manchmal nicht-bauende Dockerfiles
    sources:
      - id: explainx-ai-skills-github-awesome-copilot-multi-stage-dockerfile
      - id: reddit-com-r-githubcopilot-comments-1rlmpsf-copilot-vs-claude-code-vs-cursor-for-real
  - id: sourcegraph-com-cody
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Self-hosted/BYOLLM-Option löst die Datenresidenz-Frage strukturell — wichtig für DACH-Banken mit No-Cloud-LLM-Mandat. Repo-weite Multi-Repo-Refactors via Batch Changes ermöglichen konzernweite Dockerfile-Updates (z.B. Migration von Alpine zu UBI) als Massnahme.
    caveats:
      - Self-Hosted-Setup zieht Betriebsverantwortung in die Bank
      - Kein Docker-spezifisches Skill-Pack ab Werk — Prompts selbst pflegen
      - Stärken zeigen sich erst bei großen Mono-/Multi-Repos
      - Kein Docker-spezifisches Skill-Pack out-of-the-box — Prompts/Rules selbst pflegen
      - Stärken zeigen sich erst bei großen Mono-Repos
      - Kein Docker-spezifisches Skill-Pack ab Werk
    practitioner_signal:
      volume: low
      tenor: unknown
    sources:
      - id: bestremotetools-com-best-ai-tools-for-writing-dockerfile-optimization-2026
      - id: sourcegraph-com-cody
  - id: continue-dev
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: BYOM-IDE-Assistent mit Ollama-/Bedrock-/vLLM-Backends — die einzige saubere Option für Banken mit absolutem No-Cloud-LLM-Mandat. Qualität abhängig vom gewählten Modell und Skill/Rule-Pflege liegt beim Team.
    caveats:
      - Output-Qualität kann unter Cloud-Modellen liegen (Codestral/Llama vs. GPT-4/Claude)
      - Kein Docker-spezifisches Skill-Pack — selbst pflegen
      - Hub.continue.dev als Skill-Marketplace — Supply-Chain-Review nötig
      - Kein Docker-Skill-Pack — Prompt-Engineering und Rules-Pflege selbst
      - Qualität hängt am gewählten lokalen Modell
      - Keine Docker-spezifischen Skills ab Werk — Prompts/Rules selbst pflegen
    sources:
      - id: continue-dev
  - id: docs-docker-com-ai-gordon
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Docker-natives AI-Agent in Docker Desktop und als `docker ai` CLI mit Best-Practice-Generierung von Multi-Stage-Dockerfiles und Compose-Files plus Scout-CVE-Recommendations. Org-Admin-Toggle und 30-Tage-Thread-Retention machen Compliance-Gespräch möglich, aber nicht abgeschlossen — daher 'evaluation_only'.
    caveats:
      - "Beta, MySQL-Drop-Vorfall in r/docker zeigt: Approval-Disziplin reicht nicht"
      - Backend-Region und DPA-Profil unklar — DACH-Banken-Compliance-Review nötig
      - Auto-Approve-Modus lokal aktivierbar — Org-Policy-Enforcement schwach
      - Business-Tier muss Gordon explizit per Docker Support aktivieren lassen
      - Business-Tier muss Gordon explizit per Docker Support aktivieren lassen — zusätzlicher Procurement-Schritt
      - Dritt-LLM-Provider (kapa) im Pfad — Auftragsverarbeiterkette für DACH-Compliance-Review relevant
      - Auto-Approve-Modus existiert und kann von Devs lokal aktiviert werden — Org-Policy-Enforcement schwach
      - Noch Beta
      - "Reddit-Vorfall: Gordon hat eine MySQL-DB nach Rename-Frage zerstört — Approval-Disziplin nötig"
      - Backend läuft auf Docker-Servern, Datenresidenz für regulierte Workloads prüfen
    practitioner_signal:
      volume: medium
      tenor: polarized
      praise:
        - Tief im Docker-CLI integriert
        - Sinnvolle Default-Patterns
      complaints:
        - Kann destruktive Aktionen ausführen
        - Approval-Workflow leicht umgehbar
    sources:
      - id: docs-docker-com-ai-gordon
      - id: docker-com-blog-gordon-dockers-ai-agent-just-got-an-update
      - id: docs-docker-com-ai-gordon-concepts-data-privacy
      - id: reddit-com-r-docker-comments-1rdbf9d-dockers-gordon-ai-destroyed-mysql-after-a-question
  - id: jetbrains-com-ai
    fit: conditional
    enterprise_readiness: team_ready
    confidence: medium
    why_it_fits: JetBrains hat starke DACH-Verbreitung in Java-/Kotlin-Banken-Stacks und bietet AI Enterprise mit BYOK und IDE-Services-SSO/Audit. Junie kann projektweite Dockerisierung anstoßen (Playbook). Reifegrad noch hinter Copilot/Claude Code, und Remote-Docker-Context-Bug ist relevant für Build-Server-Setups.
    caveats:
      - "Bekannter Junie-Bug: ignoriert Remote-Docker-Context (SSH) — relevant für zentrale Build-Hosts"
      - AI Enterprise-Tier nötig für Audit/SSO — nicht im Standard-IDE-Lizenzpaket
      - Wenig öffentliche Praxisbelege speziell für Dockerfile-Optimierung
      - "Bekanntes GitHub-Issue: Junie ignoriert Remote-Docker-Context — relevant, weil Banken oft Build-Server statt Dev-Laptop nutzen"
      - Funktion abhängig von gewähltem Backend-LLM (z.B. OpenAI, Anthropic, lokaler Mellum)
    sources:
      - id: jetbrains-com-ai
      - id: github-com-jetbrains-junie-issues-32
  - id: help-aikido-dev-autofix-and-remediation-scope-ai-autofix-for-containers
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "EU-Vendor (Belgien) mit ISO27001/SOC2-Profil und etabliertem DPA-Prozess — strukturell DACH-bank-tauglich. Adressiert das echte Bestandsproblem (Base-Image-Drift) mit 3–5 Dockerfile-Varianten und PR-Erzeugung im SCM. Komplementär zur AI-Erstgenerierung, nicht Ersatz. Downgrade auf 'conditional': unabhängige Praxisbelege existieren für Aikido AutoFix allgemein, aber nicht spezifisch für Container/Dockerfile-Pfad — vor Bank-Rollout PoC am eigenen Repo Pflicht."
    caveats:
      - Wartet auf existierendes Dockerfile, generiert nicht from scratch
      - Aikido-eigene ELS-Images sind realer Vendor-Lock-in — Exit-Pfad zu UBI/Distroless einplanen
      - Private Registries nur mit Aikido-Scan-Anbindung
      - Aikido-eigene ELS-Images sind ein realer Vendor-Lock-in — Bank-Architektur sollte Exit-Pfad zu UBI/Distroless behalten
      - Keine echte Greenfield-Generierung — komplementär zu Copilot/Claude Code, nicht Ersatz
      - ELS-Images sind ein Vendor-Lock-in
      - Unabhängige Praxisbelege bisher zur Aikido-Plattform allgemein, nicht spezifisch zum Container-AutoFix
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - 70–80% nutzbare Fixes laut Klicktrust-Review
      complaints:
        - Logik-/Business-kritischer Code braucht weiterhin manuelles Review
    sources:
      - id: help-aikido-dev-autofix-and-remediation-scope-ai-autofix-for-containers
      - id: klicktrust-com-aikido-review
  - id: aws-amazon-com-q-developer
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "AWS-natives Container-Wissen (ECR, ECS, EKS) plus EU-Region (Frankfurt) für Q Developer Pro mit AVV — passt zu AWS-zentrierten DACH-Stacks. Sandboxed Execution erlaubt iteratives Validieren. Praktiker-Beleg auf DEV.to zeigt nutzbare Dockerfile-Generierung via Q CLI inkl. Multi-Stage-Approval. Downgrade auf 'conditional': Wert stark AWS-spezifisch und Tool-Variante stage-übergreifend (Debug/Diagnose-Slug); für reine Dockerfile-Authoring-Aufgaben außerhalb von AWS deutlich schwächer als Copilot/Claude Code."
    caveats:
      - Stärken stark AWS-spezifisch — geringerer Wert in Azure-/On-Prem-Stacks
      - Devfile-Setup zusätzlicher Aufwand
      - Generierte Defaults nicht Distroless/UBI
      - Ohne AWS-Stack-Bezug deutlich schwächer als Copilot/Claude Code
      - Q Developer Free-Tier lernt aus Inputs (opt-out nötig) — Enterprise-Tier ist Pflicht für Banken
      - Stärken liegen auf AWS-spezifischen Patterns
      - Generierte Defaults nicht zwingend Distroless/UBI
      - Devfile-Setup zusätzlicher Overhead
      - Tool-Variante 'debug-diagnose' impliziert primären Fokus außerhalb Authoring — Dockerfile-Authoring ist Sekundärnutzen
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Multi-Stage-Approval-Modus via Q CLI ermöglicht sichere Generierung
      complaints:
        - Ohne AWS-Kontext begrenzter Mehrwert
    sources:
      - id: aws-amazon-com-blogs-devops-enhancing-code-generation-with-real-time-execution-in-amazon-q-developer
      - id: dev-to-mohamed-abomosallam-52626-dev-productivity-unleashed-build-faster-with-this-amazon-q-cli-workflow-4h1m
  - id: cloud-google-com-products-gemini-code-assist
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: Solide GCP-Integration mit europäischer Datenresidenz und etablierten DPAs. Praxisbeleg via PR im google-gemini/gemini-cli Repo zeigt Multi-Stage-Refactor; unabhängiger Medium-Praxisbericht bestätigt Dockerfile-/Deployment-Code-Generierung mit nötigem Steering. Sinnvoll vor allem in GCP-zentrierten DACH-Stacks; Distroless/UBI nicht out-of-the-box als Default.
    caveats:
      - DACH-Banken-GCP-Footprint kleiner als Azure/AWS — Zielgruppe begrenzter
      - Defaults nicht bank-konform, Allowlist explizit als Kontext mitgeben
      - DACH-Banken-Footprint auf GCP eher klein — passt primär zu GCP-affinen Mittelstands-/Tech-Häusern
      - Stärke spezifisch für GCP-Kontext
      - Distroless/UBI nicht out-of-the-box als Default
      - Praxisbericht meldet Kontextbrüche und Debug-Aufwand bei API-Code-Generierung — übertragbar auf Dockerfile-Edge-Cases
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Generiert Docker-/Deployment-Skelette ausreichend für Iteration
      complaints:
        - Verbose Outputs erfordern Filterung
        - Inkonsistenzen bei Kontextwechseln
    sources:
      - id: github-com-google-gemini-gemini-cli-pull-15860
      - id: medium-com-willn2-building-an-app-with-gemini-code-assist-2f99801c498a
  - id: snyk-io-platform-deepcode-ai
    fit: partial
    enterprise_readiness: enterprise_ready
    confidence: low
    why_it_fits: Snyk Container schlägt für gescannte Images Base-Image-Upgrades vor und kann diese als PR im Repo gegen das Dockerfile vorschlagen. Stark als Komplement zur AI-Erstgenerierung — verschiebt unsichere Defaults proaktiv auf gehärtete Bases. DACH-relevant, da viele Banken bereits Snyk-Lizenzen haben.
    caveats:
      - Schreibt Dockerfiles nicht von Null
      - Kosten-/Lizenzmodell wird in Praktiker-Kommentaren als hoch wahrgenommen
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Identifies real Docker image vulnerabilities effectively
        - Catches dependency issues in container scans
      complaints:
        - Overwhelms teams with alert volume requiring heavy tuning
        - Container CVE reporting accuracy issues vs free registry scans
        - APIs inconsistent; missing reachability analysis in practice
    sources:
      - id: aikido-dev-comparison-aikido-vs-snyk
start_here: "Pilot-Einstieg: GitHub Copilot im Agent-Modus (nicht Inline) auf ein bestehendes naives Dockerfile loslassen und als Multi-Stage-Build refaktorieren lassen. Vor dem ersten Lauf eine Base-Image-Allowlist (UBI, Distroless) als Repo-Kontext oder Copilot-Instruction hinterlegen, da AI-Defaults Alpine/Debian bevorzugen."
caveats: AI-Tools wählen Alpine- oder Debian-Basis-Images als Default — DACH-Unternehmen mit UBI- oder Distroless-Policy müssen die Allowlist explizit als Kontext mitgeben. Die @docker-Extension klont das Repo in In-Memory-Storage auf Docker-Backend; die eigene Datenklassifikation muss klären, ob das für den betreffenden Code zulässig ist.
sources: []
---
