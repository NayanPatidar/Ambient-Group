import React from "react";

const ImageGallery = ({ data }) => {
  return (
    <div className="image-container">
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="image-item w-11/12">
            <img src={item.image} alt={item.name} className=" w-52 h-36" />
            <p className="text-white">{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
