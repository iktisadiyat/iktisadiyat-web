// src/pages/contact.js
import React from 'react';
import Layout from '../components/layout';

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <h1>İletişim</h1> {/* Page-specific title */}
    <p>Feel free to reach out!</p>
    <ul>
      <li><strong>Email:</strong> contact@example.com</li>
      <li><strong>Phone:</strong> (123) 456-7890</li>
      <li><strong>Address:</strong> 123 Main St, Hometown, Country</li>
    </ul>
  </Layout>
);

export default ContactPage;