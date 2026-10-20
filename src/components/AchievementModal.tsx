import React, { useEffect } from 'react';
import { X, Trophy, Medal, Timer, Calendar, MapPin } from 'lucide-react';
import { AchievementItem } from '../types/athlete';

interface AchievementModalProps {
  achievement: AchievementItem | null;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (achievement) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ach-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              {achievement.medal === 'gold' ? 'Medalha de Ouro' : achievement.medal === 'silver' ? 'Medalha de Prata' : 'Troféu'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{achievement.year}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2 id="ach-modal-title" className="font-display text-2xl font-bold text-stone-900 dark:text-stone-50 mb-2">
            {achievement.title}
          </h2>
          <div className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-6">
            {achievement.competition}
          </div>

          {achievement.image && (
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 mb-6 bg-stone-100 dark:bg-stone-800">
              <img
                src={achievement.image}
                alt={achievement.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/80 mb-6">
            <div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Categoria</div>
              <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 mt-0.5">
                {achievement.category}
              </div>
            </div>
            <div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Marca / Tempo Registrado</div>
              <div className="font-mono text-base font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                {achievement.resultTime}
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Relato da Conquista
            </h3>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {achievement.description}
            </p>
          </div>

          <div className="flex justify-end pt-4 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors cursor-pointer"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
