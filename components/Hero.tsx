
import React from 'react';
import { HERO } from '../constants.ts';

/**
 * SECCIÓN HERO (Bienvenida)
 * -------------------------
 * Es la primera impresión del usuario. Contiene el mensaje principal,
 * botones de acción (CTA) y una imagen representativa con elementos animados.
 */
const Hero: React.FC = () => {
  /**
   * Función interna para manejar el scroll suave desde los botones del Hero
   */
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 96;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section id="inicio" className="pt-40 pb-20 px-4 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo: Textos y Acciones */}
        <div className="space-y-8">
          {/* Badge dinámico con animación de pulso */}
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-brand-primary px-4 py-2 rounded-full text-sm font-bold border border-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            <span className="uppercase tracking-wider">{HERO.badge}</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            {HERO.title.main} <span className="text-brand-primary">{HERO.title.highlight}</span>
          </h1>

          {/* Descripción corta */}
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            {HERO.description}
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contacto" 
              onClick={(e) => handleScrollTo(e, 'contacto')}
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all flex items-center justify-center shadow-xl shadow-blue-900/20 active:scale-95"
            >
              {HERO.buttons.primary}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#servicios" 
              onClick={(e) => handleScrollTo(e, 'servicios')}
              className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center active:scale-95"
            >
              {HERO.buttons.secondary}
            </a>
          </div>

          {/* Prueba social / Usuarios miniatura */}
          <div className="flex items-center space-x-6 text-slate-500 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Residente" />
              ))}
            </div>
            <p className="font-medium">{HERO.statsSummary}</p>
          </div>
        </div>

        {/* Lado Derecho: Imagen y Decoraciones visuales */}
        <div className="relative">
          {/* Luces de fondo (Glow effects) */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-secondary rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary rounded-full blur-[120px] opacity-20"></div>
          
          {/* Contenedor de la Imagen principal */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src={HERO.mainImageUrl} 
              alt="Fachada de edificio moderno" 
              className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Tarjeta flotante animada con info de recaudo */}
          <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl max-w-xs animate-bounce-slow border-b-4 border-brand-secondary">
            <div className="flex items-center space-x-4 mb-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-bold text-slate-800">{HERO.floatingBadge.title}</span>
            </div>
            <p className="text-sm text-slate-500 font-medium">{HERO.floatingBadge.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
