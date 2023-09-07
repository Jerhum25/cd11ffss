import React from "react";
import s from "./style.module.scss";
import FormationsDetails from "../../components/FormationsDetails/FormationsDetails";

function Formations(props) {
  return (
    <div className={s.container}>
      <FormationsDetails />
    </div>
  );
}

export default Formations;
