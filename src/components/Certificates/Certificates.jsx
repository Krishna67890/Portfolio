import React, { useState, useEffect, useCallback } from 'react';
import './Certificates.css';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';

// Importing Certificate Assets
import cppCert from '../../assets/Certificates/Cpp-and-Oop-Concepts.jpg';
import pythonCert from '../../assets/Certificates/Python Complete course.jpg';
import spotifyCert from '../../assets/Certificates/Spotify data Visualization.jpg';
import hacktoberfestCert from '../../assets/Certificates/Certificate of Hacktoberfest.jpg';
import cyberCert from '../../assets/Certificates/Cybersecurity essentials 101.jpg';
import careerCert from '../../assets/Certificates/All India Carear Summit Aptus.jpg';
import mernCert from '../../assets/Certificates/Mern Stack Interview quetions.jpg';
import cloudCert from '../../assets/Certificates/Cloud Native Bhujbal knowlege city.jpg';
import jsDomCert from '../../assets/Certificates/JS Dom Manupulation from fyned aademy.jpg';
import internshipCert from '../../assets/Certificates/Full stack dev internship program by eduraka.jpg';
import aiHackCert from '../../assets/Certificates/International Agentic AI Hacathon Sandip University.jpg';

const Certificates = ({ searchQuery }) => {
  const { speak, stop } = usePortfolioVoice();
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const certificates = [
    {
      title: "C++ and OOP Concepts",
      issuer: "Course Completion",
      image: cppCert,
      description: "Comprehensive certification in C++ programming and Object Oriented Programming principles.",
      narration: "Certificate for C++ and OOP Concepts. This certification covers comprehensive C++ programming and Object Oriented Programming principles.",
      initialRotation: 270,
      initialScale: 0.7
    },
    {
      title: "International Agentic AI Hackathon",
      issuer: "Sandip University",
      image: aiHackCert,
      description: "Recognized for participation and innovation in the International Agentic AI Hackathon.",
      narration: "International Agentic AI Hackathon Certificate from Sandip University. Recognized for participation and innovation in Agentic AI technologies.",
      initialRotation: 270,
      initialScale: 0.7
    },
    {
      title: "Python Complete Course",
      issuer: "Course Completion",
      image: pythonCert,
      description: "Mastery of Python programming language from basics to advanced levels.",
      narration: "Python Complete Course Certificate. Representing mastery of Python programming language from basics to advanced levels."
    },
    {
      title: "Full Stack Web Development Internship",
      issuer: "Edureka",
      image: internshipCert,
      description: "Successfully completed the Full Stack Web Development internship program.",
      narration: "Full Stack Web Development Internship Certificate by Edureka. Successfully completed the intensive internship program."
    },
    {
      title: "Cybersecurity Essentials 101",
      issuer: "Cisco / Networking Academy",
      image: cyberCert,
      description: "Foundational knowledge in cybersecurity threats, risks, and protection methods.",
      narration: "Cybersecurity Essentials 101 Certificate. Foundational knowledge in cybersecurity threats, risks, and protection methods."
    },
    {
      title: "Cloud Native Computing",
      issuer: "Bhujbal Knowledge City",
      image: cloudCert,
      description: "Certification in Cloud Native technologies and architectures.",
      narration: "Cloud Native Computing Certificate from Bhujbal Knowledge City. Focusing on modern cloud technologies and architectures."
    },
    {
      title: "JS DOM Manipulation",
      issuer: "Fyned Academy",
      image: jsDomCert,
      description: "Expertise in JavaScript Document Object Model manipulation for dynamic web apps.",
      narration: "JavaScript DOM Manipulation Certificate from Fyned Academy. Expertise in manipulating the Document Object Model for dynamic web applications."
    },
    {
      title: "Hacktoberfest Contribution",
      issuer: "DigitalOcean / Hacktoberfest",
      image: hacktoberfestCert,
      description: "Awarded for successful contributions to open-source projects during Hacktoberfest.",
      narration: "Certificate of Hacktoberfest. Awarded for successful contributions to open-source projects."
    },
    {
      title: "Spotify Data Visualization",
      issuer: "Data Science Project",
      image: spotifyCert,
      description: "Certification for data analysis and visualization of Spotify streaming data.",
      narration: "Spotify Data Visualization Certificate. Awarded for excellence in data analysis and visualization of music streaming trends."
    },
    {
      title: "MERN Stack Interview Prep",
      issuer: "Technical Training",
      image: mernCert,
      description: "Advanced preparation and mastery of MERN stack concepts for professional roles.",
      narration: "MERN Stack Interview Questions Certificate. Demonstrating advanced preparation and mastery of MongoDB, Express, React, and Node.js concepts."
    },
    {
      title: "All India Career Summit",
      issuer: "Aptus",
      image: careerCert,
      description: "Participation in the national level career summit for engineering professionals.",
      narration: "All India Career Summit Certificate by Aptus. Participation in the national level career summit for engineering professionals."
    }
  ];

  const filteredCertificates = certificates.filter(cert =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openGallery = (index) => {
    setSelectedCertIndex(index);
    setRotation(filteredCertificates[index].initialRotation || 0);
  };

  const closeGallery = useCallback(() => {
    setSelectedCertIndex(null);
    setRotation(0);
    stop();
  }, [stop]);

  const nextCert = useCallback(() => {
    setSelectedCertIndex((prev) => {
      const nextIdx = (prev + 1) % filteredCertificates.length;
      setRotation(filteredCertificates[nextIdx].initialRotation || 0);
      return nextIdx;
    });
  }, [filteredCertificates]);

  const prevCert = useCallback(() => {
    setSelectedCertIndex((prev) => {
      const prevIdx = (prev - 1 + filteredCertificates.length) % filteredCertificates.length;
      setRotation(filteredCertificates[prevIdx].initialRotation || 0);
      return prevIdx;
    });
  }, [filteredCertificates]);

  const rotateImage = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  useEffect(() => {
    if (selectedCertIndex !== null && filteredCertificates[selectedCertIndex]) {
      speak(filteredCertificates[selectedCertIndex].narration);
    }
  }, [selectedCertIndex, filteredCertificates, speak]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCertIndex === null) return;
      if (e.key === 'ArrowRight') nextCert();
      if (e.key === 'ArrowLeft') prevCert();
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertIndex, nextCert, prevCert, closeGallery]);

  const handleMouseMove = (e) => {
    if (selectedCertIndex === null) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientY - innerHeight / 2) / (innerHeight / 2) * 10;
    const y = (clientX - innerWidth / 2) / (innerWidth / 2) * -10;
    setRotate({ x, y });
  };

  const resetRotation = () => setRotate({ x: 0, y: 0 });

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextCert();
    if (isRightSwipe) prevCert();
  };

  if (filteredCertificates.length === 0 && searchQuery !== "") {
    return null;
  }

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">📜 Professional Certifications</h2>
        <p className="section-subtitle">Click on any certificate to view in gallery and hear details</p>
        <div className="certificates-grid">
          {filteredCertificates.map((cert, index) => (
            <div key={index} className="certificate-card glass-morphism" onClick={() => openGallery(index)}>
              <div className="certificate-image-container">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-img"
                  style={{
                    transform: `
                      ${cert.initialRotation ? `rotate(${cert.initialRotation}deg)` : ''}
                      ${cert.initialScale ? `scale(${cert.initialScale})` : ''}
                    `.trim() || 'none'
                  }}
                />
                <div className="tap-hint">🔍 View & Listen 🔊</div>
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <span className="issuer">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertIndex !== null && filteredCertificates[selectedCertIndex] && (
        <div
          className="cert-modal-overlay"
          onClick={closeGallery}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            background: `radial-gradient(circle at ${((rotate.y / -10) + 1) * 50}% ${((rotate.x / 10) + 1) * 50}%, rgba(59, 130, 246, 0.15) 0%, rgba(2, 6, 23, 0.9) 70%)`
          }}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: rotate.x === 0 && rotate.y === 0 ? 'transform 0.5s ease' : 'none'
            }}
          >
            <div className="cert-modal-header">
              <div className="cert-modal-controls">
                <button className="cert-control-btn rotate" onClick={rotateImage} title="Rotate Image">
                  🔄 Rotate
                </button>
              </div>
              <button className="cert-modal-close" onClick={closeGallery}>✕</button>
            </div>
            <div className="cert-modal-body">
              <button className="cert-nav-btn prev" onClick={prevCert} title="Previous Certificate">
                <span className="arrow-icon">❮</span>
              </button>
              <div className="cert-image-display">
                <img
                  src={filteredCertificates[selectedCertIndex].image}
                  alt={filteredCertificates[selectedCertIndex].title}
                  className="modal-cert-img"
                  style={{
                    transform: `rotate(${rotation}deg) scale(${filteredCertificates[selectedCertIndex].initialScale || 1})`
                  }}
                />
              </div>
              <button className="cert-nav-btn next" onClick={nextCert} title="Next Certificate">
                <span className="arrow-icon">❯</span>
              </button>
            </div>
            <div className="cert-modal-footer">
              <h3>{filteredCertificates[selectedCertIndex].title}</h3>
              <span className="modal-issuer">{filteredCertificates[selectedCertIndex].issuer}</span>
              <p>{filteredCertificates[selectedCertIndex].description}</p>
              <div className="cert-counter">
                {selectedCertIndex + 1} / {filteredCertificates.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;