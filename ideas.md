# Ideias e Arquitetura — ENEM Biologia

Site estático (HTML + CSS + JS puro, sem etapa de build) publicado via GitHub Pages.

## Estrutura
- `index.html` — portal com cards de navegação para os 13 capítulos.
- `cap1_biologia.html` … `cap13_biologia.html` — conteúdo de cada capítulo.
- `css/style.css` — estilos, modo escuro (prefers-color-scheme + toggle manual) e a11y.
- `js/main.js` — `checkQuiz()` (validação de quizzes) e toggle de tema.
- `js/three-viewer.js` — viewer 3D único (Three.js via CDN) com cenas por `data-three-scene`.
- `js/sw.js` — service worker para cache offline.
- `tests/checkQuiz.test.cjs` — testes da função `checkQuiz` (Node, sem browser).

## Decisões
- Three.js carregado via CDN unpkg (sem node_modules) para manter o repositório leve.
- Uma única implementação de viewer 3D (`three-viewer.js`) substituiu o antigo `cell-3d.js`.
- Modo escuro respeita a preferência do sistema e permite alternância manual persistida em localStorage.

## Próximos passos possíveis
- Adicionar mais cenas 3D (ex.: mitocôndria, membrana) por capítulo.
- Internacionalização / modo de leitura acessível.
- Testes de regressão para o viewer 3D (jsdom + WebGL headless).
