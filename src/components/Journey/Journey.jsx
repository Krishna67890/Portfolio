import React, { useState, useEffect } from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Journey.css';

const Journey = ({ isOpen, onClose }) => {
  const { speak: portfolioSpeak } = usePortfolioVoice();
  const [activeVoice, setActiveVoice] = useState(null);

  const journeyText = `I started my coding journey in 10th standard when I had computer science as a subject. During that time, I became curious about how games and websites were created. Watching and imagining how technology works developed my interest in coding. After 10th, I began learning HTML, CSS, and JavaScript basics during 11th standard and gradually started building advanced projects between 11th and 12th. After completing 12th, I discovered React.js and began exploring modern web development. I learned through YouTube educators like Code With Harry, completing the Sigma Web Development course consisting of around 60 to 90 videos. Later, I explored advanced React concepts through another YouTube channel called Virtual Code, where I improved my understanding of project structure and development skills. These learning experiences helped me grow significantly as a developer. During this period, I set a personal goal on Blogger.com to achieve 600 daily views. Through consistency and creativity, I successfully achieved this milestone on my website krishnablogy.blogspot.com, where I publish AI assistants, websites, study materials, and innovative posts. In my first year of college, I completed 5 React projects. Later, I was introduced to Next.js and began learning it as a more advanced framework. Within four months, I completed multiple projects using Next.js. Currently, in my second year, I started Android development using Android Studio and built applications such as Unit Converter, KrishnaBloggers GameHub, and Little Learners Hub. I also developed a Coffee Shop marketing application where users can browse and purchase coffee and dishes as a sample project. Recently, I began learning Game Development using Godot Engine and Unity, creating games like Frogger, Space Shooter, and a 3D coin collection game which is currently in progress. My goal is to continuously grow as a developer and work at companies like Amazon, Flipkart, Google, or Microsoft.`;

  useEffect(() => {
    if (isOpen) {
      portfolioSpeak("Opening your professional journey and background briefing. You can choose a narrator voice to hear the full story.");
    }
  }, [isOpen, portfolioSpeak]);

  const speak = (gender) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(journeyText);
    const voices = window.speechSynthesis.getVoices();

    if (gender === 'male') {
      utterance.voice = voices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david')) || voices[0];
      utterance.pitch = 0.8;
    } else {
      utterance.voice = voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira')) || voices[1];
      utterance.pitch = 1.2;
    }

    utterance.rate = 1;
    setActiveVoice(gender);
    utterance.onend = () => setActiveVoice(null);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setActiveVoice(null);
  };

  if (!isOpen) return null;

  return (
    <div className="journey-overlay">
      <div className="journey-modal">
        <button className="close-btn" onClick={() => { stop(); onClose(); }}>✕</button>
        <h2 className="section-title">🎓 My Journey & Background</h2>

        <div className="voice-controls">
          <button className={`voice-btn ${activeVoice === 'male' ? 'active' : ''}`} onClick={() => speak('male')}>
            🔊 Male Voice
          </button>
          <button className={`voice-btn ${activeVoice === 'female' ? 'active' : ''}`} onClick={() => speak('female')}>
            🔊 Female Voice
          </button>
          <button className="voice-btn stop" onClick={stop}>⏹ Stop</button>
        </div>

        <div className="journey-content">
          <p>{journeyText}</p>
        </div>

        <div className="journey-game-teaser">
          <h3>🎮 Developer Journey Quest</h3>
          <p>Ready to play the journey? Click "Game Mode" in the sidebar!</p>
        </div>
      </div>
    </div>
  );
};

export default Journey;