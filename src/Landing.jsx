import React from 'react'
import Hero from './components/landingPage/Hero'
import Works from './components/myWorks/Works'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


const Landing = () => {
  return (
    <div>
      <Hero />
      <Works />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Landing
