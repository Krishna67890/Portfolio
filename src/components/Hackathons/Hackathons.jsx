import React from 'react';
import './Hackathons.css';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import sikkimImg from '../../assets/Siikkim 1.png';
import prixImg from '../../assets/Prix Robotics 1.png';
import aiVibeImg from '../../assets/AI assistant 1.png';

const Hackathons = () => {
  const { speak, stop } = usePortfolioVoice();

  const hackathons = [
    {
      title: "Sikkim Travel App Hackathon",
      position: "1st Place 🏆",
      college: "Matoshri College of Engineering",
      description: "A specialized travel guide application for exploring the beauty of Sikkim with itinerary planning and location tracking.",
      image: sikkimImg,
      narration: "Sikkim Travel App Hackathon, 1st Place at Matoshri college of Engineering. It features specialized travel guide application for exploring the beauty of Sikkim with itinerary planning."
    },
    {
      title: "AI-VIBE-CHAT Personality Bot",
      position: "Vibe Coding Finalist",
      college: "MET Bhujbal Knowledge City College",
      description: "An advanced personality-based AI chatbot built during Vibe Coding using React and AI APIs.",
      link: "https://github.com/Krishna67890/AI-VIBE-CHAT-Personality-Bot--Vibe-Coding",
      image: aiVibeImg,
      narration: "AI-VIBE-CHAT Personality Bot. Vibe Coding finalist in MET Bhujbal knowledge city college. An advanced personality-based AI chatbot."
    },
    {
      title: "PRIX Robotics Scholarship AI",
      position: "Tril Project Finalist",
      college: "Sandip University",
      description: "An intelligent scholarship AI agent designed to assist students in finding and applying for scholarships automatically.",
      link: "https://github.com/Krishna67890/Scholarship-AI-Agent-For-Sandip-University",
      image: prixImg,
      narration: "PRIX Robotics Scholarship AI. Tril Project finalist at Sandip University. An advanced AI agent designed to assist students in finding and applying for scholarships."
    }
  ];

  return (
    <section id="hackathons" className="hackathons-section">
      <div className="container">
        <h2 className="section-title">🏆 Hackathons & Achievements</h2>
        <div className="hackathons-timeline">
          {hackathons.map((hack, index) => (
            <div
              key={index}
              className="hack-card glass-morphism"
              onMouseEnter={() => speak(hack.narration)}
              onMouseLeave={stop}
            >
              <div className="hack-image">
                <img src={hack.image} alt={hack.title} />
                <div className="hack-badge">{hack.position}</div>
              </div>
              <div className="hack-content">
                <span className="hack-college">{hack.college}</span>
                <h3>{hack.title}</h3>
                <p>{hack.description}</p>
                {hack.link && (
                  <a href={hack.link} target="_blank" rel="noopener noreferrer" className="hack-link">
                    View on GitHub ❯
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
