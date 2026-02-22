import React from 'react';
import { Service } from '@/types/service';
import { CheckmarkItem } from '@/components/atoms/CheckmarkItem';
import { StepCard } from '@/components/molecules/StepCard';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { Button } from '@/components/atoms/Button';
import { ServiceTypeCard } from '@/components/atoms/ServiceTypeCard';
import Link from 'next/link';

interface ServiceDetailProps {
  service: Service;
  icon: React.ReactNode;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, icon }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDF7FC] to-white">
      {/* Back Button - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block pt-24 pb-4 px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[#5EBEEB]/10 text-[#5EBEEB] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                OUR SERVICES
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/hire">
                  <Button variant="secondary" size="lg">
                    Hire Us
                  </Button>
                </Link>
              </div>
              {service.pricing && (
                <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-600">Starting from</span>
                    <span className="text-3xl font-bold text-[#5EBEEB]">
                      {service.pricing.starting}
                    </span>
                  </div>
                  {service.pricing.note && (
                    <p className="text-sm text-gray-500 mt-2">{service.pricing.note}</p>
                  )}
                </div>
              )}
            </div>

            {/* Right Icon */}
            <div className="flex justify-center lg:justify-end">
              <div className="transform hover:scale-105 transition-transform duration-300">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section - Dynamic for any service with serviceTypes */}
      {service.serviceTypes && service.serviceTypes.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDF7FC]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              preTitle="SERVICE TYPES"
              title={`${service.title} Services We Offer`}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.serviceTypes.map((serviceType, index) => (
                <ServiceTypeCard
                  key={index}
                  icon={serviceType.icon}
                  title={serviceType.title}
                  description={serviceType.description}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            preTitle="FEATURES"
            title="What's Included"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, index) => (
              <CheckmarkItem key={index} text={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDF7FC]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            preTitle="BENEFITS"
            title="Why Choose This Service"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#5EBEEB]/10 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-6 h-6 text-[#5EBEEB]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EDF7FC]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              preTitle="TECHNOLOGIES"
              title="Tools & Technologies We Use"
            />
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            preTitle="OUR PROCESS"
            title="How We Work"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.processSteps.map((step) => (
              <StepCard
                key={step.step}
                number={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDF7FC]" style={{paddingBottom: '10rem'}}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            preTitle="FAQs"
            title="Frequently Asked Questions"
          />
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
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
