
# Where AI Works — Design-Spezifikation

> Technische Design-Entscheidungen für die Umsetzung des MVP. Grundlage: [[AI Wertschöpfungskette — Spezifikation]] und [[AI Wertschöpfungskette — MVP-Definition]].

---

## 1. Designprinzipien

### 1.1 Minimale Dependencies

Jede externe Abhängigkeit muss ihren Platz rechtfertigen. Die einzige Framework-Dependency ist Astro selbst — alles andere wird mit Bordmitteln gelöst. Kein React, kein Vue, kein Svelte, keine Component Library, kein CSS-Framework.

**Begründung:** Der Wert des Projekts liegt in der kuratierten Datenbasis, nicht im Frontend. Das Frontend ist ein Schaufenster — es muss funktionieren und lesbar sein, aber es ist austauschbar. Die Markdown-Dateien und ihr Schema sind die eigentliche Investition.

### 1.2 Statisch zuerst, JS nur wenn unvermeidbar

Astro rendert zur Build-Zeit statisches HTML aus den Markdown-Dateien. JavaScript kommt nur ins Spiel, wenn eine Interaktion nicht mit HTML/CSS allein lösbar ist. Wo JS nötig ist, wird Vanilla JS verwendet — kein Framework, kein Bundler-Setup, kein Build-Step für clientseitigen Code.

**Eskalationspfad für Interaktivität (in dieser Reihenfolge prüfen):**

1. Reines HTML/CSS (Links, `:hover`, `<details>/<summary>`, CSS `:target`, Anchor-Links)
2. Vanilla JS (`<script>`-Tag in der Astro-Seite, Data-Attribute, DOM-Manipulation)
3. Web Components (framework-agnostisch, z.B. via Lit oder Shoelace/Web Awesome)
4. Astro Island mit Framework-Komponente (letzter Ausweg, nur wenn 1–3 nicht reichen)

Im MVP kommen nur Stufe 1 und 2 zum Einsatz.

### 1.3 Kein visuelles Styling in Phase 1

Phase 1 ist funktionales CSS: Layout mit Flexbox/Grid, ein CSS-Reset, lesbare Typografie, sichtbare Klickbereiche. Keine Farben außer der Eignungs-Ampel (grün/gelb/rot), keine Custom Fonts, keine Animationen, keine Transitions, keine Videos, keine Schatten, keine abgerundeten Ecken.

Phase 2 bringt das visuelle Design — aber nur, wenn der Klickflow steht und die Daten stimmen.

**Visuelle Richtung (Phase 2):** Die Stufen-Karten im Atlas sollen als verbundene Pfeile dargestellt werden — im Stil eines klassischen Wertschöpfungsketten-Diagramms (Porter). Jeder Pfeil greift in den nächsten und transportiert sofort die Prozessfluss-Metapher (links nach rechts). Auf Mobile werden die Pfeile vertikal gestapelt (oben nach unten). Umsetzbar mit CSS `clip-path`, kein SVG oder Bild nötig. Kein generisches Kartengitter — die Pfeile machen visuell klar, dass die Stufen eine Sequenz sind, kein loses Set.

**Warum:** Styling-Entscheidungen vor stehendem Content führen zu Nacharbeit. Erst die Struktur validieren, dann hübsch machen.

### 1.4 Mobile-first, responsive by default

Die Seite wird primär über LinkedIn-Links auf Mobilgeräten geöffnet. Responsive ist kein Styling-Feature, sondern eine architektonische Grundannahme.

**Phase 1 (funktionales CSS):** Responsive-fähige Konstrukte von Anfang an — CSS Grid mit `auto-fit` / `minmax()` für die Karten, keine festen Breiten, keine `px`-Layouts. Das ergibt ohne zusätzliche Media Queries ein Layout, das auf Desktop und Mobile funktioniert.

**Phase 2 (visuelles Design):** Breakpoint-Feintuning, Touch-Target-Größen (min. 44x44px), Schriftgrößen-Anpassung, Navigation für Mobile.

**Wichtig:** Die Eignungs-Ampel (Farbcode) darf nie der einzige Informationsträger sein. Immer auch Textlabel ("gut geeignet") neben dem Farbpunkt — für kleine Screens und Accessibility.

### 1.5 Plain Pages, Full-Page-Requests

Keine clientseitigen Route-Transitions. Jeder Navigationslink, jeder Wechsel zwischen Atlas und Finder löst einen normalen HTTP-Request aus. Das ist schnell (statische Dateien), stabil (kein JS-Routing das brechen kann), SEO-freundlich und auf LinkedIn direkt teilbar.

**Ausnahme:** Innerhalb der Atlas-Seite nutzen die Stufen-Karten Anchor-Links + CSS `:target` für Inline-Detailbereiche (siehe 3.1). Das ist kein clientseitiges Routing, sondern native Browser-Mechanik.

### 1.6 Daten sind das Produkt

Das Markdown-Schema ist die wichtigste Designentscheidung des Projekts. Alles andere — Routing, Layout, Interaktivität — leitet sich davon ab. Das Schema muss so klar sein, dass Research-Agents valides Markdown generieren können und Community-Contributors sofort verstehen, wie ein Eintrag aussehen muss.

### 1.7 Interne Tokens sind sprachneutral

Alle internen Bezeichner und Enum-Werte im Schema sind englisch. UI-Labels werden im Frontend lokalisiert. Das verhindert Mischsprache im Code und hält die Tür für spätere Internationalisierung offen.

**Mapping (Schema-Token → UI-Label):**

| Token | Deutsch | English |
|---|---|---|
| `good_fit` | gut geeignet | good fit |
| `conditional` | bedingt geeignet | conditional |
| `partial` | nur Teilaufgaben | partial tasks only |
| `immature` | noch unreif | immature |
| `production` | produktionsreif | production-ready |
| `experimental` | experimentell | experimental |

---

## 2. Architektur

### 2.1 Technologie-Stack

| Komponente | Entscheidung | Begründung |
|---|---|---|
| Framework | Astro | Markdown-native, statischer Output, Zero-JS-Default |
| Datenquelle | Markdown + YAML-Frontmatter in `src/content/` | Versionierbar, community-editierbar, agent-generierbar |
| Schema-Validierung | Zod via Astro Content Collections | Validierung beim Build, bricht bei ungültigem Frontmatter |
| Interaktivität | CSS `:target` + Vanilla JS | Kein Framework-Overhead, ~60 Zeilen JS gesamt |
| Styling (Phase 1) | Reines CSS, kein Framework | Funktions-Layout, kein visuelles Design |
| Hosting | GitHub Pages oder Netlify | Statisch, kostenlos, Custom Domain |
| Versionierung | Git / GitHub | Open Source, PRs für Beiträge |

### 2.2 Projektstruktur

```
where-ai-works/
├── src/
│   ├── content/
│   │   ├── config.ts              # Zod-Schemas für Content Collections
│   │   └── stages/
│   │       ├── product-discovery.md
│   │       ├── development.md
│   │       ├── testing-qa.md
│   │       └── customer-support.md
│   ├── data/
│   │   ├── tools.yaml             # Zentraler Tool-Katalog
│   │   └── roles.yaml             # Rollen-Registry (IDs + Labels)
│   ├── pages/
│   │   ├── index.astro            # Atlas (Hauptseite + Inline-Details)
│   │   ├── finder.astro           # Finder ("Ich bin / Ich will")
│   │   └── stage/
│   │       └── [id].astro         # Stage-Detail (eigene Seite für SEO/Sharing)
│   ├── layouts/
│   │   └── Base.astro             # Gemeinsames Layout (Header, Nav, Footer)
│   ├── components/
│   │   ├── StageCard.astro        # Karte für eine Stufe im Atlas
│   │   ├── StageDetail.astro      # Inline-Detailbereich (Atlas) + Detailseite
│   │   ├── FinderResult.astro     # Ergebnis-Block im Finder
│   │   └── SuitabilityBadge.astro # Eignungs-Ampel (grün/gelb/rot)
│   ├── scripts/
│   │   ├── atlas.js               # Vanilla JS: Rollen-Filter + Hash-Reset
│   │   └── finder.js              # Vanilla JS: Finder-Logik
│   └── styles/
│       └── global.css             # Reset + Basis-Layout
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── package.json
└── README.md
```

**Hinweis:** `src/content/` ist der Astro-Pfad für Content Collections (mit Zod-Validierung). `src/data/` enthält statische Referenzdaten (Tools, Rollen), die als einfache YAML-Dateien importiert werden. Die übergeordnete Spec spricht von `data/` — gemeint ist in der Implementierung immer `src/content/` für Stages und `src/data/` für Referenzdaten.

### 2.3 Routing

Drei Routen, alle statisch zur Build-Zeit generiert:

| Route | Datei | Inhalt | JS |
|---|---|---|---|
| `/` | `index.astro` | Atlas mit Karten + Inline-Detailbereiche + Rollen-Filter | `atlas.js` (~40 Zeilen) |
| `/finder` | `finder.astro` | Zwei Dropdowns + Ergebnis-Block | `finder.js` (~60 Zeilen) |
| `/stage/[id]` | `stage/[id].astro` | Eigenständige Stage-Detailseite (SEO, Sharing, Deep Links) | Null |

Astro generiert beim Build für jede Stage eine eigene HTML-Datei (`/stage/testing-qa/index.html` etc.) via `getStaticPaths()`. Der Slug kommt direkt aus dem Dateinamen (kein Nummern-Prefix — die Sortierung übernimmt das `order`-Feld im Frontmatter). Die Detailseiten sind die **kanonischen URLs** für Suchmaschinen und Social Sharing.

---

## 3. Interaktivitäts-Konzept

### Leitprinzip: Atlas-first, detail-inline, page-backed

Der Atlas ist die primäre Interaktionsfläche. Beim Klick auf eine Stufe wird der zugehörige Detailbereich auf derselben Seite per Anchor-Link und CSS `:target` eingeblendet — der Nutzer verlässt die Landkarte nicht. Zusätzlich existiert jede Stufe als eigenständige Detailseite unter `/stage/[id]` für direkte Verlinkung, SEO und Sharing.

Dasselbe `StageDetail.astro`-Component rendert den Inhalt an beiden Stellen — einmal eingebettet im Atlas, einmal als eigene Seite. Eine Datenquelle, zwei Projektionen.

### 3.1 Atlas — Inline-Detailbereiche via CSS `:target`

**Was passiert:** User klickt auf eine Stufen-Karte. Der Browser springt zum Detailbereich unterhalb der Karten. CSS `:target` blendet genau diesen Bereich ein. Alle anderen Detailbereiche bleiben verborgen.

**Implementierung:** Kein Island, kein Framework, kein JavaScript für die Detail-Anzeige selbst.

Jede Stufen-Karte ist ein Anchor-Link:

```html
<!-- Von Astro zur Build-Zeit gerendert -->
<a href="#stage-testing-qa" class="stage-card"
   data-roles="qa-engineer,developer">
  <h3>Testing & QA</h3>
  <span class="suitability good-fit">gut geeignet</span>
  <p>Testfall-Generierung aus User Stories oder bestehendem Code</p>
</a>
```

Unterhalb der Karten: ein Detailbereich pro Stage, initial versteckt:

```html
<div id="atlas" class="detail-area">

  <p class="detail-hint">Wähle eine Stufe, um Details zu sehen.</p>

  <section id="stage-testing-qa" class="stage-detail">
    <a href="#atlas" class="close-detail">✕ Schließen</a>
    <!-- StageDetail.astro rendert hier den vollen Inhalt -->
    <a href="/stage/testing-qa">Eigene Seite öffnen →</a>
  </section>

  <section id="stage-development" class="stage-detail">
    <!-- ... -->
  </section>

  <!-- weitere Stages -->

</div>
```

CSS:

```css
.stage-detail {
  display: none;
  scroll-margin-top: 4rem;  /* Scroll-Korrektur falls Header klebt */
}
.stage-detail:target {
  display: block;
}
/* Hint ausblenden wenn ein Target aktiv ist */
.detail-hint:has(~ .stage-detail:target) {
  display: none;
}
```

**Anfangszustand:** Kein Detail offen. Stattdessen ein neutraler Hinweis: "Wähle eine Stufe, um Details zu sehen."

**Schließen:** Der Link `href="#atlas"` targetiert den umschließenden Container. Kein Stage-Target aktiv → alle Detailbereiche versteckt, Hinweistext wieder sichtbar.

**Browser-History:** Jeder Karten-Klick erzeugt einen Hash-Wechsel. Der Zurück-Button springt durch die zuletzt geöffneten Stages — bei einem Atlas ist das intuitives Verhalten.

**Skalierung:** Bei 4 Stufen im MVP sind das ~20 KB extra HTML auf der Atlas-Seite. Bei 10+ Stufen in späteren Phasen muss geprüft werden, ob die Seite zu schwer wird. Ggf. dann auf reine Verlinkung zu `/stage/[id]` umstellen.

### 3.2 Atlas — Rollen-Filter

**Was passiert:** User wählt eine Rolle im Dropdown. Karten, die für diese Rolle nicht relevant sind, werden ausgegraut. Bei "Alle" werden alle Karten normal angezeigt. **Beim Filterwechsel wird ein offener Detailbereich geschlossen**, weil er möglicherweise nicht mehr zur Filterauswahl passt.

**Implementierung:** Vanilla JS (`atlas.js`), Data-Attribute auf den Karten:

```js
const filter = document.getElementById('role-filter');
const cards = document.querySelectorAll('.stage-card');

filter.addEventListener('change', (e) => {
  const role = e.target.value;

  // Karten filtern
  cards.forEach(card => {
    const roles = card.dataset.roles.split(',');
    if (role === 'all' || roles.includes(role)) {
      card.classList.remove('dimmed');
    } else {
      card.classList.add('dimmed');
    }
  });

  // Offenen Detailbereich schließen
  window.location.hash = '#atlas';
});
```

Das ist die gesamte Interaktivität der Atlas-Seite: ~15 Zeilen für den Filter, der Rest macht CSS `:target`.

### 3.3 Finder — Abhängige Dropdowns

**Was passiert:** User wählt Rolle in Dropdown A. Dropdown B zeigt nur die Use Cases, die zu dieser Rolle gehören (als `goal_label`-Formulierungen). Nach Auswahl beider erscheint der Ergebnis-Block.

**Implementierung:** Astro generiert zur Build-Zeit ein JSON-Objekt mit allen Use Cases und bettet es inline in die Seite ein:

```html
<!-- Von Astro zur Build-Zeit gerendert -->
<script define:vars={{ useCaseData }}>
  window.__FINDER_DATA__ = useCaseData;
</script>
```

**Datentransformation:** Astro löst zur Build-Zeit die Rohdaten auf — Tool-IDs werden mit den Tool-Stammdaten (Name, Maturity, URL) aus `tools.yaml` angereichert, Suitability- und Fit-Enums zu UI-Labels aufgelöst, und jeder Use Case bekommt die Stage-Infos seiner Eltern-Stage mitgegeben. Das resultierende JSON hat diese Form:

```typescript
// Shape des transformierten Finder-JSON (generiert in finder.astro)

interface FinderSource {
  label: string;
  url?: string;
  type: string;              // "study" | "case_study" | "vendor" | "community"
}

interface FinderTool {
  id: string;                // "blinqio"
  name: string;              // "BlinqIO" (aus tools.yaml)
  maturity: string;          // "production" (aus tools.yaml)
  url: string;               // "https://blinq.io" (aus tools.yaml)
  fit?: string;              // "good_fit" | "conditional" | ... (optional)
  fit_label?: string;        // "gut geeignet" (UI-Label, nur wenn fit gesetzt)
  note?: string;             // 1 Satz tool-spezifischer Kontext
  sources?: FinderSource[];  // Tool-spezifische Evidenz (optional)
}

interface FinderUseCase {
  id: string;                // "testing-qa:test-generation"
  roles: string[];           // ["qa-engineer", "developer"]
  goal_label: string;        // "Tests schneller erstellen"
  stage_id: string;          // "testing-qa" (von Eltern-Stage)
  stage_name: string;        // "Testing & QA" (von Eltern-Stage)
  suitability: string;       // "good_fit" (Use-Case-Eignung, Enum-Wert)
  suitability_label: string; // "gut geeignet" (aufgelöstes UI-Label)
  rationale: string;
  tools: FinderTool[];       // Angereichert mit Stammdaten + fit/note/sources
  start_here: string;
  caveats: string;
  sources: FinderSource[];   // Use-Case-weite Evidenz
}
```

Das Script `finder.js` liest das transformierte JSON und steuert die Dropdowns:

```js
const data = window.__FINDER_DATA__;
const roleSelect = document.getElementById('finder-role');
const goalSelect = document.getElementById('finder-goal');
const resultBlock = document.getElementById('finder-result');

roleSelect.addEventListener('change', () => {
  const role = roleSelect.value;
  const goals = data.filter(uc => uc.roles.includes(role));
  goalSelect.innerHTML = '<option value="">Ziel wählen...</option>' +
    goals.map(g => `<option value="${g.id}">${g.goal_label}</option>`).join('');
  goalSelect.disabled = false;
  resultBlock.hidden = true;
});

goalSelect.addEventListener('change', () => {
  const uc = data.find(d => d.id === goalSelect.value);
  if (!uc) return;
  resultBlock.querySelector('.result-stage').textContent = uc.stage_name;
  resultBlock.querySelector('.result-suitability').textContent = uc.suitability_label;
  // Tools als kompakte Liste: pro Tool eine Zeile mit Name, optional Fit-Label und Note.
  // Tool-spezifische Quellen werden als dezenter Zusatz angehängt.
  resultBlock.querySelector('.result-tools').innerHTML = uc.tools.map(t => {
    const fit = t.fit_label ? ` <span class="fit ${t.fit}">${t.fit_label}</span>` : '';
    const note = t.note ? ` — ${t.note}` : '';
    const toolSources = (t.sources || []).map(s => s.url
      ? `<a href="${s.url}" target="_blank">${s.label}</a>`
      : s.label).join(', ');
    const sources = toolSources ? ` <small>(${toolSources})</small>` : '';
    return `<li><a href="${t.url}" target="_blank">${t.name}</a>${fit}${note}${sources}</li>`;
  }).join('');
  resultBlock.querySelector('.result-rationale').textContent = uc.rationale;
  resultBlock.querySelector('.result-start').textContent = uc.start_here;
  resultBlock.querySelector('.result-caveats').textContent = uc.caveats;
  const sourcesList = resultBlock.querySelector('.result-sources');
  sourcesList.innerHTML = uc.sources
    .map(s => s.url
      ? `<li><a href="${s.url}" target="_blank">${s.label}</a> (${s.type})</li>`
      : `<li>${s.label} (${s.type})</li>`)
    .join('');
  resultBlock.querySelector('.result-atlas-link').href = `/#stage-${uc.stage_id}`;
  resultBlock.hidden = false;
});
```

Keine externe Dependency, kein Fetch, kein async. Die Daten sind schon da, bereits aufgelöst.

### 3.4 Stage-Detail (`/stage/[id]`) — Null Interaktivität

Die eigenständige Detail-Seite ist komplett statisches HTML. Alle Inhalte werden zur Build-Zeit aus der Markdown-Datei gerendert. Sie dient als kanonische URL für SEO, LinkedIn-Sharing und direkte Verlinkung. Navigation zurück zum Atlas ist ein normaler `<a>`-Link. Kein JavaScript.

### 3.5 Zusammenfassung Interaktivität

| Stelle | Technik | JS |
|---|---|---|
| Inline-Details im Atlas | CSS `:target` + Anchor-Links | 0 Zeilen |
| Rollen-Filter (Atlas) | Vanilla JS + Data-Attribute + Hash-Reset | ~15 Zeilen |
| Finder (Dropdowns + Ergebnis) | Vanilla JS + inline JSON | ~45 Zeilen |
| Hover-Tooltips (Atlas) | Reines CSS (`:hover`) | 0 Zeilen |
| Stage-Detailseite | Statisches HTML | 0 Zeilen |
| Navigation | `<a>`-Links, Full-Page-Requests | 0 Zeilen |

**Gesamtes clientseitiges JS im MVP: ~60 Zeilen in 2 Dateien.** Keine externe Dependency.

---

## 4. Datenmodell und Schema-Validierung

### 4.1 Warum Zod + Astro Content Collections

Astro Content Collections erlauben es, ein Zod-Schema für jede Collection zu definieren. Beim Build wird jede Markdown-Datei gegen das Schema validiert. Wenn ein Pflichtfeld fehlt oder ein Wert ungültig ist, bricht der Build ab und zeigt eine klare Fehlermeldung.

Das löst drei Probleme gleichzeitig: Datenqualität (keine kaputten Einträge auf der Website), Dokumentation (das Schema *ist* die Dokumentation des Datenmodells), und Agent-Kompatibilität (ein Research-Agent bekommt das Schema als Kontext und generiert valide Dateien).

### 4.1.1 Zwei Ebenen von Eignung (Use Case vs. Tool)

Das Schema trennt zwei **unterschiedliche Fragen** bewusst in zwei Felder:

| Feld | Ebene | Frage | Beispiel |
|---|---|---|---|
| `suitability` | Use Case | **Ist AI für diese Art von Aufgabe sinnvoll?** | „Code-Completion" → `good_fit`. „Autonome Feature-Entwicklung" → `conditional`. |
| `fit` | Tool-im-Use-Case | **Wie gut passt dieses konkrete Tool für diesen Use Case?** | Für „Testfall-Generierung": BlinqIO → `good_fit`, Copilot → `partial` (nur Unit-Tests). |

Die Use-Case-Suitability ist das redaktionelle Kern-Urteil des Projekts (*„Wo schafft AI Mehrwert — und wo nicht?"*). Tool-level `fit` ist die nachgelagerte Ausführungs-Frage und **optional** — ohne Angabe gilt die Use-Case-Suitability auch für das Tool.

Entsprechend werden auch Quellen auf beiden Ebenen modelliert: globale Evidenz (z.B. METR-Studie zu Produktivitätseffekten) gehört zum Use Case, tool-spezifische Evidenz (z.B. RedHat→BlinqIO-Case-Study) hängt am Tool.

### 4.2 Schema-Definition (`src/content/config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';
import roles from '../data/roles.yaml';
import tools from '../data/tools.yaml';

// --- Enums (sprachneutral, UI-Labels werden im Frontend gemappt) ---

const suitabilityEnum = z.enum([
  'good_fit',       // gut geeignet
  'conditional',    // bedingt geeignet
  'partial',        // nur Teilaufgaben
  'immature',       // noch unreif
]);

const maturityEnum = z.enum([
  'production',     // produktionsreif
  'experimental',   // experimentell
]);

const sourceTypeEnum = z.enum([
  'study',          // Wissenschaftliche Studie / unabhängige Untersuchung
  'case_study',     // Dokumentierter Praxisbericht
  'vendor',         // Herstellerangabe (mit Vorsicht zu bewerten)
  'community',      // Community-Erfahrung / Praxisbericht
]);

// --- Rollen-IDs (abgeleitet aus roles.yaml — Single Source of Truth) ---

const roleIds = roles.map(r => r.id) as [string, ...string[]];
const roleEnum = z.enum(roleIds);

// --- Tool-IDs (abgeleitet aus tools.yaml — Build bricht bei unbekannter ID) ---

const toolIds = tools.map(t => t.id) as [string, ...string[]];
const toolIdEnum = z.enum(toolIds);

// --- Quelle (strukturiert, nicht nur ein String) ---

const sourceSchema = z.object({
  label: z.string(),               // Anzeigename ("RedHat Case Study 2025")
  url: z.string().url().optional(), // Link zur Quelle (optional für offline-Quellen)
  type: sourceTypeEnum,             // Art der Evidenz
});

// --- Tool-Eintrag innerhalb eines Use Case ---
// Nicht zu verwechseln mit dem Tool-Stammsatz in src/data/tools.yaml.
// Dort wohnen Name, URL, Maturity, Pricing. Hier wird das Tool *im Kontext
// dieses Use Cases* angereichert: Fit, Kurznote, tool-spezifische Quellen.

const useCaseToolSchema = z.object({
  id: toolIdEnum,                         // Referenz auf tools.yaml
  fit: suitabilityEnum.optional(),        // Fit dieses Tools für DIESEN Use Case.
                                          // Ohne Angabe: Use-Case-Suitability gilt auch
                                          // für das Tool (kein Sonder-Urteil nötig).
  note: z.string().optional(),            // 1 Satz tool-spezifischer Kontext
                                          // ("BDD-Tests aus User Stories", nicht "Copilot
                                          // ist ein AI-Tool für Entwickler").
  sources: z.array(sourceSchema).optional(), // Tool-spezifische Evidenz. Globale
                                             // Evidenz bleibt in useCaseSchema.sources.
});

// --- Use Case (eingebettet im Stage-Frontmatter) ---

const useCaseSchema = z.object({
  id: z.string(),                        // Global eindeutig: "testing-qa:test-generation"
  roles: z.array(roleEnum),              // Welche Rollen betrifft das?
  title: z.string(),                     // Interner Name ("Testfall-Generierung")
  goal_label: z.string(),                // Nutzerformulierung ("Tests schneller erstellen")
  suitability: suitabilityEnum,          // AI-Eignung der Aufgabe (ist AI hier sinnvoll?)
  rationale: z.string(),                 // 1–2 Sätze: WARUM diese Eignung?
  tools: z.array(useCaseToolSchema),     // Tools im Use-Case-Kontext (mit optionalem Fit,
                                         // Note und tool-spezifischen Quellen). Build
                                         // bricht bei unbekannter Tool-ID.
  start_here: z.string(),                // Eine kuratierte Einstiegsempfehlung
                                         // (meist auf 1–2 der Tools zugeschnitten)
  caveats: z.string(),                   // Grenzen der Aufgabe (aktivitätsbezogen;
                                         // tool-spezifische Eigenheiten gehören in tool.note)
  sources: z.array(sourceSchema),        // Use-Case-weite Evidenz (z.B. Studien zu
                                         // Produktivitätseffekten allgemein)
});

// --- Stage (Wertschöpfungsstufe) ---

const stages = defineCollection({
  type: 'content',
  schema: z.object({
    // Kein `id`-Feld — Astro liefert den Slug automatisch aus dem Dateinamen.
    // Datei `testing-qa.md` → slug: "testing-qa" → Route: /stage/testing-qa
    // Der Slug ist kanonisch für Routing, Anchor-Links und Use-Case-Compound-IDs.
    name: z.string(),                  // Anzeigename ("Testing & QA")
    type: z.enum(['primary', 'support']),
    order: z.number().int().min(1).max(20), // Explizite Sortierung (Dateinamen-Reihenfolge nicht garantiert)
    challenge: z.string(),             // 1-Satz-Herausforderung
    top_use_case: z.string(),          // Bester Use Case (Kurzform)
    suitability: suitabilityEnum,      // Gesamteignung der Stufe
    roles: z.array(roleEnum),          // Relevante Rollen
    use_cases: z.array(useCaseSchema), // Use Cases als strukturiertes Array
  }),
});

export const collections = { stages };
```

**Referenz-Integrität — alles zur Build-Zeit validiert:**

- **Rollen:** `roleEnum` wird aus `roles.yaml` abgeleitet (Single Source of Truth). Ein Typo wie `"qa"` statt `"qa-engineer"` bricht den Build.
- **Tools:** `toolIdEnum` wird aus `tools.yaml` abgeleitet. Eine unbekannte Tool-ID in einem Use Case bricht den Build.
- **Use-Case-IDs:** Global eindeutig durch Compound Keys (`stage-id:use-case-id`).
- **Keine doppelte Wahrheit:** Rollen und Tools werden an genau einer Stelle definiert (YAML), das Zod-Schema leitet die Enums daraus ab.

### 4.3 Stage-Datei: Format

Jede Stage-Datei hat ihr gesamtes Datenmodell im YAML-Frontmatter. Der Markdown-Body ist für den redaktionellen Langtext ("Womit anfangen", "Grenzen") reserviert.

**Beispiel: `src/content/stages/testing-qa.md`**

```markdown
---
# Slug abgeleitet aus Dateiname: testing-qa → Route: /stage/testing-qa
name: "Testing & QA"
type: "primary"
order: 3
challenge: "Test-Maintenance kostet enorm viel Zeit — AI kann hier massiv entlasten"
top_use_case: "Testfall-Generierung aus User Stories oder bestehendem Code"
suitability: "good_fit"
roles:
  - qa-engineer
  - developer
use_cases:
  - id: "testing-qa:test-generation"
    roles:
      - qa-engineer
      - developer
    title: "Testfall-Generierung"
    goal_label: "Tests schneller erstellen"
    suitability: "good_fit"
    rationale: "AI kann aus User Stories, Code und Specs automatisch Testfälle ableiten. Der Effekt ist bei BDD-Tests am stärksten, weil die natürlichsprachliche Vorlage gut als Prompt funktioniert."
    tools:
      - id: blinqio
        fit: "good_fit"
        note: "BDD-Tests aus User Stories; bei passendem Setup 10x schnellere Erstellung berichtet."
        sources:
          - label: "RedHat Case Study: BlinqIO-Integration"
            url: "https://example.com/redhat-blinqio"
            type: "case_study"
      - id: copilot
        fit: "partial"
        note: "Unit-Tests aus bestehendem Code. Keine vollständige Testsuite-Generierung aus Stories."
    start_here: "BlinqIO: BDD-Tests aus User Stories generieren. Alternativ: Copilot für Unit-Tests aus bestehendem Code — niedrigere Einstiegshürde."
    caveats: "Human Review empfohlen. Generierte Tests decken primär Happy Path ab — Edge Cases brauchen menschliche Expertise."
    sources:
      - label: "METR RCT 2025: Produktivitätseffekte von AI-Coding-Tools"
        url: "https://example.com/metr-2025"
        type: "study"

  - id: "testing-qa:visual-regression"
    roles:
      - qa-engineer
    title: "Visual Regression Testing"
    goal_label: "UI-Fehler automatisch erkennen"
    suitability: "good_fit"
    rationale: "Pixel-basierter Vergleich von Screenshots ist eine ideale AI-Aufgabe — klar definiert, wiederholbar, mit wenig Interpretationsspielraum."
    tools:
      - id: applitools
        # kein fit angegeben → Use-Case-Suitability (good_fit) gilt auch für das Tool
        note: "CI-Integration über Eyes-SDK; Baseline-basierter Screenshot-Vergleich."
        sources:
          - label: "Applitools Customer Reports"
            url: "https://applitools.com/customers"
            type: "vendor"
    start_here: "Applitools Eyes in bestehende CI-Pipeline integrieren. Vergleicht Screenshots automatisch gegen Baseline."
    caveats: "Funktioniert am besten bei stabilen Layouts. Bei häufigen Design-Änderungen hohe Baseline-Pflege."
    sources: []

  - id: "testing-qa:self-healing"
    roles:
      - qa-engineer
    title: "Self-healing / Test-Maintenance"
    goal_label: "Weniger Zeit mit kaputten Tests verbringen"
    suitability: "good_fit"
    rationale: "AI erkennt geänderte Selektoren und passt Tests automatisch an. Das eliminiert einen großen Teil der manuellen Test-Maintenance."
    tools:
      - id: mabl
        fit: "good_fit"
        note: "E2E-Tests mit automatischer Selector-Anpassung."
      - id: blinqio
        fit: "conditional"
        note: "Self-healing ist Sekundärfunktion, weniger ausgeprägt als bei Mabl."
    start_here: "Mabl für E2E-Tests einsetzen. Erkennt Selector-Änderungen und passt Tests automatisch an."
    caveats: "Reduziert Maintenance, ersetzt aber nicht das Verständnis der Testlogik. Funktioniert bei Selector-Änderungen, nicht bei Logik-Änderungen."
    sources:
      - label: "Mabl Platform Documentation"
        url: "https://mabl.com/docs"
        type: "vendor"
---

## Womit anfangen?

Copilot für Unit-Test-Generierung aus bestehendem Code. Niedrigstes Risiko, sofort spürbar, keine neue Toolchain nötig. Alternativ BlinqIO für BDD-Tests, wenn User Stories als Ausgangsbasis vorhanden sind.

## Grenzen

- Generierte Tests sind nur so gut wie der Kontext (Code, Stories, Specs)
- Edge Cases und Sicherheits-Tests erfordern menschliche Expertise
- Self-healing funktioniert bei Selector-Änderungen, nicht bei Logik-Änderungen
```

### 4.4 Tool-Katalog: Format

Tools werden zentral in `src/data/tools.yaml` gepflegt und per ID aus den Use Cases referenziert. Im MVP eine Sammeldatei; bei Wachstum auf eine Datei pro Tool umstellbar.

**Datei: `src/data/tools.yaml`**

```yaml
- id: copilot
  name: "GitHub Copilot"
  category: coding
  url: "https://github.com/features/copilot"
  maturity: production
  pricing: "$10–19/User/Monat"

- id: blinqio
  name: "BlinqIO"
  category: testing
  url: "https://blinq.io"
  maturity: production
  pricing: "auf Anfrage"

- id: applitools
  name: "Applitools"
  category: testing
  url: "https://applitools.com"
  maturity: production
  pricing: "auf Anfrage"

- id: mabl
  name: "Mabl"
  category: testing
  url: "https://mabl.com"
  maturity: production
  pricing: "auf Anfrage"
```

### 4.5 Rollen-Registry: Format

Rollen-IDs und ihre Anzeigenamen sind zentral in `src/data/roles.yaml` definiert. Die Zod-`roleEnum` in `config.ts` muss mit dieser Datei synchron gehalten werden.

**Datei: `src/data/roles.yaml`**

```yaml
- id: product-owner
  name: "Product Manager / PO"
  aliases: ["Product Owner", "PM"]

- id: developer
  name: "Senior Developer"
  aliases: ["Full-Stack Dev", "Backend Engineer", "Frontend Engineer"]

- id: qa-engineer
  name: "QA Engineer"
  aliases: ["SDET", "Test Engineer", "Test Manager"]

- id: support-agent
  name: "Support Lead / Support Agent"
  aliases: ["Customer Support", "Help Desk"]
```

### 4.6 Validierungs-Flow

```
Community-PR oder Agent-Output
        │
        ▼
  Markdown-Datei in src/content/stages/ (Dateiname ohne Nummern-Prefix)
        │
        ▼
  `astro build` / `astro dev`
        │
        ▼
  Zod validiert Frontmatter:
  - Pflichtfelder vorhanden?
  - Enums gültig? (suitability, source type)
  - Rollen-IDs bekannt? (abgeleitet aus roles.yaml)
  - Tool-IDs bekannt? (abgeleitet aus tools.yaml)
  - Use-Case-IDs eindeutig?
        │
   ┌────┴────┐
   │         │
 Valid    Invalid
   │         │
   ▼         ▼
 Build     Build bricht ab,
 OK        klare Fehlermeldung
```

**Optional als ergänzendes Lint-Script:**
- Duplicate-Check über alle Use-Case-IDs hinweg
- Orphaned Tools (in `tools.yaml` aber nirgends referenziert)
- Orphaned Roles (in `roles.yaml` aber nirgends referenziert)

---

## 5. Seitenstruktur und Layout

### 5.1 Gemeinsames Layout (`Base.astro`)

Jede Seite teilt sich: Header mit Projektname + Navigation (Atlas | Finder), Content-Bereich, Footer mit GitHub-Link + Lizenz. Kein Hamburger-Menü — bei zwei Navigationspunkten reicht eine horizontale Leiste.

### 5.2 Atlas (`/`) — Hauptseite

```
┌─────────────────────────────────────────────┐
│  Where AI Works                              │
│  Atlas | Finder                              │
├─────────────────────────────────────────────┤
│                                              │
│  Where does AI create real value in          │
│  software companies — and where not?         │
│                                              │
│  Rolle: [Alle ▾]                             │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │Product   │ │Develop-  │ │Testing   │ .. │
│  │Discovery │ │ment      │ │& QA      │    │
│  │ ● gut    │ │ ● gut    │ │ ● gut    │    │
│  │          │ │          │ │          │    │
│  │ Top:     │ │ Top:     │ │ Top:     │    │
│  │ Feedback-│ │ Code-    │ │ Testfall-│    │
│  │ Synthese │ │ Complet. │ │ Generie- │    │
│  │          │ │          │ │ rung     │    │
│  └──────────┘ └──────────┘ └──────────┘    │
│   Karten sind Anchor-Links: href="#stage-…" │
│                                              │
├─── Inline-Detailbereich ────────────────────┤
│                                              │
│  (Anfangszustand:)                           │
│  Wähle eine Stufe, um Details zu sehen.      │
│                                              │
│  (Nach Klick auf "Testing & QA":)            │
│                                              │
│  Testing & QA                     ✕ Schließen│
│  ● gut geeignet                              │
│                                              │
│  "Test-Maintenance kostet enorm viel Zeit    │
│   — AI kann hier massiv entlasten"           │
│                                              │
│  ─── Use Cases ───                           │
│                                              │
│  Testfall-Generierung                        │
│  Eignung: gut                                │
│  Warum: "AI kann aus User Stories autom.…"   │
│                                              │
│  Tools:                                      │
│   · BlinqIO ● gut — BDD-Tests aus User      │
│     Stories; 10x berichtet (RedHat Study)    │
│   · Copilot ● teilweise — Unit-Tests aus    │
│     bestehendem Code; keine Story-→-Suite    │
│                                              │
│  Einstieg: "BlinqIO: BDD-Tests aus …"       │
│  Quellen: METR 2025 (study)                  │
│                                              │
│  ─── Womit anfangen? ───                     │
│  ─── Grenzen ───                             │
│                                              │
│  → Eigene Seite öffnen                       │
│  ↑ Zurück zum Atlas                          │
│                                              │
├─────────────────────────────────────────────┤
│  GitHub · MIT + CC-BY-SA                     │
└─────────────────────────────────────────────┘
```

### 5.3 Stage-Detail (`/stage/[id]`) — Eigenständige Seite

Identischer Inhalt wie der Inline-Detailbereich, aber als eigene Seite mit vollständiger URL. Dient als kanonische URL für SEO, LinkedIn-Sharing und direktes Verlinken.

```
┌─────────────────────────────────────────────┐
│  Where AI Works                              │
│  Atlas | Finder                              │
├─────────────────────────────────────────────┤
│  ← Zurück zum Atlas                         │
│                                              │
│  Testing & QA                                │
│  ● gut geeignet                              │
│                                              │
│  (gleicher Inhalt wie Inline-Detail)         │
│                                              │
├─────────────────────────────────────────────┤
│  GitHub · MIT + CC-BY-SA                     │
└─────────────────────────────────────────────┘
```

### 5.4 Finder (`/finder`)

```
┌─────────────────────────────────────────────┐
│  Where AI Works                              │
│  Atlas | Finder                              │
├─────────────────────────────────────────────┤
│                                              │
│  Kann AI mir helfen?                         │
│                                              │
│  Ich bin:   [Rolle wählen     ▾]             │
│  Ich will:  [Ziel wählen      ▾]  (disabled) │
│                                              │
│  ─── Ergebnis (erscheint nach Auswahl) ───  │
│                                              │
│  Stufe: Testing & QA                         │
│         → Im Atlas anzeigen                  │
│  Eignung: ● gut geeignet                     │
│  Warum: "AI kann aus User Stories…"          │
│                                              │
│  Empfohlene Tools:                           │
│   · BlinqIO ● gut — BDD aus User Stories    │
│     (RedHat Case Study)                      │
│   · Copilot ● teilweise — Unit-Tests aus    │
│     bestehendem Code                         │
│                                              │
│  Womit anfangen?                             │
│  "BlinqIO: BDD-Tests aus User Stories..."    │
│                                              │
│  Vorsicht:                                   │
│  "Human Review empfohlen..."                 │
│                                              │
│  Quellen:                                    │
│  METR 2025 (study)                           │
│                                              │
├─────────────────────────────────────────────┤
│  GitHub · MIT + CC-BY-SA                     │
└─────────────────────────────────────────────┘
```

---

## 6. Datenfluss

### 6.1 Build-Zeit (Astro)

```
Markdown (src/content/stages/*.md) + YAML (src/data/*.yaml)
        │
        ▼
Astro Content Collections + Zod-Validierung
        │
        ▼
Astro-Pages lesen Collections via getCollection('stages')
        │
        ├──→ index.astro:
        │      Rendert Karten (Anchor-Links mit data-roles)
        │      Rendert Inline-Detailbereiche (hidden, via :target)
        │
        ├──→ stage/[id].astro:
        │      Rendert eigenständige Detailseite pro Stage
        │      (gleiche StageDetail.astro-Komponente)
        │
        └──→ finder.astro:
               Transformiert Use Cases:
               - Tool-Einträge werden mit Stammdaten aus tools.yaml
                 (Name, Maturity, URL) angereichert.
               - Suitability- und Fit-Enums werden zu UI-Labels aufgelöst.
               - Eltern-Stage-Infos werden mitgegeben.
               Serialisiert als inline JSON für finder.js.
```

### 6.2 Laufzeit (Browser)

```
Atlas — Karten-Klick:
  <a href="#stage-testing-qa"> → Browser scrollt → CSS :target zeigt Sektion

Atlas — Rollen-Filter:
  <select> change → atlas.js → toggleClass auf .stage-card
                             → window.location.hash = '#atlas' (Detail schließen)

Atlas — Detail schließen:
  <a href="#atlas"> → CSS :target entfällt → alle Sektionen hidden

Finder:
  <select> change → finder.js → liest window.__FINDER_DATA__ → DOM-Update

Stage-Detailseite:
  Kein JS. Statisches HTML.
```

---

## 7. Zukunftssicherung

### 7.1 Eskalationspfad bei wachsender Interaktivität

Wenn in Phase 2/3 komplexere Interaktionen nötig werden (Kontext-Filter, Reifegrad-Matrix, LLM-Finder):

1. Prüfen ob natives HTML reicht (`<details>`, `<dialog>`, `<datalist>`)
2. Prüfen ob Vanilla JS mit mehr Struktur reicht (Module, Event-Delegation)
3. Web Components einsetzen (framework-agnostisch, kapseln eigenen DOM)
4. Astro Island mit leichtgewichtigem Framework (Preact, Svelte) als letzte Option

### 7.2 Schema-Evolution

Das Use-Case-Schema hat bewusst optionale Felder vorgesehen, die latent schon angelegt werden können:

| Feld | Status | Beschreibung |
|---|---|---|
| `human_review` | Phase 2 | `not_needed` / `recommended` / `required` |
| `data_sensitivity` | Phase 2 | `low` / `medium` / `high` |
| `regulation` | Phase 2 | `uncritical` / `gdpr_relevant` / `ai_act_relevant` |
| `automation_level` | Phase 2 | `full` / `partial` / `assist_only` |

Diese Felder sind in der vollständigen Spec (Abschnitt 8, Governance-Dimension) bereits definiert. Im MVP-Schema werden sie als `z.optional()` ergänzt, sobald die erste Stage sie nutzt.

### 7.3 Agent-generierter Content

Das Zod-Schema in `config.ts` dient als Prompt-Kontext für Research-Agents. Ein Agent bekommt das Schema, recherchiert einen Use Case und generiert eine valide Markdown-Datei. Der Build validiert das Ergebnis automatisch.

Workflow: Agent generiert `.md` → PR auf GitHub → CI-Build validiert Schema → Maintainer reviewt Inhalt → Merge.

### 7.4 Community-Beiträge

Contributor öffnet eine Stage-Datei, sieht das YAML-Schema als Vorlage, fügt einen Use Case hinzu, schickt PR. Der Build validiert. Kein Wissen über Astro oder Frontend nötig — nur Markdown und YAML.

### 7.5 Skalierung der Atlas-Inline-Details

Bei 4 Stufen (MVP) sind die Inline-Detailbereiche unproblematisch (~20 KB HTML). Bei 10+ Stufen mögliche Maßnahmen:

- Nur gekürzte Details inline, vollständiger Inhalt auf Detailseite
- Lazy-Loading der Detail-Sektionen (würde JS erfordern)
- Komplett auf Detailseiten umstellen (Inline-Details entfernen)

Entscheidung fällt, wenn die Datenbasis tatsächlich wächst.

---

## 8. Offene Entscheidungen

- [ ] Sprache: Englisch (internationaler) oder Deutsch (näher an Zielgruppe Mittelstand)?
- [ ] Hosting: GitHub Pages oder Netlify? (Beide kostenlos, Netlify hat einfacheres Custom-Domain-Setup)
- [ ] Lizenz bestätigen: MIT für Code + CC-BY-SA für Content
- [ ] CSS-Reset: Welcher? (modern-normalize, Andy Bell Reset, oder eigener Minimal-Reset)
- [ ] OG-/Social-Metadata für teilbare Stage-Seiten (Phase 1 oder 2?)

---

## Verknüpfungen

- [[AI Wertschöpfungskette — Spezifikation]] — Vollständige Spec (Was + Warum)
- [[AI Wertschöpfungskette — MVP-Definition]] — MVP-Scope (Was zuerst)
- [[AI entlang der Wertschöpfungskette]] — Übersichts-Notiz
