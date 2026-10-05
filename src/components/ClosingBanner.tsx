import React from 'react';
import { HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

interface ClosingBannerProps {
  onNavigate: (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => void;
}

export const ClosingBanner: React.FC<ClosingBannerProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-[#001048] via-[#00239F] to-[#001048] text-white border-t border-blue-900 shadow-2xl">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-radial from-blue-500/20 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#0062FF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0062FF]/20 border border-[#38BDF8]/40 text-[#38BDF8] font-bold text-xs uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-[#38BDF8]" />
              <span>Compromiso Institucional CENNCA</span>
            </div>

            {/* Exact closing text required by client */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Nosotros nos especializamos en tu salud y en la plenitud de la vida de nuestros <span className="text-[#38BDF8] underline underline-offset-8 decoration-2">PACIENTES</span>.
            </h2>

            <p className="text-sm sm:text-base text-blue-100 font-light max-w-2xl">
              Atención médica integral, altamente especializada y centrada en brindar la mejor calidad de vida a cada persona que confía su salud en nuestras manos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => onNavigate('contacto')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0062FF] to-[#38BDF8] text-white hover:from-[#00239F] hover:to-[#0062FF] font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-blue-500/30 cursor-pointer"
            >
              <span>Agendar Valoración</span>
              <ArrowRight className="w-4 h-4 text-sky-200" />
            </button>

            <button
              onClick={() => onNavigate('nosotros')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Conoce al Equipo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
