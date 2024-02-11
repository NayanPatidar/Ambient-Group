import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Properties from "./components/pages/Properties";

export default function App() {
  return (
    <div className=" bg-orange-400">
      <div className="background-container">
          <Properties />
      </div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
