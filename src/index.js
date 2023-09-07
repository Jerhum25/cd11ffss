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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
