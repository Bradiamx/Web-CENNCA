import React, { useState } from 'react';
import { clinicInfo, specialties } from '../data/cenncaData';
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare, AlertCircle, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  initialSpecialty?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSpecialty = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: initialSpecialty,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Por favor completa todos los campos obligatorios.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hola CENNCA, mi nombre es ${formData.name || 'Paciente'}. Me comunico desde el sitio web para solicitar cita en la especialidad de ${formData.specialty || 'Neurología/Neurocirugía'}. Mi teléfono es ${formData.phone || 'N/A'}. Mensaje: ${formData.message || 'Deseo información'}`;
    const url = `https://wa.me/${clinicInfo.phones.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-[#F0F8FF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Clinic Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062FF]">
                Atención Personalizada
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00239F] tracking-tight mt-1">
                Contáctanos para más información
              </h2>
              <div className="w-16 h-1 bg-[#0062FF] my-4 rounded-full" />
              <p className="text-slate-700 leading-relaxed">
                Nosotros nos especializamos en tu salud y en la plenitud de la vida de nuestros pacientes. 
                Comunícate con nuestro consultorio para resolver cualquier inquietud o coordinar tu cita médica.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Doctoralia Official Booking Card */}
              <div className="bg-gradient-to-br from-[#00A79D]/10 via-white to-teal-50/40 p-5 rounded-2xl border-2 border-[#00A79D]/40 shadow-sm flex items-start gap-4 hover:border-[#00A79D] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00A79D] text-white flex items-center justify-center shrink-0 mt-1 shadow-md font-black text-xl">
                  D
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-black tracking-wider uppercase text-[#00A79D] bg-[#00A79D]/15 px-2 py-0.5 rounded-full">
                      Perfil Médico Verificado
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">· Citas en línea</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-1">Agenda en Doctoralia</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Consulta horarios disponibles en tiempo real, opiniones de pacientes y agenda tu cita médica directamente en línea.
                  </p>
                  <div className="mt-3">
                    <a
                      href={clinicInfo.doctoraliaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00A79D] hover:bg-[#008f86] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      <span>Abrir Agenda en Doctoralia</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Address card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00239F] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ubicación del Consultorio</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    <strong>{clinicInfo.address.hospital}</strong><br />
                    {clinicInfo.address.tower}, {clinicInfo.address.suite}<br />
                    {clinicInfo.address.street}, {clinicInfo.address.neighborhood}, C.P. {clinicInfo.address.zipCode} {clinicInfo.address.city}, {clinicInfo.address.state}.
                  </p>
                </div>
              </div>

              {/* Phones card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#00239F] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">Líneas de Atención Telefónica</h4>
                  <p className="text-xs text-slate-600">
                    Citas y consultorio: <a href={`tel:${clinicInfo.phones.appointmentsRaw}`} className="font-bold text-[#00239F] hover:underline">{clinicInfo.phones.appointments}</a>
                  </p>
                  <p className="text-xs text-red-600 font-semibold">
                    Urgencias 24h: <a href={`tel:${clinicInfo.phones.emergenciesRaw}`} className="font-bold text-red-600 hover:underline">{clinicInfo.phones.emergencies247}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Síguenos:</span>
              {/* Facebook Official Icon Button */}
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

              {/* Instagram Official Icon Button */}
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
            </div>
          </div>

          {/* Right Column: Appointment & Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80">
              {submitted ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#00239F]">
                    ¡Solicitud Enviada con Éxito!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Hemos recibido tus datos correctamente, <strong>{formData.name}</strong>. Uno de nuestros asistentes médicos se comunicará contigo a la brevedad para confirmar fecha y horario.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      <span>Confirmar también por WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', specialty: '', message: '' });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs tracking-wider transition-colors cursor-pointer"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Solicitud de Cita Médica
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Completa tus datos y nos pondremos en contacto contigo para asignarte turno.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nombre Completo: *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Roberto Morales"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F0F8FF]/50 focus:bg-white focus:border-[#0062FF] focus:ring-2 focus:ring-[#0062FF]/20 text-sm text-slate-800 transition-all outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Teléfono a 10 dígitos: *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9()+\-\s]+"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. 722 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F0F8FF]/50 focus:bg-white focus:border-[#0062FF] focus:ring-2 focus:ring-[#0062FF]/20 text-sm text-slate-800 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Correo Electrónico: *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="correo@ejemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F0F8FF]/50 focus:bg-white focus:border-[#0062FF] focus:ring-2 focus:ring-[#0062FF]/20 text-sm text-slate-800 transition-all outline-none"
                      />
                    </div>

                    {/* Specialty dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Especialidad de Interés:
                      </label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F0F8FF]/50 focus:bg-white focus:border-[#0062FF] focus:ring-2 focus:ring-[#0062FF]/20 text-sm text-slate-800 transition-all outline-none cursor-pointer"
                      >
                        <option value="">-- Seleccionar servicio --</option>
                        {specialties.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.subtitle})
                          </option>
                        ))}
                        <option value="Consulta General de Neurología">Otra consulta / No estoy seguro</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mensaje o Descripción de Síntomas:
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describa brevemente su motivo de consulta, estudios previos que posea o disponibilidad de horario preferida..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F0F8FF]/50 focus:bg-white focus:border-[#0062FF] focus:ring-2 focus:ring-[#0062FF]/20 text-sm text-slate-800 transition-all outline-none resize-y"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-4 px-8 rounded-full bg-gradient-to-r from-[#00239F] to-[#0062FF] hover:from-[#00176b] hover:to-[#00239F] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Enviando información...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-sky-200" />
                          <span>Enviar mensaje</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      title="Enviar mensaje directo por WhatsApp"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      <span>WhatsApp Directo</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
