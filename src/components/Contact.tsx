import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useLanguage } from './LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-[var(--casimiro-pure-white)] overflow-hidden">
      <div className="absolute inset-0 minimal-texture opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-refined text-4xl md:text-5xl lg:text-6xl text-[var(--casimiro-pure-black)] mb-6 leading-tight font-light"
          >
            {t('contact_title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-refined text-xl text-[var(--casimiro-gold-subtle)] font-light"
          >
            {t('contact_subtitle')}
          </motion.p>

          {/* Minimal golden line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-[var(--casimiro-gold-subtle)] mx-auto mt-8"
          ></motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[var(--casimiro-medium-gray)]/20 rounded-lg px-6 py-4 text-[var(--casimiro-pure-black)] placeholder-[var(--casimiro-medium-gray)] focus:border-[var(--casimiro-gold-subtle)] focus:ring-2 focus:ring-[var(--casimiro-gold-focus)] transition-all duration-300 font-refined"
                  placeholder={t('contact_name')}
                />
              </div>

              <div className="relative group">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-[var(--casimiro-medium-gray)]/20 rounded-lg px-6 py-4 text-[var(--casimiro-pure-black)] placeholder-[var(--casimiro-medium-gray)] focus:border-[var(--casimiro-gold-subtle)] focus:ring-2 focus:ring-[var(--casimiro-gold-focus)] transition-all duration-300 font-refined"
                  placeholder={t('contact_email')}
                />
              </div>

              <div className="relative group">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border border-[var(--casimiro-medium-gray)]/20 rounded-lg px-6 py-4 text-[var(--casimiro-pure-black)] placeholder-[var(--casimiro-medium-gray)] focus:border-[var(--casimiro-gold-subtle)] focus:ring-2 focus:ring-[var(--casimiro-gold-focus)] transition-all duration-300 resize-none font-refined"
                  placeholder={t('contact_message')}
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-center pt-4"
              >
                <Button
                  type="submit"
                  className="bg-[var(--casimiro-pure-black)] text-[var(--casimiro-pure-white)] hover:bg-[var(--casimiro-charcoal)] border border-[var(--casimiro-gold-subtle)]/30 hover:border-[var(--casimiro-gold-subtle)] font-refined text-base px-12 py-6 rounded-lg transition-all duration-300 group w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  {t('contact_button')}
                </Button>
              </motion.div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 border border-[var(--casimiro-gold-subtle)] rounded-full mb-6"
              >
                <CheckCircle className="w-8 h-8 text-[var(--casimiro-gold-subtle)]" />
              </motion.div>
              
              <h3 className="font-refined text-2xl text-[var(--casimiro-pure-black)] mb-4 font-medium">
                {t('contact_success')}
              </h3>
            </motion.div>
          )}
        </motion.div>

        {/* Minimal decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 border border-[var(--casimiro-gold-subtle)]/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-1 h-1 bg-[var(--casimiro-gold-subtle)]/60 rounded-full"></div>
      </div>
    </section>
  );
}