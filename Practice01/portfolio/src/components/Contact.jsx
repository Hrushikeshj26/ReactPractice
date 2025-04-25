import React from 'react'

function Contact() {
  return (
    <>
        <section id="contact" class="py-12 bg-white">
            <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
            <p class="text-lg text-gray-600 mb-4">
                Feel free to reach out for collaboration or just to say hello!
            </p>
            <a href="mailto:hrushikesh@example.com" 
                class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Email Me
            </a>
            </div>
        </section>
    </>
  )
}

export default Contact