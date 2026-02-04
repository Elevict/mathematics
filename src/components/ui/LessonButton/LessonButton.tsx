import React from 'react';
import './LessonButton.css';

interface LessonButtonProps {
  title: string;
  href: string;
  className?: string;
}

const LessonButton: React.FC<LessonButtonProps> = ({ title, href, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`lesson-button ${className}`.trim()}
    >
      <strong>{title}</strong>
    </a>
  );
};

export default LessonButton;
