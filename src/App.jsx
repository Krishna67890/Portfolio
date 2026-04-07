import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Games from './components/Games';
import AIProjects from './components/AIprojects/AIProjects';
import MobileApps from './components/MobileApps';
import Courses from './components/Courses';
import ToolsCodes from './components/ToolsCodes';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Contact from './components/Contact/Contact';
import Background from './components/Background';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Journey from './components/Journey/Journey';
import GameMode from './components/Game/GameMode';
import Terminal from './components/Terminal/Terminal';
import useGsapAnimations from "./Hooks/useGsapAnimations";
import './App.css';

function App() {
  const appRef = useRef(null);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useGsapAnimations(appRef);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle terminal with 'T' or '`'
      if ((e.key === 't' || e.key === 'T' || e.key === '`') && !isGameOpen && !isJourneyOpen) {
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGameOpen, isJourneyOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" ref={appRef}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <Sidebar
        onOpenJourney={() => setIsJourneyOpen(true)}
        onOpenGame={() => setIsGameOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <Journey isOpen={isJourneyOpen} onClose={() => setIsJourneyOpen(false)} />
      <GameMode isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />

      <Header />
      <main>
        <Hero />
        <Projects />
        <Games />
        <AIProjects />
        <MobileApps />
        <Courses />
        <ToolsCodes />
        <Skills />
        <Socials />
        <Contact />
        <Background />
      </main>
      <Footer />
    </div>
  );
}

export default App;