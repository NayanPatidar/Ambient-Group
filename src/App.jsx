import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Properties from "./pages/Properties.jsx";
import "./App.css";
import SerenityCottage from "./pages/Serenity.jsx";
import PinesManorPage from "./pages/PinesManor.jsx";
import HarmonyHavenPage from "./pages/HarmonyHaven.jsx";
import TranquilRetreatPage from "./pages/TranquilRetreat.jsx";
import EnchartedPage from "./pages/Encharted.jsx";
import MoonlitMiragePage from "./pages/MoonlitMirage.jsx";
import RusticBlissPage from "./pages/RusticBliss.jsx";
import EmeraldOasisPage from "./pages/EmeraldOasis.jsx";
import Investors from "./pages/Investors.jsx";
import About from "./pages/About.jsx";
import { DrawerContext } from "./Context/Drawer.jsx";

export default function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseClicked, setIsMouseClicked] = useState(false);
  const [isDrawerAllowed, setDrawerAllow] = useState(false);
  const [onTopPage, setIsOnTopPage] = useState(true);

  useEffect(() => {
    if (isMouseClicked) {
      document.body.classList.add("hide-scroll-bar");
    } else {
      document.body.classList.remove("hide-scroll-bar");
    }
  }, [isMouseClicked]);

  return (
    <div className="background-container z-0">
      <DrawerContext.Provider value={{ onTopPage, setIsOnTopPage }}>
        <div>
          <Properties />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/property/auckland/serenitycottage"
              element={<SerenityCottage />}
            />
            <Route
              path="/property/auckland/pinesmanor"
              element={<PinesManorPage />}
            />
            <Route
              path="/property/nairobi/harmonyhaven"
              element={<HarmonyHavenPage />}
            />
            <Route
              path="/property/amsterdam/tranquilretreat"
              element={<TranquilRetreatPage />}
            />
            <Route
              path="/property/surry/enchartedhideway"
              element={<EnchartedPage />}
            />
            <Route
              path="/property/singapore/moonlitmirage"
              element={<MoonlitMiragePage />}
            />
            <Route
              path="/property/buenosaires/rusticbliss"
              element={<RusticBlissPage />}
            />
            <Route
              path="/property/sydney/emeraldoasis"
              element={<EmeraldOasisPage />}
            />
            <Route path="/investors" element={<Investors />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </DrawerContext.Provider>
    </div>
  );
}
