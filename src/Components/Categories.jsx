import React, { useContext } from 'react';
import { GenresContext } from '../App';

const Categories = ({ genres }) => {
  const { selectedGenres, setSelectedGenres } = useContext(GenresContext);

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-xl mb-5">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`w-full h-12 flex items-center justify-center cursor-pointer rounded-2xl 
              ${selectedGenres.includes(genre) ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'} 
              hover:bg-blue-500 hover:text-white transition-colors duration-200`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre.name}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Categories;
