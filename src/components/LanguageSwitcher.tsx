import { motion } from 'framer-motion';
import { useState } from 'react';

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const languages = [
    { code: 'EN', label: 'EN' },
    { code: 'ES', label: 'ES' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-8 right-8 z-50"
    >
      <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm border border-[var(--casimiro-gold)]/90 rounded-full px-2 py-1 ">
        {languages.map((lang, index) => (
          <div key={lang.code} className="flex items-center">
            <motion.button
              onClick={() => setCurrentLanguage(lang.code)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-sans-clean text-sm px-2 py-1 rounded-full transition-all duration-300 ${
                currentLanguage === lang.code
                  ? 'text-[var(--casimiro-gold)] bg-[var(--casimiro-gold)]/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {lang.label}
            </motion.button>
            {index < languages.length - 1 && (
              <div className="w-px h-4 bg-[var(--casimiro-gold)]/30 mx-1"></div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}