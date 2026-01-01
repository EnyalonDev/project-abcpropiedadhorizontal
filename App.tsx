
import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Stats from './components/Stats.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import SmartAssistant from './components/SmartAssistant.tsx';
import Footer from './components/Footer.tsx';

/**
 * COMPONENTE PRINCIPAL (App)
 * -------------------------
 * Orquestador de la página única (Single Page Application).
 * Define el orden de las secciones y los componentes globales.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Barra de Navegación superior (Fija) */}
      <Navigation />
      
      {/* Contenido Principal */}
      <main>
        {/* Sección de Bienvenida y Acción Principal */}
        <Hero />
        
        {/* Franja de Estadísticas y Logros */}
        <Stats />
        
        {/* Carrusel de Servicios y Detalles */}
        <Services />
        
        {/* Información Corporativa y Equipo */}
        <About />
        
        {/* Formulario de Contacto y Datos de Localización */}
        <Contact />
      </main>

      {/* Pie de página con enlaces y redes sociales */}
      <Footer />

      {/* Asistente Flotante potenciado por IA (Gemini) */}
      <SmartAssistant />
    </div>
  );
};

export default App;
