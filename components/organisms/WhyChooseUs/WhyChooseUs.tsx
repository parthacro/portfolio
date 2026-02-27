'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AccordionItem } from '@/components/molecules/AccordionItem';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

const WhyChooseUsIllustration = () => (
  <div className="relative w-full max-w-[220px] sm:max-w-xs md:max-w-md mx-auto h-[200px] sm:h-[280px] md:h-[380px] mb-6 sm:mb-8 md:mb-0 flex items-center justify-center">
    <Image
      src="/icons/why-choose-us-icon.png"
      alt="Why Choose Us"
      width={500}
      height={500}
      className="w-full h-full object-contain"
      priority
    />
  </div>
);

export const WhyChooseUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const features = [
    {
      title: 'High Quality Work',
      content: 'We believe in providing high quality of work to our clients. Our experienced team ensures every project meets the highest standards of excellence and reliability.'
    },
    {
      title: 'Affordable Prices',
      content: 'We believe in providing application at affordable prices. Quality software development should be accessible to businesses of all sizes without compromising on features or performance.'
    },
    {
      title: 'On-Time Delivery',
      content: 'We believe in delivering our clients work on time. Our project management approach ensures timely completion while maintaining quality and meeting all requirements.'
    }
  ];

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FCFF] relative overflow-hidden" style={{paddingBottom: '10rem'}}>
      {/* Background decorative elements */}
      <div className="absolute top-32 right-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#5EBEEB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#FFB347]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1900px] mx-auto">
        {/* Header Section - Always on top for mobile */}
        <ScrollReveal variant="fadeUp" duration={0.7}>
          <div className="text-center lg:text-left mb-5 sm:mb-6 md:mb-8 px-2 sm:px-0">
            <p className="text-[#5EBEEB] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-3 sm:mb-4">
              WHY CHOOSE US?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
              We bring solutions to make life easier.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Illustration */}
          <ScrollReveal variant="fadeLeft" delay={0.1} duration={0.8} className="order-1 lg:order-1 px-4 sm:px-0">
            <WhyChooseUsIllustration />
          </ScrollReveal>

          {/* Right Content - Accordion */}
          <div className="order-2 lg:order-2 px-2 sm:px-0">
            {/* Accordion */}
            <div className="space-y-0 relative z-10">
              {features.map((feature, index) => (
                <ScrollReveal key={index} variant="fadeRight" delay={index * 0.12} duration={0.6}>
                  <AccordionItem
                    title={feature.title}
                    content={feature.content}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
