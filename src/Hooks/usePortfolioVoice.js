import { useState, useEffect, useCallback } from 'react';

export const usePortfolioVoice = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState([]);
  const [voiceType, setVoiceType] = useState(localStorage.getItem('preferredVoice') || 'male');

  useEffect(() => {
    const updateVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = useCallback((text) => {
    if (!text) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const allVoices = window.speechSynthesis.getVoices();
    const enVoices = allVoices.filter(v => v.lang.startsWith('en'));

    let selectedVoice = null;

    if (voiceType === 'female') {
      // Priority list for female voices across browsers
      const femaleIdentifiers = ['female', 'zira', 'samantha', 'victoria', 'karen', 'moira', 'tessa', 'rishi', 'susan', 'premium'];
      selectedVoice = enVoices.find(v =>
        femaleIdentifiers.some(id => v.name.toLowerCase().includes(id)) &&
        !v.name.toLowerCase().includes('male')
      );

      // Fallback if no specific identifier found, try to avoid "David" or "Daniel"
      if (!selectedVoice) {
        selectedVoice = enVoices.find(v => !v.name.toLowerCase().includes('david') && !v.name.toLowerCase().includes('daniel'));
      }
    } else {
      // Priority list for male voices across browsers
      const maleIdentifiers = ['male', 'david', 'daniel', 'alex', 'fred', 'premium'];
      selectedVoice = enVoices.find(v =>
        maleIdentifiers.some(id => v.name.toLowerCase().includes(id)) &&
        !v.name.toLowerCase().includes('female') && !v.name.toLowerCase().includes('zira')
      );

      // Fallback to anything labeled "Google US English" or similar if no male identifier
      if (!selectedVoice) {
        selectedVoice = enVoices.find(v => v.name.toLowerCase().includes('google us english'));
      }
    }

    // Ultimate fallback to first English voice
    if (!selectedVoice) selectedVoice = enVoices[0];

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      // Adjust pitch for better gender representation if generic voice
      if (voiceType === 'female') {
        utterance.pitch = 1.2;
      } else {
        utterance.pitch = 0.9;
      }
    }

    utterance.rate = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [voiceType]); // Added voiceType as dependency

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  const pause = useCallback(() => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, []);

  const toggleVoiceType = useCallback(() => {
    const newType = voiceType === 'male' ? 'female' : 'male';
    setVoiceType(newType);
    localStorage.setItem('preferredVoice', newType);
  }, [voiceType]);

  return { speak, stop, pause, resume, isSpeaking, isPaused, voiceType, toggleVoiceType };
};