import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { WhoAreWe } from '@/components/organisms/WhoAreWe';
import { WhyChooseUs } from '@/components/organisms/WhyChooseUs';
import { Footer } from '@/components/organisms/Footer';

export const metadata: Metadata = {
  title: 'About Us - Leading IT Company in Indore | 9+ Years Experience',
  description:
    'Learn about Hexaloop, a top IT company in Indore with 9+ years of industry experience, 100+ completed projects, and 100+ satisfied clients. We serve startups, SMEs & enterprises in website design, mobile apps, SEO, custom software, cloud & AI solutions.',
  keywords: [
    'about Hexaloop',
    'IT company Indore',
    'software company Indore',
    'web development company Indore',
    'Indore IT solutions',
    'best IT company Indore',
    'technology company Indore',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Hexaloop - Leading IT Company in Indore',
    description:
      'Hexaloop: 9+ years experience, 100+ projects, 100+ clients. A trusted IT company in Indore offering web development, mobile apps, SEO, AI solutions & more.',
    url: '/about',
    type: 'website',
  },
};

const aboutBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hexaloop.in' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.hexaloop.in/about' },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <WhoAreWe />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
