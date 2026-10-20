import React from 'react';
import { Award, CheckCircle2, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { SponsorItem } from '../types/athlete';

interface SponsorsSectionProps {
  sponsors: SponsorItem[];
  onOpenMediaKit: () => void;
}

export const SponsorsSection: React.FC<SponsorsSectionProps> = ({ sponsors, onOpenMediaKit }) => {
  return (
    <section id="patrocinio" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Marcas & Parcerias</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-3">
            Oportunidades de Patrocínio & Apoio
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base">
            Associe sua marca aos valores de superação, disciplina e alta performance com retorno comprovado de visibilidade e engajamento.
          </p>
        </div>

        {/* Sponsor Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sponsors.map((sp) => (
            <div
              key={sp.id}
              className="rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-stone-900/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                    Tier {sp.tier}
                  </span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                    {sp.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-50 mb-3">
                  {sp.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                  {sp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span>Solicitar Proposta para este Tier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Metrics Banner */}
        <div className="rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-stone-50 dark:bg-stone-900/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg font-bold text-stone-900 dark:text-stone-50">
              Quer receber o Mídia Kit Completo para sua Marca?
            </h4>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Dados demográficos, taxas de engajamento, cobertura de imprensa e opções de ativação sob medida.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenMediaKit}
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-100 px-5 py-2.5 text-xs font-medium text-stone-50 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>Visualizar Mídia Kit Oficial</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
