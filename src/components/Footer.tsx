import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import casimiroLogo from "@/assets/casimiro-logo.png";

// Spotify (match Lucide style)
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14.5c1.5-1 4-1 5.5 0" />
    <path d="M7.5 11.5c2-1.5 5.5-1.5 7.5 0" />
    <path d="M7 8.5c2.5-2 7-2 9.5 0" />
  </svg>
);

// SoundCloud (match Lucide style)
const SoundCloudIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 17h18" />
    <path d="M6 11v6" />
    <path d="M8 13v4" />
    <path d="M10 10v7" />
    <path d="M12 8v9" />
    <path d="M14 11v6" />
    <path d="M16 9v8" />
    <path d="M18 12v5" />
  </svg>
);

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:proyectocasimiro@gmail.com?subject=Contacto&body=Hola%20,%20quiero%20hacerte%20una%20consulta%20sobre...', color: 'hover:text-yellow-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/proyectocasimiro', color: 'hover:text-pink-400' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/proyectocasimiro/', color: 'hover:text-blue-400' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@proyectocasimiro', color: 'hover:text-red-400' },
  { name: 'Spotify', icon: SpotifyIcon, href: '#', color: 'hover:text-green-400' },
  { name: 'SoundCloud', icon: SoundCloudIcon, href: '#', color: 'hover:text-orange-400' }
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden py-12 text-center bg-black text-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-2 flex flex-col items-center gap-0">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="cursor-pointer">
              <img
                src={casimiroLogo}
                alt="Proyecto Casimiro"
                className="w-52 h-52 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

            {/* Redes con cajas uniformes */}
            <ul className="w-full max-w-md mx-auto mt-3 flex flex-wrap items-center justify-evenly gap-4">
              {socialLinks.map((social, index) => (
                <motion.li
                  key={social.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="shrink-0"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white/90 ${social.color} transition-all duration-300 hover:scale-110 hover:drop-shadow-md`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--casimiro-gold)] to-transparent mx-auto my-6"
          />

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            <p className="font-serif-elegant text-[var(--casimiro-gold)] text-lg">Proyecto Casimiro</p>
            <p className="font-sans-clean text-gray-300 text-sm">Independent Artist & Music Producer</p>
            <p className="font-sans-clean text-gray-400 text-xs italic">© 2024 Proyecto Casimiro. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
