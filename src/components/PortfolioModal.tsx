import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { SiSpotify } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { SiBandcamp, SiSoundcloud } from "react-icons/si";
import logoMediano from "@/assets/logomediano.png";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const portfolioData = {
  albums: [
    {
      id: 1,
      title: "Reflexiones",
      year: "2024",
      type: "Álbum",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwYWxidW18ZW58MXx8fHwxNzU1ODYzODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spotify: "https://spotify.com/album/example",
      youtube: "https://youtube.com/playlist/example",
      bandcamp: "",
      soundcloud:""
    },
    {
      id: 2,
      title: "Horizontes",
      year: "2023",
      type: "Álbum",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwYWxidW18ZW58MXx8fHwxNzU1ODYzODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spotify: "https://spotify.com/album/example2",
      youtube: "https://youtube.com/playlist/example2",
      bandcamp: "",
      soundcloud:""
    }
  ],
  eps: [
    {
      id: 3,
      title: "Nocturno",
      year: "2024",
      type: "EP",
      cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJchaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwZXB8ZW58MXx8fHwxNzU1ODYzODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spotify: "https://spotify.com/album/example3",
      youtube: "https://youtube.com/playlist/example3",
      bandcamp: "",
      soundcloud:""
    }
  ],
  singles: [
    {
      id: 4,
      title: "Travesía",
      year: "2024",
      type: "Single",
      cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwc2luZ2xlfGVufDF8fHx8MTc1NTg2Mzg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spotify: "https://spotify.com/track/example",
      youtube: "https://youtube.com/watch?v=example",
      bandcamp: "",
      soundcloud:""
    },
    {
      id: 5,
      title: "Despertar",
      year: "2023",
      type: "Single",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwc2luZ2xlfGVufDF8fHx8MTc1NTg2Mzg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spotify: "https://spotify.com/track/example2",
      youtube: "https://youtube.com/watch?v=example2",
      bandcamp: "",
      soundcloud:""
    }
  ],
  collaborations: [
    {
      id: 6,
      title: "Encuentros",
      year: "2024",
      type: "Colaboración",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTU4NjM4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      spotify: "https://spotify.com/track/collab1",
      youtube: "https://youtube.com/watch?v=collab1",
      bandcamp: "",
      soundcloud:""
    }
  ]
};

export function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'albums' | 'eps' | 'singles' | 'collaborations'>('albums');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabs = [
    { key: 'albums' as const, labelES: 'Álbumes', labelEN: 'Albums' },
    { key: 'eps' as const, labelES: 'EPs', labelEN: 'EPs' },
    { key: 'singles' as const, labelES: 'Singles', labelEN: 'Singles' },
    { key: 'collaborations' as const, labelES: 'Colaboraciones', labelEN: 'Collaborations' }
  ];

  const currentData = portfolioData[activeTab];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentData.length) % currentData.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[var(--casimiro-pure-black)]/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-[var(--casimiro-pure-white)] shadow-2xl rounded-xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[var(--casimiro-pure-white)]/95 backdrop-blur-sm border-b border-[var(--casimiro-medium-gray)]/20 p-6">
              <div className="flex items-center justify-between">
                {/* Logo y texto JUNTOS en un contenedor flex */}
                <div className="flex items-center gap-3">
                  <img 
                    src={logoMediano}
                    alt="Logo Casimiro"
                    className="w-16 h-16" // Logo más grande (64px)
                  />
                  <div>
                    <h2 className="font-refined text-2xl text-[var(--casimiro-pure-black)] font-medium">
                      Portfolio
                    </h2>
                    <p className="font-refined text-sm text-[var(--casimiro-medium-gray)] mt-0.5"> {/* Interlineado reducido */}
                      {language === 'ES' ? 'Producciones y Colaboraciones' : 'Productions & Collaborations'}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="sm"
                  className="text-[var(--casimiro-medium-gray)] hover:text-[var(--casimiro-pure-black)] hover:bg-[var(--casimiro-gold-accent)]"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex space-x-1 mt-4 bg-[var(--casimiro-light-gray)] rounded-lg p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key);
                      setCurrentImageIndex(0);
                    }}
                    className={`
                      flex-1 px-4 py-2 rounded-md font-refined text-sm font-medium transition-all duration-300
                      ${activeTab === tab.key
                        ? 'bg-[var(--casimiro-pure-white)] text-[var(--casimiro-gold-subtle)] shadow-sm'
                        : 'text-[var(--casimiro-medium-gray)] hover:text-[var(--casimiro-pure-black)]'
                      }
                    `}
                  >
                    {language === 'ES' ? tab.labelES : tab.labelEN}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              {currentData.length > 0 ? (
                <div className="space-y-3">
                  {/* Gallery Carousel */}
                  <div className="relative">
                    <div className="relative aspect-square max-w-xs mx-auto mb-2">
                      <ImageWithFallback
                        src={currentData[currentImageIndex].cover}
                        alt={currentData[currentImageIndex].title}
                        className="w-full h-full object-cover rounded-lg filter-bw shadow-lg"
                      />
                      
                      {/* Navigation arrows */}
                      {currentData.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--casimiro-pure-black)]/70 text-[var(--casimiro-pure-white)] rounded-full flex items-center justify-center hover:bg-[var(--casimiro-gold-subtle)] hover:text-[var(--casimiro-pure-black)] transition-colors duration-300"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--casimiro-pure-black)]/70 text-[var(--casimiro-pure-white)] rounded-full flex items-center justify-center hover:bg-[var(--casimiro-gold-subtle)] hover:text-[var(--casimiro-pure-black)] transition-colors duration-300"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Current item info */}
                    <div className="text-center mb-4">
                      <h3 className="font-refined text-xl text-[var(--casimiro-pure-black)] font-medium mb-2">
                        {currentData[currentImageIndex].title}
                      </h3>
                      <p className="font-refined text-sm text-[var(--casimiro-medium-gray)]">
                        {currentData[currentImageIndex].type} • {currentData[currentImageIndex].year}
                      </p>
                    </div>

                   {/*// Platform links*/}
                  <div className="flex justify-center space-x-4 mb-6">
                    {/* Spotify */}
                    <div className="relative group">
                      <button
                        onClick={() => {
                          if (currentData[currentImageIndex].spotify) {
                            window.open(currentData[currentImageIndex].spotify, '_blank');
                          }
                        }}
                        className={`w-12 h-12 bg-white text-black rounded-full flex items-center justify-center 
                                  transition-all duration-300 ${
                                    currentData[currentImageIndex].spotify 
                                      ? 'hover:bg-green-500 hover:text-white cursor-pointer' 
                                      : 'opacity-50 cursor-not-allowed'
                                  }`}
                        aria-label="Abrir en Spotify"
                        disabled={!currentData[currentImageIndex].spotify}
                      >
                        <SiSpotify className="w-6 h-6" />
                      </button>
                      
                      {/* Tooltip cuando no hay link */}
                      {!currentData[currentImageIndex].spotify && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 
                                        text-xs font-refined text-gray-400 
                                        bg-white px-2 py-1 rounded whitespace-nowrap
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                          No link
                        </div>
                      )}
                      
                      {/* Tooltip normal cuando sí hay link */}
                      {currentData[currentImageIndex].spotify && (
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 
                                      text-xs font-refined text-[var(--casimiro-medium-gray)] 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Spotify
                        </span>
                      )}
                    </div>

                    {/* YouTube */}
                    <div className="relative group">
                      <button
                        onClick={() => {
                          if (currentData[currentImageIndex].youtube) {
                            window.open(currentData[currentImageIndex].youtube, '_blank');
                          }
                        }}
                        className={`w-12 h-12 bg-white text-black rounded-full flex items-center justify-center 
                                  transition-all duration-300 ${
                                    currentData[currentImageIndex].youtube 
                                      ? 'hover:bg-red-600 hover:text-white cursor-pointer' 
                                      : 'opacity-50 cursor-not-allowed'
                                  }`}
                        aria-label="Abrir en YouTube"
                        disabled={!currentData[currentImageIndex].youtube}
                      >
                        <FaYoutube className="w-6 h-6" />
                      </button>
                      
                      {!currentData[currentImageIndex].youtube && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 
                                      text-xs font-refined text-white bg-[var(--casimiro-pure-black)]/80 
                                      px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          No link
                        </div>
                      )}
                      
                      {currentData[currentImageIndex].youtube && (
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 
                                      text-xs font-refined text-[var(--casimiro-medium-gray)] 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          YouTube
                        </span>
                      )}
                    </div>

                    {/* Bandcamp */}
                    <div className="relative group">
                      <button
                        onClick={() => {
                          if (currentData[currentImageIndex].bandcamp) {
                            window.open(currentData[currentImageIndex].bandcamp, '_blank');
                          }
                        }}
                        className={`w-12 h-12 bg-white text-black rounded-full flex items-center justify-center 
                                  transition-all duration-300 ${
                                    currentData[currentImageIndex].bandcamp 
                                      ? 'hover:bg-yellow-400 hover:text-white cursor-pointer' 
                                      : 'opacity-50 cursor-not-allowed'
                                  }`}
                        aria-label="Abrir en Bandcamp"
                        disabled={!currentData[currentImageIndex].bandcamp}
                      >
                        <SiBandcamp className="w-6 h-6" />
                      </button>
                      
                      {!currentData[currentImageIndex].bandcamp && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 
                                      text-xs font-refined text-white bg-[var(--casimiro-pure-black)]/80 
                                      px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          No link
                        </div>
                      )}
                      
                      {currentData[currentImageIndex].bandcamp && (
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 
                                      text-xs font-refined text-[var(--casimiro-medium-gray)] 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Bandcamp
                        </span>
                      )}
                    </div>

                    {/* SoundCloud */}
                    <div className="relative group">
                      <button
                        onClick={() => {
                          if (currentData[currentImageIndex].soundcloud) {
                            window.open(currentData[currentImageIndex].soundcloud, '_blank');
                          }
                        }}
                        className={`w-12 h-12 bg-white text-black rounded-full flex items-center justify-center 
                                  transition-all duration-300 ${
                                    currentData[currentImageIndex].soundcloud 
                                      ? 'hover:bg-orange-500 hover:text-white cursor-pointer' 
                                      : 'opacity-50 cursor-not-allowed'
                                  }`}
                        aria-label="Abrir en SoundCloud"
                        disabled={!currentData[currentImageIndex].soundcloud}
                      >
                        <SiSoundcloud className="w-6 h-6" />
                      </button>
                      
                      {!currentData[currentImageIndex].soundcloud && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 
                                      text-xs font-refined text-white bg-[var(--casimiro-pure-black)]/80 
                                      px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          No link
                        </div>
                      )}
                      
                      {currentData[currentImageIndex].soundcloud && (
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 
                                      text-xs font-refined text-[var(--casimiro-medium-gray)] 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          SoundCloud
                        </span>
                      )}
                    </div>
                  </div>
                    {/* Grid of all items */}
                    <div>
                      <h4 className="font-refined text-lg text-[var(--casimiro-pure-black)] font-medium mb-3">
                        {language === 'ES' ? 'Todos los lanzamientos' : 'All releases'}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {currentData.map((item, index) => (
                          <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.02 }}
                            className="group cursor-pointer"
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <div className={`relative aspect-square rounded-lg overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-[var(--casimiro-gold-subtle)]' : ''}`}>
                              <ImageWithFallback
                                src={item.cover}
                                alt={item.title}
                                className="w-full h-full object-cover filter-bw group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-[var(--casimiro-pure-black)]/0 group-hover:bg-[var(--casimiro-pure-black)]/20 transition-colors duration-300" />
                            </div>
                            <div className="mt-2">
                              <p className="font-refined text-sm text-[var(--casimiro-pure-black)] font-medium truncate">
                                {item.title}
                              </p>
                              <p className="font-refined text-xs text-[var(--casimiro-medium-gray)]">
                                {item.year}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="font-refined text-[var(--casimiro-medium-gray)]">
                    {language === 'ES' ? 'Próximamente' : 'Coming soon'}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}