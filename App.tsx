import React, { useState } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import MainContent from './components/MainContent';
import ProductPage from './components/ProductPage';

type ViewState = 'welcome' | 'home' | 'products';

function App() {
  const [view, setView] = useState<ViewState>('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.ES);

  const t = TRANSLATIONS[selectedLanguage];

  const handleEnter = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setView('welcome');
  };

  const handleOpenProducts = () => {
    setView('products');
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div className="antialiased">
      {view === 'welcome' && (
        <WelcomeScreen 
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          onEnter={handleEnter}
          t={t}
        />
      )}
      
      {view === 'home' && (
        <MainContent 
          t={t}
          currentLang={selectedLanguage}
          onReset={handleReset}
          onOpenProducts={handleOpenProducts}
        />
      )}

      {view === 'products' && (
        <ProductPage 
          t={t}
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;