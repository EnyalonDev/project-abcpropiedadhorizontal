
import React, { useState } from 'react';
import { ABOUT } from '../constants.ts';
import TeamModal from './TeamModal.tsx';

/**
 * SECCIÓN SOBRE NOSOTROS
 * -----------------------
 * Presenta la filosofía de la empresa, una lista de valores diferenciales
 * y permite abrir el modal con la información del equipo humano.
 */
const About: React.FC = () => {
  // Estado para controlar la apertura del modal del equipo
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <>
      <section id="nosotros" className="py-32 px-4 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          
          {/* Lado Izquierdo: Imagen con decoraciones apiladas */}
          <div className="relative order-2 md:order-1">
            {/* Marco decorativo de fondo */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-secondary/30 rounded-3xl -z-0"></div>
            
            {/* Imagen Principal */}
            <img 
              src={ABOUT.imageUrl} 
              alt="Instalaciones o equipo de ABC" 
              className="rounded-3xl shadow-2xl w-full h-[650px] object-cover relative z-10"
            />
            
            {/* Tarjeta flotante con énfasis de marca */}
            <div className="absolute -bottom-10 -right-6 bg-brand-primary text-white p-10 rounded-3xl max-w-[260px] z-20 shadow-2xl border-b-8 border-brand-secondary">
              <p className="text-4xl font-black mb-2 italic">{ABOUT.floatingCard.title}</p>
              <p className="text-sm font-medium opacity-90 leading-relaxed">{ABOUT.floatingCard.description}</p>
            </div>
          </div>

          {/* Lado Derecho: Textos descriptivos y Lista de características */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center space-x-3 text-brand-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-12 h-[2px] bg-brand-primary"></span>
              <span>{ABOUT.badge}</span>
            </div>
            
            <h3 className="text-5xl font-extrabold text-slate-900 leading-tight">{ABOUT.title}</h3>
            
            <p className="text-slate-600 text-xl leading-relaxed">
              {ABOUT.description}
            </p>
            
            {/* Lista de beneficios con iconos de check */}
            <ul className="space-y-6">
              {ABOUT.features.map((item, i) => (
                <li key={i} className="flex items-start space-x-4 text-slate-700 font-medium">
                  <div className="mt-1 p-1 bg-blue-50 rounded-full">
                    <svg className="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>

            {/* Acción para conocer al equipo directivo (Condicional) */}
            {ABOUT.showTeamButton && (
              <button 
                onClick={() => setIsTeamModalOpen(true)}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-primary transition-all shadow-xl shadow-slate-900/10 active:scale-95"
              >
                {ABOUT.button}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Modal que muestra el equipo directivo */}
      <TeamModal 
        isOpen={isTeamModalOpen} 
        onClose={() => setIsTeamModalOpen(false)} 
      />
    </>
  );
};

export default About;
