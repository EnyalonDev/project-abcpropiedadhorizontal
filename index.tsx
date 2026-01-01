
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * PUNTO DE ENTRADA PRINCIPAL
 * -------------------------
 * Este archivo se encarga de inicializar React y montar la aplicación
 * en el elemento DOM con id 'root'.
 */

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No se pudo encontrar el elemento raíz para montar la aplicación");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
