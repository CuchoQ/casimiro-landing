import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, MessageCircle, User, Mail, Instagram, Facebook, Video, Music, Link2, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useLanguage } from './LanguageContext';

// Subtle Background Pattern Component
const SubtlePattern = () => (
  <svg
    viewBox="0 0 800 600"
    className="absolute top-0 right-0 w-1/2 h-full opacity-5"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="subtleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor="var(--casimiro-gold-subtle)" stopOpacity="0.1" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>

    {/* Flowing curves */}
    <motion.path
      d="M400,50 Q600,150 700,300 Q750,450 600,550"
      fill="none"
      stroke="url(#subtleGradient)"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 4, delay: 1 }}
    />
    
    <motion.path
      d="M200,100 Q350,200 500,180 Q650,160 750,280"
      fill="none"
      stroke="var(--casimiro-gold-subtle)"
      strokeWidth="0.5"
      strokeOpacity="0.3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 5, delay: 1.5 }}
    />
  </svg>
);

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: '',
    reference: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialMediaFields = [
    { key: 'instagram', icon: Instagram, label: t('contact_instagram') },
    { key: 'facebook', icon: Facebook, label: t('contact_facebook') },
    { key: 'tiktok', icon: Video, label: t('contact_tiktok') },
    { key: 'youtube', icon: Music, label: t('contact_youtube') }
  ];

  const faqItems = [
    {
      questionKey: 'faq1_question',
      answerKey: 'faq1_answer'
    },
    {
      questionKey: 'faq2_question',
      answerKey: 'faq2_answer'
    },
    {
      questionKey: 'faq3_question',
      answerKey: 'faq3_answer'
    }
  ];

  return (
    <section id="contact" className="relative py-16 bg-[#f8f8f8] overflow-hidden">
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 minimal-texture opacity-40"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <SubtlePattern />
        
        {/* Floating golden accents */}
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-16 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/3 right-24 w-1 h-1 bg-[var(--casimiro-gold-subtle)] rounded-full blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="w-14 h-14 border border-[var(--casimiro-gold-subtle)]/30 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[var(--casimiro-gold-subtle)]" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-refined text-3xl md:text-4xl lg:text-5xl text-[var(--casimiro-pure-black)] mb-3 leading-tight font-light"
          >
            {t('contact_title')}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-16 h-px bg-[var(--casimiro-gold-subtle)] mx-auto mb-3"
          ></motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-refined text-xl md:text-2xl text-[var(--casimiro-gold-subtle)] font-light"
          >
            {t('contact_subtitle')}
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Required Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium">
                    <User className="w-4 h-4 text-[var(--casimiro-gold-subtle)]" />
                    <span>{t('contact_name')}</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact_name')}
                    required
                    className="w-full px-4 py-3 bg-[var(--casimiro-pure-white)] border-2 border-transparent rounded-xl font-refined text-base text-[var(--casimiro-pure-black)] placeholder:text-[var(--casimiro-medium-gray)] transition-all duration-300 focus:border-[var(--casimiro-gold-subtle)] focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-[var(--casimiro-gold-subtle)]/15 hover:border-[var(--casimiro-gold-subtle)]/20 shadow-sm"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium">
                    <Mail className="w-4 h-4 text-[var(--casimiro-gold-subtle)]" />
                    <span>{t('contact_email')}</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact_email')}
                    required
                    className="w-full px-4 py-3 bg-[var(--casimiro-pure-white)] border-2 border-transparent rounded-xl font-refined text-base text-[var(--casimiro-pure-black)] placeholder:text-[var(--casimiro-medium-gray)] transition-all duration-300 focus:border-[var(--casimiro-gold-subtle)] focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-[var(--casimiro-gold-subtle)]/15 hover:border-[var(--casimiro-gold-subtle)]/20 shadow-sm"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium">
                  <MessageCircle className="w-4 h-4 text-[var(--casimiro-gold-subtle)]" />
                  <span>{t('contact_message')}</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact_message')}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--casimiro-pure-white)] border-2 border-transparent rounded-xl font-refined text-base text-[var(--casimiro-pure-black)] placeholder:text-[var(--casimiro-medium-gray)] transition-all duration-300 focus:border-[var(--casimiro-gold-subtle)] focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-[var(--casimiro-gold-subtle)]/15 resize-none hover:border-[var(--casimiro-gold-subtle)]/20 shadow-sm"
                />
              </div>

              {/* Optional Social Media Fields */}
              <div className="space-y-3">
                <h4 className="font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium mb-3">
                  Social Media {t('contact_optional')}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {socialMediaFields.map((social) => (
                    <div key={social.key} className="flex items-center space-x-3 bg-[var(--casimiro-pure-white)] border-2 border-transparent rounded-xl p-3 hover:border-[var(--casimiro-gold-subtle)]/20 transition-colors duration-300 shadow-sm">
                      <social.icon className="w-4 h-4 text-[var(--casimiro-gold-subtle)] flex-shrink-0" />
                      <Input
                        type="text"
                        name={social.key}
                        value={formData[social.key as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={`@${social.label.toLowerCase()}`}
                        className="flex-1 border-none bg-transparent p-0 font-refined text-sm text-[var(--casimiro-pure-black)] placeholder:text-[var(--casimiro-medium-gray)] focus:ring-0 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference Material Field */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium">
                  <Link2 className="w-4 h-4 text-[var(--casimiro-gold-subtle)]" />
                  <span>{t('contact_reference')} {t('contact_optional')}</span>
                </label>
                <Input
                  type="url"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/..."
                  className="w-full px-4 py-3 bg-[var(--casimiro-pure-white)] border-2 border-transparent rounded-xl font-refined text-base text-[var(--casimiro-pure-black)] placeholder:text-[var(--casimiro-medium-gray)] transition-all duration-300 focus:border-[var(--casimiro-gold-subtle)] focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-[var(--casimiro-gold-subtle)]/15 hover:border-[var(--casimiro-gold-subtle)]/20 shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-[var(--casimiro-gold-subtle)] text-[var(--casimiro-pure-black)] hover:bg-[var(--casimiro-pure-black)] hover:text-[var(--casimiro-gold-subtle)] border-2 border-[var(--casimiro-gold-subtle)] font-refined text-base px-8 py-3 rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitted ? (
                    <>
                      ✓ {t('contact_success').split('.')[0]}...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {t('contact_button')}
                    </>
                  )}
                </Button>
              </div>

              {/* Privacy Disclaimer */}
              <p className="font-refined text-xs text-[var(--casimiro-medium-gray)] leading-relaxed pt-2">
                {t('contact_privacy')}
              </p>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <div className="bg-[var(--casimiro-gold-accent)] border border-[var(--casimiro-gold-subtle)]/30 rounded-lg p-4">
                  <p className="font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium">
                    {t('contact_success')}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-refined text-lg text-[var(--casimiro-pure-black)] font-medium">
              {t('contact_faq_title')}
            </h4>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-[var(--casimiro-pure-white)] border border-[var(--casimiro-gold-subtle)]/20 rounded-lg px-4 shadow-sm"
                >
                  <AccordionTrigger className="font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium hover:text-[var(--casimiro-gold-subtle)] transition-colors duration-300 hover:no-underline py-3">
                    {t(item.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="font-refined text-sm text-[var(--casimiro-medium-gray)] leading-relaxed pb-3">
                    {t(item.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Qué incluir en tu mensaje 
            <div className="bg-[var(--casimiro-pure-white)] border border-[var(--casimiro-gold-subtle)]/20 rounded-lg p-4 shadow-sm">
              <h5 className="font-refined text-sm text-[var(--casimiro-dark-gray)] font-medium mb-3">
                Qué incluir en tu mensaje
              </h5>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--casimiro-medium-gray)]">
                <li>Objetivo del proyecto (tema, estilo, referencia breve).</li>
                <li>Links de referencia (demos, artistas, sesiones) — podés usar el campo de Drive/Dropbox/WeTransfer.</li>
                <li>Disponibilidad y fechas tentativas.</li>
              </ul>
            </div>*/}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 left-8 w-20 h-20 border border-[var(--casimiro-gold-subtle)]/10 rounded-full"
        />
      </div>
    </section>
  );
}