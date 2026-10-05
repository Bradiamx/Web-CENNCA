import React from 'react';
import { clinicInfo } from '../data/cenncaData';
import { MapPin, Navigation, Car, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0062FF] font-bold text-xs uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fácil Acceso en Toluca y Metepec</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#00239F] tracking-tight">
            Nuestra Ubicación
          </h2>
          <div className="w-16 h-1 bg-[#0062FF] mx-auto my-3 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base">
            Instalaciones de primer nivel en el <strong>Centro Médico Toluca</strong>, Torre de Servicios Especializados, Consultorio 208.
          </p>
        </div>

        {/* Info pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#00239F] flex items-center justify-center shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase text-slate-500">Dirección Exacta</div>
              <div className="text-xs font-semibold text-slate-800">{clinicInfo.address.fullFormatted}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#00239F] flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase text-slate-500">Estacionamiento</div>
              <div className="text-xs font-semibold text-slate-800">Servicio de valet y estacionamiento del hospital</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#00239F] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase text-slate-500">Instalaciones Hospitalarias</div>
              <div className="text-xs font-semibold text-slate-800">Quirófanos de alta tecnología, resonancia y UCI</div>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative h-96 sm:h-[450px]">
          <iframe
            src={clinicInfo.googleMapsEmbedUrl}
            title={clinicInfo.address.fullFormatted}
            aria-label={clinicInfo.address.fullFormatted}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};
