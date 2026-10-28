import React, { useEffect } from 'react';
import { X, Play, Download, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 text-stone-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Play className="w-4 h-4 fill-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                Vídeo Oficial • Professor Cauan Santos
              </h3>
              <p className="text-[11px] text-stone-400">
                Apresentação das Aulas Particulares & Personal Fight em Goiânia
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar vídeo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
            src="/video_cauan_bjj.mp4"
          >
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3.5 bg-stone-950 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-stone-400">
            Resolução HD 1280x720 • Áudio & Metodologia
          </span>

          <div className="flex items-center gap-2">
            <a
              href="/video_cauan_bjj.mp4"
              download="Video_Professor_Cauan_Santos_BJJ.mp4"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Vídeo MP4</span>
            </a>
            <a
              href="https://wa.me/5562993838862?text=Olá%20Professor%20Cauan!%20Assisti%20ao%20vídeo%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20aula."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
            >
              <span>Falar no WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
