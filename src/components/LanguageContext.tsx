import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  // Hero - New Title
  hero_title_es: 'El arte nos atraviesa, la música nos revela.',
  hero_title_en: 'Art crosses through us, music reveals us.',
  
  // About Me - New Section
  about_title_es: 'Sobre el proyecto',
  about_title_en: 'About the Project',
  about_description_es: 'Producción, acompañamiento y visión artística para que cada sonido encuentre su camino. Proyecto Casimiro es un espacio de creación y guía para músicos y bandas, donde conviven obras propias y las de quienes nos invitan a ser parte de su proceso artístico-musical.',
  about_description_en: 'Production, accompaniment, and artistic vision so that each sound finds its path. Proyecto Casimiro is a space for creation and guidance for musicians and bands, where their own works coexist with those who invite us to be part of their artistic and musical process.',
  
  // Portfolio - Compressed
  portfolio_label_es: 'Obras',
  portfolio_label_en: 'Works',
  portfolio_title_es: 'Portfolio',
  portfolio_title_en: 'Portfolio',
  portfolio_description_es: 'Una selección de trabajos que reflejan la búsqueda constante de nuevas formas de expresión musical.',
  portfolio_description_en: 'A selection of works that reflect the constant search for new forms of musical expression.',
  portfolio_releases_es: 'Lanzamientos',
  portfolio_releases_en: 'Releases',
  portfolio_streams_es: 'Reproducciones',
  portfolio_streams_en: 'Streams',
  portfolio_albums_es: 'Álbumes',
  portfolio_albums_en: 'Albums',
  portfolio_cta_es: 'Explorar',
  portfolio_cta_en: 'Explore',
  
  // Services - Current Content
  services_title_es: 'Te acompañamos en tu proceso creativo',
  services_title_en: 'We accompany you in your creative process',
  services_subtitle_es: 'Más que servicios, procesos compartidos.',
  services_subtitle_en: 'More than services, shared processes.',
  
  // Service 1 - Music Production & Preproduction
  service1_title_es: 'Producción Musical y Preproducción',
  service1_title_en: 'Music Production & Preproduction',
  service1_item1_es: 'Hoja de ruta creativa: estética y planificación',
  service1_item1_en: 'Creative roadmap: aesthetics and planning',
  service1_item2_es: 'Demos referenciales para definir dirección antes del estudio',
  service1_item2_en: 'Reference demos to define direction before the studio',
  service1_item3_es: 'Grabación (home estudio  o estudio profesional) con tomas dirigidas',
  service1_item3_en: 'Recording (home studio or professional studio) with guided takes',
  service1_item4_es: 'Edición y mezcla (mastering a cargo de  profesionales externos)',
  service1_item4_en: 'Editing and mixing (mastering outsourced)',
  
  // Service 2 - Composition & Arrangements
  service2_title_es: 'Composición y Arreglos',
  service2_title_en: 'Composition & Arrangements',
  service2_item1_es: 'Co-writing: convertir ideas en canciones',
  service2_item1_en: 'Co-writing: turning ideas into songs',
  service2_item2_es: 'Composición completa adaptada a necesidades artísticas',
  service2_item2_en: 'Full composition tailored to artistic needs',
  service2_item3_es: 'Arreglos para vientos, cuerdas, voces y texturas',
  service2_item3_en: 'Arrangements for horns, strings, voices, and textures',
  service2_item4_es: 'Composición de música original para cine y teatro',
  service2_item4_en: 'Composition of original music for film and theatre',
  
  // Service 3 - Sessions & Artistic Support
  service3_title_es: 'Sesiones & Acompañamiento Artístico',
  service3_title_en: 'Sessions & Artistic Support',
  service3_item1_es: 'Sesiones audiovisuales en vivo (Sesiones Casimiro)',
  service3_item1_en: 'Audiovisual live sessions (Sesiones Casimiro)',
  service3_item2_es: 'Ensayos dirigidos y preparación de repertorio',
  service3_item2_en: 'Directed rehearsals and repertoire preparation',
  service3_item3_es: 'Grabación de ensayos y material promocional',
  service3_item3_en: 'Recording of rehearsals and promotional material',
  service3_item4_es: 'Red de músicos profesionales de sesión',
  service3_item4_en: 'Network of professional session musicians',
  service3_item5_es: 'Orientación en propiedad intelectual y registro',
  service3_item5_en: 'Guidance on intellectual property and registration',
  service_button_es: 'Consultar',
  service_button_en: 'Inquire'
  
  // Sessions - Casimiro Sessions Content
  sessions_title_es: 'Sesiones Casimiro',
  sessions_title_en: 'Casimiro Sessions',
  sessions_subtitle_es: 'El arte como puente',
  sessions_subtitle_en: 'Art as a bridge',

  sessions_point1_title_es: 'Proceso Colaborativo',
  sessions_point1_title_en: 'Collaborative Process',
  sessions_point1_desc_es: 'Comenzamos a trabajar con el artista al menos un mes antes (composición, ensayos, definición estética).',
  sessions_point1_desc_en: 'We start working with the artist at least a month in advance (composition, rehearsals, aesthetic definition).',

  sessions_point2_title_es:'Espacios que nos conectan',
  sessions_point2_title_en:'Spaces that connect us',
  sessions_point2_desc_es:'Locaciones únicas que actúan como canales de conexión con la naturaleza, el universo y lo infinito.',
  sessions_point2_desc_en:'Unique locations that act as channels of connection with nature, the universe, and the infinite.',

  sessions_point3_title_es:'Momento Vivo',
  sessions_point3_title_en:'Living Moment',
  sessions_point3_desc_es: 'Un fin de semana de convivencia creativa y grabación en vivo.',
  sessions_point3_desc_en: 'A weekend of creative coexistence and live recording.',

  sessions_point4_title_es:'Narrativa Artística',
  sessions_point4_title_en:'Artistic Narrative',
  sessions_point4_desc_es:'Entrevistas, imágenes y narrativa audiovisual expanden la experiencia más allá de la música.',
  sessions_point4_desc_en:'Interviews, images and audiovisual storytelling expand the experience beyond the music.',

 
  
  sessions_cta_es: 'Descubrir',
  sessions_cta_en: 'Discover',
  
  // Contact - Enhanced Version
  contact_title_es: '¿Tienes un proyecto en mente?',
  contact_title_en: 'Do you have a project in mind?',
  contact_subtitle_es: 'Hablemos.',
  contact_subtitle_en: 'Let\'s talk.',
  
  // Required Fields
  contact_name_es: 'Nombre',
  contact_name_en: 'Name',
  contact_email_es: 'Correo electrónico',
  contact_email_en: 'Email',
  contact_message_es: 'Mensaje',
  contact_message_en: 'Message',
  
  // Optional Fields
  contact_optional_es: 'Redes sociales (Opcional)',
  contact_optional_en: 'Social media (Optional)',
  contact_instagram_es: 'Instagram',
  contact_instagram_en: 'Instagram',
  contact_facebook_es: 'Facebook',
  contact_facebook_en: 'Facebook',
  contact_tiktok_es: 'TikTok',
  contact_tiktok_en: 'TikTok',
  contact_youtube_es: 'YouTube',
  contact_youtube_en: 'YouTube',
  contact_reference_es: 'Drive / Dropbox / WeTransfer link',
  contact_reference_en: 'Drive / Dropbox / WeTransfer link',
  
  // Form Actions
  contact_button_es: 'Enviar',
  contact_button_en: 'Send',
  
  // Success Message
  contact_success_es: '¡Gracias! Te escribimos dentro de 24–48 hs. Revisá spam por las dudas.',
  contact_success_en: 'Thanks! We\'ll get back to you within 24–48 hrs. Check spam just in case.',
  
  // Privacy Disclaimer
  contact_privacy_es: 'Usamos tus datos solo para responder a tu consulta.',
  contact_privacy_en: 'We use your data only to reply to your inquiry.',
  
  // FAQ Section
  contact_faq_title_es: 'Preguntas frecuentes',
  contact_faq_title_en: 'Frequently asked questions',
  
  // FAQ 1 - Remote work
  faq1_question_es: '¿Podemos trabajar a distancia?',
  faq1_question_en: 'Can we work remotely?',
  faq1_answer_es: 'Sí. La pre y la post se realizan por videollamada; las sesiones en locaciones se coordinan según el proyecto.',
  faq1_answer_en: 'Yes. Pre and post are handled via video call; on-location sessions are scheduled according to the project.',
  
  // FAQ 2 - Mastering
  faq2_question_es: '¿Mastering?',
  faq2_question_en: 'Mastering?',
  faq2_answer_es: 'Lo tercerizamos; entregamos premaster verificado para asegurar la máxima calidad.',
  faq2_answer_en: 'We outsource mastering; we deliver a verified premaster to ensure top quality.',
  
  // FAQ 3 - Rights & Credits
  faq3_question_es: '¿Derechos y créditos?',
  faq3_question_en: 'Rights & credits?',
  faq3_answer_es: 'Créditos y splits se acuerdan por escrito antes de iniciar el trabajo.',
  faq3_answer_en: 'Credits and splits are agreed in writing before the work starts.',
  
  // Footer
  footer_text_es: '© 2024 Proyecto Casimiro',
  footer_text_en: '© 2024 Proyecto Casimiro',
  footer_home_es: 'Inicio',
  footer_home_en: 'Home',
  footer_portfolio_es: 'Portfolio',
  footer_portfolio_en: 'Portfolio',
  footer_services_es: 'Servicios',
  footer_services_en: 'Services',
  footer_sessions_es: 'Sesiones',
  footer_sessions_en: 'Sessions',
  footer_contact_es: 'Contacto',
  footer_contact_en: 'Contact',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string): string => {
    const translationKey = `${key}_${language.toLowerCase()}` as keyof typeof translations;
    return translations[translationKey] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}