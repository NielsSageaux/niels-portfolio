import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="site-header">
      <nav className="nav">        
        <div className="nav-tabs">
          <Link 
            to="/portfolio" 
            className={`nav-tab ${location.pathname === '/portfolio' ? 'active' : ''}`}
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
      </nav>
    </header>
  );
};

export default Header;
