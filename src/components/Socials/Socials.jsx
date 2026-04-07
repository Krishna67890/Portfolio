import React from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Socials.css';

const Socials = () => {
  const { speak } = usePortfolioVoice();
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/krishna67890', icon: '🐙', desc: "Check out my open source projects on GitHub." },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishna-patil-rajput-b66b03340', icon: '💼', desc: "Connect with me professionally on LinkedIn." },
    { name: 'Blogger', url: 'https://krishnablogy.blogspot.com/', icon: '📝', desc: "Read my latest tech articles on my Blog." },
    { name: 'YouTube', url: 'https://www.youtube.com/@atharva_gaming_yt', icon: '📺', desc: "Watch my coding and gaming content on YouTube." },
    { name: 'Linktree', url: 'https://linktr.ee/KRISHNACODERS', icon: '🌲', desc: "View all my links in one place on Linktree." },
    { name: 'Instagram', url: 'https://www.instagram.com/mr.Krishna_patil_12', icon: '📸', desc: "Follow my personal journey on Instagram." },
    { name: 'WhatsApp Channel', url: 'https://www.whatsapp.com/channel/0029Vb6Ib4ULI8YgwrV7C21C', icon: '💬', desc: "Join my WhatsApp channel for regular updates." }
  ];

  return (
    <section id="socials" className="socials-section">
      <div className="container">
        <h2 className="section-title" onMouseEnter={() => speak("Connect with me across these platforms. I am active on all of them.")}>Connect With Me</h2>
        <div className="socials-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              onMouseEnter={() => speak(social.desc)}
            >
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