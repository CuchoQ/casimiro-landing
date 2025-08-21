import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Youtube, Music, Radio } from 'lucide-react';
import casimiroLogo from "@/assets/casimiro-logo.png";


// Custom Spotify Icon Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14.5c1.5-1 4-1 5.5 0"/>
    <path d="M7.5 11.5c2-1.5 5.5-1.5 7.5 0"/>
    <path d="M7 8.5c2.5-2 7-2 9.5 0"/>
  </svg>
);

// Custom SoundCloud Icon Component
const SoundCloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M3 17h18"/>
    <path d="M6 11v6"/>
    <path d="M8 13v4"/>
    <path d="M10 10v7"/>
    <path d="M12 8v9"/>
    <path d="M14 11v6"/>
    <path d="M16 9v8"/>
    <path d="M18 12v5"/>
  </svg>
);

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:proyectocasimiro@gmail.com?subject=Contacto&body=Hola%20,%20quiero%20hacerte%20una%20consulta sobre...',
    color: 'hover:text-yellow-400'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/proyectocasimiro',
    color: 'hover:text-pink-400'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/proyectocasimiro/',
    color: 'hover:text-blue-400'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://www.youtube.com/@proyectocasimiro',
    color: 'hover:text-red-400'
  },
  {
    name: 'Spotify',
    icon: SpotifyIcon,
    href: '#',
    color: 'hover:text-green-400'
  },
  {
    name: 'SoundCloud',
    icon: SoundCloudIcon,
    href: '#',
    color: 'hover:text-orange-400'
  }
];

export function Footer() {
  return (
<footer className="relative bg-gradient-to-b from-[var(--casimiro-black)] to-[var(--casimiro-night-blue)] overflow-hidden py-12 text-center">




      {/* Subtle texture overlay */}
      <div className="absolute inset-0 texture-overlay opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo + Social Media (unificados) */}
          <div className="mb-2 flex flex-col items-center gap-0">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <img
                src={casimiroLogo}
                alt="Proyecto Casimiro"
                className="w-60 h-60 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.1 }}
                  viewport={{ once: true }}
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:drop-shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>


          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--casimiro-gold)]/50 to-transparent mx-auto mb-6"
          />

          {/* Copyright and Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="font-serif-elegant text-[var(--casimiro-gold)] text-lg">
              Proyecto Casimiro
            </p>
            <p className="font-sans-clean text-gray-400 text-sm">
              Independent Artist & Music Producer
            </p>
            <p className="font-sans-clean text-gray-500 text-xs">
              © 2024 Proyecto Casimiro. All rights reserved.
            </p>
          </motion.div>

          {/* Subtle animated elements */}
          <div className="absolute top-4 left-4 w-1 h-1 bg-[var(--casimiro-gold)]/30 rounded-full">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-[var(--casimiro-gold)] rounded-full"
            />
          </div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-[var(--casimiro-copper)]/30 rounded-full">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-full h-full bg-[var(--casimiro-copper)] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}