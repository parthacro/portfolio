'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export interface PricingPlan {
  name: string;
  icon: React.ReactNode;
  price: number;
  period: string;
  features: {
    text: string;
    included: boolean;
  }[];
  highlighted?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  serviceSlug: string;
  serviceTitle: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, serviceSlug, serviceTitle }) => {
  const generateMessage = () => {
    const planName = plan.name;
    const includedFeatures = plan.features
      .filter(f => f.included)
      .map(f => f.text)
      .join(', ');
    
    return encodeURIComponent(
      `Hi, I'm interested in the ${planName} plan for ${serviceTitle}.\n\n` +
      `Plan Details:\n` +
      `- Plan: ${planName}\n` +
      `- Price: $${plan.price}/${plan.period}\n` +
      `- Features: ${includedFeatures}\n\n` +
      `Please provide me with more information and a detailed quotation.\n\n` +
      `Thank you!`
    );
  };

  const contactUrl = `/contact?service=${encodeURIComponent(serviceTitle)}&plan=${encodeURIComponent(plan.name)}&message=${generateMessage()}`;

  return (
    <div 
      className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
        plan.highlighted ? 'border-2 sm:border-4 border-[#5EBEEB] ring-2 ring-[#5EBEEB]/20' : 'border border-gray-200'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-[#5EBEEB] text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap z-10">
          Most Popular
        </div>
      )}
      
      <div className="p-4 sm:p-6 md:p-8">
        {/* Icon */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center">
            {plan.icon}
          </div>
        </div>

        {/* Plan Name */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-1 sm:mb-2">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="text-center mb-4 sm:mb-6">
          <span className="text-gray-600 text-sm sm:text-lg">$</span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-gray-600 text-sm sm:text-lg">/{plan.period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              {feature.included ? (
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#5EBEEB] flex-shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              ) : (
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              )}
              <span className={`text-xs sm:text-sm md:text-base text-gray-700 ${!feature.included ? 'text-gray-400' : ''}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href={contactUrl} className="block">
          <Button 
            variant={plan.highlighted ? 'primary' : 'secondary'} 
            className="w-full"
          >
            Get Quotation
          </Button>
        </Link>
      </div>
    </div>
  );
};
