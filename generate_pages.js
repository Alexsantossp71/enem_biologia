/* Script para gerar todos os arquivos HTML dos capítulos
   Executar com: node generate_pages.js
*/
const fs = require('fs');
const path = require('path');

const chapters = [
    { id: 1, title: "A Mensageira Microscópica", topic: "A Célula" },
    { id: 2, title: "A Dança das Sombras", topic: "Divisão Celular" },
    { id: 3, title: "O Código Que Não Morre", topic: "Ácidos Nucleicos" },
    { id: 4, title: "O Gene Traidor", topic: "Genética" },
    { id: 5, title: "DNA Forjado no Escuro", topic: "Engenharia Genética" },
    { id: 6, title: "280 Dias de Segredo", topic: "Embriologia" },
    { id: 7, title: "A Árvore Que Escondeu o Crime", topic: "Evolução" },
    { id: 8, title: "O Vírus Que Pode Salvar o Mundo", topic: "Ecologia" }
];

function makeHTML(chId, activity, activityLabel) {
    let scripts = `<script src="js/data.js"><\/script>\n  <script src="js/components.js"><\/script>`;
    let bodyContent = '';

    if (activity === 'teoria') {
        scripts += `\n  <script src="js/theory.js"><\/script>`;
        bodyContent = `
    <div id="app"></div>
    <script>
      const CH = ${chId};
      document.getElementById('app').innerHTML =
        renderBackground() +
        renderNavbar(CH) +
        renderPageHeader(CH, '📖 Conteúdo Teórico') +
        renderActivityTabs(CH, 'teoria') +
        '<div class="content-container"><div class="theory-content">' +
        THEORY_CONTENT[CH] +
        '<\\/div><\\/div>' +
        renderFooter();
    <\/script>`;
    } else if (activity === 'flashcard') {
        bodyContent = `
    <div id="app"></div>
    <script>
      const CH = ${chId};
      const ch = getChapter(CH);
      const cards = ch.flashcards;
      let current = 0, flipped = false;

      function render() {
        document.getElementById('app').innerHTML =
          renderBackground() + renderNavbar(CH) +
          renderPageHeader(CH, '🃏 Flashcards') +
          renderActivityTabs(CH, 'flashcard') +
          '<div class="content-container"><div class="flashcard-container">' +
          '<div class="flashcard-progress"><span>' + (current+1) + ' / ' + cards.length + '</span>' +
          '<div class="progress-bar"><div class="progress-fill" style="width:' + ((current+1)/cards.length*100) + '%"></div></div></div>' +
          '<div class="flashcard-wrapper"><div class="flashcard' + (flipped ? ' flipped' : '') + '" onclick="flip()">' +
          '<div class="flashcard-face flashcard-front"><div class="card-label">Conceito</div>' +
          '<div class="card-text">' + cards[current].front + '</div>' +
          '<div class="flip-hint">clique para virar</div></div>' +
          '<div class="flashcard-face flashcard-back"><div class="card-label">Resposta</div>' +
          '<div class="card-text">' + cards[current].back + '</div>' +
          '<div class="flip-hint">clique para voltar</div></div>' +
          '</div></div>' +
          '<div class="flashcard-controls">' +
          '<button class="fc-btn" onclick="prev()">← Anterior</button>' +
          '<button class="fc-btn primary" onclick="next()">Próximo →</button>' +
          '</div></div></div>' + renderFooter();
      }

      function flip() { flipped = !flipped; render(); }
      function next() { if(current < cards.length-1) { current++; flipped = false; render(); } }
      function prev() { if(current > 0) { current--; flipped = false; render(); } }

      render();
    <\/script>`;
    } else if (activity === 'jogo_da_memoria') {
        bodyContent = `
    <div id="app"></div>
    <script>
      const CH = ${chId};
      const ch = getChapter(CH);
      let memCards = [], flippedCards = [], matchedPairs = 0, moves = 0, totalPairs = ch.memory.length, locked = false;

      function shuffle(arr) { for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];} return arr; }

      function initGame() {
        memCards = []; flippedCards = []; matchedPairs = 0; moves = 0; locked = false;
        ch.memory.forEach((pair, i) => {
          memCards.push({ id: 'term-'+i, pairId: i, text: pair.term, type: 'term' });
          memCards.push({ id: 'def-'+i, pairId: i, text: pair.definition, type: 'def' });
        });
        shuffle(memCards);
        renderGame();
      }

      function renderGame() {
        let gridHTML = memCards.map((c, idx) => {
          const isFlipped = flippedCards.includes(idx);
          const isMatched = c.matched;
          return '<div class="memory-card' + (isFlipped ? ' flipped' : '') + (isMatched ? ' matched' : '') + '" onclick="flipCard('+idx+')">' +
            '<div class="memory-card-inner">' +
            '<div class="memory-card-face memory-card-back"><div class="mem-icon">🧬</div></div>' +
            '<div class="memory-card-face memory-card-front">' + c.text + '</div>' +
            '</div></div>';
        }).join('');

        document.getElementById('app').innerHTML =
          renderBackground() + renderNavbar(CH) +
          renderPageHeader(CH, '🧠 Jogo da Memória') +
          renderActivityTabs(CH, 'memoria') +
          '<div class="content-container"><div class="memory-game-container">' +
          '<div class="memory-stats">' +
          '<div class="stat">Movimentos: <span class="stat-value">' + moves + '</span></div>' +
          '<div class="stat">Pares: <span class="stat-value">' + matchedPairs + '/' + totalPairs + '</span></div></div>' +
          '<div class="memory-grid">' + gridHTML + '</div>' +
          (matchedPairs === totalPairs ? '<div class="memory-complete show"><h3>🎉 Parabéns!</h3><p>Você completou em ' + moves + ' movimentos!</p><button class="btn-reset" onclick="initGame()">🔄 Jogar Novamente</button></div>' : '') +
          '<div style="text-align:center;"><button class="btn-reset" onclick="initGame()">🔄 Reiniciar</button></div>' +
          '</div></div>' + renderFooter();
      }

      function flipCard(idx) {
        if(locked || flippedCards.includes(idx) || memCards[idx].matched) return;
        flippedCards.push(idx);
        renderGame();
        if(flippedCards.length === 2) {
          locked = true; moves++;
          const [a, b] = flippedCards;
          if(memCards[a].pairId === memCards[b].pairId && memCards[a].type !== memCards[b].type) {
            memCards[a].matched = true; memCards[b].matched = true;
            matchedPairs++; flippedCards = []; locked = false;
            setTimeout(renderGame, 300);
          } else {
            setTimeout(() => { flippedCards = []; locked = false; renderGame(); }, 1200);
          }
        }
      }

      initGame();
    <\/script>`;
    } else if (activity === 'quizz') {
        bodyContent = `
    <div id="app"></div>
    <script>
      const CH = ${chId};
      const ch = getChapter(CH);
      const questions = ch.quiz;
      let current = 0, score = 0, answered = false, selected = -1, finished = false;

      function renderQuiz() {
        if(finished) {
          const pct = Math.round(score/questions.length*100);
          const cls = pct >= 80 ? 'great' : pct >= 50 ? 'good' : 'poor';
          document.getElementById('app').innerHTML =
            renderBackground() + renderNavbar(CH) +
            renderPageHeader(CH, '✅ Quiz') +
            renderActivityTabs(CH, 'quizz') +
            '<div class="content-container"><div class="quiz-result show">' +
            '<h3 style="font-family:var(--font-display);color:var(--text-primary);margin-bottom:1rem;">Resultado Final</h3>' +
            '<div class="result-score ' + cls + '">' + pct + '%</div>' +
            '<div class="result-text">' + score + ' de ' + questions.length + ' corretas</div>' +
            '<p style="color:var(--text-secondary);margin-bottom:2rem;">' +
            (pct >= 80 ? '🧬 Excelente! Éris ficaria orgulhosa!' : pct >= 50 ? '📖 Bom trabalho! Revise os flashcards para melhorar.' : '🔬 Continue estudando a teoria e tente novamente!') + '</p>' +
            '<button class="btn-reset" onclick="restart()">🔄 Tentar Novamente</button>' +
            '</div></div>' + renderFooter();
          return;
        }

        const q = questions[current];
        const letters = ['A','B','C','D'];
        let optionsHTML = q.options.map((opt, i) => {
          let cls = '';
          if(answered) {
            if(i === q.answer) cls = ' correct';
            else if(i === selected) cls = ' wrong';
            else cls = ' disabled';
          } else if(i === selected) cls = ' selected';
          return '<div class="quiz-option' + cls + '" onclick="selectOption('+i+')">' +
            '<span class="option-letter">' + letters[i] + '</span><span>' + opt + '</span></div>';
        }).join('');

        let feedbackHTML = '';
        if(answered) {
          const isCorrect = selected === q.answer;
          feedbackHTML = '<div class="quiz-feedback show ' + (isCorrect?'correct':'wrong') + '">' +
            (isCorrect ? '✅ Correto! ' : '❌ Incorreto. ') + q.explanation + '</div>';
        }

        document.getElementById('app').innerHTML =
          renderBackground() + renderNavbar(CH) +
          renderPageHeader(CH, '✅ Quiz') +
          renderActivityTabs(CH, 'quizz') +
          '<div class="content-container"><div class="quiz-container">' +
          '<div class="quiz-progress"><span>' + (current+1) + '/' + questions.length + '</span>' +
          '<div class="progress-bar"><div class="progress-fill" style="width:' + ((current+1)/questions.length*100) + '%"></div></div>' +
          '<span>Acertos: ' + score + '</span></div>' +
          '<div class="quiz-question-card">' +
          '<div class="quiz-question-number">Questão ' + (current+1) + '</div>' +
          '<div class="quiz-question-text">' + q.q + '</div>' +
          '<div class="quiz-options">' + optionsHTML + '</div>' +
          feedbackHTML + '</div>' +
          '<div class="quiz-nav">' +
          (answered ? '<button class="fc-btn primary" onclick="nextQ()">' + (current < questions.length-1 ? 'Próxima →' : 'Ver Resultado') + '</button>' :
          (selected >= 0 ? '<button class="fc-btn primary" onclick="confirm()">Confirmar</button>' : '')) +
          '</div></div></div>' + renderFooter();
      }

      function selectOption(i) { if(!answered) { selected = i; renderQuiz(); } }
      function confirm() { answered = true; if(selected === questions[current].answer) score++; renderQuiz(); }
      function nextQ() { current++; answered = false; selected = -1; if(current >= questions.length) finished = true; renderQuiz(); }
      function restart() { current = 0; score = 0; answered = false; selected = -1; finished = false; renderQuiz(); }

      renderQuiz();
    <\/script>`;
    }

    const ch = chapters.find(c => c.id === chId);
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Cap. ${chId}: ${ch.title} — ${activityLabel}. O Arquivo Éris, Biologia ENEM.">
  <title>${ch.title} — ${activityLabel} | O Arquivo Éris</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  ${scripts}
  ${bodyContent}
</body>
</html>`;
}

const activities = [
    { suffix: 'teoria', label: 'Teoria' },
    { suffix: 'flashcard', label: 'Flashcards' },
    { suffix: 'jogo_da_memoria', label: 'Jogo da Memória' },
    { suffix: 'quizz', label: 'Quiz' }
];

let count = 0;
chapters.forEach(ch => {
    activities.forEach(act => {
        const filename = `${ch.id}_${act.suffix}.html`;
        const content = makeHTML(ch.id, act.suffix, act.label);
        fs.writeFileSync(path.join(__dirname, filename), content, 'utf8');
        console.log(`✅ ${filename}`);
        count++;
    });
});
console.log(`\n🧬 ${count} arquivos gerados com sucesso!`);
