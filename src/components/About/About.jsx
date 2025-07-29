import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        });
      });

      gsap.to('.blob-top-left', {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.circle-bottom-right', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      title: 'B.Tech in Computer Science',
      school: 'SRM University, AP',
      year: '2024 - Present',
    },
    {
      title: 'Intermediate (Class 12)',
      school: 'Sri Chaitanya Junior College',
      year: '2022 - 2024',
    },
    {
      title: 'High School (Class 10)',
      school: 'Sri Chaitanya EM High School',
      year: '2021 - 2022',
    },
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="shape blob-top-left"></div>
      <div className="shape circle-bottom-right"></div>
      <div className="shape diagonal-overlay"></div>

      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="intro">
          I am a passionate front-end developer with a focus on React and modern UI/UX design.
          I love crafting intuitive and engaging digital experiences through clean code and creative design.
        </p>

        <div className="roadmap">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`roadmap-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              ref={(el) => (itemsRef.current[idx] = el)}
            >
              <div className="content-box">
                <h3>{item.title}</h3>
                <p>{item.school}</p>
                <span>{item.year}</span>
              </div>
              <div className="circle-dot" />
            </div>
          ))}
          <div className="road-line"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
