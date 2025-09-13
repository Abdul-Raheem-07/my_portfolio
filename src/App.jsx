import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Project';
import Contact from './components/Contact/Contact';



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

