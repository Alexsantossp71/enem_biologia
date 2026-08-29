/* Arquivo Vivo: narrativa editorial científica, evidências visuais e exploração acessível. */
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, CircleHelp, Eye, FlaskConical, Globe2, Lightbulb, MousePointer2, RotateCcw, Sparkles, ZoomIn } from "lucide-react";

const heroImage = "/manus-storage/cap1-hero-archive_19440cc5.jpg";
const hookeImage = "/manus-storage/cap1-hooke-cork_79fdabb7.jpg";
const leeuwenhoekImage = "/manus-storage/cap1-leeuwenhoek_651a66c7.jpg";
const comparisonImage = "/manus-storage/cap1-cell-comparison_5b00bc0d.jpg";
const markImage = "/manus-storage/trilhas-mark_6f6dc234.png";

const milestones = [
  { id: "hooke", year: "1665", label: "Hooke nomeia as células" },
  { id: "leeuwenhoek", year: "1674", label: "O mundo microscópico se move" },
  { id: "theory", year: "1838–39", label: "A Teoria Celular ganha forma" },
  { id: "division", year: "Hoje", label: "A célula como unidade da vida" },
];

const quizQuestions = [
  {
    question: "Por que Robert Hooke usou a palavra “célula”?",
    options: [
      "Porque observou células vivas se movimentando.",
      "Porque os compartimentos da cortiça lembravam pequenas celas.",
      "Porque a Royal Society já usava esse termo.",
      "Porque viu um núcleo dentro de cada compartimento.",
    ],
    answer: 1,
    explanation: "Hooke observou compartimentos vazios na cortiça e os comparou às celas onde monges viviam. Ele nomeou a estrutura, mas não observou células vivas.",
  },
  {
    question: "Qual alternativa apresenta um princípio da Teoria Celular?",
    options: [
      "Todos os seres vivos são formados por células.",
      "Somente animais possuem células.",
      "Toda célula possui núcleo delimitado.",
      "Células surgem espontaneamente em matéria sem vida.",
    ],
    answer: 0,
    explanation: "A Teoria Celular estabelece que os seres vivos são formados por células, que a célula é a unidade básica da vida e que novas células vêm de células preexistentes.",
  },
  {
    question: "O que diferencia fundamentalmente uma célula eucarionte?",
    options: [
      "Ela não possui membrana plasmática.",
      "Ela não possui material genético.",
      "Ela possui núcleo delimitado por membrana.",
      "Ela não realiza reações químicas.",
    ],
    answer: 2,
    explanation: "Eucariontes possuem núcleo delimitado e organelas membranosas. Procariontes, como bactérias e arqueias, não possuem núcleo delimitado.",
  },
];

function CellModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("Núcleo");
  const selectedRef = useRef(selected);
  selectedRef.current = selected;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#102f35");
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.2, 7.4);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const membrane = new THREE.Mesh(
      new THREE.SphereGeometry(2.55, 48, 48),
      new THREE.MeshPhysicalMaterial({ color: 0x9dd6b1, transparent: true, opacity: 0.28, roughness: 0.32, transmission: 0.18, side: THREE.DoubleSide })
    );
    group.add(membrane);
    const cytoplasm = new THREE.Mesh(
      new THREE.SphereGeometry(2.26, 42, 42),
      new THREE.MeshPhysicalMaterial({ color: 0xb9e1ca, transparent: true, opacity: 0.43, roughness: 0.8 })
    );
    group.add(cytoplasm);

    const parts: Record<string, THREE.Object3D> = {};
    const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.86, 32, 32), new THREE.MeshStandardMaterial({ color: 0x5c7f9d, roughness: 0.45 }));
    nucleus.position.set(-0.18, 0.2, 0.5); parts["Núcleo"] = nucleus; group.add(nucleus);
    const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(0.24, 20, 20), new THREE.MeshStandardMaterial({ color: 0xd9822b }));
    nucleolus.position.set(-0.45, 0.36, 1.1); group.add(nucleolus);

    const mitoPositions = [[-1.3, 0.8, 0.4], [1.18, -0.72, 0.7], [0.94, 1.15, -0.48], [-0.9, -1.25, -0.5]];
    mitoPositions.forEach((position, index) => {
      const mito = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.58, 6, 12), new THREE.MeshStandardMaterial({ color: 0xd9822b, roughness: 0.55 }));
      mito.position.set(position[0], position[1], position[2]);
      mito.rotation.z = index * 0.7; mito.rotation.x = index * 0.35;
      if (index === 0) parts["Mitocôndrias"] = mito;
      group.add(mito);
    });
    const er = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.11, 14, 42), new THREE.MeshStandardMaterial({ color: 0xc7a6d4, roughness: 0.42 }));
    er.rotation.x = Math.PI / 2.6; er.position.set(0.42, -0.2, 0.22); parts["Retículo endoplasmático"] = er; group.add(er);
    const golgi = new THREE.Group();
    for (let i = 0; i < 5; i += 1) {
      const plate = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.045, 10, 24), new THREE.MeshStandardMaterial({ color: 0xe7ba74 }));
      plate.scale.set(1.5, 0.55, 0.65); plate.position.set(1.15, 0.2 + i * 0.13, -0.8); golgi.add(plate);
    }
    parts["Complexo golgiense"] = golgi; group.add(golgi);

    scene.add(new THREE.AmbientLight(0xffffff, 1.6));
    const key = new THREE.DirectionalLight(0xffe8bd, 2.5); key.position.set(4, 5, 6); scene.add(key);
    const rim = new THREE.PointLight(0x6ebca8, 16, 12); rim.position.set(-4, -1, 3); scene.add(rim);

    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let frame = 0;
    const onPointerDown = (event: PointerEvent) => { dragging = true; lastX = event.clientX; lastY = event.clientY; container.setPointerCapture(event.pointerId); };
    const onPointerMove = (event: PointerEvent) => { if (!dragging) return; group.rotation.y += (event.clientX - lastX) * 0.008; group.rotation.x += (event.clientY - lastY) * 0.008; lastX = event.clientX; lastY = event.clientY; };
    const onPointerUp = () => { dragging = false; };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") group.rotation.y -= 0.12;
      if (event.key === "ArrowRight") group.rotation.y += 0.12;
      if (event.key === "ArrowUp") group.rotation.x -= 0.12;
      if (event.key === "ArrowDown") group.rotation.x += 0.12;
    };
    const resize = () => { if (!container) return; const { clientWidth, clientHeight } = container; renderer.setSize(clientWidth, clientHeight); camera.aspect = clientWidth / clientHeight; camera.updateProjectionMatrix(); };
    container.addEventListener("pointerdown", onPointerDown); container.addEventListener("pointermove", onPointerMove); container.addEventListener("pointerup", onPointerUp); container.addEventListener("pointercancel", onPointerUp); container.addEventListener("keydown", onKeyDown); window.addEventListener("resize", resize); resize();
    const animate = () => { frame = requestAnimationFrame(animate); if (!dragging) group.rotation.y += 0.0025; Object.entries(parts).forEach(([name, object]) => { const active = name === selectedRef.current; object.scale.lerp(new THREE.Vector3(active ? 1.12 : 1, active ? 1.12 : 1, active ? 1.12 : 1), 0.08); }); renderer.render(scene, camera); };
    animate();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); container.removeEventListener("pointerdown", onPointerDown); container.removeEventListener("pointermove", onPointerMove); container.removeEventListener("pointerup", onPointerUp); container.removeEventListener("pointercancel", onPointerUp); container.removeEventListener("keydown", onKeyDown); renderer.dispose(); container.removeChild(renderer.domElement); };
  }, []);

  const labels = [
    ["Núcleo", "Guarda o DNA e coordena as atividades celulares."],
    ["Mitocôndrias", "Produzem ATP na respiração celular."],
    ["Retículo endoplasmático", "Participa da produção e do transporte de moléculas."],
    ["Complexo golgiense", "Modifica, empacota e distribui substâncias."],
  ] as const;
  return <div className="model-shell"><div ref={containerRef} className="cell-canvas" tabIndex={0} aria-label="Modelo tridimensional de uma célula eucarionte. Use as setas ou arraste para explorar." /><div className="model-hint"><MousePointer2 size={15} /> arraste para girar <span>•</span> <ZoomIn size={15} /> role para aproximar</div><div className="organelle-list">{labels.map(([name, description]) => <button key={name} className={selected === name ? "organelle active" : "organelle"} onClick={() => setSelected(name)}><span className="organelle-dot" /> <span><strong>{name}</strong><small>{selected === name ? description : "Explore no modelo"}</small></span><ChevronRight size={16} /></button>)}</div></div>;
}

function AppMark() { return <img className="brand-mark" src={markImage} alt="" aria-hidden="true" />; }

export default function Home() {
  const [activeMilestone, setActiveMilestone] = useState("hooke");
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const score = answers.filter((answer, index) => answer === quizQuestions[index].answer).length;
  const jumpTo = (id: string) => { setActiveMilestone(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  return <div className="site-shell">
    <header className="topbar"><a href="#top" className="brand"><AppMark /><span>trilhas<span className="brand-accent">.</span></span></a><div className="chapter-label"><span>CAPÍTULO 01</span><strong>A descoberta da vida microscópica</strong></div><a className="top-link" href="#quiz">Revisão rápida <ArrowUpRight size={16} /></a></header>
    <main id="top">
      <section className="hero-section"><div className="hero-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(17,45,48,.94) 0%, rgba(17,45,48,.78) 42%, rgba(17,45,48,.18) 100%), url(${heroImage})` }} /><div className="hero-content"><div className="eyebrow light"><span className="eyebrow-line" /> HISTÓRIA DA CIÊNCIA <span className="eyebrow-dot" /></div><h1>Antes de existir a teoria,<br /><em>alguém precisou olhar</em><br />mais de perto.</h1><p className="hero-lede">Uma viagem de 1665 até a Teoria Celular — contada como história, desenhada como evidência e explorada em três dimensões.</p><a className="hero-cta" href="#hooke">Começar a trilha <ArrowDown size={17} /></a></div><div className="hero-meta"><span>ENEM · BIOLOGIA</span><span>LEITURA · 12 MIN</span><span>EXPLORAÇÃO · 3D</span></div></section>

      <section className="journey-layout"><aside className="timeline-rail" aria-label="Linha do tempo do capítulo">{milestones.map((milestone, index) => <button key={milestone.id} className={activeMilestone === milestone.id ? "timeline-item active" : "timeline-item"} onClick={() => jumpTo(milestone.id)}><span className="timeline-year">{milestone.year}</span><span className="timeline-dot" /><span className="timeline-label">{milestone.label}</span>{index < milestones.length - 1 && <span className="timeline-connector" />}</button>)}</aside>
        <div className="story-column">
          <div className="section-intro"><div className="eyebrow"><span className="eyebrow-line" /> UMA TRILHA DE DESCOBERTA</div><p className="intro-copy">A história da Biologia não começou com uma lista de nomes. Começou com uma pergunta simples: <strong>o que existe além do que os olhos conseguem ver?</strong></p></div>
          <article id="hooke" className="story-block" onMouseEnter={() => setActiveMilestone("hooke")}><div className="story-marker">01 <span>O primeiro nome</span></div><div className="story-copy"><p className="kicker">LONDRES · 1665</p><h2>Uma cortiça, uma lente e uma palavra que ficou.</h2><p>Na Londres que se reconstruía depois do Grande Incêndio, Robert Hooke observava o mundo com a curiosidade de quem desmonta um relógio para entender o tempo. Seu instrumento era um microscópio composto, ainda imperfeito, mas poderoso o bastante para transformar um fragmento de cortiça em paisagem.</p><p>O que apareceu diante dele não foi uma floresta de células vivas. Foram compartimentos vazios, alinhados como quartos minúsculos. Hooke chamou cada um de <strong>cell</strong> — cela — e, sem saber, criou uma palavra que passaria a nomear a unidade fundamental da vida.</p><div className="exam-note"><div className="note-icon"><Lightbulb size={18} /></div><div><span>PARA O ENEM</span><strong>Hooke nomeou a estrutura, mas não foi o primeiro a observar células vivas.</strong><p>A cortiça é formada por células mortas, cujas paredes permanecem visíveis.</p></div></div></div><figure className="evidence-card"><img src={hookeImage} alt="Ilustração editorial de Robert Hooke observando cortiça ao microscópio, com uma ampliação dos compartimentos celulares." /><figcaption><span>FIG. 01 · PRANCHA DE ARQUIVO</span><span>MICROGRAPHIA · 1665</span></figcaption></figure></article>

          <article id="leeuwenhoek" className="story-block reverse" onMouseEnter={() => setActiveMilestone("leeuwenhoek")}><div className="story-marker">02 <span>O mundo se move</span></div><div className="story-copy"><p className="kicker">DELFT · 1674</p><h2>Quando a gota d’água ganhou habitantes.</h2><p>Enquanto Hooke descrevia paredes imóveis, Antonie van Leeuwenhoek polia lentes para enxergar o que ninguém ao seu redor imaginava. Ele não era professor universitário: era comerciante de tecidos, observador meticuloso e construtor de seus próprios microscópios.</p><p>Ao aproximar uma gota de água de lago, encontrou um universo em movimento. Os “animálculos” de Leeuwenhoek eram protozoários e bactérias — evidência de que a vida podia ser abundante mesmo onde parecia não haver nada.</p><div className="exam-note"><div className="note-icon"><Eye size={18} /></div><div><span>PARA O ENEM</span><strong>Microscopia amplia a escala da observação biológica.</strong><p>Leeuwenhoek ajudou a inaugurar a microbiologia ao observar organismos microscópicos vivos.</p></div></div></div><figure className="evidence-card"><img src={leeuwenhoekImage} alt="Ilustração editorial de Leeuwenhoek observando uma gota de água com microscópio e formas microscópicas ampliadas." /><figcaption><span>FIG. 02 · PRANCHA DE ARQUIVO</span><span>MICROBIOLOGIA · 1674</span></figcaption></figure></article>

          <article id="theory" className="theory-block" onMouseEnter={() => setActiveMilestone("theory")}><div className="theory-heading"><div><p className="kicker">A IDEIA QUE ORGANIZOU AS EVIDÊNCIAS</p><h2>Da observação<br /><em>à teoria.</em></h2></div><div className="year-stamp">1838<br /><span>— 1839</span></div></div><div className="theory-grid"><p>Com o avanço das pesquisas em plantas e animais, Matthias Schleiden e Theodor Schwann perceberam que observações diferentes apontavam para uma mesma regra: <strong>seres vivos têm uma organização celular.</strong></p><div className="principle-list"><div><span>01</span><strong>Todo ser vivo é formado por uma ou mais células.</strong></div><div><span>02</span><strong>A célula é a unidade estrutural e funcional da vida.</strong></div><div><span>03</span><strong>Toda célula surge de outra célula preexistente.</strong></div></div></div><blockquote>“Omnis cellula e cellula”<cite>Rudolf Virchow · toda célula provém de outra célula</cite></blockquote></article>

          <article id="division" className="comparison-block" onMouseEnter={() => setActiveMilestone("division")}><div className="story-marker">03 <span>A grande divisão</span></div><div className="comparison-copy"><p className="kicker">A CÉLULA POR DENTRO</p><h2>Procarionte ou eucarionte?<br /><em>A arquitetura muda tudo.</em></h2><p>O próximo passo é olhar para a organização interna. Bactérias e arqueias são procariontes: seu DNA fica em uma região não delimitada por membrana. Animais, plantas, fungos e muitos protistas são eucariontes: possuem núcleo delimitado e organelas membranosas.</p><div className="comparison-points"><span><b>PRO</b> antes do núcleo</span><span><b>EU</b> núcleo verdadeiro</span></div></div><figure className="evidence-card wide"><img src={comparisonImage} alt="Diagrama editorial comparando uma célula procarionte e uma célula eucarionte." /><figcaption><span>FIG. 03 · COMPARAÇÃO ESTRUTURAL</span><span>ESCALA CONCEITUAL</span></figcaption></figure></article>
        </div>
      </section>

      <section className="explorer-section"><div className="explorer-header"><div><div className="eyebrow light"><span className="eyebrow-line" /> ESTAÇÃO DE EXPLORAÇÃO</div><h2>Gire a célula.<br /><em>Encontre a função.</em></h2></div><p>O desenho mostra uma célula eucarionte animal de forma simplificada. Selecione uma estrutura para realçá-la e conecte forma à função.</p></div><CellModel /></section>

      <section className="review-section"><div className="review-top"><div><div className="eyebrow"><span className="eyebrow-line" /> FICHA DE REVISÃO</div><h2>O que precisa<br /><em>ficar na memória.</em></h2></div><div className="review-badge"><FlaskConical size={22} /><span>CAPÍTULO 01<br /><strong>CONCLUÍDO</strong></span></div></div><div className="review-grid"><div className="review-card"><span className="review-number">01</span><h3>Teoria Celular</h3><p>A célula é a unidade estrutural e funcional dos seres vivos. Novas células vêm de células preexistentes.</p></div><div className="review-card"><span className="review-number">02</span><h3>Procariontes</h3><p>Bacteria e Archaea não possuem núcleo delimitado por membrana, embora tenham material genético.</p></div><div className="review-card"><span className="review-number">03</span><h3>Eucariontes</h3><p>Possuem núcleo delimitado e organelas membranosas, como mitocôndrias e complexo golgiense.</p></div></div></section>

      <section id="quiz" className="quiz-section"><div className="quiz-intro"><div className="eyebrow light"><span className="eyebrow-line" /> TESTE DE RETENÇÃO</div><h2>Agora conte a história<br />com suas próprias palavras.</h2><p>O quiz não quer apenas saber se você acertou. Quer mostrar por que a resposta faz sentido.</p></div><div className="quiz-panel">{quizQuestions.map((item, questionIndex) => <fieldset className="question" key={item.question}><legend><span>0{questionIndex + 1}</span>{item.question}</legend><div className="options">{item.options.map((option, optionIndex) => <label key={option}><input type="radio" name={`question-${questionIndex}`} checked={answers[questionIndex] === optionIndex} onChange={() => { const next = [...answers]; next[questionIndex] = optionIndex; setAnswers(next); setSubmitted(false); }} /><span className="radio-mark" />{option}</label>)}</div>{submitted && answers[questionIndex] !== undefined && <div className={answers[questionIndex] === item.answer ? "feedback correct" : "feedback"}>{answers[questionIndex] === item.answer ? <Check size={17} /> : <CircleHelp size={17} />}<span><strong>{answers[questionIndex] === item.answer ? "Boa leitura." : "Volte à evidência."}</strong> {item.explanation}</span></div>}</fieldset>)}<div className="quiz-actions"><button className="primary-button" onClick={() => setSubmitted(true)}>Verificar respostas <ArrowUpRight size={17} /></button>{submitted && <span className="score"><Sparkles size={17} /> Você acertou {score} de {quizQuestions.length}</span>}</div></div></section>
    </main>
    <footer className="footer"><div className="footer-brand"><AppMark /><span>trilhas<span className="brand-accent">.</span></span></div><p>Uma história de ciência para estudar Biologia com mais contexto, imagem e curiosidade.</p><div className="footer-meta"><span>ARQUIVO VIVO · 2026</span><span>ENEM / BIOLOGIA</span></div></footer>
  </div>;
}
