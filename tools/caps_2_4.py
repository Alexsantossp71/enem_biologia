# -*- coding: utf-8 -*-
# Conteúdo dos capítulos 2 a 4 — Trilhas de Biologia ENEM
# Estrutura de cada capítulo:
#  num, title, subtitle, meta_desc, keywords, og_desc
#  scene, scene_title, legend[(bg, cor, icone, nome, desc)],
#  ext3d(title, url, desc),
#  sections[{icon,title,paras[],quote?,list[],table?,tip?,img?}]
#  quiz[(pergunta, [a,b,c,d], resposta)]

CAPS_2_4 = [

  # ============ CAPÍTULO 2 ============
  {
    "num": 2,
    "title": "Composição Química da Vida",
    "subtitle": "A Química da Vida",
    "meta_desc": "Capítulo 2: Composição Química da Vida - Água, sais minerais, carboidratos, lipídios, proteínas e enzimas para o ENEM.",
    "keywords": "Biologia, ENEM, água, sais minerais, carboidratos, lipídios, proteínas, enzimas",
    "og_desc": "Entenda as moléculas que formam todos os seres vivos com modelos 3D e quizzes.",
    "scene": "water",
    "scene_title": "Moléculas de Água",
    "legend": [
      ("#FFEBEE", "#EF5350", "🔴", "Oxigênio (O)", "Átomo central da molécula, levemente negativo."),
      ("#FFFFFF", "#546E7A", "⚪", "Hidrogênio (H)", "Átomos menores, levemente positivos."),
      ("#ECEFF1", "#78909C", "🔗", "Ligações covalentes", "Unem os hidrogênios ao oxigênio dentro da molécula."),
      ("#E1F5FE", "#4FC3F7", "💧", "Pontes de hidrogênio", "Ligações fracas entre moléculas de água — essenciais para a vida.")
    ],
    "ext3d": (
      "Rubisco: a enzima da fixação do carbono (Sketchfab)",
      "https://sketchfab.com/3d-models/rubisco-the-enzyme-behind-carbon-fixation-bb36b194b78b46d0b2496ba3700cddca",
      "Modelo molecular real da enzima mais abundante do planeta, com o sítio ativo destacado."
    ),
    "sections": [
      {
        "icon": "💧",
        "title": "A Água: O Solvente Universal da Vida",
        "paras": [
          "Pegue uma gota de água do mar e imagine as colisões invisíveis que acontecem ali dentro: trilhões de moléculas de <span class='highlight'>H₂O</span> se atraem e se afastam o tempo todo. Essa dança molecular é o que permite que a vida exista.",
          "A água representa cerca de <strong>70% da massa do corpo humano</strong> e é o solvente universal: quase todas as reações químicas dos seres vivos acontecem nela. Suas propriedades — <strong>alto calor específico</strong>, <strong>tensão superficial</strong>, <strong>coesão e adesão</strong> — garantem estabilidade térmica e transporte de substâncias."
        ],
        "img": ("img/water_molecules.jpg", "Moléculas de água com pontes de hidrogênio", "Figura 1: Moléculas de água unidas por pontes de hidrogênio (linhas azuis).")
      },
      {
        "icon": "🧂",
        "title": "Sais Minerais: Os Cozinheiros Invisíveis",
        "paras": [
          "Os sais minerais são íons que, mesmo em quantidades pequenas, participam de funções vitais: contração muscular, transmissão nervosa, coagulação e formação de ossos e hemoglobina."
        ],
        "table": {
          "head": ["Íon", "Função principal", "Carência pode causar"],
          "rows": [
            ["Cálcio (Ca²⁺)", "Ossos, dentes, coagulação e contração muscular", "Osteoporose, tetania"],
            ["Sódio (Na⁺) e Potássio (K⁺)", "Transmissão do impulso nervoso e equilíbrio hídrico", "Cãibras, alterações nervosas"],
            ["Ferro (Fe²⁺)", "Componente da hemoglobina (transporte de O₂)", "Anemia ferropriva"],
            ["Iodo (I⁻)", "Produção dos hormônios da tireoide (T3 e T4)", "Bócio"],
            ["Magnésio (Mg²⁺)", "Ativação de enzimas e fotossíntese (clorofila)", "Fraqueza muscular"],
            ["Fósforo (PO₄³⁻)", "DNA, ATP e ossos", "Fadiga, problemas ósseos"]
          ]
        },
        "tip": "A banca adora relacionar <strong>carência de mineral × doença</strong>: ferro → anemia, iodo → bócio, cálcio → osteoporose."
      },
      {
        "icon": "🍞",
        "title": "Carboidratos: O Combustível da Vida",
        "paras": [
          "Quando você come um pão, seu corpo está recebendo a principal fonte de energia imediata: os carboidratos. Eles também têm função estrutural — a <strong>celulose</strong> forma a parede das células vegetais e a <strong>quitina</strong> forma o exoesqueleto dos artrópodes."
        ],
        "list": [
          "<strong>Monossacarídeos</strong> — glicose (C₆H₁₂O₆), frutose e galactose. A glicose é o combustível das células.",
          "<strong>Dissacarídeos</strong> — sacarose (glicose + frutose), lactose (glicose + galactose), maltose (glicose + glicose).",
          "<strong>Polissacarídeos</strong> — amido (reserva vegetal), glicogênio (reserva animal — fígado e músculos), celulose (estrutura vegetal)."
        ],
        "img": ("img/glucose_structure.jpg", "Estrutura em anel da glicose", "Figura 2: Molécula de glicose (C₆H₁₂O₆), o açúcar que alimenta as células.")
      },
      {
        "icon": "🥑",
        "title": "Lipídios: Reserva e Estrutura",
        "paras": [
          "Gorduras, óleos, ceras e esteroides formam o grupo dos lipídios. Eles são <strong>insolúveis em água</strong> e armazenam o dobro de energia por grama que os carboidratos.",
          "Funções: <strong>reserva energética</strong>, <strong>isolamento térmico</strong>, proteção mecânica de órgãos e composição das <strong>membranas celulares</strong> (fosfolipídios e colesterol). Atenção: gorduras <em>trans</em> e saturadas em excesso elevam o risco cardiovascular."
        ]
      },
      {
        "icon": "🥩",
        "title": "Proteínas e Enzimas: As Máquinas da Célula",
        "paras": [
          "Proteínas são polímeros de <span class='highlight'>aminoácidos</span> unidos por ligações peptídicas. Elas são a matéria-prima de músculos, enzimas, anticorpos, hormônios e do transporte de oxigênio.",
          "As <strong>enzimas</strong> são catalisadores biológicos: aceleram reações sem serem consumidas. Cada enzima tem um <strong>sítio ativo</strong> que só encaixa em seu substrato específico — o modelo \"chave e fechadura\". Fatores como <strong>temperatura e pH</strong> alteram sua atividade; valores extremos causam <strong>desnaturação</strong> (perda da forma e da função)."
        ],
        "img": ("img/enzyme_action.jpg", "Enzima encaixando o substrato no sítio ativo", "Figura 3: Enzima (roxo) e substrato (amarelo): o encaixe específico do sítio ativo."),
        "tip": "Enzima <strong>não é consumida</strong> na reação — ela pode atuar várias vezes. Desnaturação = perda de forma por calor ou pH extremo (como a clara de ovo que coagula ao cozinhar)."
      }
    ],
    "quiz": [
      ("Qual propriedade da água ajuda a manter a temperatura do corpo estável?",
       ["Alto calor específico", "Baixa tensão superficial", "Poder de dissolver lipídios", "Ausência de ligações de hidrogênio"], "a"),
      ("Qual carboidrato é o polissacarídeo de reserva energética dos animais?",
       ["Amido", "Celulose", "Glicogênio", "Sacarose"], "c"),
      ("Uma enzima perdeu sua função após ser aquecida a 100 °C. Esse processo é chamado de:",
       ["Hidrólise", "Desnaturação", "Síntese", "Fermentação"], "b")
    ]
  },

  # ============ CAPÍTULO 3 ============
  {
    "num": 3,
    "title": "DNA e Genética",
    "subtitle": "O Código da Vida",
    "meta_desc": "Capítulo 3: DNA e Genética - Dupla hélice, replicação, síntese de proteínas e as leis de Mendel para o ENEM.",
    "keywords": "Biologia, ENEM, DNA, genética, Mendel, dupla hélice, transcrição, tradução",
    "og_desc": "Descubra o código da vida: estrutura do DNA, síntese de proteínas e as leis de Mendel.",
    "scene": "dna",
    "scene_title": "Dupla Hélice de DNA",
    "legend": [
      ("#FFF3E0", "#FF7043", "🟠", "Base adenina (A)", "Pareia sempre com a timina (T)."),
      ("#F3E5F5", "#AB47BC", "🟣", "Base citosina (C)", "Pareia sempre com a guanina (G)."),
      ("#FFF9C4", "#FFCA28", "🟡", "Base timina (T) / guanina (G)", "Complementares: A–T e C–G."),
      ("#E0F7FA", "#26C6DA", "🔵", "Esqueleto açúcar-fosfato", "As duas fitas antiparalelas da hélice.")
    ],
    "ext3d": (
      "Estrutura de DNA com animação (Sketchfab)",
      "https://sketchfab.com/3d-models/dna-structure-with-animation-d060d2b42c5641c0917c84d39b08ba3f",
      "Modelo 3D da dupla hélice com os pares de bases e o esqueleto açúcar-fosfato."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "1953: A Corrida pelo Código da Vida",
        "paras": [
          "Em um laboratório de Cambridge, na Inglaterra, duas jovens mentes — <span class='highlight'>James Watson</span> e <span class='highlight'>Francis Crick</span> — tentavam desvendar a estrutura da molécula mais importante do corpo: o DNA.",
          "Eles usaram dados decisivos de outros cientistas: a <strong>foto 51</strong>, a famosa imagem de difração de raios X da <strong>Rosalind Franklin</strong>, e as <strong>regras de Chargaff</strong> (A=T e C=G). Em 25 de abril de 1953, publicaram o modelo da dupla hélice na revista <em>Nature</em> — uma das maiores descobertas da ciência."
        ],
        "quote": ("It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.",
                  "Watson & Crick, Nature (1953)")
      },
      {
        "icon": "🧬",
        "title": "A Dupla Hélice: Como o DNA é Estruturado",
        "paras": [
          "O DNA é formado por duas fitas <span class='highlight'>antiparalelas</span> enroladas em hélice. Cada fita é um polímero de <strong>nucleotídeos</strong>, formados por um fosfato, um açúcar (desoxirribose) e uma base nitrogenada.",
          "As bases pareiam de forma complementar: <strong>Adenina (A) liga-se à Timina (T)</strong> com 2 pontes de hidrogênio e <strong>Citosina (C) liga-se à Guanina (G)</strong> com 3 pontes. Essa regra de pareamento é a base da replicação e da hereditariedade."
        ],
        "img": ("img/dna_helix.jpg", "Dupla hélice de DNA com pares de bases", "Figura 1: Dupla hélice: as fitas são o esqueleto e as \"escadas\" são os pares de bases A–T e C–G."),
        "table": {
          "head": ["Base", "Pareia com", "Pontes de H", "Tipo"],
          "rows": [
            ["Adenina (A)", "Timina (T)", "2", "Purina"],
            ["Timina (T)", "Adenina (A)", "2", "Pirimidina"],
            ["Citosina (C)", "Guanina (G)", "3", "Pirimidina"],
            ["Guanina (G)", "Citosina (C)", "3", "Purina"]
          ]
        }
      },
      {
        "icon": "🔄",
        "title": "Replicação e Síntese de Proteínas",
        "paras": [
          "Na <strong>replicação</strong>, a dupla hélice se abre (enzima helicase) e cada fita serve de molde para uma nova fita complementar (DNA polimerase). O resultado: duas moléculas idênticas de DNA — o que explica a transmissão da informação genética."
        ],
        "img": ("img/dna_replication.jpg", "Replicação do DNA com helicase e polimerase", "Figura 2: Forquilha de replicação: cada fita original serve de molde."),
        "list": [
          "<strong>Transcrição</strong> — no núcleo, a fita de DNA é copiada em RNA mensageiro (RNAm).",
          "<strong>Tradução</strong> — no citoplasma, os ribossomos leem o RNAm e montam a proteína; cada <strong>códon</strong> (3 bases) determina um aminoácido.",
          "<strong>GENE</strong> — trecho de DNA que codifica uma proteína (ou RNA)."
        ],
        "tip": "A ordem do fluxo da informação é <strong>DNA → RNA → Proteína</strong>. Anticódon fica no RNA transportador; códon fica no RNA mensageiro — não confunda!"
      },
      {
        "icon": "⚖️",
        "title": "Genética de Mendel: As Leis da Herança",
        "paras": [
          "No século XIX, <span class='highlight'>Gregor Mendel</span>, monge austríaco, estudou ervilhas e descobriu como as características são transmitidas. Cada característica é controlada por <strong>alelos</strong> (versões de um gene): um <strong>dominante</strong> (A) e um <strong>recessivo</strong> (a)."
        ],
        "table": {
          "head": ["Conceito", "Definição"],
          "rows": [
            ["Genótipo", "Constituição genética (AA, Aa, aa)"],
            ["Fenótipo", "Característica observável (ex.: semente lisa)"],
            ["Homozigoto", "Alelos iguais (AA ou aa)"],
            ["Heterozigoto", "Alelos diferentes (Aa)"],
            ["1ª Lei de Mendel", "Cada par de alelos se separa na formação dos gametas"],
            ["2ª Lei de Mendel", "Genes de características diferentes se segregam de forma independente"]
          ]
        },
        "tip": "Cruzamento de dois heterozigotos (Aa × Aa) → <strong>3:1</strong> no fenótipo (75% dominante, 25% recessivo). Esse é o clássico do ENEM."
      }
    ],
    "quiz": [
      ("Quem foram os pesquisadores que publicaram o modelo da dupla hélice do DNA em 1953?",
       ["Mendel e Darwin", "Watson e Crick", "Hooke e Leeuwenhoek", "Schleiden e Schwann"], "b"),
      ("Segundo a regra de complementaridade, a adenina (A) pareia sempre com:",
       ["Guanina (G)", "Citosina (C)", "Timina (T)", "Uracila (U)"], "c"),
      ("Na 1ª Lei de Mendel, os alelos de um gene:",
       ["São sempre idênticos", "Ficam juntos nos gametas", "Se separam na formação dos gametas", "Nunca se expressam"], "c")
    ]
  },

  # ============ CAPÍTULO 4 ============
  {
    "num": 4,
    "title": "Citologia",
    "subtitle": "A Célula e Suas Organelas",
    "meta_desc": "Capítulo 4: Citologia - Organelas, membrana plasmática, transporte celular e diferenças entre célula animal e vegetal para o ENEM.",
    "keywords": "Biologia, ENEM, citologia, organelas, membrana, transporte, célula vegetal",
    "og_desc": "Explore o interior da célula: organelas, membrana e os segredos do transporte celular.",
    "scene": "plantCell",
    "scene_title": "Célula Vegetal (corte)",
    "legend": [
      ("#E8F5E9", "#2E7D32", "🟢", "Parede celular", "Estrutura rígida que dá forma e proteção — exclusiva das plantas."),
      ("#E1F5FE", "#4FC3F7", "🔵", "Vacúolo central", "Reserva de água e sustância — dá turgidez à célula vegetal."),
      ("#EDE7F6", "#5C6BC0", "🟣", "Núcleo", "Centro de controle, guarda o DNA."),
      ("#E8F5E9", "#66BB6A", "🌿", "Cloroplastos", "Orgãos da fotossíntese, exclusivos de plantas e algas.")
    ],
    "ext3d": (
      "Célula vegetal detalhada (Sketchfab)",
      "https://sketchfab.com/3d-models/plant-cell-7fe3ac29756a45c6b678804a8da8a760",
      "Modelo 3D gratuito com todas as organelas da célula vegetal rotuladas."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "A Cidade Celular",
        "paras": [
          "Imagine uma cidade dentro de um milésimo de milímetro: a <strong>membrana plasmática</strong> é o muro alfandegário, o <strong>núcleo</strong> é a prefeitura, as <strong>mitocôndrias</strong> são as usinas de energia e o <strong>complexo golgiense</strong> é o centro de distribuição.",
          "A célula é a <strong>unidade estrutural e funcional</strong> dos seres vivos (Teoria Celular). Conhecer suas organelas — e suas funções — é uma das habilidades mais cobradas no ENEM."
        ]
      },
      {
        "icon": "🏭",
        "title": "As Organelas e Suas Funções",
        "paras": [
          "Cada organela tem um papel específico e coordenado. Memorize a função — não apenas o nome:"
        ],
        "table": {
          "head": ["Organela", "Função"],
          "rows": [
            ["Membrana plasmática", "Delimita e controla a entrada/saída de substâncias"],
            ["Núcleo", "Contém o DNA; controla as atividades celulares"],
            ["Ribossomos", "Síntese de proteínas"],
            ["Retículo endoplasmático", "Transporte interno (rugoso: proteínas; liso: lipídios)"],
            ["Complexo golgiense", "Empacota, modifica e secreta proteínas"],
            ["Lisossomos", "Digestão intracelular (\"lixo\" da célula)"],
            ["Mitocôndrias", "Respiração celular e produção de ATP"],
            ["Peroxissomos", "Oxidação de substâncias (ex.: álcool)"],
            ["Centríolos", "Formam o fuso e ajudam na divisão celular"]
          ]
        }
      },
      {
        "icon": "🔬",
        "title": "A Membrana Plasmática e o Transporte",
        "paras": [
          "A membrana é um <span class='highlight'>mosaico fluido</span>: uma bicamada de fosfolipídios com proteínas, colesterol e glicídios encaixados. Ela é <strong>semipermeável</strong> — deixa passar algumas substâncias e bloqueia outras."
        ],
        "img": ("img/cell_membrane.jpg", "Mosaico fluido da membrana plasmática", "Figura 1: Bicamada de fosfolipídios com proteínas e colesterol: o mosaico fluido."),
        "list": [
          "<strong>Difusão simples</strong> — sem gasto de energia; passagem de O₂ e CO₂.",
          "<strong>Difusão facilitada</strong> — com proteínas transportadoras, sem gasto de energia.",
          "<strong>Osmose</strong> — passagem de água do meio hipotônico para o hipertônico, sem gasto de energia.",
          "<strong>Transporte ativo</strong> — contra o gradiente, <strong>com gasto de energia</strong> (ex.: bomba de sódio e potássio)."
        ],
        "tip": "Meio <strong>hipotônico</strong> → água entra → hemácia incha (lise). Meio <strong>hipertônico</strong> → água sai → hemácia murcha (crenação). É figurinha carimbada do ENEM."
      },
      {
        "icon": "🌱",
        "title": "Célula Vegetal × Célula Animal",
        "paras": [
          "As células vegetais têm estruturas que as animais não possuem — e é exatamente isso que a banca cobra."
        ],
        "img": ("img/plant_cell.svg", "Célula vegetal com parede celular, vacúolo e cloroplastos", "Figura 2: Célula vegetal: parede celular, grande vacúolo central e cloroplastos."),
        "table": {
          "head": ["Estrutura", "Vegetal", "Animal"],
          "rows": [
            ["Parede celular", "✅ Sim", "❌ Não"],
            ["Cloroplastos", "✅ Sim", "❌ Não"],
            ["Vacúolo de grande volume", "✅ Sim", "❌ Não"],
            ["Lisossomos", "✅ Sim (poucos)", "✅ Sim"],
            ["Centríolos", "❌ Não (na maioria)", "✅ Sim"]
          ]
        },
        "tip": "Truque de memorização: a célula vegetal é \"verde, quadrada e cheia de água\" — cloroplastos, parede e vacúolo."
      }
    ],
    "quiz": [
      ("Qual organela é responsável pela digestão intracelular?",
       ["Complexo golgiense", "Lisossomo", "Ribossomo", "Peroxissomo"], "b"),
      ("São estruturas presentes em células vegetais, mas ausentes em células animais:",
       ["Mitocôndrias e núcleo", "Ribossomos e retículo", "Parede celular e cloroplastos", "Complexo golgiense e centríolos"], "c"),
      ("O transporte de glicose através da membrana com consumo de energia é chamado de:",
       ["Difusão simples", "Osmose", "Difusão facilitada", "Transporte ativo"], "d")
    ]
  }
]
