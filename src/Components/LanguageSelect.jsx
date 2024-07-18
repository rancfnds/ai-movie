import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../App";

const LanguageSelect = () => {
  const { languages, selectedLang, setSelectedLang } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="languageSelect" className="mr-2 font-medium text-white">
        Select Language:
      </label>
      <select
        id="languageSelect"
        className="py-2 px-3 border border-gray-300 rounded-md transition-colors duration-300 ease-in-out bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={selectedLang}
        onChange={handleLanguageChange}
      >
        {languages.map((language) => (
          <option key={language.iso_639_1} value={language.iso_639_1}>
            {language.english_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
