import React from "react";
import { GoDotFill } from "react-icons/go";

export default function Properties() {
  return (
    <div className=" bg-orange-400 w-screen h-screen">
      <div className=" flex flex-row">
        <div className=" bg-white w-1/5 h-screen"></div>
        <div className=" flex flex-col w-4/5">
          <div className=" flex flex-row justify-between text-white text-xl font-thin bg-red-500 h-40 p-6">
            <div className=" w-11/12 ">OUR PROPERTIES</div>
            <div className=" flex flex-row rotate-90 text-sm">
              <GoDotFill className=" pt-4 w-max h-max   text-3xl" />
              <span className="w-max h-max pt-5  text-center">PROPERTIES</span>
            </div>
          </div>
          <div className=" h-28 bg-yellow-300 flex flex-col">
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
