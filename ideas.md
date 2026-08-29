# Direção visual — Capítulo 1

## Abordagens consideradas

### Arquivo Vivo
Uma experiência editorial de ciência histórica: papel mineral, verde musgo, âmbar de microscópio e composição de caderno de campo. A página deve parecer uma descoberta documentada, não um dashboard.

**Probability:** 0.07

### Laboratório Luminoso
Uma linguagem clara de museu contemporâneo, com fundos marfim, azul microscópico e diagramas coloridos. O foco seria transformar cada conceito em um pequeno objeto de exposição.

**Probability:** 0.03

### Microscópio Noturno
Uma direção escura e atmosférica, com superfícies profundas, bioluminescência e acentos elétricos para sugerir a entrada em um mundo invisível.

**Probability:** 0.08

## Abordagem escolhida: Arquivo Vivo

### Design Movement
Editorial científico e modernismo de arquivo, inspirado em cadernos de naturalistas, pranchas de história da ciência e interfaces de museus independentes.

### Core Principles
1. A narrativa é a estrutura principal: cada bloco conduz o estudante de uma descoberta histórica ao conceito cobrado no ENEM.
2. Imagens e modelo 3D funcionam como evidência visual, sempre acompanhados de legenda e explicação.
3. A composição é assimétrica, com uma linha do tempo lateral e cartões de leitura que criam ritmo sem parecer um grid genérico.
4. Toda interação tem valor pedagógico: revelar, comparar, rotacionar, responder e receber feedback.

### Color Philosophy
O verde profundo evoca biologia e matéria viva; o osso quente remete a papel de arquivo; o âmbar funciona como marca de atenção e memória; o azul-petróleo cria contraste para o modelo 3D. A cor de destaque própria da marca será **âmbar de microscópio #D9822B**, usada para momentos de descoberta e chamadas essenciais.

### Layout Paradigm
Uma página editorial vertical com uma linha de progresso lateral em desktop e um marcador compacto no mobile. O texto histórico ocupa uma coluna confortável, enquanto imagens e conceitos-chave avançam em módulos alternados. O modelo 3D entra como uma estação de exploração, não como um adorno no final.

### Signature Elements
1. Linha do tempo vertical com marcadores de 1665, 1674, 1838–1839 e século XIX.
2. Etiquetas de arquivo com número da figura, data e tipo de evidência.
3. Blocos “Para o ENEM” com borda âmbar e síntese direta, sempre depois da narrativa que dá contexto ao conceito.

### Interaction Philosophy
Interações devem ser precisas e silenciosas: hover e foco revelam relação; clicar em um marco leva ao trecho correspondente; no modelo 3D, controles de mouse, toque e teclado devem funcionar de modo previsível; no quiz, cada resposta deve gerar explicação, não apenas uma nota.

### Animation
Entradas suaves e curtas, limitadas a opacidade e transform, com um leve deslocamento editorial de 12–20px. O modelo 3D gira lentamente quando ocioso e pausa durante a exploração. A linha do tempo pode destacar o marco atual ao rolar. A experiência respeita `prefers-reduced-motion` e desativa animações não essenciais quando solicitado.

### Typography System
Usar **Fraunces** para títulos e momentos narrativos, com personalidade histórica e contraste editorial; usar **DM Sans** para corpo, interface, dados e controles. Títulos principais grandes e compactos; corpo entre 1rem e 1.12rem com largura de leitura controlada; rótulos de arquivo em caixa alta, espaçamento amplo e tamanho pequeno.

### Brand Essence
Uma trilha de Biologia para estudantes brasileiros que transforma fatos do ENEM em descobertas memoráveis por meio de história, imagem e exploração. Personalidade: **curiosa, rigorosa, humana**.

### Brand Voice
Headlines devem soar como convites à descoberta, sem exagero publicitário. CTAs devem ser específicos e orientados à ação. Microcopy deve explicar o porquê de cada interação.

Exemplos:
- “Antes de existir a teoria, alguém precisou olhar mais de perto.”
- “Gire a célula. Encontre a estrutura. Entenda a função.”

### Wordmark & Logo
O símbolo será uma lente circular interrompida por três pequenos compartimentos, formando simultaneamente uma célula e a letra inicial da marca. O wordmark usará Fraunces em caixa baixa, com uma pequena marca âmbar como ponto de orientação.

### Signature Brand Color
**Âmbar de microscópio — #D9822B.** É a cor da evidência e da descoberta: aparece em marcadores, chamadas, linhas de tempo e estados de interação, sem dominar a leitura.

## Arquitetura da página

A experiência será organizada em: cabeçalho de capítulo e progresso; abertura narrativa sobre Londres em 1665; imagem de Hooke; transição para Leeuwenhoek; imagem de microscopia; formulação da Teoria Celular; comparação entre procariontes e eucariontes; estação 3D com legenda de organelas; síntese “o que o ENEM cobra”; quiz com feedback explicado; e navegação de retorno.

## Decisões de conteúdo

O texto deve ser uma história contínua, mas cada trecho precisa terminar em um conceito explicitamente recuperável pelo estudante. A afirmação sobre procariontes será corrigida para incluir Bacteria e Archaea. A citação histórica de Hooke será tratada como tradução/paráfrase e acompanhada de uma nota de fonte, evitando apresentar uma formulação não verificada como transcrição literal.

## Style Decisions

A interface deve parecer uma página de arquivo científico contemporâneo, não um template de cards. Evitar excesso de bordas arredondadas, gradientes roxos, layouts centrados e ícones decorativos sem função. A prioridade visual é a alternância entre narrativa, evidência e exploração.
