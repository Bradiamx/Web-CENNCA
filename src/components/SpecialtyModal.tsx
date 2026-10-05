import React, { useState } from 'react';
import { Specialty, clinicInfo } from '../data/cenncaData';
import { X, CheckCircle, Stethoscope, Phone, Calendar, Brain, Activity, HeartPulse, Sparkles, Cpu, ShieldAlert } from 'lucide-react';

interface SpecialtyModalProps {
  specialty: Specialty | null;
  onClose: () => void;
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

export const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  onClose,
  onBookAppointment
}) => {
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setImgError(false);
  }, [specialty?.id]);

  if (!specialty) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with background image and gradient overlay */}
        <div className="relative h-48 sm:h-56 bg-cover bg-center" style={{ backgroundImage: `url('${specialty.imageBg}')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#00239F]/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white p-2.5 shadow-lg flex items-center justify-center shrink-0">
                {!imgError ? (
                  <img
                    src={specialty.iconSrc}
                    alt={specialty.title}
                    className="max-h-12 max-w-12 object-contain"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  getSpecialtyFallbackIcon(specialty.id)
                )}
              </div>
              <div className="text-white">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
                  Área de Especialidad
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {specialty.title}
                </h3>
                <p className="text-sm text-blue-100 font-medium">
                  {specialty.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Clinical description */}
          <div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {specialty.fullDesc}
            </p>
          </div>

          {/* Static Photo Gallery - Clean without superimposed texts or header titles */}
          {specialty.gallery && specialty.gallery.length > 0 && (
            <div className="pt-1">
              <div className={`grid gap-2.5 ${specialty.gallery.length > 2 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'}`}>
                {specialty.gallery.map((img, idx) => (
                  <div key={idx} className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-200 shadow-2xs">
                    <img src={img.src} alt={specialty.title} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conditions - Only shown if defined */}
          {specialty.conditions && specialty.conditions.length > 0 && (
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h5 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#0062FF]" />
                Padecimientos Atendidos
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specialty.conditions.map((cond, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinicInfo.phones.appointmentsRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs tracking-wide transition-colors"
            >
              <Phone className="w-4 h-4 text-[#00239F]" />
              <span>{clinicInfo.phones.appointments}</span>
            </a>
            <a
              href={`https://wa.me/${clinicInfo.phones.whatsappRaw}?text=${encodeURIComponent(`Hola CENNCA, me gustaría solicitar informes para consulta de ${specialty.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wide transition-all shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href={clinicInfo.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#00A79D] hover:bg-[#008f86] text-white font-semibold text-xs tracking-wide transition-all shadow-xs"
              title="Agendar consulta en Doctoralia"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
              <span>Doctoralia</span>
            </a>
          </div>

          <button
            onClick={() => {
              onBookAppointment(specialty.title);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00239F] to-[#0062FF] hover:from-[#00176b] hover:to-[#00239F] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-200" />
            <span>Agendar Cita en {specialty.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
