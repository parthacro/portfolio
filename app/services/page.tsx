import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { servicesData, getServiceIcon } from '@/data/services';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Website Design, Mobile Apps, SEO, AI & Cloud Solutions in Indore',
  description: 'Hexaloop offers 8 comprehensive IT services: Website Design & Development, SEO & Digital Marketing, Mobile App Development, Graphics & Multimedia Design, Custom Software Development, Cloud Solutions, Agentic AI Solutions, and IT Consulting. Serving Indore, India & worldwide.',
  keywords: [
    'website design services Indore',
    'mobile app development Indore',
    'SEO services Indore',
    'digital marketing agency Indore',
    'graphic design services Indore',
    'custom software development Indore',
    'cloud solutions Indore',
    'AI solutions Indore',
    'IT consulting Indore',
    'best web development company in Indore',
    'IT company Indore services',
    'professional website design services',
    'enterprise website solutions worldwide',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | Hexaloop - IT Company Indore',
    description:
      'Explore our comprehensive IT services: Web Design, Mobile Apps, SEO, Digital Marketing, Custom Software, Cloud, AI & IT Consulting. Affordable solutions for startups & enterprises.',
    url: '/services',
    type: 'website',
  },
};

const servicesBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hexaloop.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.hexaloop.in/services' },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <section className="relative pt-28 sm:pt-32 md:pt-36 pb-32 sm:pb-36 md:pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EDF7FC] to-white">
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
            <ScrollReveal variant="fadeUp" duration={0.7}>
              <SectionHeading 
                preTitle="WHAT WE DO?"
                title="Professional IT services designed to grow your business."
              />
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              {servicesData.map((service, index) => {
                const IconComponent = getServiceIcon(service.icon);
                return (
                  <ScrollReveal key={service.id} variant="fadeUp" delay={index * 0.1} duration={0.6}>
                    <ServiceCard
                      title={service.title}
                      description={service.shortDescription}
                      icon={IconComponent ? <IconComponent /> : null}
                      href={`/services/${service.slug}`}
                    />
                  </ScrollReveal>
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
