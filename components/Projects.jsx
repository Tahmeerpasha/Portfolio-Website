import React from 'react';
import projects, { oldProjects } from '../public/data/projects';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, FolderGit2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24" aria-label="Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="section-label mb-4">Projects</p>
        <h2 className="text-heading mb-4">Production systems I&apos;ve built</h2>
        <p className="text-muted mb-12 max-w-xl leading-relaxed">
          End-to-end backend systems — not side projects or tutorials. Real
          codebases, real users, real constraints.
        </p>

        {/* Flagship Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card flex flex-col hover:border-accent/40 transition-colors duration-200 group relative overflow-hidden"
            >
              {/* Subtle accent gradient behind the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3 relative">
                <div>
                  <span className="text-xs font-mono text-accent/80 font-medium">
                    {project.highlight}
                  </span>
                  <h3 className="text-heading font-semibold text-base mt-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="text-muted hover:text-accent transition-colors p-1"
                    >
                      <FaGithub size={17} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} demo`}
                      className="text-muted hover:text-accent transition-colors p-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted mb-5 leading-relaxed relative">
                {project.tagline}
              </p>

              {/* Impact bullets */}
              <ul className="space-y-2.5 flex-1 relative">
                {project.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-muted leading-relaxed"
                  >
                    <span className="text-accent shrink-0 mt-1">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border relative">
                {project.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Earlier Projects Archive */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="flex items-center gap-3 mb-8">
            <FolderGit2 className="text-muted" size={24} />
            <h3 className="text-heading text-xl">Earlier Work & Experiments</h3>
          </div>
          <p className="text-sm text-muted mb-10 max-w-2xl leading-relaxed">
            A collection of my earlier frontend and full-stack projects that track my growth as an engineer. These showcase my foundational work across React, Next.js, and vanilla JavaScript.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {oldProjects.map((project) => (
              <article
                key={project.title}
                className="card p-5 flex flex-col hover:border-accent/30 transition-colors duration-200 group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-heading font-medium text-sm group-hover:text-accent transition-colors truncate">
                    {project.title}
                  </h4>
                  <div className="flex gap-2 shrink-0">
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-xs text-muted mb-4 line-clamp-2 flex-1">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-mono text-muted bg-bg border border-border px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
