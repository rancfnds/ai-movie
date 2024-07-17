import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Categories from "./Components/Categories";
import Describe from "./Components/Describe";
import SearchButton from "./Components/SearchButton";
import DisplayMovies from "./Components/DisplayMovies";
import { fetchGenres } from "./Api/tmdb";

// Create a context outside of the component
const GenresContext = createContext();
const favmovie = createContext();

const App = () => {
  //this is for genre
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  //this is for search movie name
  const [input, setinput] = useState("");

  //this is to fetch the list of genere
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

  return (
    <GenresContext.Provider value={{ selectedGenres, setSelectedGenres }}>
      <favmovie.Provider value={{ input, setinput }}>
        <div className="m-10">
          <div className="mb-11">
            <Header />
          </div>

          <div className="ml-5 mr-5">
            <div className="mb-5">
              <SearchBar />
            </div>
            <Categories genres={genres} />

            <div>
              <Describe />
            </div>
            <div>
              <SearchButton />
            </div>

     
          </div>
        </div>
      </favmovie.Provider>
    </GenresContext.Provider>
  );
};

export default App;
export { GenresContext };
export { favmovie };
