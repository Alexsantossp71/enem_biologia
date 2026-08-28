// Módulo Three.js para visualização 3D da célula eucarionte
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initCellModel() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  // Cena
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a1a);

  // Câmera
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  // Renderizador
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Grupo principal para a célula
  const cellGroup = new THREE.Group();
  scene.add(cellGroup);

  // Membrana celular (esfera externa translúcida)
  const membraneGeometry = new THREE.SphereGeometry(3, 32, 32);
  const membraneMaterial = new THREE.MeshPhongMaterial({
    color: 0x81C784,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide
  });
  const membrane = new THREE.Mesh(membraneGeometry, membraneMaterial);
  cellGroup.add(membrane);

  // Citoplasma (esfera interna)
  const cytoplasmGeometry = new THREE.SphereGeometry(2.8, 32, 32);
  const cytoplasmMaterial = new THREE.MeshPhongMaterial({
    color: 0xC8E6C9,
    transparent: true,
    opacity: 0.6
  });
  const cytoplasm = new THREE.Mesh(cytoplasmGeometry, cytoplasmMaterial);
  cellGroup.add(cytoplasm);

  // Núcleo
  const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
  const nucleusMaterial = new THREE.MeshPhongMaterial({ color: 0x5C6BC0 });
  const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
  nucleus.position.set(0.5, 0.3, 0.5);
  cellGroup.add(nucleus);

  // Mitocôndrias (várias)
  const mitochondriaPositions = [
    { x: -1.5, y: 0.5, z: 1 },
    { x: 1.2, y: -0.8, z: 0.5 },
    { x: -0.8, y: -1, z: -0.5 },
    { x: 0.5, y: 1.2, z: -0.8 }
  ];

  mitochondriaPositions.forEach(pos => {
    const mitoGeometry = new THREE.CapsuleGeometry(0.3, 0.8, 4, 8);
    const mitoMaterial = new THREE.MeshPhongMaterial({ color: 0xFF7043 });
    const mitochondrion = new THREE.Mesh(mitoGeometry, mitoMaterial);
    mitochondrion.position.set(pos.x, pos.y, pos.z);
    mitochondrion.rotation.z = Math.random() * Math.PI;
    mitochondrion.rotation.x = Math.random() * Math.PI;
    cellGroup.add(mitochondrion);
  });

  // Retículo Endoplasmático (toro simples representando)
  const erGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 32);
  const erMaterial = new THREE.MeshPhongMaterial({ color: 0xAB47BC });
  const er = new THREE.Mesh(erGeometry, erMaterial);
  er.position.set(-0.3, 0.2, 0.8);
  er.rotation.x = Math.PI / 3;
  cellGroup.add(er);

  // Iluminação
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xffaa00, 0.5);
  pointLight.position.set(-3, 2, 3);
  scene.add(pointLight);

  // Controles de rotação com mouse
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  container.addEventListener('mousedown', () => { isDragging = true; });
  container.addEventListener('mouseup', () => { isDragging = false; });
  container.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaMove = {
        x: e.offsetX - previousMousePosition.x,
        y: e.offsetY - previousMousePosition.y
      };

      cellGroup.rotation.y += deltaMove.x * 0.01;
      cellGroup.rotation.x += deltaMove.y * 0.01;
    }
    previousMousePosition = { x: e.offsetX, y: e.offsetY };
  });

  // Animação
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotação suave automática quando não está arrastando
    if (!isDragging) {
      cellGroup.rotation.y += 0.002;
    }
    
    renderer.render(scene, camera);
  }

  animate();

  // Responsividade
  window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  console.log("Modelo 3D da célula inicializado com sucesso!");
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCellModel);
} else {
  initCellModel();
}
