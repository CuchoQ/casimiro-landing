import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Sessions } from '@/components/Sessions';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--casimiro-black)] overflow-x-hidden">
      {/* Language Switcher */}
      <LanguageSwitcher />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Services Section */}
      <Services />
      
      {/* Sessions Section */}
      <Sessions />
      
          
      {/* Footer */}
      <Footer />
    </div>
  );
}