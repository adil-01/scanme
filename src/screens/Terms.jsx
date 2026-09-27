import React from 'react';
import '../styles/pages.css';

function Terms() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Terms & <span className="gradient-text">Conditions</span></h1>
        {/* <p>Last updated: January 2025</p> */}
      </div>

      <div className="page-content">
        <section className="content-block">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Scan Me, you agree to be bound by these Terms and Conditions.
            If you do not agree with any part of these terms, please do not use our service.
          </p>
        </section>

        <section className="content-block">
          <h2>2. Use of Service</h2>
          <p>
            Scan Me is provided free of charge for personal and commercial use. You agree to use
            the service only for lawful purposes and in a way that does not infringe the rights
            of, or restrict or inhibit the use of this service by any third party.
          </p>
        </section>

        <section className="content-block">
          <h2>3. Intellectual Property</h2>
          <p>
            You retain all rights to the QR codes you generate, including any logos or content you
            upload. Scan Me does not claim ownership over your generated codes or your inputs.
          </p>
        </section>

        <section className="content-block">
          <h2>4. User Responsibilities</h2>
          <ul className="styled-list">
            <li>You must not upload logos or content that you do not have rights to use.</li>
            <li>You must not use the service to generate QR codes linking to illegal content.</li>
            <li>You are solely responsible for the content your QR codes point to.</li>
          </ul>
        </section>

        <section className="content-block">
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Scan Me is provided "as is" without warranties of any kind, either express or implied.
            We do not guarantee that the service will be uninterrupted, error-free, or that
            generated QR codes will be scannable by every device.
          </p>
        </section>

        <section className="content-block">
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Scan Me be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with your use of the service.
          </p>
        </section>

        <section className="content-block">
          <h2>7. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the service
            after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="content-block">
          <h2>8. Contact</h2>
          <p>
            For questions about these Terms, please visit our
            <a href="/contact"> Contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;