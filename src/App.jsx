import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Grainient from "./components/Grainient/Grainient.jsx";
import Accueil from "./pages/Accueil.jsx";
import News from "./pages/News.jsx";
import Evenements from "./pages/Evenements.jsx";
import Apropos from "./pages/Apropos.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}


function App() {
  return (
    <div className="app-shell">
      <Grainient
        color1="#e78f49"
        color2="#b03bc2"
        color3="#311bcd"
        timeSpeed={0.55}
        colorBalance={-0.13}
        warpStrength={0.85}
        warpFrequency={5.3}
        warpSpeed={2.3}
        warpAmplitude={50}
        blendAngle={26}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.06}
        grainScale={1.6}
        grainAnimated={false}
        contrast={1}
        gamma={1.2}
        saturation={1.1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/news" element={<News />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
