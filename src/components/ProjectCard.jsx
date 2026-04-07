import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import { usePortfolioVoice } from '../Hooks/usePortfolioVoice';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { speak, stop } = usePortfolioVoice();

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
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const images = project.screenshots || [project.image];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseEnter = () => {
    const tech = project.tech ? `Built with ${project.tech}.` : "";
    speak(`${project.title}. ${project.description} ${tech}`);
  };

  return (
    <div
      className="project-card glass-morphism"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={stop}
    >
      <div
        className="card-slider"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div key={index} className="slide">
              <img src={img} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button className="slider-btn prev" onClick={prevSlide}>❮</button>
            <button className="slider-btn next" onClick={nextSlide}>❯</button>
            <div className="slider-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                ></span>
              ))}
            </div>
          </>
        )}
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
          {project.link && <a href={project.link} className="btn card-btn glow-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {project.github && <a href={project.github} className="btn card-btn outline" target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;