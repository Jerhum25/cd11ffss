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
          <li className={s.itemMenu} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/formations">nos formations</a>
          </li>
          <li className={s.itemMenu} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/programme">notre programme</a>
          </li>
          <li className={s.itemMenu} onClick={() => setOpenMenus(!openMenus)}>
            <a href="/contact">nous contacter</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
