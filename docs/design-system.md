# Design System: Biologia ENEM

## Colors

### Primary

| Token | Hex |
|-------|-----|
| Green | `#28A745` |
| Orange | `#FF9800` |
| CTA | `#FF5722` |
| Background | `#F5F5F5` |
| Text | `#212121` |

### Secondary

| Token | Hex |
|-------|-----|
| Midnight Blue | `#0A0F33` |
| Electric Teal | `#00FFC4` |
| Neon Magenta | `#FF2E9A` |
| Soft Ash Gray | `#E5E5E5` |

## Typography

- **Base:** `1.2rem`

### Scale

| Level | Size |
|-------|------|
| H1 | `2.0rem` |
| H2 | `1.6rem` |
| H3 | `1.3rem` |
| Body | `1.2rem` |

### Families

| Role | Font |
|------|------|
| Headings | Space Grotesk |
| Body | Lexend Deca |
| Badges | Press Start 2P |
| Decorative | Vollkorn SC |

## Pattern

### Layout

- **Grid:** 12-column responsive grid
- **Breakpoints:**
  - SM: `375px`
  - MD: `768px`
  - LG: `1024px`
  - XL: `1440px`
- **Hero:** full-width image/video
- **Sections:** Temas, Questões, Videoaulas, Quiz interativo
- **Immersive 3D:** full-screen scroll-triggered panels

### Navigation

- **Sticky Top Bar:** true
- **Mobile Hamburger:** true
- **Labels:** Início, Temas, Questões, Vídeos, Quiz

### Visual Style

- **Flat Design:** true
- **Micro Interactions:** 150-300ms hover/focus transitions
- **Icons:** Heroicons/Lucide SVG
- **Gamification:** badges + progress bar (Press Start 2P)

### Accessibility

- **WCAG:** AA
- **Contrast:** >= 4.5:1
- **Focus Outlines:** true
- **Keyboard Navigation:** true
- **Prefers Reduced Motion:** disable GSAP parallax and particle effects

### Interactions

- **Card Hover Lift:** true
- **Progressive Disclosure:** true
- **Quiz Feedback:** animated check/cross (no motion for reduced-motion users)
- **Scroll Triggered 3D:** parallax + particle effects
- **Achievement System:** badges unlock on quiz completion