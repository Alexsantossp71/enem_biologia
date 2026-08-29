# Pesquisa de modelo 3D e assets

## Opções verificadas

### Animal Cell — James_Anthony / Sketchfab
URL: https://sketchfab.com/3d-models/animal-cell-737b35f5b779418998d834c28ed15295

O modelo descreve organelas principais, incluindo núcleo, mitocôndrias, retículo endoplasmático e complexo golgiense. A página informa 280,9 mil triângulos, 124,8 mil vértices e licença Creative Commons Attribution 4.0. A licença permite reutilização com atribuição, mas o embed via Sketchfab mantém dependência externa e o arquivo é relativamente pesado.

### Vegetal Cell — Aitordsgn / Sketchfab
URL: https://sketchfab.com/3d-models/vegetal-cell-c3535c0ad21549fea6c55b9c929ceb35

A página apresenta o modelo como recurso educacional e afirma que ele é CC0, mas também exibe a indicação Creative Commons Attribution na seção de licença. Essa inconsistência precisa ser resolvida antes de redistribuir o arquivo. Além disso, é uma célula vegetal, enquanto o Capítulo 1 trabalha principalmente com célula animal.

### Eukaryotic Cell — Center for BioMedical Visualization at SGU / Sketchfab
URL: https://sketchfab.com/3d-models/eukaryotic-cell-b7d84e5f2d5e411fbb195ab2742f2256

É uma representação de célula eucarionte animal com componentes principais e foco educacional. A página informa cerca de 3,5 milhões de triângulos e 1,8 milhão de vértices, o que é pesado para uma página de estudo. O modelo não apresenta licença aberta explícita na página consultada e deve ser tratado como opção para embed, não para download ou redistribuição.

### Google model-viewer
URL: https://modelviewer.dev/docs/

A documentação confirma suporte a modelos glTF/GLB, atributos de acessibilidade como alt e a11y, poster para carregamento e carregamento lazy. A opção é adequada para embutir um arquivo GLB próprio ou autorizado, com uma implementação mais simples e acessível que construir todo o viewer manualmente.

## Decisão aplicada

Foi aplicado o modelo “Animal Cell” de Forged1212 por embed oficial do Sketchfab: https://sketchfab.com/3d-models/animal-cell-abaa9a651c834cdaa67072b32fb0024f. A página informa 4,4 mil triângulos, 1,6 mil vértices e licença Creative Commons Attribution 4.0. O visualizador foi aberto diretamente no navegador e renderizou a célula low-poly com núcleo, mitocôndrias, retículo, complexo golgiense e outras estruturas. O embed evita redistribuir o arquivo e mantém a fonte e a atribuição visíveis na estação de exploração.

Os modelos mais detalhados foram descartados para esta página porque o visualizador informou que estavam pesados demais para o dispositivo de teste. O modelo selecionado é visualmente mais simples, porém adequado para a finalidade didática e muito mais apropriado para desempenho web.

## Assets visuais

As imagens geradas na primeira tentativa apareceram como placeholders de geração no preview. Para evitar dependência de geração assíncrona, a página deve usar os SVGs locais já existentes no repositório original como fallback imediato ou imagens obtidas de fontes com URL estável e direitos claros. Não se deve entregar a nova versão enquanto os placeholders continuarem visíveis.
