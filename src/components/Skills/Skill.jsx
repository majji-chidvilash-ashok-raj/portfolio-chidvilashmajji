import React, { useEffect, useRef } from 'react';
import './Skill.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: 'HTML',
    icon: '🌐',
    description: 'The foundation of all web pages. It structures the content and elements.',
  },
  {
    name: 'CSS',
    icon: '🎨',
    description: 'Used to style HTML elements with colors, layouts, and animations.',
  },
  {
    name: 'JavaScript',
    icon: '⚡',
    description: 'Adds interactivity and dynamic behavior to websites.',
  },
  {
    name: 'React',
    icon: '⚛️',
    description: 'A popular JavaScript library for building modern user interfaces.',
  },
  {
    name: 'GSAP',
    icon: '🎬',
    description: 'Powerful animation library for smooth web animations.',
  },
  {
    name: 'Firebase',
    icon: '🔥',
    description: 'A backend platform for authentication, databases, and hosting.',
  },
  {
    name: 'Git',
    icon: '🔧',
    description: 'Version control system to track changes and collaborate on code.',
  },
  {
    name: 'Tailwind CSS',
    icon: '💨',
    description: 'A utility-first CSS framework for fast UI development.',
  },
  {
    name: 'Framer-motion',
    icon: '✨',
    description: 'High-performance, open-source animation library.',
  },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelector('h2'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      sectionRef.current.querySelector('.skill-intro'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <div className="main-skill" ref={sectionRef}>
      <h2>My Skills</h2>
      <p className="skill-intro">
        I specialize in crafting modern, responsive web interfaces using technologies like React, JavaScript, and GSAP.
        I’m passionate about creating smooth user experiences and beautiful UI designs that work across devices.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="skill-front">
              <span className="skill-icon">{skill.icon}</span>
              <p className="skill-name">{skill.name}</p>
            </div>
            <div className="skill-hover">
              <p className="skill-desc">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
