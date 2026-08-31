# 3D Models — Biologia ENEM

Royalty-free biology 3D models (GLB / glTF 2.0) for the immersive chapter scenes of the *biologia_enem* educational platform.

All models are safe for educational use. The real models come from the **NIH 3D Print Exchange** (public domain / CC0), mirrored in the open-source repository [`QI-flowy/3DArchitectureStudio`](https://github.com/QI-flowy/3DArchitectureStudio). Placeholder files are minimal valid glTF 2.0 stubs (48 bytes) that render an empty scene — they exist so every chapter has a loadable model file and can be swapped for a real model later.

## Real models (downloaded)

| File | Chapter scene | Source | License |
|------|---------------|--------|---------|
| `animal-cell.glb` | Eukaryote / animal cell | [NIH 3D Print Exchange](https://3dprint.nih.gov/) via `QI-flowy/3DArchitectureStudio/models/animal-cell-nih.glb` | CC0 / Public Domain |
| `bacteria.glb` | Bacteria | [NIH 3D Print Exchange](https://3dprint.nih.gov/) via `QI-flowy/3DArchitectureStudio/models/bacteria-wall-nih.glb` | CC0 / Public Domain |
| `neuron.glb` | Neuron | [NIH 3D Print Exchange](https://3dprint.nih.gov/) via `QI-flowy/3DArchitectureStudio/models/neuron-nih.glb` | CC0 / Public Domain |

## Placeholder models (minimal valid GLB stubs)

These are valid glTF 2.0 files with an empty scene. They are placeholders for chapters that still need a real model; replace them with a CC0/royalty-free model when available.

| File | Chapter scene | Status |
|------|---------------|--------|
| `dna.glb` | DNA | Placeholder — replace with a DNA double-helix model |
| `mitochondria.glb` | Mitochondria | Placeholder — replace with a mitochondrion model |
| `plant-cell.glb` | Plant cell | Placeholder — replace with a plant-cell model |
| `energy.glb` | Energy / metabolism | Placeholder |
| `mitosis.glb` | Mitosis | Placeholder |
| `flower.glb` | Flower / angiosperms | Placeholder |
| `protozoa.glb` | Protozoa | Placeholder |
| `fungi.glb` | Fungi | Placeholder |
| `jellyfish.glb` | Jellyfish / cnidarians | Placeholder |
| `ecosystem.glb` | Ecosystem | Placeholder |
| `water.glb` | Water / biochemistry | Placeholder |
| `eukaryote.glb` | Eukaryote | Placeholder |

## Notes

- **Format**: All files are binary glTF 2.0 (`.glb`), loadable directly with Three.js `GLTFLoader`.
- **Licensing**: The three real models are from the NIH 3D Print Exchange and are public domain (CC0), so they are safe for educational and commercial use. Placeholders are original minimal stubs (no third-party content).
- **Skipped models**: `plant-cell-first001.glb` and `white-blood-cell-user.glb` from the same source were intentionally **not** downloaded because they exceed the 5 MB size limit for this task.
- **Source repo**: https://github.com/QI-flowy/3DArchitectureStudio