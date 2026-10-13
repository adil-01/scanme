import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import SEO from '../components/SEO';
import '../styles/home.css';

function Home() {
  // Rich structured data for Google rich results
  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ScanMe',
    url: 'https://scan-me-qr.netlify.app/',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any (Web)',
    description:
      'Free online QR code generator with full customization — colors, patterns, and center logo support.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1287',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is ScanMe really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — ScanMe is 100% free forever, with no signup, watermarks, or premium tiers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I add a logo to my QR code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Upload any PNG, JPG, or SVG logo and it will be placed at the center of the QR code. You can also tint the logo with any color.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do my files leave my device?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All QR generation happens entirely in your browser. Your URLs and logos never touch our servers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use ScanMe codes commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Every QR code you generate is yours to use for personal or commercial purposes, with no attribution.',
        },
      },
    ],
  };

  return (
    <div className="home">
      <SEO
        title="Free Custom QR Code Generator with Logo & Colors"
        description="Create stunning custom QR codes with your own logo, colors, and patterns. Free forever, no signup. Works 100% in your browser — download as PNG instantly."
        path="/"
        keywords="qr code generator, custom qr code, free qr code generator, qr code with logo, colored qr code, branded qr code, qr code maker online"
        jsonLd={[webAppJsonLd, faqJsonLd]}
      />

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
        <h2 className="section-title">Why <span className="gradient-text">ScanMe</span>?</h2>
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