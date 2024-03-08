import React from "react";
import "../styles/serenity.css";
import { CiTimer } from "react-icons/ci";
import Navbar from "../components/navbar/nav";
import { GoArrowDown } from "react-icons/go";
import { CiWifiOn } from "react-icons/ci";
import { MdOutlineShower } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { MdAir } from "react-icons/md";
import { GiDoubleStreetLights } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import Footer from "../components/footer/footer";

const SerenityCottage = ({ isMouseOver, MouseClicked, handleHomeClick }) => {
  const handleClick = () => {
    handleHomeClick(false);
  };
  return (
    <div
      className={`SerenityMain flex flex-col justify-center items-center bg-white z-1 relative p-0 m-0         
      ${isMouseOver ? "left-onHover" : ""}
    ${MouseClicked ? "left-HideOn" : "left-HideOff"}`}
      onClick={handleClick}
    >
      <div className=" SerenityBackground  flex flex-col justify-between bg-cover bg-center h-screen w-full ">
        <Navbar />

        <div
          data-aos="fade-up"
          className="line font-body font-thin text-white pt-40 w-5/6 pl-8 "
        >
          <h2 className="titleLineUp font-thin text-xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-6xl">SERENITY COTTAGE</h2>
          <p className=" titleLineUp font-thin  text-lg">
            123 Main Street, Auckland, New Zealand
          </p>
        </div>
        <div className="flex flex-row items-center text-white text-xl gap-4 h-24 border border-white border-b-0 border-r-0 border-l-0 pl-8">
          <GoArrowDown />
          <p className=" text-xl underline underline-offset-8 decoration-1 decoration-transparent hover:decoration-white duration-300 ">
            SCROLL TO SEE MORE
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className=" serenityDescription flex flex-col justify-center p-10"
      >
        <h3 className=" describeCottage lg:text-2xl md:text-2xl text-lg lg:w-7/12 md:w-7/12 w-full lg:pl-10 md:pl-10 ">
          Nestled in the heart of Auckland's bustling fashion, social, and
          culinary hub, Serenity Cottage is located on Paddington Parade. This
          boutique residence is part of a collection of six distinctive shops,
          accompanied by two levels of creative office workspaces available for
          lease.
        </h3>
        <div
          data-aos="fade-up"
          className=" keyInfo flex flex-col gap-3 justify-start w-11/12"
        >
          <div className=" lg:ml-10 md:ml-10">KEY INFO</div>
          <div className="flex lg:flex-row md:flex-row flex-col gap-3 justify-start w-11/12 lg:ml-10 md:ml-10 mt-5">
            <div className=" lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">TYPE</p>
              <div>
                Boutique Retail & Creative Office Spaces
              </div>
            </div>
            <div className=" mt-5 lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">CONSTRUCTION DATE</p>
              <div>2009</div>
            </div>
            <div className=" mt-5 lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">SIZE</p>
              <div>755sqm</div>
            </div>
            <div className=" mt-5 lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">FLOORS</p>
              <div>1 Retail level, 2 Office floors.</div>
            </div>
            <div className=" mt-5 lg:w-1/6 bd:w-1/6  border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3 ">
              <p className=" text-sm">TENANTS</p>
              <div>7</div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" mt-16">
          <img
            src="https://www.avso.org/wp-content/uploads/files/7/5/5/abundant-living-13-755.jpg"
            alt="Image 1"
          />
        </div>
        <div
          data-aos="fade-up"
          className=" SerenityFeatures flex flex-col mt-16 mb-16 "
        >
          <div data-aos="fade-up" className=" ml-6 text-xl text-gray-700">
            PROPERTY FEATURES
          </div>
          <div
            data-aos="fade-up"
            className=" flex flex-row justify-around mt-10"
          >
            <div className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 lg:w-8/12 md:w-8/12 w-full border border-black border-t-0 border-r-0 border-b-0 ">
              <div className="pl-5 lg:text-lg md:text-lg text-sm text-gray-700 flex flex-row items-center">
                <CiTimer className=" mr-2" /> 24/7 Building Manager
              </div>
              <div className="pl-5 lg:text-lg md:text-lg text-sm text-gray-700 flex flex-row items-center">
                <CiWifiOn className=" mr-2" />
                NBN & Fibre to the building
              </div>
              <div className="pl-5 lg:text-lg md:text-lg text-sm text-gray-700 flex flex-row items-center">
                <MdOutlineShower className=" mr-2" />
                Shower
              </div>
              <div className="pl-5 lg:text-lg md:text-lg text-sm text-gray-700 flex flex-row items-center">
                <LuParkingCircle className=" mr-2" />
                Parking & Storage
              </div>
              <div className="pl-5 lg:text-lg md:text-lg text-sm text-gray-700 flex flex-row items-center">
                <MdAir className=" mr-2" />
                Individual Air Conditioning
              </div>
              <div className="pl-5 lg:text-lg md:text-lg text-sm text-gray-700 flex flex-row items-center">
                <LuSofa className=" mr-2" />
                Private Commercial foyer and lift
              </div>
              <div className="pl-5 lg:text-lg md:text-lg text-sm text-gray-700 flex flex-row items-center">
                <GiDoubleStreetLights className=" mr-2" />
                Street Frontage
              </div>
            </div>
            <div className=" lg:w-3/12 md:w-3/12 border border-black border-t-0 border-r-0 border-b-0 lg:border-l-0 md:border-l-0 border-l-0"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SerenityCottage;
