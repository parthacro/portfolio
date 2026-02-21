import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { servicesData, getServiceIcon } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Professional Web Development & Design Services',
  description: 'We offer comprehensive web services including website design, mobile app development, SEO & digital marketing, graphic design, web applications, and CMS development.',
  keywords: 'web design, mobile app development, SEO services, digital marketing, graphic design, web application development, CMS development',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EDF7FC] to-white pb-32 sm:pb-36 md:pb-40">
          {/* Wavy top border */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden h-16 sm:h-20 md:h-24">
            <svg 
              className="absolute bottom-0 w-full h-24" 
              viewBox="0 0 1440 100" 
              preserveAspectRatio="none"
              fill="white"
            >
              <path d="M0,50 Q360,0 720,50 T1440,50 L1440,0 L0,0 Z" />
            </svg>
          </div>

          <div className="max-w-[1900px] mx-auto relative">
            <SectionHeading 
              preTitle="WHAT WE DO?"
              title="The service we offer is specifically designed to meet your needs."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              {servicesData.map((service) => {
                const IconComponent = getServiceIcon(service.icon);
                return (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.shortDescription}
                    icon={IconComponent ? <IconComponent /> : null}
                    href={`/services/${service.slug}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Wavy bottom border */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg
              className="w-full"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              fill="white"
              style={{ height: '120px', display: 'block' }}
            >
              <path d="M0,50 C120,20 180,80 300,50 C420,20 480,80 600,50 C720,20 780,80 900,50 C1020,20 1080,80 1200,50 C1320,20 1380,80 1440,50 L1440,120 L0,120 Z" />
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
