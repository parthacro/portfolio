import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { ServiceDetail } from '@/components/organisms/ServiceDetail';
import { servicesData, getServiceBySlug, getServiceIcon } from '@/data/services';

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
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
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

  // Get the icon component from hardcoded data
  const IconComponent = getServiceIcon(service.icon);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceDetail 
          service={service} 
          icon={IconComponent ? <IconComponent /> : null} 
        />
      </main>
      <Footer />
    </div>
  );
}
