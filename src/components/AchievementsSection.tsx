import React, { useState } from 'react';
import { Trophy, Medal, Award, Flame, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { AchievementItem } from '../types/bjj';
import { IMAGES } from '../assets/images';

interface AchievementsSectionProps {
  achievements: AchievementItem[];
  onOpenCurriculum: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  onOpenCurriculum,
}) => {
  const [filter, setFilter] = useState<'all' | 'gold' | 'silver'>('all');

  const filteredAchievements = achievements.filter((a) => {
    if (filter === 'gold') return a.medal === 'gold';
    if (filter === 'silver') return a.medal === 'silver';
    return true;
  });

  return (
    <section id="atleta" className="py-20 md:py-28 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Trophy className="w-3.5 h-3.5" />
              <span>Alta Performance &amp; Competição</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-impact tracking-tight text-white uppercase">
              CONQUISTAS, TÍTULOS &amp; <span className="text-emerald-600">PÓDIOS</span>
            </h2>
            <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
              O Professor Cauan testa suas técnicas sob a máxima pressão do circuito mundial IBJJF e CBJJ. Quem compete em alto rendimento ensina com autoridade real.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-stone-900 p-1.5 rounded-xl border border-stone-800 self-start lg:self-auto font-mono text-xs uppercase">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-emerald-800 text-white font-bold shadow-md border border-emerald-700'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Todos os Títulos
            </button>
            <button
              onClick={() => setFilter('gold')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'gold'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Medalhas de Ouro 🥇
            </button>
            <button
              onClick={() => setFilter('silver')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'silver'
                  ? 'bg-slate-300 text-stone-950 font-bold shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Prata Internacional 🥈
            </button>
          </div>
        </div>

        {/* Action Showcase Banner - Real Championship Flying Arm-lock */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-stone-900 border border-amber-500/30 relative shadow-2xl group">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] min-h-[280px] max-h-[460px] w-full overflow-hidden">
            <img
              src={IMAGES.competitionAction}
              alt="Professor Cauan aplicando arm-lock voador em campeonato oficial de Jiu-Jitsu"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 max-w-xl">
              <span className="px-3 py-1 rounded-md bg-amber-500 text-stone-950 text-xs font-bold font-mono uppercase tracking-wider mb-2 inline-flex items-center gap-1.5 shadow-md">
                ⚡ ARM-LOCK VOADOR EM COMPETIÇÃO OFICIAL
              </span>
              <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                &ldquo;A técnica lapidada na competição é a mesma que protege você na rua.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Registro real de luta em campeonato oficial da federação.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {item.medal === 'gold' ? (
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                        <Trophy className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-xl bg-slate-400/20 border border-slate-400/40 flex items-center justify-center text-slate-300 shrink-0">
                        <Medal className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                        {item.organization}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono shrink-0">
                    {item.year}
                  </span>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400 font-mono">
                <span>{item.division}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Curriculum Callout */}
        <div className="text-center">
          <button
            onClick={onOpenCurriculum}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 text-sm font-semibold border border-stone-700 transition-all cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Ver Histórico Completo de Lutas, Certificados &amp; Linhagem</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
