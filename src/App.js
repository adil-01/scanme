import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Privacy from './screens/Privacy';
import Contact from './screens/Contact';
import Terms from './screens/Terms';
import SEO from './components/SEO';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  // Site-wide defaults (Home page overrides these with its own SEO tags)
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ScanMe',
    url: 'https://scan-me-qr.netlify.app',
    logo: 'https://scan-me-qr.netlify.app/logo.png',
    description: 'Free custom QR code generator with logo support.',
    sameAs: [
      'https://twitter.com/ScanMe',
      'https://github.com/ScanMe',
    ],
  };

  return (
    <div className="app">
      <SEO
        title=""
        description="Create stunning custom QR codes with your logo, colors, and patterns. Free forever, no signup, works entirely in your browser."
        keywords="qr code generator, custom qr code, qr code with logo, free qr code, qr code maker, colored qr code"
        jsonLd={orgJsonLd}
      />
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          {/* Optional: 404 route would go here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;