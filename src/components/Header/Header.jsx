import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';
import resumePdf from '../../assets/Krishna Patil resume.pdf';

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

  const handleProjectSelect = (e) => {
    const targetId = e.target.value;
    if (targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : ""}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={resumePdf} download="Krishna_Patil_Resume.pdf" className="resume-btn">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="project-selector-container">
            <select className="project-selector" onChange={handleProjectSelect} aria-label="Select Project">
              <option value="">Quick Jump</option>
              <option value="#projects">Advanced Projects</option>
              <option value="#games">Games</option>
              <option value="#ai-projects">AI Projects</option>
              <option value="#skills">Skills</option>
              <option value="#contact">Contact</option>
            </select>
          </div>

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
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} items={[...menuItems, { name: 'Resume', href: resumePdf, isDownload: true }]} />
    </header>
  );
};

export default Header;