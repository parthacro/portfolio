import React, { useState } from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  slug: string;
  image: React.ReactNode;
  title: string;
  category: string;
  description?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ slug, image, title, category, description }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Clone the image element to add onLoad and onError handlers
  const enhancedImage = React.isValidElement(image)
    ? React.cloneElement(image as React.ReactElement<any>, {
        onLoad: () => setImageLoaded(true),
        onError: () => {
          setImageError(true);
          setImageLoaded(true);
        },
      })
    : image;

  return (
    <Link href={`/projects/${slug}`} className="group cursor-pointer block h-full">
      {/* Project Image Container */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-md mb-5 aspect-[4/3] w-full transform transition-all duration-300 group-hover:shadow-xl">
        {/* Skeleton Loader */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
        {/* Actual Image */}
        <div className={`transition-opacity duration-300 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}`}>
          {enhancedImage}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2 sm:space-y-3">
        <div className="inline-block bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-medium uppercase tracking-wide">
          {category}
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight line-clamp-2 min-h-[2.5rem] sm:min-h-[3.5rem]">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
            {description}
          </p>
        )}
        <div className="text-[#5EBEEB] font-semibold text-xs sm:text-sm inline-flex items-center gap-1 sm:gap-2 group-hover:gap-3 transition-all duration-300">
          See Project
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
