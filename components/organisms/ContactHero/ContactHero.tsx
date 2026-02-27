import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

const ContactIllustration = () => (
  <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg mx-auto h-[220px] sm:h-[320px] md:h-[400px] flex items-center justify-center">
    <Image
      src="/icons/contact-us-ion.png"
      alt="Contact Us"
      width={500}
      height={400}
      className="w-full h-full object-contain"
      priority
    />
  </div>
);

export const ContactHero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      {/* Content - shows first on mobile */}
      <div className="order-first md:order-last space-y-6 sm:space-y-7 md:space-y-8">
        <ScrollReveal variant="fadeRight" duration={0.7}>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Got any questions?
            <br />
            Don&apos;t hesitate to get in touch.
          </h1>
        </div>
        </ScrollReveal>
        
        {/* Contact Info */}
        <ScrollReveal variant="fadeRight" delay={0.15} duration={0.7}>
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm md:text-base mb-1">Address</p>
              <p className="text-gray-600 text-sm md:text-base">MG Road, Sector 14, Gurugram, Haryana, India</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm md:text-base mb-1">Phone</p>
              <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors">
                +91 88711 71445
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm md:text-base mb-1">E-mail</p>
              <a href="mailto:career24x7growth@gmail.com" className="text-gray-600 hover:text-blue-600 text-sm md:text-base transition-colors break-all">
                career24x7growth@gmail.com
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* Illustration - shows second on mobile */}
      <ScrollReveal variant="fadeLeft" delay={0.1} duration={0.8} className="order-last md:order-first">
        <ContactIllustration />
      </ScrollReveal>
    </div>
  );
};
