
import React, { useState } from 'react';
import { BRAND } from '../constants.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Datos estructurados para el Google Apps Script
    const data = {
      nombre: formData.name,
      correo: formData.email,
      telefono: formData.phone,
      fecha: new Date().toLocaleString(),
      origen: 'Modal Solicitar Llamada'
    };

    try {
      /**
       * SOLUCIÓN DEFINITIVA AL 'Failed to fetch' con Google Apps Script:
       * 1. Usamos la URL exacta proporcionada por el usuario.
       * 2. 'mode: no-cors' es vital porque Google Scripts redirige y no devuelve cabeceras CORS estándar.
       * 3. 'Content-Type: text/plain' evita que el navegador envíe una petición OPTIONS (preflight) que Google suele rechazar.
       * 4. Agregamos 'redirect: follow' para manejar la redirección (302) característica de Google Apps Script.
       */
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL_MODAL;

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Fundamental para saltar restricciones de CORS en el cliente
        cache: 'no-cache',
        redirect: 'follow', // Importante para manejar la redirección de Google
        credentials: 'omit',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8' // Tipo simple para evitar preflight OPTIONS
        },
        body: JSON.stringify(data)
      });

      // Nota: En modo 'no-cors' la respuesta es opaca (opaque). 
      // Si la promesa de fetch se resuelve sin lanzar un error, la petición fue enviada con éxito.
      console.log('Datos enviados a Google Apps Script exitosamente.');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error detectado en fetch:', error);

      // El error "Failed to fetch" es una señal de que la petición fue bloqueada antes de salir del navegador.
      // Las causas más comunes son bloqueadores de anuncios o firewalls de red.
      setErrorMessage(
        'Error de conexión: Por favor, desactiva bloqueadores de publicidad (AdBlock/uBlock) o revisa tu conexión a internet.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop con desenfoque de fondo */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Tarjeta del Modal */}
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="bg-brand-primary p-8 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg">
              <img src={BRAND.logoUrl} alt="Logo" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Solicitar Llamada</h3>
              <p className="text-sm text-blue-100 opacity-90">Te llamaremos a la brevedad</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Alerta de Error Diagnóstica */}
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-3 text-red-600 animate-in fade-in duration-300">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[11px] font-bold leading-tight uppercase tracking-tight">
                    {errorMessage}
                  </p>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Nombre Completo</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium disabled:opacity-50"
                  placeholder="Tu nombre y apellido"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Correo Electrónico</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium disabled:opacity-50"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Teléfono / WhatsApp</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium disabled:opacity-50"
                  placeholder="300 123 4567"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-secondary text-brand-primary py-5 rounded-2xl font-black hover:bg-brand-primary hover:text-white transition-all shadow-xl shadow-cyan-500/10 active:scale-[0.98] mt-4 flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESANDO...
                  </>
                ) : (
                  'SOLICITAR LLAMADA'
                )}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2 px-4">
                <h4 className="text-2xl font-bold text-slate-900">¡Solicitud Enviada!</h4>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Gracias por tu interés. Un especialista de ABC Propiedad Horizontal te contactará en breve al número proporcionado.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-brand-primary font-bold hover:underline px-6 py-2 rounded-xl hover:bg-slate-50 transition-all"
              >
                Cerrar ventana
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
