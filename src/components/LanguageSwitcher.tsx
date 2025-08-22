import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-3 right-3 z-50"
    >
      <div className="bg-[var(--casimiro-pure-black)]/70 backdrop-blur-sm border border-[var(--casimiro-medium-gray)]/20 rounded-md p-[4px] shadow-md">
        <div className="flex items-center space-x-1">
          {(['ES', 'EN'] as const).map((lang) => (
            <motion.button
              key={lang}
              onClick={() => setLanguage(lang)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-2 py-1 rounded text-xs font-refined font-medium transition-all duration-300
                ${language === lang 
                  ? 'text-[var(--casimiro-gold-subtle)] bg-[var(--casimiro-gold-accent)]' 
                  : 'text-[var(--casimiro-pure-white)] hover:text-[var(--casimiro-medium-gray)] hover:bg-[var(--casimiro-charcoal)]/30'
                }
              `}
            >
              {lang}
              {language === lang && (
                <motion.div
                  layoutId="activeLanguage"
                  className="absolute inset-0 border border-[var(--casimiro-gold-subtle)]/30 rounded -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
