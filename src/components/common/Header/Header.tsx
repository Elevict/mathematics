import React from 'react';
import { useTheme } from '../../../lib/useTheme';
import './Header.css';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate }) => {
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">Elevict's Mathematics</div>
        <ul>
          <li className={isActive('/') ? 'active' : ''}>
            <a href="/" onClick={(e) => handleNavClick('/', e)}>Home</a>
          </li>
          <li className={isActive('/algebra') ? 'active' : ''}>
            <a href="/algebra/" onClick={(e) => handleNavClick('/algebra/', e)}>Algebra</a>
          </li>
          <li className={isActive('/calculus1') ? 'active' : ''}>
            <a href="/calculus1/" onClick={(e) => handleNavClick('/calculus1/', e)}>Calculus 1</a>
          </li>
          <li className={isActive('/calculus2') ? 'active' : ''}>
            <a href="/calculus2/" onClick={(e) => handleNavClick('/calculus2/', e)}>Calculus 2</a>
          </li>
          <li className={isActive('/calculus3') ? 'active' : ''}>
            <a href="/calculus3/" onClick={(e) => handleNavClick('/calculus3/', e)}>Calculus 3</a>
          </li>
          <li className={isActive('/linearalg') ? 'active' : ''}>
            <a href="/linearalg/" onClick={(e) => handleNavClick('/linearalg/', e)}>Linear Algebra</a>
          </li>
          <li className={isActive('/diffeq') ? 'active' : ''}>
            <a href="/diffeq/" onClick={(e) => handleNavClick('/diffeq/', e)}>Differential Equations</a>
          </li>
        </ul>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle dark/light mode"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            style={{ display: theme === 'dark' ? 'block' : 'none' }}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            style={{ display: theme === 'light' ? 'block' : 'none' }}
          >
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.828-2.829a4 4 0 00-5.656-5.656l-2.83 2.829a1 1 0 00.707 1.707H3a1 1 0 000 2h3a1 1 0 000-2H2.414l2.121-2.121a2 2 0 012.828 0 2 2 0 010 2.828l-2.829 2.829a1 1 0 001.415 1.415l2.83-2.829a4 4 0 015.656 5.656l2.828 2.829a1 1 0 11-1.414 1.414l-2.829-2.828a2 2 0 01-2.828 0 2 2 0 010-2.828l2.829-2.829a1 1 0 00-1.415-1.415l-2.83 2.829a4 4 0 00-5.656-5.656l-2.828-2.829a1 1 0 01.707-1.707H3a1 1 0 000-2H2.414l2.121-2.121a2 2 0 012.828 0 2 2 0 010 2.828l-2.829 2.829a1 1 0 001.415 1.415l2.83-2.829a4 4 0 015.656 5.656l2.828 2.829a1 1 0 11-1.414 1.414z" clipRule="evenodd"/>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
