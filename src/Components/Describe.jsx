import React from "react";

const Describe = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mt-5 mb-4">Describe your liking</h1>
      <div className="bg-gray-700 h-36 w-65 rounded p-2">
        <textarea
          className="w-full h-full bg-transparent text-white px-2 focus:outline-none resize-none"
          placeholder="Start typing here..."
        ></textarea>
      </div>
    </div>  
  );
};

export default Describe;
