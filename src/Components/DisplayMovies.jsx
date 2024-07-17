import React from 'react';

const DisplayMovies = ({ movies }) => {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5">Movie List:</h1>
      {movies.map(movie => (
        <div key={movie.id} className="movie-card flex mb-8">
          <img className="bg-white w-52 h-62 rounded-md" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-info ml-5">
            <h2 className="font-bold text-4xl text-sky-500">{movie.title}</h2>
            <p className="font-normal">{movie.overview}</p>
            <p className="font-normal">Rating: {movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayMovies;
