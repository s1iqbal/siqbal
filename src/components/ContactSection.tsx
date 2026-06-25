'use client'

import { motion } from 'framer-motion'

interface ContactSectionProps {
  fadeInUp: any;
}

export default function ContactSection({ fadeInUp }: ContactSectionProps) {
  return (
    <motion.section 
      id="contact" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="w-full max-w-2xl min-h-screen flex flex-col justify-center scroll-mt-16 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
        <p className="text-base text-slate-400 mt-2">Have a project idea, game concept, or just want to connect? drop a line.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-5 bg-slate-900/20 p-6 sm:p-10 rounded-2xl border border-slate-900 backdrop-blur-sm shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Name</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Alex" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Email</label>
            <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="alex@example.com" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Message</label>
          <textarea rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Let's build something together..."></textarea>
        </div>
        <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-indigo-600/10 active:scale-[0.99] mt-2">
          Send Message
        </button>
      </form>
    </motion.section>
  )
}