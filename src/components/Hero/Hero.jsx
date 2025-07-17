import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1,
        rotate: -1,
      },
      {
        opacity: 1,
        scale: 1.03,
        rotate: 0,
        duration: 1.4,
        ease: 'power3.out',
        delay: 1.2,
      }
    );
  }, []);

  return (
    <div className="hero-main">
      <div className="main-hero">
        <div className="left-hero">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            Hi, I'm Chidvilash
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            A Frontend Developer
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            I create interactive and modern web experiences.
          </motion.span>
        </div>

        <div className="right-hero">
          <div className="shape-hero">
          <img ref={imageRef} src="my.jpg" alt="Chidvilash" />


          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;