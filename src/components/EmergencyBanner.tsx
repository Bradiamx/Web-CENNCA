import React from 'react';
import { clinicInfo } from '../data/cenncaData';
import { Phone, AlertTriangle, Calendar, Clock, ShieldAlert } from 'lucide-react';

interface EmergencyBannerProps {
  onBookAppointment: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onBookAppointment }) => {
  return (
    <section className="relative py-20 overflow-hidden text-white bg-slate-950">
      {/* Background with real client surgery photo and dark navy overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: `url('/images/Content/IMG_7776.jpeg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00176b]/95 via-[#00239F]/90 to-slate-950/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Direct Phone numbers & Emergency Notice */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              <span>Código EVC e Intervención de Urgencia 24 Horas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Contáctanos
            </h2>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                    Llámanos para Citas Programadas
                  </div>
                  <a
                    href={`tel:${clinicInfo.phones.appointmentsRaw}`}
                    className="text-2xl sm:text-3xl font-extrabold text-white hover:text-[#38BDF8] transition-colors"
                  >
                    {clinicInfo.phones.appointments}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-xl bg-red-600/30 flex items-center justify-center text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-red-300 font-semibold">
                    Línea Exclusiva Urgencias Neurológicas
                  </div>
                  <a
                    href={`tel:${clinicInfo.phones.emergenciesRaw}`}
                    className="text-2xl sm:text-3xl font-extrabold text-red-400 hover:text-red-300 transition-colors"
                  >
                    {clinicInfo.phones.emergencies247}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-blue-100/90 leading-relaxed pt-2 max-w-xl">
              Ante síntomas súbitos de dolor de cabeza explosivo, debilidad en la mitad del cuerpo, 
              dificultad para hablar o traumatismos severos, cada minuto cuenta. Comunícate inmediatamente.
            </p>
          </div>

          {/* Right Column: CTA Box */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 text-center w-full max-w-md shadow-2xl space-y-4">
              <Clock className="w-8 h-8 text-[#38BDF8] mx-auto" />
              <h3 className="text-xl font-bold text-white">
                ¿Deseas programar una valoración especializada?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Agenda tu cita con nuestros especialistas en el Centro Médico Toluca, Torre Especializada, Consultorio 208.
              </p>
              <div className="space-y-2.5 w-full pt-1">
                <button
                  onClick={onBookAppointment}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0062FF] to-[#38BDF8] hover:from-[#00239F] hover:to-[#0062FF] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-sky-100" />
                  <span>Reserve una cita</span>
                </button>
                <a
                  href={clinicInfo.doctoraliaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#00A79D] hover:bg-[#008f86] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" />
                  <span>Agendar en Doctoralia</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
