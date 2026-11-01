import React, { useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface HoloTiltCardProps {
  children: React.ReactNode;
  className?: string;
  foilColor?: 'cyan' | 'emerald' | 'gold';
}

export function HoloTiltCard({
  children,
  className = '',
  foilColor = 'cyan',
}: HoloTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const springConfig = { damping: 20, stiffness: 120 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    rotateX.set(-normY * 12);
    rotateY.set(normX * 12);

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const foilGradients = {
    cyan: 'from-cyan-400/30 via-blue-500/20 to-indigo-500/30',
    emerald: 'from-emerald-400/30 via-teal-500/20 to-blue-500/30',
    gold: 'from-amber-400/30 via-yellow-500/20 to-orange-500/30',
  };

  return (
    <div
      style={{ perspective: '1200px' }}
      className="relative w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className={`relative rounded-3xl transition-shadow duration-300 ${className} ${
          isHovered ? 'shadow-[0_25px_60px_rgba(0,0,0,0.12)]' : 'shadow-[0_15px_40px_rgba(0,0,0,0.04)]'
        }`}
      >
        {/* Holographic Specular Glare Layer */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none z-30 transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle 380px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 80%)`,
              mixBlendMode: 'overlay',
            }}
          />
        )}

        {/* Holographic Edge Foil Layer */}
        <div
          className={`absolute -inset-[1px] rounded-3xl pointer-events-none z-10 transition-opacity duration-500 bg-gradient-to-tr ${
            foilGradients[foilColor]
          } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Card Content Surface */}
        <div className="relative z-20 h-full w-full rounded-3xl overflow-hidden bg-surface border border-white/[0.08]">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default HoloTiltCard;
