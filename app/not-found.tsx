'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

// Floating 3D Particle Component
const FloatingParticle = ({ 
  delay, 
  size, 
  color, 
  left, 
  top 
}: { 
  delay: number; 
  size: number; 
  color: string; 
  left: string; 
  top: string;
}) => (
  <div
    className="absolute rounded-full opacity-60 animate-particle-float"
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      left,
      top,
      animationDelay: `${delay}s`,
      filter: 'blur(1px)',
    }}
  />
);

// Orbiting Ring Component
const OrbitRing = ({ 
  size, 
  duration, 
  delay, 
  borderColor, 
  rotateX 
}: { 
  size: number; 
  duration: number; 
  delay: number; 
  borderColor: string; 
  rotateX: number;
}) => (
  <div
    className="absolute left-1/2 top-1/2 rounded-full border-2 animate-orbit"
    style={{
      width: size,
      height: size,
      marginLeft: -size / 2,
      marginTop: -size / 2,
      borderColor,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      transform: `rotateX(${rotateX}deg)`,
      opacity: 0.3,
    }}
  />
);

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !glowRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(94, 190, 235, 0.08), transparent 40%)`;
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0e17] flex items-center justify-center overflow-hidden"
    >
      {/* Interactive mouse glow */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Deep space background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17] via-[#111827] to-[#0a0e17]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(94,190,235,0.05)_0%,transparent_70%)]" />

      {/* Animated star field */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Floating 3D Particles */}
      <FloatingParticle delay={0} size={8} color="#5EBEEB" left="10%" top="20%" />
      <FloatingParticle delay={1.2} size={6} color="#FFB347" left="85%" top="15%" />
      <FloatingParticle delay={0.5} size={10} color="#FF6B6B" left="75%" top="70%" />
      <FloatingParticle delay={2} size={5} color="#5EBEEB" left="20%" top="75%" />
      <FloatingParticle delay={1.8} size={7} color="#FFB347" left="50%" top="10%" />
      <FloatingParticle delay={0.8} size={9} color="#FF6B6B" left="15%" top="55%" />
      <FloatingParticle delay={3} size={4} color="#5EBEEB" left="90%" top="45%" />
      <FloatingParticle delay={2.5} size={6} color="#FFE66D" left="60%" top="80%" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* 3D Animated 404 Scene */}
        <div className="relative mx-auto w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] mb-8 perspective-1000">
          {/* Orbiting Rings */}
          <OrbitRing size={320} duration={8} delay={0} borderColor="rgba(94,190,235,0.3)" rotateX={65} />
          <OrbitRing size={280} duration={12} delay={1} borderColor="rgba(255,179,71,0.2)" rotateX={75} />
          <OrbitRing size={240} duration={10} delay={0.5} borderColor="rgba(255,107,107,0.15)" rotateX={55} />

          {/* Glowing center orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#5EBEEB] shadow-[0_0_40px_rgba(94,190,235,0.6),0_0_80px_rgba(94,190,235,0.3)] animate-pulse" />

          {/* 3D Floating 404 Text */}
          <div className="absolute inset-0 flex items-center justify-center animate-float-3d">
            <div className="relative">
              {/* Shadow / depth layer */}
              <span
                className="absolute text-[100px] sm:text-[130px] md:text-[160px] font-black select-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(94,190,235,0.1)',
                  transform: 'translateZ(-50px) translateY(8px) translateX(8px)',
                  filter: 'blur(4px)',
                }}
              >
                404
              </span>
              {/* Middle layer */}
              <span
                className="absolute text-[100px] sm:text-[130px] md:text-[160px] font-black select-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(94,190,235,0.25)',
                  transform: 'translateZ(-25px) translateY(4px) translateX(4px)',
                  filter: 'blur(2px)',
                }}
              >
                404
              </span>
              {/* Front layer */}
              <span
                className="relative text-[100px] sm:text-[130px] md:text-[160px] font-black select-none"
                style={{
                  background: 'linear-gradient(135deg, #5EBEEB, #4AADE0, #FFB347)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 4s ease-in-out infinite',
                  textShadow: '0 0 40px rgba(94,190,235,0.3)',
                  filter: 'drop-shadow(0 0 20px rgba(94,190,235,0.2))',
                }}
              >
                404
              </span>
            </div>
          </div>

          {/* Floating 3D geometric shapes */}
          {/* Cube */}
          <div className="absolute top-6 right-4 sm:top-8 sm:right-8 animate-spin-slow-reverse">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#FFB347]/40 rounded-sm" 
              style={{ transform: 'rotateX(45deg) rotateZ(45deg)' }} 
            />
          </div>

          {/* Triangle */}
          <div className="absolute bottom-12 left-4 sm:bottom-16 sm:left-6 animate-spin-slow">
            <svg width="32" height="32" viewBox="0 0 32 32" className="sm:w-10 sm:h-10">
              <polygon
                points="16,4 28,28 4,28"
                fill="none"
                stroke="rgba(255,107,107,0.4)"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Diamond */}
          <div className="absolute top-16 left-2 sm:top-20 sm:left-4 animate-float-delayed">
            <svg width="24" height="24" viewBox="0 0 24 24" className="sm:w-8 sm:h-8">
              <polygon
                points="12,2 22,12 12,22 2,12"
                fill="none"
                stroke="rgba(94,190,235,0.35)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Pentagon */}
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 animate-float">
            <svg width="28" height="28" viewBox="0 0 28 28" className="sm:w-9 sm:h-9">
              <polygon
                points="14,2 26,10 22,24 6,24 2,10"
                fill="none"
                stroke="rgba(255,230,109,0.3)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Hexagon */}
          <div className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 animate-spin-slow">
            <svg width="22" height="22" viewBox="0 0 24 24" className="sm:w-7 sm:h-7">
              <polygon
                points="12,2 21,7 21,17 12,22 3,17 3,7"
                fill="none"
                stroke="rgba(94,190,235,0.25)"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Lost in <span className="text-[#5EBEEB]">Digital Space</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
            The page you&apos;re looking for has drifted into the void. 
            Let us guide you back to familiar territory.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/"
              className="group relative px-8 py-3.5 bg-[#5EBEEB] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(94,190,235,0.4)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4AADE0] to-[#5EBEEB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/services"
              className="group px-8 py-3.5 border-2 border-gray-600 text-gray-300 font-semibold rounded-full transition-all duration-300 hover:border-[#5EBEEB] hover:text-[#5EBEEB] hover:shadow-[0_0_20px_rgba(94,190,235,0.15)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-3.5 border-2 border-gray-600 text-gray-300 font-semibold rounded-full transition-all duration-300 hover:border-[#FFB347] hover:text-[#FFB347] hover:shadow-[0_0_20px_rgba(255,179,71,0.15)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Animated scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#5EBEEB]/20 to-transparent animate-scan-line" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e17] to-transparent pointer-events-none" />
    </div>
  );
}
