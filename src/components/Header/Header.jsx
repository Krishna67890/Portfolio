import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Header.css';
import resumePdf from '../../assets/Krishna Patil resume.pdf';

const Header = ({ onOpenJourney, onOpenGame, onOpenTerminal }) => {
  const { speak } = usePortfolioVoice();
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
    { name: 'Home', href: '#hero', desc: "Go to the home section." },
    { name: 'Projects', href: '#projects', desc: "Explore my technical projects and solutions." },
    { name: 'Games', href: '#games', desc: "Play my interactive games and arcade experiences." },
    { name: 'AI', href: '#ai-projects', desc: "Check out my artificial intelligence and robotics projects." },
    { name: 'Skills', href: '#skills', desc: "View my technical arsenal and polyglot ambitions." },
    { name: 'Contact', href: '#contact', desc: "Get in touch for collaborations or inquiries." },
    { name: 'My Journey', action: onOpenJourney, desc: "Read about my professional path and background." },
    { name: 'Terminal', action: onOpenTerminal, desc: "Launch the KPR developer terminal." },
    { name: 'Game Mode', action: onOpenGame, desc: "Enter the full-screen arcade experience." }
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
                    href={item.href || '#'}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : ""}
                    onMouseEnter={() => speak(item.desc)}
                    onClick={(e) => {
                      if (item.action) {
                        e.preventDefault();
                        item.action();
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumePdf}
                  download="Krishna_Patil_Resume.pdf"
                  className="resume-btn"
                  onMouseEnter={() => speak("Download my professional resume.")}
                >
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
      <HamburgerMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        items={[...menuItems, { name: 'Resume', href: resumePdf, isDownload: true, desc: "Download my professional resume." }]}
      />
    </header>
  );
};

export default Header;