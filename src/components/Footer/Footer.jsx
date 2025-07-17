import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <h2>Thank You for Visiting!</h2>
        <p>© 2025 Chidvilash Majji. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/majji-chidvilash-ashok-raj" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:chidvilashmajji@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
