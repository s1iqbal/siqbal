'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (could use form service like Formspree or EmailJS)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! This is a demo - integrate with your email service.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            @YourName
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <Link 
              href="/" 
              className="hover:text-blue-300 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="hover:text-blue-300 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-blue-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you. Send me a message and let&apos;s create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Intro Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">📬</span>
                  Get in Touch
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Whether you&apos;re looking to collaborate on a project, want to discuss opportunities, 
                  or just want to say hi, my inbox is always open! I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:your.email@example.com"
                  className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
                >
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Me</h3>
                    <p className="text-gray-400 group-hover:text-blue-300 transition-colors">your.email@example.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
                >
                  <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                    <p className="text-gray-400 group-hover:text-blue-300 transition-colors">/in/yourprofile</p>
                  </div>
                </a>

                {/* Twitter/X */}
                <a 
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
                >
                  <div className="p-3 bg-sky-500/20 rounded-xl group-hover:bg-sky-500/30 transition-colors">
                    <span className="text-2xl">🐦</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Twitter / X</h3>
                    <p className="text-gray-400 group-hover:text-blue-300 transition-colors">@yourhandle</p>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
                >
                  <div className="p-3 bg-gray-800/50 rounded-xl group-hover:bg-gray-700/50 transition-colors">
                    <span className="text-2xl">🐙</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">GitHub</h3>
                    <p className="text-gray-400 group-hover:text-blue-300 transition-colors">@yourusername</p>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  Location
                </h3>
                <p className="text-gray-400">San Francisco, CA (Available Remote)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💬</span>
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg transition-all"
                    placeholder="Project collaboration inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg transition-all resize-none"
                    placeholder="Tell me about your project, question, or how I can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
                >
                  Send Message
                </button>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4 text-center">
                    Or connect with me on social media:
                  </p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href="#" 
                      className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
                    >
                      <span className="text-xl">🐙</span>
                    </a>
                    <a 
                      href="#" 
                      className="p-3 bg-white/5 rounded-full hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
                    >
                      <span className="text-xl">💼</span>
                    </a>
                    <a 
                      href="#" 
                      className="p-3 bg-white/5 rounded-full hover:bg-sky-500/20 hover:text-sky-300 transition-colors"
                    >
                      <span className="text-xl">🐦</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24h</div>
              <div className="text-gray-400">Response Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">⭐</div>
              <div className="text-gray-400">Open to Collaborations</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">🌍</div>
              <div className="text-gray-400">Remote Friendly</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS
          </p>
          <div className="flex gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              Projects
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}