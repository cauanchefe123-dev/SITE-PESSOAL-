import React from 'react';
import { Dumbbell, Flame, HeartPulse, ShieldCheck } from 'lucide-react';

export const TrainingRoutineSection: React.FC = () => {
  const pillars = [
    {
      title: 'Pista & Velocidade Pura',
      volume: '10h semanais',
      description: 'Largadas em blocos com células fotoelétricas, aceleração máxima, mecânica de passada e velocidade resistida com trenó.',
    },
    {
      title: 'Força & Potência Neuromuscular',
      volume: '8h semanais',
      description: 'Levantamento de peso olímpico (LPO), agachamento pesado, pliometria em caixas e trabalho corretivo de cadeia posterior.',
    },
    {
      title: 'Recovery & Biomecânica',
      volume: '5h semanais',
      description: 'Crioterapia, liberação miofascial esportiva, monitoramento de variabilidade de frequência cardíaca (VFC) e mobilidade articular.',
    },
    {
      title: 'Nutrição & Sono Científico',
      volume: 'Diário',
      description: 'Periodização de carboidratos para treinos de alta intensidade, suplementação ergogênica validada e 8h30 a 9h de sono rastreado.',
    },
  ];

  return (
    <section id="rotina" className="py-20 md:py-28 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-100/30 dark:bg-stone-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image of Intense Gym Session */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-stone-900">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/athlete_strength_training_1790273103387.jpg"
                  alt="Sessão de treino de força e explosão muscular"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-5 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
                <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold mb-1">
                  PREPARAÇÃO DE ALTO RENDIMENTO
                </div>
                <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  "O ouro é conquistado na rotina invisível que ninguém aplaude."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Routine Pillars */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>Metodologia & Rotina</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-3">
                Estrutura de Preparação Física
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed">
                Cada centésimo de segundo ganho na pista é fruto de uma combinação precisa entre ciência do esporte, fisiologia aplicada e disciplina irredutível.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/80 p-5 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-stone-900 dark:text-stone-100 text-base">
                      {pillar.title}
                    </h3>
                    <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold">
                      {pillar.volume}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
