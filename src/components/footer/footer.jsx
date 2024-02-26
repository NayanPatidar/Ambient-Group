import React from "react";

export default function Footer() {
  return (
    <div className=" flex flex-row justify-around h-96 w-full bg-black pt-16 border-white border-t z-10">
      <div className="w-1/4 h-56 text-white flex flex-col justify-between">
        <span>
          <span className=" font-bold lg:text-lg md:text-lg sm:text-lg text-">
            AMBIENT
          </span>{" "}
          INTERIORS
        </span>
        <div className=" text-xs">
          MUMBAI'S PREMIER INTERIOR DESIGN LICENSED AND ACCREDITED - LICENCE NO:
          505959 <br></br>WEBSITE CRAFTED BY AMBIENT INTERIOR
        </div>
      </div>
      <div className="w-1/4 h-56 border-l border-white lg:text-sm md:text-sm sm:text-sm text-xs text-white pl-5 font-medium flex flex-col justify-between">
        <div>
          <p className=" pb-3">GET IN TOUCH </p>
          <p className="font-serif">
            Level 6, 50 Holt Street,<br></br> Surry Hills, NSW, 2010
          </p>
        </div>
        <a className="text-orange-400">VIVEK, MD </a>
      </div>
      <div className="w-1/4 h-56 border-l border-white lg:text-sm md:text-sm sm:text-sm   text-xs text-white pl-5 font-medium flex flex-col justify-between">
        <div>
          <p className=" pb-3">ENQUIRIES</p>
          <p className="font-serif">General enquiries</p>
        </div>
        <a className="text-orange-400">VINEET, SALES MANAGER </a>
      </div>
    </div>
  );
}
