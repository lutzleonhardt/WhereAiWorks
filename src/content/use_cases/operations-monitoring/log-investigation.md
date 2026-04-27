---
stage: operations-monitoring
order: 7
roles:
  - software-engineer
title: "Log-Untersuchung mit AI-Assistenten"
goal_label: "Log-Berge nach Auffälligkeiten durchsuchen"
suitability: good_fit
rationale: "Datadog Logs, Splunk AI Assistant, New Relic AI und Elastic Observability AI Assistant bieten LLM-gestützte Log-Pattern-Erkennung und Erklärungen. Praxisbericht-Anker: Reduktion der Time-to-First-Hypothesis bei On-Call."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Splunk AI Assistant (On-Prem) oder Datadog Logs Explorer mit einer abgeschlossenen Incident-Logsammlung füttern und prüfen, ob das Tool die schon bekannte Ursache findet — erst danach live einsetzen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Logs enthalten regelmäßig PII, Secrets und Session-Tokens — ohne Pre-Sanitization (z.B. Cribl, Vector) ist SaaS-Log-AI ein DSGVO-Risiko und bei BaFin-regulierten Workloads ggf. meldepflichtig; Sampling und Token-Limits führen zudem dazu, dass seltene aber wichtige Log-Lines übersehen werden."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
