import { motion } from 'framer-motion';
import { Play, Camera, Music, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Sessions() {
  return (
    <section id="sessions" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1599581955905-a0e0023daa96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBzZXNzaW9uJTIwc3R1ZGlvJTIwcmVjb3JkaW5nfGVufDF8fHx8MTc1NTY1OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Casimiro Sessions Live Recording"
          className="w-full h-full object-cover"
        />
        
        {/* Multi-layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--casimiro-black)]/80 via-[var(--casimiro-black)]/60 to-[var(--casimiro-black)]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--casimiro-black)]/90 via-transparent to-[var(--casimiro-night-blue)]/30"></div>
        
        {/* Texture overlay */}
        <div className="absolute inset-0 texture-overlay opacity-60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-px bg-gradient-to-r from-[var(--casimiro-gold)] to-transparent"></div>
              <span className="font-sans-clean text-[var(--casimiro-gold)] tracking-wider uppercase text-sm">
                Live Experiences
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-serif-elegant text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
            >
              Casimiro
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--casimiro-gold)] to-[var(--casimiro-copper)]">
                Sessions
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-sans-clean text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Intimate audiovisual performances, recorded live with soul and detail. Where music meets visual poetry in carefully curated moments of artistic expression.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Camera, label: 'Audiovisual Production' },
                { icon: Music, label: 'Live Performance' },
                { icon: Play, label: 'Premium Recording' },
                { icon: Music, label: 'Intimate Settings' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--casimiro-gold)]/20 to-[var(--casimiro-copper)]/20 rounded-full flex items-center justify-center border border-[var(--casimiro-gold)]/30">
                    <feature.icon className="w-5 h-5 text-[var(--casimiro-gold)]" />
                  </div>
                  <span className="font-sans-clean text-gray-300">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                className="bg-gradient-to-r from-[var(--casimiro-gold)] to-[var(--casimiro-copper)] text-black hover:from-[var(--casimiro-copper)] hover:to-[var(--casimiro-gold)] font-sans-clean text-lg px-10 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--casimiro-gold)]/25 hover:-translate-y-1 group"
              >
                Discover More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Side - Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96">
              {/* Floating play button */}
         <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-20 h-20 bg-[var(--casimiro-gold-light)]/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--casimiro-gold)] transition-colors duration-300 group"
          >
            <Play className="w-8 h-8 text-black ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
          </motion.div>

              {/* Floating music note */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-[var(--casimiro-copper)]/50 rounded-full flex items-center justify-center"
              >
                <Music className="w-6 h-6 text-[var(--casimiro-copper)]" />
              </motion.div>

              {/* Floating camera */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-gradient-to-br from-[var(--casimiro-gold)]/20 to-[var(--casimiro-copper)]/20 rounded-2xl flex items-center justify-center border border-[var(--casimiro-gold)]/30"
              >
                <Camera className="w-6 h-6 text-[var(--casimiro-gold)]" />
              </motion.div>

              {/* Background glow effects */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--casimiro-gold)]/20 to-[var(--casimiro-copper)]/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-[var(--casimiro-copper)]/15 to-[var(--casimiro-gold)]/15 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-[var(--casimiro-gold)]/40 rounded-full">
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-[var(--casimiro-gold)] rounded-full"
        />
      </div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-[var(--casimiro-copper)]/40 rounded-full">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="w-full h-full bg-[var(--casimiro-copper)] rounded-full"
        />
      </div>
    </section>
  );
}