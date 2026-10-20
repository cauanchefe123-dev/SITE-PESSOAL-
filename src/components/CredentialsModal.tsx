import React, { useEffect } from 'react';
import { X, Printer, ShieldCheck, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { TrainerProfile, CertificationItem } from '../types/trainer';

interface CredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainer: TrainerProfile;
  certifications: CertificationItem[];
}

export const CredentialsModal: React.FC<CredentialsModalProps> = ({
  isOpen,
  onClose,
  trainer,
  certifications,
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
      aria-labelledby="cred-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90dvh] sm:max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl transition-all print:max-h-none print:shadow-none print:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-5 sm:px-6 py-3.5 print:hidden">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span className="truncate max-w-[220px] sm:max-w-none">Registro CREF & Diplomas</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 min-h-[44px] rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-7 md:p-8 space-y-6 print:p-0">
          <div className="border-b border-stone-200 dark:border-stone-800 pb-5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 mb-1">
              <span>{trainer.cref}</span>
              <span aria-hidden="true">·</span>
              <span>ATIVO & REGULARIZADO</span>
            </div>
            <h1 id="cred-title" className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50 mb-1">
              {trainer.name}
            </h1>
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
              {trainer.title}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-500" />
              <span>Formação Acadêmica & Cursos de Especialização</span>
            </h2>
            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm text-stone-900 dark:text-stone-100">
                      {cert.course}
                    </h3>
                    <span className="font-mono text-xs text-amber-600 dark:text-amber-400 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-400">
                    {cert.institution}
                  </div>
                  <div className="text-[11px] font-mono text-stone-400 mt-1">
                    {cert.area}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-stone-700 dark:text-stone-300 space-y-1.5">
            <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Por que treinar com um profissional com CREF ativo?</span>
            </div>
            <p className="leading-relaxed text-stone-600 dark:text-stone-300">
              Garante que sua prescrição de exercícios é respaldada por lei e por conhecimentos aprofundados de anatomia, biomecânica e fisiologia humana, eliminando riscos de sobrecarga articular inadequada.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <span>Contato: {trainer.email}</span>
            <span>São Paulo, SP · Atendimento Online Global</span>
          </div>
        </div>
      </div>
    </div>
  );
};
