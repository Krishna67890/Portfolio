import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu, items }) => {
  const handleClick = (href) => {
    toggleMenu();
    const element = document.querySelector(href);
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
                  e.preventDefault();
                  handleClick(item.href);
                }}
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