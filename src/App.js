import React, { useState, useEffect } from 'react';
import Imagecard from './components/Imagecard';
import Imagesearch from './components/Imagesearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <>
      <header className="bg-blue-700 text-white text-center py-3">
        <h1 className="text-xl text-bold">Pixabay Image Finder</h1>
      </header>
      <div className="container mx-auto">
        <Imagesearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

        {isLoading ? 
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-col gap-4">
          {images.map(image => (
            <Imagecard key={image.id} image={image} />
          ))}
        </div>}
      </div>
    </>
  );
}

export default App;
