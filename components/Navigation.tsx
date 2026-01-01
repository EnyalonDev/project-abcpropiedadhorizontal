
import React, { useState } from 'react';
import { BRAND, NAVIGATION } from '../constants.ts';
import ContactModal from './ContactModal.tsx';

/**
 * COMPONENTE DE NAVEGACIÓN (Navbar)
 * --------------------------------
 * Gestiona la barra superior, el menú móvil y el desplazamiento suave
 * entre las distintas secciones de la página.
 */
const Navigation: React.FC = () => {
  // Estado para controlar el menú hamburguesa en móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para controlar el modal de contacto rápido
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Maneja el desplazamiento suave hacia las secciones usando IDs de anclaje.
   * Aplica un desplazamiento compensado por la altura del Navbar.
   */
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 96; // Altura de la barra de navegación (h-24)
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        window.history.pushState(null, '', href);
      }
      setIsMenuOpen(false); // Cierra el menú móvil tras hacer clic
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo y enlace de Inicio */}
            <div className="flex items-center">
              <a 
                href="#inicio" 
                onClick={(e) => handleScroll(e, '#inicio')}
                className="flex items-center group"
              >
                <img 
                  src={BRAND.logoUrl} 
                  alt={BRAND.name} 
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            
            {/* Menú de Escritorio */}
            <div className="hidden md:flex space-x-10 items-center">
              {NAVIGATION.links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-slate-600 font-semibold hover:text-brand-primary transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              {/* Botón de acción principal (CTA) */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-primary text-white px-7 py-3 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-blue-900/10 active:scale-95 text-xs lg:text-sm"
              >
                {NAVIGATION.portalButton}
              </button>
            </div>

            {/* Botón de Menú Móvil */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
            {NAVIGATION.links.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-2 text-slate-700 font-bold hover:text-brand-primary hover:bg-slate-50 rounded-lg transition-all" 
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-50">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-brand-primary text-white px-5 py-4 rounded-xl font-bold shadow-lg"
              >
                {NAVIGATION.portalButton}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Modal que se levanta desde cualquier clic en el botón de portal/contacto */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navigation;
