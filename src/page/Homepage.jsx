import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skill from '../components/Skills/Skill'
import Project from '../components/Projects/Project'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage
