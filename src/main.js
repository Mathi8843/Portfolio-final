import './style.css'

// Console Easter egg
console.log(
  "%c✨ Built by Mathi ✨",
  "background: #121212; color: #ededed; padding: 10px 20px; border-radius: 4px; font-weight: bold;"
);

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Target elements to animate
const animatedElements = document.querySelectorAll('.section-title, .hero-title, .hero-subtitle, .hero-actions, .about-content, .project-card, .skill-category, .contact-text, .social-links');

animatedElements.forEach((el, index) => {
  el.classList.add('animate-on-scroll');
  // Add subtle stagger delay based on index or type could be nice, but simple is fine for now
  // element-specific delays can be added via style if needed
  observer.observe(el);
});

// Smooth Scroll for Navigation (Optional polyfill-like behavior if needed, 
// but CSS scroll-behavior usually handles it. We can add active state to nav links here though)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active'); // We need to add styling for .active in CSS if we want it
    }
  });
});
