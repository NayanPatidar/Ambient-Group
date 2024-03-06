import React from "react";
import "../../styles/nav.css";

const Navbar = () => {
  const HomePage = () => {
    window.location.href = `/`;
  };

  const toNavBarLinks = (route) => {
    window.location.href = `/${route}`;
  };

  return (
    <div className="navigation-bar">
      <div className="flex flex-row justify-between items-center mt-8 ">
        <div className="Title text-white font-thin pl-8 cursor-pointer items-center self-center pr-5">
          <span className=" font-bold" onClick={HomePage}>
            AMBIENT
          </span>{" "}
          GROUP
        </div>

        <div className="NavSites text-white">
          <ul className="flex flex-row space-x-4  lg:gap-8 md:gap-8 gap-1 items-center">
            <li className="">
              <a
                className="navTags"
                href="#"
                onClick={() => toNavBarLinks("investors")}
              >
                INVESTORS
              </a>
            </li>
            <li>
              <a
                className="navTags"
                href="#"
                onClick={() => toNavBarLinks("about")}
              >
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
