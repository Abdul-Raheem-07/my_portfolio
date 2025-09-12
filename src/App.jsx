import { useState } from 'react'
import './App.css'

import Hero from './components/Hero/hero'
import About from './components/about/about'
import Projects from './components/Projects/project'
import Contact from './components/Contact/contact'
import Navbar from "./components/Navbar/Navbar";




export default function App() {
  return (
    <div>
     <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  
  )
}

