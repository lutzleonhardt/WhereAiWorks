---
name: "Product Discovery"
type: "primary"
order: 1
challenge: "Kundenfeedback-Mengen wachsen, aber Muster zu erkennen bleibt manuelle Fleißarbeit."
top_use_case: "Feedback-Clustering und Interview-Synthese"
roles:
  - product-owner
use_cases:
  - id: "product-discovery:feedback-clustering"
    roles:
      - product-owner
    title: "Feedback-Clustering"
    goal_label: "Kundenfeedback schneller auswerten"
    suitability: "good_fit"
    rationale: "LLMs können hunderte Feedback-Schnipsel zu Themen gruppieren und Beispiele liefern. Das ersetzt kein Product-Urteil, aber die Vorarbeit geht von Stunden auf Minuten."
    tools:
      - id: productboard-ai
      - id: dovetail
    start_here: "Dovetail mit bestehenden Interview-Transkripten füttern. Automatische Tag-Vorschläge akzeptieren oder kuratieren — schneller als bei Null anzufangen."
    caveats: "Qualität hängt an der Transkript-Qualität. Kategorisierung muss vom Produktteam validiert werden; das Modell kennt die Produktrealität nicht."
    sources:
      - label: "Dovetail — AI Analysis"
        url: "https://dovetail.com/product/ai/"
        type: "vendor"
---

## Womit anfangen?

_Platzhalter — folgt in Phase 2._

## Grenzen

_Platzhalter — Kategorisierung braucht Produktkontext; blind übernommene Cluster liefern falsche Prioritäten._
