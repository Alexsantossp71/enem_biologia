// Script principal para navegação e interatividade básica

// ------------------------------------------------------------
// Correção de quiz dos capítulos (usada pelos botões "Verificar
// Respostas" nas páginas capN_biologia.html)
// Exemplo: checkQuiz({ q1: 'b', q2: 'c', q3: 'a' })
// ------------------------------------------------------------
window.checkQuiz = function (answerKey, resultId = 'quiz-result') {
  let correct = 0;
  const total = Object.keys(answerKey).length;

  for (const [questionName, correctAnswer] of Object.entries(answerKey)) {
    const selected = document.querySelector(
      'input[name="' + questionName + '"]:checked'
    );
    if (selected && selected.value === correctAnswer) {
      correct++;
    }
  }

  const result = document.getElementById(resultId);
  if (!result) return;

  const answersList = Object.entries(answerKey)
    .map(function (entry) {
      return entry[0].replace('q', '') + '-' + entry[1].toUpperCase();
    })
    .join(', ');

  const allCorrect = correct === total;
  result.className = 'quiz-result ' +
    (allCorrect ? 'quiz-result--success' : 'quiz-result--partial');
  result.innerHTML =
    '<span>' +
    (allCorrect ? '🎉 Excelente! ' : '📊 Resultado: ') +
    'Você acertou <strong>' + correct + ' de ' + total +
    '</strong> questão(ões). Respostas corretas: ' + answersList +
    '</span>';
  result.style.display = 'block';
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// Toggle de tema claro/escuro (persistido em localStorage)
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') {
    root.setAttribute('data-theme', stored);
  }

  function sync() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️ Claro' : '🌙 Escuro';
    btn.setAttribute('aria-pressed', String(isDark));
  }

  function buildToggle() {
    const nav = document.querySelector('nav');
    if (!nav || document.getElementById('theme-toggle')) return;
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Alternar tema claro/escuro');
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      sync();
    });
    nav.appendChild(btn);
    sync();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToggle);
  } else {
    buildToggle();
  }
})();
