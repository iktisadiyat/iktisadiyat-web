// src/components/layout.js
import * as React from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import { StaticImage } from "gatsby-plugin-image";



const Layout = ({ location, children }) => {
  return (
    <div>
      {/* Site title at the top */}
      <header className="global-header">
        <div className="site-name">
          <Link to="/">
          <StaticImage
            src="../images/iktisadiyat_logo.png"
            alt="İktisadiyat Logo"
            placeholder="blurred"
            layout="constrained"
            width={250}
            sizes="(max-width: 600px) 150px, 250px"
          />
          </Link>
        </div>
      </header>

      {/* Fixed full-width menu */}
      <div className="menu-wrapper">
        <Menu />
      </div>

      {/* Main content wrapped in .global-wrapper for width constraint */}
      <div className="global-wrapper">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, İktisadiyat
        </footer>
      </div>
    </div>
  );
};

export default Layout;