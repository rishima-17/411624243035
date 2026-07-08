'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">About Me</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Driven by <span className="text-red-600">curiosity</span> and <span className="text-red-600">code</span>
            </h2>
          </div>

          <div className="prose prose-sm max-w-none text-foreground/70 space-y-4">
            <p className="text-base leading-relaxed">
              I&apos;m a dedicated <span className="text-red-600 font-semibold">software developer</span> with a deep passion for <span className="text-red-600 font-semibold">artificial intelligence</span> and modern web technologies. My journey in tech has been defined by continuous learning, problem-solving, and a commitment to creating solutions that make a real impact.
            </p>
            <p className="text-base leading-relaxed">
              With expertise in Python, JavaScript, HTML, CSS, and SQL, I specialize in building intelligent applications that combine elegant design with robust functionality. I thrive on challenges that push me to explore new technologies and refine my craft.
            </p>
            <p className="text-base leading-relaxed">
              As a Senior Director at SECUREWORLDZ for 2 years, I developed strong leadership and strategic thinking skills while overseeing technical initiatives and team management. This experience has shaped my approach to delivering high-quality solutions and mentoring others in the tech space.
            </p>
            <p className="text-base leading-relaxed">
              Beyond coding, I&apos;m passionate about collaboration and teamwork. I believe that the best solutions come from diverse perspectives and open communication. When I&apos;m not coding, you&apos;ll find me diving deeper into AI research or exploring innovative web development patterns.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            {[
              { number: '10+', label: 'Certifications' },
              { number: '1', label: 'AI Project' },
              { number: '100%', label: 'Dedication' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 text-center border border-border hover:border-red-600 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/70 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
