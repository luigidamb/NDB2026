import React from 'react';
import logoImage from 'figma:asset/4d6df375fd0b092d5f271495382cced8cf50a8f0.png';

interface LogoProps {
  variant?: 'primary' | 'inverse';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'primary', className = '' }) => {
  return (
    <div className={className}>
      <img 
        src={logoImage} 
        alt="NDB Web Service - Martech & AI" 
        className={`h-8 xl:h-10 w-auto ${variant === 'inverse' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};
