# -*- coding: utf-8 -*-
# Conteúdo dos capítulos 8 a 10 — Trilhas de Biologia ENEM

CAPS_8_10 = [

  # ============ CAPÍTULO 8 ============
  {
    "num": 8,
    "title": "Botânica",
    "subtitle": "O Reino Vegetal",
    "meta_desc": "Capítulo 8: Botânica - Briófitas, pteridófitas, gimnospermas, angiospermas e reprodução das flores para o ENEM.",
    "keywords": "Biologia, ENEM, botânica, plantas, angiospermas, gimnospermas, flor, fotossíntese",
    "og_desc": "Do musgo à árvore: explore os grupos de plantas e a anatomia da flor em 3D.",
    "scene": "flower",
    "scene_title": "Anatomia da Flor",
    "legend": [
      ("#FCE4EC", "#F48FB1", "🌸", "Pétalas", "Atraem polinizadores com cores e perfumes."),
      ("#E8F5E9", "#66BB6A", "🍃", "Sépalas", "Protegem a flor em botão (receptáculo)."),
      ("#FFF3E0", "#FF8F00", "🍊", "Estames (anteras)", "Estruturas masculinas: produzem o pólen."),
      ("#C8E6C9", "#43A047", "🌱", "Pistilo (ovário)", "Estrutura feminina: contém os óvulos (sementes).")
    ],
    "ext3d": (
      "Anatomia da flor (Sketchfab)",
      "https://sketchfab.com/3d-models/flower-anatomy-9620274fba1c4c5f8ac74764eec5bf83",
      "Modelo 3D com todas as partes da flor dissecáveis: pétalas, estames e pistilo."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "O Reino dos Fotossintetizantes",
        "paras": [
          "As plantas são <strong>eucariontes, pluricelulares e autotróficos</strong>: produzem seu próprio alimento por fotossíntese. Suas células têm <strong>parede celular de celulose</strong>. A botânica divide as plantas em <strong>quatro grandes grupos</strong>, do mais simples ao mais evoluído: briófitas, pteridófitas, gimnospermas e angiospermas."
        ],
        "img": ("img/plant_groups.svg", "Os quatro grupos de plantas", "Figura 1: Os quatro grupos vegetais: musgo (briófita), samambaia (pteridófita), pinheiro (gimnosperma) e planta com flor (angiosperma).")
      },
      {
        "icon": "🌱",
        "title": "Plantas Sem Sementes e Com Sementes",
        "paras": [
          "A evolução das plantas pode ser contada por três grandes conquistas: <strong>vasos condutores</strong> (seiva), <strong>sementes</strong> e <strong>flores e frutos</strong>."
        ],
        "table": {
          "head": ["Grupo", "Vasos", "Sementes", "Flor/Fruto", "Exemplos"],
          "rows": [
            ["Briófitas", "❌", "❌", "❌", "Musgos, hepáticas"],
            ["Pteridófitas", "✅", "❌", "❌", "Samambaias, avencas"],
            ["Gimnospermas", "✅", "✅ (nuas)", "❌", "Pinheiros, araucárias"],
            ["Angiospermas", "✅", "✅", "✅", "Flores, árvores frutíferas"]
          ]
        },
        "tip": "Regra mnemônica: <strong>BPSFA</strong> — Briófitas, Pteridófitas, Gimnospermas, Angiospermas. Só angiospermas têm <strong>fruto</strong> (protege a semente e ajuda na dispersão)."
      },
      {
        "icon": "🌻",
        "title": "A Flor e a Reprodução das Angiospermas",
        "paras": [
          "A flor é o órgão reprodutor das angiospermas. No <strong>estame</strong> (parte masculina), as anteras produzem <strong>pólen</strong>. No <strong>pistilo</strong> (parte feminina), o estigma recebe o pólen, que desce pelo estilete até o ovário, onde ocorre a <strong>fecundação</strong> dos óvulos."
        ],
        "img": ("img/flower_anatomy.svg", "Corte de uma flor com estames e pistilo", "Figura 2: Anatomia da flor: pétalas, sépalas, estames e pistilo."),
        "list": [
          "<strong>Polinização</strong> — transporte do pólen (vento, insetos, aves).",
          "<strong>Fecundação dupla</strong> — exclusiva das angiospermas: um gameta forma o embrião; outro forma o endosperma.",
          "<strong>Fruto</strong> — ovário desenvolvido que protege a semente.",
          "<strong>Dispersão</strong> — sementes viajam pelo vento, água ou animais."
        ],
        "tip": "O <strong>fruto</strong> vem do ovário (ex.: tomate). A <strong>semente</strong> vem do óvulo (ex.: grão dentro do tomate). Não confunda os dois!"
      }
    ],
    "quiz": [
      ("São as primeiras plantas a possuir vasos condutores de seiva:",
       ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"], "b"),
      ("Qual grupo vegetal possui flores e frutos?",
       ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"], "d"),
      ("Na flor, o pólen é produzido:",
       ["No pistilo", "Nas sépalas", "Nas anteras dos estames", "No ovário"], "c")
    ]
  },

  # ============ CAPÍTULO 9 ============
  {
    "num": 9,
    "title": "Reino Monera",
    "subtitle": "Bactérias e Cianobactérias",
    "meta_desc": "Capítulo 9: Reino Monera - Bactérias, cianobactérias, reprodução, importância e doenças bacterianas para o ENEM.",
    "keywords": "Biologia, ENEM, monera, bactérias, procariontes, cianobactérias, antibióticos",
    "og_desc": "Descubra o mundo invisível das bactérias com um modelo 3D interativo da célula bacteriana.",
    "scene": "bacteria",
    "scene_title": "Célula Bacteriana",
    "legend": [
      ("#FFF9C4", "#F9A825", "🟡", "Cápsula", "Camada externa de proteção e adesão."),
      ("#ECEFF1", "#78909C", "⚙️", "Parede celular", "Determina a forma e a coloração de Gram."),
      ("#EDE7F6", "#5C6BC0", "🟣", "Nucleoide (DNA)", "DNA circular sem núcleo definido — bactéria é procarionte."),
      ("#E0F7FA", "#4FC3F7", "🔵", "Flagelos", "Estruturas de locomoção da bactéria.")
    ],
    "ext3d": (
      "Célula bacteriana (Sketchfab)",
      "https://sketchfab.com/3d-models/bacteria-cell-9e0b6a21961f41b6ba78cc1486fe140b",
      "Modelo 3D de uma célula bacteriana com cápsula, parede e flagelos."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "Os Invisíveis que Dominam a Terra",
        "paras": [
          "Uma única colher de terra contém mais bactérias do que pessoas no planeta. O Reino Monera reúne organismos <span class='highlight'>procariontes</span>: células <strong>sem núcleo definido</strong> e <strong>sem organelas membranosas</strong>.",
          "São unicelulares e microscópicos, mas absolutamente essenciais: decompõem a matéria, fixam nitrogênio, produzem alimentos (iogurte, queijo) e medicamentos (antibióticos)."
        ]
      },
      {
        "icon": "🦠",
        "title": "Anatomia de uma Bactéria",
        "paras": [
          "A célula bacteriana é simples, mas muito eficiente. Gire o modelo 3D acima para ver cada estrutura."
        ],
        "img": ("img/bacteria.svg", "Bactéria em corte com flagelos e nucleoide", "Figura 1: Estrutura de uma bactéria: cápsula, parede, nucleoide, ribossomos, plasmídeos e flagelos."),
        "table": {
          "head": ["Estrutura", "Função"],
          "rows": [
            ["Cápsula", "Proteção e adesão (fator de virulência)"],
            ["Parede celular", "Forma + classificação de Gram (⏺ Gram+ / ⏺ Gram−)"],
            ["Membrana plasmática", "Controle do transporte de substâncias"],
            ["Nucleoide", "DNA circular — material genético (sem núcleo)"],
            ["Plasmídeos", "DNA extra circular; resistência a antibióticos"],
            ["Ribossomos", "Síntese de proteínas"],
            ["Flagelos e fímbrias", "Locomoção e adesão"]
          ]
        }
      },
      {
        "icon": "🔄",
        "title": "Reprodução, Doenças e Importância",
        "paras": [
          "A reprodução típica é a <strong>bipartida (cissiparidade)</strong>: a célula duplica o DNA e se divide em duas. Em condições ideais, uma bactéria pode se dividir a cada 20 minutos! O <strong>plasmídeo</strong> pode ser trocado entre bactérias num processo chamado <strong>conjugação</strong> — uma das formas de disseminar resistência a antibióticos."
        ],
        "table": {
          "head": ["Doença", "Bactéria causadora", "Transmissão"],
          "rows": [
            ["Tuberculose", "Mycobacterium tuberculosis", "Gotículas de saliva"],
            ["Cólera", "Vibrio cholerae", "Água e alimentos contaminados"],
            ["Tétano", "Clostridium tetani", "Ferimentos (esporos)"],
            ["Leptospirose", "Leptospira", "Água com urina de roedores"],
            ["Meningite bacteriana", "Neisseria meningitidis", "Vias respiratórias"],
            ["Gonorreia", "Neisseria gonorrhoeae", "Relações sexuais"]
          ]
        },
        "tip": "Antibióticos atuam na <strong>parede celular bacteriana</strong> (que não existe em vírus — por isso antibiótico não trata gripe!). E <strong>cyanobactérias</strong> são procariontes fotossintetizantes, responsáveis por grande parte do O₂ da Terra."
      }
    ],
    "quiz": [
      ("Uma característica das bactérias (Reino Monera) é:",
       ["Núcleo definido", "Ausência de núcleo definido", "Organelas membranosas", "Parede de quitina"], "b"),
      ("O DNA bacteriano circular, sem membrana nuclear, é chamado de:",
       ["Plasmídeo", "Nucleoide", "Cromatina", "Ribossomo"], "b"),
      ("A tuberculose é causada por:",
       ["Vírus", "Fungo", "Bactéria", "Protozoário"], "c")
    ]
  },

  # ============ CAPÍTULO 10 ============
  {
    "num": 10,
    "title": "Reino Protista",
    "subtitle": "Protozoários e Algas",
    "meta_desc": "Capítulo 10: Reino Protista - Protozoários, algas, doenças protozoárias e importância ecológica para o ENEM.",
    "keywords": "Biologia, ENEM, protista, protozoários, algas, malária, amebíase, eucariontes",
    "og_desc": "Conheça a ameba e o paramécio em 3D e entenda as doenças protozoárias.",
    "scene": "protozoa",
    "scene_title": "Ameba e Paramécio",
    "legend": [
      ("#FCE4EC", "#F48FB1", "🌸", "Ameba (pseudópodes)", "Move-se e captura alimento por pseudópodes."),
      ("#EDE7F6", "#AB47BC", "🟣", "Núcleo", "Estrutura típica de célula eucarionte."),
      ("#E1F5FE", "#4FC3F7", "🔵", "Paramécio (cílios)", "Locomoção por milhares de cílios."),
      ("#E0F7FA", "#81D4FA", "💠", "Vacúolos", "Digestão e controle da água (osmose).")
    ],
    "ext3d": (
      "Ameba e paramécio (Sketchfab)",
      "https://sketchfab.com/3d-models/paramecium-0dfb131445d14016a3fd78d7cd76063b",
      "Modelos 3D de protozoários: paramécio com organelas e ameba com pseudópodes."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "Os Primeiros Eucariontes",
        "paras": [
          "O Reino Protista reúne organismos <span class='highlight'>eucariontes</span> (células com núcleo definido) e, na maioria, unicelulares. São divididos em dois grandes grupos de interesse do ENEM: os <strong>protozoários</strong> (heterótrofos) e as <strong>algas</strong> (autótrofos fotossintetizantes)."
        ]
      },
      {
        "icon": "🦠",
        "title": "Protozoários: Classificação pela Locomoção",
        "paras": [
          "Os protozoários são classificados pelo tipo de locomoção — e o tipo de locomoção também indica a doença que causam. Assim, é só decorar: locomoção → doença → agente."
        ],
        "img": ("img/protozoa.svg", "Ameba com pseudópodes e paramécio com cílios", "Figura 1: Ameba (pseudópodes) e paramécio (cílios): a locomoção define o grupo."),
        "table": {
          "head": ["Grupo", "Locomoção", "Doença", "Agente"],
          "rows": [
            ["Rizópodes", "Pseudópodes", "Amebíase", "Entamoeba histolytica"],
            ["Flagelados", "Flagelos", "Doença de Chagas", "Trypanosoma cruzi"],
            ["Flagelados", "Flagelos", "Leishmaniose", "Leishmania"],
            ["Ciliados", "Cílios", "Raramente patogênicos", "Paramecium"],
            ["Esporozoários", "Sem locomoção própria", "Malária", "Plasmodium"]
          ]
        }
      },
      {
        "icon": "🦟",
        "title": "Vetores: Como as Doenças Chegam Até Nós",
        "paras": [
          "A maioria das protozooses precisa de um <strong>vetor</strong> para chegar ao ser humano. Identificar o vetor é a chave para responder as questões do ENEM."
        ],
        "list": [
          "<strong>Barbeiro (triatomíneo)</strong> → Trypanosoma cruzi → Doença de Chagas.",
          "<strong>Anopheles (mosquito)</strong> → Plasmodium → Malária.",
          "<strong>Mosquito palha (flebotomíneo)</strong> → Leishmania → Leishmaniose.",
          "<strong>Água/alimentos contaminados</strong> → Entamoeba → Amebíase."
        ],
        "tip": "Ciclo de vida do Trypanosoma cruzi: barbeiro → fezes → ferida → sangue. Por isso a transmissão ocorre principalmente à noite, quando o inseto pica."
      },
      {
        "icon": "🌿",
        "title": "Algas: O Pulmão dos Oceanos",
        "paras": [
          "As algas são protistas <strong>autotróficos</strong>: fazem fotossíntese e produzem <strong>cerca de 70% do oxigênio</strong> do planeta. Podem ser unicelulares (como a diatomácea e a Euglena) ou pluricelulares (como a alga verde e a alga vermelha).",
          "Além do oxigênio, produzem a base das cadeias alimentares aquáticas e são fonte de <strong>agar</strong> (meio de cultura), alginato e fertilizantes."
        ],
        "tip": "A <strong>Euglena</strong> é a pegadinha favorita: tem cloroplastos (fotossíntese) E flagelo (locomoção) — por isso é classificada como protista, não como planta."
      }
    ],
    "quiz": [
      ("A doença de Chagas é causada pelo Trypanosoma cruzi e transmitida:",
       ["Pelo mosquito Anopheles", "Pelo barbeiro", "Pela água contaminada", "Pelo ar"], "b"),
      ("A ameba se locomove por:",
       ["Cílios", "Flagelos", "Pseudópodes", "Nadadeiras"], "c"),
      ("Qual grupo de protozoários causa a malária?",
       ["Rizópodes", "Flagelados", "Ciliados", "Esporozoários"], "d")
    ]
  }
]
