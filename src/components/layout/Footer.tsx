import Link from "next/link"
import { navigationItems, projects, socialLinks } from "@/lib/site-data"
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Sitemap Section */}
      <div className="py-12 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Site Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Projects</h3>
              <ul className="space-y-2">
                {projects.slice(0, 3).map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {project.title}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="/projects"
                    className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center group"
                  >
                    View All Projects
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <a
                    href={socialLinks.email}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    contact@arjunbishnoi.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Github className="h-5 w-5 mr-2 text-gray-400" />
                  <a
                    href={socialLinks.github}
                    rel="me"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    github.com/arjunbishnoi
                  </a>
                </li>
                <li className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-2 text-gray-400" />
                  <a
                    href={socialLinks.linkedin}
                    rel="me"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    linkedin.com/in/arjun-bishnoi-b981bb104
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Socials */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Arjun Bishnoi. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.email}
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
