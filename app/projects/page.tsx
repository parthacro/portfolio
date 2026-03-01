'use client';

import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { ProjectsGrid } from '@/components/organisms/ProjectsGrid';
import { SectionWrapper } from '@/components/atoms/SectionWrapper';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

const projectsBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hexaloop.in' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.hexaloop.in/projects' },
  ],
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsBreadcrumbJsonLd) }}
      />
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-0 pb-20 sm:pb-24 md:pb-32">
        <SectionWrapper>
          <ScrollReveal variant="fadeUp" duration={0.7}>
            <div className="text-center mb-12 md:mb-16">
              <SectionHeading
                title="Our Projects"
                subtitle="Explore our portfolio of innovative solutions and successful implementations"
              />
            </div>
          </ScrollReveal>
          <ProjectsGrid />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
