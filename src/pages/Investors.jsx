import React from "react";
import "../styles/investors.css";
import Navbar from "../components/navbar/nav";
import Footer from "../components/footer/footer";

export default function Investors({
  isMouseOver,
  MouseClicked,
  handleHomeClick,
}) {
  const handleClick = () => {
    handleHomeClick(false);
  };
  return (
    <div
      className={`InvestorsMain flex flex-col justify-center items-center bg-white z-1 absolute          
        ${isMouseOver ? "left-onHover" : ""}
        ${MouseClicked ? "left-HideOn" : "left-HideOff"}`}
      onClick={handleClick}
    >
      <div className="InvestorsBackground h-screen w-full">
        <Navbar />
        <div
          data-aos="fade-up"
          className="font-body font-thin text-white pt-48 w-4/6 pl-8"
        >
          <h2 className="titleLineUp font-thin text-5xl">
            ELEVATE YOUR PORTFOLIO WITH OUR PREMIUM PROPERTIES – NOT JUST A
            HOME, BUT A PROMISE OF SUBSTANTIAL RETURNS AND PROSPERITY.
          </h2>
        </div>
      </div>

      <div className=" bg-white p-10 flex flex-row w-full">
        <div className=" mt-20 w-2/3">
          <h2
            data-aos="fade-up"
            className=" font-thin text-3xl font-sans text-gray-800"
          >
            INVESTING WITH AMBIENT GROUP
          </h2>
          <p data-aos="fade-up" className=" text-2xl w-4/6 mt-3 text-gray-800">
            We cultivate and cultivate thriving commercial property investments
            globally, tailored for the April Group's success in diverse markets.
          </p>
        </div>
        <div className=" w-2/5">
          <img
            data-aos="fade-up"
            className=" w-5/6"
            src="../../public/images/Investors/Invest.jpg"
          />
        </div>
      </div>

      <div className=" bg-white p-10 flex flex-col w-full">
        <div data-aos="fade-up" className=" mt-20 w-5/6">
          <h2 className=" font-md text-3xl font-sans text-gray-800">
            HOW WE DO IT
          </h2>
          <p className=" text-xl font-thin w-5/6 mt-3 text-gray-800 ">
            Our approach is to source under-developed commercial assets within
            immediate proximity of heavy rail and infrastructure spending. Then
            renovate and intensively manage the asset to increase income and
            value.
          </p>
        </div>
        <div className=" w-2/5"></div>
      </div>
      <div className=" mt-5 w-full h-96 flex flex-row justify-around p-10">
        <div
          data-aos="fade-up"
          className=" w-1/4  border border-white border-b-0 border-r-0 border-l-0 border-t-black"
        >
          <div className="w-10 h-10 bg-orange-500 -translate-y-5 -translate-x-5 rounded-full pl-4 pt-2">
            1
          </div>
          <p className=" text-xl font-light">ACQUIRE PROPERTIES</p>
          <p className=" font-light">
            We secure overlooked buildings based on crucial factors such as
            efficiency, natural light, ergonomic design, and amenities.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="  w-1/4  border border-white border-b-0 border-r-0 border-l-0 border-t-black"
        >
          <div className="w-10 h-10 bg-orange-500 -translate-y-5 -translate-x-5 rounded-full pl-4 pt-2">
            2
          </div>
          <p className=" text-xl font-light">TRANSFORM & OPTIMIZE</p>
          <p className=" font-light">
            Through construction, innovative design, and strategic branding, we
            highlight the key strengths of our assets, delivering projects that
            people aspire to occupy. Our mission is to build spaces that help
            businesses attract and retain top talent.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="  w-1/4  border border-white border-b-0 border-r-0 border-l-0 border-t-black"
        >
          <div className="w-10 h-10 bg-orange-500 -translate-y-5 -translate-x-5 rounded-full pl-4 pt-2">
            3
          </div>
          <p className=" text-xl font-light">FOSTER COMMUNITY CREATION</p>
          <p className=" font-light">
            By integrating design, brand, and exceptional services, we cultivate
            vibrant vertical office communities.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="  w-1/4  border border-white border-b-0 border-r-0 border-l-0 border-t-black"
        >
          <div className="w-10 h-10 bg-orange-500 -translate-y-5 -translate-x-5 rounded-full pl-4 pt-2">
            4
          </div>
          <p className=" text-xl font-light">CONTINUOUS ENHANCEMENT</p>
          <p className=" font-light">
            Our commitment extends beyond acquisition; we implement ongoing
            programs across all our sites, ensuring continuous upgrades and
            updates.
          </p>
        </div>
      </div>

      <div className=" w-full bg-orange-500 p-10 flex flex-col">
        <div data-aos="fade-up" className=" text-4xl mt-8">
          FEATURED ADVANTAGES
        </div>
        <div className=" flex flex-row w-full mt-24">
          <div
            data-aos="fade-up"
            className=" w-1/3 flex flex-col p-6 border border-white border-b-0 border-r-0 border-l-black border-t-0"
          >
            <img
              className=" w-24"
              src="https://www.aprilgroup.com.au/media/toqg3tiu/advantages-capital-gain.svg"
            />
            <p className=" text-xl mt-5">INVESTMENT STRATEGY</p>
            <p className=" text-lg">
              Focussed to generate cashflow and capital gain
            </p>
          </div>
          <div
            data-aos="fade-up"
            className=" w-1/3 flex flex-col p-6 border border-white border-b-0 border-r-0 border-l-black border-t-0"
          >
            <img
              className=" w-24"
              src="https://www.aprilgroup.com.au/media/xdvnwd5u/advantages-portfolio.svg"
            />
            <p className=" text-xl mt-5">INVESTMENT STRATEGY</p>
            <p className=" text-lg">
              Focussed to generate cashflow and capital gain
            </p>
          </div>
          <div
            data-aos="fade-up"
            className=" w-1/3 flex flex-col p-6 border border-white border-b-0 border-r-0 border-l-black border-t-0"
          >
            <img
              className=" w-24"
              src="https://www.aprilgroup.com.au/media/tngjdgnr/advantage-record.svg"
            />
            <p className=" text-xl mt-5">INVESTMENT STRATEGY</p>
            <p className=" text-lg">
              Focussed to generate cashflow and capital gain
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
