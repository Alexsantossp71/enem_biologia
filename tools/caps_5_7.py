# -*- coding: utf-8 -*-
# Conteúdo dos capítulos 5 a 7 — Trilhas de Biologia ENEM

CAPS_5_7 = [

  # ============ CAPÍTULO 5 ============
  {
    "num": 5,
    "title": "Metabolismo Energético",
    "subtitle": "Respiração Celular e Fotossíntese",
    "meta_desc": "Capítulo 5: Metabolismo Energético - ATP, respiração celular, fermentação e fotossíntese para o ENEM.",
    "keywords": "Biologia, ENEM, metabolismo, ATP, respiração celular, fermentação, fotossíntese",
    "og_desc": "Aprenda como as células produzem energia com respiração celular e fotossíntese.",
    "scene": "energy",
    "scene_title": "Mitocôndria e Cloroplasto",
    "legend": [
      ("#FFF3E0", "#FF7043", "🟠", "Mitocôndria", "Usina de energia: respiração celular e ATP."),
      ("#FBE9E7", "#BF360C", "🟤", "Cristas mitocondriais", "Dobras da membrana interna onde ocorre a cadeia respiratória."),
      ("#E8F5E9", "#66BB6A", "🟢", "Cloroplasto", "Cozinha da fotossíntese: capta luz e produz glicose."),
      ("#C8E6C9", "#2E7D32", "🌿", "Tilacoides (grana)", "Discos empilhados onde a luz é convertida em energia química.")
    ],
    "ext3d": (
      "Mitocôndria em 3D (Sketchfab)",
      "https://sketchfab.com/3d-models/mitochondria-ad6c566484804563b8c9101ccea3a915",
      "Modelo 3D da \"usina de energia\" da célula, com as cristas internas visíveis."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "A Moeda Energética da Vida: o ATP",
        "paras": [
          "Toda atividade celular — de um batimento cardíaco a um pensamento — consome energia. Mas a célula não funciona \"a gás\": ela usa uma moeda universal, o <span class='highlight'>ATP</span> (trifosfato de adenosina).",
          "O ATP armazena energia em suas ligações de fosfato. Ao ser quebrado em ADP + P, libera energia para as reações; ao ser reabastecido, estoca energia de novo. O metabolismo é o conjunto de todas essas reações: <strong>anabolismo</strong> (construção) e <strong>catabolismo</strong> (quebra)."
        ]
      },
      {
        "icon": "🔥",
        "title": "Respiração Celular",
        "paras": [
          "A respiração celular quebra a glicose em presença de oxigênio e captura a energia em ATP. Equação geral: <strong>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia</strong>."
        ],
        "img": ("img/mitochondria.jpg", "Corte da mitocôndria com cristas", "Figura 1: Mitocôndria: as cristas aumentam a superfície para produzir ATP."),
        "table": {
          "head": ["Etapa", "Local", "Produção"],
          "rows": [
            ["Glicólise", "Citoplasma", "2 ATP + 2 NADH (quebra da glicose)"],
            ["Ciclo de Krebs", "Matriz mitocondrial", "2 ATP + NADH + FADH₂"],
            ["Cadeia respiratória", "Crista mitocondrial", "~32-34 ATP (máximo de energia)"]
          ]
        },
        "tip": "A respiração celular é <strong>catabólica</strong> (quebra) e produz cerca de <strong>38 ATP</strong> por glicose no modelo clássico. Grande parte do ATP vem da cadeia respiratória."
      },
      {
        "icon": "🍇",
        "title": "Fermentação: Energia Sem Oxigênio",
        "paras": [
          "Quando falta oxigênio, as células usam a fermentação: processo anaeróbio que parte da glicólise e rende apenas <strong>2 ATP</strong> por glicose."
        ],
        "list": [
          "<strong>Fermentação alcoólica</strong> — leveduras (fungos): glicose → etanol + CO₂. Usada no pão, na cerveja e no vinho.",
          "<strong>Fermentação láctica</strong> — bactérias e músculos: glicose → ácido láctico. Usada no iogurte e no queijo; causa a \"queimação\" muscular."
        ]
      },
      {
        "icon": "🌿",
        "title": "Fotossíntese: Transformando Luz em Vida",
        "paras": [
          "A fotossíntese é o processo inverso da respiração: plantas, algas e cianobactérias usam <strong>luz, água e CO₂</strong> para produzir glicose e liberar <strong>oxigênio</strong>. Ela ocorre no cloroplasto, mais especificamente nos <strong>tilacoides</strong> (fase clara) e no <strong>estroma</strong> (fase escura / ciclo de Calvin)."
        ],
        "img": ("img/chloroplast.jpg", "Corte do cloroplasto com tilacoides", "Figura 2: Cloroplasto: os tilacoides (verde escuro) captam luz; o estroma fixa o CO₂."),
        "table": {
          "head": ["Processo", "Tipo", "Entrada", "Saída"],
          "rows": [
            ["Fotossíntese", "Anabólico", "CO₂ + H₂O + luz", "Glicose + O₂"],
            ["Respiração celular", "Catabólico", "Glicose + O₂", "CO₂ + H₂O + energia (ATP)"]
          ]
        },
        "tip": "Fotossíntese <strong>produz</strong> a glicose; respiração <strong>quebra</strong> a glicose. São processos complementares que sustentam a vida no planeta."
      }
    ],
    "quiz": [
      ("Qual é o local da célula onde ocorre o ciclo de Krebs?",
       ["Citoplasma", "Matriz mitocondrial", "Ribossomo", "Membrana plasmática"], "b"),
      ("Na fermentação alcoólica, a glicose é transformada em:",
       ["Ácido láctico", "Glicogênio", "Etanol e CO₂", "Água e O₂"], "c"),
      ("A fotossíntese ocorre nos cloroplastos, mais precisamente:",
       ["No complexo golgiense", "Nos tilacoides e no estroma", "No vacúolo", "No citoesqueleto"], "b")
    ]
  },

  # ============ CAPÍTULO 6 ============
  {
    "num": 6,
    "title": "Divisão Celular",
    "subtitle": "Mitose e Meiose",
    "meta_desc": "Capítulo 6: Divisão Celular - Ciclo celular, fases da mitose e meiose com crossing over para o ENEM.",
    "keywords": "Biologia, ENEM, divisão celular, mitose, meiose, crossing over, cromossomos",
    "og_desc": "Entenda a mitose e a meiose com um modelo 3D interativo das fases.",
    "scene": "mitosis",
    "scene_title": "Mitose Interativa",
    "legend": [
      ("#FFEBEE", "#EF5350", "🔴", "Cromossomos", "Moléculas de DNA condensadas, prontas para se separar."),
      ("#ECEFF1", "#90A4AE", "⚪", "Fuso mitótico", "Filamentos que puxam os cromossomos para os polos."),
      ("#EDE7F6", "#7E57C2", "🟣", "Núcleo", "Envelope que se desfaz na prófase e se reorganiza na telófase."),
      ("#C8E6C9", "#81C784", "🟢", "Membrana / citoplasma", "Limite da célula durante o processo.")
    ],
    "ext3d": (
      "Fases da mitose — célula em prófase (Sketchfab)",
      "https://sketchfab.com/3d-models/cell-division-04-mitosis-prophase-ba5a94e0d7d74eabafb77ba60efe9356",
      "Coleção de modelos 3D de uma célula eucarionte em cada fase da mitose (prófase, metáfase, anáfase, telófase)."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "O Ciclo Celular",
        "paras": [
          "As células não se dividem o tempo todo: elas seguem um <strong>ciclo celular</strong> com duas grandes etapas. Na <strong>interfase</strong> (G1, S, G2), a célula cresce e duplica o DNA — é o período de maior atividade. Depois vem a <strong>fase M</strong>, em que o material genético é dividido."
        ]
      },
      {
        "icon": "🔄",
        "title": "Mitose: A Divisão dos Idênticos",
        "paras": [
          "A mitose produz <strong>duas células-filhas geneticamente idênticas</strong> à mãe (2n → 2n). É o mecanismo de <strong>crescimento, regeneração e reposição de células</strong>. Use os botões abaixo do modelo 3D para ver cada fase!"
        ],
        "img": ("img/mitosis.jpg", "Fases da mitose em sequência", "Figura 1: As quatro fases da mitose: prófase, metáfase, anáfase e telófase."),
        "table": {
          "head": ["Fase", "O que acontece"],
          "rows": [
            ["Prófase", "Cromossomos condensam-se; núcleo se desfaz; fuso começa a se formar."],
            ["Metáfase", "Cromossomos alinham-se no equador (placa metafásica)."],
            ["Anáfase", "Cromátides-irmãs são puxadas para os polos opostos."],
            ["Telófase", "Cromossomos descondensam; núcleos reaparecem; citocinese divide a célula."]
          ]
        }
      },
      {
        "icon": "🧬",
        "title": "Meiose: A Divisão dos Gametas",
        "paras": [
          "A meiose é uma <strong>divisão reducional</strong>: de uma célula 2n, produzem-se <strong>quatro células haploides (n)</strong> — os gametas. São <strong>duas divisões consecutivas</strong> (meiose I e meiose II) com uma única duplicação de DNA."
        ],
        "list": [
          "<strong>Crossing over</strong> — na prófase I, cromossomos homólogos trocam segmentos: aumenta a variabilidade genética.",
          "<strong>Meiose I</strong> — separação dos homólogos (reducional).",
          "<strong>Meiose II</strong> — separação das cromátides-irmãs (equacional).",
          "<strong>Sem meiose não há gametas</strong> — e sem gametas não há reprodução sexuada."
        ],
        "tip": "Mitose = <strong>crescimento e reparo</strong> (2 células idênticas). Meiose = <strong>gametas</strong> (4 células diferentes). Se o ENEM falar em variabilidade genética, a resposta é meiose + crossing over."
      }
    ],
    "quiz": [
      ("Na metáfase da mitose, os cromossomos:",
       ["Condensam-se e o núcleo some", "Alinham-se no equador da célula", "São puxados para os polos", "Descondensam e formam núcleos"], "b"),
      ("Quantas células-filhas e com que ploidia a meiose produz?",
       ["2 células diploides", "4 células haploides", "2 células haploides", "4 células diploides"], "b"),
      ("O crossing over, que aumenta a variabilidade genética, ocorre na:",
       ["Prófase I", "Metáfase II", "Telófase I", "Anáfase II"], "a")
    ]
  },

  # ============ CAPÍTULO 7 ============
  {
    "num": 7,
    "title": "Histologia Animal",
    "subtitle": "Os Tecidos do Corpo Humano",
    "meta_desc": "Capítulo 7: Histologia Animal - Tecido epitelial, conjuntivo, muscular e nervoso para o ENEM.",
    "keywords": "Biologia, ENEM, histologia, tecidos, epitelial, conjuntivo, muscular, nervoso",
    "og_desc": "Conheça os quatro tecidos que formam o corpo humano com um neurônio 3D interativo.",
    "scene": "neuron",
    "scene_title": "Neurônio",
    "legend": [
      ("#FFE0B2", "#FFB74D", "🟠", "Corpo celular (soma)", "Centro metabólico do neurônio, contém o núcleo."),
      ("#FFE0B2", "#FFA726", "🌿", "Dendritos", "Recebem os sinais nervosos de outros neurônios."),
      ("#B2EBF2", "#26C6DA", "🔵", "Axônio", "Leva o impulso nervoso até o terminal sináptico."),
      ("#E0F7FA", "#4FC3F7", "💠", "Bainha de mielina", "Isolante que acelera o impulso nervoso.")
    ],
    "ext3d": (
      "Neurônio com dendritos (Sketchfab)",
      "https://sketchfab.com/3d-models/neuron-with-dendrites-c9a07e3d848e4eb5b1868613d2b69b32",
      "Modelo 3D de um neurônio real renderizado a partir de imagem de microscopia."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "Os Tijolos do Corpo Humano",
        "paras": [
          "Células semelhantes se organizam em <strong>tecidos</strong>; tecidos formam órgãos; órgãos formam sistemas. O corpo humano possui <strong>quatro tipos básicos de tecidos</strong>: epitelial, conjuntivo, muscular e nervoso."
        ],
        "img": ("img/tissues.jpg", "Os quatro tipos de tecido animal", "Figura 1: Os quatro tecidos básicos: epitelial, conjuntivo, muscular e nervoso.")
      },
      {
        "icon": "🧱",
        "title": "Tecido Epitelial",
        "paras": [
          "O tecido epitelial <strong>reveste superfícies</strong> (pele, mucosa do intestino) e forma <strong>glândulas</strong> (sudoríparas, salivares). Suas células são justapostas, com pouquíssima matriz extracelular, e se renovam constantemente."
        ],
        "tip": "Epitélio de revestimento <strong>protege</strong>; epitélio glandular <strong>secreta</strong>. Na pele, ele é avascular — se alimenta por difusão do tecido conjuntivo abaixo."
      },
      {
        "icon": "🩸",
        "title": "Tecido Conjuntivo",
        "paras": [
          "O tecido conjuntivo é o mais abundante do corpo: <strong>une e sustenta</strong> outros tecidos. Diferente do epitelial, tem muita <strong>matriz extracelular</strong>, rica em fibras (colágeno e elastina)."
        ],
        "table": {
          "head": ["Tipo", "Função"],
          "rows": [
            ["Conjuntivo propriamente dito", "Preenche, protege e nutre (derme, tendões)"],
            ["Adiposo", "Reserva de energia, isolamento térmico"],
            ["Cartilaginoso", "Sustentação flexível (orelha, nariz, discos)"],
            ["Ósseo", "Sustentação e proteção; matriz mineralizada"],
            ["Sanguíneo", "Transporte de gases, nutrientes e defesa"]
          ]
        }
      },
      {
        "icon": "💪",
        "title": "Tecido Muscular e Nervoso",
        "paras": [
          "O tecido muscular é especializado em <strong>contração</strong> e movimento. Já o tecido nervoso é especializado em <strong>conduzir impulsos</strong>: viva o neurônio 3D acima!"
        ],
        "table": {
          "head": ["Tecido", "Característica"],
          "rows": [
            ["Estriado esquelético", "Contração voluntária; preso aos ossos."],
            ["Estriado cardíaco", "Contração involuntária; células ramificadas (coração)."],
            ["Liso", "Contração involuntária; órgãos internos (estômago, vasos)."],
            ["Nervoso", "Neurônios + células da glia; condução do impulso."]
          ]
        },
        "tip": "Estriado ≠ voluntário: o <strong>cardíaco é estriado mas involuntário</strong> — pegadinha clássica! O liso é sempre involuntário."
      }
    ],
    "quiz": [
      ("O tecido que reveste superfícies e forma glândulas é o:",
       ["Conjuntivo", "Epitelial", "Muscular", "Nervoso"], "b"),
      ("Qual tecido conjuntivo tem a matriz extracelular mineralizada?",
       ["Adiposo", "Sanguíneo", "Ósseo", "Frouxo"], "c"),
      ("O tecido muscular estriado cardíaco é caracterizado por:",
       ["Contração voluntária", "Contração involuntária e células ramificadas", "Ausência de contração", "Células longas e multinucleadas apenas"], "b")
    ]
  }
]
