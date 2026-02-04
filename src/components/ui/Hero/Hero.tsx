import React from 'react';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  size = 'large',
  className = '',
}) => {
  return (
    <div className={`hero hero--${size} ${className}`.trim()}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Hero;
