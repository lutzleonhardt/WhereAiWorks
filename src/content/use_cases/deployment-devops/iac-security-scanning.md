---
stage: deployment-devops
order: 4
roles:
  - security-engineer
  - platform-devops-engineer
title: "IaC-Security-Scanning"
goal_label: "Misconfigurations in Terraform/K8s-YAML finden und Fix vorschlagen"
suitability: good_fit
rationale: "Snyk IaC, Wiz Code, Checkov und Prisma Cloud kombinieren regelbasiertes Scannen mit AI-Fix-Vorschlägen direkt im IDE/PR; in DevSecOps-Praxisartikeln 2026 als Standardbaustein gelistet. ISO 27001 Annex A 8.27/8.28 macht das ohnehin verpflichtend."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Snyk IaC oder Checkov in der CI an einer einzelnen Repository-Stage scharf schalten, Fix-Vorschläge erstmal als PR-Kommentare und nicht als Auto-Merge laufen lassen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Reine Regel-Scanner werden gerne als 'AI' vermarktet — der echte AI-Anteil liegt im Fix-Vorschlag, nicht in der Detection; Auto-PR-Drift-Korrektur kollidiert mit Vier-Augen-Pflicht in regulierten Org."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
