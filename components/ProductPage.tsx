import React, { useEffect } from 'react';
import { ContentStrings } from '../types';
import Logo from './Logo';
import { Snowflake, Sun, ArrowLeft } from 'lucide-react';

interface ProductPageProps {
  t: ContentStrings;
  onBack: () => void;
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
  const rotations = ['rotate-1', '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-6', '-rotate-6'];
  return rotations[index % rotations.length];
};

const ProductPage: React.FC<ProductPageProps> = ({ t, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-cream text-deep-green animate-[fadeIn_0.5s_ease-out]">
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-deep-green/5 px-4 py-2 md:px-6 md:py-3 flex justify-between items-center">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-deep-green text-cream px-4 py-2 rounded-full hover:bg-electric-blue transition-colors text-sm md:text-base font-sans font-bold uppercase tracking-wider"
            >
                <ArrowLeft size={18} />
                <span className="hidden md:inline">{t.backToHome}</span>
            </button>
            <Logo className="scale-75 md:scale-90 origin-right" subtitle={t.tagline} />
        </div>
      </header>

      <div className="pt-32 pb-20 px-4 md:px-8">
        {/* Marquee Header */}
        <div className="mb-12 overflow-hidden">
             <h2 className="font-serif text-5xl md:text-8xl text-center text-electric-blue mb-4">
                 {t.productsHeader}
             </h2>
             <div className="w-24 h-2 bg-fresh-green mx-auto rounded-full"></div>
        </div>

        <div className="container mx-auto max-w-7xl space-y-24">
            
            {/* Frozen Section */}
            <div className="relative">
                <div className="flex justify-center mb-12">
                    <div className="bg-electric-blue text-white px-8 py-3 rounded-full shadow-lg -rotate-2 flex items-center gap-3">
                         <Snowflake />
                         <span className="font-serif text-2xl md:text-3xl">{t.sectionFrozen}</span>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-2">
                    {frozenKeys.map((key, i) => (
                        <div 
                            key={`frozen-${String(key)}`} 
                            className={`transform ${getRotation(i)} bg-white p-4 shadow-md rounded-xl border border-deep-green/5 w-[45%] md:w-[200px] aspect-square flex flex-col items-center justify-center text-center transition-transform hover:scale-110 hover:z-10 hover:rotate-0 duration-300`}
                        >
                            <span className="text-4xl md:text-6xl mb-3">{getIcon(String(key))}</span>
                            <span className="font-sans font-bold text-sm text-deep-green uppercase leading-tight">{t.productNames[key]}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fresh Section */}
            <div className="relative">
                 <div className="flex justify-center mb-12">
                    <div className="bg-fresh-green text-white px-8 py-3 rounded-full shadow-lg rotate-2 flex items-center gap-3">
                         <Sun />
                         <span className="font-serif text-2xl md:text-3xl">{t.sectionFresh}</span>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-2">
                    {freshKeys.map((key, i) => (
                        <div 
                            key={`fresh-${String(key)}`} 
                            className={`transform ${getRotation(i + 4)} bg-white p-4 shadow-md rounded-xl border border-deep-green/5 w-[45%] md:w-[200px] aspect-square flex flex-col items-center justify-center text-center transition-transform hover:scale-110 hover:z-10 hover:rotate-0 duration-300`}
                        >
                            <span className="text-4xl md:text-6xl mb-3">{getIcon(String(key))}</span>
                            <span className="font-sans font-bold text-sm text-deep-green uppercase leading-tight">{t.productNames[key]}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-soft-yellow rounded-[2rem] p-8 md:p-12 text-center transform rotate-1 mt-12 mx-auto max-w-2xl border-4 border-white shadow-xl">
                 <p className="font-serif text-3xl md:text-5xl text-deep-green mb-4 leading-tight">{t.moreVariety}</p>
                 <button onClick={onBack} className="mt-4 text-electric-blue font-bold border-b-2 border-electric-blue hover:text-deep-green hover:border-deep-green transition-all">
                     {t.contactHeader}
                 </button>
            </div>

        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default ProductPage;