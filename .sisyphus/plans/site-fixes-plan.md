# Work Plan: Implement Priority Fixes for Biologia ENEM Site

## Overview

Implement critical accessibility, SEO, and functional fixes identified in the site audit. Focus on high-impact, low-effort changes first.

## Context

- **Site**: Static HTML educational platform for ENEM biology preparation
- **Issues**: 31 HTML files with accessibility, SEO, and functional problems
- **Priority**: Fix critical blockers first (accessibility, broken links, logic errors)

## Scoring Summary from Audit

| Category | Score | Critical Issues |
|----------|-------|-----------------|
| Accessibility | 15/100 | Missing landmarks, no focus styles, keyboard inaccessibility |
| SEO | 20/100 | Zero meta tags, no OG/canonical/favicon |
| Functionality | 50/100 | Quiz scoring bugs, broken links, non-interactive components |
| **Overall** | **29/100** | Requires urgent corrections |

## Priority Fixes (Phase 1 - Critical)

### Task 1: Fix HTML Semantic Structure
**Files**: All 31 HTML files in `enem_biologia/docs/`
**Changes**:
- Wrap main content in `<main>` element
- Add `<nav>` around back-links and quick-links
- Add `<header>` where missing (chapter pages)
- Add skip-to-content link

### Task 2: Fix Accessibility Issues
**Files**: All HTML files
**Changes**:
- Add visible focus styles (`outline: 2px solid #1f6feb`)
- Convert `<div onclick>` flashcards to `<button>` with `role="button"` and `tabindex="0"`
- Add `<fieldset>`/`<legend>` to quiz forms
- Associate labels with form inputs via `for`/`id` or wrapping
- Add `aria-live="polite"` to quiz result containers
- Add `aria-label` to icon-only buttons (if any)

### Task 3: Fix SEO Issues
**Files**: All HTML files
**Changes**:
- Add `<meta name="description">` with chapter-specific content
- Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Add canonical URL pointing to live version
- Add favicon link (`<link rel="icon" href="/favicon.ico">`)
- Fix title accents (e.g., "Capitulo" → "Capítulo")

### Task 4: Fix Functional Bugs
**Files**: Specific files with issues
**Changes**:
- `cap9_quiz.html:44`: Change `score += 0` to `score++` for correct answer
- `cap12_flashcards.html:14`: Fix typo `cap12_biologo.html` → `cap12_biologia.html`
- Implement actual memory game logic for cap10-13_memory.html (or remove placeholder files)
- Add `rel="noopener noreferrer"` to external links (WordWall links)

### Task 5: Add Basic CSS Improvements
**Files**: All HTML files (inline styles)
**Changes**:
- Add CSS variables for colors, spacing, typography in `:root`
- Add basic responsive breakpoint (min-width: 768px) for grid layouts
- Standardize container max-width to 800px
- Add consistent border-radius (8px)
- Style `.btn` class for quiz buttons

## QA Scenarios

### Verify Accessibility Fixes
1. Navigate with keyboard only (Tab, Enter, Space)
2. Check visible focus indicator on all interactive elements
3. Screen reader test: NVDA/VoiceOver should announce:
   - Page landmarks (main, nav)
   - Form field labels and groupings
   - Dynamic content updates (quiz results)
   - Image alt text
4. Validate with axe-core or Lighthouse accessibility audit

### Verify SEO Fixes
1. View page source: confirm meta description, OG tags, canonical
2. Check social sharing preview (use Facebook Sharing Debugger)
3. Verify favicon appears in browser tab
4. Validate HTML with W3C validator

### Verify Functional Fixes
1. Quiz: answer all questions correctly → score should be 3/3
2. Broken link: cap12_flashcards.html link should work
3. Memory games: cap10-13 should have functional flip/match logic
4. External links: open in new tab without security warnings

### Verify CSS Improvements
1. Resize browser: layout should adapt at mobile breakpoint
2. Check CSS variables are used consistently
3. Verify consistent spacing and typography
4. Confirm focus styles are visible and accessible

## Dependencies

- None (all changes are inline HTML/CSS/JS modifications)
- Requires careful editing to avoid breaking existing functionality

## Estimated Effort
- Medium (2-3 days for one person)
- High repetition but low complexity per file

## Files to Modify
- `enem_biologia/docs/*.html` (31 files)
- Primary focus: index.html, all cap{N}_*.html variants

## Notes
- Backup original files before mass changes
- Test fixes on 1-2 files first, then replicate pattern
- Consider creating templates for repeated structures
- Post-fix: run full audit to verify all critical issues resolved