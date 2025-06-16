import { useState } from 'react'
import ToDoList from './components/ToDoList'


function App() {

  return (
    <>
    <div className='bg-gray-900 h-screen flex justify-center items-center'>
      <ToDoList />
    </div>
    </>
  )
}

export default App
