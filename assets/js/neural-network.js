/* ============================================================
   NEURAL NETWORK — Three.js Hero Background
   Dramatic 3D neural network with rotating wireframe geometries,
   bright particle field, glowing connections, and mouse interaction.
   Supports light/dark theme switching.
   ============================================================ */

(function () {
  'use strict';

  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;

  /* ---------- Theme Detection ---------- */
  function isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  const THEMES = {
    dark: {
      fogColor: 0x0a0a1a,
      blending: THREE.AdditiveBlending,
      particleOpacity: 0.9,
      lineOpacity: 0.6,
      wireframeOpacity: 0.5,
      orbOpacity: 0.7,
      ringOpacity: 0.12,
      colors: {
        cyan: 0x00f5ff,
        purple: 0x8b5cf6,
        green: 0x10b981,
        pink: 0xec4899,
      },
    },
    light: {
      fogColor: 0xffffff,
      blending: THREE.NormalBlending,
      particleOpacity: 0.65,
      lineOpacity: 0.35,
      wireframeOpacity: 0.4,
      orbOpacity: 0.5,
      ringOpacity: 0.08,
      colors: {
        cyan: 0x4f46e5,    // Indigo
        purple: 0x7c3aed,  // Violet
        green: 0x0d9488,   // Teal
        pink: 0xe11d48,    // Rose
      },
    },
  };

  function getTheme() {
    return isDarkTheme() ? THEMES.dark : THEMES.light;
  }

  let currentThemeKey = isDarkTheme() ? 'dark' : 'light';

  const CONFIG = {
    particleCount: isMobile ? 100 : 280,
    connectionDistance: isMobile ? 130 : 180,
    particleSize: isMobile ? 3.0 : 3.5,
    mouseInfluenceRadius: 300,
    mouseRepelStrength: 0.04,
    driftSpeed: 0.2,
    bounds: { x: 900, y: 550, z: 500 },
  };

  /* ---------- Scene Setup ---------- */
  const scene = new THREE.Scene();
  const thm = getTheme();
  scene.fog = new THREE.FogExp2(thm.fogColor, 0.0008);

  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 1, 3000);
  camera.position.z = 600;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !isMobile,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setClearColor(0x000000, 0);

  function getColorPalette() {
    const t = getTheme();
    return [
      new THREE.Color(t.colors.cyan),
      new THREE.Color(t.colors.purple),
      new THREE.Color(t.colors.green),
      new THREE.Color(t.colors.pink),
    ];
  }

  let colorPalette = getColorPalette();

  /* ============================================================
     1. NEURAL PARTICLES (much brighter, larger)
     ============================================================ */
  const particlesGeom = new THREE.BufferGeometry();
  const pCount = CONFIG.particleCount;
  const pPositions = new Float32Array(pCount * 3);
  const pColors = new Float32Array(pCount * 3);
  const pSizes = new Float32Array(pCount);
  const velocities = [];

  for (let i = 0; i < pCount; i++) {
    pPositions[i * 3] = (Math.random() - 0.5) * CONFIG.bounds.x * 2;
    pPositions[i * 3 + 1] = (Math.random() - 0.5) * CONFIG.bounds.y * 2;
    pPositions[i * 3 + 2] = (Math.random() - 0.5) * CONFIG.bounds.z * 2;

    velocities.push({
      x: (Math.random() - 0.5) * CONFIG.driftSpeed,
      y: (Math.random() - 0.5) * CONFIG.driftSpeed,
      z: (Math.random() - 0.5) * CONFIG.driftSpeed * 0.5,
    });

    const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    pColors[i * 3] = c.r;
    pColors[i * 3 + 1] = c.g;
    pColors[i * 3 + 2] = c.b;

    pSizes[i] = CONFIG.particleSize + Math.random() * 2;
  }

  particlesGeom.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  particlesGeom.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: CONFIG.particleSize,
    vertexColors: true,
    transparent: true,
    opacity: thm.particleOpacity,
    blending: thm.blending,
    depthWrite: false,
    sizeAttenuation: true,
  });

  scene.add(new THREE.Points(particlesGeom, particleMat));

  /* ============================================================
     2. CONNECTION LINES (brighter, thicker appearance)
     ============================================================ */
  const maxConn = pCount * 4;
  const linePos = new Float32Array(maxConn * 6);
  const lineCol = new Float32Array(maxConn * 6);
  const lineGeom = new THREE.BufferGeometry();
  lineGeom.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  lineGeom.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
  lineGeom.setDrawRange(0, 0);

  const lineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: thm.lineOpacity,
    blending: thm.blending,
    depthWrite: false,
  });

  scene.add(new THREE.LineSegments(lineGeom, lineMat));

  /* ============================================================
     3. ROTATING WIREFRAME GEOMETRIES (the 3D wow factor)
     ============================================================ */
  const wireframeMeshes = [];

  function createWireframe(geometry, colorKey, pos, scale) {
    const t = getTheme();
    const color = t.colors[colorKey];
    const edges = new THREE.EdgesGeometry(geometry);
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: t.wireframeOpacity,
      blending: t.blending,
    });
    const wireframe = new THREE.LineSegments(edges, mat);
    wireframe.position.set(pos.x, pos.y, pos.z);
    wireframe.scale.set(scale, scale, scale);
    wireframe.userData = {
      colorKey,
      rotSpeedX: (Math.random() - 0.5) * 0.008,
      rotSpeedY: (Math.random() - 0.5) * 0.008,
      rotSpeedZ: (Math.random() - 0.5) * 0.004,
      floatSpeed: 0.3 + Math.random() * 0.5,
      floatPhase: Math.random() * Math.PI * 2,
      floatAmp: 15 + Math.random() * 25,
      baseY: pos.y,
      pulseSpeed: 0.5 + Math.random() * 1.5,
    };
    scene.add(wireframe);
    wireframeMeshes.push(wireframe);
    return wireframe;
  }

  if (!isMobile) {
    createWireframe(
      new THREE.IcosahedronGeometry(90, 1),
      'cyan',
      { x: 350, y: 30, z: -100 },
      1.0
    );
    createWireframe(
      new THREE.TorusGeometry(60, 20, 8, 24),
      'purple',
      { x: -400, y: -80, z: -200 },
      1.0
    );
    createWireframe(
      new THREE.OctahedronGeometry(50, 0),
      'green',
      { x: -50, y: 250, z: -150 },
      1.0
    );
    createWireframe(
      new THREE.DodecahedronGeometry(45, 0),
      'pink',
      { x: 300, y: -250, z: -80 },
      1.0
    );
    createWireframe(
      new THREE.TetrahedronGeometry(30, 0),
      'cyan',
      { x: -350, y: 200, z: -60 },
      1.0
    );
    createWireframe(
      new THREE.TetrahedronGeometry(25, 0),
      'purple',
      { x: 200, y: -180, z: 50 },
      1.0
    );
    createWireframe(
      new THREE.IcosahedronGeometry(35, 0),
      'green',
      { x: -200, y: 50, z: 100 },
      1.0
    );
    createWireframe(
      new THREE.TorusKnotGeometry(70, 15, 64, 8, 2, 3),
      'cyan',
      { x: 100, y: 120, z: -400 },
      0.7
    );
  } else {
    createWireframe(
      new THREE.IcosahedronGeometry(70, 1),
      'cyan',
      { x: 200, y: 0, z: -100 },
      0.8
    );
    createWireframe(
      new THREE.OctahedronGeometry(40, 0),
      'purple',
      { x: -200, y: -100, z: -150 },
      0.8
    );
  }

  /* ============================================================
     4. GLOWING ORB NODES (pulse and float)
     ============================================================ */
  const glowOrbs = [];
  const orbCount = isMobile ? 4 : 10;

  for (let i = 0; i < orbCount; i++) {
    const color = colorPalette[i % colorPalette.length];
    const size = 3 + Math.random() * 5;
    const geom = new THREE.SphereGeometry(size, 12, 12);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: thm.orbOpacity,
      blending: thm.blending,
    });
    const orb = new THREE.Mesh(geom, mat);
    orb.position.set(
      (Math.random() - 0.5) * CONFIG.bounds.x * 1.5,
      (Math.random() - 0.5) * CONFIG.bounds.y * 1.5,
      (Math.random() - 0.5) * CONFIG.bounds.z
    );
    orb.userData = {
      speed: 0.2 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
    };
    scene.add(orb);
    glowOrbs.push(orb);
  }

  /* ============================================================
     5. DATA STREAM RINGS (rotating ring particles)
     ============================================================ */
  const ringGroup = new THREE.Group();
  if (!isMobile) {
    for (let r = 0; r < 3; r++) {
      const radius = 200 + r * 120;
      const ringGeom = new THREE.RingGeometry(radius - 1, radius + 1, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorPalette[r].getHex(),
        transparent: true,
        opacity: thm.ringOpacity,
        side: THREE.DoubleSide,
        blending: thm.blending,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / 2 + (r - 1) * 0.3;
      ring.userData = { rotSpeed: 0.001 * (r + 1) * (r % 2 === 0 ? 1 : -1) };
      ringGroup.add(ring);
    }
    ringGroup.position.z = -200;
    scene.add(ringGroup);
  }

  /* ============================================================
     6. MOUSE INTERACTION
     ============================================================ */
  const mouse = { x: 9999, y: 9999, active: false };

  if (!isMobile) {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        mouse.active = true;
      }, { passive: true });
      heroEl.addEventListener('mouseleave', () => { mouse.active = false; });
    }
  }

  /* ============================================================
     7. ANIMATION LOOP
     ============================================================ */
  let frameCount = 0;
  const frameSkip = isMobile ? 2 : 1;
  let isVisible = true;
  let animId;

  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
    if (isVisible && !animId) animate();
  });

  function animate() {
    if (!isVisible) { animId = null; return; }
    animId = requestAnimationFrame(animate);

    frameCount++;
    if (frameCount % frameSkip !== 0) return;

    const t = Date.now() * 0.001;
    const pos = particlesGeom.attributes.position.array;

    /* -- Update particles -- */
    for (let i = 0; i < pCount; i++) {
      const i3 = i * 3;
      pos[i3] += velocities[i].x;
      pos[i3 + 1] += velocities[i].y;
      pos[i3 + 2] += velocities[i].z;

      if (Math.abs(pos[i3]) > CONFIG.bounds.x) velocities[i].x *= -1;
      if (Math.abs(pos[i3 + 1]) > CONFIG.bounds.y) velocities[i].y *= -1;
      if (Math.abs(pos[i3 + 2]) > CONFIG.bounds.z) velocities[i].z *= -1;

      // Mouse repulsion
      if (mouse.active) {
        const mx = mouse.x * CONFIG.bounds.x;
        const my = mouse.y * CONFIG.bounds.y;
        const dx = pos[i3] - mx;
        const dy = pos[i3 + 1] - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseInfluenceRadius && dist > 0) {
          const force = (1 - dist / CONFIG.mouseInfluenceRadius) * CONFIG.mouseRepelStrength;
          pos[i3] += (dx / dist) * force * 15;
          pos[i3 + 1] += (dy / dist) * force * 15;
        }
      }
    }
    particlesGeom.attributes.position.needsUpdate = true;

    /* -- Update connections -- */
    let li = 0;
    const lp = lineGeom.attributes.position.array;
    const lc = lineGeom.attributes.color.array;
    const cyanCol = new THREE.Color(getTheme().colors.cyan);
    const purpleCol = new THREE.Color(getTheme().colors.purple);

    for (let i = 0; i < pCount; i++) {
      for (let j = i + 1; j < pCount; j++) {
        if (li >= maxConn) break;
        const i3 = i * 3, j3 = j * 3;
        const dx = pos[i3] - pos[j3];
        const dy = pos[i3 + 1] - pos[j3 + 1];
        const dz = pos[i3 + 2] - pos[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONFIG.connectionDistance) {
          const alpha = 1 - dist / CONFIG.connectionDistance;
          const idx = li * 6;
          // Mix cyan → purple based on distance
          const mixCol = cyanCol.clone().lerp(purpleCol, dist / CONFIG.connectionDistance);

          lp[idx] = pos[i3]; lp[idx + 1] = pos[i3 + 1]; lp[idx + 2] = pos[i3 + 2];
          lp[idx + 3] = pos[j3]; lp[idx + 4] = pos[j3 + 1]; lp[idx + 5] = pos[j3 + 2];

          lc[idx] = mixCol.r * alpha; lc[idx + 1] = mixCol.g * alpha; lc[idx + 2] = mixCol.b * alpha;
          lc[idx + 3] = mixCol.r * alpha; lc[idx + 4] = mixCol.g * alpha; lc[idx + 5] = mixCol.b * alpha;
          li++;
        }
      }
    }
    for (let i = li * 6; i < lp.length; i++) { lp[i] = 0; lc[i] = 0; }
    lineGeom.attributes.position.needsUpdate = true;
    lineGeom.attributes.color.needsUpdate = true;
    lineGeom.setDrawRange(0, li * 2);

    /* -- Rotate wireframe geometries -- */
    wireframeMeshes.forEach((mesh) => {
      const d = mesh.userData;
      mesh.rotation.x += d.rotSpeedX;
      mesh.rotation.y += d.rotSpeedY;
      mesh.rotation.z += d.rotSpeedZ;
      // Float up and down
      mesh.position.y = d.baseY + Math.sin(t * d.floatSpeed + d.floatPhase) * d.floatAmp;
      // Pulse opacity
      mesh.material.opacity = 0.3 + Math.sin(t * d.pulseSpeed) * 0.2;
    });

    /* -- Animate glow orbs -- */
    glowOrbs.forEach((orb) => {
      const d = orb.userData;
      orb.position.x += Math.sin(t * d.speed + d.phase) * 0.4;
      orb.position.y += Math.cos(t * d.speed * 0.7 + d.phase) * 0.4;
      orb.material.opacity = 0.4 + Math.sin(t * 2 + d.phase) * 0.35;
      const s = 0.8 + Math.sin(t * 1.5 + d.phase) * 0.5;
      orb.scale.set(s, s, s);
    });

    /* -- Rotate rings -- */
    ringGroup.children.forEach((ring) => {
      ring.rotation.z += ring.userData.rotSpeed;
    });

    /* -- Camera sway -- */
    scene.rotation.y = Math.sin(t * 0.08) * 0.04;
    scene.rotation.x = Math.sin(t * 0.06) * 0.02;

    // Mouse-driven camera offset
    if (mouse.active) {
      camera.position.x += (mouse.x * 40 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 30 - camera.position.y) * 0.02;
    } else {
      camera.position.x += (0 - camera.position.x) * 0.01;
      camera.position.y += (0 - camera.position.y) * 0.01;
    }
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  /* ---------- Resize ---------- */
  function onResize() {
    const w = canvas.parentElement?.clientWidth || window.innerWidth;
    const h = canvas.parentElement?.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);
  setTimeout(onResize, 100);

  /* ---------- Theme Switch Handler ---------- */
  window.addEventListener('themechange', (e) => {
    const newThemeKey = e.detail.theme;
    if (newThemeKey === currentThemeKey) return;
    currentThemeKey = newThemeKey;

    const t = getTheme();
    colorPalette = getColorPalette();

    // Update fog
    scene.fog.color.set(t.fogColor);

    // Update particle colors
    const pc = particlesGeom.attributes.color.array;
    for (let i = 0; i < CONFIG.particleCount; i++) {
      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      pc[i * 3] = c.r;
      pc[i * 3 + 1] = c.g;
      pc[i * 3 + 2] = c.b;
    }
    particlesGeom.attributes.color.needsUpdate = true;

    // Update materials
    particleMat.blending = t.blending;
    particleMat.opacity = t.particleOpacity;
    particleMat.needsUpdate = true;

    lineMat.blending = t.blending;
    lineMat.opacity = t.lineOpacity;
    lineMat.needsUpdate = true;

    // Update wireframes
    wireframeMeshes.forEach((mesh) => {
      const key = mesh.userData.colorKey || 'cyan';
      mesh.material.color.set(t.colors[key]);
      mesh.material.blending = t.blending;
      mesh.material.opacity = t.wireframeOpacity;
      mesh.material.needsUpdate = true;
    });

    // Update glow orbs
    glowOrbs.forEach((orb, i) => {
      const c = colorPalette[i % colorPalette.length];
      orb.material.color.copy(c);
      orb.material.blending = t.blending;
      orb.material.opacity = t.orbOpacity;
      orb.material.needsUpdate = true;
    });

    // Update rings
    ringGroup.children.forEach((ring, r) => {
      ring.material.color.set(colorPalette[r % colorPalette.length].getHex());
      ring.material.blending = t.blending;
      ring.material.opacity = t.ringOpacity;
      ring.material.needsUpdate = true;
    });
  });

})();
