import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let len=8;
  return (
    <div className='w-full h-screen flex flex-col items-center bg-black text-white'>
      <h1 className='mt-8 text-5xl font-bold'>MovieSpace</h1>
      <div className='flex items-center justify-center gap-4 mt-4'>
        <input 
          type="text" 
          placeholder="Search for movies..."
          className="py-2 rounded-xl px-36 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
        <button 
          className="px-8 rounded-xl py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"> Search </button>
      </div>
      <div className='bg-gray-950 rounded-2xl w-full h-auto flex items-center justify-center m-8'>
        <div>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-8'>
            {Array.from({ length: len }).map((_, index) => (
              <Card  />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
