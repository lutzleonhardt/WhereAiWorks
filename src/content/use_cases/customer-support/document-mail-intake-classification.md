---
stage: customer-support
order: 17
roles:
  - customer-support
title: "Posteingangs- und Dokument-Klassifikation für Service-Anfragen"
goal_label: "Eingehende Briefe, PDFs und Formulare automatisch zuordnen"
suitability: good_fit
rationale: "Vom Markt-Scan vermutlich übersehen, weil dieser DACH-typische Posteingangs-Workflow im englischsprachigen Praktiker-Diskurs als reines OCR/RPA-Thema und nicht als 'AI customer service' geframet wird. ITyX dokumentiert produktive Implementierungen bei deutschen Versicherern; in DACH-Banken und Versicherungen bleibt physischer/PDF-Posteingang ein erheblicher Service-Kanal, der von Reply-Suggestions, Triage und KB-RAG nicht erfasst wird."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit ITyX, agorum + onprem.ai oder einer Aristech-Variante auf einem Dokumenttyp (z.B. Adressänderung) starten, OCR + Klassifikation vor jeglicher Generative-Layer prüfen und automatische Nachforderungen erst nach 4–8 Wochen Genauigkeits-Tuning aktivieren."  # Draft aus Discovery — vor Commit prüfen
caveats: "Dokumente enthalten oft Art. 9 DSGVO Daten (Gesundheit bei Schadensmeldungen, Sozialdaten) — On-Prem oder zertifizierte EU-Cloud Pflicht. Vollständigkeitsprüfung darf nicht zur automatisierten Ablehnung werden (Art. 22 DSGVO)."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
