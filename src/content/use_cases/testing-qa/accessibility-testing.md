---
stage: testing-qa
order: 4
roles:
  - software-engineer
  - qa-engineer
title: Accessibility-Testing mit AI
goal_label: WCAG-Findings vorab automatisch finden
suitability: conditional
rationale: axe-core und cypress-axe sind als MIT-lizenzierte OSS ohne Lizenz- oder DPA-Hürde direkt in CI einbindbar und decken den Großteil automatisierbarer WCAG-Findings ab. Mit dem BFSG (ab 28.06.2025) wächst der Handlungsdruck für DACH-Teams auf ein konkretes Datum zu.
tools:
  - id: deque-com-axe-devtools
    fit: good_fit
    sources:
      - id: deque-com-axe-devtools
      - id: reddit-com-r-accessibility
    why_it_fits: "Industriestandard fuer WCAG-Scans mit IGT und axe Assistant (AI-Triage); deckt Browser, IDE, CI ab. SOC2 Type II vorhanden, axe Auditor liefert Enterprise-Reporting fuer BFSG/EAA-Audits. Klarer Hit fuer 'WCAG-Findings vorab automatisch finden'. Einschränkung: AI-Anteil v.a. in IGT/Assistant, Kern bleibt Rule-Engine."
    enterprise_readiness: enterprise_ready
  - id: browserstack-com-accessibility-testing
    fit: good_fit
    sources:
      - id: browserstack-com-accessibility-testing
      - id: reddit-com-r-qualityassurance
    why_it_fits: "Bestehende Cross-Browser-Cloud mit ISO27001/SOC2 und EU-Region; A11y-Modul mit Workflow-Analyzer und AT-Tests. Sinnvoll fuer DACH-Konzerne, die BrowserStack ohnehin im Stack haben. Einschränkung: A11y-Modul juenger als axe/Siteimprove."
    enterprise_readiness: enterprise_ready
  - id: github-com-component-driven-cypress-axe
    fit: good_fit
    sources:
      - id: github-com-component-driven-cypress-axe
      - id: github-com-abhinaba-ghosh-axe-playwright
      - id: reddit-com-r-qualityassurance
    why_it_fits: "Standardpattern fuer A11y-Smoke-Tests in CI; in DACH-Web-Teams hoch verbreitet. Kostenlos, OSS — keine DPA-Probleme. Mit LLM-Tools laesst sich Triage zusaetzlich beschleunigen. Einschränkung: AI nur, wenn extern angeflanscht."
    enterprise_readiness: team_ready
  - id: evinced-com
    fit: good_fit
    sources:
      - id: evinced-com
      - id: news-ycombinator-com-from-site-evinced-com
    why_it_fits: "AI-Native-Plattform mit Computer-Vision-Detection, die strukturelle WCAG-Issues findet, die DOM-Linter uebersehen. SDKs fuer Web/iOS/Android, CI-Integration, Enterprise-Fokus (FS). DACH-Footprint duenn, aber technisch das ambitionierteste AI-Angebot. Einschränkung: Keine sichtbare DACH-Subsidiary; EU-Hosting unklar."
    enterprise_readiness: enterprise_ready
  - id: levelaccess-com
    fit: good_fit
    sources:
      - id: levelaccess-com
      - id: reddit-com-r-accessibility
    why_it_fits: "Enterprise-Plattform mit Continuum-Engine, AI-Triage und EAA/Section-508/ADA-Reporting. Kombiniert Tool und Audit-Service — passend fuer DACH-Konzerne, die externe Auditoren brauchen. Einschränkung: US-zentrische DPA — Schrems-II-/EU-Hosting-Pruefung noetig."
    enterprise_readiness: enterprise_ready
  - id: siteimprove-com-accessibility
    fit: good_fit
    sources:
      - id: siteimprove-com-accessibility
      - id: reddit-com-r-accessibility
    why_it_fits: "EU-Vendor (DK) mit ISO27001 und starker DACH-Praesenz im oeffentlichen Sektor und Konzern-CMS-Umfeld. Automatisierte WCAG-Scans, Monitoring, AI-Priorisierung; BFSG/EAA-Reporting ist Kern-Use-Case. Schrems-II-tauglich. Einschränkung: CMS-/Marketing-Site-fokussiert, SPA-Tiefe schwaecher."
    enterprise_readiness: enterprise_ready
  - id: eye-able-com
    fit: conditional
    sources:
      - id: eye-able-com
    why_it_fits: "Likely missed by market scan because DACH-only player ohne globalen AI-Marketing-Push. Wuerzburger Anbieter mit deutscher UI, Hosting in DE, BFSG-Beratungs-Suite (Audit + Tool). Audit-Modul bietet automatisierte WCAG-Scans; relevant fuer DACH-Mittelstand und oeffentliche Stellen mit DSGVO-Prioritaet. Einschränkung: Bietet auch ein Assist-Widget — Overlay-Kritik teilweise anwendbar; Audit-Teil aber separat bewertbar."
    enterprise_readiness: team_ready
  - id: ibm-com-able-toolkit-tools
    fit: partial
    sources:
      - id: ibm-com-able-toolkit-tools
    why_it_fits: "Likely missed by market scan because tool is positioned as a suite feature in IBMs Able-Toolkit ohne AI-Marketing. OSS, gepflegt durch IBM, Browser-Extension + Karma-/Selenium-Plugin. Fuer DACH-Konzerne mit IBM-Footprint und Compliance-Fokus interessante kostenlose Baseline. Einschränkung: Kein generativer AI-Anteil."
    enterprise_readiness: team_ready
  - id: github-com-dequelabs-axe-core
    fit: good_fit
    sources:
      - id: github-com-dequelabs-axe-core
      - id: craigabbott-co-uk-blog-axe-core-vs-pa11y
      - id: ramotion-com-blog-practical-accessibility-testing-with-pa11y-and-axe-core
    why_it_fits: "MIT-lizenzierte Engine hinter fast allen ernsthaften A11y-Tools. Direkt in CI/Tests einbindbar, axe Linter (VS Code) liefert Pre-Commit-Findings. Pflicht-Baseline auch in DACH-Enterprises — keine Lizenz-/DPA-Frage. Einschränkung: Reine Rule-Engine, kein AI-Anteil."
    enterprise_readiness: team_ready
  - id: accessibilityinsights-io
    fit: good_fit
    sources:
      - id: accessibilityinsights-io
      - id: github-com-microsoft-accessibility-insights-web
      - id: lunoo-com-item-microsoft-accessibility-insights-for-web
    why_it_fits: "OSS von Microsoft, FastPass + Assessment-Workflow, kostenlos. In DACH-Enterprises mit MS-Footprint problemlos einfuehrbar als Baseline. Kein SaaS-Reporting, aber gute Audit-Hilfe. Einschränkung: Keine zentrale Issue-Aggregation ueber Teams; Chromium-only (kein Firefox/WebKit)."
    enterprise_readiness: team_ready
  - id: storybook-js-org-addons-storybook-addon-a11y
    fit: good_fit
    sources:
      - id: storybook-js-org-addons-storybook-addon-a11y
      - id: github-com-storybookjs-storybook-tree-next-code-addons-a11y
      - id: adrianbolonio-com-blog-accessibility-with-storybook
    why_it_fits: "Per-Component-A11y-Findings im Design-System-Workflow — exaktes 'Findings vorab finden' fuer Frontend-Teams. OSS, kostenlos, keine DPA-Frage. Adoptiert von Shopify Polaris und Adobe Spectrum. Einschränkung: Setzt Storybook + Design-System voraus."
    enterprise_readiness: team_ready
  - id: tpgi-com-arc-platform
    fit: good_fit
    sources:
      - id: tpgi-com-arc-platform
      - id: techjockey-com-detail-tpgi-arc-platform
    why_it_fits: "Likely missed by market scan because tool is positioned as a suite feature von einem Screenreader-Hersteller (JAWS) und nicht primaer als 'AI-Tool' beworben. ARC bietet Enterprise-Monitoring, AI-Suggestions und ist von einem Vendor mit hoechster Accessibility-Authority. Relevant, weil JAWS-Tests integriert sind. Einschränkung: AI-Marketing zurueckhaltender als bei Deque/Evinced; kein bekannter DACH-Footprint."
    enterprise_readiness: enterprise_ready
start_here: axe Linter in der IDE aktivieren und cypress-axe bzw. axe-playwright in bestehende E2E-Tests integrieren — das liefert Pre-Commit- und CI-Findings ohne Tooling-Budget. Microsoft Accessibility Insights ergänzt als kostenloser FastPass für geführte manuelle Spot-Checks in Chromium.
caveats: Automatische Scans erfassen nur regelbasiert prüfbare WCAG-Kriterien; semantische Issues wie sinnvoller Alt-Text oder korrekte Tab-Reihenfolge erfordern weiterhin menschliche Beurteilung. Die Tools sind ein Frühwarnsystem, kein Compliance-Nachweis — ein manuelles Audit bleibt erforderlich.
sources: []
---
