import React from "react";
import s from "./style.module.scss";
import Banniere from "../../components/Banniere/Banniere";
import Carrousel from "../../components/Carrousel/Carrousel";

function Accueil(props) {
  return (
    <div className={s.container}>
      <Banniere />
      {/* <Carrousel/> */}
    </div>
  );
}

export default Accueil;
