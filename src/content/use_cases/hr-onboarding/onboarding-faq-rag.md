---
stage: hr-onboarding
order: 18
roles:
  - product-owner
title: "Onboarding-FAQ-Bot mit RAG"
goal_label: "Fragen neuer Mitarbeiter in den ersten 90 Tagen automatisiert beantworten"
suitability: good_fit
rationale: "Engerer, schärfer abgegrenzter Use Case als der generische HR-Self-Service-Assistent: nur Onboarding-Domäne, klar gepflegte Quellen, kürzere Risiko-Liste. Microsoft Copilot Studio, Azure OpenAI on Your Data und ServiceNow HR Agent unterstützen das nativ. Vom Markt-Scan vermutlich übersehen, weil dort unter 'internal-hr-knowledge-assistant' gebündelt — separate Auflistung lohnt sich, weil der Onboarding-Scope deutlich risikoärmer ist."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Microsoft Copilot Studio oder Azure OpenAI on Your Data einen Bot auf das kuratierte Welcome-Pack plus Onboarding-Wiki anlegen, harte Eskalation für Vergütungsthemen einbauen und an einer Hire-Welle pilotieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Halluzinationen werden bei eng kuratiertem Source-Set seltener, sind aber bei Lohn-/Vertragsfragen nicht akzeptabel — harte Eskalation bei Detected-Topic 'Vergütung/Vertrag' bauen. Logging-Konzept und Retention klären."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
