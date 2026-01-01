
import React, { useState } from 'react';
import { SERVICES_SECTION, SERVICES_DATA, SERVICES_SPECIALTIES } from '../constants.ts';
import ServiceModal from './ServiceModal.tsx';

/**
 * SECCIÓN DE SERVICIOS
 * --------------------
 * Tarjetas compactas con carrusel infinito y detalle de especialidades por propiedad.
 */
const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Truco para carrusel infinito suave
  const infiniteServices = [...SERVICES_DATA, ...SERVICES_DATA, ...SERVICES_DATA];
  const { mainIntro, isoCertification, footerSlogan, categories } = SERVICES_SPECIALTIES;

  return (
    <section id="servicios" className="py-20 bg-slate-50 overflow-hidden scroll-mt-24">
      {/* Encabezado Principal */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            {/* BADGE AUMENTADO - Se mantiene según solicitud anterior */}
            <div className="flex items-center space-x-4 text-brand-primary font-black uppercase tracking-[0.2em] text-sm md:text-base mb-3">
              <span className="w-12 h-[3px] bg-brand-primary rounded-full"></span>
              <span>{SERVICES_SECTION.badge}</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              {SERVICES_SECTION.title}
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
            {SERVICES_SECTION.description}
          </p>
        </div>
      </div>
      
      {/* Carrusel de Tarjetas Compactas */}
      <div className="group relative w-full overflow-hidden mb-24">
        <div className="flex w-max animate-marquee space-x-6 group-hover:[animation-play-state:paused] py-6">
          {infiniteServices.map((service, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[360px] bg-white p-5 rounded-3xl border border-slate-100 transition-all cursor-pointer hover:shadow-xl hover:shadow-blue-900/5 group/card flex flex-col justify-between"
              onClick={() => setSelectedServiceId(service.id)}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border-2 transition-transform group-hover/card:scale-105"
                  style={{ 
                    borderColor: `${service.color}40`,
                    backgroundColor: service.bgColor,
                    color: service.color 
                  }}
                >
                  <ServiceIcon name={service.iconName} className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-base font-black text-slate-900 group-hover/card:text-brand-primary transition-colors leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-medium line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-50">
                <span className="text-brand-primary font-bold text-[9px] uppercase tracking-widest opacity-80 group-hover/card:opacity-100 transition-opacity">
                  {SERVICES_SECTION.viewMore}
                </span>
                <div className="p-1 bg-slate-50 rounded-md group-hover/card:bg-brand-primary group-hover/card:text-white transition-all">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Detalle de Especialidades por Propiedad */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner de Especialización e ISO - Tamaño de texto revertido según solicitud */}
        <div className="bg-brand-primary rounded-[2.5rem] p-8 md:p-12 mb-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-brand-secondary">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-5xl">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-6">
              {isoCertification}
            </div>
            {/* Tamaño revertido a text-lg / md:text-2xl y font-medium */}
            <p className="text-lg md:text-2xl font-medium leading-relaxed">
              {mainIntro.split('Administración integral de la propiedad horizontal').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-brand-secondary font-black">Administración integral de la propiedad horizontal</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        {/* Grid de Categorías de Propiedad */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Edificios */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
            <div className="w-14 h-14 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4">{categories.edificios.title}</h4>
            <div className="space-y-4 flex-1">
              <p className="text-slate-500 text-sm leading-relaxed">
                {categories.edificios.description1}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {categories.edificios.description2}
              </p>
              <div className="pt-4 mt-4 border-t border-slate-50">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Nota Legal:</p>
                <p className="text-xs italic text-brand-primary font-medium">
                  {categories.edificios.legalNote}
                </p>
              </div>
            </div>
            <p className="mt-8 text-[11px] font-black text-brand-primary uppercase tracking-widest">
              {footerSlogan}
            </p>
          </div>

          {/* Conjuntos Residenciales */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
            <div className="w-14 h-14 bg-cyan-50 text-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4">{categories.conjuntos.title}</h4>
            <div className="space-y-4 flex-1">
              <p className="text-slate-500 text-sm leading-relaxed">
                {categories.conjuntos.description1}
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-1">Trayectoria:</p>
                <p className="text-slate-700 font-bold text-sm italic">{categories.conjuntos.experienceNote}</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {categories.conjuntos.description2}
              </p>
            </div>
            <p className="mt-8 text-[11px] font-black text-brand-primary uppercase tracking-widest">
              {footerSlogan}
            </p>
          </div>

          {/* Centros Comerciales */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4 whitespace-nowrap">{categories.comercial.title}</h4>
            <div className="space-y-4 flex-1">
              <p className="text-slate-500 text-sm leading-relaxed font-bold mb-2">{categories.comercial.subtitle}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {categories.comercial.description1}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {categories.comercial.description2}
              </p>
            </div>
            <p className="mt-8 text-[11px] font-black text-brand-primary uppercase tracking-widest">
              {footerSlogan}
            </p>
          </div>

        </div>
      </div>

      <ServiceModal 
        serviceId={selectedServiceId} 
        onClose={() => setSelectedServiceId(null)} 
      />
    </section>
  );
};

export const ServiceIcon = ({ name, className = "w-8 h-8" }: { name: string, className?: string }) => {
  switch (name) {
    case 'BuildingLibraryIcon':
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
    case 'ChartBarIcon':
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
    case 'ScaleIcon':
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>;
    case 'WrenchScrewdriverIcon':
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
    case 'UserGroupIcon':
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    case 'ClipboardDocumentCheckIcon':
      return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
    default:
      return null;
  }
};

export default Services;
