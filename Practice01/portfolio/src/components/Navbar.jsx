import React from 'react';
import Projects from './Projects';

function Navbar() {
  return (
    <>
        <header class="bg-gray-800 text-white py-6">
            <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold">{user.name}</h1>
            <p class="text-lg mt-2">Full Stack Developer | React Enthusiast | MERN Stack</p>
            <nav class="mt-4">
                <ul class="flex justify-center space-x-6">
                <li><a href="#about" class="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#projects" class="text-gray-300 hover:text-white">Projects</a></li>
                <li><a href="#contact" class="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </nav>
            </div>
         </header>
    </>
  )
}

export default Navbar