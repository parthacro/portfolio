import React from 'react';

interface StepBadgeProps {
  number: number;
  size?: 'sm' | 'md' | 'lg';
}

export const StepBadge: React.FC<StepBadgeProps> = ({ number, size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-sm sm:w-10 sm:h-10 sm:text-lg',
    md: 'w-10 h-10 text-lg sm:w-14 sm:h-14 sm:text-2xl',
    lg: 'w-12 h-12 text-xl sm:w-16 sm:h-16 sm:text-2xl'
  };

  return (
    <div className="relative flex-shrink-0">
      {/* Outer glow ring */}
      <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-[#5EBEEB] to-[#87CEEB] p-[2px] sm:p-[3px] shadow-md`}>
        {/* Inner circle */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E8F4F8] to-[#D4EEF9] flex items-center justify-center relative overflow-hidden">
          {/* Glossy shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"></div>
          
          {/* Number */}
          <span className="relative z-10 font-bold bg-gradient-to-br from-[#5EBEEB] to-[#3A9FD5] bg-clip-text text-transparent">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};
