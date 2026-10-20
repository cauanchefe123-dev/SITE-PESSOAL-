import React, { useEffect } from 'react';
import { X, Printer, Download, MapPin, Mail, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
import { ProfileData, ExperienceItem, SkillGroup } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: ExperienceItem[];
  skills: SkillGroup[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  skills,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl transition-all print:max-h-none print:shadow-none print:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-6 py-4 print:hidden">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Currículo Profissional
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fechar currículo"
              className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0">
          {/* Resume Header */}
          <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
            <h1 id="resume-title" className="font-display text-3xl font-bold text-stone-900 dark:text-stone-50 mb-1">
              {profile.name}
            </h1>
            <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-3">
              {profile.role}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 dark:text-stone-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-stone-400" />
                {profile.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-stone-400" />
                {profile.email}
              </span>
              <span aria-hidden="true">·</span>
              <span>Anos de Exp: {profile.yearsOfExperience}</span>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
              Resumo Executivo
            </h2>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Experiência Profissional */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
              Experiência Profissional
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      {exp.role} — <span className="font-semibold text-stone-600 dark:text-stone-300">{exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-stone-500 dark:text-stone-400">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300 pl-4 list-disc">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formação & Idiomas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200 dark:border-stone-800">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                Formação Acadêmica
              </h2>
              <div className="text-xs space-y-1">
                <div className="font-bold text-stone-900 dark:text-stone-100">
                  Bacharelado em Ciência da Computação / Engenharia de Software
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  Ensino Superior Concluído
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                Idiomas
              </h2>
              <div className="text-xs space-y-1 text-stone-700 dark:text-stone-300">
                <div>Português (Nativo)</div>
                <div>Inglês (Avançado / Comunicação Profissional)</div>
              </div>
            </div>
          </div>

          {/* Habilidades Chave */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Competências Técnicas
            </h2>
            <div className="space-y-2 text-xs">
              {skills.map((grp, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-stone-800 dark:text-stone-200 min-w-[160px]">
                    {grp.category}:
                  </span>
                  <span className="text-stone-600 dark:text-stone-400">
                    {grp.items.map((i) => i.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
