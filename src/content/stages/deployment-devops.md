---
name: Deployment & DevOps
type: primary
order: 5
phase: betreiben
challenge: Pipeline- und IaC-Generierung ist verlockend, aber Fehler treffen die Produktion.
top_use_case: Wahrscheinliche Ursache von Produktionsincidents korrelieren und vorschlagen
roles:
  - software-engineer
  - security-engineer
  - platform-devops-engineer
---

## Womit anfangen?

Den Einstieg mit dem bereits lizenzierten Observability-Tool machen — Datadog Watchdog oder Dynatrace Davis AI aktivieren und generierte Alerts vier Wochen nur beobachten, bevor sie auf Pager-Routing umgestellt werden. Im CI/CD-Bereich zuerst actionlint und zizmor als PR-Gate einführen, bevor AI-generierte Pipeline-YAML in die Codebasis einfließt.


## Grenzen

Autonome Produktionseingriffe — Auto-Remediation, Auto-Rollback, Rightsizing — erfordern kuratierte Runbooks, Approval-Gates und in regulierten Umgebungen einen vorab genehmigten ITIL-Standard-Change. Nahezu alle produktionsreifen Tools sind US-SaaS-Herkunft; EU-Datenresidenz, DORA-konformer Audit-Trail und §87-BetrVG-Betriebsvereinbarung müssen vor jedem Rollout vertraglich fixiert sein.

