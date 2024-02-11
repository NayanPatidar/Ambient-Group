import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import "../../components/lists/ListProperties.css";
export default function Properties() {
  const [selectedItem, setSelectedItem] = useState("ALL");
  const [selectedTypeProperty, setTypeProperty] = useState("ALL PROPERTIES");

  const handlePropertyTypeClick = (item) => {
    setTypeProperty(item);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const items = [
    "ALL",
    "PADDINGTON",
    "BALMAIN",
    "ROSEBERY",
    "SURRY",
    "HILLS",
    "MASCOT",
    "SYDNEY",
    "WAVERLEY",
    "BONDI",
  ];

  const itemsTypes = ["ALL PROPERTIES", "COMMERCIAL", "RESIDENTIAL"];

  return (
    <div
      className=" w-screen h-screen z-0 fixed"
      style={{ backgroundColor: "#EB8B2E" }}
    >
      <div className=" flex flex-row">
        <div className=" bg-white w-1/5 h-screen"></div>
        <div className=" flex flex-col w-4/5">
          <div className=" flex flex-row justify-between text-black text-xl font-medium h-40 p-6">
            <div className=" w-11/12 ">OUR PROPERTIES</div>
            <div className=" mt-1">
              <div className=" w-7 flex flex-col justify-start items-center text-sm">
                <GoDotFill className=" text-white mb-8 w-8 rotate-90 text-2xl" />
                <span className="propertiesMark  w-26  rotate-90">
                  PROPERTIES
                </span>
              </div>
            </div>
          </div>

          <div className=" h-28 flex flex-col gap-4 text-md font-semidark">
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
          <div></div>
        </div>
      </div>
    </div>
  );
}
