import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { ProjectDetail } from '@/components/organisms/ProjectDetail';
import { projectsData, getProjectBySlug } from '@/data/projects';

// Force static generation
export const dynamic = 'force-static';
export const dynamicParams = false;

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all projects at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Portfolio | Hexaloop IT Company Indore`,
    description: project.detailedDescription,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} - Our Projects | Hexaloop`,
      description: project.detailedDescription,
      url: `/projects/${slug}`,
      type: 'website',
      siteName: 'Hexaloop',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Our Projects`,
      description: project.detailedDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  
  // Get project data
  const project = getProjectBySlug(slug);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  const projectBreadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hexaloop.in' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.hexaloop.in/projects' },
      { '@type': 'ListItem', position: 3, name: project.title, item: `https://www.hexaloop.in/projects/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectBreadcrumbJsonLd) }}
      />
      <Header />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  );
}
