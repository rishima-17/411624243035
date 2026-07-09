'use client'
import emailjs from "@emailjs/browser";
import { Mail, Phone, Check } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  } catch (error) {
    console.error(error);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">Get In Touch</p>
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Let&apos;s <span className="text-red-600">Connect</span>
                </h2>
                <div className="w-20 h-1 bg-red-600 mt-6"></div>
              </div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
              I&apos;m always open to new opportunities, collaborations, and interesting conversations. Whether you have a project idea or just want to say hi — my inbox is open!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 pt-8">
              {/* Email Card */}
              <a
                href="mailto:rishimair1529@gmail.com"
                className="flex items-center gap-4 p-6 bg-foreground/5 border border-foreground/10 rounded-xl hover:bg-foreground/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">Email</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    rishimair1529@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-6 bg-foreground/5 border border-foreground/10 rounded-xl">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-medium text-foreground">
                    +91 9025142567
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              <a
                href="https://www.linkedin.com/in/rishima-ir-1999ab412"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-blue-50 border border-gray-200 rounded-lg flex items-center justify-center hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a
                href="https://github.com/rishima-17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                title="GitHub"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex items-center">
            {isSubmitted && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-background border-2 border-primary rounded-2xl p-8 sm:p-12 text-center max-w-md mx-4 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-lg text-foreground/70 mb-2">
                    Your message has been sent successfully.
                  </p>
                  <p className="text-base text-foreground/60">
                    I&apos;ll get back to you as soon as possible. Looking forward to connecting with you!
                  </p>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-6 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-foreground/10 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-6 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-foreground/10 transition-all duration-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows={6}
                  className="w-full px-6 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-foreground/10 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
