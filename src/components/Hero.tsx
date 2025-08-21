import { motion } from 'framer-motion';
import { Music, Users, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import casimiroLogo from "@/assets/casimiro-logo.png";

const ctaCards = [
  { title: 'Portfolio', description: 'Music, albums, artistic works', icon: Music, gradient: 'from-[var(--casimiro-gold)] to-[var(--casimiro-copper)]', sectionId: 'portfolio' },
  { title: 'Services', description: 'Production, composition, live sessions', icon: Users, gradient: 'from-[var(--casimiro-copper)] to-[var(--casimiro-gold)]', sectionId: 'services' },
  { title: 'Sessions', description: 'Sesiones Casimiro, audiovisual live experiences', icon: Video, gradient: 'from-[var(--casimiro-gold)] to-[var(--casimiro-night-blue)]', sectionId: 'sessions' },
];

const scrollToSection = (sectionId: string) => {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1714123710240-974b15c86409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHByb2R1Y2VyJTIwZGFyayUyMG1vb2R5fGVufDF8fHx8MTc1NTY1ODc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Music Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--casimiro-black)]/60 via-[var(--casimiro-night-blue)]/40 to-[var(--casimiro-black)]/80" />
        <div className="absolute inset-0 texture-overlay" />
      </div>

      {/* LOGO gigante, superpuesto y centrado (no empuja layout) */}
     <div className="absolute inset-0 flex justify-center items-start z-10 pointer-events-none">
        <div className="relative mt-[-18vh]">
          <img
            src={casimiroLogo}
            alt="Proyecto Casimiro"
             className="w-[28rem] h-[28rem] md:w-[35rem] md:h-[35rem] lg:w-[42rem] lg:h-[42rem] object-contain drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--casimiro-gold)]/20 to-[var(--casimiro-copper)]/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>



      {/* Contenido del Hero: le damos padding-top para quedar debajo del logo */}
      <div className="relative z-20 w-full px-6">
        <div className="max-w-6xl mx-auto text-center pt-[55vh]">
          {/* (Opcional) Título y subtítulo, si querés mostrarlos */}
          {/* 
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">Proyecto Casimiro</h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-300">Música, producción y experiencias audiovisuales</p>
          </motion.div>
          */}

          {/* CTA Cards (quedan debajo del logo, como en Figma) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-16 max-w-6xl mx-auto mt-10 px-6"

          >
            {ctaCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(card.sectionId)}
                className="group cursor-pointer"
              >
                <div
                  className={`
                    relative overflow-hidden rounded-2xl p-8 h-full
                    bg-black/30 backdrop-blur-sm
                    border border-white/10
                    transition-all duration-500
                    group-hover:bg-black/40
                    group-hover:border-[var(--casimiro-gold)]
                    group-hover:shadow-[0_0_20px_var(--casimiro-gold)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--casimiro-gold)]/40
                  `}
                  tabIndex={0}
                  role="button"
                  aria-label={card.title}
                >
                  {/* wash suave */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10`} />
                  </div>

                  {/* icono */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${card.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-black/60 rounded-full flex items-center justify-center">
                        <card.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* texto */}
                  <div className="relative z-10">
                    <h3 className="font-serif-elegant text-2xl text-white mb-3 group-hover:text-[var(--casimiro-gold)] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="font-sans-clean text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* indicador */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 w-2 h-2 bg-[var(--casimiro-gold)] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[var(--casimiro-gold)]/50 rounded-full flex justify-center cursor-pointer"
            onClick={() => scrollToSection('portfolio')}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-[var(--casimiro-gold)] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
