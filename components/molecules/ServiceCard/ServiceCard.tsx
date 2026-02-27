import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  href = '#'
}) => {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Icon/Illustration */}
      <div className="mb-4 sm:mb-6 md:mb-8 transform transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xs px-2">
        {description}
      </p>

      {/* Learn More Link */}
      <Link 
        href={href}
        className="text-[#5EBEEB] font-medium hover:text-[#4AADE0] transition-colors inline-flex items-center gap-1 sm:gap-2 group/link text-xs sm:text-sm md:text-base"
      >
        Learn More 
        <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
      </Link>
    </div>
  );
};
