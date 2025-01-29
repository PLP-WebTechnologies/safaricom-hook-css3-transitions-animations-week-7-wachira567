// Toggle Animation for CTA Button
document.getElementById('cta-button').addEventListener('click', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animated');
  
    setTimeout(() => {
      heroContent.classList.remove('animated');
    }, 1000);
  });
  
  // Form Submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  });
  
  // Dynamic Card Animation
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });