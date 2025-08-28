import { motion } from 'framer-motion';
import { Music, Feather, Camera, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';

const services = [
  {
    icon: Music,
    titleKey: 'service1_title',
    items: ['service1_item1', 'service1_item2', 'service1_item3', 'service1_item4']
  },
  {
    icon: Feather,
    titleKey: 'service2_title',
    items: ['service2_item1', 'service2_item2', 'service2_item3', 'service2_item4']
  },
  {
    icon: Camera,
    titleKey: 'service3_title',
    items: ['service3_item1', 'service3_item2', 'service3_item3', 'service3_item4', 'service3_item5']
  }
];

// Artistic Background Elements
const ArtisticBackground = () => (
  <svg
    viewBox="0 0 1200 800"
    className="absolute inset-0 w-full h-full object-cover opacity-10"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Flowing golden curves */}
    <defs>
      <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor="var(--casimiro-gold-subtle)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>

    {/* Abstract flowing lines */}
    <motion.path
      d="M0,200 Q300,150 600,250 Q900,350 1200,200"
      fill="none"
      stroke="var(--casimiro-gold-subtle)"
      strokeWidth="1"
      strokeOpacity="0.4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, delay: 0.5 }}
    />
    
    <motion.path
      d="M0,400 Q200,300 400,380 Q700,460 900,350 Q1050,280 1200,350"
      fill="none"
      stroke="var(--casimiro-gold-subtle)"
      strokeWidth="0.8"
      strokeOpacity="0.3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 4, delay: 1 }}
    />

    {/* Subtle geometric elements */}
    <motion.circle
      cx="200"
      cy="150"
      r="2"
      fill="var(--casimiro-gold-subtle)"
      opacity="0.4"
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    
    <motion.circle
      cx="800"
      cy="600"
      r="1.5"
      fill="var(--casimiro-gold-subtle)"
      opacity="0.3"
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, delay: 2 }}
    />

    <motion.circle
      cx="1000"
      cy="300"
      r="1"
      fill="var(--casimiro-gold-subtle)"
      opacity="0.5"
      animate={{ scale: [0.5, 1, 0.5], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
  </svg>
);

export function Services() {
  const { t, language } = useLanguage();

  return (
      <section
        id="services"
        className="relative isolate py-16 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #1a1a1a, #111111)' }}
      >
      
      <div aria-hidden className="absolute inset-0 -z-10" />

        {/* Arte decorativo (sin fondo sólido) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ArtisticBackground />
          {/* Textura sutil sin “lavar” el fondo */}
          <div className="absolute inset-0 minimal-texture opacity-5" />
        </div>

        {/* Elementos dorados flotando */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-20 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full blur-sm"
          />
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-1/3 right-24 w-1.5 h-1.5 bg-[var(--casimiro-gold-subtle)] rounded-full blur-sm"
          />
        </div>

        {/* Contenido */}
        <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-refined text-4xl md:text-5xl lg:text-6xl text-[var(--casimiro-pure-white)] mb-8 leading-tight font-light"
          >
            {t('services_title')}
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-[var(--casimiro-gold-subtle)] mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-refined text-lg text-[var(--casimiro-medium-gray)] max-w-4xl mx-auto leading-relaxed"
          >
            {t('services_subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.titleKey}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group cursor-pointer"
          >
            <div className="relative h-full bg-[var(--casimiro-pure-white)] border-2 border-[var(--casimiro-gold-subtle)]/20 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg min-h-[320px] group-hover:border-[var(--casimiro-gold-subtle)]/60">
              
              {/* Golden glow effect on hover */}
              <div className="absolute inset-0 bg-[var(--casimiro-gold-accent)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Subtle golden shadow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(201,169,110,0.2)] pointer-events-none"></div>
              
              {/* Icon + Title in one row */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-[var(--casimiro-gold-subtle)] rounded-xl flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-[var(--casimiro-gold-subtle)] stroke-[1.25]" />
                  </div>
                  <h3 className="font-refined text-lg text-[var(--casimiro-pure-black)] font-medium leading-tight">
                    {t(service.titleKey)}
                  </h3>
                </div>

                {/* Arrow with golden accent */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-[var(--casimiro-gold-subtle)] opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Bullet Points */}
              <div className="relative z-10 space-y-4">
                {service.items.map((itemKey, itemIndex) => (
                  <div key={itemKey} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[var(--casimiro-gold-subtle)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-refined text-sm text-[var(--casimiro-medium-gray)] leading-relaxed">
                      {t(itemKey)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom golden accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-[var(--casimiro-gold-subtle)]/20 group-hover:bg-[var(--casimiro-gold-subtle)]/60 transition-colors duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>


      {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#contact">
            <Button className="bg-[var(--casimiro-gold-subtle)] text-[var(--casimiro-pure-black)] hover:bg-[var(--casimiro-pure-black)] hover:text-[var(--casimiro-gold-subtle)] border-2 border-[var(--casimiro-gold-subtle)] font-refined text-base px-12 py-6 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl font-medium">
               {t('service_button')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </motion.div>


        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 w-32 h-32 border border-[var(--casimiro-gold-subtle)]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 w-20 h-20 border border-[var(--casimiro-gold-subtle)]/15 rounded-full"
        />
      </div>
    </section>
  );
}