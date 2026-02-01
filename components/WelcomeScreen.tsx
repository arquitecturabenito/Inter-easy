import React, { useState, useEffect } from 'react';
import { Language, ContentStrings } from '../types';
import { TRANSLATIONS } from '../constants';
import Logo from './Logo';
import { ChevronDown, Globe, MoveRight } from 'lucide-react';

interface WelcomeScreenProps {
  selectedLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onEnter: () => void;
  t: ContentStrings;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  selectedLanguage,
  onLanguageChange,
  onEnter,
  t,
}) => {
  const [displayLangIndex, setDisplayLangIndex] = useState(0);
  const languages = Object.values(Language);
  
  // Cycle through languages for the "Welcome" text
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayLangIndex((prev) => (prev + 1) % languages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [languages.length]);

  const displayT = TRANSLATIONS[languages[displayLangIndex]];

  return (
    <div className="fixed inset-0 z-50 bg-cream text-deep-green flex flex-col items-center justify-center p-6 md:p-12 transition-all duration-700 overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-soft-yellow rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-10">
        
        <div className="animate-[slideDown_0.8s_ease-out_forwards]">
          <Logo className="scale-125" subtitle={t.tagline} />
        </div>

        <div className="h-32 flex items-center justify-center">
            <h1 key={languages[displayLangIndex]} className="font-serif text-5xl md:text-7xl text-center leading-[1.1] animate-[fadeInOut_2.5s_infinite] text-deep-green">
            {displayT.welcome} <span className="italic text-fresh-green">{displayT.welcomeConnector}</span><br/>
            <span className="text-electric-blue">{t.tagline}</span>
            </h1>
        </div>

        <div className="w-full max-w-sm space-y-4 animate-[slideUp_0.8s_ease-out_0.6s_forwards] opacity-0">
            {/* Playful Language Selector */}
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-fresh-green rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
               <div className="relative flex items-center bg-white rounded-full border-2 border-deep-green/10 p-2 pl-4">
                  <Globe size={20} className="text-fresh-green mr-3" />
                  <select 
                    value={selectedLanguage}
                    onChange={(e) => onLanguageChange(e.target.value as Language)}
                    className="w-full bg-transparent outline-none font-sans font-bold text-deep-green text-lg appearance-none cursor-pointer"
                  >
                    {Object.values(Language).map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none p-2 bg-cream rounded-full text-deep-green">
                    <ChevronDown size={16} />
                  </div>
               </div>
            </div>

            <button 
              onClick={onEnter}
              className="w-full group bg-deep-green hover:bg-electric-blue text-cream py-4 rounded-full font-serif text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-electric-blue/20 flex items-center justify-center gap-3"
            >
              {t.enter}
              <MoveRight className="transition-transform group-hover:translate-x-2" />
            </button>
        </div>

      </div>

      <div className="absolute bottom-8 text-center animate-[fadeIn_1s_ease-in_1s_forwards] opacity-0">
        <p className="font-serif italic text-deep-green/60 text-lg">{t.est}</p>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInOut { 0% { opacity: 0; transform: translateY(10px); } 15% { opacity: 1; transform: translateY(0); } 85% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-10px); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;