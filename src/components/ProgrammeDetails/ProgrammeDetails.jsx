import React from "react";
import s from "./style.module.scss";
import { prog } from "../../data/programme";

function ProgrammeDetails(props) {
  console.log(prog);

  return (
    <div className={s.container} id="programme">
      <h3>notre programme</h3>
      <div className={s.calendrier}>
        {prog.map((data, index) => (
          <div key={index}>
            <h4>{data.mois}</h4>
            <ul>
              <li><span>Semaine 1 : </span>{data.semaine1}</li>
              <li><span>Semaine 2 : </span>{data.semaine2}</li>
              <li><span>Semaine 3 : </span>{data.semaine3}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgrammeDetails;
