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
  
  // Portfolio
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
  
  // Services
  services_label_es: 'Servicios',
  services_label_en: 'Services',
  services_title_es: 'Servicios',
  services_title_en: 'Services',
  services_description_es: 'Servicios especializados en producción musical y dirección artística.',
  services_description_en: 'Specialized services in music production and artistic direction.',
  
  // Service cards - Updated Content
  service1_title_es: 'Producción Integral',
  service1_title_en: 'Full Production',
  service1_subtitle_es: 'De la primera idea a la mezcla final',
  service1_subtitle_en: 'From the first idea to the final mix',
  service1_description_es: 'Acompañamiento completo en ensayos, diseño sonoro, maquetas y mezcla final.',
  service1_description_en: 'Complete support in rehearsals, sound design, demos, and final mix.',
  
  service2_title_es: 'Composición & Arreglos',
  service2_title_en: 'Songwriting & Arrangements',
  service2_subtitle_es: 'De una idea básica a una canción completa',
  service2_subtitle_en: 'From a raw idea to a complete song',
  service2_description_es: 'Obras originales, coautorías y arreglos (cuerdas, vientos, voces, instrumentación).',
  service2_description_en: 'Original works, co-writing, and arrangements (strings, winds, vocals, full instrumentation).',
  
  service3_title_es: 'Dirección & Grabación en Estudio',
  service3_title_en: 'Studio Direction & Recording',
  service3_subtitle_es: 'Una buena toma define el resultado final',
  service3_subtitle_en: 'A great take defines the final result',
  service3_description_es: 'Supervisión de sesiones, estética y calidad en cada toma. Gestión de estudios y músicos.',
  service3_description_en: 'Recording supervision, ensuring quality and aesthetics. Studio and musicians management.',
  
  service4_title_es: 'Sesiones en Vivo',
  service4_title_en: 'Live Sessions',
  service4_subtitle_es: 'El arte como puente',
  service4_subtitle_en: 'Art as a bridge',
  service4_description_es: 'Registro audiovisual de interpretaciones únicas, sonido y estética profesional.',
  service4_description_en: 'Audiovisual recording of unique performances with professional sound and aesthetics.',
  
  services_cta_es: 'Consultar',
  services_cta_en: 'Inquire',
  
  // Sessions - Special section with 4 points
  sessions_label_es: 'Experiencias',
  sessions_label_en: 'Experiences',
  sessions_title_es: 'Sesiones',
  sessions_title_en: 'Sessions',
  sessions_subtitle_es: 'Casimiro',
  sessions_subtitle_en: 'Casimiro',
  sessions_concept_es: 'El arte como puente',
  sessions_concept_en: 'Art as a bridge',
  
  // 4 highlighted points
  sessions_point1_title_es: 'Proceso Colaborativo',
  sessions_point1_title_en: 'Collaborative Process',
  sessions_point1_desc_es: 'Creación conjunta donde cada elemento aporta su esencia única.',
  sessions_point1_desc_en: 'Joint creation where each element contributes its unique essence.',
  
  sessions_point2_title_es: 'Momento Vivo',
  sessions_point2_title_en: 'Living Moment',
  sessions_point2_desc_es: 'Captura de la energía auténtica del instante creativo.',
  sessions_point2_desc_en: 'Capture of the authentic energy of the creative instant.',
  
  sessions_point3_title_es: 'Conexión Infinita',
  sessions_point3_title_en: 'Infinite Connection',
  sessions_point3_desc_es: 'La música como vehículo hacia lo trascendente.',
  sessions_point3_desc_en: 'Music as a vehicle towards the transcendent.',
  
  sessions_point4_title_es: 'Registro Eterno',
  sessions_point4_title_en: 'Eternal Record',
  sessions_point4_desc_es: 'Preservación del momento en imagen y sonido.',
  sessions_point4_desc_en: 'Preservation of the moment in image and sound.',
  
  sessions_cta_es: 'Descubrir',
  sessions_cta_en: 'Discover',
  
  // Contact
  contact_title_es: '¿Tienes un proyecto en mente?',
  contact_title_en: 'Do you have a project in mind?',
  contact_subtitle_es: 'Hablemos.',
  contact_subtitle_en: 'Let\'s talk.',
  contact_name_es: 'Nombre',
  contact_name_en: 'Name',
  contact_email_es: 'Correo electrónico',
  contact_email_en: 'Email',
  contact_message_es: 'Mensaje',
  contact_message_en: 'Message',
  contact_button_es: 'Enviar',
  contact_button_en: 'Send',
  contact_success_es: 'Mensaje enviado correctamente.',
  contact_success_en: 'Message sent successfully.',
  
  // Footer
  footer_text_es: '© 2024 Proyecto Casimiro',
  footer_text_en: '© 2024 Proyecto Casimiro',
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