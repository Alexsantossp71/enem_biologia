// ============================================
// O ARQUIVO ÉRIS — Shared Components
// ============================================

// Detects if we are inside a subdirectory (e.g. capitulo_1/)
function getBasePath() {
    const path = window.location.pathname;
    return path.includes('/capitulo_') ? '../' : '';
}

function getChapter(id) {
    return CHAPTERS.find(c => c.id === id);
}

function createParticles() {
    const container = document.querySelector('.bg-particles');
    if (!container) return;
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.animationDuration = (6 + Math.random() * 6) + 's';
        const colors = ['#00f0ff', '#00ff88', '#8b5cf6', '#ff00aa'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(p);
    }
}

function renderNavbar(activeChapter) {
    const ch = activeChapter ? getChapter(activeChapter) : null;
    const base = getBasePath();
    return `
    <nav class="navbar" id="navbar">
      <a href="${base}index.html" class="nav-brand">
        <div class="logo-icon">🧬</div>
        <span class="brand-text">ARQUIVO ÉRIS</span>
      </a>
      <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
      <ul class="nav-links">
        <li><a href="${base}index.html">Início</a></li>
        ${ch ? `
        <li><a href="${base}capitulo_${ch.id}/teoria.html" class="active">Cap. ${ch.id}</a></li>
        ` : ''}
        ${[1, 2, 3, 4, 5, 6, 7, 8].map(i =>
        `<li><a href="${base}capitulo_${i}/teoria.html" title="Cap. ${i}"${activeChapter === i ? ' class="active"' : ''}>${CHAPTERS[i - 1].icon}</a></li>`
    ).join('')}
      </ul>
    </nav>`;
}

function renderPageHeader(chapterId, activityName) {
    const ch = getChapter(chapterId);
    if (!ch) return '';
    return `
    <div class="page-header">
      <div class="chapter-number">Capítulo ${ch.id} — ${ch.topic}</div>
      <h1>${ch.title}</h1>
      <div class="topic-label">${activityName}</div>
    </div>`;
}

function renderActivityTabs(chapterId, activeTab) {
    const base = getBasePath();
    const tabs = [
        { id: 'teoria', label: 'Teoria', icon: '📖', file: `${base}capitulo_${chapterId}/teoria.html` },
        { id: 'flashcard', label: 'Flashcards', icon: '🃏', file: `${base}capitulo_${chapterId}/flashcard.html` },
        { id: 'memoria', label: 'Jogo da Memória', icon: '🧠', file: `${base}capitulo_${chapterId}/jogo_da_memoria.html` },
        { id: 'quizz', label: 'Quiz', icon: '✅', file: `${base}capitulo_${chapterId}/quizz.html` }
    ];
    return `
    <div class="activity-tabs">
      ${tabs.map(t => `
        <a href="${t.file}" class="activity-tab ${activeTab === t.id ? 'active' : ''}">
          <span class="tab-icon">${t.icon}</span> ${t.label}
        </a>
      `).join('')}
    </div>`;
}

function renderFooter() {
    return `
    <footer class="footer">
      <p>🧬 <strong>O Arquivo Éris</strong> — Biologia para o ENEM disfarçada de ficção científica</p>
      <p style="margin-top:0.5rem">Criado com 💚 para estudantes brasileiros</p>
    </footer>`;
}

function renderBackground() {
    return `<div class="bg-particles"></div><div class="bg-grid"></div>`;
}

function initPage() {
    createParticles();
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initPage);
