import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const eduItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate wrapper on scroll into view
      gsap.from(wrapperRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Animate each education item
      gsap.from(eduItemsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 80%',
        },
      });

      // Floating blob animation (just decorative)
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

  return (
    <section className="about-section" ref={sectionRef}>
      {/* Decorative shapes */}
      <div className="shape blob-top-left"></div>
      <div className="shape circle-bottom-right"></div>
      <div className="shape diagonal-overlay"></div>

      <div className="about-wrapper" ref={wrapperRef}>
        <h2>About Me</h2>
        <p className="intro">
          I am a passionate front-end developer with a focus on React and modern UI/UX design.
          I love crafting intuitive and engaging digital experiences through clean code and creative design.
        </p>

        <h3>Education</h3>
        <ul className="education">
          {[
            {
              title: 'B.Tech in Computer Science',
              school: 'SRM University, AP',
              year: '2022 - Present',
            },
            {
              title: 'Intermediate (Class 12)',
              school: 'Narayana Junior College',
              year: '2020 - 2022',
            },
            {
              title: 'High School (Class 10)',
              school: 'Vignan High School',
              year: '2019 - 2020',
            },
          ].map((item, idx) => (
            <li key={idx} ref={(el) => (eduItemsRef.current[idx] = el)}>
              <strong>{item.title}</strong>
              <br />
              {item.school} <span>{item.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
