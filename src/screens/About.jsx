import React from 'react';
import SEO from '../components/SEO';
import '../styles/pages.css';

function About() {

  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ScanMe',
    url: 'https://scan-me-qr.netlify.app/about',
    description: 'The story behind ScanMe — a free, privacy-first QR code generator.',
  };
  
  return (
    <div className="page">
      <SEO
        title="About Us"
        description="Learn about ScanMe — our mission to make beautiful, branded QR codes free and accessible to everyone, without compromising your privacy."
        path="/about"
        keywords="about ScanMe, qr code generator company, free qr tool"
        jsonLd={aboutJsonLd}
      />

      <div className="page-hero">
        <h1>About <span className="gradient-text">Us</span></h1>
        <p>Our story, mission, and the people behind Scan Me.</p>
      </div>

      <div className="page-content">
        <section className="content-block">
          <h2>Our Mission</h2>
          <p>
            At Scan Me, we believe that beautiful design should be accessible to everyone. Our mission
            is to empower businesses, creators, and individuals with a free, powerful tool that turns
            ordinary QR codes into branded, eye-catching assets — without any cost or complexity.
          </p>
        </section>

        <section className="content-block">
          <h2>What We Do</h2>
          <p>
            Scan Me is a browser-based QR code generator that puts complete creative control in your
            hands. Customize foreground and background colors, pick from multiple dot patterns, and
            upload your logo to create codes that truly represent your brand. No accounts, no fees,
            no watermarks — ever.
          </p>
        </section>

        <section className="content-block">
          <h2>Our Values</h2>
          <ul className="styled-list">
            <li><strong>Privacy:</strong> All processing happens locally in your browser.</li>
            <li><strong>Simplicity:</strong> Powerful features with an intuitive interface.</li>
            <li><strong>Quality:</strong> High-resolution output that looks great everywhere.</li>
            <li><strong>Free Forever:</strong> No hidden costs, no premium tiers.</li>
          </ul>
        </section>

        <section className="content-block">
          <h2>Get in Touch</h2>
          <p>
            Have feedback or a feature request? We'd love to hear from you. Visit our
            <a href="/contact"> Contact page</a> to reach out.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;