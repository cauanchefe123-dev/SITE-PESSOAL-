import React from 'react';
import { Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experiencia" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
            Carreira & Conquistas
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed">
            Evolução contínua em projetos de alta escala, liderança técnica e entrega consistente de valor comercial e de engenharia.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 border-l-2 border-stone-200 dark:border-stone-800 ml-3 sm:ml-4 pl-6 sm:pl-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-stone-50 dark:border-stone-950 bg-amber-500 shadow-xs"></div>

              <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/80 p-6 sm:p-7 shadow-xs">
                {/* Meta Row: Clean Unboxed Text with Separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                  <span className="font-mono text-amber-600 dark:text-amber-400 font-medium">
                    {exp.period}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.location}</span>
                </div>

                {/* Role and Company */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                  <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    {exp.company}
                  </div>
                </div>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Concrete Achievements */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 mb-2">
                    Principais Entregas:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-medium text-stone-700 dark:text-stone-300">Tecnologias:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span>{tech}</span>
                      {tIdx < exp.technologies.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
