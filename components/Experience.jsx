import React from 'react';
import experience from '../public/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24" aria-label="Work Experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="section-label mb-4">Work Experience</p>
        <h2 className="text-heading mb-12">Where I&apos;ve worked</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden sm:block ml-1" />

          <div className="space-y-12">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="sm:pl-10 relative animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg hidden sm:block -ml-1" />

                <div className="card hover:border-accent/30 transition-colors duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-heading text-base font-semibold">
                        {job.role}
                        <span className="ml-2 text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {job.type}
                        </span>
                      </h3>
                      <p className="text-accent text-sm font-medium mt-0.5">
                        {job.company} &mdash; {job.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted bg-surface border border-border px-3 py-1 rounded-full whitespace-nowrap">
                      {job.duration}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex gap-3 text-sm text-muted leading-relaxed"
                      >
                        <span className="text-accent mt-1.5 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech used */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                    {job.tech.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
