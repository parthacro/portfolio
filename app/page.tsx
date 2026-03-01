import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';
import { Services } from '@/components/organisms/Services';
import { WhoAreWe } from '@/components/organisms/WhoAreWe';
import { Strategy } from '@/components/organisms/Strategy';
import { WhyChooseUs } from '@/components/organisms/WhyChooseUs';
import { LatestProjects } from '@/components/organisms/LatestProjects';
import { Testimonials } from '@/components/organisms/Testimonials';
import { Footer } from '@/components/organisms/Footer';

export const metadata: Metadata = {
  title: 'Hexaloop | Best IT Company in Indore - Website Design, Mobile Apps, SEO & AI Solutions',
  description:
    'Hexaloop is a top IT company in Indore with 9+ years of experience & 100+ projects delivered. We offer professional website design, mobile app development, SEO & digital marketing, custom software development, cloud solutions, agentic AI solutions & IT consulting for startups and enterprises in Indore and worldwide.',
  keywords: [
    'IT company Indore',
    'best web development company in Indore',
    'website design company in Indore',
    'mobile app development company Indore',
    'SEO company in Indore',
    'digital marketing agency in Indore',
    'custom software development Indore',
    'cloud solutions provider Indore',
    'AI solutions company Indore',
    'IT consulting company in Indore',
    'top 10 web design companies in Indore',
    'best digital marketing company Indore',
    'affordable website design in Indore',
    'software development company in Indore',
    'ecommerce website developer Indore',
    'website development company near me',
  ],
  alternates: {
    canonical: '/',
  },
};

// JSON-LD for Homepage BreadcrumbList
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.hexaloop.in',
    },
  ],
};

// JSON-LD for ProfessionalService
const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Hexaloop',
  image: 'https://www.hexaloop.in/icons/logo.png',
  url: 'https://www.hexaloop.in',
  telephone: '+91-887-117-1445',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '309, Bansiwala Tower, Agrasen Square',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452001',
    addressCountry: 'IN',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design & Development', description: 'Professional website design services for businesses, startups & enterprises. Custom responsive websites starting from ₹25,000.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Digital Marketing', description: 'Comprehensive SEO services and digital marketing solutions to boost your online presence. Starting from ₹15,000/month.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Application Development', description: 'Custom iOS & Android app development for startups and businesses. Starting from ₹50,000.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphics & Multimedia Design', description: 'Creative graphic design, branding, logo design and multimedia solutions. Starting from ₹10,000.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development', description: 'Enterprise software solutions, SaaS development, and business automation. Starting from ₹2,50,000.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Solutions', description: 'Cloud migration, hosting, and infrastructure management. Starting from ₹50,000.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentic AI Solutions', description: 'Custom AI agents, chatbot development, and AI-driven automation. Starting from ₹1,00,000.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Consulting', description: 'Technology strategy, digital transformation and IT advisory services. Starting from ₹50,000.' } },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhoAreWe />
        <Strategy />
        <LatestProjects />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
