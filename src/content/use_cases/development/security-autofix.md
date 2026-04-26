---
stage: development
order: 6
roles:
  - developer
title: "Security-Autofix im IDE/PR"
goal_label: "AI-vorgeschlagene Patches für SAST/SCA-Findings direkt im Workflow anwenden"
suitability: conditional
rationale: "Briefing erlaubt schmalen Pfad explizit. Copilot Autofix (CodeQL) und Snyk Agent Fix / DeepCode AI Fix als zwei dominante Vendor-Implementierungen. In DACH zusätzlich durch NIS-2 und Cyber Resilience Act getrieben."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Snyk DeepCode AI Fix (Self-Hosted-Option) oder Copilot Autofix an mechanischen Schwachstellen (XSS-Escaping, Header-Hardening) starten und Authz/Authn-Patches grundsätzlich von Hand prüfen. Für AI-Act-High-Risk-Systeme Autofix-Patches auditierbar dokumentieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Autofixes sind meist datei-lokal und schlagen bei Authz/Authn-Schwachstellen falsche Fixes vor. Für AI-Act-High-Risk-Systeme (Kreditscoring) müssen Autofix-Patches auditierbar dokumentiert werden — kein Auto-Merge ohne Human-in-the-Loop."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
