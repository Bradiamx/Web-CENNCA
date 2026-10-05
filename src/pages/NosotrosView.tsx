import React from 'react';
import { clinicInfo, medicalTeam, valoresBases, endorsingInstitutions } from '../data/cenncaData';
import { 
  Brain, 
  Award, 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  UserRound, 
  GraduationCap, 
  Stethoscope, 
  Building2, 
  Calendar,
  Sparkles,
  BadgeCheck,
  FileText,
  Globe
} from 'lucide-react';

interface NosotrosViewProps {
  onNavigate: (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => void;
}

export const NosotrosView: React.FC<NosotrosViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#00176b] via-[#00239F] to-[#081a4b] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Brain className="w-4 h-4" />
            <span>Nuestra Identidad Médica</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            NOSOTROS
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Centro de Neurología y Neurocirugía Avanzada (CENNCA)
          </p>
        </div>
      </section>

      {/* Bloque Superior: Distribución Visual a 2 Columnas */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Identidad y Declaración Institucional */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 text-[#00239F] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0062FF]" />
                <span>Compromiso con la Excelencia</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Médicos Certificados y Subespecializados en Patologías Neurológicas
              </h2>
              <div className="w-20 h-1.5 bg-[#0062FF] rounded-full" />
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Somos un grupo de médicos certificados y subespecializados en las diversas patologías neurológicas. 
                Nos dedicamos con la mayor rigurosidad científica y calidez humana a proteger la salud y la plenitud de la vida de nuestros pacientes.
              </p>
              
              {/* Puntos clave */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0062FF] shrink-0" />
                  <span>Diagnósticos precisos y oportunos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0062FF] shrink-0" />
                  <span>Técnicas de mínima invasión</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0062FF] shrink-0" />
                  <span>Atención quirúrgica de alta precisión</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0062FF] shrink-0" />
                  <span>Atención de urgencias neurológicas 24/7</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta de Enfoque Multidisciplinario */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#00176b] to-[#00239F] text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-blue-400/20 space-y-5 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#38BDF8]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#38BDF8]">
                  <Stethoscope className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase">
                    Modelo de Atención Colegiada
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Abordaje Multidisciplinario
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed font-light">
                    Cada caso complejo es evaluado de forma conjunta por neurocirujanos, neurólogos clínicos, neurofisiólogos y especialistas en cuidados críticos para determinar el tratamiento más seguro y efectivo.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                  <span>Sede: Centro Médico Toluca</span>
                  <span className="font-semibold text-[#38BDF8]">Metepec, Edo. Méx.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Directorio del Equipo Médico (Orden Estricto y Homogeneidad Absoluta) */}
      <section id="equipo-medico" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header de la sección de médicos */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#00239F] text-xs font-bold uppercase tracking-wider">
              <UserRound className="w-4 h-4 text-[#0062FF]" />
              <span>Directorio Profesional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Directorio del Equipo Médico
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Especialistas y subespecialistas altamente calificados para el tratamiento de enfermedades del cerebro, columna vertebral y sistema nervioso.
            </p>
          </div>

          {/* Directorio de Doctores: Distribución Visual a 2 Columnas (Foto destacada uniforme a la izquierda, Información y Currículum a la derecha) */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {medicalTeam.map((doctor, index) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 hover:shadow-md hover:border-blue-300 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start group"
              >
                {/* Columna Izquierda: Mayor protagonismo para las fotografías individuales con tamaño uniforme para todos */}
                <div className="md:col-span-4 lg:col-span-4 flex flex-col items-center">
                  <div className={`relative w-full aspect-[3/4] max-w-[260px] sm:max-w-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50/70 to-slate-200/90 border-2 border-slate-200/90 shadow-sm flex flex-col items-center justify-center ${doctor.photo ? 'p-0' : 'p-4'} group-hover:border-blue-400/50 transition-colors`}>
                    {doctor.photo ? (
                      <img 
                        src={doctor.photo} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center space-y-3">
                        {/* Avatar clínico institucional con monograma */}
                        <div className="relative">
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#00176b] to-[#0062FF] text-white flex items-center justify-center shadow-lg border-4 border-white">
                            <span className="text-2xl sm:text-3xl font-extrabold tracking-wider">
                              {doctor.initials}
                            </span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#0062FF] text-white flex items-center justify-center shadow-md border-2 border-white">
                            <Stethoscope className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Etiqueta institucional */}
                        <div className="space-y-1">
                          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#00239F] text-xs font-bold tracking-wide">
                            Especialista CENNCA
                          </span>
                          <p className="text-[11px] text-slate-400 font-medium">
                            Fotografía oficial uniforme
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sello de médico certificado bajo la foto */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Especialista Certificado</span>
                  </div>

                  {/* Botón rápido para agendar con el médico */}
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="mt-3 w-full max-w-[260px] sm:max-w-[280px] py-2 px-3 rounded-xl bg-blue-50 hover:bg-[#00239F] text-[#00239F] hover:text-white border border-blue-200 hover:border-transparent text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar Consulta</span>
                  </button>

                  {doctor.doctoraliaUrl && (
                    <a
                      href={doctor.doctoraliaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 w-full max-w-[260px] sm:max-w-[280px] py-2 px-3 rounded-xl bg-[#00A79D] hover:bg-[#008f86] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" />
                      <span>Agendar en Doctoralia</span>
                    </a>
                  )}
                </div>

                {/* Columna Derecha: Información, Nombre y Curriculum Completo */}
                <div className="md:col-span-8 lg:col-span-8 space-y-4 text-left">
                  {/* Cabecera del Doctor */}
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-100/90 text-[#00239F] text-xs font-bold uppercase tracking-wider">
                        Especialista CENNCA
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-[#0062FF] mt-1">
                      {doctor.specialty}
                    </p>
                  </div>

                  {/* Curriculum Detallado */}
                  <div className="space-y-3 text-sm">
                    
                    {/* Titulado (si aplica) */}
                    {doctor.titulado && (
                      <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                          <GraduationCap className="w-4 h-4 text-[#0062FF]" />
                          <span>Titulado:</span>
                        </div>
                        <p className="text-slate-800 font-medium pl-6 leading-relaxed">
                          {doctor.titulado.titulo} por {doctor.titulado.institucion}
                          {doctor.titulado.cedula && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-100/80 text-[#00239F] text-xs font-bold">
                              Cédula {doctor.titulado.cedula}
                            </span>
                          )}
                        </p>
                      </div>
                    )}

                    {/* Especialidades */}
                    {doctor.especialidades.map((esp, i) => (
                      <div key={i} className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#00239F] uppercase tracking-wider">
                          <Award className="w-4 h-4 text-[#0062FF]" />
                          <span>{doctor.especialidades.length > 1 ? `Especialidad (${esp.area}):` : 'Especialidad:'}</span>
                        </div>
                        <p className="text-slate-800 font-medium pl-6 leading-relaxed">
                          <strong className="text-slate-900">{esp.area}</strong> {esp.sede.includes('egresad') || esp.sede.includes('en ') ? esp.sede : `egresado del ${esp.sede}`}, avalado por la {esp.aval}
                          {esp.cedula && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-100/80 text-[#00239F] text-xs font-bold">
                              Cédula profesional {esp.cedula}
                            </span>
                          )}
                          {esp.certificacion && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-100/90 text-emerald-800 text-xs font-bold">
                              Certificación: {esp.certificacion}
                            </span>
                          )}
                        </p>
                      </div>
                    ))}

                    {/* Subespecialidades */}
                    {doctor.subespecialidades.map((sub, i) => (
                      <div key={i} className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider">
                          <Brain className="w-4 h-4 text-indigo-600" />
                          <span>Subespecialidad:</span>
                        </div>
                        <p className="text-slate-800 font-medium pl-6 leading-relaxed">
                          <strong className="text-slate-900">{sub.area}</strong> {sub.sede.includes('egresad') || sub.sede.includes('por el ') ? sub.sede : `egresado del ${sub.sede}`}, avalado por la {sub.aval}
                          {sub.cedula && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-100/80 text-[#00239F] text-xs font-bold">
                              Cédula profesional {sub.cedula}
                            </span>
                          )}
                          {sub.certificacion && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-100/90 text-emerald-800 text-xs font-bold">
                              Certificación: {sub.certificacion}
                            </span>
                          )}
                        </p>
                      </div>
                    ))}

                    {/* Certificaciones Oficiales */}
                    {doctor.certificaciones && doctor.certificaciones.length > 0 && (
                      <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200/80 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                          <BadgeCheck className="w-4 h-4 text-emerald-600" />
                          <span>Certificaciones Oficiales:</span>
                        </div>
                        <div className="pl-6 space-y-1.5">
                          {doctor.certificaciones.map((cert, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-slate-800 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Membresías y Reconocimientos Internacionales */}
                    {doctor.membresias && doctor.membresias.length > 0 && (
                      <div className="bg-sky-50/60 rounded-2xl p-4 border border-sky-200/80 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-sky-900 uppercase tracking-wider">
                          <Globe className="w-4 h-4 text-sky-600" />
                          <span>Sociedades Médicas Internacionales:</span>
                        </div>
                        <div className="pl-6 space-y-1.5">
                          {doctor.membresias.map((mem, mIdx) => (
                            <div key={mIdx} className="flex items-start gap-2 text-slate-800 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                              <span>{mem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Sección Valores / Bases (2 Columnas con textos exactos del cliente) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Pilares Institucionales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nuestros Valores y Bases
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Principios que sustentan la práctica médica y neuroquirúrgica de CENNCA ante cada paciente.
            </p>
          </div>

          {/* Grid de 2 Columnas para Valores / Bases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            
            {/* 1. Experiencia */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-8 rounded-3xl border border-blue-100 shadow-sm space-y-4 flex flex-col justify-between hover:border-blue-300 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00239F] text-white flex items-center justify-center shadow-md">
                  <Brain className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    Experiencia
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  "Con la experiencia para poder tratar su padecimiento ofreciendo técnicas de mínima invasión en enfermedades del cerebro y columna vertebral."
                </p>
              </div>
              <div className="pt-4 border-t border-blue-100/80 flex items-center gap-2 text-xs font-semibold text-[#00239F]">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Microcirugía y Cateterismo de Alta Precisión</span>
              </div>
            </div>

            {/* 2. Profesional */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-8 rounded-3xl border border-blue-100 shadow-sm space-y-4 flex flex-col justify-between hover:border-blue-300 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0062FF] text-white flex items-center justify-center shadow-md">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    Profesional
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  "Todos los doctores colaboradores son certificados y avalados por las instituciones médicas más importantes y reconocidas del país."
                </p>
              </div>
              <div className="pt-4 border-t border-blue-100/80 flex items-center gap-2 text-xs font-semibold text-[#00239F]">
                <CheckCircle2 className="w-4 h-4 text-[#0062FF]" />
                <span>Especialistas con Posgrado y Certificación Oficial</span>
              </div>
            </div>

            {/* 3. Seguridad (Colocada ocupando ancho de 2 columnas para balance perfecto) */}
            <div className="md:col-span-2 bg-gradient-to-r from-emerald-500/10 via-blue-500/5 to-slate-50 p-8 sm:p-10 rounded-3xl border border-emerald-200/80 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                      Prioridad Absoluta
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Seguridad
                  </h3>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    "Priorizamos la integridad de nuestros pacientes mediante estrictos protocolos de neuroprotección, monitoreo transoperatorio en tiempo real y técnicas de mínima invasión para garantizar procedimientos quirúrgicos y clínicos de máxima precisión y seguridad."
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Sección "Avalados por grandes instituciones" */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#00239F] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#0062FF]" />
              <span>Respaldo Académico y Hospitalario</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Avalados por Grandes Instituciones
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nuestro equipo médico cuenta con certificaciones, formación de posgrado y aval de las máximas casas de estudio y hospitales de especialidad de México y el extranjero.
            </p>
          </div>

          {/* Cuadrícula Responsiva Unificada de Logos Institucionales */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-5 items-stretch">
              {endorsingInstitutions.map((inst, idx) => (
                <div 
                  key={inst.id}
                  className={`bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/60 transition-all duration-300 flex flex-col items-center justify-between text-center group h-full ${
                    idx === endorsingInstitutions.length - 1 ? 'col-span-2 sm:col-span-1 max-w-[280px] sm:max-w-none mx-auto w-full' : ''
                  }`}
                >
                  {/* Contenedor del Logo con Proporciones Óptimas para Mobile y Desktop */}
                  <div className="w-full h-24 sm:h-28 lg:h-32 flex items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-50/70 border border-slate-100 group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors">
                    {inst.logo ? (
                      <img 
                        src={inst.logo} 
                        alt={inst.name} 
                        className="max-h-16 sm:max-h-20 lg:max-h-24 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300 drop-shadow-2xs"
                        loading="lazy"
                      />
                    ) : null}
                  </div>

                  {/* Título y descripción con tipografía calibrada para pantallas táctiles */}
                  <div className="w-full pt-3 space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-[#00239F] transition-colors line-clamp-2">
                      {inst.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight line-clamp-2">
                      {inst.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Atención de Urgencias y Contacto */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Emergency 24h Box */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 sm:p-8 rounded-2xl shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm uppercase tracking-wider">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>Atención de Urgencias Neurológicas y Código EVC</span>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Línea de emergencia directa 24 horas para infartos cerebrales (EVC), aneurismas, traumatismos y crisis neuroquirúrgicas graves:{' '}
              <a href={`tel:${clinicInfo.phones.emergenciesRaw}`} className="text-red-700 font-extrabold text-base sm:text-lg hover:underline inline-block">
                {clinicInfo.phones.emergencies247}
              </a>.
            </p>
          </div>

          {/* Botones de Acción */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contacto')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00239F] to-[#0062FF] hover:from-[#00176b] hover:to-[#00239F] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Agendar Consulta con Especialista</span>
            </button>
            <button
              onClick={() => onNavigate('servicios')}
              className="px-8 py-3.5 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Ver Catálogo de Servicios</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
