import { motion } from 'framer-motion';
import { Music2, PenTool, Mic, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Music2,
    title: 'Production & Arrangements',
    description: 'Complete music production from concept to final mix, with sophisticated arrangements that bring your vision to life.',
    features: ['Full instrumental production', 'Professional mixing', 'Custom arrangements', 'Sound design']
  },
  {
    icon: PenTool,
    title: 'Songwriting & Composition',
    description: 'Original compositions and collaborative songwriting that captures emotion and tells compelling musical stories.',
    features: ['Lyric writing', 'Melody composition', 'Harmonic development', 'Song structure']
  },
  {
    icon: Mic,
    title: 'Live Studio Sessions',
    description: 'Professional recording sessions with premium equipment and acoustically treated spaces for pristine audio capture.',
    features: ['Multi-track recording', 'Live instruments', 'Vocal recording', 'Session musicians']
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[var(--casimiro-night-blue)] to-[var(--casimiro-black)] overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header - Matching Portfolio/Sessions style */}
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
            className="font-sans-clean text-[var(--casimiro-gold)] tracking-wider uppercase text-sm block mb-4"
          >
            Professional Expertise
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-serif-elegant text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-sans-clean text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Music production, songwriting, and live session recording. From concept to final mix, every detail crafted with precision and artistic vision.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full bg-black/40 backdrop-blur-sm border border-[var(--casimiro-gold)]/20 rounded-2xl p-8 transition-all duration-500 group-hover:border-[var(--casimiro-gold)]/50 group-hover:shadow-2xl group-hover:shadow-[var(--casimiro-gold)]/10">
                
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--casimiro-gold)]/5 to-[var(--casimiro-copper)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--casimiro-gold)] to-[var(--casimiro-copper)] rounded-2xl p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-black/80 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-[var(--casimiro-gold)]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif-elegant text-2xl text-white mb-4 group-hover:text-[var(--casimiro-gold)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans-clean text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="font-sans-clean text-sm text-gray-400 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-[var(--casimiro-gold)] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-8 right-8 text-[var(--casimiro-gold)] opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            className="bg-gradient-to-r from-[var(--casimiro-gold)] to-[var(--casimiro-copper)] text-black hover:from-[var(--casimiro-copper)] hover:to-[var(--casimiro-gold)] font-sans-clean text-lg px-12 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--casimiro-gold)]/25 hover:-translate-y-1 group"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}