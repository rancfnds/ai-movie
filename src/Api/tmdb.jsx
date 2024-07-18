import axios from 'axios';
import { TMDB_API_KEY } from '../config'; // Adjust path as needed

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    console.log(response.data);
    return response.data.genres; // Return array of genres
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};


export const fetchLanguages = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/configuration/languages`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    console.log(response.data); // Log the response data
    return response.data; // Return language data
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw error;
  }
};



