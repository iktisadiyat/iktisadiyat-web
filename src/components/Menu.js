// src/components/Menu.js
import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
  <nav className="menu">
    <ul className="menu-list">
      <li><Link to="/">Yazılar</Link></li>
      <li><Link to="/contact">İletişim</Link></li>
    </ul>
  </nav>
);

export default Menu;