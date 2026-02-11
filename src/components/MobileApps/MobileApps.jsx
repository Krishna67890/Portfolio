import React from 'react';
import ProjectCard from '../ProjectCard';
import './MobileApps.css';

// Importing assets
import little1 from '../../assets/Little-Learners-Hub 1.png';
import little2 from '../../assets/Little-Learners-Hub 2.png';
import game1 from '../../assets/GameHub 1.png';
import game2 from '../../assets/GameHub 2.png';
import unit1 from '../../assets/Unit Converter 1.jpg';
import unit2 from '../../assets/Unit Converter 2.jpg';
import unit3 from '../../assets/Unit Converter 3.jpg';
import unit4 from '../../assets/Unit Converter 4.jpg';
import blogger1 from '../../assets/Krishna Bloggers 1.jpg';
import blogger2 from '../../assets/Krishna Bloggers 2.jpg';

const MobileApps = () => {
  const apps = [
    {
      title: "Unit Converter",
      description: "A versatile mobile application for converting units, currencies, and processing images with a clean, intuitive interface.",
      tech: "Android, Java/Kotlin, API Integration",
      image: unit1,
      screenshots: [unit1, unit2, unit3, unit4],
      github: "https://github.com/Krishna67890/UnitCurrencyImage_Converter",
      link: "https://github.com/Krishna67890/UnitCurrencyImage_Converter"
    },
    {
      title: "KrishnaBloggers",
      description: "A professional blogging platform app designed for seamless content creation and reading experience.",
      tech: "React Native, Firebase, Node.js",
      image: blogger1,
      screenshots: [blogger1, blogger2],
      github: "https://github.com/Krishna67890/KRISHNABLOGGERS",
      link: "https://github.com/Krishna67890/KRISHNABLOGGERS"
    },
    {
      title: "GameHub Mobile",
      description: "The mobile version of GameHub, optimized for on-the-go gaming discovery and community interaction.",
      tech: "React Native, Game API, Redux",
      image: game1,
      screenshots: [game1, game2],
      github: "https://github.com/Krishna67890/GameHub",
      link: "https://github.com/Krishna67890/GameHub"
    },
    {
      title: "Little-Learners-Hub Mobile",
      description: "Interactive educational experience for children, fully optimized for mobile devices with touch-friendly controls.",
      tech: "React Native, CSS, Educational Logic",
      image: little1,
      screenshots: [little1, little2],
      github: "https://github.com/Krishna67890/Little-Learners-Hub",
      link: "https://github.com/Krishna67890/Little-Learners-Hub"
    }
  ];

  return (
    <section id="mobile-apps" className="mobile-apps-section">
      <div className="container">
        <h2 className="section-title">📱 Mobile & Responsive Apps</h2>
        <div className="projects-grid">
          {apps.map((app, index) => (
            <ProjectCard key={index} project={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileApps;