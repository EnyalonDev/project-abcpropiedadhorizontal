
import React from 'react';

/**
 * CONFIGURACIÓN GLOBAL Y CONTENIDO DE TEXTO
 * -----------------------------------------
 */

export const BRAND = {
  name: 'ABC Propiedad Horizontal',
  fullName: 'ABC Propiedad Horizontal S.A.S.',
  tagline: 'Gestión Inteligente',
  logoUrl: 'https://api.nestorovallos.com/media/general/img/2025-12-31/logo-1.png',
};

export const NAVIGATION = {
  links: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ],
  portalButton: 'Solicitar una llamada de contacto',
};

export const TEAM_MEMBERS = [
  {
    name: 'Carolina Martínez',
    role: 'Gerente General',
    bio: 'Administradora de Empresas con más de 12 años de experiencia en el sector inmobiliario y propiedad horizontal. Experta en optimización de recursos y liderazgo de comunidades.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Ricardo Holguín',
    role: 'Director Jurídico',
    bio: 'Abogado especialista en derecho urbanístico y Ley 675. Se encarga de garantizar la seguridad legal de todas nuestras copropiedades y la mediación efectiva de conflictos.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Sonia Restrepo',
    role: 'Coordinadora Contable',
    bio: 'Contadora pública experta en NIIF para el sector residencial. Lidera los procesos de auditoría y transparencia financiera que nos caracterizan como empresa líder.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  }
];

export const SERVICES_DATA = [
  {
    id: 'admin',
    title: 'Administración Delegada',
    shortDescription: 'Gestión operativa y financiera integral para su copropiedad.',
    fullDescription: 'Nuestra administración delegada se enfoca en la excelencia operativa. Actuamos como el motor de su copropiedad.',
    benefits: [
      'Presencia física programada.',
      'Supervisión de seguridad y aseo.',
      'Gestión de PQRS rápida.',
      'Informes mensuales.'
    ],
    iconName: 'BuildingLibraryIcon',
    color: '#1b458b',
    bgColor: '#eef2ff'
  },
  {
    id: 'contabilidad',
    title: 'Contabilidad Especializada',
    shortDescription: 'Manejo contable bajo NIIF y transparencia absoluta.',
    fullDescription: 'La salud financiera es la base de una copropiedad estable.',
    benefits: [
      'Estados financieros mensuales.',
      'Ejecución presupuestaria.',
      'Cobro de cartera.',
      'Auditoría constante.'
    ],
    iconName: 'ChartBarIcon',
    color: '#3fb9e6',
    bgColor: '#f0f9ff'
  },
  {
    id: 'juridico',
    title: 'Asesoría Jurídica',
    shortDescription: 'Respaldo legal experto en Ley 675 y normatividad.',
    fullDescription: 'Blindamos su copropiedad legalmente.',
    benefits: [
      'Cobro jurídico efectivo.',
      'Revisión de contratos.',
      'Asesoría en asambleas.',
      'Mediación de conflictos.'
    ],
    iconName: 'ScaleIcon',
    color: '#6366f1',
    bgColor: '#f5f3ff'
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo',
    shortDescription: 'Protegemos su patrimonio mediante planes técnicos.',
    fullDescription: 'No esperamos a que las cosas fallen.',
    benefits: [
      'Cronograma anual técnico.',
      'Visitas de inspección.',
      'Optimización de energía.',
      'Garantía de cumplimiento.'
    ],
    iconName: 'WrenchScrewdriverIcon',
    color: '#f59e0b',
    bgColor: '#fffbeb'
  },
  {
    id: 'convivencia',
    title: 'Gestión de Convivencia',
    shortDescription: 'Fomentamos la armonía y el respeto en su comunidad.',
    fullDescription: 'Transformamos edificios en hogares.',
    benefits: [
      'Mediación profesional.',
      'Manuales de convivencia.',
      'Integración comunitaria.',
      'Gestión de zonas comunes.'
    ],
    iconName: 'UserGroupIcon',
    color: '#10b981',
    bgColor: '#ecfdf5'
  },
  {
    id: 'documental',
    title: 'Gestión Documental',
    shortDescription: 'Organización de la memoria histórica de su edificio.',
    fullDescription: 'Una administración organizada se nota en sus archivos.',
    benefits: [
      'Archivo digital en la nube.',
      'Custodia de libros de actas.',
      'Cumplimiento Habeas Data.',
      'Trazabilidad total.'
    ],
    iconName: 'ClipboardDocumentCheckIcon',
    color: '#ec4899',
    bgColor: '#fdf2f8'
  }
];

export const SERVICES_SPECIALTIES = {
  mainIntro: "Nos especializamos en la Administración integral de la propiedad horizontal en Edificios, Conjuntos Residenciales y centros comerciales o empresariales. Con conocimiento, Experiencia, Vocación y mejora continúa.",
  isoCertification: "Excelencia Certificada ISO9001:2015",
  footerSlogan: "G ABC PH SAS BIC - Su patrimonio en las mejores manos.",
  categories: {
    edificios: {
      title: "Edificio",
      description1: "Unidad Residencial o Mixta. En muchos casos sin oficina de administración. Brindando el cumplimiento de la norma y ley. Toda construcción de propiedad horizontal, debe contar con Representante Legal.",
      description2: "Llevar su contabilidad y Presentar las obligaciones correspondientes. Brindamos el servicio de Administración, Contabilidad y sistema contable. Cumpliendo con la norma y el mantenimiento de las zonas comunes.",
      legalNote: "Edificios exentos VIS - VIP (Vivienda interés social o prioritario) menores de cinco unidades 5 (ART. 42 ley 2079/21)"
    },
    conjuntos: {
      title: "Conjuntos residenciales",
      description1: "Administración profesional e integral para la búsqueda del bienestar general de los propietarios y residentes.",
      experienceNote: "Experiencia certificada de 9 años, administrando conjuntos de más de 100 apartamentos y hasta de 1.200 unidades residenciales.",
      description2: "Bienestar, tranquilidad, transparencia, Cumpliendo con la norma y el mantenimiento de las zonas comunes."
    },
    comercial: {
      title: "Centros Comerciales o empresariales",
      subtitle: "Comercial y empresarial",
      description1: "Administración profesional e integral en propiedades horizontales comercial, cumpliendo con la norma, la ley y la búsqueda de bienestar económico.",
      description2: "Activando la economía con estrategias de marketing e impulsando el control de PH destinadas a la residencia Habitual o Temporal, para la tranquilidad y seguridad de sus propietarios."
    }
  }
};

export const HERO = {
  badge: 'Gestión profesional de propiedad horizontal en Colombia',
  title: {
    main: 'Su Patrimonio en ',
    highlight: 'las Mejores Manos'
  },
  description: 'Soluciones integrales con el sello de confianza de ABC Propiedad Horizontal. Transformamos espacios en comunidades eficientes y felices.',
  buttons: {
    primary: 'Solicitar Cotización',
    secondary: 'Nuestros Servicios'
  },
  statsSummary: 'Más de 50 copropiedades confían en nosotros',
  floatingBadge: {
    title: 'Recaudo Eficiente',
    description: 'Mantenemos el índice de morosidad por debajo del 5%.'
  },
  mainImageUrl: 'https://grupoabcphsasbic.com/Media/abcpropiedadhorizontal/_Profiles/4ba0092b/4f1079d1/moderno-edificio-con-apartamentos.jpg'
};

export const STATS = [
  { value: '9+', label: 'Años de experiencia' },
  { value: '12k+', label: 'Residentes felices' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte Técnico' }
];

export const SERVICES_SECTION = {
  badge: 'Nuestros Servicios',
  title: 'Soluciones Integrales para su Copropiedad',
  description: 'Un portafolio diseñado para garantizar la valorización, seguridad y armonía de su comunidad.',
  viewMore: 'Ver detalles'
};

export const ABOUT = {
  badge: 'Sobre Nosotros',
  title: 'Pasión por la excelencia en administración',
  description: 'En ABC Propiedad Horizontal, nuestra misión trasciende la simple administración. Construimos comunidades basadas en la confianza, la transparencia y la innovación tecnológica.',
  features: [
    'Transparencia: Gestión clara y verificable de todos los recursos y decisiones.',
    'Atención prioritaria para emergencias y mantenimiento',
    'Expertos en mediación y resolución de conflictos',
    'Procesos certificados bajo estándares internacionales'
  ],
  button: 'Conocer al Equipo',
  showTeamButton: false, // Variable booleana para mostrar u ocultar el botón de equipo
  imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
  floatingCard: {
    title: 'Líderes',
    description: 'Referentes en gestión de propiedad horizontal en el país.'
  }
};

export const CTA = {
  title: '¿Listo para transformar tu edificio?',
  description: 'Únete a las copropiedades que ya disfrutan de una gestión profesional, segura y 100% transparente.',
  form: {
    namePlaceholder: 'Nombre completo',
    emailPlaceholder: 'Correo electrónico',
    phonePlaceholder: 'Teléfono / WhatsApp',
    messagePlaceholder: 'Escribe tu mensaje o consulta aquí...',
    submitButton: 'ENVIAR SOLICITUD'
  },
  contactInfo: {
    address: 'Av. Calle 34 # 24 – 05 Of 206, Bogotá, Colombia',
    phones: ['310 297 1834', '314 306 7529'],
    email: 'gerencia@abcpropiedadhorizontal.com',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 8:00 AM - 12:00 PM'
  }
};

export const FOOTER = {
  description: 'Excelencia administrativa al servicio de su comunidad. Más que administrar, cuidamos su patrimonio y bienestar.',
  social: {
    facebook: 'https://www.facebook.com/p/ABC-Propiedad-Horizontal-100063958361522/',
    instagram: 'https://www.instagram.com/abcpropiedadhorizontal/',
  },
  columns: [
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nosotros', href: '#nosotros' },
        { name: 'Servicios Integrales', href: '#servicios' },
        { name: 'Contáctanos', href: '#contacto' },
      ]
    },
    {
      title: 'Atención y Contacto',
      links: [
        { name: 'Dirección: Av. Calle 34 # 24 – 05 Of 206, Bogotá', href: '#contacto' },
        { name: 'Tel: 310 297 1834', href: 'tel:3102971834' },
        { name: 'Tel: 314 306 7529', href: 'tel:3143067529' },
        { name: 'Email: gerencia@abcpropiedadhorizontal.com', href: 'mailto:gerencia@abcpropiedadhorizontal.com' },
      ]
    }
  ],
  copyright: `© 2024 ${BRAND.fullName} - ${BRAND.tagline}`,
  designBy: 'Diseño Premium ● Hecho en Colombia by Néstor Ovallos www.nestorovallos.com'
};

export const SMART_ASSISTANT = {
  name: 'Asistente ABC',
  status: 'IA Activa',
  welcomeMessage: '¡Hola! Soy el Asistente Inteligente de ABC. ¿En qué puedo ayudarte hoy con respecto a tu copropiedad?',
  inputPlaceholder: 'Escribe tu consulta...',
};
