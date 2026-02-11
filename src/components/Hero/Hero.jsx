import React from 'react';
import './Hero.css';
import profileLogo from '../../assets/Krishna logo.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left">
            <div className="photo-circle">
              <img src={profileLogo} alt="Krishna Patil Rajput" />
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-badge">🎓 IT Student | Full-Stack & Game Developer</div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-rgb">Krishna Patil Rajput</span> 👨‍💻
            </h1>
            <p className="hero-description">
              I'm a passionate 2nd Year IT Student at <strong>Matoshri College of Engineering and Research Center</strong>, Nashik.
              With hands-on experience in MERN Stack and Game Development, I build systems that are efficient both in code and execution.
            </p>
            <p className="hero-description">
              📍 Based in <strong>Nashik, India</strong>. Currently working on advanced AI assistants and immersive gaming projects using Unity and Godot.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">Advanced Projects</a>
              <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;