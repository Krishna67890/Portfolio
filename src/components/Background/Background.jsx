import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <section id="background" className="background-section">
      <div className="container">
        <h2 className="section-title">🎓 My Journey & Background</h2>
        <div className="background-grid">
          <div className="background-card rgb-card">
            <div className="card-icon">📚</div>
            <h3>Education</h3>
            <p><strong>2nd Year IT Student</strong></p>
            <p>Matoshri College of Engineering and Research Centre</p>
            <p className="card-detail">Focusing on Information Technology fundamentals and advanced software engineering principles.</p>
          </div>

          <div className="background-card rgb-card">
            <div className="card-icon">💻</div>
            <h3>Hands-on Experience</h3>
            <p><strong>Full-Stack Development</strong></p>
            <p>Extensive experience in the MERN Stack (MongoDB, Express, React, Node.js).</p>
            <p className="card-detail">Built 15+ advanced web projects, clones, and interactive platforms using modern frontend and backend technologies.</p>
          </div>

          <div className="background-card rgb-card">
            <div className="card-icon">🔧</div>
            <h3>Systems & Virtualization</h3>
            <p><strong>OS & Environment Management</strong></p>
            <p>Skilled in configuring Dual Boot (Windows 10/11, Ubuntu 24.04 LTS) and VirtualBox.</p>
            <p className="card-detail">Actively managing various Linux distros like Manjaro and Linux Mint for testing performance and stability.</p>
          </div>

          <div className="background-card rgb-card">
            <div className="card-icon">🎯</div>
            <h3>Professional Goal</h3>
            <p><strong>Versatile Full-Stack Developer</strong></p>
            <p>Aiming to bridge the gap between efficient code and system-level performance.</p>
            <p className="card-detail">Constantly learning DevOps tools like Docker and exploring system automation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;