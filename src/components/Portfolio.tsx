import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-[var(--casimiro-black)] to-[var(--casimiro-night-blue)] overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Main album cover */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583927109257-f21c74dd0c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGFsYnVtJTIwY292ZXIlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzU1NjU5NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Proyecto Casimiro Album"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--casimiro-black)]/60 via-transparent to-transparent"></div>
                
                {/* Play button overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-[var(--casimiro-gold)]/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--casimiro-gold)] transition-colors duration-300">
                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[var(--casimiro-gold)]/20 to-[var(--casimiro-copper)]/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[var(--casimiro-copper)]/15 to-[var(--casimiro-gold)]/15 rounded-full blur-2xl"
              />
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
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="font-sans-clean text-[var(--casimiro-gold)] tracking-wider uppercase text-sm">
                Musical Journey
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-serif-elegant text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            >
              Portfolio
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="font-sans-clean text-xl text-gray-300 leading-relaxed"
            >
              A journey through albums, singles, and artistic collaborations. Each song a story, each record a chapter in an ever-evolving musical narrative that spans genres and emotions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 py-6"
            >
              {[
                { number: "15+", label: "Releases" },
                { number: "50K+", label: "Streams" },
                { number: "3", label: "Albums" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif-elegant text-3xl text-[var(--casimiro-gold)] mb-1">
                    {stat.number}
                  </div>
                  <div className="font-sans-clean text-sm text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Button
                className="bg-gradient-to-r from-[var(--casimiro-gold)] to-[var(--casimiro-copper)] text-black hover:from-[var(--casimiro-copper)] hover:to-[var(--casimiro-gold)] font-sans-clean text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--casimiro-gold)]/25 hover:-translate-y-1 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Listen Now
                <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}