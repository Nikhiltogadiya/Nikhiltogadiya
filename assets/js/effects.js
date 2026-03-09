/* ============================================================
   EFFECTS.JS — 3D Card Tilt, Cursor Glow, Matrix Rain
   Modular visual effects for the AI-themed portfolio
   ============================================================ */

(function () {
  'use strict';

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme helpers ---------- */
  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }
  function themeColors() {
    if (isDark()) {
      return {
        accent1: '0, 245, 255',
        accent2: '139, 92, 246',
        accent3: '16, 185, 129',
        bgFade: 'rgba(10, 10, 26, 0.06)',
        cursorGlow: 'rgba(0,245,255,0.06)',
      };
    }
    return {
      accent1: '79, 70, 229',
      accent2: '124, 58, 237',
      accent3: '13, 148, 136',
      bgFade: 'rgba(255, 255, 255, 0.08)',
      cursorGlow: 'rgba(79,70,229,0.05)',
    };
  }

  /* ==================== 1. CURSOR GLOW FOLLOWER ==================== */
  if (!isMobile && !prefersReducedMotion) {
    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    document.body.appendChild(glow);

    let cursorX = -200, cursorY = -200;
    let glowX = -200, glowY = -200;

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    }, { passive: true });

    // Update glow color dynamically on theme change
    function updateGlowStyle() {
      const c = themeColors();
      glow.style.background = `radial-gradient(circle, ${c.cursorGlow} 0%, transparent 70%)`;
    }
    updateGlowStyle();
    window.addEventListener('themechange', updateGlowStyle);

    function animateGlow() {
      glowX += (cursorX - glowX) * 0.1;
      glowY += (cursorY - glowY) * 0.1;
      glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  /* ==================== 2. 3D CARD TILT EFFECT ==================== */
  if (!isMobile && !prefersReducedMotion) {
    function initTiltCards() {
      const tiltCards = document.querySelectorAll('.tilt-card');

      tiltCards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -14;
          const rotateY = ((x - centerX) / centerX) * 14;

          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.03)`;

          // Dynamic shine effect
          const shine = card.querySelector('.card-shine');
          if (shine) {
            const c = themeColors();
            shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${c.accent1},0.2) 0%, rgba(${c.accent2},0.08) 40%, transparent 70%)`;
          }
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
          const shine = card.querySelector('.card-shine');
          if (shine) {
            shine.style.background = 'transparent';
          }
        });
      });
    }

    // Run after DOM is ready, or after scroll reveals
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initTiltCards);
    } else {
      initTiltCards();
    }
    // Re-init after scroll animations reveal new cards
    const tiltObserver = new MutationObserver(initTiltCards);
    tiltObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  }

  /* ==================== 3. MATRIX / DATA RAIN EFFECT ==================== */
  if (!isMobile && !prefersReducedMotion) {
    function initMatrixRain() {
      const matrixCanvas = document.getElementById('matrix-canvas');
      if (!matrixCanvas) return;

      const ctx = matrixCanvas.getContext('2d');
      const parent = matrixCanvas.parentElement;

      function resize() {
        matrixCanvas.width = parent.clientWidth;
        matrixCanvas.height = parent.clientHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]|;:<>,.?/~`αβγδεζηθικλμνξπρστυφχψω∑∏∫∂∇∞≈≠≤≥±×÷√';
      const charArray = chars.split('');
      const fontSize = 14;
      const columns = Math.floor(matrixCanvas.width / fontSize);
      const drops = new Array(columns).fill(1);

      // Randomize start positions
      for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.random() * (matrixCanvas.height / fontSize);
      }

      let isCanvasVisible = false;
      const rainObserver = new IntersectionObserver((entries) => {
        isCanvasVisible = entries[0].isIntersecting;
      }, { threshold: 0.1 });
      rainObserver.observe(matrixCanvas);

      function drawRain() {
        requestAnimationFrame(drawRain);
        if (!isCanvasVisible) return;

        const c = themeColors();
        ctx.fillStyle = c.bgFade;
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

        for (let i = 0; i < drops.length; i++) {
          const char = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          const progress = y / matrixCanvas.height;
          if (progress < 0.5) {
            ctx.fillStyle = `rgba(${c.accent1}, ${0.15 + progress * 0.3})`;
          } else {
            ctx.fillStyle = `rgba(${c.accent2}, ${0.15 + (1 - progress) * 0.3})`;
          }

          ctx.font = `${fontSize}px 'Fira Code', monospace`;
          ctx.fillText(char, x, y);

          if (y > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i] += 0.5;
        }
      }
      drawRain();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMatrixRain);
    } else {
      initMatrixRain();
    }
  }

  /* ==================== 4. GLOWING BORDER ANIMATION ==================== */
  function initGlowingBorders() {
    const glowBoxes = document.querySelectorAll('.glow-border');
    glowBoxes.forEach((box) => {
      if (!box.querySelector('.glow-border-inner')) {
        const inner = document.createElement('div');
        inner.className = 'glow-border-inner';
        while (box.firstChild) {
          inner.appendChild(box.firstChild);
        }
        box.appendChild(inner);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlowingBorders);
  } else {
    initGlowingBorders();
  }

  /* ==================== 5. PARALLAX BACKGROUND ELEMENTS ==================== */
  if (!isMobile && !prefersReducedMotion) {
    const parallaxElements = [];

    function initParallax() {
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        parallaxElements.push({
          element: el,
          speed: parseFloat(el.dataset.parallax) || 0.3,
        });
      });
    }

    function updateParallax() {
      const scrollY = window.scrollY;
      parallaxElements.forEach(({ element, speed }) => {
        const offset = scrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
      requestAnimationFrame(updateParallax);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => { initParallax(); updateParallax(); });
    } else {
      initParallax();
      updateParallax();
    }
  }

  /* ==================== 6. PULSING NODE CONNECTIONS (Skills section) ==================== */
  if (!isMobile && !prefersReducedMotion) {
    function initSkillConnections() {
      const skillsCanvas = document.getElementById('skills-connections');
      if (!skillsCanvas) return;

      const ctx = skillsCanvas.getContext('2d');
      const parent = skillsCanvas.parentElement;

      function resize() {
        skillsCanvas.width = parent.clientWidth;
        skillsCanvas.height = parent.clientHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      const nodes = [];
      const nodeCount = 30;

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * skillsCanvas.width,
          y: Math.random() * skillsCanvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 1.5 + Math.random() * 2,
        });
      }

      let isSectionVisible = false;
      const sectionObserver = new IntersectionObserver((entries) => {
        isSectionVisible = entries[0].isIntersecting;
      }, { threshold: 0.1 });
      sectionObserver.observe(parent);

      function drawConnections() {
        requestAnimationFrame(drawConnections);
        if (!isSectionVisible) return;

        ctx.clearRect(0, 0, skillsCanvas.width, skillsCanvas.height);

        // Update & draw nodes
        nodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > skillsCanvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > skillsCanvas.height) node.vy *= -1;

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${themeColors().accent1}, 0.4)`;
          ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
              const alpha = (1 - dist / 150) * 0.15;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(${themeColors().accent2}, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }
      drawConnections();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSkillConnections);
    } else {
      initSkillConnections();
    }
  }

  /* ==================== 7. SCROLL-TRIGGERED COUNTERS ==================== */
  function initCounters() {
    const counters = document.querySelectorAll('.hero-stat h3');
    let counted = false;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          counters.forEach((counter) => {
            const text = counter.textContent;
            const match = text.match(/(\d+)/);
            if (!match) return;

            const target = parseInt(match[1]);
            const suffix = text.replace(match[1], '');
            let current = 0;
            const increment = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              counter.textContent = current + suffix;
            }, 50);
          });
        }
      });
    }, { threshold: 0.5 });

    if (counters.length > 0) {
      counterObserver.observe(counters[0].closest('.hero-stats'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }

})();
