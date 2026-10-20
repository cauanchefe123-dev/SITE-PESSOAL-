import React from 'react';

export const MarqueeRibbon: React.FC = () => {
  const items = [
    'AULAS PARTICULARES DE JIU-JITSU',
    'PERSONAL FIGHT VIP EXCLUSIVO',
    'ATENDIMENTO A DOMICÍLIO OU DOJO',
    'ATENÇÃO 100% INDIVIDUALIZADA',
    'HORÁRIOS FLEXÍVEIS',
    'TREINO SEGURO SEM RISCO DE LESÕES',
    'AULAS EM DUPLA OU CASAL',
    '+11 ANOS DE EXPERIÊNCIA',
    '+60 TÍTULOS CONQUISTADOS',
    'PROFESSOR FAIXA PRETA',
  ];

  return (
    <div className="relative py-3 bg-emerald-800 text-white font-impact uppercase tracking-widest text-sm md:text-base overflow-hidden select-none border-y border-emerald-900 shadow-md">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="flex items-center mx-4">
            <span>{item}</span>
            <span className="mx-4 text-white/50 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
