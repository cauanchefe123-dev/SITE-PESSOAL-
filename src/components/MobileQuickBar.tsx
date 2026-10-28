import React from 'react';
import { ProfessorProfile } from '../types/bjj';

interface MobileQuickBarProps {
  profile: ProfessorProfile;
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  profile,
  onOpenBooking,
}) => {
  const cleanPhone = profile.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Olá Professor ${profile.name}! Gostaria de informações sobre horários de aulas e Personal Fight.`
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-stone-800 shadow-2xl">
      <div className="grid grid-cols-2 w-full">
        {/* Left Tab: AGENDAR AULA */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 py-3.5 sm:py-4 px-2 bg-black hover:bg-stone-900 active:bg-stone-950 text-white font-impact tracking-wider text-sm sm:text-base uppercase border-r border-stone-800 transition-colors cursor-pointer"
        >
          <span className="text-base sm:text-lg leading-none">🥋</span>
          <span>AULA PARTICULAR</span>
        </button>

        {/* Right Tab: WHATSAPP DIRETO */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 sm:py-4 px-2 bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white font-impact tracking-wider text-sm sm:text-base uppercase transition-colors cursor-pointer"
        >
          <span className="text-base sm:text-lg leading-none">💬</span>
          <span>FALAR NO WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};

