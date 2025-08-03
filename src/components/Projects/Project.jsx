import React, { useEffect, useRef } from 'react';
import './Project.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Cola-Cola Frontend',
    description: 'A modern, stylish Coca-Cola clone website showcasing custom design and smooth animations, built and hosted by me.',
    github: 'https://github.com/majji-chidvilash-ashok-raj/cola-cola-react-based-project',
    live: 'https://colacola-chidvilashmajji.netlify.app/',
    icon: '🖥️',
  },
  {
    title: 'Foodify. Food-Delivery ',
    description: 'Food-delivery website to order various food items',
    github: 'https://github.com/majji-chidvilash-ashok-raj/foodify-fullstack-project',
    live: '#',
    icon: '📊',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio using React and GSAP animations.',
    github: 'https://github.com/majji-chidvilash-ashok-raj/portfolio-chidvilashmajji',
    live: '#',
    icon: '🌐',
  },
  {
    title: 'Qr Generator',
    description: 'Generates Qr from user input instantly using API.',
    github: 'https://github.com/majji-chidvilash-ashok-raj/QR-Generator',
    live: 'https://majji-chidvilash-ashok-raj.github.io/QR-Generator/',
    icon: '📄',
  },
];

const Project = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelector('h2'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      cardRefs.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <div className="project-section" ref={sectionRef}>
      <h2>My Projects</h2>
      <p className="project-intro">
        A glimpse into my work using modern web technologies.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} className="btn-glow" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.live} className="btn-glow" target="_blank" rel="noopener noreferrer">
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
