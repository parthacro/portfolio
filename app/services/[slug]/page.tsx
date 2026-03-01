import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { ServiceDetail } from '@/components/organisms/ServiceDetail';
import { servicesData, getServiceBySlug } from '@/data/services';

// Force static generation - no dynamic behavior
export const dynamic = 'force-static';
export const dynamicParams = false;

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all services at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO from hardcoded data
export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.metaKeywords.join(', '),
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${slug}`,
      type: 'website',
      siteName: 'Hexaloop',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  
  // Get service data from hardcoded JSON data
  const service = getServiceBySlug(slug);

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  const serviceBreadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hexaloop.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.hexaloop.in/services' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.hexaloop.in/services/${slug}` },
    ],
  };

  const serviceSchemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@type': 'Organization',
      name: 'Hexaloop',
      url: 'https://www.hexaloop.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '309, Bansiwala Tower, Agrasen Square',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        postalCode: '452001',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Indore' },
      { '@type': 'State', name: 'Madhya Pradesh' },
      { '@type': 'Country', name: 'India' },
    ],
    serviceType: service.title,
    ...(service.faqs && service.faqs.length > 0 && {
      mainEntity: service.faqs.map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }),
  };

  const faqSchemaJsonLd = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaJsonLd) }}
      />
      {faqSchemaJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJsonLd) }}
        />
      )}
      <Header />
      <main>
        <ServiceDetail 
          service={service} 
        />
      </main>
      <Footer />
    </div>
  );
}
