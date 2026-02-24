// ============================================
// O ARQUIVO ÉRIS — Theory Content per Chapter
// HTML content for each chapter's theory section
// ============================================

const THEORY_CONTENT = {
    1: `
<h2>🔬 A Célula — Unidade Básica da Vida</h2>
<div class="story-text">
<p>"Se você chegou até aqui, Éris, é porque eu falhei em te proteger. Mas a resposta está na menor unidade da vida. Comece pela célula. Tudo começa aí." — Mensagem da mãe de Éris, pen-drive prateado, nível -47.</p>
</div>

<div class="science-block">
<h3>Teoria Celular (1838–1855)</h3>
<ul>
<li><strong>Matthias Schleiden</strong>: todos os vegetais são formados por células.</li>
<li><strong>Theodor Schwann</strong>: o mesmo vale para animais.</li>
<li><strong>Rudolf Virchow</strong>: <em>omnis cellula e cellula</em> — toda célula surge de outra célula pré-existente.</li>
</ul>
</div>

<h3>Procariotos vs Eucariotos</h3>
<div class="science-block">
<h3>Procariotos</h3>
<ul>
<li>Sem núcleo definido (DNA circular no nucleóide)</li>
<li>Ribossomos 70S livres no citoplasma</li>
<li>Parede celular de peptidoglicano</li>
<li>Flagelo bacteriano rotativo</li>
<li>Tamanho médio: <span class="highlight">1–5 μm</span></li>
</ul>
</div>
<div class="science-block">
<h3>Eucariotos</h3>
<ul>
<li>Núcleo verdadeiro com envelope duplo e poros</li>
<li>Cromatina com histonas, nucléolo (ribossomos)</li>
<li>Ribossomos 80S</li>
<li><strong>RER</strong>: síntese de proteínas secretórias</li>
<li><strong>REL</strong>: síntese de lipídios, detoxificação, Ca²⁺</li>
<li><strong>Golgi</strong>: modificação e empacotamento</li>
<li><strong>Mitocôndrias</strong>: DNA próprio, teoria endossimbiótica</li>
<li><strong>Lisossomos</strong>: digestão intracelular</li>
<li><strong>Citoesqueleto</strong>: microtúbulos, microfilamentos, filamentos intermediários</li>
<li>Tamanho médio: <span class="highlight">10–100 μm</span></li>
</ul>
</div>

<h2>🧫 Membrana Plasmática</h2>
<div class="science-block">
<h3>Modelo Mosaico Fluido (Singer-Nicolson, 1972)</h3>
<ul>
<li>Bicamada de fosfolipídios (cabeças hidrofílicas, caudas hidrofóbicas)</li>
<li>Colesterol regula fluidez</li>
<li>Proteínas integrais (canais, bombas), periféricas, ancoradas por GPI</li>
<li>Glicocálix: reconhecimento celular e proteção</li>
</ul>
</div>

<h2>🚚 Transportes pela Membrana</h2>
<div class="science-block">
<h3>Transporte Passivo (sem gasto de energia)</h3>
<ul>
<li><strong>Difusão simples</strong>: O₂, CO₂, hormônios lipossolúveis</li>
<li><strong>Difusão facilitada</strong>: canais iônicos, GLUT (glicose)</li>
<li><strong>Osmose</strong>: água por aquaporinas — hipotônica (incha), hipertônica (encolhe)</li>
</ul>
</div>
<div class="science-block">
<h3>Transporte Ativo</h3>
<ul>
<li><strong>Primário</strong>: Bomba Na⁺/K⁺-ATPase (3 Na⁺ fora, 2 K⁺ dentro)</li>
<li><strong>Secundário</strong>: simporte Na⁺-glicose (usa gradiente)</li>
<li><strong>Vesicular</strong>: endocitose (pinocitose, fagocitose, receptor-mediada) e exocitose</li>
</ul>
</div>`,

    2: `
<h2>🔄 Divisão Celular e Reprodução</h2>
<div class="story-text">
<p>"Você nasceu de uma divisão manipulada, Éris. Entenda como as células se multiplicam… ou eles te pegam antes da verdade." — Camada 2, nível -52.</p>
</div>

<div class="science-block">
<h3>Ciclo Celular — Interfase (90% do ciclo)</h3>
<ul>
<li><strong>G1</strong>: crescimento, síntese proteica, checkpoint G1/S (p53 verifica DNA)</li>
<li><strong>S</strong>: replicação semiconservativa do DNA (helicase, polimerase III, ligase, fragmentos de Okazaki)</li>
<li><strong>G2</strong>: verificação, duplicação de centríolos, checkpoint G2/M</li>
</ul>
</div>

<h2>Mitose — Divisão Equacional (2n → 2n)</h2>
<div class="science-block">
<ul>
<li><strong>Prófase</strong>: condensação, fuso se forma, envelope fragmenta</li>
<li><strong>Prometáfase</strong>: microtúbulos cinetocóricos se ligam</li>
<li><strong>Metáfase</strong>: cromossomos na placa equatorial (checkpoint do fuso)</li>
<li><strong>Anáfase</strong>: cromátides-irmãs para polos opostos</li>
<li><strong>Telófase</strong>: descondensação, envelope reforma</li>
<li><strong>Citocinese</strong>: animal (sulco) vs vegetal (fragmoplasto)</li>
</ul>
</div>

<h2>Meiose — Redução (2n → n)</h2>
<div class="science-block">
<h3>Meiose I (Redução)</h3>
<ul>
<li>Prófase I longa: leptóteno, zigóteno, <strong>paquíteno (crossing-over)</strong>, diplóteno, diacinese</li>
<li>Metáfase I: bivalentes alinhados (segregação independente)</li>
<li>Anáfase I: homólogos se separam</li>
</ul>
<h3>Meiose II (Equacional)</h3>
<ul><li>Similar à mitose, sem replicação prévia. Separa cromátides-irmãs.</li></ul>
</div>

<h2>Gametogênese e Fecundação</h2>
<div class="science-block">
<ul>
<li><strong>Espermatogênese</strong>: contínua → 4 espermatozoides</li>
<li><strong>Ovogênese</strong>: pausa prófase I e metáfase II → 1 óvulo + 3 corpúsculos</li>
<li><strong>Fecundação</strong>: reação acrossômica → bloqueio poliespermia → zigoto 2n</li>
</ul>
</div>`,

    3: `
<h2>🧪 Ácidos Nucleicos e Síntese Proteica</h2>
<div class="story-text">
<p>"O DNA é o que me matou, Éris. Mas também o que te mantém viva. Aprenda como ele se copia, transcreve e traduz." — Data-center abandonado, Av. Paulista.</p>
</div>

<div class="science-block">
<h3>Estrutura dos Ácidos Nucleicos</h3>
<ul>
<li>Nucleotídeo = base nitrogenada + açúcar + fosfato</li>
<li><strong>DNA</strong>: dupla hélice, A-T (2H), C-G (3H), desoxirribose</li>
<li><strong>RNA</strong>: fita simples, uracila, ribose</li>
</ul>
</div>

<div class="science-block">
<h3>Replicação (Semiconservativa — Meselson-Stahl)</h3>
<ul>
<li>Helicase abre → SSB estabiliza → topoisomerase alivia</li>
<li>Primase faz primers → DNA Pol III sintetiza</li>
<li>Leading strand (contínua), Lagging strand (fragmentos de Okazaki)</li>
<li>DNA Pol I remove primers → Ligase une</li>
</ul>
</div>

<div class="science-block">
<h3>Transcrição e Processamento</h3>
<ul>
<li>RNA polimerase II (eucariotos) → mRNA</li>
<li>Promotor TATA box → elongação 5'→3' → terminação</li>
<li>Processamento: capping 5', poliadenilação 3', splicing (remove íntrons)</li>
</ul>
</div>

<div class="science-block">
<h3>Tradução</h3>
<ul>
<li>Códon = tripleto. 64 codons, 20 aminoácidos, 3 stop</li>
<li>Ribossomo 80S: sítios A, P, E</li>
<li>Iniciação (Met-tRNAi) → Elongação (peptidil transferase) → Terminação</li>
</ul>
</div>

<h2>⚠️ Mutações</h2>
<div class="science-block">
<ul>
<li><strong>Silent</strong>: muda codon, mesmo aminoácido</li>
<li><strong>Missense</strong>: outro aminoácido (ex: anemia falciforme)</li>
<li><strong>Nonsense</strong>: codon de parada prematuro</li>
<li><strong>Frameshift</strong>: inserção/deleção desloca leitura</li>
<li><strong>Reparo</strong>: BER, NER (UV), MMR, HR, NHEJ</li>
</ul>
</div>`,

    4: `
<h2>🔗 Princípios da Genética</h2>
<div class="story-text">
<p>"Eu inseri um gene traidor em você, filha. Ele é recessivo, ligado ao X e regulado por epigenética." — Squathacker, Pinheiros.</p>
</div>

<div class="science-block">
<h3>Leis de Mendel</h3>
<ul>
<li><strong>1ª Lei (Segregação)</strong>: dois alelos se separam nos gametas. Pai Aa → 50% A, 50% a.</li>
<li><strong>2ª Lei (Distribuição Independente)</strong>: genes em cromossomos diferentes se segregam independentemente. AaBb × AaBb → 9:3:3:1</li>
</ul>
</div>

<div class="science-block">
<h3>Tipos de Dominância</h3>
<ul>
<li><strong>Dominância completa</strong>: Aa = AA (ervilha amarela)</li>
<li><strong>Dominância incompleta</strong>: Aa = intermediário (flor rosa)</li>
<li><strong>Codominância</strong>: ambos expressos (sangue AB)</li>
</ul>
</div>

<div class="science-block">
<h3>Heredogramas — 4 Padrões</h3>
<ul>
<li><strong>Autossômica recessiva</strong>: pula gerações, pais portadores, ambos sexos</li>
<li><strong>Autossômica dominante</strong>: afeta todas as gerações</li>
<li><strong>Ligada ao X recessiva</strong>: mais homens afetados, mãe portadora</li>
<li><strong>Ligada ao X dominante</strong>: mulheres afetadas mais frequentes</li>
</ul>
</div>

<div class="science-block">
<h3>Conceitos Avançados</h3>
<ul>
<li><strong>Pleiotropia</strong>: 1 gene → vários fenótipos</li>
<li><strong>Epistasia</strong>: gene mascara outro (ex: cor albinismo)</li>
<li><strong>Epigenética</strong>: metilação (silencia), acetilação (ativa)</li>
<li><strong>Herança mitocondrial</strong>: materna, DNA circular</li>
</ul>
</div>`,

    5: `
<h2>✂️ Engenharia Genética e Biotecnologia</h2>
<div class="story-text">
<p>"Cada técnica que eu explicar pode ser usada para te salvar… ou te destruir." — Favela vertical, Zona Leste.</p>
</div>

<div class="science-block">
<h3>Enzimas de Restrição</h3>
<ul>
<li>Tesouras moleculares bacterianas. Cortam DNA em sítios palindrômicos</li>
<li>EcoRI: GAATTC → sticky ends. SmaI: CCCGGG → blunt ends</li>
</ul>
</div>

<div class="science-block">
<h3>PCR — Reação em Cadeia da Polimerase</h3>
<ul>
<li><strong>Desnaturação</strong> (94°C): separa fitas</li>
<li><strong>Anelamento</strong> (50-65°C): primers se ligam</li>
<li><strong>Extensão</strong> (72°C): Taq polimerase sintetiza</li>
<li>30-40 ciclos = bilhões de cópias</li>
</ul>
</div>

<div class="science-block">
<h3>CRISPR-Cas9</h3>
<ul>
<li>RNA guia (gRNA) direciona Cas9 para o alvo</li>
<li>Cas9 corta DNA (DSB — double-strand break)</li>
<li><strong>NHEJ</strong>: reparo com erros → knockout</li>
<li><strong>HDR</strong>: reparo com molde → knock-in preciso</li>
<li>Risco: off-targets (cortes indesejados)</li>
</ul>
</div>

<div class="science-block">
<h3>Transgênicos e Terapia Gênica</h3>
<ul>
<li><strong>Milho Bt</strong>: gene de B. thuringiensis (toxina inseticida)</li>
<li><strong>Soja RR</strong>: resistência ao glifosato</li>
<li><strong>Terapia Gênica</strong>: ex vivo (edita fora) ou in vivo (vetor direto)</li>
</ul>
</div>`,

    6: `
<h2>🫒 Embriologia Animal e Humana</h2>
<div class="story-text">
<p>"Eu te carreguei por 280 dias em um útero artificial acelerado." — Clínica abandonada, periferia de SP.</p>
</div>

<div class="science-block">
<h3>Fecundação</h3>
<ul>
<li>Reação acrossômica: hialuronidase + acrosina penetram zona pelúcida</li>
<li>Bloqueio poliespermia: grânulos corticais alteram zona</li>
<li>Fusão de pronúcleos → zigoto 2n</li>
</ul>
</div>

<div class="science-block">
<h3>Clivagem → Blastocisto</h3>
<ul>
<li>Divisões rápidas sem crescimento. Zigoto → mórula → blástula</li>
<li>Humanos: blastocisto (trofoblasto + massa celular interna)</li>
<li>Implantação: dia 6-7, trofoblasto secreta hCG</li>
</ul>
</div>

<div class="science-block">
<h3>Gastrulação (3 Camadas)</h3>
<ul>
<li><strong>Ectoderma</strong>: pele, sistema nervoso</li>
<li><strong>Mesoderma</strong>: músculos, ossos, sangue, coração</li>
<li><strong>Endoderma</strong>: trato digestivo, respiratório</li>
</ul>
</div>

<div class="science-block">
<h3>Neurulação e Anexos</h3>
<ul>
<li>Placa neural → tubo neural (SNC). Cristas neurais → nervos periféricos</li>
<li><strong>Âmnio</strong>: proteção. <strong>Cório</strong>: placenta</li>
<li><strong>Saco vitelino</strong>: nutrição. <strong>Alantoide</strong>: vasos umbilicais</li>
</ul>
</div>`,

    7: `
<h2>🌳 Evolução</h2>
<div class="story-text">
<p>"Eu ajudei a falsificar evidências fósseis para encobrir experimentos. Aprenda a verdadeira teoria da evolução." — Floresta urbana radioativa.</p>
</div>

<div class="science-block">
<h3>Lamarckismo (Por que está errado)</h3>
<ul>
<li>Uso e desuso + herança dos caracteres adquiridos</li>
<li>Erro: caracteres adquiridos NÃO alteram DNA germinativo</li>
</ul>
</div>

<div class="science-block">
<h3>Darwin e Wallace — Seleção Natural</h3>
<ul>
<li>Variação natural + superprodução → luta pela existência</li>
<li>Mais aptos sobrevivem e reproduzem mais</li>
<li>Descendência com modificação ao longo de gerações</li>
</ul>
</div>

<div class="science-block">
<h3>Evidências da Evolução</h3>
<ul>
<li><strong>Fósseis</strong>: Tiktaalik (peixe → tetrápode), Archaeopteryx</li>
<li><strong>Anatomia</strong>: órgãos homólogos, vestigiais</li>
<li><strong>Embriologia</strong>: embriões semelhantes inicialmente</li>
<li><strong>Molecular</strong>: DNA humano-chimpanzé 98-99%</li>
</ul>
</div>

<div class="science-block">
<h3>Mecanismos e Especiação</h3>
<ul>
<li><strong>Mutação</strong>: fonte de variação</li>
<li><strong>Seleção natural</strong>: direcional, estabilizadora, disruptiva</li>
<li><strong>Deriva genética</strong>: efeito fundador, gargalo</li>
<li><strong>Especiação alopátrica</strong>: barreira geográfica → nova espécie</li>
<li><strong>Neodarwinismo</strong>: genética + seleção + mutação + deriva + fluxo</li>
</ul>
</div>`,

    8: `
<h2>🌍 Ecologia</h2>
<div class="story-text">
<p>"Eu criei você para ser a chave. Sua escolha agora define o destino da biosfera." — Laboratório da NeoGenix, confronto final.</p>
</div>

<div class="science-block">
<h3>Níveis de Organização</h3>
<ul>
<li>Indivíduo → População → Comunidade → Ecossistema → Bioma → Biosfera</li>
</ul>
</div>

<div class="science-block">
<h3>Populações</h3>
<ul>
<li><strong>Exponencial (J)</strong>: sem limites, crescimento máximo</li>
<li><strong>Logístico (S)</strong>: capacidade de suporte (K) limita</li>
<li>Fatores densidade-dependentes (competição) vs independentes (clima)</li>
</ul>
</div>

<div class="science-block">
<h3>Relações Ecológicas</h3>
<ul>
<li><strong>Mutualismo</strong>: ambos ganham (micorrizas)</li>
<li><strong>Parasitismo</strong>: um ganha, outro perde (malária)</li>
<li><strong>Comensalismo</strong>: um ganha, outro neutro (rêmora)</li>
<li><strong>Competição</strong>: disputa por recursos</li>
<li><strong>Predatismo</strong>: predador-presa (Lotka-Volterra)</li>
</ul>
</div>

<div class="science-block">
<h3>Ciclos Biogeoquímicos</h3>
<ul>
<li><strong>Carbono</strong>: fotossíntese ↔ respiração ↔ combustão</li>
<li><strong>Nitrogênio</strong>: fixação → nitrificação → assimilação → desnitrificação</li>
<li><strong>Fósforo</strong>: sedimentar (sem fase gasosa)</li>
<li><strong>Água</strong>: evaporação → condensação → precipitação</li>
</ul>
</div>

<div class="science-block">
<h3>Impacto Humano</h3>
<ul>
<li>Desmatamento, poluição, aquecimento global, perda de biodiversidade</li>
<li>Sustentabilidade: conservação in situ/ex situ, Agenda 2030 (ODS 13-15)</li>
</ul>
</div>`
};
