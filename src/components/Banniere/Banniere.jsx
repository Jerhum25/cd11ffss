import React from "react";
import s from "./style.module.scss";
import Carrousel from'../Carrousel/Carrousel'

function Banniere(props) {
  return (
    <div className={s.container}>
      <h2 className={s.titre}>Comité Départemental FFSS de l'Aude</h2>
      <Carrousel/>
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
