import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { ClosingBanner } from './components/ClosingBanner';
import { Footer } from './components/Footer';
import { SpecialtyModal } from './components/SpecialtyModal';
import { NosotrosView } from './pages/NosotrosView';
import { ServiciosView } from './pages/ServiciosView';
import { ContactoView } from './pages/ContactoView';
import { Specialty, clinicInfo } from './data/cenncaData';
import { PhoneCall } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<'inicio' | 'nosotros' | 'servicios' | 'contacto'>('inicio');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [bookingSpecialty, setBookingSpecialty] = useState<string>('');
  const [highlightSpecialtyId, setHighlightSpecialtyId] = useState<string | undefined>(undefined);

  // Sync hash routing if user enters directly with #contacto, #servicios, #nosotros, etc.
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['inicio', 'nosotros', 'servicios', 'contacto'].includes(hash)) {
        setCurrentTab(hash as any);
      } else if (hash.length > 0) {
        // Specialty anchor jump
        setCurrentTab('servicios');
        setHighlightSpecialtyId(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => {
    setCurrentTab(tab);
    if (specialtyId) {
      setHighlightSpecialtyId(specialtyId);
    } else {
      setHighlightSpecialtyId(undefined);
    }
    window.history.pushState(null, '', `#${tab}`);
  };

  const handleBookFromSpecialty = (specialtyTitle: string) => {
    setBookingSpecialty(specialtyTitle);
    setCurrentTab('contacto');
    window.history.pushState(null, '', '#contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#0062FF] selection:text-white">
      {/* Navigation */}
      <Navbar currentTab={currentTab} onNavigate={handleNavigate} />

      {/* Main Views */}
      <main className="flex-1">
        {currentTab === 'inicio' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <AboutSection onNavigate={handleNavigate} />
            <ServicesSection
              onSelectSpecialty={(specialtyId) => handleNavigate('servicios', specialtyId)}
              onNavigateToServices={() => handleNavigate('servicios')}
            />
            <EmergencyBanner onBookAppointment={() => handleNavigate('contacto')} />
            <LocationSection />
            <ContactSection initialSpecialty={bookingSpecialty} />
            <ClosingBanner onNavigate={handleNavigate} />
            <FaqSection />
          </>
        )}

        {currentTab === 'nosotros' && (
          <NosotrosView onNavigate={handleNavigate} />
        )}

        {currentTab === 'servicios' && (
          <ServiciosView
            highlightSpecialtyId={highlightSpecialtyId}
            onBookAppointment={handleBookFromSpecialty}
          />
        )}

        {currentTab === 'contacto' && (
          <ContactoView initialSpecialty={bookingSpecialty} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Specialty Quick Modal */}
      <SpecialtyModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
        onBookAppointment={handleBookFromSpecialty}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Quick Call Button */}
        <a
          href={`tel:${clinicInfo.phones.emergenciesRaw}`}
          className="group flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-red-600/30 transition-all hover:scale-105"
          title="Llamada de urgencias 24h"
          aria-label="Llamar Urgencias"
        >
          <PhoneCall className="w-5 h-5 text-amber-200 animate-bounce" />
          <span className="hidden sm:inline">Urgencias 24/7</span>
        </a>

        {/* WhatsApp Direct Floating Button with Official WhatsApp Icon */}
        <a
          href={`https://wa.me/${clinicInfo.phones.whatsappRaw}?text=${encodeURIComponent('Hola CENNCA, me gustaría solicitar informes para consulta neurológica.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-xl hover:shadow-emerald-600/40 transition-all hover:scale-105"
          aria-label="Contactar por WhatsApp"
        >
          {/* Official WhatsApp SVG Vector Icon */}
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 448 512"
            aria-hidden="true"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <span className="hidden sm:inline">WhatsApp Citas</span>
        </a>
      </div>
    </div>
  );
}
export default App;
