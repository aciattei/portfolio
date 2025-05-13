document.addEventListener('DOMContentLoaded', function() {
  // Navegação suave
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove a classe active de todos os links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Adiciona a classe active ao link clicado
      this.classList.add('active');
      
      // Obtém o alvo do link
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Rolagem suave para a seção
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Atualiza o link ativo durante a rolagem
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

// Back to top
document.addEventListener('DOMContentLoaded', function() {
  // ... (seu código existente) ...
  
  // Adiciona classe ao header quando scrollar
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
