import React from 'react'
import Hero from './components/landingPage/Hero'
import Works from './components/myWorks/Works'
import Services from './components/Services'
import About from './components/About'

const Landing = () => {
  return (
    <div>
      <Hero />
      <Works />
      <Services />
      <About />
    </div>
  )
}

export default Landing
