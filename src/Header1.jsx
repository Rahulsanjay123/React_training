// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Required for navigation links

function Header1() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header1;
