import React, { useState } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import MainContent from './components/MainContent';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.ES);

  const t = TRANSLATIONS[selectedLanguage];

  const handleEnter = () => {
    setHasEntered(true);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setHasEntered(false);
  };

  return (
    <div className="antialiased">
      {!hasEntered && (
        <WelcomeScreen 
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          onEnter={handleEnter}
          t={t}
        />
      )}
      
      {hasEntered && (
        <MainContent 
          t={t}
          currentLang={selectedLanguage}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;