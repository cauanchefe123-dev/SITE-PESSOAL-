import React, { useEffect } from 'react';
import { X, Printer, Download, Award, Shield, CheckCircle2, Trophy, MapPin, Mail, Phone } from 'lucide-react';
import { ProfessorProfile, AchievementItem } from '../types/bjj';
import { IMAGES } from '../assets/images';

interface CurriculumModalProps {
  isOpen: boolean;
  profile: ProfessorProfile;
  achievements: AchievementItem[];
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  isOpen,
  profile,
  achievements,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 my-8 text-stone-100 print:bg-white print:text-black print:border-none print:shadow-none print:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions bar */}
        <div className="p-4 sm:p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            <span className="font-display font-bold text-sm sm:text-base text-white">
              Ficha Técnica Oficial &amp; Certificações
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors cursor-pointer"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Curriculum Content */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-stone-800 print:border-stone-300">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-600 shrink-0 shadow-lg">
                <img
                  src={IMAGES.heroKimono}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-bold font-mono text-xs uppercase mb-1 border border-emerald-800 print:border-emerald-600 print:text-emerald-700">
                  {profile.belt}
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white print:text-black">
                  {profile.name} {profile.lastName || 'SANTOS'}
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm mt-0.5 print:text-stone-700">
                  {profile.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 mt-2 print:text-stone-600 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                    {profile.location.split('&')[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-400 print:text-black" />
                    {profile.whatsapp}
                  </span>
                </div>
              </div>
            </div>

            {/* Belt Graphic in Print */}
            <div className="h-10 w-24 rounded bg-stone-950 border border-stone-700 flex items-center justify-end px-2 print:bg-black">
              <div className="h-full w-8 bg-red-600 flex flex-col justify-around py-1 items-center">
                <div className="w-3 h-0.5 bg-white"></div>
                <div className="w-3 h-0.5 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold print:text-black">
              1. Resumo Pedagógico &amp; Metodologia
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed print:text-stone-800">
              {profile.bio}
            </p>
          </div>

          {/* Graduações e Certificações */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold print:text-black">
              2. Credenciais &amp; Federações
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-2.5 print:bg-stone-50 print:border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white print:text-black block">Cartel Invicto na Categoria</strong>
                  <span className="text-stone-300 print:text-stone-600">Invicto em sua divisão de peso desde a faixa azul</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-2.5 print:bg-stone-50 print:border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white print:text-black block">Especialista em Arm-Lock Voador</strong>
                  <span className="text-stone-300 print:text-stone-600">Alavanca de precisão e transição aérea em combate</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-800 flex items-start gap-2.5 print:bg-stone-50 print:border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white print:text-black block">CBJJ (Confederação Brasileira de Jiu-Jitsu)</strong>
                  <span className="text-stone-400 print:text-stone-600">Registro ativo de Professor &amp; Faixa Preta</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-800 flex items-start gap-2.5 print:bg-stone-50 print:border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white print:text-black block">IBJJF (International BJJ Federation)</strong>
                  <span className="text-stone-400 print:text-stone-600">Atleta &amp; Coach Internacional Cadastrado</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-800 flex items-start gap-2.5 print:bg-stone-50 print:border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white print:text-black block">+30 Títulos de Campeão Estadual</strong>
                  <span className="text-stone-400 print:text-stone-600">Dominância contínua no ranking de Goiás e Centro-Oeste</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-800 flex items-start gap-2.5 print:bg-stone-50 print:border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white print:text-black block">Primeiros Socorros &amp; RCP</strong>
                  <span className="text-stone-400 print:text-stone-600">Certificado para segurança no tatame</span>
                </div>
              </div>
            </div>
          </div>

          {/* Principais Conquistas em Competição */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold print:text-black">
              4. Principais Títulos Como Atleta Competidor
            </h3>
            <div className="space-y-2">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center justify-between gap-4 text-xs print:bg-stone-50 print:border-stone-200"
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-semibold text-stone-100 print:text-black">
                      {item.title} ({item.organization})
                    </span>
                  </div>
                  <span className="font-mono text-stone-400 shrink-0 print:text-stone-600">
                    {item.division} • {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-500 flex items-center justify-between print:text-stone-600 print:border-stone-300">
            <span>Documento oficial emitido em {new Date().toLocaleDateString('pt-BR')}</span>
            <span>CT Oficial Professor Cauan • Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </div>
  );
};
