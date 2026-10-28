import React, { useState } from 'react';
import { Sparkles, Clock, MapPin, CheckCircle2, ArrowRight, Shield, MessageCircle } from 'lucide-react';
import { BJJService, ProfessorProfile } from '../types/bjj';

interface ServicesSectionProps {
  services: BJJService[];
  profile: ProfessorProfile;
  onSelectService: (service: BJJService) => void;
  onBookClass: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  profile,
  onSelectService,
  onBookClass,
}) => {
  const [filter, setFilter] = useState<'all' | 'individual' | 'dupla' | 'kids' | 'competicao'>('all');

  const filteredServices = services.filter((s) => {
    if (filter === 'individual') return s.id === 'jiujitsu-individual';
    if (filter === 'dupla') return s.id === 'jiujitsu-dupla-casal';
    if (filter === 'kids') return s.id === 'jiujitsu-kids';
    if (filter === 'competicao') return s.id === 'jiujitsu-competicao';
    return true;
  });

  const rawPhone = profile.whatsapp.replace(/\D/g, '');

  return (
    <section id="aulas" className="py-20 md:py-28 bg-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
              <Shield className="w-3.5 h-3.5" />
              <span>Aulas Particulares &bull; Personal Fight</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-impact tracking-tight text-white uppercase">
              PLANOS DE <span className="text-emerald-500">AULA PARTICULAR</span>
            </h2>
            <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed">
              Programas estruturados sob medida: da atenção 100% individual do Personal VIP ao treino dinâmico em dupla/casal, atendimento a domicílio e consultoria técnica.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-900/80 p-1.5 rounded-xl border border-stone-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer uppercase font-mono ${
                filter === 'all'
                  ? 'bg-emerald-800 text-white shadow-md font-bold border border-emerald-700'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('individual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer uppercase font-mono ${
                filter === 'individual'
                  ? 'bg-emerald-800 text-white shadow-md font-bold border border-emerald-700'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setFilter('dupla')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer uppercase font-mono ${
                filter === 'dupla'
                  ? 'bg-emerald-800 text-white shadow-md font-bold border border-emerald-700'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Dupla / Casal
            </button>
            <button
              onClick={() => setFilter('kids')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer uppercase font-mono ${
                filter === 'kids'
                  ? 'bg-emerald-800 text-white shadow-md font-bold border border-emerald-700'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Kids
            </button>
            <button
              onClick={() => setFilter('competicao')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer uppercase font-mono ${
                filter === 'competicao'
                  ? 'bg-emerald-800 text-white shadow-md font-bold border border-emerald-700'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Competição
            </button>
          </div>
        </div>

        {/* Featured Card: Personal Fight VIP */}
        {filter === 'all' && (
          <div className="mb-12 rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-900/90 to-stone-950 border-2 border-emerald-800 shadow-2xl relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md bg-emerald-800 text-white text-xs font-impact tracking-wider uppercase border border-emerald-700">
                    ★ DESTAQUE DO PROFESSOR
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-stone-800 text-stone-300 text-xs font-mono">
                    100% Individualizado
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-impact text-white tracking-tight uppercase">
                    PERSONAL FIGHT: AULAS PARTICULARES VIP
                  </h3>
                  <p className="text-emerald-500 font-medium text-sm sm:text-base mt-1">
                    Evolução até 4x mais rápida com o Professor Cauan no seu ritmo.
                  </p>
                </div>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Sem turmas cheias, sem constrangimento e sem risco de parceiros descuidados. Você treina diretamente com a Faixa Preta, ajustando alavancas, defesa pessoal e condicionamento em dojo privativo ou no tatame do seu condomínio.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    'Horários flexíveis (manhã, almoço, noite)',
                    'Sparring seguro conduzido pelo professor',
                    'Atendimento a domicílio ou CT privativo',
                    'Aulas avulsas ou planos mensais flexíveis',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onBookClass('Personal Fight VIP')}
                    className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-impact tracking-wider text-base uppercase transition-all shadow-lg shadow-black/60 cursor-pointer border border-emerald-700"
                  >
                    🥋 Agendar Aula Experimental de Personal
                  </button>
                  <a
                    href={`https://wa.me/${rawPhone}?text=${encodeURIComponent(
                      'Olá Professor Cauan! Gostaria de consultar valores e disponibilidade para aulas de Personal Fight VIP.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-sm border border-stone-700 flex items-center gap-2 transition-all cursor-pointer font-mono"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Valores via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Photo on right */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-stone-700/80 aspect-[4/3] shadow-lg">
                  <img
                    src={services[0]?.image || '/src/assets/images/bjj_personal_class_1790275965174.jpg'}
                    alt="Personal Fight BJJ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-stone-700 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Image header - aspect-square matches 1:1 image exactly with zero black bars */}
                <div className="relative aspect-square overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {service.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[11px] font-bold shadow-md">
                      {service.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200 drop-shadow-md">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-stone-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {service.format.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {service.scope && (
                    <div className="p-2.5 rounded-lg bg-stone-950/60 border border-stone-800 text-[11px] text-stone-300">
                      <strong className="text-emerald-400 font-mono uppercase block text-[10px] tracking-wider mb-0.5">
                        Escopo do Treino
                      </strong>
                      <span className="line-clamp-2">{service.scope.replace('Escopo Completo: ', '').replace('Escopo Pedagógico: ', '').replace('Escopo Tático: ', '')}</span>
                    </div>
                  )}

                  <div className="pt-1 space-y-1.5">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-stone-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookClass(service.title)}
                  className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-amber-400 text-xs font-bold transition-all cursor-pointer"
                >
                  Agendar Aula
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
