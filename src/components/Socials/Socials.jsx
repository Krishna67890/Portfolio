import React from 'react';
import './Socials.css';

const Socials = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/krishna67890', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishna-patil-rajput-b66b03340', icon: '💼' },
    { name: 'Blogger', url: 'https://krishnablogy.blogspot.com/', icon: '📝' },
    { name: 'YouTube', url: 'https://www.youtube.com/@atharva_gaming_yt', icon: '📺' },
    { name: 'Linktree', url: 'https://linktr.ee/KRISHNACODERS', icon: '🌲' },
    { name: 'Instagram', url: 'https://www.instagram.com/mr.Krishna_patil_12', icon: '📸' },
    { name: 'WhatsApp Channel', url: 'https://www.whatsapp.com/channel/0029Vb6Ib4ULI8YgwrV7C21C', icon: '💬' }
  ];

  return (
    <section id="socials" className="socials-section">
      <div className="container">
        <h2 className="section-title">Connect With Me</h2>
        <div className="socials-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card">
              <span className="social-icon">{social.icon}</span>
              <span className="social-name">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;