import React from 'react'

let user = [{name: "Hrushikesh"}];

function Projects() {
  return (
    <>
          <section id="projects" class="py-12 bg-gray-100">
            <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
               
                <div class="bg-white shadow-md p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">E-commerce Website</h3>
                <p class="text-gray-600">
                    An Amazon-like e-commerce website with user authentication and product management.
                </p>
                </div>
            
                <div class="bg-white shadow-md p-6 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">Habit Tracker</h3>
                <p class="text-gray-600">
                    A web app to track daily habits, visualize progress with charts, and set goals.
                </p>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Projects