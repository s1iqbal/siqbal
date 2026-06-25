'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface ProjectsSectionProps {
  fadeInUp: any;
  staggerContainer: any;
}

const projectsData = [
  {
    emoji: "🚀",
    title: "Web Architecture & Platforms",
    description: "Production-grade full stack applications running optimized server rendering and global state workflows.",
    tags: ["Next.js", "Tailwind", "API"],
    metrics: [
      { label: "Architecture", value: "SSR / ISR" },
      { label: "Deployment", value: "Vercel Edge" }
    ],
    hoverGradient: "from-indigo-500/10 to-purple-500/5",
    hoverColor: "group-hover:text-indigo-400"
  },
  {
    emoji: "🎮",
    title: "Interactive Logic & Games",
    description: "Immersive client-side and server-side puzzle/strategy systems built using real-time rendering algorithms.",
    tags: ["React", "Context", "Engine"],
    metrics: [
      { label: "State Context", value: "Clean Hooks" },
      { label: "Performance", value: "60 FPS" }
    ],
    hoverGradient: "from-purple-500/10 to-pink-500/5",
    hoverColor: "group-hover:text-purple-400",
    emojiClass: "group-hover:rotate-6"
  },
  {
    emoji: "🛠️",
    title: "Technical Environments",
    description: "Highly managed infrastructures, micro-containers, custom server automation scripts, and deployment configurations.",
    tags: ["Docker", "Debian", "CI/CD"],
    metrics: [
      { label: "Containers", value: "Docker Compose" },
      { label: "OS Platform", value: "Debian Linux" }
    ],
    hoverGradient: "from-emerald-500/10 to-teal-500/5",
    hoverColor: "group-hover:text-emerald-400",
    emojiClass: "group-hover:translate-y-[-2px]"
  }
];

export default function ProjectsSection({ fadeInUp, staggerContainer }: ProjectsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [maxDrag, setMaxDrag] = useState(0)
  
  const dragX = useMotionValue(0)
  const springX = useSpring(dragX, { stiffness: 300, damping: 30 })

  // Safely compute slide boundaries based on active screen sizes
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return
    const computeConstraints = () => {
      const trackWidth = trackRef.current?.scrollWidth || 0
      const containerWidth = containerRef.current?.offsetWidth || 0
      setMaxDrag(Math.min(0, containerWidth - trackWidth - 32)) 
    }
    
    computeConstraints()
    window.addEventListener('resize', computeConstraints)
    return () => window.removeEventListener('resize', computeConstraints)
  }, [])

  const navigateSlider = (direction: 'left' | 'right') => {
    const current = dragX.get()
    const shiftStep = 500 
    const target = direction === 'left' ? current + shiftStep : current - shiftStep
    dragX.set(Math.max(maxDrag, Math.min(0, target)))
  }

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="w-full py-24 h-[calc(100vh)] overflow-hidden relative scroll-mt-16"
    >
      {/* Header layout matching screenshot schema */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex justify-between items-end mb-16 max-w-6xl mx-auto px-4"
      >
            <motion.div variants={fadeInUp} className="text-center mb-20 z-10">
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 pb-3 leading-tight drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    Projects
                </h2>
                <div className="h-[2px] w-16 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>

        {/* Action Slider Arrow Keys */}
        <div className="flex gap-2 mb-1">
          <button 
            onClick={() => navigateSlider('left')}
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
            aria-label="Slide Left"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={() => navigateSlider('right')}
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
            aria-label="Slide Right"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Fluid Draggable Horizontal Track Panel */}
      <motion.div 
        ref={trackRef}
        drag="x"
        dragConstraints={{ left: maxDrag, right: 0 }}
        style={{ x: springX }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex gap-8 cursor-grab active:cursor-grabbing w-max px-4 sm:px-12 select-none"
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="w-[85vw] sm:w-[500px] md:w-[720px] bg-[#0b0f17]/60 border border-slate-900 rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-slate-800/80 transition-all"
          >
            {/* Left Media Thumbnail block */}
            <div className="w-full md:w-[42%] aspect-[4/3] md:aspect-auto md:h-full rounded-xl bg-slate-950 border border-slate-900/80 relative overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.hoverGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <span className={`text-5xl z-10 transition-transform duration-500 ${project.emojiClass || 'group-hover:scale-110'}`}>
                {project.emoji}
              </span>
            </div>

            {/* Right Context Content Description block */}
            <div className="flex-1 flex flex-col justify-between pt-1">
              <div>
                <span className="text-xs font-mono font-medium text-sky-400 tracking-wider uppercase block mb-1">
                  Featured Project
                </span>
                <h3 className={`text-2xl font-bold text-white tracking-tight mb-3 transition-colors duration-300 ${project.hoverColor}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
                
                {/* Embedded Metrics Layout Block directly inside Card Context */}
                <div className="flex gap-8 mb-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-lg font-bold text-slate-200 tracking-tight font-mono">
                        {metric.value}
                      </span>
                      <span className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Strings Area mapping */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-4 border-t border-slate-900/60">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-mono font-medium text-slate-500 hover:text-sky-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}