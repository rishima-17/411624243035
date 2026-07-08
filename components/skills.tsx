'use client'

import { Code, Brain, Users, Lightbulb } from 'lucide-react'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C', 'SQL'],
  },
  {
    name: 'AI & ML',
    icon: Brain,
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Analysis'],
  },
  {
    name: 'Collaboration',
    icon: Users,
    skills: ['Team Work', 'Communication', 'Problem Solving', 'Leadership'],
  },
  {
    name: 'Creative',
    icon: Lightbulb,
    skills: ['UI/UX Design', 'Prototyping', 'User Research', 'Innovation'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Technical Expertise</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-red-600">Skills</span> & Expertise
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              A comprehensive toolkit developed through <span className="text-red-600 font-semibold">hands-on experience</span> and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.name}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium hover:bg-primary/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
