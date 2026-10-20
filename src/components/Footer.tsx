import React from 'react';
import { ArrowUp, Instagram, MessageCircle, Mail, Shield, Award } from 'lucide-react';
import { ProfessorProfile } from '../types/bjj';
import { IMAGES } from '../assets/images';

interface FooterProps {
  profile: ProfessorProfile;
  onOpenCurriculum: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenCurriculum }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rawPhone = profile.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}`;

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/80 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-600 shrink-0">
                <img
                  src={IMAGES.heroKimono}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex items-baseline">
                <span className="font-impact text-2xl text-white tracking-wider">
                  {profile.name}
                </span>
                <span className="font-impact text-2xl text-emerald-600 tracking-wider ml-1">
                  {profile.lastName || 'SANTOS'}
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Brazilian Jiu-Jitsu tradicional e moderno para adultos, crianças e atletas. Ensino focado em alavancas técnicas, segurança física e disciplina mental.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:border-emerald-500/40 text-stone-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:border-pink-500/40 text-stone-300 hover:text-pink-400 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-amber-400 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-200 font-bold">
              Navegação do Tatame
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition-colors">
                  Sobre o Professor
                </a>
              </li>
              <li>
                <a href="#aulas" className="hover:text-emerald-400 transition-colors">
                  Aulas: Individual, Dupla/Casal, Kids &amp; Competição
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Schedule & Direct contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-200 font-bold">
              Atendimento &amp; Local
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-medium">
              CT indicado pelo professor
            </p>
            <div className="pt-1 text-xs text-stone-400 space-y-1">
              <div>Segunda a Sexta: 06:00 às 22:00</div>
              <div>Sábado: 07:30 às 13:00</div>
            </div>
            <div className="pt-2">
              <a
                href="#contato"
                className="inline-block px-4 py-2 rounded-lg bg-stone-900 hover:bg-emerald-800 text-emerald-400 hover:text-white text-xs font-semibold border border-stone-800 transition-colors"
              >
                Agendar Primeira Aula
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {profile.name} • Faixa Preta CBJJ / IBJJF. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
