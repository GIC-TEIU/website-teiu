import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  // Verifica se o idioma atual é o inglês
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'pt' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      role="switch"
      aria-checked={isEnglish}
      aria-label="Alternar idioma do site"
      className="relative flex items-center bg-black/50 rounded-full p-1 w-16 h-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
          isEnglish ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>

      {/*Bandeira do Brasil*/}
      <div className={`flex-1 flex justify-center items-center z-10 transition-opacity duration-300 ${isEnglish ? 'opacity-40 grayscale' : 'opacity-100'}`}>
        <img 
          src="/assets/img/brasil.png" 
          alt="Português" 
          className="w-5 h-auto drop-shadow-sm rounded-sm"
        />
      </div>

      {/*Bandeira dos EUA*/}
      <div className={`flex-1 flex justify-center items-center z-10 transition-opacity duration-300 ${isEnglish ? 'opacity-100' : 'opacity-40 grayscale'}`}>
        <img 
          src="/assets/img/eua.png" 
          alt="English" 
          className="w-5 h-auto drop-shadow-sm rounded-sm"
        />
      </div>
    </button>
  );
};

export default LanguageToggle;