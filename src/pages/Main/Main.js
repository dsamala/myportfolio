import React from 'react'
import Landing from '../../components/Landing/Landing'
import Navbar from '../../components/NavBar/Navbar'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'

export default function Main() {
  return (
    <div>
      <Navbar/>
      <Landing />
      <Skills />
      <Projects />
    </div>
  )
}

