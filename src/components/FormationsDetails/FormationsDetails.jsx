import React from "react";
import s from "./style.module.scss";

function FormationsDetails(props) {
  return (
    <div className={s.container} id="formations">
      <h3>nos formations</h3>
      <ul>
        <li><a href="/psc1">formation aux premiers secours PSC1</a></li>
        <li><a href="/pse1">formation aux premiers secours PSE1</a></li>
        <li><a href="/pse2">formation aux premiers secours PSE2</a></li>
        <li>devenir maître nageur sauveteur</li>
        <li>sauveteur secouriste du travail</li>
        <li>secours aquatiques</li>
        <li>prévention des risques</li>
        <li>secours en équipe</li>
        <li>devenir formateur</li>
      </ul>
    </div>
  );
}

export default FormationsDetails;
