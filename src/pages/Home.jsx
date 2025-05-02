import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Products from '../components/Product'

const Home = () => {
  return (
    <div>
      <Hero id="hero" />
      <About id="about" />
      <Experience id="experience" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Education id="education"/>
      <Products id="products"/>
      <Contact id="contact" />
    </div>
  )
}

export default Home