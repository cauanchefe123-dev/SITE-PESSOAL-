import React from 'react';
import { Target, Activity, ShieldCheck, HeartHandshake } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Diagnóstico & Avaliação Física Individual',
      description: 'Antes de qualquer peso ser levantado, identificamos assimetrias, mobilidade articular, desvios de postura e histórico de saúde para prescrever com precisão clínica.',
    },
    {
      step: '02',
      title: 'Periodização Científica & Sobrecarga Gradual',
      description: 'Chega de treinos aleatórios que causam dor sem gerar resultado. Os treinos seguem ciclos planejados de força, hipertrofia e queima de gordura para evitar estagnação.',
    },
    {
      step: '03',
      title: 'Educação Biomecânica & Segurança Articular',
      description: 'Você aprende o porquê de cada movimento e a técnica correta. Zero risco para coluna, joelhos ou ombros, garantindo longevidade física e postura elegante.',
    },
    {
      step: '04',
      title: 'Suporte Contínuo & Motivação Humanizada',
      description: 'Acompanhamento próximo para manter a disciplina nos dias difíceis, ajustar o volume quando a rotina apertar e comemorar cada vitória real no espelho e na balança.',
    },
  ];

  return (
    <section id="metodologia" className="py-16 sm:py-20 md:py-28 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
            Como Eu Trabalho
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-3 text-balance">
            A Metodologia do Professor Cauan
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Unindo o rigor da fisiologia do exercício ao acolhimento pedagógico para que o treino se torne a melhor hora do seu dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/80 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-amber-500/40 transition-colors"
            >
              <div>
                <div className="font-mono text-2xl font-bold text-amber-600 dark:text-amber-400 mb-3">
                  {p.step}.
                </div>
                <h3 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 text-[11px] text-stone-400 font-mono">
                Pilar {idx + 1} de 4
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
