import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AttuneSphereCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 900;
    const height = container.clientHeight || 850;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const CENTER_X = 1.35;
    const apparatusGroup = new THREE.Group();
    apparatusGroup.position.x = CENTER_X;
    scene.add(apparatusGroup);

    // --- 1. PHOTOREALISTIC PROCEDURAL MARS CELESTIAL SPHERE ---
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 2048;
    texCanvas.height = 1024;
    const ctx = texCanvas.getContext('2d')!;

    const baseGrad = ctx.createLinearGradient(0, 0, 0, 1024);
    baseGrad.addColorStop(0, '#5a1e0b');
    baseGrad.addColorStop(0.2, '#993615');
    baseGrad.addColorStop(0.45, '#bd4c1e');
    baseGrad.addColorStop(0.55, '#c85a2b');
    baseGrad.addColorStop(0.8, '#872a0f');
    baseGrad.addColorStop(1, '#3b1206');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, 2048, 1024);

    for (let band = 0; band < 180; band++) {
      const y = (band / 180) * 1024;
      const h = Math.random() * 22 + 4;
      const alpha = Math.random() * 0.18 + 0.04;
      const isDark = Math.random() > 0.45;
      ctx.fillStyle = isDark ? `rgba(45, 14, 6, ${alpha})` : `rgba(234, 138, 92, ${alpha})`;
      ctx.fillRect(0, y, 2048, h);
    }

    for (let i = 0; i < 9000; i++) {
      const x = Math.random() * 2048;
      const y = Math.random() * 1024;
      const r = Math.random() * 5 + 0.8;
      const darkAlpha = Math.random() * 0.22 + 0.03;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = Math.random() > 0.5 
        ? `rgba(245, 158, 115, ${darkAlpha * 0.8})` 
        : `rgba(38, 11, 4, ${darkAlpha * 1.2})`;
      ctx.fill();
    }

    const planetTexture = new THREE.CanvasTexture(texCanvas);
    planetTexture.wrapS = THREE.RepeatWrapping;
    planetTexture.wrapT = THREE.ClampToEdgeWrapping;

    const SPHERE_RADIUS = 1.62;
    const sphereGeo = new THREE.SphereGeometry(SPHERE_RADIUS, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.90,
      metalness: 0.1,
    });
    const planetMesh = new THREE.Mesh(sphereGeo, sphereMat);
    planetMesh.position.y = 0.5;
    apparatusGroup.add(planetMesh);

    // Atmospheric Fresnel Rim Glow
    const glowGeo = new THREE.SphereGeometry(SPHERE_RADIUS * 1.035, 64, 64);
    const glowMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          vec3 atmosphereColor = vec3(0.98, 0.48, 0.18);
          gl_FragColor = vec4(atmosphereColor, intensity * 0.85);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.position.y = 0.5;
    apparatusGroup.add(glowMesh);

    // --- 2. THREEUI ORRERY: FLOATING CHISELED LIMESTONE PLINTH ---
    // Multi-tier eroded stone base with rugged edge bevels
    const plinthGroup = new THREE.Group();
    plinthGroup.position.set(0, -2.4, 0);

    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x1a2130,
      roughness: 0.95,
      metalness: 0.15,
      emissive: 0x080c14,
    });

    const plinthTier1Geo = new THREE.CylinderGeometry(2.3, 2.7, 0.45, 32);
    const plinthTier1 = new THREE.Mesh(plinthTier1Geo, plinthMat);
    plinthGroup.add(plinthTier1);

    const plinthTier2Geo = new THREE.CylinderGeometry(1.8, 2.1, 0.35, 24);
    const plinthTier2 = new THREE.Mesh(plinthTier2Geo, plinthMat);
    plinthTier2.position.y = 0.35;
    plinthGroup.add(plinthTier2);

    // Chiseled edge wireframe accents
    const plinthEdgeGeo = new THREE.EdgesGeometry(plinthTier1Geo, 25);
    const plinthEdgeMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
    });
    const plinthEdges = new THREE.LineSegments(plinthEdgeGeo, plinthEdgeMat);
    plinthGroup.add(plinthEdges);

    apparatusGroup.add(plinthGroup);

    // --- 3. CENTRAL MONOLITH SLAB WITH LASER ENGRAVINGS ---
    const monolithGeo = new THREE.BoxGeometry(0.55, 2.2, 0.35);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x0a0e17,
      roughness: 0.2,
      metalness: 0.85,
      emissive: 0x05070c,
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    monolith.position.set(0, -1.1, 0);
    apparatusGroup.add(monolith);

    // Luminous laser groove on monolith
    const groovePoints = [
      new THREE.Vector3(0, -1.0, 0.18),
      new THREE.Vector3(0, 1.0, 0.18),
    ];
    const grooveGeo = new THREE.BufferGeometry().setFromPoints(groovePoints);
    const grooveMat = new THREE.LineBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.9,
      linewidth: 2,
    });
    const grooveLine = new THREE.Line(grooveGeo, grooveMat);
    monolith.add(grooveLine);

    // --- 4. THREEUI ORRERY: SPIRALING GOLDEN FILAMENT RIBBON SKEINS ---
    const ribbonGroup = new THREE.Group();
    apparatusGroup.add(ribbonGroup);

    const createFilamentCurve = (radius: number, height: number, turns: number, phase: number) => {
      const points: THREE.Vector3[] = [];
      const steps = 140;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const angle = t * Math.PI * 2 * turns + phase;
        const r = radius * (1 - Math.sin(t * Math.PI) * 0.25);
        const y = (t - 0.5) * height;
        const x = Math.cos(angle) * r;
        const z = Math.sin(angle) * r;
        points.push(new THREE.Vector3(x, y, z));
      }
      return new THREE.CatmullRomCurve3(points);
    };

    const ribbonCurves = [
      createFilamentCurve(2.35, 3.8, 1.8, 0),
      createFilamentCurve(2.65, 4.2, -1.6, Math.PI * 0.6),
      createFilamentCurve(2.10, 3.4, 2.2, Math.PI * 1.3),
    ];

    const ribbonColors = [0xf59e0b, 0x38bdf8, 0xf97316];
    const ribbonMeshes: THREE.Mesh[] = [];

    ribbonCurves.forEach((curve, idx) => {
      const tubeGeo = new THREE.TubeGeometry(curve, 100, 0.016, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: ribbonColors[idx % ribbonColors.length],
        transparent: true,
        opacity: 0.65,
        wireframe: false,
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      ribbonGroup.add(tubeMesh);
      ribbonMeshes.push(tubeMesh);
    });

    // --- 5. THREEUI ORRERY: KEPLERIAN ASTEROID DEBRIS BELT ---
    const asteroidCount = 260;
    const asteroidGeo = new THREE.DodecahedronGeometry(0.065, 0);
    const asteroidMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.88,
      metalness: 0.25,
    });

    const asteroidMesh = new THREE.InstancedMesh(asteroidGeo, asteroidMat, asteroidCount);
    const dummy = new THREE.Object3D();

    interface AsteroidData {
      radius: number;
      angle: number;
      speed: number;
      yOffset: number;
      rotSpeedX: number;
      rotSpeedY: number;
      scale: number;
    }

    const asteroidData: AsteroidData[] = [];

    for (let i = 0; i < asteroidCount; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const angle = Math.random() * Math.PI * 2;
      // Keplerian velocity: v proportional to 1/sqrt(r)
      const speed = (0.24 / Math.sqrt(radius)) * (Math.random() * 0.4 + 0.8);
      const yOffset = (Math.random() - 0.5) * 1.2;
      const scale = 0.4 + Math.random() * 0.9;

      asteroidData.push({
        radius,
        angle,
        speed,
        yOffset,
        rotSpeedX: (Math.random() - 0.5) * 2.0,
        rotSpeedY: (Math.random() - 0.5) * 2.0,
        scale,
      });
    }

    apparatusGroup.add(asteroidMesh);

    // --- 6. ORBITAL TELEMETRY RINGS (Attune Line Trajectories) ---
    const ringGroup = new THREE.Group();
    apparatusGroup.add(ringGroup);

    interface OrbitTrack {
      curve: THREE.EllipseCurve;
      satellite: THREE.Mesh;
      speed: number;
      tiltX: number;
      tiltY: number;
      tiltZ: number;
    }

    const orbitConfigs = [
      { aX: 2.75, aY: 1.85, tiltX: 0.58, tiltY: 0.42, tiltZ: 0.15, speed: 0.22, color: 0xf97316 },
      { aX: 3.10, aY: 1.65, tiltX: -0.45, tiltY: 0.65, tiltZ: -0.35, speed: -0.16, color: 0x38bdf8 },
      { aX: 2.50, aY: 2.20, tiltX: 0.25, tiltY: -0.55, tiltZ: 0.45, speed: 0.19, color: 0xfbbf24 }
    ];

    const orbits: OrbitTrack[] = orbitConfigs.map((cfg) => {
      const curve = new THREE.EllipseCurve(0, 0, cfg.aX, cfg.aY, 0, Math.PI * 2, false, 0);
      const points = curve.getPoints(160);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, p.y, 0))
      );

      const mat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.35,
      });

      const track = new THREE.Line(geometry, mat);
      track.rotation.set(cfg.tiltX, cfg.tiltY, cfg.tiltZ);
      ringGroup.add(track);

      const satGeo = new THREE.SphereGeometry(0.045, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({ color: cfg.color });
      const satellite = new THREE.Mesh(satGeo, satMat);
      apparatusGroup.add(satellite);

      return {
        curve,
        satellite,
        speed: cfg.speed,
        tiltX: cfg.tiltX,
        tiltY: cfg.tiltY,
        tiltZ: cfg.tiltZ
      };
    });

    // --- 7. LIGHTS ---
    const sunLight = new THREE.DirectionalLight(0xffedd5, 3.4);
    sunLight.position.set(-6, 5, 5);
    scene.add(sunLight);

    const plinthRimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    plinthRimLight.position.set(6, -4, 4);
    scene.add(plinthRimLight);

    const ambientLight = new THREE.AmbientLight(0x0f172a, 0.4);
    scene.add(ambientLight);

    // --- 8. MOUSE PARALLAX SPRING PHYSICS ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.28;
      mouseY = y * 0.18;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- 9. ANIMATION LOOP ---
    let animationFrameId: number;
    const startTime = performance.now();
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const elapsedTime = (now - startTime) / 1000;

      // Slow axial rotation of celestial planet & plinth
      planetMesh.rotation.y = elapsedTime * 0.05;
      plinthGroup.rotation.y = -elapsedTime * 0.03;
      ribbonGroup.rotation.y = elapsedTime * 0.08;

      // Mouse spring easing
      targetRotX += (mouseY - targetRotX) * 0.04;
      targetRotY += (mouseX - targetRotY) * 0.04;

      apparatusGroup.rotation.x = targetRotX;
      apparatusGroup.rotation.y = targetRotY;

      // Update Keplerian Asteroids
      for (let i = 0; i < asteroidCount; i++) {
        const data = asteroidData[i];
        data.angle += data.speed * delta;

        const x = Math.cos(data.angle) * data.radius;
        const z = Math.sin(data.angle) * data.radius;
        const y = data.yOffset + Math.sin(data.angle * 2) * 0.25;

        dummy.position.set(x, y, z);
        dummy.rotation.x += data.rotSpeedX * delta;
        dummy.rotation.y += data.rotSpeedY * delta;
        dummy.scale.setScalar(data.scale);
        dummy.updateMatrix();

        asteroidMesh.setMatrixAt(i, dummy.matrix);
      }
      asteroidMesh.instanceMatrix.needsUpdate = true;

      // Update satellites
      orbits.forEach((orbit) => {
        const t = (elapsedTime * orbit.speed) % 1;
        const pt = orbit.curve.getPoint(t < 0 ? t + 1 : t);
        const v = new THREE.Vector3(pt.x, pt.y, 0);
        v.applyEuler(new THREE.Euler(orbit.tiltX, orbit.tiltY, orbit.tiltZ));
        orbit.satellite.position.copy(v);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      sphereMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      plinthTier1Geo.dispose();
      plinthTier2Geo.dispose();
      plinthMat.dispose();
      plinthEdgeGeo.dispose();
      plinthEdgeMat.dispose();
      monolithGeo.dispose();
      monolithMat.dispose();
      asteroidGeo.dispose();
      asteroidMat.dispose();
      planetTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
    />
  );
};

export default AttuneSphereCanvas;
