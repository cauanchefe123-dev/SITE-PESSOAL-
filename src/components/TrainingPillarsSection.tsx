import React from 'react';
import { ProfessorProfile } from '../types/bjj';
import { IMAGES } from '../assets/images';
import { Shield, Target, Flame, ChevronRight, Trophy } from 'lucide-react';

interface TrainingPillarsSectionProps {
  profile: ProfessorProfile;
  onBookClass: (serviceTitle?: string) => void;
}

export const TrainingPillarsSection: React.FC<TrainingPillarsSectionProps> = ({
  profile,
  onBookClass,
}) => {
  const rawPhone = profile.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    `Olá ${profile.name}! Gostaria de agendar uma aula experimental de Jiu-Jitsu.`
  )}`;

  const pillars = [
    {
      title: 'ATENÇÃO 100% INDIVIDUAL',
      badge: 'ZERO DISTRAÇÃO',
      desc: 'Cada segundo do treino é dedicado a você. Correção milimétrica de pegadas, alavancas e postura direto no seu biótipo com segurança máxima.',
      actionTitle: 'Personal Fight VIP (100% Individual)',
      icon: Shield,
    },
    {
      title: 'FLEXIBILIDADE DE HORÁRIO & LOCAL',
      badge: 'NA SUA ROTINA',
      desc: 'Treine nos seus horários (manhã, almoço, tarde ou noite) no dojo privativo, condomínio ou residência com total privacidade e conforto.',
      actionTitle: 'Personal Fight a Domicílio ou Dojo',
      icon: Target,
    },
    {
      title: 'EVOLUÇÃO ATÉ 4X MAIS RÁPIDA',
      badge: 'SEM LESÕES',
      desc: 'Sem riscos de parceiros afoitos. O próprio Professor Faixa Preta faz o sparring controlado, acelerando meses de aprendizado em poucas semanas.',
      actionTitle: 'Evolução Técnica com Faixa Preta',
      icon: Flame,
    },
  ];

  return (
    <section id="vantagens" className="py-16 lg:py-24 bg-stone-950 text-white relative border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading on Desktop */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Por Que Fazer Aulas Particulares</span>
          </div>
          <h2 className="font-impact text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            VANTAGENS EXCLUSIVAS DO <span className="text-emerald-500">PERSONAL FIGHT</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Metodologia sob medida para quem busca máxima eficiência técnica, privacidade, segurança física e horários compatíveis com a sua rotina.
          </p>
        </div>

        {/* Desktop 2-Column: Photo Gallery Left, Stacked Pillar Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Highlight on Desktop */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Card 1: Official Kimono Photo */}
            <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 group shadow-xl relative">
              <div className="relative aspect-[16/10] sm:aspect-square lg:aspect-[16/11] overflow-hidden">
                <img
                  src={IMAGES.heroKimono}
                  alt="Professor Cauan Santos de Kimono e Faixa Preta"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-800 text-[10px] font-mono uppercase font-bold text-white tracking-wider border border-emerald-700">
                      Faixa Preta Oficial
                    </span>
                    <p className="text-white font-impact text-lg uppercase mt-1">
                      PROFESSOR CAUAN SANTOS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Tatami Instruction Photo */}
            <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 group shadow-xl relative">
              <div className="relative aspect-[16/10] sm:aspect-square lg:aspect-[16/11] overflow-hidden">
                <img
                  src={IMAGES.coachingMat}
                  alt="Professor Cauan instruindo no tatame"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-amber-600 text-[10px] font-mono uppercase font-bold text-white tracking-wider border border-amber-500">
                      Acompanhamento Prático
                    </span>
                    <p className="text-white font-impact text-lg uppercase mt-1">
                      DIDÁTICA DIRETO NO TATAME
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars with rich interactive desktop styling */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="rounded-2xl border border-stone-800 bg-stone-900/50 backdrop-blur-sm shadow-2xl overflow-hidden divide-y divide-stone-800">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => onBookClass(item.actionTitle)}
                    className="p-6 sm:p-7 hover:bg-stone-800/50 transition-all cursor-pointer group flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-stone-800 group-hover:bg-emerald-600/20 group-hover:border-emerald-500/40 border border-stone-700 flex items-center justify-center shrink-0 transition-colors">
                      <IconComponent className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-impact text-xl sm:text-2xl tracking-wide text-white group-hover:text-emerald-400 transition-colors uppercase">
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-800 text-emerald-400 shrink-0 font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-stone-400 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center text-stone-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all pt-2">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 sm:py-4.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-impact tracking-wider text-lg sm:text-xl uppercase flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/70 transition-all hover:scale-[1.01] cursor-pointer text-center"
              >
                <span className="text-2xl leading-none">🥋</span>
                <span>QUERO TREINAR COM O PROFESSOR {profile.name}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
