import React from 'react';

const DisplayMovies = ({ movies }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="font-semibold text-xl sm:text-2xl mb-5">Movie List:</h1>
      {movies.map(movie => (
        <div key={movie.id} className="movie-card flex flex-col sm:flex-row mb-8">
          <img 
            className="bg-white w-full sm:w-52 h-auto sm:h-62 rounded-md mb-4 sm:mb-0" 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
          />
          <div className="movie-info sm:ml-5">
            <h2 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-sky-500">
              {movie.title}
            </h2>
            <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
              {movie.overview}
            </p>
            <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
              Rating: {movie.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayMovies;
