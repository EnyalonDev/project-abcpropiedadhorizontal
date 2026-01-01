
import React from 'react';
import { TEAM_MEMBERS } from '../constants.ts';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        <div className="bg-brand-primary p-8 text-white relative flex justify-between items-center shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div>
            <h3 className="text-3xl font-black">Nuestro Equipo Directivo</h3>
            <p className="text-blue-100 opacity-90 font-medium">Líderes comprometidos con su copropiedad</p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors relative z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-12 overflow-y-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="flex flex-col group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-brand-secondary rounded-[2rem] translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-xl relative z-10"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-black text-slate-900 leading-none">{member.name}</h4>
                  <p className="text-brand-primary font-bold uppercase tracking-widest text-xs">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-900 font-bold text-lg">¿Quieres trabajar con nosotros?</p>
              <p className="text-slate-500 text-sm">Estamos siempre en busca de talento para fortalecer nuestras copropiedades.</p>
            </div>
            <a 
              href="mailto:talento@abcpropiedadhorizontal.com"
              className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-secondary transition-all text-sm whitespace-nowrap shadow-xl shadow-blue-900/10"
            >
              Enviar mi Perfil Profesional
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
