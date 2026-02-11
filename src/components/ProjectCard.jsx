import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use provided screenshots or placeholders
  const images = project.screenshots || [project.image, ...Array(9).fill(null).map((_, i) => `https://via.placeholder.com/600x350?text=${project.title}+Slide+${i+2}`)];

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="advanced-project-card rgb-card">
      <div className="card-slider">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="slide">
              <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="slider-btn prev" onClick={prevSlide}>❮</button>
        <button className="slider-btn next" onClick={nextSlide}>❯</button>

        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <div className="card-tech-stack">
          {project.tech && project.tech.split(',').map((t, i) => (
            <span key={i} className="tech-tag">{t.trim()}</span>
          ))}
        </div>
        <div className="card-links">
          {project.link && <a href={project.link} className="btn card-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {project.github && <a href={project.github} className="btn card-btn outline" target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;