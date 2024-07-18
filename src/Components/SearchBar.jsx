import React, { useContext, useState } from "react";
const SearchBar = () => {

  //set the name of the movie

  return (
    <div>
      <h1 className="font-semibold text-xl mb-5">Enter your favorite movies</h1>
      <div className="bg-gray-700 h-12 w-65 rounded">
        <input
          type="text"
          className="w-full h-full bg-transparent text-white px-4 focus:outline-none"
          placeholder="Enter movie name"
       
        />
      </div>
    </div>
  );
};

export default SearchBar;
