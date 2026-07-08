'use client'

import { Briefcase } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      company: 'SECUREWORLDZ',
      position: 'Senior Director',
      duration: '2 years',
      description: 'Led technical initiatives and team management, overseeing strategic projects and mentoring development teams.',
      highlights: [
        'Team Leadership & Management',
        'Strategic Planning',
        'Technical Oversight',
        'Project Delivery',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Experience</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-red-600">Professional</span> Journey
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-foreground/60 mt-1">{exp.duration}</p>
                  </div>
                </div>

                <p className="text-foreground/70 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
