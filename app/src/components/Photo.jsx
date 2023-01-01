import React from "react";

const Photo = (
  {
    img, setSelectedImg, photoCardClass
  }
) => {
  const imgUrl = `../../../assets/images/${img}.jpg`;
  const handleClick = () => {
    setSelectedImg(img);
  };
  const info = new Image();
  info.src = imgUrl;
  info.onload = () => {
    console.log(info.width);
    console.log(info.height);
  };
  const orientation = info.width >= info.height ? 'landscape' : 'portrait';
  return (
    <li className={photoCardClass}>
      <img
        src={imgUrl}
        alt=""
        className={`${orientation} sm-photo-card`}
        onClick={handleClick}
      />
    </li>
  );
};

export default Photo;
