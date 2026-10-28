import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ProfessorProfile } from '../types/bjj';
import { IMAGES } from '../assets/images';

interface HeaderProps {
  profile: ProfessorProfile;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Aulas Particulares', href: '#aulas' },
    { label: 'Por Que Personal', href: '#vantagens' },
    { label: 'Sobre o Professor', href: '#sobre' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Agendar', href: '#contato' },
  ];

  const rawPhone = profile.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(
    `Olá ${profile.name}! Gostaria de consultar horários e valores para Aulas Particulares de Jiu-Jitsu (Personal Fight VIP).`
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/95 backdrop-blur-md shadow-2xl py-2.5'
          : 'bg-stone-950/90 backdrop-blur-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand: Photo avatar + CAUAN in white + SANTOS in green */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-emerald-600 shrink-0 shadow-md">
            <img
              src={IMAGES.heroKimono}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex items-baseline">
            <span className="font-impact text-2xl sm:text-3xl tracking-wider text-white">
              {profile.name}
            </span>
            <span className="font-impact text-2xl sm:text-3xl tracking-wider text-emerald-600 ml-1">
              {profile.lastName || 'SANTOS'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-900/60 p-1 rounded-full border border-stone-800/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-stone-300 hover:text-white hover:bg-stone-800/80 px-3.5 py-1.5 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Action */}
        <div className="hidden sm:flex items-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-impact tracking-wider text-sm uppercase shadow-lg shadow-emerald-950/60 transition-all hover:scale-105 cursor-pointer"
          >
            <span className="text-base leading-none">🥋</span>
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-emerald-400 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-t border-stone-800 px-5 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-semibold text-stone-200 hover:text-emerald-400 py-2 transition-colors font-impact text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-base font-impact tracking-wider uppercase shadow-md shadow-emerald-950/60"
            >
              <span>🥋</span>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
