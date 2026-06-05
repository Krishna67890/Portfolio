import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = (ref) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Entrance - Cinematic & Bouncing
      const heroTl = gsap.timeline();
      heroTl.from('.hero-left', {
        y: -150,
        opacity: 0,
        duration: 1.5,
        ease: 'bounce.out'
      })
      .from('.hero-right', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=1')
      .from('.hero-badge, .hero-title, .hero-description, .hero-buttons', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=0.8');

      // Universal Section Animation - Bouncing Entry
      const sections = gsap.utils.toArray('section');
      sections.forEach(section => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 80,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)'
        });
      });

      // Advanced Stagger for Cards - Jumping Animation
      const cardSelectors = [
        '.project-card',      // General project cards
        '.background-card',   // Journey cards
        '.certificate-card',  // Certificate cards
        '.menu-card'          // Game menu cards
      ];

      cardSelectors.forEach(selector => {
        const elements = gsap.utils.toArray(selector);
        if (elements.length > 0) {
          gsap.from(elements, {
            scrollTrigger: {
              trigger: elements[0],
              start: 'top 90%',
            },
            y: 100,
            rotationX: -15,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: 'back.out(2)',
            clearProps: 'all'
          });
        }
      });

      // Interactive Skills Reveal - Exploding from Center
      const skillItems = gsap.utils.toArray('.skill-item-advanced');
      if (skillItems.length > 0) {
        gsap.from(skillItems, {
          scrollTrigger: {
            trigger: '.skills-immersive-wall',
            start: 'top 80%',
          },
          scale: 0,
          opacity: 0,
          rotation: 360,
          duration: 1,
          stagger: {
            each: 0.03,
            from: 'center'
          },
          ease: 'elastic.out(1, 0.3)'
        });
      }

      // Floating Photo Animation - With Reflection Glow
      const photoCircle = document.querySelector('.photo-circle');
      if (photoCircle) {
        gsap.to(photoCircle, {
          y: -30,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export default useGsapAnimations;