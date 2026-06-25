'use client'

import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import TechStackSection from '../components/TechStackSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    /* This outer div container should only expand inline via flex-1. No height locks. */
    <div className="flex-1 flex flex-col w-full items-center overflow-hidden">
      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center">
        <HeroSection onScrollTo={scrollToSection} fadeInUp={fadeInUp} />
        <ProjectsSection fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
        <ExperienceSection fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
        <SkillsSection fadeInUp={fadeInUp} staggerContainer={staggerContainer}/>
        <TechStackSection fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
        <ContactSection fadeInUp={fadeInUp} />
      </main>
    </div>
  )
}