import React from 'react';
import { MessageSquare, Calculator, Dumbbell, ArrowUpRight } from 'lucide-react';
import { TrainerProfile } from '../types/trainer';

interface MobileBottomBarProps {
  trainer: TrainerProfile;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ trainer }) => {
  return (
    <aside
      aria-label="Ações rápidas móveis"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-stone-200/90 dark:border-stone-800/90 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md px-3 py-2 shadow-lg transition-colors"
    >
      <div className="mx-auto flex items-center justify-between gap-2 max-w-md">
        <a
          href="#aulas"
          className="flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 min-h-[44px] transition-colors"
        >
          <Dumbbell className="w-4 h-4 mb-0.5 text-amber-500" />
          <span className="text-[10px] font-medium tracking-tight">Aulas</span>
        </a>

        <a
          href="#simulador"
          className="flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 min-h-[44px] transition-colors"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-amber-500" />
          <span className="text-[10px] font-medium tracking-tight">Simulador</span>
        </a>

        <a
          href="#contato"
          className="flex items-center justify-center gap-1.5 flex-[2] min-h-[44px] rounded-xl bg-stone-900 dark:bg-stone-100 px-3 py-2 text-xs font-bold text-stone-50 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 active:scale-[0.98] transition-all shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Agendar Aula</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
