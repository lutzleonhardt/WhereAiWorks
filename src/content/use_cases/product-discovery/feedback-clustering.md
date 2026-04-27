---
stage: product-discovery
order: 1
roles:
  - product-manager
title: "Feedback-Clustering"
goal_label: "Kundenfeedback schneller auswerten"
suitability: "good_fit"
rationale: "LLMs können hunderte Feedback-Schnipsel zu Themen gruppieren und Beispiele liefern. Das ersetzt kein Product-Urteil, aber die Vorarbeit geht von Stunden auf Minuten."
tools:
  - id: productboard-ai
    fit: good_fit
    why_it_fits: "Clustert Feedback aus diversen Quellen direkt im Product-Board-Workflow und schlägt Themen-Tags vor."
  - id: dovetail
    fit: good_fit
    why_it_fits: "Spezialisiert auf qualitative Transkript-Analyse; AI-Tags und Themen-Vorschläge auf Interviews und Survey-Antworten."
start_here: "Dovetail mit bestehenden Interview-Transkripten füttern. Automatische Tag-Vorschläge akzeptieren oder kuratieren — schneller als bei Null anzufangen."
caveats: "Qualität hängt an der Transkript-Qualität. Kategorisierung muss vom Produktteam validiert werden; das Modell kennt die Produktrealität nicht."
sources:
  - id: dovetail-ai-analysis
---
