import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Camera, Terminal, Play, Pause, Activity } from 'lucide-react';

interface CameraShot {
  pos: [number, number, number];
  look: [number, number, number];
  label: string;
  code: string;
}

const SHOTS: CameraShot[] = [
  { pos: [2.8, 1.8, 4.0], look: [0, 0.9, 0], label: 'Workstation 3/4', code: 'CAM 01 // ORTHO' },
  { pos: [-2.4, 1.4, 2.1], look: [-0.2, 0.25, 0.9], label: 'Keybed Macro', code: 'CAM 02 // KEYBED' },
  { pos: [0, 1.25, 2.7], look: [0, 1.25, 0.6], label: 'Phosphor Tube', code: 'CAM 03 // PHOSPHOR' },
];

const SHOT_DURATION_MS = 3800;

// High-DPI Procedural CRT Graphics Renderer (Target: 1600 x 1200)
function drawScreen(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  count: number
) {
  // 1. Background CRT phosphor substrate
  ctx.fillStyle = '#020610';
  ctx.fillRect(0, 0, w, h);

  // 2. High-precision vector blueprint grid
  ctx.strokeStyle = 'rgba(46, 110, 254, 0.12)';
  ctx.lineWidth = 1;
  const gridSize = 50;
  for (let x = 0; x < w; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // 3. Header Status Bar
  ctx.fillStyle = '#081124';
  ctx.fillRect(0, 0, w, 68);
  ctx.strokeStyle = '#2e6efe';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 68);
  ctx.lineTo(w, 68);
  ctx.stroke();

  // Header Typography
  ctx.font = 'bold 22px "JetBrains Mono", monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.textAlign = 'left';
  ctx.fillText('QEVNARO AUTONOMOUS ORCHESTRATOR // SYS-V4.9.4', 36, 42);

  ctx.font = '16px "JetBrains Mono", monospace';
  ctx.fillStyle = '#10b981';
  ctx.textAlign = 'right';
  ctx.fillText('● SYSTEM STATUS: OPTIMAL // 120Hz', w - 36, 42);

  // 4. Oscilloscope Visualizer Box
  const oscX = 40;
  const oscY = 100;
  const oscW = w * 0.52;
  const oscH = h * 0.38;

  ctx.fillStyle = 'rgba(8, 16, 32, 0.7)';
  ctx.strokeStyle = 'rgba(46, 110, 254, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(oscX, oscY, oscW, oscH);
  ctx.strokeRect(oscX, oscY, oscW, oscH);

  // Oscilloscope Title
  ctx.font = 'bold 15px "JetBrains Mono", monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.textAlign = 'left';
  ctx.fillText('REALTIME FOURIER HARMONIC SYNTHESIZER [CH 01 / CH 02]', oscX + 20, oscY + 32);

  // Oscilloscope Sub-Grid
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
  ctx.lineWidth = 1;
  for (let gx = oscX + 40; gx < oscX + oscW; gx += 40) {
    ctx.beginPath();
    ctx.moveTo(gx, oscY + 45);
    ctx.lineTo(gx, oscY + oscH - 15);
    ctx.stroke();
  }
  for (let gy = oscY + 50; gy < oscY + oscH; gy += 40) {
    ctx.beginPath();
    ctx.moveTo(oscX + 15, gy);
    ctx.lineTo(oscX + oscW - 15, gy);
    ctx.stroke();
  }

  // Primary Oscilloscope Waveform (Bright Cyan)
  ctx.strokeStyle = '#5b9bff';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#2e6efe';
  ctx.shadowBlur = 18;
  ctx.beginPath();
  const waveCenterY = oscY + oscH * 0.58;
  const wavePoints = 80;
  for (let i = 0; i <= wavePoints; i++) {
    const x = oscX + 20 + (i / wavePoints) * (oscW - 40);
    const f1 = Math.sin(i * 0.28 + t * 4.8);
    const f2 = Math.cos(i * 0.55 - t * 2.6) * 0.55;
    const f3 = Math.sin(i * 0.12 + t * 1.5) * 0.3;
    const y = waveCenterY + (f1 + f2 + f3) * 44;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Secondary Echo Waveform (Bright Aqua)
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= wavePoints; i++) {
    const x = oscX + 20 + (i / wavePoints) * (oscW - 40);
    const y = waveCenterY + Math.sin(i * 0.38 + t * 3.4) * 28;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // 5. Multi-Core Cluster Allocation Gauges
  const gaugeBoxY = oscY + oscH + 30;
  const gaugeBoxH = h - gaugeBoxY - 50;
  ctx.fillStyle = 'rgba(8, 16, 32, 0.7)';
  ctx.strokeStyle = 'rgba(46, 110, 254, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(oscX, gaugeBoxY, oscW, gaugeBoxH);
  ctx.strokeRect(oscX, gaugeBoxY, oscW, gaugeBoxH);

  ctx.font = 'bold 15px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('DYNAMIC THREAD CLUSTER WORKLOAD (8 CORES)', oscX + 20, gaugeBoxY + 32);

  const numCores = 8;
  const barSpacing = (oscW - 50) / numCores;
  const barWidth = barSpacing * 0.65;
  const maxBarH = gaugeBoxH - 90;

  for (let c = 0; c < numCores; c++) {
    const dynamicPercent = 0.45 + Math.sin(t * 3.8 + c * 1.1) * 0.35;
    const barH = Math.max(15, dynamicPercent * maxBarH);
    const bx = oscX + 25 + c * barSpacing;
    const by = gaugeBoxY + gaugeBoxH - 30 - barH;

    // Track backdrop
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.fillRect(bx, gaugeBoxY + gaugeBoxH - 30 - maxBarH, barWidth, maxBarH);

    // Active bar fill with gradient
    const barGrad = ctx.createLinearGradient(bx, by, bx, by + barH);
    if (c === 3 || c === 7) {
      barGrad.addColorStop(0, '#38bdf8');
      barGrad.addColorStop(1, '#0284c7');
    } else {
      barGrad.addColorStop(0, '#5b9bff');
      barGrad.addColorStop(1, '#1d4ed8');
    }
    ctx.fillStyle = barGrad;
    ctx.fillRect(bx, by, barWidth, barH);

    // Core ID labels
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'center';
    ctx.fillText(`C${c}`, bx + barWidth / 2, gaugeBoxY + gaugeBoxH - 12);
  }

  // 6. Streaming Telemetry Terminal Logs
  const logX = w * 0.58;
  const logY = 100;
  const logW = w * 0.38;
  const logH = h * 0.54;

  ctx.fillStyle = 'rgba(6, 12, 24, 0.85)';
  ctx.strokeStyle = 'rgba(46, 110, 254, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(logX, logY, logW, logH);
  ctx.strokeRect(logX, logY, logW, logH);

  // Terminal Window Header Bar
  ctx.fillStyle = '#0c1a36';
  ctx.fillRect(logX, logY, logW, 36);
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.textAlign = 'left';
  ctx.fillText('LIVE TELEMETRY STREAM // ttyS0', logX + 18, logY + 23);

  // Realistic rolling system logs
  const baseTimeSec = Math.floor(t % 60);
  const milliFraction = Math.floor((t * 1000) % 1000).toString().padStart(3, '0');
  const ts = `[00:${baseTimeSec.toString().padStart(2, '0')}.${milliFraction}]`;

  const logs = [
    `${ts} ORCHESTRATOR ONLINE: RAFT_CONSENSUS_STABLE`,
    `[SYS] AGENT POOL: 8/8 READY · P99: 8.4MS`,
    `[K8S] AUTOSCALE ACTIVE: DISCRETE_MASSIF_SYNC`,
    `[TLS] QUANTUM-RESISTANT HANDSHAKE COMPLETE`,
    `[GPU] MATRIX ACCEL: FP16 TENSOR PIPELINE OK`,
    `[INF] TOKEN THROUGHPUT: 2,480 TPS · LOSS: 0.00%`,
    `[MEM] BUFFER POOL: 64.2% ALLOCATED · 0 FAULTS`,
    `[NET] BGP MULTI-HOMING ROUTE CONVERGED`,
  ];

  ctx.font = '13px "JetBrains Mono", monospace';
  logs.forEach((log, idx) => {
    ctx.fillStyle = idx === 0 ? '#38bdf8' : idx % 2 === 0 ? '#cbd5e1' : '#94a3b8';
    ctx.fillText(log, logX + 18, logY + 68 + idx * 26);
  });

  // Typing Active Shell Command Prompt
  const cmd = 'qevnaro orchestrate --cluster=primary --auto-heal';
  const charCount = Math.floor((t * 18) % (cmd.length + 20));
  const typedSlice = cmd.slice(0, Math.min(cmd.length, charCount));
  const cursorBlink = Math.sin(t * 7) > 0;

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillText(
    `root@qevnaro-core:~# ${typedSlice}${cursorBlink ? '█' : ' '}`,
    logX + 18,
    logY + 68 + logs.length * 26 + 10
  );

  // 7. Circular Performance Speedometer & Counter
  const dialBoxY = logY + logH + 30;
  const dialBoxH = h - dialBoxY - 50;
  ctx.fillStyle = 'rgba(8, 16, 32, 0.7)';
  ctx.strokeStyle = 'rgba(46, 110, 254, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(logX, dialBoxY, logW, dialBoxH);
  ctx.strokeRect(logX, dialBoxY, logW, dialBoxH);

  const dialCenterX = logX + logW * 0.75;
  const dialCenterY = dialBoxY + dialBoxH * 0.52;
  const dialRadius = 65;

  // Background Dial Arc
  ctx.strokeStyle = 'rgba(46, 110, 254, 0.25)';
  ctx.lineWidth = 9;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(dialCenterX, dialCenterY, dialRadius, Math.PI * 0.8, Math.PI * 2.2);
  ctx.stroke();

  // Active Value Dial Arc
  const progress = Math.min(1, count / 1_000_000);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 9;
  ctx.shadowColor = '#38bdf8';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(dialCenterX, dialCenterY, dialRadius, Math.PI * 0.8, Math.PI * 0.8 + progress * Math.PI * 1.4);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Numerical Inference Counter
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px "JetBrains Mono", monospace';
  ctx.textAlign = 'right';
  ctx.fillText(Math.floor(count).toLocaleString('en-US'), dialCenterX - 85, dialCenterY + 12);

  ctx.font = '13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText('INFERENCE OPERATIONS / SEC', dialCenterX - 85, dialCenterY + 38);

  // 8. Authentic CRT Scanlines Raster
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  for (let y = 0; y < h; y += 4) {
    ctx.fillRect(0, y, w, 1.8);
  }

  // 9. Cathode Electron Beam Refresh Sweep
  const sweepY = (t * 260) % h;
  const sweepGrad = ctx.createLinearGradient(0, sweepY - 50, 0, sweepY + 50);
  sweepGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
  sweepGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.07)');
  sweepGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
  ctx.fillStyle = sweepGrad;
  ctx.fillRect(0, sweepY - 50, w, 100);

  // 10. Phosphor Vignette & Edge Shadow
  const grad = ctx.createRadialGradient(w / 2, h / 2, h * 0.32, w / 2, h / 2, h * 0.76);
  grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(1, 'rgba(1, 4, 12, 0.7)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

export const CathodeSession: React.FC<{ className?: string }> = ({ className = '' }) => {
  const host = useRef<HTMLDivElement>(null);
  const [activeShot, setActiveShot] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);
  const targetShotRef = useRef(0);
  const autoCycleRef = useRef(true);

  // Sync state with refs
  useEffect(() => {
    targetShotRef.current = activeShot;
  }, [activeShot]);

  useEffect(() => {
    autoCycleRef.current = autoCycle;
  }, [autoCycle]);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const initW = el.clientWidth || 800;
    const initH = el.clientHeight || 500;
    renderer.setSize(initW, initH);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;touch-action:none;';
    el.appendChild(renderer.domElement);

    // 2. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060911, 0.042);

    const camera = new THREE.PerspectiveCamera(36, initW / initH, 0.1, 75);

    // 3. Studio Cinematic Lighting
    scene.add(new THREE.HemisphereLight(0x5b9bff, 0x060911, 1.5));

    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.8);
    keyLight.position.set(7, 9, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.4);
    rimLight.position.set(-8, 2, -7);
    scene.add(rimLight);

    const crtScreenLight = new THREE.PointLight(0x38bdf8, 20, 5.5, 1.8);
    crtScreenLight.position.set(0, 1.25, 0.9);
    scene.add(crtScreenLight);

    // 4. Geometry & Materials
    const workstationGroup = new THREE.Group();
    scene.add(workstationGroup);

    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x121926,
      roughness: 0.6,
      metalness: 0.38,
      flatShading: true,
    });

    const darkBezelMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      roughness: 0.82,
      metalness: 0.22,
      flatShading: true,
    });

    // Monolithic Desk Surface
    const deskGeo = new THREE.BoxGeometry(7.5, 0.25, 5.0);
    const desk = new THREE.Mesh(deskGeo, chassisMat);
    desk.position.y = -0.15;
    workstationGroup.add(desk);

    // CRT Monitor Pedestal Base & Neck
    const neckGeo = new THREE.CylinderGeometry(0.5, 0.72, 0.45, 20);
    const crtNeck = new THREE.Mesh(neckGeo, darkBezelMat);
    crtNeck.position.set(0, 0.18, -0.4);
    workstationGroup.add(crtNeck);

    // CRT Housing Chassis
    const bodyGeo = new THREE.BoxGeometry(2.9, 2.2, 2.2);
    const crtBody = new THREE.Mesh(bodyGeo, chassisMat);
    crtBody.position.set(0, 1.25, -0.4);
    workstationGroup.add(crtBody);

    // Rear Cathode Tube Tapered Enclosure
    const backGeo = new THREE.BoxGeometry(2.0, 1.5, 1.4);
    const crtBack = new THREE.Mesh(backGeo, darkBezelMat);
    crtBack.position.set(0, 1.25, -2.0);
    workstationGroup.add(crtBack);

    // CRT Bezel Front Frame
    const bezelGeo = new THREE.BoxGeometry(2.65, 1.95, 0.2);
    const crtBezel = new THREE.Mesh(bezelGeo, darkBezelMat);
    crtBezel.position.set(0, 1.25, 0.62);
    workstationGroup.add(crtBezel);

    // 5. High-Resolution Curved CRT Phosphor Faceplate (1600 x 1200)
    const cv = document.createElement('canvas');
    cv.width = 1600;
    cv.height = 1200;
    const ctx = cv.getContext('2d')!;
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;

    // Sculpted Curved CRT Faceplate Geometry (Convex Barrel Distortion)
    const screenGeo = new THREE.PlaneGeometry(2.35, 1.65, 32, 24);
    const pos = screenGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const nx = x / 1.175;
      const ny = y / 0.825;
      const curve = Math.max(0, 1 - (nx * nx * 0.38 + ny * ny * 0.44));
      pos.setZ(i, curve * 0.075);
    }
    screenGeo.computeVertexNormals();

    const screenMat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.2,
      metalness: 0.1,
      emissive: 0x38bdf8,
      emissiveMap: tex,
      emissiveIntensity: 0.9,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.25, 0.72);
    workstationGroup.add(screenMesh);

    // Chassis Indicator LEDs on Bezel
    const ledGeo = new THREE.SphereGeometry(0.026, 8, 8);
    const powerLed = new THREE.Mesh(ledGeo, new THREE.MeshBasicMaterial({ color: 0x10b981 }));
    powerLed.position.set(1.05, 0.42, 0.74);
    workstationGroup.add(powerLed);

    const diskLedMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const diskLed = new THREE.Mesh(ledGeo, diskLedMat);
    diskLed.position.set(1.15, 0.42, 0.74);
    workstationGroup.add(diskLed);

    // Rotary Dial Knob on Bezel
    const dialGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.06, 16);
    dialGeo.rotateX(Math.PI / 2);
    const dialKnob = new THREE.Mesh(dialGeo, chassisMat);
    dialKnob.position.set(0.9, 0.42, 0.74);
    workstationGroup.add(dialKnob);

    // 6. Sculpted Mechanical Keyboard
    const kbChassisGeo = new THREE.BoxGeometry(3.0, 0.16, 1.05);
    const kbChassis = new THREE.Mesh(kbChassisGeo, darkBezelMat);
    kbChassis.position.set(0, 0.08, 1.25);
    kbChassis.rotation.x = -0.09;
    workstationGroup.add(kbChassis);

    // Individual Keycaps with reactive emissive underglow
    const keys: THREE.Mesh[] = [];
    const keyGeo = new THREE.BoxGeometry(0.18, 0.09, 0.18);
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x1d2636,
      roughness: 0.5,
      metalness: 0.5,
      emissive: 0x2e6efe,
      emissiveIntensity: 0.22,
    });

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 13; c++) {
        const kMesh = new THREE.Mesh(keyGeo, keyMat.clone());
        kMesh.position.set(-1.25 + c * 0.21, 0.18, 0.92 + r * 0.22);
        kMesh.rotation.x = -0.09;
        workstationGroup.add(kMesh);
        keys.push(kMesh);
      }
    }

    // Spacebar Keycap
    const spaceGeo = new THREE.BoxGeometry(1.2, 0.09, 0.18);
    const spaceMesh = new THREE.Mesh(spaceGeo, keyMat.clone());
    spaceMesh.position.set(0, 0.18, 1.8);
    spaceMesh.rotation.x = -0.09;
    workstationGroup.add(spaceMesh);
    keys.push(spaceMesh);

    // Minimalistic Optical Mouse
    const mouseGeo = new THREE.BoxGeometry(0.42, 0.12, 0.7);
    const mouseMesh = new THREE.Mesh(mouseGeo, chassisMat);
    mouseMesh.position.set(1.9, 0.06, 1.35);
    workstationGroup.add(mouseMesh);

    // 7. Interactive Orbit & Dynamic Camera Loop
    const camPos = new THREE.Vector3(...SHOTS[0].pos);
    const camLook = new THREE.Vector3(...SHOTS[0].look);
    camera.position.copy(camPos);

    let isPointerDown = false;
    let pointerPrevX = 0;
    let pointerPrevY = 0;
    let userOrbitX = 0;
    let userOrbitY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      pointerPrevX = e.clientX;
      pointerPrevY = e.clientY;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const dx = e.clientX - pointerPrevX;
      const dy = e.clientY - pointerPrevY;
      pointerPrevX = e.clientX;
      pointerPrevY = e.clientY;
      userOrbitX += dx * 0.006;
      userOrbitY = Math.max(-0.6, Math.min(0.6, userOrbitY + dy * 0.005));
    };

    const onPointerUp = (e: PointerEvent) => {
      isPointerDown = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);

    const startTime = performance.now();
    let raf = 0;
    let lastShotIndex = 0;
    let isVisible = true;

    const frame = () => {
      const now = performance.now();
      const ms = now - startTime;

      let currentShotIdx = targetShotRef.current;
      if (autoCycleRef.current && !reduce && !isPointerDown) {
        currentShotIdx = Math.floor(ms / SHOT_DURATION_MS) % SHOTS.length;
        if (currentShotIdx !== lastShotIndex) {
          lastShotIndex = currentShotIdx;
          setActiveShot(currentShotIdx);
        }
      }

      const s = SHOTS[currentShotIdx];
      const tPos = new THREE.Vector3(...s.pos);
      const tLook = new THREE.Vector3(...s.look);

      // Apply interactive user orbit offsets
      tPos.x += Math.sin(userOrbitX) * 1.5;
      tPos.z += (Math.cos(userOrbitX) - 1) * 1.5;
      tPos.y += userOrbitY * 1.2;

      // Smooth camera dampening
      camPos.lerp(tPos, 0.052);
      camLook.lerp(tLook, 0.052);

      // Micro-drift
      const drift = Math.sin(ms * 0.0012) * 0.04;
      camera.position.copy(camPos).add(new THREE.Vector3(drift, 0, 0));
      camera.lookAt(camLook);

      // Animate Screen Graphics
      const count =
        currentShotIdx === 2
          ? Math.min(1_000_000, ((ms % SHOT_DURATION_MS) / SHOT_DURATION_MS) * 1_250_000)
          : currentShotIdx === 0
          ? 180_000 + ((ms % SHOT_DURATION_MS) / SHOT_DURATION_MS) * 75_000
          : 420_000;

      drawScreen(ctx, cv.width, cv.height, ms / 1000, count);
      tex.needsUpdate = true;

      // Disk LED High-speed blinking
      diskLed.visible = Math.sin(ms * 0.02) > 0.2;

      // Reactive Keybed Light Chase
      keys.forEach((k, i) => {
        const wave = (Math.sin(ms * 0.0045 - i * 0.45) + 1) / 2;
        const mat = k.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = currentShotIdx === 1 ? 0.35 + wave * 2.4 : 0.15 + wave * 0.4;
      });

      renderer.render(scene, camera);
    };

    const loop = () => {
      frame();
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        isVisible = e.isIntersecting;
        cancelAnimationFrame(raf);
        if (isVisible && !reduce) {
          loop();
        } else if (isVisible) {
          frame();
        }
      },
      { threshold: 0 }
    );
    io.observe(el);

    const onResize = () => {
      if (!el) return;
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(el);
    window.addEventListener('resize', onResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', onResize);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      cancelAnimationFrame(raf);
      io.disconnect();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose?.();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose?.();
      });
      tex.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleToggleAutoCycle = useCallback(() => {
    setAutoCycle((prev) => !prev);
  }, []);

  const handleSelectShot = useCallback((idx: number) => {
    setActiveShot(idx);
    setAutoCycle(false);
  }, []);

  return (
    <div
      className={`relative w-full aspect-[16/10] min-h-[380px] sm:min-h-[450px] rounded-2xl bg-surface border border-white/[0.12] overflow-hidden shadow-2xl select-none ${className}`}
    >
      {/* 3D WebGL Canvas Layer */}
      <div ref={host} className="absolute inset-0 cursor-grab active:cursor-grabbing" aria-hidden="true" />

      {/* Top Console Bar */}
      <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none gap-2">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#070a12]/85 backdrop-blur-md border border-white/10 font-mono text-[10px] sm:text-[11px] text-brand-sky shadow-lg truncate">
          <Terminal className="w-3.5 h-3.5 text-brand-sky shrink-0" />
          <span className="truncate">CYBER-CONSOLE // TELEMETRY</span>
        </div>

        {/* Auto Cycle Toggle */}
        <button
          type="button"
          onClick={handleToggleAutoCycle}
          className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#070a12]/85 hover:bg-[#070a12] backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300 hover:text-white transition-all shadow-lg active:scale-95 cursor-pointer shrink-0"
        >
          {autoCycle ? (
            <>
              <Pause className="w-3 h-3 text-brand-sky" />
              <span>PAUSE</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-emerald-400" />
              <span>CYCLE</span>
            </>
          )}
        </button>
      </div>

      {/* Bottom Camera Angle Selector Dock */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3 pointer-events-none">
        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
          {SHOTS.map((s, idx) => (
            <button
              key={s.code}
              type="button"
              onClick={() => handleSelectShot(idx)}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-mono text-[10px] sm:text-xs font-medium border transition-all flex items-center gap-1 shadow-md cursor-pointer ${
                activeShot === idx
                  ? 'bg-brand-blue/30 text-brand-sky border-brand-sky shadow-[0_0_15px_rgba(46,110,254,0.35)] scale-105'
                  : 'bg-[#070a12]/85 text-slate-400 border-white/10 hover:text-white hover:bg-black/90'
              }`}
            >
              <Camera className="w-3 h-3" />
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.code.split('//')[1]?.trim() || s.label}</span>
            </button>
          ))}
        </div>

        {/* Real-Time Live Signal Pill */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070a12]/85 backdrop-blur-md border border-brand-blue/20 font-mono text-[10px] text-slate-400 tracking-wider uppercase">
          <Activity className="w-3.5 h-3.5 text-brand-sky animate-pulse" />
          <span>PHOSPHOR REFRESH: 120HZ // ULTRA-DPI</span>
        </div>
      </div>
    </div>
  );
};

export default CathodeSession;
