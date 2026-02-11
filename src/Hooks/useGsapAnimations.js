import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = (ref) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Entrance
      const heroTl = gsap.timeline();
      heroTl.from('.hero-left', {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
      })
      .from('.hero-right', {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
      }, '-=1.2')
      .from('.hero-badge, .hero-title, .hero-description, .hero-buttons', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8');

      // Universal Section Animation
      const sections = gsap.utils.toArray('section');
      sections.forEach(section => {
        gsap.fromTo(section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Advanced Stagger for all card types
      const cardSelectors = [
        '.advanced-project-card',
        '.skill-swag-card',
        '.background-card',
        '.ai-card',
        '.app-card',
        '.logic-card'
      ];

      cardSelectors.forEach(selector => {
        gsap.from(selector, {
          scrollTrigger: {
            trigger: selector,
            start: 'top 90%',
          },
          y: 50,
          scale: 0.9,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'all' // Crucial: ensures interactivity after animation
        });
      });

      // Interactive Skills Reveal
      gsap.from('.skill-badge-item', {
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 80%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: {
          each: 0.05,
          from: 'center'
        },
        ease: 'back.out(2)'
      });

      // Floating Photo Animation
      gsap.to('.photo-circle', {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export default useGsapAnimations;