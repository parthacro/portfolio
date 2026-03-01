import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects & Portfolio | 100+ Completed Projects | Hexaloop Indore',
  description:
    'Explore Hexaloop\'s portfolio of 100+ successful projects. Website design, mobile apps, SEO campaigns, custom software, cloud solutions & AI projects delivered for startups, SMEs & enterprises in Indore and worldwide.',
  keywords: [
    'Hexaloop projects',
    'IT company Indore portfolio',
    'web development projects Indore',
    'mobile app projects India',
    'software development portfolio',
    'completed IT projects',
    'case studies IT company',
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Our Projects & Portfolio | Hexaloop IT Company Indore',
    description:
      'Explore 100+ successful projects delivered by Hexaloop. Web design, mobile apps, SEO, software & AI solutions for businesses across India and worldwide.',
    url: '/projects',
    type: 'website',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
