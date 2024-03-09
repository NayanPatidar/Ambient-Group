import React from "react";
import "../../styles/gallery.css";

const ImageGallery = ({ data }) => {

  const handleRedirect = (redirectLink) => {
    console.log(`Redirecting to - ${redirectLink}`);
    window.location.href = redirectLink;
  };


  return (
    <div className="image-container flex justify-center">
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-4 gap-2 pl-1 pr-1 lg:w-auto lg:mr-4 md:mr-4">
        {data.map((item, index) => (
          <div key={index} className=" image-item w-full" >
            <div className=" imageDiv justify-items-end items-center align-middle self-center">
              <img
                src={item.image}
                alt={item.name}
                className=" propImage w-52 h-36 "
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
