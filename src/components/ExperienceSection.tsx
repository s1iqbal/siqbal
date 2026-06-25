'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
interface TimelineEvent {
    role: string;
    company: string;
    companyUrl?: string;
    dateRange: string;
    description: string;
    achievements: string[];
    skills: string[];
}

const timelineData: TimelineEvent[] = [
    {
        role: "Senior Full Stack Developer",
        company: "Upmotion Tech",
        companyUrl: "https://example.com",
        dateRange: "Nov 2025 - Present",
        description: "Building scalable web and mobile applications for the upmotion platform. Architecting microservices solutions and mentoring junior developers.",
        achievements: [
            "Built and maintained the Leap.ai mobile application"
        ],
        skills: ["React", "React Native", "Node.js", "AWS", "MongoDB", "Redis", "CI/CD", "Firebase", "TypeScript", "JavaScript", "HTML", "CSS", "Git", "Jira"]
    },
    {
        role: "Senior Full Stack Developer",
        company: "Orbit Social",
        companyUrl: "https://example.com",
        dateRange: "Jan 2024 - Nov 2025",
        description: "Spearheaded frontend performance optimizations and scaled core cloud infrastructure to support growing user interaction traffic.",
        achievements: [
            "Optimized query response times by 40% across distributed services"
        ],
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"]
    }
]

interface ExperienceSectionProps {
    onScrollTo: (id: string) => void;
    fadeInUp: any;
    staggerContainer: any
}

export default function ExperienceSection({ fadeInUp }: ExperienceSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [openIndex, setOpenIndex] = useState<number | null>(0) // Default to first item open

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <motion.section
            id="experience"
            ref={containerRef}
            className="w-full h-[calc(100vh)] max-w-6xl flex flex-col items-center justify-center relative mx-auto py-24 px-6 md:px-12 scroll-mt-16 overflow-visible"
        >
            <motion.div variants={fadeInUp} className="text-center mb-20 z-10">
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 pb-3 leading-tight drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    Experience
                </h2>
                <div className="h-[2px] w-16 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>

            <div className="relative w-full flex flex-col gap-12 md:gap-4 h-[calc(100vh)]">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-slate-900 rounded-full z-0">
                    <motion.div style={{ height: lineHeight }} className="absolute top-0 left-0 w-full bg-sky-500 origin-top shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                </div>

                {timelineData.map((item, index) => {
                    const isEven = index % 2 === 0
                    const isOpen = openIndex === index

                    return (
                        <div key={index} className="w-full grid grid-cols-[32px_1fr] md:grid-cols-[1fr_100px_1fr] items-start relative z-10 gap-4">
                            <div className={`hidden md:block col-start-1 text-right ${isEven ? '' : 'md:col-start-3 md:text-left'}`}>
                                <span className="text-sm font-medium text-sky-400">{item.dateRange}</span>
                            </div>

                            <div className="col-start-1 md:col-start-2 justify-self-center flex justify-center items-center mt-2">
                                <div className="w-3 h-3 rounded-full bg-slate-950 border-2 border-sky-500 z-20" />
                            </div>

                            <div className={`col-start-2 w-full md:px-8 ${isEven ? 'md:col-start-3' : 'md:col-start-1 md:row-start-1 md:text-right'}`}>
                                <div className="w-full bg-[#0b0f17]/80 border border-slate-900 rounded-2xl shadow-xl backdrop-blur-md hover:border-slate-800 transition-colors">
                                    
                                    {/* CLICKABLE HEADER */}
                                    <button 
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full p-6 sm:p-8 flex justify-between items-center text-left"
                                    >
                                        <div>
                                            <h3 className="text-xl font-bold text-sky-400">{item.role}</h3>
                                            <span className="text-sm text-slate-300">{item.company}</span>
                                        </div>
                                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                                            <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </button>

                                    {/* COLLAPSIBLE CONTENT */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 sm:px-8 pb-8 pt-0 border-t border-slate-900/60">
                                                    <p className="text-sm text-slate-400 mt-6 mb-6">{item.description}</p>
                                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Key Achievements</h4>
                                                    <ul className="space-y-2 mb-6">
                                                        {item.achievements.map((ach, i) => (
                                                            <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                                                <span className="text-sky-500 text-[10px] mt-1">►</span>{ach}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900/60">
                                                        {item.skills.map((skill, i) => (
                                                            <span key={i} className="px-3 py-1 bg-sky-950/20 text-sky-400 border border-sky-900/30 rounded-full text-xs font-medium">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </motion.section>
    )
}