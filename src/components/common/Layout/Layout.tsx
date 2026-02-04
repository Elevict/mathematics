import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useMathJax } from '../../../lib/useMathJax';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  currentPath?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Elevict's Mathematics", currentPath }) => {
  const { typeset } = useMathJax();

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Set loaded state immediately
    document.body.classList.add('loaded');
    
    // Trigger MathJax rendering when content changes
    setTimeout(() => typeset(), 100);
  }, [title, typeset]);

  useEffect(() => {
    // Add mouse-following spotlight effect to cards
    const cards = document.querySelectorAll('.card');
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Set CSS variables --x and --y in pixels (relative to card)
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.setProperty('--x', '50%');
      card.style.setProperty('--y', '50%');
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove as EventListener);
      card.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, [children]);

  return (
    <div className="app-container">
      <div className="grid-bg"></div>
      
      <Header currentPath={currentPath} />
      
      <main>
        <div className="content-wrapper">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
