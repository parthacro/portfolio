import React from 'react';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

const HireIllustration = () => (
  <svg
    viewBox="0 0 480 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-60 sm:max-w-75 md:max-w-105 mx-auto h-auto"
  >
    {/* Background circle */}
    <circle cx="240" cy="200" r="170" fill="#EDF7FC" />
    <circle cx="240" cy="200" r="130" fill="#E0F4FC" opacity="0.5" />

    {/* Desk surface */}
    <rect x="80" y="310" rx="6" width="320" height="8" fill="#d1d5db" />

    {/* Monitor */}
    <rect x="130" y="120" rx="12" width="220" height="150" fill="#1e293b" />
    <rect x="140" y="130" rx="6" width="200" height="120" fill="#5EBEEB" />
    {/* Screen code lines */}
    <rect x="155" y="148" rx="2" width="80" height="6" fill="rgba(255,255,255,0.5)" />
    <rect x="155" y="162" rx="2" width="110" height="6" fill="rgba(255,255,255,0.35)" />
    <rect x="155" y="176" rx="2" width="60" height="6" fill="rgba(255,255,255,0.5)" />
    <rect x="155" y="190" rx="2" width="95" height="6" fill="rgba(255,255,255,0.35)" />
    <rect x="155" y="204" rx="2" width="70" height="6" fill="rgba(255,255,255,0.5)" />
    {/* Cursor blink */}
    <rect x="230" y="204" rx="1" width="3" height="8" fill="#ffffff" opacity="0.9" />
    {/* Check mark on screen */}
    <circle cx="305" cy="170" r="22" fill="rgba(255,255,255,0.2)" />
    <path d="M295 170l6 6 14-14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    {/* Monitor stand */}
    <rect x="220" y="270" rx="2" width="40" height="20" fill="#334155" />
    <rect x="200" y="288" rx="4" width="80" height="8" fill="#475569" />

    {/* Person - body */}
    <circle cx="240" cy="72" r="28" fill="#fbbf24" /> {/* Head */}
    <circle cx="230" cy="66" r="2.5" fill="#1e293b" /> {/* Left eye */}
    <circle cx="250" cy="66" r="2.5" fill="#1e293b" /> {/* Right eye */}
    <path d="M234 78 Q240 84 246 78" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" /> {/* Smile */}
    {/* Hair */}
    <path d="M212 64 Q215 38 240 36 Q265 38 268 64" fill="#1e293b" />

    {/* Shoulders & Torso */}
    <path d="M210 105 Q210 90 225 88 L255 88 Q270 90 270 105 L270 120 L210 120 Z" fill="#5EBEEB" />
    {/* Collar detail */}
    <path d="M232 88 L240 98 L248 88" stroke="#4AADE0" strokeWidth="1.5" fill="none" />

    {/* Left arm reaching to keyboard */}
    <path d="M210 105 Q190 120 185 155 Q184 165 195 162" stroke="#fbbf24" strokeWidth="12" fill="none" strokeLinecap="round" />
    {/* Right arm reaching to mouse */}
    <path d="M270 105 Q290 120 305 155 Q308 165 295 162" stroke="#fbbf24" strokeWidth="12" fill="none" strokeLinecap="round" />

    {/* Keyboard */}
    <rect x="160" y="295" rx="4" width="100" height="16" fill="#64748b" />
    <rect x="165" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="176" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="187" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="198" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="209" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="220" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="231" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="242" y="298" rx="1" width="8" height="4" fill="#94a3b8" />
    <rect x="165" y="304" rx="1" width="32" height="4" fill="#94a3b8" />
    <rect x="200" y="304" rx="1" width="32" height="4" fill="#94a3b8" />
    <rect x="235" y="304" rx="1" width="20" height="4" fill="#94a3b8" />

    {/* Mouse */}
    <rect x="285" y="296" rx="6" width="18" height="14" fill="#64748b" />
    <line x1="294" y1="297" x2="294" y2="303" stroke="#94a3b8" strokeWidth="1" />

    {/* Coffee cup */}
    <rect x="92" y="286" rx="3" width="22" height="24" fill="#5EBEEB" />
    <path d="M114 292 Q124 292 124 300 Q124 308 114 308" stroke="#5EBEEB" strokeWidth="2.5" fill="none" />
    {/* Steam */}
    <path d="M98 282 Q96 276 100 272" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M106 280 Q104 274 108 270" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />

    {/* Floating elements */}
    {/* React icon - top left */}
    <g transform="translate(72, 100)">
      <rect rx="10" width="40" height="40" fill="#5EBEEB" opacity="0.15" />
      <circle cx="20" cy="20" r="4" fill="#5EBEEB" />
      <ellipse cx="20" cy="20" rx="14" ry="5" stroke="#5EBEEB" strokeWidth="1.5" fill="none" />
      <ellipse cx="20" cy="20" rx="14" ry="5" stroke="#5EBEEB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="14" ry="5" stroke="#5EBEEB" strokeWidth="1.5" fill="none" transform="rotate(-60 20 20)" />
    </g>

    {/* Gear icon - top right */}
    <g transform="translate(370, 85)">
      <rect rx="10" width="40" height="40" fill="#4AADE0" opacity="0.15" />
      <circle cx="20" cy="20" r="7" stroke="#4AADE0" strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="3" fill="#4AADE0" />
      <line x1="20" y1="10" x2="20" y2="13" stroke="#4AADE0" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="27" x2="20" y2="30" stroke="#4AADE0" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="20" x2="13" y2="20" stroke="#4AADE0" strokeWidth="2" strokeLinecap="round" />
      <line x1="27" y1="20" x2="30" y2="20" stroke="#4AADE0" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Code brackets - bottom left */}
    <g transform="translate(60, 230)">
      <rect rx="10" width="40" height="40" fill="#5EBEEB" opacity="0.1" />
      <text x="20" y="28" textAnchor="middle" fill="#5EBEEB" fontSize="18" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
    </g>

    {/* Lightning bolt - bottom right */}
    <g transform="translate(380, 200)">
      <rect rx="10" width="40" height="40" fill="#fbbf24" opacity="0.15" />
      <path d="M24 12 L18 22 L22 22 L16 32 L28 20 L23 20 Z" fill="#fbbf24" />
    </g>

    {/* Small decorative dots */}
    <circle cx="100" cy="180" r="4" fill="#5EBEEB" opacity="0.2" />
    <circle cx="390" cy="160" r="5" fill="#4AADE0" opacity="0.15" />
    <circle cx="120" cy="300" r="3" fill="#5EBEEB" opacity="0.2" />
    <circle cx="370" cy="280" r="4" fill="#4AADE0" opacity="0.15" />
  </svg>
);

export const HireHero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
      {/* Content first on mobile */}
      <div className="order-first md:order-last space-y-4 sm:space-y-6">
        <ScrollReveal variant="fadeRight" duration={0.7}>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
            Hire Expert Developers
            <br />
            <span className="text-[#5EBEEB]">For Your Next Project</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Looking for skilled developers to bring your ideas to life? We&apos;re here to help you build amazing digital experiences.
          </p>
        </div>
        </ScrollReveal>
        
        {/* Features */}
        <ScrollReveal variant="fadeRight" delay={0.15} duration={0.7}>
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">5+ Years Experience</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">Modern Technologies</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">Flexible Engagement</p>
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* Illustration second on mobile */}
      <ScrollReveal variant="fadeLeft" delay={0.1} duration={0.8} className="order-last md:order-first flex items-center justify-center">
        <HireIllustration />
      </ScrollReveal>
    </div>
  );
};
