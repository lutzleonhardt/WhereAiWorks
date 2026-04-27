---
stage: development
order: 10
roles:
  - software-engineer
  - platform-devops-engineer
title: "Natural-Language Shell und CLI-Operationen"
goal_label: "Shell-Befehle, Git-Operationen und Build-Tasks per Prompt erledigen"
suitability: good_fit
rationale: "Eigener Slot mit etablierten Tools (Warp, GitHub CLI Copilot, Claude Code im Terminal). Praktiker erwähnen das Use Case durchgängig als 'killer feature' bei unbekannten Tools."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit GitHub CLI Copilot ('gh copilot suggest') oder Claude Code im Terminal an unbekannten CLIs (kubectl, awscli, ffmpeg) starten — destruktive Befehle nur mit Dry-Run/Confirm. Für DACH-Banken Warp-Cloud-Submission prüfen oder vermeiden."  # Draft aus Discovery — vor Commit prüfen
caveats: "Halluzinierte Flags landen direkt in der Shell — destruktive Befehle brauchen Bestätigungsschritt. Warp sendet Terminal-Kontext an Cloud — für DACH-Banken oft No-Go ohne Self-Hosted-Variante."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
