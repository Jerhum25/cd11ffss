import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import App from "./App";
import Association from './pages/Association/Association'
import Formations from "./pages/Formations/Formations";
import Programme from "./pages/Programme/Programme";
import Contact from "./pages/Contact/Contact";
import FormationPsc1 from "./pages/FormationPsc1/FormationPsc1";
import FormationPse1 from "./pages/FormationPse1/FormationPse1";
import FormationPse2 from "./pages/FormationPse2/FormationPse2";
import FormationMNS from "./pages/FormationMNS/FormationMNS";
import FormationSST from "./pages/FormationSST/FormationSST";
import FormationSecAqua from "./pages/FormationSecAqua/FormationSecAqua";
import FormationPrevRisques from "./pages/FormationPrevRisques/FormationPrevRisques";
import FormationSecEquipe from "./pages/FormationSecEquipe/FormationSecEquipe";
import FormationDevenirFormateur from "./pages/FormationDevenirFormateur/FormationDevenirFormateur";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Accueil />} />
          <Route path="/association" element={<Association/>} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/psc1" element={<FormationPsc1 />} />
          <Route path="/pse1" element={<FormationPse1 />} />
          <Route path="/pse2" element={<FormationPse2 />} />
          <Route path="/mns" element={<FormationMNS />} />
          <Route path="/sst" element={<FormationSST />} />
          <Route path="/secours_aquatiques" element={<FormationSecAqua />} />
          <Route path="/prevention_risques" element={<FormationPrevRisques />} />
          <Route path="/secours_equipe" element={<FormationSecEquipe />} />
          <Route path="/devenir_formateur" element={<FormationDevenirFormateur />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
