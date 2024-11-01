// src/components/layout.js
import * as React from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import '../styles/layout.css'; // Import the merged layout CSS

const Layout = ({ location, children }) => {
  return (
    <div>
      {/* Site title at the top */}
      <header className="global-header">
        <h1 className="site-name">
          <Link to="/">İktisadiyat</Link>
        </h1>
      </header>

      {/* Fixed full-width menu */}
      <div className="menu-wrapper">
        <Menu />
      </div>

      {/* Main content wrapped in .global-wrapper for width constraint */}
      <div className="global-wrapper">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.com"> Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;