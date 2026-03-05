import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Bnav from "./components/Bnav/Bnav.jsx";

import Accueil from "./pages/Accueil.jsx";
import News from "./pages/News.jsx";
import Evenements from "./pages/Evenements.jsx";
import Apropos from "./pages/Apropos.jsx";



function App() {

  return (
      <div>
        <BrowserRouter>
          <nav className="nav-container">
            <Bnav text="Accueil" route="/"></Bnav>
            <Bnav text="News" route="/news"></Bnav>
            <Bnav text="Évènements" route="/evenements"></Bnav>
            <Bnav text="À propos" route="/apropos"></Bnav>
          </nav>

          <Routes>
            <Route path="/" element={<Accueil/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/evenements" element={<Evenements/>} />
            <Route path="/apropos" element={<Apropos/>} />
          </Routes>
        </BrowserRouter>

      </div>

  )
}

export default App
