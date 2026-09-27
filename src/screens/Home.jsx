import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">✦ Free & Unlimited</span>
          <h1 className="hero-title">
            Create <span className="gradient-text">Stunning</span> QR Codes
          </h1>
          <p className="hero-subtitle">
            Customize colors, patterns, and add your logo. Download high-quality QR codes instantly — no sign-up required.
          </p>
        </div>
      </section>

      <section className="generator-section">
        <QRCodeGenerator />
      </section>

      <section className="features">
        <h2 className="section-title">Why <span className="gradient-text">Scan Me</span>?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Full Customization</h3>
            <p>Change colors, dot patterns, and background to match your brand identity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🖼️</div>
            <h3>Logo Support</h3>
            <p>Add your logo at the center and tint it with any color you love.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Download</h3>
            <p>Generate and download high-resolution PNG codes in a single click.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>Everything runs in your browser. Your data never leaves your device.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;