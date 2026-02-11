import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Krishna Patil Rajput</span>
              <div className="logo-subtitle">Full-Stack & Game Developer</div>
            </div>
            <p className="footer-description">
              Building innovative solutions with modern technologies and creative problem-solving approaches.
              Specializing in MERN stack and AI-powered applications.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>Krishna.coders12@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Nashik, India</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#projects">Projects</a>
              <a href="#games">Games</a>
              <a href="#ai-projects">AI Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Education</h3>
            <div className="footer-edu">
              <p><strong>Matoshri College of Engineering and Research Centre</strong></p>
              <p>BE - Information Technology</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="bottom-content">
            <p>&copy; {currentYear} Krishna Patil Rajput. All rights reserved.</p>
            <div className="footer-credits">
              <p>Built with React & ❤️ in Nashik</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;