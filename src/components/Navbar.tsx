import React, { useState, useEffect } from 'react';
import { clinicInfo, specialties } from '../data/cenncaData';
import { Phone, AlertCircle, Menu, X, Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => {
    onNavigate(tab, specialtyId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top emergency & information bar */}
      <div className="bg-[#00176b] text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Location reference: compact in mobile, full in desktop */}
          <div className="flex items-center gap-1.5 text-slate-200 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span className="hidden md:inline font-medium tracking-wide">
              Centro Médico Toluca, Torre Especializada Cons. 208, Metepec
            </span>
            <span className="inline md:hidden font-medium tracking-tight truncate">
              Centro Médico Toluca
            </span>
          </div>

          {/* Quick contact and emergency action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${clinicInfo.phones.appointmentsRaw}`}
              className="hidden sm:flex items-center gap-1.5 font-semibold text-white hover:text-[#38BDF8] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#38BDF8]" />
              <span>Citas: {clinicInfo.phones.appointments}</span>
            </a>
            <span className="hidden sm:inline text-blue-400">|</span>
            <a
              href={`tel:${clinicInfo.phones.emergenciesRaw}`}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/90 text-white font-bold hover:bg-red-500 transition-colors animate-pulse text-[11px] sm:text-xs"
              title="Atención de urgencias neurológicas 24/7"
            >
              <AlertCircle className="w-3 h-3 text-amber-200 shrink-0" />
              <span className="whitespace-nowrap">Urgencias: {clinicInfo.phones.emergencies247}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3'
            : 'bg-white shadow-sm py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Highlighted prominent CENNCA branding */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center text-left focus:outline-none group py-1"
            aria-label="CENNCA Inicio"
          >
            <img
              src="/wp-content/uploads/2024/07/LOGO2-1920w-1.png"
              alt="CENNCA - Centro de Neurología y Neurocirugía Avanzada"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-102"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.dataset.fallback) {
                  target.dataset.fallback = 'true';
                  target.src = '/wp-content/uploads/2024/07/LOGO2-1920w-2-e1721949220334.png';
                }
              }}
            />
          </button>

          {/* Desktop Nav Items matching Client Sitemap */}
          <div className="hidden md:flex items-center gap-7">
            {/* 1. Inicio */}
            <button
              onClick={() => handleNavClick('inicio')}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors pb-1 border-b-2 cursor-pointer ${
                currentTab === 'inicio'
                  ? 'text-[#00239F] border-[#00239F]'
                  : 'text-slate-700 border-transparent hover:text-[#0062FF]'
              }`}
            >
              Inicio
            </button>

            {/* 2. Nosotros (El Equipo) */}
            <button
              onClick={() => handleNavClick('nosotros')}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors pb-1 border-b-2 cursor-pointer ${
                currentTab === 'nosotros'
                  ? 'text-[#00239F] border-[#00239F]'
                  : 'text-slate-700 border-transparent hover:text-[#0062FF]'
              }`}
            >
              Nosotros (El Equipo)
            </button>

            {/* 3. Servicios (Con sub-menú de anclas directas por especialidad) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('servicios')}
                className={`flex items-center gap-1 text-sm font-semibold tracking-wider uppercase transition-colors pb-1 border-b-2 cursor-pointer ${
                  currentTab === 'servicios'
                    ? 'text-[#00239F] border-[#00239F]'
                    : 'text-slate-700 border-transparent hover:text-[#0062FF]'
                }`}
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#00239F]' : 'text-slate-400'}`} />
              </button>

              {/* Dropdown Menu of Specialties / Direct Sub-pages */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Especialidades CENNCA
                    </span>
                    <button
                      onClick={() => handleNavClick('servicios')}
                      className="text-[11px] text-[#0062FF] font-bold hover:underline"
                    >
                      Ver Catálogo Completo
                    </button>
                  </div>
                  <div className="py-1 max-h-96 overflow-y-auto">
                    {specialties.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick('servicios', s.id)}
                        className="w-full text-left px-4 py-2.5 hover:bg-blue-50/80 transition-colors flex items-center justify-between group/item"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#00239F]">
                            {s.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {s.subtitle}
                          </div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover/item:bg-[#0062FF] transition-colors shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Contacto */}
            <button
              onClick={() => handleNavClick('contacto')}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors pb-1 border-b-2 cursor-pointer ${
                currentTab === 'contacto'
                  ? 'text-[#00239F] border-[#00239F]'
                  : 'text-slate-700 border-transparent hover:text-[#0062FF]'
              }`}
            >
              Contacto
            </button>

            {/* Doctoralia verified booking button */}
            <a
              href={clinicInfo.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#00A79D] hover:bg-[#008f86] text-white font-bold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
              title="Agendar cita en Doctoralia"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" />
              <span>Doctoralia</span>
            </a>

            {/* CTA Reserve button with brand gradient */}
            <button
              onClick={() => handleNavClick('contacto')}
              className="flex items-center gap-2 bg-gradient-to-r from-[#00239F] to-[#0062FF] hover:from-[#00176b] hover:to-[#00239F] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all border border-blue-800 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${clinicInfo.phones.appointmentsRaw}`}
              className="p-2 rounded-lg bg-blue-50 text-[#00239F]"
              aria-label="Llamar"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer reflecting client sitemap */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {/* Inicio */}
              <button
                onClick={() => handleNavClick('inicio')}
                className={`text-left font-bold text-base py-2.5 px-3 rounded-xl transition-colors ${
                  currentTab === 'inicio' ? 'bg-blue-50 text-[#00239F]' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Inicio
              </button>

              {/* Nosotros (El Equipo) */}
              <button
                onClick={() => handleNavClick('nosotros')}
                className={`text-left font-bold text-base py-2.5 px-3 rounded-xl transition-colors ${
                  currentTab === 'nosotros' ? 'bg-blue-50 text-[#00239F]' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Nosotros (El Equipo)
              </button>

              {/* Servicios con sub-menú desplegable de especialidades */}
              <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-between px-3 py-2.5">
                  <button
                    onClick={() => handleNavClick('servicios')}
                    className={`font-bold text-base text-left flex-1 ${
                      currentTab === 'servicios' ? 'text-[#00239F]' : 'text-slate-800'
                    }`}
                  >
                    Servicios
                  </button>
                  <button
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="p-1.5 text-slate-500 hover:text-[#00239F]"
                    aria-label="Ver sub-páginas de especialidades"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {mobileServicesExpanded && (
                  <div className="px-3 pb-3 pt-1 space-y-1 bg-white border-t border-slate-100">
                    {specialties.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick('servicios', s.id)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#00239F] transition-colors"
                      >
                        • {s.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contacto */}
              <button
                onClick={() => handleNavClick('contacto')}
                className={`text-left font-bold text-base py-2.5 px-3 rounded-xl transition-colors ${
                  currentTab === 'contacto' ? 'bg-blue-50 text-[#00239F]' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Contacto
              </button>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={clinicInfo.doctoraliaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#00A79D] hover:bg-[#008f86] text-white font-bold py-3 rounded-xl shadow-md text-sm uppercase tracking-wider transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" />
                  <span>Agendar en Doctoralia</span>
                </a>
                <button
                  onClick={() => handleNavClick('contacto')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00239F] to-[#0062FF] text-white font-bold py-3 rounded-xl shadow-md text-sm uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4 text-sky-200" />
                  Agendar Consulta Médica
                </button>
                <a
                  href={`tel:${clinicInfo.phones.emergenciesRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wider shadow-sm"
                >
                  <AlertCircle className="w-4 h-4 text-white" />
                  Urgencias 24h: {clinicInfo.phones.emergencies247}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
