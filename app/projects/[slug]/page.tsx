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
    title: `${project.title} - Our Projects | Hexaloop`,
    description: project.detailedDescription,
    openGraph: {
      title: `${project.title} - Our Projects`,
      description: project.detailedDescription,
      type: 'website',
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

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  );
}
