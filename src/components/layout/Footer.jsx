import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p className="footer-text">
        © {year} dowithsudo.com — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
