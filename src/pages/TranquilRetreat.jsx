import React from "react";
import "../styles/tranquil.css";
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

export default function TranquilRetreatPage({
  isMouseOver,
  MouseClicked,
  handleHomeClick,
}) {
  const handleClick = () => {
    handleHomeClick(false);
  };
  return (
    <div
      className={`TranquilRetreatMain flex flex-col justify-center items-center bg-white z-1 absolute          
      ${isMouseOver ? "left-onHover" : ""}
    ${MouseClicked ? "left-HideOn" : "left-HideOff"}`}
      onClick={handleClick}
    >
      <div className=" TranquilRetreatBackground flex flex-col justify-between bg-cover bg-center h-screen w-full ">
        <Navbar />

        <div
          data-aos="fade-up"
          className="line font-body font-thin text-white pt-48 w-4/6 pl-8 "
        >
          <h2 className="titleLineUp font-thin  text-6xl">PINES MANOR</h2>
          <p className=" titleLineUp font-thin  text-2xl">
            123 Pine Avenue, Auckland Central, New Zealand
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
        className=" HarmonyHavenDescription flex flex-col justify-center p-10"
      >
        <h3 className=" describeHarmony">
          Pines Manor is an elegant residence nestled in the heart of Auckland's
          bustling city center. This historic manor exudes charm and
          sophistication with its distinctive Victorian architecture and
          well-manicured gardens. The property features a grand entrance with a
          sweeping driveway, leading to a beautifully designed front facade
          adorned with intricate detailing.
        </h3>
        <div
          data-aos="fade-up"
          className=" keyInfo flex flex-col gap-3 justify-start w-11/12"
        >
          <div className=" ml-10">KEY INFO</div>
          <div className="flex flex-row gap-3 justify-start w-11/12 ml-10 mt-5">
            <div className=" w-1/6 h-48 border border-black border-t-0 border-r-0 border-b-0 pl-3">
              <p className=" text-sm">TYPE</p>
              <div className=" text-2xl">Residential</div>
            </div>
            <div className=" w-1/6 h-48 border border-black border-t-0 border-r-0 border-b-0 pl-3">
              <p className=" text-sm">CONSTRUCTION DATE</p>
              <div>2000</div>
            </div>
            <div className=" w-1/6 h-48 border border-black border-t-0 border-r-0 border-b-0 pl-3">
              <p className=" text-sm">SIZE</p>
              <div>620sqm</div>
            </div>
            <div className=" w-1/6 h-48 border border-black border-t-0 border-r-0 border-b-0 pl-3">
              <p className=" text-sm">FLOORS</p>
              <div>3</div>
            </div>
            <div className=" w-1/6 h-48 border border-black border-t-0 border-r-0 border-b-0 pl-3 ">
              <p className=" text-sm">TENANTS</p>
              <div>Svitzer Australia</div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" mt-16">
          <img src="../../public/images/Tranquil/Exterior.jpg" alt="Image 1" />
          <div className="flex flex-col justify-around">
            <img
              data-aos="fade-up"
              className=" w-1/2 mt-5 mb-5"
              src="../../public/images/Tranquil/TranquilInteriors.jpg"
              alt="Image 1"
            />
          </div>
        </div>
        <div className=" w- bg-slate-200">
          <div data-aos="fade-up" className=" SerenityFeatures flex flex-col mt-16 mb-16 ">
            <div data-aos="fade-up" className=" ml-6 text-4xl text-gray-700 ">
              PROPERTY FEATURES
            </div>
            <div
              data-aos="fade-up"
              className=" flex flex-row justify-around mt-10"
            >
              <div className=" grid grid-cols-3 gap-4 w-8/12 h-48 border border-black border-t-0 border-r-0 border-b-0 ">
                <div className="pl-5 text-lg text-gray-700 flex flex-row items-center">
                  <CiTimer className=" mr-2" /> 24/7 Building Manager
                </div>
                <div className="pl-5 text-lg text-gray-700 flex flex-row items-center">
                  <CiWifiOn className=" mr-2" />
                  NBN & Fibre to the building
                </div>
                <div className="pl-5 text-lg text-gray-700 flex flex-row items-center">
                  <MdOutlineShower className=" mr-2" />
                  Shower
                </div>
                <div className="pl-5 text-lg text-gray-700 flex flex-row items-center">
                  <LuParkingCircle className=" mr-2" />
                  Parking & Storage
                </div>
                <div className="pl-5 text-lg text-gray-700 flex flex-row items-center">
                  <MdAir className=" mr-2" />
                  Individual Air Conditioning
                </div>
                <div className="pl-5 text-lg text-gray-700 flex flex-row items-center">
                  <LuSofa className=" mr-2" />
                  Private Commercial foyer and lift
                </div>
                <div className="pl-5 text-lg text-gray-700 flex flex-row items-center">
                  <GiDoubleStreetLights className=" mr-2" />
                  Street Frontage
                </div>
              </div>
              <div className=" w-3/12 h-48 border border-black border-t-0 border-r-0 border-b-0"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
