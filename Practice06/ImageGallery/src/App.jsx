import React, { useEffect, useState } from 'react';

function App() {
  const API_URL = `https://picsum.photos/v2/list?page=2&limit=100`;
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setImages(data); // Save data to state for rendering
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full p-6 bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">🖼️ Picsum Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((data) => (
          <div key={data.id} className="bg-gray-700 p-2 rounded shadow">
            <img
              src={data.download_url}
              alt={data.author}
              className="w-full h-64 object-cover rounded"
            />
            <p className="mt-2 text-center text-m text-gray-50">{data.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;