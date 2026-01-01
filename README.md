# ABC Propiedad Horizontal - Gestión Inteligente

Este proyecto es un sitio web moderno y profesional desarrollado para **ABC Propiedad Horizontal**, una empresa líder en la administración de propiedad horizontal en Colombia (Edificios, Conjuntos Residenciales y Centros Comerciales).

El sitio web destaca por su diseño premium, enfoque en la experiencia del usuario y la integración de tecnologías avanzadas para ofrecer un servicio de alta calidad.

## 🚀 Características Principales

- **Gestión Integral**: Información detallada sobre servicios administrativos, financieros y operativos.
- **Enfoque Legal y Normativo**: Cumplimiento de la Ley 675 de 2001 y certificaciones ISO 9001:2015.
- **Diseño Responsivo**: Experiencia fluida en dispositivos móviles y de escritorio.
- **Formularios de Contacto**: Integración para la gestión de solicitudes y contactos.

## 🤖 Integración de Inteligencia Artificial

Este proyecto incorpora **Inteligencia Artificial (IA)** powered by Google Gemini para potenciar la experiencia del usuario y optimizar procesos. 

- **Asistente Inteligente**: Capacidad para integrar un asistente virtual que oriente a los usuarios.
- **Automatización**: Uso de modelos generativos para mejorar la interacción y la gestión de la información.

## 🛠️ Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Prerrequisitos
- Node.js (versión 18 o superior recomendada)
- npm (gestor de paquetes)

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente esquema. Necesitarás configurar las URLs de los scripts (para los formularios) y la API Key de Gemini (para la IA).

```env
# Google Apps Script URLs for Contact Forms
SCRIPT_URL_CONTACT=URL
SCRIPT_URL_MODAL=URL

# Google Gemini API Key (IA Integration)
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Ejecución en Desarrollo
Para iniciar el servidor de desarrollo:

```bash
npm run dev
```
o para especificar un puerto:
```bash
npm run dev -- --port 5600
```

El sitio estará disponible en `http://localhost:5173` (o el puerto que hayas configurado).
El sitio estará disponible en `https://abcpropiedadhorizontal.com/`.

## 📁 Estructura del Proyecto

- `/src`: Código fuente de la aplicación (React).
- `/components`: Componentes reutilizables de la UI.
- `/services`: Lógica de integración con APIs y servicios externos.
- `constants.ts`: Textos y configuraciones globales del sitio.

## 📄 Licencia y Créditos
Desarrollado con estándares de calidad para el sector de Propiedad Horizontal en Colombia.
Diseño Premium ● Hecho en Colombia by Néstor Ovallos.
