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
