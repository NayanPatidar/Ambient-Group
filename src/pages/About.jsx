import React from "react";
import "../styles/about.css";
import Navbar from "../components/navbar/nav";
import Footer from "../components/footer/footer";

function About({ isMouseOver, MouseClicked, handleHomeClick }) {
  const handleClick = () => {
    handleHomeClick(false);
  };
  return (
    <div
      className={`AboutMain flex flex-col justify-center items-center bg-white z-1 relative p-0 m-0          
        ${isMouseOver ? "left-onHover" : ""}
        ${MouseClicked ? "left-HideOn" : "left-HideOff"}`}
      onClick={handleClick}
    >
      <div className="AboutBackground flex flex-col bg-cover bg-center h-screen">
        <Navbar />
        <div
          data-aos="fade-up"
          className="font-body font-thin text-white pt-48 pl-8"
        >
          <h2 className="titleLineUp sm:pt-10 md:pt-5 pt-5 text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-6xl">
            CREATING VERTICAL BUSINESS COMMUNITIES
          </h2>
        </div>
      </div>

      <div className=" bg-white p-10 flex lg:flex-row md:flex-row flex-col w-full">
        <div className=" mt-20 lg:w-2/3 md:w-2/3">
          <h2
            data-aos="fade-up"
            className=" font-thin text-3xl font-sans text-gray-800"
          >
            INVESTING WITH AMBIENT GROUP
          </h2>
          <p
            data-aos="fade-up"
            className=" pd-l-10 text-2xl lg:w-4/6 md:w-4/6 mt-3 text-gray-800"
          >
            We cultivate and cultivate thriving commercial property investments
            globally, tailored for the April Group's success in diverse markets.
          </p>
        </div>
        <div className=" lg:w-3/5 md:w-3/5 w-full">
          <img
            data-aos="fade-up"
            className=" lg:pt-16 md:pt-16 pt-8"
            src="../../public/images/About/crowd.jpg"
          />
        </div>
      </div>

      <div className=" bg-white p-10 flex flex-col w-full">
        <div data-aos="fade-up" className=" mt-20">
          <h2 className=" font-md text-3xl font-sans text-gray-800">
            OUR BUILDINGS COMBINED ARE HOME TO
          </h2>
          <div data-aos="fade-up" className=" flex lg:flex-row md:flex-row flex-col w-full mt-10">
            <div className=" lg:w-1/6 md:w-1/6 h-32 border border-black border-t-0 border-r-0 pl-3">
              <p className=" text-sm">BUSINESSES</p>
              <div className=" text-2xl pt-5">109 </div>
            </div>
            <div className=" lg:w-1/6 md:w-1/6 h-32 border border-black border-t-0 border-r-0 pl-3">
              <p className=" text-sm">OCCUPANTS</p>
              <div className=" text-2xl pt-5">3,800+</div>
            </div>
            <div className=" lg:w-1/6 md:w-1/6 h-32 border border-black border-t-0 border-r-0 pl-3">
              <p className=" text-sm">RETAIL, RESTAURANTS & CAFES</p>
              <div className=" text-2xl pt-5">15</div>
            </div>
            <div className=" lg:w-1/6 md:w-1/6 h-32 border border-black border-t-0 border-r-0 pl-3">
              <p className=" text-sm">NET LETTABLE AREA</p>
              <div className=" text-2xl pt-5">38,700sqm</div>
            </div>
            <div className=" lg:w-1/6 md:w-1/6 h-32 border border-black border-t-0 border-r-0 pl-3 ">
              <p className=" text-sm">TOTAL ASSET VALUES</p>
              <div className=" text-2xl pt-5">+$550M</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex lg:flex-row md:flex-row flex-col justify-center  w-full bg-stone-200 p-10">
        <div className=" lg:w-3/5 md:w-3/5 flex flex-col mt-10">
          <h2 data-aos="fade-up" className=" text-3xl">
            ABOUT AMBIENT GROUP
          </h2>
          <h3 data-aos="fade-up" className=" text-xl mt-16">
            WHO WE ARE
          </h3>
          <p data-aos="fade-up" className=" text-lg">
            In collaboration with international family offices, including
            pension funds and affluent individuals, we've been overseeing,
            acquiring, and enhancing the value of real estate assets since 2005.
          </p>
          <h3 data-aos="fade-up" className=" text-xl mt-8 ">
            WHAT WE DO
          </h3>
          <p data-aos="fade-up" className=" text-lg">
            Our mission is to assist you in building greater wealth, generating
            increased income, and diversifying your investment portfolio. With a
            vertically integrated business approach, our team members bring
            professional expertise across all facets of the property lifecycle.
          </p>
        </div>
        <div className="lg:w-2/5 md:w-2/5 lg:ml-10 md:ml-10 self-end flex flex-end flex-row justify-center mt-24">
          <img
            data-aos="fade-up"
            src="../../public/images/About/imageabout.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
