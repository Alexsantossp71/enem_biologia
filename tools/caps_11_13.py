# -*- coding: utf-8 -*-
# Conteúdo dos capítulos 11 a 13 — Trilhas de Biologia ENEM

CAPS_11_13 = [

  # ============ CAPÍTULO 11 ============
  {
    "num": 11,
    "title": "Reino Fungi",
    "subtitle": "Fungos: Decompositores do Planeta",
    "meta_desc": "Capítulo 11: Reino Fungi - Estrutura, grupos, reprodução, fermentação, micoses e importância ecológica para o ENEM.",
    "keywords": "Biologia, ENEM, fungos, leveduras, micélio, hifas, micoses, decomposição",
    "og_desc": "Explore o reino dos fungos com um cogumelo 3D e entenda seu papel na natureza.",
    "scene": "fungi",
    "scene_title": "Cogumelo e Micélio",
    "legend": [
      ("#FFEBEE", "#EF5350", "🍄", "Chapéu (pileo)", "Estrutura de reprodução: produz esporos."),
      ("#FFF3E0", "#FFE0B2", "🌱", "Hifas / micélio", "Filamentos que absorvem nutrientes do solo."),
      ("#FFF9C4", "#FFF9C4", "✨", "Esporos", "Unidades de reprodução — leves e dispersas pelo vento."),
      ("#EFEBE9", "#D7CCC8", "🌿", "Rede de micélio", "Rede subterrânea que conecta e nutre o fungo.")
    ],
    "ext3d": (
      "Coleção de cogumelos em 3D (Sketchfab)",
      "https://sketchfab.com/baxterbaxter/collections/mushrooms-cc43c8393b384cdd924c1db5664daf29",
      "Coleção com dezenas de cogumelos reais em 3D (Amanita, ostra, morel e outros)."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "Nem Planta, Nem Animal: Eles Têm Reino Próprio",
        "paras": [
          "Durante séculos, os fungos foram confundidos com plantas. Mas eles são <span class='highlight'>eucariontes, heterótrofos</span> (não fazem fotossíntese), com <strong>parede celular de quitina</strong> — a mesma do exoesqueleto dos insetos. Esse detalhe os separa das plantas (celulose)."
        ]
      },
      {
        "icon": "🍄",
        "title": "Estrutura e Grupos de Fungos",
        "paras": [
          "O corpo do fungo é formado por <strong>hifas</strong> — filamentos microscópicos. O conjunto de hifas forma o <strong>micélio</strong>, a parte que fica escondida no substrato. O <strong>cogumelo</strong> que vemos é apenas o \"corpo de frutificação\", onde são produzidos os esporos."
        ],
        "img": ("img/fungi.svg", "Cogumelo, micélio e bolor com esporos", "Figura 1: Cogumelo (corpo de frutificação), micélio subterrâneo e bolor com esporângios."),
        "table": {
          "head": ["Grupo", "Característica", "Exemplos"],
          "rows": [
            ["Zigomicetos", "Hifas sem septos, esporos em esporângios", "Bolor de pão (Rhizopus)"],
            ["Ascomicetos", "Esporos dentro de ascos", "Leveduras, Penicillium, trufas"],
            ["Basidiomicetos", "Esporos nos basídios", "Cogumelos, orelha-de-pau"],
            ["Deuteromicetos", "\"Fungos imperfeitos\" (sem fase sexuada conhecida)", "Candida, Trichophyton"]
          ]
        }
      },
      {
        "icon": "🤝",
        "title": "Reprodução, Fermentação e Micoses",
        "paras": [
          "Os fungos se reproduzem principalmente por <strong>esporos</strong>, que germinam e formam novo micélio. As <strong>leveduras</strong> também se reproduzem por <strong>brotamento (gemulação)</strong> e são as estrelas da <strong>fermentação alcoólica</strong> — pão, cerveja e vinho dependem delas!"
        ],
        "list": [
          "<strong>Decomposição</strong> — reciclam nutrientes nos ecossistemas (junto com bactérias).",
          "<strong>Micorrizas</strong> — associação com raízes: fungo absorve minerais e planta doa açúcares.",
          "<strong>Líquens</strong> — associação fungo + alga (ou cianobactéria); indicadores de poluição.",
          "<strong>Antibióticos</strong> — a penicilina vem do fungo Penicillium.",
          "<strong>Micoses</strong> — doenças: candidíase (Candida), pé de atleta (Trichophyton), criptococose (Cryptococcus)."
        ],
        "tip": "Fungos são <strong>decompositores</strong> (saprófitos) ou <strong>parasitas</strong>. Nunca são <strong>autotróficos</strong> — se o ENEM disser que fungo faz fotossíntese, está errado!"
      }
    ],
    "quiz": [
      ("A parede celular dos fungos é composta por:",
       ["Celulose", "Quitina", "Pectina", "Mureína"], "b"),
      ("A associação entre fungos e raízes de plantas, benéfica para ambos, é chamada de:",
       ["Liquenização", "Micorriza", "Saprofagia", "Conjugação"], "b"),
      ("O mofo do pão pertence a qual grupo de fungos?",
       ["Ascomicetos", "Basidiomicetos", "Zigomicetos", "Deuteromicetos"], "c")
    ]
  },

  # ============ CAPÍTULO 12 ============
  {
    "num": 12,
    "title": "Reino Animalia",
    "subtitle": "Os Animais e Seus Filos",
    "meta_desc": "Capítulo 12: Reino Animalia - Características, filos dos poríferos aos cordados e vertebrados para o ENEM.",
    "keywords": "Biologia, ENEM, animais, filos, artrópodes, cordados, vertebrados, zoologia",
    "og_desc": "Uma viagem pelos filos do reino animal, dos poríferos aos mamíferos.",
    "scene": "jellyfish",
    "scene_title": "Cnidário: Água-viva",
    "legend": [
      ("#E1F5FE", "#4FC3F7", "🔵", "Sino / umbrela", "Corpo gelatinoso em formato de guarda-chuva."),
      ("#B2EBF2", "#26C6DA", "🌊", "Tentáculos", "Capturam presas com células urticantes (cnidócitos)."),
      ("#E0F7FA", "#81D4FA", "🌀", "Braços orais", "Levam o alimento à boca central."),
      ("#FFFFFF", "#80DEEA", "💧", "Simetria radial", "Corpo organizado ao redor de um eixo central.")
    ],
    "ext3d": (
      "Água-viva animada (Sketchfab)",
      "https://sketchfab.com/3d-models/jellyfish-c8ba1a3e4ca54af099e62cd89ba1b661",
      "Modelo 3D gratuito e animado de uma água-viva, representante dos cnidários."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "Os Bichos Têm Reino Próprio",
        "paras": [
          "Os animais são <span class='highlight'>eucariontes, pluricelulares e heterótrofos</span> (ingerem alimento). Cada filo traz uma novidade evolutiva — e o ENEM cobra a associação entre <strong>grupo → característica → exemplo</strong>."
        ]
      },
      {
        "icon": "🐚",
        "title": "Os Filos Animais",
        "paras": [
          "Existem mais de 30 filos animais. Estes são os principais cobrados no vestibular:"
        ],
        "img": ("img/animal_phyla.svg", "Representantes dos principais filos animais", "Figura 1: Poríferos, cnidários, platelmintos, nematelmintos, anelídeos, moluscos, artrópodes, equinodermos e cordados."),
        "table": {
          "head": ["Filo", "Característica-chave", "Exemplos"],
          "rows": [
            ["Poríferos", "Sem tecidos; alimentação por filtragem", "Esponjas"],
            ["Cnidários", "Cnidócitos; simetria radial", "Águas-vivas, anêmonas, corais"],
            ["Platelmintos", "Achatados; primeiros com simetria bilateral", "Planárias, tênias, esquistossomo"],
            ["Nematelmintos", "Cilíndricos; não segmentados", "Lombriga (Ascaris), ancilóstomo"],
            ["Anelídeos", "Corpo segmentado", "Minhocas, sanguessugas"],
            ["Moluscos", "Manto; pé muscular", "Caramujos, mexilhões, polvos"],
            ["Artrópodes", "Exoesqueleto + patas articuladas", "Insetos, aranhas, crustáceos"],
            ["Equinodermos", "Endoesqueleto; simetria radial (adulto)", "Estrelas-do-mar, ouriços"],
            ["Cordados", "Notocorda, tubo neural, fendas faríngeas", "Peixes, anfíbios, répteis, aves, mamíferos"]
          ]
        }
      },
      {
        "icon": "🐟",
        "title": "Cordados: Dos Peixes aos Mamíferos",
        "paras": [
          "Os cordados têm <strong>notocorda</strong> (pelo menos no embrião), tubo nervoso dorsal e fendas faríngeas. Os <strong>vertebrados</strong> têm coluna vertebral e são o grupo mais conhecido."
        ],
        "table": {
          "head": ["Classe", "Característica", "Exemplos"],
          "rows": [
            ["Peixes", "Vivem na água; respiração por brânquias", "Tubarões, tilápias"],
            ["Anfíbios", "Pele úmida; vida dupla (água e terra)", "Sapos, rãs, salamandras"],
            ["Répteis", "Pele seca; ovos com casca; respiração pulmonar", "Cobras, lagartos, jacarés"],
            ["Aves", "Penas; ovos com casca; endotérmicos", "Pombas, araras, avestruzes"],
            ["Mamíferos", "Pelos; glândulas mamárias; diafragma", "Baleias, cães, humanos"]
          ]
        },
        "tip": "Artrópodes são o <strong>maior filo do planeta</strong> (mais de 80% das espécies). Nos cordados, o útero/gestação é exclusivo de mamíferos (exceto monotremados, que botam ovos)."
      }
    ],
    "quiz": [
      ("O filo com o maior número de espécies é o dos:",
       ["Cordados", "Moluscos", "Artrópodes", "Cnidários"], "c"),
      ("Os cnidários possuem células urticantes chamadas:",
       ["Espículas", "Cnidócitos", "Nefrócitos", "Amebócitos"], "b"),
      ("A notocorda é uma característica presente:",
       ["Apenas em peixes", "Apenas em mamíferos", "Em todos os cordados", "Apenas em anfíbios"], "c")
    ]
  },

  # ============ CAPÍTULO 13 ============
  {
    "num": 13,
    "title": "Ecologia",
    "subtitle": "Ecossistemas, Fluxo de Energia e Ciclos",
    "meta_desc": "Capítulo 13: Ecologia - Conceitos, cadeias alimentares, ciclos biogeoquímicos, relações ecológicas e biomas brasileiros para o ENEM.",
    "keywords": "Biologia, ENEM, ecologia, ecossistema, cadeia alimentar, ciclos, biomas, sucessão",
    "og_desc": "Entenda as relações entre os seres vivos e o ambiente com uma pirâmide ecológica 3D.",
    "scene": "ecosystem",
    "scene_title": "Pirâmide de Energia",
    "legend": [
      ("#E8F5E9", "#66BB6A", "🌿", "Produtores", "Plantas e algas: base de toda cadeia alimentar."),
      ("#DCEDC8", "#81C784", "🐛", "Consumidores primários", "Herbívoros que comem os produtores."),
      ("#F0F4C3", "#AED581", "🐸", "Consumidores secundários", "Carnívoros que comem herbívoros."),
      ("#FFF9C4", "#FFD54F", "☀️", "Decompositores / topo", "Energia diminui a cada nível (~10% passa adiante).")
    ],
    "ext3d": (
      "Cadeia alimentar do Ártico (Sketchfab)",
      "https://sketchfab.com/3d-models/arctic-food-chain-25952565af184bb68414a5eb4651da0c",
      "Modelo 3D dinâmico mostrando as relações de energia entre organismos marinhos."
    ),
    "sections": [
      {
        "icon": "📖",
        "title": "Os Níveis de Organização da Vida",
        "paras": [
          "A ecologia estuda as interações entre os seres vivos e o ambiente. A hierarquia é: <strong>população</strong> (indivíduos da mesma espécie) → <strong>comunidade</strong> (populações que vivem juntas) → <strong>ecossistema</strong> (comunidade + ambiente físico) → <strong>biosfera</strong> (toda a vida na Terra)."
        ]
      },
      {
        "icon": "⚡",
        "title": "Fluxo de Energia e Cadeias Alimentares",
        "paras": [
          "A energia do Sol flui de forma <strong>unidirecional</strong>: produtores → consumidores → decompositores. A cada nível trófico, apenas cerca de <strong>10% da energia</strong> é transferida (regra dos 10%); o restante é perdido como calor."
        ],
        "img": ("img/food_web.svg", "Teia alimentar com setas de energia", "Figura 1: Teia alimentar: as setas indicam o sentido do fluxo de energia."),
        "list": [
          "<strong>Produtores</strong> — fotossintetizantes (plantas, algas, cianobactérias).",
          "<strong>Consumidores</strong> — primários (herbívoros), secundários, terciários...",
          "<strong>Decompositores</strong> — bactérias e fungos: reciclam a matéria.",
          "<strong>Pirâmides</strong> — de energia (sempre retas), de biomassa e de números (podem ser invertidas)."
        ],
        "tip": "Pirâmide de <strong>energia</strong> nunca é invertida. Pirâmide de <strong>números</strong> pode ser (ex.: 1 árvore → muitos insetos). Decore essa diferença!"
      },
      {
        "icon": "🔄",
        "title": "Ciclos Biogeoquímicos",
        "paras": [
          "Diferente da energia, a <strong>matéria circula</strong> entre os seres vivos e o ambiente nos ciclos biogeoquímicos."
        ],
        "table": {
          "head": ["Ciclo", "Etapas-chave"],
          "rows": [
            ["Carbono", "Fotossíntese → respiração → decomposição → combustíveis fósseis"],
            ["Nitrogênio", "Fixação (bactérias) → nitrificação → desnitrificação"],
            ["Água", "Evaporação → condensação → precipitação → infiltração"],
            ["Fósforo", "Rochas → solo → seres vivos → sedimentos (sem fase gasosa)"]
          ]
        }
      },
      {
        "icon": "🌍",
        "title": "Relações Ecológicas e Biomas do Brasil",
        "paras": [
          "Os seres vivos interagem de muitas formas. A <strong>competição</strong> (mesmo recurso), o <strong>predatismo</strong> (um mata o outro), o <strong>parasitismo</strong> (um vive às custas do outro), o <strong>mutualismo</strong> (os dois ganham) e o <strong>comensalismo</strong> (um ganha, o outro não é afetado) são as mais cobradas."
        ],
        "list": [
          "<strong>Amazônia</strong> — floresta equatorial, maior biodiversidade.",
          "<strong>Cerrado</strong> — savana com árvores tortuosas e solo ácido.",
          "<strong>Caatinga</strong> — clima semiárido; plantas xerófitas.",
          "<strong>Mata Atlântica</strong> — floresta tropical costeira, muito devastada.",
          "<strong>Pantanal</strong> — planície alagável; fauna rica.",
          "<strong>Pampa</strong> — campos do extremo sul."
        ],
        "tip": "Pegadinha comum: <strong>mutualismo</strong> = +/+ (ambos ganham); <strong>comensalismo</strong> = +/0 (um ganha, outro neutro); <strong>competição</strong> = −/− (ambos perdem)."
      }
    ],
    "quiz": [
      ("Apenas cerca de 10% da energia passa de um nível trófico para o seguinte porque:",
       ["Os predadores comem pouco", "Grande parte é perdida como calor", "Os decompositores consomem tudo", "A energia é criada novamente"], "b"),
      ("No ciclo do nitrogênio, a conversão do N₂ atmosférico em compostos utilizáveis é feita por:",
       ["Plantas", "Bactérias fixadoras", "Fungos", "Animais"], "b"),
      ("O bioma brasileiro de clima semiárido, com plantas xerófitas, é a:",
       ["Amazônia", "Mata Atlântica", "Caatinga", "Pampa"], "c")
    ]
  }
]
