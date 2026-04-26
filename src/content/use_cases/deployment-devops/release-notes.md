---
stage: deployment-devops
order: 12
roles:
  - developer
title: "Release-Notes"
goal_label: "Changelogs aus PRs und Commits generieren"
suitability: good_fit
rationale: "GitHub veröffentlicht eine eigene `copilot-release-notes`-Action; GitHub Desktop nutzt sie selbst. Mehrere Engineering-Teams berichten über Claude/GitHub-Actions-Pipelines, die PR-Titel/Body in CHANGELOG-Einträge wandeln."
tools: []  # TODO: nach research-use-case-Lauf befüllen
start_here: "Mit der `github/copilot-release-notes`-Action einen Beta-Release-Draft generieren, gegen die handgepflegte Version diff-prüfen und einen Compliance-Reviewer als Approver setzen."  # Draft aus Discovery — vor Commit prüfen
caveats: "Bei externen Releases (Banken-Apps, Versicherungs-Portale) dürfen Notes keine internen System-/Architektur-Hinweise leaken — Filter-Layer pflicht; PSD2-/regulatorische Hinweis-Pflichten erkennt AI nicht automatisch."
sources: []  # TODO: nach research-use-case-Lauf befüllen
---
