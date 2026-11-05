import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Layers, Zap, Play, RotateCcw, Activity, MousePointer, ShieldCheck } from 'lucide-react';

interface DroppedBrick {
  id: number;
  colX: number;
  colZ: number;
  x: number;
  y: number;
  z: number;
  vy: number;
  targetY: number;
  color: THREE.Color;
  emissiveColor: THREE.Color;
  label: string;
  isSettled: boolean;
  bounces: number;
  mesh: THREE.Group;
  trailMesh: THREE.Line;
  leds: THREE.Mesh[];
  visorMesh: THREE.Mesh;
}

interface Shockwave {
  innerMesh: THREE.Mesh;
  outerMesh: THREE.Mesh;
  age: number;
  maxAge: number;
}

interface Spark {
  mesh: THREE.Points;
  vx: number;
  vy: number;
  vz: number;
  age: number;
  maxAge: number;
}

interface ServicePreset {
  name: string;
  tag: string;
  color: string;
  emissive: string;
}

const SERVICE_PRESETS: ServicePreset[] = [
  { name: 'Realtime Gateway', tag: 'RTC', color: '#2E6EFE', emissive: '#1D4FD8' },
  { name: 'Order Sync Service', tag: 'SYNC', color: '#5B9BFF', emissive: '#2E6EFE' },
  { name: 'Auth Token Service', tag: 'AUTH', color: '#8DB8FF', emissive: '#5B9BFF' },
  { name: 'AI Document Service', tag: 'AI', color: '#38BDF8', emissive: '#0284C7' },
];

export const ScalabilityBricksMassif: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const activePresetIndexRef = useRef(activePresetIndex);
  const [stats, setStats] = useState({ activePods: 36, clusterThroughput: '124,500 req/s', latency: '< 18ms' });
  const [isSpikeRunning, setIsSpikeRunning] = useState(false);
  const [hoveredCoords, setHoveredCoords] = useState<{ x: number; z: number } | null>(null);
  const hoveredCoordsRef = useRef<{ x: number; z: number } | null>(null);

  useEffect(() => {
    activePresetIndexRef.current = activePresetIndex;
  }, [activePresetIndex]);

  // References to communicate with Three.js loop
  const dropTriggerRef = useRef<((preset: ServicePreset, specificCol?: { x: number; z: number }) => void) | null>(null);
  const resetTriggerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Isometric Orthographic Camera setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060911, 0.038);

    const initialWidth = container.clientWidth || 600;
    const initialHeight = container.clientHeight || 450;
    const aspect = initialWidth / initialHeight;
    const d = 7.5;
    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      0.1,
      120
    );

    // Initial camera position & lookAt
    const targetLookAt = new THREE.Vector3(0, 0.4, 0);
    let cameraOrbitAngle = 0.785; // 45 deg
    let cameraElevation = 0.65;   // elevation factor
    const cameraDistance = 22;
    let cameraShake = 0;

    const updateCameraPos = () => {
      const shakeX = (Math.random() - 0.5) * cameraShake;
      const shakeY = (Math.random() - 0.5) * cameraShake;
      const shakeZ = (Math.random() - 0.5) * cameraShake;

      const x = Math.cos(cameraOrbitAngle) * cameraDistance * Math.cos(cameraElevation) + shakeX;
      const z = Math.sin(cameraOrbitAngle) * cameraDistance * Math.cos(cameraElevation) + shakeZ;
      const y = cameraDistance * Math.sin(cameraElevation) + shakeY;
      camera.position.set(x, y, z);
      camera.lookAt(targetLookAt);
    };
    updateCameraPos();

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(initialWidth, initialHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;touch-action:none;';
    container.appendChild(renderer.domElement);

    // 3. Multi-point Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0x0e172a, 2.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffedd5, 3.6);
    keyLight.position.set(14, 24, 12);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.4);
    rimLight.position.set(-15, -3, -13);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(0x2e6efe, 35, 22, 1.8);
    accentLight.position.set(0, 4.5, 0);
    scene.add(accentLight);

    // Dynamic impact flash point-light
    const impactFlash = new THREE.PointLight(0x38bdf8, 0, 10, 2);
    impactFlash.position.set(0, 2, 0);
    scene.add(impactFlash);

    // 4. Brick Dimensions & Grid Layout
    const BRICK_W = 1.0;
    const BRICK_H = 0.45;
    const BRICK_D = 1.0;
    const GAP = 0.08;
    const GRID_SIZE = 7; // 7x7 base

    // Reusable geometries
    const brickGeometry = new THREE.BoxGeometry(BRICK_W, BRICK_H, BRICK_D);
    const topPlateGeometry = new THREE.BoxGeometry(BRICK_W * 0.92, 0.02, BRICK_D * 0.92);
    const visorGeometry = new THREE.BoxGeometry(BRICK_W * 0.74, 0.05, 0.03);
    const ledGeo = new THREE.SphereGeometry(0.038, 8, 8);
    const edgeGeometry = new THREE.EdgesGeometry(brickGeometry);

    // Base Massif Materials
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c1220,
      roughness: 0.74,
      metalness: 0.45,
      emissive: 0x040812,
    });

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x223554,
      transparent: true,
      opacity: 0.7,
    });

    // 2D Heightfield Tracking: columnHeight[x][z]
    const columnHeights: number[][] = Array.from({ length: GRID_SIZE }, () =>
      Array(GRID_SIZE).fill(0)
    );

    const baseBricksGroup = new THREE.Group();
    scene.add(baseBricksGroup);

    // Build the stepped pyramidal base
    const centerOffset = ((GRID_SIZE - 1) * (BRICK_W + GAP)) / 2;

    for (let x = 0; x < GRID_SIZE; x++) {
      for (let z = 0; z < GRID_SIZE; z++) {
        const distFromCenter = Math.max(
          Math.abs(x - (GRID_SIZE - 1) / 2),
          Math.abs(z - (GRID_SIZE - 1) / 2)
        );
        const tiers = Math.max(1, 4 - Math.floor(distFromCenter));

        for (let y = 0; y < tiers; y++) {
          const posX = x * (BRICK_W + GAP) - centerOffset;
          const posY = y * (BRICK_H + GAP * 0.5) - 1.2;
          const posZ = z * (BRICK_D + GAP) - centerOffset;

          const mesh = new THREE.Mesh(brickGeometry, baseMaterial);
          mesh.position.set(posX, posY, posZ);

          const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
          mesh.add(edges);

          baseBricksGroup.add(mesh);
        }

        // Initialize heightfield with top y-position of the base
        columnHeights[x][z] = (tiers - 1) * (BRICK_H + GAP * 0.5) - 1.2 + (BRICK_H + GAP * 0.5);
      }
    }

    // High-tech Ground Platform Disc with concentric radar rings
    const groundGroup = new THREE.Group();
    groundGroup.position.y = -1.26;
    scene.add(groundGroup);

    const groundDiskGeo = new THREE.RingGeometry(0.1, 8.2, 64);
    const groundDiskMat = new THREE.MeshBasicMaterial({
      color: 0x071120,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
    const groundDisk = new THREE.Mesh(groundDiskGeo, groundDiskMat);
    groundDisk.rotation.x = -Math.PI / 2;
    groundGroup.add(groundDisk);

    // Concentric blueprint guide rings
    [2.8, 4.8, 6.8, 8.2].forEach((radius) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x2e6efe,
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      groundGroup.add(ringMesh);
    });

    // Interactive Hover Reticle (Holographic targeting bracket)
    const reticleGroup = new THREE.Group();
    reticleGroup.visible = false;
    scene.add(reticleGroup);

    const reticleBoxGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(BRICK_W + 0.06, 0.1, BRICK_D + 0.06));
    const reticleMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.95 });
    const reticleBox = new THREE.LineSegments(reticleBoxGeo, reticleMat);
    reticleGroup.add(reticleBox);

    // Inner glowing reticle plane
    const reticlePlaneGeo = new THREE.PlaneGeometry(BRICK_W * 0.9, BRICK_D * 0.9);
    const reticlePlaneMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const reticlePlane = new THREE.Mesh(reticlePlaneGeo, reticlePlaneMat);
    reticlePlane.rotation.x = -Math.PI / 2;
    reticlePlane.position.y = 0.02;
    reticleGroup.add(reticlePlane);

    // 5. Active Dropped Dynamic Bricks, Shockwaves, and Sparks
    const dynamicBricks: DroppedBrick[] = [];
    const activeShockwaves: Shockwave[] = [];
    const activeSparks: Spark[] = [];
    let nextId = 1;

    // Shared geometries
    const innerRingGeo = new THREE.RingGeometry(0.08, 0.15, 32);
    const outerRingGeo = new THREE.RingGeometry(0.12, 0.28, 32);
    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));
    const sparkBaseMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.16,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const triggerShockwave = (x: number, y: number, z: number, color: THREE.Color) => {
      // 1. Sharp inner shockwave ring
      const innerMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      const innerRing = new THREE.Mesh(innerRingGeo, innerMat);
      innerRing.rotation.x = -Math.PI / 2;
      innerRing.position.set(x, y + 0.03, z);
      scene.add(innerRing);

      // 2. Soft outer shockwave glow ring
      const outerMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      const outerRing = new THREE.Mesh(outerRingGeo, outerMat);
      outerRing.rotation.x = -Math.PI / 2;
      outerRing.position.set(x, y + 0.02, z);
      scene.add(outerRing);

      activeShockwaves.push({ innerMesh: innerRing, outerMesh: outerRing, age: 0, maxAge: 0.55 });

      // 3. Dynamic impact flash illumination
      impactFlash.position.set(x, y + 0.35, z);
      impactFlash.color.copy(color);
      impactFlash.intensity = 26;

      // 4. Camera micro-impulse punch
      cameraShake = Math.min(0.07, cameraShake + 0.04);

      // 5. Burst of 12 glowing sparks with gravity trajectories
      for (let s = 0; s < 12; s++) {
        const sparkMat = sparkBaseMat.clone();
        sparkMat.color = color;
        const sparkMesh = new THREE.Points(sparkGeo, sparkMat);
        sparkMesh.position.set(x, y + 0.12, z);
        scene.add(sparkMesh);

        const angle = Math.random() * Math.PI * 2;
        const speed = 2.0 + Math.random() * 2.8;
        activeSparks.push({
          mesh: sparkMesh,
          vx: Math.cos(angle) * speed,
          vy: 2.6 + Math.random() * 3.2,
          vz: Math.sin(angle) * speed,
          age: 0,
          maxAge: 0.38 + Math.random() * 0.28,
        });
      }
    };

    const spawnBrick = (preset: ServicePreset, specificCol?: { x: number; z: number }) => {
      let colX = specificCol ? specificCol.x : Math.floor(Math.random() * GRID_SIZE);
      let colZ = specificCol ? specificCol.z : Math.floor(Math.random() * GRID_SIZE);

      if (!specificCol) {
        // Bias towards lowest columns to form harmonious structures
        let lowestHeight = Infinity;
        for (let tries = 0; tries < 5; tries++) {
          const rx = Math.floor(Math.random() * GRID_SIZE);
          const rz = Math.floor(Math.random() * GRID_SIZE);
          if (columnHeights[rx][rz] < lowestHeight) {
            lowestHeight = columnHeights[rx][rz];
            colX = rx;
            colZ = rz;
          }
        }
      }

      // Restrict max column stack
      if (columnHeights[colX][colZ] > 4.6) return;

      const posX = colX * (BRICK_W + GAP) - centerOffset;
      const posZ = colZ * (BRICK_D + GAP) - centerOffset;
      const targetY = columnHeights[colX][colZ];

      columnHeights[colX][colZ] += BRICK_H + GAP * 0.5;

      const colorObj = new THREE.Color(preset.color);
      const emissiveObj = new THREE.Color(preset.emissive);

      // Modular blade chassis material
      const dynamicMat = new THREE.MeshStandardMaterial({
        color: colorObj,
        roughness: 0.26,
        metalness: 0.78,
        emissive: emissiveObj,
        emissiveIntensity: 0.9,
      });

      const brickGroup = new THREE.Group();

      // Main server enclosure
      const dynamicMesh = new THREE.Mesh(brickGeometry, dynamicMat);
      brickGroup.add(dynamicMesh);

      // Micro-circuit highlight wireframe on corners
      const highlightEdges = new THREE.LineSegments(
        edgeGeometry,
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 })
      );
      dynamicMesh.add(highlightEdges);

      // Recessed titanium top cap
      const topPlateMat = new THREE.MeshStandardMaterial({
        color: 0x090e18,
        roughness: 0.35,
        metalness: 0.85,
      });
      const topPlate = new THREE.Mesh(topPlateGeometry, topPlateMat);
      topPlate.position.set(0, BRICK_H / 2 + 0.01, 0);
      dynamicMesh.add(topPlate);

      // Front optical visor glow strip
      const visorMat = new THREE.MeshStandardMaterial({
        color: colorObj,
        emissive: emissiveObj,
        emissiveIntensity: 1.6,
        roughness: 0.1,
      });
      const visorMesh = new THREE.Mesh(visorGeometry, visorMat);
      visorMesh.position.set(0, 0, BRICK_D / 2 + 0.015);
      dynamicMesh.add(visorMesh);

      // Dual status telemetry LEDs on top cap
      const leds: THREE.Mesh[] = [];
      const ledMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const led1 = new THREE.Mesh(ledGeo, ledMat1);
      led1.position.set(-0.32, BRICK_H / 2 + 0.025, -0.32);
      dynamicMesh.add(led1);
      leds.push(led1);

      const ledMat2 = new THREE.MeshBasicMaterial({ color: 0x22c55e });
      const led2 = new THREE.Mesh(ledGeo, ledMat2);
      led2.position.set(-0.2, BRICK_H / 2 + 0.025, -0.32);
      dynamicMesh.add(led2);
      leds.push(led2);

      const spawnY = 11 + Math.random() * 2.5;
      brickGroup.position.set(posX, spawnY, posZ);
      scene.add(brickGroup);

      // Trailing laser light beam
      const trailPoints = [
        new THREE.Vector3(posX, spawnY, posZ),
        new THREE.Vector3(posX, spawnY + 3.2, posZ),
      ];
      const trailGeo = new THREE.BufferGeometry().setFromPoints(trailPoints);
      const trailMat = new THREE.LineBasicMaterial({
        color: colorObj,
        transparent: true,
        opacity: 0.75,
      });
      const trailMesh = new THREE.Line(trailGeo, trailMat);
      scene.add(trailMesh);

      const brick: DroppedBrick = {
        id: nextId++,
        colX,
        colZ,
        x: posX,
        y: spawnY,
        z: posZ,
        vy: -0.8,
        targetY,
        color: colorObj,
        emissiveColor: emissiveObj,
        label: preset.tag,
        isSettled: false,
        bounces: 0,
        mesh: brickGroup,
        trailMesh,
        leds,
        visorMesh,
      };

      dynamicBricks.push(brick);

      setStats((prev) => ({
        activePods: prev.activePods + 1,
        clusterThroughput: `${(124500 + dynamicBricks.length * 4800).toLocaleString()} req/s`,
        latency: `${Math.max(11, Math.round(28 - dynamicBricks.length * 0.45))}ms`,
      }));
    };

    dropTriggerRef.current = (preset, specificCol) => spawnBrick(preset, specificCol);

    resetTriggerRef.current = () => {
      // Remove all dynamic bricks
      for (const b of dynamicBricks) {
        scene.remove(b.mesh);
        scene.remove(b.trailMesh);
      }
      dynamicBricks.length = 0;

      // Remove shockwaves and sparks
      for (const sw of activeShockwaves) {
        scene.remove(sw.innerMesh);
        scene.remove(sw.outerMesh);
      }
      activeShockwaves.length = 0;
      for (const sp of activeSparks) scene.remove(sp.mesh);
      activeSparks.length = 0;

      // Reset heightfields to base tiers
      for (let x = 0; x < GRID_SIZE; x++) {
        for (let z = 0; z < GRID_SIZE; z++) {
          const distFromCenter = Math.max(
            Math.abs(x - (GRID_SIZE - 1) / 2),
            Math.abs(z - (GRID_SIZE - 1) / 2)
          );
          const tiers = Math.max(1, 4 - Math.floor(distFromCenter));
          columnHeights[x][z] = (tiers - 1) * (BRICK_H + GAP * 0.5) - 1.2 + (BRICK_H + GAP * 0.5);
        }
      }

      setStats({
        activePods: 36,
        clusterThroughput: '124,500 req/s',
        latency: '< 18ms',
      });
    };

    // Pre-seed a few active glowing service pods
    for (let i = 0; i < 5; i++) {
      const preset = SERVICE_PRESETS[i % SERVICE_PRESETS.length];
      spawnBrick(preset);
    }

    // 6. Interactive Raycasting & Pointer Controls with Pointer Capture
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const intersectionPoint = new THREE.Vector3();

    let isDragging = false;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let activePointerId: number | null = null;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      activePointerId = e.pointerId;
      pointerStartX = e.clientX;
      pointerStartY = e.clientY;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;

      try {
        container.setPointerCapture(e.pointerId);
      } catch {
        // fallback if capture not available
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (activePointerId !== null && e.pointerId === activePointerId) {
        try {
          container.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        activePointerId = null;
      }

      const totalDist = Math.hypot(e.clientX - pointerStartX, e.clientY - pointerStartY);
      isDragging = false;

      // If minimal pointer displacement, deploy pod on target column!
      if (totalDist < 8 && hoveredCoordsRef.current) {
        const preset = SERVICE_PRESETS[activePresetIndexRef.current];
        spawnBrick(preset, hoveredCoordsRef.current);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const dx = e.clientX - prevPointerX;
        const dy = e.clientY - prevPointerY;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
        cameraOrbitAngle += dx * 0.007;
        cameraElevation = Math.max(0.32, Math.min(1.18, cameraElevation + dy * 0.0055));
        updateCameraPos();
      }

      // Calculate hovered column on grid
      raycaster.setFromCamera(mouse, camera);
      if (raycaster.ray.intersectPlane(groundPlane, intersectionPoint)) {
        const gridX = Math.round((intersectionPoint.x + centerOffset) / (BRICK_W + GAP));
        const gridZ = Math.round((intersectionPoint.z + centerOffset) / (BRICK_D + GAP));

        if (gridX >= 0 && gridX < GRID_SIZE && gridZ >= 0 && gridZ < GRID_SIZE) {
          hoveredCoordsRef.current = { x: gridX, z: gridZ };
          setHoveredCoords({ x: gridX, z: gridZ });
          const targetY = columnHeights[gridX][gridZ];
          const px = gridX * (BRICK_W + GAP) - centerOffset;
          const pz = gridZ * (BRICK_D + GAP) - centerOffset;
          reticleGroup.position.set(px, targetY + 0.05, pz);
          reticleGroup.visible = true;
        } else {
          hoveredCoordsRef.current = null;
          setHoveredCoords(null);
          reticleGroup.visible = false;
        }
      }
    };

    const onPointerCancel = (e: PointerEvent) => {
      if (activePointerId !== null && e.pointerId === activePointerId) {
        try {
          container.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        activePointerId = null;
      }
      isDragging = false;
      hoveredCoordsRef.current = null;
      setHoveredCoords(null);
      reticleGroup.visible = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointercancel', onPointerCancel);

    // 7. Animation Physics Loop
    let animationFrameId: number;
    let lastTime = performance.now();
    const startTime = performance.now();

    let isVisible = true;
    const io = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0 });
    io.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      if (!isVisible || document.hidden) { lastTime = now; return; }
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const time = (now - startTime) / 1000;

      // Gentle camera shake dissipation & update
      if (cameraShake > 0.001) {
        cameraShake *= 0.88;
        updateCameraPos();
      }

      // Flash light dissipation
      if (impactFlash.intensity > 0) {
        impactFlash.intensity = Math.max(0, impactFlash.intensity - delta * 85);
      }

      // Gentle continuous ambient drift when not actively dragging
      if (!isDragging) {
        baseBricksGroup.rotation.y = Math.sin(time * 0.14) * 0.035;
      }

      // Floating reticle gentle pulse
      if (reticleGroup.visible) {
        reticleGroup.position.y += Math.sin(time * 6) * 0.0012;
      }

      // Physics update for falling dynamic bricks
      const gravity = -35.0;
      const restitution = 0.35;

      for (let i = dynamicBricks.length - 1; i >= 0; i--) {
        const b = dynamicBricks[i];

        if (!b.isSettled) {
          b.vy += gravity * delta;
          b.y += b.vy * delta;

          // Dynamic trailing laser line
          const positions = b.trailMesh.geometry.attributes.position;
          positions.setXYZ(0, b.x, b.y, b.z);
          positions.setXYZ(1, b.x, b.y + Math.min(4.0, Math.abs(b.vy) * 0.22), b.z);
          positions.needsUpdate = true;

          // Impact collision with column height
          if (b.y <= b.targetY) {
            b.y = b.targetY;
            triggerShockwave(b.x, b.y, b.z, b.color);

            if (Math.abs(b.vy) > 1.3 && b.bounces < 3) {
              b.vy = -b.vy * restitution;
              b.bounces++;
            } else {
              b.y = b.targetY;
              b.vy = 0;
              b.isSettled = true;
              b.trailMesh.visible = false;

              // Pulse the settled material
              const mainMesh = b.mesh.children[0] as THREE.Mesh;
              if (mainMesh && mainMesh.material) {
                (mainMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.0;
              }
              const vMat = b.visorMesh.material as THREE.MeshStandardMaterial;
              if (vMat) vMat.emissiveIntensity = 3.0;
            }
          }

          b.mesh.position.set(b.x, b.y, b.z);
        } else {
          // Subtle breathing glow and blinking LEDs when settled
          const mainMesh = b.mesh.children[0] as THREE.Mesh;
          if (mainMesh && mainMesh.material) {
            (mainMesh.material as THREE.MeshStandardMaterial).emissiveIntensity =
              0.85 + Math.sin(time * 3 + b.id) * 0.3;
          }

          const vMat = b.visorMesh.material as THREE.MeshStandardMaterial;
          if (vMat) {
            vMat.emissiveIntensity = 1.3 + Math.sin(time * 4 + b.id) * 0.4;
          }

          // Alternating asynchronous LED telemetry blinks
          if (b.leds[0] && b.leds[1]) {
            b.leds[0].visible = Math.sin(time * 6.5 + b.id * 1.3) > 0;
            b.leds[1].visible = Math.cos(time * 4.2 + b.id * 0.9) > 0;
          }
        }
      }

      // Shockwaves update
      for (let i = activeShockwaves.length - 1; i >= 0; i--) {
        const sw = activeShockwaves[i];
        sw.age += delta;
        const progress = sw.age / sw.maxAge;
        if (progress >= 1) {
          scene.remove(sw.innerMesh);
          scene.remove(sw.outerMesh);
          sw.innerMesh.geometry.dispose();
          (sw.innerMesh.material as THREE.Material).dispose();
          sw.outerMesh.geometry.dispose();
          (sw.outerMesh.material as THREE.Material).dispose();
          activeShockwaves.splice(i, 1);
        } else {
          const sInner = 1 + progress * 6.5;
          const sOuter = 1 + progress * 9.0;
          sw.innerMesh.scale.set(sInner, sInner, sInner);
          sw.outerMesh.scale.set(sOuter, sOuter, sOuter);
          (sw.innerMesh.material as THREE.MeshBasicMaterial).opacity = 0.95 * (1 - progress);
          (sw.outerMesh.material as THREE.MeshBasicMaterial).opacity = 0.45 * (1 - progress);
        }
      }

      // Sparks update
      for (let i = activeSparks.length - 1; i >= 0; i--) {
        const sp = activeSparks[i];
        sp.age += delta;
        const progress = sp.age / sp.maxAge;
        if (progress >= 1) {
          scene.remove(sp.mesh);
          (sp.mesh.material as THREE.Material).dispose();
          activeSparks.splice(i, 1);
        } else {
          sp.vy -= 10.5 * delta;
          sp.mesh.position.x += sp.vx * delta;
          sp.mesh.position.y += sp.vy * delta;
          sp.mesh.position.z += sp.vz * delta;
          (sp.mesh.material as THREE.PointsMaterial).opacity = 1 - progress;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Robust Resize Handling via ResizeObserver
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      const newAspect = width / height;

      camera.left = -d * newAspect;
      camera.right = d * newAspect;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointercancel', onPointerCancel);
      cancelAnimationFrame(animationFrameId);
      io.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      brickGeometry.dispose();
      topPlateGeometry.dispose();
      visorGeometry.dispose();
      ledGeo.dispose();
      baseMaterial.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      reticleBoxGeo.dispose();
      reticleMat.dispose();
      reticlePlaneGeo.dispose();
      reticlePlaneMat.dispose();
      groundDiskGeo.dispose();
      groundDiskMat.dispose();
      innerRingGeo.dispose();
      outerRingGeo.dispose();
      sparkGeo.dispose();
      sparkBaseMat.dispose();
    };
  }, []);

  const handleDropPod = useCallback(() => {
    const preset = SERVICE_PRESETS[activePresetIndex];
    if (dropTriggerRef.current) {
      dropTriggerRef.current(preset);
    }
  }, [activePresetIndex]);

  const handleSimulateSpike = useCallback(() => {
    if (isSpikeRunning) return;
    setIsSpikeRunning(true);
    let count = 0;
    const interval = setInterval(() => {
      if (count >= 12 || !dropTriggerRef.current) {
        clearInterval(interval);
        setIsSpikeRunning(false);
        return;
      }
      const randomPreset = SERVICE_PRESETS[Math.floor(Math.random() * SERVICE_PRESETS.length)];
      dropTriggerRef.current(randomPreset);
      count++;
    }, 150);
  }, [isSpikeRunning]);

  const handleReset = useCallback(() => {
    if (resetTriggerRef.current) {
      resetTriggerRef.current();
    }
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-surface border border-white/[0.12] overflow-hidden shadow-2xl p-5 sm:p-7">
      {/* Top Telemetry Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-sky text-xs font-mono font-medium tracking-wide uppercase mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Scalability Simulation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Modular architecture that scales with demand
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Click anywhere on the massif to deploy pods, drag to orbit the cluster, or simulate traffic spikes.
          </p>
        </div>

        {/* Live Cluster Metrics Dock */}
        <div className="flex items-center gap-2.5 sm:gap-4 font-mono">
          <div className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="text-[10px] uppercase text-slate-400">Active Pods</div>
            <div className="text-sm sm:text-base font-bold text-brand-sky">{stats.activePods}</div>
          </div>
          <div className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="text-[10px] uppercase text-slate-400">Throughput</div>
            <div className="text-sm sm:text-base font-bold text-fg">{stats.clusterThroughput}</div>
          </div>
          <div className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="text-[10px] uppercase text-slate-400">P99 Latency</div>
            <div className="text-sm sm:text-base font-bold text-brand-sky">{stats.latency}</div>
          </div>
        </div>
      </div>

      {/* Main 3D Canvas Viewport */}
      <div className="relative w-full h-[400px] sm:h-[480px] my-5 rounded-xl bg-ink overflow-hidden border border-white/[0.06] select-none">
        <div
          ref={containerRef}
          style={{ touchAction: 'none' }}
          className="w-full h-full cursor-crosshair active:cursor-grabbing"
        />

        {/* Real-Time Isometric Compass & Reticle HUD */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none font-mono text-[10px] sm:text-[11px] text-slate-400 flex flex-col gap-0.5 sm:gap-1 bg-[#070a12]/85 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-lg border border-white/10 shadow-lg">
          <div className="flex items-center gap-1.5 text-white font-medium">
            <Activity className="w-3.5 h-3.5 text-brand-sky animate-pulse shrink-0" />
            <span>MASSFIELD ENGINE</span>
          </div>
          <div className="hidden sm:block text-slate-400">PROJECTION: AXONOMETRIC 45° · ORTHO</div>
          <div className="flex items-center gap-1.5 text-brand-sky">
            <MousePointer className="w-3 h-3 shrink-0" />
            <span className="truncate max-w-[180px] sm:max-w-none">
              {hoveredCoords
                ? `TARGET: [${hoveredCoords.x}, ${hoveredCoords.z}]`
                : 'DRAG TO ORBIT'}
            </span>
          </div>
        </div>

        {/* Cluster Integrity Badge */}
        <div className="absolute top-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 bg-[#070a12]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/20 font-mono text-[11px] text-emerald-400 shadow-lg">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>ZERO-DOWNTIME AUTOSCALE</span>
        </div>

        {/* Active Pod Selector Overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto flex flex-wrap gap-2 pointer-events-auto">
          {SERVICE_PRESETS.map((p, idx) => (
            <button
              key={p.tag}
              type="button"
              onClick={() => setActivePresetIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all flex items-center gap-2 ${
                activePresetIndex === idx
                  ? 'bg-brand-blue/25 text-white border-brand-sky shadow-[0_0_15px_rgba(46,110,254,0.4)] scale-105'
                  : 'bg-black/60 text-slate-400 border-white/10 hover:text-white hover:bg-black/80'
              }`}
            >
              <span className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: p.color }} />
              <span>{p.tag}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
        <div className="text-xs text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-sky animate-ping" />
          <span>Deploying: <strong className="text-white font-mono">{SERVICE_PRESETS[activePresetIndex].name}</strong></span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleDropPod}
            className="flex-1 sm:flex-none justify-center px-3.5 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(46,110,254,0.45)] active:scale-95 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Deploy</span>
          </button>

          <button
            type="button"
            onClick={handleSimulateSpike}
            disabled={isSpikeRunning}
            className={`flex-1 sm:flex-none justify-center px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border flex items-center gap-1.5 transition-all cursor-pointer ${
              isSpikeRunning
                ? 'bg-brand-blue/20 text-brand-sky border-brand-blue/40 animate-pulse'
                : 'bg-white/[0.05] hover:bg-white/10 text-white border-white/10 active:scale-95'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isSpikeRunning ? 'Spike...' : '100k Spike'}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/10 transition-all active:scale-95 cursor-pointer shrink-0"
            title="Reset Cluster"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScalabilityBricksMassif;
