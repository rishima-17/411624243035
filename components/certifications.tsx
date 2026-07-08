'use client'

import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'Microsoft Azure',
    issuer: 'Microsoft Cloud Services',
    date: '2024',
    description: 'Cloud infrastructure, Azure services, and cloud solutions architecture',
  },
  {
    title: 'Critical Thinking in the AI Era',
    issuer: 'Professional Development',
    date: '2024',
    description: 'Advanced critical thinking and analytical skills in AI-driven environments',
  },
  {
    title: 'Gen AI Powered Data Analytics',
    issuer: 'Data Analytics Excellence',
    date: '2024',
    description: 'Data analysis using generative AI tools and advanced analytics techniques',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University',
    date: '2023',
    description: 'Oracle database fundamentals and enterprise cloud solutions',
  },
  {
    title: 'Cyber Hygiene Practices Workshop',
    issuer: 'Security Training',
    date: '2023',
    description: 'Best practices for cybersecurity, data protection, and security protocols',
  },
  {
    title: 'Data Driven IT Sectors',
    issuer: 'IT Professional Certification',
    date: '2023',
    description: 'Data-driven decision making and analytics in information technology',
  },
  {
    title: 'Cybersecurity Treasure Hunt (CTF)',
    issuer: 'Security Challenge',
    date: '2024',
    description: 'Hands-on cybersecurity skills through competitive capture the flag challenges',
  },
  {
    title: 'Python Programming',
    issuer: 'Professional Certification',
    date: '2023',
    description: 'Advanced Python programming and data structures',
  },
  {
    title: 'Web Development',
    issuer: 'Professional Certification',
    date: '2023',
    description: 'Full-stack web development with modern frameworks',
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Professional Certification',
    date: '2024',
    description: 'AI fundamentals, machine learning, and neural networks',
  },
  {
    title: 'Machine Learning',
    issuer: 'Data Science Certification',
    date: '2023',
    description: 'Supervised and unsupervised learning algorithms and model evaluation',
  },
  {
    title: 'DevOps & CI/CD',
    issuer: 'Deployment Automation',
    date: '2024',
    description: 'Docker, Kubernetes, GitHub Actions, and continuous integration workflows',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Achievements</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-red-600">Certifications</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Professional certifications demonstrating my commitment to <span className="text-red-600 font-semibold">continuous learning</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-sm text-foreground/60 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-foreground/70 mb-3">{cert.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {cert.date}
                    </span>
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
