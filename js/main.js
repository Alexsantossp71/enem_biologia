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
