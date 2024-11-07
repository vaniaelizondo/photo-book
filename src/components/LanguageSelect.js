import React, { useState, useEffect, useRef } from 'react';

const LanguageSelect = ({ changeLanguage, defaultLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    setSelectedLanguage(defaultLanguage);
  }, [defaultLanguage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    changeLanguage(lang);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-select" ref={selectRef}>
      <div className="selected-option" onClick={toggleOptions}>
        <img src={`/images/logos/${selectedLanguage}-flag.png`} alt={`${selectedLanguage} flag`} />
      </div>
      {isOpen && (
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
      )}
    </div>
  );
};

export default LanguageSelect;
