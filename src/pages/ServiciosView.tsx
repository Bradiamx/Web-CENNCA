import React, { useEffect, useState } from 'react';
import { specialties, clinicInfo } from '../data/cenncaData';
import { Activity, CheckCircle, Calendar, Phone, ChevronRight, Brain, HeartPulse, Stethoscope, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

interface ServiciosViewProps {
  highlightSpecialtyId?: string;
  onBookAppointment: (specialtyTitle: string) => void;
}

const getSpecialtyFallbackIcon = (id: string) => {
  switch (id) {
    case 'neurocirugia':
      return <Brain className="w-8 h-8 text-[#00239F]" />;
    case 'neurologia':
      return <Activity className="w-8 h-8 text-[#00239F]" />;
    case 'terapiaendovascular':
      return <HeartPulse className="w-8 h-8 text-[#00239F]" />;
    case 'neurocirugiapediatrica':
      return <Sparkles className="w-8 h-8 text-[#00239F]" />;
    case 'neuroanestesiologia':
      return <Stethoscope className="w-8 h-8 text-[#00239F]" />;
    case 'neurofisiologia':
      return <Cpu className="w-8 h-8 text-[#00239F]" />;
    case 'terapiaintensiva':
      return <ShieldAlert className="w-8 h-8 text-[#00239F]" />;
    default:
      return <Activity className="w-8 h-8 text-[#00239F]" />;
  }
};

const SpecialtyCardIcon: React.FC<{ iconSrc: string; title: string; id: string }> = ({ iconSrc, title, id }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-16 h-16 rounded-2xl bg-white p-2.5 shadow-lg flex items-center justify-center shrink-0">
      {!imgError ? (
        <img
          src={iconSrc}
          alt={title}
          className="max-h-12 max-w-12 object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        getSpecialtyFallbackIcon(id)
      )}
    </div>
  );
};

export const ServiciosView: React.FC<ServiciosViewProps> = ({
  highlightSpecialtyId,
  onBookAppointment
}) => {
  useEffect(() => {
    if (highlightSpecialtyId) {
      const el = document.getElementById(highlightSpecialtyId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [highlightSpecialtyId]);

  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#00176b] via-[#00239F] to-[#081a4b] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-900/60 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Catálogo Completo y Especialidades</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            SERVICIOS Y ESPECIALIDADES
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Tecnología de Vanguardia en Tratamientos Neuroquirúrgicos y Neurológicos
          </p>
        </div>
      </section>

      {/* Services List with Anchors */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              En <strong className="text-[#00239F] font-bold">CENNCA</strong> contamos con médicos certificados y subespecializados en las 7 áreas clave de la neurología y neurocirugía moderna, asegurando una atención médica colegiada, diagnósticos oportunos y procedimientos de mínima invasión.
            </p>

            {/* Quick jump anchor tags */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {specialties.map((s, idx) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#00239F] hover:border-blue-400 hover:bg-blue-50 transition-all shadow-2xs"
                >
                  <span className="text-[#0062FF] font-bold mr-1">{idx + 1}.</span>
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Cards for each of the 7 official specialties */}
          <div className="space-y-14 max-w-5xl mx-auto">
            {specialties.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 transition-all hover:shadow-md scroll-mt-28"
              >
                {/* Header bar of card without "Especialidad #X" chip */}
                <div className="bg-gradient-to-r from-[#00176b] via-[#00239F] to-[#0a2f8c] text-white p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <SpecialtyCardIcon iconSrc={s.iconSrc} title={s.title} id={s.id} />
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {s.title}
                      </h3>
                      <p className="text-sm text-blue-100 font-medium mt-0.5">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* Text description */}
                  <div>
                    <p className="text-slate-800 leading-relaxed text-base sm:text-[17px] font-normal">
                      {s.fullDesc}
                    </p>
                  </div>

                  {/* Clean Static Photo Grid (No superimposed text, titles, subtitles or header tags) */}
                  {s.gallery && s.gallery.length > 0 && (
                    <div className="pt-2">
                      <div
                        className={`grid gap-3 sm:gap-4 ${
                          s.galleryLayout === 'grid-2x2'
                            ? 'grid-cols-1 sm:grid-cols-2'
                            : 'grid-cols-1 sm:grid-cols-2'
                        }`}
                      >
                        {s.gallery.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-2xs aspect-[16/10]"
                          >
                            <img
                              src={img.src}
                              alt={s.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Conditions Treated (Only shown if defined and verified by client) */}
                  {s.conditions && s.conditions.length > 0 && (
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                            Enfermedades y condiciones que trata:
                          </h4>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                          {s.conditions.length} padecimientos
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                        {s.conditions.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200/60 shadow-2xs hover:border-blue-300 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-700 font-medium leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action row with Call, WhatsApp and Appointment Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <a
                        href={`tel:${clinicInfo.phones.appointmentsRaw}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#00239F]" />
                        <span>Citas: {clinicInfo.phones.appointments}</span>
                      </a>
                      <a
                        href={`https://wa.me/${clinicInfo.phones.whatsappRaw}?text=${encodeURIComponent(`Hola CENNCA, deseo solicitar informes y agendar consulta sobre ${s.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-all shadow-xs"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={clinicInfo.doctoraliaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#00A79D] hover:bg-[#008f86] text-white text-xs font-semibold transition-all shadow-xs"
                        title="Agendar en Doctoralia"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                        <span>Doctoralia</span>
                      </a>
                    </div>

                    <button
                      onClick={() => onBookAppointment(s.title)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00239F] to-[#0062FF] hover:from-[#00176b] hover:to-[#00239F] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-sky-200" />
                      <span>Agendar Cita en {s.title}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
