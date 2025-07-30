import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import Project from './pages/Project.jsx'
import Education from './pages/Education.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'


function App() {
   return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
      <Education/>
      <Contact/>
      
    </>
  )
}

export default App;
