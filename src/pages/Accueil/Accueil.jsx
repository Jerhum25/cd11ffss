import React from "react";
import s from "./style.module.scss";
import Banniere from "../../components/Banniere/Banniere";
import PresentationAsso from "../../components/PresentationAsso/PresentationAsso";
import Formations from "../../components/FormationsDetails/FormationsDetails";
import Programme from "../../components/ProgrammeDetails/ProgrammeDetails";

function Accueil(props) {
  return (
    <div className={s.container}>
      <Banniere />
      <PresentationAsso />
      <Formations />
      <Programme />
    </div>
  );
}

export default Accueil;
