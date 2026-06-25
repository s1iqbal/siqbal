'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  stars?: number
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard with analytics, sales tracking, and user management. Built with Next.js, Tailwind CSS, and MongoDB.',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'Prisma'],
    stars: 1250,
    featured: true
  },
  {
    id: 2,
    name: 'Portfolio Generator',
    description: 'AI-powered portfolio website generator that creates beautiful personal sites from simple templates and content.',
    tags: ['React', 'TypeScript', 'Vercel'],
    stars: 890,
    featured: true
  },
  {
    id: 3,
    name: 'Task Management App',
    description: 'Real-time collaborative task manager with drag-and-drop kanban boards and team collaboration features.',
    tags: ['Next.js', 'Supabase', 'Socket.io'],
    stars: 567,
    featured: false
  },
  {
    id: 4,
    name: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts, severe weather alerts, and personalized location recommendations.',
    tags: ['React', 'OpenWeather API', 'Vercel'],
    stars: 723,
    featured: false
  },
  {
    id: 5,
    name: 'Code Snippet Manager',
    description: 'Organize and share code snippets with syntax highlighting, tags, and collaborative features.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    stars: 445,
    featured: false
  },
  {
    id: 6,
    name: 'Social Media Analytics',
    description: 'Track social media metrics across platforms with beautiful visualizations and reporting.',
    tags: ['React', 'GraphQL', 'Apollo'],
    stars: 834,
    featured: false
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project => {
    if (filter !== 'all' && !project.featured) return false
    if (searchTerm) {
      return project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    return true
  })

  const techIcons = {
    'Next.js': '⚡',
    'React': '⚛️',
    'TypeScript': '📘',
    'Tailwind': '🎨',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'Prisma': '💎',
    'Supabase': '🔷',
    'Socket.io': '🔌',
    'Vercel': '⚡',
    'GraphQL': '🔹',
    'Apollo': '🏛️'
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
              className="text-blue-300 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-blue-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of the awesome projects I&apos;ve built on GitHub. Each one represents a unique challenge solved and technology mastered.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
            {/* Search */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-80 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-lg"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === 'featured'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                🌟 Featured
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                href={`https://github.com/yourusername/${project.name.toLowerCase().replace(/\s/g, '-')}`}
                target="_blank"
                className="group block bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    🌟 Featured Project
                  </div>
                )}

                {/* Project Info */}
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-[1.01] transition-transform inline-block">
                    {project.name}
                  </h2>
                  <span className="p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗️
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags with Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium flex items-center gap-2 group-hover:bg-white/10 transition-colors"
                    >
                      {techIcons[tag] || '🔧'}
                      <span className="capitalize">{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Star Badge */}
                {project.stars && (
                  <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-300">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter to find what you&apos;re looking for.</p>
            </div>
          )}

          {/* View All CTA */}
          <div className="text-center mt-16 mb-24">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
            >
              <span>🐙</span>
              View All Projects on GitHub
            </a>
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
              href="/contact" 
              className="px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}