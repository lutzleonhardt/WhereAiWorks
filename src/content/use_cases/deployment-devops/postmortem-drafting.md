---
stage: deployment-devops
order: 9
roles:
  - software-engineer
  - platform-devops-engineer
title: Postmortem-Drafting
goal_label: Strukturierte Postmortems aus Incident-Daten generieren
suitability: good_fit
rationale: "incident.io und ilert sind produktionsreif und generieren strukturierte Postmortems aus Incident-Timeline, Slack/Teams-Threads und Alert-Daten in Minuten statt Stunden. Der Use Case ist klar abgegrenzt: KI-gestützte Dokumentationsschicht nach dem Incident — keine Ersetzung der Live-RCA."
tools:
  - id: datadoghq-com-product-bits-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Postmortem-Templates mit konkreten AI-Variablen (ai_summary, ai_customer_impact, ai_key_timeline, ai_action_items, ai_lessons_learned) und 'Generate Postmortem'-Button, gespeist aus Timeline, Monitor-Events, Severity-Changes und Slack. Datadog EU-Site (Frankfurt) verfügbar, ISO 27001 und SOC 2 Type II — solide Basis, wenn Datadog ohnehin im Stack ist.
    caveats:
      - Bits-AI-Datenfluss läuft über externe LLMs — DPA-Annex und Region-Pinning verifizieren
      - Mind. 10 Timeline-Messages Voraussetzung; kleine Incidents bleiben manuell
      - Bits AI ist separates Pricing — wirkt 'gratis' im Bundle, ist aber Up-Sell-Hebel
      - Export von AI-Postmortems außerhalb von Datadog erfordert Eigenleistung
      - "Bits-AI-Datenfluss: Prompts/Logs gehen an OpenAI/Anthropic — DPA-Annex und Region-Pinning explizit verifizieren"
      - AI-Postmortem-Templates sind Datadog-spezifisch; Export außerhalb des Datadog-Ökosystems erfordert Eigenleistung
      - Suite-Pricing macht Postmortem-AI auf dem Papier 'gratis', real ist es Bundling-Hebel für Datadog-Up-Sell
      - Tiefe AI-Variablen erfordern Bits AI / Incident AI — separates Pricing
      - Sinnvoll nur bei vorhandenem Datadog-Incident-Management-Stack
      - Mind. 10 Timeline-Messages Voraussetzung — kleine Incidents bleiben manuell
    practitioner_signal:
      volume: medium
      tenor: mixed
      praise:
        - Bits AI Summaries werden gerne im Slack-Channel genutzt
      complaints:
        - Postmortem-Variable-Templates erfordern Setup-Geduld
    sources:
      - id: docs-datadoghq-com-service-management-incident-management-incident-ai
      - id: datadoghq-com-blog-create-postmortems-with-datadog
      - id: reddit-com-r-observability-comments-1rsga5d-the-dirty-and-very-open-secret-of-ai-sre-tools
  - id: incident-io-post-mortems
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Kategorieführer für AI-native Postmortem-Drafting aus Slack/Teams, Timeline, PRs und Incident-Custom-Fields; Section-weise AI mit Inline-Review gegen Incident-Daten und Export nach Confluence/Notion/Google Docs/SharePoint. SOC 2, ISO-Standards und Opt-in-AI für Private Incidents geben einen sauberen Rahmen für Mitbestimmungs- und DSGVO-Klärung. Bleibt aber Vor-Aufbereitung — kein Ersatz für DORA-Art.-19-Filing.
    caveats:
      - Hosting primär AWS US-Regionen; EU-Datenresidenz nicht standardmäßig — DPA und Subprozessor-Liste prüfen
      - Pro/Enterprise-Plan nötig für AI-Features; Listenpreise nicht öffentlich
      - Slack/Teams-Lesezugriff ist mitbestimmungspflichtig (Personenbezug)
      - AI-Output ist kein BaFin-MVP/ITS-2025/302-Format — nur Pre-Fill für regulatorisches Reporting
      - Hosting primär AWS US-Regionen; EU-Datenresidenz nicht standardmäßig — DPA und Subprozessor-Liste gegen Betriebsrat/DSB prüfen
      - AI-Output ist kein BaFin-MVP/ITS-2025/302-konformes Reporting — bleibt Vor-Aufbereitung, kein Ersatz für DORA-Art.-19-Filing
      - Pro/Enterprise-Plan ist DACH-Mittelstand-tauglich, aber Listenpreise nicht öffentlich — Beschaffung muss Pricing-Transparenz erzwingen
      - AI für Private Incidents nur nach Opt-in der AI-Subprocessor-Settings
      - Slack/Teams-Quellen erfordern Mitbestimmungs-Klärung wegen Personenbezug
      - Pro/Enterprise-Plan nötig für die neuen Features
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Spart 'die 4 Stunden Slack-Archäologie' am Tag danach
        - Saubere Timeline-Konsolidierung aus Slack/PRs/Alerts
      complaints:
        - Teurer als manche Alternativen, MS-Teams-Integration früher schwächer
        - Synthese/Action-Items bleiben Handarbeit
    sources:
      - id: docs-incident-io-post-incident-postmortem-ai
      - id: incident-io-changelog-post-mortems-upgrade
      - id: incident-io-blog-what-does-using-ai-for-post-mortems-actually-mean
      - id: incident-io-blog-best-postmortem-software-for-compliance-audit-teams-2026
      - id: reddit-com-r-sre-comments-1ntxc8j-spent-4-hours-yesterday-writing-an-incident
      - id: reddit-com-r-sre-comments-1k8x5mc-anyone-here-using-ai-rca-tools-like-incidentio-or
  - id: rootly-com
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: Slack-First-Plattform mit One-Click-'Generate with AI'-Retrospective, Action-Item-Sync zu Jira und Repeat-Incident-Erkennung — letztere ist ein realer Audit-Mehrwert für DORA-Lessons-Learned. Granulare RBAC, Private Incidents und Audit-Trail dokumentiert. Slack-Tiefen-Lesezugriff bleibt aber Mitbestimmungs- und DSGVO-Thema.
    caveats:
      - US-Cloud — EU-Datenresidenz/Sovereign-Option nicht prominent dokumentiert
      - AI-Subprozessoren (OpenAI/Anthropic) müssen explizit im DPA stehen
      - "Lock-in: Auto-Capture funktioniert nur im Rootly-Workflow"
      - Pricing intransparent, in Praktiker-Threads als 'teuer' wahrgenommen
      - Rootly ist US-Cloud — EU-Datenresidenz/Sovereign-Option nicht prominent dokumentiert
      - AI-Modell-Provider (OpenAI/Anthropic) müssen explizit im DPA stehen, sonst kein Auftragsverarbeitungsverhältnis nach Art. 28 DSGVO
      - "Vendor-Lock-in: ohne Rootly-Workflow kein Auto-Capture, Migrationspfad zu eigenem Wiki nicht trivial"
      - Slack-Zugriff auf 'All messages' (auch private Kanäle) muss mit Betriebsrat geklärt werden
      - AI-Features müssen explizit pro Tenant aktiviert werden
      - Marketing positioniert oft 'RCA + Postmortem' zusammen — Abgrenzung im Use Case beachten
    practitioner_signal:
      volume: high
      tenor: positive
      praise:
        - Auto-Capture der Timeline während des Incidents spart Archäologie
        - Repeat-Incident-Erkennung wird in Threads geschätzt
      complaints:
        - Pricing ähnlich incident.io / PagerDuty als 'teuer' wahrgenommen
        - AI bleibt 'nur' Pre-Fill, ersetzt menschliches Urteil nicht
    sources:
      - id: docs-rootly-com-ai-incident-summarization
      - id: rootly-com-sre-rootly-postmortems-automate-reports-end-manual-docs
      - id: api-rootly-io-security
      - id: reddit-com-r-devops-comments-1oeyqqd-our-postmortem-from-last-week-just-identified-the
      - id: reddit-com-r-sre-comments-1pk7go7-pagerduty-for-sre-how-real-people-work-with-it
  - id: docs-resolve-ai-incident-channels
    fit: conditional
    enterprise_readiness: evaluation_only
    confidence: medium
    why_it_fits: Investigation-First-Multi-Agent-Plattform mit on-demand Postmortem-Draft (Title, Narrative, RCA, Timeline, Impact, Lessons, Action Items) und Output direkt in Google Docs/Notion/Jira/Linear. Reizvoll, wenn ohnehin Multi-Agent-Investigation evaluiert wird; für regulierte DACH-Postmortems aber wegen Reproduzierbarkeit der Reasoning-Kette und dünner Compliance-Belege heute nur Pilot.
    caveats:
      - Halluzinationsrisiko in Multi-Agent-Setups ist für regulatorische Records kritisch
      - SOC 2 / DPA / EU-Hosting auf Website nicht prominent
      - Vendor-Stabilität / Funding-Phase Risiko für Mehrjahres-Verträge
      - Postmortem ist Beifang des Investigation-Produkts
      - Halluzinationsrisiko in Multi-Agent-Setups ist für regulatorische Records kritisch — wer haftet bei erfundenen Timeline-Punkten?
      - Compliance-Belege (SOC 2 Type II, DPA, EU-Hosting) auf der Website nicht prominent
      - "Vendor-Stabilität / Funding-Phase: für Mehrjahres-Verträge in regulierten Branchen Risiko"
      - Jünger als incident.io/Rootly, Enterprise-Track-Record begrenzt
      - Stark Investigation-zentriert — Postmortem ist Beifang
      - Reproduzierbarkeit der AI-Findings ist Community-Diskussionspunkt
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Multi-Agent-Investigation liefert solide Evidenz-Trail
      complaints:
        - Reproduzierbarkeit/Auditability bei Stream-basierter Reasoning fragwürdig
    sources:
      - id: docs-resolve-ai-incident-channels
      - id: resolve-ai-glossary-comparing-different-ai-approaches-for-sre-workflows
      - id: reddit-com-r-observability-comments-1rsga5d-the-dirty-and-very-open-secret-of-ai-sre-tools
  - id: servicenow-com-ai-use-cases-generate-post-incident-reviews-html
    fit: conditional
    enterprise_readiness: enterprise_ready
    confidence: medium
    why_it_fits: "Bei DACH-Banken, Versicherern und Konzernen ist ServiceNow oft Record-of-Truth für ITSM/SecOps; AI Agents in ITSM/SIR generieren PIR-Reports beim Close-Status mit RCA, Impact, Prevention-Steps. Frankfurt-Hosting verfügbar, BaFin-/DORA-Beratungspartner etabliert. Risiko: 'Compliance-Postmortem' (Audit) und 'Engineering-Postmortem' (Lernen) driften auseinander."
    caveats:
      - Now-Assist-Lizenz signifikant zusätzlich — TCO-Spread für Mid-Cap erheblich
      - Slack/Teams-Quellen nur über Konnektoren — Live-War-Room ist nicht der Sweet Spot
      - Post-Incident-Analysis im SIR-Modul ist Security-Fokus; ITOM-Variante separat lizenzieren
      - AI-Output benötigt menschliche Freigabe vor Audit-Submission
      - Now-Assist-Lizenz ist signifikant zusätzlich zur ITSM-Pro-Lizenz — TCO sorgfältig kalkulieren
      - Slack/Teams-Quellen nur über Konnektoren — Live-War-Room-Kontext ist nicht der Sweet Spot
      - Risiko 'Compliance-Postmortem' (für Audit) und 'Engineering-Postmortem' (für Lernen) auseinanderzudrücken
      - Lock-in zu ServiceNow-Tenant; Slack/Teams-Quellen nur über Konnektoren
      - Now-Assist-Lizenz extra; Onboarding aufwendiger als SaaS-Tools
      - Post-Incident Analysis (SIR) ist primär Security-Use-Case — DevOps-Variante separat im ITOM-Modul
    practitioner_signal:
      volume: low
      tenor: unknown
      praise:
        - Incident summarization synthesizes timeline and context in seconds
        - Delivers genuine time savings for initial post-incident capture
      complaints:
        - Amplifies weak foundations; poor data/process quality makes outputs worse
        - Hallucination risk demands human review on outputs
        - Effectiveness heavily dependent on knowledge base and process maturity
    sources:
      - id: servicenow-com-ai-use-cases-generate-post-incident-reviews-html
      - id: servicenow-com-community-secops-articles-revolutionizing-security-incident-management-introducing-ta-p-3098002
  - id: atlassian-com-software-rovo
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: "Für DACH-Mittelstand mit JSM/Confluence-Stack der pragmatischste Pfad: 'Suggest description' für PIR plus Rovo /create-pir, Daten bleiben im Atlassian-Tenant und werden laut Doku nicht zum Modelltraining verwendet. Cloud-Data-Residency für Deutschland/EU als Enterprise-Feature buchbar. Unabhängiger Drittanbieter-Review (eesel) und Atlassian-Community-Praxisthreads bestätigen Slack-Pull, generischen Output und Premium/Enterprise-Lock."
    caveats:
      - Cloud-Data-Residency ist pro Feature zu prüfen — nicht alle AI-Funktionen unterstützen Deutschland-Pinning
      - Slack-Datenzugriff hängt an User-Permissions, kein zuverlässiger Auto-Sync
      - Output generischer als Spezialtools; Templates müssen aktiv kuratiert werden
      - Atlassian-AI-Outputs nicht als Tamper-Evidence konzipiert — für DORA-Reporting nur Vor-Aufbereitung
      - Cloud-Data-Residency für Deutschland/EU ist Enterprise-Plan-Feature und nicht für alle Atlassian-AI-Features verfügbar — pro Feature prüfen
      - Slack-Channel-Daten werden nur mit User-Permission gezogen — kein zuverlässiger Auto-Capture wie bei incident.io
      - Output ist generischer als bei Spezialtools; Templates müssen aktiv gepflegt werden
      - Nur Premium/Enterprise — Standard-Plan ohne Atlassian Intelligence
      - Slack-Datenzugriff hängt an User-Permissions, kein Auto-Sync wie bei incident.io
      - Atlassian-AI-Outputs sind weniger 'opinionated' als Spezialisten-Tools
    practitioner_signal:
      volume: low
      tenor: mixed
      praise:
        - Nahtlos im JSM-Workflow; spart bei reinem Atlassian-Stack die erste Draft-Stunde
      complaints:
        - Output bleibt generisch ('out-of-the-box summaries'); kaum Personalisierung, Premium/Enterprise-Lock
    sources:
      - id: support-atlassian-com-jira-service-management-cloud-docs-create-a-post-incident-review-using-atlassian-intelligence
      - id: atlassian-com-blog-announcements-jira-service-management-agentic-ai
      - id: eesel-ai-blog-atlassian-intelligence-create-post-incident-reviews
      - id: community-atlassian-com-forums-rovo-articles-real-time-use-cases-of-atlassian-rovo-ba-p-3219227
  - id: ilert-com-product-ilert-ai
    fit: good_fit
    enterprise_readiness: enterprise_ready
    confidence: high
    why_it_fits: ilert ist DACH-nativ (Köln) und im allgemeinen 'AI postmortem'-Marktscan unterrepräsentiert. Hosting in Deutschland, ISO 27001, GDPR-First-Positionierung und explizite Aussage, dass keine personenbezogenen Daten an externe LLMs gehen — der einzige Kandidat mit echtem DACH-Datensouveränitäts-Profil. Postmortem-Generierung aus Slack-/Teams-War-Room-Channels und Alert-Timelines, Output als Rohtext zur Weiterbearbeitung. Unabhängiger Praktiker-Blog (rtfm.co.ua, Feb 2026) bestätigt UX/Doku-Vorteil gegenüber incident.io; PeerSpot-Reviews dokumentieren wachsenden Mindshare und Anwender-Feedback.
    caveats:
      - AI-Postmortem-Output ist Rohtext — manuelle Übernahme in Word/Google Doc nötig
      - Funktionsumfang weniger 'AI-native' als incident.io (kein Section-Rewrite/Review-against-data)
      - Marktreichweite kleiner — Praxis-Signale im DACH-Mittelstand vorhanden, im Großkonzern dünner
      - Meeting-Transkription/Voice-Agents bleiben TKG-/ePrivacy-relevant
    practitioner_signal:
      volume: low
      tenor: positive
      praise:
        - Intuitive UI/Doku, schnelles Onboarding nach Opsgenie-Migration
        - Region-pinned EU-Hosting der AI-Endpunkte ist für regulierte DACH-Kunden ein Alleinstellungsmerkmal
      complaints:
        - AI-Postmortem ist Rohtext-Export; Section-Rewrite-Workflow fehlt vs. incident.io
    sources:
      - id: ilert-com-compare-firehydrant
      - id: ilert-com-product-ilert-ai
      - id: docs-ilert-com-ilert-ai-generating-incident-updates-through-ai
      - id: rtfm-co-ua-en-ilert-an-alternative-to-opsgenie-first-impressions-alertmanager-slack
      - id: peerspot-com-products-comparisons-ilert-ai-vs-pagertree
start_here: Einstieg mit incident.io (Slack/Atlassian-Stack) oder ilert (DACH-Datensouveränität) für einen abgeschlossenen, niedrigsensitiven Incident als Testfall. AI-Output vor Freigabe gegen den manuell erstellten Bericht abgleichen.
caveats: Slack/Teams-Threads als Datenquelle erfordern Mitbestimmungsklärung wegen Personenbezug — vor Rollout mit Betriebsrat und DSB klären. AI-Postmortems sind Vor-Aufbereitung, kein Ersatz für regulatorisches Reporting nach DORA.
sources: []
---
