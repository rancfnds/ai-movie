// src/api/tmdb.js

import axios from 'axios';
import { TMDB_API_KEY } from '../config'; // Assuming you have a config file with your API key

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    return response.data.genres; // Return array of genres
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};
