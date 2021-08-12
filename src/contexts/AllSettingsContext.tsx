import React, { createContext, useState } from 'react';
import { Language, ptBR } from '../settings/ptBR';

interface SettingsContextData {
  language: Language;
  changeLanguage: (language: Language) => void;
}

export const SettingsContext = createContext({} as SettingsContextData);

const SettingsContextProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<Language>(ptBR);

  function changeLanguage(language: Language) {
    setLanguage(language);
  }

  return (
    <SettingsContext.Provider value={{ language, changeLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
