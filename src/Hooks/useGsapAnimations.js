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
        duration: 1.2,
        ease: 'power4.out'
      })
      .from('.hero-right', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=1');

      // Generic Section Title Reveal
      gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.7)'
        });
      });

      // Advanced Project Cards Reveal
      gsap.from('.advanced-project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Skill Cards reveal with stagger
      gsap.from('.skill-swag-card', {
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 85%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.75)'
      });

      // Background cards reveal
      gsap.from('.background-card', {
        scrollTrigger: {
          trigger: '.background-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // Courses reveal
      gsap.from('#courses .advanced-project-card', {
        scrollTrigger: {
          trigger: '#courses .projects-grid',
          start: 'top 85%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Float animation for profile photo
      gsap.to('.photo-circle', {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export default useGsapAnimations;