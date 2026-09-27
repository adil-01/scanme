import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3><span className="logo-icon">◈</span> Scan Me</h3>
          <p>Craft beautiful, custom QR codes in seconds. Free, fast, and forever.</p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <Link to="/">Generator</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Scan Me. All rights reserved.</p>
        <p className="footer-heart">Made with <span>♥</span> for the web</p>
      </div>
    </footer>
  );
}

export default Footer;