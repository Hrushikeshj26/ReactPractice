import React from 'react'

function Card({ movie: {Title, Poster, Year,imdbID } }) {
  return (
    <div>
        <div className="bg-gray-800 rounded-lg p-6 w-80" key={{imdbID}}>
            <img 
            src={Poster || 'https://via.placeholder.com/150'} 
            alt="Movie Poster" 
            className="w-full h-fit object-cover rounded-md mb-4"
            />
            <h2 className="text-l font-bold mb-2">{Title}</h2>
            <p className="text-gray-400 mb-4">Release Date: {Year}</p>
        </div>
    </div>
  )
}

export default Card