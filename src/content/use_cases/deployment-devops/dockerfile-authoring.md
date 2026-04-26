---
stage: deployment-devops
order: 14
roles:
  - developer
title: "Dockerfile-Authoring"
goal_label: "Multi-Stage-Dockerfiles und .dockerignore generieren und optimieren"
suitability: good_fit
rationale: "Docker selbst veröffentlicht eine Copilot-Extension, GitHub pflegt ein eigenes Multi-Stage-Skill, Cursor und Claude Code liefern brauchbare Multi-Stage-Builds. Praxisberichte nennen 70–90 % Image-Size-Reduktion gegenüber naiven Erstversionen."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit der Docker-Extension für GitHub Copilot ein bestehendes naives Dockerfile in einen Multi-Stage-Build refaktorieren lassen und das Ergebnis mit Trivy plus Syft-SBOM-Generierung scannen."  # Draft aus Discovery — vor Commit prüfen
caveats: "DACH-Banken-Image-Policies verlangen oft RHEL UBI oder Distroless, AI-Defaults wählen Alpine/Debian — interne Base-Image-Allowlist als Kontext mitgeben; SBOM-Erzeugung (CycloneDX) bleibt separat zu verdrahten."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
