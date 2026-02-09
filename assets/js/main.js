/* ============================================================
   NIKHIL TOGADIYA — PORTFOLIO JAVASCRIPT
   Typing effect, scroll animations, navbar, back-to-top
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------- Typing Effect -------------------- */
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const phrases = [
      'AI/ML Engineer',
      'Agentic AI Developer',
      'Generative AI Specialist',
      'LLM & RAG Architect',
      'Robotics AI Engineer',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 60;
    const deleteSpeed = 35;
    const pauseAfterType = 2000;
    const pauseAfterDelete = 500;

    function type() {
      const current = phrases[phraseIndex];
      if (!isDeleting) {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, pauseAfterType);
          return;
        }
        setTimeout(type, typeSpeed);
      } else {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, pauseAfterDelete);
          return;
        }
        setTimeout(type, deleteSpeed);
      }
    }
    type();
  }

  /* -------------------- Navbar Scroll -------------------- */
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  /* -------------------- Active Nav Link -------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveLink() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink);

  /* -------------------- Mobile Nav Toggle -------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      navToggle.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }

  /* -------------------- Scroll Animations -------------------- */
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  animatedElements.forEach((el) => observer.observe(el));

  /* -------------------- Back to Top -------------------- */
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -------------------- Smooth Scroll for Nav Links -------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* -------------------- Staggered Animation Delays -------------------- */
  document.querySelectorAll('.projects-grid .project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
  document.querySelectorAll('.skills-categories .skill-category').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  /* -------------------- Year in Footer -------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
