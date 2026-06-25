'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
  fadeInUp: any;
}

export default function HeroSection({ onScrollTo, fadeInUp }: HeroSectionProps) {
  return (
    <motion.section 
      id="home" 
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="w-full h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center scroll-mt-16 py-4 overflow-y-auto no-scrollbar"
    >
      <div className="flex flex-col justify-center items-center max-w-3xl">
        
        {/* Avatar Area */}
        <motion.div 
          className="mb-6 flex justify-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-500 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-slate-900 border border-slate-800 p-3 flex items-center justify-center overflow-hidden">
              {/* Standard HTML <img> completely bypasses next/image compilation property mismatches */}
              <img
                src="/next.svg"
                alt="Saad Iqbal"
                width={90}
                height={90}
                className="object-contain invert opacity-75"
              />
            </div>
          </div>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
          Building Immersive <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Apps & Digital Games
          </span>
        </h1>
        
        <p className="text-base sm:text-xl text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Full Stack Developer specializing in clean UI architecture, responsive web applications, and interactive experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); onScrollTo('projects'); }}
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all text-sm text-center shadow-lg shadow-indigo-600/20 active:scale-[0.98] cursor-pointer"
          >
            Explore Showcases
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onScrollTo('contact'); }}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-xl font-medium text-center transition-all text-sm cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.section>
  )
}