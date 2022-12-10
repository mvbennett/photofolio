import React, { useState } from 'react';

import Gallery from "./Gallery";

const App = () => {
  const [selectedImg, setSelectedImg] = useState();
  const [photoCardClass, setPhotoCardClass] = useState('photo-li');
  return (
    <div className="container">
      <Gallery
        setSelectedImg={setSelectedImg}
        selectedImg={selectedImg}
        photoCardClass={photoCardClass}
        setPhotoCardClass={setPhotoCardClass}
      />
    </div>
  );
};

export default App;
