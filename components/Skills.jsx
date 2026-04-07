import React from 'react';
import skillGroups from '../public/data/skills';
import { Server, Database, Zap, Cloud, Layout, Wrench } from 'lucide-react';

const iconMap = {
  server: Server,
  database: Database,
  zap: Zap,
  cloud: Cloud,
  layout: Layout,
  tool: Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24" aria-label="Skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="section-label mb-4">Technical Skills</p>
        <h2 className="text-heading mb-12">What I work with</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] || Server;
            return (
              <div
                key={group.category}
                className="card hover:border-accent/30 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-heading">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="badge hover:border-accent/50 hover:text-heading transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
