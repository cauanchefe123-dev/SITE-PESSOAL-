import React, { useEffect } from 'react';
import { X, Printer, Trophy, Award, TrendingUp, Users, Target, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { AthleteProfile, PersonalRecord } from '../types/athlete';

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  athlete: AthleteProfile;
  records: PersonalRecord[];
}

export const MediaKitModal: React.FC<MediaKitModalProps> = ({
  isOpen,
  onClose,
  athlete,
  records,
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
      aria-labelledby="mediakit-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl transition-all print:max-h-none print:shadow-none print:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-6 py-4 print:hidden">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Mídia Kit Oficial para Patrocinadores & Marcas</span>
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
              aria-label="Fechar mídia kit"
              className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Media Kit Content */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0">
          {/* Header Block */}
          <div className="border-b border-stone-200 dark:border-stone-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold mb-1">
                PRESS KIT & COMERCIAL 2026
              </div>
              <h1 id="mediakit-title" className="font-display text-3xl font-bold text-stone-900 dark:text-stone-50 mb-1">
                {athlete.name}
              </h1>
              <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                {athlete.sport} · {athlete.category}
              </div>
            </div>

            <div className="text-xs space-y-1 text-stone-500 dark:text-stone-400 font-mono sm:text-right">
              <div>Base: {athlete.location}</div>
              <div>Contato: {athlete.email}</div>
              <div>Status: {athlete.status}</div>
            </div>
          </div>

          {/* Performance KPIs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800">
            <div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Títulos Oficiais</div>
              <div className="font-display text-2xl font-bold text-stone-900 dark:text-stone-50 mt-1">
                {athlete.officialTitles}
              </div>
            </div>
            <div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Taxa em Pódios</div>
              <div className="font-display text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">
                {athlete.podiumRate}
              </div>
            </div>
            <div>
              <div className="text-xs text-stone-500 dark:text-stone-400">100m Melhor Marca</div>
              <div className="font-display text-2xl font-bold text-stone-900 dark:text-stone-50 mt-1">
                10.38s
              </div>
            </div>
            <div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Treino Semanal</div>
              <div className="font-display text-2xl font-bold text-stone-900 dark:text-stone-50 mt-1">
                {athlete.weeklyTrainingHours}
              </div>
            </div>
          </div>

          {/* Biografia Esportiva & Valores */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
              Perfil do Atleta & Posicionamento
            </h2>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {athlete.bio}
            </p>
          </div>

          {/* Dados de Audiência & Retorno de Mídia */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
              Alcance de Mídia & Audiência Qualificada
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-1">
                  65.000+
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  Impressões mensais combinadas nas redes (treinos, bastidores e corridas).
                </div>
              </div>
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-1">
                  8.4%
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  Taxa média de engajamento orgânico (4x superior à média do segmento).
                </div>
              </div>
              <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-1">
                  Público Premium
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  72% praticantes de corrida, crossfit e musculação de classes A/B.
                </div>
              </div>
            </div>
          </div>

          {/* O que a Marca Recebe (Ativações) */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              Formatos de Ativação para Patrocinadores
            </h2>
            <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span><strong>Uniforme de Competição & Pódio:</strong> Aplicação da logomarca no peito, costas e boné oficial de pódio em todas as provas televisionadas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span><strong>Conteúdo Digital Autêntico:</strong> Vídeos de bastidores, reviews de equipamentos e menções fixadas nas redes sociais.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span><strong>Direitos de Imagem & Campanhas:</strong> Sessões de fotos exclusivas para peças publicitárias e campanhas institucionais da sua empresa.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span><strong>Palestras & Presença Corporativa:</strong> Workshops motivacionais sobre foco, resiliência e alta performance para equipes corporativas.</span>
              </li>
            </ul>
          </div>

          {/* Rodapé do Mídia Kit */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
            <div>
              Para propostas comerciais formais: <strong>{athlete.email}</strong>
            </div>
            <div>
              Temporada 2026 · Associação Atlética & Equipe Técnica
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
