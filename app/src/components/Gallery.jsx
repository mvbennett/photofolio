import React from 'react';

import Photo from './Photo';
import FullPhoto from "./FullPhoto";

const Gallery = (
  {
    selectedImg, setSelectedImg, photoCardClass, setPhotoCardClass
  }
) => {
  const photosArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return (
    <div className="full-gallery">
      <ul className="gallery-ul">
        {
          photosArray.map((img) => {
            let component;
            if (img !== selectedImg) {
              component = (
                <div key={img}>
                  <Photo
                    img={img}
                    setSelectedImg={setSelectedImg}
                    selectedImg={selectedImg}
                    photoCardClass={photoCardClass}
                    setPhotoCardClass={setPhotoCardClass}
                  />
                </div>
              );
            } else {
              component = (
                <div className="full-div" key={img}>
                  <FullPhoto
                    img={selectedImg}
                    setSelectedImg={setSelectedImg}
                  />
                </div>
              );
            }
            return component;
          })
        }
      </ul>
      {/* <div className="full-div">
        {
          selectedImg && (<FullPhoto img={selectedImg} />)
        }
      </div> */}
    </div>
  );
};

export default Gallery;
