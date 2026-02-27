import React from 'react';

interface ServiceTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceTypeCard: React.FC<ServiceTypeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 md:gap-4 text-center sm:text-left">
        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#5EBEEB] to-[#4AADE0] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xs sm:text-sm md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#5EBEEB] transition-colors">
            {title}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
