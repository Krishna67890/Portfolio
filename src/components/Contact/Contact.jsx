import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to collaborate? Let's connect!</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="card-icon">👋</div>
              <h3>Let's Connect</h3>
              <p>I'm always excited to discuss new opportunities, collaborate on interesting projects, or just chat about technology and innovation.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="item-icon">📧</div>
                  <div className="item-content">
                    <strong>Email</strong>
                    <span>Krishna.coders12@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="item-icon">📍</div>
                  <div className="item-content">
                    <strong>Location</strong>
                    <span>Nashik, India</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="item-icon">🎓</div>
                  <div className="item-content">
                    <strong>Education</strong>
                    <span>Matoshri College of Engineering and Research Centre</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Connect with me:</h4>
                <div className="social-grid">
                  <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer" className="social-link github">
                    <span className="social-icon">🐙</span>
                    <span className="social-text">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/krishna-patil-rajput-b66b03340" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <span className="social-icon">💼</span>
                    <span className="social-text">LinkedIn</span>
                  </a>
                  <a href="https://krishnablogy.blogspot.com/" target="_blank" rel="noopener noreferrer" className="social-link blogger">
                    <span className="social-icon">📝</span>
                    <span className="social-text">Blogger</span>
                  </a>
                  <a href="https://www.youtube.com/@atharva_gaming_yt" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                    <span className="social-icon">📺</span>
                    <span className="social-text">YouTube</span>
                  </a>
                  <a href="https://linktr.ee/KRISHNACODERS" target="_blank" rel="noopener noreferrer" className="social-link linktree">
                    <span className="social-icon">🌲</span>
                    <span className="social-text">Linktree</span>
                  </a>
                  <a href="https://www.instagram.com/mr.Krishna_patil_12" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                    <span className="social-icon">📸</span>
                    <span className="social-text">Instagram</span>
                  </a>
                  <a href="https://www.whatsapp.com/channel/0029Vb6Ib4ULI8YgwrV7C21C" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                    <span className="social-icon">💬</span>
                    <span className="social-text">WhatsApp</span>
                  </a>
                </div>
              </div>
              
              <div className="availability">
                <div className="availability-status">
                  <div className="status-indicator available"></div>
                  <span>Currently Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible</p>
            </div>
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <div className="input-wrapper textarea-wrapper">
                <span className="input-icon">💬</span>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="submit-btn">
              <span className="btn-icon">🚀</span>
              Send Message
            </button>
            
            <div className="form-footer">
              <p>Or email me directly at: <a href="mailto:Krishna.coders12@gmail.com">Krishna.coders12@gmail.com</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;