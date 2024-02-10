import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import Navbar from "../navbar/nav";

const TopPage = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const images = [
    "/public/images/HomePage/One.jpg",
    "/public/images/HomePage/Two.jpg",
    "/public/images/HomePage/Three.jpg",
  ];

  useEffect(() => {
    setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }, []);

  return (
    <div className=" w-11/12 bg-white">
      <div
        className="  flex flex-col justify-between bg-cover bg-center h-screen "
        style={{
          backgroundImage: `url(${images[backgroundImageIndex]})`,
          transition: "background-image 4s ",
        }}
      >
        <Navbar />

        <div className=" font-body font-thin text-white  text-6xl w-3/5 pl-8">
          REVITALIZE OFFICES AND REAL ESTATE WITH SMART INVESTMENTS. CRAFT
          LUXURY SPACES FOR INVESTORS.
        </div>
        <div className="flex flex-row items-center text-white text-xl gap-4 h-24 border border-white border-b-0 border-r-0 border-l-0 pl-8">
          <GoArrowDown />
          <p className=" underline underline-offset-8 decoration-1 decoration-transparent hover:decoration-white duration-300 ">
            SCROLL TO SEE MORE
          </p>
        </div>
      </div>

      <div className=" w-50 h-96">
        <div className="text-4xl w-3/5">
          We are a premier fund manager in Indore, specializing in elevating
          interior design projects. Our expertise lies in acquiring and
          transforming commercial spaces, enhancing their aesthetic appeal and
          functionality. Focused on Indore and key CBD areas, we bring
          innovative interior design solutions for a sophisticated and modern
          environment.
        </div>
      </div>
    </div>
  );
};

export default TopPage;
