
import React, { useState } from 'react';
import { CTA } from '../constants.ts';

/**
 * SECCIÓN DE CONTACTO
 * -------------------
 * Formulario de contacto general que envía datos a Google Apps Script.
 * Utiliza campos: nombre, correo, telefono, mensaje.
 */
const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Mapeo de campos solicitado para el script de Google
    const data = {
      nombre: formData.name,
      correo: formData.email,
      telefono: formData.phone,
      mensaje: formData.message,
      fecha: new Date().toLocaleString(),
      origen: 'Formulario de Contacto Principal'
    };

    try {
      /**
       * Petición optimizada para Google Apps Script
       * Se usa no-cors para evitar el error 'Failed to fetch' típico de CORS.
       */
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL_CONTACT;

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Evita bloqueos de seguridad del navegador en peticiones a Google Scripts
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8' // Tipo simple para evitar preflight OPTIONS
        },
        body: JSON.stringify(data)
      });

      // En modo no-cors la respuesta es opaca. Si no hay error, asumimos éxito.
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Volver al estado inicial después de 5 segundos para permitir otro envío
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setErrorMessage(
        'No se pudo enviar el mensaje. Verifica tu conexión o intenta desactivar bloqueadores de anuncios.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 grid md:grid-cols-2">

          {/* Información de Contacto (Izquierda) */}
          <div className="bg-brand-primary p-12 lg:p-16 text-white relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-black leading-tight">
                {CTA.title}
              </h2>
              <p className="text-blue-100 text-lg opacity-90 max-w-sm">
                {CTA.description}
              </p>

              <div className="space-y-6 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Visítanos</p>
                    <p className="font-medium text-sm lg:text-base">{CTA.contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Escríbenos</p>
                    <p className="font-medium text-sm lg:text-base">{CTA.contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.72c-4.447 0-8.02-3.573-8.02-8.02V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Llámanos</p>
                    {CTA.contactInfo.phones.map((phone, i) => (
                      <p key={i} className="font-medium text-sm lg:text-base">{phone}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-12 border-t border-white/10 mt-12">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">Horario de Atención</p>
              <p className="text-sm font-medium leading-relaxed italic">{CTA.contactInfo.schedule}</p>
            </div>
          </div>

          {/* Formulario (Derecha) */}
          <div className="p-12 lg:p-16">
            {!isSuccess ? (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-3 italic">Escríbenos</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible para brindarte una solución a medida.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Tu Nombre</label>
                      <input
                        required
                        type="text"
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={CTA.form.namePlaceholder}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary outline-none transition-all font-medium disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Tu Correo</label>
                      <input
                        required
                        type="email"
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={CTA.form.emailPlaceholder}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary outline-none transition-all font-medium disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Tu Teléfono</label>
                    <input
                      required
                      type="tel"
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={CTA.form.phonePlaceholder}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary outline-none transition-all font-medium disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">¿Cómo podemos ayudarte?</label>
                    <textarea
                      required
                      rows={4}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={CTA.form.messagePlaceholder}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary outline-none transition-all font-medium resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <p className="text-red-500 text-xs font-bold animate-in fade-in duration-300">
                      ⚠️ {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black hover:bg-brand-primary transition-all shadow-2xl shadow-slate-900/10 active:scale-[0.98] flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        ENVIANDO...
                      </>
                    ) : (
                      CTA.form.submitButton
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-900">¡Mensaje Recibido!</h3>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    Muchas gracias por contactarnos. Nuestro equipo revisará tu solicitud y te responderemos en las próximas horas.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-primary font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
