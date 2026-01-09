import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, ExternalLink, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Buat CV', path: '/create' },
    { label: 'Tips', path: '/tips' },
    { label: 'Template', path: '/templates' },
    { label: 'Tentang', path: '/about' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-nav app-header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="logo-icon">
            <FileText size={20} />
          </div>
          <span>ATS<span className="highlight">Forged</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://dowithsudo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            Visit dowithsudo.com <ExternalLink size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://dowithsudo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link"
          >
            Visit dowithsudo.com
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
