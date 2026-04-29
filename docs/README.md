# Handoff: Luis Chiquito · Software Engineer Portfolio

## Overview
Single-page portfolio website for **Luis Chiquito**, Software Engineer (5 yrs, since 2021). Targets international recruiters (USA / Europe). Designed to be deployed on **GitHub Pages** as a static site — no backend.

The design uses an **engineer / terminal aesthetic**: monospace type, grid lines, oversized index numbers, marquee tech ticker, scroll-driven reveals, dark default with light-mode toggle, EN/ES bilingual.

---

## About the Design Files
The HTML/JSX/CSS files in this bundle are **design references**, not production code. They were prototyped in the browser using React (loaded via Babel CDN) so the design could be interactive and tweakable.

**Your task:** recreate these designs in the target codebase's environment — using its established framework, design system, build pipeline and conventions. If there is no existing codebase yet, pick the most appropriate stack for a static GitHub-Pages-friendly site (Next.js static export, Astro, Vite + React, or plain HTML are all fine).

Do **not** ship the JSX-via-Babel pattern — it's a prototyping convenience, not a production setup.

## Fidelity
**High-fidelity (hifi)**. Final colors, typography, spacing, animations and interactions are all locked. Recreate pixel-perfectly using the target codebase's idioms.

---

## Screens / Views

This is a single-page site with five anchored sections:

### 1. Nav (fixed, top)
- Fixed position, full width, 18px vertical / `clamp(20px, 5vw, 80px)` horizontal padding
- Background: `color-mix(in oklch, var(--bg) 70%, transparent)` + `backdrop-filter: blur(12px)`
- Adds a 1px bottom border (`var(--line-soft)`) when scroll > 24px
- **Brand left**: 8px emerald dot (with glow) + `LC` in mono + `/ software engineer` in muted color
- **Center**: nav links `01 About · 02 Stack · 03 Projects · 04 Contact` — accent-colored numerals, scroll-spy active state
- **Right**: language toggle (EN/ES) + theme toggle (☾/☀), both in pill buttons
- Hidden links on mobile (<720px)

### 2. Hero
Four selectable layouts (variant chosen via Tweaks → wire as a config value or just keep ONE — recommend `centered` for the live site):

- **`centered` (default)** — meta row → giant name (`Luis` then indented `Chiquito.` with accent dot) → tagline → bottom stats row
- **`split`** — name left, tagline + stats right
- **`indexed`** — vertical "INDEX · 2021—2026 · 05 YRS" rail on the left, name + `00 /` numeral on the right
- **`marquee` / wide** — name takes full width, vertical "SOFTWARE / ENGINEER / EST. 2021" key on the right

**Type:** name uses JetBrains Mono 500, font-size `clamp(56px, 12vw, 220px)`, line-height 0.92, letter-spacing -0.04em.
**Meta row:** 11px mono uppercase, items prefixed with `// ` in accent color. "Available for new roles" pulses (opacity 1↔0.35, 2.4s).
**Tagline:** Inter, `clamp(18px, 2vw, 24px)`, max-width 36ch, prefixed with `→` in accent.
**Stats footer:** YEARS (28px) · BACKEND LANGS · ↓ scroll, separated by 1px top border.

### 3. Marquee Tech Ticker
- Full-width strip between hero and About
- 1px borders top + bottom, `var(--bg-2)` background
- All 16 technologies repeated twice for seamless loop
- 40s linear infinite (28s on `expressive` anim, 80s on `subtle`)
- Each item: accent bullet `●` + tech name in 14px mono

### 4. About (`#about`)
2-column grid (`1fr 1.4fr`, collapses to 1col <900px):
- **Left:** bio paragraph (`clamp(18px, 1.6vw, 22px)`, `text-wrap: pretty`, first letter is mono accent-colored). Below: 2-stat grid (years, projects shipped) — 44px mono numerals, 11px uppercase labels.
- **Right:** label `// Career so far` then an **interactive timeline** in one of three styles:
  - **`vertical`** — 32px-padded list with 1px guide rail and 11px circular markers (filled + glowing for the latest year). Each item: year (accent) → role → company (muted) → summary → tag chips.
  - **`horizontal`** — track with markers per year, click to load content card below.
  - **`layered`** — left rail of years (active row gets accent-soft background + 18px accent bar), right pane swaps content.

### 5. Stack (`#stack`)
4-column grid (collapses to 2 then 1), 1px gap with `--line-soft` background to create dividers.
Each category cell:
- Header: category name (uppercase 11px mono) + count `04` in accent
- Tech rows: 36px square glyph (mono initials, e.g. `A`, `TS`, `.N`) + name + 60px proficiency bar that animates `scaleX(0)→1` over 800ms when the cell enters viewport
- Hover on a tech row: glyph border turns accent + accent-soft glow

### 6. Projects (`#projects`)
- Filter row: `All · Frontend · Backend · Full-Stack · Mobile`, each with count badge. Active = accent fill, black text.
- Right of filters: `showing N / 8` count in mono.
- 2-column grid of cards (1col <900px), 32px gap.
- **Card:** 16:10 image area with 45° diagonal stripe placeholder (`--bg-3`/`--bg-2`), `P/01` numeral top-right (accent), label `MOBILE / IONIC` bottom-left in mono. On hover, accent radial-gradient glow appears + card lifts -4px.
- **Body:** category + `04 TECH` meta row → 22px mono title → blurb → tag chips (1px-bordered pills) → action row: primary `Live demo →` (filled accent, black text) + secondary `Source ⌘` (1px border).

### 7. Contact (`#contact`)
2-col grid (`1.1fr 1fr`):
- **Left:** big mono headline (`clamp(32px, 5vw, 56px)`) with last word in accent. Sub-line, then "Or find me at: GitHub ↗ LinkedIn ↗ Email ↗" in 12px mono uppercase, links underline-on-hover.
- **Right:** form — 3 fields (`01 / Your name`, `02 / Email`, `03 / What are you working on?` textarea), labels in 11px mono uppercase. Inputs: transparent bg, 1px border, focus turns accent. Submit button `Send message →` (accent fill, slides 4px right on hover). Static — shows confirmation tile on submit.

### 8. Footer
1px top border, mono 11px uppercase: `© 2026 Luis Chiquito` left, `Built from scratch · No template · No framework lock-in` right.

### Cross-cutting
- **2px scroll-progress bar** fixed at top, accent-colored with glow, width = scroll %.
- **Background grid** — `position: fixed` 80×80px lines using `--grid` color, masked by a radial fade (`mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 100%)`).

---

## Interactions & Behavior

- **Smooth scroll** — global `<a href="#...">` click handler scrolls to `el.offsetTop - 60` with `behavior: smooth`.
- **Scroll-spy** — on every scroll, find topmost section with `getBoundingClientRect().top <= 200` and set as active nav link.
- **Reveal-on-scroll** — `IntersectionObserver` with `threshold: 0.05` adds `.in-view` to `.reveal` and `.reveal-stagger` elements; CSS handles fade+translateY transition. Stagger children get `transition-delay: 0/80/160/…ms` per nth-child.
- **Project card stagger** — each card gets a custom delay = `idx * 80ms` set inline.
- **Stack proficiency bars** — fill animation triggers when category cell enters viewport.
- **Marquee** — pure CSS `@keyframes marquee` translateX 0 → -50%, infinite linear.
- **Available pulse** — opacity 1↔0.35, 2.4s ease infinite.
- **Form** — required-field check; on submit, swap form for "✓ Thanks — I'll be in touch." tile for 4s, then reset.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables reveal transforms and marquee animation.

## State Management
- `lang`: `'en' | 'es'`
- `mode`: `'dark' | 'light'`
- `accent`: one of `emerald | violet | amber | blue | red | mono`
- `heroLayout`: `'centered' | 'split' | 'indexed' | 'marquee'`
- `timelineStyle`: `'vertical' | 'horizontal' | 'layered'`
- `density`: `'comfy' | 'compact'`
- `body`: `'sans' | 'mono'`
- `anim`: `'subtle' | 'medium' | 'expressive'`
- `taglineIdx`: `0 | 1 | 2`
- Project filter: `'All' | 'Frontend' | 'Backend' | 'Full-Stack' | 'Mobile'`
- Active timeline item index (per timeline variant)
- Contact form: `{ name, email, message }` + `sent` flag
- Scroll progress %, active section id, scrolled-past-24px boolean

For production you can drop the Tweaks panel entirely and pick your preferred config (Luis liked **dark / emerald / centered hero / vertical timeline / expressive anim / sans body / comfy density**).

---

## Design Tokens

### Colors (dark mode — primary)
| Token | Value |
|---|---|
| `--bg` | `#0b0b0c` |
| `--bg-2` | `#111113` |
| `--bg-3` | `#18181b` |
| `--fg` | `#ededee` |
| `--fg-2` | `#a1a1a6` |
| `--fg-3` | `#6b6b71` |
| `--line` | `oklch(0.27 0 0)` |
| `--line-soft` | `oklch(0.22 0 0)` |
| `--grid` | `oklch(0.18 0 0 / 0.7)` |
| `--accent` | `oklch(0.72 0.16 155)` (emerald) |
| `--accent-soft` | `oklch(0.72 0.16 155 / 0.14)` |
| `--accent-line` | `oklch(0.72 0.16 155 / 0.32)` |

### Light mode overrides
| Token | Value |
|---|---|
| `--bg` | `#fafaf9` |
| `--bg-2` | `#f3f3f1` |
| `--bg-3` | `#e8e8e6` |
| `--fg` | `#0c0c0d` |
| `--fg-2` | `#4a4a4f` |
| `--fg-3` | `#8a8a90` |
| `--line` | `oklch(0.85 0 0)` |
| `--line-soft` | `oklch(0.9 0 0)` |
| `--grid` | `oklch(0.88 0 0 / 0.7)` |

### Accent options
- `emerald` — `oklch(0.72 0.16 155)` ✅ chosen
- `violet` — `oklch(0.68 0.18 295)`
- `amber` — `oklch(0.78 0.16 80)`
- `blue` — `oklch(0.68 0.18 245)`
- `red` — `oklch(0.66 0.20 25)`
- `mono` — `oklch(0.85 0 0)`

### Typography
- **Sans:** Inter — weights 400, 500, 600
- **Mono:** JetBrains Mono — weights 400, 500
- Loaded from Google Fonts. Mono uses font-features `tnum, zero` for tabular numerals.

### Spacing
- `--pad-x: clamp(20px, 5vw, 80px)` (horizontal page padding)
- `--gutter-y: clamp(80px, 12vw, 160px)` (section vertical padding) — compact density: `clamp(56px, 9vw, 112px)`
- Stack grid: 1px gaps with line-color background to draw dividers
- Project grid: 32px gap

### Border radii
- Buttons / inputs: 4px
- Cards: 8px
- Glyph squares: 6px
- Tag chips: 999px (pill)

### Motion
- `--t-fast: 180ms`
- `--t-med: 360ms`
- `--t-slow: 720ms`
- `--ease: cubic-bezier(.22, .61, .36, 1)`

---

## Content / i18n
All UI copy lives in `TRANSLATIONS` object in `data.jsx` with `en` and `es` keys. Browser-language detection should fall back to `en` for non-`es-*` locales — Luis chose **English-only default** but kept the toggle.

Site data (name, role, projects, timeline, stack, social URLs) lives in `SITE_DATA` in the same file. **Update `email`, `github`, `linkedin`, and the per-project `live` and `source` URLs** before launch.

Three taglines provided — pick one or rotate via the variant index:
1. "Adapting to every challenge, delivering every solution." ✅ default
2. "Built to ship — across stacks, time zones, and stakes."
3. "From prototype to production. Wherever the problem lives, I learn its language."

---

## Assets
None — no logos, photos, or SVG illustrations are used. Project cards use a CSS-only diagonal-stripe placeholder; tech "logos" are 1–2-character mono glyphs in bordered squares (intentionally non-branded). Replace with real project screenshots and (optionally) tech brand SVGs before launch.

---

## Files in this bundle

| File | Purpose |
|---|---|
| `Luis Chiquito Portfolio.html` | Entry point — loads fonts, React/Babel, mounts `<App>` |
| `data.jsx` | `SITE_DATA`, `TRANSLATIONS`, `TECH_GLYPHS` — single source of truth |
| `styles.css` | All CSS — tokens, sections, animations |
| `components-core.jsx` | `Nav`, `Hero`, `Marquee`, `SectionHead`, `Reveal`, `useReveal` |
| `components-sections.jsx` | `AboutSection` + 3 timelines, `StackSection`, `ProjectsSection`, `ContactSection` |
| `app.jsx` | Root `<App>` — wiring, scroll-spy, smooth scroll, Tweaks panel |
| `tweaks-panel.jsx` | Prototype-only — drop in production |

## Suggested production stack
- **Astro** or **Next.js (static export)** for first-class GitHub Pages support
- Tailwind or vanilla CSS — the current CSS is small and clean enough to port verbatim
- Drop the Tweaks panel; hard-code the chosen variants
- Pre-load Inter + JetBrains Mono via `next/font` or `<link rel="preload">`
- Add real `og:image`, favicon, and a `<title>` per Luis's preferred copy
- Wire the contact form to a free service (Formspree, Resend, Web3Forms) since GitHub Pages has no backend
