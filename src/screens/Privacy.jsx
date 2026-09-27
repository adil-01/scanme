import React from 'react';
import '../styles/pages.css';

function Privacy() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Privacy <span className="gradient-text">Policy</span></h1>
        {/* <p>Last updated: January 2025</p> */}
      </div>

      <div className="page-content">
        <section className="content-block">
          <h2>1. Information We Collect</h2>
          <p>
            Scan Me is designed with privacy as a core principle. We do not collect, store, or
            transmit any personal information. All QR code generation, customization, and logo
            processing happens entirely within your web browser.
          </p>
        </section>

        <section className="content-block">
          <h2>2. How We Use Your Data</h2>
          <p>
            We don't. Any URLs, colors, images, or other inputs you provide are processed locally
            on your device and are never sent to our servers or any third party.
          </p>
        </section>

        <section className="content-block">
          <h2>3. Cookies & Analytics</h2>
          <p>
            We may use minimal, anonymized analytics to understand overall usage trends. We do not
            use tracking cookies or sell any data to advertisers. No personal identifiers are stored.
          </p>
        </section>

        <section className="content-block">
          <h2>4. Third-Party Services</h2>
          <p>
            Our service does not rely on third-party QR generation APIs. All code is executed
            client-side, meaning no data ever leaves your device to external processors.
          </p>
        </section>

        <section className="content-block">
          <h2>5. Children's Privacy</h2>
          <p>
            Scan Me is not directed at children under 13. We do not knowingly collect any personal
            information from anyone, including children.
          </p>
        </section>

        <section className="content-block">
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be posted on this page
            with an updated revision date.
          </p>
        </section>

        <section className="content-block">
          <h2>7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please reach out via our
            <a href="/contact"> Contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;