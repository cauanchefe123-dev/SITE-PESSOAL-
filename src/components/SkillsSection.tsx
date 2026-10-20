import React from 'react';
import { SkillGroup } from '../types/portfolio';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups }) => {
  return (
    <section id="habilidades" className="py-20 md:py-28 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
            Domínio Técnico & Métodos
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-4">
            Competências e Ferramentas
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed">
            Abordagem focada em robustez arquitetural, código sustentável, acessibilidade e padrões modernos da indústria.
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50 pb-4 mb-6 border-b border-stone-100 dark:border-stone-800">
                  {group.category}
                </h3>

                <ul className="space-y-5">
                  {group.items.map((skill, sIdx) => (
                    <li key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-stone-800 dark:text-stone-200">
                          {skill.name}
                        </span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 leading-normal">
                        {skill.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-stone-400 font-mono">
                {group.items.length} competências mapeadas
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
