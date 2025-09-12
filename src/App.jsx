import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/about/about'
import Projects from './components/Projects/project'
import Contact from './components/Contact/contact'



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

