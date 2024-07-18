import React, { useContext, useState, useRef, useEffect } from "react";
import axios from "axios";
import { GenresContext, LanguageContext,CountryContext } from "../App";
import { TMDB_API_KEY } from "../config";
import DisplayMovies from "./DisplayMovies";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const SearchButton = () => {
  const { selectedLang } = useContext(LanguageContext);
  const { selectedGenres } = useContext(GenresContext);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const movieListRef = useRef(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const genreIds = selectedGenres.map((genre) => genre.id).join(",");
      const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          with_genres: genreIds,
          with_original_language: selectedLang,
        },
      });

      const fetchedMovies = response.data.results.slice(0, 5);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearData = () => {
    setMovies([]);
  };

  useEffect(() => {
    if (movies.length > 0 && movieListRef.current) {
      movieListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [movies]);

  return (
    <div className="mt-10">
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={handleClearData}
      >
        Clear data
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div ref={movieListRef}>
          <DisplayMovies movies={movies} />
        </div>
      )}
    </div>
  );
};

export default SearchButton;
