---
stage: documentation
order: 2
roles:
  - developer
title: "Doku-Q&A-Chatbot"
goal_label: "Endbenutzern Fragen zur Produkt-Doku per Chat beantworten"
suitability: good_fit
rationale: "Mintlify Chat, Kapa.ai und Inkeep haben den Slot industrialisiert; viele Vendor-Doku-Sites (Anthropic, Vercel, Supabase) zeigen den Chatbot prominent. Distinkt von externer Customer-Support-KB."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit Kapa.ai oder Inkeep auf einer fokussierten Doku-Subdomain (z.B. nur API-Referenz) starten. Antworten 4 Wochen lang stichprobenartig review'en, bevor man auf die ganze Doku ausrollt."  # Draft aus Discovery — vor Commit prüfen
caveats: "RAG-Chatbots halluzinieren bei Lücken in der Doku oder Cross-Doc-Fragen; Quellenlinks reduzieren das Risiko nicht, sondern verschleiern es teilweise. Kapa.ai/Inkeep/Mintlify Chat sind US-SaaS ohne EU-Region — für DACH-Public-Doku AVV und Sub-Processor-Liste prüfen."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
