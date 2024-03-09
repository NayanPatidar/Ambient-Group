import React, { useEffect } from "react";
import "../../styles/nav.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HiOutlineViewList } from "react-icons/hi";

const Navbar = () => {
  const matches = useMediaQuery("(min-width:1180px)");

  const HomePage = () => {
    window.location.href = `/`;
  };

  const toNavBarLinks = (route) => {
    window.location.href = `/${route}`;
  };

  const viewListClicker = () => {
    console.log("Clicker !!");
  };

  return (
    <div className="navigation-bar">
      <div className="flex flex-row justify-between items-center mt-8 ">
        <div className="Title text-white font-thin cursor-pointer items-center self-center pl-3">
          <span className=" font-bold" onClick={HomePage}>
            AMBIENT
          </span>{" "}
          GROUP
        </div>

        <div className="NavSites text-white">
          <ul className="flex flex-row space-x-4  lg:gap-6 md:gap-2 gap-0 items-center justify-center">
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
            <li>
              {!matches ? (
                <a>
                  <HiOutlineViewList
                    className=" scale-150"
                    onClick={() => viewListClicker()}
                  />
                </a>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
