import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Products from '../components/Product'

const Home = ({theme}) => {
  return (
    <div>
      <Hero id="hero"  theme={theme}/>
      <About id="about" theme={theme}/>
      <Experience id="experience" theme={theme}/>
      <Skills id="skills" theme={theme}/>
      <Projects id="projects" theme={theme}/>
      <Education id="education" theme={theme}/>
      <Products id="products" theme={theme}/>
      <Contact id="contact" theme={theme}/>
    </div>
  )
}

export default Home