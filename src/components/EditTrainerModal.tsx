import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Check, Dumbbell } from 'lucide-react';
import { TrainerProfile } from '../types/trainer';
import { initialTrainer } from '../data/trainerData';

interface EditTrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainer: TrainerProfile;
  onSave: (updated: TrainerProfile) => void;
  onReset: () => void;
}

export const EditTrainerModal: React.FC<EditTrainerModalProps> = ({
  isOpen,
  onClose,
  trainer,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<TrainerProfile>(trainer);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormData(trainer);
  }, [trainer, isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-trainer-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90dvh] sm:max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-5 sm:px-6 py-3.5">
          <div>
            <h2 id="edit-trainer-title" className="font-display text-lg font-bold text-stone-900 dark:text-stone-50 flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-amber-500" />
              <span>Personalizar Perfil</span>
            </h2>
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              Altere dados, contatos e credenciais salvos no navegador.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Nome do Professor
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3.5 py-2.5 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Registro CREF
              </label>
              <input
                type="text"
                required
                value={formData.cref}
                onChange={(e) => setFormData({ ...formData, cref: e.target.value })}
                className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3.5 py-2.5 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
              Título Profissional
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3.5 py-2.5 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
              Frase de Destaque (Tagline)
            </label>
            <input
              type="text"
              required
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3.5 py-2.5 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
              Biografia & Apresentação
            </label>
            <textarea
              rows={3}
              required
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3.5 py-2.5 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Email de Atendimento
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3.5 py-2.5 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                WhatsApp
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3.5 py-2.5 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Alunos Atendidos
              </label>
              <input
                type="text"
                value={formData.studentsTrained}
                onChange={(e) => setFormData({ ...formData, studentsTrained: e.target.value })}
                className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3 py-2 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Anos de Experiência
              </label>
              <input
                type="text"
                value={formData.yearsExperience}
                onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3 py-2 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Taxa de Adesão
              </label>
              <input
                type="text"
                value={formData.retentionRate}
                onChange={(e) => setFormData({ ...formData, retentionRate: e.target.value })}
                className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/50 px-3 py-2 text-base sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              id="accept-new"
              type="checkbox"
              checked={formData.acceptingNewStudents}
              onChange={(e) => setFormData({ ...formData, acceptingNewStudents: e.target.checked })}
              className="h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="accept-new" className="text-xs text-stone-700 dark:text-stone-300 cursor-pointer">
              Exibir status "Vagas Abertas para Novos Alunos" no topo do site
            </label>
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-stone-200 dark:border-stone-800">
            <button
              type="button"
              onClick={() => {
                onReset();
                setFormData(initialTrainer);
              }}
              className="inline-flex items-center gap-1.5 min-h-[44px] text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-4 py-2 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] rounded-xl bg-stone-900 dark:bg-stone-100 px-5 py-2.5 text-xs font-bold text-stone-50 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors shadow-xs cursor-pointer active:scale-[0.98]"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                    <span>Salvo!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Salvar Dados</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
