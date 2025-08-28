import { motion } from 'framer-motion';
import { Instagram, Youtube, Music, Facebook, Phone, Mail, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import casimiroLogo from '@/assets/casimiro-logo.png';
import * as RDialog from '@radix-ui/react-dialog';



const socialLinks = [
  {
    icon: Instagram,
    href: 'https://instagram.com/proyectocasimiro',
    label: 'Instagram',
    name: 'Instagram'
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@proyectocasimiro',
    label: 'YouTube',
    name: 'YouTube'
  },
  {
    icon: Music,
    href: 'https://open.spotify.com/artist/proyectocasimiro',
    label: 'Spotify',
    name: 'Spotify'
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/proyectocasimiro/',
    label: 'Facebook',
    name: 'Facebook'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/proyecto-casimiro',
    label: 'LinkedIn',
    name: 'LindkedIn'
  }

];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export function Footer() {
  const { t, language } = useLanguage();

  const navigationItems = [
    { labelKey: 'footer_home', sectionId: 'hero' },
    { labelKey: 'footer_portfolio', sectionId: 'portfolio' },
    { labelKey: 'footer_services', sectionId: 'services' },
    { labelKey: 'footer_sessions', sectionId: 'sessions' },
    { labelKey: 'footer_contact', sectionId: 'contact' }
  ];

  return (
     <footer
      id="site-footer"
      style={{ backgroundColor: 'var(--casimiro-black, #000)' }}
      className="relative z-[60] py-16 overflow-hidden text-[var(--casimiro-pure-white)]"
      >
   
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-32 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/2 right-24 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
            <img
              src={casimiroLogo}
              alt="Proyecto Casimiro"
              className="h-[56px] sm:h-[58px] md:h-[60px] lg:h-[62px] w-auto object-contain"
            />

              <div className="w-16 h-px bg-[var(--casimiro-gold-subtle)]"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:info@proyectocasimiro.com.ar"
                className="flex items-center space-x-3 text-[var(--casimiro-medium-gray)] hover:text-[var(--casimiro-gold-subtle)] transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-refined text-sm">info@proyectocasimiro.com.ar</span>
              </a>

              <a 
                href="tel:+5492665031595"
                className="flex items-center space-x-3 text-[var(--casimiro-medium-gray)] hover:text-[var(--casimiro-gold-subtle)] transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-refined text-sm">+54 9 266 503-1595</span>
              </a>
            </div>
          </motion.div>

          {/* Center - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h4 className="font-refined text-lg text-[var(--casimiro-pure-white)] font-medium">
                {language === 'ES' ? 'Navegación' : 'Navigation'}
              </h4>
              <div className="w-12 h-px bg-[var(--casimiro-gold-subtle)]/60"></div>
            </div>
            
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block font-refined text-sm text-[var(--casimiro-medium-gray)] hover:text-[var(--casimiro-gold-subtle)] transition-colors duration-300 text-left group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {t(item.labelKey)}
                  </span>
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h4 className="font-refined text-lg text-[var(--casimiro-pure-white)] font-medium">
                {language === 'ES' ? 'Síguenos' : 'Follow Us'}
              </h4>
              <div className="w-12 h-px bg-[var(--casimiro-gold-subtle)]/60"></div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 border border-[var(--casimiro-medium-gray)]/30 rounded-lg flex items-center justify-center text-[var(--casimiro-medium-gray)] hover:text-[var(--casimiro-gold-subtle)] hover:border-[var(--casimiro-gold-subtle)] transition-all duration-300 group relative"
                  title={link.name}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Special handling for Spotify icon to make it more recognizable */}
                  {link.name === 'Spotify' && (
                    <div className="absolute inset-0 rounded-lg bg-[var(--casimiro-gold-subtle)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Newsletter signup hint */}
            <div className="pt-4">
              <p className="font-refined text-xs text-[var(--casimiro-medium-gray)]/60 leading-relaxed">
                {language === 'ES' 
                  ? 'Mantente al día con nuestros últimos proyectos y sesiones especiales.'
                  : 'Stay up to date with our latest projects and special sessions.'
                }
              </p>
            </div>
          </motion.div>
        </div>

       {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[var(--casimiro-medium-gray)]/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="font-refined text-sm text-[var(--casimiro-medium-gray)]/80">
              {t('footer_text')} · {language === 'ES' ? 'Todos los derechos reservados' : 'All rights reserved'}
            </p>

            {/* Additional Links (modales) */}
            {/* Additional Links (modales locales, sin tocar ui/dialog) */}
            <div className="flex items-center space-x-6">
              {/* PRIVACY */}
              <RDialog.Root>
                <RDialog.Trigger asChild>
                  <button className="font-refined text-xs text-[var(--casimiro-medium-gray)]/60 hover:text-[var(--casimiro-gold-subtle)] transition-colors duration-300">
                    {language === 'ES' ? 'Política de Privacidad' : 'Privacy Policy'}
                  </button>
                </RDialog.Trigger>

                <RDialog.Portal>
                  <RDialog.Overlay className="fixed inset-0 z-[100] bg-black/70" />
                  <div className="fixed inset-0 z-[101] grid place-items-center p-4 pointer-events-none">
                    <RDialog.Content
                      className="pointer-events-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[var(--casimiro-pure-white)] p-6 text-[var(--casimiro-pure-black)] shadow-2xl dark:bg-[var(--casimiro-rich-black)] dark:text-[var(--casimiro-pure-white)]"
                    >
                      <RDialog.Title className="font-refined text-lg font-medium">
                        {language === 'ES' ? 'Política de Privacidad' : 'Privacy Policy'}
                      </RDialog.Title>
                      <RDialog.Description className="text-sm text-[var(--casimiro-dark-gray)] mb-3">
                        {language === 'ES'
                          ? 'Cómo tratamos tus datos cuando nos contactás o usás el sitio.'
                          : 'How we handle your data when you contact us or use the site.'}
                      </RDialog.Description>

                      <div className="space-y-3 text-sm leading-relaxed">
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Qué datos recopilamos' : 'What we collect'}</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>{language === 'ES' ? 'Datos de contacto que enviás en el formulario (nombre, email, mensaje).' : 'Contact details you submit (name, email, message).'}</li>
                            <li>{language === 'ES' ? 'Enlaces de referencia opcionales que compartas.' : 'Optional reference links you share.'}</li>
                          </ul>
                        </section>
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Uso de la información' : 'Use of information'}</h4>
                          <p>{language === 'ES'
                            ? 'Usamos tus datos únicamente para responder tu consulta y coordinar servicios. No vendemos tus datos.'
                            : 'We use your data only to reply to your inquiry and coordinate services. We do not sell your data.'}</p>
                        </section>
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Conservación' : 'Retention'}</h4>
                          <p>{language === 'ES'
                            ? 'Conservamos la información el tiempo necesario para gestionar tu consulta o relación profesional.'
                            : 'We keep information as long as needed to manage your inquiry or professional relationship.'}</p>
                        </section>
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Tus derechos' : 'Your rights'}</h4>
                          <p>
                            {language === 'ES'
                              ? 'Podés solicitar acceso, rectificación o eliminación escribiendo a '
                              : 'You can request access, rectification, or deletion by emailing '}
                            <a className="underline" href="mailto:info@proyectocasimiro.com.ar">info@proyectocasimiro.com.ar</a>.
                          </p>
                        </section>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <RDialog.Close className="font-refined text-sm px-4 py-2 rounded-lg border border-[var(--casimiro-medium-gray)]/30 hover:border-[var(--casimiro-gold-subtle)] transition-colors">
                          {language === 'ES' ? 'Cerrar' : 'Close'}
                        </RDialog.Close>
                      </div>
                    </RDialog.Content>
                  </div>
                </RDialog.Portal>
              </RDialog.Root>

              {/* TERMS */}
              <RDialog.Root>
                <RDialog.Trigger asChild>
                  <button className="font-refined text-xs text-[var(--casimiro-medium-gray)]/60 hover:text-[var(--casimiro-gold-subtle)] transition-colors duration-300">
                    {language === 'ES' ? 'Términos de Uso' : 'Terms of Use'}
                  </button>
                </RDialog.Trigger>

                <RDialog.Portal>
                  <RDialog.Overlay className="fixed inset-0 z-[100] bg-black/70" />
                  <div className="fixed inset-0 z-[101] grid place-items-center p-4 pointer-events-none">
                    <RDialog.Content
                      className="pointer-events-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[var(--casimiro-pure-white)] p-6 text-[var(--casimiro-pure-black)] shadow-2xl dark:bg-[var(--casimiro-rich-black)] dark:text-[var(--casimiro-pure-white)]"
                    >
                      <RDialog.Title className="font-refined text-lg font-medium">
                        {language === 'ES' ? 'Términos de Uso' : 'Terms of Use'}
                      </RDialog.Title>
                      <RDialog.Description className="text-sm text-[var(--casimiro-dark-gray)] mb-3">
                        {language === 'ES'
                          ? 'Condiciones para utilizar este sitio y solicitar servicios.'
                          : 'Conditions for using this site and requesting services.'}
                      </RDialog.Description>

                      <div className="space-y-3 text-sm leading-relaxed">
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Uso del sitio' : 'Site use'}</h4>
                          <p>{language === 'ES'
                            ? 'El contenido es informativo. Podemos actualizar o retirar materiales sin previo aviso.'
                            : 'Content is informational. We may update or remove materials without notice.'}</p>
                        </section>
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Propuestas y presupuestos' : 'Quotes & proposals'}</h4>
                          <p>{language === 'ES'
                            ? 'Las propuestas y presupuestos son estimaciones no vinculantes hasta su aceptación por escrito.'
                            : 'Proposals and quotes are non-binding estimates until accepted in writing.'}</p>
                        </section>
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Propiedad intelectual' : 'Intellectual property'}</h4>
                          <p>{language === 'ES'
                            ? 'Los materiales del sitio y las obras resultantes mantienen los derechos acordados en contrato.'
                            : 'Site materials and resulting works keep the rights as agreed in contract.'}</p>
                        </section>
                        <section>
                          <h4 className="font-medium mb-1">{language === 'ES' ? 'Limitación de responsabilidad' : 'Limitation of liability'}</h4>
                          <p>{language === 'ES'
                            ? 'No garantizamos disponibilidad continua del sitio. No somos responsables por daños derivados del uso.'
                            : 'We do not guarantee continuous availability. We are not liable for damages arising from use.'}</p>
                        </section>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <RDialog.Close className="font-refined text-sm px-4 py-2 rounded-lg border border-[var(--casimiro-medium-gray)]/30 hover:border-[var(--casimiro-gold-subtle)] transition-colors">
                          {language === 'ES' ? 'Cerrar' : 'Close'}
                        </RDialog.Close>
                      </div>
                    </RDialog.Content>
                  </div>
                </RDialog.Portal>
              </RDialog.Root>
            </div>

          </div>
        </motion.div>


        {/* Decorative golden line at bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[var(--casimiro-gold-subtle)]/30 to-transparent mt-8"
        ></motion.div>
      </div>

      {/* Subtle rotating accent */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-24 h-24 border border-[var(--casimiro-gold-subtle)]/5 rounded-full"
      />
    </footer>
  );
}
