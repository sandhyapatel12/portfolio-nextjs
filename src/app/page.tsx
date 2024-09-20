import HeroSection from '@/components/HeroSection'
import React from 'react'
import AboutMe from './aboutme/page'
import Projects from './projects/page'
import Technology from './skills/page'
import Contact from './social/page'
import Skills from './skills/page'

const page = () => {
  return (
    <>
    {/* min-h-screen --> 100% view port hight || 0.96  -> opacity || antialised  -> do font smooth */}
      <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-slate-50/[0.02]'>
        <HeroSection />
        <AboutMe /> 
        <Skills />
        <Projects />
        <Contact />
      </main>

    </>
  )
}

export default page