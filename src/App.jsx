import React, { useRef } from 'react';
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
import useGsapAnimations from "./Hooks/useGsapAnimations";
import './App.css';

function App() {
  const appRef = useRef(null);

  useGsapAnimations(appRef);

  return (
    <div className="App" ref={appRef}>
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