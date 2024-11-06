import React, { useState, useEffect } from 'react';

const LanguageSelect = ({ changeLanguage, defaultLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  useEffect(() => {
    setSelectedLanguage(defaultLanguage);
  }, [defaultLanguage]);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    changeLanguage(lang);
  };

  return (
    <div className="language-select">
      <div className="selected-option">
        <img src={`/images/logos/${selectedLanguage}-flag.png`} alt={`${selectedLanguage} flag`} />
      </div>
      <div className="options">
        <div onClick={() => handleLanguageChange('fr')} className="option">
          <img src="/images/logos/fr-flag.png" alt="French flag" /> FR
        </div>
        <div onClick={() => handleLanguageChange('en')} className="option">
          <img src="/images/logos/en-flag.png" alt="English flag" /> EN
        </div>
        <div onClick={() => handleLanguageChange('es')} className="option">
          <img src="/images/logos/es-flag.png" alt="Spanish flag" /> ES
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
