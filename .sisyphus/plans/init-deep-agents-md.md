# Work Plan: Generate Hierarchical AGENTS.md Files

## Overview

Create AGENTS.md knowledge base files for the biologia project (static HTML ENEM biology study platform).

## Context

- **Project Type**: Static HTML educational site (no frameworks, no build system)
- **Language**: Portuguese (Brazilian)
- **Tech Stack**: Pure vanilla HTML/CSS/JS, GitHub Pages hosting
- **Total Files**: 40 (32 in main content directory)
- **Existing AGENTS.md**: None

## Scoring Results

| Directory | Files | Score | Decision |
|-----------|-------|-------|----------|
| Root (.) | ~5 | N/A | ✅ CREATE (always) |
| `enem_biologia/docs/` | 32 | ~20 | ✅ CREATE |
| `.github/workflows/` | 2 | ~8 | ❌ SKIP (root covers) |
| `enem_biologia_test/` | ~3 | ~6 | ❌ SKIP (root covers) |
| `fontes/` | 1 | ~2 | ❌ SKIP |

## Tasks

### Task 1: Create Root AGENTS.md

**File**: `./AGENTS.md`

**Content**:

```markdown
# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-21
**Type:** Static HTML educational site (ENEM Biology prep)

## OVERVIEW

Brazilian biology study platform for ENEM exam. Pure vanilla HTML/CSS/JS — no frameworks, no build system, no bundler. Content in Portuguese. Hosted on GitHub Pages.

## STRUCTURE

\`\`\`
biologia/
├── .github/workflows/          # CI/CD (2 workflows)
├── docs/                       # Root docs (trilhas index)
├── enem_biologia/              # PRIMARY CONTENT (13 chapters)
│   └── docs/                   # Chapter files (cap{N}_*.html)
├── enem_biologia_test/         # Staging environment (own .git)
└── fontes/                     # Source materials (PDF)
\`\`\`

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Main hub page | `enem_biologia/docs/index.html` | "Trilhas de Biologia" navigation + progress tracking |
| Chapter content | `enem_biologia/docs/cap{N}_biologia.html` | N = 1-13 |
| Quiz pages | `enem_biologia/docs/cap{N}_quiz.html` | Exists for caps 5-13 |
| Flashcards | `enem_biologia/docs/cap{N}_flashcards.html` | Exists for caps 5-13 |
| Memory games | `enem_biologia/docs/cap{N}_memory.html` | Exists for caps 9-13 |
| CI/CD | `.github/workflows/` | deploy-ghpages.yml, release-cap1-13-auto.yml |
| Staging | `enem_biologia_test/` | Pre-release verification |

## CONVENTIONS

### File Naming
- Chapters: `cap{N}_{type}.html` (cap1, cap2, ..., cap13)
- Types: `_biologia`, `_quiz`, `_flashcards`, `_memory`

### JavaScript Patterns
- camelCase: `loadProgress`, `setProgress`, `renderGrid`
- Constants: SCREAMING_SNAKE_CASE (`PROGRESS_KEY`)
- Storage key: `enem_biologia_progress` (localStorage)
- Inline scripts in HTML (no external .js files)

### CSS Patterns
- kebab-case classes: `.card-title`, `.progress-bar`, `.modal-content`
- CSS variables in `:root` scope
- Inline styles in HTML (no external .css files)

### Content Language
- Portuguese (Brazilian) — UI text, chapter titles, descriptions

## ANTI-PATTERNS (THIS PROJECT)

- **Do NOT** add npm/package.json — project is intentionally dependency-free
- **Do NOT** use external CSS/JS files — keep everything inline for simplicity
- **Do NOT** modify `enem_biologia_test/` — it has its own git history
- **Do NOT** rename `cap{N}_` prefix — naming is standardized across all chapters

## UNIQUE STYLES

- **Zero dependencies**: No package.json, no node_modules, no build step
- **Hardcoded data**: Track data array embedded in `<script>` block (lines 65-81 of index.html)
- **localStorage progress**: Client-side only progress tracking
- **Flat structure**: All chapter files directly in `enem_biologia/docs/`

## COMMANDS

\`\`\`bash
# No build commands — deploy via git push to main
git push origin main  # Auto-deploys to GitHub Pages

# Manual release (GitHub UI)
# Run workflow: release-cap1-13-auto.yml
\`\`\`

## NOTES

- `nul` in root is Windows null device artifact (safe to ignore/delete)
- `enem_biologia/index.html` is placeholder stub (not production entry)
- Production entry point: `enem_biologia/docs/index.html`
- Chapters 1-4 have only `_biologia.html`; chapters 5+ have quiz/flashcards/memory variants
```

---

### Task 2: Create enem_biologia/docs/ AGENTS.md

**File**: `./enem_biologia/docs/AGENTS.md`

**Content**:

```markdown
# AGENTS.md — enem_biologia/docs/

## OVERVIEW

Main content directory: 13 biology chapters + hub page. Each chapter has up to 4 page variants (biologia, quiz, flashcards, memory).

## WHERE TO LOOK

| File Pattern | Purpose |
|--------------|---------|
| `index.html` | Navigation hub with progress tracking |
| `cap{N}_biologia.html` | Chapter N content (N=1-13) |
| `cap{N}_quiz.html` | Chapter N quiz (N=5-13) |
| `cap{N}_flashcards.html` | Chapter N flashcards (N=5-13) |
| `cap{N}_memory.html` | Chapter N memory game (N=9-13) |
| `deploy_trigger.txt` | Deployment marker file |

## CONVENTIONS

- **Naming**: `cap{N}_{type}.html` — sequential chapter numbering
- **No subdirectories**: All files flat in this directory
- **Inline everything**: CSS + JS embedded in each HTML file
- **Portuguese content**: UI labels, descriptions, chapter titles

## NOTES

- Chapters 1-4: Only `_biologia.html` variant exists
- Chapters 5+: Full variants (biologia + quiz + flashcards)
- Chapters 9-13: Include `_memory.html` variant
- This directory deploys to GitHub Pages (see `.github/workflows/deploy-ghpages.yml`)
```

---

## QA Scenarios

### Verify Root AGENTS.md
1. Read `./AGENTS.md`
2. Confirm sections: OVERVIEW, STRUCTURE, WHERE TO LOOK, CONVENTIONS, ANTI-PATTERNS, COMMANDS
3. Verify file paths reference actual files
4. Check no generic advice (applies only to this project)

### Verify enem_biologia/docs/ AGENTS.md
1. Read `./enem_biologia/docs/AGENTS.md`
2. Confirm sections: OVERVIEW, WHERE TO LOOK, CONVENTIONS, NOTES
3. Verify no duplication with root AGENTS.md
4. Check chapter file patterns match actual files

### Final Verification
1. Both files exist at correct paths
2. No content duplication between files
3. All file paths are accurate
4. Size within limits (root: 50-150 lines, subdir: 30-80 lines)

---

## Dependencies

- None (static file creation)

## Estimated Effort

- Low (copy content from plan to files)
