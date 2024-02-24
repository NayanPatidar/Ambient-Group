import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import Navbar from "../components/navbar/nav";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer/footer";

const TopPage = ({ isMouseOver, MouseClicked, handleHomeClick }) => {
  const handleClick = () => {
    handleHomeClick(false);
  };

  // console.log(`Data in Home : ${MouseClicked}`);

  return (
    <div
      className={`MainHome flex flex-col justify-center items-center bg-white z-1 relative p-0 m-0
         ${isMouseOver ? "left-onHover" : ""}
        ${MouseClicked ? "left-HideOn" : "left-HideOff"}
        `}
      onClick={handleClick}
    >
      <div className="MainBackground flex flex-col justify-between bg-cover bg-center h-screen ">
        <Navbar />

        <div className="line font-thin text-white lg:w-4/6 md:w-4/6 w-5/6 pl-8 text-2xl sm:text-3xl md:text-5xl lg:text-6xl  ">
          <h2 className="lineUp sm:pt-10 md:pt-5 pt-16">
            BUILDING TOMORROW, INVESTING IN YOUR FUTURE: REDEFINING REAL ESTATE
            WITH AMBIANCE AND INNOVATION.
          </h2>
        </div>
        <div className=" flex flex-row items-center text-white gap-4 h-24 border border-white border-b-0 border-r-0 border-l-0 pl-8">
          <GoArrowDown />
          <p className=" text-sm lg:text-xl underline underline-offset-8 decoration-1 decoration-transparent hover:decoration-white duration-300 ">
            SCROLL TO SEE MORE
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className=" flex flex-col md:p-16 lg:pd-16 p-8">
        <div className=" md:w-4/5 lg:w-3/5  text-xl md:text-3xl lg:text-4xl lg:tracking-wider lg:leading-relaxed ">
          Discover transformative real estate investments all over the{" "}
          <a className="text-orange-400">World</a> with{" "}
          <a className="text-orange-400">Ambient</a> Group. Redefine your future
          through <a className="text-orange-400">innovative</a> and ambient
          spaces. Invest confidently in{" "}
          <a className="text-orange-400">residential</a> and{" "}
          <a className="text-orange-400">commercial</a> opportunities with us.
        </div>
        <button className=" w-5/6 lg:w-60 md:w-60 h-10 bg-black text-white mt-8 font-medium">
          ABOUT AMBIENT GROUP
        </button>
      </div>

      <div className="flex flex-col w-11/12">
        <div className=" flex lg:flex-row md:flex-row flex-col justify-between">
          <div
            data-aos="fade-up"
            className=" flex flex-row justify-around  w-6/12 "
          >
            <div className=" w-4 mt-20">
              <p className=" -rotate-90">
                <a className="text-orange-400">COMMERCIAL </a>
              </p>
            </div>
            <div>
              <div className="img-container bg-orange-600 ">
                <img src="/public/images/Commercials/One.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p className=" text-gray-500">Mystic Falls</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className=" flex flex-row justify-around">
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
                <p>SERENITY MANOR</p>
                <p className=" text-gray-500">Rio de Janeiro, Brazil</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-row justify-between mt-28">
          <div data-aos="fade-up" className=" flex flex-row justify-around">
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
                <p>CELESTIAL RETREAT</p>
                <p className=" text-gray-500">Tokyo, Japan</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className=" flex flex-row justify-around">
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
                <p>ENCHANTED</p>
                <p className=" text-gray-500">Sydney, Australia</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" flex flex-row justify-between mt-28">
          <div data-aos="fade-up" className=" flex flex-row justify-around">
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
                <p>ETHEREAL HAVEN</p>
                <p className=" text-gray-500">Annapurna Main Road</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className=" flex flex-row justify-around">
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
                <p>GRANDEUR GROVE</p>
                <p className=" text-gray-500">Race Course Road</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div
        data-aos="fade-up"
        className=" flex flex-row justify-around h-96 w-full mt-56 border-t border-black pt-16"
      >
        <div className="w-1/4 h-80 text-center ">WHAT THEY SAY</div>
        <div className="w-1/4 h-72 border-l border-black text-xl pl-5 font-serif flex flex-col justify-between">
          <p>
            " April provides us the opportunity to invest into smart and unique,
            value add property deals."
          </p>
          <a className="text-orange-400">SHREEYANSH, VP</a>
        </div>
        <div className="w-1/4 h-72 border-l border-black text-xl pl-5 font-serif flex flex-col justify-between">
          <p>
            " Having worked with Nayan since 1998 and April since its inception
            in 2009 we are proud of our relationship, the assets they have
            created and the resulting benefits to my investment portfolio have
            been life changing. "
          </p>
          <a className="text-orange-400">SHIVAM, MLA</a>
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
      <Footer /> */}
    </div>
  );
};

export default TopPage;
