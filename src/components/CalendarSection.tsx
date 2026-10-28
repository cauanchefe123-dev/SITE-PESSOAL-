import React from 'react';
import { Calendar, MapPin, Target, CheckCircle2 } from 'lucide-react';
import { CompetitionEvent } from '../types/athlete';

interface CalendarSectionProps {
  events: CompetitionEvent[];
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ events }) => {
  return (
    <section id="calendario" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Temporada Competitiva 2026</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-3">
            Calendário de Provas & Próximos Desafios
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            Planejamento detalhado de periodização com foco nos principais campeonatos nacionais e sul-americanos do ano.
          </p>
        </div>

        <div className="space-y-4">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/80 p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs hover:border-amber-500/40 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">
                    {evt.date}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    {evt.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{evt.category}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50">
                  {evt.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300">
                  <Target className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Meta Principal: <strong>{evt.goal}</strong></span>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${
                    evt.status === 'alvo_principal'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  }`}
                >
                  {evt.status === 'alvo_principal' ? '🎯 Alvo Principal' : '✓ Confirmado'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
