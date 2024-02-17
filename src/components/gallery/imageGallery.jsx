import React from "react";
import "../../styles/gallery.css";

const ImageGallery = ({ data }) => {

  const handleRedirect = (redirectLink) => {
    console.log(`Redirecting to - ${redirectLink}`);
    window.location.href = redirectLink;
  };


  return (
    <div className="image-container">
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="image-item w-11/12" >
            <div className=" imageDiv">
              <img
                src={item.image}
                alt={item.name}
                className=" propImage w-52 h-36"
                onClick={() => handleRedirect(item.redirectLink)}
                />
            </div>
            <div className=" flex flex-row w-full justify-around">
              <p className="text-white text-sm">{item.name}</p>
              <p className="text-white text-sm">{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
