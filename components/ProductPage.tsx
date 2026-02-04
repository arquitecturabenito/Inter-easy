import React, { useEffect } from 'react';
import { ContentStrings } from '../types';
import Logo from './Logo';
import VegetableIcon from './VegetableIcon';
import { Snowflake, Sun, ArrowLeft, Info } from 'lucide-react';

interface ProductPageProps {
  t: ContentStrings;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ t, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const freshKeys: (keyof ContentStrings['productNames'])[] = [
    'tomato', 'cucumber', 'redPepper', 'greenPepper', 'yellowPepper', 'orangePepper',
    'zucchini', 'eggplant', 'carrot', 'daikon', 'beetroot', 'parsnip',
    'sweetPotato', 'potato', 'broccoli', 'cauliflower', 'artichoke', 'leek',
    'kale', 'cabbages', 'spinach', 'pumpkin', 'corn', 'celery'
  ];

  const frozenKeys: (keyof ContentStrings['productNames'])[] = [
    'redPepper', 'greenPepper', 'yellowPepper', 'orangePepper',
    'eggplant', 'zucchini', 'onion', 'potato', 'tomato'
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-deep-green animate-[fadeIn_0.5s_ease-out]">
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-md border border-deep-green/5 px-4 py-2 md:px-6 md:py-3 flex justify-between items-center max-w-7xl mx-auto">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-deep-green text-cream px-4 py-2 rounded-full hover:bg-electric-blue transition-all active:scale-95 text-xs md:text-sm font-sans font-bold uppercase tracking-wider"
            >
                <ArrowLeft size={16} />
                <span>{t.backToHome}</span>
            </button>
            <Logo className="scale-75 md:scale-90 origin-right" subtitle={t.tagline} />
        </div>
      </header>

      <div className="pt-28 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
            
            {/* Header Area */}
            <div className="mb-16 text-center">
                 <h2 className="font-serif text-4xl md:text-7xl text-deep-green mb-4">
                     {t.productsHeader}
                 </h2>
                 <p className="font-sans text-deep-green/60 text-sm md:text-base max-w-2xl mx-auto border-t border-deep-green/10 pt-4">
                    {t.availabilityNotice}
                 </p>
            </div>

            {/* Fresh Section Grid */}
            <div className="mb-24">
                <div className="flex items-center gap-4 mb-10 border-b-2 border-fresh-green/20 pb-4">
                    <div className="bg-fresh-green text-white p-2 rounded-lg shadow-sm">
                        <Sun size={24} />
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-fresh-green">{t.sectionFresh}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                    {freshKeys.map((key) => (
                        <div 
                            key={`fresh-${key}`} 
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex flex-col items-center group transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 mb-4 group-hover:scale-110 transition-transform">
                                <VegetableIcon name={key} />
                            </div>
                            <span className="font-sans font-extrabold text-xs md:text-sm text-deep-green uppercase tracking-wide text-center min-h-[2.5rem] flex items-center justify-center">
                                {t.productNames[key]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Frozen Section Grid */}
            <div className="mb-24">
                <div className="flex items-center gap-4 mb-10 border-b-2 border-electric-blue/20 pb-4">
                    <div className="bg-electric-blue text-white p-2 rounded-lg shadow-sm">
                        <Snowflake size={24} />
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-electric-blue">{t.sectionFrozen}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 opacity-95">
                    {frozenKeys.map((key) => (
                        <div 
                            key={`frozen-${key}`} 
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex flex-col items-center hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 mb-4 grayscale-[0.2]">
                                <VegetableIcon name={key} />
                            </div>
                            <span className="font-sans font-bold text-xs md:text-sm text-deep-green uppercase tracking-wide text-center mb-1">
                                {t.productNames[key]}
                            </span>
                            <span className="font-sans italic text-[10px] text-electric-blue uppercase font-bold tracking-widest">Frozen</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Info Banner */}
            <div className="bg-soft-yellow/20 rounded-3xl p-8 md:p-12 border-2 border-dashed border-soft-yellow flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto mb-12">
                 <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3 text-deep-green">
                        <Info size={32} />
                        <h4 className="font-serif text-2xl md:text-3xl">{t.moreVariety}</h4>
                    </div>
                    <p className="font-sans text-deep-green/70">
                        {t.availabilityNotice}
                    </p>
                 </div>
                 <button 
                    onClick={onBack}
                    className="shrink-0 bg-deep-green text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-widest shadow-lg hover:bg-electric-blue transition-colors active:scale-95"
                 >
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