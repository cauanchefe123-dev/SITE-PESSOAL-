import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqList } from '../data/bjjData';
import { ProfessorProfile } from '../types/bjj';

interface FaqSectionProps {
  profile: ProfessorProfile;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ profile }) => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const rawPhone = profile.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    'Olá Professor Cauan! Tenho uma dúvida sobre as aulas de Jiu-Jitsu que não encontrei no site.'
  )}`;

  return (
    <section id="faq" className="py-20 md:py-28 bg-stone-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
            Tudo o que você precisa saber para colocar os pés no tatame pela primeira vez com total tranquilidade.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-stone-900/80 border border-stone-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-amber-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-stone-300 text-sm sm:text-base leading-relaxed border-t border-stone-800/60 pt-4 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
