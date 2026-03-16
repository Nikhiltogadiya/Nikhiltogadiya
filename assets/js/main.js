/* ============================================================
   NIKHIL TOGADIYA — PORTFOLIO JAVASCRIPT
   Typing effect, scroll animations, navbar, back-to-top
   Dark AI Theme with 3D scroll effects
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==================== LANGUAGE / i18n ==================== */
  const langToggleBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'en';
  // typing state — defined here so setLanguage can restart it
  let typingTimeout = null;

  function getTypingPhrases(lang) {
    return [
      translations[lang]['typing.0'],
      translations[lang]['typing.1'],
      translations[lang]['typing.2'],
      translations[lang]['typing.3'],
      translations[lang]['typing.4'],
    ];
  }

  function startTyping(lang) {
    const typingEl = document.getElementById('typing-text');
    if (!typingEl) return;
    if (typingTimeout) clearTimeout(typingTimeout);
    typingEl.textContent = '';

    const phrases = getTypingPhrases(lang);
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
          typingTimeout = setTimeout(type, pauseAfterType);
          return;
        }
        typingTimeout = setTimeout(type, typeSpeed);
      } else {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typingTimeout = setTimeout(type, pauseAfterDelete);
          return;
        }
        typingTimeout = setTimeout(type, deleteSpeed);
      }
    }
    type();
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Swap textContent for all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Swap innerHTML for elements that contain HTML (bold tags etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update toggle button label
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'de' ? '🇩🇪 DE' : '🇬🇧 EN';
    }

    // Update project card toggle button labels to match new language
    document.querySelectorAll('.project-card').forEach(card => {
      const label = card.querySelector('[data-toggle-label]');
      if (!label) return;
      const isExpanded = card.classList.contains('expanded');
      label.textContent = isExpanded
        ? (lang === 'de' ? 'Weniger' : 'Less')
        : (lang === 'de' ? 'Details' : 'Details');
    });

    // Restart typing animation with new language phrases
    startTyping(lang);
  }

  // Init toggle button click
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'de' : 'en');
    });
  }

  // Apply stored/default language on load
  setLanguage(currentLang);

  /* -------------------- Navbar Scroll -------------------- */
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
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

  /* -------------------- Scroll Animations (3D Enhanced) -------------------- */
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

  /* -------------------- Collapsible Project Cards -------------------- */
  document.querySelectorAll('.project-card').forEach(card => {
    const actions = card.querySelector('.project-card-actions');
    if (!actions) return;

    const btn = document.createElement('button');
    btn.className = 'project-card-toggle';
    btn.innerHTML = `<span data-toggle-label>Details</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    actions.prepend(btn);

    btn.addEventListener('click', () => {
      const isExpanded = card.classList.toggle('expanded');
      btn.querySelector('[data-toggle-label]').textContent = isExpanded
        ? (currentLang === 'de' ? 'Weniger' : 'Less')
        : (currentLang === 'de' ? 'Details' : 'Details');
    });
  });

  /* -------------------- Staggered Animation Delays -------------------- */
  document.querySelectorAll('.projects-grid .project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.15}s`;
  });
  document.querySelectorAll('.skills-categories .skill-category').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
  document.querySelectorAll('.about-highlights .about-highlight-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
  });

  /* -------------------- Year in Footer -------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ==================== THEME TOGGLE ==================== */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function getStoredTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#0a0a1a' : '#ffffff');
    }
    // Dispatch custom event for Three.js / effects
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.hasAttribute('data-theme') ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }

  // Apply stored theme (handles case where inline script in <head> already set dark)
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme);

});
