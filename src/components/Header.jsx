import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(() => (
    typeof localStorage !== 'undefined' ? (localStorage.getItem('theme') || '') : ''
  ));

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      root.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return '';
      return 'dark';
    });
  };
  
  return (
    <header className="site-header">
      <nav className="nav">        
        <div className="nav-tabs">
          <Link 
            to="/" 
            className={`nav-tab ${location.pathname === '/' ? 'active' : ''}`}
          >
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Home</span>
          </Link>
          <Link 
            to="/projects" 
            className={`nav-tab ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            <span className="nav-icon">💻</span>
            <span className="nav-label">Projects</span>
          </Link>
        </div>
        <div style={{ marginLeft: '1rem' }}>
          <button type="button" className="btn-secondary" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🖥️'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
