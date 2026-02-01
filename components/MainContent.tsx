import React, { useEffect, useState } from 'react';
import { ContentStrings, Language } from '../types';
import Logo from './Logo';
import { Phone, Mail, MapPin, ArrowDownRight, Snowflake, Sun, ChevronDown } from 'lucide-react';

interface MainContentProps {
  t: ContentStrings;
  currentLang: Language;
  onReset: () => void;
}

// Icon mapping helper
const getIcon = (key: string) => {
  switch (key) {
    case 'redPepper': return '🔴 🫑';
    case 'greenPepper': return '🟢 🫑';
    case 'yellowPepper': return '🟡 🫑';
    case 'orangePepper': return '🟠 🫑';
    case 'eggplant': return '🍆';
    case 'zucchini': return '🥒';
    case 'onion': return '🧅';
    case 'potato': return '🥔';
    case 'tomato': return '🍅';
    case 'broccoli': return '🥦';
    case 'cauliflower': return '🥬';
    case 'cucumber': return '🥒';
    case 'celery': return '🌿';
    case 'sweetPotato': return '🍠';
    case 'pumpkin': return '🎃';
    case 'artichoke': return '🥬';
    case 'leek': return '🌿';
    case 'fennel': return '🌿';
    case 'carrot': return '🥕';
    case 'romanesco': return '🥦';
    case 'chard': return '🥬';
    case 'lettuce': return '🥬';
    default: return '🥗';
  }
};

// Helper for deterministic rotation
const getRotation = (index: number) => {
  const rotations = ['rotate-1', '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3'];
  return rotations[index % rotations.length];
};

const MainContent: React.FC<MainContentProps> = ({ t, currentLang, onReset }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
    if (!showProducts) {
      setTimeout(() => {
        document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const frozenKeys: (keyof ContentStrings['productNames'])[] = [
    'redPepper', 'greenPepper', 'yellowPepper', 'orangePepper',
    'eggplant', 'zucchini', 'onion', 'potato', 'tomato'
  ];

  const freshKeys: (keyof ContentStrings['productNames'])[] = [
    'redPepper', 'greenPepper', 'yellowPepper', 'orangePepper',
    'broccoli', 'cauliflower', 'cucumber', 'zucchini',
    'eggplant', 'celery', 'sweetPotato', 'pumpkin',
    'potato', 'artichoke', 'leek', 'fennel',
    'onion', 'tomato', 'carrot', 'romanesco',
    'chard', 'lettuce'
  ];

  return (
    <div className="min-h-screen bg-cream text-deep-green selection:bg-soft-yellow selection:text-deep-green overflow-x-hidden pb-12">
      
      {/* Organic Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className={`mx-4 md:mx-8 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-deep-green/5 px-6 py-3' : 'bg-transparent px-0'}`}>
          <div className="flex justify-between items-center">
            <Logo subtitle={t.tagline} />
            <button 
              onClick={onReset}
              className="bg-deep-green text-cream px-4 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider hover:bg-electric-blue transition-colors shadow-md"
            >
              {currentLang}
            </button>
          </div>
        </div>
      </header>

      {/* Playful Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-fresh-green/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-electric-blue/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-3/5">
              <div className="inline-block px-4 py-1.5 rounded-full border border-deep-green/20 bg-white mb-6 transform -rotate-2">
                <span className="font-serif italic text-lg text-electric-blue">{t.freshnessGuaranteed}</span>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-deep-green mb-8">
                Inter<span className="italic text-stroke-green text-transparent" style={{ WebkitTextStroke: '2px #14532D' }}>EASY</span>
                <br />
                <span className="text-electric-blue">{t.tagline}</span>
              </h1>
              <p className="font-sans text-xl md:text-2xl text-deep-green/70 max-w-lg leading-relaxed mb-12">
                {t.heroDescription}
              </p>

              {/* View Products Toggle Button */}
              <button 
                onClick={toggleProducts}
                className="group flex items-center gap-3 bg-electric-blue text-white px-8 py-4 rounded-full font-serif text-xl hover:bg-deep-green transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {t.viewProducts}
                <ChevronDown className={`transition-transform duration-300 ${showProducts ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Floating Contact Card Style */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-soft-yellow p-8 md:p-12 rounded-[3rem] transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white relative group">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center text-white animate-bounce">
                  <ArrowDownRight size={32} />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-deep-green mb-8">{t.contactHeader}</h3>
                <div className="space-y-6">
                  <a href={`mailto:${t.email}`} className="flex items-center gap-4 group/link">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-green group-hover/link:bg-deep-green group-hover/link:text-cream transition-colors">
                       <Mail size={20} />
                    </div>
                    <span className="font-sans font-bold text-lg md:text-xl border-b-2 border-deep-green/10 group-hover/link:border-deep-green transition-all break-all">{t.email}</span>
                  </a>
                  <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group/link">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-green group-hover/link:bg-deep-green group-hover/link:text-cream transition-colors">
                       <Phone size={20} />
                    </div>
                    <span className="font-sans font-bold text-lg md:text-xl border-b-2 border-deep-green/10 group-hover/link:border-deep-green transition-all">{t.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable "Messy Sticker" Product Section */}
      <div 
        id="products-section"
        className={`transition-all duration-1000 ease-in-out overflow-hidden ${showProducts ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="w-full bg-deep-green/5 py-3 overflow-hidden whitespace-nowrap rotate-1 origin-right scale-105 border-y-4 border-white shadow-sm mb-12">
            <div className="inline-block animate-[marquee_20s_linear_infinite]">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="text-deep-green/40 font-serif text-2xl mx-8">
                • {t.productsHeader.toUpperCase()} • {t.tagline.toUpperCase()}
                </span>
            ))}
            </div>
        </div>

        <section className="py-12 px-6">
            <div className="container mx-auto max-w-6xl">
            
            <div className="flex flex-col md:flex-row gap-16">
                
                {/* Frozen Stickers */}
                <div className="flex-1 relative">
                    <div className="sticky top-24 z-10 mb-8 md:mb-0 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-electric-blue text-white px-6 py-2 rounded-full shadow-md rotate-[-2deg]">
                            <Snowflake size={20} />
                            <h3 className="font-serif text-2xl">{t.sectionFrozen}</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 p-8 justify-center md:justify-start">
                        {frozenKeys.map((key, i) => (
                        <div 
                            key={`frozen-${String(key)}`} 
                            className={`transform ${getRotation(i)} transition-all duration-300 hover:scale-110 hover:z-20 hover:rotate-0 cursor-default bg-white px-5 py-3 shadow-lg rounded-sm border-2 border-white ring-1 ring-black/5 flex flex-col items-center justify-center min-w-[140px] max-w-[180px] text-center`}
                        >
                            <span className="text-4xl mb-2 filter drop-shadow-sm">{getIcon(String(key))}</span>
                            <span className="font-sans font-bold text-xs text-deep-green uppercase tracking-tight leading-tight">{t.productNames[key]}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Fresh Stickers */}
                <div className="flex-1 relative">
                    <div className="sticky top-24 z-10 mb-8 md:mb-0 text-center md:text-right">
                         <div className="inline-flex items-center gap-2 bg-fresh-green text-white px-6 py-2 rounded-full shadow-md rotate-[2deg]">
                            <Sun size={20} />
                            <h3 className="font-serif text-2xl">{t.sectionFresh}</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 p-8 justify-center md:justify-end">
                        {freshKeys.map((key, i) => (
                        <div 
                            key={`fresh-${String(key)}`} 
                            className={`transform ${getRotation(i + 3)} transition-all duration-300 hover:scale-110 hover:z-20 hover:rotate-0 cursor-default bg-white px-5 py-3 shadow-lg rounded-sm border-2 border-white ring-1 ring-black/5 flex flex-col items-center justify-center min-w-[140px] max-w-[180px] text-center`}
                        >
                            <span className="text-4xl mb-2 filter drop-shadow-sm">{getIcon(String(key))}</span>
                            <span className="font-sans font-bold text-xs text-deep-green uppercase tracking-tight leading-tight">{t.productNames[key]}</span>
                        </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="text-center mt-20 mb-8">
                 <p className="font-serif text-3xl md:text-4xl text-electric-blue animate-pulse">{t.moreVariety}</p>
            </div>

            </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-deep-green text-cream rounded-t-[3rem] pt-20 pb-10 px-6 mt-6 mx-2 md:mx-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="md:w-1/2">
              <Logo variant="light" className="mb-8 scale-110 origin-left" subtitle={t.tagline} />
              <p className="font-sans text-xl text-cream/80 max-w-md leading-relaxed">
                {t.heroDescription}
              </p>
            </div>
            <div className="flex flex-col gap-8 md:w-1/3">
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                 <div className="flex items-center gap-3 mb-2 text-soft-yellow">
                    <MapPin size={24} />
                    <span className="font-sans font-bold uppercase tracking-wider text-sm">{t.hq}</span>
                 </div>
                 <p className="font-serif text-2xl leading-tight">{t.address}</p>
               </div>
               
               <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                 <div className="flex items-center gap-3 mb-2 text-electric-blue">
                    <Mail size={24} />
                    <span className="font-sans font-bold uppercase tracking-wider text-sm">{t.getInTouch}</span>
                 </div>
                 <p className="font-serif text-xl break-all">{t.email}</p>
               </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans opacity-60">
            <p>© {new Date().getFullYear()} INTEREASY. {t.rightsReserved.toUpperCase()}</p>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-soft-yellow"></span>
              <span className="w-3 h-3 rounded-full bg-fresh-green"></span>
              <span className="w-3 h-3 rounded-full bg-electric-blue"></span>
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default MainContent;