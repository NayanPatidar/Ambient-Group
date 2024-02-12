import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Properties from "./pages/Properties.jsx";

export default function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="background-container z-0">
      <Properties
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isMouseOver={isMouseOver} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
