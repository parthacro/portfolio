'use client';

import React from 'react';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import { projectsData } from '@/data/projects';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

export const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      {projectsData.map((project, index) => (
        <ScrollReveal key={project.id} variant="fadeUp" delay={(index % 3) * 0.12} duration={0.6}>
          <ProjectCard
            slug={project.slug}
            image={project.image}
            title={project.title}
            category={project.category}
            description={project.description}
          />
        </ScrollReveal>
      ))}
    </div>
  );
};