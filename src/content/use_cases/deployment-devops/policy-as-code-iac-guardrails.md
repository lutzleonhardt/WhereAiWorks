---
stage: deployment-devops
order: 16
roles:
  - software-engineer
title: "Policy-as-Code-Guardrails für AI-IaC"
goal_label: "OPA/Sentinel-Gates auf terraform plan und K8s-Admission"
suitability: good_fit
rationale: "Vom Markt-Scan vermutlich übersehen, weil als Plattform-Feature und nicht als 'AI Use Case' vermarktet — aber genau dieses Pattern macht AI-IaC-Generierung in DACH-Banken/Versicherern erst BaFin-/DORA-tauglich. OPA, Harness Policy-as-Code und OPA Gatekeeper sind in DACH-Plattformen Standard."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "OPA oder Sentinel (für Terraform Cloud) auf einer einzelnen IaC-Pipeline mit drei harten Policies starten (kein Public-S3, alle Resources tagged, kein IAM-Wildcard), `--fail-defined` aktivieren und vor jedem terraform apply laufen lassen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Policies selbst zu schreiben/pflegen ist Aufwand; Rego-Lernkurve nicht zu unterschätzen — ohne dedizierte Plattform-Owner verkommt das Feature zur Pflichtübung mit Sample-Policies."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
