import React from "react";
import s from "./style.module.scss";

function FormationsDetails(props) {
  return (
    <div className={s.container} id="formations">
      <h3>nos formations</h3>
      <p>Cliquez sur une formation pour voir le détail</p>
      <ul>
        <li><a href="/psc1">formation aux premiers secours PSC1</a></li>
        <li><a href="/pse1">formation aux premiers secours PSE1</a></li>
        <li><a href="/pse2">formation aux premiers secours PSE2</a></li>
        <li><a href="/mns">devenir maître nageur sauveteur</a></li>
        <li><a href="/sst">sauveteur secouriste du travail</a></li>
        <li><a href="secours_aquatiques">secours aquatiques</a></li>
        <li><a href="/prevention_risques">prévention des risques</a></li>
        <li><a href="/secours_equipe">secours en équipe</a></li>
        <li><a href="/devenir_formateur">devenir formateur</a></li>
      </ul>
    </div>
  );
}

export default FormationsDetails;
