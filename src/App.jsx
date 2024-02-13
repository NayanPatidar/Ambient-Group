import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Properties from "./pages/Properties.jsx";

export default function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseClicked, setIsMouseClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    console.log(" Mouse is over the Properties");
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    console.log(" Mouse is left the Properties");
  };

  const handleMouseClick = () => {
    setIsMouseClicked(true);
    console.log("Mouse Clicked on the properties");
  };

  return (
    <div className="background-container z-0">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}
      >
        <Properties isMouseOver={isMouseOver} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home isMouseOver={isMouseOver} isMouseClicked={isMouseClicked} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
