'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AccordionItem } from '@/components/molecules/AccordionItem';

const WhyChooseUsIllustration = () => (
  <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] mb-8 sm:mb-10 md:mb-0 flex items-center justify-center">
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
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-32 bg-gradient-to-b from-white to-[#F8FCFF] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-32 right-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#5EBEEB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#FFB347]/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1900px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left Illustration */}
          <div className="order-2 lg:order-1 px-4 sm:px-0">
            <WhyChooseUsIllustration />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 px-2 sm:px-0">
            <p className="text-[#5EBEEB] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-3 sm:mb-4 text-center lg:text-left">
              WHY CHOOSE US?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 leading-tight text-center lg:text-left">
              We bring solutions to make life easier.
            </h2>

            {/* Accordion */}
            <div className="space-y-0">
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  title={feature.title}
                  content={feature.content}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
