import React, { useState } from 'react';
import '../styles/pages.css';

const FAQS = [
  {
    q: 'Is QRForge really free?',
    a: 'Yes — 100% free, forever. No account, no credit card, no watermarks, no premium tiers. Every feature you see is available to everyone.',
  },
  {
    q: 'What image formats can I use for my logo?',
    a: 'PNG (with transparency recommended), JPG, and SVG. PNG works best because transparent backgrounds tint cleanly with any color you choose.',
  },
  {
    q: 'Can I use the QR codes commercially?',
    a: 'Absolutely. Any QR code you generate is yours to use for personal, commercial, print, or digital projects — no attribution required.',
  },
  {
    q: 'Will my QR code always scan?',
    a: 'Yes, as long as your URL is valid and the logo doesn\'t cover more than ~40% of the code. Our error-correction level is set to "H" (highest) specifically to make logo overlays safe.',
  },
];

function Contact() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <div className="page">
      <div className="page-hero">
        <h1>Contact <span className="gradient-text">Us</span></h1>
        <p>Questions, feedback, or just want to say hi? We're all ears.</p>
      </div>

      <div className="page-content">
        <div className="contact-grid">
          {/* LEFT — Reach-out info */}
          <div className="contact-info">
            <h2>Let's Talk</h2>
            <p>
              Whether you have a feature request, found a bug, or want to collaborate,
              pick whichever channel suits you best. We read everything.
            </p>

            <a className="info-item" href='mailto:hello.scan.me@gmail.com'>
              <span className="info-icon">✉</span>
              <div>
                <strong>Email</strong>
                <p>hello.scan.me@gmail.com</p>
              </div>
            </a>

            <div className="info-item">
              <span className="info-icon">⚑</span>
              <div>
                <strong>Location</strong>
                <p>Remote — Worldwide</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⏱</span>
              <div>
                <strong>Response Time</strong>
                <p>Within 24–48 hours</p>
              </div>
            </div>

          </div>

          {/* RIGHT — FAQ accordion */}
          <div className="faq-panel">
            <h2>Frequently Asked</h2>
            <div className="faq-list">
              {FAQS.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`faq-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(i)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="faq-answer-wrap">
                      <div className="faq-answer">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;