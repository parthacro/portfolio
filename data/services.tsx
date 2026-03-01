import React from 'react';
import { Service } from '@/types/service';

// Icon Components
export const WebDesignIcon = () => (
  <div className="relative w-32 h-24 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-64 lg:h-48">
    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-8 md:left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF8C6B] rounded-xl sm:rounded-2xl w-24 h-16 sm:w-36 sm:h-24 md:w-48 md:h-32 shadow-xl p-1.5 sm:p-2 md:p-3">
      <div className="bg-[#FFB347] h-3 sm:h-4 md:h-6 rounded-t-lg mb-1 sm:mb-1.5 md:mb-2 flex items-center px-1 sm:px-1.5 md:px-2 gap-0.5 sm:gap-0.5 md:gap-1">
        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
      </div>
      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
        <div className="h-1 sm:h-1.5 md:h-2 bg-white/50 rounded w-3/4"></div>
        <div className="h-1 sm:h-1.5 md:h-2 bg-white/50 rounded w-1/2"></div>
      </div>
      <div className="absolute -bottom-1 -left-1 sm:-bottom-1.5 sm:-left-1.5 md:-bottom-2 md:-left-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#FF6B6B] rounded-lg flex items-center justify-center text-white text-[8px] sm:text-[10px] md:text-xs">▶</div>
    </div>
    <div className="absolute top-2 right-4 sm:top-3 sm:right-6 md:top-4 md:right-8 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-[#FFB347] rounded-lg transform rotate-12 animate-float"></div>
    <div className="absolute top-0 left-6 sm:left-8 md:left-12 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#FF6B6B] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 w-4 h-6 sm:w-6 sm:h-8 md:w-8 md:h-12 bg-gray-800 rounded-full"></div>
  </div>
);

export const MobileAppIcon = () => (
  <div className="relative w-32 h-24 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-64 lg:h-48">
    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* Mobile Phone Frame */}
      <div className="bg-gray-900 rounded-2xl sm:rounded-3xl w-16 h-28 sm:w-24 sm:h-42 md:w-32 md:h-56 shadow-2xl p-1 sm:p-1.5 md:p-2 relative">
        {/* Screen */}
        <div className="bg-white rounded-xl sm:rounded-2xl h-full w-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5EBEEB] to-[#3D9BD6]"></div>
          {/* Mobile App Icon */}
          <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 text-white z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        </div>
        {/* Home Button */}
        <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 md:w-8 h-0.5 sm:h-0.5 md:h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
    {/* Floating Elements */}
    <div className="absolute top-1 left-1 sm:top-3 sm:left-3 md:top-6 md:left-6 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-[#FFB347] rounded-lg animate-float flex items-center justify-center">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    </div>
    <div className="absolute top-0 right-6 sm:top-1 sm:right-8 md:top-2 md:right-12 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-[#FF6B6B] rounded-lg animate-float-delayed flex items-center justify-center">
      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    </div>
    <div className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 md:bottom-6 md:right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-[#5EBEEB] rounded-full animate-float flex items-center justify-center shadow-lg">
      <svg className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    </div>
  </div>
);

export const GraphicDesignIcon = () => (
  <div className="relative w-32 h-24 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-64 lg:h-48">
    <div className="absolute top-2 left-6 sm:top-4 sm:left-8 md:top-8 md:left-12 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-2 right-6 sm:bottom-4 sm:right-8 md:bottom-8 md:right-12 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2 md:gap-4">
      <div className="text-[#FF8C6B] text-3xl sm:text-5xl md:text-7xl font-black transform -rotate-12 relative">
        3
        <div className="absolute inset-0 text-[#FFB347] transform translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1 -z-10">3</div>
      </div>
      <div className="text-[#FF8C6B] text-3xl sm:text-5xl md:text-7xl font-black transform rotate-6 relative">
        D
        <div className="absolute inset-0 text-[#FFB347] transform translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1 -z-10">D</div>
      </div>
    </div>
    <div className="absolute top-2 right-4 sm:top-3 sm:right-6 md:top-4 md:right-8 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-[#FF6B6B] rounded-full animate-float"></div>
    <div className="absolute top-4 left-2 sm:top-6 sm:left-3 md:top-8 md:left-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#FFB347] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-3 h-5 sm:w-4 sm:h-7 md:w-6 md:h-10 bg-gray-800 rounded-full"></div>
    <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 md:bottom-8 md:left-12 w-3 h-5 sm:w-4 sm:h-7 md:w-6 md:h-10 bg-gray-800 rounded-full"></div>
    <div className="absolute bottom-1 left-4 sm:bottom-1.5 sm:left-6 md:bottom-2 md:left-8 bg-gray-800 w-8 h-6 sm:w-12 sm:h-9 md:w-16 md:h-12 rounded shadow-lg"></div>
    <div className="absolute bottom-1 right-4 sm:bottom-1.5 sm:right-6 md:bottom-2 md:right-8 bg-gray-800 w-10 h-7 sm:w-15 sm:h-10 md:w-20 md:h-14 rounded shadow-lg"></div>
  </div>
);

export const SEOIcon = () => (
  <div className="relative w-32 h-24 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-64 lg:h-48">
    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-8 md:left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#FFB347] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white rounded-lg sm:rounded-xl w-22 h-16 sm:w-32 sm:h-24 md:w-44 md:h-32 shadow-xl p-2 sm:p-3 md:p-4 border-2 sm:border-3 md:border-4 border-[#FF8C6B]">
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-1.5 sm:mb-2 md:mb-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[#FF6B6B] rounded-full"></div>
          <div className="h-1 sm:h-1.5 md:h-2 bg-gray-300 rounded flex-1"></div>
        </div>
        <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
          <div className="h-1 sm:h-1.5 md:h-2 bg-[#FFB347] rounded w-full"></div>
          <div className="h-1 sm:h-1.5 md:h-2 bg-[#5EBEEB] rounded w-3/4"></div>
          <div className="h-1 sm:h-1.5 md:h-2 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
    <div className="absolute top-1 right-2 sm:top-1.5 sm:right-3 md:top-2 md:right-4 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-[#FF6B6B] rounded-full animate-float"></div>
    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#FFB347] rounded-lg animate-float-delayed"></div>
  </div>
);

export const WebAppIcon = () => (
  <div className="relative w-32 h-24 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-64 lg:h-48">
    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[#FFB347] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-gray-800 rounded-xl sm:rounded-2xl w-24 h-16 sm:w-36 sm:h-24 md:w-48 md:h-32 shadow-xl p-1.5 sm:p-2 md:p-3">
        <div className="flex gap-0.5 sm:gap-0.5 md:gap-1 mb-1 sm:mb-1.5 md:mb-2">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#FF6B6B] rounded-full"></div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#FFB347] rounded-full"></div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#5EBEEB] rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 md:gap-2">
          <div className="bg-[#FF8C6B] rounded h-7 sm:h-10 md:h-14"></div>
          <div className="bg-[#FFB347] rounded h-7 sm:h-10 md:h-14"></div>
          <div className="bg-[#5EBEEB] rounded h-7 sm:h-10 md:h-14"></div>
        </div>
      </div>
    </div>
    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-[#FF6B6B] rounded-lg animate-float"></div>
    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#5EBEEB] rounded-full animate-float-delayed"></div>
  </div>
);

export const CMSIcon = () => (
  <div className="relative w-32 h-24 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-64 lg:h-48">
    <div className="absolute top-2 left-6 sm:top-4 sm:left-8 md:top-8 md:left-12 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#FFB347] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white rounded-lg sm:rounded-xl w-22 h-16 sm:w-32 sm:h-24 md:w-44 md:h-32 shadow-xl p-1.5 sm:p-2 md:p-3 border-1 sm:border-1.5 md:border-2 border-gray-200">
        <div className="flex justify-between items-center mb-1 sm:mb-1.5 md:mb-2">
          <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#5EBEEB] rounded flex items-center justify-center text-white font-bold text-[8px] sm:text-[10px] md:text-xs">W</div>
          <div className="flex gap-0.5 sm:gap-0.5 md:gap-1">
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#FFB347] rounded"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#FF8C6B] rounded"></div>
          </div>
        </div>
        <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
          <div className="h-1 sm:h-1.5 md:h-2 bg-gray-200 rounded"></div>
          <div className="h-1 sm:h-1.5 md:h-2 bg-gray-200 rounded w-2/3"></div>
          <div className="flex gap-1 sm:gap-1.5 md:gap-2 mt-1.5 sm:mt-2 md:mt-3">
            <div className="h-4 sm:h-6 md:h-8 bg-[#5EBEEB] rounded flex-1"></div>
            <div className="h-4 sm:h-6 md:h-8 bg-[#FF8C6B] rounded flex-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-1 right-1 sm:top-3 sm:right-3 md:top-6 md:right-6 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-[#FFB347] rounded-full animate-float"></div>
    <div className="absolute bottom-1 left-1 sm:bottom-3 sm:left-3 md:bottom-6 md:left-6 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[#FF6B6B] rounded-lg animate-float-delayed"></div>
  </div>
);

// Map icon names to components
export const iconComponents: Record<string, React.ComponentType> = {
  WebDesignIcon,
  MobileAppIcon,
  GraphicDesignIcon,
  SEOIcon,
  WebAppIcon,
  CMSIcon,
};

// Services Data
export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'web-design',
    title: 'Website Design',
    shortDescription: 'We offers creative, unique, economic, and trendy Website Design. We provide exclusive designs of your ideas with multiple options to choose from.',
    fullDescription: 'Transform your digital presence with our cutting-edge website design services. We combine creativity, user experience, and modern design trends to create websites that not only look stunning but also drive results. Our team of expert designers works closely with you to understand your brand, target audience, and business goals to deliver a website that perfectly represents your vision.',
    icon: 'WebDesignIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Corporate & Business Website',
        description: 'Professional websites that establish your brand presence, showcase your services, and build credibility with potential clients.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        title: 'E-Commerce Website Development',
        description: 'Complete online stores with secure payment gateways, inventory management, and seamless shopping experiences.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        title: 'Landing Page & Microsites',
        description: 'High-converting single-page sites designed to capture leads, promote campaigns, and drive specific actions.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
        title: 'Web Application Development',
        description: 'Custom web applications with advanced functionality, user authentication, databases, and complex workflows.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
        title: 'Website Redesign & Migration',
        description: 'Modernize outdated websites with fresh designs, improved UX, and seamless migration to new platforms without losing data or SEO rankings.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Progressive Web Apps (PWAs)',
        description: 'App-like web experiences that work offline, send push notifications, and can be installed on devices for enhanced engagement.'
      }
    ],
    features: [
      'Responsive Design - Mobile, Tablet, and Desktop Optimized',
      'Custom UI/UX Design tailored to your brand',
      'Modern and Clean Design Aesthetics',
      'Fast Loading and Performance Optimized',
      'Cross-browser Compatibility',
      'Accessibility Standards Compliant (WCAG)',
      'Interactive Animations and Micro-interactions',
      'Multiple Design Revisions Included'
    ],
    benefits: [
      'Stand out from competitors with unique designs',
      'Increase user engagement and conversion rates',
      'Build trust and credibility with professional design',
      'Improve brand recognition and awareness',
      'Reduce bounce rates with intuitive navigation',
      'Future-proof design that scales with your business'
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'HTML5/CSS3',
      'Tailwind CSS',
      'React',
      'Next.js',
      'Framer Motion'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Research',
        description: 'We analyze your business, competitors, and target audience to understand your unique requirements and create a strategic design approach.'
      },
      {
        step: 2,
        title: 'Wireframing & Prototyping',
        description: 'We create detailed wireframes and interactive prototypes to visualize the structure and user flow before moving to the design phase.'
      },
      {
        step: 3,
        title: 'Visual Design',
        description: 'Our designers craft beautiful, on-brand visual designs with multiple options for you to choose from, ensuring every pixel is perfect.'
      },
      {
        step: 4,
        title: 'Development & Testing',
        description: 'We transform approved designs into fully functional, responsive websites with rigorous testing across all devices and browsers.'
      },
      {
        step: 5,
        title: 'Launch & Support',
        description: 'We handle the complete launch process and provide ongoing support to ensure your website continues to perform optimally.'
      }
    ],
    pricing: {
      starting: '$999',
      note: 'Pricing varies based on project complexity, number of pages, and custom features required.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        price: 9,
        period: 'mo',
        features: [
          { text: '1 Website Design Project', included: true },
          { text: 'Up to 5 Pages', included: true },
          { text: 'Responsive Design', included: true },
          { text: 'Basic SEO Setup', included: true },
          { text: 'Contact Form Integration', included: true },
          { text: '2 Design Revisions', included: true },
          { text: 'Custom Animations', included: false },
          { text: 'Priority Support', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
        price: 19,
        period: 'mo',
        features: [
          { text: 'Up to 3 Design Projects', included: true },
          { text: 'Up to 15 Pages', included: true },
          { text: 'Responsive Design', included: true },
          { text: 'Advanced SEO Optimization', included: true },
          { text: 'Custom Animations', included: true },
          { text: '5 Design Revisions', included: true },
          { text: 'CMS Integration', included: true },
          { text: 'Priority Email Support', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        price: 49,
        period: 'mo',
        features: [
          { text: 'Unlimited Projects', included: true },
          { text: 'Unlimited Pages', included: true },
          { text: 'Premium Responsive Design', included: true },
          { text: 'Enterprise SEO Package', included: true },
          { text: 'Advanced Animations & Effects', included: true },
          { text: 'Unlimited Revisions', included: true },
          { text: 'Custom CMS Development', included: true },
          { text: '24/7 Dedicated Support', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does it take to design a website?',
        answer: 'Typically, a standard website design takes 2-4 weeks depending on the complexity and number of pages. Custom enterprise solutions may take 6-8 weeks or more.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All our designs are fully responsive and optimized for mobile, tablet, and desktop devices to ensure a seamless experience across all screen sizes.'
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Yes, we specialize in website redesigns. We can refresh your existing site with a modern look while maintaining your brand identity and improving user experience.'
      },
      {
        question: 'Do you provide website maintenance after launch?',
        answer: 'Yes, we offer ongoing maintenance and support packages to keep your website updated, secure, and performing at its best.'
      },
      {
        question: 'Will I be able to update the website myself?',
        answer: 'Yes, we can integrate a user-friendly CMS (Content Management System) that allows you to easily update content, images, and other elements without technical knowledge.'
      }
    ],
    metaTitle: 'Professional Website Design & Development Services in Indore | Hexaloop',
    metaDescription: 'Best website design company in Indore. Custom website development for businesses, startups & enterprises. Responsive web design, ecommerce websites, website redesign. ₹25,000-₹2,50,000. 9+ years experience, 100+ projects. Affordable website design in Indore.',
    metaKeywords: ['professional website design services', 'custom website development for businesses', 'website design company in Indore', 'best web developers in Indore', 'best web development company in Indore', 'ecommerce website developer Indore', 'website development company near me', 'affordable website design in Indore', 'website redesign company Indore', 'top 10 web design companies in Indore', 'responsive website design for startups', 'enterprise website solutions worldwide', 'startup-friendly web design in Indore', 'Indore custom website development services', 'IT company Indore for website solutions', 'hire professional website designers for startups', 'custom websites for small businesses in Indore', 'how much does website design cost in Indore', 'affordable responsive websites for Indian businesses', 'Indore-based business website design experts']
  },
  {
    id: '2',
    slug: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    shortDescription: 'We offers affordable SEO services which help our clients to gain online presence. Digital marketing & social media increase your brand online presence.',
    fullDescription: 'Dominate search engine rankings and expand your online reach with our comprehensive SEO and digital marketing services. We use proven strategies and cutting-edge techniques to increase your visibility, drive qualified traffic, and boost conversions. Our data-driven approach ensures every marketing dollar delivers measurable results.',
    icon: 'SEOIcon',
    features: [
      'Comprehensive SEO Audit and Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Implementation',
      'Link Building and Off-Page SEO',
      'Local SEO for Local Business Visibility',
      'Content Strategy and Marketing',
      'Social Media Marketing (SMM)',
      'Pay-Per-Click (PPC) Campaign Management',
      'Email Marketing Campaigns',
      'Analytics and Performance Tracking',
      'Competitor Analysis',
      'Monthly Reporting and Insights'
    ],
    benefits: [
      'Increase organic traffic and visibility',
      'Improve search engine rankings for target keywords',
      'Generate high-quality leads and conversions',
      'Build brand authority and credibility',
      'Maximize ROI on marketing spend',
      'Stay ahead of competitors in your industry',
      'Long-term sustainable growth'
    ],
    technologies: [
      'Google Analytics',
      'Google Search Console',
      'SEMrush',
      'Ahrefs',
      'Moz',
      'Google Ads',
      'Facebook Ads Manager',
      'Mailchimp',
      'HubSpot'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Audit & Strategy',
        description: 'We conduct a comprehensive audit of your current online presence and develop a customized SEO and marketing strategy aligned with your business goals.'
      },
      {
        step: 2,
        title: 'Optimization',
        description: 'We optimize your website for search engines, improve technical aspects, create quality content, and implement on-page and off-page SEO best practices.'
      },
      {
        step: 3,
        title: 'Campaign Execution',
        description: 'We launch and manage targeted digital marketing campaigns across multiple channels including search, social media, and email marketing.'
      },
      {
        step: 4,
        title: 'Monitor & Analyze',
        description: 'We continuously monitor campaign performance, track key metrics, and analyze data to identify opportunities for improvement.'
      },
      {
        step: 5,
        title: 'Optimize & Scale',
        description: 'Based on insights, we refine strategies, optimize campaigns, and scale successful tactics to maximize your ROI and business growth.'
      }
    ],
    pricing: {
      starting: '$499/month',
      note: 'Pricing varies based on the scope of services, competition level, and campaign objectives. Custom packages available.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        price: 15,
        period: 'mo',
        features: [
          { text: 'Basic SEO Audit', included: true },
          { text: 'Up to 10 Keywords Optimization', included: true },
          { text: 'On-Page SEO', included: true },
          { text: 'Monthly Reports', included: true },
          { text: 'Social Media Setup', included: true },
          { text: 'Google My Business Setup', included: true },
          { text: 'Link Building Campaign', included: false },
          { text: 'PPC Management', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        price: 29,
        period: 'mo',
        features: [
          { text: 'Comprehensive SEO Audit', included: true },
          { text: 'Up to 25 Keywords Optimization', included: true },
          { text: 'On-Page & Technical SEO', included: true },
          { text: 'Monthly Link Building (15 links)', included: true },
          { text: 'Social Media Management (3 platforms)', included: true },
          { text: 'Content Marketing (2 posts/month)', included: true },
          { text: 'Weekly Performance Reports', included: true },
          { text: 'Email Marketing Setup', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        price: 59,
        period: 'mo',
        features: [
          { text: 'Enterprise SEO Strategy', included: true },
          { text: 'Unlimited Keywords Optimization', included: true },
          { text: 'Full Technical SEO Implementation', included: true },
          { text: 'Aggressive Link Building (40+ links/month)', included: true },
          { text: 'Multi-Platform Social Media Management', included: true },
          { text: 'Content Marketing (8 posts/month)', included: true },
          { text: 'PPC Campaign Management ($2000 ad spend)', included: true },
          { text: 'Dedicated Account Manager & 24/7 Support', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO is a long-term strategy. You can typically expect to see initial improvements in 3-6 months, with significant results in 6-12 months. Timeline varies based on competition and current website status.'
      },
      {
        question: 'What is the difference between SEO and PPC?',
        answer: 'SEO focuses on organic search rankings through optimization, while PPC (Pay-Per-Click) involves paid advertising. SEO provides long-term sustainable results, while PPC delivers immediate visibility. We recommend a balanced approach for best results.'
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer: 'While we cannot guarantee specific rankings (no one can ethically), we use proven strategies that have consistently helped our clients achieve top rankings. We focus on sustainable, white-hat techniques that deliver lasting results.'
      },
      {
        question: 'What industries do you specialize in?',
        answer: 'We have experience across various industries including e-commerce, healthcare, real estate, technology, hospitality, and professional services. Our strategies are customized to each industry\'s unique needs.'
      },
      {
        question: 'Will I receive reports on my SEO performance?',
        answer: 'Yes, we provide detailed monthly reports showing your rankings, traffic, conversions, and other key metrics. We also schedule regular calls to discuss progress and strategy adjustments.'
      }
    ],
    metaTitle: 'SEO & Digital Marketing Agency in Indore | Best SEO Company Indore | Hexaloop',
    metaDescription: 'Top SEO company in Indore & digital marketing agency. Expert SEO services, Google Ads, social media marketing, PPC management & lead generation. ₹15,000-₹1,50,000/month. Transparent reporting & measurable results. Local SEO for Indore businesses.',
    metaKeywords: ['SEO services for startups & enterprises', 'digital marketing agency worldwide', 'SEO company in Indore', 'digital marketing services Indore', 'digital marketing agency in Indore', 'Indore SEO experts for startups', 'local SEO for Indore companies', 'Google Ads agency Indore', 'best digital marketing company Indore', 'Facebook advertising Indore', 'Instagram marketing Indore', 'SEO freelancer Indore', 'lead generation company Indore', 'hire digital marketing experts for small business growth', 'affordable SEO services for Indore startups', 'social media marketing for Indore enterprises', 'best digital marketing company for startups in India', 'SEO company for doctor clinic in Indore', 'how much does SEO cost in Indore', 'amazon product listing optimization India']
  },
  {
    id: '3',
    slug: 'mobile-app-development',
    title: 'Mobile Application',
    shortDescription: 'We develop mobile apps which works on both iOS & Android platforms. We are expertise in building all type of custom apps for startup to large businesses.',
    fullDescription: 'Bring your ideas to life with our professional mobile app development services. We create high-performance, user-friendly mobile applications for iOS and Android that engage users and drive business growth. From concept to launch, our experienced developers ensure your app stands out in the crowded app marketplace.',
    icon: 'MobileAppIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Android App Development',
        description: 'Native Android applications built with Kotlin and Java, optimized for performance and seamless integration with Google services.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        title: 'iOS App Development',
        description: 'Native iOS applications crafted with Swift, delivering exceptional user experience and following Apple\'s design guidelines.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Cross-Platform Development',
        description: 'Build once, deploy everywhere. Cost-effective mobile apps using React Native and Flutter that work seamlessly on both iOS and Android.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: 'MVP Development for Startups',
        description: 'Rapid development of Minimum Viable Products to validate your ideas, attract investors, and get to market quickly with essential features.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        title: 'Enterprise Mobile Applications',
        description: 'Scalable, secure enterprise-grade mobile solutions with advanced features, integrations, and support for large-scale deployments.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'App Maintenance & Support',
        description: 'Ongoing maintenance, bug fixes, security updates, OS compatibility updates, and feature enhancements to keep your app running smoothly.'
      }
    ],
    features: [
      'Native iOS Development (Swift)',
      'Native Android Development (Kotlin/Java)',
      'Cross-Platform Development (React Native, Flutter)',
      'Custom App Design and Development',
      'API Integration and Backend Development',
      'App Store Optimization (ASO)',
      'Push Notifications Implementation',
      'In-App Purchases and Payment Integration',
      'Social Media Integration',
      'Cloud Storage Integration',
      'Real-time Features (Chat, Location, etc.)',
      'App Testing and Quality Assurance',
      'App Deployment and Launch Support'
    ],
    benefits: [
      'Reach customers on their preferred mobile devices',
      'Increase customer engagement and loyalty',
      'Streamline business operations with custom solutions',
      'Generate additional revenue streams',
      'Gain competitive advantage in your market',
      'Access valuable user data and insights',
      'Provide 24/7 accessibility to your services'
    ],
    technologies: [
      'Swift',
      'Kotlin',
      'React Native',
      'Flutter',
      'Firebase',
      'AWS Amplify',
      'GraphQL',
      'REST APIs',
      'MongoDB',
      'PostgreSQL'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Concept & Planning',
        description: 'We work with you to define your app concept, target audience, features, and create a detailed project roadmap with timelines and milestones.'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Our designers create intuitive, beautiful app interfaces and interactive prototypes that showcase the user experience and visual design.'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Our developers build your app using agile methodology, with regular updates and the ability to test features throughout the development process.'
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'We conduct rigorous testing across devices, screen sizes, and operating systems to ensure your app is bug-free and performs flawlessly.'
      },
      {
        step: 5,
        title: 'Launch & Maintenance',
        description: 'We handle app store submission, launch strategy, and provide ongoing maintenance, updates, and feature enhancements post-launch.'
      }
    ],
    pricing: {
      starting: '$5,000',
      note: 'Pricing depends on app complexity, features, platforms, and design requirements. Contact us for a detailed quote.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        price: 25,
        period: 'mo',
        features: [
          { text: '1 Simple Mobile App', included: true },
          { text: 'Single Platform (iOS or Android)', included: true },
          { text: 'Basic UI/UX Design', included: true },
          { text: 'Up to 5 App Screens', included: true },
          { text: 'Basic Features & Functionality', included: true },
          { text: 'App Store Submission', included: true },
          { text: 'Push Notifications', included: false },
          { text: '3 Months Support', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        price: 45,
        period: 'mo',
        features: [
          { text: '1 Cross-Platform App', included: true },
          { text: 'Both iOS & Android', included: true },
          { text: 'Custom UI/UX Design', included: true },
          { text: 'Up to 15 App Screens', included: true },
          { text: 'Advanced Features (Auth, Payments)', included: true },
          { text: 'Push Notifications & Analytics', included: true },
          { text: 'App Store & Play Store Submission', included: true },
          { text: '6 Months Support & Updates', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ),
        price: 89,
        period: 'mo',
        features: [
          { text: 'Complex Enterprise App', included: true },
          { text: 'Native iOS & Android Apps', included: true },
          { text: 'Premium Custom Design', included: true },
          { text: 'Unlimited Screens', included: true },
          { text: 'Full Backend & API Integration', included: true },
          { text: 'Advanced Features (AI, AR, etc.)', included: true },
          { text: 'Real-time Data & Cloud Integration', included: true },
          { text: '12 Months Premium Support', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'Development time varies based on complexity. A simple app takes 2-3 months, a moderately complex app takes 4-6 months, and a complex enterprise app can take 6-12 months or more.'
      },
      {
        question: 'Should I build a native or cross-platform app?',
        answer: 'Native apps offer better performance and user experience but cost more. Cross-platform apps are more cost-effective and faster to develop. We recommend the best approach based on your requirements, budget, and timeline.'
      },
      {
        question: 'Will my app work on both iPhone and Android?',
        answer: 'Yes, we can develop your app for both platforms. We can create separate native apps or use cross-platform technology to build one app that works on both iOS and Android.'
      },
      {
        question: 'How much does app maintenance cost?',
        answer: 'Maintenance typically costs 15-20% of the initial development cost annually. This includes bug fixes, OS updates, security patches, and minor improvements.'
      },
      {
        question: 'Can you help with app store submission?',
        answer: 'Absolutely! We handle the entire app store submission process for both Apple App Store and Google Play Store, including preparing assets, descriptions, and navigating the review process.'
      }
    ],
    metaTitle: 'Mobile App Development Company in Indore | iOS & Android App Developers | Hexaloop',
    metaDescription: 'Best mobile app development company in Indore. Custom iOS & Android apps for startups & enterprises. Cross-platform app development, React Native, Flutter. ₹50,000-₹5,00,000. Quick development cycles, post-launch support. 100+ apps delivered.',
    metaKeywords: ['mobile app development services', 'Android & iOS app development worldwide', 'enterprise mobile solutions', 'app development for startups', 'mobile app developers in Indore', 'Indore mobile application development company', 'mobile app development company Indore', 'Android app developer Indore', 'startup mobile app solutions Indore', 'Indore enterprise app development services', 'hire app developers for startups in India', 'custom mobile app solutions for SMEs', 'affordable mobile app development in Indore', 'cross-platform app development for businesses', 'Indore-based mobile app experts for enterprises']
  },
  {
    id: '4',
    slug: 'graphic-design',
    title: 'Graphics & Multimedia Design',
    shortDescription: 'We offer a range of graphic design services such as Logo Design, Business cards, Brochure Design, Banner Design, Newsletter Design, Letterhead, Flyer Design.',
    fullDescription: 'Elevate your brand with our comprehensive graphic design and multimedia services. We create visually stunning designs that capture attention, communicate your message effectively, and leave a lasting impression. Our talented designers combine creativity with strategic thinking to deliver designs that not only look great but also achieve your business objectives.',
    icon: 'GraphicDesignIcon',
    features: [
      'Logo Design and Brand Identity',
      'Business Card and Stationery Design',
      'Brochure and Flyer Design',
      'Banner and Poster Design',
      'Social Media Graphics',
      'Infographic Design',
      'Packaging Design',
      'Newsletter and Email Templates',
      'Presentation Design',
      'Book and Magazine Layout',
      'T-Shirt and Merchandise Design',
      '3D Modeling and Rendering',
      'Motion Graphics and Animation',
      'Video Editing and Production'
    ],
    benefits: [
      'Create a strong, memorable brand identity',
      'Stand out from competitors with unique designs',
      'Communicate complex information visually',
      'Increase marketing effectiveness',
      'Build brand consistency across all materials',
      'Professional appearance that builds trust',
      'Versatile designs for print and digital use'
    ],
    technologies: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Adobe After Effects',
      'Figma',
      'Blender',
      'Cinema 4D',
      'Premiere Pro',
      'CorelDRAW'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Brief & Research',
        description: 'We discuss your design needs, brand guidelines, target audience, and goals. We research your industry and competitors to inform our creative direction.'
      },
      {
        step: 2,
        title: 'Concept Development',
        description: 'Our designers brainstorm and create multiple design concepts based on your brief, exploring different styles, colors, and approaches.'
      },
      {
        step: 3,
        title: 'Design & Refinement',
        description: 'We present initial concepts for your feedback, then refine the chosen direction with multiple revision rounds until you\'re completely satisfied.'
      },
      {
        step: 4,
        title: 'Finalization',
        description: 'We finalize the design, prepare all necessary file formats, and ensure everything is ready for your intended use (print, web, or both).'
      },
      {
        step: 5,
        title: 'Delivery & Support',
        description: 'We deliver all final files with proper organization and documentation, plus provide ongoing support for any questions or future design needs.'
      }
    ],
    pricing: {
      starting: '$199',
      note: 'Pricing varies by project type and complexity. Logo design starts at $499, while multimedia projects are quoted individually.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
        price: 12,
        period: 'mo',
        features: [
          { text: '5 Graphic Design Projects/Month', included: true },
          { text: 'Logo Design (1 concept)', included: true },
          { text: 'Social Media Graphics', included: true },
          { text: 'Business Card Design', included: true },
          { text: '2 Revisions per Project', included: true },
          { text: 'Source Files Included', included: true },
          { text: 'Video Editing', included: false },
          { text: 'Priority Support', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        price: 28,
        period: 'mo',
        features: [
          { text: '15 Graphic Design Projects/Month', included: true },
          { text: 'Logo Design (3 concepts)', included: true },
          { text: 'Complete Brand Identity Package', included: true },
          { text: 'Print & Digital Design', included: true },
          { text: 'Unlimited Revisions', included: true },
          { text: 'All Source Files & Formats', included: true },
          { text: 'Basic Video Editing (2 videos/month)', included: true },
          { text: 'Priority Email Support', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
        price: 55,
        period: 'mo',
        features: [
          { text: 'Unlimited Design Projects', included: true },
          { text: 'Complete Brand Development', included: true },
          { text: 'Motion Graphics & Animations', included: true },
          { text: '3D Design & Rendering', included: true },
          { text: 'Video Production (5 videos/month)', included: true },
          { text: 'All Premium Features', included: true },
          { text: 'Dedicated Designer', included: true },
          { text: '24/7 Priority Support', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'How many design concepts will I receive?',
        answer: 'We typically provide 2-3 initial design concepts for most projects. For logo design, you\'ll receive 3-5 concepts to choose from. Additional concepts can be added if needed.'
      },
      {
        question: 'How many revisions are included?',
        answer: 'Most packages include 2-3 rounds of revisions. We work with you until you\'re completely satisfied with the design. Additional revisions beyond the included rounds can be arranged.'
      },
      {
        question: 'What file formats will I receive?',
        answer: 'You\'ll receive all source files plus multiple formats suitable for different uses (PNG, JPG, PDF, SVG, EPS, etc.). For print projects, we provide high-resolution print-ready files.'
      },
      {
        question: 'Can you match my existing brand style?',
        answer: 'Absolutely! We can work within your existing brand guidelines to maintain consistency, or we can help refresh and modernize your current brand identity.'
      },
      {
        question: 'Do you provide printing services?',
        answer: 'While we don\'t print in-house, we can recommend trusted printing partners and prepare print-ready files with proper specifications to ensure the best quality output.'
      }
    ],
    metaTitle: 'Graphic Design & Multimedia Services in Indore | Logo, Branding & Creative Design | Hexaloop',
    metaDescription: 'Professional graphic design agency in Indore. Logo design, branding, brochure design, multimedia design, motion graphics & corporate identity. ₹10,000-₹1,00,000. Fast turnaround, affordable pricing for startups & SMEs. Indian cultural elements & modern design.',
    metaKeywords: ['graphic design services for businesses', 'multimedia design company worldwide', 'branding & visual design services', 'graphic designers in Indore', 'multimedia design agency Indore', 'branding services for Indore businesses', 'Indore logo & brochure design company', 'Indore visual design experts', 'hire professional graphic designers in Indore', 'multimedia design for startups & SMEs', 'affordable branding & design solutions', 'corporate identity design services Indore', 'creative visuals for marketing campaigns', 'marketing graphics & creatives']
  },
  {
    id: '5',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription: 'We develop custom software solutions that solve the complexity of your business processes, improve your performance and accelerate your business productivity with tailored technology.',
    fullDescription: 'Transform your business with bespoke software solutions designed specifically for your unique needs. We build powerful, scalable custom software that streamlines workflows, automates processes, and provides actionable insights. From enterprise applications to SaaS platforms, our solutions are crafted to drive efficiency and growth.',
    icon: 'WebAppIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        title: 'Enterprise Software Development',
        description: 'Robust, scalable enterprise solutions designed to handle complex business operations, large data volumes, and mission-critical processes with high security and reliability.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        title: 'SaaS Product Development',
        description: 'Build scalable Software-as-a-Service platforms with multi-tenancy, subscription management, and cloud infrastructure for recurring revenue business models.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
        title: 'Business Process Automation',
        description: 'Automate repetitive tasks, workflows, and business processes to increase efficiency, reduce errors, and free your team to focus on strategic initiatives.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        title: 'Data Dashboard & Analysis Platform',
        description: 'Custom dashboards and analytics platforms that transform raw data into actionable insights with real-time visualization, reporting, and business intelligence.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: 'API Development & Integration',
        description: 'Design and develop robust RESTful and GraphQL APIs, integrate third-party services, and connect disparate systems for seamless data flow and functionality.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        ),
        title: 'Legacy System Modernization',
        description: 'Upgrade and modernize outdated legacy systems with modern technologies, improved performance, enhanced security, and better user experiences without disrupting operations.'
      }
    ],
    features: [
      'Custom Software Architecture & Design',
      'Enterprise Application Development',
      'SaaS Platform Development',
      'Business Process Automation Tools',
      'API Development and Integration',
      'Legacy System Modernization',
      'Data Analytics & Reporting Dashboards',
      'Database Design and Optimization',
      'Cloud-Native Application Development',
      'Microservices Architecture',
      'DevOps and CI/CD Implementation',
      'Security and Compliance Implementation',
      'Scalable System Architecture',
      'Performance Monitoring & Optimization'
    ],
    benefits: [
      'Tailored solutions designed for your unique business needs',
      'Automate complex workflows and increase productivity',
      'Gain competitive advantage with custom features',
      'Scale effortlessly as your business grows',
      'Reduce operational costs and improve ROI',
      'Make data-driven decisions with real-time insights',
      'Seamless integration with existing systems and tools',
      'Enhanced security and compliance for your industry'
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Django',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'AWS',
      'Docker',
      'GraphQL',
      'TypeScript'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'We conduct in-depth analysis of your business processes, requirements, and goals to create a comprehensive specification document.'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'We design the application architecture, database schema, and technical infrastructure to ensure scalability, security, and performance.'
      },
      {
        step: 3,
        title: 'Agile Development',
        description: 'We develop your application in sprints, delivering working features regularly for your review and feedback throughout the process.'
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'We perform comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure quality and reliability.'
      },
      {
        step: 5,
        title: 'Deployment & Training',
        description: 'We deploy your application, provide user training and documentation, and offer ongoing support and maintenance to ensure success.'
      }
    ],
    pricing: {
      starting: '$8,000',
      note: 'Pricing depends on application complexity, features, integrations, and timeline. Enterprise solutions are quoted based on specific requirements.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
        price: 35,
        period: 'mo',
        features: [
          { text: 'Simple Web Application', included: true },
          { text: 'Up to 5 User Roles', included: true },
          { text: 'Basic Database Design', included: true },
          { text: 'User Authentication', included: true },
          { text: 'REST API Development', included: true },
          { text: '3 Months Support', included: true },
          { text: 'Advanced Integrations', included: false },
          { text: 'Scalable Architecture', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        price: 69,
        period: 'mo',
        features: [
          { text: 'Complex Web Application', included: true },
          { text: 'Unlimited User Roles & Permissions', included: true },
          { text: 'Advanced Database Architecture', included: true },
          { text: 'Payment Gateway Integration', included: true },
          { text: 'REST & GraphQL APIs', included: true },
          { text: 'Third-party Integrations', included: true },
          { text: 'Real-time Features', included: true },
          { text: '6 Months Premium Support', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        ),
        price: 129,
        period: 'mo',
        features: [
          { text: 'Enterprise-Grade Application', included: true },
          { text: 'Multi-tenant Architecture', included: true },
          { text: 'Microservices Architecture', included: true },
          { text: 'Advanced Security & Compliance', included: true },
          { text: 'Custom Workflow Automation', included: true },
          { text: 'Machine Learning Integration', included: true },
          { text: 'Scalable Cloud Infrastructure', included: true },
          { text: 'Dedicated Team & 24/7 Support', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between a website and a web application?',
        answer: 'A website primarily displays information, while a web application is interactive and performs specific functions or tasks. Web apps handle data, process user input, and often include dashboards, forms, and complex business logic.'
      },
      {
        question: 'How long does it take to develop a web application?',
        answer: 'Simple applications take 2-3 months, medium complexity apps take 4-6 months, and complex enterprise applications can take 6-12 months or longer depending on features and requirements.'
      },
      {
        question: 'Will my web application be secure?',
        answer: 'Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, regular security audits, and protection against common vulnerabilities.'
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Yes, we specialize in integrating web applications with existing systems including CRM, ERP, payment gateways, databases, and third-party APIs to create a seamless workflow.'
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer: 'Yes, we offer hosting solutions and ongoing maintenance packages including updates, bug fixes, security patches, performance monitoring, and feature enhancements.'
      }
    ],
    metaTitle: 'Custom Software Development Company in Indore | Enterprise Solutions | Hexaloop',
    metaDescription: 'Leading software development company in Indore. Custom ERP, CRM, SaaS, business automation software. ₹2,50,000-₹20,00,000. Quick prototyping & MVP development for startups. Scalable enterprise solutions for manufacturing, healthcare, logistics & retail.',
    metaKeywords: ['custom software development services', 'enterprise software solutions worldwide', 'business automation software', 'SaaS & cloud software development', 'software development company in Indore', 'Indore custom business software', 'enterprise software developers Indore', 'startup-friendly software solutions Indore', 'Indore IT solutions for businesses', 'hire software developers for business automation', 'custom ERP & CRM solutions for SMEs', 'affordable software development for startups', 'Indore software experts for enterprise solutions', 'SaaS product development for Indian businesses']
  },
  {
    id: '6',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'We provide comprehensive cloud solutions to help businesses migrate, build, and optimize their infrastructure on leading cloud platforms with enhanced scalability and security.',
    fullDescription: 'Transform your business with our comprehensive cloud solutions. We help organizations leverage the power of cloud computing to improve scalability, reduce costs, and accelerate innovation. From cloud migration to native application development, our experts design and implement cloud strategies that drive business growth and operational excellence.',
    icon: 'CMSIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        ),
        title: 'Cloud Migration',
        description: 'Seamlessly migrate your applications, data, and infrastructure to the cloud with minimal disruption, ensuring security and optimal performance throughout the process.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        title: 'Cloud Native Application Development',
        description: 'Build modern, scalable applications designed specifically for cloud environments using microservices, containers, and serverless architectures.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        ),
        title: 'Cloud Infrastructure Management',
        description: 'Comprehensive management of your cloud infrastructure including monitoring, automation, scaling, and maintenance to ensure optimal performance and reliability.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Cloud Cost Optimization',
        description: 'Analyze and optimize your cloud spending with right-sizing, reserved instances, and automated cost management strategies to maximize ROI.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: 'Cloud Security & Compliance',
        description: 'Implement robust security measures, encryption, access controls, and compliance frameworks to protect your cloud infrastructure and data.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'DevOps & CI/CD',
        description: 'Implement DevOps practices and continuous integration/continuous deployment pipelines to accelerate software delivery and improve collaboration.'
      }
    ],
    features: [
      'Cloud Strategy and Architecture Design',
      'AWS, Azure, and Google Cloud Solutions',
      'Cloud Migration Services',
      'Kubernetes and Container Orchestration',
      'Serverless Architecture Implementation',
      'Microservices Development',
      'Cloud Infrastructure as Code (IaC)',
      'Automated Backup and Disaster Recovery',
      'Cloud Monitoring and Logging',
      'DevOps and CI/CD Pipeline Setup',
      'Multi-Cloud and Hybrid Cloud Solutions',
      'Cloud Security and Compliance',
      'Cost Optimization and Management',
      'Performance Tuning and Scaling'
    ],
    benefits: [
      'Scale resources up or down based on demand',
      'Reduce infrastructure costs and overhead',
      'Improve application performance and reliability',
      'Enhance security with enterprise-grade protection',
      'Access data and applications from anywhere',
      'Accelerate innovation and time-to-market',
      'Ensure business continuity with disaster recovery',
      'Stay compliant with industry regulations'
    ],
    technologies: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Jenkins',
      'GitLab CI/CD',
      'CloudFormation',
      'Ansible'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Assessment & Planning',
        description: 'We assess your current infrastructure, applications, and business requirements to develop a comprehensive cloud strategy and migration roadmap.'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'We design a scalable, secure cloud architecture tailored to your needs, selecting the right services and technologies for optimal performance.'
      },
      {
        step: 3,
        title: 'Implementation & Migration',
        description: 'We execute the migration or build cloud-native applications, ensuring minimal disruption and maintaining data integrity throughout the process.'
      },
      {
        step: 4,
        title: 'Optimization & Security',
        description: 'We optimize performance, implement security best practices, set up monitoring, and configure automated scaling and backup solutions.'
      },
      {
        step: 5,
        title: 'Support & Management',
        description: 'We provide ongoing management, monitoring, and support to ensure your cloud infrastructure operates efficiently and cost-effectively.'
      }
    ],
    pricing: {
      starting: '$3,000',
      note: 'Pricing varies based on cloud platform, infrastructure complexity, migration scope, and ongoing management requirements. Custom quotes provided.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        price: 20,
        period: 'mo',
        features: [
          { text: 'Cloud Setup & Configuration', included: true },
          { text: 'Single Cloud Platform', included: true },
          { text: 'Basic Infrastructure Design', included: true },
          { text: 'Up to 5 Services/Resources', included: true },
          { text: 'Basic Monitoring', included: true },
          { text: 'Monthly Reports', included: true },
          { text: 'Advanced Security', included: false },
          { text: '24/7 Support', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        price: 42,
        period: 'mo',
        features: [
          { text: 'Multi-Cloud Strategy', included: true },
          { text: 'Advanced Infrastructure Architecture', included: true },
          { text: 'Cloud Migration Services', included: true },
          { text: 'Auto-scaling & Load Balancing', included: true },
          { text: 'Advanced Security & Compliance', included: true },
          { text: 'Cost Optimization', included: true },
          { text: 'Disaster Recovery Setup', included: true },
          { text: 'Business Hours Support', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        price: 79,
        period: 'mo',
        features: [
          { text: 'Enterprise Cloud Architecture', included: true },
          { text: 'Multi-Region Deployment', included: true },
          { text: 'Complex Migration & Integration', included: true },
          { text: 'Kubernetes & Container Orchestration', included: true },
          { text: 'Enterprise Security & Governance', included: true },
          { text: 'Advanced Monitoring & Analytics', included: true },
          { text: 'Full Disaster Recovery & Backup', included: true },
          { text: 'Dedicated Team & 24/7 Support', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'Which cloud platform should I choose?',
        answer: 'The choice depends on your specific requirements, existing technology stack, and business needs. AWS is comprehensive, Azure integrates well with Microsoft products, and Google Cloud excels in data analytics. We help you choose the best fit.'
      },
      {
        question: 'How long does cloud migration take?',
        answer: 'Migration timelines vary based on complexity. Simple applications can migrate in 2-4 weeks, while complex enterprise systems may take 3-6 months. We create a detailed timeline during the planning phase.'
      },
      {
        question: 'Will cloud migration disrupt my business?',
        answer: 'We plan migrations carefully to minimize disruption. Most migrations can be done with minimal downtime using phased approaches, parallel running, and careful scheduling during low-traffic periods.'
      },
      {
        question: 'How much can I save with cloud solutions?',
        answer: 'Savings vary but typically range from 20-40% compared to traditional infrastructure. We optimize your cloud spending through right-sizing, reserved instances, and automated management.'
      },
      {
        question: 'Is my data secure in the cloud?',
        answer: 'Yes, cloud platforms offer enterprise-grade security. We implement encryption, access controls, compliance frameworks, and monitoring to ensure your data is secure and meets industry regulations.'
      }
    ],
    metaTitle: 'Cloud Solutions & Migration Services in Indore | AWS, Azure, Google Cloud | Hexaloop',
    metaDescription: 'Cloud solution providers in Indore. Cloud migration, hosting, AWS, Azure, Google Cloud, DevOps & infrastructure management. ₹50,000-₹10,00,000. Hybrid cloud solutions for SMEs, compliance with Indian IT regulations. Scalable cloud for startups & enterprises.',
    metaKeywords: ['cloud computing services for enterprises', 'cloud migration & deployment solutions', 'SaaS & IaaS services worldwide', 'scalable cloud infrastructure for startups', 'cloud solution providers in Indore', 'Indore IT cloud services', 'business cloud migration Indore', 'Indore enterprise cloud solutions', 'startup cloud hosting Indore', 'affordable cloud hosting & migration for SMEs', 'cloud infrastructure management for startups', 'Indore-based cloud consulting company', 'secure cloud services for Indian enterprises', 'scalable cloud solutions for global businesses']
  },
  {
    id: '7',
    slug: 'agentic-ai-solutions',
    title: 'Agentic AI Solutions',
    shortDescription: 'We develop intelligent AI agents and automation solutions that transform your business operations with cutting-edge artificial intelligence, machine learning, and natural language processing.',
    fullDescription: 'Harness the power of AI agents to revolutionize your business operations. We build intelligent systems that understand, learn, and act autonomously to solve complex problems. From custom AI agents to RAG systems and intelligent chatbots, our solutions leverage the latest in generative AI and machine learning to deliver measurable business value.',
    icon: 'WebAppIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Custom AI Agent Development',
        description: 'Build autonomous AI agents that can perform complex tasks, make decisions, and interact with systems to achieve business objectives without human intervention.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
        title: 'Intelligent Chatbot & Virtual Assistant',
        description: 'Create sophisticated conversational AI that understands context, provides accurate responses, and delivers exceptional customer experiences 24/7.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: 'AI-Powered Workflow Automation',
        description: 'Automate complex business workflows with AI that can understand documents, make decisions, route tasks, and handle exceptions intelligently.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        title: 'RAG (Retrieval Augmented Generation) System',
        description: 'Build systems that combine your proprietary knowledge base with large language models to provide accurate, context-aware answers grounded in your data.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        ),
        title: 'AI Strategy & Consulting',
        description: 'Get expert guidance on AI adoption, identifying high-impact use cases, building AI roadmaps, and implementing responsible AI practices for your organization.'
      }
    ],
    features: [
      'Custom AI Agent Development',
      'Large Language Model (LLM) Integration',
      'Natural Language Processing (NLP)',
      'Conversational AI & Chatbots',
      'RAG System Implementation',
      'Vector Database Integration',
      'AI Workflow Automation',
      'Sentiment Analysis',
      'Document Understanding & Processing',
      'Multi-Agent Systems',
      'AI Model Fine-tuning',
      'Prompt Engineering',
      'AI Ethics and Responsible AI',
      'Performance Monitoring & Optimization'
    ],
    benefits: [
      'Reduce operational costs with intelligent automation',
      'Provide 24/7 customer support with AI assistants',
      'Make faster, data-driven decisions',
      'Scale operations without proportional headcount growth',
      'Improve customer satisfaction and engagement',
      'Extract insights from unstructured data',
      'Accelerate knowledge discovery and retrieval',
      'Stay competitive with cutting-edge AI technology'
    ],
    technologies: [
      'OpenAI GPT',
      'Claude AI',
      'LangChain',
      'Pinecone',
      'Chroma',
      'Hugging Face',
      'TensorFlow',
      'PyTorch',
      'Python',
      'FastAPI'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Use Case Analysis',
        description: 'We identify high-value AI use cases, assess data readiness, and define success metrics aligned with your business objectives.'
      },
      {
        step: 2,
        title: 'Data Preparation & Model Selection',
        description: 'We prepare and structure your data, select appropriate AI models and frameworks, and design the system architecture.'
      },
      {
        step: 3,
        title: 'Development & Training',
        description: 'We develop the AI solution, fine-tune models, implement RAG systems, and create intelligent workflows tailored to your needs.'
      },
      {
        step: 4,
        title: 'Testing & Refinement',
        description: 'We rigorously test the AI system for accuracy, safety, and performance, refining prompts and workflows based on results.'
      },
      {
        step: 5,
        title: 'Deployment & Monitoring',
        description: 'We deploy the AI solution, implement monitoring systems, and provide ongoing optimization to ensure consistent performance.'
      }
    ],
    pricing: {
      starting: '$10,000',
      note: 'Pricing varies based on AI complexity, data volume, model requirements, and integration needs. Enterprise solutions quoted individually.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        price: 50,
        period: 'mo',
        features: [
          { text: 'Simple AI Chatbot', included: true },
          { text: 'Basic RAG Implementation', included: true },
          { text: 'Up to 1000 Documents', included: true },
          { text: 'Standard AI Models', included: true },
          { text: 'Web Integration', included: true },
          { text: 'Basic Analytics', included: true },
          { text: 'Custom AI Training', included: false },
          { text: 'Multi-Agent System', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        price: 99,
        period: 'mo',
        features: [
          { text: 'Advanced AI Agent System', included: true },
          { text: 'Custom RAG with Fine-tuning', included: true },
          { text: 'Up to 10,000 Documents', included: true },
          { text: 'Advanced AI Models (GPT-4, etc.)', included: true },
          { text: 'Multi-Channel Integration', included: true },
          { text: 'Advanced Analytics & Insights', included: true },
          { text: 'Custom Model Training', included: true },
          { text: 'API Access', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ),
        price: 199,
        period: 'mo',
        features: [
          { text: 'Enterprise Multi-Agent System', included: true },
          { text: 'Custom AI Model Development', included: true },
          { text: 'Unlimited Documents & Data', included: true },
          { text: 'Proprietary AI Models', included: true },
          { text: 'Enterprise Integrations', included: true },
          { text: 'Workflow Automation', included: true },
          { text: 'Advanced Security & Compliance', included: true },
          { text: 'Dedicated AI Team & 24/7 Support', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'What is an AI agent?',
        answer: 'An AI agent is an autonomous system that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike traditional software, AI agents can learn, adapt, and handle complex tasks with minimal human intervention.'
      },
      {
        question: 'How is RAG different from regular AI chatbots?',
        answer: 'RAG (Retrieval Augmented Generation) systems combine large language models with your specific knowledge base. This ensures responses are accurate and grounded in your data, reducing hallucinations and providing domain-specific expertise.'
      },
      {
        question: 'How long does it take to develop an AI solution?',
        answer: 'Simple chatbots can be deployed in 2-4 weeks. Complex AI agents and RAG systems typically take 2-4 months. Enterprise multi-agent systems may require 4-6 months depending on requirements.'
      },
      {
        question: 'Do I need a lot of data for AI solutions?',
        answer: 'It depends on the solution. Chatbots and RAG systems can work with existing documentation. Custom model training requires more data. We assess your data readiness and recommend the best approach.'
      },
      {
        question: 'How do you ensure AI safety and accuracy?',
        answer: 'We implement guardrails, validation layers, human-in-the-loop workflows where needed, and comprehensive testing. We also monitor AI performance continuously and refine systems based on real-world usage.'
      }
    ],
    metaTitle: 'Agentic AI Solutions & Development Company in Indore | AI Automation | Hexaloop',
    metaDescription: 'AI solutions company in Indore. Custom AI agents, chatbot development, machine learning, predictive analytics & AI-driven automation. ₹1,00,000-₹25,00,000. AI adoption guidance for non-tech companies. Serving manufacturing, e-commerce, healthcare, legal & CA firms.',
    metaKeywords: ['AI solutions for business automation', 'machine learning services worldwide', 'agentic AI development services', 'AI automation agency', 'AI solutions provider Indore', 'AI consulting for Indore businesses', 'AI solutions company Indore', 'AI chatbot development Indore', 'machine learning development in Indore', 'Indore AI-based automation services', 'hire AI developers for startups', 'custom AI tools for business optimization', 'affordable AI solutions for SMEs', 'Indore AI consulting company for enterprises', 'AI-driven analytics & automation services', 'predictive analytics & AI consulting', 'enterprise AI implementation']
  },
  {
    id: '8',
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'We provide strategic IT consulting services to help businesses make informed technology decisions, optimize processes, and achieve digital transformation goals.',
    fullDescription: 'Navigate the complex technology landscape with our expert IT consulting services. We help organizations develop technology strategies, optimize architectures, and drive digital transformation. From fractional CTO services to technical due diligence, our consultants bring deep expertise to solve your most challenging technology problems.',
    icon: 'SEOIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        title: 'Technology Strategy & Roadmap',
        description: 'Develop comprehensive technology strategies aligned with business goals, including roadmaps for implementation, resource planning, and measurable milestones.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        title: 'Architecture & Tech Stack Consulting',
        description: 'Expert guidance on system architecture design, technology stack selection, and best practices to build scalable, maintainable, and efficient solutions.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: 'Digital Transformation Consulting',
        description: 'Guide your organization through digital transformation with change management, process optimization, and technology adoption strategies.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        title: 'Fractional CTO / Technical Advisory',
        description: 'Get executive-level technical leadership on a flexible basis. Strategic guidance, team mentoring, and technical decision-making without full-time commitment.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
        title: 'Technical Due Diligence',
        description: 'Comprehensive technical assessment for M&A, investments, or partnerships. Evaluate code quality, architecture, security, scalability, and technical debt.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        title: 'IT Process & Team Optimization',
        description: 'Optimize development workflows, implement best practices, improve team productivity, and establish effective processes for sustainable growth.'
      }
    ],
    features: [
      'Technology Strategy Development',
      'System Architecture Review',
      'Tech Stack Evaluation & Selection',
      'Digital Transformation Planning',
      'Technical Leadership & Mentoring',
      'Code Quality Assessment',
      'Security Audit & Review',
      'Scalability Assessment',
      'Technical Debt Analysis',
      'Process Improvement',
      'Vendor Selection & Management',
      'Team Structure & Hiring Strategy',
      'Risk Assessment & Mitigation',
      'Technology ROI Analysis'
    ],
    benefits: [
      'Make informed technology decisions with expert guidance',
      'Reduce technology risks and costly mistakes',
      'Accelerate time-to-market with proven strategies',
      'Optimize technology investments and ROI',
      'Build scalable, future-proof solutions',
      'Improve team efficiency and productivity',
      'Access C-level expertise without full-time cost',
      'Navigate complex technology challenges with confidence'
    ],
    technologies: [
      'All Major Tech Stacks',
      'Cloud Platforms',
      'Enterprise Software',
      'DevOps Tools',
      'Security Frameworks',
      'Agile Methodologies',
      'ITIL',
      'TOGAF',
      'Project Management',
      'Business Analysis'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'We conduct a thorough assessment of your current technology landscape, challenges, goals, and organizational structure.'
      },
      {
        step: 2,
        title: 'Analysis & Research',
        description: 'We analyze your systems, processes, and market landscape to identify opportunities, risks, and best practices applicable to your situation.'
      },
      {
        step: 3,
        title: 'Strategy Development',
        description: 'We develop comprehensive recommendations, strategies, and roadmaps tailored to your business objectives and constraints.'
      },
      {
        step: 4,
        title: 'Presentation & Planning',
        description: 'We present our findings and recommendations with clear action plans, priorities, and implementation strategies.'
      },
      {
        step: 5,
        title: 'Implementation Support',
        description: 'We provide ongoing guidance, support, and advisory services during implementation to ensure successful execution.'
      }
    ],
    pricing: {
      starting: '$2,500',
      note: 'Consulting rates vary based on engagement type, duration, and complexity. We offer project-based, retainer, and hourly arrangements.'
    },
    pricingPlans: [
      {
        name: 'Basic Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        price: 18,
        period: 'mo',
        features: [
          { text: 'Technology Assessment', included: true },
          { text: 'Strategic Planning Session (2 hrs/month)', included: true },
          { text: 'Architecture Review', included: true },
          { text: 'Basic Tech Stack Recommendations', included: true },
          { text: 'Email Support', included: true },
          { text: 'Monthly Report', included: true },
          { text: 'Code Review', included: false },
          { text: 'On-demand Consulting', included: false },
        ],
      },
      {
        name: 'Premium Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        price: 39,
        period: 'mo',
        features: [
          { text: 'Fractional CTO Services (8 hrs/month)', included: true },
          { text: 'Technology Strategy & Roadmap', included: true },
          { text: 'Architecture Design & Review', included: true },
          { text: 'Code Review & Best Practices', included: true },
          { text: 'Team Leadership Guidance', included: true },
          { text: 'Vendor Evaluation', included: true },
          { text: 'Technical Due Diligence', included: true },
          { text: 'Priority Support', included: true },
        ],
        highlighted: true,
      },
      {
        name: 'Corporate Plan',
        icon: (
          <svg className="w-full h-full text-[#5EBEEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        price: 89,
        period: 'mo',
        features: [
          { text: 'Full-time Fractional CTO (20+ hrs/month)', included: true },
          { text: 'Enterprise Technology Strategy', included: true },
          { text: 'Digital Transformation Leadership', included: true },
          { text: 'Complete Architecture Oversight', included: true },
          { text: 'Team Building & Management', included: true },
          { text: 'M&A Technical Due Diligence', included: true },
          { text: 'Budget & Resource Planning', included: true },
          { text: 'Dedicated Executive Support 24/7', included: true },
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a Fractional CTO?',
        answer: 'A Fractional CTO provides executive-level technical leadership on a part-time or contract basis. You get strategic guidance, technical decision-making, and leadership without the cost of a full-time executive.'
      },
      {
        question: 'How long does a typical consulting engagement last?',
        answer: 'Engagements vary widely. Technical due diligence might take 2-4 weeks, strategy development 1-2 months, while fractional CTO services are often ongoing relationships lasting 6-12 months or more.'
      },
      {
        question: 'Do you work with startups or only enterprises?',
        answer: 'We work with organizations of all sizes. Our services scale from startup advisory to enterprise transformation consulting, tailored to each client\'s stage and needs.'
      },
      {
        question: 'What deliverables do I receive?',
        answer: 'Deliverables depend on the engagement but typically include detailed reports, architecture diagrams, technology roadmaps, implementation plans, and ongoing advisory support.'
      },
      {
        question: 'Can you help us implement your recommendations?',
        answer: 'Absolutely. While consulting focuses on strategy and guidance, we can also provide implementation support or transition to development services to execute the plans we create together.'
      }
    ],
    metaTitle: 'IT Consulting Services in Indore | Technology Strategy & Digital Transformation | Hexaloop',
    metaDescription: 'IT consulting company in Indore. Technology strategy, digital transformation, architecture consulting, fractional CTO & IT advisory. ₹50,000-₹10,00,000. Startup-friendly IT advisory, scalable solutions for SMEs. Hands-on guidance for digital transformation.',
    metaKeywords: ['IT consulting services for businesses', 'enterprise IT strategy solutions worldwide', 'technology advisory services', 'IT consulting company in Indore', 'Indore IT advisory services for businesses', 'technology consulting for Indore startups', 'IT strategy solutions Indore', 'Indore IT consulting experts', 'hire IT consultants for business growth', 'affordable IT advisory for startups & SMEs', 'IT strategy & implementation for enterprises', 'Indore IT experts for digital transformation', 'technology consulting solutions for Indian companies', 'startup IT consulting & support', 'IT project management services']
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug);
};

// Helper function to get service icon component
export const getServiceIcon = (iconName: string): React.ComponentType | null => {
  return iconComponents[iconName] || null;
};
