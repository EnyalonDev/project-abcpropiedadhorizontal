
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';
import { BRAND, SMART_ASSISTANT } from '../constants.ts';

/**
 * ASISTENTE INTELIGENTE (Chatbot Flotante)
 * ----------------------------------------
 * Integra el modelo Gemini de Google para responder dudas de residentes.
 * Gestiona el historial de conversación y estados de carga.
 */
const SmartAssistant: React.FC = () => {
  // Visibilidad de la ventana de chat
  const [isOpen, setIsOpen] = useState(false);
  // Historial de mensajes
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: SMART_ASSISTANT.welcomeMessage }
  ]);
  // Texto de entrada actual
  const [input, setInput] = useState('');
  // Estado de espera para respuesta de la API
  const [isLoading, setIsLoading] = useState(false);
  // Referencia para scroll automático al final de los mensajes
  const scrollRef = useRef<HTMLDivElement>(null);

  // Efecto para bajar el scroll cuando llegan nuevos mensajes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  /**
   * Procesa el envío del mensaje a la API de Gemini
   */
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    // Añade el mensaje del usuario al chat localmente
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Formatea el historial para cumplir con los requerimientos de Gemini
    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Llama al servicio de IA
    const response = await getGeminiResponse(userMsg, history);
    
    // Añade la respuesta del modelo al historial
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        /* Ventana de Chat Expandida */
        <div className="bg-white w-[350px] sm:w-[400px] h-[550px] rounded-[1.5rem] shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Cabecera del Chat */}
          <div className="bg-brand-primary p-5 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-11 h-11 bg-white p-1 rounded-full flex items-center justify-center shadow-inner">
                <img 
                  src={BRAND.logoUrl} 
                  alt={BRAND.name} 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{SMART_ASSISTANT.name}</h4>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] font-medium opacity-90">{SMART_ASSISTANT.status}</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Area de Mensajes */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-brand-primary text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Burbuja de Carga (Thinking state) */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex space-x-1.5">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Area de Entrada (Teclado) */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={SMART_ASSISTANT.inputPlaceholder}
                className="flex-1 bg-slate-100 border border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-brand-primary focus:ring-0 outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-primary text-white p-3 rounded-xl hover:bg-brand-secondary transition-all disabled:opacity-50 shadow-lg shadow-blue-900/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Botón de Burbuja Flotante */
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-brand-secondary transition-all active:scale-95 group relative flex items-center justify-center"
        >
          {/* Badge de notificación visual */}
          <div className="absolute -top-1 -right-1 bg-brand-secondary text-[10px] font-bold px-2 py-0.5 rounded-full ring-4 ring-slate-50">1</div>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SmartAssistant;
