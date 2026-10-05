import React from 'react';
import { clinicInfo } from '../data/cenncaData';
import { ArrowRight, ShieldCheck, Activity, Brain, Building2, PhoneCall, Calendar } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#000e3b] via-[#001D85] to-[#040D2E] text-white py-12 sm:py-20 lg:py-24">
      {/* Real client photo background: Skull surgery / Neurosurgery microscope */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-right transition-all duration-700 opacity-45 sm:opacity-55"
        style={{
          backgroundImage: `url('/wp-content/uploads/2024/07/Captura-de-Pantalla-2021-10-27-a-la-28s-29-21.45.40-640w.webp'), url('/images/Content/Captura de Pantalla 2021-10-27 a la(s) 21.45.40.png')`
        }}
      />

      {/* Gradient mask to keep text crisp on the left while showcasing the real surgery photo on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000d3b] via-[#00176b]/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000e3b] via-transparent to-black/30 pointer-events-none" />

      {/* Decorative ambient subtle lights with CENNCA blue & cyan gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0062FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Institutional tagline pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-[#38BDF8]/40 backdrop-blur-md shadow-sm mb-6">
          <Brain className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-100">
            {clinicInfo.tagline}
          </span>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Welcome Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Bienvenidos a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-[#38BDF8]">
                CENNCA
              </span>
            </h1>

            {/* Separator line with CENNCA blue gradient */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0062FF] to-[#38BDF8] rounded-full shadow-[0_0_14px_rgba(56,189,248,0.5)]" />

            {/* Copy principal exacto requerido por el cliente */}
            <p className="text-base sm:text-lg text-blue-50 font-normal leading-relaxed max-w-2xl bg-black/30 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10 shadow-lg">
              Bienvenidos a CENNCA somos un grupo de médicos certificados y subespecializados en las diversas patologías neurológicas, nos especializamos en la prevención, estudio y tratamiento de todos los padecimientos neurológicos así como los mas avanzados tratamientos neuroquirúrgicos de la región.
            </p>

            {/* Copy secundario exacto requerido por el cliente */}
            <p className="text-sm sm:text-base text-blue-200/95 font-light leading-relaxed max-w-2xl border-l-2 border-[#0062FF] pl-4 italic bg-blue-950/30 py-2">
              El centro surge de la necesidad de ofrecer una atención integral, multidisciplinaria y personalizada centrada en la calidad de la atención proporcionando un excelente manejo clínico y aplicando las técnicas y enfoques diagnósticos y terapéuticos adecuados.
            </p>

            {/* CTA action buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5 items-center">
              <button
                onClick={() => onNavigate('contacto')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00239F] via-[#0062FF] to-[#0284C7] hover:from-[#001D85] hover:to-[#0062FF] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-blue-500/30 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                <span>Agendar Consulta</span>
              </button>

              <a
                href={clinicInfo.doctoraliaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00A79D] hover:bg-[#008f86] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-teal-500/30 cursor-pointer"
                title="Agendar cita en Doctoralia"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" />
                <span>Doctoralia</span>
              </a>

              <button
                onClick={() => onNavigate('servicios')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#38BDF8] text-white hover:bg-gradient-to-r hover:from-[#0062FF] hover:to-[#38BDF8] font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Ver Especialidades</span>
                <ArrowRight className="w-4 h-4 text-sky-300" />
              </button>

              <button
                onClick={() => onNavigate('nosotros')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wider transition-all border border-white/20 cursor-pointer"
              >
                <span>Nosotros</span>
              </button>
            </div>
          </div>

          {/* Quick Clinical Badges & Emergency Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#38BDF8]" />
                Atención Médica de Alta Especialidad
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-950/70 p-4 rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-[#0062FF]">7</div>
                  <div className="text-sm font-semibold text-white">Especialidades</div>
                  <div className="text-xs text-blue-200">Abordaje multidisciplinario integral</div>
                </div>

                <div className="bg-blue-950/70 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-[#0062FF]">24 / 7</div>
                  <div className="text-sm font-semibold text-white">Urgencias Médicas</div>
                  <div className="text-xs text-blue-200">Código EVC e infartos cerebrales</div>
                </div>

                <div className="bg-blue-950/70 p-4 rounded-xl border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-[#38BDF8] mb-1" />
                  <div className="text-sm font-semibold text-white">Certificados</div>
                  <div className="text-xs text-blue-200">Consejos médicos de alta especialidad</div>
                </div>

                {/* Sede Oficial: Centro Médico Toluca */}
                <div className="bg-blue-950/70 p-4 rounded-xl border border-white/10">
                  <Building2 className="w-6 h-6 text-[#38BDF8] mb-1" />
                  <div className="text-sm font-semibold text-white">Centro Médico Toluca</div>
                  <div className="text-xs text-blue-200">Torre Especialidades · Cons. 208</div>
                </div>
              </div>

              {/* Emergency Call Box */}
              <div className="bg-gradient-to-r from-red-600/50 to-red-900/50 p-4 rounded-xl border border-red-500/50 flex items-center justify-between gap-4 shadow-lg">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-200 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                    <span>¿Emergencia Neurológica / EVC?</span>
                  </div>
                  <div className="text-lg font-black text-white">{clinicInfo.phones.emergencies247}</div>
                </div>
                <a
                  href={`tel:${clinicInfo.phones.emergenciesRaw}`}
                  className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shadow-md cursor-pointer"
                >
                  Llamar Ya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
