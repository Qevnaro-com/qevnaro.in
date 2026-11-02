import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

/**
 * QuantumCyberNexus (OrreryScene)
 * 
 * Masterpiece ThreeUI / Awwwards-grade 3D WebGL Experience:
 * - Central Living Quantum Core (Nested Icosahedron + Gyroscopic Rings + Pulsing Plasma Sphere)
 * - 4 Domain Satellites in synchronized orbit:
 *    1. Web Architecture (Floating Glass IDE Slate with dynamic canvas & code glyphs)
 *    2. AI Neural Synapse (Crystalline neural network with firing synaptic impulses)
 *    3. Mobile & Spatial Device (Ultra-sleek glass device with 3D waveform & metrics)
 *    4. Cloud Edge Cluster (Isometric data cluster with fiber conduits & status beacons)
 * - Photonic Laser Data Highways with traveling energy packets
 * - Swirling Gravitational Particle Field (1,200 glowing cyber-dust nodes)
 * - Balanced UnrealBloomPass (razor-sharp edges with electric neon glow)
 * - Desktop right-side framing for 100% typography contrast, centered on mobile
 */
export const OrreryScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let animId = 0;
    let isVisible = true;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isDesktop = window.innerWidth >= 1024;
    const isMobile = window.innerWidth < 768;

    // --- 1. Procedural High-DPI Canvas Textures ---

    // A. Web Code IDE Terminal Canvas
    function createCodeCanvas(): { texture: THREE.CanvasTexture; update: (t: number) => void } {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 680;
      const ctx = canvas.getContext('2d')!;

      const lines = [
        { text: '// QEVNARO Core Architecture', color: '#64748b' },
        { text: 'import { QuantumMesh, AICluster } from "@qevnaro/engine";', color: '#818cf8' },
        { text: '', color: '' },
        { text: 'export const platform = new QuantumMesh({', color: '#38bdf8' },
        { text: '  runtime: "Edge-HyperThreaded",', color: '#34d399' },
        { text: '  aiInference: "AutonomousAgent-v4",', color: '#34d399' },
        { text: '  latencyTarget: "< 2.8ms",', color: '#f59e0b' },
        { text: '  encryption: "ZeroKnowledge-TLS"', color: '#34d399' },
        { text: '});', color: '#38bdf8' },
        { text: '', color: '' },
        { text: 'await platform.igniteExperience();', color: '#00F2FE' },
      ];

      function render(cursorVisible: boolean, time: number) {
        ctx.fillStyle = '#060b17';
        ctx.fillRect(0, 0, 1024, 680);

        // Header bar
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, 1024, 60);

        // Window controls
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(36, 30, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(64, 30, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#10b981';
        ctx.beginPath(); ctx.arc(92, 30, 8, 0, Math.PI * 2); ctx.fill();

        // Tab title
        ctx.fillStyle = '#38bdf8';
        ctx.font = '600 20px "JetBrains Mono", monospace';
        ctx.fillText('qevnaro-system.tsx', 130, 37);

        // Telemetry badge
        ctx.fillStyle = 'rgba(0, 242, 254, 0.15)';
        ctx.beginPath();
        ctx.roundRect(760, 12, 240, 36, 18);
        ctx.fill();
        ctx.strokeStyle = '#00F2FE';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.fillStyle = '#00F2FE';
        ctx.beginPath();
        ctx.arc(782, 30, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 15px "JetBrains Mono", monospace';
        const rate = (60.0 + Math.sin(time * 3) * 0.4).toFixed(1);
        ctx.fillText(`60 FPS · ${rate} Gbps`, 798, 36);

        // Code lines
        ctx.font = '500 24px "JetBrains Mono", monospace';
        lines.forEach((line, idx) => {
          const y = 115 + idx * 46;
          ctx.fillStyle = '#475569';
          ctx.fillText((idx + 1).toString().padStart(2, '0'), 36, y);
          if (line.text) {
            ctx.fillStyle = line.color;
            ctx.fillText(line.text, 88, y);
          }
        });

        // Blinking cursor
        if (cursorVisible) {
          ctx.fillStyle = '#00F2FE';
          ctx.shadowColor = '#00F2FE';
          ctx.shadowBlur = 12;
          ctx.fillRect(88 + ctx.measureText('await platform.igniteExperience();').width + 8, 115 + 10 * 46 - 22, 12, 28);
          ctx.shadowBlur = 0;
        }
      }

      render(true, 0);
      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 16;

      let lastBlink = 0;
      let cursorOn = true;

      return {
        texture,
        update: (time: number) => {
          if (time - lastBlink > 0.45) {
            cursorOn = !cursorOn;
            render(cursorOn, time);
            texture.needsUpdate = true;
            lastBlink = time;
          }
        }
      };
    }

    // B. Mobile Live Metric Screen Canvas
    function createMobileCanvas(): THREE.CanvasTexture {
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 1100;
      const ctx = canvas.getContext('2d')!;

      // OLED background
      ctx.fillStyle = '#060a14';
      ctx.fillRect(0, 0, 640, 1100);

      // Status Bar
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('9:41', 48, 54);

      // Dynamic Island pill
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.roundRect(240, 24, 160, 40, 20);
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(360, 44, 4, 0, Math.PI * 2);
      ctx.fill();

      // Signal icons
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('5G', 530, 52);
      ctx.fillRect(565, 38, 26, 16);

      // Brand Title
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 16px sans-serif';
      ctx.fillText('QEVNARO SPATIAL ENGINE', 48, 120);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('Fluid Mobile UX', 48, 170);

      // Metric widgets
      const widgets = [
        { label: 'Edge Render Speed', val: '120 Hz', tag: 'SMOOTH', col: '#00F2FE' },
        { label: 'Cross-Platform Sync', val: '99.98%', tag: 'REALTIME', col: '#10b981' },
        { label: 'Autonomous Agents', val: '16 Active', tag: 'AI-CORE', col: '#818cf8' },
      ];

      widgets.forEach((w, i) => {
        const y = 210 + i * 145;
        ctx.fillStyle = '#0e172a';
        ctx.beginPath();
        ctx.roundRect(48, y, 544, 115, 18);
        ctx.fill();

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.28)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '500 18px sans-serif';
        ctx.fillText(w.label, 76, y + 42);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 34px sans-serif';
        ctx.fillText(w.val, 76, y + 88);

        ctx.fillStyle = w.col;
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(w.tag, 560, y + 68);
        ctx.textAlign = 'left';
      });

      // Holographic Audio Waveform / Performance graph
      ctx.strokeStyle = '#00F2FE';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(48, 780);
      ctx.bezierCurveTo(160, 690, 240, 870, 340, 720);
      ctx.bezierCurveTo(440, 600, 500, 810, 592, 730);
      ctx.stroke();

      ctx.lineTo(592, 940);
      ctx.lineTo(48, 940);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 242, 254, 0.08)';
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 16;
      return texture;
    }

    // --- 2. High-Performance WebGL2 Renderer & ACES Tonemapping ---

    const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x040711, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.32;
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;touch-action:none;';
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.set(0, 1.4, 11.5);

    // Hardware MSAA + UnrealBloomPass
    const effectiveW = Math.round(el.clientWidth * dpr);
    const effectiveH = Math.round(el.clientHeight * dpr);

    const renderTarget = new THREE.WebGLRenderTarget(effectiveW, effectiveH, {
      type: THREE.HalfFloatType,
      samples: isMobile ? 0 : 4,
    });

    const composer = new EffectComposer(renderer, renderTarget);
    composer.setPixelRatio(dpr);
    composer.setSize(el.clientWidth, el.clientHeight);
    composer.addPass(new RenderPass(scene, camera));

    // Calibrated Bloom: Electric neon glows without blurring out metallic highlights
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(effectiveW, effectiveH),
      isMobile ? 0.28 : 0.42, // strength
      0.24,                   // radius
      0.78                    // threshold
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // --- 3. Studio Specular Key & Dynamic Rim Lighting Rig ---

    const ambientLight = new THREE.AmbientLight(0x0a1020, 2.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.5);
    keyLight.position.set(8, 12, 8);
    scene.add(keyLight);

    const cyanRim = new THREE.DirectionalLight(0x00F2FE, 6.0);
    cyanRim.position.set(-10, 6, 4);
    scene.add(cyanRim);

    const violetRim = new THREE.DirectionalLight(0x818cf8, 4.2);
    violetRim.position.set(8, -6, 6);
    scene.add(violetRim);

    // --- 4. 3D Model Hierarchy: The Quantum Cybernetic Nexus ---

    const rootGroup = new THREE.Group();
    rootGroup.position.set(isDesktop ? 2.9 : 0, isDesktop ? 0.45 : 0.2, 0);
    rootGroup.scale.setScalar(isDesktop ? 0.82 : 0.54);
    scene.add(rootGroup);

    // Deep Perspective Holographic Ground Grid
    const gridHelper = new THREE.PolarGridHelper(8.5, 16, 8, 64, 0x00F2FE, 0x1e3a5f);
    gridHelper.position.y = -3.2;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.22;
    rootGroup.add(gridHelper);

    // ========================================================
    // 1. THE CENTRAL QUANTUM CORE (Energy Singularity of Tech)
    // ========================================================
    const coreGroup = new THREE.Group();

    // Inner Glowing Plasma Sphere (Active Energy Heart)
    const plasmaGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const plasmaMat = new THREE.MeshStandardMaterial({
      color: 0x00F2FE,
      emissive: 0x00c4fe,
      emissiveIntensity: 1.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const plasmaSphere = new THREE.Mesh(plasmaGeo, plasmaMat);
    coreGroup.add(plasmaSphere);

    // Dynamic Pulsing Core Light
    const coreLight = new THREE.PointLight(0x00F2FE, 6.0, 9);
    coreGroup.add(coreLight);

    // Middle Gyroscopic Shell: Faceted Golden Octahedron
    const octaGeo = new THREE.OctahedronGeometry(1.28, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      emissive: 0x443300,
      metalness: 0.98,
      roughness: 0.12,
      wireframe: true,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    coreGroup.add(octaMesh);

    // Outer Geodesic Cage: Translucent Crystalline Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.68, 1);
    const icoWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const icoWireMesh = new THREE.Mesh(icoGeo, icoWireMat);
    coreGroup.add(icoWireMesh);

    const icoGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x001122,
      transmission: 0.85,
      roughness: 0.15,
      ior: 1.5,
      transparent: true,
      opacity: 0.4,
    });
    const icoGlassMesh = new THREE.Mesh(icoGeo, icoGlassMat);
    coreGroup.add(icoGlassMesh);

    // 3 Independent Multi-Axis Gyroscopic Rings
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.022, 16, 128);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00F2FE, transparent: true, opacity: 0.85 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.018, 16, 128);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.75 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 3;
    coreGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(2.6, 0.015, 16, 128);
    const ringMat3 = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.65 });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.y = Math.PI / 4;
    coreGroup.add(ring3);

    rootGroup.add(coreGroup);

    // ========================================================
    // 2. SATELLITE 1: Full-Stack Web Platform (IDE Slate)
    // ========================================================
    const webSatellite = new THREE.Group();
    webSatellite.position.set(-2.5, 1.4, 0.8);
    webSatellite.rotation.set(0.12, 0.42, -0.08);

    const { texture: codeTexture, update: updateCode } = createCodeCanvas();
    const codePlaneGeo = new THREE.PlaneGeometry(2.4, 1.6);
    const codePlaneMat = new THREE.MeshBasicMaterial({
      map: codeTexture,
      side: THREE.DoubleSide,
    });
    const codePlane = new THREE.Mesh(codePlaneGeo, codePlaneMat);
    webSatellite.add(codePlane);

    // Glass backing frame with neon bevel edge
    const webBackingGeo = new THREE.BoxGeometry(2.5, 1.7, 0.06);
    const webBackingMat = new THREE.MeshPhysicalMaterial({
      color: 0x07111e,
      roughness: 0.2,
      metalness: 0.9,
      transmission: 0.5,
      transparent: true,
    });
    const webBacking = new THREE.Mesh(webBackingGeo, webBackingMat);
    webBacking.position.z = -0.04;
    webSatellite.add(webBacking);

    // Surrounding glowing edge wireframe
    const webEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(webBackingGeo),
      new THREE.LineBasicMaterial({ color: 0x00F2FE, transparent: true, opacity: 0.75 })
    );
    webSatellite.add(webEdges);
    rootGroup.add(webSatellite);

    // ========================================================
    // 3. SATELLITE 2: AI Neural Nexus & Synaptic Tensor Core
    // ========================================================
    const aiSatellite = new THREE.Group();
    aiSatellite.position.set(2.4, 1.6, -0.6);
    aiSatellite.rotation.set(-0.15, -0.35, 0.1);

    // Central AI Tensor Core Cube
    const tensorGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const tensorMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      emissive: 0x818cf8,
      emissiveIntensity: 0.9,
      metalness: 0.95,
      roughness: 0.1,
    });
    const tensorCube = new THREE.Mesh(tensorGeo, tensorMat);
    aiSatellite.add(tensorCube);

    // 12 Synaptic Nodes orbiting the tensor cube
    const synapseCount = 12;
    const synapseGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const synapseMat = new THREE.MeshBasicMaterial({ color: 0x00F2FE });
    const synapseMeshes: THREE.Mesh[] = [];

    const synapsePoints: THREE.Vector3[] = [];
    for (let i = 0; i < synapseCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / synapseCount);
      const theta = Math.sqrt(synapseCount * Math.PI) * phi;
      const pos = new THREE.Vector3(
        1.05 * Math.cos(theta) * Math.sin(phi),
        1.05 * Math.sin(theta) * Math.sin(phi),
        1.05 * Math.cos(phi)
      );
      synapsePoints.push(pos);

      const node = new THREE.Mesh(synapseGeo, synapseMat);
      node.position.copy(pos);
      aiSatellite.add(node);
      synapseMeshes.push(node);
    }

    // Dynamic neural lines connecting synapses
    const neuralLinePositions: number[] = [];
    for (let i = 0; i < synapseCount; i++) {
      for (let j = i + 1; j < synapseCount; j++) {
        if (synapsePoints[i].distanceTo(synapsePoints[j]) < 1.3) {
          neuralLinePositions.push(
            synapsePoints[i].x, synapsePoints[i].y, synapsePoints[i].z,
            synapsePoints[j].x, synapsePoints[j].y, synapsePoints[j].z
          );
        }
      }
    }
    const neuralLineGeo = new THREE.BufferGeometry();
    neuralLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(neuralLinePositions, 3));
    const neuralLineMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const neuralLines = new THREE.LineSegments(neuralLineGeo, neuralLineMat);
    aiSatellite.add(neuralLines);
    rootGroup.add(aiSatellite);

    // ========================================================
    // 4. SATELLITE 3: Mobile & Spatial Interface Slate
    // ========================================================
    const mobileSatellite = new THREE.Group();
    mobileSatellite.position.set(-1.9, -1.5, 0.9);
    mobileSatellite.rotation.set(0.2, 0.35, -0.15);

    const mobileTexture = createMobileCanvas();
    const mobileGeo = new THREE.PlaneGeometry(1.2, 2.1);
    const mobileMat = new THREE.MeshBasicMaterial({ map: mobileTexture, side: THREE.DoubleSide });
    const mobileMesh = new THREE.Mesh(mobileGeo, mobileMat);
    mobileSatellite.add(mobileMesh);

    // Curved edge device chassis
    const chassisGeo = new THREE.BoxGeometry(1.26, 2.16, 0.08);
    const chassisMat = new THREE.MeshPhysicalMaterial({
      color: 0x060c18,
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    chassis.position.z = -0.05;
    mobileSatellite.add(chassis);

    // Titanium rim
    const chassisEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(chassisGeo),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 })
    );
    mobileSatellite.add(chassisEdges);
    rootGroup.add(mobileSatellite);

    // ========================================================
    // 5. SATELLITE 4: Cloud & Edge Mesh Cluster (Isometric 3D)
    // ========================================================
    const cloudSatellite = new THREE.Group();
    cloudSatellite.position.set(2.2, -1.4, 0.5);
    cloudSatellite.rotation.set(0.25, -0.4, 0.15);

    // 4 Isometric server nodes forming a distributed edge mesh
    const nodeGeo = new THREE.BoxGeometry(0.65, 0.35, 0.65);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x0c1626,
      metalness: 0.92,
      roughness: 0.18,
      emissive: 0x002244,
    });

    const nodeOffsets = [
      [-0.45, 0.4, -0.45],
      [0.45, 0.4, 0.45],
      [-0.45, -0.4, 0.45],
      [0.45, -0.4, -0.45],
    ];

    nodeOffsets.forEach((pos) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(pos[0], pos[1], pos[2]);

      // Neon edge rim
      const edge = new THREE.LineSegments(
        new THREE.EdgesGeometry(nodeGeo),
        new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.75 })
      );
      node.add(edge);

      // Blinking status beacon on top
      const beaconGeo = new THREE.SphereGeometry(0.04, 12, 12);
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(0.18, 0.2, 0.18);
      node.add(beacon);

      cloudSatellite.add(node);
    });
    rootGroup.add(cloudSatellite);

    // ========================================================
    // 6. PHOTONIC DATA HIGHWAYS & FLOWING ENERGY PACKETS
    // ========================================================
    const highways = [
      { start: new THREE.Vector3(0, 0, 0), end: webSatellite.position, mid: new THREE.Vector3(-1.2, 1.2, 1.2), color: 0x00F2FE },
      { start: new THREE.Vector3(0, 0, 0), end: aiSatellite.position, mid: new THREE.Vector3(1.3, 1.4, 0.4), color: 0x818cf8 },
      { start: new THREE.Vector3(0, 0, 0), end: mobileSatellite.position, mid: new THREE.Vector3(-1.0, -1.2, 1.4), color: 0x38bdf8 },
      { start: new THREE.Vector3(0, 0, 0), end: cloudSatellite.position, mid: new THREE.Vector3(1.4, -1.0, 1.0), color: 0x10b981 },
    ];

    const curves: THREE.CatmullRomCurve3[] = [];
    const packets: { mesh: THREE.Mesh; curveIndex: number; speed: number; offset: number }[] = [];
    const packetGeo = new THREE.SphereGeometry(0.065, 16, 16);

    highways.forEach((hw, hIdx) => {
      const curve = new THREE.CatmullRomCurve3([hw.start, hw.mid, hw.end]);
      curves.push(curve);

      // Core Laser Line
      const points = curve.getPoints(50);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: hw.color,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      rootGroup.add(line);

      // Outer Translucent Energy Sleeve
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.03, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: hw.color,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      rootGroup.add(tube);

      // 2 Traveling Photonic Data Packets per Highway
      for (let p = 0; p < 2; p++) {
        const pMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          blending: THREE.AdditiveBlending,
        });
        const pMesh = new THREE.Mesh(packetGeo, pMat);
        rootGroup.add(pMesh);
        packets.push({
          mesh: pMesh,
          curveIndex: hIdx,
          speed: 0.45 + Math.random() * 0.15,
          offset: p * 0.5,
        });
      }
    });

    // ========================================================
    // 7. GRAVITATIONAL CYBER-DUST PARTICLE FIELD (1,200 Nodes)
    // ========================================================
    const particleCount = isMobile ? 500 : 1200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x00F2FE);
    const cViolet = new THREE.Color(0x818cf8);
    const cGold = new THREE.Color(0xFFD700);

    for (let i = 0; i < particleCount; i++) {
      // Golden Spiral distribution in 3D
      const radius = 1.2 + Math.pow(Math.random(), 0.6) * 5.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const mixVal = Math.random();
      const pCol = mixVal < 0.65 ? cCyan : mixVal < 0.88 ? cViolet : cGold;
      particleColors[i * 3] = pCol.r;
      particleColors[i * 3 + 1] = pCol.g;
      particleColors[i * 3 + 2] = pCol.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleField);

    // ========================================================
    // 8. INTERACTIVE SPRING PARALLAX & DRAG ROTATION
    // ========================================================
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let dragRotation = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = nx * 0.35;
      mouse.targetY = ny * 0.3;

      if (isDragging) {
        const dx = e.clientX - prevMousePos.x;
        const dy = e.clientY - prevMousePos.y;
        dragRotation.y += dx * 0.005;
        dragRotation.x += dy * 0.005;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    el.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);

    // Handle Window Resize
    const handleResize = () => {
      if (!el) return;
      isDesktop = window.innerWidth >= 1024;
      const w = el.clientWidth;
      const h = el.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      composer.setSize(w, h);

      rootGroup.position.set(isDesktop ? 2.9 : 0, isDesktop ? 0.45 : 0.2, 0);
      rootGroup.scale.setScalar(isDesktop ? 0.82 : 0.54);
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause rendering when off-screen
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    io.observe(el);

    // ========================================================
    // 9. ANIMATION LOOP
    // ========================================================
    let clock = 0;
    let lastTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      clock += delta;

      // Smooth mouse spring interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!reduce) {
        // Core Gyroscopic Rotations
        ring1.rotation.z += delta * 0.45;
        ring2.rotation.y += delta * 0.35;
        ring3.rotation.x += delta * 0.25;

        octaMesh.rotation.y += delta * 0.4;
        octaMesh.rotation.x -= delta * 0.2;

        icoWireMesh.rotation.y -= delta * 0.15;
        icoGlassMesh.rotation.y -= delta * 0.15;

        // Plasma Heart Pulse (Rhythmic Breathing)
        const pulse = 1.0 + Math.sin(clock * 3.5) * 0.06;
        plasmaSphere.scale.setScalar(pulse);
        coreLight.intensity = 5.0 + Math.sin(clock * 3.5) * 1.8;

        // Domain Satellites Subtle Floating Drift
        webSatellite.position.y = 1.4 + Math.sin(clock * 1.8) * 0.08;
        aiSatellite.position.y = 1.6 + Math.cos(clock * 1.5) * 0.09;
        mobileSatellite.position.y = -1.5 + Math.sin(clock * 2.0 + 1) * 0.07;
        cloudSatellite.position.y = -1.4 + Math.cos(clock * 1.7 + 2) * 0.08;

        // AI Tensor Core & Synapses Rotation
        tensorCube.rotation.x += delta * 0.6;
        tensorCube.rotation.y += delta * 0.8;
        aiSatellite.rotation.y += delta * 0.2;

        // Photonic Packets Movement
        packets.forEach((p) => {
          const t = (clock * p.speed + p.offset) % 1.0;
          const pos = curves[p.curveIndex].getPoint(t);
          p.mesh.position.copy(pos);
        });

        // Gravitational Cyber Particle Field Slow Spin
        particleField.rotation.y += delta * 0.06;
        particleField.rotation.x = Math.sin(clock * 0.3) * 0.04;

        // Live Code Editor Cursor Update
        updateCode(clock);

        // Interactive Parallax Orientation
        rootGroup.rotation.y = mouse.x + dragRotation.y;
        rootGroup.rotation.x = -mouse.y + dragRotation.x;
      }

      composer.render();
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      io.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      el.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      // Clean WebGL resources
      renderer.dispose();
      composer.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={host}
      className={`pointer-events-auto h-full w-full select-none cursor-grab active:cursor-grabbing ${className}`}
      aria-hidden="true"
    />
  );
};

export default OrreryScene;
