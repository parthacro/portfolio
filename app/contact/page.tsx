'use client';

import React, { Suspense, useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { PageTransition } from '@/components/atoms/PageTransition';
import { SectionWrapper } from '@/components/atoms/SectionWrapper';
import { ContactHero } from '@/components/organisms/ContactHero';
import { ContactForm } from '@/components/molecules/ContactForm';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

function ContactPageContent() {
  const searchParams = useSearchParams();
  const [initialMessage, setInitialMessage] = useState('');
  const formSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const message = searchParams.get('message');
    if (message) {
      setInitialMessage(decodeURIComponent(message));
      
      // Scroll to form after a short delay to ensure DOM is ready
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <SectionWrapper className="pt-24">
            <ContactHero />
          </SectionWrapper>
          
          {/* Form Section */}
          <SectionWrapper className="bg-gray-50" ref={formSectionRef}>
            <div className="max-w-4xl mx-auto px-2 sm:px-4">
              <ScrollReveal variant="fadeUp" duration={0.7}>
                <div className="text-center mb-8 sm:mb-12 px-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
                <ContactForm initialMessage={initialMessage} />
              </ScrollReveal>
            </div>
          </SectionWrapper>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#5EBEEB]"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
