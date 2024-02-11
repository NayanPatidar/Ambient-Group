import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import Navbar from "../components/navbar/nav";
import "../styles/home.css";

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
    <div className=" flex flex-col justify-center items-center w-11/12 bg-white z-1 absolute">
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

      <div className="flex flex-col w-11/12">
        {/* First Row  */}
        <div className=" flex flex-row justify-between">
          <div className=" flex flex-row justify-around">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="img-container bg-orange-600 "
                style={{ width: 514, height: 342 }}
              >
                <img src="/public/images/Commercials/One.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p className=" text-gray-500">
                  78 Serenity Lane, Peakview CO 80123
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row justify-around">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div className="mr-12">
              <div
                className="img-container bg-orange-600"
                style={{ width: 323, height: 485 }}
              >
                <img src="/public/images/Commercials/Three.jpg" />
              </div>
              <div className=" flex flex-col">
                <p>EMERALD RETREAT CONDOS</p>
                <p className=" text-gray-500">
                  77 Sapphire Street, Gemsville GA 30301
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row  */}
        <div className=" flex flex-row justify-between mt-28">
          <div className=" flex flex-row justify-around">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="img-container bg-orange-600"
                style={{ width: 323, height: 485 }}
              >
                <img src="/public/images/Commercials/Six.jpg" />
              </div>
              <div className=" flex flex-col">
                <p>EMERALD RETREAT CONDOS</p>
                <p className=" text-gray-500">
                  77 Sapphire Street, Gemsville GA 30301
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row justify-around">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="img-container bg-orange-600 "
                style={{ width: 514, height: 342 }}
              >
                <img src="/public/images/Commercials/Four.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p className=" text-gray-500">
                  78 Serenity Lane, Peakview CO 80123
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Row  */}
        <div className=" flex flex-row justify-between mt-28">
          <div className=" flex flex-row justify-around">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div
                className="img-container bg-orange-600 "
                style={{ width: 514, height: 310 }}
              >
                <img src="/public/images/Commercials/Five.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p className=" text-gray-500">
                  78 Serenity Lane, Peakview CO 80123
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row justify-around">
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div className="mr-12">
              <div
                className="img-container bg-orange-600"
                style={{ width: 323, height: 480 }}
              >
                <img src="/public/images/Commercials/Eight.jpg" />
              </div>
              <div className=" flex flex-col">
                <p>EMERALD RETREAT CONDOS</p>
                <p className=" text-gray-500">
                  77 Sapphire Street, Gemsville GA 30301
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <div className=" flex flex-row justify-around h-96 w-full mt-56 border-t border-black pt-16">
        <div className="w-1/4 h-80 text-center ">WHAT THEY SAY</div>
        <div className="w-1/4 h-72 border-l border-black text-xl pl-5 font-serif flex flex-col justify-between">
          <p>
            " April provides us the opportunity to invest into smart and unique,
            value add property deals."
          </p>
          <a className="text-orange-400">BEN RITCHIE, MPA </a>
        </div>
        <div className="w-1/4 h-72 border-l border-black text-xl pl-5 font-serif flex flex-col justify-between">
          <p>
            " Having worked with David since 1998 and April since its inception
            in 2009 we are proud of our relationship, the assets they have
            created and the resulting benefits to my investment portfolio have
            been life changing. "
          </p>
          <a className="text-orange-400">BEN RITCHIE, MPA </a>
        </div>
      </div>

      <div className=" bg-black h-96 w-full mt-24 flex flex-row p-9 justify-between">
        <div className=" w-4/6 text-white text-3xl items-center pt-8 pr-6 leading-normal">
          We pride ourselves on owning and managing quality, legacy style assets
          designed to create long lasting communities and improve the wellbeing
          of the people who occupy them
        </div>
        <div className="w-2/6 pt-9">
          <img src="/public/images/HomePage/investor.jpg" />
        </div>
      </div>

      <div className=" flex flex-row justify-around h-80  w-full bg-black pt-16 border-white border-t">
        <div className="w-1/4 h-56 text-white flex flex-col justify-between">
          <span>
            <span className=" font-bold text-lg">AMBIENT</span> INTERIORS
          </span>
          <div className=" text-xs">
            INDORE'S PREMIER INTERIOR DESIGN LICENSED AND ACCREDITED - LICENCE
            NO: 505959 <br></br>WEBSITE CRAFTED BY AMBIENT INTERIOR
          </div>
        </div>
        <div className="w-1/4 h-56 border-l border-white text-sm text-white pl-5 font-medium flex flex-col justify-between">
          <div>
            <p className=" pb-3">GET IN TOUCH </p>
            <p className="font-serif">
              Level 6, 50 Holt Street,<br></br> Surry Hills, NSW, 2010
            </p>
          </div>
          <a className="text-orange-400">BEN RITCHIE, MPA </a>
        </div>
        <div className="w-1/4 h-56 border-l border-white text-sm text-white pl-5 font-medium flex flex-col justify-between">
          <div>
            <p className=" pb-3">ENQUIRIES</p>
            <p className="font-serif">General enquiries</p>
          </div>
          <a className="text-orange-400">BEN RITCHIE, MPA </a>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
