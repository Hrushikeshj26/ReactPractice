import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'


const API_URL = "http://www.omdbapi.com?apikey=b169cf0";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  }

  useEffect(() => {
    searchMovies("superman");
  },[]);

  return (
    <div className='w-full h-screen flex flex-col items-center bg-black text-white'>
      <h1 className='mt-8 text-5xl font-bold'>MovieSpace</h1>
      <div className='flex items-center justify-center gap-4 mt-4'>
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
          className="py-2 rounded-xl px-36 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
        <button 
          onClick={() => searchMovies(searchTerm)}
          className="px-8 rounded-xl py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"> Search </button>
      </div>
      <div className='bg-gray-500 rounded-2xl w-full h-auto flex items-center justify-center m-8'>
        <div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-8'>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Card 
                  key={movie.imdbID}
                  movie={movie}
                />
              ))
            ) : (
              <div className='h-screen text-xl text-white'>No movies found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
