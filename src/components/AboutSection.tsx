import React, { useState, useEffect, useCallback } from 'react';
import { reasonsToChoose, heroSlides } from '../data/cenncaData';
import { Award, Cpu, Clock, Users, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Brain, Activity } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (tab: 'inicio' | 'nosotros' | 'servicios' | 'contacto', specialtyId?: string) => void;
}

const iconMap = {
  Award: Award,
  Cpu: Cpu,
  Clock: Clock,
  Users: Users
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 2-Column Section: "¿Qué hacemos?" Title & Description on Left, Interactive Photo Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Prominent "¿Qué hacemos?" Title & Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 text-[#00239F] font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#0062FF]" />
              <span>Excelencia Médica Subespecializada</span>
            </div>

            {/* Prominent "¿Qué hacemos?" Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00239F] tracking-tight leading-tight">
              ¿Qué hacemos?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0062FF] to-[#38BDF8] rounded-full shadow-sm" />

            {/* Exact Client Statement */}
            <div className="bg-gradient-to-r from-[#00176b] to-[#00239F] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-400/20 space-y-3 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#38BDF8]/15 rounded-full blur-xl pointer-events-none" />
              <p className="text-lg sm:text-xl font-bold leading-relaxed text-white drop-shadow-sm">
                "Nos especializamos en la prevención, diagnóstico y tratamiento de las diversas patologías neurológicas, ofreciendo la tecnología más avanzada en los tratamientos neuroquirúrgicos."
              </p>
              <div className="text-xs font-semibold text-[#38BDF8] tracking-wider uppercase pt-1 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>Atención Integral CENNCA</span>
              </div>
            </div>

            {/* Quick value checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0062FF] shrink-0" />
                <span>Médicos subespecialistas certificados</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0062FF] shrink-0" />
                <span>Microcirugía con neuronavegación 3D</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0062FF] shrink-0" />
                <span>Monitoreo neurofisiológico en tiempo real</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#0062FF] shrink-0" />
                <span>Código EVC y Urgencias 24/7</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('nosotros')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00239F] to-[#0062FF] hover:from-[#00176b] hover:to-[#00239F] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Conocer Más de CENNCA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('servicios')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#00239F] font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors shadow-sm cursor-pointer"
              >
                <span>Ver Especialidades</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean, Unobstructed Photo Showcase without captions or text overlays */}
          <div className="lg:col-span-6">
            <div
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#040D2E] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides */}
              {heroSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt="CENNCA"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Navigation Arrows (Float on sides with smooth hover effect) */}
              <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 sm:px-4 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-black/50 hover:bg-[#00239F] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 cursor-pointer pointer-events-auto shadow-md"
                  aria-label="Foto anterior"
                  title="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-black/50 hover:bg-[#00239F] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 cursor-pointer pointer-events-auto shadow-md"
                  aria-label="Siguiente foto"
                  title="Siguiente foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Minimalist Dot Indicators at Bottom Center */}
              <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center pointer-events-none">
                <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 pointer-events-auto">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        i === currentSlide ? 'w-6 bg-[#38BDF8]' : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir a la foto ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {reasonsToChoose.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Award;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0062FF] flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
