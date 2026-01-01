
import React from 'react';
import { FOOTER } from '../constants.ts';

/**
 * PIE DE PÁGINA (Footer)
 * ----------------------
 * Presenta información de la marca, redes sociales y enlaces rápidos.
 * Ahora simplificado a dos columnas principales como se solicitó.
 */
const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 py-24 px-4 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        {/* Columna 1: Información de Marca y Redes */}
        <div className="space-y-8">
          <p className="text-sm leading-relaxed font-medium">
            {FOOTER.description}
          </p>
          <div className="flex space-x-5">
            {/* Facebook */}
            <a 
              href={FOOTER.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all cursor-pointer group"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-slate-700 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a 
              href={FOOTER.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all cursor-pointer group"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-none stroke-slate-700 group-hover:stroke-white transition-colors" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Columnas Dinámicas (Empresa y Atención/Contacto) */}
        {FOOTER.columns.map((column, idx) => (
          <div key={idx} className="md:col-span-1">
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">{column.title}</h5>
            <ul className="space-y-4 text-sm font-medium">
              {column.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <a 
                    href={link.href} 
                    className="hover:text-brand-secondary transition-colors duration-200 block max-w-xs leading-snug"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright y Créditos */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
        <p>{FOOTER.copyright}</p>
        <p className="mt-4 md:mt-0 flex items-center flex-wrap justify-center">
          <span>Diseño Premium ● Hecho en Colombia by Néstor Ovallos</span>
          <a 
            href="https://www.nestorovallos.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-1 hover:text-brand-secondary transition-colors underline underline-offset-4"
          >
            www.nestorovallos.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
