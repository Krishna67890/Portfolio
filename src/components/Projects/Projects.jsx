import React from 'react';
import ProjectCard from '../ProjectCard';
import './Projects.css';

// Importing assets
import tech1 from '../../assets/TechFundamentals 1.png';
import tech2 from '../../assets/TechFundamentals 2.png';
import tech3 from '../../assets/TechFundamentals 3.png';
import tech4 from '../../assets/TechFundamentals 4.png';
import tech5 from '../../assets/TechFundamentals 5.png';

import ai1 from '../../assets/AI assistant 1.png';
import ai2 from '../../assets/AI assistant 2.png';
import ai3 from '../../assets/AI assistant 3.png';
import ai4 from '../../assets/AI assistant 4.png';

import chicken1 from '../../assets/Online Chicken 1.png';
import chicken2 from '../../assets/Online Chicken 2.png';
import chicken3 from '../../assets/Online Chicken 3.png';
import chicken4 from '../../assets/Online Chicken 4.png';
import chicken5 from '../../assets/Online Chicken 5.png';

import game1 from '../../assets/GameHub 1.png';
import game2 from '../../assets/GameHub 2.png';
import game3 from '../../assets/GameHub 3.png';
import game4 from '../../assets/GameHub 4.png';
import game5 from '../../assets/GameHub 5.png';

import yt1 from '../../assets/Youtube 1.png';
import yt2 from '../../assets/Youtube 2.png';
import yt3 from '../../assets/youtube 3.png';
import yt4 from '../../assets/Youtube 4.png';

import linkedin1 from '../../assets/Linked in 1.png';
import linkedin2 from '../../assets/Linked in 2.png';
import linkedin3 from '../../assets/Linked in 3.png';
import linkedin4 from '../../assets/Linked in 4.png';
import linkedin5 from '../../assets/Linked in 5.png';

import airbnb1 from '../../assets/Airbnb 1.png';
import airbnb2 from '../../assets/Airbnb 2.png';
import airbnb3 from '../../assets/Airbnb 3.png';
import airbnb4 from '../../assets/Airbnb 4.png';
import airbnb5 from '../../assets/Airbnb 5.png';

import organic1 from '../../assets/Organic Farming 1.png';
import organic2 from '../../assets/Organic Farming 2.png';
import organic3 from '../../assets/Organic Farming 3.png';
import organic4 from '../../assets/Organic Farming 4.png';
import organic5 from '../../assets/Organic Farming 5.png';

import feed1 from '../../assets/Feedmind 1.png';
import feed2 from '../../assets/FeedMind 2.png';
import feed3 from '../../assets/Feedmind 3.png';
import feed4 from '../../assets/FeedMind 4.png';
import feed5 from '../../assets/FeedMind 5.png';

import sing1 from '../../assets/Singers 1.png';
import sing2 from '../../assets/Singers 2.png';

import sikkim1 from '../../assets/Siikkim 1.png';
import sikkim2 from '../../assets/Sikkim 2.png';
import sikkim3 from '../../assets/Sikkim 3.png';
import sikkim4 from '../../assets/Sikkim 4.png';
import sikkim5 from '../../assets/Sikkim 5.png';

import formula1 from '../../assets/Formula 1.png';
import formula2 from '../../assets/Formula 2.png';

import cyber1 from '../../assets/Cyber 1.png';
import cyber2 from '../../assets/Cyber 2.png';
import cyber3 from '../../assets/Cyber 3.png';
import cyber4 from '../../assets/cyber 4.png';
import cyber5 from '../../assets/cyber 5.png';

import typing1 from '../../assets/Typing 1.png';
import typing2 from '../../assets/Typing 2.png';
import typing3 from '../../assets/typing 3.png';
import typing4 from '../../assets/typing 4.png';

import little1 from '../../assets/Little-Learners-Hub 1.png';
import little2 from '../../assets/Little-Learners-Hub 2.png';

const Projects = () => {
  const advancedProjects = [
    {
      title: "Tech Fundamentals Hub",
      description: "A comprehensive learning platform designed to help beginners master core technical concepts with ease and clarity.",
      tech: "React, JavaScript, CSS, Blog Integration",
      image: tech1,
      screenshots: [tech1, tech2, tech3, tech4, tech5],
      link: "https://krishnablogy.blogspot.com/2026/02/tech-fundamentals-hub.html"
    },
    {
      title: "Professional AI Assistant",
      description: "A high-performance AI-powered virtual assistant built to streamline workflows and provide intelligent responses.",
      tech: "AI Integration, JavaScript, React, NLP",
      image: ai1,
      screenshots: [ai1, ai2, ai3, ai4],
      link: "https://krishnablogy.blogspot.com/2026/01/your-professional-ai-assistant.html"
    },
    {
      title: "Online Chicken Delivery App",
      description: "A robust e-commerce solution for fresh poultry delivery with real-time tracking and secure payment integration.",
      tech: "React, Node.js, Firebase, UI/UX",
      image: chicken1,
      screenshots: [chicken1, chicken2, chicken3, chicken4, chicken5],
      link: "https://krishnablogy.blogspot.com/2026/01/online-chicken-delivery-app.html"
    },
    {
      title: "GameHub",
      description: "A centralized platform for gamers featuring multi-genre game collections and community engagement tools.",
      tech: "React, Game APIs, CSS3, JavaScript",
      image: game1,
      screenshots: [game1, game2, game3, game4, game5],
      link: "https://krishnablogy.blogspot.com/2026/01/gamehub.html"
    },
    {
      title: "YouTube Clone",
      description: "A high-fidelity YouTube replica with video streaming capabilities, search functionality, and responsive video player.",
      tech: "React, YouTube API, Tailwind CSS",
      image: yt1,
      screenshots: [yt1, yt2, yt3, yt4],
      link: "https://krishnablogy.blogspot.com/2025/12/youtube-clone.html"
    },
    {
      title: "LinkedIn Clone",
      description: "A professional networking site clone featuring user profiles, post feeds, and social interaction mechanics.",
      tech: "React, Firebase, Redux, Styled Components",
      image: linkedin1,
      screenshots: [linkedin1, linkedin2, linkedin3, linkedin4, linkedin5],
      link: "https://krishnablogy.blogspot.com/2025/11/linkedin-clone.html"
    },
    {
      title: "Airbnb Clone",
      description: "Discover your dream stay with this sophisticated booking platform featuring map integration and property listings.",
      tech: "React, Leaflet, Node.js, CSS Grid",
      image: airbnb1,
      screenshots: [airbnb1, airbnb2, airbnb3, airbnb4, airbnb5],
      link: "https://krishnablogy.blogspot.com/2025/11/discover-your-dream-stay-explore-unique.html"
    },
    {
      title: "Organic Farming Platform",
      description: "An innovative agricultural web solution connecting organic farmers with consumers and providing farming insights.",
      tech: "React, UI/UX, Sustainability Tech",
      image: organic1,
      screenshots: [organic1, organic2, organic3, organic4, organic5],
      link: "https://krishnablogy.blogspot.com/2025/11/organic-farming.html"
    },
    {
      title: "Feed Mind",
      description: "A curated content discovery platform focused on mental growth, productivity, and tech education.",
      tech: "React, Content APIs, Framer Motion",
      image: feed1,
      screenshots: [feed1, feed2, feed3, feed4, feed5],
      link: "https://krishnablogy.blogspot.com/2025/10/feedmind_14.html"
    },
    {
      title: "Singgers App",
      description: "A mobile-first music application for artists to showcase their talent and connect with fans globally.",
      tech: "React Native, Audio API, Firebase",
      image: sing1,
      screenshots: [sing1, sing2],
      link: "https://krishnablogy.blogspot.com/2025/09/singgers-app.html"
    },
    {
      title: "Sikkim Travel App",
      description: "A specialized travel guide application for exploring the beauty of Sikkim with itinerary planning.",
      tech: "React, Mapbox, Responsive Design",
      image: sikkim1,
      screenshots: [sikkim1, sikkim2, sikkim3, sikkim4, sikkim5],
      link: "https://krishnablogy.blogspot.com/2025/09/sikkim-travel-app.html"
    },
    {
      title: "Formula Hub",
      description: "A quick-reference repository for complex mathematical and scientific formulas with interactive calculators.",
      tech: "React, MathJS, CSS Flexbox",
      image: formula1,
      screenshots: [formula1, formula2],
      link: "https://krishnablogy.blogspot.com/2025/09/formula-hub.html"
    },
    {
      title: "Cyber-Hub Learners",
      description: "An educational portal dedicated to cybersecurity awareness and foundational security concepts.",
      tech: "React, Security APIs, Educational Tech",
      image: cyber1,
      screenshots: [cyber1, cyber2, cyber3, cyber4, cyber5],
      link: "https://krishnablogy.blogspot.com/2025/09/cyber-hub-learners.html"
    },
    {
      title: "Typing Speed App",
      description: "A gamified typing master tool to track and improve typing speed and accuracy in real-time.",
      tech: "JavaScript, React, Performance Metrics",
      image: typing1,
      screenshots: [typing1, typing2, typing3, typing4],
      link: "https://krishnablogy.blogspot.com/2025/08/typing-master-lerners.html"
    },
    {
      title: "Little Learners Hub",
      description: "An interactive educational platform for kids featuring alphabets, numbers, and early childhood games.",
      tech: "React, React Router, CSS Animations",
      image: little1,
      screenshots: [little1, little2],
      link: "https://krishnablogy.blogspot.com/2025/08/little-lerners-hub.html"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">🚀 Advanced Projects</h2>
        <div className="projects-grid">
          {advancedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;