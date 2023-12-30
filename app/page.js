import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'
import projects from '../public/data/projects'
const page = () => {

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </div>
  )
}

export default page