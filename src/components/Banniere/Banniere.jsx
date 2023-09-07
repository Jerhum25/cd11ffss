import React from "react";
import s from "./style.module.scss";

function Banniere(props) {
  return (
    <div className={s.container}>
      <h2 className={s.titre}>
      Comité Départemental de l'Aude de la FFSS
      </h2>
      <img src="./img/baniere.jpg" alt="bannière" />
      <p>
        "Soyez prêt à sauver des vies ! Rejoignez notre association de
        secourisme et apprenez les gestes qui font la différence en situation
        d'urgence. Ensemble, faisons de chaque instant une opportunité de sauver
        une vie."
      </p>
    </div>
  );
}

export default Banniere;
