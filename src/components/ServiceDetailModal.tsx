import React, { useEffect } from 'react';
import { X, Clock, MapPin, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';
import { BJJService, ProfessorProfile } from '../types/bjj';

interface ServiceDetailModalProps {
  service: BJJService | null;
  profile: ProfessorProfile;
  onClose: () => void;
  onBookClass: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  profile,
  onClose,
  onBookClass,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const rawPhone = profile.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    `Olá Professor Cauan! Tenho interesse na modalidade "${service.title}" e gostaria de agendar uma aula experimental / tirar dúvidas.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 my-8 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-950/80 hover:bg-stone-950 text-stone-300 hover:text-white border border-stone-700/60 transition-all cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image banner */}
        <div className="relative aspect-[16/9] w-full bg-stone-950">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />

          {service.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider">
              {service.badge}
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {service.title}
            </h3>
            <p className="text-amber-300 text-xs sm:text-sm font-medium mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick info row */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong className="text-stone-300">Duração:</strong> {service.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong className="text-stone-300">Local:</strong> {service.format}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Sobre Esta Modalidade
            </h4>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Scope of Service & Deliverables */}
          {service.scope && (
            <div className="space-y-2 p-4 rounded-xl bg-stone-950/60 border border-emerald-500/30">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                <span>✦</span> Escopo &amp; Entregáveis do Programa
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {service.scope}
              </p>
            </div>
          )}

          {/* Methodology */}
          {service.methodology && (
            <div className="space-y-2 p-4 rounded-xl bg-stone-950/40 border border-stone-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-300 font-semibold flex items-center gap-2">
                <span>⚙</span> Metodologia Aplicada
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {service.methodology}
              </p>
            </div>
          )}

          {/* Target Audience */}
          <div className="space-y-1.5 p-4 rounded-xl bg-stone-950/40 border border-stone-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Público-Alvo &amp; Requisitos
            </h4>
            <p className="text-stone-200 text-sm">
              {service.targetAudience}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Diferenciais do Treino com o Prof. Cauan
            </h4>
            <div className="space-y-2">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Info Note */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
            <strong>Condições:</strong> {service.priceHint}. A primeira aula experimental é cortesia para avaliação mútua de nível e objetivos.
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Tirar Dúvidas via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookClass(service.title);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Aula Gratuita</span>
          </button>
        </div>
      </div>
    </div>
  );
};
