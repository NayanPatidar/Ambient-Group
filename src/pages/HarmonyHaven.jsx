import React, { useContext } from "react";
import "../styles/harmonyhaven.css";
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
import { DrawerContext } from "../Context/Drawer";

export default function HarmonyHavenPage() {
  const { onTopPage, setIsOnTopPage, isDrawerAllowed, isOnHover } =
    useContext(DrawerContext);

  const handleTopPageClicked = () => {
    setIsOnTopPage(true);
  };

  const handleScrollClick = () => {
    console.log("Clicked on scroll");
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`HarmonyHavenMain flex flex-col justify-center items-center bg-white z-1 relative p-0 m-0          
      ${onTopPage ? "" : "HideOn"}
      ${isDrawerAllowed ? "DrawOn" : "DrawOff"}
      ${isOnHover ? "onHover" : ""}
        `}
      onClick={() => handleTopPageClicked()}
    >
      <div className=" HarmonyHavenBackground flex flex-col justify-between bg-cover bg-center h-screen w-full ">
        <Navbar />

        <div
          data-aos="fade-up"
          className="line font-body font-thin text-white pt-40 w-5/6 pl-8 "
        >
          <h2 className="titleLineUp font-thin text-xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-6xl">
            HARMONY HAVEN
          </h2>
          <p className=" titleLineUp font-thin text-lg">
            1st Street, West City, Nairobi
          </p>
        </div>
        <div className="flex flex-row items-center text-white text-xl gap-4 h-24 border border-white border-b-0 border-r-0 border-l-0 pl-8">
          <GoArrowDown />
          <p
            className=" text-xl underline underline-offset-8 decoration-1 decoration-transparent hover:decoration-white duration-300 "
            onClick={() => handleScrollClick()}
          >
            SCROLL TO SEE MORE
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className=" HarmonyHavenDescription flex flex-col justify-center p-10"
      >
        <h3 className=" describeHarmony lg:text-2xl md:text-2xl text-lg lg:w-7/12 md:w-7/12 w-full lg:pl-10 md:pl-10 ">
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
          <div className=" lg:ml-10 md:ml-10">KEY INFO</div>
          <div className="flex lg:flex-row md:flex-row flex-col gap-3 justify-start w-11/12 lg:ml-10 md:ml-10 mt-5">
            <div className="lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">TYPE</p>
              <div className=" text-2xl">Residential</div>
            </div>
            <div className="mt-5 lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">CONSTRUCTION DATE</p>
              <div>2000</div>
            </div>
            <div className="mt-5 lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">SIZE</p>
              <div>620sqm</div>
            </div>
            <div className="mt-5 lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3">
              <p className=" text-sm">FLOORS</p>
              <div>3</div>
            </div>
            <div className="mt-5 lg:w-1/6 bd:w-1/6  lg:h-48 md:h-48 border border-black border-t-0 border-r-0 lg:border-b-0 md:border-b-0 border-b-1 pl-3 ">
              <p className=" text-sm">TENANTS</p>
              <div>Svitzer Australia</div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" mt-16">
          <img
            data-aos="fade-up"
            src="/images/HarmonyHaven/House.jpg"
            alt="Image 1"
          />
          <div className="flex flex-col justify-around">
            <img
              className=" lg:w-1/2 md:w-1/2 mt-5 mb-5"
              src="https://www.gogetyourself.com/wp-content/uploads/2021/06/Exposed-Brick-Interior-Ideas.jpg"
              alt="Image 1"
            />{" "}
            <img
              className=" self-end lg:w-1/2 md:w-1/2 mt-5 mb-5"
              src="https://www.aprilgroup.com.au/media/3myneag1/commercial-entry-walkway.jpg"
              alt="Image 1"
            />
          </div>
        </div>
        <div className=" w- bg-slate-200">
          <div
            data-aos="fade-up"
            className="  SerenityFeatures flex flex-col mt-16 mb-16 "
          >
            <div data-aos="fade-up" className=" ml-6 text-4xl text-gray-700 ">
              PROPERTY FEATURES
            </div>
            <div
              data-aos="fade-up"
              className=" flex flex-row justify-around mt-10"
            >
              <div className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 lg:w-8/12 md:w-8/12 w-fullborder border-black border-t-0 border-r-0 border-b-0 ">
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
              <div className=" w-3/12 h-48 border border-black border-t-0 border-r-0 border-b-0 border-l-0 "></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
