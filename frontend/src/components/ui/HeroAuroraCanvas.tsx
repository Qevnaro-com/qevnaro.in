import React, { useEffect, useRef } from 'react';

interface HeroAuroraCanvasProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

export const HeroAuroraCanvas: React.FC<HeroAuroraCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse tracking with smooth spring interpolation
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
      active: false,
    };

    // Color palette inspired by QEVNARO brand + Stripe/Vercel aesthetics
    const palette = [
      'rgba(0, 242, 254, ',   // Electric Cyan
      'rgba(56, 189, 248, ',  // Quantum Sky
      'rgba(129, 140, 248, ', // Radiant Violet
      'rgba(46, 110, 254, ',  // Brand Blue
    ];

    // Initialize interactive neural particles
    let particles: Particle[] = [];
    const initParticles = (w: number, h: number) => {
      const isMobile = w < 768;
      const count = isMobile ? 35 : 75;
      particles = [];

      for (let i = 0; i < count; i++) {
        // Concentrate more particles towards the right and center-right to frame the text
        const xBias = Math.pow(Math.random(), 0.7);
        const x = isMobile ? Math.random() * w : w * 0.35 + xBias * (w * 0.65);
        const y = Math.random() * h;
        const baseRadius = Math.random() * 1.8 + 0.8;
        const baseAlpha = Math.random() * 0.45 + 0.25;
        const color = palette[Math.floor(Math.random() * palette.length)];

        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: baseRadius,
          baseRadius,
          alpha: baseAlpha,
          baseAlpha,
          color,
        });
      }
    };

    // Handle high-DPI resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse listener
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Flowing Aurora Ribbons Parameters
    let time = 0;

    const render = () => {
      animId = requestAnimationFrame(render);

      // Spring mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      if (!reduceMotion) {
        time += 0.008;
      }

      ctx.clearRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 1. LAYER 1: Deep Aurora Gradient Glows (Stripe / Vercel Depth)
      // -------------------------------------------------------------
      // Dynamic primary right glow (Cyan to Brand Blue)
      const glow1X = width * 0.75 + Math.sin(time * 0.8) * 60;
      const glow1Y = height * 0.4 + Math.cos(time * 0.6) * 40;
      const grad1 = ctx.createRadialGradient(glow1X, glow1Y, 0, glow1X, glow1Y, width * 0.55);
      grad1.addColorStop(0, 'rgba(0, 242, 254, 0.12)');
      grad1.addColorStop(0.35, 'rgba(46, 110, 254, 0.08)');
      grad1.addColorStop(0.7, 'rgba(129, 140, 248, 0.03)');
      grad1.addColorStop(1, 'rgba(7, 9, 14, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Secondary floating accent glow (Violet / Purple)
      const glow2X = width * 0.85 + Math.cos(time * 0.7) * 50;
      const glow2Y = height * 0.65 + Math.sin(time * 0.9) * 50;
      const grad2 = ctx.createRadialGradient(glow2X, glow2Y, 0, glow2X, glow2Y, width * 0.45);
      grad2.addColorStop(0, 'rgba(129, 140, 248, 0.10)');
      grad2.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      grad2.addColorStop(1, 'rgba(7, 9, 14, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 2. LAYER 2: Harmonic Flowing Aurora Energy Ribbons
      // -------------------------------------------------------------
      const ribbons = [
        {
          baseY: height * 0.38,
          amplitude: 45,
          wavelength: 0.0022,
          speed: 1.2,
          color: 'rgba(0, 242, 254, ',
          alpha: 0.18,
          lineWidth: 2.2,
        },
        {
          baseY: height * 0.46,
          amplitude: 60,
          wavelength: 0.0018,
          speed: 0.9,
          color: 'rgba(56, 189, 248, ',
          alpha: 0.14,
          lineWidth: 1.8,
        },
        {
          baseY: height * 0.54,
          amplitude: 55,
          wavelength: 0.0025,
          speed: 1.4,
          color: 'rgba(129, 140, 248, ',
          alpha: 0.16,
          lineWidth: 2.0,
        },
        {
          baseY: height * 0.62,
          amplitude: 70,
          wavelength: 0.0015,
          speed: 0.7,
          color: 'rgba(46, 110, 254, ',
          alpha: 0.12,
          lineWidth: 1.6,
        },
      ];

      ribbons.forEach((ribbon, rIdx) => {
        ctx.beginPath();
        const startX = width * 0.2; // Start from left-center to avoid text collision
        ctx.moveTo(startX, ribbon.baseY);

        for (let x = startX; x <= width + 50; x += 15) {
          // Harmonic wave equation
          const wave1 = Math.sin(x * ribbon.wavelength + time * ribbon.speed) * ribbon.amplitude;
          const wave2 = Math.cos(x * ribbon.wavelength * 0.5 + time * ribbon.speed * 0.7) * (ribbon.amplitude * 0.4);

          // Subtle mouse attraction/repel on the ribbon
          let mouseDist = 0;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = (ribbon.baseY + wave1 + wave2) - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 220) {
              mouseDist = Math.sin((dist / 220) * Math.PI) * 28;
            }
          }

          const y = ribbon.baseY + wave1 + wave2 + mouseDist;
          ctx.lineTo(x, y);
        }

        // Gradient stroke for smooth fade-in from left to right
        const strokeGrad = ctx.createLinearGradient(startX, 0, width, 0);
        strokeGrad.addColorStop(0, `${ribbon.color}0)`);
        strokeGrad.addColorStop(0.35, `${ribbon.color}${ribbon.alpha * 0.4})`);
        strokeGrad.addColorStop(0.7, `${ribbon.color}${ribbon.alpha})`);
        strokeGrad.addColorStop(1, `${ribbon.color}${ribbon.alpha * 0.6})`);

        ctx.strokeStyle = strokeGrad;
        ctx.lineWidth = ribbon.lineWidth;
        ctx.shadowColor = rIdx % 2 === 0 ? '#00F2FE' : '#818CF8';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // -------------------------------------------------------------
      // 3. LAYER 3: Neural Constellation & Proximity Laser Connections
      // -------------------------------------------------------------
      const maxDistance = width < 768 ? 95 : 130;

      // Draw connecting laser filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      particles.forEach((p) => {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bounce / wrap
          if (p.x < width * 0.2) p.vx = Math.abs(p.vx);
          if (p.x > width) p.vx = -Math.abs(p.vx);
          if (p.y < 0) p.vy = Math.abs(p.vy);
          if (p.y > height) p.vy = -Math.abs(p.vy);
        }

        // Interactive mouse connection and flare
        let currentRadius = p.baseRadius;
        let currentAlpha = p.baseAlpha;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Draw direct laser beam to mouse
            const laserAlpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${laserAlpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();

            // Slightly expand node and brighten
            const force = (1 - dist / mouse.radius) * 1.5;
            currentRadius = p.baseRadius + force;
            currentAlpha = Math.min(1.0, p.baseAlpha + force * 0.4);
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = '#00F2FE';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default HeroAuroraCanvas;
