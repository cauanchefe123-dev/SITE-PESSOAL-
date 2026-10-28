import React from 'react';
import { ChevronRight, UserCheck, Users, Sparkles, Trophy, Flame } from 'lucide-react';
import { ProfessorProfile } from '../types/bjj';
import { IMAGES } from '../assets/images';

interface HeroProps {
  profile: ProfessorProfile;
  onOpenBooking: () => void;
  onOpenCurriculum: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const rawPhone = profile.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    `Olá ${profile.name}! Vi seu site oficial e gostaria de agendar uma aula experimental / falar sobre o Personal Fight e treinos.`
  )}`;

  const heroImg = profile.heroBackgroundUrl || IMAGES.heroKimono;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-stone-950 text-white">
      {/* Background ambient lighting and subtle tatami texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

        {/* Mobile background fallback */}
        <div className="lg:hidden absolute inset-0">
          <img
            src={heroImg}
            alt={profile.name}
            className="w-full h-full object-cover object-top opacity-35 brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60" />
        </div>
      </div>

      {/* Main Container: 2-Column Split on Desktop, Centered on Mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Credibility & Call-to-Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Gold / Official Badge - Clean & Professional Styling */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-stone-900/90 border border-amber-500/40 shadow-lg shadow-black/40 hover:border-amber-400/60 transition-colors">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400/20 shrink-0" />
              <span className="text-amber-300 text-xs sm:text-xs font-semibold tracking-wide uppercase">
                {profile.topBadge || 'INVICTO NA CATEGORIA DESDE A FAIXA AZUL · +60 TÍTULOS'}
              </span>
            </div>

            {/* Massive Punchy Typography */}
            <div className="space-y-1">
              <div className="text-emerald-400 text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold">
                Aulas Particulares VIP &bull; Personal Fight em Goiânia
              </div>
              <h1 className="font-impact text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white uppercase">
                AULAS PARTICULARES.
              </h1>
              <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-emerald-500 uppercase">
                EVOLUÇÃO EXCLUSIVA.
              </h2>
            </div>

            {/* Description / Subtitle focused on private classes */}
            <p className="text-stone-300 text-base sm:text-lg max-w-xl leading-relaxed font-light">
              Aprenda Jiu-Jitsu com atenção 100% individualizada direto com o Professor Faixa Preta Cauan Santos. 
              Evolua até 4x mais rápido no seu ritmo, em dojo privativo, condomínio ou residência, com segurança máxima e horários flexíveis.
            </p>

            {/* Formats Tag Badges - Focused on Private Classes */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-wide shadow-sm">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Personal Fight VIP (100% Individual)</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 text-stone-200 text-xs font-medium tracking-wide shadow-sm transition-colors">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Aulas em Dupla ou Casal</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900/90 border border-stone-800 hover:border-emerald-500/40 text-stone-200 text-xs font-medium tracking-wide shadow-sm transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Atendimento Domicílio ou Dojo</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-impact tracking-wider text-lg uppercase flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/50 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span className="text-xl">🥋</span>
                <span>AGENDAR AULA PARTICULAR</span>
              </a>

              <a
                href="#aulas"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 font-impact tracking-wider text-base uppercase flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-500 transition-all cursor-pointer"
              >
                <span>VER PLANOS DE PERSONAL</span>
                <ChevronRight className="w-4 h-4 text-emerald-500" />
              </a>
            </div>

            {/* Stats highlight strip - Clean Typography */}
            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-stone-800/80 w-full max-w-sm text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-impact text-white tracking-wide">
                  +{profile.podiumsCount || 60}
                </div>
                <div className="text-xs uppercase text-stone-400 font-medium tracking-wider mt-0.5">
                  Títulos &amp; Pódios
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-impact text-emerald-400 tracking-wide">
                  +{profile.yearsTraining || 11} ANOS
                </div>
                <div className="text-xs uppercase text-stone-400 font-medium tracking-wider mt-0.5">
                  De Experiência
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Pure Photo of Professor Cauan (5 cols) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl shadow-black/80">
                <div className="aspect-[2/3] w-full overflow-hidden">
                  <img
                    src={heroImg}
                    alt={`${profile.name} ${profile.lastName || 'Santos'}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
