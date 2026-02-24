// ============================================
// O ARQUIVO ÉRIS — Chapter Data
// ============================================

const CHAPTERS = [
    {
        id: 1,
        title: "A Mensageira Microscópica",
        topic: "A Célula",
        color: "#00f0ff",
        icon: "🔬",
        flashcards: [
            { front: "Teoria Celular", back: "Schleiden (vegetais), Schwann (animais), Virchow (toda célula vem de outra). Toda célula é a unidade básica da vida." },
            { front: "Procariotos", back: "Sem núcleo definido, DNA circular no nucleóide, ribossomos 70S, parede de peptidoglicano, 1-5 μm. Ex: bactérias." },
            { front: "Eucariotos", back: "Núcleo com envelope duplo, cromatina com histonas, ribossomos 80S, organelas membranosas, 10-100 μm." },
            { front: "Mitocôndrias", back: "Duplo envelope, cristas internas, DNA próprio circular, ribossomos 70S. Teoria endossimbiótica: origem de bactéria aeróbica." },
            { front: "Modelo Mosaico Fluido", back: "Singer-Nicolson (1972): bicamada de fosfolipídios, proteínas integrais/periféricas, colesterol regula fluidez, glicocálix." },
            { front: "Bomba Na⁺/K⁺-ATPase", back: "Transporte ativo primário: 3 Na⁺ para fora, 2 K⁺ para dentro, gasta ATP, mantém potencial de membrana." },
            { front: "Osmose", back: "Movimento de água por aquaporinas. Hipotônica: célula incha. Hipertônica: encolhe. Isotônica: equilíbrio." },
            { front: "Endocitose", back: "Pinocitose (líquidos), fagocitose (sólidos), receptor-mediada (via clatrina, ex: LDL)." }
        ],
        memory: [
            { term: "Lisossomos", definition: "Digestão intracelular" },
            { term: "Complexo de Golgi", definition: "Empacotamento de proteínas" },
            { term: "RER", definition: "Síntese de proteínas" },
            { term: "REL", definition: "Síntese de lipídios" },
            { term: "Peroxissomos", definition: "Detoxificação (catalase)" },
            { term: "Centríolos", definition: "Fuso mitótico e cílios" }
        ],
        quiz: [
            { q: "Quem afirmou 'omnis cellula e cellula' (toda célula vem de outra)?", options: ["Schleiden", "Schwann", "Virchow", "Hooke"], answer: 2, explanation: "Rudolf Virchow em 1855 completou a Teoria Celular." },
            { q: "Qual organela possui DNA próprio circular e ribossomos 70S?", options: ["Lisossomo", "Complexo de Golgi", "Mitocôndria", "Peroxissomo"], answer: 2, explanation: "Mitocôndrias têm DNA circular próprio — evidência da teoria endossimbiótica." },
            { q: "Na bomba Na⁺/K⁺-ATPase, quantos íons Na⁺ são bombeados para fora?", options: ["1", "2", "3", "4"], answer: 2, explanation: "3 Na⁺ para fora e 2 K⁺ para dentro, com gasto de ATP." },
            { q: "A difusão facilitada de glicose ocorre por:", options: ["Canais de água", "Transportadores GLUT", "Exocitose", "Bomba iônica"], answer: 1, explanation: "GLUT são transportadores de membrana para difusão facilitada de glicose." },
            { q: "O glicocálix é composto por:", options: ["Fosfolipídios", "Proteínas integrais", "Carboidratos", "Colesterol"], answer: 2, explanation: "Carboidratos ligados a proteínas (glicoproteínas) e lipídios (glicolipídios)." }
        ]
    },
    {
        id: 2,
        title: "A Dança das Sombras",
        topic: "Divisão Celular",
        color: "#8b5cf6",
        icon: "🧬",
        flashcards: [
            { front: "Interfase (G1, S, G2)", back: "G1: crescimento e checkpoint. S: replicação DNA semiconservativa. G2: verificação e duplicação centríolos. 90% do ciclo." },
            { front: "Mitose", back: "Divisão equacional (2n→2n). Prófase→Prometáfase→Metáfase→Anáfase→Telófase→Citocinese." },
            { front: "Meiose I", back: "Redução (2n→n). Prófase I longa (crossing-over), segregação independente dos homólogos." },
            { front: "Crossing-over", back: "Troca de segmentos entre cromátides não-irmãs durante paquíteno da prófase I. Gera variabilidade genética." },
            { front: "Espermatogênese", back: "Contínua após puberdade. 1 espermatócito primário → 4 espermatozoides." },
            { front: "Ovogênese", back: "Cíclica. Pausa em prófase I (até puberdade) e metáfase II (até fecundação). 1 óvulo + 3 corpúsculos polares." }
        ],
        memory: [
            { term: "Prófase", definition: "Cromatina condensa" },
            { term: "Metáfase", definition: "Cromossomos na placa equatorial" },
            { term: "Anáfase", definition: "Cromátides separam-se" },
            { term: "Telófase", definition: "Envelope nuclear reforma" },
            { term: "Paquíteno", definition: "Crossing-over ocorre" },
            { term: "Citocinese", definition: "Divisão do citoplasma" }
        ],
        quiz: [
            { q: "A replicação do DNA é:", options: ["Conservativa", "Semiconservativa", "Dispersiva", "Aleatória"], answer: 1, explanation: "Meselson-Stahl provaram: cada fita nova tem uma fita original e uma nova." },
            { q: "Qual fase da meiose I ocorre o crossing-over?", options: ["Metáfase I", "Anáfase I", "Prófase I (paquíteno)", "Telófase I"], answer: 2, explanation: "No paquíteno da prófase I, cromátides não-irmãs trocam segmentos." },
            { q: "Na ovogênese, a meiose II pausa em qual fase?", options: ["Prófase II", "Metáfase II", "Anáfase II", "Telófase II"], answer: 1, explanation: "Metáfase II — só completa com a fecundação." },
            { q: "Quantos espermatozoides são formados de um espermatócito primário?", options: ["1", "2", "3", "4"], answer: 3, explanation: "Meiose I gera 2 secundários, meiose II gera 4 espermatozoides." },
            { q: "O checkpoint do fuso (spindle assembly) ocorre em:", options: ["G1", "S", "Metáfase", "Anáfase"], answer: 2, explanation: "Na metáfase, verifica se todos os cromossomos estão alinhados corretamente." }
        ]
    },
    {
        id: 3,
        title: "O Código Que Não Morre",
        topic: "Ácidos Nucleicos",
        color: "#00ff88",
        icon: "🧪",
        flashcards: [
            { front: "Estrutura do DNA", back: "Dupla hélice antiparalela (5'→3' vs 3'→5'). Pareamento: A-T (2 pontes H), C-G (3 pontes H). Watson-Crick." },
            { front: "Transcrição", back: "RNA polimerase lê DNA 3'→5' e sintetiza RNA 5'→3'. Promotor (TATA box), elongação, terminação." },
            { front: "Código Genético", back: "64 codons (tripletos). 20 aminoácidos + 3 stop (UAA, UAG, UGA). Degenerado e quase universal." },
            { front: "Tradução", back: "Ribossomo 80S, sítios A/P/E. Iniciação com Met-tRNAi, elongação (peptidil transferase), terminação." },
            { front: "Mutação Frameshift", back: "Inserção ou deleção de bases (não múltiplas de 3) desloca a leitura. Proteína completamente alterada." },
            { front: "Reparo de DNA", back: "BER (bases danificadas), NER (dímeros UV), MMR (erros de replicação), HR (quebras duplas)." }
        ],
        memory: [
            { term: "Helicase", definition: "Abre a dupla hélice" },
            { term: "DNA Polimerase III", definition: "Adiciona nucleotídeos" },
            { term: "Ligase", definition: "Une fragmentos de Okazaki" },
            { term: "Primase", definition: "Sintetiza primers de RNA" },
            { term: "Mutação Silent", definition: "Muda codon, mesmo aminoácido" },
            { term: "Mutação Nonsense", definition: "Cria codon de parada" }
        ],
        quiz: [
            { q: "Quantas ligações de hidrogênio unem C-G no DNA?", options: ["1", "2", "3", "4"], answer: 2, explanation: "C-G = 3 ligações H, A-T = 2 ligações H." },
            { q: "Qual mutação causa anemia falciforme?", options: ["Silent", "Missense", "Nonsense", "Frameshift"], answer: 1, explanation: "Missense: valina substitui glutamato na hemoglobina, alterando sua forma." },
            { q: "O splicing remove:", options: ["Exons", "Íntrons", "Primers", "Codons"], answer: 1, explanation: "O spliceossomo remove íntrons do pré-mRNA, mantendo exons." },
            { q: "A radiação UV causa:", options: ["Quebras duplas", "Dímeros de timina", "Frameshift", "Translocação"], answer: 1, explanation: "UV causa ligação entre timinas adjacentes (dímeros), reparado por NER." },
            { q: "Qual enzima sintetiza a fita leading de forma contínua?", options: ["Helicase", "Primase", "DNA Pol III", "Ligase"], answer: 2, explanation: "DNA Polimerase III sintetiza a fita líder continuamente no sentido 5'→3'." }
        ]
    },
    {
        id: 4,
        title: "O Gene Traidor",
        topic: "Genética",
        color: "#ff8c00",
        icon: "🔗",
        flashcards: [
            { front: "1ª Lei de Mendel", back: "Lei da Segregação: os dois alelos se separam na formação dos gametas. Cada gameta recebe apenas um alelo." },
            { front: "2ª Lei de Mendel", back: "Distribuição Independente: genes em cromossomos diferentes se distribuem independentemente. Cruzamento AaBb × AaBb → 9:3:3:1." },
            { front: "Codominância", back: "Ambos alelos expressos simultaneamente. Ex: sangue AB (IA e IB expressos juntos)." },
            { front: "Dominância Incompleta", back: "Heterozigoto = fenótipo intermediário. Ex: flor vermelha × branca = rosa." },
            { front: "Herança Ligada ao X", back: "Genes no cromossomo X. Mais comum em homens (XY). Ex: daltonismo, hemofilia." },
            { front: "Epigenética", back: "Metilação do DNA silencia genes. Acetilação de histonas ativa genes. miRNA regula pós-transcrição." }
        ],
        memory: [
            { term: "Autossômica recessiva", definition: "Pula gerações, pais portadores" },
            { term: "Autossômica dominante", definition: "Afeta todas as gerações" },
            { term: "Ligada ao X recessiva", definition: "Mais homens afetados" },
            { term: "Pleiotropia", definition: "1 gene → vários fenótipos" },
            { term: "Epistasia", definition: "Gene mascara outro gene" },
            { term: "Quadrado de Punnett", definition: "Tabela de probabilidades" }
        ],
        quiz: [
            { q: "No cruzamento Aa × Aa, qual a proporção de afetados (aa)?", options: ["0%", "25%", "50%", "75%"], answer: 1, explanation: "AA:Aa:aa = 1:2:1, logo 25% são homozigotos recessivos." },
            { q: "Sangue tipo AB é exemplo de:", options: ["Dominância completa", "Dominância incompleta", "Codominância", "Epistasia"], answer: 2, explanation: "IA e IB são expressos simultaneamente: codominância." },
            { q: "Daltonismo é herança:", options: ["Autossômica dominante", "Autossômica recessiva", "Ligada ao X recessiva", "Ligada ao Y"], answer: 2, explanation: "Gene no X, recessivo. Homens (XY) afetados com um alelo." },
            { q: "Na 2ª Lei de Mendel, o cruzamento AaBb × AaBb gera proporção fenotípica:", options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"], answer: 2, explanation: "9 dom/dom : 3 dom/rec : 3 rec/dom : 1 rec/rec." },
            { q: "A metilação do DNA causa:", options: ["Ativação gênica", "Silenciamento gênico", "Mutação", "Crossing-over"], answer: 1, explanation: "Metilação CpG = silencia genes. Mecanismo epigenético." }
        ]
    },
    {
        id: 5,
        title: "DNA Forjado no Escuro",
        topic: "Engenharia Genética",
        color: "#ff00aa",
        icon: "✂️",
        flashcards: [
            { front: "Enzimas de Restrição", back: "Tesouras moleculares. Cortam DNA em sítios palindrômicos. EcoRI: GAATTC (sticky ends). SmaI: CCCGGG (blunt ends)." },
            { front: "PCR", back: "Amplificação in vitro. Desnaturação (94°C) → Anelamento (50-65°C) → Extensão (72°C). 30-40 ciclos = bilhões de cópias." },
            { front: "CRISPR-Cas9", back: "RNA guia direciona Cas9 para cortar DNA. NHEJ = knockout. HDR = knock-in. Risco: off-targets." },
            { front: "Transgênicos", back: "OGMs com genes de outra espécie. Milho Bt (inseticida), Soja RR (glifosato), Salmão AquAdvantage." },
            { front: "Terapia Gênica", back: "Inserir gene funcional. Ex vivo: edita fora do corpo. In vivo: vetor viral direto. Vetores: AAV, lentivírus." },
            { front: "Clonagem Molecular", back: "Cortar DNA + vetor com mesma enzima → ligar com ligase → transformar em bactéria → selecionar com antibiótico." }
        ],
        memory: [
            { term: "EcoRI", definition: "Corta GAATTC (sticky ends)" },
            { term: "Taq polimerase", definition: "Termorresistente para PCR" },
            { term: "Plasmídeo", definition: "Vetor de clonagem circular" },
            { term: "gRNA", definition: "Guia do CRISPR-Cas9" },
            { term: "Milho Bt", definition: "Toxina inseticida" },
            { term: "HDR", definition: "Reparo dirigido (knock-in)" }
        ],
        quiz: [
            { q: "Qual enzima é termorresistente e usada na PCR?", options: ["DNA Pol III", "Ligase", "Taq polimerase", "Helicase"], answer: 2, explanation: "Taq polimerase de Thermus aquaticus resiste a 94°C." },
            { q: "No CRISPR, o reparo NHEJ geralmente causa:", options: ["Knock-in preciso", "Knockout (erros)", "Duplicação", "Translocação"], answer: 1, explanation: "NHEJ junta pontas sem molde, causando inserções/deleções → knockout." },
            { q: "O milho Bt possui gene de:", options: ["Resistência a herbicida", "Toxina inseticida", "Hormônio de crescimento", "Vitamina A"], answer: 1, explanation: "Gene de Bacillus thuringiensis produz proteína tóxica para insetos." },
            { q: "Na PCR, a etapa de anelamento ocorre a:", options: ["94°C", "72°C", "50-65°C", "37°C"], answer: 2, explanation: "50-65°C permite que os primers se liguem às fitas-molde." },
            { q: "Sticky ends são gerados por:", options: ["Corte simétrico", "Corte escalonado", "Ligase", "Primase"], answer: 1, explanation: "Enzimas como EcoRI cortam de forma escalonada, gerando pontas coesivas." }
        ]
    },
    {
        id: 6,
        title: "280 Dias de Segredo",
        topic: "Embriologia",
        color: "#3b82f6",
        icon: "🫒",
        flashcards: [
            { front: "Fecundação", back: "Reação acrossômica libera enzimas. Bloqueio poliespermia por grânulos corticais. Fusão de pronúcleos → zigoto 2n." },
            { front: "Clivagem", back: "Divisões mitóticas rápidas sem crescimento. Zigoto → mórula → blástula. Humanos: blastocisto (trofoblasto + massa interna)." },
            { front: "Gastrulação", back: "Formação das 3 camadas: ectoderma (pele/nervos), mesoderma (músculos/ossos), endoderma (trato digestivo)." },
            { front: "Neurulação", back: "Placa neural → dobra → tubo neural (futuro SNC). Cristas neurais → nervos periféricos, melanócitos." },
            { front: "Anexos Embrionários", back: "Âmnio (proteção), cório (placenta), saco vitelino (nutrição inicial), alantoide (vasos umbilicais)." },
            { front: "Placenta Humana", back: "Discoide hemocorial. Trofoblasto invade endométrio. Troca O₂, nutrientes, CO₂. hCG mantém corpo lúteo." }
        ],
        memory: [
            { term: "Ectoderma", definition: "Pele e sistema nervoso" },
            { term: "Mesoderma", definition: "Músculos, ossos, sangue" },
            { term: "Endoderma", definition: "Trato digestivo" },
            { term: "Mórula", definition: "Massa compacta de células" },
            { term: "Blastocisto", definition: "Trofoblasto + massa interna" },
            { term: "hCG", definition: "Mantém corpo lúteo na gravidez" }
        ],
        quiz: [
            { q: "A reação acrossômica libera enzimas para penetrar:", options: ["Endométrio", "Zona pelúcida", "Placenta", "Líquido amniótico"], answer: 1, explanation: "Hialuronidase e acrosina penetram a corona radiata e zona pelúcida." },
            { q: "O tubo neural origina:", options: ["Músculos", "Sistema nervoso central", "Trato digestivo", "Ossos"], answer: 1, explanation: "Neurulação: placa neural → tubo neural = encéfalo + medula espinhal." },
            { q: "O trofoblasto forma:", options: ["Embrião", "Placenta", "Líquido amniótico", "Cordão umbilical"], answer: 1, explanation: "Trofoblasto é a camada externa do blastocisto que invade o endométrio." },
            { q: "As três camadas germinativas se formam na:", options: ["Clivagem", "Gastrulação", "Neurulação", "Organogênese"], answer: 1, explanation: "Gastrulação forma: ectoderma, mesoderma e endoderma." },
            { q: "O embrião humano é chamado de feto a partir de:", options: ["4 semanas", "6 semanas", "9 semanas", "12 semanas"], answer: 2, explanation: "Até 8 semanas = embrião. A partir de 9 semanas = feto." }
        ]
    },
    {
        id: 7,
        title: "A Árvore Que Escondeu o Crime",
        topic: "Evolução",
        color: "#10b981",
        icon: "🌳",
        flashcards: [
            { front: "Lamarckismo (errado)", back: "Uso/desuso + herança dos caracteres adquiridos. Erro: caracteres adquiridos não alteram DNA germinativo." },
            { front: "Seleção Natural (Darwin)", back: "Variação natural + luta pela existência → mais aptos sobrevivem e reproduzem. Descendência com modificação." },
            { front: "Evidências da Evolução", back: "Fósseis (Tiktaalik), anatomia comparada (homólogos), embriologia, biogeografia, bioquímica (DNA 98% chimpanzé)." },
            { front: "Deriva Genética", back: "Mudança aleatória em populações pequenas. Efeito fundador (colonização) e gargalo (redução drástica)." },
            { front: "Especiação Alopátrica", back: "Barreira geográfica → isolamento reprodutivo → nova espécie. Mais comum." },
            { front: "Neodarwinismo", back: "Síntese moderna: genética mendeliana + seleção natural + mutação + deriva + fluxo gênico." }
        ],
        memory: [
            { term: "Órgãos homólogos", definition: "Mesma origem, funções diferentes" },
            { term: "Órgãos vestigiais", definition: "Sem função atual (apêndice)" },
            { term: "Seleção direcional", definition: "Favorece um extremo" },
            { term: "Seleção estabilizadora", definition: "Favorece o intermediário" },
            { term: "Fluxo gênico", definition: "Migração entre populações" },
            { term: "Especiação simpátrica", definition: "Sem barreira geográfica" }
        ],
        quiz: [
            { q: "Por que Lamarck estava errado?", options: ["Não conhecia fósseis", "Caracteres adquiridos não alteram DNA germinativo", "Não estudou animais", "Não tinha microscópio"], answer: 1, explanation: "Mudanças durante a vida (ex: músculos) não passam ao DNA dos gametas." },
            { q: "Tiktaalik é fóssil de transição entre:", options: ["Répteis e aves", "Peixes e tetrápodes", "Primatas e humanos", "Dinossauros e mamíferos"], answer: 1, explanation: "Tiktaalik mostra transição peixe → tetrápode (nadadeiras com ossos de membro)." },
            { q: "A deriva genética é mais forte em populações:", options: ["Grandes", "Pequenas", "Marinhas", "Tropicais"], answer: 1, explanation: "Em populações pequenas, eventos aleatórios causam grandes mudanças na frequência alélica." },
            { q: "Humanos e chimpanzés compartilham aproximadamente:", options: ["70% do DNA", "80% do DNA", "90% do DNA", "98-99% do DNA"], answer: 3, explanation: "Evidência bioquímica/molecular da ancestralidade comum." },
            { q: "Especiação alopátrica requer:", options: ["Poliploidia", "Barreira geográfica", "Mutação pontual", "Seleção sexual"], answer: 1, explanation: "Barreira geográfica isola populações, levando a divergência e nova espécie." }
        ]
    },
    {
        id: 8,
        title: "O Vírus Que Pode Salvar o Mundo",
        topic: "Ecologia",
        color: "#06b6d4",
        icon: "🌍",
        flashcards: [
            { front: "Níveis Ecológicos", back: "Indivíduo → População → Comunidade → Ecossistema → Bioma → Biosfera." },
            { front: "Crescimento Populacional", back: "Exponencial (J): sem limites. Logístico (S): capacidade de suporte (K) limita. Fatores densidade-dependentes vs independentes." },
            { front: "Cadeia Alimentar", back: "Produtores → consumidores 1° → 2° → 3°. Decompositores reciclam. Apenas 10% de energia transferida por nível." },
            { front: "Ciclo do Nitrogênio", back: "Fixação (bactérias) → nitrificação → assimilação → amonificação → desnitrificação. Leguminosas + Rhizobium." },
            { front: "Sucessão Ecológica", back: "Primária: área sem vida (lava → liquens). Secundária: área perturbada (incêndio → gramíneas → floresta)." },
            { front: "Aquecimento Global", back: "Gases estufa (CO₂, CH₄) → efeito estufa intensificado → aumento temperatura → degelo, elevação mares." }
        ],
        memory: [
            { term: "Mutualismo", definition: "Ambos beneficiados" },
            { term: "Parasitismo", definition: "Um beneficia, outro prejudicado" },
            { term: "Comensalismo", definition: "Um beneficia, outro neutro" },
            { term: "Competição", definition: "Disputa por recursos" },
            { term: "Pirâmide de energia", definition: "10% por nível trófico" },
            { term: "Ciclo do carbono", definition: "Fotossíntese e respiração" }
        ],
        quiz: [
            { q: "Na pirâmide de energia, quanto é transferido por nível?", options: ["1%", "10%", "50%", "90%"], answer: 1, explanation: "Regra dos 10%: apenas 10% da energia passa ao nível seguinte." },
            { q: "A fixação biológica do nitrogênio é feita por:", options: ["Plantas", "Bactérias", "Fungos", "Animais"], answer: 1, explanation: "Bactérias fixadoras (Rhizobium em leguminosas, Azotobacter livres no solo)." },
            { q: "Sucessão primária começa em:", options: ["Floresta queimada", "Área sem vida prévia", "Campo abandonado", "Lago eutrofizado"], answer: 1, explanation: "Área sem vida: rocha nua, lava. Liquens são pioneiros." },
            { q: "Rêmora no tubarão é exemplo de:", options: ["Mutualismo", "Parasitismo", "Comensalismo", "Predatismo"], answer: 2, explanation: "Rêmora se beneficia (transporte/restos) sem prejudicar o tubarão." },
            { q: "Qual ciclo biogeoquímico NÃO possui fase gasosa?", options: ["Carbono", "Nitrogênio", "Fósforo", "Água"], answer: 2, explanation: "Fósforo: ciclo sedimentar (rochas → solo → seres → decomposição)." }
        ]
    }
];
