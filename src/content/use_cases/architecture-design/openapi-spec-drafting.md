---
stage: architecture-design
order: 9
roles:
  - software-engineer
  - software-architect
title: "OpenAPI-Spec entwerfen"
goal_label: "REST-/GraphQL-Spezifikationen aus Anforderungen generieren"
suitability: good_fit
rationale: "Mehrere Anbieter (Kong api.dev, 8sprint, Theneo, Swaggerize) und Allzweck-LLMs adressieren dies; OpenAPI ist strukturiert genug, dass AI Spec-Konsistenz gut prüft und ergänzt. Spec-First wird damit auch für kleine Teams praktikabel."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Kong api.dev oder ChatGPT (Enterprise-Tenant) an einer klar umrissenen Ressource starten — Spec im Repo versionieren, Mock-Server gegen Spec laufen lassen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Generierte Specs replizieren US-zentrierte Konventionen (Adressformat, Datum, Telefonnummer) — DACH-Lokalisierung (IBAN, Steuer-ID, deutsches Datum, ISO-3166-Country-Codes) muss explizit gefordert werden. Generierte Schemas spiegeln oft nur das offensichtliche Happy-Path-Modell."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
