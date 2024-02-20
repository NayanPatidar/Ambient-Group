import React from "react";
import "../styles/investors.css";

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
      className={`flex flex-col justify-center items-center bg-white z-1 absolute          
        ${isMouseOver ? "left-onHover" : ""}
        ${MouseClicked ? "left-HideOn" : "left-HideOff"}`}
      onClick={handleClick}
    >
      <div className="InvestorsBackground h-screen "></div>
    </div>
  );
}
