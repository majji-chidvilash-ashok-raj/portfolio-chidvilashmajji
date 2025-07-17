import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <div className="header-main">
      <div className="header">
        {/* Left Logo */}
        <div className="left-nav">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 20,
              delay: 0.9,
            }}
          >
            My PortFolio
          </motion.p>
        </div>

        {/* Center Nav Links */}
        <motion.div className="center-nav">
          <ul>
            {navLinks.map((link, index) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  delay: 3 + index * 0.2,
                }}
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Button */}
        <div className="right-nav">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 20,
              delay: 1.5,
            }}
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
