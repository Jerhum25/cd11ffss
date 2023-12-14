import React, { useState } from "react";
import s from "./style.module.scss";

function Nav(props) {
  const [openMenus, setOpenMenus] = useState(false);
  const toggleMenu = () => setOpenMenus(!openMenus);

  return (
    <div className={s.container}>
      <div className={s.menuMobile} onClick={toggleMenu}>
        <div className={s.line}></div>
      </div>
      <nav className={!openMenus ? s.nav : s.openMenu}>
        <ul>
          <li className={s.itemMenu} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/">accueil</a>
          </li>
          <li className={s.itemMenu} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/association">notre association</a>
          </li>
          <li className={s.formations} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/formations">nos formations</a>
            <ul className={s.listeFormations}>
            <li className={s.formation}><a href="/psc1">PSC1 </a></li>
            <li className={s.formation}><a href="/pse1">PSE1</a></li>
            <li className={s.formation}><a href="/pse2">PSE2</a></li>
            <li className={s.formation}><a href="/mns">Maître Nageur Sauveteur</a></li>
            <li className={s.formation}>
              <a href="/sst">Sauveteur Secouriste du Travil</a>
            </li>
            <li className={s.formation}><a href="/secours_aquatiques">Secours Aquatiques</a></li>
            <li className={s.formation}><a href="/prevention_risques">Prévention des risques</a></li>
            <li className={s.formation}><a href="/secours_equipe">Secours en Equipe</a></li>
            <li className={s.formation}><a href="/devenir_formateur">Devenir Formateur</a></li>
          </ul>
          </li>
          {/* <li className={s.itemMenu} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/programme">notre programme</a>
          </li> */}
          <li className={s.itemMenu} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/contact">nous contacter</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
