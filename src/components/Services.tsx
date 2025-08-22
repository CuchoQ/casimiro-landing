import { motion } from 'framer-motion';
import { Music2, PenTool, Mic2, Video, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';

const services = [
  {
    icon: Music2,
    titleKey: 'service1_title',
    subtitleKey: 'service1_subtitle',
    descriptionKey: 'service1_description',
  },
  {
    icon: PenTool,
    titleKey: 'service2_title',
    subtitleKey: 'service2_subtitle',
    descriptionKey: 'service2_description',
  },
  {
    icon: Mic2,
    titleKey: 'service3_title',
    subtitleKey: 'service3_subtitle',
    descriptionKey: 'service3_description',
  },
  {
    icon: Video,
    titleKey: 'service4_title',
    subtitleKey: 'service4_subtitle',
    descriptionKey: 'service4_description',
  }
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 bg-[var(--casimiro-light-gray)] overflow-hidden">
      <div className="absolute inset-0 minimal-texture opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-refined text-[var(--casimiro-gold-subtle)] tracking-wider uppercase text-sm font-medium block mb-6"
          >
            {t('services_label')}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-refined text-4xl md:text-5xl lg:text-6xl text-[var(--casimiro-pure-black)] mb-8 leading-tight font-light"
          >
            {t('services_title')}
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-[var(--casimiro-gold-subtle)] mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-refined text-lg text-[var(--casimiro-dark-gray)] max-w-3xl mx-auto leading-relaxed"
          >
            {t('services_description')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-[var(--casimiro-pure-white)] border border-[var(--casimiro-medium-gray)]/15 rounded-xl p-8 transition-all duration-300 glow-golden-hover shadow-sm hover:shadow-lg">
                
                {/* Golden glow background on hover */}
                <div className="absolute inset-0 bg-[var(--casimiro-gold-accent)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Header with Icon and Arrow */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className="w-14 h-14 border border-[var(--casimiro-gold-subtle)]/30 rounded-xl flex items-center justify-center group-hover:border-[var(--casimiro-gold-subtle)] transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[var(--casimiro-gold-subtle)]" />
                  </div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-[var(--casimiro-gold-subtle)] opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Title */}
                  <h3 className="font-refined text-xl text-[var(--casimiro-pure-black)] font-medium leading-tight">
                    {t(service.titleKey)}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="font-refined text-base text-[var(--casimiro-gold-subtle)] font-medium italic">
                    {t(service.subtitleKey)}
                  </p>
                  
                  {/* Description */}
                  <p className="font-refined text-sm text-[var(--casimiro-medium-gray)] leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-[var(--casimiro-gold-subtle)]/20 group-hover:bg-[var(--casimiro-gold-subtle)]/60 transition-colors duration-300"></div>
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
          <Button className="bg-[var(--casimiro-pure-black)] text-[var(--casimiro-pure-white)] hover:bg-[var(--casimiro-charcoal)] border border-[var(--casimiro-gold-subtle)]/30 hover:border-[var(--casimiro-gold-subtle)] font-refined text-base px-12 py-6 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl">
            {t('services_cta')}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-32 right-20 w-32 h-32 border border-[var(--casimiro-gold-subtle)]/5 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-[var(--casimiro-gold-subtle)]/30 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-[var(--casimiro-gold-subtle)]/40 rounded-full"></div>
      </div>
    </section>
  );
}