import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, ExternalLink, User, Music } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PortfolioModal } from './PortfolioModal';
import { useLanguage } from './LanguageContext';
import porfolioimg from '@/assets/portfolio.jpeg';


export function Portfolio() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="portfolio" className="relative py-24 bg-[var(--casimiro-pure-white)] overflow-hidden">
        <div className="absolute inset-0 minimal-texture opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Block A - About Me */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 border border-[var(--casimiro-gold-subtle)]/30 rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-[var(--casimiro-gold-subtle)]" />
                  </div>
                  <h2 className="font-refined text-3xl md:text-4xl lg:text-5xl text-[var(--casimiro-pure-black)] font-light">
                    {t('about_title')}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-24 h-px bg-[var(--casimiro-gold-subtle)]"
                ></motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="font-refined text-lg text-[var(--casimiro-dark-gray)] leading-relaxed"
                >
                  {t('about_description')}
                </motion.p>
              </div>

              {/* Right - Decorative Element */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <div className="relative">
                  <div className="w-64 h-64 border border-[var(--casimiro-gold-subtle)]/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 border border-[var(--casimiro-gold-subtle)]/40 rounded-full flex items-center justify-center">
                      <Music className="w-12 h-12 text-[var(--casimiro-gold-subtle)]" />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-4 left-1/2 w-2 h-2 bg-[var(--casimiro-gold-subtle)]/60 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute bottom-4 left-1/2 w-1 h-1 bg-[var(--casimiro-gold-subtle)]/40 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute left-4 top-1/2 w-1.5 h-1.5 bg-[var(--casimiro-gold-subtle)]/50 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute right-4 top-1/2 w-1 h-1 bg-[var(--casimiro-gold-subtle)]/30 rounded-full transform -translate-y-1/2"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Block B - Compressed Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Vinyl Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1583927109257-f21c74dd0c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGFsYnVtJTIwY292ZXIlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzU1NjU5NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Proyecto Casimiro Album"
                    className="w-full h-96 object-cover filter-bw transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Golden border on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--casimiro-gold-subtle)] transition-colors duration-300 rounded-lg"></div>
                </div>

                {/* Subtle golden accent elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border border-[var(--casimiro-gold-subtle)]/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-[var(--casimiro-gold-subtle)]/10 rounded-full"></div>
              </div>
            </motion.div>



              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8 order-1 lg:order-2"
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
                  className="font-refined text-3xl md:text-4xl lg:text-5xl text-[var(--casimiro-pure-black)] leading-tight font-light"
                >
                  {t('portfolio_title')}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="font-refined text-base text-[var(--casimiro-dark-gray)] leading-relaxed"
                >
                  Una selección que refleja la búsqueda constante de nuevas formas de expresión musical.
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
                  ].map((stat) => (
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
          </motion.div>
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
