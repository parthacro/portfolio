'use client';

import React, { useState } from 'react';
import { Service } from '@/types/service';
import { CheckmarkItem } from '@/components/atoms/CheckmarkItem';
import { StepCard } from '@/components/molecules/StepCard';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { Button } from '@/components/atoms/Button';
import { ServiceTypeCard } from '@/components/atoms/ServiceTypeCard';
import { PricingCard } from '@/components/molecules/PricingCard';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';
import Link from 'next/link';

interface ServiceDetailProps {
  service: Service;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDF7FC] to-white">
      {/* Back Button */}
      <div className="pt-24 pb-0 px-4 sm:px-6 lg:px-8">
        <Link 
          href="/services"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#5EBEEB] transition-colors group font-medium"
        >
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          <span>Back to Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-[#5EBEEB]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#5EBEEB]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="fadeUp" duration={0.7}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {service.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.12} duration={0.7}>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                {service.fullDescription}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.24} duration={0.7}>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
                <Link href="/hire">
                  <Button variant="secondary" size="sm">
                    Hire Us
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Types Section - Dynamic for any service with serviceTypes */}
      {service.serviceTypes && service.serviceTypes.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDF7FC]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal variant="fadeUp" duration={0.7}>
              <SectionHeading 
                preTitle="SERVICE TYPES"
                title={`${service.title} Services We Offer`}
              />
            </ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {service.serviceTypes.map((serviceType, index) => (
                <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1} duration={0.6}>
                  <ServiceTypeCard
                    icon={serviceType.icon}
                    title={serviceType.title}
                    description={serviceType.description}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" duration={0.7}>
            <SectionHeading 
              preTitle="FEATURES"
              title="What's Included"
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, index) => (
              <ScrollReveal key={index} variant="fadeUp" delay={(index % 3) * 0.1} duration={0.6}>
                <CheckmarkItem text={feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDF7FC]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" duration={0.7}>
            <SectionHeading 
              preTitle="BENEFITS"
              title="Why Choose This Service"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {service.benefits.map((benefit, index) => (
              <ScrollReveal key={index} variant="fadeUp" delay={(index % 3) * 0.1} duration={0.6}>
              <div 
                className="bg-white p-3 sm:p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-[#5EBEEB]/10 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#5EBEEB]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#EDF7FC]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal variant="fadeUp" duration={0.7}>
              <SectionHeading 
                preTitle="TECHNOLOGIES"
                title="Tools & Technologies We Use"
              />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
                {service.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#5EBEEB]/30"
                  >
                    <span className="text-xs sm:text-sm text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Process Steps Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" duration={0.7}>
            <SectionHeading 
              preTitle="OUR PROCESS"
              title="How We Work"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {service.processSteps.map((step, index) => (
              <ScrollReveal key={step.step} variant="fadeUp" delay={(index % 3) * 0.12} duration={0.6}>
                <StepCard
                  number={step.step}
                  title={step.title}
                  description={step.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      {service.pricingPlans && service.pricingPlans.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EDF7FC] to-white">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal variant="fadeUp" duration={0.7}>
              <SectionHeading 
                preTitle="PRICING PLANS"
                title="Choose the Perfect Plan for Your Needs"
              />
            </ScrollReveal>
            <div className="flex gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 overflow-x-auto pb-4 pt-6 px-1 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {service.pricingPlans.map((plan, index) => (
                <ScrollReveal key={index} variant="fadeUp" delay={index * 0.12} duration={0.6}>
                <div className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-auto md:flex-1 snap-center">
                  <PricingCard
                    plan={plan}
                    serviceSlug={service.slug}
                    serviceTitle={service.title}
                  />
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDF7FC]" style={{paddingBottom: '10rem'}}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fadeUp" duration={0.7}>
            <SectionHeading 
              preTitle="FAQs"
              title="Frequently Asked Questions"
            />
          </ScrollReveal>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.08} duration={0.6}>
              <div 
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#5EBEEB] transition-transform duration-300 flex-shrink-0 ${
                      openFaqIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#5EBEEB] to-[#4AADE0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's bring your project to life. Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="bg-white text-[#5EBEEB] hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};
