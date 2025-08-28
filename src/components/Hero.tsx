import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import casimiroLogo from '@/assets/casimiro-logo.png';


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

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--casimiro-pure-black)]">
      
      {/* 🎥 VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0 z-0"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--casimiro-pure-black)]/90 via-[var(--casimiro-pure-black)]/70 to-[var(--casimiro-pure-black)]/95 z-10"></div>
        <div className="absolute inset-0 minimal-texture z-20"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[var(--casimiro-gold-subtle)] rounded-full opacity-40 blur-sm z-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full opacity-30 blur-sm z-20"></div>
      </div>

      {/* 👁️‍🗨️ HERO CONTENT */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-20 flex justify-center"
        >
          <div className="relative">
            <motion.img
              src={casimiroLogo}
              alt="Proyecto Casimiro"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain fade-in-golden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
            <div className="absolute inset-0 bg-[var(--casimiro-gold-accent)] rounded-full blur-3xl -z-10 opacity-20"></div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="font-refined text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--casimiro-pure-white)] tracking-in font-light leading-tight">
            {t('hero_title')}
          </h1>
        </motion.div>

        {/* Línea dorada */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-24 h-px bg-[var(--casimiro-gold-subtle)] mx-auto origin-center"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-[var(--casimiro-gold-subtle)]/40 rounded-full flex justify-center cursor-pointer"
          onClick={() => scrollToSection('portfolio')}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-2 bg-[var(--casimiro-gold-subtle)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
