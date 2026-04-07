import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu, items }) => {
  const handleClick = (item) => {
    toggleMenu();
    if (item.isDownload) {
      const link = document.createElement('a');
      link.href = item.href;
      link.download = 'Krishna_Patil_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
      <div className="close-menu" onClick={toggleMenu}>✕</div>
      <div className="menu-content">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => {
                  if (!item.isDownload) e.preventDefault();
                  handleClick(item);
                }}
                download={item.isDownload ? "Krishna_Patil_Resume.pdf" : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="social-links-mobile">
          <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/krishna-patil-rajput-b66b03340" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;