import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Thank You for Visiting!
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          © 2025 Chidvilash Majji. All rights reserved.
        </motion.p>

        <div className="footer-socials">
          {[
            { text: 'GitHub', href: 'https://github.com/majji-chidvilash-ashok-raj' },
            { text: 'LinkedIn', href: 'https://www.linkedin.com/in/chidvilash-ashok-raj-majji-988502324/' },
            { text: 'Email', href: 'mailto:chidvilashmajji@gmail.com' },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              custom={i + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {link.text}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
