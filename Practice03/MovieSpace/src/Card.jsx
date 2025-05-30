import React from 'react'

function Card() {
  return (
    <div>
        <div className="bg-gray-800 rounded-lg p-6 w-80">
            <img 
            src="https://via.placeholder.com/150" 
            alt="Movie Poster" 
            className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Movie Title</h2>
            <p className="text-gray-400 mb-4">Release Date: 2023</p>
            <p className="text-gray-300 mb-4">This is a brief description of the movie. It gives an overview of the plot and main characters.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Watch Now
            </button>
        </div>
    </div>
  )
}

export default Card