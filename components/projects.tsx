'use client'

import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'My AI Website',
    description: 'A modern AI-powered website built with TypeScript, React, and Tailwind CSS. Features an interactive interface with advanced styling and responsive design.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'shadcn-ui'],
    highlights: [
      'Built with Vite for fast development',
      'Responsive design with Tailwind CSS',
      'Component-based architecture',
    ],
    github: 'https://github.com/rishima-17/my-ai-website',
  },
  {
    title: 'Web Development Project',
    description: 'A comprehensive web project showcasing HTML, CSS, and JavaScript skills. Demonstrates modern web development practices and interactive user interfaces.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Interactive frontend design',
      'Clean and semantic HTML',
      'Dynamic JavaScript functionality',
    ],
    github: 'https://github.com/rishima-17/411624243035',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-red-600">Featured</span> Projects
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Showcasing my best work in <span className="text-red-600 font-semibold">AI development</span> and <span className="text-red-600 font-semibold">web applications</span>.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-3 uppercase tracking-wide">Key Features</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground/70">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
                      >
                        View Code <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
