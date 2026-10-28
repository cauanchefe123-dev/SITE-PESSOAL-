import React from 'react';
import { Timer, Zap, Activity } from 'lucide-react';
import { PersonalRecord } from '../types/athlete';

interface RecordsSectionProps {
  records: PersonalRecord[];
}

export const RecordsSection: React.FC<RecordsSectionProps> = ({ records }) => {
  return (
    <section id="recordes" className="py-20 md:py-28 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <Timer className="w-3.5 h-3.5" />
            <span>Métricas de Desempenho</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-3">
            Recordes Pessoais & Indicadores Fisiológicos
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base leading-relaxed">
            Marcas oficiais cronometradas eletronicamente e avaliações biomecânicas validadas em laboratório esportivo de alto rendimento.
          </p>
        </div>

        {/* Tabular Records Grid */}
        <div className="rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-stone-900/90 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-950/70 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  <th scope="col" className="py-4 px-6">Prova / Métrica</th>
                  <th scope="col" className="py-4 px-6">Melhor Marca</th>
                  <th scope="col" className="py-4 px-6">Evento / Local</th>
                  <th scope="col" className="py-4 px-6">Data</th>
                  <th scope="col" className="py-4 px-6">Condições & Observações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800/70 text-sm">
                {records.map((rec) => (
                  <tr key={rec.id} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-stone-900 dark:text-stone-100 whitespace-nowrap">
                      {rec.discipline}
                    </td>
                    <td className="py-4 px-6 font-mono text-base font-bold text-amber-600 dark:text-amber-400 tabular-nums whitespace-nowrap">
                      {rec.record}
                    </td>
                    <td className="py-4 px-6 text-stone-700 dark:text-stone-300 whitespace-nowrap">
                      {rec.event}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-stone-500 dark:text-stone-400 whitespace-nowrap">
                      {rec.date}
                    </td>
                    <td className="py-4 px-6 text-xs text-stone-500 dark:text-stone-400">
                      {rec.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
