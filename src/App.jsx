import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Categories from "./Components/Categories";
import Describe from "./Components/Describe";
import SearchButton from "./Components/SearchButton";
import LanguageSelect from "./Components/LanguageSelect";
import { fetchGenres, fetchLanguages } from "./Api/tmdb";

// Create a context outside of the component
const GenresContext = createContext();
const LanguageContext = createContext();

const App = () => {
  // For genres
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  // For languages
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setSelectedLang] = useState("");

  //For country
  // const [countries, setcountries] = useState([]);
  // const [selectedCountry, setselectedCountry] = useState("");

  // Fetch genres data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGenres();
        setGenres(data);
      } catch (error) {
        console.log("Error in fetching the data", error);
      }
    };

    fetchData();
  }, []);

  // Fetch languages data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLanguages();
        setLanguages(data);
      } catch (error) {
        console.log("Error has occurred:", error);
      }
    };

    fetchData();
  }, []);

  //Fetch country data
 
  return (
    <GenresContext.Provider value={{ selectedGenres, setSelectedGenres }}>
      <LanguageContext.Provider
        value={{ languages, selectedLang, setSelectedLang }}
      >
    
          <div className="m-10">
            <div className="mb-11">
              <Header />
            </div>
            <div className="ml-5 mr-5">
              <div className="mb-5">
                <SearchBar />
              </div>
              <LanguageSelect />
              <Categories genres={genres} />
              <div>
                <Describe />
              </div>
              <div>
                <SearchButton />
              </div>
            </div>
          </div>
      </LanguageContext.Provider>
    </GenresContext.Provider>
  );
};

export default App;
export { GenresContext, LanguageContext };
