// src/pages/contact.js
import React from 'react';
import Layout from '../components/layout';
import '../styles/contact.css'; // Import a new CSS file for styling

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <h1>İletişim</h1>
    <p>Bizimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz:</p>
    <div className="contact-list">
      <div className="contact-item">
        <span className="contact-label">X (Twitter):</span>
        <a
          href="https://x.com/iktisadiyat"
          target="_blank"
          rel="noopener noreferrer"
        >
          @iktisadiyat
        </a>
      </div>
    </div>
  </Layout>
);

export default ContactPage;