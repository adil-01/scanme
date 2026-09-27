import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">◈</span>
          <span className="logo-text">Scan<span className="logo-accent">Me</span></span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          <li><Link to="/privacy" className={location.pathname === '/privacy' ? 'active' : ''}>Privacy</Link></li>
          <li><Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>Terms</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;