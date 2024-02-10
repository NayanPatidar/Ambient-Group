import React from "react";
import { GoChevronDown } from "react-icons/go";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="flex flex-row justify-between items-center mt-8 pl-8">
        <div className="text-white text-2xl font-thin pl-1">
          <span className=" font-bold">AMBIENT</span> INTERIORS
        </div>

        <div className=" text-white mr-10">
          <ul className="flex flex-row space-x-4 gap-10 items-center">
            <li className="">
              <a href="#">INVESTORS</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">AVAILABLE SPACE </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
