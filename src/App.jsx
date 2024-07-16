import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/landingPage/Hero'
// import MyWorks from './components/myWorks'
import  Works from "./components/myWorks/Works"
import Landing from './Landing'
import Services from './components/Services'
import Marb from './components/myWorks/Marb'





const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/> 
        <Route path="/works" element={<Works />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/marb" element={<Marb />}/>
      </Routes>
      {/* <Navbar /> */}
    </div>
  )
}

export default App
