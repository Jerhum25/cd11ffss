import React from "react";
import s from "./style.module.scss";
import Banniere from "../../components/Banniere/Banniere";

function Accueil(props) {
  return (
    <div className={s.container}>
      <Banniere />
    </div>
  );
}

export default Accueil;
