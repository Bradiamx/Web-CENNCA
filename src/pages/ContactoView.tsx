import React from 'react';
import { clinicInfo } from '../data/cenncaData';
import { ContactSection } from '../components/ContactSection';
import { LocationSection } from '../components/LocationSection';
import { Phone, Clock, MapPin, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactoViewProps {
  initialSpecialty?: string;
}

export const ContactoView: React.FC<ContactoViewProps> = ({ initialSpecialty }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#00176b] via-[#00239F] to-[#081a4b] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-900/60 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Estamos para Atenderte</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            CONTACTO Y CITAS
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Centro Médico Toluca, Torre Especializada, Consultorio 208, Metepec
          </p>
          <div className="pt-2">
            <a
              href={clinicInfo.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00A79D] hover:bg-[#008f86] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" />
              <span>Agendar en Doctoralia</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main interactive contact & appointment section */}
      <ContactSection initialSpecialty={initialSpecialty} />

      {/* Location Map Section */}
      <LocationSection />
    </div>
  );
};
