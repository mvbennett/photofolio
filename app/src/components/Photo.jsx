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
  return (
    <li className={photoCardClass}>
      <img
        src={imgUrl}
        alt=""
        className="sm-photo"
        onClick={handleClick}
      />
    </li>
  );
};

export default Photo;
