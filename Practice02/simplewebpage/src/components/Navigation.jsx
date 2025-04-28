import React from 'react'

function Navigation() {
  return (
    <nav>
    <div className='w-full px-20 font-medium justify-between items-center h-18 flex'>
      <img className='w-18 h-10' src="/images/brand_logo.png" alt="logo" />

      <div className=' w-3/8'>
        <ul className='flex justify-between'>
          <li className='hover:text-red-700'><a href="#">Menu</a></li>
          <li className='hover:text-red-700'><a href="#">Location</a></li>
          <li className='hover:text-red-700'><a href="#">About</a></li>
          <li className='hover:text-red-700'><a href="#">Contact</a></li>
        </ul>
      </div>

      <button className='px-8 py-[0.3rem] text-white rounded-2xl bg-red-600 hover:bg-red-700'>Login</button>
    </div>
  </nav>
  )
}

export default Navigation