import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Games', href: '#games' },
    { name: 'AI', href: '#ai-projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>Krishna Patil Rajput</span>
        </div>

        <div className="header-right">
          <nav className="nav">
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="theme-toggle-container">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {isDark ? (
                <span className="theme-icon">🌙</span>
              ) : (
                <span className="theme-icon">☀️</span>
              )}
              <div className={`toggle-track ${isDark ? 'active' : ''}`}>
                <div className="toggle-thumb"></div>
              </div>
            </button>
          </div>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} items={menuItems} />
    </header>
  );
};

export default Header;