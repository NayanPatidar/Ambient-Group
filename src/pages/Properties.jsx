import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import ImageGallery from "../components/gallery/imageGallery";
import data from "../backend/db/detailsProp.jsx";
import "../styles/listProperties.css";

export default function Properties({ isMouseOver, isMouseClicked }) {
  const [selectedItem, setSelectedItem] = useState("ALL");
  const [selectedTypeProperty, setTypeProperty] = useState("ALL PROPERTIES");

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
    // console.log(`${item} : isSelected from the Item Type `);
    filterImages();
  };

  const handlePropertyTypeClick = (type) => {
    setTypeProperty(type);
    // console.log(`${type} : isSelected from the Property Type `);
  };

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
      className="MainProperty w-screen   h-screen fixed overflow-auto overflow-y-scroll "
      style={{
        backgroundColor: isMouseClicked ? "#EB8B2E" : "black",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className=" flex flex-row justify-end">
        <div className="MainPropertyData flex flex-col justify-between">
          <div className=" flex flex-row justify-between text-black text-xl font-medium h-40 pl-10 pt-8">
            <div className=" w-11/12 ">OUR PROPERTIES</div>
            <div className=" mt-1">
              <div className="PropHeadingDetails w-7 flex flex-col justify-start items-center text-sm mr-8  ">
                <GoDotFill className=" mb-8 w-8 rotate-90 text-2xl" />
                <span
                  className={`propertiesMark w-26  rotate-90 
                  ${isMouseOver ? "GetUnderline" : ""}
                  `}
                >
                  PROPERTIES
                </span>
              </div>
            </div>
          </div>

          <div className=" h-28 flex flex-col gap-4 text-md font-semidark p-6">
            <div className=" pl-5">
              <ul
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
                      color: selectedTypeProperty === item ? "white" : "black",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className=" ">
              <div className=" pl-5">
                <div>
                  <ul className=" flex flex-row gap-4 ">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" pl-11 mb-10">
            <ImageGallery data={filterImages()} />
          </div>
        </div>
      </div>
    </div>
  );
}
