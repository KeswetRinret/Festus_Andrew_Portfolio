import React from 'react'
import Hero from './components/landingPage/Hero'
import Works from './components/myWorks/Works'
import Services from './components/pages/Services'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'


const Landing = () => {
  return (
    <div>
      <Hero />
      <Works />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Landing
