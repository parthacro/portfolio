'use client';

import React from 'react';
import type { Testimonial } from '@/types/testimonial';

const quoteColors = ['#7BC67E', '#5EBEEB', '#F5A623', '#E06B9E', '#8B7BF5', '#FF7B54'];

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  colorIndex?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, colorIndex = 0 }) => {
  const accentColor = quoteColors[colorIndex % quoteColors.length];

  return (
    <div className="h-full flex flex-col items-center text-center px-2">
      {/* Card with organic shape */}
      <div
        className="relative w-full pt-12 pb-8 px-6 flex flex-col items-center transition-all duration-300"
        style={{
          backgroundColor: '#f7f8fa',
          borderRadius: '30px 30px 50% 50% / 30px 30px 15% 15%',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}
      >
        {/* Quote Icon Circle - positioned on top */}
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: accentColor }}
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Client Name */}
        <h4 className="font-bold text-gray-900 text-lg mt-2">
          {testimonial.name}
        </h4>

        {/* Client Designation */}
        <p className="text-sm text-gray-500 mt-1">
          {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
        </p>

        {/* Rating Stars */}
        <div className="flex gap-1 mt-3 mb-5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 fill-current"
              style={{ color: '#F5A623' }}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {testimonial.text}
        </p>

        {/* Thumbs up icon bottom right */}
        <div className="absolute bottom-4 right-6 opacity-15">
          <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
