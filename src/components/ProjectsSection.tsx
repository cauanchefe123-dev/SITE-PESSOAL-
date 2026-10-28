import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'webapp', label: 'Aplicações Web' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'design_system', label: 'Design System' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
              Trabalhos em Destaque
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Projetos Selecionados & Estudos de Caso
            </h2>
          </div>

          {/* Interactive Filter Tabs / Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 dark:bg-stone-800/80 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-950 shadow-xs dark:bg-stone-900 dark:text-stone-50'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative flex flex-col rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-stone-900/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Subtle top metadata scrim */}
                <div className="absolute top-3 right-3 rounded-lg bg-stone-950/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-stone-100 flex items-center gap-1">
                  <span>Ver Estudo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Content Area */}
              <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-3">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">
                      {project.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6 line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Row: Unboxed Tech List & Key Metric */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-x-2 text-stone-500 dark:text-stone-400">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{tag}</span>
                        {tIdx < 2 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {project.metrics[0] && (
                    <div className="font-mono text-xs font-semibold text-stone-800 dark:text-stone-200">
                      {project.metrics[0].value}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-sm text-stone-500">
            Nenhum projeto encontrado nesta categoria.
          </div>
        )}
      </div>
    </section>
  );
};
