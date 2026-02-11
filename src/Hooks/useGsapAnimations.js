import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = (ref) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero section
      gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      });

      // Animate skills
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Animate project cards
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%',
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Animate AI project cards
      gsap.from('.ai-project-card', {
        scrollTrigger: {
          trigger: '.ai-projects-section',
          start: 'top 80%',
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Parallax effect
      gsap.to('.hero-bg', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 100,
        ease: 'none'
      });

      // Header animation on scroll
      gsap.to('.header', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'bottom top',
          toggleActions: 'play none reverse none'
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.5
      });

    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export default useGsapAnimations;