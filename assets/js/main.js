/* ============================================================
   NIKHIL TOGADIYA — PORTFOLIO JAVASCRIPT
   Typing effect, scroll animations, navbar, back-to-top
   Dark AI Theme with 3D scroll effects
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------- Profile Photo (local first, GitHub fallback) -------------------- */
  const LOCAL_PROFILE_PHOTO = 'assets/profile-photo.jpg';
  const GITHUB_PROFILE_PHOTO = 'https://github.com/Nikhiltogadiya.png';

  function applyProfilePhoto(url) {
    const profilePhoto = document.getElementById('profile-photo');
    const favicon = document.getElementById('site-favicon');

    if (profilePhoto) {
      profilePhoto.src = url;
      profilePhoto.onerror = () => {
        if (profilePhoto.src !== GITHUB_PROFILE_PHOTO) {
          profilePhoto.src = GITHUB_PROFILE_PHOTO;
        }
      };
    }

    if (favicon) {
      favicon.setAttribute('href', url);
    }
  }

  const photoProbe = new Image();
  photoProbe.onload = () => applyProfilePhoto(LOCAL_PROFILE_PHOTO);
  photoProbe.onerror = () => applyProfilePhoto(GITHUB_PROFILE_PHOTO);
  photoProbe.src = LOCAL_PROFILE_PHOTO;

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

  /* -------------------- Social Icon Fallbacks -------------------- */
  // Some CDN Lucide builds do not expose brand icons. Replace unresolved
  // placeholders with inline SVG so GitHub/LinkedIn always render.
  function createBrandIcon(name, width, height) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('xmlns', svgNS);
    svg.setAttribute('width', String(width));
    svg.setAttribute('height', String(height));
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', `lucide lucide-${name}`);

    if (name === 'linkedin') {
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z');
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x', '2');
      rect.setAttribute('y', '9');
      rect.setAttribute('width', '4');
      rect.setAttribute('height', '12');
      const circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', '4');
      circle.setAttribute('cy', '4');
      circle.setAttribute('r', '2');
      svg.append(path, rect, circle);
      return svg;
    }

    if (name === 'github') {
      const path1 = document.createElementNS(svgNS, 'path');
      path1.setAttribute('d', 'M9 19c-5 1.5-5-2.5-7-3');
      const path2 = document.createElementNS(svgNS, 'path');
      path2.setAttribute('d', 'M22 16.92V19a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.19-3.33 2 2 0 0 1-.42-2.64A10 10 0 1 1 22 16.92z');
      const path3 = document.createElementNS(svgNS, 'path');
      path3.setAttribute('d', 'M14.83 13.17a4 4 0 0 0-5.66 0');
      svg.append(path1, path2, path3);
      return svg;
    }

    return null;
  }

  function applySocialIconFallbacks() {
    const targets = document.querySelectorAll('i[data-lucide="linkedin"], i[data-lucide="github"]');
    targets.forEach((placeholder) => {
      const name = placeholder.getAttribute('data-lucide');
      const width = parseInt(placeholder.style.width, 10) || 24;
      const height = parseInt(placeholder.style.height, 10) || 24;
      const replacement = createBrandIcon(name, width, height);
      if (!replacement) return;

      if (placeholder.getAttribute('style')) {
        replacement.setAttribute('style', placeholder.getAttribute('style'));
      }
      if (placeholder.className) {
        replacement.setAttribute('class', `${replacement.getAttribute('class')} ${placeholder.className}`.trim());
      }

      placeholder.replaceWith(replacement);
    });
  }

  applySocialIconFallbacks();

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
    const body = card.querySelector('.project-card-body');
    const footer = card.querySelector('.project-card-footer');
    if (!body || !footer) return;

    const wrap = document.createElement('div');
    wrap.className = 'project-card-toggle-wrap';

    const btn = document.createElement('button');
    btn.className = 'project-card-toggle';
    btn.innerHTML = `<span data-toggle-label>Details</span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    wrap.appendChild(btn);
    card.insertBefore(wrap, footer);

    btn.addEventListener('click', () => {
      const isExpanded = card.classList.toggle('expanded');
      btn.querySelector('[data-toggle-label]').textContent = isExpanded
        ? (currentLang === 'de' ? 'Weniger' : 'Less')
        : 'Details';
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
