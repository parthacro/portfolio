'use client';

import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercentage);
      
      // Show button after scrolling down 300px
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate the circle progress (283 is the circumference of a circle with radius 45)
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center group transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* SVG Circle Progress */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 50 50">
        {/* Background Circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="3"
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#5EBEEB"
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>
      
      {/* Inner Button */}
      <div className="relative z-10 w-11 h-11 bg-[#5EBEEB] rounded-full shadow-lg flex items-center justify-center group-hover:bg-[#4AADE0] transition-colors duration-300">
        <svg 
          className="w-5 h-5 text-white transform group-hover:-translate-y-0.5 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </div>
    </button>
  );
};
