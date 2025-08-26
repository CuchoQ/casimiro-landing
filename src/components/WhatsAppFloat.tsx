import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function WhatsAppFloat() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const isInHero = heroRect.top <= 0 && heroRect.bottom > 0;
        setIsVisible(!isInHero);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tooltipText = language === 'ES' ? 'Hablemos' : 'Let\'s chat';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 mb-2"
              >
                <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-refined border border-[#D3B270]/30 whitespace-nowrap shadow-lg">
                  {tooltipText}
                  {/* Arrow pointing to button */}
                  <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-black/70 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/5492665031595?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Proyecto%20Casimiro"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 bg-black/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#D3B270] hover:border-[#D3B270] focus:outline-none focus:ring-2 focus:ring-[#D3B270]/50 focus:ring-offset-2 focus:ring-offset-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Let's chat"
            title="Let's chat"
          >
            {/* Golden glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#D3B270]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            
            {/* Icon */}
            <MessageCircle 
              className="w-6 h-6 text-[#D3B270] group-hover:text-white transition-colors duration-300 relative z-10" 
              fill="currentColor"
            />

            {/* Pulsing animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#D3B270]/40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}