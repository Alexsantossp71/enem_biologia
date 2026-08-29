# Trilhas de Biologia — ENEM

Site educacional de Biologia para o ENEM, com narrativas históricas, **modelos 3D interativos**, ilustrações geradas e quizzes com correção automática.

## 📚 Capítulos (todos publicados)

| Cap. | Tema | Modelo 3D interno | Modelo externo (Sketchfab) |
|---|---|---|---|
| 1 | A Descoberta da Vida Microscópica | Célula animal (Three.js) | — |
| 2 | Composição Química da Vida | Moléculas de água | Enzima Rubisco |
| 3 | DNA e Genética | Dupla hélice de DNA | DNA com animação |
| 4 | Citologia | Célula vegetal (corte) | Célula vegetal detalhada |
| 5 | Metabolismo Energético | Mitocôndria + cloroplasto | Mitocôndria 3D |
| 6 | Divisão Celular | **Mitose interativa (4 fases clicáveis)** | Prófase da mitose |
| 7 | Histologia Animal | Neurônio | Pele humana + neurônio |
| 8 | Botânica | Anatomia da flor | Flor dissecável |
| 9 | Reino Monera | Célula bacteriana | Bactéria |
| 10 | Reino Protista | Ameba + paramécio | Paramécio / ameba |
| 11 | Reino Fungi | Cogumelo + micélio | Coleção de cogumelos |
| 12 | Reino Animalia | Água-viva (cnidário) | Água-viva animada |
| 13 | Ecologia | Pirâmide de energia | Cadeia alimentar ártica |

## 🗂️ Estrutura

```
index.html              ← home com os 13 cards de capítulos
capN_biologia.html      ← página de cada capítulo (2 a 13 gerados por script)
modelo_capitulo.html    ← plantilla oficial para novos capítulos
css/style.css           ← componentes reutilizáveis (ver seção final)
js/main.js              ← navegação + checkQuiz() (correção do quiz)
js/cell-3d.js           ← modelo 3D da célula animal (capítulo 1)
js/three-viewer.js      ← motor 3D compartilhado (12 cenas, capítulos 2–13)
img/                    ← ilustrações (SVG vetoriais + JPG geradas)
tools/                  ← gerador de capítulos + arquivos de conteúdo
```

## ⚙️ Como regenerar os capítulos

Todo o conteúdo ficou separado dos templates:

```bash
python3 tools/build_chapters.py
```

- `tools/caps_2_4.py`, `caps_5_7.py`, `caps_8_10.py`, `caps_11_13.py` — conteúdo (texto, tabelas, quiz, legendas 3D)
- `tools/build_chapters.py` — monta os HTML a partir do modelo

## 🔬 Modelos 3D internos

`js/three-viewer.js` é um módulo Three.js que lê o atributo da página:

```html
<div id="canvas-container" data-three-scene="dna"></div>
```

Cenas disponíveis: `water`, `dna`, `plantCell`, `energy`, `mitosis`, `neuron`, `flower`, `bacteria`, `protozoa`, `fungi`, `jellyfish`, `ecosystem`.

- Arraste para **rotacionar**, use a roda do mouse para **zoom**.
- Na mitose, os botões da página chamam `setViewerStage('prophase' | 'metaphase' | 'anaphase' | 'telophase')`.

Os modelos **externos** (Sketchfab) aparecem em cada capítulo como cartão com link — evita depender de iframes de terceiros e garante que a página funcione offline.

## ✅ Como testar

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000` (ou o endereço do preview do ambiente Arena). O módulo Three.js é carregado de `unpkg.com`, então a primeira carga precisa de internet; o restante do site funciona localmente.

## 📘 Modelo de capítulo (`modelo_capitulo.html`)

Para criar um novo capítulo: copie o arquivo, substitua os `[COLCHETES]`, ajuste a navegação e as respostas do quiz `checkQuiz({ q1: 'b', ... })`. Componentes prontos no CSS: `.chap-nav`, `.tip-card`, `.comparison-table`, `.quiz-card`, `.legend-grid`, `.image-container`, `.steps-list`, `.external-3d-card`, `.scene-stages`.
