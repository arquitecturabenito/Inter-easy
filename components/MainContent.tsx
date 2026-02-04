import React, { useEffect, useState } from 'react';
import { ContentStrings, Language } from '../types';
import Logo from './Logo';
import Mascot from './Mascot';
import { Phone, Mail, MapPin, ArrowDownRight, MoveRight, Contact } from 'lucide-react';

interface MainContentProps {
  t: ContentStrings;
  currentLang: Language;
  onReset: () => void;
  onOpenProducts: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ t, currentLang, onReset, onOpenProducts }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mascotReaction, setMascotReaction] = useState<'idle' | 'happy'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerMascotHappy = () => {
    setMascotReaction('happy');
    setTimeout(() => setMascotReaction('idle'), 1500);
  };

  const handleLanguageClick = () => {
    triggerMascotHappy();
    onReset();
  };

  const handleProductsClick = () => {
    triggerMascotHappy();
    // Small delay to let the animation start before switching views
    setTimeout(onOpenProducts, 200);
  };

  const handleSaveContact = () => {
    triggerMascotHappy();
    const vCardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'FN:InterEASY Green Trade',
        'ORG:InterEASY',
        `TEL;TYPE=WORK,VOICE:${t.phone.replace(/\s/g, '')}`,
        `EMAIL;TYPE=WORK:${t.email}`,
        'ADR;TYPE=WORK:;;San Pedro del Pinatar;Murcia;;;España',
        'END:VCARD'
    ].join('\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'InterEASY.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-cream text-deep-green selection:bg-soft-yellow selection:text-deep-green overflow-x-hidden flex flex-col">
      
      {/* Organic Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4 md:py-6'}`}>
        <div className={`mx-4 md:mx-8 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-deep-green/5 px-4 md:px-6 py-2 md:py-3' : 'bg-transparent px-0'}`}>
          <div className="flex justify-between items-center">
            <Logo subtitle={t.tagline} />
            <button 
              onClick={handleLanguageClick}
              className="bg-deep-green text-cream px-3 py-1.5 md:px-4 md:py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider hover:bg-electric-blue transition-colors shadow-md"
            >
              {currentLang}
            </button>
          </div>
        </div>
      </header>

      {/* Playful Hero Section - Compacted for Mobile */}
      <section className="relative pt-24 pb-10 md:pt-48 md:pb-24 px-4 md:px-6 flex-grow flex flex-col justify-center">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-fresh-green/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-electric-blue/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Text */}
            <div className="lg:w-1/2 pt-4 md:pt-8 relative">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-deep-green/20 bg-white mb-4 md:mb-6 transform -rotate-2">
                <span className="font-serif italic text-base md:text-lg text-electric-blue">{t.freshnessGuaranteed}</span>
              </div>
              
              <div className="relative">
                {/* Compacted title for mobile */}
                <h1 className="font-serif text-5xl md:text-8xl lg:text-8xl leading-[0.9] text-deep-green mb-4 md:mb-8 relative z-10">
                    Inter<span className="italic text-stroke-green text-transparent" style={{ WebkitTextStroke: '2px #14532D' }}>Easy</span>
                    <br />
                    <span className="text-electric-blue">{t.tagline}</span>
                </h1>
                
                {/* Desktop Mascot */}
                <div className="hidden lg:block absolute -right-10 top-10 rotate-12 z-0">
                    <Mascot reaction={mascotReaction} />
                </div>
              </div>

              <p className="font-sans text-lg md:text-2xl text-deep-green/70 max-w-lg leading-snug md:leading-relaxed mb-6 md:mb-8">
                {t.heroDescription}
              </p>
            </div>
            
            {/* Right Column: Contact & Button */}
            <div className="lg:w-1/2 w-full flex flex-col gap-4 md:gap-6">
              
              {/* Contact Card - Compacted padding on mobile */}
              <div className="bg-soft-yellow p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white relative group">
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-electric-blue rounded-full flex items-center justify-center text-white animate-bounce shadow-lg z-10">
                  <ArrowDownRight size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-serif text-2xl md:text-4xl text-deep-green mb-4 md:mb-8">{t.contactHeader}</h3>
                <div className="space-y-4 md:space-y-6">
                  <a href={`mailto:${t.email}`} className="flex items-center gap-3 md:gap-4 group/link overflow-hidden">
                    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white rounded-full flex items-center justify-center text-deep-green group-hover/link:bg-deep-green group-hover/link:text-cream transition-colors">
                       <Mail size={18} className="md:w-5 md:h-5" />
                    </div>
                    <span className="font-sans font-bold text-base md:text-xl border-b-2 border-deep-green/10 group-hover/link:border-deep-green transition-all whitespace-nowrap overflow-x-auto scrollbar-hide">{t.email}</span>
                  </a>
                  <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 md:gap-4 group/link">
                    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white rounded-full flex items-center justify-center text-deep-green group-hover/link:bg-deep-green group-hover/link:text-cream transition-colors">
                       <Phone size={18} className="md:w-5 md:h-5" />
                    </div>
                    <span className="font-sans font-bold text-base md:text-xl border-b-2 border-deep-green/10 group-hover/link:border-deep-green transition-all">{t.phone}</span>
                  </a>
                  
                  {/* Save Contact Button */}
                  <button 
                    onClick={handleSaveContact}
                    className="w-full mt-2 md:mt-4 flex items-center justify-center gap-3 bg-white hover:bg-deep-green hover:text-white text-deep-green py-2.5 md:py-3 px-6 rounded-full transition-all duration-300 shadow-sm border border-deep-green/10 active:scale-95"
                  >
                    <Contact size={18} className="md:w-5 md:h-5" />
                    <span className="font-sans font-bold uppercase tracking-wider text-xs md:text-sm">{t.saveContact}</span>
                  </button>

                </div>
              </div>

              {/* Mobile Mascot - Smaller and integrated */}
              <div className="lg:hidden flex justify-center -mt-2 mb-1">
                  <Mascot className="w-28 h-28" reaction={mascotReaction} />
              </div>

              {/* View Products Button */}
              <button 
                onClick={handleProductsClick}
                className="w-full bg-electric-blue text-white p-4 md:p-6 rounded-[2rem] font-serif text-xl md:text-2xl hover:bg-deep-green transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group flex items-center justify-between active:scale-95"
              >
                <span>{t.viewProducts}</span>
                <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <MoveRight size={20} className="md:w-6 md:h-6" />
                </span>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compacted top padding */}
      <footer className="bg-deep-green text-cream rounded-t-[3rem] pt-12 md:pt-20 pb-8 md:pb-10 px-6 mt-auto mx-2 md:mx-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-10 md:mb-16">
            <div className="md:w-1/2">
              <Logo variant="light" className="mb-6 md:mb-8 scale-110 origin-left" subtitle={t.tagline} />
              <p className="font-sans text-lg md:text-xl text-cream/80 max-w-md leading-relaxed">
                {t.heroDescription}
              </p>
            </div>
            <div className="flex flex-col gap-8 md:w-1/3 w-full">
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                 <div className="flex items-center gap-3 mb-2 text-soft-yellow">
                    <MapPin size={24} />
                    <span className="font-sans font-bold uppercase tracking-wider text-sm">{t.hq}</span>
                 </div>
                 <p className="font-serif text-xl md:text-2xl leading-tight">{t.address}</p>
               </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans opacity-60">
            <p className="text-center md:text-left">© {new Date().getFullYear()} INTEREASY. {t.rightsReserved.toUpperCase()}</p>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-soft-yellow"></span>
              <span className="w-3 h-3 rounded-full bg-fresh-green"></span>
              <span className="w-3 h-3 rounded-full bg-electric-blue"></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;