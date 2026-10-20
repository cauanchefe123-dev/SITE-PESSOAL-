import React from 'react';
import { Star, MessageSquareQuote, ShieldCheck, Heart } from 'lucide-react';
import { TestimonialItem } from '../types/bjj';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-900 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Resultados Reais no Tatame</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-impact tracking-tight text-white uppercase">
            O QUE DIZEM <span className="text-emerald-600">NOSSOS ALUNOS</span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            De empresários que buscam aliviar a mente no Personal até competidores de pódio e crianças que desenvolvem foco e disciplina.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-stone-700 transition-all flex flex-col justify-between space-y-6 relative shadow-lg"
            >
              <div className="space-y-4">
                {/* Rating stars & badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-400 text-xs font-medium font-mono">
                    {item.experienceType}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm sm:text-base text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-stone-400 font-mono">
                    {item.role}
                  </div>
                </div>

                {item.beltLevel && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-900 text-stone-300 border border-stone-700">
                    {item.beltLevel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
