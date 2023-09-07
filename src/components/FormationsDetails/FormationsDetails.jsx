import React from "react";
import s from "./style.module.scss";

function FormationsDetails(props) {
  return (
    <div className={s.container} id="formations">
      <h3>nos formations</h3>
      <ul>
        <li>formation aux premiers secours</li>
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
