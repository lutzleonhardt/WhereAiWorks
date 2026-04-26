---
stage: deployment-devops
order: 6
roles:
  - developer
title: "CI-Pipeline-Debug"
goal_label: "Fehlgeschlagene Builds und Deploy-Jobs aus Logs erklären"
suitability: good_fit
rationale: "JetBrains-Survey nennt 'failure diagnosis' als häufigsten AI-Einstieg in Pipelines; Harness CI Agent, GitLab Duo Root Cause Analysis und AetherCI/Panto sind GA. Auch DACH-fähig, weil Self-hosted-Varianten (GitLab Duo, Harness Self-Managed) verfügbar sind."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "GitLab Duo Self-hosted oder Harness Self-Managed für eine Pipeline einschalten, auf 'Erklärung + Fix-Vorschlag' beschränken und Auto-Apply zunächst deaktiviert lassen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Build-Logs enthalten Quellcode-Stacktraces, interne Hostnames und Tokens — Daten-Egress an Cloud-LLM verletzt schnell DSGVO/AVV; nur Self-hosted GitLab Duo oder Harness mit privatem Endpoint sind tragbar."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
