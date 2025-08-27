import { motion } from 'framer-motion';
import { ArrowRight, Circle } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import sessionVideo from '@/assets/sessions.mp4';


// Abstract Line Art Component
const AbstractLineArt = () => (
  <svg
    viewBox="0 0 1200 600"
    className="absolute inset-0 w-full h-full object-cover opacity-10"
  >
    {/* Ethereal flowing lines */}
    <path
      d="M0,300 Q200,150 400,250 T800,200 Q1000,180 1200,220"
      fill="none"
      stroke="var(--casimiro-gold-subtle)"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M0,350 Q300,200 600,300 T1200,250"
      fill="none"
      stroke="var(--casimiro-gold-subtle)"
      strokeWidth="0.5"
      opacity="0.4"
    />
    <path
      d="M0,400 Q150,250 300,350 Q450,450 600,350 Q750,250 900,300 Q1050,350 1200,300"
      fill="none"
      stroke="var(--casimiro-gold-subtle)"
      strokeWidth="0.8"
      opacity="0.3"
    />

    {/* Minimalist geometric elements */}
    <circle cx="200" cy="180" r="2" fill="var(--casimiro-gold-subtle)" opacity="0.5" />
    <circle cx="600" cy="200" r="1.5" fill="var(--casimiro-gold-subtle)" opacity="0.4" />
    <circle cx="900" cy="160" r="1" fill="var(--casimiro-gold-subtle)" opacity="0.6" />
    <circle cx="1100" cy="190" r="1.8" fill="var(--casimiro-gold-subtle)" opacity="0.3" />

    {/* Thin golden moon crescent */}
    <path
      d="M1000,100 A25,25 0 0,1 1000,150"
      fill="none"
      stroke="var(--casimiro-gold-subtle)"
      strokeWidth="1"
      opacity="0.4"
    />
  </svg>
);

// Parallax Stars Component
const ParallaxStars = () => {
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export function Sessions() {
  const { t } = useLanguage();

  const sessionPoints = [
    { titleKey: 'sessions_point1_title', descKey: 'sessions_point1_desc' },
    { titleKey: 'sessions_point2_title', descKey: 'sessions_point2_desc' },
    { titleKey: 'sessions_point3_title', descKey: 'sessions_point3_desc' },
    { titleKey: 'sessions_point4_title', descKey: 'sessions_point4_desc' }
  ];

  return (
    // crea un stacking context propio para poder usar z-index positivos
    <section
      id="sessions"
      className="relative isolate py-32 overflow-hidden bg-[var(--casimiro-rich-black)]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
        // opcional: leve corrección sin “velo”
        style={{ filter: 'contrast(1.05) brightness(0.98)' }}
      >
        <source src={sessionVideo} type="video/mp4" />
    
      </video>
      {/* Overlay oscuro sutil (sobre el video) 
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />*/}

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <AbstractLineArt />
        <ParallaxStars />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
           
          </motion.div>

         {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 relative"
            style={{ top: '-40px' }}   // ← AJUSTÁ este valor exacto (p.ej. -64, -72, -80)
          >
            <h2 className="font-refined text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light">
              {t('sessions_title')}
            </h2>
            <h3 className="font-refined text-3xl md:text-4xl lg:text-5xl text-[var(--casimiro-gold-subtle)] font-light">
              {t('sessions_subtitle')}
            </h3>
          </motion.div>


          {/* Main Concept */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-refined text-xl md:text-2xl text-[var(--casimiro-gold-subtle)] italic font-light mt-8"
          >
          </motion.p>
        </motion.div>

        {/* 4 Highlighted Points */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {sessionPoints.map((point, index) => (
            <motion.div
              key={point.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              {/* Minimalist icon */}
              <div className="mb-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 border border-[var(--casimiro-gold-subtle)]/30 rounded-full flex items-center justify-center group-hover:border-[var(--casimiro-gold-subtle)] transition-colors duration-300"
                >
                  <Circle className="w-6 h-6 text-[var(--casimiro-gold-subtle)]" fill="currentColor" />
                </motion.div>
              </div>

              {/* Content */}
              <h4 className="font-refined text-lg text-white mb-3 font-medium">
                {t(point.titleKey)}
              </h4>
              <p className="font-refined text-sm text-gray-300 leading-relaxed">
                {t(point.descKey)}
              </p>

              {/* Subtle connecting line */}
              <div className="w-12 h-px bg-[var(--casimiro-gold-subtle)]/40 mx-auto mt-6 group-hover:bg-[var(--casimiro-gold-subtle)] transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="bg-transparent border border-[var(--casimiro-gold-subtle)]/50 text-[var(--casimiro-gold-subtle)] hover:bg-[var(--casimiro-gold-subtle)] hover:text-black font-refined text-base px-10 py-6 rounded-lg transition-all duration-300 group">
            {t('sessions_cta')}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>

      {/* Floating minimal elements */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-20 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full z-30"
      />
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-1/4 right-20 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full z-30"
      />
    </section>
  );
}
