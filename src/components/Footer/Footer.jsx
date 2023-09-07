import React from "react";
import s from "./style.module.scss";

function Footer(props) {
  return (
    <div className={s.container}>
      <div className={s.adresse}>
        <h4>nos coordonnées</h4>
        <p>
          CD 11 FFSS
          <br />
          1 lieu dit le Planal
          <br />
          11200 Saint-André-de-Roquelongue
          <br />
          Tél : 06-33-07-77-68
        </p>
      </div>
      <div className={s.liensFFSS}>
        <h4>l'assiociation nationale</h4>
        <a href="https://www.ffss.fr/">FFSS.fr</a>
      </div>
      <div className={s.reseauxSociaux}>
        <h4>retrouvez nous sur les réseaux</h4>
        <div className={s.reseaux}>
          <a href="https://www.facebook.com/profile.php?id=100057139852520&sk=photos">
            <img src="./img/facebook.png" alt="logo facebook" />
          </a>
          <a href="https://www.instagram.com/cd_11_ffss_ars/">
            <img src="./img/instagram.png" alt="logo instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
