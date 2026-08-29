// Script principal para navegação e interatividade básica

document.addEventListener('DOMContentLoaded', function() {
  console.log("Site carregado com sucesso!");
  
  // Adicionar efeito suave nos cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});

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
