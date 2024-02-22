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
      <div className="flex flex-row justify-between items-center mt-8 pl-8">
        <div className="text-white text-2xl font-thin pl-1 cursor-pointer">
          <span className=" font-bold" onClick={HomePage}>
            AMBIENT
          </span>{" "}
          GROUP
        </div>

        <div className=" text-white mr-10">
          <ul className="flex flex-row space-x-4 gap-10 items-center">
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
