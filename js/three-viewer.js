// ============================================================
// three-viewer.js — Visualizador 3D compartilhado dos capítulos
// Trilhas de Biologia ENEM
//
// Uso: <div id="canvas-container" data-three-scene="dna"></div>
// O módulo procura o container, constrói a cena indicada e
// habilita rotação com o mouse e zoom com a roda.
//
// Cenas disponíveis (data-three-scene):
//   water, dna, plantCell, energy, mitosis, neuron, flower,
//   bacteria, protozoa, fungi, jellyfish, ecosystem
//
// Em cenas com etapas (ex.: mitosis), os botões na página usam:
//   <button data-viewer-stage="prophase">Prófase</button>
// ============================================================
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const container = document.getElementById('canvas-container');
if (container) {
  try {
    initViewer(container);
  } catch (err) {
    container.innerHTML = '<div class="canvas-label">⚠️ WebGL indisponível — veja o modelo externo abaixo.</div>';
    console.warn('three-viewer:', err);
  }
}

function initViewer(containerEl) {
  const sceneName = containerEl.dataset.threeScene || 'dna';
  const baseZ = { water: 8, dna: 12, plantCell: 10, energy: 10, mitosis: 9,
                  neuron: 10, flower: 9, bacteria: 9, protozoa: 9, fungi: 9,
                  jellyfish: 9, ecosystem: 12 }[sceneName] || 10;

  // Cena, câmera, renderizador
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x132018);
  const camera = new THREE.PerspectiveCamera(55, containerEl.clientWidth / containerEl.clientHeight, 0.1, 200);
  camera.position.set(0, 0, baseZ);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  containerEl.appendChild(renderer.domElement);

  // Iluminação
  scene.add(new THREE.AmbientLight(0xffffff, 0.65));
  const key = new THREE.DirectionalLight(0xffffff, 0.9);
  key.position.set(6, 8, 7);
  scene.add(key);
  const rim = new THREE.PointLight(0x81c784, 0.6, 40);
  rim.position.set(-6, -3, 4);
  scene.add(rim);

  // Grupo controlável (arrastar)
  const group = new THREE.Group();
  scene.add(group);

  const builder = SCENES[sceneName] || SCENES.dna;
  const built = builder(group);

  // ----- Controles simples (arrastar + zoom) -----
  let dragging = false;
  let prev = { x: 0, y: 0 };
  containerEl.addEventListener('mousedown', (e) => { dragging = true; prev = { x: e.offsetX, y: e.offsetY }; });
  window.addEventListener('mouseup', () => { dragging = false; });
  containerEl.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    group.rotation.y += (e.offsetX - prev.x) * 0.01;
    group.rotation.x += (e.offsetY - prev.y) * 0.01;
    prev = { x: e.offsetX, y: e.offsetY };
  });
  containerEl.addEventListener('wheel', (e) => {
    e.preventDefault();
    camera.position.z = THREE.MathUtils.clamp(camera.position.z + e.deltaY * 0.008, 4, 25);
  }, { passive: false });

  // ----- API pública para botões de etapas (mitose) -----
  window.__viewerApi = {
    setStage(stage) {
      if (built.setStage) built.setStage(stage);
      document.querySelectorAll('[data-viewer-stage]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.viewerStage === stage);
      });
    }
  };
  window.setViewerStage = (s) => window.__viewerApi && window.__viewerApi.setStage(s);

  document.querySelectorAll('[data-viewer-stage]').forEach((btn) => {
    btn.addEventListener('click', () => window.setViewerStage(btn.dataset.viewerStage));
  });
  if (built.setStage && built.defaultStage) {
    window.__viewerApi.setStage(built.defaultStage);
  }

  // ----- Loop de animação -----
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    if (!dragging) group.rotation.y += 0.0035;
    if (built.tick) built.tick(t);
    renderer.render(scene, camera);
  }
  animate();

  // Responsividade
  window.addEventListener('resize', () => {
    const w = containerEl.clientWidth, h = containerEl.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  console.log('Modelo 3D (' + sceneName + ') inicializado!');
}

// ================= HELPERS =================
const PH = 0xffffff;
function mat(color, opts = {}) {
  return new THREE.MeshPhongMaterial(Object.assign({ color }, opts));
}
function add(parent, geo, material, pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1]) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(...pos);
  m.rotation.set(...rot);
  m.scale.set(...scale);
  parent.add(m);
  return m;
}
function link(parent, a, b, radius, material) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 10), material);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  parent.add(m);
  return m;
}
function sphere(parent, r, material, pos = [0, 0, 0], scale = [1, 1, 1], seg = 24) {
  return add(parent, new THREE.SphereGeometry(r, seg, seg), material, pos, [0, 0, 0], scale);
}

// ================= CENAS =================
const SCENES = {

  // ---- Moléculas de água (Cap. 2) ----
  water(group) {
    const O = mat(0xef5350), H = mat(0xffffff), bond = mat(0x90a4ae), hbond = mat(0x4fc3f7, { transparent: true, opacity: 0.55 });
    function molecule(cx, cy, cz, rotY) {
      const g = new THREE.Group();
      g.position.set(cx, cy, cz);
      g.rotation.y = rotY;
      sphere(g, 0.55, O, [0, 0, 0]);
      const h1 = new THREE.Vector3(0.9, 0.4, 0), h2 = new THREE.Vector3(-0.85, 0.5, 0);
      sphere(g, 0.3, H, [h1.x, h1.y, h1.z]);
      sphere(g, 0.3, H, [h2.x, h2.y, h2.z]);
      link(g, new THREE.Vector3(0, 0, 0), h1, 0.11, bond);
      link(g, new THREE.Vector3(0, 0, 0), h2, 0.11, bond);
      group.add(g);
      return g;
    }
    molecule(-2.4, 0.6, 0, 0.3);
    molecule(0.3, -0.9, 0.8, 2.2);
    molecule(2.6, 0.8, -0.6, 4.1);
    // Pontes de hidrogênio (dash-like cylinders finos)
    link(group, new THREE.Vector3(-1.6, 0.75, 0.1), new THREE.Vector3(0.05, -0.45, 0.5), 0.05, hbond);
    link(group, new THREE.Vector3(1.1, -0.7, 0.7), new THREE.Vector3(2.05, 0.6, -0.4), 0.05, hbond);
    return { tick(t) { group.children.slice(0, 3).forEach((m, i) => { m.position.y += Math.sin(t * 1.5 + i * 2) * 0.002; }); } };
  },

  // ---- Dupla hélice de DNA (Cap. 3) ----
  dna(group) {
    const back = mat(0x26c6da), back2 = mat(0x29b6f6);
    const bases = [mat(0xff7043), mat(0xab47bc), mat(0xffca28), mat(0x66bb6a)];
    const pts = [];
    const N = 36, R = 1.8, H = 7;
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * Math.PI * 4;
      pts.push({ a: new THREE.Vector3(Math.cos(t) * R, (i / N - 0.5) * 2 * H, Math.sin(t) * R),
                 b: new THREE.Vector3(Math.cos(t + Math.PI) * R, (i / N - 0.5) * 2 * H, Math.sin(t + Math.PI) * R) });
    }
    for (let i = 0; i < pts.length - 1; i++) {
      link(group, pts[i].a, pts[i + 1].a, 0.12, back);
      link(group, pts[i].b, pts[i + 1].b, 0.12, back2);
      link(group, pts[i].a, pts[i].b, 0.09, bases[i % 4]);
      sphere(group, 0.18, back, [pts[i].a.x, pts[i].a.y, pts[i].a.z]);
      sphere(group, 0.18, back2, [pts[i].b.x, pts[i].b.y, pts[i].b.z]);
    }
    return { tick(t) { group.rotation.x = Math.sin(t * 0.4) * 0.1; } };
  },

  // ---- Célula vegetal (Cap. 4) ----
  plantCell(group) {
    const wall = mat(0x2e7d32, { transparent: true, opacity: 0.16, side: THREE.DoubleSide });
    const memb = mat(0x66bb6a, { transparent: true, opacity: 0.08, side: THREE.DoubleSide });
    add(group, new THREE.BoxGeometry(7, 7, 7), wall);
    add(group, new THREE.BoxGeometry(6.4, 6.4, 6.4), memb);
    // Vacúolo
    sphere(group, 2.0, mat(0x4fc3f7, { transparent: true, opacity: 0.75 }), [0.8, -0.4, 0.4], [1, 1.1, 1]);
    // Núcleo
    sphere(group, 1.05, mat(0x5c6bc0), [-1.5, 1.1, 0.8]);
    sphere(group, 0.45, mat(0x7986cb), [-1.5, 1.1, 0.8]);
    // Cloroplastos
    const chloro = mat(0x66bb6a), thyl = mat(0x2e7d32);
    [[1.6, 1.9, -1.2], [2.2, -1.6, 1.4], [-2.2, 0.1, -1.8], [1.2, 2.2, 1.6], [-1.9, -1.9, 1.0]].forEach((p, i) => {
      const c = sphere(group, 0.55, chloro, p, [1, 0.6, 1]);
      c.rotation.z = i * 0.9;
      for (let k = -2; k <= 2; k++) add(group, new THREE.BoxGeometry(0.5, 0.09, 0.3), thyl, [p[0] - 0.2, p[1] + k * 0.13, p[2]], [0, 0, i * 0.9]);
    });
    // Mitocôndrias
    const mito = mat(0xff7043);
    [[-2.3, 1.9, -1.5, 1.1], [0.4, -2.2, -1.4, 0.4]].forEach(([x, y, z, r]) => {
      const m = add(group, new THREE.CapsuleGeometry(0.4, 0.9, 4, 12), mito, [x, y, z], [Math.PI / 2, 0, r]);
      m.rotation.z = r;
    });
    // Retículo endoplasmático
    add(group, new THREE.TorusGeometry(1.4, 0.16, 10, 28), mat(0xab47bc), [0.3, 1.6, -1.2], [Math.PI / 2.4, 0, 0.5]);
    return { tick(t) { group.rotation.y += Math.sin(t * 0.6) * 0.0004; } };
  },

  // ---- Metabolismo: mitocôndria + cloroplasto (Cap. 5) ----
  energy(group) {
    const mitoMat = mat(0xff7043), crista = mat(0xbf360c);
    const m = add(group, new THREE.CapsuleGeometry(1.0, 2.2, 6, 20), mitoMat, [-2.4, 0, 0], [0, 0, Math.PI / 2]);
    for (let k = -2; k <= 2; k++) add(group, new THREE.BoxGeometry(0.18, 1.3, 1.4), crista, [-2.4 + k * 0.55, 0, 0]);
    const chloroMat = mat(0x66bb6a, { transparent: true, opacity: 0.9 });
    sphere(group, 1.7, chloroMat, [2.6, 0, 0], [1, 0.8, 1]);
    for (let k = -2; k <= 2; k++) add(group, new THREE.CylinderGeometry(0.9, 0.9, 0.1, 20), mat(0x2e7d32), [2.6, k * 0.5, 0]);
    return { tick(t) { m.rotation.y = t * 0.3; } };
  },

  // ---- Mitose interativa por etapas (Cap. 6) ----
  mitosis(group) {
    const memb = mat(0x81c784, { transparent: true, opacity: 0.14, side: THREE.DoubleSide });
    const cyto = mat(0xc8e6c9, { transparent: true, opacity: 0.35 });
    const chromo = mat(0xef5350), spindle = mat(0x90a4ae, { transparent: true, opacity: 0.5 });
    sphere(group, 3.4, cyto);
    sphere(group, 3.6, memb);
    const stageGroup = new THREE.Group();
    group.add(stageGroup);
    function chromoPair(x, y, z) {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      add(g, new THREE.CapsuleGeometry(0.09, 0.7, 4, 8), chromo, [0, 0, 0], [0, 0, 0.6]);
      add(g, new THREE.CapsuleGeometry(0.09, 0.7, 4, 8), chromo, [0, 0, 0], [0, 0, -0.6]);
      add(g, new THREE.SphereGeometry(0.12, 8, 8), chromo, [0, 0, 0]);
      return g;
    }
    function clear() { while (stageGroup.children.length) stageGroup.remove(stageGroup.children[0]); }
    function nucleus() { sphere(stageGroup, 1.2, mat(0x7e57c2, { transparent: true, opacity: 0.9 }), [0, 0, 0]); }
    function spindleLines() {
      const ends = [[0, 3.2, 0], [3.2, 0, 0], [-3.2, 0, 0], [0, -3.2, 0], [0, 0, 3.2], [0, 0, -3.2]];
      for (const e of ends) link(stageGroup, new THREE.Vector3(0, 0, 0), new THREE.Vector3(...e), 0.03, spindle);
    }
    const stages = {
      prophase() { nucleus(); [[-0.8, 0.2, 0.4], [0.7, -0.6, 0.9], [0.9, 0.8, -0.5], [-0.6, 0.6, -0.9]].forEach(p => stageGroup.add(chromoPair(...p))); },
      metaphase() { spindleLines(); [[-1.1, 0.6, 0], [-0.75, 0.05, 0], [-0.4, -0.5, 0], [0.4, 0.5, 0], [0.75, -0.05, 0], [1.1, -0.6, 0]].forEach(p => stageGroup.add(chromoPair(...p))); },
      anaphase() {
        spindleLines();
        [[-1.5, 0.3, 0.3], [-1.2, -0.3, -0.4], [1.5, 0.3, 0.3], [1.2, -0.3, -0.4], [-1.8, 0.8, 0], [1.8, 0.8, 0]].forEach(p => stageGroup.add(chromoPair(...p)));
      },
      telophase() {
        sphere(stageGroup, 1.0, mat(0x7e57c2, { transparent: true, opacity: 0.9 }), [-1.6, 0, 0]);
        sphere(stageGroup, 1.0, mat(0x7e57c2, { transparent: true, opacity: 0.9 }), [1.6, 0, 0]);
      }
    };
    const built = {
      defaultStage: 'prophase',
      setStage(s) { clear(); (stages[s] || stages.prophase)(); }
    };
    return built;
  },

  // ---- Neurônio (Cap. 7) ----
  neuron(group) {
    const soma = mat(0xffb74d), dend = mat(0xffa726), axonM = mat(0x26c6da), myelin = mat(0x4fc3f7, { transparent: true, opacity: 0.85 });
    sphere(group, 1.3, soma);
    sphere(group, 0.55, mat(0x5c6bc0), [0, 0.2, 0.4]);
    const dendPts = [[2.4, 1.4, 0.4], [2.9, 2.0, 0.2], [2.4, 2.8, 0.5], [3.0, 3.2, 0.4], [-0.4, 2.5, 0.2], [-0.8, 3.3, 0.1], [1.2, -2.2, 0.3], [1.5, -3.0, 0.2], [-1.8, 1.8, -0.4], [-2.4, 2.4, -0.5]];
    dendPts.forEach(p => add(group, new THREE.ConeGeometry(0.16, 1.6, 8), dend, [p[0] * 0.6, p[1] * 0.6, p[2]], [0, 0, Math.atan2(p[1], p[0]) + Math.PI / 2]));
    // Axônio com bainha de mielina
    const a = new THREE.Vector3(-1.2, -0.6, 0);
    for (let i = 0; i < 7; i++) {
      const b = new THREE.Vector3(-1.2 - i * 0.75, -0.6, 0);
      link(group, a.clone(), b.clone(), 0.1, axonM);
      if (i % 2 === 0) { const mid = a.clone().add(b).multiplyScalar(0.5); add(group, new THREE.CylinderGeometry(0.22, 0.22, 0.7, 10), myelin, [mid.x, mid.y, mid.z], [0, 0, Math.PI / 2]); }
      a.copy(b);
    }
    for (let k = 0; k < 4; k++) sphere(group, 0.14, axonM, [-6.2, -0.6 + k * 0.3, (k % 2) * 0.3]);
    return { tick(t) { group.children[0].scale.setScalar(1 + Math.sin(t * 2) * 0.05); } };
  },

  // ---- Flor (Cap. 8) ----
  flower(group) {
    const petal = mat(0xf48fb1), sepal = mat(0x66bb6a), stemM = mat(0x388e3c), antherM = mat(0xff8f00), pistilM = mat(0x43a047);
    add(group, new THREE.CylinderGeometry(0.16, 0.2, 3, 10), stemM, [0, -2.2, 0]);
    sphere(group, 0.5, stemM, [0, -0.6, 0], [1.6, 0.5, 1.6]);
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      add(group, new THREE.SphereGeometry(0.55, 18, 18), petal, [Math.cos(angle) * 1.1, 0.9, Math.sin(angle) * 1.1], [Math.PI / 2 - 0.5, 0, -angle]).scale.set(1, 1.9, 0.35);
    }
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      add(group, new THREE.CylinderGeometry(0.06, 0.08, 1.3, 8), sepal, [Math.cos(angle) * 0.6, 1.4, Math.sin(angle) * 0.6], [0, 0, Math.PI / 2.5]);
      sphere(group, 0.18, antherM, [Math.cos(angle) * 1.0, 1.75, Math.sin(angle) * 1.0]);
    }
    add(group, new THREE.CylinderGeometry(0.09, 0.12, 1.2, 10), pistilM, [0, 1.75, 0]);
    sphere(group, 0.2, mat(0xa5d6a7), [0, 2.4, 0]);
    sphere(group, 0.55, mat(0xa5d6a7, { transparent: true, opacity: 0.9 }), [0, 1.0, 0]);
    return { tick(t) { group.rotation.y += Math.sin(t * 0.5) * 0.0005; } };
  },

  // ---- Bactéria (Cap. 9) ----
  bacteria(group) {
    const cap = mat(0xffe082, { transparent: true, opacity: 0.25, side: THREE.DoubleSide });
    const wallM = mat(0x90a4ae, { transparent: true, opacity: 0.35 });
    const dnaM = mat(0x5c6bc0), rib = mat(0xff7043), plas = mat(0xab47bc), flagM = mat(0x4fc3f7);
    add(group, new THREE.CapsuleGeometry(1.1, 3.4, 8, 24), cap, [0, 0, 0], [0, 0, 0], [1, 1, 1]);
    add(group, new THREE.CapsuleGeometry(0.9, 3.0, 8, 24), wallM);
    const dnaPts = [];
    for (let i = 0; i <= 20; i++) dnaPts.push(new THREE.Vector3(-1.5 + i * 0.15, Math.sin(i * 0.8) * 0.35, 0));
    for (let i = 0; i < dnaPts.length - 1; i++) link(group, dnaPts[i], dnaPts[i + 1], 0.09, dnaM);
    [[1.2, 0.5, 0.5], [1.6, -0.4, 0], [0.6, 0.7, -0.5]].forEach(p => sphere(group, 0.13, rib, p));
    add(group, new THREE.TorusGeometry(0.35, 0.08, 8, 20), plas, [1.2, 0.2, 0.6], [Math.PI / 2, 0, 0]);
    const flag = new THREE.Group();
    group.add(flag);
    [[0, 0], [0.4, 0.3], [-0.3, 0.4]].forEach(cfg => {
      const pts = [];
      for (let i = 0; i <= 16; i++) pts.push(new THREE.Vector3(-2.2 - i * 0.18, Math.sin(i * 0.7 + cfg[0]) * 0.5 + cfg[1], cfg[2] ? Math.cos(i * 0.5) * 0.3 : 0));
      for (let i = 0; i < pts.length - 1; i++) link(flag, pts[i], pts[i + 1], 0.06, flagM);
    });
    return { tick(t) { flag.rotation.y = Math.sin(t * 3) * 0.2; } };
  },

  // ---- Ameba e paramécio (Cap. 10) ----
  protozoa(group) {
    const amM = mat(0xf48fb1, { transparent: true, opacity: 0.9 });
    const am = new THREE.Group();
    group.add(am);
    sphere(am, 1.4, amM, [0, 0, 0], [1.25, 0.9, 1]);
    sphere(am, 0.7, amM, [1.5, 0.5, 0], [1.3, 0.6, 0.7]);
    sphere(am, 0.6, amM, [-1.4, -0.4, 0.2], [1.2, 0.55, 0.8]);
    sphere(am, 0.55, mat(0xab47bc), [0.1, 0.1, 0.7]);
    sphere(am, 0.4, mat(0xce93d8), [-0.6, 0.6, 0.6]);
    sphere(am, 0.5, mat(0xe1bee7), [0.8, -0.5, 0.4]);
    // Paramécio
    const pa = new THREE.Group();
    pa.position.set(3.6, -0.5, 0);
    group.add(pa);
    add(pa, new THREE.CapsuleGeometry(0.8, 1.8, 8, 20), mat(0x4fc3f7, { transparent: true, opacity: 0.85 }), [0, 0, 0], [0, 0, Math.PI / 2]);
    sphere(pa, 0.4, mat(0x5c6bc0), [0, 0, 0.65]);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      add(pa, new THREE.CylinderGeometry(0.025, 0.025, 0.55, 6), mat(0x81d4fa),
        [Math.cos(a) * 1.55, Math.sin(a) * 0.95, 0.6], [0, 0, a + Math.PI / 2]);
    }
    return { tick(t) { am.scale.x = 1.25 + Math.sin(t * 2) * 0.12; am.scale.z = 1 + Math.cos(t * 2) * 0.1; } };
  },

  // ---- Cogumelo e micélio (Cap. 11) ----
  fungi(group) {
    const capM = mat(0xef5350), dotM = mat(0xfff9c4), stem = mat(0xffe0b2), gill = mat(0xffccbc), myco = mat(0xd7ccc8);
    add(group, new THREE.CylinderGeometry(0.5, 0.65, 2.6, 16), stem, [0, -0.6, 0]);
    const cap = add(group, new THREE.SphereGeometry(1.7, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), capM, [0, 0.7, 0], [0, 0, 0], [1, 0.75, 1]);
    add(group, new THREE.CircleGeometry(1.7, 24), gill, [0, 0.72, 0], [Math.PI / 2, 0, 0]);
    [[0.5, 1.7, 0.6], [-0.9, 1.5, -0.3], [0.8, 1.2, -0.8]].forEach(p => sphere(group, 0.14, dotM, p));
    // Micélio
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const p1 = new THREE.Vector3(Math.cos(a) * 0.4, -1.8, Math.sin(a) * 0.4);
      const p2 = new THREE.Vector3(Math.cos(a) * 2.2, -2.4, Math.sin(a) * 2.2);
      const p3 = new THREE.Vector3(Math.cos(a) * 3.2, -2.0, Math.sin(a) * 3.2);
      link(group, p1, p2, 0.05, myco);
      link(group, p2, p3, 0.05, myco);
    }
    // Esporos flutuando
    const spores = [];
    for (let i = 0; i < 14; i++) {
      const s = sphere(group, 0.07, dotM, [Math.cos(i * 2.4) * 2.5, 2.5 + (i % 4) * 0.6, Math.sin(i * 1.7) * 2.5]);
      spores.push(s);
    }
    return { tick(t) { cap.scale.y = 0.75 + Math.sin(t * 1.5) * 0.03; spores.forEach((s, i) => { s.position.y += Math.sin(t * 2 + i) * 0.004; }); } };
  },

  // ---- Água-viva (Cap. 12) ----
  jellyfish(group) {
    const bell = mat(0x4fc3f7, { transparent: true, opacity: 0.75, side: THREE.DoubleSide });
    const armM = mat(0x81d4fa), tent = mat(0x26c6da);
    add(group, new THREE.SphereGeometry(1.8, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), bell, [0, 0.8, 0], [0, 0, 0], [1, 0.8, 1]);
    const tentGroup = new THREE.Group();
    group.add(tentGroup);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const top = new THREE.Vector3(Math.cos(a) * 1.6, 0.4, Math.sin(a) * 1.6);
      const pts = [];
      for (let k = 0; k <= 12; k++) pts.push(new THREE.Vector3(Math.cos(a) * (1.6 - k * 0.08), 0.4 - k * 0.35, Math.sin(a) * (1.6 - k * 0.08)));
      for (let k = 0; k < pts.length - 1; k++) link(tentGroup, pts[k], pts[k + 1], 0.045, i < 3 ? armM : tent);
    }
    return { tick(t) { tentGroup.children.forEach((c, i) => { c.position.x += Math.sin(t * 2 + i) * 0.002; }); } };
  },

  // ---- Pirâmide de energia / ecossistema (Cap. 13) ----
  ecosystem(group) {
    const layers = [mat(0x66bb6a), mat(0x81c784), mat(0xaed581), mat(0xffd54f)];
    const sizes = [6.5, 4.6, 3.0, 1.6];
    sizes.forEach((s, i) => {
      add(group, new THREE.BoxGeometry(s, 1.1, s), layers[i], [0, -2.2 + i * 1.35, 0]);
    });
    sphere(group, 0.9, mat(0xffca28, { emissive: 0xff8f00, emissiveIntensity: 0.4 }), [0, 3.6, 0]);
    // Setas de energia entre níveis
    for (let i = 0; i < 3; i++) {
      const arrow = new THREE.Group();
      arrow.position.set(sizes[i] / 2 + 0.8, -1.6 + i * 1.35, 0);
      add(arrow, new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8), mat(0xff8f00), [0, 0, 0]);
      add(arrow, new THREE.ConeGeometry(0.22, 0.4, 8), mat(0xff8f00), [0, 0.65, 0]);
      group.add(arrow);
    }
    return { tick(t) { group.rotation.y += Math.sin(t * 0.4) * 0.0004; } };
  }
};
