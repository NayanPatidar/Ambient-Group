import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Properties from "./pages/Properties.jsx";
import "./App.css";
import SerenityCottage from "./pages/Serenity.jsx";

export default function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseClicked, setIsMouseClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    // console.log(" Mouse is over the Properties");
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    // console.log(" Mouse has left the Properties");
  };

  const handleMouseClick = () => {
    setIsMouseClicked(true);
    // console.log("Mouse Clicked on the properties");
  };

  const handleHomeMouseClick = (dataFromChild) => {
    setIsMouseClicked(`${dataFromChild} : We Got This from the Child `);
    setIsMouseClicked(false);
  };

  useEffect(() => {
    if (isMouseClicked) {
      document.body.classList.add("hide-scroll-bar");
    } else {
      document.body.classList.remove("hide-scroll-bar");
    }
  }, [isMouseClicked]);

  return (
    <div className="background-container z-0">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}
      >
        <Properties isMouseOver={isMouseOver} isMouseClicked={isMouseClicked} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMouseOver={isMouseOver}
                MouseClicked={isMouseClicked}
                handleHomeClick={handleHomeMouseClick}
              />
            }
          />
          <Route
            path="/property/auckland/serenitycottage"
            element={
              <SerenityCottage
                isMouseOver={isMouseOver}
                MouseClicked={isMouseClicked}
                handleHomeClick={handleHomeMouseClick}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
