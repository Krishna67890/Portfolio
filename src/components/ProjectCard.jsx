import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import { usePortfolioVoice } from '../Hooks/usePortfolioVoice';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    if (images.length <= 1 || isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isModalOpen]);

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
    speak(`Viewing full screen images for ${project.title}`);
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
    stop();
  };

  const handleMouseEnter = () => {
    if (isModalOpen) return;
    const tech = project.tech ? `Built with ${project.tech}.` : "";
    speak(`${project.title}. ${project.description} ${tech}`);
  };

  return (
    <>
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
          onClick={openModal}
        >
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((img, index) => (
              <div key={index} className="slide">
                <img src={img} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="view-overlay">
            <span>🔍 View Gallery</span>
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

      {isModalOpen && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>✕</button>

            <div className="modal-slider">
              <button className="modal-nav-btn prev" onClick={prevSlide}>❮</button>
              <div className="modal-image-container">
                <img src={images[currentImageIndex]} alt={project.title} className="modal-image" />
                <div className="modal-caption">
                  <h4>{project.title}</h4>
                  <p>Image {currentImageIndex + 1} of {images.length}</p>
                </div>
              </div>
              <button className="modal-nav-btn next" onClick={nextSlide}>❯</button>
            </div>

            <div className="modal-thumbnails">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt="thumbnail" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
