'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TechStackSectionProps {
  fadeInUp: any
  staggerContainer: any
}

// Categorized structure mimicking the natural tapering rows from your image
const TECH_ROWS = [
  {
    rowId: 'languages-frontend',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'C', icon: 'C' },
      { name: 'C++', icon: 'C++' },
      { name: 'HTML5', icon: '5' },
      { name: 'CSS3', icon: '3' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: 'N' },
    ]
  },
  {
    rowId: 'backend-data',
    items: [
      { name: 'Node.js', icon: '⬢' },
      { name: 'Django', icon: 'dj' },
      { name: 'Flask', icon: '🌶️' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'TensorFlow', icon: 'TF' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'NumPy', icon: 'Num' },
      { name: 'Pandas', icon: 'Pd' },
    ]
  },
  {
    rowId: 'databases-infra',
    items: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Redis', icon: '📕' },
      { name: 'Docker', icon: '🐋' },
      { name: 'AWS', icon: 'aws' },
    ]
  },
  {
    rowId: 'tools-design',
    items: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Linux', icon: '🐧' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Vercel', icon: '▲' },
    ]
  },
  {
    rowId: 'design-testing',
    items: [
      { name: 'Figma', icon: '❖' },
      { name: 'Postman', icon: '🚀' },
      { name: 'Photoshop', icon: 'Ps' },
    ]
  }
]

export default function TechStackSection({ fadeInUp, staggerContainer }: TechStackSectionProps) {
  return (
    <motion.section
      id="techstack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="w-full py-20 flex flex-col items-center justify-center scroll-mt-16"
    >
      {/* Section Header */}
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase mb-4">
          Tech Stack
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
      </motion.div>

      {/* Grid Container */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-4 px-2 select-none">
        {TECH_ROWS.map((row) => (
          <div 
            key={row.rowId} 
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full"
          >
            {row.items.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                /* Using your preset '.glass' class coupled with styling configurations matching your image */
                className="glass relative group w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-slate-800/60 flex flex-col items-center justify-center p-2 cursor-pointer overflow-hidden transition-colors duration-300 hover:border-purple-500/40"
              >
                {/* Glowing Hover Background Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/5 group-hover:to-indigo-500/10 transition-all duration-300 pointer-events-none" />

                {/* Tech Icon / Placeholder Wrapper */}
                <span className="text-xl sm:text-2xl font-bold text-slate-300 group-hover:text-white mb-1.5 transition-colors duration-200">
                  {tech.icon}
                </span>

                {/* Tech Label */}
                <span className="text-[10px] sm:text-xs font-medium text-slate-400 group-hover:text-slate-200 tracking-wide text-center transition-colors duration-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  )
}