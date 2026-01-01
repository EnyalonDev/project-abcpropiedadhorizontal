
import React from 'react';
import { SERVICES_DATA } from '../constants.ts';
import { ServiceIcon } from './Services.tsx';

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ serviceId, onClose }) => {
  if (!serviceId) return null;

  const service = SERVICES_DATA.find(s => s.id === serviceId);
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col">
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-brand-primary to-brand-secondary w-full"></div>
        
        <div className="p-8 md:p-12">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center space-x-6 mb-8">
            <div 
              className="p-5 rounded-3xl"
              style={{ backgroundColor: service.bgColor, color: service.color }}
            >
              <ServiceIcon name={service.iconName} className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 leading-tight">{service.title}</h3>
              <div className="h-1 w-12 bg-brand-secondary rounded-full mt-2"></div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              {service.fullDescription}
            </p>

            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center">
                <span className="w-6 h-[1px] bg-brand-primary mr-3"></span>
                Beneficios Clave
              </h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 group hover:border-brand-secondary transition-colors">
                    <div className="mt-1">
                      <svg className="w-4 h-4 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-bold text-[13px]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                onClose();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 bg-brand-primary text-white py-4 rounded-2xl font-bold hover:bg-brand-secondary transition-all shadow-xl shadow-blue-900/10 active:scale-95"
            >
              Solicitar este servicio
            </button>
            <button 
              onClick={onClose}
              className="flex-1 bg-white border border-slate-200 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
