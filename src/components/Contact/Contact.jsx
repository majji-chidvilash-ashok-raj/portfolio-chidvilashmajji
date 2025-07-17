import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const contactRef = useRef(null);
  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      {
        autoAlpha: 0,
        y: 60,
        filter: 'blur(10px)',
        scale: 0.95,
      },
      {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0)',
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageSent(false);

    emailjs
      .sendForm('service_5dr7f7e', 'template_t2g9x76', form.current, 'ji5PT6275f2SYbGHV')
      .then(() => {
        setIsLoading(false);
        setMessageSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setIsLoading(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper" ref={contactRef}>
        <h2>Contact Me</h2>
        <p>If you have any questions or just want to say hi, feel free to drop a message!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit" disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : 'Send Message'}
          </button>

          {messageSent && (
            <div className="success-message">
              <span className="tick">✓</span> Message Sent Successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
