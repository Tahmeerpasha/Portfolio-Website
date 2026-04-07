import React from 'react';

const highlights = [
  {
    metric: '10k+',
    label: 'events/day',
    desc: 'Microservices with retry + idempotency',
  },
  {
    metric: '1M+',
    label: 'records per run',
    desc: 'AWS Lambda + Step Functions pipelines',
  },
  {
    metric: '30%',
    label: 'latency reduction',
    desc: 'Composite index optimisation on PostgreSQL',
  },
  {
    metric: '15%',
    label: 'infra cost saved',
    desc: 'S3 lifecycle policies + DB audits',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24" aria-label="About">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="section-label mb-4">About Me</p>
        <h2 className="text-heading mb-8">
          I build backend systems — not just UIs.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m{' '}
              <span className="text-heading font-medium">Tahmeer Pasha</span>, a
              Backend Software Engineer at{' '}
              <span className="text-accent font-medium">
                Webknot Technologies
              </span>
              , Bengaluru. I design and implement production-grade systems —
              microservices, event-driven pipelines, and cloud-native
              architectures.
            </p>
            <p>
              My work spans Spring Boot microservices handling 10k+ events/day,
              AWS Lambda pipelines processing over a million records per run, and
              Elasticsearch search systems operating at sub-200ms latency — all
              running in live production.
            </p>
            <p>
              I&apos;m actively strengthening DSA and Low-Level Design skills,
              targeting SDE roles at product-based companies.
            </p>

            {/* Education */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2">
                Education
              </p>
              <p className="text-heading text-sm font-medium">
                BE · Information Science & Engineering
              </p>
              <p className="text-muted text-sm">
                HKBK College of Engineering, Bengaluru &mdash; CGPA 8.22
              </p>
              <p className="text-xs text-muted mt-0.5">Nov 2020 – May 2024</p>
            </div>
          </div>

          {/* Impact cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.metric} className="card hover:border-accent/40 transition-colors duration-200">
                <p className="text-2xl font-bold text-accent font-mono">
                  {h.metric}
                </p>
                <p className="text-sm font-medium text-heading mt-1">
                  {h.label}
                </p>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;