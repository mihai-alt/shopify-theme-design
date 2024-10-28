// ABOUTME: Preview JavaScript for interactive elements
// ABOUTME: Handles basic interactions for the HTML mockup preview

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add hover lift effect to product cards
document.querySelectorAll('.product-card').forEach(card => {
  card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
});

// Console greeting
console.log('%c🕐 Mandatory Fun Theme Preview', 'font-size: 16px; font-weight: bold; color: #E85A5A;');
console.log('%cCorporate compliance training + Saturday morning cartoons', 'font-size: 12px; color: #8D93A1;');
