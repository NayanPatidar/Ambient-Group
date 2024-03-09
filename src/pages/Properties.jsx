import React, { useContext, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import ImageGallery from "../components/gallery/imageGallery";
import data from "../backend/db/detailsProp.jsx";
import "../styles/listProperties.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HiOutlineViewList } from "react-icons/hi";
import { DrawerContext } from "../Context/Drawer.jsx";

export default function Properties({}) {
  const [selectedItem, setSelectedItem] = useState("ALL");
  const [selectedTypeProperty, setTypeProperty] = useState("ALL PROPERTIES");
  const matches = useMediaQuery("(min-width:1180px)");
  const { onTopPage, setIsOnTopPage, isDrawerAllowed, setDrawerAllow  } = useContext(DrawerContext);

  const items = [
    "ALL",
    "AUCKLAND",
    "NAIROBI",
    "AMSTERDAM",
    "SURRY",
    "SINGAPORE",
    "BUENOS AIRES",
    "SYDNEY",
  ];

  const itemsTypes = ["ALL PROPERTIES", "COMMERCIAL", "RESIDENTIAL"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    filterImages();
  };

  const handlePropertyTypeClick = (type) => {
    setTypeProperty(type);
  };

  const PropertyClick = () => {
    setIsOnTopPage(false);
  }

  const ExitViewList = () => {
    setDrawerAllow(false);
  }

  const filterImages = () => {
    const filteredData = data.filter((item) => {
      if (selectedTypeProperty === "ALL PROPERTIES") {
        if (selectedItem === "ALL") {
          return data;
        } else {
          return item.place == selectedItem;
        }
      } else {
        if (selectedItem === "ALL" && selectedTypeProperty === item.type) {
          return data;
        } else {
          return (
            item.place == selectedItem && item.type == selectedTypeProperty
          );
        }
      }
    });

    return filteredData;
  };

  return (
    <div
      className="MainProperty w-screen h-screen fixed overflow-auto overflow-y-scroll "
      style={{
        backgroundColor: onTopPage ? "black" : "#EB8B2E",
        transition: "background-color 0.3s ease",
      }}
      onClick={() => PropertyClick()}
    >
      <div className=" flex flex-row justify-end">
        <div className=" flex flex-col justify-between">
          <div className=" flex flex-row justify-between text-black text-xl font-medium mt-8">
            {!matches ? (
              <span>
                <HiOutlineViewList className=" w-auto scale-150 text-white h-6 pl-4" onClick={() => ExitViewList()}/>
              </span>
            ) : null}
            <div className="flex w-11/12 text-white pl-5 h-8">
              OUR PROPERTIES
            </div>
            <div className=" mt-1">
              <div>
                {matches ? (
                  <div className="PropHeadingDetails w-7 flex flex-col justify-start items-center text-sm mr-8  ">
                    <GoDotFill className=" mb-8 w-8 rotate-90 text-2xl" />
                    <span
                      className={`propertiesMark w-26  rotate-90 
                  `}
                      // ${isMouseOver ? "GetUnderline" : ""}
                    >
                      PROPERTIES
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-4 text-md font-semidark p-6">
            <div>
              <ul>
                {matches ? (
                  <div
                    className="flex flex-row gap-8"
                    style={{ fontWeight: 400, fontSize: 16 }}
                  >
                    {itemsTypes.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handlePropertyTypeClick(item)}
                        className="propItem"
                        style={{
                          fontWeight: 400,
                          color:
                            selectedTypeProperty === item ? "white" : "black",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </div>
                ) : null}
              </ul>
            </div>

            <div>
              <ul>
                {matches ? (
                  <div className=" flex flex-row gap-4 ">
                    <span
                      className=" "
                      style={{ fontWeight: 400, fontSize: 16 }}
                    >
                      FILTER BY:
                    </span>
                    {items.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleItemClick(item)}
                        className="propItem"
                        style={{
                          fontWeight: 400,
                          color:
                            selectedItem === item
                              ? "white"
                              : "rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </div>
                ) : null}
              </ul>
            </div>
          </div>
          <div className="mb-10">
            <ImageGallery data={filterImages()} />
          </div>
        </div>
      </div>
    </div>
  );
}
