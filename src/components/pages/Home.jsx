import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import Navbar from "../navbar/nav";

const TopPage = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const images = [
    "/public/images/HomePage/Two.jpg",
    "/public/images/HomePage/One.jpg",
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

        <div className="line font-body font-thin text-white  text-6xl w-3/5 pl-8">
          <h2 className="lineUp">
            REVITALIZE OFFICES AND REAL ESTATE WITH SMART INVESTMENTS. CRAFT
            LUXURY SPACES FOR INVESTORS.
          </h2>
        </div>
        <div className="flex flex-row items-center text-white text-xl gap-4 h-24 border border-white border-b-0 border-r-0 border-l-0 pl-8">
          <GoArrowDown />
          <p className=" text-xl underline underline-offset-8 decoration-1 decoration-transparent hover:decoration-white duration-300 ">
            SCROLL TO SEE MORE
          </p>
        </div>
      </div>

      <div className=" 11/12 flex flex-col p-16">
        <div className="text-4xl text-medium w-3/5 tracking-wider leading-relaxed">
          We're a top <a className="text-orange-400">fund manager</a> in{" "}
          <a className="text-orange-400">Indore </a>, specializing in{" "}
          <a className="text-orange-400">elevating interior </a> design for
          commercial spaces. Our focus on Indore and key CBD areas ensures
          innovative solutions for a <a className="text-orange-400">modern</a>{" "}
          and <a className="text-orange-400">sophisticated environment </a>.
        </div>
        <button
          className=" w-36 h-3 bg-black text-white mt-8 font-medium"
          style={{ width: 250, height: 50 }}
        >
          ABOUT AMBIENT GROUP
        </button>
      </div>

      <div className="flex flex-col">
        {/* First Row  */}
        <div className=" flex flex-row justify-between">
          <div className=" flex flex-row justify-around ml-12">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="bg-orange-600 "
                style={{ width: 514, height: 342 }}
              >
                <img src="/public/images/Commercials/One.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p>78 Serenity Lane, Peakview CO 80123</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row justify-around ml-12">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div className="mr-12">
              <div
                className="bg-orange-600"
                style={{ width: 323, height: 485 }}
              >
                <img src="/public/images/Commercials/Three.jpg" />
              </div>
              <div className=" flex flex-col">
                <p>EMERALD RETREAT CONDOS</p>
                <p>77 Sapphire Street, Gemsville GA 30301</p>
              </div>
            </div>
          </div>
        </div>
        {/* First Two  */}
        <div className=" flex flex-row justify-between mt-28">
          <div className=" flex flex-row justify-around ml-12">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="bg-orange-600"
                style={{ width: 323, height: 485 }}
              >
                <img src="/public/images/Commercials/Six.jpg" />
              </div>
              <div className=" flex flex-col">
                <p>EMERALD RETREAT CONDOS</p>
                <p>77 Sapphire Street, Gemsville GA 30301</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row justify-around mr-12">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="bg-orange-600 "
                style={{ width: 514, height: 342 }}
              >
                <img src="/public/images/Commercials/Four.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p>78 Serenity Lane, Peakview CO 80123</p>
              </div>
            </div>
          </div>
        </div>

        
        {/* First Three  */}
        <div className=" flex flex-row justify-between mt-28">
          <div className=" flex flex-row justify-around ml-12">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="bg-orange-600 "
                style={{ width: 514, height: 310 }}
              >
                <img src="/public/images/Commercials/Five.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p>78 Serenity Lane, Peakview CO 80123</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row justify-around ml-12">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div className="mr-12">
              <div
                className="bg-orange-600"
                style={{ width: 323, height: 480 }}
              >
                <img src="/public/images/Commercials/Eight.jpg" />
              </div>
              <div className=" flex flex-col">
                <p>EMERALD RETREAT CONDOS</p>
                <p>77 Sapphire Street, Gemsville GA 30301</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default TopPage;
