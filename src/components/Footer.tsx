import React from 'react';
import { clinicInfo, specialties } from '../data/cenncaData';
import { MapPin, Phone, AlertCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040c24] text-white pt-16 pb-12 border-t border-blue-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Logo (Significantly Enlarged) & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('inicio')}
              className="text-left focus:outline-none group block"
              aria-label="CENNCA"
            >
              <img
                src="/wp-content/uploads/2024/07/LOGO2-1920w-2-e1721949220334.png"
                alt="CENNCA - Centro de Neurología y Neurocirugía Avanzada"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain brightness-110 drop-shadow-md group-hover:scale-102 transition-transform"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = '/wp-content/uploads/2024/07/LOGO2-1920w-1.png';
                  }
                }}
              />
            </button>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Somos un grupo de médicos certificados y subespecializados en las diversas patologías neurológicas y neuroquirúrgicas, dedicados a la salud y plenitud de vida de nuestros pacientes en Toluca y Metepec.
            </p>

            {/* Official Social Media Brand Logos (Authentic Instagram, WhatsApp & Facebook) */}
            <div className="pt-2 flex items-center gap-3">
              {/* Official Facebook Icon */}
              <a
                href={clinicInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#0d65d9] flex items-center justify-center transition-all text-white shadow-md hover:scale-105"
                aria-label="Facebook CENNCA"
                title="Facebook Oficial CENNCA"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>

              {/* Official Instagram Original Gradient Logo */}
              <a
                href={clinicInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 flex items-center justify-center transition-all text-white shadow-md hover:scale-105"
                aria-label="Instagram CENNCA"
                title="Instagram Oficial CENNCA"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Official WhatsApp Original Logo */}
              <a
                href={`https://wa.me/${clinicInfo.phones.whatsappRaw}?text=${encodeURIComponent('Hola CENNCA, me gustaría solicitar informes para consulta.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center transition-all text-white shadow-md hover:scale-105"
                aria-label="WhatsApp CENNCA"
                title="WhatsApp Oficial CENNCA"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Servicios (Con sub-páginas/anclas directas) (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#38BDF8]">
              SERVICIOS (ESPECIALIDADES)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {specialties.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('servicios', s.id)}
                    className="hover:text-[#38BDF8] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-[#0062FF]">›</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Mapa de Sitio / Enlaces Principales (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#38BDF8]">
              MAPA DEL SITIO
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#0062FF]">›</span>
                  <span>Inicio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#0062FF]">›</span>
                  <span>Nosotros (El Equipo)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#0062FF]">›</span>
                  <span>Servicios</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#0062FF]">›</span>
                  <span>Contacto</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto & Ubicación Oficial (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#38BDF8]">
              CONTACTO
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <p>
                  <strong>{clinicInfo.address.hospital}</strong><br />
                  {clinicInfo.address.tower}, {clinicInfo.address.suite}<br />
                  {clinicInfo.address.fullFormatted}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <p>
                  Teléfono Citas: <a href={`tel:${clinicInfo.phones.appointmentsRaw}`} className="text-white font-semibold hover:underline">{clinicInfo.phones.appointments}</a>
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1 text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <p>
                  Emergencias 24h: <a href={`tel:${clinicInfo.phones.emergenciesRaw}`} className="text-red-400 font-bold hover:underline">{clinicInfo.phones.emergencies247}</a>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={clinicInfo.doctoraliaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00A79D] hover:bg-[#008f86] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                  <span>Agenda en Doctoralia</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} CENNCA - Centro de Neurología y Neurocirugía Avanzada. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
