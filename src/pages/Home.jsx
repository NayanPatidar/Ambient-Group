import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import Navbar from "../components/navbar/nav";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer/Footer";

const TopPage = ({ isMouseOver, isMouseClicked }) => {

  return (
    <div
      className={`MainHome flex flex-col justify-center items-center bg-white z-1 absolute
         ${isMouseOver ? "left-onHover" : ""}
        ${isMouseClicked ? "left-HideOn" : "left-HideOff"}`}
    >
      <div className="MainBackground flex flex-col justify-between bg-cover bg-center h-screen ">
        <Navbar />

        <div className="line font-body font-thin text-white  text-6xl w-4/6 pl-8 ">
          <h2 className="lineUp">
            BUILDING TOMORROW, INVESTING IN YOUR FUTURE: REDEFINING REAL ESTATE
            WITH AMBIANCE AND INNOVATION.
          </h2>
        </div>
        <div className="flex flex-row items-center text-white text-xl gap-4 h-24 border border-white border-b-0 border-r-0 border-l-0 pl-8">
          <GoArrowDown />
          <p className=" text-xl underline underline-offset-8 decoration-1 decoration-transparent hover:decoration-white duration-300 ">
            SCROLL TO SEE MORE
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className=" 11/12 flex flex-col p-16">
        <div className="text-4xl text-medium w-3/5 tracking-wider leading-relaxed">
          Discover transformative real estate investments in{" "}
          <a className="text-orange-400">Indore</a> with{" "}
          <a className="text-orange-400">Ambient</a> Group. Redefine your future
          through <a className="text-orange-400">innovative</a> and ambient
          spaces. Invest confidently in{" "}
          <a className="text-orange-400">residential</a> and{" "}
          <a className="text-orange-400">commercial</a> opportunities with us.
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
                <img src="/public/images/Commercials/One.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>PINECREST PLAZA</p>
                <p className=" text-gray-500">RNT Marg</p>
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
                <p className=" text-gray-500">Race Course Road</p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row  */}
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
            <div>
              <div
                className="img-container bg-orange-600 "
                style={{ width: 514, height: 342 }}
              >
                <img src="/public/images/Commercials/Four.jpg" />
              </div>

              <div className=" flex flex-col">
                <p>ENCHANTED</p>
                <p className=" text-gray-500">Race Course Road</p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Row  */}
        <div className=" flex flex-row justify-between mt-28">
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
        </div>{" "}
      </div>

      <div
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
      <Footer />
    </div>
  );
};

export default TopPage;
