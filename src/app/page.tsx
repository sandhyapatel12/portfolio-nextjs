import HeroSection from '@/components/HeroSection'
import React from 'react'
import AboutMe from './about/page'
import Projects from './projects/page'
import Technology from './skills/page'
import Contact from './contact/page'
import Skills from './skills/page'
import Services from './services/page'
import Experience from './experience/page'

const page = () => {
  return (
    <>
      <main className='antialiased bg-grid-slate-50/[0.02] overflow-hidden '>
        <HeroSection />
        <AboutMe /> 
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>

    </>
  )
}

export default page