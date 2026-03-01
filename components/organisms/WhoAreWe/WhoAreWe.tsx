import React from 'react';
import { AboutFeature } from '@/components/molecules/AboutFeature';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

const MegaphoneIcon = () => (
  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className="w-10 h-10 md:w-14 md:h-14 text-gray-800"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" 
      />
    </svg>
  </div>
);

const TeamCollage = () => (
  <div className="relative w-full flex items-center justify-center py-2 sm:py-4">
    <svg viewBox="0 0 500 400" fill="none" className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] h-auto">
      {/* Background shape */}
      <ellipse cx="250" cy="210" rx="200" ry="170" fill="#EDF7FC" />
      
      {/* Desk */}
      <rect x="100" y="260" rx="8" width="300" height="12" fill="#5EBEEB" opacity="0.2" />
      <rect x="150" y="272" rx="4" width="8" height="60" fill="#5EBEEB" opacity="0.15" />
      <rect x="342" y="272" rx="4" width="8" height="60" fill="#5EBEEB" opacity="0.15" />
      
      {/* Laptop */}
      <rect x="180" y="225" rx="6" width="140" height="36" fill="#2D3748" />
      <rect x="184" y="228" rx="4" width="132" height="28" fill="#4A5568" />
      {/* Screen content - code lines */}
      <rect x="192" y="234" width="40" height="3" rx="1.5" fill="#5EBEEB" opacity="0.8" />
      <rect x="236" y="234" width="25" height="3" rx="1.5" fill="#68D391" opacity="0.6" />
      <rect x="192" y="240" width="55" height="3" rx="1.5" fill="#5EBEEB" opacity="0.5" />
      <rect x="192" y="246" width="30" height="3" rx="1.5" fill="#FC8181" opacity="0.5" />
      <rect x="226" y="246" width="45" height="3" rx="1.5" fill="#5EBEEB" opacity="0.4" />
      {/* Laptop base */}
      <path d="M170 261 H330 L325 265 H175 Z" fill="#4A5568" />
      
      {/* Center Person (main developer) */}
      <circle cx="250" cy="175" r="28" fill="#5EBEEB" opacity="0.15" />
      <circle cx="250" cy="170" r="18" fill="#FED7AA" />
      <path d="M250 188 C235 188 222 200 222 215 L222 225 L278 225 L278 215 C278 200 265 188 250 188Z" fill="#5EBEEB" />
      {/* Shirt detail */}
      <path d="M243 188 L250 198 L257 188" stroke="#4AADE0" strokeWidth="1.5" fill="none" />
      
      {/* Left Person */}
      <circle cx="145" cy="195" r="16" fill="#FED7AA" />
      <path d="M145 211 C133 211 123 220 123 232 L123 250 L167 250 L167 232 C167 220 157 211 145 211Z" fill="#2D3748" />
      {/* Left person arm reaching to laptop */}
      <path d="M167 235 Q175 230 180 228" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
      
      {/* Right Person */}
      <circle cx="355" cy="195" r="16" fill="#FED7AA" />
      <path d="M355 211 C343 211 333 220 333 232 L333 250 L377 250 L377 232 C377 220 367 211 355 211Z" fill="#4AADE0" />
      {/* Right person arm */}
      <path d="M333 235 Q325 230 320 228" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
      
      {/* Floating elements - representing tech/ideas */}
      {/* Gear icon */}
      <g transform="translate(380, 120)">
        <circle cx="0" cy="0" r="14" fill="#5EBEEB" opacity="0.12" />
        <path d="M0-8 L2-3 L7-5 L5 0 L7 5 L2 3 L0 8 L-2 3 L-7 5 L-5 0 L-7-5 L-2-3Z" fill="#5EBEEB" opacity="0.6" />
        <circle cx="0" cy="0" r="3" fill="white" />
      </g>
      
      {/* Chat bubble */}
      <g transform="translate(105, 130)">
        <rect x="-18" y="-12" rx="8" width="36" height="24" fill="#5EBEEB" opacity="0.15" />
        <circle cx="-6" cy="0" r="2.5" fill="#5EBEEB" opacity="0.5" />
        <circle cx="0" cy="0" r="2.5" fill="#5EBEEB" opacity="0.5" />
        <circle cx="6" cy="0" r="2.5" fill="#5EBEEB" opacity="0.5" />
      </g>
      
      {/* Light bulb (idea) */}
      <g transform="translate(310, 100)">
        <circle cx="0" cy="0" r="12" fill="#FFB347" opacity="0.15" />
        <path d="M0-6 C-4-6 -6-3 -6 0 C-6 3 -3 5 -3 7 L3 7 C3 5 6 3 6 0 C6-3 4-6 0-6Z" fill="#FFB347" opacity="0.5" />
        <rect x="-2" y="7" rx="1" width="4" height="2" fill="#FFB347" opacity="0.4" />
      </g>
      
      {/* Code bracket */}
      <g transform="translate(155, 110)">
        <text x="0" y="0" fontSize="18" fill="#5EBEEB" opacity="0.4" fontFamily="monospace" textAnchor="middle">&lt;/&gt;</text>
      </g>
      
      {/* Hexagon (brand element) */}
      <g transform="translate(400, 180)">
        <polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="#5EBEEB" opacity="0.12" />
        <polygon points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" fill="#5EBEEB" opacity="0.25" />
      </g>
      
      {/* Small decorative dots */}
      <circle cx="90" cy="170" r="3" fill="#5EBEEB" opacity="0.2" />
      <circle cx="420" cy="150" r="2" fill="#5EBEEB" opacity="0.15" />
      <circle cx="200" cy="100" r="2.5" fill="#5EBEEB" opacity="0.2" />
      <circle cx="340" cy="85" r="2" fill="#5EBEEB" opacity="0.15" />
      <circle cx="130" cy="260" r="2" fill="#5EBEEB" opacity="0.1" />
      <circle cx="380" cy="270" r="2.5" fill="#5EBEEB" opacity="0.1" />
      
      {/* Connection lines (teamwork) */}
      <path d="M165 210 Q200 190 230 190" stroke="#5EBEEB" strokeWidth="1" strokeDasharray="4 3" opacity="0.25" />
      <path d="M335 210 Q300 190 270 190" stroke="#5EBEEB" strokeWidth="1" strokeDasharray="4 3" opacity="0.25" />
    </svg>
  </div>
);

export const WhoAreWe: React.FC = () => {
  const features = [
    'High quality software development services with 9+ years of expertise',
    'Focused on client specific requirements with 100+ projects delivered',
    'Professional and on-time delivery for startups & enterprises',
    'Affordable pricing and reliable solutions for businesses in Indore & worldwide'
  ];

  return (
    <section className="pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" aria-label="About Hexaloop">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#FFB347]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#5EBEEB]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1900px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="px-2 sm:px-0">
            {/* Icon and Heading */}
            <ScrollReveal variant="fadeLeft" duration={0.7}>
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <MegaphoneIcon />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Who Are We?
                </h2>
              </div>
            </ScrollReveal>

            {/* Main Description */}
            <ScrollReveal variant="fadeLeft" delay={0.1} duration={0.7}>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                Hexaloop is a <strong>leading IT company in Indore</strong>, Madhya Pradesh, with <strong>9+ years of industry experience</strong> and a proven track record of delivering <strong>100+ successful projects</strong> for <strong>100+ satisfied clients</strong> across India and globally.
              </p>
            </ScrollReveal>

            {/* Secondary Description */}
            <ScrollReveal variant="fadeLeft" delay={0.2} duration={0.7}>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                We specialize in website design & development, mobile app development, SEO & digital marketing, custom software development, cloud solutions, agentic AI solutions, and IT consulting. Our expert team serves startups, SMEs, and enterprises in IT, education, healthcare, retail, manufacturing, e-commerce, fintech, and more — delivering affordable, scalable, and innovative technology solutions from Indore to the world.
              </p>
            </ScrollReveal>

            {/* Feature List */}
            <ScrollReveal variant="fadeUp" delay={0.3} duration={0.7}>
              <AboutFeature features={features} />
            </ScrollReveal>
          </div>

          {/* Right Image Collage */}
          <ScrollReveal variant="fadeRight" delay={0.2} duration={0.8} className="px-4 sm:px-0 order-last">
            <TeamCollage />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
