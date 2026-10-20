import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-6 py-4">
          <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Main Title */}
          <h2 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50 mb-3">
            {project.title}
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Project Featured Image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 mb-8 bg-stone-100 dark:bg-stone-800">
            <img
              src={project.image}
              alt={`Visão geral do projeto ${project.title}`}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Key Metrics Grid */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-stone-200/80 dark:border-stone-800/80 py-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs text-stone-500 dark:text-stone-400">{m.label}</div>
                <div className="font-display text-2xl font-bold text-stone-900 dark:text-stone-50 tabular-nums">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="mb-8 space-y-4">
            <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-100">
              Sobre o Desafio e Solução Técnica
            </h3>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technology Stack & Role */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/80">
            <div>
              <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                Papel Executado
              </div>
              <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                {project.role}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                Stack & Tecnologias
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-700 dark:text-stone-300">
                {project.tags.map((tag, idx) => (
                  <React.Fragment key={idx}>
                    <span>{tag}</span>
                    {idx < project.tags.length - 1 && (
                      <span aria-hidden="true" className="text-stone-400">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition-colors shadow-xs"
                >
                  <span>Visualizar Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3.5 py-2 text-xs font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Ver Repositório</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
