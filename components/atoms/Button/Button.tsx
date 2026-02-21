import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  href, 
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 inline-block text-center";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-lg"
  };
  
  const variants = {
    primary: "bg-[#5EBEEB] text-white hover:bg-[#4AADE0] shadow-md hover:shadow-lg",
    secondary: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-[#5EBEEB] hover:text-[#5EBEEB]"
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
