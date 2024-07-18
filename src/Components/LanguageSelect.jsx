import React, { useContext } from "react";
import Select from "react-select";
import { LanguageContext } from "../App";

const LanguageSelect = () => {
  const { languages, selectedLang, setSelectedLang } = useContext(LanguageContext);

  const handleLanguageChange = (selectedOption) => {
    setSelectedLang(selectedOption.value);
  };

  const languageOptions = languages.map((language) => ({
    value: language.iso_639_1,
    label: language.english_name,
  }));

  const selectedOption = languageOptions.find(option => option.value === selectedLang);

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgb(51 65 85)",
      borderColor: "none",
      color: "white",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? "#007bff" : isFocused ? "#f0f0f0" : "white",
      color: isSelected ? "white" : "black",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "white",
    }),
  };

  return (
    <div className="mb-4">
      <label htmlFor="languageSelect" className="mr-2 font-medium text-white">
        Select Language:
      </label>
      <Select
        id="languageSelect"
        classNamePrefix="react-select"
        value={selectedOption}
        onChange={handleLanguageChange}
        options={languageOptions}
        isSearchable
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSelect;
