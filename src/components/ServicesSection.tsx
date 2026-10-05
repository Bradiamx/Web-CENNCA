import React from 'react';
import { specialties, Specialty } from '../data/cenncaData';
import { ArrowUpRight, Activity } from 'lucide-react';

interface ServicesSectionProps {
  onSelectSpecialty: (specialtyId: string) => void;
  onNavigateToServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectSpecialty,
  onNavigateToServices
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle matching original Elementor */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0062FF] font-bold text-xs uppercase tracking-wider mb-3 border border-blue-200">
            <Activity className="w-3.5 h-3.5" />
            <span>Medicina Neurológica y Neuroquirúrgica Integral</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00239F] tracking-tight">
            Conoce nuestras especialidades
          </h2>
          <div className="w-20 h-1 bg-[#0062FF] mx-auto my-3 rounded-full" />
          <p className="text-lg font-medium text-[#0062FF]">
            Atención Médica Subespecializada y Multidisciplinaria
          </p>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Contamos con 7 áreas de alta especialidad para la prevención, estudio y resolución quirúrgica o médica de todas las afecciones del sistema nervioso.
          </p>
        </div>

        {/* 7 Official Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty) => (
            <ServiceCard
              key={specialty.id}
              specialty={specialty}
              onSelect={() => onSelectSpecialty(specialty.id)}
            />
          ))}
        </div>

        {/* Bottom CTA to view all in deep detail */}
        <div className="text-center">
          <button
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00239F] hover:bg-[#00176b] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Ver Especialidades Médicas</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  specialty: Specialty;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ specialty, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-between p-6 border border-slate-200"
    >
      {/* Background Image with Zoom on Hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url('${specialty.imageBg}')` }}
      />

      {/* Dark overlay with dynamic blue highlight on hover (faithful to Elementor #0062FF63) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/40 group-hover:from-[#00239F]/90 group-hover:via-[#0062FF]/80 group-hover:to-[#00239F]/60 transition-colors duration-500" />

      {/* Top Section: Icon badge */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="w-14 h-14 rounded-xl bg-white/90 backdrop-blur-md p-2 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:bg-white transition-all duration-300">
          <img
            src={specialty.iconSrc}
            alt={specialty.title}
            className="max-h-10 max-w-10 object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Bottom Section: Title, Subtitle, Preview text */}
      <div className="relative z-10 text-white space-y-2">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-200 block">
          Especialidad
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
          {specialty.title}
        </h3>
        <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
          {specialty.subtitle}
        </p>

        <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] group-hover:translate-x-1 transition-transform">
          <span>Conocer especialidad</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
