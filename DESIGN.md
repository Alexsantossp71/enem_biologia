# DESIGN.md — ENEM Biologia Redesign

> **Status:** Active contract. All UI work MUST follow this. No component ships without it.
> **Aesthetic codename:** *Bioluminescent Editorial* — dark, immersive, elegant, eye-catching for teenagers.
> **Layer A (execution):** `gpt-tasteskill.md` (Awwwards-tier, cinematic, scroll-triggered)
> **Layer B (tokens):** `spotify.md` (dark immersive, pill geometry, heavy shadows, content-as-color-source, bold/regular binary type)
> **Mood references (user-supplied):** Spotdly (modern app UI, bold type, screen-framed, clean cards) + World of WearableArt (artistic, editorial, colorful, playful)

---

## 1. Design Principles

1. **Dark-first immersion.** Near-black canvas where the only true color comes from biology imagery, the 3D DNA/eukaryote scenes, and a luminous bioluminescent accent system. UI recedes; content glows.
2. **Editorial elegance.** Large high-contrast display serif for chapter/hero titles; tight, tracked uppercase grotesk for labels/eyebrows/buttons. Restraint + scale = elegance.
3. **Eye-catching for teens.** Vibrant gradient-mesh backgrounds, glass surfaces, kinetic scroll reveals, pill buttons, hover lift. Playful but not childish.
4. **Content is the color source.** Images (`img/`) and 3D canvases provide the palette; the chrome stays achromatic + accent.
5. **Zero new dependencies.** Vanilla HTML/CSS/JS only. Motion is pure CSS (scroll-driven `animation-timeline` + transitions) with `prefers-reduced-motion` off-switch. No GSAP, no build step.
6. **Preserve all JS behavior.** `js/main.js` (quiz + theme toggle IIFE that injects a button into `nav`), `js/three-viewer.js` (3D scenes + reduceMotion guard + SW registration), `js/sw.js` are UNTOUCHED. Class names used by chapter pages are KEPT so CSS cascades.

## 2. Visual Theme & Atmosphere

A deep-ink study environment lit by bioluminescence. The home hero is a full-viewport gradient-mesh stage with the 3D DNA helix as a living focal point. Chapter cards float as glass tiles over the mesh. Typography carries the "editorial" elegance; the gradient mesh + glass + 3D carry the "eye-catching" energy.

**Key characteristics:**
- Near-black base (`#0a0e14` → `#141b26` surfaces), depth via shade variation + heavy shadows.
- Bioluminescent accent system: teal (primary/functional), violet + magenta (gradient mesh), lime (highlight).
- Glassmorphism: `backdrop-filter: blur()` surfaces with hairline borders.
- Pill geometry for buttons (9999px), circular icon controls (50%), large radius (16–24px) for cards.
- Bold/regular binary type hierarchy; uppercase tracked labels.
- Kinetic but calm: scroll-reveal, hover lift, marquee, nav-scroll shrink — all reduced-motion safe.

## 3. Color Palette & Roles

### Dark (default aesthetic)
| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#0a0e14` | Deepest page background |
| `--bg-2` | `#0f141c` | Alternate section background |
| `--surface` | `#141b26` | Cards, containers |
| `--surface-2` | `#1b2433` | Elevated/hover surfaces |
| `--surface-3` | `#232f42` | Strongest elevation |
| `--border` | `rgba(255,255,255,0.08)` | Hairline borders |
| `--border-strong` | `rgba(255,255,255,0.14)` | Focus/active borders |
| `--text` | `#f5f7fa` | Primary text |
| `--text-muted` | `#9aa7b8` | Secondary text |
| `--text-dim` | `#6b7888` | Captions, metadata |
| `--accent` | `#2dd4bf` | Primary accent — CTAs, active nav, links, focus |
| `--accent-2` | `#a855f7` | Gradient mesh (violet) |
| `--accent-3` | `#ec4899` | Gradient mesh (magenta) |
| `--accent-4` | `#a3e635` | Highlight (lime) |
| `--error` | `#f3727f` | Quiz wrong / error |
| `--warning` | `#ffa42b` | Warning |
| `--info` | `#539df5` | Info |
| `--shadow-md` | `0 12px 30px rgba(0,0,0,0.40)` | Card lift |
| `--shadow-lg` | `0 24px 60px rgba(0,0,0,0.55)` | Elevated/overlay |

### Light mode (theme-toggle target — keep functional)
| Token | Value |
|-------|-------|
| `--bg` | `#f6f8fb` |
| `--bg-2` | `#eef2f7` |
| `--surface` | `#ffffff` |
| `--surface-2` | `#f1f5fa` |
| `--surface-3` | `#e6edf5` |
| `--border` | `rgba(15,20,28,0.10)` |
| `--border-strong` | `rgba(15,20,28,0.18)` |
| `--text` | `#0f141c` |
| `--text-muted` | `#51607a` |
| `--text-dim` | `#7a879b` |
| accents unchanged |

### Gradient mesh (decorative, behind content)
`radial-gradient` clusters of `--accent`, `--accent-2`, `--accent-3` at low opacity over `--bg`. Used on hero + section dividers. Never reduces text contrast below WCAG AA.

## 4. Typography Rules

**Families (Google Fonts, NO Inter):**
- `--font-display: "Instrument Serif", Georgia, serif;` — editorial chapter/hero titles (elegant, high-contrast).
- `--font-ui: "Space Grotesk", system-ui, sans-serif;` — eyebrows, labels, buttons, section headings, nav.
- `--font-body: "Outfit", system-ui, sans-serif;` — body, captions.

**Hierarchy:**
| Role | Font | Size (desktop) | Weight | Tracking | Notes |
|------|------|----------------|--------|----------|-------|
| Hero title | display | clamp(2.8rem, 7vw, 5.5rem) | 400 | normal | Instrument Serif, tight line-height 1.02 |
| Chapter title (h1) | display | clamp(2.2rem, 5vw, 3.6rem) | 400 | normal | chapter pages |
| Section heading (h2) | ui | clamp(1.6rem, 3vw, 2.4rem) | 700 | -0.01em | Space Grotesk |
| Eyebrow / label | ui | 0.8rem | 700 | 0.18em uppercase | tracked small caps voice |
| Body | body | 1.0625rem (17px) | 400 | normal | line-height 1.7 |
| Body bold | body | 1.0625rem | 600 | normal | emphasis |
| Button | ui | 0.9rem | 700 | 0.08em uppercase | pill label voice |
| Caption | body | 0.85rem | 400 | normal | `--text-dim` |

**Principles:** Bold/regular binary (700 vs 400, 600 sparingly). Uppercase + wide tracking on labels/buttons. Generous line-height for body (1.7) but tight for display (1.02). No font sizes below 13px for body.

## 5. Component Stylings

### Buttons (pill geometry)
- **Primary:** `--accent` bg, `#04141` (near-black) text, 9999px radius, padding 14px 28px, uppercase tracked label, shadow `--shadow-md`, hover → lift + glow ring.
- **Secondary/Ghost:** transparent, `--text` text, 1px `--border-strong`, 9999px, hover → `--surface-2`.
- **Icon circular:** 44px circle, `--surface-2`, accent icon, hover lift. (Used for theme toggle + nav icons.)

### Cards / Glass tiles
- `--surface` bg + `backdrop-filter: blur(14px)` + 1px `--border`, radius 20px, shadow `--shadow-md`.
- Hover: translateY(-6px) + `--shadow-lg` + border brightens to `--accent` at low alpha.
- Chapter cards: image thumbnail (object-fit cover, 16:10), title (ui 700), meta (caption dim), accent left-border or top glow on hover.

### Navigation (floating glass bar)
- Fixed top, `max-width` container, `--surface`/blur, hairline `--border`, radius 9999px (pill bar) or 18px, shadow `--shadow-md`.
- Logo left (text wordmark in display/ui, accent dot), links center/right (ui 600, muted→white on hover/active), theme-toggle circular button far right (JS injects here — keep `nav` element + injection target).
- Scroll state: shrinks padding + strengthens blur (CSS scroll-driven or scroll listener-free via `position: sticky` + `:has`? use simple CSS, no JS).
- Mobile (<768px): links become a horizontally scrollable row or collapse into a `details`/menu; `nav` element always present for JS.

### Hero (home)
- Full viewport min-height, gradient-mesh bg, centered/left editorial title (display), subtitle (body muted), CTA pill row, and the 3D `#canvas-container[data-three-scene="dna"]` as a focal element (right side desktop / below on mobile). Decorative mesh behind, never behind text at low contrast.

### Quiz (preserve behavior)
- `.quiz-card` glass tile; `.quiz-question` ui 700; options as pill/rounded rows (hover accent border); `.quiz-feedback` / `.quiz-result` use `--accent` (correct) / `--error` (wrong). Keep all class names + `data-correct` + `onclick="checkQuiz(...)"`.

### Tables / comparison (`.comparison-table`)
- Glass surface, rounded, sticky header, row hover `--surface-2`, accent dividers. Keep class name.

### Images (`.image-container`, `.external-3d-card`, `.scene-stages`)
- Rounded 16px, subtle border, caption in caption style. 3D card keeps `#canvas-container` + `data-three-scene`.

### Footer
- `--bg-2`, top hairline border, columns of links (ui 600 muted→white), wordmark, small caption. Keep all existing links.

## 6. Layout Principles

- **Container:** `max-width: 1200px`, padding `clamp(20px, 5vw, 64px)`.
- **Spacing scale (8px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Section vertical rhythm ≥ 96px desktop.
- **Grids:** chapter grid `repeat(auto-fill, minmax(280px, 1fr))`, gap 24px. Bento optional on home featured.
- **Whitespace:** editorial breathing room (opposite of Spotify density) — this is a reading/study site, not a player. Large section spacing for elegance.
- **Radius scale:** pill 9999px (buttons/nav), 20–24px (cards), 16px (images/inputs), 10px (small), 50% (circular).

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Base (0) | `--bg` |
| Surface (1) | `--surface` + hairline border + blur |
| Elevated (2) | `--surface-2` + `--shadow-md` |
| Overlay (3) | `--surface-3` + `--shadow-lg` |
| Accent ring | `0 0 0 1px var(--accent)` at low alpha on focus/hover |

Heavy shadows required on dark (light shadows invisible). Focus-visible uses accent ring, never removed.

## 8. Motion & Interaction (CSS-only, reduced-motion safe)

- **Scroll reveal:** elements with `.reveal` animate `opacity 0→1, translateY(24px)→0` via CSS `animation-timeline: view()` (Chromium) OR a tiny IntersectionObserver added in `index.html` (NOT main.js). Under `prefers-reduced-motion: reduce` → all reveals instant, no transform.
- **Hover:** cards lift (-6px) + shadow; buttons glow ring; nav links color shift. Transitions 200–300ms `ease`.
- **Marquee:** chapter-tag strip uses CSS keyframe translateX loop, paused on reduced-motion.
- **Nav scroll shrink:** CSS only (sticky + scroll-driven or static elegant state).
- **3D scenes:** handled by `three-viewer.js` (untouched); respect its reduceMotion guard.
- **No layout-shifting animations.** All motion uses transform/opacity only.

## 9. Responsive Behavior

| Breakpoint | Key changes |
|------------|-------------|
| <425px | Single column, nav links scrollable row, hero stacks (title above 3D), 3D canvas shorter |
| 425–768px | 1–2 col grids, nav collapses to menu/scroll row |
| 768–1024px | 2–3 col chapter grid, hero side-by-side begins |
| 1024–1280px | Full desktop, 3-col grid |
| >1280px | Expanded max-width 1200px, generous spacing |

Test at **375 / 768 / 1280**. Verify dark + light, reduced-motion, 3D loads, quiz works.

## 10. Do's and Don'ts

**Do**
- Dark immersive base; depth via shade + heavy shadow.
- Use bioluminescent accents functionally (teal = action/active/link; violet/magenta = decorative mesh only).
- Pill + circular geometry; glass surfaces with hairline borders.
- Editorial display serif for titles; tracked uppercase grotesk for labels.
- Large section spacing for elegance.
- Preserve `js/main.js`, `js/three-viewer.js`, `js/sw.js` and all component class names.

**Don't**
- Don't use Inter or system-default sans for display.
- Don't add new emojis in new chrome (use inline SVG icons for nav/CTA/section markers). Existing content emojis stay.
- Don't use light backgrounds for primary surfaces in dark mode.
- Don't thin/subtle shadows on dark — heavy or nothing.
- Don't break the `nav` element or the 3D `#canvas-container` hooks.
- Don't ship layout-shifting or non-reduced-motion-safe animation.

## 11. Accepted Debt
- **Inline styles in chapter pages** (e.g., `.legend-item` background `#E8F5E9`, colored `<span>` colors in cap1) are overridden via CSS class rules (with `!important` where inline) to unify with the new theme. Full HTML cleanup of chapter pages is out of scope for v1.
- **Content emojis** in existing chapter text are preserved (not new additions).
- **Cap pages transform via CSS only** — no structural HTML edits required (same chrome + classes). Only `index.html` is restructured.

## 12. Research Log
- **2026-08-29** — User requested complete redesign: "mais elegante e mais atrente para o adoslecente" with Awwwards refs Spotdly + WearableArt.
- Frontend skill routed: expressive brief → Layer A `gpt-tasteskill.md` + Layer B `spotify.md`. No React (static site) → React tooling gate N/A.
- Decision: CSS-centric full-site cascade + `index.html` restructure; JS preserved; zero new deps; CSS-only motion.
- Asset audit: `img/` has SVGs (hooke_cork, leeuwenhoek_microscope, cell_comparison, plant_cell, flower_anatomy, bacteria, protozoa, fungi, animal_phyla, food_web, water_molecules) + JPGs (dna_helix, mitochondria, mitosis, tissues, chloroplast, enzyme_action, glucose_structure, cell_membrane, dna_replication, plant_groups) — all reusable as chapter-card thumbnails / hero art.
