import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PortfolioModal } from './PortfolioModal';
import { useLanguage } from './LanguageContext';
import porfolioimagen from '@/assets/porfolio.jpeg';

export function Portfolio() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="portfolio" className="relative py-24 bg-[var(--casimiro-pure-white)] overflow-hidden">
        <div className="absolute inset-0 minimal-texture opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
           {/* Image Side - Black and White with Golden Hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group cursor-pointer" onClick={() => setOpen(true)}>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <ImageWithFallback
                  src={porfolioimagen}
                  alt="Proyecto Casimiro Album"
                  className="w-full h-96 object-cover filter-bw transition-all duration-500 group-hover:scale-105"
                />

                {/* Golden border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--casimiro-gold-subtle)] transition-colors duration-300 rounded-lg"></div>

                {/* Golden play icon on hover 
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[var(--casimiro-pure-black)]/20"
                >
                  <div className="w-16 h-16 bg-[var(--casimiro-gold-subtle)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--casimiro-gold-refined)] transition-colors duration-300">
                    <Play className="w-7 h-7 text-[var(--casimiro-pure-black)] ml-1" fill="currentColor" />
                  </div>
                </motion.div>*/}
              </div>

              {/* Subtle golden accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-[var(--casimiro-gold-subtle)]/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-[var(--casimiro-gold-subtle)]/10 rounded-full"></div>
            </div>
          </motion.div>


            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="font-refined text-[var(--casimiro-gold-subtle)] tracking-wider uppercase text-sm font-medium">
                  {t('portfolio_label')}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-refined text-4xl md:text-5xl lg:text-6xl text-[var(--casimiro-pure-black)] leading-tight font-light"
              >
                {t('portfolio_title')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-refined text-lg text-[var(--casimiro-dark-gray)] leading-relaxed"
              >
                {t('portfolio_description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-8 py-6"
              >
                {[
                  { number: "15+", labelKey: "portfolio_releases" },
                  { number: "50K+", labelKey: "portfolio_streams" },
                  { number: "3", labelKey: "portfolio_albums" }
                ].map((stat, index) => (
                  <div key={stat.number} className="text-center">
                    <div className="font-refined text-2xl text-[var(--casimiro-gold-subtle)] mb-1 font-medium">
                      {stat.number}
                    </div>
                    <div className="font-refined text-xs text-[var(--casimiro-medium-gray)] uppercase tracking-wide">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[var(--casimiro-pure-black)] text-[var(--casimiro-pure-white)] hover:bg-[var(--casimiro-charcoal)] border border-[var(--casimiro-gold-subtle)]/30 hover:border-[var(--casimiro-gold-subtle)] font-refined text-base px-8 py-6 rounded-lg transition-all duration-300 group"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {t('portfolio_cta')}
                  <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}