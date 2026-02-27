import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { CheckmarkItem } from '@/components/atoms/CheckmarkItem';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { Button } from '@/components/atoms/Button';
import { TechStackBadge } from '@/components/atoms/TechStackBadge';
import { ScrollReveal } from '@/components/atoms/ScrollReveal';

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EDF7FC] to-white">
      {/* Back Button */}
      <div className="pt-24 md:pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#5EBEEB] transition-colors group font-medium"
        >
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-4 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <ScrollReveal variant="fadeLeft" duration={0.7}>
                <div className="inline-block bg-[#5EBEEB]/10 text-[#5EBEEB] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold mb-2 sm:mb-3 md:mb-4 uppercase">
                  {project.category}
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </ScrollReveal>
              
              <ScrollReveal variant="fadeUp" delay={0.12} duration={0.7}>
              {/* Project Meta Info */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md border border-gray-100">
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-0.5 sm:mb-1">Duration</div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{project.duration}</div>
                </div>
                <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md border border-gray-100">
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-0.5 sm:mb-1">Team Size</div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{project.teamSize}</div>
                </div>
              </div>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal variant="fadeUp" delay={0.2} duration={0.7}>
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="primary" size="lg" className="w-full text-sm sm:text-base">
                      View Live Project
                    </Button>
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="secondary" size="lg" className="w-full text-sm sm:text-base">
                      View on GitHub
                    </Button>
                  </a>
                )}
                <Link href="/contact" className="w-full">
                  <Button variant="secondary" size="lg" className="w-full text-sm sm:text-base">
                    Start Similar Project
                  </Button>
                </Link>
              </div>
              </ScrollReveal>
            </div>

            {/* Right Image/Icon */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <ScrollReveal variant="fadeRight" delay={0.15} duration={0.7}>
                <div className="w-full aspect-[4/3] relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" duration={0.7}>
            <SectionHeading 
              preTitle="TECHNOLOGIES"
              title="Tech Stack Used"
            />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {project.techStack.map((tech, index) => (
                <TechStackBadge key={index} tech={tech} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-6 sm:pt-8 md:pt-10 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDF7FC]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeUp" duration={0.7}>
            <SectionHeading 
              preTitle="FEATURES"
              title="Key Features Implemented"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {project.features.map((feature, index) => (
              <ScrollReveal key={index} variant="fadeUp" delay={(index % 2) * 0.1} duration={0.6}>
                <CheckmarkItem text={feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
